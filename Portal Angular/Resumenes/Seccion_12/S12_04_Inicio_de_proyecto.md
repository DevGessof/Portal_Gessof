# Lección 04 – Inicio de proyecto

## ¿Qué se aprende en esta lección?
Se crea desde cero la aplicación `pipes-app` con Angular CLI, se instala y configura **Tailwind CSS** con el tema **dracula** de daisyUI, y se define la estructura de carpetas y rutas que se usará durante toda la sección.

## Puntos clave explicados
- Nombre del proyecto: `05-pipes-app`.
- Se instala **Tailwind CSS** y **daisyUI** como dependencias de estilos.
- El tema `dracula` se activa en `tailwind.config.js` dentro del arreglo `daisyui.themes`.
- Estructura de carpetas dentro de `src/app/`:
  - `pages/` — componentes de cada página
  - `interfaces/` — tipos e interfaces TypeScript
  - `components/` — componentes reutilizables (ej. navbar)
- Páginas creadas: `basic-page`, `custom-page`, `numbers-page`, `uncommon-page`.
- Las rutas se definen con `loadComponent` (carga perezosa) y la propiedad `title` para el título de la pestaña.
- `app.component.html` contiene el `<app-navbar>` y el `<router-outlet>`.

## Ejemplo sencillo
```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'basic',
    title: 'Basic Page',
    loadComponent: () => import('./pages/basic-page/basic-page.component')
      .then(m => m.BasicPageComponent),
  },
  // ... demás páginas
  { path: '**', redirectTo: 'basic' }
];
```

```html
<!-- app.component.html -->
<app-navbar />
<router-outlet />
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `ng new 05-pipes-app` | Comando para crear el proyecto |
| Tailwind CSS + daisyUI | Framework de estilos utilitarios y componentes |
| Tema `dracula` | Tema oscuro activado en daisyUI |
| `loadComponent` | Carga perezosa de componentes en rutas |
| `title` (en ruta) | Título que aparece en la pestaña del navegador |
| `<router-outlet>` | Punto de montaje de las vistas enrutadas |
| `pages/` / `interfaces/` / `components/` | Estructura modular del proyecto |

## Resumen final
Se inicializa el proyecto con una estructura limpia y modular. Tailwind + daisyUI proveen los estilos, y las rutas con `loadComponent` aseguran carga perezosa desde el principio. Esta base se mantiene durante toda la sección.
