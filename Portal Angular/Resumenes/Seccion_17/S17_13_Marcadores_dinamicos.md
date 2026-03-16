# Resumen de Lección - Sección 17, Clase 13

---

## 1. Titulo de la leccion

**Marcadores dinamicos**

---

## 2. Que se aprende en esta leccion

Se aprende a agregar marcadores al mapa de forma dinamica: cada vez que el usuario hace clic en cualquier punto del mapa, aparece un nuevo marcador en ese lugar con un color aleatorio. Ademas, se organiza la logica en un metodo separado, se instala el paquete `uuid` para generar IDs unicos, y se crea una interfaz propia para almacenar los marcadores en una senal.

---

## 3. Puntos clave explicados

- **Listener de clic en el mapa:** se usa `map.on('click', event => ...)` para detectar cuando el usuario hace clic y obtener las coordenadas del punto.
- **Metodo separado `mapClick`:** en lugar de escribir toda la logica dentro del listener, se extrae en un metodo propio. Esto mantiene el codigo limpio y evita problemas con el contexto `this`.
- **Tipo del evento:** el evento de clic es de tipo `mapboxgl.MapMouseEvent`; desde el se accede a `event.lngLat` para obtener la longitud y latitud.
- **Creacion del marcador:** se usa `new mapboxgl.Marker({ color })` con `.setLngLat(coords).addTo(map)` igual que en la clase anterior.
- **Funcion de color aleatorio:** el instructor provee en el material adjunto una funcion lista para generar colores hexadecimales aleatorios; se pega en el componente y se usa al crear cada marcador.
- **Interfaz `Marker` propia:** se define una interfaz con `id` (string) y `mapboxMarker` (mapboxgl.Marker) para tener mas control sobre cada marcador que el que ofrece Mapbox por si solo.
- **Senal de marcadores:** se crea `markers = signal<Marker[]>([])`. Al hacer clic se agrega el nuevo marcador al inicio del arreglo usando `update` con spread, por lo que el listado siempre muestra el mas reciente primero.
- **Paquete `uuid`:** se instala con `npm install uuid` y se importa el `v4` renombrado como `UUIDv4` para asignar IDs unicos automaticamente a cada marcador.

---

## 4. Ejemplo sencillo

Al hacer clic en cualquier punto del mapa:

```typescript
mapClick(event: mapboxgl.MapMouseEvent) {
  const coords = event.lngLat;
  const mapboxMarker = new mapboxgl.Marker({ color: getRandomColor() })
    .setLngLat(coords)
    .addTo(map);

  const newMarker: Marker = {
    id: UUIDv4(),
    mapboxMarker
  };

  this.markers.update(prev => [newMarker, ...prev]);
}
```

Cada clic genera un marcador de color diferente y lo guarda en la senal.

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `map.on('click', event => ...)` | Listener que se dispara cuando el usuario hace clic en el mapa |
| `event.lngLat` | Propiedad del evento que contiene las coordenadas del punto donde se hizo clic |
| `mapboxgl.MapMouseEvent` | Tipo de dato del evento de clic en Mapbox |
| `mapClick(event)` | Metodo propio del componente que maneja la logica del clic |
| Interfaz `Marker` | Interfaz personalizada con `id` y `mapboxMarker` para mayor control |
| `signal<Marker[]>([])` | Senal que almacena el arreglo de marcadores y actualiza la vista automaticamente |
| `markers.update(prev => ...)` | Actualiza la senal anadiendo el nuevo marcador al inicio del arreglo |
| `uuid` / `UUIDv4()` | Paquete para generar identificadores unicos; se instala con `npm install uuid` |
| Funcion de color aleatorio | Funcion auxiliar provista en el material del curso para generar colores hex aleatorios |

---

## 6. Resumen final en pocas palabras

Se implementa la logica de marcadores dinamicos: un listener de clic llama a un metodo que crea un marcador en la posicion elegida, con color aleatorio e ID unico generado con `uuid`. Los marcadores se almacenan en una senal tipada con una interfaz propia, lo que permite controlarlos facilmente en el siguiente paso: mostrarlos en un listado en pantalla.
