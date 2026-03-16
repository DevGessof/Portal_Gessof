# Resumen de Lección - Sección 17, Clase 17

---

## 1. Titulo de la leccion

**Solucion de la tarea - MiniMap**

---

## 2. Que se aprende en esta leccion

Se resuelve la tarea de implementar el mapa dentro del componente `MiniMapComponent`. Se parametriza con `input()` para recibir coordenadas y zoom desde el componente padre. Ademas se desactiva la interactividad del mapa para que funcione como imagen estatica, y se aplica `overflow-hidden` para bordes redondeados.

---

## 3. Puntos clave explicados

- **Estructura del componente:** se copia la referencia al elemento HTML (`#map`) del `FullscreenMapComponent` y se repiten los mismos pasos: importar `mapboxgl`, configurar el API key, implementar `AfterViewInit` con `await` y crear el mapa.
- **Sin listeners:** este mini mapa no necesita detectar eventos del usuario, por lo que el metodo `mapListeners` simplemente se omite.
- **Coordenadas fijas iniciales:** se toman las coordenadas de las casas del arreglo de propiedades para que cada mapa apunte a un lugar diferente.
- **Marcador central:** se crea un `new mapboxgl.Marker().setLngLat(coords).addTo(map)` para marcar el punto de interes en cada mini mapa.
- **Estilos del componente:** se usan `styles` con CSS directo (`width: 100%; height: 260px`) para que el contenedor tenga las dimensiones correctas.
- **Propiedad `interactive: false`:** se pasa al constructor del mapa para que el usuario no pueda mover ni interactuar con el mapa. Queda como imagen estatica.
- **Input `lngLat` requerido:** se declara `lngLat = input.required<{ lng: number; lat: number }>()` para recibir las coordenadas del componente padre. Desde `HousesPage` se pasa con `[lngLat]="house.lngLat"`.
- **Input `zoom` opcional:** se declara `zoom = input<number>(14)` con valor por defecto de `14`. Desde el padre se puede pasar un numero diferente con `[zoom]="15"`.
- **Separacion de responsabilidades:** el instructor explica que mandar el objeto completo `HouseProperty` al `MiniMapComponent` no es correcto porque acopla el componente a un tipo especifico. Lo ideal es pasar solo lo que necesita: `lngLat` y `zoom`.
- **`overflow-hidden` + `rounded-t-md`:** se aplican al contenedor de la tarjeta para que el mapa respete los bordes redondeados superiores.
- **Propiedad `pitch`:** como bonus se menciona que se puede pasar `pitch: 30` al constructor del mapa para darle un efecto 3D inclinado.

---

## 4. Ejemplo sencillo

En `MiniMapComponent` (TypeScript):

```typescript
lngLat = input.required<{ lng: number; lat: number }>();
zoom = input<number>(14);

async ngAfterViewInit() {
  await new Promise(r => setTimeout(r, 80));
  const map = new mapboxgl.Map({
    container: this.mapDiv.nativeElement,
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [this.lngLat().lng, this.lngLat().lat],
    zoom: this.zoom(),
    interactive: false,
  });
  new mapboxgl.Marker().setLngLat([this.lngLat().lng, this.lngLat().lat]).addTo(map);
}
```

Desde `HousesPage` (HTML):

```html
<app-mini-map [lngLat]="house.lngLat" [zoom]="15" />
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `input.required<T>()` | Declara una propiedad de entrada obligatoria en un componente Angular moderno |
| `input<T>(defaultValue)` | Declara una propiedad de entrada opcional con valor por defecto |
| `interactive: false` | Opcion del constructor de Mapbox que deshabilita toda interaccion del usuario con el mapa |
| `pitch` | Propiedad del constructor de Mapbox para inclinar el mapa y darle efecto 3D (valor en grados) |
| `styles: [...]` en el decorador | Permite agregar CSS directamente en el componente Angular para dimensionar el contenedor |
| `overflow-hidden` | Clase de Tailwind que oculta el contenido que se desborda del contenedor; necesaria para respetar bordes redondeados |
| `rounded-t-md` | Clase de Tailwind para redondear solo la parte superior de un elemento |
| `this.lngLat()` | Llamada a la senal de input con parentesis para obtener el valor actual |

---

## 6. Resumen final en pocas palabras

El `MiniMapComponent` se convierte en un componente reutilizable que acepta `lngLat` (requerido) y `zoom` (opcional) como inputs. Se desactiva la interactividad para que funcione como una imagen de mapa estatica. La correcta separacion de responsabilidades — pasar solo los datos necesarios y no el objeto completo — hace que el componente sirva para casas, edificios, parques o cualquier entidad que tenga coordenadas.
