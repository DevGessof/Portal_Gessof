/**
 * GESSOF Academy - Data Loader
 * Módulo para cargar y procesar los datos del curso Angular
 */

const DataLoader = {
    sections: [],
    allVideos: [],
    summaryCache: {},

    /**
     * Inicializa el DataLoader
     */
    async init() {
        try {
            // Cache-busting para evitar scripts antiguos
            const response = await fetch(CONFIG.PATHS.DRIVE_CSV + '?v=' + Date.now());
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            
            const text = await response.text();
            this.parseCSV(text);
            console.log(`✅ [LOADER] ${this.sections.length} secciones procesadas`);
            return true;
        } catch (error) {
            console.error('❌ [LOADER] Error crítico:', error);
            return false;
        }
    },

    /**
     * Parsea Dirve.txt y construye la estructura unificada de items
     */
    parseCSV(text) {
        const lines = text.trim().split('\n');
        const dataLines = lines.slice(1); // Saltar cabecera
        const sectionMap = {};

        dataLines.forEach(line => {
            const raw = line.replace(/\r/g, '').trim();
            if (!raw) return;
            const parts = raw.split(';');
            if (parts.length < 5) return;

            const [seccionNum, nombreSeccion, nombreArchivo, idArchivo, tipoArchivo] = parts;
            const secNum = parseInt(seccionNum, 10);
            if (isNaN(secNum)) return;

            if (!sectionMap[secNum]) {
                sectionMap[secNum] = {
                    numero: secNum,
                    nombre: nombreSeccion.trim(),
                    items: [] // Aquí van videos y materiales en orden
                };
            }

            const nombre = nombreArchivo.trim();
            const tipo = tipoArchivo.trim().toLowerCase();
            const id = idArchivo.trim();

            // Extraer el número base (ej: '07' de '07. ' o '07.1 ')
            const matchNum = nombre.match(/^(\d+)/);
            const numLeccionBase = matchNum ? matchNum[1] : '';
            // Guardamos el número exacto para mostrar (ej '07.1')
            const matchNumExacto = nombre.match(/^(\d+[\.\d]*)\s*/);
            const numLeccionExacto = matchNumExacto ? matchNumExacto[1] : numLeccionBase;

            const tituloLimpio = nombre.replace(/^[\d.]+\s*/, '').replace(/\.[^/.]+$/, '').trim();

            // Clasificación
            if (tipo.includes('video') || nombre.endsWith('.mp4')) {
                sectionMap[secNum].items.push({
                    type: 'video',
                    idVideo: id,
                    numero: numLeccionBase, // Usamos la base para el indexado visual
                    titulo: tituloLimpio,
                    nombre: nombre,
                    numSeccion: secNum,
                    subtitulo: null
                });
            } else if (nombre.endsWith('.srt') || (tipo.includes('octet-stream') && nombre.endsWith('.srt'))) {
                // Asociar SRT al video previo
                const lastVideo = [...sectionMap[secNum].items].reverse().find(i => i.type === 'video');
                if (lastVideo && (lastVideo.numero === numLeccionBase || lastVideo.titulo === tituloLimpio)) {
                    lastVideo.subtitulo = id;
                }
            } else {
                const isHtml = tipo.includes('text/html') || nombre.toLowerCase().endsWith('.html');
                
                const materialItem = {
                    id: id,
                    numero: numLeccionExacto, // Guardamos el exacto por si es '07.1'
                    titulo: tituloLimpio,
                    nombre: nombre,
                    numSeccion: secNum,
                    tipo: tipo,
                    isLink: isHtml,
                    formato: nombre.split('.').pop().toLowerCase()
                };

                // Si existe un video en esta sección con la misma BASE numérica, lo adjuntamos.
                let associatedVideo = null;
                if (numLeccionBase !== '') {
                    associatedVideo = sectionMap[secNum].items.find(i => i.type === 'video' && i.numero === numLeccionBase);
                } else {
                    // Si el material no tiene ningún número, al último video
                    associatedVideo = [...sectionMap[secNum].items].reverse().find(i => i.type === 'video');
                }

                if (associatedVideo) {
                    if (!associatedVideo.materiales) associatedVideo.materiales = [];
                    associatedVideo.materiales.push(materialItem);
                    console.log(`📎 [LOADER] Material adjuntado a Clase ${associatedVideo.numero} (S${secNum}): ${tituloLimpio}`);
                } else {
                    // Material independiente para el carrusel
                    materialItem.type = 'material';
                    sectionMap[secNum].items.push(materialItem);
                    console.log(`📎 [LOADER] Material standalone en carrusel (S${secNum}): ${tituloLimpio}`);
                }
            }
        });

        this.sections = Object.values(sectionMap).sort((a, b) => a.numero - b.numero);
        this.allVideos = this.sections.flatMap(s => s.items.filter(i => i.type === 'video'));
    },

    getSections() { return this.sections; },
    getSection(numero) { return this.sections.find(s => s.numero === parseInt(numero, 10)); },
    getAllVideos() { return this.allVideos; },

    sectionIndexCache: {},

    /**
     * Obtiene y parsea el índice HTML del directorio del servidor local.
     */
    async fetchSectionIndex(folder) {
        if (this.sectionIndexCache[folder]) return this.sectionIndexCache[folder];
        
        try {
            const response = await fetch(`${CONFIG.PATHS.SUMMARIES}${folder}/?v=${Date.now()}`);
            if (!response.ok) return [];
            
            const html = await response.text();
            // Parsear las etiquetas <a> que terminen en .md
            const regex = / href="([^"]+\.md)"/g;
            const files = [];
            let match;
            while ((match = regex.exec(html)) !== null) {
                // Decodificar URI para caracteres especiales
                files.push(decodeURIComponent(match[1]));
            }
            
            this.sectionIndexCache[folder] = files;
            return files;
        } catch (e) {
            console.warn(`⚠️ [SUMMARY] Error al parsear el índice del directorio de ${folder}:`, e);
            return [];
        }
    },

    /**
     * Carga el resumen MD usando el estándar SXX_NN
     */
    async loadSummary(video) {
        if (!video || !video.numSeccion) return null;
        if (this.summaryCache[video.idVideo]) return this.summaryCache[video.idVideo];

        // Cierre del curso
        if (video.numSeccion === 24) {
            return `# Cierre del Curso\n## Resumen Final\n${CONFIG.MESSAGES.BYE_COURSE || '¡Felicidades por completar el curso!'}`;
        }

        const seccionPad = String(video.numSeccion).padStart(2, '0');
        // Extraemos solo el número, eliminando el punto y conservando el cero a la izquierda si existe.
        const rawNum = String(video.numero).replace('.', '').trim();
        const numPad = rawNum.padStart(2, '0');
        
        const folder = `Seccion_${seccionPad}`;
        const baseUrl = `${CONFIG.PATHS.SUMMARIES}${folder}/`;

        // Patrón base estricto: SXX_NN
        const baseName = `S${seccionPad}_${numPad}`;
        
        // Obtener la verdadera lista de archivos en el directorio
        const dirFiles = await this.fetchSectionIndex(folder);
        
        // Encontrar el archivo exacto que empiece por SXX_NN_ o sea SXX_NN.md
        const exactFile = dirFiles.find(f => f.startsWith(`${baseName}_`) || f === `${baseName}.md`);
        
        console.log(`🔍 [SUMMARY] Buscando para "${video.titulo}" (${baseName}) en ${folder}...`);

        if (exactFile) {
            try {
                const response = await fetch(baseUrl + exactFile);
                if (response.ok) {
                    console.log(`✅ [SUMMARY] Encontrado archivo exacto: ${exactFile}`);
                    const text = await response.text();
                    this.summaryCache[video.idVideo] = text;
                    return text;
                }
            } catch (e) {}
        }

        // --- Fallback Histórico (si el servidor no permite listar o no lo encontró por nombre estándar) ---
        const patterns = [];
        const fullCleanTitle = video.titulo.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, '_').replace(/_+/g, '_').replace(/^_|_$/g, '');
        patterns.push(`${baseName}_${fullCleanTitle}.md`);
        patterns.push(`${baseName}_${fullCleanTitle.toLowerCase()}.md`);
        const words = video.titulo.split(/\s+/).map(w => w.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]/g, ''));
        for (let i = 6; i >= 1; i--) {
            const fuzzy = words.slice(0, i).join('_');
            if (fuzzy) patterns.push(`${baseName}_${fuzzy}.md`);
        }
        patterns.push(`${baseName}.md`);
        patterns.push(`${baseName}_Resumen.md`);

        for (const fileName of patterns) {
            try {
                const response = await fetch(baseUrl + fileName);
                if (response.ok) {
                    console.log(`✅ [SUMMARY] Encontrado por fallback: ${fileName}`);
                    const text = await response.text();
                    this.summaryCache[video.idVideo] = text;
                    return text;
                }
            } catch (e) {}
        }
        
        console.warn(`⚠️ [SUMMARY] No se encontró para Sec ${video.numSeccion} Clase ${video.numero}`);
        return null;
    },

    glossary: [],

    /**
     * Carga y parsea el Glosario de Resumenes/Glosario.md
     */
    async loadGlossary() {
        if (this.glossary.length > 0) return this.glossary;

        try {
            const url = `${CONFIG.PATHS.SUMMARIES}Glosario.md?v=${Date.now()}`;
            const response = await fetch(url);
            if (!response.ok) throw new Error(`HTTP error ${response.status}`);
            
            const md = await response.text();
            this.glossary = this.parseGlossaryMarkdown(md);
            console.log(`✅ [LOADER] Glosario cargado con ${this.glossary.length} términos.`);
            return this.glossary;
        } catch (error) {
            console.error('❌ [LOADER] Error al cargar el Glosario:', error);
            return [];
        }
    },

    parseGlossaryMarkdown(md) {
        const terms = [];
        let currentCategory = 'General';

        // Dividir por líneas
        const lines = md.split('\n');
        
        let inTable = false;

        for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            
            // Detectar categorías (## o ###)
            if (line.startsWith('## ') || line.startsWith('### ')) {
                currentCategory = line.replace(/^#+\s*(?:\d+\.\s*)?/, '').trim();
                inTable = false;
                continue;
            }

            // Detectar filas de tabla
            if (line.startsWith('|')) {
                // Saltar encabezados y separadores de tabla
                if (line.includes('Término') && line.includes('Descripción') || line.includes('---')) {
                    inTable = true;
                    continue;
                }

                if (inTable) {
                    // Extraer columnas respetando el pipe
                    const cols = line.split('|').map(c => c.trim()).filter(c => c !== '');
                    if (cols.length >= 2) {
                        // Limpiar el markdown básico (\` backticks) de texto simple
                        const cleanTerm = cols[0].replace(/`/g, '');
                        // Preservar links y negritas en las descripciones
                        const descripcion = cols[1];
                        const ejemplo = cols.length > 2 ? cols[2].replace(/\\\|/g, '|') : ''; // Restaurar pipes escapados
                        
                        terms.push({
                            categoria: currentCategory,
                            termino: cleanTerm,
                            descripcion: descripcion,
                            ejemplo: ejemplo
                        });
                    }
                }
            } else {
                inTable = false;
            }
        }
        
        return terms;
    }
};
