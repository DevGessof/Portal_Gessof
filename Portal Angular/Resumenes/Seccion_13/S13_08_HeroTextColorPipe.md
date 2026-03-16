# Lección 08 – Pipe personalizado: HeroTextColorPipe

## ¿Qué se aprende en esta lección?
Se crea `HeroTextColorPipe`, que devuelve una **clase CSS de daisyUI** según el creador del héroe (DC o Marvel), en lugar de un color CSS directo. Se refuerza el patrón de usar un mapa de colores definido fuera del pipe y se practica con el enum `Creator`.

## Puntos clave explicados
- El pipe recibe el valor de `hero.creator` (que es un enum: `Creator.DC = 0`, `Creator.Marvel = 1`).
- Devuelve una clase CSS de texto de daisyUI: por ejemplo `'text-primary'` para DC y `'text-accent'` para Marvel.
- Se define un `colorMap` dentro del `transform()` que mapea cada valor del enum a su clase CSS.
- En el template se usa `[class]="hero.creator | heroTextColor"` para aplicar la clase dinámicamente.
- **¿Por qué usar el número del enum y no `Creator.DC`?** Porque en el template no se tiene acceso directo al enum sin exponerlo como propiedad de clase; usar el valor numérico evita esa dependencia.
- El pipe se crea con el snippet `a-pipe` y se nomina `heroTextColor`.

## Ejemplo sencillo
```typescript
// pipes/hero-text-color.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { Creator } from '../interfaces/hero.interface';

@Pipe({ name: 'heroTextColor', standalone: true })
export class HeroTextColorPipe implements PipeTransform {
  transform(creator: Creator): string {
    const colorMap: Record<Creator, string> = {
      [Creator.DC]:     'text-primary',
      [Creator.Marvel]: 'text-accent',
    };
    return colorMap[creator] ?? 'text-base-content';
  }
}
```

```html
<!-- Nombre del héroe con color según creador -->
<td [class]="hero.creator | heroTextColor">
  {{ hero.name }}
</td>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `heroTextColor` / `HeroTextColorPipe` | Devuelve clase CSS según el creador del héroe |
| `Creator` (enum) | `DC = 0`, `Marvel = 1` |
| `Record<Creator, string>` | Mapa tipado de enum a clase CSS |
| `[class]="... \| pipe"` | Binding de clase completa desde el resultado del pipe |
| `text-primary` / `text-accent` | Clases de color de texto de daisyUI |

## Resumen final
`HeroTextColorPipe` ilustra cómo los pipes pueden devolver clases CSS en lugar de valores de estilo inline. Usar `[class]` con el resultado del pipe mantiene la lógica de presentación fuera del componente y permite cambiar el sistema de diseño en un solo archivo.
