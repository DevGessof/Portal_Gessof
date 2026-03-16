# Lección 10 – Mejorar reutilización y experiencia de usuario

## ¿Qué se aprende en esta lección?
Se mejora la experiencia del formulario en dos aspectos: (1) los errores solo se muestran cuando el usuario ya interactuó con el campo (`touched`), y (2) al pulsar "Guardar" todos los errores aparecen de golpe usando `markAllAsTouched()`. También se implementa el reseteo del formulario con `reset()`.

## Puntos clave explicados
- **Problema:** los errores aparecen desde el primer render, incluso antes de que el usuario toque el campo. Esto es mala experiencia de usuario.
- **Solución en `isValidField()`:** agregar la condición `&& this.myForm.controls[fieldName].touched` para que el error solo se muestre si el campo fue tocado.
- **Problema:** si el usuario pulsa "Guardar" sin tocar ningún campo, el formulario está inválido pero no muestra ningún error.
- **Solución:** crear el método `onSave()` que llama a `this.myForm.markAllAsTouched()` antes de proceder, lo que simula que el usuario pasó por todos los campos.
- El formulario se asocia al evento `(ngSubmit)="onSave()"` del `<form>`, no al `(click)` del botón, porque `ngSubmit` también captura el "Enter" en los inputs y previene la propagación por defecto.
- **`myForm.reset()`:** resetea todos los valores, marca el formulario como `pristine` y `untouched`. Se puede pasar un objeto con valores específicos para restablecer los campos a un estado distinto del vacío.
- Flujo completo de `onSave()`:
  1. Si `myForm.invalid` → `markAllAsTouched()` + `return`.
  2. Si es válido → `console.log(myForm.value)` (simular posteo) → `myForm.reset({ price: 0, inStorage: 0 })`.

## Ejemplo sencillo
```typescript
isValidField(fieldName: string): boolean | null {
  return !!(
    this.myForm.controls[fieldName]?.errors &&
    this.myForm.controls[fieldName]?.touched    // solo si fue tocado
  );
}

onSave(): void {
  if (this.myForm.invalid) {
    this.myForm.markAllAsTouched();  // muestra todos los errores
    return;
  }
  console.log(this.myForm.value);    // posteo simulado
  this.myForm.reset({ price: 0, inStorage: 0 });
}
```

```html
<form [formGroup]="myForm" (ngSubmit)="onSave()">
  ...
  <button type="submit">Guardar</button>
</form>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `.touched` | El campo fue visitado por el usuario |
| `markAllAsTouched()` | Marca todos los controles como tocados de golpe |
| `(ngSubmit)` | Evento del formulario reactivo (incluye `preventDefault`) |
| `myForm.invalid` | `true` si alguna validación no pasa |
| `myForm.reset(obj?)` | Resetea valores, pristine y touched; acepta valores por defecto |

## Resumen final
La combinación de `touched` en `isValidField()` + `markAllAsTouched()` en `onSave()` + `(ngSubmit)` produce la experiencia correcta: errores silenciosos hasta que el usuario interactúa, y aparición masiva de errores al intentar guardar un formulario incompleto.
