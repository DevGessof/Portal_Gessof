# Mostrar productos paginados

## ¿Qué se aprende?

Esta lección conecta la tabla de productos del panel administrativo con datos reales usando `rxResource` y `PaginationService`, y añade un selector de cantidad de registros por página que reacciona en tiempo real.

---

## Puntos clave

**Solución de la tarea: conectar `products-admin-page` con datos reales**

La solución reutiliza exactamente el mismo patrón de `home-page` de la Sección 19. Se copian las propiedades del componente `home-page` y se pegan en `products-admin-page`:

```typescript
productsService   = inject(ProductsService);
paginationService = inject(PaginationService);

productsResource = rxResource({
  request: () => ({
    limit: this.productsPerPage(),
    offset: (this.paginationService.currentPage() - 1) * this.productsPerPage()
  }),
  loader: ({ request }) =>
    this.productsService.getProducts({ limit: request.limit, offset: request.offset })
});
```

`Ctrl + .` → "Add all missing imports" agrega automáticamente las importaciones necesarias.

**Pasar datos al componente `product-table`**

En el HTML de `products-admin-page`, se pasa el valor del recurso a la tabla:

```html
<product-table [products]="productsResource.value()?.products ?? []" />
```

El `?.` y el `?? []` garantizan que si el recurso todavía no tiene valor, se pasa un arreglo vacío.

**Añadir el componente de paginación**

La paginación se coloca encima de la tabla, dentro de un `div` con clases `flex gap-2 items-center h-20`:

```html
<div class="flex gap-2 items-center h-20">
  <app-pagination
    [pages]="productsResource.value()?.pages ?? 0"
    [currentPage]="paginationService.currentPage()"
  />
  <!-- aquí va el select -->
</div>
```

- `h-20` evita que el div cambie de altura cuando el selector aparece o desaparece.
- Al `PaginationComponent` se le retiran los márgenes verticales que tenía por defecto para que quede alineado correctamente con el `flex`.
- La importación de `PaginationComponent` se hace con `Ctrl + .` al guardar.

**Selector de registros por página**

Se añade un elemento `<select>` con cuatro opciones (10, 20, 50, 100):

```html
<select #selectPerPage
  class="select-bordered w-32"
  (change)="productsPerPage.set(+selectPerPage.value)">
  <option value="10">10</option>
  <option value="20">20</option>
  <option value="50">50</option>
  <option value="100">100</option>
</select>
```

- `#selectPerPage` es una referencia local al elemento del DOM.
- `(change)` escucha el evento de cambio del selector.
- `+selectPerPage.value` convierte el string del value a número usando el operador unario `+`.

**Señal `productsPerPage`**

```typescript
productsPerPage = signal(10);
```

- Valor inicial: 10.
- Se actualiza desde el `(change)` del selector.
- Se usa como `limit` en la `request` del `rxResource`, por lo que al cambiar reactiva automáticamente la petición HTTP.

**Mostrar el total real de productos**

El encabezado de la página usa el campo `count` que devuelve el backend:

```html
Total de productos:
<span class="text-accent">
  {{ productsResource.value()?.count }}
</span>
```

El backend retorna 52 productos con el seed por defecto.

**Corrección: ruta `product/:id` → `products/:id`**

Durante la lección se detecta que los enlaces de detalle en la tabla no navegaban correctamente. La causa era un error tipográfico en `admin-dashboard.routes.ts`: la ruta estaba definida como `product/:id` (singular) en lugar de `products/:id` (plural). Al corregirlo, los enlaces del título y el botón "Detalles" funcionan correctamente.

**Mejora visual: hover en el título de la tabla**

En `product-table`, el anchor tag del título recibe clases de hover para indicar visualmente que es un enlace:

```html
<a [routerLink]="..." class="font-bold hover:text-accent transition-colors duration-300">
  {{ product.title }}
</a>
```

**Mejora de branding en el layout**

En `admin-dashboard-layout.html` se cambia el texto genérico "Dash8" por "Teslo | Shop" y se aplica la fuente Montserrat al encabezado. El título recibe `routerLink="/"` con `cursor-pointer` para navegar a la tienda al hacer clic.

---

## Ejemplo sencillo

Agregar la paginación y el selector es como poner un control de volumen en un televisor: la señal `productsPerPage` es el dial, el `rxResource` es el televisor, y cuando giras el dial (cambias el select), el televisor reacciona automáticamente mostrando más o menos canales (productos). No hay que tocar ningún botón adicional.

---

## Palabras clave y elementos importantes

- `productsPerPage = signal(10)` — señal que almacena la cantidad de registros a mostrar por página; valor inicial 10
- `+selectPerPage.value` — conversión de string a número con el operador unario `+`
- `#selectPerPage` — referencia local al elemento `<select>` del DOM para leer su valor desde el template
- `(change)` — evento del DOM que se dispara al cambiar la opción seleccionada
- `productsResource.value()?.count` — total de productos devuelto por el backend
- `productsResource.value()?.products ?? []` — arreglo de productos con fallback a vacío
- `products/:id` — corrección tipográfica de la ruta de detalle (era `product/:id`)
- `hover:text-accent transition-colors duration-300` — clases Tailwind para transición de color al pasar el cursor
- `h-20` — altura fija del contenedor de paginación para evitar saltos visuales al mostrar/ocultar el selector

---

## Resumen final

Esta lección implementa la solución a la tarea anterior: conecta `products-admin-page` con `ProductsService` y `PaginationService` usando el mismo patrón `rxResource` de la Sección 19. La tabla se alimenta con `productsResource.value()?.products ?? []` y la paginación recibe `pages` y `currentPage`. Se añade un selector de registros por página que actualiza la señal `productsPerPage`, la cual impacta el `limit` del `rxResource` reactivamente. Se corrige además un error tipográfico en la ruta de detalle (`product` → `products`) y se mejoran el hover del título en la tabla y el branding del layout.
