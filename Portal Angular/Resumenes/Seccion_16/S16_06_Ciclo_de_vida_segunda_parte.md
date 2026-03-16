# Lección 06 – Ciclo de vida: Segunda Parte

## ¿Qué se aprende en esta lección?
Se completa el panorama del ciclo de vida añadiendo `ngOnDestroy`, las funciones `afterNextRender` y `afterRender` (nuevas desde Angular 17), y el `effect` con su `onCleanup`. Se observa cuándo se dispara cada uno y se entiende la diferencia entre los hooks clásicos y las nuevas funciones de ciclo de vida.

## Puntos clave explicados
- **`ngOnDestroy`:** se ejecuta justo antes de que el componente sea destruido. Es el lugar ideal para cancelar suscripciones, limpiar timers o notificar a un websocket. Se dispara al navegar a otra ruta y el componente se desmonta. Al igual que los demás hooks, se puede reforzar con `implements OnDestroy`.
- Al hacer clic repetido en la misma ruta activa, **no** se llama al constructor ni a `ngOnInit` (no se re-crea la instancia), pero sí se vuelven a disparar `ngDoCheck`, `ngAfterContentChecked` y `ngAfterViewChecked`. Esto es importante: nunca crear suscripciones dentro de `ngDoCheck` porque se acumularían.
- **`afterNextRender`** (función, no método): se declara como propiedad en el constructor. Se ejecuta **una sola vez**, después de que todos los componentes de la aplicación han sido renderizados por primera vez. Útil para operaciones DOM que deben ocurrir solo en el cliente (relevante en SSR).
- **`afterRender`** (función, no método): similar al anterior pero se ejecuta **cada vez** que algún componente de la aplicación es renderizado, no solo la primera vez.
- Ambas funciones se importan de `@angular/core` y reciben un callback.
- **`effect`:** también se declara en el constructor. Se ejecuta después del `ngOnInit`. Puede registrar una función `onCleanup` que se dispara cuando el efecto va a ser destruido (es decir, cuando el componente se destruye).
- Al navegar fuera del componente se disparan en secuencia: `ngOnDestroy` y `onCleanup` del efecto.

## Ejemplo sencillo
```typescript
import { afterNextRender, afterRender, effect, OnDestroy } from '@angular/core';

export class HomePageComponent implements OnDestroy {

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', 'Se ejecuta una vez, tras renderizar todos los componentes');
  });

  afterRenderEffect = afterRender(() => {
    log('afterRender', 'Se ejecuta cada vez que algún componente es renderizado');
  });

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos secundarios');
    onCleanup(() => {
      log('onCleanup', 'El efecto se va a destruir');
    });
  });

  ngOnDestroy(): void {
    log('ngOnDestroy', 'Componente destruido — limpiar timers, suscripciones, etc.');
  }
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `ngOnDestroy` | Hook llamado antes de destruir el componente |
| `afterNextRender(cb)` | Función; callback ejecutado **una vez** tras el primer render completo |
| `afterRender(cb)` | Función; callback ejecutado **cada vez** que hay un render completo |
| `effect(cb)` | Efecto reactivo; se ejecuta tras `ngOnInit` y se repite si sus señales cambian |
| `onCleanup(cb)` | Callback dentro del efecto que se llama al destruir el efecto/componente |
| `implements OnDestroy` | Interfaz opcional para garantizar el nombre correcto del método |
| `ngDoCheck` se re-dispara | Al hacer clic en la misma ruta sin remontar el componente |

## Resumen final
`ngOnDestroy` sigue siendo útil, pero `onCleanup` dentro de los efectos cubre muchos de los mismos casos con menos código. Las nuevas funciones `afterNextRender` y `afterRender` son especialmente relevantes en aplicaciones con Server Side Rendering. Con esta lección queda completo el mapa de hooks clásicos más las nuevas incorporaciones de Angular 17+.
