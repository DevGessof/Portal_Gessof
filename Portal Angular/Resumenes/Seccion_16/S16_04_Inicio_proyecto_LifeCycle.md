# Lección 04 – Inicio de proyecto: LifeCycle

## ¿Qué se aprende en esta lección?
Se crea desde cero el proyecto `07-lifecycle-hooks` con Angular CLI, se organiza su estructura de carpetas, se generan las páginas y el componente navbar, se configuran las rutas y se deja la aplicación lista para trabajar los lifecycle hooks en las lecciones siguientes.

## Puntos clave explicados
- El proyecto se genera con `ng new lifecycle-hooks`, seleccionando CSS y sin Server Side Rendering. La carpeta se renombra a `07-lifecycle-hooks`.
- Se usa la extensión **Angular Schematics** de VS Code con la opción **Configuration Helper** → "Copy settings from angular.json" para configurar automáticamente archivos HTML externos y deshabilitar archivos de estilos por componente. Así, al generar componentes ya no se crean archivos `.css` innecesarios.
- Se crean tres páginas con Angular Schematics: `about-page`, `home-page` y `contact-page` (opcional), todas dentro de `src/app/pages/`.
- Se crea el componente `navbar` dentro de `src/app/components/`. Sus estilos se definen **inline** usando la propiedad `styles` del decorador con backticks: `display: flex`, `gap: 1rem`, `justify-content: center`, clase `.active` con color morado y `font-weight: bold`.
- El navbar usa `RouterLink`, `RouterLinkActive` y `routerLinkActiveOptions: { exact: true }` para el enlace de Home.
- Las rutas se configuran en `app.routes.ts`:
  - `''` → `HomePageComponent`
  - `'about'` → `AboutPageComponent`
  - `'contact'` → `ContactPageComponent`
  - `'**'` → `redirectTo: ''`
- En `app.component.html` se colocan `<app-navbar>` y `<router-outlet>`.
- Cada página muestra un `<h1>` con su nombre para identificarla visualmente.

## Ejemplo sencillo
```bash
ng new lifecycle-hooks   # CSS, sin SSR
# Renombrar carpeta a 07-lifecycle-hooks
cd 07-lifecycle-hooks
ng serve -o
```

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '',        component: HomePageComponent },
  { path: 'about',   component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: '**',      redirectTo: '' },
];
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| Angular Schematics + Configuration Helper | Configura la generación de componentes desde `angular.json` |
| `skipStyle` en Angular Schematics | Evita generar archivos `.css` por componente |
| `styles` inline con backticks | Estilos CSS definidos directamente en el decorador del componente |
| `routerLinkActiveOptions: { exact: true }` | Solo activa la clase en la ruta exacta, no en sub-rutas |
| `redirectTo: ''` con `path: '**'` | Redirige cualquier ruta desconocida al home |

## Resumen final
Esta lección establece la base del proyecto de la sección: estructura de carpetas, rutas, navbar y tres páginas diferenciables. A partir de aquí todas las lecciones siguientes trabajan sobre este mismo proyecto añadiendo código de lifecycle hooks al `HomePageComponent`.
