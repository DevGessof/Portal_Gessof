# Lección 14 – Agregar y eliminar controles de formulario

## ¿Qué se aprende en esta lección?
Se implementan los métodos para agregar y eliminar juegos de la lista dinámica. Se introduce un `FormControl` **independiente** (fuera del `FormGroup`) para el campo "Agregar favorito", y se usan `push()` y `removeAt()` del `FormArray`.

## Puntos clave explicados
- Un `FormControl` puede existir **fuera de un `FormGroup`**: se crea como propiedad del componente y se enlaza al input con `[formControl]="newFavorite"` (binding dinámico, no `formControlName`).
- Este control independiente permite aplicar validaciones (p. ej. `Validators.required`) al campo auxiliar sin que forme parte del formulario principal.
- **Agregar elemento:** `onAddToFavorites()`:
  1. Verificar que `newFavorite.invalid` → si no es válido, `return`.
  2. Leer `newFavorite.value`.
  3. Llamar a `favoriteGames.push(new FormControl(value, Validators.required))`.
  4. Llamar a `newFavorite.reset()` para limpiar el campo y restaurar su estado pristine.
- **Eliminar elemento:** `onDeleteFavorite(index: number)`:
  - Llamar a `favoriteGames.removeAt(index)`.
- El botón "Guardar" puede deshabilitarse con `[disabled]="myForm.invalid"` (opcional).
- El método `onSubmit()` llama a `myForm.markAllAsTouched()` para mostrar todos los errores, igual que en el formulario básico.

## Ejemplo sencillo
```typescript
// dynamic-page.component.ts
newFavorite = new FormControl('', Validators.required);

onAddToFavorites(): void {
  if (this.newFavorite.invalid) return;
  const newGame = this.newFavorite.value;
  this.favoriteGames.push(new FormControl(newGame, Validators.required));
  this.newFavorite.reset();
}

onDeleteFavorite(index: number): void {
  this.favoriteGames.removeAt(index);
}
```

```html
<!-- Campo auxiliar independiente -->
<input [formControl]="newFavorite" placeholder="Agregar favorito"
       (keydown.enter)="onAddToFavorites()" />
<button (click)="onAddToFavorites()">Agregar</button>

<!-- Botón eliminar dentro del @for -->
<button (click)="onDeleteFavorite(i)">Eliminar</button>

<!-- Botón guardar deshabilitado si el formulario no es válido -->
<button type="submit" [disabled]="myForm.invalid">Guardar</button>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `[formControl]` | Enlaza un control independiente (no pertenece al FormGroup) |
| `FormArray.push(control)` | Agrega un nuevo control al arreglo |
| `FormArray.removeAt(index)` | Elimina el control en la posición indicada |
| `control.reset()` | Limpia valor, pristine y touched del control |
| `[disabled]="myForm.invalid"` | Deshabilita el botón mientras el formulario no sea válido |

## Resumen final
`[formControl]` permite crear controles reactivos aislados del formulario principal, útiles como campos auxiliares. `push()` y `removeAt()` son los métodos del `FormArray` para agregar y eliminar controles dinámicamente. El ciclo completo es: validar control auxiliar → agregar al arreglo → resetear auxiliar.
