# Lección 15 – Múltiples eventos desde el mismo campo

## ¿Qué se aprende en esta lección?
Se soluciona el problema de que un campo auxiliar dentro de un `<form>` dispara el `ngSubmit` al presionar "Enter", lo que causa un posteo no deseado. Se aprende a manejar múltiples eventos en un mismo input y a prevenir la propagación por defecto desde el template.

## Puntos clave explicados
- **Problema:** el input "Agregar favorito" está físicamente dentro del `<form>`. Cuando el usuario presiona "Enter", el navegador dispara el submit del formulario aunque el input no esté conectado al `FormGroup`. Esto activa `onSubmit()` involuntariamente.
- **Causa:** el evento `submit` del formulario se propaga desde cualquier campo que esté dentro de la etiqueta `<form>`.
- **Solución:** en el evento `(keydown.enter)` del input, además de llamar a `onAddToFavorites()`, se pasa el `$event` y se llama a `$event.preventDefault()` para cancelar la propagación por defecto.
- Angular permite encadenar múltiples sentencias en un mismo binding de evento separándolas con `;` o simplemente llamando a `$event.preventDefault()` dentro del método.
- El botón "Agregar" también debe tener `(click)="onAddToFavorites()"` para que funcione con clic además de "Enter".
- Con `preventDefault()` el campo auxiliar agrega el favorito al presionar "Enter" sin postear el formulario principal.

## Ejemplo sencillo
```typescript
// dynamic-page.component.ts
onAddToFavorites(event?: Event): void {
  event?.preventDefault();           // previene el submit del formulario
  if (this.newFavorite.invalid) return;
  const newGame = this.newFavorite.value;
  this.favoriteGames.push(new FormControl(newGame, Validators.required));
  this.newFavorite.reset();
}
```

```html
<!-- Pasar $event para poder llamar preventDefault() -->
<input [formControl]="newFavorite"
       (keydown.enter)="onAddToFavorites($event)" />
<button type="button" (click)="onAddToFavorites()">Agregar</button>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `(keydown.enter)` | Escucha específicamente la tecla Enter en el input |
| `$event` | Referencia al evento nativo del DOM dentro del binding |
| `$event.preventDefault()` | Cancela el comportamiento por defecto (submit del form) |
| `type="button"` | Evita que un `<button>` dentro de un `<form>` haga submit por defecto |
| Múltiples eventos | Un campo puede tener `(keydown.enter)` y `(click)` al mismo tiempo |

## Resumen final
Cuando un campo auxiliar vive dentro de un `<form>`, "Enter" dispara el submit. La solución es capturar `$event` en el binding de teclado y llamar `preventDefault()` para bloquear la propagación. Esto permite que el campo funcione de forma independiente sin interferir con el formulario reactivo principal.
