# Lección 05: Páginas y Rutas

## ¿Qué se aprende en esta lección?

En esta lección se crean los componentes de las páginas principales de la tienda y se configura el sistema de rutas de la aplicación. También se aprende a usar **layouts** para compartir una estructura visual común entre varias páginas.

---

## Puntos clave explicados

- **Creación de componentes con Angular Schematics:** Se usa la extensión de VS Code para generar componentes de forma rápida y con la configuración correcta (`skipStyle`, archivos externos desactivados).

- **Componente Layout (`store-front-layout`):** Es el componente "padre" que define la estructura visual de toda la tienda (navbar + contenido). Las demás páginas se muestran dentro de este layout como rutas hijas.

- **Páginas creadas:**
  - `home-page` — Página principal de la tienda.
  - `gender-page` — Muestra productos filtrados por categoría (hombres, mujeres, niños, etc.).
  - `product-page` — Muestra el detalle de un producto individual.
  - `not-found-page` — Página 404 para rutas no reconocidas.

- **Archivo de rutas del store-front (`store-front.routes.ts`):** Se crea un archivo separado para las rutas de esta sección. Contiene las rutas hijas del layout.

- **`loadChildren` (lazy loading):** Las rutas del store-front se cargan de manera "perezosa" desde el `app.routes.ts`, lo que significa que el código solo se descarga cuando el usuario llega a esa sección.

- **Rutas dinámicas:** Se usa el parámetro `:gender` en la ruta `gender/:gender` para reutilizar el mismo componente con distintos valores. También se usa `:idSlug` para la ruta `product/:idSlug`.

- **Slug:** Es un identificador legible y amigable para la URL (ej: `camiseta-roja` en lugar de un número). Es útil para el SEO.

- **Componente `front-navbar`:** Se crea el navbar específico de la tienda y se agrega al layout. Cada sección tendrá su propio navbar.

---

## Ejemplo sencillo

Estructura de rutas hijas definidas en `store-front.routes.ts`:

```
/ → HomePageComponent
/gender/men → GenderPageComponent
/gender/women → GenderPageComponent
/product/camiseta-roja → ProductPageComponent
/** → NotFoundPageComponent (cualquier ruta no reconocida)
```

---

## Funciones, palabras clave o elementos importantes

| Término | Descripción |
|--------|-------------|
| **Layout** | Componente que define la estructura visual compartida (navbar + área de contenido) para un grupo de páginas. |
| **Rutas hijas (children)** | Rutas que se renderizan dentro de un componente padre que tiene un `router-outlet`. |
| **`loadChildren`** | Carga las rutas de forma perezosa; el código solo se descarga cuando el usuario lo necesita. |
| **Rutas dinámicas** | Rutas con parámetros variables como `/gender/:gender` o `/product/:idSlug`. |
| **Slug** | Identificador de texto amigable para URL, útil para SEO. |
| **`router-outlet`** | Etiqueta que indica dónde se renderiza el contenido de la ruta activa. |
| **`**` (wildcard)** | Ruta comodín que atrapa cualquier URL no definida y redirige al componente 404. |

---

## Resumen final en pocas palabras

Esta lección establece la navegación de la tienda creando las páginas principales y configurando las rutas con lazy loading. Se introduce el concepto de layout para centralizar la apariencia visual de la tienda y se crean rutas dinámicas reutilizables.
