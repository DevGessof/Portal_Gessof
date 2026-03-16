# Actualizar producto

## ¿Qué se aprende?

Esta lección implementa la petición HTTP `PATCH` en `ProductsService` para actualizar un producto en el backend, y conecta esa petición con el `subscribe` correspondiente en `ProductDetailsComponent`. También se explica el comportamiento del endpoint y se detecta el problema del caché desactualizado que se resolverá en la siguiente lección.

---

## Puntos clave

**Revisión del endpoint en la documentación del backend**

Antes de escribir código, se revisa la documentación del backend en `localhost:3000/api`. El backend expone varios endpoints para productos:

- `GET /api/products` — listar productos
- `POST /api/products` — crear un producto (requiere token)
- `PATCH /api/products/:id` — actualizar un producto parcialmente (requiere token)
- `DELETE /api/products/:id` — eliminar un producto (requiere token)

Para actualizar se usa `PATCH` porque solo se envían los campos que cambian. El endpoint requiere el `id` del producto en la URL y el objeto con los cambios en el cuerpo de la petición.

**Comportamiento del endpoint `PATCH`**

Se demuestra con Postman:
- Si se manda un objeto vacío `{}`: el backend responde con éxito pero sin cambios.
- Si se manda un campo válido (p. ej. `{ "slug": "nuevo_slug" }`): solo ese campo se actualiza.
- Si se manda un campo que no existe en el modelo (p. ej. `{ "algo": 123 }`): el backend rechaza toda la petición con un error de validación. Este backend valida estrictamente las propiedades recibidas.

**Implementación de `updateProduct` en `ProductsService`**

```typescript
updateProduct(id: string, productLike: Partial<Product>): Observable<Product> {
  return this.http.patch<Product>(
    `${this.baseUrl}/products/${id}`,
    productLike
  );
}
```

- `this.http.patch<Product>(url, body)` — realiza la petición PATCH. El primer argumento es la URL con el `id` interpolado; el segundo es el cuerpo de la petición.
- El tipo genérico `<Product>` indica que la respuesta del backend se tipará como `Product`.
- Se retorna el Observable directamente; no se suscribe en el servicio. La suscripción se hace en el componente.
- El token de autenticación lo añade automáticamente el interceptor creado en la Sección 20, por lo que no es necesario configurarlo aquí.

**Suscripción en `ProductDetailsComponent`**

Como los Observables son "lazy" (no se ejecutan hasta que alguien se suscribe), en `onSubmit` se encadena el `.subscribe`:

```typescript
this.productsService
  .updateProduct(this.product().id, productLike)
  .subscribe(product => {
    console.log('Producto actualizado!!', product);
  });
```

- La función callback del `subscribe` recibe el producto actualizado devuelto por el backend.
- Al guardar y tocar "Guardar" en el navegador, la consola muestra el mensaje confirmando que la petición llegó al backend y se procesó correctamente.

**El problema del caché desactualizado**

Después de actualizar un producto, al volver al listado la tabla sigue mostrando los datos anteriores. Si se recarga el navegador, los datos se actualizan correctamente. La causa es la estrategia de caché implementada en la Sección 19: los productos están almacenados en un `Map` en `ProductsService` y no se invalidan al actualizar. Esto se resolverá en la siguiente lección con el método `updateProductCache`.

---

## Ejemplo sencillo

La petición PATCH es como enviar una nota de corrección a un archivo: no se manda el documento completo, solo la parte que cambió. El backend aplica el cambio y devuelve el documento actualizado. El interceptor es como el empleado de la oficina que automáticamente sella todas las notas con el sello de autorización antes de que salgan, sin que el remitente tenga que recordar hacerlo.

---

## Palabras clave y elementos importantes

- `PATCH /api/products/:id` — endpoint del backend para actualizar un producto parcialmente
- `http.patch<Product>(url, body)` — método de `HttpClient` para peticiones PATCH; recibe la URL y el cuerpo
- `${this.baseUrl}/products/${id}` — URL construida con template literal interpolando el id del producto
- `Observable<Product>` — tipo de retorno del método `updateProduct`; la petición no se ejecuta hasta suscribirse
- `.subscribe(product => { ... })` — suscripción en el componente que dispara la petición HTTP
- Interceptor de autenticación — añade el token `Authorization` automáticamente a todas las peticiones
- `PATCH` vs `PUT` — `PATCH` actualiza solo los campos enviados; `PUT` reemplaza el recurso completo
- Validación estricta del backend — rechaza propiedades desconocidas en el cuerpo de la petición
- Problema del caché — tras actualizar, el listado muestra datos viejos hasta recargar; se resuelve en la siguiente lección

---

## Resumen final

Esta lección implementa `updateProduct(id, productLike)` en `ProductsService` usando `http.patch<Product>`. La URL incluye el `id` del producto y el cuerpo es el `productLike` construido en la lección anterior. El token lo pone el interceptor automáticamente. En el componente se llama al método con `.subscribe` para disparar la petición. La actualización funciona correctamente, pero el caché de productos queda desactualizado hasta que se recarga la página, problema que se resolverá en la siguiente lección.
