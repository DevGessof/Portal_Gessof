# Configuración de rutas

## ¿Qué se aprende?

Esta lección configura el sistema de rutas del proyecto MyDashboard. Se define la ruta principal `dashboard` con `loadComponent` (lazy load), se crean las rutas hijas para cada página del dashboard, se añaden las redirecciones por defecto, y se resuelve un error común: el `router-outlet` no reconocido en un componente `standalone`. También se muestra cómo añadir un parámetro de ruta dinámico (`:id`) y cómo usar etiquetas autocerradas en Angular 17.

---

## Puntos clave

**Punto de partida: `app.routes.ts` vacío**

Al abrir el archivo `app.routes.ts` el arreglo de rutas está vacío. Se comienza añadiendo la ruta principal.

**Ruta principal con `loadComponent` (lazy load)**

La ruta del dashboard usa `loadComponent` para aplicar lazy load, es decir, el componente solo se descarga cuando el usuario navega a esa ruta por primera vez:

```typescript
{
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component'),
}
```

Para que esta sintaxis simplificada funcione (sin `.then(m => m.DashboardComponent)`), el `DashboardComponent` debe ser la exportación por defecto del archivo:

```typescript
// dashboard.component.ts
export default class DashboardComponent { ... }
```

Si no se usa `export default`, hay que usar la forma extendida:

```typescript
loadComponent: () => import('./dashboard/dashboard.component')
  .then(m => m.DashboardComponent)
```

La forma con `export default` es más limpia y es la que se prefiere.

**Redirección por defecto a `/dashboard`**

Para que al entrar a la URL raíz (sin ruta) el usuario sea redirigido automáticamente al dashboard:

```typescript
{
  path: '',
  redirectTo: '/dashboard',
  pathMatch: 'full'
}
```

- `path: ''` — coincide con la URL vacía (raíz de la aplicación).
- `redirectTo: '/dashboard'` — destino de la redirección.
- `pathMatch: 'full'` — la redirección solo ocurre si la URL completa es exactamente el string vacío, no si es un prefijo.

**Rutas hijas (`children`) del dashboard**

Las páginas del dashboard son rutas hijas de la ruta `dashboard`. Se definen en la propiedad `children`:

```typescript
{
  path: 'dashboard',
  loadComponent: () => import('./dashboard/dashboard.component'),
  children: [
    {
      path: 'change-detection',
      loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
      title: 'Change Detection'
    },
    {
      path: 'control-flow',
      loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
      title: 'Control Flow'
    },
    // ... más rutas hijas
  ]
}
```

La propiedad `title` es opcional pero recomendada: establece el título de la pestaña del navegador al navegar a esa ruta.

**Ruta con parámetro dinámico: `user/:id`**

La página de detalle de usuario recibe un identificador por la URL. Se configura con `:id`:

```typescript
{
  path: 'user/:id',
  loadComponent: () => import('./dashboard/pages/user/user.component'),
  title: 'User'
}
```

El `:id` es un parámetro de ruta dinámico. Angular lo pone a disposición del componente a través de `ActivatedRoute`.

**Ruta del listado de usuarios: `user-list`**

Aunque el componente se llama `users.component`, la ruta se llama `user-list` para distinguirla de la ruta de detalle:

```typescript
{
  path: 'user-list',
  loadComponent: () => import('./dashboard/pages/users/users.component'),
  title: 'Users'
}
```

**Redirección por defecto dentro del dashboard**

Al acceder a `/dashboard` sin especificar ninguna página hija, la aplicación redirige automáticamente a la primera página:

```typescript
// dentro de children del dashboard
{
  path: '',
  redirectTo: 'control-flow',
  pathMatch: 'full'
}
```

**Error: `router-outlet` no reconocido**

Al añadir `<router-outlet>` al template del `DashboardComponent`, Angular muestra un error porque el componente es `standalone` y no sabe de dónde viene el `router-outlet`. La solución es importar `RouterModule` en el arreglo `imports` del componente:

```typescript
@Component({
  standalone: true,
  imports: [RouterModule],
  template: `
    <p>dashboard works!</p>
    <router-outlet />
  `
})
export default class DashboardComponent { }
```

`RouterModule` provee las directivas del sistema de rutas de Angular: `router-outlet`, `routerLink`, `routerLinkActive`, etc. Sin importarlo, el componente no puede usarlas.

**Etiquetas autocerradas en Angular 17**

Angular 17 soporta etiquetas HTML autocerradas para componentes y directivas, no solo para elementos HTML nativos:

```html
<!-- Forma tradicional -->
<router-outlet></router-outlet>

<!-- Forma autocerrada (Angular 17) -->
<router-outlet />
```

Ambas formas son equivalentes. La forma autocerrada es más concisa.

**Verificación en el navegador**

Al guardar los cambios y revisar el navegador:

- La URL vacía redirige a `/dashboard`.
- `/dashboard` redirige a `/dashboard/control-flow` (por la redirección de la ruta hija vacía).
- El template del dashboard muestra "dashboard works!" y debajo "control-flow works!".
- La ruta `/dashboard/user/1` es reconocida y funciona.
- Una ruta desconocida causaría un error; se puede añadir un comodín `**` que redirija a una página de error o a la ruta por defecto.

**Material adjunto: Gist con la configuración completa**

El instructor deja en el material adjunto del curso un Gist de GitHub con la configuración completa del `app.routes.ts` para que los estudiantes no tengan que escribir toda la configuración repetitiva a mano.

---

## Ejemplo sencillo

Configurar rutas es como diseñar el mapa de un edificio: la entrada principal (`path: ''`) lleva al hall central (`redirectTo: '/dashboard'`), desde el hall se puede ir a cada sala (`children`), y cada sala tiene su propio letrero de nombre (`title`). Si alguien intenta entrar por una puerta que no existe, se le puede redirigir automáticamente al hall.

---

## Palabras clave y elementos importantes

- `loadComponent` — propiedad de una ruta que carga el componente de forma diferida (lazy load); recibe un callback con `import()`
- `export default class NombreComponent` — exportación por defecto necesaria para que `loadComponent` funcione sin `.then()`
- `path: ''` con `redirectTo` y `pathMatch: 'full'` — patrón para redireccionar la URL raíz a otra ruta
- `children` — propiedad de una ruta que define rutas hijas; las URLs hijas se construyen como `padre/hija`
- `title` — propiedad opcional de una ruta; establece el título de la pestaña del navegador
- `user/:id` — ruta con parámetro dinámico; el `:id` es accesible en el componente mediante `ActivatedRoute`
- `RouterModule` — módulo de Angular con las directivas de rutas (`router-outlet`, `routerLink`, etc.); debe importarse en los componentes `standalone` que lo usen
- `<router-outlet />` — etiqueta autocerrada (Angular 17); marca el lugar en el template donde se renderiza el componente hijo de la ruta activa
- `pathMatch: 'full'` — hace que la redirección solo ocurra cuando la URL coincide exactamente con el `path`, no solo como prefijo

---

## Resumen final

Esta lección configura todas las rutas del proyecto en `app.routes.ts`. La ruta principal `dashboard` usa `loadComponent` con `export default` para el lazy load. Las páginas se definen como rutas `children` del dashboard. Se añaden dos redirecciones: una que lleva de la URL raíz a `/dashboard`, y otra que dentro del dashboard lleva por defecto a `control-flow`. El error del `router-outlet` desconocido se resuelve importando `RouterModule` en el `DashboardComponent`. Al final, la aplicación navega correctamente entre rutas y muestra los componentes hijos dentro del layout del dashboard.
