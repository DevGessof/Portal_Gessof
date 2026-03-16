/**
 * GESSOF Academy - UI Builder
 * Módulo para construir dinámicamente la interfaz del portal
 * 
 * Este módulo se encarga de:
 * - Renderizar las secciones del curso
 * - Crear carruseles de videos
 * - Generar tarjetas de video
 * - Mostrar material de apoyo
 */

const UIBuilder = {
    /**
     * Renderiza todas las secciones en la pestaña "Curso"
     */
    renderCourseSections(sections) {
        const container = document.getElementById('section-clases');
        if (!container) {
            console.error('No se encontró el contenedor de clases');
            return;
        }

        // Limpiar contenido existente (excepto el header)
        const existingHeader = container.querySelector('.section-header');
        container.innerHTML = '';
        if (existingHeader) {
            container.appendChild(existingHeader);
        }

        // Bloque introductorio del Curso A
        const intro = this.createCourseIntroBlock();
        container.appendChild(intro);

        // Renderizar cada sección
        sections.forEach(section => {
            const sectionElement = this.createSectionElement(section);
            container.appendChild(sectionElement);
        });

        // Inicializar carruseles
        this.initCarousels();
    },

    /**
     * Crea el elemento HTML de una sección completa
     */
    /**
     * Crea el bloque introductorio del curso Bloque A
     */
    createCourseIntroBlock() {
        const intro = document.createElement('div');
        intro.style.cssText = 'background: var(--bg-card); border-radius: var(--radius-xl); padding: 2rem; margin-bottom: 2.5rem; box-shadow: var(--shadow-md); border-left: 4px solid var(--primary);';

        intro.innerHTML = `
            <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.25rem;">
                <i class="fas fa-map-signs" style="font-size:1.8rem; color:var(--primary);"></i>
                <div>
                    <h3 style="margin:0; font-size:1.15rem; font-weight:800; color:var(--text-primary);">Guía de estudio – Enfoque en Microservicios</h3>
                    <p style="margin:0; font-size:0.85rem; color:var(--text-muted);">El foco principal de este curso es <strong>Microservicios con Spring Boot</strong>. No todas las secciones tienen el mismo nivel de prioridad.</p>
                </div>
            </div>

            <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(200px,1fr)); gap:0.75rem; margin-bottom:1.25rem;">
                <div style="display:flex; gap:0.6rem; align-items:flex-start; background:rgba(239,68,68,0.08); border-radius:10px; padding:0.75rem;">
                    <span style="background:#ef4444; color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:20px; white-space:nowrap; margin-top:2px;">Nivel 1</span>
                    <div><strong style="color:var(--text-primary); font-size:0.9rem;">Imprescindible</strong><p style="margin:0; font-size:0.8rem; color:var(--text-muted);">Secciones 1, 4, 5, 6, 11</p></div>
                </div>
                <div style="display:flex; gap:0.6rem; align-items:flex-start; background:rgba(245,158,11,0.08); border-radius:10px; padding:0.75rem;">
                    <span style="background:#f59e0b; color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:20px; white-space:nowrap; margin-top:2px;">Nivel 2</span>
                    <div><strong style="color:var(--text-primary); font-size:0.9rem;">Muy recomendado</strong><p style="margin:0; font-size:0.8rem; color:var(--text-muted);">Secciones 10, 12</p></div>
                </div>
                <div style="display:flex; gap:0.6rem; align-items:flex-start; background:rgba(59,130,246,0.08); border-radius:10px; padding:0.75rem;">
                    <span style="background:#3b82f6; color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:20px; white-space:nowrap; margin-top:2px;">Nivel 3</span>
                    <div><strong style="color:var(--text-primary); font-size:0.9rem;">Útil</strong><p style="margin:0; font-size:0.8rem; color:var(--text-muted);">Secciones 3, 7, 8</p></div>
                </div>
                <div style="display:flex; gap:0.6rem; align-items:flex-start; background:rgba(107,114,128,0.08); border-radius:10px; padding:0.75rem;">
                    <span style="background:#6b7280; color:#fff; font-size:0.7rem; font-weight:700; padding:2px 8px; border-radius:20px; white-space:nowrap; margin-top:2px;">Nivel 4</span>
                    <div><strong style="color:var(--text-primary); font-size:0.9rem;">Opcional</strong><p style="margin:0; font-size:0.8rem; color:var(--text-muted);">Secciones 2, 9, 13</p></div>
                </div>
            </div>

            <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:10px; padding:0.9rem 1.2rem; display:flex; align-items:center; gap:0.75rem;">
                <i class="fas fa-clipboard-check" style="color:#f59e0b; font-size:1.2rem;"></i>
                <p style="margin:0; font-size:0.88rem; color:var(--text-primary);">
                    <strong>Evaluación:</strong> considera únicamente los contenidos de <strong>Nivel 1</strong> y <strong>Nivel 2</strong>.
                </p>
            </div>
        `;
        return intro;
    },

    createSectionElement(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'course-section';
        sectionDiv.id = `seccion-${section.numero}`;

        // Obtener info de prioridad
        const priority = CONFIG.SECTION_PRIORITIES[section.numero];
        const priorityBadge = priority
            ? `<span style="display:inline-flex; align-items:center; gap:4px; background:${priority.bg}; color:${priority.color}; font-size:0.72rem; font-weight:700; padding:3px 10px; border-radius:20px; border:1px solid ${priority.color}33; letter-spacing:0.02em;">
                   <i class="fas fa-circle" style="font-size:0.45rem;"></i> Nivel ${priority.nivel} · ${priority.label}
               </span>`
            : '';

        // Header de la sección
        const header = document.createElement('div');
        header.className = 'section-header';
        header.style.cssText = 'margin: 3rem 0 1.5rem; display: flex; align-items: center; gap: 1rem;';

        header.innerHTML = `
            <div style="width: 4px; height: 40px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: 4px;"></div>
            <div style="flex:1;">
                <div style="display:flex; align-items:center; gap:0.75rem; flex-wrap:wrap;">
                    <h2 style="font-size: 1.75rem; font-weight: 800; color: var(--text-primary); margin: 0;">
                        Sección ${section.numero}: ${section.nombre}
                    </h2>
                    ${priorityBadge}
                </div>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin: 0.25rem 0 0;">
                    ${section.videos.length} ${section.videos.length === 1 ? 'clase' : 'clases'} disponibles
                </p>
            </div>
        `;

        sectionDiv.appendChild(header);

        // Carrusel de videos
        if (section.videos.length > 0) {
            const carousel = this.createVideoCarousel(section);
            sectionDiv.appendChild(carousel);
        } else {
            const noVideos = document.createElement('p');
            noVideos.style.cssText = 'color: var(--text-muted); text-align: center; padding: 2rem;';
            noVideos.textContent = CONFIG.MESSAGES.NO_VIDEOS;
            sectionDiv.appendChild(noVideos);
        }

        return sectionDiv;
    },

    /**
     * Crea un carrusel de videos para una sección
     */
    createVideoCarousel(section) {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';

        const grid = document.createElement('div');
        grid.className = 'videos-grid';

        // Crear tarjetas de video
        section.videos.forEach((video, index) => {
            const card = this.createVideoCard(video, section.numero, index);
            grid.appendChild(card);
        });

        wrapper.appendChild(grid);

        // Botones de navegación del carrusel
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => grid.scrollBy({ left: -CONFIG.UI.CAROUSEL_SCROLL_AMOUNT, behavior: 'smooth' });

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => grid.scrollBy({ left: CONFIG.UI.CAROUSEL_SCROLL_AMOUNT, behavior: 'smooth' });

        wrapper.appendChild(prevBtn);
        wrapper.appendChild(nextBtn);

        return wrapper;
    },

    /**
     * Crea una tarjeta de video individual
     */
    createVideoCard(video, seccionNumero, videoIndex) {
        const card = document.createElement('div');
        card.className = 'video-card';
        card.dataset.videoId = video.idVideo;
        card.dataset.seccion = seccionNumero;
        card.dataset.index = videoIndex;

        // Determinar la URL de la miniatura
        const thumbnailUrl = this.getThumbnailUrl(video);

        card.innerHTML = `
            <div class="video-thumbnail">
                ${thumbnailUrl ? `<img src="${thumbnailUrl}" alt="${video.titulo}" onerror="this.src='https://via.placeholder.com/320x180/0099d8/ffffff?text=Video+${video.numero}'">` : this.getDefaultThumbnail(video)}
                <div class="play-overlay">
                    <div class="play-icon"><i class="fas fa-play"></i></div>
                </div>
                <button class="video-important-btn" title="Marcar como importante" onclick="event.stopPropagation(); ProgressManager.toggleImportant('${video.idVideo}', this)">
                    <i class="fas fa-star"></i>
                </button>
            </div>
            <div class="video-info">
                <span class="video-number">Clase ${video.numero}</span>
                <h3 class="video-title">${video.titulo}</h3>
                <p class="video-description">Haz clic para ver el video y su resumen didáctico.</p>
                <button class="main-nav-tab" style="width:100%; margin-top:10px; padding:8px; border:1px solid var(--primary); background:transparent; color:var(--primary); border-radius:8px; cursor:pointer; justify-content: center;"
                    onclick="event.stopPropagation(); VideoPlayer.openVideo('${video.idVideo}', ${seccionNumero}, ${videoIndex})">
                    Ver Video y Resumen
                </button>
            </div>
        `;

        // Click en la tarjeta abre el video
        card.onclick = () => VideoPlayer.openVideo(video.idVideo, seccionNumero, videoIndex);

        return card;
    },

    /**
     * Obtiene la URL de la miniatura del video
     */
    getThumbnailUrl(video) {
        // Si es un video de YouTube, usar la API de miniaturas
        if (video.tipo === 'youtube' || video.idVideo.length === 11) {
            return CONFIG.YOUTUBE.THUMBNAIL_URL.replace('{VIDEO_ID}', video.idVideo);
        }
        // Para videos de Drive, usar un placeholder con gradiente
        return null;
    },

    /**
     * Genera una miniatura por defecto con gradiente de Google Drive
     */
    getDefaultThumbnail(video) {
        return `
            <div style="width:100%; height:100%; background: linear-gradient(135deg, #34A853 0%, #1A73E8 100%); display:flex; align-items:center; justify-content:center; flex-direction: column; color:white;">
                <i class="fab fa-google-drive" style="font-size: 3rem; margin-bottom: 0.5rem;"></i>
                <span style="font-size: 0.9rem; font-weight: 600;">Clase ${video.numero}</span>
            </div>
        `;
    },

    /**
     * Inicializa los carruseles (ya implementado en el HTML original)
     */
    initCarousels() {
        // Esta función ya existe en el index.html original
        // La mantenemos aquí por compatibilidad
        console.log('✅ Carruseles inicializados');
    },

    // ─────────────────────────────────────────────────────────────────────────
    // BLOQUE B: Curso Microservicios Spring Boot (colaborador GESSOF)
    // ─────────────────────────────────────────────────────────────────────────

    /**
     * Renderiza el bloque del nuevo Curso Microservicios Spring Boot
     */
    renderMicroserviciosCourse() {
        const container = document.getElementById('section-clases');
        if (!container || typeof MICROSERVICIOS_COURSE === 'undefined') return;

        // --- Separador visual entre bloques ---
        const divider = document.createElement('div');
        divider.style.cssText = 'margin: 4rem 0 2.5rem; position:relative; text-align:center;';
        divider.innerHTML = `
            <hr style="border:none; border-top:2px solid var(--border); margin:0;">
            <span style="position:absolute; top:-14px; left:50%; transform:translateX(-50%); background:var(--bg-main); padding:0 1.5rem; font-size:0.8rem; font-weight:700; letter-spacing:0.1em; color:var(--text-muted); text-transform:uppercase;">
                Curso Adicional
            </span>
        `;
        container.appendChild(divider);

        // --- Encabezado del Bloque B ---
        const headerBlock = document.createElement('div');
        headerBlock.style.cssText = 'background:linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%); border-radius:var(--radius-xl); padding:2rem; margin-bottom:2rem; color:#fff; box-shadow:var(--shadow-md);';
        headerBlock.innerHTML = `
            <div style="display:flex; align-items:center; gap:1rem; flex-wrap:wrap;">
                <div style="background:rgba(255,255,255,0.18); border-radius:12px; padding:0.9rem; display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-cubes" style="font-size:2rem;"></i>
                </div>
                <div>
                    <span style="font-size:0.75rem; font-weight:700; letter-spacing:0.12em; opacity:0.8; text-transform:uppercase;">${MICROSERVICIOS_COURSE.badge}</span>
                    <h2 style="margin:0.25rem 0 0; font-size:1.6rem; font-weight:800;">${MICROSERVICIOS_COURSE.titulo}</h2>
                    <p style="margin:0.4rem 0 0; font-size:0.9rem; opacity:0.85;">${MICROSERVICIOS_COURSE.descripcion}</p>
                </div>
            </div>
        `;
        container.appendChild(headerBlock);

        // --- Renderizar cada sección ---
        MICROSERVICIOS_COURSE.secciones.forEach(seccion => {
            const sectionEl = this.createMicroserviciosSectionElement(seccion);
            container.appendChild(sectionEl);
        });

        // --- Botón de Descarga de Material Completo ---
        if (MICROSERVICIOS_COURSE.descargaMaterialId) {
            const downloadSection = document.createElement('div');
            downloadSection.style.cssText = 'margin: 3rem 0; text-align: center; padding: 2.5rem; background: var(--bg-card); border-radius: var(--radius-xl); border: 1px dashed var(--primary); box-shadow: var(--shadow-sm);';
            downloadSection.innerHTML = `
                <div style="margin-bottom: 1.5rem;">
                    <i class="fas fa-file-archive" style="font-size: 3.5rem; color: var(--primary); opacity: 0.9;"></i>
                </div>
                <h3 style="margin: 0 0 0.5rem; font-size: 1.4rem; font-weight: 800; color: var(--text-primary);">Material Completo del Curso</h3>
                <p style="margin: 0 0 2rem; color: var(--text-muted); font-size: 0.95rem;">Descarga todos los recursos, códigos y materiales de apoyo de las 13 clases en un solo archivo .zip</p>
                <a href="https://drive.google.com/file/d/${MICROSERVICIOS_COURSE.descargaMaterialId}/view?usp=sharing" target="_blank" class="main-nav-tab active" 
                   style="display: inline-flex; align-items: center; gap: 0.75rem; padding: 12px 28px; font-size: 1rem; text-decoration: none; justify-content: center; width: auto;">
                    <i class="fas fa-download"></i> Descargar Todo el Material
                </a>
            `;
            container.appendChild(downloadSection);
        }

        // Sincronizar progreso
        if (typeof ProgressManager !== 'undefined') {
            ProgressManager.syncVideoStates();
        }
    },

    /**
     * Crea elemento de sección para el Bloque B
     */
    createMicroserviciosSectionElement(seccion) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'course-section';
        sectionDiv.id = `seccion-ms-${seccion.numero}`;

        const available = seccion.videos.filter(v => v.disponible).length;
        const total = seccion.videos.length;

        const header = document.createElement('div');
        header.className = 'section-header';
        header.style.cssText = 'margin: 2rem 0 1.5rem; display: flex; align-items: center; gap: 1rem;';
        header.innerHTML = `
            <div style="width: 4px; height: 40px; background: linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius: 4px;"></div>
            <div>
                <h2 style="font-size:1.4rem; font-weight:800; color:var(--text-primary); margin:0;">${seccion.nombre}</h2>
                <p style="color:var(--text-muted); font-size:0.9rem; margin:0.25rem 0 0;">
                    ${available} de ${total} clases disponibles
                </p>
            </div>
        `;
        sectionDiv.appendChild(header);

        // Carrusel
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';
        const grid = document.createElement('div');
        grid.className = 'videos-grid';

        seccion.videos.forEach((video, index) => {
            const card = this.createMicroserviciosCard(video, seccion.numero, index);
            grid.appendChild(card);
        });

        wrapper.appendChild(grid);

        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-btn prev';
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevBtn.onclick = () => grid.scrollBy({ left: -CONFIG.UI.CAROUSEL_SCROLL_AMOUNT, behavior: 'smooth' });

        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-btn next';
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextBtn.onclick = () => grid.scrollBy({ left: CONFIG.UI.CAROUSEL_SCROLL_AMOUNT, behavior: 'smooth' });

        wrapper.appendChild(prevBtn);
        wrapper.appendChild(nextBtn);
        sectionDiv.appendChild(wrapper);

        return sectionDiv;
    },

    /**
     * Crea tarjeta de video para el Bloque B
     */
    createMicroserviciosCard(video, seccionNumero, videoIndex) {
        const card = document.createElement('div');
        card.className = 'video-card' + (video.disponible ? '' : ' video-card--pending');
        // Usamos el ID para videos disponibles, o un ID sintético para pendientes
        const trackId = video.idVideo || `ms-pending-${seccionNumero}-${video.numero}`;
        card.dataset.videoId = trackId;

        if (video.disponible) {
            card.innerHTML = `
                <div class="video-thumbnail">
                    <div style="width:100%; height:100%; background:linear-gradient(135deg,#1e3a5f 0%,var(--primary-dark) 100%); display:flex; align-items:center; justify-content:center; flex-direction:column; color:white;">
                        <i class="fas fa-cubes" style="font-size:2.5rem; margin-bottom:0.5rem; opacity:0.9;"></i>
                        <span style="font-size:0.85rem; font-weight:600;">Clase ${video.numero}</span>
                    </div>
                    <div class="play-overlay">
                        <div class="play-icon"><i class="fas fa-play"></i></div>
                    </div>
                    <button class="video-important-btn" title="Marcar como importante"
                        onclick="event.stopPropagation(); ProgressManager.toggleImportant('${trackId}', this)">
                        <i class="fas fa-star"></i>
                    </button>
                </div>
                <div class="video-info">
                    <span class="video-number">Clase ${video.numero}</span>
                    <h3 class="video-title">${video.titulo}</h3>
                    ${video.audioBajo ? `
                        <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(245, 158, 11, 0.1); color: #f59e0b; padding: 4px 10px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; margin-bottom: 8px;">
                            <i class="fas fa-exclamation-triangle"></i> Calidad de audio reducida
                        </div>
                    ` : '<p class="video-description">Haz clic para ver la clase y su resumen didáctico.</p>'}
                    <button class="main-nav-tab" style="width:100%; margin-top:10px; padding:8px; border:1px solid var(--primary); background:transparent; color:var(--primary); border-radius:8px; cursor:pointer; justify-content:center;"
                        onclick="event.stopPropagation(); VideoPlayer.openMicroserviciosVideo('${video.idVideo}', '${video.titulo}', ${video.numero})">
                        <i class="fas fa-play" style="font-size:0.8rem;"></i> Ver Clase y Resumen
                    </button>
                </div>
            `;
            card.onclick = () => VideoPlayer.openMicroserviciosVideo(video.idVideo, video.titulo, video.numero);
        } else {
            card.innerHTML = `
                <div class="video-thumbnail" style="cursor:default;">
                    <div style="width:100%; height:100%; background:linear-gradient(135deg,#374151 0%,#4b5563 100%); display:flex; align-items:center; justify-content:center; flex-direction:column; color:rgba(255,255,255,0.5);">
                        <i class="fas fa-clock" style="font-size:2.5rem; margin-bottom:0.5rem;"></i>
                        <span style="font-size:0.85rem;">Próximamente</span>
                    </div>
                </div>
                <div class="video-info">
                    <span class="video-number">Clase ${video.numero}</span>
                    <h3 class="video-title" style="color:var(--text-muted);">${video.titulo}</h3>
                    <p class="video-description" style="color:var(--text-muted); font-style:italic;">Este video estará disponible próximamente.</p>
                    <button class="main-nav-tab" disabled style="width:100%; margin-top:10px; padding:8px; border:1px solid var(--border); background:transparent; color:var(--text-muted); border-radius:8px; cursor:not-allowed; justify-content:center; opacity:0.5;">
                        <i class="fas fa-hourglass-half" style="font-size:0.8rem;"></i> No disponible
                    </button>
                </div>
            `;
        }

        return card;
    },

    /**
     * Muestra un mensaje de carga mientras se procesan los datos
     */
    showLoading(container) {
        if (!container) return;
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <div style="width: 60px; height: 60px; border: 4px solid var(--border); border-top-color: var(--primary); border-radius: 50%; margin: 0 auto 1.5rem; animation: spin 1s linear infinite;"></div>
                <p style="color: var(--text-secondary); font-size: 1.1rem;">${CONFIG.MESSAGES.LOADING}</p>
            </div>
            <style>
                @keyframes spin { to { transform: rotate(360deg); } }
            </style>
        `;
    },

    /**
     * Muestra un mensaje de error
     */
    showError(container, message) {
        if (!container) return;
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem;">
                <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: var(--accent-orange); margin-bottom: 1rem;"></i>
                <p style="color: var(--text-secondary); font-size: 1.1rem;">${message}</p>
                <button onclick="location.reload()" class="main-nav-tab active" style="margin-top: 1.5rem; display: inline-flex;">
                    <i class="fas fa-redo"></i> Recargar Página
                </button>
            </div>
        `;
    },

    /**
     * Renderiza el contenido del glosario
     */
    renderGlossary(filter = '') {
        const container = document.getElementById('glossaryContainer');
        const data = DataLoader.glossaryData;

        if (!container || !data) return;

        container.innerHTML = '';
        const searchTerm = filter.toLowerCase().trim();

        // Metadatos a ignorar
        const metadataKeys = ['titulo', 'descripcion', 'version', 'fecha'];

        let hasResults = false;

        Object.keys(data).forEach(catKey => {
            if (metadataKeys.includes(catKey)) return;

            const categoryData = data[catKey];
            const items = [];

            // Convertir estructura de datos a array uniforme [{termino, descripcion, ...}]
            if (Array.isArray(categoryData)) {
                items.push(...categoryData);
            } else if (typeof categoryData === 'object') {
                Object.entries(categoryData).forEach(([key, value]) => {
                    // Caso 1: Valor es string (Ej: Comandos Maven/Docker, Propiedades)
                    // "mvn clean": "Limpia target" -> { termino: "mvn clean", descripcion: "Limpia target" }
                    if (typeof value === 'string') {
                        items.push({
                            termino: key,
                            descripcion: value
                        });
                    }
                    // Caso 2: Valor es Array de strings (Ej: Mejores Prácticas)
                    // "Seguridad": ["HTTPS", "BCrypt"] -> { termino: "Seguridad", lista_items: ["HTTPS", "BCrypt"] }
                    else if (Array.isArray(value) && typeof value[0] === 'string') {
                        items.push({
                            termino: key,
                            descripcion: 'Puntos clave:', // Descripción genérica para dar contexto
                            lista_detalles: value // Usamos un nombre diferente para que el renderizador de extras lo detecte
                        });
                    }
                    // Caso 3: Valor es Objeto detallado (Ej: Conceptos, Anotaciones)
                    else if (typeof value === 'object') {
                        items.push({
                            termino: value.termino || key,
                            ...value
                        });
                    }
                });
            }

            const filteredItems = items.filter(item =>
                (item.termino && item.termino.toLowerCase().includes(searchTerm)) ||
                (item.descripcion && item.descripcion.toLowerCase().includes(searchTerm)) ||
                (item.definicion && item.definicion.toLowerCase().includes(searchTerm))
            );

            if (filteredItems.length > 0) {
                hasResults = true;
                const section = document.createElement('div');
                section.className = 'glossary-category-section';

                const title = catKey.replace(/_/g, ' ').toUpperCase();
                section.innerHTML = `<h3 class="category-title">${title}</h3>`;

                const grid = document.createElement('div');
                grid.className = 'glossary-grid';

                filteredItems.forEach(item => {
                    const card = document.createElement('div');
                    card.className = 'glossary-card';

                    // Soportar tanto descripciones como definiciones
                    const desc = item.descripcion || item.definicion || 'Sin descripción';

                    // Renderizar campos extra que sean arrays (especificaciones técnicas)
                    let extras = '';
                    Object.entries(item).forEach(([key, value]) => {
                        if (Array.isArray(value) && key !== 'ejemplo' && value.length > 0) {
                            extras += `
                                <div class="glossary-extra">
                                    <strong>${key.toUpperCase()}:</strong>
                                    <ul style="margin: 0.5rem 0; padding-left: 1.2rem; font-size: 0.85rem; color: var(--text-secondary);">
                                        ${value.map(v => `<li>${this.escapeHtml(Array.isArray(v) ? v.join(': ') : v)}</li>`).join('')}
                                    </ul>
                                </div>
                            `;
                        }
                    });

                    card.innerHTML = `
                        <div class="glossary-card-header">
                            <h4>${item.termino}</h4>
                            ${item.seccion ? `<span class="glossary-tag">Sec. ${item.seccion}</span>` : ''}
                        </div>
                        <p>${desc}</p>
                        ${extras}
                        ${item.ejemplo ? `
                            <div class="glossary-example">
                                <strong>Ejemplo:</strong>
                                <pre><code>${this.escapeHtml(item.ejemplo)}</code></pre>
                            </div>
                        ` : ''}
                    `;
                    grid.appendChild(card);
                });

                section.appendChild(grid);
                container.appendChild(section);
            }
        });

        if (!hasResults) {
            container.innerHTML = `
                <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
                    <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
                    <p>No se encontraron términos que coincidan con "${filter}"</p>
                </div>
            `;
        }
    },

    /**
     * Configura el buscador del glosario
     */
    setupGlossarySearch() {
        const searchInput = document.getElementById('glossarySearch');
        if (!searchInput) return;

        searchInput.addEventListener('input', (e) => {
            this.renderGlossary(e.target.value);
        });
    },

    /**
     * Escapa HTML para prevenir XSS
     */
    escapeHtml(text) {
        if (!text) return '';
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};
