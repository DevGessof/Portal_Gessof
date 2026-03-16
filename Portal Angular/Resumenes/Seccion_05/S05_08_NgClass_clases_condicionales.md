# Seccion 5 - Leccion 08: ngClass - Clases de CSS de Forma Condicional

---

## 1. Titulo de la leccion

**Aplicar clases CSS condicionalmente con [class.nombre] y ngClass**

---

## 2. Que se aprende en esta leccion

Se aprenden dos formas de aplicar clases CSS de manera condicional en el template: el binding `[class.nombre]` y la directiva `ngClass`. Ambas evaluan una condicion booleana para decidir si agregan o quitan la clase.

---

## 3. Puntos clave explicados

- **`[class.nombre-clase]="condicion"`:** Forma directa de agregar o quitar una clase. Si la condicion es `true` se aplica la clase; si es `false` se quita. No requiere importar nada.
- **`[ngClass]="objeto"`:** Directiva que acepta un objeto donde las llaves son nombres de clases y los valores son condiciones booleanas. Requiere importar `NgClass` de `@angular/common`.
- **Multiples clases:** Con `[class.clase1]` se puede aplicar una clase; con `ngClass` se pueden aplicar varias clases a la vez mediante un objeto.
- **Senal computada como fuente de clases:** Se puede crear una senal `computed()` que devuelva el objeto de clases para `ngClass`, aunque en iteraciones es mas practico usar `[class.nombre]` directamente.
- **Recomendacion:** Para condiciones simples dentro de un `@for`, usar `[class.nombre]` es mas directo y no requiere importaciones.

---

## 4. Ejemplo sencillo

```html
<!-- Forma 1: binding directo de clase -->
<strong [class.text-danger]="character.power > 9000"
        [class.text-primary]="character.power < 9000">
  {{ character.power }}
</strong>

<!-- Forma 2: ngClass con objeto -->
<strong [ngClass]="{ 'text-danger': character.power > 9000, 'text-primary': character.power <= 9000 }">
  {{ character.power }}
</strong>
```

```typescript
// Importar NgClass para usar la directiva
import { NgClass } from '@angular/common';

@Component({
  imports: [NgClass],
  ...
})
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `[class.nombre]="condicion"` | Agrega o quita una clase CSS segun una condicion booleana |
| `[ngClass]="objeto"` | Aplica multiples clases condicionalmente con un objeto `{ clase: condicion }` |
| `NgClass` | Directiva de Angular; importar de `@angular/common` |
| `text-danger` | Clase de Bootstrap para texto en rojo |
| `text-primary` | Clase de Bootstrap para texto en azul |
| Senal computada de clases | `computed()` que devuelve un objeto de clases para usar con `ngClass` |

---

## 6. Resumen final en pocas palabras

Para clases condicionales simples, `[class.nombre]` es la opcion mas directa y no requiere importaciones. `ngClass` es util cuando se necesitan aplicar multiples clases a la vez con un objeto de condiciones. Ambas formas son validas y dependen del caso de uso.
