# Desplegar Backend — GitHub — Render

## ¿Qué se aprende?

Esta lección despliega el backend NestJS en Internet usando dos servicios: GitHub para alojar el código fuente y Render para ejecutarlo como un Web Service. Se configura la versión de Node, se suben las variables de entorno (incluyendo los datos de la base de datos de neon.tech), y se verifica que el backend funciona correctamente ejecutando el seed y consultando el endpoint de productos desde la URL pública generada por Render.

---

## Puntos clave

**Preparación del backend: `package.json` y comandos de producción**

Antes de subir el código se revisa el `package.json` del backend. Las claves relevantes son:

- `"engines": { "node": ">=22" }` — indica a Render qué versión de Node usar. Se actualiza de la versión 17 a la 22 por ser la versión con soporte a largo plazo activa.
- `"scripts": { "build": "nest build", "start": "node dist/main" }` — Render ejecutará `npm run build` para compilar y luego `npm start` para iniciar. No se usa `start:dev` porque no se está en desarrollo.

**Subir el backend a GitHub**

El proceso estándar de Git:

```bash
git init
git add .
git commit -m "Backend inicial"
git remote add origin <URL-del-repositorio>
git push -u origin main
```

Las variables de entorno (`.env`) y la carpeta `postgres` (Docker local) no se suben a GitHub porque están en el `.gitignore`. Esto es correcto: las credenciales nunca deben ir en el repositorio.

**Crear un Web Service en Render**

1. Ir a `render.com`, iniciar sesión (recomendado con GitHub para sincronización automática).
2. Hacer clic en "New" → "Web Service".
3. Conectar la cuenta de GitHub o la organización donde está el repositorio del backend.
4. Seleccionar el repositorio `nest-teslo-shop`.
5. Render detecta automáticamente que es una aplicación Node.js y propone los comandos:
   - **Build Command**: `npm install && npm run build` ✓
   - **Start Command**: `npm start` ✓
6. Seleccionar el **Free Tier** (no requiere tarjeta de crédito).
7. Elegir la región más cercana.

**Despliegue automático con cada push a `main`**

Render monitorea la rama `main` del repositorio. Cualquier `git push` a esa rama dispara automáticamente un nuevo despliegue. Esto es el fundamento del **CI/CD** (Integración y Despliegue Continuos): cada cambio de código se despliega sin intervención manual.

**Configurar las variables de entorno en Render**

En la pantalla de configuración de Render, antes de desplegar, se añaden las variables de entorno copiadas del `.env` local, ajustando los valores de producción:

| Variable | Valor en desarrollo | Valor en producción |
|---|---|---|
| `STAGE` | `dev` | `prod` |
| `DB_HOST` | `localhost` | host de neon.tech |
| `DB_PASSWORD` | contraseña local | contraseña de neon.tech |
| `DB_NAME` | nombre local | `neondb` |
| `DB_USERNAME` | usuario local | `neondb_owner` |
| `DB_PORT` | `5432` | `5432` (igual) |
| `JWT_SECRET` | cualquier string | string seguro generado con `openssl rand -base64 32` |
| `HOST_API` | `localhost:3000` | URL que dará Render (se puede actualizar después) |

Para generar un `JWT_SECRET` seguro en Mac/Linux:

```bash
openssl rand -base64 32
```

Render permite pegar todas las variables en formato `CLAVE=VALOR` y las parsea automáticamente.

**Verificar el despliegue**

Render asigna una URL pública con el formato `https://nest-teslo-shop-XXXX.onrender.com`. Al acceder a esa URL sin ruta se obtiene un error (el backend no tiene `index.html`), lo que es normal porque NestJS sirve el API bajo `/api`, no en la raíz.

Para verificar que el backend funciona correctamente:

1. `GET https://nest-teslo-shop-XXXX.onrender.com/api` → muestra la documentación Swagger del API.
2. `GET https://nest-teslo-shop-XXXX.onrender.com/api/seed` → ejecuta el seed y devuelve `"SEED EXECUTED"`, confirmando que el backend se conectó exitosamente a PostgreSQL en neon.tech y pudo insertar datos.
3. `GET https://nest-teslo-shop-XXXX.onrender.com/api/products` → devuelve el listado de productos.

**Nota sobre el seed en producción**

El endpoint `/api/seed` es destructivo (borra todos los datos y los vuelve a insertar). En una aplicación real de producción este endpoint se eliminaría o desactivaría. Solo existe para facilitar las pruebas durante el desarrollo y preproducción.

---

## Ejemplo sencillo

Desplegar en Render es como llevar el código de una receta de cocina a una cocina profesional (Render): se entrega la receta (GitHub), se configuran los ingredientes especiales que no estaban en la receta por seguridad (variables de entorno), y Render prepara el plato automáticamente. Cada vez que se actualiza la receta (push a `main`), Render la vuelve a preparar.

---

## Palabras clave y elementos importantes

- **Render** — plataforma de hosting para backends Node.js; tier gratuito; suspende el servicio tras 8h de inactividad; se usa para desplegar NestJS
- **Web Service** — tipo de despliegue en Render para aplicaciones que escuchan peticiones HTTP
- `"engines": { "node": ">=22" }` — en `package.json`; indica a Render la versión de Node requerida
- `npm run build` + `npm start` — comandos de producción del backend NestJS; `build` compila TypeScript a JavaScript, `start` ejecuta `node dist/main`
- **Variables de entorno en Render** — se configuran en la plataforma, no en el repositorio; incluyen las credenciales de neon.tech
- `openssl rand -base64 32` — genera un string aleatorio seguro para usar como `JWT_SECRET`
- **Rama `main` como rama de producción** — Render monitorea esta rama y redespliega automáticamente en cada push
- **CI/CD** — cada commit a `main` dispara automáticamente el proceso de construcción y despliegue
- `GET /api/seed` — endpoint destructivo para poblar la base de datos; solo para desarrollo/preproducción

---

## Resumen final

Esta lección despliega el backend NestJS en Render conectado a la base de datos PostgreSQL de neon.tech. El proceso es: actualizar la versión de Node en `package.json`, subir el código a GitHub, crear un Web Service en Render conectando el repositorio, configurar las variables de entorno de producción (con las credenciales de neon.tech y un JWT_SECRET seguro), y esperar a que Render complete la construcción. La verificación exitosa se hace ejecutando el seed (`/api/seed`) y consultando productos (`/api/products`) desde la URL pública de Render.
