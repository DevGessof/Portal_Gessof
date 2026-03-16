# Seccion 5 - Leccion 09: @if - Mostrar Elementos de Forma Condicional

---

## 1. Titulo de la leccion

**Mostrar u ocultar elementos con @if y @else**

---

## 2. Que se aprende en esta leccion

Se usa la directiva estructural `@if` del nuevo control flow de Angular para mostrar u ocultar elementos del DOM segun una condicion. Se compara con `*ngIf` y se muestra el uso de `@else`.

---

## 3. Puntos clave explicados

- **`@if`:** Nuevo control flow de Angular. Si la condicion es `true`, el elemento existe en el DOM; si es `false`, se elimina fisicamente (no solo se oculta con CSS).
- **Diferencia con `*ngIf`:** La directiva `*ngIf` tradicional sigue funcionando y no esta obsoleta, pero tiene limitaciones. No se puede combinar con `*ngFor` en el mismo elemento. El `@if` resuelve este problema.
- **`@else`:** Bloque que se ejecuta cuando la condicion del `@if` es `false`. Debe ir inmediatamente despues del cierre del `@if`.
- **`@else if`:** Permite encadenar multiples condiciones, similar a un `if / else if / else` de JavaScript.
- **El elemento no existe en el HTML:** A diferencia de ocultar con `display: none`, cuando el `@if` es falso, el elemento deja de existir en el DOM.
- **Directivas estructurales disponibles:** Ademas de `@if` y `@for`, Angular tiene `@empty` (dentro de `@for`) y `@switch` para casos mas complejos.

---

## 4. Ejemplo sencillo

```html
<!-- Solo muestra personajes con poder > 500 -->
@for (character of characters(); track character.id) {
  @if (character.power > 500) {
    <li>{{ character.name }} - {{ character.power }}</li>
  } @else {
    <li><strong>Aqui no hay nadie</strong></li>
  }
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `@if (condicion) { }` | Muestra el bloque solo si la condicion es verdadera |
| `@else { }` | Bloque alternativo cuando la condicion del `@if` es falsa |
| `@else if (condicion) { }` | Condicion adicional encadenada |
| `*ngIf` | Forma tradicional; sigue funcionando pero no se puede combinar con `*ngFor` en el mismo elemento |
| Eliminacion del DOM | Con `@if`, el elemento deja de existir fisicamente; no es solo `display: none` |

---

## 6. Resumen final en pocas palabras

`@if` es la forma moderna de mostrar u ocultar elementos en Angular. Cuando la condicion es falsa, el elemento se elimina fisicamente del DOM. Admite `@else` y `@else if`. No tiene la limitacion de `*ngIf` de no poder combinarse con `*ngFor` en el mismo elemento.
