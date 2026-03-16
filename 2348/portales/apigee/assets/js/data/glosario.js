/**
 * GLOSARIO COMPLETO - CURSO APIGEE X
 * ===================================
 * Migrado desde glosario_apigee_completo.txt
 * Estructura: array de objetos agrupados por categorías
 */

const GLOSARIO = [
    // CONCEPTOS FUNDAMENTALES
    {
        categoria: "Conceptos Fundamentales",
        termino: "APIGEE X",
        definicion: "Plataforma de gestión de APIs (API Management) de Google Cloud",
        proposito: "Actuar como intermediario entre clientes y backends, agregando seguridad, transformación, caché, monitoreo y control de tráfico"
    },
    {
        categoria: "Conceptos Fundamentales",
        termino: "API PROXY",
        definicion: "Intermediario entre el cliente y el backend que agrega funcionalidad",
        proposito: "Transformar datos, aplicar seguridad, cachear, sin tocar el backend"
    },
    {
        categoria: "Conceptos Fundamentales",
        termino: "ORGANIZACIÓN",
        definicion: "Contenedor principal donde viven todos tus recursos de Apigee",
        proposito: "Agrupar proxies, productos, developers, apps, ambientes, KVMs, etc."
    },
    {
        categoria: "Conceptos Fundamentales",
        termino: "AMBIENTE (ENVIRONMENT)",
        definicion: "Espacio aislado para desplegar proxies (dev, test, prod)",
        proposito: "Separar desarrollo de producción con configuraciones distintas"
    },
    {
        categoria: "Conceptos Fundamentales",
        termino: "ENVIRONMENT GROUP",
        definicion: "Grupo de ambientes con un hostname compartido",
        proposito: "Asignar dominios personalizados a tus APIs"
    },

    // FLUJOS DE EJECUCIÓN
    {
        categoria: "Flujos de Ejecución",
        termino: "PROXY ENDPOINT",
        definicion: "Lado del cliente en el flujo del proxy",
        proposito: "Ejecutar lógica antes/después de procesar la petición del cliente"
    },
    {
        categoria: "Flujos de Ejecución",
        termino: "TARGET ENDPOINT",
        definicion: "Lado del backend en el flujo del proxy",
        proposito: "Preparar llamada al backend y procesar su respuesta"
    },
    {
        categoria: "Flujos de Ejecución",
        termino: "PREFLOW",
        definicion: "Flujo que SIEMPRE se ejecuta, antes de flujos condicionales",
        proposito: "Seguridad, validaciones, logging"
    },
    {
        categoria: "Flujos de Ejecución",
        termino: "POSTFLOW",
        definicion: "Flujo que SIEMPRE se ejecuta, después de flujos condicionales",
        proposito: "Transformaciones finales, logging, limpieza"
    },
    {
        categoria: "Flujos de Ejecución",
        termino: "CONDITIONAL FLOW",
        definicion: "Flujo que solo se ejecuta si se cumple una condición",
        proposito: "Ejecutar lógica solo para ciertos endpoints o casos"
    },

    // POLÍTICAS DE SEGURIDAD
    {
        categoria: "Políticas de Seguridad",
        termino: "Verify API Key",
        definicion: "Validar que el cliente tenga un API Key válido",
        proposito: "Autenticación básica con API Keys"
    },
    {
        categoria: "Políticas de Seguridad",
        termino: "OAuth V2.0",
        definicion: "Generar o verificar Access Tokens OAuth 2.0",
        proposito: "Autenticación moderna con tokens temporales"
    },
    {
        categoria: "Políticas de Seguridad",
        termino: "Basic Authentication",
        definicion: "Codificar/decodificar credenciales en Base64",
        proposito: "Integración con APIs legacy que usan Basic Auth"
    },
    {
        categoria: "Políticas de Seguridad",
        termino: "JSON Threat Protection",
        definicion: "Validar estructura y tamaño de JSONs para prevenir ataques",
        proposito: "Proteger contra JSONs maliciosos"
    },
    {
        categoria: "Políticas de Seguridad",
        termino: "Spike Arrest",
        definicion: "Suavizar picos de tráfico distribuyendo peticiones uniformemente",
        proposito: "Proteger backend de ráfagas súbitas"
    },

    // POLÍTICAS DE TRANSFORMACIÓN
    {
        categoria: "Políticas de Transformación",
        termino: "Assign Message",
        definicion: "Crear, modificar o eliminar headers, body, query params",
        proposito: "Preparar requests, agregar headers, modificar responses"
    },
    {
        categoria: "Políticas de Transformación",
        termino: "Extract Variables",
        definicion: "Extraer datos de request/response y guardarlos en variables",
        proposito: "Capturar información para usar en otras políticas"
    },
    {
        categoria: "Políticas de Transformación",
        termino: "JSON to XML",
        definicion: "Convertir formato JSON a XML",
        proposito: "Cliente envía JSON pero backend solo acepta XML"
    },
    {
        categoria: "Políticas de Transformación",
        termino: "XML to JSON",
        definicion: "Convertir formato XML a JSON",
        proposito: "Backend responde XML pero cliente necesita JSON"
    },
    {
        categoria: "Políticas de Transformación",
        termino: "JavaScript",
        definicion: "Ejecutar código JavaScript personalizado",
        proposito: "Transformaciones complejas que no se pueden con otras políticas"
    },

    // POLÍTICAS DE CONTROL DE TRÁFICO
    {
        categoria: "Control de Tráfico",
        termino: "Quota",
        definicion: "Limitar número total de llamadas en un período",
        proposito: "Controlar uso, prevenir abuso, monetización"
    },
    {
        categoria: "Control de Tráfico",
        termino: "Response Cache",
        definicion: "Almacenar respuestas para servirlas sin llamar al backend",
        proposito: "Reducir latencia y ahorrar recursos del backend"
    },

    // COMPONENTES DE INFRAESTRUCTURA
    {
        categoria: "Infraestructura",
        termino: "KEY VALUE MAP (KVM)",
        definicion: "Almacén clave-valor para configuraciones dinámicas",
        proposito: "Configuraciones que cambian sin redesplegar el proxy"
    },
    {
        categoria: "Infraestructura",
        termino: "TARGET SERVER",
        definicion: "Configuración reutilizable que define hacia dónde apunta el proxy",
        proposito: "Centralizar configuración de backends"
    },
    {
        categoria: "Infraestructura",
        termino: "SHARED FLOW",
        definicion: "Flujo reutilizable que se puede llamar desde múltiples proxies",
        proposito: "Centralizar lógica común (seguridad, logging, transformación)"
    },
    {
        categoria: "Infraestructura",
        termino: "FLOW HOOK",
        definicion: "Mecanismo para ejecutar Shared Flows automáticamente",
        proposito: "Funcionalidad obligatoria para TODOS los proxies"
    },

    // GESTIÓN DE DESARROLLADORES
    {
        categoria: "Gestión de Desarrolladores",
        termino: "DEVELOPER",
        definicion: "Persona o empresa que consumirá tus APIs",
        proposito: "Identificar y gestionar quiénes usan tus APIs"
    },
    {
        categoria: "Gestión de Desarrolladores",
        termino: "API PRODUCT",
        definicion: "Paquete de APIs con límites y permisos específicos",
        proposito: "Agrupar APIs y controlar acceso granular"
    },
    {
        categoria: "Gestión de Desarrolladores",
        termino: "APP (APPLICATION)",
        definicion: "Aplicación específica que un Developer crea",
        proposito: "Vincular Developer con Product y generar credenciales"
    },
    {
        categoria: "Gestión de Desarrolladores",
        termino: "API KEY",
        definicion: "Identificador único y público de una App",
        proposito: "Autenticación básica de aplicaciones"
    },
    {
        categoria: "Gestión de Desarrolladores",
        termino: "APP SECRET",
        definicion: "Contraseña secreta de la App",
        proposito: "Autenticación segura en OAuth 2.0"
    },

    // SEGURIDAD Y AUTENTICACIÓN
    {
        categoria: "Seguridad y Autenticación",
        termino: "OAUTH 2.0 - CLIENT CREDENTIALS",
        definicion: "Protocolo de autorización para comunicación máquina-a-máquina",
        proposito: "Autenticación segura sin usuario humano"
    },
    {
        categoria: "Seguridad y Autenticación",
        termino: "ACCESS TOKEN",
        definicion: "Token temporal (JWT) que autoriza acceso a APIs",
        proposito: "Autenticación temporal y segura"
    },

    // MONITOREO Y ANÁLISIS
    {
        categoria: "Monitoreo y Análisis",
        termino: "DEBUG",
        definicion: "Herramienta para diagnosticar y probar proxies",
        proposito: "Identificar errores, verificar flujo, validar configuraciones"
    },
    {
        categoria: "Monitoreo y Análisis",
        termino: "ANALYTICS",
        definicion: "Dashboards automáticos con métricas de tus APIs",
        proposito: "Monitorear salud de APIs, identificar cuellos de botella"
    },
    {
        categoria: "Monitoreo y Análisis",
        termino: "CLOUD LOGGING",
        definicion: "Sistema centralizado de Google Cloud para logs",
        proposito: "Auditoría, debugging, cumplimiento normativo"
    }
];

// Función para buscar en el glosario
function buscarEnGlosario(termino) {
    const terminoLower = termino.toLowerCase();
    return GLOSARIO.filter(item =>
        item.termino.toLowerCase().includes(terminoLower) ||
        item.definicion.toLowerCase().includes(terminoLower) ||
        item.proposito.toLowerCase().includes(terminoLower)
    );
}

// Función para obtener categorías únicas
function obtenerCategorias() {
    return [...new Set(GLOSARIO.map(item => item.categoria))];
}

// Función para obtener términos por categoría
function obtenerTerminosPorCategoria(categoria) {
    return GLOSARIO.filter(item => item.categoria === categoria);
}

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GLOSARIO, buscarEnGlosario, obtenerCategorias, obtenerTerminosPorCategoria };
}
