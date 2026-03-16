/**
 * GESSOF Portal - Configuration
 * Global configuration and constants
 */

export const CONFIG = {
    APP_NAME: 'Portal Gessof',
    VERSION: '1.0.0',
    
    // Google Sheets CSV URL para autenticación de usuarios
    // Pasos: Archivo → Publicar en la web → Hoja "Usuarios" → CSV → Copiar URL
    AUTH_SHEET_URL: '',

    // LocalStorage Keys
    STORAGE_KEYS: {
        PROJECTS: 'gessof_projects',
        TEAM: 'gessof_team',
        TASKS: 'gessof_tasks',
        NOTIFICATIONS: 'gessof_notifications',
        CURRENT_USER_ID: 'gessof_current_user_id',
        CURRENT_ROLE: 'gessof_current_role',
        THEME: 'theme',
        TRAINING_SHEET_URL: 'trainingSheetUrl',
        AUTH_SHEET_URL: 'gessof_auth_sheet_url'
    },
    
    // User Roles
    ROLES: {
        ADMIN: 'admin',
        DEV: 'dev',
        VIEWER: 'viewer'   // Solo acceso a Capacitación
    },
    
    // Project Status
    PROJECT_STATUS: {
        ACTIVE: 'active',
        PENDING: 'pending',
        COMPLETED: 'completed',
        PAUSED: 'paused'
    },
    
    // Task Status
    TASK_STATUS: {
        PENDING: 'pending',
        IN_PROGRESS: 'in_progress',
        COMPLETED: 'completed',
        BLOCKED: 'blocked'
    },
    
    // Task Priority
    TASK_PRIORITY: {
        HIGH: 'high',
        MEDIUM: 'medium',
        LOW: 'low'
    },
    
    // Notification Types
    NOTIFICATION_TYPES: {
        SUCCESS: 'success',
        ERROR: 'error',
        WARNING: 'warning',
        INFO: 'info'
    }
};

export default CONFIG;
