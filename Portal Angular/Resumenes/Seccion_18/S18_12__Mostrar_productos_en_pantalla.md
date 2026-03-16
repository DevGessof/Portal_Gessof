# Mostrar productos en pantalla (tarea)

## ¿Qué se aprende?

Esta lección es una tarea. El instructor presenta los requisitos visuales del resultado esperado y explica las piezas necesarias para completarla, sin resolver todo él mismo. El estudiante debe mostrar los productos del servicio en el template usando señales, inputs requeridos y el pipe `slice`.

---

## Puntos clave

**Objetivo de la tarea**

Mostrar los 9 productos que devuelve `productsResource` en las tarjetas del componente `product-card`. Cada tarjeta debe mostrar: la imagen del producto, el título y una descripción recortada.

**Cómo se construye la URL de las imágenes**

Las imágenes no vienen como URLs completas. El backend devuelve solo el nombre del archivo (por ejemplo `1740176-00-A_0_2000.jpg`). Para obtener la imagen hay que construir el URL completo así:

```
http://localhost:3000/api/files/product/{nombreDelArchivo}
```

Esto se puede verificar en Postman: haciendo GET a esa URL se obtiene la imagen del producto.

**Requisitos técnicos de la tarea**

- Usar el `@for` en el template de `home-page` para iterar sobre `productsResource().value?.products`
- Pasar cada producto al componente `product-card` mediante un `input` requerido (usando la función `input`, no el decorador `@Input`)
- Mostrar el título y la descripción (esta última recortada con el pipe `slice:0:70`)
- Mostrar la imagen usando el nombre que viene en el arreglo `images` del producto
- El `routerLink` de cada tarjeta debe apuntar al `slug` del producto para crear URLs amigables

**Pista sobre la imagen**

Las imágenes vienen como un arreglo. Todos los productos actuales tienen dos imágenes. Para mostrar una imagen representativa se puede tomar la primera posición del arreglo (`images[0]`). El instructor menciona que en la siguiente lección se resolverá esto de manera más profesional con un pipe personalizado.

**Pista sobre el `computed`**

Una solución válida es crear una señal computada en `product-card` para calcular el URL de la imagen:

```typescript
imageUrl = computed(() => {
  return `http://localhost:3000/api/files/product/${this.product().images[0]}`;
});
```

Esto centraliza la lógica del URL dentro del componente.

**Advertencia sobre productos sin imágenes**

Si un producto no tuviera imágenes (arreglo vacío), el código se rompería. Para manejarlo correctamente se necesitaría una imagen placeholder y una verificación del largo del arreglo. Eso se resuelve en la siguiente lección con un pipe personalizado.

**Tiempo sugerido**

Si la tarea toma más de 10 o 15 minutos, se recomienda ver el video de solución.

---

## Ejemplo sencillo

Piensa en una galería de fotos donde cada foto tiene un nombre de archivo pero no la URL completa. Para mostrarla en una página web hay que armar la dirección completa concatenando la base (`http://localhost:3000/api/files/product/`) con el nombre del archivo. Eso es exactamente lo que se hace con cada imagen de los productos de TesloShop.

---

## Palabras clave y elementos importantes

- `@for` — directiva de control de flujo para iterar en el template
- `productsResource().value?.products` — arreglo de productos de la señal reactiva
- `input()` (función) — forma moderna de declarar inputs en Angular con señales
- `input.required<Product>()` — input obligatorio tipado
- `slice:0:70` — pipe para recortar texto a 70 caracteres
- `computed()` — señal derivada que recalcula su valor automáticamente
- `imageUrl` — señal computada que construye el URL completo de la imagen
- `slug` — identificador amigable del producto usado en el `routerLink`
- `images[0]` — primera imagen del arreglo de imágenes del producto
- Imagen placeholder — imagen de respaldo cuando el producto no tiene imágenes

---

## Resumen final

Esta lección propone una tarea práctica: mostrar los 9 productos en pantalla usando `@for`, inputs requeridos con señales y el pipe `slice` para la descripción. La parte más importante es entender que las imágenes vienen como nombres de archivo y hay que construir el URL completo para mostrarlas. El instructor propone usar una señal `computed` para calcular ese URL dentro del componente, y anticipa que la solución completa con manejo de casos especiales (productos sin imagen) se verá en la siguiente lección con un pipe personalizado.
