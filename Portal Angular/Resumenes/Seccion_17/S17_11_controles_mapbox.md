# Leccion 11: Controles propios de Mapbox

---

## Que se aprende en esta leccion

En esta leccion se presentan los controles que Mapbox ofrece de forma nativa, es decir, funcionalidades que ya vienen listas para usar sin necesidad de programarlas desde cero. Se aprende a agregarlos al mapa con una sola linea de codigo y se exploran algunos eventos adicionales que el mapa puede escuchar.

---

## Puntos clave explicados

- **Mapbox tiene extensiones propias**
  El paquete de Mapbox incluye herramientas adicionales como controles de zoom, pantalla completa, brujula y escala. Estas pueden encontrarse en la documentacion oficial de Mapbox y se agregan facilmente al mapa.

- **El metodo `map.addControl()`**
  Es la funcion que permite agregar cualquiera de estos controles al mapa. Solo hay que pasarle una nueva instancia del control que se desea agregar.

- **Control `FullscreenControl`**
  Agrega un boton que permite maximizar el mapa para que ocupe toda la pantalla. Al hacer clic nuevamente, el mapa vuelve a su tamano normal.

- **Control `NavigationControl`**
  Agrega botones para hacer zoom in y zoom out, y tambien una brujula para orientar el mapa hacia el norte. Es uno de los controles mas comunes en aplicaciones con mapas.

- **Control `ScaleControl`**
  Muestra una barra de escala en el mapa que indica cuantos metros o kilometros representa la distancia visible en pantalla. Es util en aplicaciones donde la precision geografica importa.

- **Eventos del mapa con `map.on()`**
  Mapbox permite escuchar muchos tipos de eventos en el mapa, como `load`, `drag`, `click`, `pitch`, `pitchend`, entre otros. El evento `load` es muy comun y se dispara cuando el mapa ya termino de cargarse completamente.

- **Diferencia entre Angular y Mapbox**
  El instructor aclara que estos controles son parte de Mapbox y no de Angular. Por eso no se profundiza demasiado en ellos, pero se recomienda explorar la documentacion oficial de Mapbox para conocer todos los disponibles.

---

## Ejemplo sencillo

```typescript
// Agregar control de pantalla completa
map.addControl(new mapboxgl.FullscreenControl());

// Agregar control de navegacion (zoom y brujula)
map.addControl(new mapboxgl.NavigationControl());

// Agregar control de escala
map.addControl(new mapboxgl.ScaleControl());

// Escuchar el evento cuando el mapa termina de cargar
map.on('load', () => {
  console.log('Map loaded');
});
```

---

## Funciones, palabras clave o elementos importantes

| Elemento | Descripcion |
|---|---|
| `map.addControl()` | Metodo de Mapbox para agregar un control visual al mapa |
| `mapboxgl.FullscreenControl` | Control que agrega un boton para maximizar el mapa a pantalla completa |
| `mapboxgl.NavigationControl` | Control que agrega botones de zoom y una brujula para orientar el mapa |
| `mapboxgl.ScaleControl` | Control que muestra la escala geografica del area visible en el mapa |
| `map.on('load', ...)` | Evento que se dispara cuando el mapa termino de cargarse por completo |
| `map.on('drag', ...)` | Evento que se dispara mientras el usuario esta arrastrando el mapa |
| `map.on('click', ...)` | Evento que se dispara cuando el usuario hace clic sobre el mapa |

---

## Resumen final en pocas palabras

En esta leccion se aprendio que Mapbox incluye controles listos para usar, como pantalla completa, navegacion y escala, que se agregan al mapa con `map.addControl()`. Tambien se vio como escuchar eventos del mapa con `map.on()`. Estos controles son propios de Mapbox y su documentacion oficial es el lugar indicado para explorar mas opciones.
