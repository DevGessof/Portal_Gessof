# Lección 08 – Validaciones de campos incluidas en Angular

## ¿Qué se aprende en esta lección?
Se agregan validadores del objeto `Validators` de `@angular/forms` a cada campo del formulario básico. Se aprende a combinar múltiples validadores, a leer el objeto de errores en el template y a entender cómo Angular reporta el error activo.

## Puntos clave explicados
- `Validators` es un objeto estático importado de `@angular/forms` que provee validadores listos para usar.
- Validadores disponibles: `required`, `requiredTrue`, `email`, `min`, `max`, `minLength`, `maxLength`, `pattern`, `nullValidator`, `compose`, `composeAsync`.
- Angular evalúa los validadores en orden; cuando uno falla, detiene la cadena y reporta solo ese error.
- El objeto de errores de un control (`myForm.controls['name'].errors`) contiene una clave por cada validación fallida con su contexto.
  - `required: true` → el campo está vacío.
  - `minlength: { requiredLength: 3, actualLength: 1 }` → longitud insuficiente.
  - `min: { min: 10, actual: 5 }` → valor numérico por debajo del mínimo.
- **Diferencia `minLength` vs `min`:** `minLength` cuenta caracteres de un string; `min` evalúa el valor numérico.
- Los errores del formulario en su conjunto (`myForm.errors`) son distintos de los errores de cada control; los del control se acceden con `.controls['campo'].errors`.
- Para combinar varios validadores se pasan dentro de un arreglo: `[Validators.required, Validators.minLength(3)]`.

## Ejemplo sencillo
```typescript
myForm: FormGroup = this.fb.group({
  name:      ['',  [Validators.required, Validators.minLength(3)]],
  price:     [0,   [Validators.required, Validators.min(10)]],
  inStorage: [0,   [Validators.required, Validators.min(0)]],
});
```

```html
<!-- Mostrar objeto de errores del campo name en el template (depuración) -->
<p>Errores en name: {{ myForm.controls['name'].errors | json }}</p>
<!-- Salida cuando el campo está vacío: { "required": true } -->
<!-- Salida con una letra:             { "minlength": { "requiredLength": 3, "actualLength": 1 } } -->
```

## Funciones, palabras clave o elementos importantes
| Validador | Uso |
|---|---|
| `Validators.required` | El campo no puede estar vacío |
| `Validators.minLength(n)` | El string debe tener al menos n caracteres |
| `Validators.min(n)` | El número debe ser ≥ n |
| `Validators.max(n)` | El número debe ser ≤ n |
| `Validators.email` | El string debe tener formato de correo |
| `Validators.pattern(rx)` | El valor debe coincidir con la expresión regular |
| `.errors` | Objeto con las claves de las validaciones fallidas (null si todo es válido) |

## Resumen final
Angular incluye un conjunto robusto de validadores listos en `Validators`. Combinarlos en un arreglo por campo es suficiente para la mayoría de los casos. El objeto `.errors` de cada control ofrece contexto detallado (valores esperados vs actuales) que se puede usar para construir mensajes de error precisos.
