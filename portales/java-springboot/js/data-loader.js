/**
 * GESSOF Academy - Data Loader
 * Módulo para cargar y procesar datos desde Drive.csv
 * 
 * Este módulo se encarga de:
 * - Parsear el archivo Drive.csv
 * - Organizar los datos por secciones
 * - Identificar videos, subtítulos y material de apoyo
 * - Cargar resúmenes desde archivos JSON
 */

const DataLoader = {
    // Datos cargados
    sections: [],
    rawData: [],
    htmlRedirects: {}, // Mapeo de IDs de Drive a URLs externas
    glossaryData: null, // Datos del glosario

    async init() {
        try {
            // Cargar archivos necesarios
            await Promise.all([
                this.loadCSV(),
                this.loadHTMLRedirects(),
                this.loadGlossary()
            ]);

            // Procesar datos
            this.processSections();

            // Validar que se cargaron datos
            if (this.sections.length === 0) {
                console.warn('DataLoader: No se encontraron secciones válidas en el CSV');
                // No lanzamos error aquí para permitir que la UI muestre "No hay videos" si es el caso,
                // pero si el CSV falló, loadCSV() ya habrá lanzado el error.
            }

            return true;
        } catch (error) {
            console.error('Error al inicializar DataLoader:', error);
            // Re-lanzar para que App.init capture el mensaje detallado
            throw error;
        }
    },

    /**
     * Carga el archivo del glosario
     */
    async loadGlossary() {
        try {
            const response = await fetch(CONFIG.PATHS.GLOSSARY);
            if (response.ok) {
                this.glossaryData = await response.json();
                console.log(`✅ Glosario cargado: ${this.glossaryData.titulo}`);
            }
        } catch (error) {
            console.warn('No se pudo cargar el archivo del glosario');
        }
    },

    /**
     * Carga el archivo de redirecciones HTML
     */
    async loadHTMLRedirects() {
        try {
            const response = await fetch(CONFIG.PATHS.HTML_REDIRECTS);
            if (response.ok) {
                this.htmlRedirects = await response.json();
                console.log(`✅ Redirecciones HTML cargadas: ${Object.keys(this.htmlRedirects).length}`);
            }
        } catch (error) {
            console.warn('No se pudo cargar el archivo de redirecciones HTML');
        }
    },

    /**
     * Carga el archivo CSV desde el servidor
     */
    async loadCSV() {
        // Obtener la URL absoluta para diagnóstico
        const absoluteUrl = new URL(CONFIG.PATHS.DRIVE_CSV, window.location.href).href;
        console.log(`📡 Intentando cargar CSV desde: ${absoluteUrl}`);

        try {
            // Revertimos el cache buster ya que puede causar "Failed to fetch" en entornos locales
            const response = await fetch(CONFIG.PATHS.DRIVE_CSV);

            if (!response.ok) {
                const errorMsg = `No se pudo cargar Drive.csv (Estado: ${response.status} ${response.statusText})`;
                console.error(`❌ ${errorMsg} en ${absoluteUrl}`);
                throw new Error(errorMsg);
            }

            const csvText = await response.text();
            this.rawData = this.parseCSV(csvText);
            console.log(`✅ CSV cargado: ${this.rawData.length} archivos encontrados`);
        } catch (error) {
            console.error('❌ Error fatal al cargar CSV:', error);
            // Proporcionar información extra sobre el posible fallo
            if (window.location.protocol === 'file:') {
                throw new Error('CORS/Security Error: Estás abriendo el archivo localmente (file://). Por favor usa server.py.');
            }
            throw new Error(`${error.message} (URL: ${absoluteUrl})`);
        }
    },

    /**
     * Parsea el contenido CSV a un array de objetos
     * Formato esperado: Seccion;Nombre Seccion;Nombre_Archivo;ID_Archivo;Tipo
     */
    parseCSV(csvText) {
        const lines = csvText.split('\n').filter(line => line.trim());
        const data = [];

        // Saltar la primera línea (encabezados)
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i].trim();
            if (!line) continue;

            const parts = line.split(';');
            if (parts.length < 5) continue;

            data.push({
                seccion: parseInt(parts[0]) || 0,
                nombreSeccion: parts[1].trim(),
                nombreArchivo: parts[2].trim(),
                idArchivo: parts[3].trim(),
                tipo: parts[4].trim().toLowerCase()
            });
        }

        return data;
    },

    /**
     * Procesa los datos crudos y los organiza por secciones
     */
    processSections() {
        const sectionMap = new Map();

        this.rawData.forEach(item => {
            if (!sectionMap.has(item.seccion)) {
                sectionMap.set(item.seccion, {
                    numero: item.seccion,
                    nombre: item.nombreSeccion,
                    videos: [],
                    materiales: []
                });
            }

            const section = sectionMap.get(item.seccion);

            // Detectar si es un video
            if (this.isVideo(item)) {
                const videoNumber = this.extractVideoNumber(item.nombreArchivo);

                // Buscar si ya existe este video
                let video = section.videos.find(v => v.numero === videoNumber);

                if (!video) {
                    video = {
                        numero: videoNumber,
                        titulo: this.cleanVideoTitle(item.nombreArchivo),
                        idVideo: item.idArchivo,
                        tipo: item.tipo,
                        subtitulo: null,
                        materiales: [],
                        resumen: null
                    };
                    section.videos.push(video);
                } else {
                    // Actualizar el ID del video si es necesario
                    video.idVideo = item.idArchivo;
                }
            }
            // Detectar si es un subtítulo
            else if (this.isSubtitle(item)) {
                const videoNumber = this.extractVideoNumber(item.nombreArchivo);
                let video = section.videos.find(v => v.numero === videoNumber);

                if (video) {
                    video.subtitulo = item.idArchivo;
                }
            }
            // Es material de apoyo
            else {
                const videoNumber = this.extractVideoNumber(item.nombreArchivo);

                const materialItem = {
                    nombre: item.nombreArchivo,
                    id: item.idArchivo,
                    tipo: item.tipo,
                    // path: removed to force Drive usage
                    redirectUrl: this.htmlRedirects[item.idArchivo] || null
                };

                if (videoNumber) {
                    // Material asociado a un video específico
                    let video = section.videos.find(v => v.numero === videoNumber);
                    if (video) {
                        video.materiales.push(materialItem);
                    }
                } else {
                    // Material general de la sección
                    section.materiales.push(materialItem);
                }
            }
        });

        // Convertir el Map a array y ordenar
        this.sections = Array.from(sectionMap.values())
            .sort((a, b) => a.numero - b.numero);

        // Ordenar videos dentro de cada sección
        this.sections.forEach(section => {
            section.videos.sort((a, b) => a.numero - b.numero);
        });

        console.log(`✅ Procesadas ${this.sections.length} secciones`);
    },

    /**
     * Determina si un item es un video
     */
    isVideo(item) {
        return CONFIG.FILE_TYPES.VIDEO.some(ext =>
            item.tipo.includes(ext) || item.nombreArchivo.toLowerCase().endsWith(`.${ext}`)
        );
    },

    /**
     * Determina si un item es un subtítulo
     */
    isSubtitle(item) {
        return CONFIG.FILE_TYPES.SUBTITLE.some(ext =>
            item.tipo.includes(ext) || item.nombreArchivo.toLowerCase().endsWith(`.${ext}`)
        );
    },

    /**
     * Extrae el número de video del nombre del archivo
     * Ejemplo: "1. Introduccion.mp4" -> 1
     */
    extractVideoNumber(filename) {
        const match = filename.match(/^(\d+)\./);
        return match ? parseInt(match[1]) : null;
    },

    /**
     * Limpia el título del video removiendo el número y extensión
     * Ejemplo: "1. Introduccion a Spring.mp4" -> "Introduccion a Spring"
     */
    cleanVideoTitle(filename) {
        return filename
            .replace(/^\d+\.\s*/, '') // Remover número inicial
            .replace(/\.(mp4|avi|mkv|mov|srt|vtt)$/i, '') // Remover extensión
            .replace(/_/g, ' ') // Reemplazar guiones bajos por espacios
            .trim();
    },

    /**
     * Carga el resumen de un video desde su archivo JSON
     */
    async loadSummary(videoId) {
        try {
            const response = await fetch(`${CONFIG.PATHS.SUMMARIES}${videoId}.json`);
            if (!response.ok) return null;

            const summary = await response.json();
            return summary;
        } catch (error) {
            console.warn(`No se encontró resumen para video ${videoId}`);
            return null;
        }
    },

    /**
     * Obtiene todas las secciones procesadas
     */
    getSections() {
        return this.sections;
    },

    /**
     * Obtiene una sección específica por número
     */
    getSection(numero) {
        return this.sections.find(s => s.numero === numero);
    },

    /**
     * Obtiene todos los videos de todas las secciones
     */
    getAllVideos() {
        return this.sections.flatMap(section =>
            section.videos.map(video => ({
                ...video,
                seccion: section.numero,
                nombreSeccion: section.nombre
            }))
        );
    }
};
