# Estructura del formulario de producto

## ¿Qué se aprende?

Esta lección crea el componente `ProductDetailsComponent`, que contendrá el formulario completo del producto. Se explica por qué conviene extraerlo a un componente hijo, se copia el HTML base del material adjunto, se resuelven los errores de importación y se define el arreglo `sizes` como propiedad de clase.

---

## Puntos clave

**Por qué extraer el formulario a un componente hijo**

El formulario del producto tiene mucho contenido HTML. Meterlo directamente dentro del `@if(productResource.hasValue())` de `product-admin-page` haría el archivo difícil de leer. La solución es crear un componente hijo dedicado: `ProductDetailsComponent`.

**Ubicación del nuevo componente**

Se crea dentro de la misma carpeta de la página:

```
src/app/admin-dashboard/pages/product-admin-page/
  product-admin-page.component.ts
  product-admin-page.component.html
  product-details/                     ← nueva carpeta
    product-details.component.ts
    product-details.component.html
```

Crearlo dentro de la carpeta de la página expresa que `ProductDetailsComponent` es una pieza dependiente de `product-admin-page`. Aunque también se podría colocar en `admin-dashboard/components/`, la convención del instructor es agrupar componentes con dependencia directa junto a su página.

**Input requerido del componente**

`ProductDetailsComponent` recibe el producto como señal requerida:

```typescript
product = input.required<Product>();
```

**Uso en la página padre**

En `product-admin-page.component.html`, dentro del `@if(productResource.hasValue())`, se reemplaza el `<h1>` provisional por el componente hijo:

```html
@if (productResource.hasValue()) {
  <product-details [product]="productResource.value()!" />
}
```

El `!` es non-null assertion: dentro del `hasValue()` se sabe con certeza que el valor existe.

El selector se cambia a `product-details` (sin prefijo `app-`) porque ya lleva el prefijo `product` que lo hace suficientemente descriptivo.

`ProductDetailsComponent` se importa en `product-admin-page.component.ts`.

**HTML base del formulario**

Se copia el HTML del material adjunto directamente en `product-details.component.html`. Este HTML incluye:
- Carrusel de imágenes (`product-carousel`).
- Inputs y textareas con clases daisyUI para título, descripción, slug, precio, stock y tags.
- Botones de selección de tallas (XS, S, M, L, XL, XXL).
- Botones de selección de género (Men, Women, Kid, Unisex).
- Botón de guardar.

**Resolución de errores de importación**

Al pegar el HTML aparecen dos errores:
1. `product-carousel` — se resuelve con `Ctrl + .` → "Add all missing imports".
2. `sizes` — se resuelve creando una propiedad de clase en el componente TypeScript.

**Propiedad `sizes` como arreglo de clase (no señal)**

```typescript
sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
```

Es una propiedad de clase ordinaria, no una señal, porque su valor nunca cambia desde que el componente se crea. No tiene sentido envolverla en `signal()` si no va a mutar.

**Botón "Kid" faltante y grid de cuatro columnas**

El HTML del material adjunto incluía solo tres géneros (Men, Women, Unisex). Se añade el botón `Kid` con clase `btn-warning` y se ajusta el grid a cuatro columnas para que queden todos alineados.

**Clase `btn-outline` condicional**

El HTML del material usa `btn-outline` comentado. Se explica que ese estilo se aplica cuando un botón no está activo, y que se eliminará cuando se implemente la lógica de selección activa con `[class.btn-primary]` en la siguiente lección.

---

## Ejemplo sencillo

Extraer el formulario a `ProductDetailsComponent` es como separar el contenido de un sobre. La página padre (`product-admin-page`) es el sobre: sabe cuándo hay carta (producto cargado) y la pasa al destinatario. El componente hijo (`ProductDetailsComponent`) es el destinatario: recibe la carta y la muestra, sin preocuparse de cómo llegó.

---

## Palabras clave y elementos importantes

- `ProductDetailsComponent` — componente hijo que contiene el formulario completo del producto
- Ubicación: `src/app/admin-dashboard/pages/product-admin-page/product-details/`
- `input.required<Product>()` — input señal requerido que recibe el producto del componente padre
- `product-details` — selector del componente (sin prefijo `app-`)
- `[product]="productResource.value()!"` — paso del producto con non-null assertion desde el padre
- `sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL']` — propiedad de clase simple (no señal) porque no cambia
- `product-carousel` — componente de carrusel de imágenes reutilizado de la tienda
- `Ctrl + .` → "Add all missing imports" — atajo de VSCode para resolver importaciones faltantes
- `btn-warning` — clase daisyUI usada para el botón "Kid"
- HTML base del formulario — proporcionado en el material adjunto de la lección

---

## Resumen final

Esta lección extrae el formulario del producto a `ProductDetailsComponent` para mantener legible `product-admin-page`. El componente hijo recibe el producto con `input.required<Product>()`. Se copia el HTML del material adjunto que incluye carrusel, inputs, selección de tallas y género. Se resuelven las importaciones de `product-carousel` y se define `sizes` como propiedad de clase ordinaria. El resultado es el diseño visual completo del formulario, aún sin lógica de interacción, lista para la siguiente lección.
