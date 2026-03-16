# Demostración

## ¿Qué se aprende?

Esta lección muestra el resultado final de la sección en funcionamiento. El instructor navega por la aplicación terminada para que los estudiantes vean concretamente qué van a construir: un sistema de paginación por URL y un caché que evita peticiones HTTP repetidas.

---

## Puntos clave

**Paginación visible en la aplicación**

La tienda muestra los productos paginados. Hay botones de página (1, 2, 3, 4...) y al hacer clic en cada uno la aplicación carga los productos correspondientes. El número de página se refleja directamente en el URL con un query parameter.

**La paginación persiste al recargar**

Dado que la página activa está guardada en el URL, si el usuario está en la página 2 y recarga el navegador, la aplicación carga directamente la página 2. No se pierde la posición de navegación.

**El caché evita peticiones repetidas**

Cada vez que se visita una página por primera vez, se realiza una petición HTTP al backend (visible en la consola del navegador). Pero si el usuario navega hacia atrás o vuelve a una página ya visitada, no se dispara ninguna petición nueva porque los datos ya están almacenados en caché. Esto mejora notablemente la velocidad percibida de la aplicación.

**El caché funciona por página y por categoría**

El sistema de caché almacena los resultados de forma granular: por número de página y por categoría de género. Navegar entre "Hombres", "Mujeres" y "Niños" genera peticiones la primera vez para cada combinación, pero las siguientes visitas a esas mismas combinaciones ya no hacen petición.

**El caché también aplica al detalle de producto**

Cuando el usuario entra a ver un producto específico y luego regresa, la pantalla de detalle también se sirve desde caché, sin hacer una nueva petición al servidor.

**Un único componente de paginación para todas las pantallas**

El mismo componente de paginación funciona en la página principal y en todas las páginas de género. No hay distinción desde el punto de vista del componente: simplemente lee y escribe el número de página en el URL.

**Reutilización futura: panel administrativo**

El mismo componente y servicio de paginación que se construye en esta sección se usará más adelante en el panel administrativo de la tienda.

---

## Ejemplo sencillo

Imagina que en una librería en línea marcas con un separador en qué página del catálogo te quedaste. Si cierras el navegador y vuelves a entrar, el separador sigue ahí y no tienes que buscar de nuevo. Eso es lo que hace la paginación por URL: el "separador" es el número de página guardado en la dirección web. Y el caché es como tener el catálogo ya impreso en casa: no hay que pedirlo de nuevo si ya lo tienes.

---

## Palabras clave y elementos importantes

- Paginación por URL — el número de página activa se almacena en el query parameter `page`
- Query parameter — parte opcional del URL que sigue al símbolo `?`, como `?page=3`
- Caché por página — cada combinación de página y género se almacena de forma independiente
- Petición HTTP — llamada al servidor para obtener datos; el caché busca evitar las repetidas
- `console.log` — usado en la demostración para visualizar cuándo se dispara cada petición
- Componente compartido — el mismo componente de paginación sirve en home y páginas de género
- Panel administrativo — pantalla futura que también reutilizará este sistema de paginación

---

## Resumen final

La demostración muestra la aplicación terminada con paginación funcional y caché activo. El sistema de paginación opera a través del URL, lo que permite compartir la dirección de una página específica y mantener la posición al recargar. El caché almacena los resultados por combinación de página y género, evitando peticiones repetidas al backend. Tanto la página principal como las páginas de género usan el mismo componente de paginación, y ese mismo componente se reutilizará después en el panel administrativo.
