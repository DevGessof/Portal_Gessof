# Introducción - Sección 21

## ¿Qué se aprende?

Esta lección presenta el objetivo de la Sección 21: construir un panel administrativo completo para el proyecto TesloShop, incorporando autorización de roles, paginación, creación y actualización de productos con formularios reactivos.

---

## Puntos clave

**Diferencia entre autenticación y autorización**

La Sección 20 cubrió la autenticación (verificar quién es el usuario). Esta sección agrega la **autorización**: determinar si ese usuario tiene permiso para acceder a un recurso específico, en este caso el panel administrativo.

**Contenido de la sección**

- Guard de autorización para el panel administrativo (solo usuarios con role `admin` pueden acceder).
- Paginación en el listado de productos del panel.
- Trabajo intensivo con el router de Angular: rutas, parámetros, navegación y redirecciones.
- Creación de productos con formulario reactivo y validaciones.
- Actualización de productos desde el panel.
- Invalidación del caché al editar un producto.
- La carga de imágenes queda para la siguiente sección para mantener el foco en el formulario.

**Lo que NO se cubre en esta sección**

La carga (upload) de archivos e imágenes. No es que sea muy complicada, pero se deja para la siguiente sección para no mezclar temas.

**Enfoque en Angular moderno**

Al igual que en secciones anteriores, todo se implementa con la forma moderna de Angular: señales (`signal`, `computed`, `rxResource`), funciones en lugar de decoradores, interceptores y guards funcionales. El objetivo es que el estudiante adquiera experiencia con patrones reales de producción.

---

## Ejemplo sencillo

La autenticación es como mostrar tu identificación en la puerta de un edificio. La autorización es que, aunque hayas pasado la puerta principal, solo ciertos empleados tienen la llave de la sala de servidores. Esta sección trata de esa segunda llave.

---

## Palabras clave y elementos importantes

- Autorización — determinar si un usuario autenticado tiene permiso de acceder a un recurso específico
- Role `admin` — rol requerido para acceder al panel administrativo
- Panel administrativo — módulo separado con sus propias rutas, layout, páginas y guard de autorización
- Formulario reactivo — enfoque de Angular para manejar formularios complejos con validaciones en el componente TypeScript
- Invalidación de caché — actualizar los datos en memoria cuando se modifica un producto para que el listado muestre datos actualizados sin petición HTTP adicional
- Lazy loading — el módulo del panel se carga solo cuando el usuario navega a `/admin`

---

## Resumen final

La Sección 21 construye el panel administrativo del TesloShop. Agrega autorización por roles al Guard existente, implementa un listado de productos paginado, y crea formularios reactivos con validaciones para crear y actualizar productos. La carga de imágenes se abordará en la siguiente sección. El enfoque sigue siendo Angular moderno con señales y funciones.
