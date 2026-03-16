# Leccion 10: Controlar el mapa - Obtener la posicion central

---

## Que se aprende en esta leccion

En esta leccion se aprende a obtener las coordenadas del centro del mapa en tiempo real. Cuando el usuario mueve el mapa, la aplicacion detecta automaticamente en que posicion quedo el centro y actualiza esa informacion en pantalla usando senales de Angular.

---

## Puntos clave explicados

- **Crear una senal de coordenadas**
  Se crea una variable reactiva llamada `coordinates` que almacena un objeto con dos propiedades: la latitud (`lat`) y la longitud (`lng`). Esta senal se actualiza cada vez que el mapa termina de moverse.

- **El evento `moveend`**
  Es un evento que se dispara cuando el usuario deja de mover el mapa. Es preferible a usar `move` porque este ultimo se activa constantemente mientras el mapa se esta arrastrando, lo que genera demasiado procesamiento innecesario.

- **El metodo `map.getCenter()`**
  Es una funcion propia de Mapbox que devuelve las coordenadas del punto central del mapa en ese momento. El resultado es un objeto de tipo `LngLat` que contiene la latitud y la longitud.

- **Actualizar la senal con `.set()`**
  Luego de obtener el centro con `getCenter()`, se llama a `this.coordinates.set(center)` para guardar el nuevo valor en la senal y que la vista se actualice automaticamente.

- **Mostrar las coordenadas en el HTML**
  Se usa una etiqueta `<h2>` con el texto "Coordenadas" y una etiqueta `<pre>` para mostrar los valores de latitud y longitud. Se utiliza el pipe `number` para mostrar los decimales con 4 cifras, y el pipe `json` para visualizar el objeto completo si fuera necesario.

- **El pipe `JsonPipe`**
  Se importa para poder mostrar objetos en la vista de Angular. Sin este pipe, un objeto se mostraria como el texto "object Object", que no es util.

- **Desestructuracion del objeto**
  Para escribir codigo mas limpio, se puede extraer la latitud y la longitud del objeto de la senal usando desestructuracion: `const { lat, lng } = this.coordinates()`.

---

## Ejemplo sencillo

```typescript
// Senal que almacena las coordenadas del centro del mapa
coordinates = signal({ lng: -75.5, lat: 40.0 });

// Cuando el mapa termina de moverse, actualizamos las coordenadas
map.on('moveend', () => {
  const center = map.getCenter();
  this.coordinates.set(center);
});
```

```html
<!-- Mostramos las coordenadas en pantalla -->
<h2>Coordenadas</h2>
<pre>{{ coordinates() | json }}</pre>
```

---

## Funciones, palabras clave o elementos importantes

| Elemento | Descripcion |
|---|---|
| `signal()` | Crea una variable reactiva en Angular que actualiza la vista automaticamente cuando cambia su valor |
| `map.on('moveend', ...)` | Escucha el evento que se dispara cuando el usuario deja de mover el mapa |
| `map.getCenter()` | Metodo de Mapbox que devuelve las coordenadas del centro visible del mapa |
| `.set()` | Metodo de las senales para actualizar su valor |
| `LngLat` | Tipo de objeto que usa Mapbox para representar una posicion geografica con longitud y latitud |
| `JsonPipe` | Pipe de Angular que convierte un objeto a texto legible para mostrarlo en la vista |
| `pipe number` | Pipe de Angular que formatea numeros, por ejemplo para mostrar solo 4 decimales |
| Desestructuracion | Tecnica de JavaScript para extraer propiedades de un objeto en variables separadas de forma mas limpia |

---

## Resumen final en pocas palabras

En esta leccion se aprendio a detectar cuando el usuario deja de mover el mapa y obtener las coordenadas del centro usando `map.getCenter()`. Esas coordenadas se guardan en una senal de Angular y se muestran en pantalla con ayuda del pipe `json` y el pipe `number`.
