# Página de producto por ID

## ¿Qué se aprende?

Esta lección construye la página de detalle/edición de un producto en el panel administrativo (`product-admin-page`). Se obtiene el `id` del producto desde la URL como señal reactiva, se hace la petición HTTP con `rxResource`, se muestra un spinner mientras carga, se muestra el título cuando hay datos, y se redirige automáticamente a `/admin/products` si el producto no existe.

---

## Puntos clave

**Archivos a modificar**

Se trabaja con `product-admin-page.component.ts` y su `.html`, ubicados en `src/app/admin-dashboard/pages/product-admin-page/`.

**Spinner de carga con daisyUI**

Se agrega al HTML un `div` centrado que se muestra solo mientras se carga:

```html
@if (productResource.isLoading()) {
  <div class="flex justify-center items-center h-screen">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
}
```

- `h-screen` ocupa toda la altura de la pantalla para centrar verticalmente.
- `loading-spinner` y `loading-lg` son clases de daisyUI.

**`@if` separado para el contenido del producto**

No se usa `@else` para el contenido del producto, sino un segundo `@if` independiente. Esto es deliberado porque el formulario va a ser extenso y meterlo dentro de un `@else` dificultaría la lectura. La condición usa `hasValue()`:

```html
@if (productResource.hasValue()) {
  <!-- aquí irá el formulario del producto -->
  <h1>{{ productResource.value()!.title }}</h1>
}
```

El `!` (non-null assertion) se usa porque dentro del `@if(hasValue())` ya sabemos que el valor existe.

**Señal `productId` con `toSignal`**

Se obtiene el `id` de la ruta de forma reactiva para poder detectar si cambia (por ejemplo, cuando se crea un producto nuevo y la URL pasa de `new` a un UUID):

```typescript
activatedRoute = inject(ActivatedRoute);
router         = inject(Router);

productId = toSignal(
  this.activatedRoute.params.pipe(
    map(params => params['id'])
  )
);
```

- `toSignal` convierte el Observable de `params` en una señal Angular.
- El parámetro se llama `id` (no `slug` como en la tienda).
- Se necesita `Router` para redirigir en caso de error.

**`rxResource` para cargar el producto**

```typescript
productResource = rxResource({
  request: () => ({ id: this.productId() }),
  loader: ({ request }) =>
    this.productsService.getProductById(request.id)
});
```

Cada vez que `productId()` cambia, el recurso vuelve a ejecutar el loader automáticamente.

**Nuevo método `getProductById` en `ProductsService`**

Se crea un método específico (en lugar de reutilizar `getProductByIdSlug`) para recuperar un producto por su `id`. Aunque por ahora es idéntico a `getProductByIdSlug`, se separa porque en el futuro tendrá diferente comportamiento:

```typescript
getProductById(id: string): Observable<Product> {
  // misma lógica que getProductByIdSlug pero usando el id
  // incluye el caché de productos
}
```

**Redirección automática con `effect`**

Si el backend retorna un error 404 (producto no encontrado), el usuario es redirigido automáticamente al listado de productos usando un efecto Angular:

```typescript
redirectEffect = effect(() => {
  if (this.productResource.error()) {
    this.router.navigate(['/admin/products']);
  }
});
```

- `effect` de `@angular/core` se ejecuta cada vez que cambia cualquier señal que lea en su interior.
- `productResource.error()` es la señal que contiene el error de la petición.
- Si hay error, se redirige a `/admin/products`.

**Comportamiento verificado**

- URL con UUID válido: carga correctamente y muestra el título del producto.
- URL con UUID inválido (p.ej. cambiando el último carácter por `0`): el backend responde 404, el efecto detecta el error y navega automáticamente a `/admin/products`.

---

## Ejemplo sencillo

La redirección con `effect` es como un guardia de seguridad que vigila continuamente el estado de la petición. Si en algún momento ve que hay un error (la sala que buscas no existe), te saca del pasillo automáticamente sin que tengas que hacer nada.

---

## Palabras clave y elementos importantes

- `product-admin-page` — componente de detalle/edición de un producto; ubicado en `src/app/admin-dashboard/pages/`
- `toSignal(activatedRoute.params.pipe(map(...)))` — convierte el Observable de parámetros de ruta en señal reactiva
- `params['id']` — nombre del parámetro de ruta definido en `admin-dashboard.routes.ts` como `products/:id`
- `rxResource` con `request: () => ({ id: this.productId() })` — recarga automáticamente cuando cambia el id
- `getProductById(id)` — nuevo método en `ProductsService` separado de `getProductByIdSlug`
- `productResource.isLoading()` — señal booleana del estado de carga del recurso
- `productResource.hasValue()` — señal booleana que indica si el recurso ya tiene un valor cargado
- `productResource.error()` — señal que contiene el error de la petición si la hubo
- `effect(() => { if (error()) navigate(...) })` — efecto que redirige automáticamente cuando hay un error
- `router.navigate(['/admin/products'])` — redirección programática al listado de productos
- `loading loading-spinner loading-lg` — clases daisyUI para el indicador de carga

---

## Resumen final

Esta lección construye la página de detalle de producto. Se obtiene el `id` de la URL como señal reactiva con `toSignal` + `map`. Se crea `rxResource` que llama a un nuevo método `getProductById` en `ProductsService`. El HTML usa dos `@if` independientes: uno para el spinner (`isLoading()`) y otro para el contenido (`hasValue()`). Un `effect` vigila `productResource.error()` y redirige a `/admin/products` si el producto no existe. En la siguiente lección se construirá el formulario completo del producto.
