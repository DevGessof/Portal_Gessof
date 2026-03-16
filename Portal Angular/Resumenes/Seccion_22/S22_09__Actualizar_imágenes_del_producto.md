# Actualizar imágenes del producto

## ¿Qué se aprende?

Esta lección conecta la subida de imágenes con la actualización (y creación) de productos usando encadenamiento de Observables con `switchMap`. En lugar de usar `await` (que cambiaría el tipo de retorno del método a Promesa), se encadenan los Observables con `pipe`, `map` y `switchMap` para que el flujo sea completamente reactivo: primero suben las imágenes, luego se construye el producto actualizado con los nuevos nombres, y finalmente se hace el PATCH al backend.

---

## Puntos clave

**El problema: coordinar dos operaciones asíncronas con Observables**

El método `updateProduct` necesita:
1. Subir las imágenes (que puede tomar tiempo).
2. Una vez subidas, obtener los nombres de los archivos.
3. Añadir esos nombres al objeto `productLike` (junto con las imágenes que ya tenía).
4. Hacer el PATCH al backend con el producto completo.

Con Promesas se haría con `await`. Con Observables se usa **encadenamiento**: cada Observable alimenta al siguiente a través de operadores del `pipe`.

**Cómo se conectan los Observables: `map` + `switchMap`**

```typescript
updateProduct(id: string, productLike: Partial<Product>, imageFileList?: FileList): Observable<Product> {
  return this.uploadImages(imageFileList).pipe(

    map(imageNames => {
      const currentImages = productLike.images ?? [];
      return {
        ...productLike,
        images: [...currentImages, ...imageNames]
      };
    }),

    switchMap(updatedProduct =>
      this.http.patch<Product>(`${baseUrl}/products/${id}`, updatedProduct)
    ),

    tap(product => this.updateProductCache(product))
  );
}
```

Flujo completo paso a paso:

1. `this.uploadImages(imageFileList)` — sube todas las imágenes en paralelo. Emite un arreglo de nombres (`string[]`).
2. `map(imageNames => {...})` — transforma ese arreglo en un nuevo `productLike` que incluye tanto las imágenes ya existentes del producto como las recién subidas. `productLike.images ?? []` evita errores si `images` fuera `undefined`.
3. `switchMap(updatedProduct => this.http.patch(...))` — toma el `productLike` actualizado y dispara el PATCH al backend. Devuelve un nuevo Observable que emite el producto guardado.
4. `tap(product => this.updateProductCache(product))` — actualiza el caché sin interrumpir el flujo.

**Por qué `switchMap` y no `map`**

`map` transforma un valor en otro valor. `switchMap` transforma un valor en un nuevo **Observable** y "cambia" al flujo de ese nuevo Observable. Es el operador de RxJS para encadenar Observables en secuencia cuando el siguiente depende del resultado del anterior.

`switchMap` cumple el mismo rol que `await` en código asíncrono con Promesas:

```
// Con Promesas:
const imageNames = await uploadImages(fileList);
const product    = await http.patch(url, {...productLike, images: imageNames});

// Con RxJS:
uploadImages(fileList).pipe(
  map(imageNames => ({...productLike, images: imageNames})),
  switchMap(updated => http.patch(url, updated))
)
```

**Modificación de firmas de `updateProduct` y `createProduct`**

Ambos métodos reciben ahora un tercer parámetro opcional `imageFileList?: FileList` que se pasa al llamar `uploadImages`. El componente `product-details` los llama así:

```typescript
this.productsService.updateProduct(
  this.product().id,
  productLike,
  this.imageFileList  // puede ser undefined si no se seleccionaron imágenes
);
```

Si `imageFileList` es `undefined`, `uploadImages` devuelve `of([])` (arreglo vacío) y el flujo continúa sin añadir nuevas imágenes al producto.

**Tarea: implementar lo mismo en `createProduct`**

Se deja como tarea aplicar el mismo patrón al método `createProduct`, que también recibe `imageFileList?` como segundo argumento. El flujo sería idéntico: `uploadImages` → `map` para añadir nombres → `switchMap` con el `http.post`.

**Resultado en producción**

Al guardar un producto con imágenes nuevas:
- En consola aparece el arreglo de nombres de archivo devueltos por el backend.
- El producto se actualiza en el backend con las nuevas imágenes añadidas.
- El caché se actualiza automáticamente.
- Al volver al listado de productos y a la tienda, las nuevas imágenes aparecen sin necesidad de recargar.

---

## Ejemplo sencillo

`switchMap` es como una cadena de montaje: la primera estación (subir imágenes) entrega su resultado a la segunda (construir el producto), que a su vez lo entrega a la tercera (guardar en el backend). Cada estación espera a que la anterior termine y usa su resultado para hacer su propio trabajo.

---

## Palabras clave y elementos importantes

- `switchMap` — operador de RxJS que transforma el valor emitido por un Observable en un nuevo Observable y continúa con ese nuevo flujo; equivalente asíncrono de `await` para Observables encadenados
- `map(imageNames => ({...productLike, images: [...currentImages, ...imageNames]}))` — combina las imágenes existentes del producto con los nuevos nombres recibidos del servidor
- `productLike.images ?? []` — operador nullish coalescing para usar arreglo vacío si `images` es `undefined`
- `uploadImages(imageFileList?)` — primer eslabón de la cadena; si no hay imágenes emite `of([])` y el flujo continúa
- `http.patch<Product>(url, updatedProduct)` — segundo eslabón (dentro del `switchMap`); devuelve el producto actualizado
- `tap(product => updateProductCache(product))` — efecto secundario al final de la cadena para actualizar el caché sin interrumpir el flujo
- `imageFileList?: FileList` — tercer parámetro opcional en `updateProduct` y `createProduct`; se puede omitir si no se seleccionaron imágenes
- Encadenamiento de Observables — patrón de RxJS para ejecutar operaciones asíncronas en secuencia usando el resultado de cada una para alimentar la siguiente

---

## Resumen final

Esta lección conecta la subida de imágenes con la actualización del producto usando encadenamiento de Observables. El flujo en `updateProduct` es: `uploadImages` emite los nombres de archivos → `map` construye el `productLike` con las imágenes actuales más las nuevas → `switchMap` dispara el PATCH al backend → `tap` actualiza el caché. Ambos métodos (`updateProduct` y `createProduct`) reciben un tercer parámetro opcional `imageFileList?` y, si no se seleccionaron imágenes, `uploadImages` devuelve `of([])` para que el flujo continúe sin errores. El operador clave es `switchMap`, que permite encadenar Observables en secuencia de forma totalmente reactiva.
