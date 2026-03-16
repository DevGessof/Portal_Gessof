/**
 * UTILIDADES GENERALES - PORTAL APIGEE X
 * =======================================
 */

const Utils = {
    /**
     * Genera URL de embed de Google Drive para videos
     * @param {string} driveId - ID del archivo en Google Drive
     * @returns {string} URL de embed
     */
    getVideoEmbedUrl(driveId) {
        return `https://drive.google.com/file/d/${driveId}/preview`;
    },

    /**
     * Genera URL de descarga de Google Drive
     * @param {string} driveId - ID del archivo en Google Drive
     * @returns {string} URL de descarga
     */
    getDownloadUrl(driveId) {
        return `https://drive.google.com/uc?export=download&id=${driveId}`;
    },

    /**
     * Genera URL de vista previa para archivos HTML
     * @param {string} driveId - ID del archivo en Google Drive
     * @returns {string} URL de vista previa
     */
    getPreviewUrl(driveId) {
        return `https://drive.google.com/file/d/${driveId}/preview`;
    },

    /**
     * Determina si un archivo es HTML
     * @param {string} tipo - Tipo MIME del archivo
     * @returns {boolean}
     */
    esArchivoHTML(tipo) {
        return tipo === 'text/html';
    },

    /**
     * Sanitiza texto HTML para prevenir XSS
     * @param {string} texto - Texto a sanitizar
     * @returns {string} Texto sanitizado
     */
    sanitizarHTML(texto) {
        const div = document.createElement('div');
        div.textContent = texto;
        return div.innerHTML;
    },

    /**
     * Formatea el resumen de un video con bloques didácticos segmentados (Estilo JSB Premium Adaptativo)
     * @param {string} texto - Resumen completo
     * @returns {string} HTML formateado
     */
    formatearResumenProfesional(texto) {
        if (!texto) return '<p class="text-muted">No hay resumen disponible para este video.</p>';

        let html = '';
        const lineas = texto.split('\n');
        let enLista = false;
        let bloqueAbierto = false;

        lineas.forEach(linea => {
            const trimmed = linea.trim();

            // 1. Filtrar separadores (=======)
            if (trimmed.includes('====') || trimmed.includes('----')) return;

            if (!trimmed) {
                if (enLista) {
                    html += '</ul>';
                    enLista = false;
                }
                return;
            }

            // 2. Detectar títulos de sección (Mayúsculas, signo de interrogación o palabra clave)
            const esTitulo = (trimmed.toUpperCase() === trimmed && trimmed.length > 5 && !trimmed.includes(':') && !trimmed.includes('.')) ||
                trimmed.startsWith('¿') ||
                (trimmed.endsWith(':') && trimmed.length < 60);

            if (esTitulo) {
                if (enLista) { html += '</ul>'; enLista = false; }
                if (bloqueAbierto) { html += '</div>'; bloqueAbierto = false; }

                // Determinar tipo de bloque y color
                let blockClass = 'summary-section';
                let icon = 'fa-book-open';
                let title = trimmed.replace(':', '').trim();

                // Detección mejorada de temas para clases específicas
                const lower = trimmed.toUpperCase();
                if (lower.includes('APRENDER') || lower.includes('ENTENDIDO') || lower.includes('CLAVE') || lower.includes('ÉXITO')) {
                    blockClass = 'key-points';
                    icon = 'fa-check-double';
                } else if (lower.includes('IMPORTANTE') || lower.includes('CUIDADO') || lower.includes('ADVERTENCIA')) {
                    blockClass = 'important-note';
                    icon = 'fa-triangle-exclamation';
                }

                if (blockClass === 'summary-section') {
                    html += `
                        <div class="summary-section">
                            <h3><i class="fas ${icon}"></i> ${title}</h3>
                    `;
                } else {
                    html += `
                        <div class="${blockClass}">
                            <h4 style="margin-bottom: 0.5rem; color: inherit;"><i class="fas ${icon}"></i> ${title}</h4>
                    `;
                }
                bloqueAbierto = true;
                return;
            }

            // Si no hay bloque abierto, abrir uno por defecto
            if (!bloqueAbierto) {
                html += '<div class="summary-section">';
                bloqueAbierto = true;
            }

            // 3. Detectar listas
            if (trimmed.startsWith('-') || trimmed.startsWith('*') || /^\d+[\.\)]/.test(trimmed)) {
                if (!enLista) {
                    html += '<ul class="summary-list">';
                    enLista = true;
                }
                const itemTexto = trimmed.replace(/^[-*]|\d+[\.\)]\s*/, '').trim();
                html += `<li>${itemTexto}</li>`;
                return;
            }

            // 4. Párrafo normal
            if (enLista) {
                html += '</ul>';
                enLista = false;
            }
            html += `<p class="summary-paragraph">${trimmed}</p>`;
        });

        // Cerrar etiquetas abiertas
        if (enLista) html += '</ul>';
        if (bloqueAbierto) html += '</div>';

        return `<div class="professional-summary">${html}</div>`;
    },

    /**
     * Formatea texto preservando saltos de línea
     * @param {string} texto - Texto a formatear
     * @returns {string} Texto formateado con <br>
     */
    formatearTexto(texto) {
        if (!texto) return '';
        return texto.replace(/\n/g, '<br>');
    },

    /**
     * Calcula porcentaje de progreso
     * @param {number} completados - Número de items completados
     * @param {number} total - Total de items
     * @returns {number} Porcentaje (0-100)
     */
    calcularPorcentaje(completados, total) {
        if (total === 0) return 0;
        return Math.round((completados / total) * 100);
    },

    /**
     * Debounce para optimizar eventos
     * @param {Function} func - Función a ejecutar
     * @param {number} wait - Tiempo de espera en ms
     * @returns {Function} Función con debounce
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Scroll suave a un elemento
     * @param {string} elementId - ID del elemento
     */
    scrollSuave(elementId) {
        const elemento = document.getElementById(elementId);
        if (elemento) {
            elemento.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Utils };
}
