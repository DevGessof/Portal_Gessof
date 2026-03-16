# Listado de productos

## ¿Qué se aprende?

En esta lección se construye el componente `ProductTableComponent` con una tabla daisyUI que muestra los productos del panel administrativo, incluyendo imagen, título, tallas, precio con formato de moneda, stock con indicadores visuales de color y enlace de detalle. La lección termina con una tarea: conectar la tabla a datos reales usando `rxResource` y paginación.

---

## Puntos clave

**Estructura de la página `products-admin-page`**

Se añade al HTML el encabezado de la sección:

```html
<h1 class="text-2xl font-bold">Listado de productos</h1>
<h3 class="text-lg">
  Total de productos: <span class="text-accent">{{ total }}</span>
</h3>
<div class="divider"></div>
```

**Creación del componente `ProductTableComponent`**

Se crea en `src/app/products/components/product-table/` (dentro del módulo de productos, no del panel, porque la tabla es semánticamente un componente de producto reutilizable).

```
ng g component products/components/product-table
```

**Input del componente**

Recibe el arreglo de productos como `input.required<Product[]>()`:

```typescript
products = input.required<Product[]>();
```

Al ser un input signal requerido, Angular garantizará que siempre se pase el valor.

**Tabla con daisyUI**

Se copia la tabla del enlace de daisyUI proporcionado en el material adjunto (la variante con checkboxes). El `table footer` se elimina y las filas de datos se reemplazan con la iteración dinámica.

**Cabeceras de la tabla**

```html
<th>Título</th>
<th>Precio</th>
<th>Inventario</th>
<th></th>   <!-- columna vacía para el botón de detalle -->
```

**Iteración con `@for`**

```html
@for (product of products(); track product.id) {
  <tr>...</tr>
}
```

Se usa `product.id` como `track` en lugar de `$index` para mejor rendimiento con actualizaciones.

**Imagen del producto**

```html
<img [src]="product.images | productImage" [alt]="product.title" />
```

Se reutiliza el `ProductImagePipe` creado en la Sección 18, que devuelve la URL de la primera imagen o un placeholder si no hay imágenes.

**Título con enlace de navegación**

```html
<a [routerLink]="['/admin/products', product.id]">
  {{ product.title }}
</a>
```

Forma con arreglo: `['/admin/products', product.id]` genera `/admin/products/<uuid>`.

**Tallas como subtítulo**

```html
<p>{{ product.sizes.join(', ') }}</p>
```

Muestra todas las tallas separadas por coma. Se menciona que se podría crear un pipe personalizado para esto.

**Precio con `CurrencyPipe`**

```html
{{ product.price | currency }}
```

Se importa `CurrencyPipe` de `@angular/common`. Muestra el precio formateado por defecto en USD.

**Indicador de stock con colores**

Se usa `@if / @else if / @else` para mostrar el stock con un badge de color según la cantidad:

```html
@if (product.stock <= 10) {
  <!-- Rojo: stock crítico -->
  <span class="badge badge-error">{{ product.stock }}</span>
} @else if (product.stock <= 20) {
  <!-- Amarillo: stock bajo -->
  <span class="badge badge-warning">{{ product.stock }}</span>
} @else {
  <!-- Verde: stock normal -->
  <span class="badge badge-success">{{ product.stock }}</span>
}
```

El instructor usa comentarios HTML entre los bloques `@if` para separar visualmente el código y evitar que Prettier lo comprima en una sola línea ilegible.

**Botón "Detalles" en cada fila**

```html
<a
  [routerLink]="['/admin/products', product.id]"
  class="btn btn-ghost text-accent btn-xs"
>
  Detalles
</a>
```

`btn-xs` lo hace pequeño, `text-accent` le da color, `btn-ghost` elimina el fondo.

**Uso del componente en la página**

En `products-admin-page.component.html`:

```html
<product-table [products]="[]" />
```

Por ahora se pasa un arreglo vacío. El selector se cambia a `product-table` (sin el prefijo `app-`).

**Importaciones necesarias en `ProductTableComponent`**

```typescript
imports: [ProductImagePipe, CurrencyPipe, RouterLink]
```

**Tarea para la siguiente clase**

Conectar la tabla a datos reales: usar `rxResource` con `PaginationService` para traer los productos del backend de forma paginada, igual que en `home-page` de la Sección 19. La paginación debe aparecer encima de la tabla y los datos deben venir del `ProductsService`.

---

## Ejemplo sencillo

El `ProductTableComponent` es como una hoja de cálculo visual: cada fila es un producto, con una foto en miniatura, el nombre (que es un enlace al formulario de edición), las tallas disponibles, el precio formateado, y un semáforo de stock (rojo si queda poco, amarillo si queda algo, verde si hay suficiente). Al final de cada fila hay un botón "Detalles" que lleva al mismo formulario de edición.

---

## Palabras clave y elementos importantes

- `product-table` — selector del componente tabla (sin prefijo `app-`); ubicado en `src/app/products/components/`
- `input.required<Product[]>()` — input signal requerido que recibe el arreglo de productos
- `@for (product of products(); track product.id)` — iteración reactiva sobre el arreglo de señal
- `ProductImagePipe` — pipe personalizado de la Sección 18 que devuelve la URL de imagen o un placeholder
- `product.sizes.join(', ')` — convierte el arreglo de tallas en cadena separada por coma
- `CurrencyPipe` — pipe nativo de Angular para formatear precios como moneda
- `badge-error` / `badge-warning` / `badge-success` — clases daisyUI para badges de color rojo, amarillo y verde
- `[routerLink]="['/admin/products', product.id]"` — navegación con arreglo de segmentos hacia la página de edición
- `btn-ghost text-accent btn-xs` — clases daisyUI para el botón "Detalles": sin fondo, color accent, tamaño pequeño
- Comentarios HTML entre `@if/@else if/@else` — truco para que Prettier no comprima los bloques y el código sea legible
- Tarea: conectar con `rxResource` + `PaginationService` como en `home-page`

---

## Resumen final

Esta lección construye el componente `ProductTableComponent` con una tabla daisyUI. Recibe un `input.required<Product[]>()`, itera con `@for` sobre los productos, y muestra imagen (con `ProductImagePipe`), título con `routerLink`, tallas con `join`, precio con `CurrencyPipe`, indicador de stock con badges de colores y un botón "Detalles". Se integra en `products-admin-page` con un arreglo vacío provisional. La tarea de la siguiente lección es conectar la tabla a datos reales usando `rxResource` y paginación, replicando el patrón de `home-page`.
