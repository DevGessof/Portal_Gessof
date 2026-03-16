# Continuación - Sección 21

## ¿Qué se aprende?

Esta lección levanta el entorno de desarrollo (Docker, backend NestJS y frontend Angular) y crea la estructura inicial del módulo `admin-dashboard`: carpetas, archivo de rutas, layout, componentes de página y registro de rutas en `app.routes.ts`.

---

## Puntos clave

**Levantar el entorno (orden obligatorio)**

1. Abrir Docker Desktop y verificar que el contenedor esté en verde. Si no, ejecutar desde la carpeta `10-teslo-shop-backend`:
   ```bash
   docker compose up -d
   ```
2. Levantar el backend NestJS en modo desarrollo:
   ```bash
   npm run start:dev
   ```
3. Ejecutar el seed para limpiar y poblar la base de datos:
   ```
   GET localhost:3000/api/seed
   ```
4. En la carpeta del frontend `09-teslo-shop`, levantar Angular:
   ```bash
   ng serve -o
   ```

**Nota sobre el archivo `.env`**

El proyecto backend requiere renombrar `.env.template` a `.env`. Este archivo contiene la contraseña de la base de datos y el seed para firmar los JWT. Cambiar el seed invalida todos los tokens existentes.

**Estructura de carpetas del módulo `admin-dashboard`**

Dentro de `src/app/admin-dashboard/`:
```
components/         ← componentes reutilizables del panel
layouts/            ← layout principal con router-outlet
pages/              ← páginas del panel
admin-dashboard.routes.ts
```

**Archivo de rutas `admin-dashboard.routes.ts`**

```typescript
export const adminDashboardRoutes: Routes = [{}];
export default adminDashboardRoutes;
```

Estructura de rutas definida:
```typescript
{
  path: '',
  component: AdminDashboardLayoutComponent,
  children: [
    { path: 'products', component: ProductsAdminPageComponent },
    { path: 'product/:id', component: ProductAdminPageComponent },
    { path: '**', redirectTo: 'products' }
  ]
}
```

- `products` (plural) — listado de productos del panel.
- `product/:id` (singular con `:id`) — detalle/edición de un producto. A diferencia de la tienda que usa `:slug`, aquí se usa `:id`.
- Wildcard `**` redirige a `products`.

**Componentes creados**

Todos generados con Angular Schematics desde VSCode (clic derecho → "Nuevo Angular Schematics" → Component):

- `layouts/admin-dashboard-layout` — contiene el `<router-outlet>` y la barra lateral.
- `pages/products-admin-page` — listado de productos (ruta `products`).
- `pages/product-admin-page` — formulario de un producto (ruta `product/:id`).

Los nombres son intencionalmente descriptivos para distinguirlos de los componentes de la tienda.

**Registro en `app.routes.ts`**

```typescript
{
  path: 'admin',
  loadChildren: () => import('./admin-dashboard/admin-dashboard.routes')
}
```

Lazy loading: el módulo solo se carga cuando el usuario navega a `/admin`.

**Verificación**

Navegar a `/admin` en el navegador muestra el panel (aunque sin protección aún, cualquier usuario puede verlo en este punto). La protección se añade en la lección siguiente.

---

## Ejemplo sencillo

Crear el módulo administrativo es como construir una sala de control separada del resto del edificio. Tiene su propia puerta de entrada (`/admin`), su propio pasillo central (layout con `router-outlet`), y habitaciones específicas (pages: listado de productos, formulario de producto). Por ahora la puerta no tiene cerradura; eso se pone en la siguiente lección.

---

## Palabras clave y elementos importantes

- `docker compose up -d` — levanta los contenedores en segundo plano
- `npm run start:dev` — levanta el backend NestJS en modo desarrollo
- `ng serve -o` — levanta el frontend Angular y abre el navegador
- `admin-dashboard.routes.ts` — archivo de rutas del módulo administrativo
- `AdminDashboardLayoutComponent` — layout padre que contiene el `<router-outlet>` y la barra lateral
- `ProductsAdminPageComponent` — página del listado de productos del panel
- `ProductAdminPageComponent` — página de formulario de creación/edición de un producto
- `product/:id` — parámetro de ruta usando el `id` (no el `slug` como en la tienda)
- `loadChildren` — carga lazy del módulo de rutas administrativo
- `export default` — exportación por defecto del arreglo de rutas para que `loadChildren` lo use sin importación nombrada

---

## Resumen final

Esta lección levanta el entorno completo (Docker → NestJS → seed → Angular) y construye el esqueleto del módulo `admin-dashboard`: carpetas `layouts/`, `pages/`, archivo `admin-dashboard.routes.ts` con tres rutas (`products`, `product/:id`, wildcard), y registro en `app.routes.ts` con lazy loading bajo el path `/admin`. Aún no hay protección de acceso; eso se implementa en la lección siguiente.
