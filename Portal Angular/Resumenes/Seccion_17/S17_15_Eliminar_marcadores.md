# Resumen de Lección - Sección 17, Clase 15

---

## 1. Titulo de la leccion

**Eliminar marcadores**

---

## 2. Que se aprende en esta leccion

Se aprende a eliminar un marcador tanto del mapa como del arreglo interno de la senal. La eliminacion se activa con doble clic en el item del listado. Es necesario actuar en dos lugares: el mapa de Mapbox y la senal de Angular.

---

## 3. Puntos clave explicados

- **Dos lugares donde vive el marcador:** el marcador existe en el mapa de Mapbox (visualmente) y en la senal `markers` (como dato). Hay que borrarlo en ambos sitios.
- **Metodo `deleteMarker(marker: Marker)`:** recibe la interfaz propia `Marker` (no la de Mapbox) porque necesita el `id` para filtrar la senal.
- **Verificacion previa:** antes de actuar se verifica si `this.map()` tiene valor; si no existe se hace `return` para evitar errores inesperados.
- **Eliminar del mapa:** se llama `marker.mapboxMarker.remove()`. Este metodo propio de Mapbox quita el marcador visual del mapa de forma inmediata.
- **Eliminar de la senal:** se usa `this.markers.set(this.markers().filter(m => m.id !== marker.id))` para crear un nuevo arreglo que excluye el marcador borrado y actualiza la senal.
- **`set` vs `update`:** el instructor usa `set` en este caso para variar respecto al ejemplo anterior donde se uso `update`; ambas formas son igualmente validas.
- **Evento `(dblclick)` en el HTML:** se agrega el evento de doble clic al `div` del item del listado, llamando a `deleteMarker(marker)`.
- **Resultado:** al hacer doble clic, el marcador desaparece del mapa y del listado al mismo tiempo. Si se borran todos, el `@empty` muestra el mensaje de "No hay marcadores".

---

## 4. Ejemplo sencillo

Metodo de eliminacion en TypeScript:

```typescript
deleteMarker(marker: Marker) {
  if (!this.map()) return;
  marker.mapboxMarker.remove();   // quita del mapa
  this.markers.set(
    this.markers().filter(m => m.id !== marker.id)  // quita de la senal
  );
}
```

En el HTML:

```html
<div (dblclick)="deleteMarker(marker)">
  ...contenido del item...
</div>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `(dblclick)` | Evento de Angular que escucha el doble clic del usuario en un elemento |
| `marker.mapboxMarker.remove()` | Metodo de Mapbox que elimina el marcador visual del mapa |
| `this.markers.set(...)` | Actualiza la senal con un nuevo arreglo que ya no incluye el marcador borrado |
| `.filter(m => m.id !== marker.id)` | Filtra el arreglo para excluir el marcador cuyo id coincide con el que se quiere borrar |
| Interfaz `Marker` propia | Necesaria en este metodo porque contiene el `id` que se usa para el filtro |
| Verificacion de sanidad | Patron de verificar si el mapa existe antes de operar para evitar errores no controlados |

---

## 6. Resumen final en pocas palabras

Eliminar un marcador requiere dos acciones: `mapboxMarker.remove()` lo quita del mapa, y `markers.set(filter(...))` lo quita de la senal. El evento `(dblclick)` activa esta logica desde el listado. La interfaz propia `Marker` con su `id` hace que el filtrado sea preciso y que toda la operacion sea limpia y controlada.
