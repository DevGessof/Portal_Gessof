# Demostración

## ¿Qué se aprende?

Esta lección muestra el resultado final que se construirá a lo largo de la sección: selección múltiple de imágenes con vista previa inmediata, subida al backend al tocar "Guardar", actualización del caché y reflejo instantáneo de los cambios en el listado de productos y en la tienda. También se muestra la aplicación completamente desplegada en tres servicios gratuitos.

---

## Puntos clave

**Flujo completo de carga de imágenes**

El flujo que se implementará es el siguiente:

1. El usuario abre la página de detalle de un producto en el panel administrativo.
2. Hace clic en el selector de archivos y elige una o varias imágenes desde su equipo. Las imágenes seleccionadas aparecen inmediatamente como vista previa debajo del formulario, sin necesidad de subirlas todavía.
3. El usuario completa o ajusta los datos del formulario y toca "Guardar".
4. En ese momento se ejecuta la carga: primero se suben las imágenes al backend y luego se actualiza o crea el producto con las URLs de las imágenes ya almacenadas en el servidor.
5. Tras guardar, el carrusel del formulario muestra las imágenes recién subidas.
6. Al volver al listado de productos, las imágenes aparecen en la tabla sin necesidad de recargar.
7. En la página principal de la tienda, las tarjetas de producto también muestran las imágenes actualizadas gracias al caché compartido.

**Vista previa sin subida previa**

Uno de los puntos destacados es que la vista previa se genera localmente en el navegador usando APIs nativas, sin hacer ninguna petición al backend. Solo cuando el usuario confirma con "Guardar" se inician las peticiones HTTP.

**Indicador de carga**

Se menciona que sería conveniente mostrar algún spinner o indicador mientras se suben las imágenes, para que el usuario sepa que la operación está en progreso. Esto se implementará durante la sección.

**Aplicación desplegada: tres servicios gratuitos**

La demostración muestra la aplicación funcionando en producción usando:

- **Netlify** — frontend Angular.
- **Render** — backend NestJS.
- **neon.tech** — base de datos PostgreSQL.

Se observa un lag notable en la aplicación desplegada porque Render en el tier gratuito es más lento que un entorno de desarrollo local. La aplicación se suspende después de 8 horas de inactividad, lo que implica un arranque lento al primer acceso.

**El caché sigue funcionando en producción**

Se muestra que, gracias al caché implementado en secciones anteriores, al navegar entre páginas la aplicación desplegada se comporta de forma ágil: hay un loading inicial y luego las navegaciones posteriores son casi instantáneas porque los datos ya están cacheados.

---

## Ejemplo sencillo

El flujo de carga es como seleccionar fotos en una aplicación de mensajería: puedes ver las fotos que elegiste antes de enviarlas. Cuando presionas "Enviar" (o "Guardar"), las fotos viajan al servidor y pasan a ser permanentes. Hasta ese momento, solo existen en tu dispositivo.

---

## Palabras clave y elementos importantes

- Vista previa local — imágenes que se muestran en el navegador desde el archivo del usuario antes de subirlas, sin petición HTTP
- Subida de imágenes al "Guardar" — las imágenes se envían al backend solo cuando el usuario confirma la operación
- Spinner o indicador de carga — retroalimentación visual mientras se procesan las imágenes
- Actualización del caché tras subir imágenes — las tablas y tarjetas de la tienda reflejan los cambios sin recargar
- Netlify — frontend Angular desplegado gratuitamente
- Render — backend NestJS desplegado en tier gratuito; más lento y con suspensión por inactividad
- neon.tech — base de datos PostgreSQL gratuita en la nube
- Tier gratuito de Render — suspende el servicio tras 8 horas de inactividad; no apto para producción real

---

## Resumen final

Esta lección demuestra el resultado final de la sección: el usuario selecciona imágenes y ve una vista previa inmediata; al guardar, las imágenes se suben al backend y el caché se actualiza reflejando los cambios en toda la aplicación sin recargar. También se muestra la aplicación desplegada en Netlify, Render y neon.tech, con la advertencia de que el tier gratuito de Render introduce latencia y suspensión por inactividad. El caché implementado en secciones anteriores sigue funcionando correctamente en producción.
