# Lección 04 – Inicio de la aplicación: FormulariosApp

## ¿Qué se aprende en esta lección?
Se crea el proyecto `06-reactive-forms-app` desde cero con Angular CLI y se establece toda la estructura de directorios, rutas, páginas y el componente de navegación lateral que se usará durante las dos secciones de formularios.

## Puntos clave explicados
- El proyecto se crea con `ng new reactive-forms-app` (sin SSR, CSS plano) y se renombra a `06-reactive-forms-app`.
- En lugar de Tailwind/daisyUI, este proyecto usa **Bootstrap** vía CDN en `index.html`.
- Estructura de carpetas dentro de `src/app`:
  - `auth/pages/` → `RegisterPageComponent`
  - `country/pages/` → `CountryPageComponent`
  - `reactive/pages/` → `BasicPageComponent`, `DynamicPageComponent`, `SwitchesPageComponent`
  - `shared/components/` → `SideMenuComponent`
  - `utils/` → archivos utilitarios de formularios
- Cada agrupador tiene su propio archivo de rutas: `auth.routes.ts`, `country.routes.ts`, `reactive.routes.ts`.
- El `SideMenuComponent` lee las rutas de `reactive.routes.ts` para construir el menú dinámicamente (`routes.map()` + `filter` para excluir el comodín `**`).
- El `app.component.html` usa la grilla de Bootstrap (`row`/`col`) para mostrar el menú lateral y el `router-outlet` en paralelo.

## Ejemplo sencillo
```bash
ng new reactive-forms-app --no-ssr
# renombrar carpeta
mv reactive-forms-app 06-reactive-forms-app
cd 06-reactive-forms-app
ng serve -o
```

```typescript
// reactive.routes.ts
export const reactiveRoutes: Routes = [
  {
    path: '',
    children: [
      { path: 'basic',    title: 'Básicos',    component: BasicPageComponent   },
      { path: 'dynamic',  title: 'Dinámicos',  component: DynamicPageComponent },
      { path: 'switches', title: 'Switches',   component: SwitchesPageComponent},
      { path: '**', redirectTo: 'basic' }
    ]
  }
];
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `ng new` | Crea el proyecto Angular desde cero |
| Bootstrap CDN | Estilos de UI inyectados en `index.html` |
| `auth/country/reactive` | Feature modules de la aplicación |
| `loadChildren` + `then` | Lazy load de rutas sin exportación por defecto |
| `export default` | Exportación por defecto para importación directa en lazy load |
| `SideMenuComponent` | Navegación lateral dinámica basada en las rutas |
| `utils/` | Carpeta para lógica reutilizable entre formularios |

## Resumen final
Esta lección es la base de todo el trabajo de formularios: se crea el proyecto, se organiza en feature modules con rutas perezosas, se configura Bootstrap y se construye el menú lateral dinámico. A partir de aquí, cada lección trabaja sobre una de las páginas ya creadas.
