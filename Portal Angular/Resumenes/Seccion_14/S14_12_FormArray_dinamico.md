# Lección 12 – Formularios dinámicos con arreglos (FormArray)

## ¿Qué se aprende en esta lección?
Se introduce `FormArray` para manejar una lista de controles que crece o decrece en tiempo de ejecución. Se construye el `DynamicPageComponent` con un nombre de persona y un arreglo de juegos favoritos cuyos controles se renderizan dinámicamente con `@for`.

## Puntos clave explicados
- **`FormArray`** es el tercer tipo de control reactivo (junto a `FormGroup` y `FormControl`). Representa una colección de controles indexados numéricamente.
- Se crea con `this.fb.array([...])` pasando controles iniciales como arreglo.
- Cada elemento del arreglo sigue la misma sintaxis que en `.group()`: `[valor, validadores, asyncValidadores]`.
- Se pueden agregar validaciones **al arreglo completo** (no solo a sus elementos), por ejemplo `Validators.minLength(3)` exige al menos tres elementos.
- Para iterar en el template se usa un **getter** que devuelve el `FormArray` tipado:
  ```typescript
  get favoriteGames(): FormArray { return this.myForm.get('favoriteGames') as FormArray; }
  ```
- En el template el `@for` itera `favoriteGames.controls` y cada input recibe `[formControlName]="i"` (el índice como identificador del control en el arreglo).
- El elemento padre de todos los inputs del arreglo debe tener `formArrayName="favoriteGames"` para que Angular sepa a qué `FormArray` pertenecen.

## Ejemplo sencillo
```typescript
// dynamic-page.component.ts
private fb = inject(FormBuilder);

myForm: FormGroup = this.fb.group({
  name: ['', [Validators.required, Validators.minLength(3)]],
  favoriteGames: this.fb.array([
    ['Metal Gear',      Validators.required],
    ['Death Stranding', Validators.required],
  ], [Validators.minLength(3)])   // al menos 3 juegos en el arreglo
});

get favoriteGames(): FormArray {
  return this.myForm.get('favoriteGames') as FormArray;
}
```

```html
<form [formGroup]="myForm">
  <input formControlName="name" />

  <div formArrayName="favoriteGames">
    @for (game of favoriteGames.controls; track $index; let i = $index) {
      <input [formControlName]="i" />
    }
  </div>
</form>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `FormArray` | Colección dinámica de controles indexados |
| `fb.array([...])` | Crea un `FormArray` con elementos iniciales |
| `formArrayName` | Asocia un bloque HTML al `FormArray` del formulario |
| `[formControlName]="i"` | Binding dinámico: el índice identifica cada control |
| Getter `favoriteGames` | Expone el `FormArray` tipado al template |
| Validación en el arreglo | `Validators.minLength(n)` exige n elementos en el arreglo |

## Resumen final
`FormArray` permite manejar listas de controles de longitud variable sin salir del paradigma reactivo. El getter tipado + `formArrayName` + `[formControlName]="i"` es el patrón estándar para renderizar y conectar los controles del arreglo al formulario principal.
