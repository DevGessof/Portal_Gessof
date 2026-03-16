# Lección 05 – Título en el Navbar: Observable y Señal

## ¿Qué se aprende en esta lección?
Se implementa el título dinámico en el navbar: cambia automáticamente según la ruta activa leyendo la propiedad `title` de cada ruta. Se muestra cómo lograrlo usando RxJS (`router.events`) y luego cómo convertir ese Observable a una señal con `toSignal`. También se generan los enlaces del navbar dinámicamente.

## Puntos clave explicados
- La propiedad `title` de cada ruta está en `app.routes.ts`. Se crea una constante local `myRoutes` en el navbar a partir de `routes.map()` para tener pares `{ path, title }` con tipos más sencillos.
- Para saber la ruta activa se inyecta el servicio **`Router`** de `@angular/router`. Su propiedad `router.events` es un Observable que emite todos los eventos de navegación (muchos y "ruidosos").
- Se construye el Observable `pageTitle$` con una cadena de operadores RxJS:
  1. `tap(event => console.log(event))` — observar todos los eventos (depuración)
  2. `filter(event => event instanceof NavigationEnd)` — solo dejar pasar `NavigationEnd`
  3. `map(event => event.url)` — extraer el URL final
  4. Segundo `map(url => myRoutes.find(r => '/' + r.path === url)?.title ?? 'Mapas')` — buscar el título correspondiente
- **Los Observables solo emiten si hay una suscripción.** Para suscribirse desde el template se usa el **`AsyncPipe`** (`pageTitle$ | async`).
- Los enlaces del navbar se generan con un `@for` sobre `myRoutes`, filtrado con `.filter(r => r.path !== '**')` para excluir el comodín. Cada opción usa `[routerLink]="route.path"`.
- **Conversión a señal con `toSignal`:** se puede reemplazar el Observable y el `AsyncPipe` por `toSignal(pageTitle$)` importado de `@angular/core/rxjs-interop`. Ambas formas son equivalentes; `toSignal` es más limpia y alineada con el enfoque de señales del curso.

## Ejemplo sencillo
```typescript
// navbar.component.ts
import { Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter, map, tap }  from 'rxjs/operators';
import { toSignal }          from '@angular/core/rxjs-interop';
import { AsyncPipe }         from '@angular/common';

private router = inject(Router);

myRoutes = routes
  .filter(r => r.path !== '**')
  .map(r => ({ path: r.path, title: `${r.title ?? 'Mapas'}` }));

// Opción A: Observable + AsyncPipe
pageTitle$ = this.router.events.pipe(
  filter(e => e instanceof NavigationEnd),
  map(e => e.url),
  map(url => this.myRoutes.find(r => '/' + r.path === url)?.title ?? 'Mapas')
);

// Opción B: señal
pageTitle = toSignal(this.pageTitle$);
```

```html
<!-- Opción A -->
<span>{{ pageTitle$ | async }}</span>

<!-- Opción B -->
<span>{{ pageTitle() }}</span>

<!-- Menú dinámico -->
@for (route of myRoutes; track route.path) {
  <a [routerLink]="route.path">{{ route.title }}</a>
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `router.events` | Observable que emite todos los eventos del ciclo de navegación |
| `NavigationEnd` | Evento emitido cuando la navegación termina exitosamente |
| `filter(e => e instanceof X)` | Operador RxJS para dejar pasar solo instancias de cierta clase |
| `AsyncPipe` (`\| async`) | Se suscribe al Observable automáticamente desde el template |
| `toSignal(obs$)` | Convierte un Observable en una señal; importado de `@angular/core/rxjs-interop` |
| Propiedad `title` en ruta | Dato de configuración de Angular Router accesible desde cualquier componente |

## Resumen final
El título dinámico en el navbar se consigue escuchando `NavigationEnd` del servicio `Router` y mapeando el URL al título de la ruta correspondiente. La preferencia del curso es convertir el Observable a señal con `toSignal` para mantener consistencia con el enfoque reactivo moderno de Angular.
