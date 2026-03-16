/**
 * TOGGLE DE TEMA - PORTAL APIGEE X
 * =================================
 * Gestión del modo oscuro/claro
 */

const ThemeToggle = {
    /**
     * Inicializa el tema
     */
    init() {
        const temaGuardado = Storage.getTema();
        this.aplicarTema(temaGuardado);
        this.actualizarIcono(temaGuardado);
    },

    /**
     * Toggle entre modo oscuro y claro
     */
    toggle() {
        const temaActual = Storage.getTema();
        const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';

        this.aplicarTema(nuevoTema);
        Storage.setTema(nuevoTema);
        this.actualizarIcono(nuevoTema);
    },

    /**
     * Aplica el tema al body
     * @param {string} tema - 'dark' o 'light'
     */
    aplicarTema(tema) {
        if (tema === 'dark') {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    },

    /**
     * Actualiza el icono del botón de tema
     * @param {string} tema - 'dark' o 'light'
     */
    actualizarIcono(tema) {
        const btn = document.querySelector('.theme-toggle-header i');
        if (btn) {
            if (tema === 'dark') {
                btn.className = 'fas fa-sun';
            } else {
                btn.className = 'fas fa-moon';
            }
        }
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ThemeToggle };
}
