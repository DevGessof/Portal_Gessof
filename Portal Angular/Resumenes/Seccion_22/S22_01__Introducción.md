# Introducción

## ¿Qué se aprende?

Esta lección presenta los dos grandes temas de la Sección 22, que es la última sección dedicada a la aplicación TesloShop: la carga de archivos (imágenes) con vista previa en el navegador, y el despliegue completo de la aplicación (Angular, backend NestJS y base de datos) en servicios gratuitos en la nube.

---

## Puntos clave

**Tema 1: carga de imágenes con vista previa**

La sección enseña a seleccionar una o varias imágenes desde el equipo del usuario y mostrar una vista previa de ellas en el navegador antes de subirlas al backend. Esto mejora la experiencia de usuario porque permite ver exactamente qué imágenes se van a cargar sin necesidad de subirlas primero.

La implementación no requiere ningún paquete o librería externa; se resuelve únicamente con Angular y APIs nativas del navegador.

**Tema 2: despliegue gratuito**

Se despliega la aplicación completa en tres servicios gratuitos independientes:

- **Netlify** — para la aplicación de Angular (frontend).
- **Render** — para el backend de NestJS.
- **neon.tech** — para la base de datos PostgreSQL.

Se aclaran las limitaciones del tier gratuito de Render: el servicio entra en modo de suspensión después de 8 horas de inactividad, lo que provoca un tiempo de arranque lento la primera vez que se accede tras un período sin uso. No es adecuado para producción en clientes, pero sí para aprender y hacer demostraciones.

**Esta es la última sección de TesloShop**

Después de esta sección el curso continúa con temas adicionales de Angular, como los "Deferrable views": una funcionalidad relativamente nueva que permite segmentar el bundle de JavaScript para que ciertos componentes se carguen de forma diferida según condiciones específicas. Esto reduce el tamaño del JavaScript que se envía al navegador en la carga inicial.

**Objetivo de la sección**

Completar una aplicación Angular real que incluye: tienda con filtrado y paginación, autenticación con JWT, autorización por roles, guards, lazy loading, interceptores HTTP, formularios reactivos, caché manual, panel administrativo con CRUD de productos, carga de imágenes, y despliegue en producción.

---

## Ejemplo sencillo

La vista previa de imágenes es como ver una foto antes de imprimirla: el navegador puede mostrar la imagen directamente desde el archivo del usuario usando una URL temporal, sin necesidad de enviarla al servidor. Solo cuando el usuario confirma con "Guardar" se envía la imagen al backend.

---

## Palabras clave y elementos importantes

- Carga de archivos — selección y subida de imágenes desde el dispositivo del usuario al backend
- Vista previa de imágenes — mostrar las imágenes seleccionadas en el navegador antes de subirlas, usando APIs nativas del navegador sin librerías externas
- Netlify — servicio gratuito para desplegar el frontend de Angular
- Render — servicio gratuito para desplegar el backend de NestJS; suspende el servicio tras 8 horas de inactividad
- neon.tech — servicio gratuito para la base de datos PostgreSQL en la nube
- Deferrable views — funcionalidad de Angular para cargar componentes de forma diferida y reducir el bundle inicial; tema de secciones posteriores al curso

---

## Resumen final

La Sección 22 cierra la aplicación TesloShop con dos temas: carga de imágenes con vista previa (sin librerías externas) y despliegue gratuito de la aplicación completa en Netlify (Angular), Render (NestJS) y neon.tech (PostgreSQL). Se advierte que el tier gratuito de Render tiene suspensión por inactividad. Tras esta sección, el curso continúa con temas avanzados de Angular como los "Deferrable views".
