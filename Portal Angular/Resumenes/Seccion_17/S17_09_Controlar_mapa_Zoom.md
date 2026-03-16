# Lección 09 – Controlar el mapa: Zoom

## ¿Qué se aprende en esta lección?
Se añade un control de zoom personalizado (slider de daisyUI) que permite al usuario cambiar el zoom del mapa desde la interfaz. Se aprende a sincronizar el nivel de zoom en ambas direcciones: del slider al mapa y del mapa (rueda del mouse) al slider, usando señales y un efecto de Angular.

## Puntos clave explicados
- **Señal `zoom`:** almacena el nivel de zoom actual como un número. Valor inicial: `14`.
- **Señal `map`:** almacena la instancia de `mapboxgl.Map` creada en `ngAfterViewInit`. Tipo: `mapboxgl.Map | null`. Inicialmente `null`; se actualiza con `this.map.set(mapInstance)` una vez el mapa está listo.
- **Pasar el zoom inicial al mapa:** en la configuración de `mapboxgl.Map` se pasa `zoom: this.zoom()` para que el mapa arranque en el nivel correcto.
- **Control visual (slider daisyUI):** un `<input type="range" min="1" max="19">` con `[value]="zoom()"` y `(input)="zoom.set(+zoomRef.value)"` (el `+` convierte el string a número). El HTML muestra el zoom actual pasado por `DecimalPipe` con formato `'1.0-0'` para mostrar solo la parte entera visualmente sin perder el valor decimal real.
- **`zoomEffect` (efecto):** reacciona cada vez que `zoom` cambia. Verifica que `this.map()` no sea `null` y llama `this.map().setZoom(this.zoom())`. Alternativa animada: `zoomTo()` en lugar de `setZoom()`, aunque puede provocar que el slider salte si el zoom fluctúa al animarse.
- **`mapListeners(map)` (método):** encapsula los listeners del mapa para no sobrecargar `ngAfterViewInit`. Se llama al final pasando la instancia del mapa. Contiene:
  - `map.on('zoomend', event => { this.zoom.set(event.target.getZoom()); })` — sincroniza la señal cuando el usuario cambia el zoom con el mouse o trackpad.
- La señal `map` debe haberse establecido con `.set()` **antes** de llamar a `mapListeners` para que el efecto de zoom no se dispare con `null`.

## Ejemplo sencillo
```typescript
// fullscreen-map-page.component.ts
zoom = signal<number>(14);
map  = signal<mapboxgl.Map | null>(null);

zoomEffect = effect(() => {
  if (!this.map()) return;
  this.map()!.setZoom(this.zoom());
});

async ngAfterViewInit(): Promise<void> {
  // ... token y await ...
  const mapInstance = new mapboxgl.Map({
    container: element,
    center: [-74.5, 40],
    zoom: this.zoom(),
  });
  this.mapListeners(mapInstance);
  this.map.set(mapInstance);
}

mapListeners(map: mapboxgl.Map): void {
  map.on('zoomend', event => {
    this.zoom.set(event.target.getZoom());
  });
}
```

```html
<h2 class="text-2xl font-bold text-black mb-2">
  Zoom <small class="text-gray-500 font-normal">{{ zoom() | number:'1.0-0' }}</small>
</h2>
<input #zoomRef type="range" min="1" max="19"
  [value]="zoom()"
  (input)="zoom.set(+zoomRef.value)" />
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `signal<mapboxgl.Map \| null>(null)` | Señal tipada que almacena la instancia del mapa |
| `effect()` | Reacciona automáticamente cuando `zoom` o `map` cambian |
| `map.setZoom(n)` | Establece el zoom del mapa de forma instantánea |
| `map.zoomTo(n)` | Establece el zoom con animación suave |
| `map.on('zoomend', cb)` | Listener que se dispara cuando el zoom deja de cambiar |
| `event.target.getZoom()` | Obtiene el nivel de zoom actual del mapa desde el evento |
| `DecimalPipe` con `'1.0-0'` | Muestra el número con 0 decimales sin modificar el valor real de la señal |
| `+value` | Conversión rápida de string a número en JavaScript |

## Resumen final
El control de zoom sincroniza la señal `zoom` con el mapa en dos sentidos: el slider actualiza la señal → el efecto aplica el zoom al mapa; el mouse actualiza el zoom del mapa → el listener `zoomend` actualiza la señal. El `DecimalPipe` formatea visualmente el número sin perder la precisión del valor almacenado.
