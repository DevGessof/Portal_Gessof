# Formulario de producto

## ¿Qué se aprende?

Esta lección implementa el formulario reactivo completo del producto en `ProductDetailsComponent`: se define cada campo con sus validaciones, se conecta al HTML con `formGroup` y `formControlName`, se inicializa con los datos del producto recibido y se maneja la transformación de `tags` (de arreglo a string y viceversa).

---

## Puntos clave

**Importaciones necesarias**

```typescript
imports: [ReactiveFormsModule, ...]
```

`ReactiveFormsModule` se importa de `@angular/forms` y se añade al arreglo `imports` del componente standalone.

**Inyección del `FormBuilder`**

```typescript
fb = inject(FormBuilder);
```

`FormBuilder` también se importa de `@angular/forms`.

**Definición del `productForm`**

```typescript
productForm = this.fb.group({
  title:       ['', [Validators.required]],
  description: ['', [Validators.required]],
  slug:        ['', [Validators.required, Validators.pattern(FormUtils.slugPattern)]],
  price:       [0,  { validators: [Validators.required, Validators.min(0)] }],
  stock:       [0,  { validators: [Validators.required, Validators.min(0)] }],
  sizes:       [[] as string[]],
  images:      [[] as string[]],
  tags:        [''],
  gender:      ['men', { validators: [
    Validators.required,
    Validators.pattern(/men|woman|kid|unisex/)
  ]}]
});
```

Puntos importantes campo por campo:
- `title` y `description`: string vacío + `Validators.required`.
- `slug`: string vacío + `Validators.required` + `Validators.pattern(FormUtils.slugPattern)`. El `slugPattern` permite solo letras minúsculas, números, guiones y guiones bajos.
- `price` y `stock`: número inicializado en `0` + `Validators.required` + `Validators.min(0)` para no permitir valores negativos.
- `sizes` e `images`: arreglos inicializados vacíos. Se anota el tipo con `[] as string[]` para que TypeScript infiera `string[]` en lugar de `never[]`.
- `tags`: **string** (no arreglo). El usuario escribe las etiquetas separadas por comas; la conversión a arreglo se hace en el submit.
- `gender`: string `'men'` como valor por defecto + `Validators.required` + `Validators.pattern(/men|woman|kid|unisex/)` para aceptar solo los cuatro géneros válidos.

**Archivo `src/app/utils/form-utils.ts`**

Se crea en `src/app/utils/form-utils.ts` copiando el contenido del Gist del material adjunto (el mismo `FormUtils` de la sección de formularios reactivos). Lo único nuevo es la propiedad `slugPattern`:

```typescript
static readonly slugPattern = /^[a-z0-9_-]+$/;
```

También se añade el alias `@utils` en `tsconfig.json`:

```json
"@utils/*": ["src/app/utils/*"]
```

Esto permite importar como `import { FormUtils } from '@utils/form-utils'`.

**Conexión del formulario al HTML**

El `div` raíz del template se cambia a `<form>`:

```html
<form [formGroup]="productForm" (ngSubmit)="onSubmit()">
```

Cada input recibe su `formControlName` correspondiente:

```html
<input formControlName="title" ... />
<textarea formControlName="description" ...></textarea>
<input formControlName="slug" ... />
<input formControlName="price" type="number" ... />
<input formControlName="stock" type="number" ... />
<input formControlName="tags" ... />
```

**Botones que no deben hacer submit**

Los botones de selección de tallas y género deben tener `type="button"` para que no disparen el `ngSubmit` del formulario al hacer clic:

```html
<button type="button" ...>XS</button>
```

El único botón que no lleva `type="button"` es el de "Guardar", que tiene `type="submit"` (comportamiento por defecto).

**Método `onSubmit`**

```typescript
onSubmit(): void {
  console.log(this.productForm.value);
}
```

Por ahora solo imprime el valor del formulario en consola para verificar que los campos están conectados. Se implementará la petición HTTP en lecciones siguientes.

