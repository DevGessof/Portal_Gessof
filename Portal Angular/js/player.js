/**
 * GESSOF Academy - Video Player
 * Portal: Angular de Cero a Experto
 */

const VideoPlayer = {
    currentVideo: null,
    modal: null,
    videoFrame: null,
    materialRegistry: {
        _items: new Map(),
        register(material) {
            const id = 'mat_' + Math.random().toString(36).substr(2, 9);
            this._items.set(id, material);
            return id;
        },
        get(id) {
            return this._items.get(id);
        }
    },

    init() {
        this.modal = document.getElementById('courseModal');
        this.videoFrame = document.getElementById('videoFrame');

        window.onclick = (event) => {
            if (event.target === this.modal) this.closeVideo();
        };

        // Escuchar tecla ESC para cerrar
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') this.closeVideo();
        });
    },

    /**
     * Abre el modal de video y carga su resumen
     */
    async openVideo(videoId, seccionNumero, itemIndex) {
        if (!this.modal) this.init();
        
        const section = DataLoader.getSection(seccionNumero);
        if (!section) return;

        const video = section.items[itemIndex];
        if (!video || video.type !== 'video') return;

        this.currentVideo = video;

        const modalTitle = document.getElementById('modalTitle');
        modalTitle.innerHTML = `
            <div style="display:flex; align-items:center; gap:12px;">
                <i class="fab fa-angular" style="color:var(--primary); font-size:1.5rem;"></i>
                <div style="text-align:left;">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Clase ${video.numero}</div>
                    <div style="font-size:1.1rem; font-weight:800; color:var(--text-primary); line-height:1.2;">${video.titulo}</div>
                </div>
            </div>
        `;

        this.setupVideoFrame(video);
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        await this.loadAndDisplaySummary(video);
    },

    setupVideoFrame(video) {
        this.videoFrame.style.display = 'block';
        this.videoFrame.src = CONFIG.DRIVE.VIDEO_EMBED_URL.replace('{FILE_ID}', video.idVideo);
        // Asegurarse de que el contenedor de preview HTML esté oculto
        const htmlPreview = document.getElementById('htmlPreview');
        if (htmlPreview) htmlPreview.style.display = 'none';
    },

    /**
     * Gestiona el clic en cualquier material, resolviendo enlaces o mostrando contenido
     */
    async handleMaterialClick(materialOrId, element) {
        let material = null;
        if (typeof materialOrId === 'string') {
            material = this.materialRegistry.get(materialOrId);
        } else {
            material = materialOrId;
        }

        if (!material) return;
        
        const btn = element.querySelector('.card-action-btn') || element;
        const oldHTML = btn.innerHTML;
        
        // Estrategia para evitar bloqueadores de popups:
        // Abrimos la ventana inmediatamente si sabemos que NO es contenido para el modal (o por si acaso)
        // Pero para enlaces inteligentes, necesitamos el fetch primero.
        // Si el navegador bloquea el popup después del fetch, el usuario percibirá "nada".
        
        try {
            btn.style.pointerEvents = 'none';
            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            
            // Si es un material que NO es HTML, lo abrimos directo en Drive para no arriesgar popup block
            if (!material.isLink && !material.tipo?.includes('html') && !material.nombre?.endsWith('.html')) {
                window.open(`https://drive.google.com/file/d/${material.id}/view`, '_blank');
                return;
            }

            // Para HTML/Links, intentamos resolver el destino real
            const proxyUrl = 'https://api.codetabs.com/v1/proxy?quest=' + encodeURIComponent(`https://drive.google.com/uc?id=${material.id}&export=download`);
            const response = await fetch(proxyUrl);
            
            let content = '';
            if (response.ok) {
                content = await response.text();
            } else {
                throw new Error('Proxy error');
            }
            
            // 1. Detectar si es un redirect (enlace externo)
            const urlMatch = content.match(/(?:window\.location\.href|URL|url|location)\s*=\s*(?:["']|&quot;)?(https?:\/\/[^"'; >]+)(?:["']|&quot;)?/i);
            
            if (urlMatch && urlMatch[1]) {
                // Es un enlace: intentar abrir (puede fallar por popup block si el fetch fue lento)
                const opened = window.open(urlMatch[1], '_blank');
                if (!opened) {
                    alert('⚠️ El navegador bloqueó la redirección. Por favor, permite las ventanas emergentes o haz clic de nuevo.');
                }
            } else if (content.includes('<') && (content.includes('body') || content.includes('div') || content.length > 50)) {
                // 2. Es contenido HTML real: mostrar en el modal
                this.openHtmlContent(material, content);
            } else {
                // 3. Fallback: Drive
                window.open(`https://drive.google.com/file/d/${material.id}/view`, '_blank');
            }
        } catch (error) {
            console.warn('⚠️ Error resolviendo material:', error);
            window.open(`https://drive.google.com/file/d/${material.id}/view`, '_blank');
        } finally {
            btn.innerHTML = oldHTML;
            btn.style.pointerEvents = 'auto';
        }
    },

    /**
     * Muestra contenido HTML directamente en el modal (sustituyendo al video)
     */
    openHtmlContent(material, htmlContent) {
        if (!this.modal) this.init();
        
        const modalTitle = document.getElementById('modalTitle');
        modalTitle.innerHTML = `
            <div style="display:flex; align-items:center; gap:12px;">
                <i class="fas fa-file-code" style="color:var(--primary); font-size:1.5rem;"></i>
                <div style="text-align:left;">
                    <div style="font-size:0.75rem; font-weight:700; color:var(--text-muted); text-transform:uppercase;">Recurso HTML</div>
                    <div style="font-size:1.1rem; font-weight:800; color:var(--text-primary); line-height:1.2;">${material.titulo}</div>
                </div>
            </div>
        `;

        // Gestionar contenedores
        this.videoFrame.style.display = 'none';
        
        let htmlPreview = document.getElementById('htmlPreview');
        if (!htmlPreview) {
            htmlPreview = document.createElement('div');
            htmlPreview.id = 'htmlPreview';
            this.videoFrame.parentNode.insertBefore(htmlPreview, this.videoFrame.nextSibling);
        }
        
        htmlPreview.style.cssText = `
            display: block;
            width: 100%;
            height: 500px;
            background: var(--bg-card);
            border-bottom: 1px solid var(--border);
            overflow: auto;
            padding: 2.5rem;
            color: var(--text-primary);
            font-family: inherit;
        `;
        
        // Limpiar estilos externos que puedan venir en el HTML y romper el portal
        htmlPreview.innerHTML = `
            <div class="html-content-wrapper">
                ${htmlContent}
            </div>
            <style>
                .html-content-wrapper img { max-width: 100%; height: auto; border-radius: 8px; margin: 1rem 0; }
                .html-content-wrapper p { line-height: 1.6; margin-bottom: 1rem; }
                .html-content-wrapper a { color: var(--primary); text-decoration: underline; }
            </style>
        `;

        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden';

        // Actualizar el área de resumen (opcional)
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div style="padding:2rem; text-align:center; border-top:1px solid var(--border); margin-top:2rem;">
                <p style="color:var(--text-muted); font-size:0.9rem;">Estás viendo un recurso complementario del curso.</p>
                <button class="main-nav-tab" onclick="VideoPlayer.closeVideo()" style="padding:10px 24px; border:1px solid var(--primary); background:transparent; color:var(--primary); border-radius:10px; cursor:pointer; font-weight:700; transition:0.2s;">
                    <i class="fas fa-arrow-left"></i> Volver al Portal
                </button>
            </div>
        `;
    },

    /**
     * Carga y muestra el resumen del video (Markdown)
     */
    async loadAndDisplaySummary(video) {
        const modalContent = document.getElementById('modalContent');
        modalContent.innerHTML = `
            <div style="padding:3rem; text-align:center;">
                <div class="loading-spinner" style="margin: 0 auto;"></div>
                <p style="margin-top:1rem; color:var(--text-muted);">Cargando resumen de la clase...</p>
            </div>
        `;

        try {
            const summaryMd = await DataLoader.loadSummary(video);
            
            if (summaryMd) {
                modalContent.innerHTML = this.renderMarkdown(summaryMd);
            } else {
                modalContent.innerHTML = this.renderFallbackInfo(video);
            }

            // Renderizar materiales adjuntos al video
            if (video.materiales && video.materiales.length > 0) {
                modalContent.innerHTML += this.renderMaterials(video.materiales);
            }
        } catch (error) {
            console.error('❌ Error al cargar resumen:', error);
            modalContent.innerHTML = `
                <div class="md-block-error" style="padding:2rem; background:rgba(220,38,38,0.05); border-radius:12px; border:1px solid rgba(220,38,38,0.2); text-align:center;">
                    <i class="fas fa-exclamation-circle" style="font-size:2rem; color:#dc2626; margin-bottom:1rem;"></i>
                    <p style="margin:0; font-weight:600;">No se pudo cargar el resumen didáctico.</p>
                </div>
            `;
        }
    },

    /**
     * Renderizador simplificado de Markdown a bloques visuales de GESSOF
     */
    renderMarkdown(md) {
        if (!md) return '';

        // Separar secciones por ##
        const sections = md.split(/^##\s+/gm);
        let html = '<div class="summary-container">';

        // El primer bloque suele ser el # Título
        const intro = sections.shift() || '';
        const h1Match = intro.match(/^#\s+(.+)$/m);
        if (h1Match) {
            html += `<h2 style="font-size:1.4rem; font-weight:800; color:var(--text-primary); border-bottom:2px solid var(--border); padding-bottom:0.75rem; margin-bottom:2rem;">${h1Match[1]}</h2>`;
        }

        // Mapeo selectores -> Estilo/Icono
        const designMap = [
            { keys: ['aprende', 'objetivo'], icon: 'fa-graduation-cap', color: 'var(--primary)', title: 'Lo que aprenderás' },
            { keys: ['punto', 'clave', 'importante'], icon: 'fa-star', color: '#f59e0b', title: 'Puntos Clave' },
            { keys: ['codigo', 'ejemplo', 'implementacion'], icon: 'fa-code', color: '#7c3aed', title: 'Ejemplo Práctico' },
            { keys: ['glosario', 'termino', 'definicion'], icon: 'fa-book', color: '#10b981', title: 'Glosario Técnico' },
            { keys: ['resumen', 'final', 'conclusion'], icon: 'fa-flag-checkered', color: '#3b82f6', title: 'Resumen' }
        ];

        sections.forEach(raw => {
            const lines = raw.trim().split('\n');
            const rawTitle = lines.shift() || 'Información';
            const body = lines.join('\n').trim();
            if (!body) return;

            const style = designMap.find(d => d.keys.some(k => rawTitle.toLowerCase().includes(k))) || 
                          { icon: 'fa-info-circle', color: 'var(--text-secondary)', title: rawTitle };

            html += `
                <div class="md-block" style="margin-bottom:2.5rem; animation: slideUp 0.4s ease-out;">
                    <div style="display:flex; align-items:center; gap:0.75rem; margin-bottom:1.25rem;">
                        <div style="width:36px; height:36px; background:${style.color}15; color:${style.color}; border-radius:10px; display:flex; align-items:center; justify-content:center;">
                            <i class="fas ${style.icon}"></i>
                        </div>
                        <h3 style="font-size:1.1rem; font-weight:700; color:var(--text-primary); margin:0;">${style.title}</h3>
                    </div>
                    <div class="md-body" style="padding-left:1rem; border-left:2px solid ${style.color}30;">
                        ${this.simpleMdParser(body)}
                    </div>
                </div>
            `;
        });

        html += '</div>';
        return html;
    },

    simpleMdParser(text) {
        let html = text;
        // Listas
        html = html.replace(/^\-\s+(.+)$/gm, '<li style="margin-bottom:0.5rem; list-style:none; position:relative; padding-left:1.5rem;"><i class="fas fa-check" style="position:absolute; left:0; top:4px; font-size:0.75rem; color:var(--primary); opacity:0.7;"></i>$1</li>');
        html = html.replace(/(<li.+<\/li>)+/g, '<ul style="padding:0; margin:0;">$&</ul>');
        
        // Negritas
        html = html.replace(/\*\*(.+?)\*\*/g, '<strong style="color:var(--text-primary); font-weight:700;">$1</strong>');
        
        // Tablas
        if (html.includes('|')) {
            const rows = html.trim().split('\n').filter(r => r.includes('|'));
            if (rows.length >= 3) {
                let table = '<div style="overflow-x:auto; margin:1rem 0;"><table style="width:100%; border-collapse:collapse; font-size:0.9rem;"><thead>';
                const headers = rows[0].split('|').filter(c => c.trim()).map(c => c.trim());
                table += `<tr style="background:var(--bg-main);">${headers.map(h => `<th style="padding:12px; border:1px solid var(--border); text-align:left;">${h}</th>`).join('')}</tr></thead><tbody>`;
                for (let i = 2; i < rows.length; i++) {
                    const cells = rows[i].split('|').filter(c => c.trim()).map(c => c.trim());
                    table += `<tr>${cells.map(c => `<td style="padding:10px; border:1px solid var(--border);">${c}</td>`).join('')}</tr>`;
                }
                table += '</tbody></table></div>';
                return table;
            }
        }

        // Párrafos
        return html.split('\n\n').map(p => {
            if (p.startsWith('<ul') || p.startsWith('<div')) return p;
            return `<p style="line-height:1.6; color:var(--text-secondary); margin-bottom:1rem;">${p.replace(/\n/g, '<br>')}</p>`;
        }).join('');
    },

    renderFallbackInfo(video) {
        return `
            <div style="padding:3rem; text-align:center; background:var(--bg-main); border-radius:20px; border:1px solid var(--border);">
                <i class="fas fa-file-alt" style="font-size:3rem; color:var(--text-muted); margin-bottom:1.5rem; opacity:0.3;"></i>
                <h3 style="color:var(--text-primary); margin-bottom:0.5rem;">Resumen no disponible</h3>
                <p style="color:var(--text-muted); max-width:400px; margin:0 auto;">Estamos trabajando para traerte el mejor contenido didáctico para esta clase. Por favor, vuelve más tarde.</p>
            </div>
        `;
    },

    renderMaterials(materiales) {
        let html = '<div class="summary-section" style="margin-top:2.5rem;border-top:1px solid var(--border);padding-top:2rem;">';
        html += '<h3 style="font-size:1.2rem; font-weight:800; color:var(--text-primary); margin-bottom:1rem;"><i class="fas fa-paperclip" style="color:var(--primary); margin-right:8px;"></i>Material de Apoyo</h3>';
        html += '<div style="display:grid; gap:0.75rem;">';

        materiales.forEach((material, index) => {
            const icon = this.getMaterialIcon(material.tipo || material.formato);
            const isHtml = material.isLink;
            const regId = this.materialRegistry.register(material);

            html += `
                <div onclick='event.stopPropagation(); VideoPlayer.handleMaterialClick("${regId}", this)'
                   style="display:flex;align-items:center;gap:0.75rem;padding:1rem;background:var(--bg-main);border-radius:var(--radius-md);cursor:pointer;color:var(--text-primary);transition:all 0.2s; border:1px solid var(--border);"
                   onmouseover="this.style.background='var(--bg-elevated)';this.style.transform='translateY(-2px)';this.style.boxShadow='var(--shadow-md)';"
                   onmouseout="this.style.background='var(--bg-main)';this.style.transform='translateY(0)';this.style.boxShadow='none';">
                    <div style="width:40px;height:40px;border-radius:8px;background:rgba(221,0,49,0.1);display:flex;align-items:center;justify-content:center;color:var(--primary);">
                        <i class="${icon}" style="font-size:1.2rem;"></i>
                    </div>
                    <div style="flex:1;">
                        <div style="font-weight:700; font-size:0.95rem;">${material.titulo}</div>
                        <div style="font-size:0.8rem;color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; margin-top:0.2rem;">${material.formato}</div>
                    </div>
                    <i class="fas ${isHtml ? 'fa-external-link-alt' : 'fa-download'}" style="color:var(--text-muted);"></i>
                </div>
            `;
        });

        html += '</div></div>';
        return html;
    },

    getMaterialIcon(tipo) {
        if (!tipo) return 'fas fa-file-alt';
        const t = tipo.toLowerCase();
        if (t.includes('zip') || t.includes('rar')) return 'fas fa-file-archive';
        if (t.includes('pdf')) return 'fas fa-file-pdf';
        if (t.includes('html')) return 'fas fa-window-maximize';
        return 'fas fa-file-download';
    },

    closeVideo() {
        if (this.modal) this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (this.videoFrame) this.videoFrame.src = '';
        this.currentVideo = null;
    }
};

function closeVideo() { VideoPlayer.closeVideo(); }
