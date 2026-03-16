# Mostrar errores del formulario

## ¿Qué se aprende?

Esta lección implementa la visualización de errores de validación en el formulario de producto. Se crea un componente reutilizable `FormErrorLabelComponent` que recibe un `AbstractControl` y muestra el mensaje de error correspondiente solo cuando el campo ha sido tocado y tiene errores.

---

## Puntos clave

**El problema: el formulario tiene errores pero no los muestra**

Cuando un campo está vacío o con valor inválido y el usuario toca "Guardar", el formulario marca los campos como inválidos internamente pero el usuario no ve ninguna indicación visual. Es necesario mostrar mensajes de error y resaltar los campos problemáticos.

**Enfoque inline vs. componente reutilizable**

Se podría colocar un `<span>` de error debajo de cada input directamente en el HTML. Sin embargo, duplicar esa lógica en cada campo es tedioso. La solución es crear un componente reutilizable `FormErrorLabelComponent` en `src/app/shared/components/`.

**Creación de `FormErrorLabelComponent`**

```
src/app/shared/components/form-error-label/
  form-error-label.component.ts
  form-error-label.component.html
```

Selector: `form-error-label` (sin prefijo `app-`).

**HTML del componente**

```html
<span class="text-red-500 text-xs">
  {{ errorMessage }}
</span>
```

`errorMessage` es un getter del componente que devuelve el texto del error o `null`.

**TypeScript del componente**

```typescript
control = input.required<AbstractControl>();
// AbstractControl se importa de '@angular/forms'

get errorMessage(): string | null {
  const errors: ValidationErrors = this.control().errors ?? {};

  return this.control().touched && Object.keys(errors).length > 0
    ? FormUtils.getTextError(errors)
    : null;
}
```

- `AbstractControl` — tipo base de Angular Forms que engloba `FormControl`, `FormGroup` y `FormArray`. Al recibir el control completo, el componente tiene acceso a sus errores, estado `touched`, `dirty`, etc.
- `this.control().errors ?? {}` — obtiene el objeto de errores o un objeto vacío para evitar null.
- `this.control().touched` — el error solo se muestra si el usuario ya interactuó con el campo (lo tocó y lo dejó).
- `Object.keys(errors).length > 0` — verifica que haya al menos un error.
- `FormUtils.getTextError(errors)` — convierte el objeto de errores en un mensaje de texto legible (función del archivo `form-utils.ts`).
- Si no hay error o el campo no fue tocado, retorna `null` y el span no muestra nada.

**Clase condicional en el `input` del padre**

Además del label de error, se resalta el borde del input con rojo cuando tiene errores:

```html
<input
  formControlName="title"
  [class.border-red-500]="productForm.get('title')?.errors ?? false"
  ...
/>
```

- `productForm.get('title')` — obtiene el `FormControl` del campo `title`.
- `?.errors` — accede a los errores con optional chaining.
- `?? false` — si no hay errores (null), la clase no se aplica.

**Uso del componente en el formulario**

```html
<!-- Debajo del input de título -->
<input formControlName="title"
  [class.border-red-500]="productForm.get('title')?.errors ?? false" />
<form-error-label [control]="productForm.get('title')!" />

<!-- Debajo del textarea de descripción -->
<textarea formControlName="description" ...></textarea>
<form-error-label [control]="productForm.get('description')!" />

<!-- Debajo del input de slug -->
<input formControlName="slug" ... />
<form-error-label [control]="productForm.get('slug')!" />

<!-- Debajo del input de precio (en un div agrupador) -->
<div>
  <input formControlName="price" type="number" ... />
  <form-error-label [control]="productForm.get('price')!" />
</div>

<!-- Debajo del input de stock (en un div agrupador) -->
<div>
  <input formControlName="stock" type="number" ... />
  <form-error-label [control]="productForm.get('stock')!" />
</div>

<!-- Debajo del input de tags -->
<input formControlName="tags" ... />
<form-error-label [control]="productForm.get('tags')!" />
```

El `!` es non-null assertion porque `productForm.get('campo')` puede retornar `null` según TypeScript, pero en tiempo de ejecución siempre existe porque el campo está definido en el grupo.

**Agrupación en `div` para campos lado a lado**

Los inputs de precio y stock están en un grid de dos columnas. Al añadir el `form-error-label` debajo de cada uno, el layout se desordena. La solución es envolver cada par (input + label de error) en un `div`:

```html
<div class="grid grid-cols-2 gap-2">
  <div>
    <input formControlName="price" ... />
    <form-error-label [control]="productForm.get('price')!" />
  </div>
  <div>
    <input formControlName="stock" ... />
    <form-error-label [control]="productForm.get('stock')!" />
  </div>
</div>
```

**Validación en `onSubmit`**

Se añade la verificación de validez antes de proceder con el envío:

```typescript
onSubmit(): void {
  const isValid = this.productForm.valid;
  console.log({ isValid, value: this.productForm.value });
}
```

Si `isValid` es `false`, no se debería hacer la petición HTTP (la implementación real del bloqueo se hace en lecciones siguientes).

---

## Ejemplo sencillo

`FormErrorLabelComponent` es como una etiqueta de aviso que se pega debajo de un campo de formulario en papel. Solo aparece si el campo fue tocado por el usuario y contiene un error. Al recibir el control completo como `AbstractControl`, puede consultar todos los detalles del campo (sus errores, si fue tocado, etc.) sin necesidad de que el formulario le pase nada más.

---

## Palabras clave y elementos importantes

- `FormErrorLabelComponent` — componente reutilizable de mensaje de error; ubicado en `src/app/shared/components/form-error-label/`
- `form-error-label` — selector del componente (sin prefijo `app-`)
- `input.required<AbstractControl>()` — input señal que recibe el control del formulario
- `AbstractControl` — tipo base de Angular Forms importado de `@angular/forms`
- `get errorMessage()` — getter que evalúa si hay errores y retorna el texto del error o `null`
- `control().touched` — el error solo se muestra si el usuario interactuó con el campo
- `Object.keys(errors).length > 0` — verifica que exista al menos un error en el control
- `FormUtils.getTextError(errors)` — convierte el objeto de errores de Angular en un mensaje legible
- `[class.border-red-500]="productForm.get('campo')?.errors ?? false"` — resalta el borde del input en rojo si tiene errores
- `productForm.get('campo')!` — non-null assertion al pasar el control al componente
- `productForm.valid` — booleano que indica si todos los campos del formulario son válidos
- `div` agrupador — envuelve cada par input + error label para mantener el layout de grid

---

## Resumen final

Esta lección crea el componente reutilizable `FormErrorLabelComponent` en `shared/components/`. Recibe un `AbstractControl` como `input.required` y expone un getter `errorMessage` que devuelve texto de error solo si el campo fue tocado y tiene errores, usando `FormUtils.getTextError`. Se coloca debajo de los campos de título, descripción, slug, precio, stock y tags. Los inputs reciben la clase condicional `border-red-500` para resaltarse en rojo cuando tienen errores. Los campos de precio y stock se envuelven en `div` individuales para mantener el layout de grid. El `onSubmit` verifica `productForm.valid` antes de proceder.
