/**
 * GESSOF Academy - Progress Manager
 * Módulo para gestionar el progreso del usuario
 * 
 * Este módulo se encarga de:
 * - Rastrear videos vistos
 * - Marcar videos como importantes
 * - Calcular y mostrar el progreso general
 * - Persistir datos en localStorage
 */

const ProgressManager = {
    watchedVideos: [],
    importantVideos: [],
    userId: 'Invitado',

    /**
     * Inicializa el gestor de progreso
     */
    init() {
        this.loadFromStorage();
        this.updateUserDisplay();
        this.syncVideoStates();
        this.updateProgressBar();
    },

    /**
     * Carga los datos desde localStorage
     */
    loadFromStorage() {
        this.watchedVideos = JSON.parse(
            localStorage.getItem(CONFIG.STORAGE_KEYS.PROGRESS) || '[]'
        );
        this.importantVideos = JSON.parse(
            localStorage.getItem(CONFIG.STORAGE_KEYS.IMPORTANT_VIDEOS) || '[]'
        );
        this.userId = localStorage.getItem(CONFIG.STORAGE_KEYS.USER) || 'Invitado';
    },

    /**
     * Guarda los datos en localStorage
     */
    saveToStorage() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.PROGRESS, JSON.stringify(this.watchedVideos));
        localStorage.setItem(CONFIG.STORAGE_KEYS.IMPORTANT_VIDEOS, JSON.stringify(this.importantVideos));
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER, this.userId);
    },

    /**
     * Sincroniza el estado visual de las tarjetas de video
     */
    syncVideoStates() {
        const cards = document.querySelectorAll('.video-card');

        cards.forEach(card => {
            const videoId = card.dataset.videoId;
            if (!videoId) return;

            // Crear checkbox si no existe
            if (!card.querySelector('.video-checkbox')) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'video-checkbox';
                checkbox.title = 'Marcar como visto';
                checkbox.onclick = (e) => {
                    e.stopPropagation();
                    this.toggleWatched(videoId, checkbox.checked, card);
                };
                card.querySelector('.video-thumbnail').appendChild(checkbox);
            }

            // Sincronizar estado del checkbox
            const checkbox = card.querySelector('.video-checkbox');
            if (this.watchedVideos.includes(videoId)) {
                checkbox.checked = true;
                card.classList.add('watched');
            } else {
                checkbox.checked = false;
                card.classList.remove('watched');
            }

            // Sincronizar estado de importante
            const importantBtn = card.querySelector('.video-important-btn');
            if (importantBtn) {
                if (this.importantVideos.includes(videoId)) {
                    importantBtn.classList.add('active');
                } else {
                    importantBtn.classList.remove('active');
                }
            }
        });
    },

    /**
     * Marca/desmarca un video como visto
     */
    toggleWatched(videoId, isWatched, cardElement) {
        if (isWatched) {
            if (!this.watchedVideos.includes(videoId)) {
                this.watchedVideos.push(videoId);
            }
            cardElement.classList.add('watched');
        } else {
            this.watchedVideos = this.watchedVideos.filter(id => id !== videoId);
            cardElement.classList.remove('watched');
        }

        this.saveToStorage();
        this.updateProgressBar();

        // Notificar al portal padre (si estamos en iframe)
        if (window.parent !== window) {
            window.parent.postMessage({ type: 'VIDEO_WATCHED' }, '*');
        }
    },

    /**
     * Marca/desmarca un video como importante
     */
    toggleImportant(videoId, buttonElement) {
        const isImportant = this.importantVideos.includes(videoId);

        if (isImportant) {
            // Remover de importantes
            this.importantVideos = this.importantVideos.filter(id => id !== videoId);
            buttonElement.classList.remove('active');
        } else {
            // Agregar a importantes
            this.importantVideos.push(videoId);
            buttonElement.classList.add('active');
        }

        this.saveToStorage();
    },

    /**
     * Actualiza la barra de progreso
     */
    updateProgressBar() {
        // CÁLCULO ROBUSTO: Usar fuentes de datos en lugar de contar elementos en el DOM
        let totalVideos = 0;

        // 1. Videos del curso principal (Bloque A)
        if (typeof DataLoader !== 'undefined' && DataLoader.getAllVideos) {
            const blockAVideos = DataLoader.getAllVideos().length;

            // Si el cargador existe pero no tiene videos aún, es que el CSV se está procesando
            if (blockAVideos === 0) {
                totalVideos = 126; // Fallback temporal mientras carga el CSV
                setTimeout(() => this.updateProgressBar(), 500);
            } else {
                totalVideos += blockAVideos;
            }
        } else {
            // Fallback total si DataLoader no está definido aún
            totalVideos = 126;
            setTimeout(() => this.updateProgressBar(), 1000);
        }

        // 2. Videos de Microservicios (Bloque B)
        if (typeof MICROSERVICIOS_COURSE !== 'undefined' && MICROSERVICIOS_COURSE.secciones) {
            MICROSERVICIOS_COURSE.secciones.forEach(sec => {
                totalVideos += sec.videos.length;
            });
        }

        const watchedCount = this.watchedVideos.length;
        const percent = totalVideos > 0 ? Math.round((watchedCount / totalVideos) * 100) : 0;

        console.log(`[ProgressDebug] Vistos: ${watchedCount}, Total: ${totalVideos}, Porcentaje: ${percent}%`);

        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');
        const progressCount = document.getElementById('progressCount');
        const progressText = document.getElementById('progressText');

        if (progressFill) progressFill.style.width = percent + '%';
        if (progressPercent) progressPercent.textContent = percent + '%';
        if (progressCount) progressCount.textContent = `${watchedCount}/${totalVideos} videos vistos`;
        if (progressText) {
            progressText.textContent = percent + '%';
        }

        // PERSISTENCIA PARA PORTAL GLOBAL: Guardar el total detectado
        localStorage.setItem('javaspring_total_videos', totalVideos);
    },

    /**
     * Actualiza el nombre del usuario en la UI
     */
    updateUserDisplay() {
        const userDisplay = document.getElementById('userNameDisplay');
        if (userDisplay) {
            userDisplay.textContent = this.userId;
        }
    },

    /**
     * Cambia el nombre del usuario
     */
    changeUser() {
        const newName = prompt('Ingresa tu nombre:', this.userId);
        if (newName && newName.trim()) {
            this.userId = newName.trim();
            this.saveToStorage();
            this.updateUserDisplay();
        }
    },

    /**
     * Obtiene estadísticas del progreso
     */
    getStats() {
        const totalVideos = document.querySelectorAll('.video-card').length;
        const watchedCount = this.watchedVideos.length;
        const importantCount = this.importantVideos.length;
        const percent = totalVideos > 0 ? Math.round((watchedCount / totalVideos) * 100) : 0;

        return {
            total: totalVideos,
            watched: watchedCount,
            important: importantCount,
            percent: percent,
            remaining: totalVideos - watchedCount
        };
    },

    /**
     * Reinicia el progreso (útil para testing)
     */
    resetProgress() {
        if (confirm('¿Estás seguro de que deseas reiniciar todo tu progreso?')) {
            this.watchedVideos = [];
            this.importantVideos = [];
            this.saveToStorage();
            this.updateProgressBar();
            this.syncVideoStates();
            alert('Progreso reiniciado correctamente');
        }
    }
};

// Funciones globales para compatibilidad con HTML existente
function changeUser() {
    ProgressManager.changeUser();
}
