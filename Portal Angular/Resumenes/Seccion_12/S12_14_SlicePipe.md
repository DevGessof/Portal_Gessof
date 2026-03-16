# Lección 14 – SlicePipe

## ¿Qué se aprende en esta lección?
Se aprende a usar `SlicePipe` para mostrar solo una porción de un arreglo directamente en el template, sin necesidad de crear propiedades computadas en el componente. Funciona igual que el método `Array.slice()` de JavaScript.

## Puntos clave explicados
- `SlicePipe` recibe dos parámetros: `start` y `end` (opcional).
- El índice `end` es **excluyente**: `slice:0:3` devuelve los elementos en posiciones 0, 1 y 2.
- Admite **índices negativos**: `slice:-3` devuelve los últimos 3 elementos.
- Se puede aplicar dentro de `@for`, en interpolación `{{ }}` o en directivas `@if`.
- Es útil para paginación simple, previews o limitar listas largas en la vista.
- Se importa `SlicePipe` desde `@angular/common`.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { SlicePipe } from '@angular/common';

@Component({ imports: [SlicePipe] })
export class UncommonPageComponent {
  clients = signal(['Ana', 'Luis', 'María', 'Pedro', 'Carlos', 'Elena']);
}
```

```html
<!-- Mostrar solo los 3 primeros -->
@for (client of clients() | slice:0:3; track client) {
  <li>{{ client }}</li>
}
<!-- Ana, Luis, María -->

<!-- Mostrar los últimos 2 -->
@for (client of clients() | slice:-2; track client) {
  <li>{{ client }}</li>
}
<!-- Carlos, Elena -->
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `slice` / `SlicePipe` | Pipe que recorta arreglos o cadenas |
| `start` | Índice inicial (inclusivo) |
| `end` | Índice final (exclusivo, opcional) |
| Índices negativos | Cuentan desde el final del arreglo |
| `@for` | Directiva de iteración donde se aplica frecuentemente |
| `Array.slice()` | Equivalente nativo de JavaScript |

## Resumen final
`SlicePipe` replica el comportamiento de `Array.slice()` directamente en el template. Es ideal para mostrar subconjuntos de listas sin crear propiedades adicionales en el componente, y soporta índices negativos para acceder a los últimos elementos.
