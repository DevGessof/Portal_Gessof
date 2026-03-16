# Seccion 5 - Leccion 05: RouterLinkActive

---

## 1. Titulo de la leccion

**Resaltar el enlace activo con RouterLinkActive y routerLinkActiveOptions**

---

## 2. Que se aprende en esta leccion

Se usa la directiva `RouterLinkActive` para agregar automaticamente una clase CSS al enlace de la ruta activa, y se configura la opcion `exact` para evitar que rutas padre se marquen como activas en rutas hijas.

---

## 3. Puntos clave explicados

- **`RouterLinkActive`:** Directiva que agrega una clase CSS al elemento cuando la ruta del `RouterLink` esta activa. Se importa de `@angular/router`.
- **Como funciona:** Angular fisicamente agrega y quita la clase al anchor tag segun la ruta activa en el URL.
- **Problema sin `exact`:** La ruta raiz `/` siempre esta activa como prefijo de cualquier otra ruta (ej: `/hero` tambien contiene `/`). Por eso el enlace del Contador aparece marcado incluso al estar en Hero.
- **`[routerLinkActiveOptions]="{ exact: true }`:** Fuerza que la clase solo se aplique si la ruta coincide exactamente con el path definido, no como prefijo.
- **Forma con y sin llaves cuadradas:** `routerLinkActive="active"` y `[routerLinkActive]="'active'"` son equivalentes. Las llaves cuadradas se usan cuando el valor viene de una variable o senal.

---

## 4. Ejemplo sencillo

```typescript
// navbar.component.ts
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}
```

```html
<!-- navbar.component.html -->
<nav>
  <a routerLink="/"
     routerLinkActive="active"
     [routerLinkActiveOptions]="{ exact: true }">
    Contador
  </a>
  <a routerLink="/hero"
     routerLinkActive="active">
    Hero
  </a>
</nav>
```

```css
/* navbar.component.css */
nav a.active {
  color: red;
  text-decoration: underline;
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `RouterLinkActive` | Directiva que agrega una clase CSS cuando la ruta del enlace esta activa |
| `routerLinkActive="clase"` | Nombre de la clase CSS que se aplica cuando la ruta esta activa |
| `[routerLinkActiveOptions]="{ exact: true }"` | Fuerza coincidencia exacta del path; evita que `/` se active en todas las rutas |
| Clase `active` | Nombre de clase comun por convencion; puede ser cualquier nombre |

---

## 6. Resumen final en pocas palabras

`RouterLinkActive` agrega y quita una clase CSS automaticamente segun la ruta activa. Con `{ exact: true }` en `routerLinkActiveOptions`, la clase solo se aplica si el path coincide exactamente, evitando que la ruta raiz aparezca activa en todas las paginas.
