# Lección 08 – OnChanges

## ¿Qué se aprende en esta lección?
Se crea el `TitleComponent` con un `input()` y se implementa `ngOnChanges` para observar cómo Angular notifica al componente hijo cada vez que el valor del input cambia desde el padre. Se estudia el objeto `SimpleChanges` y sus propiedades.

## Puntos clave explicados
- **`ngOnChanges`** solo se dispara en componentes que reciben datos desde un padre mediante `input()` o el decorador `@Input()`. Si el componente no tiene inputs, nunca se ejecuta.
- Se recomienda usar `input()` como función (la forma moderna desde Angular 17+) en lugar del decorador `@Input()`, ya que convierte automáticamente el valor en una señal.
- El método recibe un parámetro de tipo **`SimpleChanges`**: un objeto donde cada clave es el nombre del input y el valor es un `SimpleChange` con:
  - `previousValue` — valor anterior (puede ser `undefined` en el primer cambio)
  - `currentValue` — valor actual
  - `isFirstChange()` — método booleano que indica si es el primer cambio
- **Importante:** siempre verificar `isFirstChange()` antes de usar `previousValue`, ya que en el primer disparo `previousValue` es `undefined`.
- Si el componente tiene **varios inputs**, todos aparecen como claves en el mismo objeto `SimpleChanges` en cada ejecución del método. Por eso el tipo es genérico (`any`) en los valores: Angular no sabe de antemano cuántos inputs ni de qué tipo son.
- Si se intenta actualizar una señal con el **mismo valor** que ya tiene, Angular es suficientemente inteligente para no re-disparar `ngOnChanges` porque no hubo cambio real.
- Para que Angular detecte el cambio desde el padre basta con actualizar la propiedad tradicional o llamar a `signal.set()` en el componente padre; en ambos casos el hijo recibe el cambio vía `ngOnChanges`.

## Ejemplo sencillo
```typescript
// title.component.ts
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  template: `
    <small>TitleComponent</small><br>
    <h1>{{ title() }}</h1>
  `
})
export class TitleComponent implements OnChanges {
  title = input.required<string>();

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const change = changes[propName];
      console.log(`ngOnChanges - ${propName}`);
      console.log('  Anterior:', change.previousValue);
      console.log('  Actual:  ', change.currentValue);
      console.log('  ¿Primero?', change.isFirstChange());
    }
  }
}
```

```html
<!-- home-page.component.html -->
<app-title [title]="traditionalProperty" />
<!-- o con señal: -->
<app-title [title]="signalProperty()" />
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `ngOnChanges(changes: SimpleChanges)` | Hook llamado cada vez que un input del componente cambia |
| `SimpleChanges` | Objeto con una entrada por cada input que cambió |
| `SimpleChange.previousValue` | Valor antes del cambio (puede ser `undefined` en el primero) |
| `SimpleChange.currentValue` | Valor después del cambio |
| `SimpleChange.isFirstChange()` | `true` si es la primera vez que el input recibe un valor |
| `input.required<T>()` | Forma moderna de declarar un input obligatorio como señal |
| `implements OnChanges` | Interfaz que garantiza el nombre y la firma correctos del método |

## Resumen final
`ngOnChanges` es el hook ideal cuando un componente hijo necesita reaccionar a cambios en los valores que recibe desde su padre. El objeto `SimpleChanges` proporciona historial completo del cambio. Con la forma moderna `input()`, el valor también está disponible como señal, lo que permite reaccionar de forma reactiva sin necesidad de usar `ngOnChanges` en muchos casos.
