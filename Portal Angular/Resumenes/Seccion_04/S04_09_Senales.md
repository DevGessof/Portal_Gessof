# Seccion 4 - Leccion 09: Senales (Signals)

---

## 1. Titulo de la leccion

**Que son las senales y como se usan en Angular**

---

## 2. Que se aprende en esta leccion

Se introduce el concepto de senales (Signals), su origen en SolidJS y como Angular las implementa. Se muestra como crear una senal, leer su valor, actualizarlo con `set` y `update`, y se compara con las propiedades tradicionales.

---

## 3. Puntos clave explicados

- **Origen de las senales:** El concepto fue popularizado por Ryan Carniato, autor de SolidJS, como alternativa mas eficiente a los rerenders de React y a Zone.js de Angular.
- **Idea central:** Una senal es como un "laser" que apunta exactamente al lugar del DOM donde se usa ese valor. Cuando cambia, solo se actualiza ese punto, sin recalcular todo el componente.
- **Crear una senal:** Se usa la funcion `signal()` importada de `@angular/core`. Se le pasa el valor inicial.
- **Leer el valor:** Una senal es una funcion. Para obtener su valor hay que invocarla como funcion: `this.counterSignal()`.
- **`WriteableSignal`:** Tipo de la senal creada con `signal()`. Es escribible porque se puede cambiar su valor.
- **`set(valor)`:** Establece un nuevo valor directamente, ignorando el valor anterior. Util cuando el nuevo valor no depende del anterior.
- **`update(callback)`:** Actualiza el valor basandose en el valor actual. El callback recibe el valor actual y devuelve el nuevo. Recomendado cuando el nuevo valor depende del anterior.
- **Diferencia entre `set` y `update`:** `set` ignora el valor previo; `update` lo usa para calcular el nuevo. `update` es la forma correcta para incrementos y decrementos.

---

## 4. Ejemplo sencillo

```typescript
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html'
})
export class CounterPageComponent {
  // Senal con valor inicial 10
  counterSignal = signal(10);

  increaseBy(value: number): void {
    // update: usa el valor actual para calcular el nuevo
    this.counterSignal.update(current => current + value);
  }

  resetCounter(): void {
    // set: establece un valor fijo sin depender del anterior
    this.counterSignal.set(0);
  }
}
```

```html
<!-- counter-page.component.html -->
<h1>Counter: {{ counterSignal() }}</h1>
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">Reset</button>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `signal(valorInicial)` | Crea una senal con un valor inicial; importar de `@angular/core` |
| `senal()` | Invoca la senal para obtener su valor actual (sin argumentos) |
| `senal.set(valor)` | Establece un nuevo valor fijo en la senal |
| `senal.update(fn)` | Actualiza la senal usando el valor actual; recibe `(current) => nuevoValor` |
| `WriteableSignal` | Tipo de senal que se puede leer y escribir |
| SolidJS | Framework donde se origino el concepto moderno de senales |
| Actualizacion quirurgica | Las senales solo actualizan el DOM exactamente donde se usan |

---

## 6. Resumen final en pocas palabras

Las senales son la nueva forma de manejar el estado en Angular. Se crean con `signal()`, se leen invocandolas como funcion `senal()`, y se actualizan con `set()` (valor nuevo fijo) o `update()` (basado en el valor anterior). Son mas rapidas que las propiedades tradicionales porque actualizan el DOM de forma precisa y quirurgica.
