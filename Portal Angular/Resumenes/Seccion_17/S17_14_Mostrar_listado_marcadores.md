# Resumen de Lección - Sección 17, Clase 14

---

## 1. Titulo de la leccion

**Mostrar listado de marcadores**

---

## 2. Que se aprende en esta leccion

Se aprende a mostrar un panel lateral con todos los marcadores creados, usando componentes de daisyUI (Radio), iterando la senal de marcadores con `@for` y `@empty`, coloreando dinamicamente cada elemento con `[style]`, y navegando hacia un marcador al hacer clic gracias al metodo `flyTo` de Mapbox.

---

## 3. Puntos clave explicados

- **Panel lateral fijo:** se crea una seccion con posicion `fixed`, ancho de 260px, `bg-white`, `rounded`, y ubicacion con `top` y `left` para que flote sobre el mapa.
- **Componente Radio de daisyUI:** se toma el HTML de "Radio" de la documentacion de daisyUI y se adapta para listar los marcadores.
- **Directiva `@for` con senal:** se recorre `markers()` (con parentesis porque es una senal) con `@for (marker of markers()); track marker.id` para renderizar un item por cada marcador.
- **Directiva `@empty`:** cuando el arreglo esta vacio se muestra un mensaje "No hay marcadores" con estilos de Tailwind.
- **Coordenadas del marcador:** se muestra `marker.mapboxMarker.getLngLat()` en cada item, pasado por el pipe `json` para que sea legible; se importa `JsonPipe` en el componente.
- **Color dinamico con `[style]`:** como Tailwind no acepta clases dinamicas, se usa `[style]="{ backgroundColor: marker.mapboxMarker._color }"` para asignar el color de fondo de cada radio.
- **Metodo `flyToMarker`:** recibe una `LngLatLike`, verifica que el mapa exista y llama a `this.map().flyTo({ center: lngLat })` para animar el desplazamiento hacia ese punto.
- **Evento `(click)` en el item:** al hacer clic en un marcador del listado se invoca `flyToMarker(marker.mapboxMarker.getLngLat())`, lo que genera una animacion fluida hacia esa ubicacion.

---

## 4. Ejemplo sencillo

En el HTML se itera la senal de marcadores:

```html
@for (marker of markers(); track marker.id) {
  <div (click)="flyToMarker(marker.mapboxMarker.getLngLat())">
    <span [style]="{ backgroundColor: marker.mapboxMarker._color }"></span>
    <span class="text-xs">{{ marker.mapboxMarker.getLngLat() | json }}</span>
  </div>
} @empty {
  <p class="text-xs text-secondary">No hay marcadores</p>
}
```

Al hacer clic en un item del listado, el mapa vuela con animacion hacia ese marcador.

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `@for ... track marker.id` | Directiva de Angular para repetir un bloque por cada elemento del arreglo |
| `@empty` | Bloque que se muestra cuando el arreglo del `@for` esta vacio |
| `markers()` | Llamada a la senal con parentesis para obtener el valor actual del arreglo |
| `marker.mapboxMarker.getLngLat()` | Metodo de Mapbox para obtener las coordenadas actuales de un marcador |
| `JsonPipe` | Pipe de Angular que convierte objetos a texto legible; debe importarse en el componente |
| `[style]="{ backgroundColor: ... }"` | Forma de aplicar estilos dinamicos cuando Tailwind no puede usarse con valores variables |
| `marker.mapboxMarker._color` | Propiedad interna de Mapbox que guarda el color del marcador |
| `flyToMarker(lngLat)` | Metodo propio que llama a `map.flyTo({ center })` para desplazar el mapa con animacion |
| `mapboxgl.LngLatLike` | Tipo de Mapbox que acepta cualquier objeto compatible con longitud/latitud |

---

## 6. Resumen final en pocas palabras

Se construye un panel lateral que lista todos los marcadores creados, mostrando sus coordenadas y un indicador de color. El `@empty` mejora la experiencia cuando no hay marcadores. Hacer clic en cualquier item del listado activa el metodo `flyTo` de Mapbox, que desplaza el mapa con una animacion suave hacia ese punto, lo que crea una experiencia visualmente atractiva.
