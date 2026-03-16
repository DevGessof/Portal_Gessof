/**
 * GESTIÓN DE ALMACENAMIENTO LOCAL - PORTAL APIGEE X
 * ==================================================
 * Manejo de localStorage para persistencia de datos
 */

const Storage = {
    /**
     * Obtiene lista de videos vistos
     * @returns {Array} Array de IDs de videos vistos
     */
    getVideosVistos() {
        const vistos = localStorage.getItem(CONFIG.STORAGE_KEYS.VIDEOS_VISTOS);
        return vistos ? JSON.parse(vistos) : [];
    },

    /**
     * Marca un video como visto
     * @param {string} videoId - ID único del video (seccion-numero)
     */
    marcarVideoVisto(videoId) {
        const vistos = this.getVideosVistos();
        if (!vistos.includes(videoId)) {
            vistos.push(videoId);
            localStorage.setItem(CONFIG.STORAGE_KEYS.VIDEOS_VISTOS, JSON.stringify(vistos));
            // Actualizar barra de progreso
            if (typeof ProgressBar !== 'undefined') {
                ProgressBar.actualizar();
            }
        }
    },

    /**
     * Desmarca un video como visto
     * @param {string} videoId - ID único del video
     */
    desmarcarVideoVisto(videoId) {
        let vistos = this.getVideosVistos();
        vistos = vistos.filter(id => id !== videoId);
        localStorage.setItem(CONFIG.STORAGE_KEYS.VIDEOS_VISTOS, JSON.stringify(vistos));
        // Actualizar barra de progreso
        if (typeof ProgressBar !== 'undefined') {
            ProgressBar.actualizar();
        }
    },

    /**
     * Verifica si un video está marcado como visto
     * @param {string} videoId - ID único del video
     * @returns {boolean}
     */
    esVideoVisto(videoId) {
        const vistos = this.getVideosVistos();
        return vistos.includes(videoId);
    },

    /**
     * Obtiene el número total de videos vistos
     * @returns {number}
     */
    getTotalVideosVistos() {
        return this.getVideosVistos().length;
    },

    /**
     * Calcula el porcentaje de progreso
     * @returns {number} Porcentaje (0-100)
     */
    getPorcentajeProgreso() {
        const vistos = this.getTotalVideosVistos();
        const total = TOTAL_VIDEOS || 60; // Fallback a 60 si no está definido
        return Utils.calcularPorcentaje(vistos, total);
    },

    /**
     * Obtiene el nombre del usuario actual
     * @returns {string}
     */
    getUsuario() {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.USUARIO_ACTUAL) || 'Usuario';
    },

    /**
     * Establece el nombre del usuario
     * @param {string} nombre - Nombre del usuario
     */
    setUsuario(nombre) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.USUARIO_ACTUAL, nombre);
    },

    /**
     * Obtiene el tema actual (dark/light)
     * @returns {string}
     */
    getTema() {
        return localStorage.getItem(CONFIG.STORAGE_KEYS.TEMA_ACTUAL) || 'light';
    },

    /**
     * Establece el tema
     * @param {string} tema - 'dark' o 'light'
     */
    setTema(tema) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.TEMA_ACTUAL, tema);
    },

    // ========== FAVORITOS ==========

    /**
     * Obtiene la lista de videos favoritos
     * @returns {Array<string>} Array de IDs de videos favoritos
     */
    getFavoritos() {
        const favoritosStr = localStorage.getItem(CONFIG.STORAGE_KEYS.FAVORITOS);
        return favoritosStr ? JSON.parse(favoritosStr) : [];
    },

    /**
     * Verifica si un video está marcado como favorito
     * @param {string} videoId - ID del video (formato: "seccion-numero")
     * @returns {boolean} True si está en favoritos
     */
    esVideoFavorito(videoId) {
        const favoritos = this.getFavoritos();
        return favoritos.includes(videoId);
    },

    /**
     * Marca un video como favorito
     * @param {string} videoId - ID del video
     */
    marcarFavorito(videoId) {
        const favoritos = this.getFavoritos();
        if (!favoritos.includes(videoId)) {
            favoritos.push(videoId);
            localStorage.setItem(CONFIG.STORAGE_KEYS.FAVORITOS, JSON.stringify(favoritos));
        }
    },

    /**
     * Desmarca un video como favorito
     * @param {string} videoId - ID del video
     */
    desmarcarFavorito(videoId) {
        let favoritos = this.getFavoritos();
        favoritos = favoritos.filter(id => id !== videoId);
        localStorage.setItem(CONFIG.STORAGE_KEYS.FAVORITOS, JSON.stringify(favoritos));
    },

    /**
     * Toggle del estado de favorito
     * @param {string} videoId - ID del video
     * @returns {boolean} Nuevo estado (true = favorito, false = no favorito)
     */
    toggleFavorito(videoId) {
        if (this.esVideoFavorito(videoId)) {
            this.desmarcarFavorito(videoId);
            return false;
        } else {
            this.marcarFavorito(videoId);
            return true;
        }
    },

    /**
     * Obtiene el total de videos favoritos
     * @returns {number} Cantidad de favoritos
     */
    getTotalFavoritos() {
        return this.getFavoritos().length;
    },

    /**
     * Resetea todo el progreso (útil para testing)
     */
    resetearProgreso() {
        if (confirm('¿Estás seguro de que quieres resetear todo tu progreso?')) {
            localStorage.removeItem(CONFIG.STORAGE_KEYS.VIDEOS_VISTOS);
            localStorage.removeItem(CONFIG.STORAGE_KEYS.FAVORITOS);
            location.reload();
        }
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Storage };
}
