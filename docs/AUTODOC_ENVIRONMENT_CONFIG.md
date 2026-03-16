# Autodoc: Configuración de Entorno y Variables

## 1. Inventario de Configuración Global

El proyecto gestiona sus variables y flujos lógicos de entorno desde un archivo central y desde constantes en JavaScript. No utiliza un archivo `.env` clásico (tipo Node.js) ya que es una aplicación que corre enteramente en el lado del cliente.

**Archivo Central de Configuración**: `js/config.js` y `js/supabase-config.js`

| Categoría | Nombre / Clave | Ubicación | Obligatorio | Propósito |
| :--- | :--- | :--- | :---: | :--- |
| **BaaS Auth** | `supabaseUrl` | `supabase-config.js` | Sí | URL del backend Supabase. |
| **BaaS Keys** | `supabaseAnonKey` | `supabase-config.js` | Sí | Llave anónima pública requerida para conexiones al motor DaaS/Auth de Supabase. |
| **Almacenamiento** | `STORAGE_KEYS` (Varios) | `config.js` | No | Contiene las llaves usadas para el `localStorage` (Proyectos, Tareas, Perfil, Tema). |
| **Estado App** | `ROLES`, `PROJECT_STATUS` | `config.js` | Sí | Diccionario de roles (admin, dev, viewer) y estados permitidos para proyectos. |

## 2. Clasificación y Secretos

*   **Variables Sensibles**: No deben inyectarse Service Keys (Llaves secretas de bypass RLS de Supabase) en este entorno de cliente, solo la llave **Anon**.
*   **Base de Datos**: Toda la abstracción de RLS (Row Level Security) es delegada a la consola de Supabase y validada usando el Token de Autorización Bearer manejado internamente por el SDK.

## 3. Instrucciones de Nuevo Entorno

Para levantar este proyecto contra un nuevo servidor de desarrollo o pruebas de Supabase:
1. Abrir `js/supabase-config.js`.
2. Reemplazar los valores de la URL y la Anon Key por las provistas en _Supabase Dashboard > Settings > API_.
3. Ejecutar el script SQL de inicialización en el SQL Editor de Supabase (si existe un archivo `.sql` de DB schema).
