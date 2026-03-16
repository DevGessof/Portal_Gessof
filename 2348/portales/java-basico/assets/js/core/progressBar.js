/**
 * BARRA DE PROGRESO - PORTAL APIGEE X
 * ====================================
 * Gestión de la barra de progreso global del curso
 */

const ProgressBar = {
    /**
     * Inicializa la barra de progreso
     */
    init() {
        this.actualizar();
    },

    /**
     * Actualiza la barra de progreso
     */
    actualizar() {
        const porcentaje = Storage.getPorcentajeProgreso();
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (progressFill) {
            progressFill.style.width = `${porcentaje}%`;
        }

        if (progressText) {
            progressText.textContent = `${porcentaje}%`;
        }

        // Cambiar color según progreso
        if (progressFill) {
            if (porcentaje === 100) {
                progressFill.style.background = 'var(--accent-green)';
            } else if (porcentaje >= 75) {
                progressFill.style.background = 'linear-gradient(90deg, var(--primary), var(--accent-green))';
            } else {
                progressFill.style.background = 'var(--primary)';
            }
        }
    },

    /**
     * Anima el incremento de progreso
     * @param {number} desde - Porcentaje inicial
     * @param {number} hasta - Porcentaje final
     */
    animar(desde, hasta) {
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');

        if (!progressFill || !progressText) return;

        let actual = desde;
        const incremento = (hasta - desde) / 20; // 20 pasos de animación

        const intervalo = setInterval(() => {
            actual += incremento;

            if (actual >= hasta) {
                actual = hasta;
                clearInterval(intervalo);
            }

            progressFill.style.width = `${actual}%`;
            progressText.textContent = `${Math.round(actual)}%`;
        }, 30);
    }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ProgressBar };
}
