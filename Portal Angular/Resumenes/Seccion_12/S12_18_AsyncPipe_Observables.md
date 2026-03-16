# Lección 18 – AsyncPipe con Observables

## ¿Qué se aprende en esta lección?
Se extiende el uso de `AsyncPipe` para trabajar con **Observables** de RxJS. Se aprende que `AsyncPipe` gestiona la suscripción y cancelación automáticamente, y se resuelve un problema común con valores falsy (como `0`) al usar `@if`.

## Puntos clave explicados
- `interval(n)` de RxJS crea un Observable que emite un número incremental cada `n` milisegundos.
- Un Observable **no emite** hasta que alguien se suscribe; `AsyncPipe` hace esa suscripción de forma automática.
- Cuando el componente se destruye, `AsyncPipe` cancela la suscripción automáticamente, evitando fugas de memoria.
- **Problema con valores falsy:** `interval` empieza en `0`, y `@if (obs | async; as value)` evalúa `0` como falso, por lo que el bloque nunca se muestra.
  - **Solución:** encadenar `pipe(map(v => v + 1))` para que el primer valor sea `1`.
- Se puede usar `tap()` para efectos secundarios (ej. `console.log`) sin alterar el flujo.
- Salir de la pantalla (navegar a otra ruta) destruye el componente y detiene las emisiones.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { AsyncPipe } from '@angular/common';
import { interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({ imports: [AsyncPipe] })
export class UncommonPageComponent {
  // Sin corrección: el primer valor 0 es falsy → @if no se muestra
  // myTimer$ = interval(2000);

  // Con corrección: map(v => v + 1) → primer valor es 1 (truthy)
  myTimer$ = interval(2000).pipe(
    tap(v => console.log('tick', v)),
    map(v => v + 1)
  );
}
```

```html
@if (myTimer$ | async; as value) {
  <p>Contador: {{ value }}</p>
} @else {
  <p>Esperando primera emisión...</p>
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `interval(ms)` | Crea un Observable que emite cada `ms` milisegundos |
| `AsyncPipe` + Observable | Suscripción y cancelación automáticas |
| `tap()` | Efecto secundario sin modificar el flujo |
| `map(v => v + 1)` | Transforma el valor para evitar el problema de `0` falsy |
| `pipe()` | Encadena operadores RxJS sobre un Observable |
| Valores falsy en `@if` | `0`, `null`, `''`, `false` hacen que el bloque no se muestre |
| Cancelación automática | Al destruirse el componente, `AsyncPipe` cancela la suscripción |

## Resumen final
`AsyncPipe` es la forma idiomática de consumir Observables en Angular: suscribe, actualiza la vista en cada emisión y cancela al destruir el componente. El único cuidado es el problema de los valores falsy (`0`), que se resuelve fácilmente con `map(v => v + 1)`.
