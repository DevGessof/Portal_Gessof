/**
 * COMPONENTES CONSOLIDADOS - PORTAL APIGEE X
 * ===========================================
 * Navbar, Inicio, Herramientas, Curso y Glosario
 */

// ========== NAVBAR ==========
const Navbar = {
  init() {
    // La navegación se maneja con onclick en el HTML
  },

  switchTab(event, sectionId) {
    // Remover active de todos los tabs
    document.querySelectorAll('.main-nav-tab').forEach(tab => {
      tab.classList.remove('active');
    });

    // Agregar active al tab clickeado
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }

    // Ocultar todas las secciones
    document.querySelectorAll('.main-content-section').forEach(section => {
      section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const section = document.getElementById(sectionId);
    if (section) {
      section.classList.add('active');
    }
  }
};

// ========== INICIO ==========
const Inicio = {
  render() {
    // La sección de inicio está en el HTML base
    // Aquí solo actualizamos datos dinámicos si es necesario
  }
};

// ========== HERRAMIENTAS ==========
const Herramientas = {
  render() {
    const container = document.getElementById('herramientas-grid');
    if (!container) return;

    const herramientas = CONFIG.HERRAMIENTAS || [];

    const html = herramientas.map(h => `
      <div class="module">
        <div class="module-icon" style="background: linear-gradient(135deg, ${h.color} 0%, ${h.color}dd 100%);"><i class="${h.icono}"></i></div>
        <h3>${h.nombre}</h3>
        <p>${h.descripcion}</p>
        <a href="${h.url}" target="_blank" rel="noopener">
          Visitar sitio oficial <i class="fas fa-external-link-alt"></i>
        </a>
      </div>
    `).join('');

    container.innerHTML = html;
  }
};

// ========== CURSO ==========
const Curso = {
  renderSeccion(numeroSeccion) {
    const seccionKey = `seccion${numeroSeccion}`;
    const seccionData = DRIVE_DATA[seccionKey];

    if (!seccionData) return '';

    const videosHTML = seccionData.videos.map((video, index) => {
      const videoId = `${numeroSeccion}-${video.numero}`;
      const estaVisto = Storage.esVideoVisto(videoId);
      const esFavorito = Storage.esVideoFavorito(videoId);

      return `
        <div class="video-card ${estaVisto ? 'watched' : ''}" 
             data-video="${videoId}"
             onclick="Modal.abrirVideo(${numeroSeccion}, ${video.numero})">
          <input 
            type="checkbox" 
            class="video-checkbox" 
            ${estaVisto ? 'checked' : ''}
            data-video-id="${videoId}"
            onclick="event.stopPropagation(); Curso.toggleVideo('${videoId}', ${numeroSeccion}, ${video.numero})"
          />
          <div class="video-thumbnail">
            <i class="fas fa-play-circle"></i>
            <div class="play-overlay">
              <div class="play-icon"><i class="fas fa-play"></i></div>
            </div>
            <button class="video-important-btn ${esFavorito ? 'active' : ''}" 
                    title="${esFavorito ? 'Quitar de favoritos' : 'Marcar como favorito'}" 
                    onclick="event.stopPropagation(); Curso.toggleFavorito('${videoId}', this)">
              <i class="fas fa-star"></i>
            </button>
          </div>
          <div class="video-info">
            <span class="video-number">Video ${video.numero}</span>
            <h3 class="video-title">${video.titulo}</h3>
          </div>
        </div>
      `;
    }).join('');

    const configSeccion = CONFIG.SECCIONES[numeroSeccion] || {};
    const icons = {
      1: 'fa-gears',
      2: 'fa-box',
      3: 'fa-users',
      4: 'fa-briefcase',
      5: 'fa-shield-halved',
      6: 'fa-chart-line'
    };

    return `
      <div class="seccion-curso" id="seccion-${numeroSeccion}">
        <div class="seccion-header">
          <div class="seccion-title">
            <div class="seccion-icon"><i class="fas ${icons[numeroSeccion] || 'fa-folder'}"></i></div>
            <div>
              <h2>Sección ${numeroSeccion}: ${configSeccion.nombre || seccionData.nombre}</h2>
              <p class="seccion-descripcion">${configSeccion.descripcion || ''}</p>
              <span class="video-count-badge"><i class="fas fa-video"></i> ${seccionData.videos.length} videos</span>
            </div>
          </div>
        </div>
        <div class="carousel-wrapper">
          <div class="videos-grid" id="carousel-${numeroSeccion}">
            ${videosHTML}
          </div>
          <button class="carousel-btn prev" onclick="Curso.scrollCarousel(${numeroSeccion}, 'prev')">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="carousel-btn next" onclick="Curso.scrollCarousel(${numeroSeccion}, 'next')">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div >
  `;
  },

  renderTodasSecciones() {
    const container = document.getElementById('curso-container');
    if (!container) return;

    let html = '';
    for (let i = 1; i <= 12; i++) {
      html += this.renderSeccion(i);
    }

    container.innerHTML = html;
  },

  scrollCarousel(seccion, direction) {
    const carousel = document.getElementById(`carousel - ${seccion} `);
    if (!carousel) return;

    const scrollAmount = 320; // Ancho de card + gap
    const currentScroll = carousel.scrollLeft;

    if (direction === 'prev') {
      carousel.scrollTo({
        left: currentScroll - scrollAmount,
        behavior: 'smooth'
      });
    } else {
      carousel.scrollTo({
        left: currentScroll + scrollAmount,
        behavior: 'smooth'
      });
    }
  },

  toggleVideo(videoId, seccion, numeroVideo) {
    const estaVisto = Storage.esVideoVisto(videoId);

    if (estaVisto) {
      Storage.desmarcarVideoVisto(videoId);
    } else {
      Storage.marcarVideoVisto(videoId);
    }

    // Actualizar clase de la tarjeta
    const card = document.querySelector(`[data - video= "${videoId}"]`);
    if (card) {
      card.classList.toggle('watched', !estaVisto);
    }
  },

  toggleFavorito(videoId, button) {
    const nuevoEstado = Storage.toggleFavorito(videoId);

    // Actualizar clase del botón
    if (nuevoEstado) {
      button.classList.add('active');
      button.title = 'Quitar de favoritos';
    } else {
      button.classList.remove('active');
      button.title = 'Marcar como favorito';
    }
  }
};

// ========== GLOSARIO ==========
const Glosario = {
  categoriaExpandida: null,

  render() {
    const container = document.getElementById('glosario-container');
    if (!container) return;

    const categorias = obtenerCategorias();

    let html = '';

    categorias.forEach(categoria => {
      const terminos = obtenerTerminosPorCategoria(categoria);

      // Crear sección por categoría
      html += `
        <div class="glossary-category-section">
          <h3 class="category-title">${categoria.toUpperCase()}</h3>
          <div class="glossary-grid">
      `;

      // Crear tarjetas de términos
      terminos.forEach(t => {
        html += `
                    <div class="glossary-card">
                        <div class="glossary-card-header">
                            <h4>${t.termino}</h4>
                        </div>
                        <p><strong>Definición:</strong> ${t.definicion}</p>
                        <p class="glossary-purpose"><strong>Propósito:</strong> ${t.proposito}</p>
                    </div>
                `;
      });

      html += `
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  },

  toggleCategoria(categoria) {
    // Ya no se usa con el nuevo diseño de tarjetas
    // Mantenido por compatibilidad
  },

  buscar(termino) {
    if (!termino || termino.trim() === '') {
      this.render();
      return;
    }

    const resultados = buscarEnGlosario(termino);
    const container = document.getElementById('glosario-container');

    if (resultados.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 4rem 2rem; color: var(--text-muted);">
          <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.3;"></i>
          <p>No se encontraron términos que coincidan con "${termino}"</p>
        </div>
      `;
      return;
    }

    // Mostrar resultados como tarjetas
    let html = `
      <div class="glossary-category-section">
        <h3 class="category-title">RESULTADOS DE BÚSQUEDA (${resultados.length})</h3>
        <div class="glossary-grid">
    `;

    resultados.forEach(t => {
      html += `
                <div class="glossary-card">
                    <div class="glossary-card-header">
                        <h4>${t.termino}</h4>
                        <span class="glossary-tag">${t.categoria}</span>
                    </div>
                    <p><strong>Definición:</strong> ${t.definicion}</p>
                    <p class="glossary-purpose"><strong>Propósito:</strong> ${t.proposito}</p>
                </div>
            `;
    });

    html += `
        </div>
      </div>
    `;

    container.innerHTML = html;
  }
};

// Funciones globales para onclick en HTML
function switchMainTab(event, sectionId) {
  Navbar.switchTab(event, sectionId);
}

function toggleTheme() {
  ThemeToggle.toggle();
}

function changeUser() {
  UserManager.cambiarUsuario();
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Navbar, Inicio, Herramientas, Curso, Glosario };
}
