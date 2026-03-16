# Mejorar experiencia de usuario

## ¿Qué se aprende?

Esta es la lección final de la sección. Se mejoran dos aspectos de la experiencia de usuario: se añade una imagen de placeholder en el carrusel cuando un producto no tiene imágenes, delegando esa responsabilidad al pipe `ProductImagePipe`, y se muestra un mensaje de confirmación temporal ("Datos guardados correctamente") después de guardar el formulario usando una señal `wasSaved` y `setTimeout`.

---

## Puntos clave

**Problema 1: carrusel vacío cuando no hay imágenes**

Cuando se crea un producto nuevo o un producto no tiene imágenes, el carrusel queda en blanco. La solución es usar la directiva `@empty` del control flow de Angular para mostrar algo cuando el arreglo de imágenes está vacío.

**Solución: `@empty` en `product-carousel.component.html`**

Se accede al componente con `Alt + Clic` sobre el selector en el template. En el `@for` que itera sobre las imágenes se añade el bloque `@empty`:

```html
@for (image of images(); track image) {
  <swiper-slide>
    <img [src]="image | productImage" ... />
  </swiper-slide>
} @empty {
  <swiper-slide>
    <img [src]="null | productImage" ... />
  </swiper-slide>
}
```

- `@empty` se ejecuta cuando el arreglo iterado tiene longitud cero.
- Se pasa `null` al pipe `productImage` para que sea él quien decida qué imagen de placeholder mostrar.

**Actualización del pipe `ProductImagePipe`**

El pipe debe aceptar `null` además de `string`:

```typescript
transform(value: string | null): string {
  if (!value || value === null) {
    return 'assets/no-image.png'; // imagen de placeholder
  }
  // ... lógica existente
}
```

Con este cambio, el pipe se convierte en el único responsable de mostrar la imagen vacía en toda la aplicación, tanto en la tienda como en el panel administrativo. No es necesario poner la URL del placeholder en el HTML.

**Problema 2: sin retroalimentación al guardar**

Tras tocar "Guardar" no hay ningún mensaje visible que confirme que la operación fue exitosa.

**Solución: señal `wasSaved` y `setTimeout`**

En `ProductDetailsComponent` se añade una señal booleana:

```typescript
wasSaved = signal(false);
```

En `onSubmit`, después del bloque `if/else` de crear/actualizar, se activa la señal y se programa su desactivación con `setTimeout`:

```typescript
// Después del await de createProduct o updateProduct:
this.wasSaved.set(true);
setTimeout(() => {
  this.wasSaved.set(false);
}, 3000);
```

- `wasSaved.set(true)` — muestra el mensaje.
- `setTimeout(..., 3000)` — después de 3 segundos, oculta el mensaje automáticamente.
- No se usa un `effect` para resetear la señal porque podría crear un ciclo reactivo indeseado entre la señal y el efecto.

**Mensaje de confirmación en el HTML**

Debajo del `<form>` se añade un `div` flotante que solo aparece cuando `wasSaved()` es `true`:

```html
@if (wasSaved()) {
  <div class="alert alert-success fixed bottom-4 right-4 w-80 animate-fadeIn">
    <span>Datos guardados correctamente</span>
  </div>
}
```

- `alert alert-success` — clases daisyUI para el estilo de alerta verde.
- `fixed bottom-4 right-4` — posiciona el mensaje en la esquina inferior derecha de la pantalla.
- `w-80` — ancho fijo del mensaje.
- `animate-fadeIn` — animación de entrada definida en la configuración de Tailwind del proyecto.
- `@if (wasSaved())` — el mensaje aparece cuando la señal es `true` y desaparece a los 3 segundos.

**Flujo completo de `onSubmit` con `wasSaved`**

```typescript
async onSubmit(): Promise<void> {
  if (!this.productForm.valid) {
    this.productForm.markAllAsTouched();
    return;
  }

  // ... preparar productLike

  try {
    if (this.product().id === 'new') {
      const product = await firstValueFrom(this.productsService.createProduct(productLike));
      this.router.navigate(['/admin/products', product.id]);
    } else {
      await firstValueFrom(this.productsService.updateProduct(this.product().id, productLike));
    }

    this.wasSaved.set(true);
    setTimeout(() => this.wasSaved.set(false), 3000);

  } catch (error) {
    // manejo de errores
  }
}
```

El `wasSaved` solo se activa si la petición tuvo éxito (no lanza error). Un `try/catch` envuelve el bloque para atrapar posibles errores del backend.

**Cierre de la sección**

La sección 21 concluye aquí. Las funcionalidades completadas son: panel administrativo con autorización, listado paginado de productos, creación y actualización de productos con formulario reactivo y caché actualizado, y mensajes de confirmación. Queda pendiente para la siguiente sección la gestión de imágenes: selección de archivos, previsualización antes de subir, y subida al servidor.

---

## Ejemplo sencillo

La señal `wasSaved` con `setTimeout` funciona como la luz verde en un semáforo peatonal: se enciende cuando la operación termina bien y se apaga sola a los 3 segundos. No hace falta que el usuario haga nada para quitarla. El `@empty` del carrusel es como poner una foto de "imagen no disponible" en un álbum cuando una página está en blanco, sin tener que escribir esa lógica en cada lugar donde se use el álbum.

---

## Palabras clave y elementos importantes

- `@empty` — bloque del control flow de Angular que se muestra cuando el arreglo del `@for` está vacío
- `null | productImage` — pasa `null` al pipe para delegar la imagen de placeholder
- Actualización del `ProductImagePipe` — acepta `string | null`; devuelve `'assets/no-image.png'` si el valor es nulo o vacío
- `wasSaved = signal(false)` — señal booleana que controla la visibilidad del mensaje de confirmación
- `wasSaved.set(true)` — activa el mensaje tras una operación exitosa
- `setTimeout(() => wasSaved.set(false), 3000)` — desactiva el mensaje automáticamente después de 3 segundos
- `@if (wasSaved())` — condición en el template que muestra u oculta el div de confirmación
- `alert alert-success fixed bottom-4 right-4 w-80` — clases daisyUI + Tailwind para el mensaje flotante
- `animate-fadeIn` — animación de entrada definida en la configuración de Tailwind del proyecto
- `try/catch` envolviendo el `await` — atrapa errores del backend para no mostrar el mensaje si la operación falló

---

## Resumen final

Esta lección final de la sección mejora dos aspectos de UX. Primero, se usa `@empty` en `product-carousel` para mostrar una imagen de placeholder cuando el arreglo de imágenes está vacío, delegando la lógica al `ProductImagePipe` actualizado para aceptar `null`. Segundo, se añade la señal `wasSaved = signal(false)` en `ProductDetailsComponent`: se pone en `true` tras una creación o actualización exitosa y se revierte automáticamente a `false` con `setTimeout` de 3 segundos. En el HTML se usa `@if (wasSaved())` para mostrar un `div` flotante con clases daisyUI de alerta verde en la esquina inferior derecha. La sección 22 abordará la gestión y subida de imágenes.
