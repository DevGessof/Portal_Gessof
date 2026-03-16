# Autodoc: Inventario de Infraestructura y Servicios

## 1. Detección de Activos Excepcionales

Este sistema se nutre de varios componentes desconectados logrando su unificación funcional a través de infraestructura en la Nube y CDNs públicos. Esta tabla desglosa dichos servicios externos y sus funciones estratégicas.

| Recurso / Proveedor | Propósito Operativo | Tipo | Interdependencia Crítica |
| :--- | :--- | :--- | :--- |
| **Supabase (Supabase, Inc)** | Motor de Autenticación, PostgreSQL y Reglas Row-Level-Security (RLS). | Nube (Cloud BaaS) | **Alta**. Si falla, la app pierde inicio de sesión y persistencia, quedando en modo "read-only" de UI sin datos. |
| **Archivos Multimedia (Google Drive/Docs)** | Carga de sub-módulos y videos educativos para la sección de Portales/Academias. | Nube P2P / SaaS | **Media-Baja**. Un módulo iframed puede fallar 404, pero el core del Dashboard sobrevive. |
| **Python HTTP Server** | Entregar el Mime-Type (tipo de archivo) correcto para resolver imports de `.js` módulos ES6 en un entorno sin dominio. | On-Premise (Local Dev) | **Alta**. Bloqueante; sin server, los recursos CORS generarán un estado nulo de sistema. |
| **FontAwesome CDN** | Cargar SVG/clases de la iconografía de la Intranet y tableros. | Infraestructura Pública | **Baja**. Ocurrirá una penalización estética severa (missing icons), el usuario podrá navegar el fallback text de botones. |

## 2. Resiliencia y Fallback Offline

- Capacidad Offline Nula: Toda lectura-modificación en la aplicación actual está sujeta por el enlace vivo hacia Supabase.
- Se sugiere, en la fase V2 de la app, inyectar Service Workers (`sw.js`) y `IndexedDB` para habilitar caché del catálogo de cursos.
