# Autodoc: Postura de Seguridad y Auditoría

## 1. Auditoría de Protecciones Implementadas

El Portal Gessof integra mecanismos directos de protección activa y pasiva.

| Área / Vector de Riesgo | Protección Implementada | Estado / Riesgo Residual |
| :--- | :--- | :--- |
| **Autenticación (Nivel de Sesión)** | Proveedor OAuth y contraseñas vía SDK de Supabase Auth v2 (JWT Bearer Token manejado automáticamente en LocalStorage/Caché interna). | Alta seguridad al delegar el registro en un BaaS externo auditado (Supabase). |
| **Cambio de Contraseña Local** | JS evalúa la robustez: largo mínimo de 6 caracteres y coincidencia en front (previene envíos nulos). Actualización en sesión vía `supabase.auth.updateUser()`. | Mitiga fuerza bruta y typos del usuario. |
| **Iframes y Modales Embebidos** | Política generalizada para evitar bloqueo de orígenes (`<meta name="referrer" content="no-referrer">`). Integración de links a Docs Externos (`externalLink.href` usando `/view` vs `/preview`). | Moderado (la mezcla de iframes externos requiere vigilancia para evitar Clickjacking). |
| **Validación Front-end** | Configurado en `autocomplete="new-password"`, variables limpiadas, `try/catch` globales antes de contactar a Supabase. | Evita filtrado en extensiones de navegador. |

## 2. Análisis de Dependencias

- **Supabase JS Client v2**: Obtenido vía CDN versionada. Se recomienda monitorear versiones menores.
- **Bootstrap 5 / FontAwesome**: Obtenidos vía CDNs públicos. Sin vulnerabilidades activantes.
- **Micro Servidor Python (`servidor.py`)**: Usa un manejador en texto claro sobre el puerto 8080. **Nota de Auditoría**: Estrictamente apto para desarrollo o despliegues locales, requiere de Nginx o un balanceador frente al servidor en un entorno de paso a Producción, o despliegue completo en Vercel/Netlify.

## Estado Final de Salud de Seguridad

```yaml
salud_general: "SANA (Aprobada para Intranet)"
puntos_fuertes: ["BaaS Offloading", "Gestión de Sesiones Moderna (Supabase JWT)"]
puntos_a_reforzar: ["Mover configuración sensible de `js/config.js` y `js/supabase-config.js` al servidor o usar variables de entorno en inyección pre-build", "Servidor de despliegue HTTPS necesario en Prod"]
```
