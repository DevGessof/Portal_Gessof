/**
 * CONFIGURACIÓN - PORTAL JAVA BÁSICO
 * Definición de secciones, herramientas y constantes del sistema
 */

const TOTAL_VIDEOS = 39;

const CONFIG = {
    // Claves para LocalStorage
    STORAGE_KEYS: {
        VIDEOS_VISTOS: 'java_basico_videos_vistos',
        FAVORITOS: 'java_basico_favoritos',
        USUARIO_ACTUAL: 'java_basico_usuario',
        TEMA_ACTUAL: 'java_basico_tema'
    },

    SECCIONES: [
        {
            id: 1,
            nombre: "Descarga e Instalación de recursos",
            descripcion: "Configuración del entorno de desarrollo Java",
            icono: "fas fa-download",
            color: "#4285F4"
        },
        {
            id: 2,
            nombre: "Definición de Proyecto",
            descripcion: "Primeros pasos en Java: Hola Mundo, comentarios y estructura básica",
            icono: "fas fa-folder-open",
            color: "#34A853"
        },
        {
            id: 3,
            nombre: "Variables",
            descripcion: "Tipos de datos y declaración de variables",
            icono: "fas fa-database",
            color: "#FBBC04"
        },
        {
            id: 4,
            nombre: "Operadores",
            descripcion: "Operadores aritméticos, lógicos, de comparación y más",
            icono: "fas fa-calculator",
            color: "#EA4335"
        },
        {
            id: 5,
            nombre: "Entrada de datos",
            descripcion: "Captura de datos por teclado con Scanner",
            icono: "fas fa-keyboard",
            color: "#4285F4"
        },
        {
            id: 6,
            nombre: "Personalizar el IDE NetBeans",
            descripcion: "Configuración visual del entorno de desarrollo",
            icono: "fas fa-palette",
            color: "#34A853"
        },
        {
            id: 7,
            nombre: "Conversión de tipos de datos",
            descripcion: "Casting y conversión entre diferentes tipos de datos",
            icono: "fas fa-exchange-alt",
            color: "#FBBC04"
        },
        {
            id: 8,
            nombre: "Estructura Condicional IF",
            descripcion: "Toma de decisiones con if, else y else if",
            icono: "fas fa-code-branch",
            color: "#EA4335"
        },
        {
            id: 9,
            nombre: "Estructura Condicional SWITCH",
            descripcion: "Selección múltiple con switch-case",
            icono: "fas fa-random",
            color: "#4285F4"
        },
        {
            id: 10,
            nombre: "Estructuras Cíclicas (Bucles)",
            descripcion: "Bucles while, do-while y for",
            icono: "fas fa-sync",
            color: "#34A853"
        },
        {
            id: 11,
            nombre: "Vectores y Matrices",
            descripcion: "Arreglos unidimensionales y bidimensionales",
            icono: "fas fa-th",
            color: "#FBBC04"
        },
        {
            id: 12,
            nombre: "Métodos y Clases (POO)",
            descripcion: "Programación orientada a objetos en Java",
            icono: "fas fa-cube",
            color: "#EA4335"
        }
    ],

    HERRAMIENTAS: [
        {
            nombre: "Java JDK 11+",
            descripcion: "Kit de desarrollo de Java (OpenJDK). Versión LTS recomendada para aprendizaje.",
            icono: "fab fa-java",
            url: "https://adoptium.net/",
            color: "#f89820"
        },
        {
            nombre: "Apache NetBeans",
            descripcion: "IDE gratuito y potente para desarrollo en Java.",
            icono: "fas fa-code",
            url: "https://netbeans.apache.org/",
            color: "#1b6ac6"
        }
    ]
};
