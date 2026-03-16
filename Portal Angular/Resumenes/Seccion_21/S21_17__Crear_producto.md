# Crear producto

## ¿Qué se aprende?

Esta lección implementa la creación de nuevos productos. Se añade un botón "Nuevo producto" en el listado que navega a `/admin/products/new`, se define una constante `emptyProduct` en el servicio para manejar ese caso especial, se crea el método `createProduct` con una petición `POST`, y se adapta `onSubmit` para distinguir entre crear y actualizar según si el `id` del producto es `'new'`.

---

## Puntos clave

**Botón "Nuevo producto" en `products-admin-page`**

Se añade en el HTML del listado, junto al selector de registros por página:

```html
<div class="flex flex-1">
  <button
    routerLink="/admin/products/new"
    class="btn btn-primary">
    Nuevo producto
  </button>
</div>
```

- `flex flex-1` hace que el `div` ocupe el espacio restante, empujando el botón hacia la derecha.
- `routerLink="/admin/products/new"` navega a la ruta de creación.
- `RouterLink` debe estar importado en el arreglo `imports` del componente standalone.

**¿Por qué `/admin/products/new`?**

La ruta `products/:id` también captura el segmento `new` como si fuera un `id`. No existe ningún producto con `id = 'new'` en el backend, por lo que normalmente el backend respondería 404 y el `redirectEffect` sacaría al usuario. La solución es interceptar ese caso antes de llegar al backend.

**Constante `emptyProduct` en `ProductsService`**

Se define fuera de la clase (o como propiedad) un objeto que representa un producto vacío:

```typescript
const emptyProduct: Product = {
  id: 'new',
  title: '',
  description: '',
  slug: '',
  price: 0,
  stock: 0,
  sizes: [],
  images: [],
  tags: [],
  gender: Gender.Men,
  user: {} as User
};
```

- `id: 'new'` — sirve de señal para saber que este es un producto nuevo y no uno existente.
- `Gender.Men` — valor por defecto del género; se importa desde las interfaces.
- `{} as User` — cast para satisfacer el tipado sin necesidad de rellenar todos los campos del usuario.
- `Ctrl + .` → "Add all missing properties" genera el esqueleto automáticamente en VSCode.

**Interceptar `id === 'new'` en `getProductById`**

Al principio del método `getProductById`, antes de revisar el caché, se añade:

```typescript
getProductById(id: string): Observable<Product> {
  if (id === 'new') {
    return of(emptyProduct);
  }
  // ... resto del método (caché + petición HTTP)
}
```

- `of(emptyProduct)` — crea un Observable que emite inmediatamente el producto vacío y completa. Se importa de `rxjs`.
- El `rxResource` en `product-admin-page` recibe el `emptyProduct` como si fuera una respuesta del backend, por lo que el formulario se muestra vacío sin errores.

**Método `createProduct` en `ProductsService`**

```typescript
createProduct(productLike: Partial<Product>): Observable<Product> {
  return this.http.post<Product>(
    `${this.baseUrl}/products`,
    productLike
  ).pipe(
    tap(product => this.updateProductCache(product))
  );
}
```

- `http.post<Product>(url, body)` — petición `POST` al endpoint `/api/products`. No lleva `id` en la URL (a diferencia del `PATCH`).
- El `tap` reutiliza `updateProductCache` para añadir el nuevo producto al `productCache`. El `productsCache` (paginaciones) no se actualiza porque el nuevo producto no existía en ninguna página cacheada; esas entradas siguen siendo válidas para los productos que ya contenían.
- El token lo añade el interceptor automáticamente.

**Adaptar `onSubmit` para crear o actualizar**

Se añade una condición que distingue entre los dos casos:

```typescript
async onSubmit(): Promise<void> {
  if (!this.productForm.valid) {
    this.productForm.markAllAsTouched();
    return;
  }

  const formValue = this.productForm.value as any;
  const productLike: Partial<Product> = {
    ...formValue,
    tags: formValue.tags?.toLowerCase().split(',').map((t: string) => t.trim()) ?? []
  };

  if (this.product().id === 'new') {
    // CREAR
    const product = await firstValueFrom(
      this.productsService.createProduct(productLike)
    );
    this.router.navigate(['/admin/products', product.id]);
  } else {
    // ACTUALIZAR
    await firstValueFrom(
      this.productsService.updateProduct(this.product().id, productLike)
    );
  }
}
```

- `this.product().id === 'new'` — comprueba si es un producto nuevo usando el `id` del `emptyProduct`.
- `firstValueFrom(observable)` — convierte el Observable en una Promesa que resuelve con el primer valor emitido. Importado de `rxjs`. Se usa para poder escribir código `async/await` en lugar de `subscribe` anidado.
- Al crear: se obtiene el producto devuelto por el backend (que ya tiene su UUID real) y se navega a `/admin/products/:id` con ese UUID. La URL cambia de `/new` al UUID definitivo.
- Al actualizar: se espera que la petición complete pero no se necesita el valor de retorno para este paso.
- El `onSubmit` se convierte en `async` para poder usar `await`.

**Nota sobre el caché al crear**

Cuando se crea un producto nuevo, `updateProductCache` lo añade a `productCache` (caché individual). Sin embargo, no aparecerá en las paginaciones cacheadas existentes hasta que se recargue la página o se invalide el caché, porque esas entradas ya estaban calculadas sin ese producto. Se menciona como limitación conocida: opciones para resolverlo serían invalidar todo el caché de paginaciones al crear o usar una librería como TanStack Query que gestiona esto automáticamente.

---

## Ejemplo sencillo

El truco de `id === 'new'` es como reservar la mesa número 0 en un restaurante para los clientes que aún no tienen mesa asignada. Cuando el sistema ve el número 0, sabe que todavía no es un cliente real y le presenta el formulario de registro vacío. En cuanto la reserva se confirma, el sistema le asigna un número real y lo lleva directamente a su mesa (navegación al UUID del nuevo producto).

---

## Palabras clave y elementos importantes

- `routerLink="/admin/products/new"` — navega a la ruta de creación de producto
- `emptyProduct: Product` — constante con todos los campos vacíos e `id: 'new'` como señal de nuevo producto
- `of(emptyProduct)` — crea un Observable que emite el producto vacío; importado de `rxjs`
- `id === 'new'` — condición que distingue entre crear y actualizar tanto en el servicio como en el componente
- `createProduct(productLike)` — nuevo método en `ProductsService` que hace `http.post` a `/api/products`
- `http.post<Product>(url, body)` — petición POST; el `id` no va en la URL, solo el cuerpo
- `firstValueFrom(observable)` — convierte un Observable en Promesa; importado de `rxjs`; permite usar `async/await`
- `async onSubmit(): Promise<void>` — el método se convierte en asíncrono para usar `await`
- `router.navigate(['/admin/products', product.id])` — navega al UUID real del producto recién creado
- `Gender.Men` — valor por defecto de género en `emptyProduct`; importado desde las interfaces

---

## Resumen final

Esta lección implementa la creación de productos. Se añade el botón "Nuevo producto" con `routerLink="/admin/products/new"`. Se define `emptyProduct` con `id: 'new'` y se intercepta en `getProductById` para devolver `of(emptyProduct)` sin llamar al backend. Se crea `createProduct` con `http.post` + `tap(updateProductCache)`. `onSubmit` se convierte en `async` y usa `firstValueFrom` para manejar ambos flujos con `await`: si `product().id === 'new'` llama a `createProduct` y navega al UUID real; si no, llama a `updateProduct`. El nuevo producto aparece en `productCache` inmediatamente pero no en las paginaciones hasta recargar.
