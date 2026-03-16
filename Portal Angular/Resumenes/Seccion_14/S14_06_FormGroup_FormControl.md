# Lección 06 – ReactiveForms: FormGroup y FormControl

## ¿Qué se aprende en esta lección?
Se crea el primer formulario reactivo de la sección en `BasicPageComponent`. Se aprende a definir un `FormGroup` con `FormControl`s, a importar `ReactiveFormsModule`, a conectar el formulario al template con `[formGroup]` y `formControlName`, y a leer los estados del formulario en tiempo real.

## Puntos clave explicados
- Un **formulario reactivo** vive en TypeScript como una propiedad de la clase; no en el template.
- `FormGroup` es el contenedor principal del formulario. Acepta un objeto donde cada clave es un `FormControl`.
- `FormControl` representa un campo individual. Se inicializa con el valor por defecto; Angular infiere el tipo a partir de ese valor (`string | null`, `number | null`…).
- Para conectar el formulario al HTML:
  - Al `<form>` se le agrega `[formGroup]="myForm"`.
  - A cada `<input>` se le agrega `formControlName="nombreDelCampo"`.
- Se debe importar `ReactiveFormsModule` de `@angular/forms` en el componente standalone; es un módulo que agrupa directivas, pipes y servicios de formularios reactivos.
- Estados del formulario accesibles desde TypeScript y el template:
  - `.valid` → todas las validaciones pasan.
  - `.pristine` → el formulario no ha sido modificado desde que se sirvió.
  - `.touched` → el usuario interactuó con al menos un campo.
  - `.value` → objeto con los valores actuales.
- Acceder al valor de un control individual: `myForm.controls['price'].value` o `myForm.controls.price.value`.
- Error común: usar `myForm.controls.price` en el template cuando el tipo es genérico → usar notación computada `myForm.controls['price']`.

## Ejemplo sencillo
```typescript
// basic-page.component.ts
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({ imports: [ReactiveFormsModule, JsonPipe] })
export class BasicPageComponent {

  myForm = new FormGroup({
    name:      new FormControl(''),   // string | null
    price:     new FormControl(0),    // number | null
    inStorage: new FormControl(0),
  });
}
```

```html
<!-- basic-page.component.html -->
<form [formGroup]="myForm" autocomplete="off">
  <input formControlName="name"      type="text"   />
  <input formControlName="price"     type="number" />
  <input formControlName="inStorage" type="number" />
  <button type="submit">Guardar</button>
</form>

<p>Valid:    {{ myForm.valid    }}</p>
<p>Pristine: {{ myForm.pristine }}</p>
<p>Touched:  {{ myForm.touched  }}</p>
<p>Value:    {{ myForm.value | json }}</p>
<p>Precio:   {{ myForm.controls['price'].value }}</p>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `FormGroup` | Contenedor del formulario; agrupa controles |
| `FormControl` | Representa un campo individual del formulario |
| `ReactiveFormsModule` | Módulo de Angular que habilita las directivas reactivas |
| `[formGroup]` | Binding que enlaza el `<form>` con el `FormGroup` de la clase |
| `formControlName` | Atributo que asocia un `<input>` con un control del grupo |
| `.valid` / `.pristine` / `.touched` | Estados del formulario para controlar la UI |

## Resumen final
`FormGroup` + `FormControl` es la forma tradicional de crear formularios reactivos. Conectar el grupo al template con `[formGroup]` y los inputs con `formControlName` permite a Angular rastrear automáticamente el estado y el valor de cada campo en tiempo real.
