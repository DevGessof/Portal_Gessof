# Seccion 9 - Leccion 05: Rutas y Estructura de Carpetas

---

## 1. Titulo de la leccion

**Estructura de carpetas por dominio, country.routes.ts y loadChildren con lazy loading**

---

## 2. Que se aprende en esta leccion

Se crea la estructura de carpetas del proyecto separando codigo por dominio (`country`, `shared`), se define la `HomePageComponent`, se crea `country.routes.ts` como archivo de rutas independiente del modulo de paises, y se importa de forma perezosa con `loadChildren`.

---

## 3. Puntos clave explicados

- **Estructura por dominio:** Todo el codigo relacionado a paises va en `app/country/` (components, pages, services, interfaces). El codigo reutilizable va en `app/shared/`. Las paginas de nivel global van en `app/shared/pages/`.
- **`HomePageComponent`:** Se crea en `shared/pages/` con Angular Schematics. Es el componente del path `''` (raiz).
- **`app.routes.ts`:** Solo tiene tres entradas: path vacio (HomePageComponent), path `country` (loadChildren), y path `**` (redirige a `''`).
- **`country.routes.ts`:** Archivo de rutas especifico del modulo de paises. Se exporta como `export default countryRoutes` para simplificar la importacion.
- **`loadChildren` con lazy loading:** `loadChildren: () => import('./country/country.routes')` importa el archivo de rutas de forma perezosa. Al usar `export default`, no hace falta `.then(m => m.countryRoutes)`.
- **Ventaja de separar rutas:** En proyectos de equipo, cada modulo controla sus propias rutas. Evita conflictos al modificar el mismo archivo.
- **Ruta comodin `**`:** Puede redirigir a `''` o mostrar un componente `NotFoundComponent` (pagina 404 personalizada).

---

## 4. Ejemplo sencillo

```typescript
// app/app.routes.ts
import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '',    component: HomePageComponent },
  { path: 'country', loadChildren: () => import('./country/country.routes') },
  { path: '**',  redirectTo: '' }
];
```

```typescript
// app/country/country.routes.ts
import { Routes } from '@angular/router';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

const countryRoutes: Routes = [
  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: '**', redirectTo: 'by-capital' }
];

export default countryRoutes;
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `app/country/` | Carpeta con todo el codigo del modulo de paises |
| `app/shared/` | Componentes, pages y servicios reutilizables en toda la app |
| `country.routes.ts` | Archivo de rutas del modulo de paises |
| `export default countryRoutes` | Exportacion por defecto para simplificar `loadChildren` |
| `loadChildren: () => import(...)` | Carga el archivo de rutas de forma perezosa |
| `path: '**'` | Ruta comodin; captura cualquier URL no definida |
| `redirectTo: ''` | Redirige a la ruta raiz (home) |

---

## 6. Resumen final en pocas palabras

La estructura separa el codigo por dominio (`country`, `shared`). Las rutas de paises van en `country.routes.ts` con `export default`. En `app.routes.ts` se usa `loadChildren` para importarlas de forma perezosa. Esto permite que cada modulo controle sus propias rutas sin tocar el archivo principal.
