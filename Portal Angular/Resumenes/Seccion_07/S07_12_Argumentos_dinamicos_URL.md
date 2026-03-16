# Seccion 7 - Leccion 12: Argumentos Dinamicos por URL

---

## 1. Titulo de la leccion

**Crear ruta con parametro dinamico :query, GifHistoryComponent y toSignal con ActivatedRoute**

---

## 2. Que se aprende en esta leccion

Se crea el componente `GifHistoryComponent` con una ruta hija dinamica `/dashboard/history/:query`. Se aprende a leer parametros de URL usando `ActivatedRoute` y a convertirlos en senales con `toSignal` y el operador `map`.

---

## 3. Puntos clave explicados

- **Ruta con parametro dinamico `:query`:** En `app.routes.ts`, dentro de `children` del dashboard se agrega `{ path: 'history/:query', loadComponent: () => import(...) }`. El `:query` es el segmento dinamico.
- **`export default class`:** Necesario para el lazy loading con `loadComponent`.
- **Multiples segmentos dinamicos:** Se pueden poner varios en la misma ruta: `history/:query/:name/:tag`. Cada `:nombre` es un parametro independiente.
- **`[routerLink]="['/dashboard/history', key]"`:** Forma de construir rutas con parametros dinamicos en Angular. El segundo elemento del arreglo se concatena al path.
- **`ActivatedRoute`:** Servicio de Angular que da acceso a la informacion de la ruta activa, incluyendo sus parametros. Se inyecta con `inject(ActivatedRoute)`.
- **`activatedRoute.params`:** Observable que emite un objeto con todos los parametros de la ruta cada vez que cambian. Es Observable porque los parametros pueden cambiar sin cambiar de componente (al hacer clic en distintas opciones del historial).
- **`toSignal(observable)`:** Funcion de `@angular/core/rxjs-interop` que convierte cualquier Observable en una senal de Angular. La senal se actualiza automaticamente cuando el Observable emite un nuevo valor.
- **`pipe(map(params => params['query']))`:** Antes de convertir a senal, se extrae solo el parametro `query` del objeto de params usando el operador `map` de RxJS.
- **Por que Observable y no snapshot:** Si el usuario hace clic en distintas entradas del historial, el componente no se destruye ni recrea; solo cambian los parametros. El Observable detecta ese cambio; el snapshot no.

---

## 4. Ejemplo sencillo

```typescript
// app.routes.ts (dentro de children del dashboard)
{
  path: 'history/:query',
  loadComponent: () => import('./gifs/pages/gif-history/gif-history.component')
}
```

```typescript
// gif-history.component.ts
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

export default class GifHistoryComponent {
  private activatedRoute = inject(ActivatedRoute);

  query = toSignal(
    this.activatedRoute.params.pipe(
      map(params => params['query'] ?? 'No query')
    )
  );
}
```

```html
<!-- side-menu-options.component.html - historial -->
@for (key of gifService.searchHistoryKeys(); track key) {
  <a [routerLink]="['/dashboard/history', key]">
    <i class="fa-solid fa-clock-rotate-left"></i>
    {{ key }}
  </a>
}
```

```html
<!-- gif-history.component.html -->
<h3 class="text-2xl">Mostrando: {{ query() }}</h3>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `:query` en la ruta | Segmento dinamico; su valor se lee como parametro de URL |
| `ActivatedRoute` | Servicio con la informacion de la ruta activa; se inyecta |
| `activatedRoute.params` | Observable que emite los parametros de la ruta al cambiar |
| `toSignal(observable)` | Convierte un Observable en una senal; importar de `@angular/core/rxjs-interop` |
| `[routerLink]="['/ruta', valor]"` | Construye una ruta con parametro dinamico como arreglo |
| `map(params => params['query'])` | Extrae un parametro especifico del objeto de params |
| Snapshot vs Observable | Snapshot: valor unico al entrar; Observable: detecta cambios dinamicos |

---

## 6. Resumen final en pocas palabras

La ruta `history/:query` define un segmento dinamico. `ActivatedRoute.params` es un Observable que emite los parametros cada vez que cambian. `toSignal()` lo convierte en senal para usarlo directamente en el template. El `routerLink` con arreglo construye la URL dinamica al hacer clic en el historial del sidebar.
