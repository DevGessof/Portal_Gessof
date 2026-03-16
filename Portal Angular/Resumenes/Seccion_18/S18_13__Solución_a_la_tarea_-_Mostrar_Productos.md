# Solución a la tarea: mostrar productos

## ¿Qué se aprende?

Esta lección resuelve la tarea de la clase anterior paso a paso. Se implementa el input requerido en `product-card`, se conecta el `@for` en el template de `home-page`, se importa el pipe `SlicePipe` y se construye una señal `computed` para el URL de la imagen. También se anticipa que esta solución se mejorará en la siguiente clase con un pipe personalizado.

---

## Puntos clave

**Input requerido en `product-card`**

En el archivo TypeScript de `product-card` se declara el input usando la función moderna de Angular:

```typescript
product = input.required<Product>();
```

Se importa de `@angular/core` y el tipo `Product` se importa desde el path de alias correspondiente. No se usa el decorador `@Input()` sino la función `input.required()`.

**Template de `product-card`**

Se muestra el título con la señal del input (que es una función al ser señal):

```html
{{ product().title }}
```

La descripción se muestra recortada con el pipe `slice`:

```html
{{ product().description | slice:0:70 }}
```

El pipe `SlicePipe` debe importarse explícitamente desde `@angular/common` en el arreglo `imports` del componente standalone.

El `routerLink` se construye con el slug del producto para URLs amigables:

```html
[routerLink]="['/product', product().slug]"
```

**`@for` en el template de `home-page`**

Para mostrar las tarjetas se itera sobre el arreglo de productos del recurso reactivo:

```html
@for (product of productsResource().value?.products; track product.id) {
  <app-product-card [product]="product" />
} @empty {
  <p>No hay productos</p>
}
```

El operador `?.` es necesario porque `value` puede ser `undefined` mientras carga. El bloque `@empty` muestra un mensaje cuando el arreglo está vacío.

**Señal `computed` para la imagen**

Dentro del componente `product-card` se crea una señal derivada para construir el URL de la imagen:

```typescript
imageUrl = computed(() => {
  return `http://localhost:3000/api/files/product/${this.product().images[0]}`;
});
```

Esta señal se usa en el template como atributo `src` de la etiqueta `img`:

```html
<img [src]="imageUrl()" [alt]="product().title" />
```

Los backticks son obligatorios para el template literal. Esta solución funciona pero tiene un problema: si el producto no tiene imágenes, el arreglo estaría vacío y la URL quedaría rota.

**Advertencia: código sucio vs. solución profesional**

El instructor muestra que colocar todo el URL directamente en el template HTML también funciona, pero el código queda difícil de mantener. La señal `computed` es mejor, pero aun así tiene el problema del arreglo vacío. La solución definitiva (manejo de imagen placeholder, lógica centralizada, reutilizable en cualquier componente) se implementa en la siguiente clase usando un pipe personalizado.

---

## Ejemplo sencillo

Si tienes una lista de 9 cajas y cada caja necesita mostrar una etiqueta (título), una descripción corta y una foto, Angular lo hace así: primero itera sobre la lista con `@for`, luego le pasa cada caja a un componente hijo (`product-card`) como un `input`, y ese componente hijo sabe cómo mostrar sus datos porque tiene acceso a la caja completa. La foto requiere un paso extra: construir la URL real a partir del nombre de archivo que viene del servidor.

---

## Palabras clave y elementos importantes

- `input.required<Product>()` — input obligatorio con el sistema de señales de Angular
- `product()` — forma de leer el valor del input en el template (es una señal, necesita los paréntesis)
- `SlicePipe` — pipe importado de `@angular/common` para recortar texto
- `slice:0:70` — muestra solo los primeros 70 caracteres de la descripción
- `@for` — itera sobre el arreglo de productos en el template
- `@empty` — bloque opcional dentro de `@for` que se muestra si el arreglo está vacío
- `productsResource().value?.products` — acceso seguro al arreglo de productos de la señal
- `computed()` — señal derivada para calcular el URL de la imagen
- `imageUrl` — señal computada que construye la URL completa de la imagen
- Template literal (backticks) — necesario para interpolación en strings de TypeScript

---

## Resumen final

La solución a la tarea consiste en tres pasos principales: declarar `input.required<Product>()` en `product-card`, usar `@for` sobre `productsResource().value?.products` en `home-page` para pasar cada producto al componente hijo, y construir el URL de la imagen con una señal `computed`. El pipe `SlicePipe` debe importarse explícitamente. Aunque la solución funciona y los productos se muestran en pantalla, el manejo del URL de imagen aún es frágil ante productos sin imágenes, lo que se resolverá en la siguiente lección con un pipe personalizado más robusto y reutilizable.
