# Actualizar caché

## ¿Qué se aprende?

Esta lección resuelve el problema del caché desactualizado tras una actualización de producto. Se crea el método `updateProductCache` en `ProductsService` que actualiza simultáneamente el caché de producto individual y el caché de paginaciones, y se encadena al `PATCH` usando el operador `tap`. Además se añade un enlace "Admin Panel" en el navbar de la tienda, visible solo para administradores.

---

## Puntos clave

**El problema del caché tras actualizar**

`ProductsService` mantiene dos cachés implementados con `Map`:

1. `productCache: Map<string, Product>` — almacena productos individuales por su `id`.
2. `productsCache: Map<string, ProductsResponse>` — almacena respuestas paginadas con la clave `"limit-offset-gender"`.

Cuando se actualiza un producto, estos mapas siguen teniendo la versión anterior. La solución más simple sería vaciar los mapas por completo, pero eso invalidaría entradas que todavía son válidas. La solución correcta es actualizar quirúrgicamente solo el producto modificado en ambos cachés.

**Método `updateProductCache(product: Product)`**

```typescript
private updateProductCache(product: Product): void {
  const productId = product.id;

  // 1. Actualizar el caché de producto individual
  this.productCache.set(productId, product);

  // 2. Actualizar el caché de paginaciones
  this.productsCache.forEach(productResponse => {
    productResponse.products = productResponse.products.map(currentProduct =>
      currentProduct.id === productId ? product : currentProduct
    );
  });
}
```

**Actualizar `productCache` (caché individual)**

Es directo: se llama a `.set(productId, product)` en el mapa. La llave es el `id` del producto y el valor es el producto actualizado. Esto sobreescribe la entrada anterior.

**Actualizar `productsCache` (caché de paginaciones)**

Este caché es más complejo porque su estructura es `Map<string, ProductsResponse>`, donde cada `ProductsResponse` contiene un arreglo `products`. El producto modificado puede estar en cualquiera de las entradas del mapa (dependiendo de la página y el género que se haya cargado).

La solución usa `forEach` del `Map` para recorrer todas las entradas y dentro de cada una usa `.map()` para sustituir el producto cuyo `id` coincide:

```typescript
this.productsCache.forEach(productResponse => {
  productResponse.products = productResponse.products.map(currentProduct =>
    currentProduct.id === productId ? product : currentProduct
  );
});
```

- `forEach` itera sobre todos los valores del mapa (cada `ProductsResponse`).
- `.map()` crea un nuevo arreglo donde el producto con el `id` coincidente es reemplazado por el producto actualizado; el resto permanece igual.
- No importa en qué página ni bajo qué género esté el producto — el `forEach` lo encontrará en cualquier entrada.

**Encadenar `updateProductCache` al `PATCH` con `tap`**

El método `updateProductCache` se llama dentro de un `tap` en el Observable del `PATCH`, de modo que se ejecuta automáticamente cuando la petición tiene éxito, antes de que el `subscribe` del componente reciba el valor:

```typescript
updateProduct(id: string, productLike: Partial<Product>): Observable<Product> {
  return this.http.patch<Product>(
    `${this.baseUrl}/products/${id}`,
    productLike
  ).pipe(
    tap(product => this.updateProductCache(product))
  );
}
```

- `tap` es un operador RxJS de efecto secundario: ejecuta una función con el valor emitido sin modificarlo.
- Al usar `tap` en el servicio, el componente no necesita saber nada sobre el caché — su `subscribe` recibe el producto actualizado normalmente.

**Verificación del resultado**

Tras la corrección, el flujo es:
1. Se toca "Guardar" → se hace el `PATCH`.
2. El `tap` ejecuta `updateProductCache` → ambos mapas quedan actualizados.
3. El `subscribe` del componente recibe el producto.
4. Al navegar al listado sin recargar, los datos ya están actualizados en el caché.
5. El mismo caché se comparte entre el panel administrativo y la tienda (`/`), por lo que las tarjetas de productos en la tienda también reflejan el cambio inmediatamente.

**Tarea: enlace "Admin Panel" en el navbar**

Se añade en `front-navbar` un anchor tag que navega a `/admin`:

```html
<!-- Solo visible si el usuario es administrador -->
@if (authService.isAdmin()) {
  <a routerLink="/admin" class="text-accent">Admin Panel</a>
}
```

- `authService.isAdmin()` — señal computada definida en `AuthService` (Sección 20) que devuelve `true` si el usuario tiene el rol `'admin'`.
- Se usa un comentario entre el `@if` y el bloque anterior para evitar que Prettier fusione ambos bloques de control flow.
- La clase `text-accent` da color al enlace para diferenciarlo del resto del navbar.

---

## Ejemplo sencillo

El caché de paginaciones es como un archivero con muchos cajones. Cuando se actualiza un expediente, no hace falta vaciar todo el archivero: se recorre cajón por cajón (`forEach`) y dentro de cada uno se busca el expediente por su número identificador (`id`). Si se encuentra, se reemplaza por la versión actualizada; si no, se deja como está. El `tap` es el asistente que hace este recorrido automáticamente cada vez que se sella un expediente actualizado, sin que el solicitante tenga que pedirlo.

---

## Palabras clave y elementos importantes

- `updateProductCache(product: Product)` — método privado de `ProductsService` que actualiza ambos cachés
- `productCache.set(productId, product)` — actualiza el caché individual directamente por la llave
- `productsCache.forEach(productResponse => {...})` — itera sobre todas las entradas del mapa de paginaciones
- `.map(currentProduct => currentProduct.id === productId ? product : currentProduct)` — reemplaza el producto coincidente en cada arreglo de la paginación
- `tap(product => this.updateProductCache(product))` — operador RxJS de efecto secundario que ejecuta la actualización del caché sin interrumpir el flujo del Observable
- `.pipe(tap(...))` — encadena el efecto secundario al Observable del `PATCH`
- Caché global compartido — el mismo `ProductsService` (singleton por `providedIn: 'root'`) sirve tanto al panel admin como a la tienda
- `authService.isAdmin()` — señal computada que verifica el rol de administrador para mostrar el enlace "Admin Panel"
- `text-accent` — clase Tailwind para dar color al enlace del navbar

---

## Resumen final

Esta lección resuelve el problema de datos obsoletos tras actualizar un producto. Se crea `updateProductCache(product)` que actualiza `productCache` directamente con `.set` y recorre `productsCache` con `forEach` + `.map` para sustituir el producto modificado en cualquier página cacheada. El método se encadena al Observable del `PATCH` mediante `tap`, de modo que se ejecuta automáticamente tras cada actualización exitosa sin que el componente necesite conocer el detalle. Como el servicio es singleton, el caché actualizado se refleja inmediatamente tanto en el panel admin como en la tienda. Adicionalmente se añade el enlace "Admin Panel" en el navbar, visible solo si `authService.isAdmin()` es verdadero.
