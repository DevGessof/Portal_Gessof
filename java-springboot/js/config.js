/**
 * GESSOF Academy - Portal de Aprendizaje
 * Archivo de Configuración Global
 * 
 * Este archivo contiene todas las constantes y configuraciones
 * utilizadas en el portal educativo.
 */

const CONFIG = {
    // Claves de almacenamiento local
    STORAGE_KEYS: {
        PROGRESS: 'javaspring_progress_v1',
        THEME: 'javaspring_theme_v1',
        USER: 'javaspring_user_id',
        IMPORTANT_VIDEOS: 'javaspring_important_videos_v1',
        EVALUATION_RESULTS: 'javaspring_evaluation_results_v1',
        MICROSERVICIOS_PROGRESS: 'microservicios_progress_v1',
        MICROSERVICIOS_IMPORTANT: 'microservicios_important_v1'
    },

    // Niveles de prioridad por sección del curso Bloque A (Microservicios)
    SECTION_PRIORITIES: {
        1: { nivel: 1, label: 'Imprescindible', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        4: { nivel: 1, label: 'Imprescindible', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        5: { nivel: 1, label: 'Imprescindible', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        6: { nivel: 1, label: 'Imprescindible', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        11: { nivel: 1, label: 'Imprescindible', color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        10: { nivel: 2, label: 'Muy recomendado', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        12: { nivel: 2, label: 'Muy recomendado', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        3: { nivel: 3, label: 'Útil', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
        7: { nivel: 3, label: 'Útil', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
        8: { nivel: 3, label: 'Útil', color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
        2: { nivel: 4, label: 'Opcional', color: '#6b7280', bg: 'rgba(107,114,128,0.12)' },
        9: { nivel: 4, label: 'Opcional', color: '#6b7280', bg: 'rgba(107,114,128,0.12)' },
        13: { nivel: 4, label: 'Opcional', color: '#6b7280', bg: 'rgba(107,114,128,0.12)' }
    },
    PATHS: {
        DRIVE_CSV: './Drive.csv',
        SUMMARIES: './data/summaries/',
        EXERCISES: './data/exercises/',
        HTML_REDIRECTS: './data/html_redirects.json',
        GLOSSARY: './data/summaries/backup_consolidados/glosario_completo_spring_boot.json'
    },

    // Configuración de Google Drive
    DRIVE: {
        VIDEO_EMBED_URL: 'https://drive.google.com/file/d/{FILE_ID}/preview',
        FILE_VIEW_URL: 'https://drive.google.com/file/d/{FILE_ID}/view'
    },

    // Configuración de YouTube
    YOUTUBE: {
        EMBED_URL: 'https://www.youtube.com/embed/{VIDEO_ID}?autoplay=1&rel=0',
        THUMBNAIL_URL: 'https://img.youtube.com/vi/{VIDEO_ID}/maxresdefault.jpg'
    },

    // Tipos de archivo reconocidos
    FILE_TYPES: {
        VIDEO: ['mp4', 'avi', 'mkv', 'mov'],
        SUBTITLE: ['srt', 'vtt'],
        DOCUMENT: ['pdf', 'doc', 'docx'],
        IMAGE: ['jpg', 'jpeg', 'png', 'gif', 'webp'],
        WEB: ['html', 'htm'],
        ARCHIVE: ['zip', 'rar', '7z'],
        SPREADSHEET: ['xls', 'xlsx', 'csv']
    },

    // Configuración de UI
    UI: {
        CAROUSEL_SCROLL_AMOUNT: 320,
        ANIMATION_DURATION: 300,
        SKELETON_DELAY: 500
    },

    // Mensajes del sistema
    MESSAGES: {
        LOADING: 'Cargando contenido del curso...',
        ERROR_CSV: 'Error al cargar los datos del curso. Por favor, recarga la página.',
        ERROR_SUMMARY: 'No se pudo cargar el resumen de esta clase.',
        NO_VIDEOS: 'No hay videos disponibles en esta sección.',
        WELCOME: '¡Bienvenido al Portal de Aprendizaje!'
    }
};

// Exportar configuración para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
