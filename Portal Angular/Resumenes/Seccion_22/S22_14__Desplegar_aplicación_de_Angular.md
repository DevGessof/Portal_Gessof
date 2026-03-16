# Desplegar aplicación de Angular

## ¿Qué se aprende?

Esta lección final despliega la aplicación Angular en Netlify, conectándola al repositorio de GitHub para que cada push redespligye automáticamente. Se verifica que la aplicación funciona en producción: autenticación, panel administrativo, paginación con caché, y carga de imágenes desde el frontend hasta el backend en Render y la base de datos en neon.tech. También se observan problemas de UX propios del ambiente de producción (latencia, falta de spinners) que quedan como mejoras opcionales.

---

## Puntos clave

**Angular como SPA: solo archivos estáticos**

Una aplicación Angular compilada con `ng build` genera únicamente archivos HTML, CSS y JavaScript. No necesita ningún servidor Node.js para funcionar. Cualquier hosting que sirva archivos estáticos puede desplegarla:

- Netlify, Vercel, GitHub Pages, Firebase Hosting, Amazon S3, etc.
- Solo se necesita un servidor Node.js si se usa **Server Side Rendering (SSR)**.

Esta flexibilidad es una ventaja importante de las SPA.

**Proceso de despliegue en Netlify**

1. Ir a `netlify.com` y hacer clic en "Login" (recomendado con GitHub).
2. Seleccionar "Importar de un proyecto existente" → GitHub.
3. Buscar y seleccionar el repositorio de Angular (ej. `angular-tesloshop`).
4. Configurar el nombre del sitio (debe ser único en Netlify; añadir iniciales si hay conflicto).
5. Seleccionar la **rama a desplegar** (`main` en proyectos propios; el instructor usó `fin-seccion-22` por razones del curso).
6. No es necesario configurar variables de entorno: Angular las incorpora en el bundle durante el `ng build`.
7. Hacer clic en "Desplegar".

Netlify ejecuta automáticamente:
- Clona el repositorio.
- Instala dependencias (`npm install`).
- Construye la aplicación (`ng build`).
- Publica los archivos de la carpeta `dist/`.

**Rama `main` como rama de producción**

Al igual que con Render, Netlify monitorea la rama seleccionada. Cada `git push` a esa rama redespliega automáticamente la aplicación. Esto implementa CI/CD sin configuración adicional.

**Variables de entorno no son necesarias en el despliegue de Angular**

Las variables de entorno de Angular (`environment.ts`) se procesan en tiempo de compilación, no en tiempo de ejecución. Durante el `ng build`, Angular reemplaza las referencias a `environment.baseUrl` con el valor literal de la cadena. Por eso el archivo `environment.ts` ya tiene la URL del backend de Render hardcodeada, y Netlify no necesita recibir ninguna variable de entorno para el despliegue.

**Verificación en producción**

Una vez desplegado, la aplicación es accesible en la URL asignada por Netlify (ej. `https://teslo-shop-front.netlify.app`). Se verifican:

- **Store-front**: los productos se cargan con un pequeño delay (latencia real de Render y neon.tech); el caché funciona: navegar entre páginas ya visitadas es instantáneo.
- **Login**: `test1@google.com` / `Abc123`; funciona correctamente.
- **Panel administrativo**: los productos paginados se cargan; el caché de paginación funciona.
- **Actualización de producto**: funciona, aunque se detecta que hace falta un spinner de carga y un mejor manejo de errores de validación (el backend devuelve "stock debe ser mayor que 0" y no se muestra en pantalla).
- **Carga de imágenes**: se seleccionan imágenes desde el escritorio, se ve la vista previa, se guarda, y las imágenes quedan guardadas en el producto tanto en el panel administrativo como en la tienda.
- **Guards**: al recargar el navegador desde una página protegida, los guards funcionan correctamente.

**Problemas de UX detectados en producción**

Al probar la aplicación en el ambiente real se hacen visibles problemas que no eran perceptibles en localhost:

- Falta de spinner de carga mientras el backend responde.
- El mensaje `@empty` ("No hay productos") aparece brevemente mientras se carga la primera página.
- No se muestran en pantalla los errores de validación devueltos por el backend (ej. stock inválido).
- Sería conveniente un indicador de estado mientras se guardan cambios o se suben imágenes.

Estos son los problemas típicos que se detectan en **preproducción (staging)** antes de lanzar a usuarios reales.

**Conclusión del curso TesloShop**

Con este despliegue se completa el proyecto TesloShop. La aplicación cubre: listado y detalle de productos, carrusel de imágenes, paginación por URL con caché, autenticación con JWT, interceptores HTTP, guards de acceso, panel administrativo con CRUD de productos, carga de imágenes, y despliegue en tres servicios independientes (neon.tech + Render + Netlify).

El siguiente tema del curso (mencionado como "Deferrable Views") se verá en una sección separada.

---

## Ejemplo sencillo

Desplegar Angular en Netlify es como publicar un libro: una vez escrito (`ng build`), el texto queda fijo en papel (archivos estáticos). Cualquier librería (hosting) puede venderlo sin necesitar conocer al autor (servidor Node.js). Si el autor cambia algo, manda una nueva edición (push a `main`) y Netlify la distribuye automáticamente.

---

## Palabras clave y elementos importantes

- **Netlify** — plataforma de hosting para aplicaciones estáticas; se conecta a GitHub y redespliega automáticamente en cada push a la rama configurada; no requiere tarjeta de crédito en el tier gratuito
- **SPA (Single Page Application)** — aplicación Angular compilada como archivos estáticos (HTML, CSS, JS); no requiere servidor Node.js en producción salvo que se use SSR
- `ng build` — comando que compila TypeScript, resuelve las variables de entorno en tiempo de compilación y genera la carpeta `dist/` lista para desplegar
- **Variables de entorno en tiempo de compilación** — Angular incorpora los valores de `environment.ts` en el bundle durante el build; Netlify no necesita recibir estas variables en tiempo de ejecución
- **Rama `main` como rama de producción** — Netlify monitorea esta rama y redespliega automáticamente en cada push
- **CI/CD en Netlify** — cada `git push` a `main` dispara automáticamente clonación, instalación de dependencias, build y publicación
- **Latencia en el tier gratuito** — Render suspende el backend tras 8h de inactividad; la primera petición puede tardar varios segundos mientras el servicio despierta
- **Caché en producción** — las optimizaciones de caché implementadas en el curso funcionan correctamente en producción; las páginas ya visitadas son instantáneas
- **Staging (preproducción)** — el ambiente de Netlify + Render + neon.tech actúa como preproducción; revela problemas de UX imperceptibles en localhost

---

## Resumen final

Esta lección cierra el proyecto TesloShop desplegando Angular en Netlify. El proceso es: conectar GitHub, seleccionar el repositorio y la rama `main`, y hacer clic en desplegar. Netlify no necesita variables de entorno porque Angular las incorpora durante el `ng build`. La verificación en producción confirma que la autenticación, el caché, la paginación y la carga de imágenes funcionan correctamente, aunque expone problemas de UX (falta de spinners, errores de validación no mostrados) que son propios del ambiente real y quedan como mejoras opcionales. Con esto concluye el proyecto TesloShop y la Sección 22.
