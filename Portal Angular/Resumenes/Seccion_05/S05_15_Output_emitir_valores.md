# Seccion 5 - Leccion 15: Output - Emitir Valores

---

## 1. Titulo de la leccion

**Comunicacion hijo-padre con output() y EventEmitter**

---

## 2. Que se aprende en esta leccion

Se usa la funcion `output()` de Angular para que el componente hijo emita un evento con datos hacia el componente padre. El padre escucha el evento con parentesis y llama a su metodo para actualizar el arreglo de personajes.

---

## 3. Puntos clave explicados

- **`output<Tipo>()`:** Funcion de Angular (importar de `@angular/core`) que crea un output tipado. Es la forma moderna de emitir eventos desde un componente hijo. Reemplaza al decorador `@Output()` con `EventEmitter`.
- **`output.emit(valor)`:** Metodo para disparar el evento con el valor que se quiere enviar al padre.
- **`@Output()` con `EventEmitter`:** Forma tradicional. Sigue funcionando pero se recomienda usar la funcion `output()` con letra minuscula.
- **Convension de nombres:** No se recomienda prefijar el output con `on` (ej: `onNewCharacter`) porque ya sera evidente por el uso de parentesis en el template del padre.
- **Escuchar el evento en el padre:** En el template del padre se usa `(nombreEvento)="metodo($event)"`. El `$event` contiene el valor emitido.
- **El padre recibe el personaje:** El metodo `addCharacter(character: Character)` en el padre recibe el personaje emitido por el hijo y lo agrega al arreglo con `characters.update()`.
- **Flujo completo padre-hijo-padre:** El padre provee datos al hijo con `input()` (llaves cuadradas `[ ]`), el hijo emite eventos al padre con `output()` (parentesis `( )`).

---

## 4. Ejemplo sencillo

```typescript
// character-add.component.ts
import { Component, signal, output } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

export class CharacterAddComponent {
  name  = signal('');
  power = signal(0);

  // Output: el hijo emite un Character al padre
  newCharacter = output<Character>();

  addCharacter(): void {
    if (!this.name() || this.power() <= 0) return;
    const character: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power()
    };
    this.newCharacter.emit(character);
    this.name.set('');
    this.power.set(0);
  }
}
```

```html
<!-- dragonball-super-page.component.html -->
<!-- El padre escucha el output con parentesis -->
<dragonball-character-add (newCharacter)="addCharacter($event)" />
```

```typescript
// dragonball-super-page.component.ts
addCharacter(character: Character): void {
  this.characters.update(list => [...list, character]);
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `output<Tipo>()` | Crea un output tipado; importar de `@angular/core` |
| `output.emit(valor)` | Dispara el evento con el valor que recibira el padre |
| `(nombreEvento)="metodo($event)"` | Escucha el output en el padre; `$event` contiene el valor emitido |
| `@Output()` con `EventEmitter` | Forma tradicional; sigue funcionando pero ya no es la recomendada |
| `[ ]` (llaves cuadradas) | Envia datos del padre al hijo (input) |
| `( )` (parentesis) | Escucha eventos del hijo en el padre (output) |
| `.subscribe()` | Metodo del output para suscribirse a todos sus cambios; no se usa en templates |

---

## 6. Resumen final en pocas palabras

`output<Tipo>()` crea un canal de comunicacion del hijo al padre. El hijo llama a `.emit(valor)` para enviar datos; el padre los escucha con `(evento)="metodo($event)"`. Junto con `input()`, completa el patron de comunicacion bidireccional: `[ ]` para pasar datos hacia abajo, `( )` para emitir eventos hacia arriba.
