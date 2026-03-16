# Seccion 6 - Leccion 06: Rutas Hijas

---

## 1. Titulo de la leccion

**Crear rutas hijas (children) y mostrarlas con router-outlet dentro del dashboard**

---

## 2. Que se aprende en esta leccion

Se crean los componentes `TrendingPageComponent` y `SearchPageComponent`, se anidan como rutas hijas dentro de `dashboard` usando `children`, y se agrega un `router-outlet` en el template del dashboard para renderizarlas.

---

## 3. Puntos clave explicados

- **Error de `loadComponent` con componente sin `export default`:** Si el componente no tiene `export default`, Angular no sabe que exportacion usar del modulo y lanza un error. La solucion es agregar `export default` a la clase.
- **Reiniciar `ng serve`:** Al agregar nuevas rutas con lazy load, a veces es necesario bajar y volver a subir el servidor para que los nuevos chunks sean reconocidos.
- **Rutas hijas (`children`):** Propiedad de una ruta que recibe un arreglo de rutas anidadas. Las rutas hijas se renderizan dentro del `router-outlet` del componente padre, no en el `router-outlet` del `app.component`.
- **URL de rutas hijas:** Una ruta hija `search` dentro de `dashboard` se accede como `/dashboard/search`, no como `/search`.
- **`router-outlet` en el componente padre:** Para que las rutas hijas se muestren, el template del padre debe incluir `<router-outlet />` en el area donde quiere mostrar el contenido hijo. Requiere importar `RouterOutlet` en el componente.
- **Importar `RouterOutlet`:** En standalone components, `RouterOutlet` debe estar en el array `imports` del componente que lo usa.
- **Ruta comodin dentro de `children`:** Se puede agregar `{ path: '**', redirectTo: 'trending' }` dentro del arreglo `children` para redirigir a una ruta hija por defecto.

---

## 4. Ejemplo sencillo

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component'),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page.component')
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page.component')
      },
      { path: '**', redirectTo: 'trending' }  // ruta hija por defecto
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
```

```typescript
// dashboard-page.component.ts
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent {}
```

```html
<!-- dashboard-page.component.html -->
<gifs-side-menu />
<div class="ml-[220px] flex flex-col px-4">
  <router-outlet />  <!-- aqui se renderizan las rutas hijas -->
</div>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `children: []` | Arreglo de rutas anidadas dentro de una ruta padre |
| URL de ruta hija | Formato: `/padre/hija` (ej: `/dashboard/search`) |
| `RouterOutlet` | Directiva que marca donde se renderiza el componente de la ruta activa; importar en el componente |
| `export default class` | Necesario para `loadComponent`; permite la importacion directa del componente |
| Ruta comodin en `children` | `{ path: '**', redirectTo: 'hija' }` define la ruta hija por defecto |
| Chunks de lazy load | Archivos JS separados que Angular genera por cada componente con `loadComponent` |

---

## 6. Resumen final en pocas palabras

Las rutas hijas se definen con `children` dentro de una ruta padre. Se acceden con el URL `/padre/hija`. Para renderizarlas, el template del padre necesita un `<router-outlet />` con `RouterOutlet` importado en el componente. Una ruta comodin dentro de `children` establece la hija por defecto.
