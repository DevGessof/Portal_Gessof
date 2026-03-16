/**
 * SINCRONIZACIÓN CON GOOGLE SHEETS - PORTAL JAVA SPRING BOOT
 * ===========================================================
 * Envía el progreso del usuario al Google Sheet del proyecto
 * mediante el Google Apps Script desplegado.
 *
 * La hoja destino es: "Progreso_SpringBoot"
 *
 * DIFERENCIA vs otros portales:
 *   Este portal usa ProgressManager (arrays watchedVideos) en vez de
 *   Storage.getVideosVistos(). El total se lee de localStorage
 *   'javaspring_total_videos' que app.js guarda al cargar el CSV.
 */

const GoogleSheets = {
    SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwxv2HTqro9Qk50cn4AKgDAKSTC6wwniskjqdFdTXs5lsg36FUdZooBG05OoMSazKDv/exec',
    SHEET_NAME: 'Progreso_SpringBoot',

    _debounceTimer: null,

    /**
     * Punto de entrada público.
     * Llámalo cada vez que el usuario marca/desmarca un video.
     */
    enviarProgreso() {
        if (this._debounceTimer) clearTimeout(this._debounceTimer);
        this._debounceTimer = setTimeout(() => this._enviar(), 2000);
    },

    async _enviar() {
        // Prioridad: usuario del portal principal → usuario de este portal
        const usuario = this._getUsuarioPrincipal()
            || localStorage.getItem(CONFIG.STORAGE_KEYS.USER)
            || 'Invitado';

        if (!usuario || usuario === 'Invitado') return;

        // ProgressManager guarda los IDs en watchedVideos
        const videosVistos = (typeof ProgressManager !== 'undefined')
            ? ProgressManager.watchedVideos
            : JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.PROGRESS) || '[]');

        const totalVideos = parseInt(localStorage.getItem('javaspring_total_videos') || '0')
            || document.querySelectorAll('.video-card').length
            || 1;

        const datos = {
            user: usuario,
            progress: videosVistos,
            total: totalVideos,
            sheetName: this.SHEET_NAME
        };

        try {
            await fetch(this.SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'text/plain;charset=utf-8' },
                body: JSON.stringify(datos)
            });
            console.log(`[GoogleSheets] ${this.SHEET_NAME}: ${videosVistos.length}/${totalVideos} enviado para "${usuario}"`);
        } catch (err) {
            console.warn('[GoogleSheets] Error al enviar progreso:', err.message);
        }
    },

    _getUsuarioPrincipal() {
        try {
            const id = localStorage.getItem('gessof_current_user_id');
            const team = JSON.parse(localStorage.getItem('gessof_team') || '[]');
            if (id && team.length > 0) {
                const found = team.find(u => String(u.id) === String(id));
                return found ? found.name : null;
            }
        } catch (e) {}
        return null;
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GoogleSheets };
}
