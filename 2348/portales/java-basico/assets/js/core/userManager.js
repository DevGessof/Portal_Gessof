/**
 * GESTIÓN DE USUARIO - PORTAL APIGEE X
 * =====================================
 * Gestión del nombre de usuario
 */

const UserManager = {
    /**
     * Inicializa el gestor de usuario
     */
    init() {
        const usuario = Storage.getUsuario();
        this.actualizarUI(usuario);
    },

    /**
     * Cambia el nombre del usuario
     */
    cambiarUsuario() {
        const usuarioActual = Storage.getUsuario();
        const nuevoNombre = prompt('Ingresa tu nombre:', usuarioActual);

        if (nuevoNombre && nuevoNombre.trim() !== '') {
            Storage.setUsuario(nuevoNombre.trim());
            this.actualizarUI(nuevoNombre.trim());
        }
    },

    /**
     * Actualiza la UI con el nombre del usuario
     * @param {string} nombre - Nombre del usuario
     */
    actualizarUI(nombre) {
        const userDisplay = document.getElementById('userNameDisplay');
        if (userDisplay) {
            userDisplay.textContent = nombre;
        }
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { UserManager };
}
