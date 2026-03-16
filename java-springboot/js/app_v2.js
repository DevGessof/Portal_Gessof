/**
 * GESSOF Academy - Aplicación Principal
 * Orquestador de todos los módulos del portal
 * 
 * Este archivo inicializa y coordina todos los módulos:
 * - DataLoader: Carga y procesa Drive.csv
 * - UIBuilder: Construye la interfaz dinámica
 * - VideoPlayer: Maneja reproducción de videos
 * - ProgressManager: Gestiona el progreso del usuario
 * - ThemeManager: Controla el tema claro/oscuro
 */

const App = {
    /**
     * Inicializa la aplicación
     */
    async init() {
        console.log('🚀 Iniciando GESSOF Academy Portal...');

        try {
            // Inicializar tema
            ThemeManager.init();

            // Inicializar gestor de progreso
            ProgressManager.init();

            // Inicializar reproductor de video
            VideoPlayer.init();

            // Inicializar navegación por pestañas
            this.initTabNavigation();

            // Cargar datos del curso
            const container = document.getElementById('section-clases');
            if (container) {
                UIBuilder.showLoading(container);
            }

            const success = await DataLoader.init();

            if (!success) {
                throw new Error('No se pudieron cargar los datos del curso');
            }

            // Renderizar secciones del curso
            const sections = DataLoader.getSections();
            UIBuilder.renderCourseSections(sections);

            // Renderizar bloque del nuevo curso Microservicios (Bloque B)
            if (typeof UIBuilder.renderMicroserviciosCourse === 'function') {
                UIBuilder.renderMicroserviciosCourse();
            }

            // Renderizar glosario e inicializar buscador
            UIBuilder.renderGlossary();
            UIBuilder.setupGlossarySearch();

            // Sincronizar estados de progreso
            ProgressManager.syncVideoStates();
            ProgressManager.updateProgressBar();

            // Refuerzo: Actualizar otra vez tras un breve delay para asegurar que el DOM respondió
            setTimeout(() => {
                ProgressManager.updateProgressBar();
                console.log('🔄 Actualización de refuerzo ejecutada');
            }, 500);

            console.log('✅ Portal cargado exitosamente');
            console.log(`📚 ${sections.length} secciones disponibles`);
            console.log(`🎥 ${DataLoader.getAllVideos().length} videos en total`);

        } catch (error) {
            console.error('❌ Error al inicializar la aplicación:', error);
            console.error(error.stack);

            // Mostrar alerta detallada para depuración
            alert('Error de inicialización: ' + error.message);

            const container = document.getElementById('section-clases');
            if (container) {
                UIBuilder.showError(container, CONFIG.MESSAGES.ERROR_CSV + ' (Detalle: ' + error.message + ')');
            }
        }
    },

    /**
     * Inicializa la navegación por pestañas
     */
    initTabNavigation() {
        // Esta función ya existe en el HTML, la mantenemos por compatibilidad
        window.switchMainTab = (event, sectionId) => {
            document.querySelectorAll('.main-content-section').forEach(s =>
                s.classList.remove('active')
            );
            document.querySelectorAll('.main-nav-tab').forEach(t =>
                t.classList.remove('active')
            );

            document.getElementById(sectionId).classList.add('active');
            event.currentTarget.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Navegación por sub-pestañas de Evaluación (Teórica/Práctica)
        window.switchEvalTab = (event, tabId) => {
            // Ocultar todos los contenidos
            document.querySelectorAll('.eval-tab-content').forEach(c => c.style.display = 'none');
            // Desactivar todos los botones
            document.querySelectorAll('.eval-tab').forEach(b => {
                b.classList.remove('active');
                b.style.color = 'var(--text-muted)';
                b.style.borderBottom = '3px solid transparent';
                b.style.fontWeight = '600';
            });

            // Mostrar el seleccionado
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) selectedTab.style.display = 'block';

            // Activar botón
            const btn = event.currentTarget;
            btn.classList.add('active');
            btn.style.color = 'var(--text-primary)';
            btn.style.borderBottom = '3px solid var(--primary)';
            btn.style.fontWeight = '700';
        };
    }
};

/**
 * Theme Manager - Gestión del tema claro/oscuro
 */
const ThemeManager = {
    init() {
        // Cargar tema guardado
        if (localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) === 'dark') {
            document.body.classList.add('dark');
        }

        // Configurar botón de toggle
        window.toggleTheme = () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
        };
    }
};

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
