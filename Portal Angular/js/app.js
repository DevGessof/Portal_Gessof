/**
 * GESSOF Academy - Aplicación Principal
 * Portal: Angular de Cero a Experto
 * 
 * Orquestador de todos los módulos del portal.
 * Idéntico al portal SpringBoot en estructura.
 */

const App = {

    async init() {
        console.log('🚀 Iniciando GESSOF Academy - Portal Angular...');

        try {
            // Inicializar tema
            ThemeManager.init();

            // Inicializar gestor de progreso
            ProgressManager.init();

            // Inicializar reproductor de video
            VideoPlayer.init();

            // Inicializar navegación por pestañas
            this.initTabNavigation();

            // Mostrar loading en el contenedor del curso
            const container = document.getElementById('section-clases');
            if (container) UIBuilder.showLoading(container);

            // Cargar datos del curso desde Dirve.txt
            const success = await DataLoader.init();
            if (!success) throw new Error('No se pudieron cargar los datos del curso');

            // Renderizar secciones
            const sections = DataLoader.getSections();
            UIBuilder.renderCourseSections(sections);

            // Intentar cargar el glosario de Angular
            this.loadGlossary();

            // Inicializar evaluación
            if (typeof Evaluation !== 'undefined') {
                Evaluation.init();
            }

            // Sincronizar estados de progreso
            ProgressManager.syncVideoStates();
            ProgressManager.updateProgressBar();

            console.log('✅ Portal Angular cargado exitosamente');
            console.log(`📚 ${sections.length} secciones disponibles`);
            console.log(`🎥 ${DataLoader.getAllVideos().length} videos en total`);

        } catch (error) {
            console.error('❌ Error al inicializar la aplicación:', error);
            const container = document.getElementById('section-clases');
            if (container) {
                UIBuilder.showError(container, CONFIG.MESSAGES.ERROR_CSV + ' (Detalle: ' + error.message + ')');
            }
        }
    },

    /**
     * Carga el glosario de Angular desde Glosario.md
     */
    async loadGlossary() {
        try {
            const data = await DataLoader.loadGlossary();
            if (data && data.length > 0) {
                UIBuilder.renderGlossary(data);
                UIBuilder.setupGlossarySearch(data);
            } else {
                console.warn('Glosario vacío o no parseado.');
            }
        } catch (error) {
            console.error('Error al iniciar el Glosario:', error);
        }
    },

    /**
     * Inicializa la navegación por pestañas principales
     */
    initTabNavigation() {
        window.switchMainTab = (event, sectionId) => {
            document.querySelectorAll('.main-content-section').forEach(s => s.classList.remove('active'));
            document.querySelectorAll('.main-nav-tab').forEach(t => t.classList.remove('active'));

            document.getElementById(sectionId).classList.add('active');
            event.currentTarget.classList.add('active');

            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        window.switchEvalTab = (event, tabId) => {
            document.querySelectorAll('.eval-tab-content').forEach(c => c.style.display = 'none');
            document.querySelectorAll('.eval-tab').forEach(t => t.classList.remove('active'));

            document.getElementById(tabId).style.display = 'block';
            event.currentTarget.classList.add('active');
        };
    }
};

/**
 * Theme Manager - Gestión del tema claro/oscuro
 */
const ThemeManager = {
    init() {
        if (localStorage.getItem(CONFIG.STORAGE_KEYS.THEME) === 'dark') {
            document.body.classList.add('dark');
        }

        window.toggleTheme = () => {
            document.body.classList.toggle('dark');
            const isDark = document.body.classList.contains('dark');
            localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
        };
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
