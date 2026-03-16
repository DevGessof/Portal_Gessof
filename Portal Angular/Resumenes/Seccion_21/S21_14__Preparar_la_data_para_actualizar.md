# Preparar la data para actualizar

## ¿Qué se aprende?

Esta lección transforma el valor del formulario en un objeto compatible con el backend antes de enviarlo, implementa `markAllAsTouched` para mostrar los errores de validación al tocar "Guardar", y deja listo el esqueleto del método `updateProduct` en el servicio.

---

## Puntos clave

**El problema: el formulario no es idéntico al producto**

Al tocar "Guardar" se obtiene el valor del formulario, pero ese valor no es exactamente lo que espera el backend. La única diferencia relevante es el campo `tags`: en el formulario es un string separado por comas, pero el backend espera un arreglo de strings. El resto de campos (`sizes`, `images`, `gender`, `price`, `stock`, etc.) están bien tal como los devuelve el formulario.

**`markAllAsTouched` para activar todos los errores**

Antes de cualquier otra acción en `onSubmit`, se verifica si el formulario es válido. Si no lo es, se llama a `markAllAsTouched` y se sale con `return`:

```typescript
onSubmit(): void {
  if (!this.productForm.valid) {
    this.productForm.markAllAsTouched();
    return;
  }
  // ...
}
```

- `markAllAsTouched()` marca todos los controles del formulario como `touched`, lo que activa la visualización de errores en los `FormErrorLabelComponent` aunque el usuario no haya tocado manualmente cada campo.
- `return` detiene la ejecución del resto del método si el formulario tiene errores.

**Obtener el valor del formulario**

```typescript
const formValue = this.productForm.value as any;
```

Se usa `as any` para evitar conflictos de tipos entre las interfaces del formulario y las del modelo `Product`. Esto simplifica la construcción del objeto final.

**Construir `productLike` con spread y transformación de `tags`**

```typescript
const productLike: Partial<Product> = {
  ...formValue,
  tags: formValue.tags
    ?.toLowerCase()
    .split(',')
    .map((tag: string) => tag.trim())
    ?? []
};
```

Paso a paso:
- `...formValue` — copia todos los campos del formulario (sizes, images, gender, price, stock, etc.) tal como están.
- `formValue.tags?.toLowerCase()` — convierte el string de tags a minúsculas para almacenarlos uniformemente.
- `.split(',')` — divide el string por comas, creando un arreglo de strings.
- `.map(tag => tag.trim())` — elimina espacios en blanco al inicio y al final de cada tag.
- `?? []` — si `tags` es `null` o `undefined`, usa un arreglo vacío.

Por ejemplo, si el usuario escribió `"Hoodie, T-Shirt , Algo"`, el resultado sería `["hoodie", "t-shirt", "algo"]`.

**Esqueleto de `updateProduct` en `ProductsService`**

Se crea el método en el servicio, aunque aún sin la petición HTTP real:

```typescript
updateProduct(id: string, productLike: Partial<Product>): void {
  console.log('Actualizando producto');
}
```

- Recibe el `id` del producto como primer argumento y el objeto a actualizar como segundo.
- Por ahora solo imprime en consola para verificar que el flujo llega hasta aquí.

**Llamada al servicio desde `onSubmit`**

```typescript
this.productsService.updateProduct(this.product().id, productLike);
```

- `this.product()` — invoca la señal para obtener el producto actual (recibido como `input.required`).
- `.id` — obtiene el id del producto para pasarlo como primer argumento al método del servicio.

**Verificación en consola**

Al tocar "Guardar" con datos de prueba, la consola muestra el objeto `productLike` con `tags` como arreglo de strings en minúsculas, confirmando que la transformación es correcta.

---

## Ejemplo sencillo

Preparar el `productLike` es como rellenar un formulario de correo postal: aunque el borrador que tienes tiene la dirección escrita en mayúsculas y con comas entre líneas, antes de enviarlo tienes que ponerla en el formato estándar que exige la oficina de correos. El spread copia todo lo demás intacto, y solo se "reformatea" el campo que lo necesita (`tags`).

---

## Palabras clave y elementos importantes

- `productForm.markAllAsTouched()` — marca todos los controles como `touched` para mostrar los errores de validación aunque no se hayan tocado manualmente
- `return` en `onSubmit` — detiene la ejecución si el formulario no es válido
- `const formValue = this.productForm.value as any` — obtiene el valor del formulario sin conflictos de tipos
- `const productLike: Partial<Product> = { ...formValue, tags: ... }` — construye el objeto listo para el backend con spread + transformación de tags
- `.toLowerCase().split(',').map(tag => tag.trim()) ?? []` — transforma el string de tags en arreglo de strings limpios y en minúsculas
- `updateProduct(id: string, productLike: Partial<Product>)` — nuevo método en `ProductsService` (esqueleto por ahora)
- `this.product().id` — acceso al id del producto actual a través de la señal `input.required`

---

## Resumen final

Esta lección prepara la data antes del envío al backend. En `onSubmit` se añade `markAllAsTouched` + `return` si el formulario no es válido. Se construye `productLike` con spread del valor del formulario y una transformación de `tags`: el string se convierte a minúsculas, se divide por comas y se limpian los espacios con `trim`. El método `updateProduct(id, productLike)` se crea en `ProductsService` como esqueleto y se llama desde `onSubmit` pasando `this.product().id`. En la siguiente lección se implementa la petición HTTP real.
