# Botones de selección

## ¿Qué se aprende?

Esta lección implementa la lógica interactiva de los botones de selección del formulario: los botones de género se activan visualmente según el valor del campo `gender`, y los botones de tallas funcionan como toggles que agregan o remueven tallas del arreglo `sizes` del formulario.

---

## Puntos clave

**Botones de género: clase condicional con `[class.btn-X]`**

Cada botón de género aplica su clase de color condicionalmente usando la sintaxis `[class.nombre-clase]="condición"`:

```html
<!-- Masculino -->
<button type="button"
  [class.btn-primary]="productForm.value.gender === 'men'"
  (click)="productForm.patchValue({ gender: 'men' })">
  Men
</button>

<!-- Femenino -->
<button type="button"
  [class.btn-accent]="productForm.value.gender === 'woman'"
  (click)="productForm.patchValue({ gender: 'woman' })">
  Women
</button>

<!-- Kid -->
<button type="button"
  [class.btn-warning]="productForm.value.gender === 'kid'"
  (click)="productForm.patchValue({ gender: 'kid' })">
  Kid
</button>

<!-- Unisex -->
<button type="button"
  [class.btn-secondary]="productForm.value.gender === 'unisex'"
  (click)="productForm.patchValue({ gender: 'unisex' })">
  Unisex
</button>
```

- `[class.btn-primary]="condición"`: agrega la clase `btn-primary` si la condición es `true`, la quita si es `false`.
- La clase base estática `btn-primary`, `btn-accent`, etc., se **elimina** del HTML porque ahora se aplica de forma dinámica.
- El `(click)` usa `productForm.patchValue(...)` directamente en el template (inline) para actualizar solo el campo `gender`.

**Botones de tallas: toggle con método `onSizeClicked`**

Los botones de tallas son más complejos porque mantienen un arreglo de múltiples valores. Se crea un método en el componente:

```typescript
onSizeClicked(size: string): void {
  const currentSizes = this.productForm.value.sizes ?? [];

  if (currentSizes.includes(size)) {
    currentSizes.splice(currentSizes.indexOf(size), 1);
  } else {
    currentSizes.push(size);
  }

  this.productForm.patchValue({ sizes: currentSizes });
}
```

Paso a paso:
1. Se obtienen las tallas actuales del formulario con `?? []` para garantizar un arreglo nunca nulo.
2. Si la talla ya está en el arreglo (`includes`), se elimina con `splice(indexOf(size), 1)`.
3. Si no está, se agrega con `push(size)`.
4. Se actualiza el formulario con `patchValue({ sizes: currentSizes })`.

**Clase condicional en los botones de talla**

Cada botón de talla aplica `btn-secondary` si su talla está en el arreglo `sizes`:

```html
<button type="button"
  [class.btn-secondary]="productForm.value.sizes?.includes(size)"
  (click)="onSizeClicked(size)">
  {{ size }}
</button>
```

- `?.includes(size)`: el optional chaining evita errores si `sizes` es `null` o `undefined`.
- La clase base `btn-secondary` se elimina del HTML; solo se aplica cuando la condición es `true`.

**Llamada al método desde el template**

En el template se itera sobre el arreglo `sizes` de la clase con `@for` y se llama al método pasando la talla:

```html
@for (size of sizes; track size) {
  <button type="button"
    [class.btn-secondary]="productForm.value.sizes?.includes(size)"
    (click)="onSizeClicked(size)">
    {{ size }}
  </button>
}
```

**Verificación en consola**

Al tocar "Guardar" después de seleccionar tallas y género, la consola muestra el objeto del formulario con `sizes` como arreglo y `gender` con el valor del botón activo, confirmando que la lógica funciona correctamente.

**Nota sobre el orden de las tallas**

El orden en que se agregan las tallas al arreglo depende del orden en que el usuario hace clic. El backend no requiere un orden específico; solo verifica que las tallas existan. Si se necesitara orden, se podría usar un `Map` o un arreglo ordenado.

---

## Ejemplo sencillo

Los botones de género funcionan como botones de radio: solo uno puede estar activo a la vez y al hacer clic se activa el nuevo y se desactiva el anterior. Los botones de talla funcionan como checkboxes: se pueden seleccionar varios a la vez y al hacer clic en uno ya seleccionado se deselecciona.

---

## Palabras clave y elementos importantes

- `[class.btn-primary]="condición"` — sintaxis Angular para aplicar una clase condicionalmente
- `productForm.value.gender === 'men'` — condición para activar la clase del botón masculino
- `productForm.patchValue({ gender: 'men' })` — actualiza solo el campo `gender` del formulario en el evento `(click)` inline
- `onSizeClicked(size: string)` — método que implementa el toggle de tallas
- `productForm.value.sizes ?? []` — obtiene el arreglo de tallas actual con fallback a vacío
- `currentSizes.includes(size)` — comprueba si la talla ya está seleccionada
- `currentSizes.splice(indexOf, 1)` — elimina la talla del arreglo si ya existía
- `currentSizes.push(size)` — agrega la talla al arreglo si no existía
- `productForm.patchValue({ sizes: currentSizes })` — actualiza el campo `sizes` del formulario
- `productForm.value.sizes?.includes(size)` — comprueba con optional chaining si la talla está seleccionada (para la clase condicional del botón)
- `btn-primary` / `btn-accent` / `btn-warning` / `btn-secondary` — clases daisyUI para los colores activos de cada botón de género

---

## Resumen final

Esta lección implementa la interactividad de los botones de selección. Los botones de género usan `[class.btn-X]="productForm.value.gender === 'X'"` para activarse visualmente y `(click)="productForm.patchValue({ gender: 'X' })"` para actualizar el formulario. Los botones de talla usan el método `onSizeClicked(size)`, que implementa un toggle sobre el arreglo `sizes`: si la talla existe la elimina con `splice`, si no existe la agrega con `push`, y luego actualiza el formulario con `patchValue`. La clase `btn-secondary` se aplica condicionalmente a cada botón de talla usando `productForm.value.sizes?.includes(size)`.
