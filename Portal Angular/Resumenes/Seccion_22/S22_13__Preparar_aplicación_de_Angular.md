# Preparar aplicación de Angular

## ¿Qué se aprende?

Esta lección hace los ajustes mínimos necesarios en la aplicación Angular antes de desplegarla: añadir el CSS de Swiper desde un CDN, cambiar la estrategia de rutas a `withHashLocation` para que el enrutado funcione en cualquier hosting estático, y actualizar la variable de entorno de producción con la URL del backend desplegado en Render.

---

## Puntos clave

**Problema con el CSS de Swiper en producción**

Al hacer el `ng build` para producción, el CSS de Swiper que se importaba mediante el módulo de Node no se procesa correctamente. La solución más simple es reemplazarlo por un CDN externo añadiéndolo directamente en el `<head>` del `index.html`:

```html
<!-- src/index.html -->
<head>
  ...
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />
</head>
```

El instructor señala que lo ideal sería también eliminar la importación del CSS de Swiper que esté en el código TypeScript/SCSS, pero para este despliegue mínimo basta con añadir el CDN.

**`withHashLocation`: estrategia de rutas para hosting estático**

Los hostings estáticos (Netlify, GitHub Pages, etc.) sirven archivos HTML, CSS y JS directamente. No tienen un servidor que procese rutas de aplicación como `/store-front/products/camiseta`. Cuando el usuario recarga la página en `/store-front/products/camiseta`, el servidor busca un archivo en esa ruta y no lo encuentra, devolviendo un error 404.

La solución más sencilla es usar **hash routing**: en lugar de `/store-front/products/camiseta`, la URL se convierte en `/#/store-front/products/camiseta`. El `#` le indica al navegador que todo lo que viene después es navegación del lado del cliente; el servidor solo ve la parte antes del `#` (que es `/`, es decir `index.html`) y nunca falla.

Se activa añadiendo `withHashLocation()` en `app.config.ts`:

```typescript
// src/app/app.config.ts
providers: [
  provideRouter(appRoutes, withHashLocation()),
  ...
]
```

Consecuencia: todas las URLs de la aplicación llevan el `#`. Por ejemplo: `https://teslo-shop.netlify.app/#/store-front`. Es ligeramente menos estético que las rutas limpias, pero funciona en cualquier hosting estático sin configuración adicional del servidor.

Si se quiere enrutado sin `#`, el hosting debe configurarse para redirigir todas las rutas al `index.html`, o bien se usa Server Side Rendering (SSR), que se cubre en el curso Angular PRO.

**Actualizar la variable de entorno de producción**

El archivo `src/environments/environment.ts` (sin `.development`) es el que Angular usa al compilar con `ng build` para producción. Se actualiza la `baseUrl` con la URL del backend en Render:

```typescript
// src/environments/environment.ts
export const environment = {
  baseUrl: 'https://nest-teslo-shop-XXXX.onrender.com/api'
};
```

Importante: sin `/` al final. Esta URL es pública y no es sensible, por lo que puede ir en el código fuente.

El archivo `src/environments/environment.development.ts` sigue apuntando a `localhost:3000/api` para el desarrollo local.

**Subir los cambios a GitHub**

Con los tres cambios aplicados (CDN de Swiper en `index.html`, `withHashLocation` en `app.config.ts`, URL de producción en `environment.ts`), se hace commit y push a la rama `main`:

```bash
git add .
git commit -m "Preparar app para despliegue"
git push origin main
```

Estos cambios quedarán en el repositorio de GitHub y serán tomados por Netlify en la siguiente lección para construir y publicar la aplicación.

**Resumen de los tres cambios**

| Archivo | Cambio |
|---|---|
| `src/index.html` | Añadir `<link>` con el CSS de Swiper desde CDN |
| `src/app/app.config.ts` | Añadir `withHashLocation()` en `provideRouter` |
| `src/environments/environment.ts` | Cambiar `baseUrl` a la URL del backend en Render |

---

## Ejemplo sencillo

`withHashLocation` es como poner un letrero en la puerta principal que dice "todo el negocio está aquí dentro" (`index.html`), y luego usar un sistema de números de mesa (`#/ruta`) para que los clientes (el navegador) sepan a qué sección dirigirse una vez dentro. El portero (servidor estático) nunca tiene que buscar habitaciones específicas; solo abre la puerta principal.

---

## Palabras clave y elementos importantes

- CDN de Swiper — `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css" />` añadido en `src/index.html` para resolver el problema del CSS de Swiper en producción
- `withHashLocation()` — función importada de `@angular/router`; activa la estrategia de rutas con hash (`#`) que funciona en cualquier hosting estático sin configuración adicional del servidor
- Hash routing — URLs con `#` que indican al navegador que todo lo que sigue es navegación del cliente; el servidor solo procesa la raíz `/`
- `src/environments/environment.ts` — archivo de variables de entorno para el build de producción (sin `.development`); se actualiza `baseUrl` con la URL de Render
- `src/environments/environment.development.ts` — archivo de variables de entorno para desarrollo local; sigue apuntando a `localhost:3000/api`
- Sin `/` al final del `baseUrl` — convención importante para que las URLs construidas con template literals sean correctas
- **Server Side Rendering (SSR)** — alternativa al hash routing que permite rutas limpias; se cubre en el curso Angular PRO

---

## Resumen final

Esta lección prepara Angular para producción con tres cambios: (1) añadir el CDN de Swiper en `index.html` para resolver el CSS roto; (2) activar `withHashLocation()` en `app.config.ts` para que el enrutado funcione en un hosting estático sin configuración especial del servidor; (3) actualizar `environment.ts` con la URL del backend en Render. Tras hacer commit y push, el repositorio de GitHub estará listo para que Netlify lo tome y lo despliegue en la siguiente lección.
