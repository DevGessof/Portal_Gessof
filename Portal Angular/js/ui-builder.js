/**
 * GESSOF Academy - UI Builder
 * Portal: Angular de Cero a Experto
 */

const UIBuilder = {
    /**
     * Renderiza las secciones del curso
     */
    renderCourseSections(sections) {
        const container = document.getElementById('section-clases');
        if (!container) return;

        container.innerHTML = '';
        
        // Bloque intro
        container.appendChild(this.createCourseIntroBlock());

        // Secciones
        sections.forEach(section => {
            container.appendChild(this.createSectionElement(section));
        });
    },

    createCourseIntroBlock() {
        const intro = document.createElement('div');
        intro.className = 'section-block';
        intro.style.cssText = 'border-left: 6px solid var(--primary); background: var(--bg-card); padding: 2.5rem; border-radius: 20px; box-shadow: var(--shadow-md); margin-bottom: 3rem;';
        
        intro.innerHTML = `
            <div style="display:flex; align-items:center; gap:1.5rem; margin-bottom:1.5rem;">
                <div style="width:60px; height:60px; background:rgba(221,0,49,0.1); border-radius:50%; display:flex; align-items:center; justify-content:center;">
                    <i class="fas fa-graduation-cap" style="font-size:2rem; color:var(--primary);"></i>
                </div>
                <div>
                    <h3 style="margin:0; font-size:1.5rem; font-weight:800; color:var(--text-primary);">Angular de Cero a Experto</h3>
                    <p style="margin:0; color:var(--text-muted); font-size:0.95rem;">Ruta de aprendizaje enfocada en Microservicios e integración empresarial.</p>
                </div>
            </div>
            <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-top: 1.5rem;">
                <div style="background:var(--bg-main); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);">
                    <strong style="display:block; margin-bottom: 0.3rem; color: var(--primary);">🎯 Foco Principal</strong>
                    <span style="font-size:0.85rem; color: var(--text-secondary);">Consumo, integración y autenticación de microservicios.</span>
                </div>
                <div style="background:var(--bg-main); padding: 1rem; border-radius: 12px; border: 1px solid var(--border);">
                    <strong style="display:block; margin-bottom: 0.3rem; color: var(--accent-orange);">⚠️ Prioridades</strong>
                    <span style="font-size:0.85rem; color: var(--text-secondary);">S3, S4, S5, S6, S7, S11, S18-S23 son imprescindibles.</span>
                </div>
            </div>
        `;
        return intro;
    },

    createSectionElement(section) {
        const sectionDiv = document.createElement('div');
        sectionDiv.className = 'course-section';
        sectionDiv.id = `seccion-${section.numero}`;

        const vCount = section.items.filter(i => i.type === 'video').length;
        const mCount = section.items.filter(i => i.type === 'material').length;

        const header = document.createElement('div');
        header.className = 'section-header-block';
        header.style.cssText = 'margin: 3.5rem 0 1.5rem; display: flex; align-items: center; gap: 1.25rem;';
        
        header.innerHTML = `
            <div class="section-number" style="width:50px; height:50px; background:linear-gradient(135deg, var(--primary), var(--primary-dark)); border-radius:14px; display:flex; align-items:center; justify-content:center; color:white; font-weight:800; font-size:1.2rem; flex-shrink:0;">
                ${section.numero}
            </div>
            <div style="flex:1;">
                <h2 style="font-size:1.6rem; font-weight:800; color:var(--text-primary); margin:0;">${section.nombre}</h2>
                <p style="color:var(--text-muted); font-size:0.85rem; margin:0.2rem 0 0;">
                    ${vCount} clases ${mCount > 0 ? `+ ${mCount} recursos` : ''}
                </p>
            </div>
        `;

        sectionDiv.appendChild(header);

        if (section.items.length > 0) {
            sectionDiv.appendChild(this.createCarousel(section));
        }
        return sectionDiv;
    },

    createCarousel(section) {
        const wrapper = document.createElement('div');
        wrapper.className = 'carousel-wrapper';
        wrapper.style.position = 'relative';

        const grid = document.createElement('div');
        grid.className = 'videos-grid';
        grid.style.cssText = 'display: flex; gap: 1.5rem; overflow-x: auto; padding: 1rem 0.5rem 2rem; scroll-behavior: smooth;';

        section.items.forEach((item, index) => {
            if (item.type === 'video') {
                grid.appendChild(this.createVideoCard(item, section.numero, index));
            } else {
                grid.appendChild(this.createMaterialCard(item, section.numero, index));
            }
        });

        wrapper.appendChild(grid);

        // Botones de navegación
        const left = document.createElement('button');
        left.className = 'carousel-btn carousel-btn-left';
        left.innerHTML = '<i class="fas fa-chevron-left"></i>';
        left.onclick = () => grid.scrollBy({ left: -320, behavior: 'smooth' });

        const right = document.createElement('button');
        right.className = 'carousel-btn carousel-btn-right';
        right.innerHTML = '<i class="fas fa-chevron-right"></i>';
        right.onclick = () => grid.scrollBy({ left: 320, behavior: 'smooth' });

        wrapper.appendChild(left);
        wrapper.appendChild(right);

        return wrapper;
    },

    createVideoCard(video, seccionNum, index) {
        const card = document.createElement('div');
        card.className = 'video-card item-card';
        card.dataset.seccion = seccionNum;
        card.dataset.index = index;
        card.dataset.videoId = video.idVideo;

        card.innerHTML = `
            <div class="item-thumbnail" style="aspect-ratio:16/9; position:relative; overflow:hidden; border-radius:12px; background: #1a1a1a;">
                <div style="width:100%; height:100%; background: linear-gradient(45deg, #dd0031, #b30026); display:flex; align-items:center; justify-content:center; color:white;">
                    <i class="fab fa-angular" style="font-size:3.5rem; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));"></i>
                    <span style="position:absolute; bottom:12px; right:12px; background:rgba(0,0,0,0.6); padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700;">VIDEO</span>
                </div>
                <div class="play-overlay">
                    <div class="play-icon"><i class="fas fa-play"></i></div>
                </div>
            </div>
            <div class="item-info" style="padding: 1.25rem; flex:1; display:flex; flex-direction:column;">
                <span style="font-size:0.7rem; font-weight:800; color:var(--primary); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">Clase ${video.numero}</span>
                <h3 class="video-title" style="font-size:1.1rem; font-weight:700; color:var(--text-primary); line-height:1.35; margin:0 0 1rem; min-height:2.7rem; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${video.titulo}</h3>
                <div class="card-action-btn" style="margin-top:auto; width:100%; padding: 10px; border: 1px solid var(--primary); background: transparent; color: var(--primary); border-radius: 10px; font-weight:700; font-size:0.85rem; display:flex; align-items:center; justify-content:center; gap:8px; transition:0.2s;">
                    <i class="fas fa-play-circle"></i> Ver Clase
                </div>
            </div>
        `;

        card.onclick = () => VideoPlayer.openVideo(video.idVideo, seccionNum, index);
        return card;
    },

    createMaterialCard(material, seccionNum, index) {
        const card = document.createElement('div');
        card.className = 'video-card item-card material-card';
        card.style.borderStyle = 'dashed';

        let icon = 'fa-file-download';
        let label = 'Descargar Recurso';
        let color = '#475569';
        
        if (material.isLink) {
            icon = 'fa-external-link-alt';
            label = 'Abrir Enlace';
            color = '#3b82f6';
        } else if (material.formato === 'zip' || material.formato === 'rar') {
            icon = 'fa-file-archive';
            color = '#f59e0b';
        } else if (material.formato === 'pdf') {
            icon = 'fa-file-pdf';
            color = '#ef4444';
        }

        card.innerHTML = `
            <div class="item-thumbnail" style="aspect-ratio:16/9; position:relative; overflow:hidden; border-radius:12px; background: #f8fafc;">
                <div style="width:100%; height:100%; background: ${color}15; display:flex; align-items:center; justify-content:center; flex-direction:column; color:${color};">
                    <i class="fas ${icon}" style="font-size:3.5rem; opacity:0.8;"></i>
                    <span style="position:absolute; bottom:12px; right:12px; background:${color}; color:white; padding:2px 8px; border-radius:4px; font-size:0.7rem; font-weight:700; text-transform:uppercase;">${material.formato}</span>
                </div>
                <div class="play-overlay">
                    <div class="play-icon" style="background:${color};"><i class="fas ${material.isLink ? 'fa-external-link-alt' : 'fa-download'}"></i></div>
                </div>
            </div>
            <div class="item-info" style="padding: 1.25rem; flex:1; display:flex; flex-direction:column;">
                <span style="font-size:0.7rem; font-weight:800; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; margin-bottom:0.4rem;">Material Complementario</span>
                <h3 class="video-title" style="font-size:1.1rem; font-weight:700; color:var(--text-primary); line-height:1.35; margin:0 0 1rem; min-height:2.7rem; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden;">${material.titulo}</h3>
                <div class="card-action-btn" style="margin-top:auto; width:100%; padding: 10px; border: 1px solid ${color}; background: transparent; color: ${color}; border-radius: 10px; font-weight:700; font-size:0.85rem; display:flex; align-items:center; justify-content:center; gap:8px; transition:0.2s;">
                    <i class="fas ${material.isLink ? 'fa-link' : 'fa-download'}"></i> ${label}
                </div>
            </div>
        `;
        const regId = VideoPlayer.materialRegistry.register(material);
        card.onclick = () => VideoPlayer.handleMaterialClick(regId, card);
        return card;
    },

    showLoading(c) { 
        c.innerHTML = '<div style="padding:4rem; text-align:center;"><div class="loading-spinner"></div><p style="margin-top:1rem; color:var(--text-muted);">Preparando contenido del curso...</p></div>'; 
    },
    
    showError(c, m) { 
        c.innerHTML = `<div style="padding:4rem; text-align:center; color:var(--primary);"><i class="fas fa-exclamation-circle" style="font-size:3rem; margin-bottom:1rem;"></i><p>${m}</p></div>`; 
    },

    /**
     * Renderiza el Glosario extraído del Markdown
     */
    renderGlossary(terms) {
        const container = document.getElementById('glossaryContainer');
        if (!container) return;

        container.innerHTML = '';
        container.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.5rem; margin-top: 1rem;';
        
        let currentCategory = '';
        
        terms.forEach(item => {
            // Añadir separador de categoría si cambia
            if (item.categoria !== currentCategory) {
                currentCategory = item.categoria;
                const catHeader = document.createElement('div');
                catHeader.style.cssText = 'grid-column: 1 / -1; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--border); padding-bottom: 0.5rem;';
                catHeader.innerHTML = `<h3 style="font-size:1.4rem; font-weight:800; color:var(--primary);"><i class="fas fa-bookmark" style="margin-right:8px;"></i>${currentCategory}</h3>`;
                container.appendChild(catHeader);
            }

            const card = document.createElement('div');
            card.className = 'glosario-card';
            // Guardamos text content para búsqueda
            card.dataset.search = `${item.termino} ${item.descripcion} ${item.categoria}`.toLowerCase();
            card.style.cssText = 'background:var(--bg-main); border:1px solid var(--border); border-radius:12px; padding:1.5rem; transition:0.3s; box-shadow:var(--shadow-sm);';
            card.onmouseover = () => card.style.transform = 'translateY(-3px)';
            card.onmouseout = () => card.style.transform = 'translateY(0)';

            let html = `
                <h4 style="font-size:1.1rem; font-weight:800; color:var(--text-primary); margin:0 0 0.75rem 0;">
                    <i class="fas fa-quote-right" style="color:var(--primary); font-size:0.8rem; margin-right:6px; opacity:0.6;"></i>
                    ${item.termino}
                </h4>
                <p style="font-size:0.9rem; color:var(--text-secondary); line-height:1.6; margin:0;">${this.parseMdLinks(item.descripcion)}</p>
            `;

            if (item.ejemplo && item.ejemplo.trim() !== '') {
                html += `
                    <div style="margin-top:1rem; padding:0.75rem; background:var(--bg-card); border-radius:8px; border-left:3px solid var(--primary); font-family:monospace; font-size:0.85rem; color:var(--text-muted); overflow-x:auto;">
                        ${item.ejemplo.replace(/`/g, '')}
                    </div>
                `;
            }

            card.innerHTML = html;
            container.appendChild(card);
        });
    },

    /**
     * Reemplaza links y negritas básicos de Markdown para el Glosario
     */
    parseMdLinks(text) {
        let html = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" style="color:var(--primary); text-decoration:none; font-weight:600;">$1</a>');
        html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        return html;
    },

    /**
     * Implementa la búsqueda en tiempo real del glosario
     */
    setupGlossarySearch() {
        const input = document.getElementById('glossarySearch');
        if (!input) return;

        input.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            const container = document.getElementById('glossaryContainer');
            if (!container) return;

            const cards = container.querySelectorAll('.glosario-card');
            const headers = container.querySelectorAll('div[style*="grid-column"]'); // Categorías

            let visibleCount = 0;

            cards.forEach(card => {
                if (query === '' || card.dataset.search.includes(query)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Ocultar cabeceras si hay búsqueda activa (para que no queden sueltas)
            headers.forEach(h => {
                h.style.display = query === '' ? 'block' : 'none';
            });

            // Mensaje de sin resultados
            let emptyMsg = document.getElementById('glosario-empty');
            if (visibleCount === 0 && query !== '') {
                if (!emptyMsg) {
                    emptyMsg = document.createElement('div');
                    emptyMsg.id = 'glosario-empty';
                    emptyMsg.style.cssText = 'grid-column: 1 / -1; padding: 3rem; text-align: center; color: var(--text-muted);';
                    emptyMsg.innerHTML = '<i class="fas fa-search" style="font-size: 2rem; margin-bottom: 1rem; opacity: 0.5;"></i><p>No se encontraron términos para la búsqueda.</p>';
                    container.appendChild(emptyMsg);
                } else {
                    emptyMsg.style.display = 'block';
                }
            } else if (emptyMsg) {
                emptyMsg.style.display = 'none';
            }
        });
    }
};
