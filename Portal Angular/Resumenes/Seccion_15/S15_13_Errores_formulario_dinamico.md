# Lección 13 – Mostrar errores en pantalla (formulario dinámico)

## ¿Qué se aprende en esta lección?
Se extiende `FormUtils` con dos nuevos métodos estáticos para validar controles dentro de un `FormArray` y obtener sus mensajes de error, replicando el patrón del formulario básico pero adaptado a la naturaleza indexada del arreglo.

## Puntos clave explicados
- Los métodos `isValidField` y `getFieldError` de `FormUtils` no sirven directamente para controles dentro de un `FormArray` porque su acceso es por índice, no por nombre.
- Se añaden dos nuevos métodos estáticos a `FormUtils`:
  - **`isValidFieldInArray(formArray, index)`** → devuelve `true` si `formArray.controls[index]` tiene errores y fue tocado.
  - **`getFieldErrorInArray(formArray, index)`** → devuelve el mensaje de error del control en esa posición.
- Para evitar duplicar el `switch` de mensajes, se extrae un tercer método privado/estático:
  - **`getTextError(errors: ValidationErrors)`** → contiene el `switch(key)` con todos los casos y es llamado tanto por `getFieldError` como por `getFieldErrorInArray`.
- `ValidationErrors` es el tipo de `@angular/forms` que describe el objeto de errores de un control.
- El template del `DynamicPageComponent` usa `formUtils.isValidFieldInArray(favoriteGames, i)` para la condición y `formUtils.getFieldErrorInArray(favoriteGames, i)` para el mensaje.
- El error general del arreglo (p. ej. "Debe tener al menos 2 juegos") se muestra con `formUtils.isValidField(myForm, 'favoriteGames')` porque la validación de mínimo de elementos vive en el `FormArray` como control del `FormGroup` padre.

## Ejemplo sencillo
```typescript
// utils/form-utils.ts (ampliado)
import { FormArray, FormGroup, ValidationErrors } from '@angular/forms';

export class FormUtils {

  static isValidFieldInArray(formArray: FormArray, index: number): boolean | null {
    return !!(formArray.controls[index]?.errors && formArray.controls[index]?.touched);
  }

  static getFieldErrorInArray(formArray: FormArray, index: number): string | null {
    if (formArray.controls.length === 0) return null;
    const errors = formArray.controls[index]?.errors ?? {};
    return FormUtils.getTextError(errors);
  }

  static getTextError(errors: ValidationErrors): string | null {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':  return 'Este campo es requerido';
        case 'minlength': return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
        case 'min':       return `Valor mínimo de ${errors['min'].min}`;
      }
    }
    return null;
  }
}
```

```html
@for (game of favoriteGames.controls; track $index; let i = $index) {
  <input [formControlName]="i" />
  @if (formUtils.isValidFieldInArray(favoriteGames, i)) {
    <span>{{ formUtils.getFieldErrorInArray(favoriteGames, i) }}</span>
  }
}

<!-- Error del arreglo completo -->
@if (formUtils.isValidField(myForm, 'favoriteGames')) {
  <span>Debe tener al menos 2 juegos</span>
}
```

## Funciones, palabras clave o elementos importantes
| Método | Descripción |
|---|---|
| `isValidFieldInArray(arr, i)` | Verifica errores + touched en el control del índice i |
| `getFieldErrorInArray(arr, i)` | Devuelve el mensaje de error del control en la posición i |
| `getTextError(errors)` | Método centralizado que traduce el objeto de errores a texto |
| `ValidationErrors` | Tipo de `@angular/forms` para el objeto de errores |

## Resumen final
Extender `FormUtils` con métodos específicos para `FormArray` mantiene la lógica de validación centralizada. El patrón `isValidFieldInArray` + `getFieldErrorInArray` es el equivalente de `isValidField` + `getFieldError` para controles dinámicos. `getTextError` elimina la duplicación del `switch` de mensajes.
