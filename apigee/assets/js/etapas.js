/**
 * ETAPAS.JS - Navegación de las 3 etapas del curso
 */

function abrirIntroduccion() {
    // Ocultar selector
    document.getElementById('etapas-selector').style.display = 'none';
    // Mostrar detalle
    const detalle = document.getElementById('etapa-detalle');
    detalle.style.display = 'block';
    // Ocultar todos los paneles
    document.querySelectorAll('.etapa-panel').forEach(p => { p.style.display = 'none'; });
    // Mostrar panel intro
    const panel = document.getElementById('panel-intro');
    if (panel) {
        panel.style.display = 'block';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function abrirEtapa(num) {
    // Ocultar selector
    document.getElementById('etapas-selector').style.display = 'none';

    // Mostrar detalle
    const detalle = document.getElementById('etapa-detalle');
    detalle.style.display = 'block';

    // Ocultar todos los paneles
    document.querySelectorAll('.etapa-panel').forEach(p => { p.style.display = 'none'; });

    // Mostrar el panel correcto
    const panel = document.getElementById('panel-etapa-' + num);
    if (panel) {
        panel.style.display = 'block';
        // Scroll top suave
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Si es etapa 2 (videos) y no están cargados, renderizarlos
    if (num === 2) {
        const container = document.getElementById('curso-container');
        if (container && container.innerHTML.trim() === '') {
            Curso.renderTodasSecciones();
        }
    }

    // Marcar la etapa como activa en el progreso
    for (let i = 1; i <= 3; i++) {
        const el = document.getElementById('prog-' + i);
        if (el) {
            if (i <= num) el.classList.add('completado');
            else el.classList.remove('completado');
        }
    }
}

function volverEtapas() {
    // Ocultar detalle
    document.getElementById('etapa-detalle').style.display = 'none';
    // Ocultar todos los paneles
    document.querySelectorAll('.etapa-panel').forEach(p => { p.style.display = 'none'; });
    // Mostrar selector
    document.getElementById('etapas-selector').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función legacy para compatibilidad
function switchModulo(event, moduloId) {
    const map = { 'modulo-1': 1, 'modulo-2': 2, 'modulo-3': 3 };
    if (map[moduloId]) abrirEtapa(map[moduloId]);
}
