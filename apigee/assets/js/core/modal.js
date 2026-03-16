/**
 * SISTEMA DE MODALES - PORTAL APIGEE X
 * =====================================
 * Gestión de modales para reproducción de videos y visualización de contenido
 */

const Modal = {
  modalActual: null,

  /**
   * Abre modal de video
   * @param {number} seccion - Número de sección (1-6)
   * @param {number} numeroVideo - Número del video dentro de la sección
   */
  abrirVideo(seccion, numeroVideo) {
    const seccionKey = `seccion${seccion}`;
    const videoData = DRIVE_DATA[seccionKey]?.videos[numeroVideo - 1];

    if (!videoData) {
      console.error('Video no encontrado:', seccion, numeroVideo);
      return;
    }

    const videoId = `${seccion}-${numeroVideo}`;
    const resumenCompleto = RESUMENES_COMPLETOS[seccionKey]?.[numeroVideo];
    const videoUrl = Utils.getVideoEmbedUrl(videoData.idDrive);

    // Construir el contenido del resumen y materiales para ambos casos (iframe y modal local)
    const summaryContentHTML = `
      ${videoData.materiales ? this.renderMateriales(videoData.materiales) : ''}
      <div class="summary-content-body">
        ${Utils.formatearResumenProfesional(resumenCompleto)}
      </div>
    `;

    // BRIDGE: Si estamos en un iframe, usar el reproductor del padre
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'OPEN_VIDEO',
        url: videoUrl,
        title: videoData.titulo,
        summary: summaryContentHTML
      }, '*');
      return;
    }

    // Crear modal
    const modalHTML = `
      <div class="modal" id="modal-video-${videoId}">
        <div class="modal-content">
          <div class="modal-header">
            <h2>
              <i class="fas fa-play-circle"></i>
              ${videoData.titulo}
            </h2>
            <div class="modal-header-actions">
              <span class="close" onclick="Modal.cerrar('modal-video-${videoId}')">&times;</span>
            </div>
          </div>
          <div class="modal-body">
            <div class="video-container">
              <iframe
                src="${videoUrl}"
                width="100%"
                height="450"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                frameborder="0"
                allowfullscreen>
              </iframe>
            </div>

            <div class="video-actions">
              <button
                class="btn-marcar-visto ${Storage.esVideoVisto(videoId) ? 'visto' : ''}"
                onclick="Modal.toggleVideoVisto('${videoId}', ${seccion}, ${numeroVideo})"
                id="btn-visto-${videoId}">
                <i class="fas fa-check-circle"></i>
                ${Storage.esVideoVisto(videoId) ? 'Marcado como visto' : 'Marcar como visto'}
              </button>
            </div>

            ${videoData.materiales ? this.renderMateriales(videoData.materiales) : ''}

            <div class="summary-content-body">
              ${Utils.formatearResumenProfesional(resumenCompleto)}
            </div>
          </div>
        </div>
      </div>
    `;

    // Agregar al DOM
    const existente = document.getElementById(`modal-video-${videoId}`);
    if (existente) {
      existente.remove();
    }

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // Mostrar modal
    const modal = document.getElementById(`modal-video-${videoId}`);
    modal.style.display = 'block';
    this.modalActual = modal;

    // Cerrar al hacer clic fuera
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        this.cerrar(`modal-video-${videoId}`);
      }
    });
  },

  /**
   * Renderiza materiales de apoyo
   * @param {Array} materiales - Array de materiales
   * @returns {string} HTML de materiales
   */
  renderMateriales(materiales) {
    if (!materiales || materiales.length === 0) return '';

    const materialesHTML = materiales.map(material => {
      const esHTML = Utils.esArchivoHTML(material.tipo);
      const url = esHTML ? Utils.getPreviewUrl(material.idDrive) : Utils.getDownloadUrl(material.idDrive);
      const icono = esHTML ? 'fa-file-code' : 'fa-download';
      const target = esHTML ? '_blank' : '_self';

      return `
        <a href="${url}" target="${target}" class="material-link">
          <i class="fas ${icono}"></i>
          ${material.nombre}
        </a>
      `;
    }).join('');

    return `
      <div class="materiales-section">
        <h3><i class="fas fa-paperclip"></i> Material de Apoyo</h3>
        <div class="materiales-grid">
          ${materialesHTML}
        </div>
      </div>
    `;
  },

  /**
   * Toggle estado de video visto
   * @param {string} videoId - ID del video
   * @param {number} seccion - Número de sección
   * @param {number} numeroVideo - Número del video
   */
  toggleVideoVisto(videoId, seccion, numeroVideo) {
    const estaVisto = Storage.esVideoVisto(videoId);
    const btn = document.getElementById(`btn-visto-${videoId}`);

    if (estaVisto) {
      Storage.desmarcarVideoVisto(videoId);
      if (btn) {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Marcar como visto';
        btn.classList.remove('visto');
      }
    } else {
      Storage.marcarVideoVisto(videoId);
      if (btn) {
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Marcado como visto';
        btn.classList.add('visto');
      }
    }

    // Actualizar checkbox en la tarjeta
    const checkbox = document.querySelector(`[data-video-id="${videoId}"]`);
    if (checkbox) {
      checkbox.checked = !estaVisto;
    }

    // Actualizar clase de la tarjeta
    const card = document.querySelector(`[data-video="${videoId}"]`);
    if (card) {
      card.classList.toggle('watched', !estaVisto);
    }
  },

  /**
   * Cierra un modal
   * @param {string} modalId - ID del modal
   */
  cerrar(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none';
      // Remover del DOM después de la animación
      setTimeout(() => modal.remove(), 300);
      this.modalActual = null;
    }
  },

  /**
   * Cierra todos los modales
   */
  cerrarTodos() {
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
      modal.style.display = 'none';
      modal.remove();
    });
    this.modalActual = null;
  }
};

// Cerrar modal con tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && Modal.modalActual) {
    Modal.cerrarTodos();
  }
});

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Modal };
}
