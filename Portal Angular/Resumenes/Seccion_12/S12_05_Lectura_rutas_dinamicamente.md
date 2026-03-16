# Lección 05 – Lectura de rutas dinámicamente

## ¿Qué se aprende en esta lección?
Se construye un componente **navbar** que genera sus enlaces de navegación de forma dinámica leyendo el arreglo `routes` exportado desde `app.routes.ts`, en lugar de escribir cada enlace a mano en el HTML.

## Puntos clave explicados
- Se importa el arreglo `routes` directamente en el componente navbar.
- Con `.map()` se extrae solo la información necesaria: `{ title, path }`.
- El resultado se guarda en una propiedad de clase normal (no señal), ya que las rutas no cambian en tiempo de ejecución.
- En el template se usa `@for` para iterar sobre los elementos y renderizar un `<a>` por cada ruta.
- `RouterLink` enlaza cada ítem con su ruta, y `RouterLinkActive` aplica una clase CSS cuando la ruta está activa.
- Se usan clases de daisyUI (`menu`, `menu-horizontal`, `navbar`, etc.) para el estilo.

## Ejemplo sencillo
```typescript
// navbar.component.ts
import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({ /* ... */ imports: [RouterLink, RouterLinkActive] })
export class NavbarComponent {
  // Propiedad plana (no signal) porque las rutas son estáticas
  menuItems = routes
    .filter(r => r.title)           // excluir ruta comodín
    .map(r => ({ title: r.title, path: r.path }));
}
```

```html
<!-- navbar.component.html -->
<ul class="menu menu-horizontal">
  @for (item of menuItems; track item.path) {
    <li>
      <a [routerLink]="item.path" routerLinkActive="active">
        {{ item.title }}
      </a>
    </li>
  }
</ul>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `routes` (importado) | Arreglo de rutas de la aplicación |
| `.map()` | Extrae `title` y `path` de cada ruta |
| `@for` | Directiva de control de flujo para iterar |
| `RouterLink` | Directiva para navegación declarativa |
| `RouterLinkActive` | Aplica clase CSS a la ruta activa |
| Propiedad plana (no signal) | Adecuada para datos que no cambian |

## Resumen final
El navbar se construye de forma dinámica mapeando el propio arreglo de rutas. Esto evita duplicar información y garantiza que cualquier ruta nueva añadida a `app.routes.ts` aparezca automáticamente en la navegación.
