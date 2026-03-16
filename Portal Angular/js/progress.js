/**
 * GESSOF Academy - Progress Manager
 * Módulo para gestionar el progreso del usuario
 * Portal: Angular de Cero a Experto
 * (Idéntico al portal SpringBoot, solo cambia prefijo de storage keys)
 */

const ProgressManager = {
    watchedVideos: [],
    importantVideos: [],
    userId: 'Invitado',

    init() {
        this.loadFromStorage();
        this.updateUserDisplay();
        this.updateProgressBar();
    },

    loadFromStorage() {
        this.watchedVideos = JSON.parse(
            localStorage.getItem(CONFIG.STORAGE_KEYS.PROGRESS) || '[]'
        );
        this.importantVideos = JSON.parse(
            localStorage.getItem(CONFIG.STORAGE_KEYS.IMPORTANT_VIDEOS) || '[]'
        );
        this.userId = localStorage.getItem(CONFIG.STORAGE_KEYS.USER) || 'Invitado';
    },

    saveToStorage() {
        localStorage.setItem(CONFIG.STORAGE_KEYS.PROGRESS, JSON.stringify(this.watchedVideos));
        localStorage.setItem(CONFIG.STORAGE_KEYS.IMPORTANT_VIDEOS, JSON.stringify(this.importantVideos));
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER, this.userId);
    },

    syncVideoStates() {
        const cards = document.querySelectorAll('.video-card');
        cards.forEach(card => {
            const videoId = card.dataset.videoId;
            if (!videoId || card.classList.contains('material-card')) return;

            if (!card.querySelector('.video-checkbox')) {
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.className = 'video-checkbox';
                checkbox.title = 'Marcar como visto';
                checkbox.onclick = (e) => {
                    e.stopPropagation();
                    this.toggleWatched(videoId, checkbox.checked, card);
                };
                const thumb = card.querySelector('.item-thumbnail');
                if (thumb) thumb.appendChild(checkbox);
            }

            const checkbox = card.querySelector('.video-checkbox');
            if (checkbox) {
                if (this.watchedVideos.includes(videoId)) {
                    checkbox.checked = true;
                    card.classList.add('watched');
                } else {
                    checkbox.checked = false;
                    card.classList.remove('watched');
                }
            }

            const importantBtn = card.querySelector('.video-important-btn');
            if (importantBtn) {
                importantBtn.classList.toggle('active', this.importantVideos.includes(videoId));
            }
        });
    },

    toggleWatched(videoId, isWatched, cardElement) {
        if (isWatched) {
            if (!this.watchedVideos.includes(videoId)) this.watchedVideos.push(videoId);
            cardElement.classList.add('watched');
        } else {
            this.watchedVideos = this.watchedVideos.filter(id => id !== videoId);
            cardElement.classList.remove('watched');
        }
        this.saveToStorage();
        this.updateProgressBar();
    },

    toggleImportant(videoId, buttonElement) {
        const isImportant = this.importantVideos.includes(videoId);
        if (isImportant) {
            this.importantVideos = this.importantVideos.filter(id => id !== videoId);
            buttonElement.classList.remove('active');
        } else {
            this.importantVideos.push(videoId);
            buttonElement.classList.add('active');
        }
        this.saveToStorage();
    },

    updateProgressBar() {
        const totalVideos = document.querySelectorAll('.video-card').length;
        const watchedCount = this.watchedVideos.length;
        const percent = totalVideos > 0 ? Math.round((watchedCount / totalVideos) * 100) : 0;

        // Guardar total de videos en localStorage para sincronizar con la card del portal principal
        if (totalVideos > 0) {
            localStorage.setItem('angular_total_videos', totalVideos.toString());
        }

        const fill = document.getElementById('progressFill');
        const text = document.getElementById('progressText');
        if (fill) fill.style.width = percent + '%';
        if (text) text.textContent = percent + '%';
    },

    updateUserDisplay() {
        const el = document.getElementById('userNameDisplay');
        if (el) el.textContent = this.userId;
    },

    changeUser() {
        const newName = prompt('Ingresa tu nombre:', this.userId);
        if (newName && newName.trim()) {
            this.userId = newName.trim();
            this.saveToStorage();
            this.updateUserDisplay();
        }
    },

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

function changeUser() { ProgressManager.changeUser(); }
