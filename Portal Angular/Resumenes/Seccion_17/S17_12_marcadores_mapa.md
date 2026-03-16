# Leccion 12: Marcadores en el mapa

---

## Que se aprende en esta leccion

En esta leccion se aprende a colocar marcadores sobre el mapa de Mapbox dentro de Angular. Se explica como crear un marcador, definir su posicion geografica, agregarlo al mapa y configurar algunas de sus propiedades como el color y la posibilidad de arrastrarlo.

---

## Puntos clave explicados

- **Preparar el componente de marcadores**
  Se trabaja sobre el componente `markers-page`. Se configura el contenedor del mapa usando clases de Tailwind CSS con un calculo de altura dinamica (`calc(100vh - 64px)`) para que ocupe el espacio disponible descontando el menu superior.

- **Importar Mapbox correctamente**
  Es necesario importar `mapboxgl from 'mapbox-gl'` de forma manual en el componente, ya que el editor puede no reconocerlo automaticamente. Tambien se importa el token de acceso desde los environments del proyecto.

- **Ciclo de vida `AfterViewInit`**
  El mapa se construye cuando la vista ya esta lista. Para esto se usa la interfaz `AfterViewInit` y su metodo `ngAfterViewInit`. Ademas, se aplica un pequeno retraso de 80 milisegundos para asegurarse de que el contenedor HTML ya tenga sus dimensiones correctas antes de renderizar el mapa.

- **Crear una instancia del marcador**
  Para agregar un marcador se usa `new mapboxgl.Marker({})`. Entre las llaves se pueden pasar opciones de configuracion del marcador. Si no se necesita ninguna opcion especial, se puede dejar el objeto vacio.

- **Establecer la posicion del marcador con `.setLngLat()`**
  Despues de crear el marcador, se llama a `.setLngLat([longitud, latitud])` para indicar en que coordenadas debe aparecer. Es importante respetar el orden: primero la longitud y luego la latitud, ya que Mapbox trabaja en ese orden (al reves que Google Maps).

- **Agregar el marcador al mapa con `.addTo()`**
  Para que el marcador sea visible, se debe llamar a `.addTo(map)` pasando la instancia del mapa. Esto es necesario porque pueden existir varios mapas en la misma aplicacion y hay que indicar en cual aparecer.

- **Propiedad `draggable`**
  Si se coloca `draggable: true` en las opciones del marcador, el usuario podra arrastrar el marcador a cualquier lugar del mapa. Si se coloca `false`, el marcador queda fijo en su posicion.

- **Escuchar eventos del marcador con `marker.on()`**
  Los marcadores tambien pueden escuchar eventos como `drag`, `dragend` y `dragstart`. En el callback se recibe un evento con informacion como la nueva posicion, el offset y a que mapa pertenece.

- **Propiedad `color`**
  Se puede definir el color del marcador pasando `color: 'red'`, `color: 'blue'` o cualquier valor hexadecimal como `color: '#000'`. Esto sera util cuando se creen marcadores dinamicos con colores distintos.

---

## Ejemplo sencillo

```typescript
// Crear un marcador y agregarlo al mapa
const newMarker = new mapboxgl.Marker({ color: 'red', draggable: false })
  .setLngLat([-122.4194, 37.7749])  // Longitud, Latitud (San Francisco)
  .addTo(map);

// Escuchar cuando el marcador deja de moverse
newMarker.on('dragend', (event) => {
  console.log(event);
});
```

---

## Funciones, palabras clave o elementos importantes

| Elemento | Descripcion |
|---|---|
| `new mapboxgl.Marker({})` | Crea una nueva instancia de un marcador con las opciones que se le pasen |
| `.setLngLat([lng, lat])` | Establece la posicion geografica del marcador (primero longitud, luego latitud) |
| `.addTo(map)` | Agrega el marcador a una instancia especifica del mapa para que sea visible |
| `draggable: true / false` | Propiedad que define si el usuario puede arrastrar el marcador o no |
| `color` | Propiedad del marcador para cambiar su color; acepta nombres de colores HTML o valores hexadecimales |
| `marker.on('dragend', ...)` | Evento que se dispara cuando el usuario suelta el marcador despues de arrastrarlo |
| `AfterViewInit` | Interfaz de Angular que permite ejecutar codigo justo despues de que la vista del componente se ha renderizado |
| `calc(100vh - 64px)` | Expresion CSS para calcular una altura dinamica restando el espacio del menu superior |

---

## Resumen final en pocas palabras

En esta leccion se aprendio a colocar marcadores en el mapa usando `new mapboxgl.Marker()`, definir su posicion con `.setLngLat()` y agregarlo al mapa con `.addTo()`. Tambien se vio como personalizar el marcador con colores, activar el arrastre con `draggable` y escuchar eventos cuando el marcador se mueve.
