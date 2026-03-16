# Autodoc: Mapa de Funcionalidades (Feature Map)

## Relación de Componentes y Valor de Negocio

Este mapa conecta los componentes del código fuente con los beneficios que aportan al portal corporativo.

| Característica | Detalle Técnico | Beneficio para el Usuario |
| :--- | :--- | :--- |
| **Dashboard Analítico** | Layout principal en `index.html` combinado con métricas dinámicas de resúmenes. | Permite a los directivos visualizar el progreso (tareas pendientes, proyectos activos) en un solo vistazo. |
| **Sistema de Autenticación** | Integración con `supabase.auth` vía el módulo `js/supabase-client.js`. | Garantiza el acceso seguro mediante credenciales seguras, protegiendo información sensible. |
| **Gestión de Proyectos** | Operaciones CRUD en la tabla `projects` manejada en `index.html` y llamadas de Supabase. | Facilita el seguimiento de iniciativas de la compañía y asignación de responsables. |
| **Seguimiento de Tareas** | Kanban simplificado por niveles de prioridad ("Alta", "Media", "Baja"). | Aumenta la productividad del equipo y organización diaria. |
| **Gestión de Perfil Seguro** | Interfaz de configuración y modal para cambio de contraseña protegido y auto-validado en JS. | Da independencia al usuario para gestionar su privacidad y recuperar el acceso fácilmente. |
| **Centro de Capacitación** | Carga de sub-sitios (iframes en `/portales` y `/Portal Angular`). | Fomenta la retención de talento y centraliza el aprendizaje continuo in-app (Angular, Java, Apigee). |
| **Generador de Reportes** | Herramienta de consolidación dinámica de actividades que exporta a formato impresión. | Reduce el tiempo administrativo y estandariza los informes de avance corporativo. |
