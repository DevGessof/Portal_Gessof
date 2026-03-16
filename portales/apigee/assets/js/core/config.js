/**
 * CONFIGURACIÓN GLOBAL - PORTAL APIGEE X
 * =======================================
 */

const CONFIG = {
    // URLs base de Google Drive
    DRIVE_BASE_URL: 'https://drive.google.com/file/d/',
    DRIVE_EMBED_URL: 'https://drive.google.com/file/d/{ID}/preview',
    DRIVE_DOWNLOAD_URL: 'https://drive.google.com/uc?export=download&id={ID}',
    DRIVE_VIEW_URL: 'https://drive.google.com/file/d/{ID}/view',

    // Claves de localStorage
    STORAGE_KEYS: {
        VIDEOS_VISTOS: 'apigee_videos_vistos',
        USUARIO_ACTUAL: 'apigee_usuario',
        TEMA_ACTUAL: 'apigee_tema',
        FAVORITOS: 'apigee_favoritos'
    },

    // Información del curso
    CURSO: {
        nombre: 'Apigee X para Desarrolladores de APIs',
        totalSecciones: 6,
        duracionAproximada: '6 horas',
        instructor: 'Eduardo Celedonio'
    },

    // Secciones del curso con descripciones
    SECCIONES: {
        1: {
            nombre: 'Introducción y aprovisionamiento de Apigee X',
            descripcion: 'Aprende los fundamentos de Apigee X y configura tu entorno de desarrollo. Esta sección cubre desde la creación de tu cuenta en Google Cloud hasta el aprovisionamiento completo de tu organización Apigee.'
        },
        2: {
            nombre: 'Creación y Gestión de Proxies de API',
            descripcion: 'Domina los componentes esenciales de Apigee: interfaz de usuario, proxies, flows, políticas y configuración de ambientes. Esta es la sección más extensa y fundamental del curso.'
        },
        3: {
            nombre: 'API Products, Developers y Apps',
            descripcion: 'Aprende el modelo de gestión de consumidores de Apigee: Developers, API Products y Apps. Implementa autenticación con API Keys y controla el uso con quotas.'
        },
        4: {
            nombre: 'Caso de uso seven-days-jobs-v1',
            descripcion: 'Construye un caso de uso real integrando Apigee con RapidAPI. Implementa caché para optimizar performance y transforma respuestas con JavaScript.'
        },
        5: {
            nombre: 'Seguridad en Apigee X',
            descripcion: 'Implementa seguridad empresarial con políticas avanzadas, OAuth 2.0 y Shared Flows reutilizables. Esta sección cubre desde seguridad básica hasta autenticación moderna.'
        },
        6: {
            nombre: 'Monitoreo y logging en Apigee X',
            descripcion: 'Configura monitoreo empresarial con Cloud Logging y Flow Hooks. Aprende a auditar, debuggear y analizar el comportamiento de tus APIs en producción.'
        }
    },

    // Objetivos de aprendizaje
    OBJETIVOS: [
        'Dominar la creación y gestión de proxies de API en Apigee X',
        'Aplicar políticas de seguridad avanzadas para APIs',
        'Optimizar el rendimiento y la escalabilidad de APIs',
        'Implementar Apigee X en escenarios empresariales reales'
    ]
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG };
}
