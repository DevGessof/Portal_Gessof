# Lección 11 – Reutilización de lógica entre formularios

## ¿Qué se aprende en esta lección?
Se extrae la lógica de `isValidField()` y `getFieldError()` a una clase utilitaria independiente `FormUtils`, con métodos estáticos, para evitar copiar y pegar esos métodos en cada componente que tenga un formulario.

## Puntos clave explicados
- Tener `isValidField` y `getFieldError` dentro de cada componente viola DRY (Don't Repeat Yourself): habría que copiarlos en cada página de formulario.
- **Solución:** crear `src/app/utils/form-utils.ts` con una clase `FormUtils` de métodos **estáticos**.
- Los métodos estáticos se invocan sin instanciar la clase: `FormUtils.isValidField(form, 'name')`.
- Ambos métodos reciben ahora el `FormGroup` como primer parámetro, ya que la clase no tiene acceso al componente.
- En el componente se crea una propiedad pública `formUtils = FormUtils` para que el template pueda acceder a ella.
- El template pasa `myForm` como primer argumento: `formUtils.isValidField(myForm, 'name')`.
- Los métodos originales en el componente se comentan o eliminan.
- La ventaja adicional es que `FormUtils` puede crecer con validadores personalizados, expresiones regulares, etc., en un solo lugar.

## Ejemplo sencillo
```typescript
// utils/form-utils.ts
import { FormGroup, FormArray } from '@angular/forms';

export class FormUtils {

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return !!(form.controls[fieldName]?.errors && form.controls[fieldName]?.touched);
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    const errors = form.controls[fieldName]?.errors ?? {};
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

```typescript
// basic-page.component.ts
import { FormUtils } from '../../utils/form-utils';

export class BasicPageComponent {
  formUtils = FormUtils;   // exponer la clase al template
  myForm: FormGroup = ...;
}
```

```html
@if (formUtils.isValidField(myForm, 'name')) {
  <span>{{ formUtils.getFieldError(myForm, 'name') }}</span>
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `FormUtils` | Clase utilitaria con métodos estáticos de validación |
| Métodos `static` | Se invocan sin instanciar la clase |
| `formUtils = FormUtils` | Property del componente para exponer la clase al template |
| `form: FormGroup` | Parámetro que reemplaza `this.myForm` en los helpers |
| `utils/form-utils.ts` | Archivo centralizado de lógica de formularios |

## Resumen final
Centralizar los helpers de validación en `FormUtils` es la práctica recomendada cuando hay múltiples formularios en la aplicación. Los métodos estáticos eliminan la necesidad de inyección y se usan directamente desde cualquier componente pasando el formulario como argumento.
