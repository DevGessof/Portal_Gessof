# Seccion 8 - Leccion 06: viewChild - Tomar Referencias del Template

---

## 1. Titulo de la leccion

**viewChild para obtener referencia al elemento del DOM y escuchar el evento scroll**

---

## 2. Que se aprende en esta leccion

Se aprende a escuchar el evento `(scroll)` en un elemento del template, a controlar el desbordamiento del contenido con `overflow-y-scroll`, y a obtener una referencia directa al elemento HTML con `viewChild` y `ElementRef` para acceder a sus propiedades nativas.

---

## 3. Puntos clave explicados

- **Evento `(scroll)`:** Se escucha en el `div` contenedor igual que cualquier otro evento Angular. Llama al metodo `onScroll($event)` del componente.
- **El scroll de la pagina vs el scroll del div:** Por defecto, el scroll es de toda la pagina, no del div. Para que el scroll sea del div hay que limitar su altura y activar `overflow-y-scroll`.
- **`overflow-y-scroll` (Tailwind: `overflow-y-scroll`):** Hace que el contenido que se desborde del div sea desplazable verticalmente en lugar de desbordarse visualmente.
- **`h-screen` (100vh):** Limita la altura del div al 100% del viewport para que el scroll ocurra dentro del contenedor, no en la pagina completa.
- **Referencia local `#groupDiv`:** Se declara en el elemento HTML del template para poder referenciarlo desde el componente con `viewChild`.
- **`viewChild('groupDiv')`:** Primitiva de Angular (introducida en v17+) que retorna una senal con la referencia al elemento marcado con la referencia local. Para un solo elemento. `viewChildren` retorna todos los que coincidan.
- **`ElementRef<HTMLDivElement>`:** Tipo del objeto retornado por `viewChild`. La propiedad `.nativeElement` da acceso al elemento HTML nativo con tipado estricto.
- **`?` (optional chaining):** La referencia puede ser `undefined` si el elemento aun no fue renderizado o esta en una condicion falsa. Se usa `?.nativeElement` para evitar errores.

---

## 4. Ejemplo sencillo

```typescript
// trending-page.component.ts
import { viewChild, ElementRef } from '@angular/core';

export default class TrendingPageComponent {
  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    console.log(scrollDiv); // acceso al elemento HTML nativo
  }
}
```

```html
<!-- trending-page.component.html -->
<div
  #groupDiv
  class="h-screen overflow-y-scroll"
  (scroll)="onScroll($event)"
>
  <!-- contenido de la galeria -->
</div>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `(scroll)` | Evento nativo del navegador para detectar movimiento de scroll |
| `overflow-y-scroll` | Tailwind: activa el scroll vertical dentro del contenedor |
| `h-screen` | Tailwind: altura igual al 100% del viewport |
| `#groupDiv` | Referencia local al elemento en el template |
| `viewChild('groupDiv')` | Primitiva de Angular que retorna senal con la referencia al elemento |
| `viewChildren` | Variante de `viewChild` que retorna todos los elementos coincidentes |
| `ElementRef<HTMLDivElement>` | Tipo que envuelve el elemento HTML; `.nativeElement` es el elemento real |
| `?.nativeElement` | Optional chaining: evita errores si la referencia es undefined |

---

## 6. Resumen final en pocas palabras

Para detectar el scroll dentro de un div hay que limitar su altura con `h-screen` y activar `overflow-y-scroll`. `viewChild` retorna como senal la referencia al elemento marcado con `#groupDiv` en el template. Con `.nativeElement` tipado como `HTMLDivElement` se accede a todas sus propiedades de scroll con tipado estricto.