**Ciclo de vida `ngOnInit`: inicializar el formulario**

Se implementa `OnInit` para cargar los datos del producto en el formulario cuando el componente se crea:

```typescript
ngOnInit(): void {
  this.setFormValue(this.product());
}
```

**Método `setFormValue`**

```typescript
setFormValue(formLike: Partial<Product>): void {
  this.productForm.reset(formLike as any);
  this.productForm.patchValue({
    tags: formLike.tags?.join(', ')
  });
}
```

- `productForm.reset(formLike as any)`: restablece el formulario a estado `pristine` y carga los valores del producto. Se usa `as any` porque los tipos de `Product` (como `sizes: Size[]`) no son exactamente compatibles con los del formulario (como `sizes: string[]`). La mayor parte de los campos se carga directamente.
- `productForm.patchValue({ tags: ... })`: convierte el arreglo de tags del producto a string separado por comas, ya que el campo `tags` del formulario es de tipo string.
- La separación en dos llamadas permite usar `reset` para la limpieza del estado y `patchValue` para la transformación específica de `tags`.

**Por qué `setFormValue` es un método separado**

Porque eventualmente se llamará también después de guardar el producto, para actualizar el formulario con los datos frescos del servidor y restablecerlo a `pristine`.

---

## Ejemplo sencillo

`setFormValue` es como rellenar un formulario de papel con los datos de una ficha. Primero se borra todo lo que había (`reset`), se copia campo por campo la información de la ficha, y luego se hace una pequeña corrección manual: las etiquetas, que en la ficha son una lista, se escriben en una sola línea separadas por comas (`patchValue`).

---

## Palabras clave y elementos importantes

- `ReactiveFormsModule` — módulo de Angular para formularios reactivos, importado de `@angular/forms`
- `FormBuilder` — servicio inyectado para crear grupos de formulario de forma concisa
- `productForm = this.fb.group({...})` — definición del formulario reactivo con todos sus campos y validaciones
- `FormUtils.slugPattern` — expresión regular que solo permite `a-z`, `0-9`, `-` y `_`
- `Validators.min(0)` — validación que impide valores negativos en precio y stock
- `[] as string[]` — anotación de tipo para que TypeScript infiera arreglo de strings en lugar de `never[]`
- `tags` como `string` — el campo tags del formulario es una cadena separada por comas, no un arreglo
- `gender` con `Validators.pattern(/men|woman|kid|unisex/)` — solo acepta los cuatro géneros válidos del backend
- `[formGroup]="productForm"` — directiva que conecta el `<form>` al grupo reactivo
- `formControlName="..."` — directiva que conecta cada input a su control del grupo
- `type="button"` en botones de tallas y género — evita que disparen el `ngSubmit` del formulario
- `ngOnInit` — hook de ciclo de vida donde se llama `setFormValue` para cargar los datos del producto
- `productForm.reset(formLike as any)` — restablece el formulario a `pristine` y carga los valores
- `productForm.patchValue({ tags: tags.join(', ') })` — transforma el arreglo de tags a string
- `src/app/utils/form-utils.ts` — archivo con utilidades de formulario, accesible por alias `@utils`
- `@utils` en `tsconfig.json` — alias de path para importar utilidades de formulario

---

## Resumen final

Esta lección define el formulario reactivo completo con `FormBuilder.group`, incluyendo validaciones para todos los campos: `required`, `min(0)` para precio y stock, `pattern(slugPattern)` para el slug, y `pattern(/men|woman|kid|unisex/)` para el género. Los `tags` se manejan como string en el formulario. Se crea `src/app/utils/form-utils.ts` con el `slugPattern` y el alias `@utils` en `tsconfig.json`. El formulario se conecta al HTML con `[formGroup]` y `formControlName`. En `ngOnInit` se llama a `setFormValue` que usa `reset` para cargar los datos y `patchValue` para convertir el arreglo de tags a string. Los botones de selección llevan `type="button"` para no interferir con el submit.
