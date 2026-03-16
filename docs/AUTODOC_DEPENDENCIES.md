# Autodoc: Ecosistema Técnico y Dependencias

## 1. Visión General del Inventario de Librerías

El portal está construido utilizando el paradigma de herramientas "CDN y Zero-Build". Es decir, no hay un `package.json` involucrado en gran escala para la aplicación final de usuario; se utilizan CNDs seguras y versiones específicas para asegurar la compatibilidad sin una cadena de compilación (Webpack, Vite, etc).

## 2. Dependencias Principales Categorizadas

| Categoría | Nombre de la Dependencia | Versión Aproximada | Propósito Principal | Status Modernidad |
| :--- | :--- | :--- | :--- | :--- |
| **Framework CSS** | Bootstrap | `5.3.x` | Provee layout base y sistema de grillas (`container`, `row`, `col`). | Alto / Moderno |
| **Iconografía** | FontAwesome | `6.x` | Inyecta toda la simbología de las tarjetas y menús laterales de la app. | Moderno |
| **Backend/Auth** | Supabase JS SDK | `2.x+` (UMD vía unpkg/jsdelivr) | Se encarga de manejar el protocolo seguro de WebSockets para Realtime Database, y JWT para Auth. | Estado del arte en BaaS |
| **Tipografía** | Google Fonts (Inter) | Versión Web | Mejora notable en la UI al estandarizar el texto cross-browser. | Estándar de Industria |

## 3. Servidor de Utilidad

La única "Dependencia del Desarrollador" (`devDependency` equivalente) requerida para la iteración local es **Python 3.x+** para poder invocar `http.server` y levantar el contexto HTTP necesario para evitar bloqueos del navegador CORS en módulos JS locales (`<script type="module">`).
