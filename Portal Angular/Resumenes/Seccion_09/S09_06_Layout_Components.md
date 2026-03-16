# Seccion 9 - Leccion 06: Layout Components

---

## 1. Titulo de la leccion

**CountryLayoutComponent con router-outlet interno y rutas hijas (children)**

---

## 2. Que se aprende en esta leccion

Se crea `CountryLayoutComponent` como componente de tipo layout que envuelve las rutas hijas del modulo de paises con un `router-outlet` interno. Se aprende a definir rutas hijas con `children` en `country.routes.ts`.

---

## 3. Puntos clave explicados

- **Layout component:** Componente que actua como contenedor visual para un grupo de rutas. No es una pagina de contenido, sino un envoltorio que define la estructura comun (header, footer, fondo, etc.) para todas sus rutas hijas.
- **`router-outlet` interno:** El layout tiene su propio `router-outlet`. Las rutas hijas (`children`) se renderizan dentro de ese outlet.
- **`layouts/` carpeta:** Se crea dentro de `country/` para separar visualmente los layouts de las paginas y componentes.
- **`country.routes.ts` con layout:** El path `''` (raiz del modulo country) apunta al `CountryLayoutComponent`. Las rutas hijas (`children`) definen las paginas concretas.
- **`children: []`:** Array dentro de una ruta que define subrutas. La URL de una ruta hija se construye concatenando el path padre + el path hijo. Ejemplo: `/country/by-capital`.
- **Redireccion en `children`:** Se agrega `{ path: '**', redirectTo: 'by-capital' }` dentro de `children` para que entrar a `/country` redirija automaticamente a `/country/by-capital`.
- **Por que no usar `loadComponent` para hijos:** Si ya se cargo el modulo de paises, es probable que el usuario necesite las paginas hijas, por lo que se pueden cargar sin lazy loading dentro del modulo.

---

## 4. Ejemplo sencillo

```typescript
// country/country.routes.ts
import { CountryLayoutComponent } from './layouts/country-layout/country-layout.component';
import { ByCapitalPageComponent } from './pages/by-capital-page/by-capital-page.component';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayoutComponent,
    children: [
      { path: 'by-capital', component: ByCapitalPageComponent },
      { path: '**',         redirectTo: 'by-capital' }
    ]
  }
];

export default countryRoutes;
```

```html
<!-- country-layout.component.html -->
<section class="bg-blue-500">
  <router-outlet />
</section>
<h3>Footer del CountryLayout</h3>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Layout component | Componente envoltorio con `router-outlet` para sus rutas hijas |
| `router-outlet` interno | Renderiza las rutas hijas dentro del layout |
| `children: []` | Array de rutas hijas dentro de una ruta padre |
| URL de ruta hija | Se forma concatenando path padre + path hijo: `/country/by-capital` |
| `layouts/` carpeta | Carpeta para separar layouts de pages y components |
| Redireccion en `children` | `{ path: '**', redirectTo: 'by-capital' }` para manejar entradas directas al padre |

---

## 6. Resumen final en pocas palabras

Un layout es un componente con `router-outlet` que envuelve las paginas hijas. En `country.routes.ts` el path vacio apunta al `CountryLayoutComponent` y sus `children` definen las rutas hijas. La URL final es padre + hijo (`/country/by-capital`). Una redireccion en `children` hace que entrar a `/country` lleve automaticamente a la primera pagina hija.
