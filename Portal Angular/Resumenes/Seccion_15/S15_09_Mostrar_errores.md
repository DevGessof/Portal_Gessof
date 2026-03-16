# Lección 09 – Mostrar errores en pantalla

## ¿Qué se aprende en esta lección?
Se construyen dos métodos helper en el componente, `isValidField()` y `getFieldError()`, para mostrar los mensajes de error de cada campo de manera limpia en el template, evitando expresiones largas y difíciles de leer directamente en el HTML.

## Puntos clave explicados
- Mostrar errores directamente en el template con `@if (myForm.controls['name'].errors?.['minlength'])` genera código espantoso y difícil de mantener.
- **`isValidField(fieldName: string): boolean | null`** devuelve `true` si el campo tiene errores. Se usa en la directiva `@if` del bloque de error del campo.
- **`getFieldError(fieldName: string): string | null`** recorre las claves del objeto `errors` con un `for...of Object.keys(errors)` y un `switch(key)` para devolver el mensaje de error apropiado en español.
- Casos cubiertos en el `switch`:
  - `'required'` → `'Este campo es requerido'`
  - `'minlength'` → `'Mínimo de X caracteres'` (lee `errors['minlength'].requiredLength`)
  - `'min'` → `'Valor mínimo de X'` (lee `errors['min'].min`)
  - `default` → `null`
- Se declara `myForm: FormGroup` con tipo explícito para que TypeScript permita acceder a `.controls[fieldName]` con notación computada.
- El template llama a `getFieldError('name')` dentro de la interpolación `{{ }}` del bloque de error.

## Ejemplo sencillo
```typescript
// basic-page.component.ts
myForm: FormGroup = this.fb.group({ ... });

isValidField(fieldName: string): boolean | null {
  return !!this.myForm.controls[fieldName]?.errors;
}

getFieldError(fieldName: string): string | null {
  const errors = this.myForm.controls[fieldName]?.errors ?? {};
  for (const key of Object.keys(errors)) {
    switch (key) {
      case 'required':  return 'Este campo es requerido';
      case 'minlength': return `Mínimo de ${errors['minlength'].requiredLength} caracteres`;
      case 'min':       return `Valor mínimo de ${errors['min'].min}`;
    }
  }
  return null;
}
```

```html
@if (isValidField('name')) {
  <span class="text-danger">{{ getFieldError('name') }}</span>
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `isValidField(name)` | Verifica si el campo tiene errores (boolean) |
| `getFieldError(name)` | Devuelve el mensaje de error legible para el usuario |
| `Object.keys(errors)` | Itera las claves del objeto de errores |
| `switch(key)` | Selecciona el mensaje según el tipo de error |
| `errors['minlength'].requiredLength` | Longitud mínima requerida definida en el validador |
| `errors['min'].min` | Valor mínimo requerido definido en el validador |

## Resumen final
`isValidField()` y `getFieldError()` son dos helpers imprescindibles para mostrar errores de formulario de forma limpia. Concentran la lógica de interpretación de errores en TypeScript y dejan el template libre de expresiones complejas. En la siguiente lección se mejorará cuándo mostrarlos.
