/**
 * MAIN.JS - PORTAL APIGEE X
 * ==========================
 * Inicialización y orquestación del portal
 */

// Esperar a que el DOM esté listo
document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Inicializando Portal Apigee X...');

    // 1. Inicializar tema
    ThemeToggle.init();
    console.log('✅ Tema inicializado');

    // 2. Inicializar usuario
    UserManager.init();
    console.log('✅ Usuario inicializado');

    // 3. Inicializar barra de progreso
    ProgressBar.init();
    console.log('✅ Progreso inicializado');

    // 4. Renderizar herramientas
    Herramientas.render();
    console.log('✅ Herramientas renderizadas');

    // 5. Renderizar curso (módulo 2 - se renderiza al cargar la página también para tener progreso correcto)
    Curso.renderTodasSecciones();
    console.log('✅ Curso renderizado');

    // 6. Renderizar glosario
    Glosario.render();
    console.log('✅ Glosario renderizado');

    // 7. Configurar búsqueda del glosario
    const searchInput = document.getElementById('glosario-search');
    if (searchInput) {
        searchInput.addEventListener('input', Utils.debounce((e) => {
            Glosario.buscar(e.target.value);
        }, 300));
    }

    console.log('✨ Portal Apigee X listo!');
    console.log(`📊 Total de videos: ${TOTAL_VIDEOS}`);
    console.log(`📈 Progreso actual: ${Storage.getPorcentajeProgreso()}%`);
});

