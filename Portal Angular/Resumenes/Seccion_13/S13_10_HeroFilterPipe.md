# Lección 10 – Pipe personalizado: HeroFilterPipe

## ¿Qué se aprende en esta lección?
Se crea `HeroFilterPipe`, que filtra el arreglo de héroes según el texto ingresado en una caja de búsqueda. Se aprende a combinar dos pipes en `@for` (ordenamiento + filtrado) y a leer el valor de un `<input>` con una señal sin necesidad de formularios reactivos.

## Puntos clave explicados
- Se añade un `<input>` con clases daisyUI (`input input-bordered w-full max-w-xs`) y un `placeholder`.
- Para leer el valor del input sin usar `FormsModule` se usa `(input)` + `signal`:
  ```html
  <input (input)="search.set($event.target.value)" />
  ```
- La señal `search = signal('')` guarda el texto de búsqueda.
- `HeroFilterPipe` recibe el arreglo y el string de búsqueda; filtra por `name` usando `includes()` (case-insensitive con `toLowerCase()`).
- El pipe también puede filtrar por creador u otros campos, ya que recibe el objeto `Hero` completo.
- En el template se **encadenan dos pipes**: primero `heroSortBy`, luego `heroFilter`:
  ```html
  heroes() | heroSortBy : sortBy() | heroFilter : search()
  ```
- Al encadenar, el orden importa: se ordena primero y luego se filtra (o viceversa según la necesidad).
- Si se borra el texto, el filtro devuelve todos los héroes; la tabla y el ordenamiento siguen funcionando.

## Ejemplo sencillo
```typescript
// pipes/hero-filter.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({ name: 'heroFilter', standalone: true })
export class HeroFilterPipe implements PipeTransform {
  transform(heroes: Hero[], search: string): Hero[] {
    if (!search.trim()) return heroes;
    const term = search.toLowerCase();
    return heroes.filter(h =>
      h.name.toLowerCase().includes(term) ||
      h.color.toLowerCase().includes(term)
    );
  }
}
```

```typescript
// custom-page.component.ts
search = signal('');
```

```html
<!-- Input de búsqueda sin FormsModule -->
<input
  class="input input-bordered w-full max-w-xs"
  placeholder="Buscar héroe"
  (input)="search.set($any($event.target).value)"
/>

<!-- Pipes encadenados en @for -->
@for (hero of heroes() | heroSortBy : sortBy() | heroFilter : search(); track hero.name) {
  <tr> ... </tr>
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `heroFilter` / `HeroFilterPipe` | Filtra el arreglo de héroes por texto |
| `String.includes()` | Comprueba si la cadena contiene el término |
| `toLowerCase()` | Hace la búsqueda case-insensitive |
| `(input)` event + señal | Lee el valor del input reactivamente sin FormsModule |
| Encadenamiento de pipes | `arreglo \| pipe1 : arg1 \| pipe2 : arg2` |
| Orden de pipes | El resultado de uno es la entrada del siguiente |

## Resumen final
`HeroFilterPipe` cierra el ciclo de pipes personalizados de la sección. Al encadenarlo con `HeroSortByPipe` en `@for`, la tabla queda completamente controlada por pipes: ordenada y filtrada de forma reactiva, sin lógica adicional en el componente.
