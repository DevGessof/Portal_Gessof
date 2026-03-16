# Lección 11 – Content Projection

## ¿Qué se aprende en esta lección?
Se introduce el concepto de **Content Projection** en Angular: cómo un componente hijo puede recibir y renderizar HTML arbitrario que le pasa el componente padre, usando la etiqueta `<ng-content>`.

## Puntos clave explicados
- `<ng-content>` es el "hueco" en el template del componente hijo donde se insertará el contenido proyectado desde el padre.
- El componente hijo define un `@Input` con `input.required<string>()` para el título de la tarjeta.
- El padre usa el componente hijo con etiquetas de apertura y cierre, y coloca el HTML a proyectar entre ellas.
- El contenido proyectado puede ser cualquier HTML: párrafos, imágenes, otros componentes, etc.
- Se usa un grid responsivo de Tailwind (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`) para mostrar varias tarjetas.
- Las clases de daisyUI (`card`, `card-body`, `card-title`) estilizan el componente.

## Ejemplo sencillo
```typescript
// card.component.ts
import { input } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div class="card bg-base-100 shadow">
      <div class="card-body">
        <h2 class="card-title">{{ title() }}</h2>
        <ng-content />   <!-- aquí se proyecta el contenido del padre -->
      </div>
    </div>
  `
})
export class CardComponent {
  title = input.required<string>();
}
```

```html
<!-- uncommon-page.component.html -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4">

  <app-card title="I18nSelect Pipe">
    <p>Contenido personalizado para esta tarjeta.</p>
  </app-card>

  <app-card title="Slice Pipe">
    <ul>
      <li>Elemento 1</li>
      <li>Elemento 2</li>
    </ul>
  </app-card>

</div>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `<ng-content>` | Punto de inserción del contenido proyectado |
| `input.required<T>()` | Input obligatorio con tipado fuerte (API de señales) |
| Content Projection | Patrón para componer UI desde el componente padre |
| `card` / `card-body` / `card-title` | Clases de daisyUI para tarjetas |
| Grid responsivo Tailwind | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` |

## Resumen final
Content Projection permite que un componente hijo muestre HTML decidido por el padre gracias a `<ng-content>`. Es la base para construir componentes contenedor reutilizables como tarjetas, modales o paneles, sin acoplar el hijo a un contenido específico.
