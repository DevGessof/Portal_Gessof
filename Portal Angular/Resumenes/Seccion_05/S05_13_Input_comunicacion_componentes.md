# Seccion 5 - Leccion 13: Funcion input() - Comunicacion entre Componentes

---

## 1. Titulo de la leccion

**Pasar datos del componente padre al hijo con input() y Input Signals**

---

## 2. Que se aprende en esta leccion

Se crea el componente `CharacterListComponent`, se extrae la logica del listado y se usa la funcion `input()` de Angular para recibir datos desde el componente padre. Se introduce el concepto de Input Signal y comunicacion padre-hijo.

---

## 3. Puntos clave explicados

- **Angular Schematics:** Extension de VS Code que permite generar componentes con configuracion personalizada (sin estilos, con template externo) desde el menu contextual.
- **Crear `CharacterListComponent`:** Componente dentro de `src/app/components/dragonball/` que se encarga unicamente de mostrar el listado.
- **Mover el HTML del listado:** Se corta el bloque de HTML del listado de la pagina y se pega en el template del nuevo componente.
- **`input()`:** Funcion de Angular (importar de `@angular/core`) que crea un Input Signal. Reemplaza al decorador `@Input()`. Permite al componente hijo recibir valores desde el padre.
- **`input.required<Tipo>()`:** Hace el input obligatorio. Si el padre no lo provee, Angular marca un error en el template.
- **`InputSignal`:** Tipo del valor que devuelve `input()`. Se consume igual que una senal: invocandolo con parentesis en el template.
- **Interfaz en archivo separado:** Se crea `src/app/interfaces/character.interface.ts` para reutilizar la interfaz `Character` entre componentes.
- **Importar `type`:** Al importar solo una interfaz, es buena practica usar `import type { Character }` para que el compilador sepa que es solo un tipo y lo elimine en el bundle.
- **Comunicacion padre -> hijo:** El padre usa `[characters]="characters()"` (llaves cuadradas) para pasar el valor de su senal al hijo.

---

## 4. Ejemplo sencillo

```typescript
// character-list.component.ts
import { Component, input } from '@angular/core';
import type { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.component.html'
})
export class CharacterListComponent {
  characters = input.required<Character[]>(); // input obligatorio
}
```

```html
<!-- character-list.component.html -->
<h3>Listado de personajes</h3>
<ul>
  @for (character of characters(); track character.id) {
    <li>{{ character.name }} - {{ character.power }}</li>
  }
</ul>
```

```html
<!-- dragonball-super-page.component.html -->
<!-- Padre pasa el arreglo al hijo con llaves cuadradas -->
<dragonball-character-list [characters]="characters()" />
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `input<Tipo>()` | Crea un Input Signal opcional; importar de `@angular/core` |
| `input.required<Tipo>()` | Crea un Input Signal obligatorio; error si el padre no lo provee |
| `InputSignal` | Tipo del input signal; se consume con parentesis igual que una senal |
| `[propiedad]="valor"` | Binding de propiedad: envia datos del padre al hijo |
| `import type { ... }` | Importacion de solo tipos; mejor practica para interfaces |
| Angular Schematics | Extension de VS Code para generar componentes con opciones avanzadas |

---

## 6. Resumen final en pocas palabras

`input.required<Tipo>()` crea un Input Signal obligatorio que permite al componente hijo recibir datos del padre. El padre los envia con `[propiedad]="valor"`. Los Input Signals se consumen en el template igual que las senales. Esta es la forma moderna de comunicacion padre-hijo en Angular, reemplazando al decorador `@Input()`.
