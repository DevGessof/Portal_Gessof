/**
 * GESSOF Academy - Video Player
 * Módulo para manejar la reproducción de videos y visualización de resúmenes
 * 
 * Este módulo se encarga de:
 * - Abrir y cerrar el modal de video
 * - Reproducir videos de YouTube y Google Drive
 * - Cargar y mostrar resúmenes didácticos
 * - Mostrar material de apoyo asociado
 */

const VideoPlayer = {
    currentVideo: null,
    modal: null,
    videoFrame: null,

    /**
     * Inicializa el reproductor de video
     */
    init() {
        this.modal = document.getElementById('courseModal');
        this.videoFrame = document.getElementById('videoFrame');

        // Cerrar modal al hacer click fuera
        window.onclick = (event) => {
            if (event.target === this.modal) {
                this.closeVideo();
            }
        };
    },

    /**
     * Abre el modal y reproduce un video
     */
    async openVideo(videoId, seccionNumero, videoIndex) {
        const section = DataLoader.getSection(seccionNumero);
        if (!section) {
            console.error('Sección no encontrada');
            return;
        }

        const video = section.videos[videoIndex];
        if (!video) {
            console.error('Video no encontrado');
            return;
        }

        this.currentVideo = video;

        // Actualizar título del modal
        const modalTitle = document.getElementById('modalTitle');
        const isYouTube = this.isYouTubeVideo(video.idVideo);

        modalTitle.innerHTML = `
            <i class="${isYouTube ? 'fab fa-youtube' : 'fab fa-google-drive'}" 
               style="color:${isYouTube ? '#ff0000' : '#34A853'}; margin-right:10px;"></i> 
            Clase ${video.numero}: ${video.titulo}
        `;

        // Configurar el iframe del video
        this.setupVideoFrame(video);

        // Cargar resumen
        await this.loadAndDisplaySummary(video);

        // BRIDGE: Si estamos en un iframe, usar el reproductor del padre para evitar bloqueos
        if (window.parent !== window) {
            const summaryHTML = document.getElementById('modalContent').innerHTML;
            window.parent.postMessage({
                type: 'OPEN_VIDEO',
                url: this.videoFrame.src,
                title: video.titulo,
                summary: summaryHTML
            }, '*');
            this.videoFrame.src = ''; // Limpiar local para ahorrar recursos
            document.getElementById('modalContent').innerHTML = '';
            return;
        }

        // Mostrar modal
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    },

    /**
     * Configura el iframe del video según su tipo
     */
    setupVideoFrame(video) {
        const videoContainer = this.videoFrame.parentElement;

        if (this.isYouTubeVideo(video.idVideo)) {
            // Video de YouTube
            videoContainer.style.display = 'block';
            this.videoFrame.src = CONFIG.YOUTUBE.EMBED_URL.replace('{VIDEO_ID}', video.idVideo);
        } else {
            // Video de Google Drive
            videoContainer.style.display = 'block';
            this.videoFrame.src = CONFIG.DRIVE.VIDEO_EMBED_URL.replace('{FILE_ID}', video.idVideo);
        }
    },

    /**
     * Determina si un video es de YouTube basándose en el ID
     */
    isYouTubeVideo(videoId) {
        // Los IDs de YouTube tienen 11 caracteres
        return videoId.length === 11 && !/[\/\\]/.test(videoId);
    },

    /**
     * Abre el modal y reproduce un video del bloque de Microservicios
     */
    async openMicroserviciosVideo(idVideo, titulo, numero) {
        if (!idVideo) return;

        const video = {
            idVideo: idVideo,
            titulo: titulo,
            numero: numero,
            isMicroservicios: true
        };

        this.currentVideo = video;

        // Actualizar título del modal
        const modalTitle = document.getElementById('modalTitle');
        modalTitle.innerHTML = `
            <i class="fab fa-google-drive" style="color:#34A853; margin-right:10px;"></i> 
            Microservicios - Clase ${video.numero}: ${video.titulo}
        `;

        // Configurar el iframe del video
        this.setupVideoFrame(video);

        // Cargar resumen didáctico
        await this.loadAndDisplaySummary(video);

        // BRIDGE: Si estamos en un iframe, usar el reproductor del padre
        if (window.parent !== window) {
            const summaryHTML = document.getElementById('modalContent').innerHTML;
            window.parent.postMessage({
                type: 'OPEN_VIDEO',
                url: this.videoFrame.src,
                title: video.titulo,
                summary: summaryHTML
            }, '*');
            this.videoFrame.src = ''; // Limpiar local para ahorrar recursos
            document.getElementById('modalContent').innerHTML = '';
            return;
        }

        // Mostrar modal
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    },

    /**
     * Carga y muestra el resumen del video
     */
    async loadAndDisplaySummary(video) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = '<p style="text-align: center; color: var(--text-muted);">Cargando resumen...</p>';

        // Caso especial: bloque de Microservicios
        if (video.isMicroservicios) {
            const summary = typeof MICROSERVICIOS_SUMMARIES !== 'undefined' ? MICROSERVICIOS_SUMMARIES[video.numero] : null;

            if (summary) {
                modalContent.innerHTML = this.renderSummary(summary);
            } else {
                modalContent.innerHTML = `
                    <div class="important-note" style="border-left: 4px solid var(--primary);">
                        <h4 style="color: var(--primary);"><i class="fas fa-clock"></i> Resumen en Proceso</h4>
                        <p>El resumen didáctico detallado para esta clase de <strong>Microservicios</strong> está siendo procesado y aparecerá aquí muy pronto.</p>
                    </div>
                `;
            }
            return;
        }

        try {
            // Intentar cargar el resumen desde JSON
            const summary = await DataLoader.loadSummary(video.idVideo);

            if (summary) {
                modalContent.innerHTML = this.renderSummary(summary);
            } else {
                // Si no hay resumen, mostrar información básica
                modalContent.innerHTML = this.renderBasicInfo(video);
            }

            // Agregar material de apoyo si existe
            if (video.materiales && video.materiales.length > 0) {
                const materialsSection = this.renderMaterials(video.materiales);
                modalContent.innerHTML += materialsSection;
            }
        } catch (error) {
            console.error('Error al cargar resumen:', error);
            modalContent.innerHTML = `
                <div class="important-note">
                    <h4><i class="fas fa-info-circle"></i> Resumen no disponible</h4>
                    <p>${CONFIG.MESSAGES.ERROR_SUMMARY}</p>
                </div>
            `;
        }
    },

    /**
     * Renderiza el resumen del video desde el JSON
     */
    renderSummary(summary) {
        let html = '<div class="summary-section">';

        // Título del resumen
        if (summary.titulo) {
            html += `<h3><i class="fas fa-book-open"></i> ${summary.titulo}</h3>`;
        }

        // Resumen general
        if (summary.resumen) {
            html += `<p>${summary.resumen}</p>`;
        }

        // Puntos clave
        if (summary.puntosClave && summary.puntosClave.length > 0) {
            html += '<div class="key-points"><h4><i class="fas fa-check-circle"></i> Puntos Clave</h4><ul>';
            summary.puntosClave.forEach(punto => {
                html += `<li>${punto}</li>`;
            });
            html += '</ul></div>';
        }

        // Conceptos importantes
        if (summary.conceptos && summary.conceptos.length > 0) {
            html += '<div class="important-note"><h4><i class="fas fa-lightbulb"></i> Conceptos Importantes</h4><ul>';
            summary.conceptos.forEach(concepto => {
                html += `<li><strong>${concepto.nombre}:</strong> ${concepto.descripcion}</li>`;
            });
            html += '</ul></div>';
        }

        // Código de ejemplo
        if (summary.codigoEjemplo) {
            html += `<div class="code-block"><code>${this.escapeHtml(summary.codigoEjemplo)}</code></div>`;
        }

        html += '</div>';
        return html;
    },

    /**
     * Renderiza información básica cuando no hay resumen disponible
     */
    renderBasicInfo(video) {
        return `
            <div class="summary-section">
                <h3><i class="fas fa-info-circle"></i> Información de la Clase</h3>
                <p><strong>Título:</strong> ${video.titulo}</p>
                <p><strong>Número de clase:</strong> ${video.numero}</p>
                ${video.subtitulo ? '<p><i class="fas fa-closed-captioning"></i> Subtítulos disponibles</p>' : ''}
                <div class="important-note">
                    <h4>Resumen en proceso</h4>
                    <p>El resumen didáctico de esta clase se está generando. Por favor, vuelve más tarde.</p>
                </div>
            </div>
        `;
    },

    /**
     * Renderiza la sección de materiales de apoyo
     */
    renderMaterials(materiales) {
        let html = '<div class="summary-section" style="margin-top: 2rem; border-top: 1px solid var(--border); padding-top: 2rem;">';
        html += '<h3><i class="fas fa-paperclip"></i> Material de Apoyo</h3>';
        html += '<div style="display: grid; gap: 0.75rem;">';

        materiales.forEach(material => {
            const icon = this.getMaterialIcon(material.tipo);
            const isHtml = material.tipo && material.tipo.toLowerCase().includes('html');

            // Prioridad para HTML: RedirectUrl (extral) > Path (local) > Google Drive
            let url = CONFIG.DRIVE.FILE_VIEW_URL.replace('{FILE_ID}', material.id);

            if (isHtml) {
                if (material.redirectUrl) {
                    url = material.redirectUrl;
                } else if (material.path) {
                    url = material.path;
                }
            }

            html += `
                <a href="${url}" target="_blank" 
                   style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--bg-main); border-radius: var(--radius-md); text-decoration: none; color: var(--text-primary); transition: all 0.2s;"
                   onmouseover="this.style.background='var(--bg-elevated)'; this.style.transform='translateX(4px)';"
                   onmouseout="this.style.background='var(--bg-main)'; this.style.transform='translateX(0)';">
                    <i class="${icon}" style="font-size: 1.5rem; color: var(--primary);"></i>
                    <div style="flex: 1;">
                        <div style="font-weight: 600;">${material.nombre}</div>
                        <div style="font-size: 0.8rem; color: var(--text-muted);">${isHtml ? 'PÁGINA WEB' : material.tipo.toUpperCase()}</div>
                    </div>
                    <i class="fas ${isHtml ? 'fa-window-maximize' : 'fa-external-link-alt'}" style="color: var(--text-muted);"></i>
                </a>
            `;
        });

        html += '</div></div>';
        return html;
    },

    /**
     * Obtiene el icono apropiado según el tipo de material
     */
    getMaterialIcon(tipo) {
        const iconMap = {
            'pdf': 'fas fa-file-pdf',
            'doc': 'fas fa-file-word',
            'docx': 'fas fa-file-word',
            'xls': 'fas fa-file-excel',
            'xlsx': 'fas fa-file-excel',
            'ppt': 'fas fa-file-powerpoint',
            'pptx': 'fas fa-file-powerpoint',
            'zip': 'fas fa-file-archive',
            'rar': 'fas fa-file-archive',
            '7z': 'fas fa-file-archive',
            'jpg': 'fas fa-file-image',
            'jpeg': 'fas fa-file-image',
            'png': 'fas fa-file-image',
            'gif': 'fas fa-file-image',
            'html': 'fas fa-file-code',
            'htm': 'fas fa-file-code'
        };

        return iconMap[tipo.toLowerCase()] || 'fas fa-file';
    },

    /**
     * Cierra el modal y detiene el video
     */
    closeVideo() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.videoFrame.src = '';
        this.currentVideo = null;
    },

    /**
     * Escapa HTML para prevenir XSS
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
};

// Función global para cerrar el video (compatibilidad con HTML existente)
function closeVideo() {
    VideoPlayer.closeVideo();
}
