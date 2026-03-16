# Lección 08 – Mapa a pantalla completa

## ¿Qué se aprende en esta lección?
Se instala **Mapbox GL JS** y se muestra el primer mapa a pantalla completa en el `FullscreenMapPageComponent`. Se aprende a referenciar el contenedor del mapa con `viewChild`, a inicializarlo en `ngAfterViewInit` y a importar el CSS de Mapbox para que el mapa se vea correctamente.

## Puntos clave explicados
- **Instalación:** `npm install --save mapbox-gl`. El paquete es considerable en tamaño porque no permite tree-shaking granular; es un bundle completo.
- **Contenedor HTML:** un `<div #map>` con referencia local `map` ocupa el espacio del mapa. El tamaño se define con estilos inline en el decorador del componente usando `styles`:
  - `width: 100vw` — todo el ancho de la pantalla
  - `height: calc(100vh - 64px)` — toda la altura menos los 64 px del navbar (evita el scroll)
- **`viewChild('map')`:** referencia de tipo `ElementRef` al `div`. Se usa `viewChild` en lugar de `querySelector` para que funcione correctamente cuando el componente se instancia múltiples veces.
- **`ngAfterViewInit` asíncrono:** el mapa se inicializa en este hook (la vista ya está en el DOM). Se añade un `await new Promise(r => setTimeout(r, 80))` para garantizar que el contenedor tenga sus dimensiones correctas antes de que Mapbox lo mida. Sin este delay el mapa puede no estirarse al tamaño completo.
- **Inicialización del mapa:**
  ```typescript
  new mapboxgl.Map({
    container: element,   // referencia al div nativo
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-74.5, 40],  // [longitud, latitud] — Mapbox invierte el orden respecto a Google Maps
    zoom: 9
  });
  ```
- **Token de acceso:** se establece con `mapboxgl.accessToken = environment.mapboxKey` antes de crear el mapa. Se importa desde `environment.ts` (no el de desarrollo).
- **CSS de Mapbox:** se importa el stylesheet de la CDN de Mapbox en `index.html` para que los controles nativos (zoom, brújula) y los tooltips se vean correctamente. Alternativa: importarlo directamente en el bundle con `import 'mapbox-gl/dist/mapbox-gl.css'`.

## Ejemplo sencillo
```typescript
// fullscreen-map-page.component.ts
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-fullscreen-map-page',
  templateUrl: './fullscreen-map-page.component.html',
  styles: [`div { width: 100vw; height: calc(100vh - 64px); }`]
})
export class FullscreenMapPageComponent implements AfterViewInit {
  divElement = viewChild<ElementRef>('map');

  async ngAfterViewInit(): Promise<void> {
    mapboxgl.accessToken = environment.mapboxKey;
    const element = this.divElement()?.nativeElement;
    if (!element) return;

    await new Promise(r => setTimeout(r, 80)); // esperar dimensiones del DOM

    new mapboxgl.Map({
      container: element,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40],
      zoom: 9,
    });
  }
}
```

```html
<!-- index.html -->
<link href="https://api.mapbox.com/mapbox-gl-js/v3.x.x/mapbox-gl.css" rel="stylesheet">
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `mapboxgl.accessToken` | Se establece globalmente antes de crear cualquier mapa |
| `mapboxgl.Map({ container })` | Crea e inicializa el mapa en el elemento HTML indicado |
| `center: [lng, lat]` | Mapbox usa [longitud, latitud] (al revés que Google Maps) |
| `viewChild<ElementRef>('ref')` | Referencia al elemento HTML del template; funciona bien con múltiples instancias |
| `ngAfterViewInit` async | El DOM ya existe; se puede usar `await` para esperar antes de inicializar |
| `calc(100vh - 64px)` | CSS para ocupar toda la altura menos el navbar |

## Resumen final
Mostrar un mapa de Mapbox en Angular requiere: contenedor HTML con tamaño definido, token de acceso desde `environment.ts`, inicialización en `ngAfterViewInit` y el CSS de Mapbox para los controles visuales. El pequeño `setTimeout` garantiza que el contenedor tenga sus dimensiones antes de que Mapbox lo renderice.
