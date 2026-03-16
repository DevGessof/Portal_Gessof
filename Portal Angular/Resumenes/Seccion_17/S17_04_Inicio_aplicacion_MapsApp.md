# Lección 04 – Inicio de aplicación: MapsApp

## ¿Qué se aprende en esta lección?
Se crea el proyecto `08-maps-app` con Angular CLI y se instalan y configuran **Tailwind CSS** y **daisyUI**. Se genera la estructura de carpetas, las tres páginas de la aplicación, el navbar con daisyUI y el sistema de rutas.

## Puntos clave explicados
- El proyecto se genera con `ng new maps-app` (CSS, sin SSR) y se renombra a `08-maps-app`.
- **Instalación de Tailwind CSS:** se sigue la guía oficial para Angular. Se instalan `tailwindcss`, `postcss` y `autoprefixer` como dependencias de desarrollo, se inicializa con `npx tailwindcss init` y se configuran los `content` en `tailwind.config.js` para apuntar a `./src/**/*.{html,ts}`. Se añaden las directivas `@tailwind` a `src/styles.css`.
- **Instalación de daisyUI:** se instala como dependencia de desarrollo y se añade como plugin en `tailwind.config.js`. El tema elegido es `night`.
- Se usa la extensión **Angular Schematics** con el **Configuration Helper** para configurar archivos HTML externos y deshabilitar el `ChangeDetection` por defecto (compatible con Zoneless Angular y señales).
- **Estructura de carpetas:** `src/app/pages/` para las páginas y `src/app/shared/components/` para componentes reutilizables.
- Se crea el componente **navbar** en `shared/components/navbar` y se le añade el HTML de daisyUI (con botones y campana). Se importa en `app.component.html` junto con `<router-outlet>`.
- **Páginas creadas con Angular Schematics** (`skipStyle` habilitado globalmente):
  - `fullscreen-map-page` — mapa a pantalla completa
  - `markers-page` — página de marcadores
  - `houses-page` — propiedades/casas
- **Rutas configuradas en `app.routes.ts`** con la propiedad `title` en cada ruta:
  - `fullscreen` → `FullscreenMapPageComponent`, title: `'FullScreen Map'`
  - `markers` → `MarkersPageComponent`, title: `'Marcadores'`
  - `houses` → `HousesPageComponent`, title: `'Propiedades disponibles'`
  - `**` → `redirectTo: 'fullscreen'`

## Ejemplo sencillo
```bash
ng new maps-app   # CSS, sin SSR
# Renombrar a 08-maps-app
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install -D daisyui
ng serve -o
```

```typescript
// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  plugins: [require('daisyui')],
  daisyui: { themes: ['night'] },
};
```

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: 'fullscreen', component: FullscreenMapPageComponent, title: 'FullScreen Map' },
  { path: 'markers',    component: MarkersPageComponent,       title: 'Marcadores' },
  { path: 'houses',     component: HousesPageComponent,        title: 'Propiedades disponibles' },
  { path: '**',         redirectTo: 'fullscreen' },
];
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `tailwindcss init` | Genera `tailwind.config.js` y `postcss.config.js` |
| `content` en Tailwind | Define qué archivos Tailwind debe escanear para purgar clases no usadas |
| daisyUI plugin | Extiende Tailwind con componentes listos como navbar, botones, inputs |
| `title` en ruta | Propiedad de Angular Router que permite asociar un título a cada ruta |
| `skipStyle` en Schematics | Evita generar archivos `.css` al crear componentes |

## Resumen final
Esta lección establece la base técnica del proyecto: Angular + Tailwind + daisyUI + tres páginas con rutas nombradas. La propiedad `title` en las rutas se usará en la siguiente lección para mostrar el título correcto en el navbar según la página activa.
