/**
 * SISTEMA DE MODALES - PORTAL JAVA BÁSICO
 * =====================================
 * Gestión de modales para reproducción de videos y visualización de contenido
 */

const Modal = {
  modalActual: null,

  /**
   * Abre modal de video
   * @param {number} seccion - Número de sección (1-12)
   * @param {number} numeroVideo - Número del video global
   */
  abrirVideo(seccion, numeroVideo) {
    console.log('Intentando abrir video:', seccion, numeroVideo);

    // 1. Obtener datos del video
    const seccionKey = `seccion${seccion}`;
    const seccionVideos = DRIVE_DATA[seccionKey]?.videos || [];
    const videoData = seccionVideos.find(v => v.numero === numeroVideo);

    if (!videoData) {
      console.error('❌ Video no encontrado en datos:', seccion, numeroVideo);
      alert('Error: No se encontraron los datos del video.');
      return;
    }

    console.log('✅ Datos de video encontrados:', videoData);

    // 2. Obtener resumen
    const videoId = `${seccion}-${numeroVideo}`;
    const resumenObj = RESUMENES[numeroVideo]; // Acceso directo por número global
    const resumenBloques = resumenObj?.bloques;

    if (!resumenBloques) {
      console.warn('⚠️ No hay resumen para el video:', numeroVideo);
    }

    const videoUrl = Utils.getVideoEmbedUrl(videoData.driveId);

    // Construir el contenido del resumen y materiales
    const summaryHTML = `
      ${videoData.materiales ? this.renderMateriales(videoData.materiales) : ''}
      <div class="summary-content-body">
        ${Utils.renderizarResumenJSON(resumenBloques)}
      </div>
    `;

    // BRIDGE: Si estamos en un iframe, usar el reproductor del padre
    if (window.parent !== window) {
      window.parent.postMessage({
        type: 'OPEN_VIDEO',
        url: videoUrl,
        title: videoData.titulo,
        summary: summaryHTML
      }, '*');
      return;
    }

    // 3. Crear HTML del modal
    const modalHTML = `
      <div class="modal" id="modal-video-${videoId}" style="display: block; z-index: 9999;">
        <div class="modal-content">
          <div class="modal-header">
            <h2>
              <i class="fas fa-play-circle"></i>
              ${videoData.titulo}
            </h2>
            <div class="modal-header-actions">
                <span class="close" onclick="Modal.cerrar('modal-video-${videoId}')" style="cursor: pointer; font-size: 2rem;">&times;</span>
            </div>
          </div>
          <div class="modal-body">
            <!-- VIDEO -->
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
            
            <!-- ACCIONES VIDEO -->
            <div class="video-actions">
              <button 
                class="btn-marcar-visto ${Storage.esVideoVisto(videoId) ? 'visto' : ''}" 
                onclick="Modal.toggleVideoVisto('${videoId}', ${seccion}, ${numeroVideo})"
                id="btn-visto-${videoId}">
                <i class="fas fa-check-circle"></i>
                ${Storage.esVideoVisto(videoId) ? 'Marcado como visto' : 'Marcar como visto'}
              </button>
            </div>

            <!-- MATERIALES -->
            ${videoData.materiales ? this.renderMateriales(videoData.materiales) : ''}

            <!-- RESUMEN -->
            <div class="summary-content-body">
              ${Utils.renderizarResumenJSON(resumenBloques)}
            </div>
          </div>
        </div>
      </div>
    `;

    // 4. Limpiar modales antiguos
    const existente = document.getElementById(`modal-video-${videoId}`);
    if (existente) {
      existente.remove();
    }

    // 5. Insertar en el DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    console.log('✅ Modal insertado en el DOM');

    // 6. Configurar cierre al hacer clic fuera
    const modal = document.getElementById(`modal-video-${videoId}`);
    this.modalActual = modal;

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
      const url = esHTML ? Utils.getPreviewUrl(material.driveId) : Utils.getDownloadUrl(material.driveId);
      const icono = esHTML ? 'fa-file-code' : 'fa-download';
      // SIEMPRE abrir en nueva pestaña para evitar recargar la app y perder estado
      const target = '_blank';
      const rel = 'noopener noreferrer';

      return `
        <a href="${url}" target="${target}" rel="${rel}" class="material-link" title="${material.nombre}">
          <i class="fas ${icono}"></i>
          <span class="material-name">${material.nombre}</span>
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
   * @param {string} videoId - ID del video (seccion-numero)
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

    // Notificar al portal principal para sincronizar progreso a Supabase
    if (window.parent !== window) {
      window.parent.postMessage({ type: 'VIDEO_WATCHED' }, '*');
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
      setTimeout(() => modal.remove(), 100);
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

// Hacer global explícitamente para asegurar que onclick funcione
window.Modal = Modal;

// Exportar
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Modal };
}
