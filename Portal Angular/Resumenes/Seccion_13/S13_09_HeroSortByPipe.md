# Lección 09 – Pipe personalizado: HeroSortByPipe

## ¿Qué se aprende en esta lección?
Se crea `HeroSortByPipe`, que ordena el arreglo de héroes según un criterio pasado como argumento. Se aprende a usar pipes **dentro de `@for`** y a implementar una lógica de ordenamiento con `switch` y `Array.sort()`.

## Puntos clave explicados
- Los pipes no solo se usan en interpolación `{{ }}`; también funcionan en `@for`, `@if` y bindings.
- `HeroSortByPipe` recibe el arreglo de héroes y un `sortBy` de tipo `'name' | 'canFly' | 'color' | 'creator'`.
- Internamente usa un `switch` para elegir la función de comparación de `Array.sort()`.
- Para ordenar por cadenas (`name`, `color`) se usa `localeCompare`.
- Para ordenar por el enum `creator` (número) se usa resta directa `a.creator - b.creator`.
- La señal `sortBy` del componente se actualiza al pulsar cada botón, y el pipe recalcula automáticamente.
- Convención: el pipe se llama `heroSortBy` porque es específico del módulo de héroes.

## Ejemplo sencillo
```typescript
// pipes/hero-sort-by.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

type SortCriteria = 'name' | 'canFly' | 'color' | 'creator';

@Pipe({ name: 'heroSortBy', standalone: true })
export class HeroSortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy: SortCriteria): Hero[] {
    const copy = [...heroes]; // no mutar el arreglo original
    switch (sortBy) {
      case 'name':
        return copy.sort((a, b) => a.name.localeCompare(b.name));
      case 'canFly':
        return copy.sort((a, b) => Number(b.canFly) - Number(a.canFly));
      case 'color':
        return copy.sort((a, b) => a.color.localeCompare(b.color));
      case 'creator':
        return copy.sort((a, b) => a.creator - b.creator);
      default:
        return copy;
    }
  }
}
```

```typescript
// custom-page.component.ts
sortBy = signal<SortCriteria>('name');
```

```html
<!-- Pipe aplicado en @for -->
@for (hero of heroes() | heroSortBy : sortBy(); track hero.name) {
  <tr> ... </tr>
}

<button (click)="sortBy.set('name')">Por nombre</button>
<button (click)="sortBy.set('creator')">Por creador</button>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `heroSortBy` / `HeroSortByPipe` | Ordena un arreglo de héroes por criterio |
| `Array.sort()` | Método nativo para ordenar (modifica in-place; usar copia) |
| `localeCompare` | Comparación de cadenas respetando el locale |
| Copia con spread `[...heroes]` | Evita mutar el arreglo original de la señal |
| Pipe en `@for` | El pipe se evalúa sobre el arreglo antes de iterar |
| `sortBy` (señal) | Criterio de ordenamiento reactivo |

## Resumen final
`HeroSortByPipe` demuestra que los pipes pueden recibir arreglos completos y devolverlos transformados. Al aplicarlo en `@for`, la tabla se reordena reactivamente cada vez que cambia la señal `sortBy`, sin necesidad de lógica extra en el componente.
