/**
 * GESSOF Academy - Portal de Aprendizaje
 * Archivo de Configuración Global
 * Portal: Angular de Cero a Experto
 */

const CONFIG = {
    // Claves de almacenamiento local
    STORAGE_KEYS: {
        PROGRESS: 'angular_progress_v1',
        THEME: 'angular_theme_v1',
        USER: 'angular_user_id',
        IMPORTANT_VIDEOS: 'angular_important_videos_v1',
        EVALUATION_RESULTS: 'angular_evaluation_results_v1'
    },

    // Niveles de prioridad por sección (basado en indice_importancia.md)
    SECTION_PRIORITIES: {
        1:  { nivel: 4, label: 'Opcional',         color: '#6b7280', bg: 'rgba(107,114,128,0.12)' },
        2:  { nivel: 4, label: 'Opcional',         color: '#6b7280', bg: 'rgba(107,114,128,0.12)' },
        3:  { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        4:  { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        5:  { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        6:  { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        7:  { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        8:  { nivel: 4, label: 'Opcional',         color: '#6b7280', bg: 'rgba(107,114,128,0.12)' },
        9:  { nivel: 2, label: 'Muy recomendado',  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        10: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        11: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        12: { nivel: 2, label: 'Muy recomendado',  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        13: { nivel: 3, label: 'Útil',             color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
        14: { nivel: 2, label: 'Muy recomendado',  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        15: { nivel: 2, label: 'Muy recomendado',  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        16: { nivel: 2, label: 'Muy recomendado',  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        17: { nivel: 3, label: 'Útil',             color: '#3b82f6', bg: 'rgba(59,130,246,0.12)' },
        18: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        19: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        20: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        21: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        22: { nivel: 2, label: 'Muy recomendado',  color: '#f59e0b', bg: 'rgba(245,158,11,0.12)' },
        23: { nivel: 1, label: 'Imprescindible',   color: '#ef4444', bg: 'rgba(239,68,68,0.12)' },
        24: { nivel: 4, label: 'Opcional',         color: '#6b7280', bg: 'rgba(107,114,128,0.12)' }
    },

    PATHS: {
        DRIVE_CSV: './Dirve.txt',
        SUMMARIES: './Resumenes/',
    },

    // Configuración de Google Drive
    DRIVE: {
        VIDEO_EMBED_URL: 'https://drive.google.com/file/d/{FILE_ID}/preview',
        FILE_VIEW_URL: 'https://drive.google.com/file/d/{FILE_ID}/view'
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
        WELCOME: '¡Bienvenido al Portal de Angular!'
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
