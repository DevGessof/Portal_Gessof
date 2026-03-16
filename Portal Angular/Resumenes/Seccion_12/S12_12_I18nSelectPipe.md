# Lección 12 – I18nSelectPipe

## ¿Qué se aprende en esta lección?
Se aprende a usar `I18nSelectPipe` para seleccionar dinámicamente una cadena de texto según el valor de una expresión, típicamente el género de una persona. Es útil para construir frases gramaticalmente correctas sin estructuras `@if`/`@else`.

## Puntos clave explicados
- `I18nSelectPipe` recibe dos argumentos: el **valor a evaluar** y un **mapa de selección**.
- El mapa es un objeto literal donde cada clave es un posible valor y su valor es el texto a mostrar.
- Se puede incluir la clave `'other'` como caso por defecto.
- Se crean dos objetos cliente con propiedad `gender: 'male' | 'female'` y una señal `client` que alterna entre ellos.
- Un botón llama a `changeClient()` que hace toggle entre `client1` y `client2`.
- Se importa `I18nSelectPipe` desde `@angular/common`.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { I18nSelectPipe } from '@angular/common';

@Component({ imports: [I18nSelectPipe] })
export class UncommonPageComponent {
  client1 = { name: 'Fernando', gender: 'male' };
  client2 = { name: 'Melissa', gender: 'female' };

  client = signal(this.client1);

  // Mapa de selección
  invitationMap: Record<string, string> = {
    male:   'invitarlo',
    female: 'invitarla',
    other:  'invitarle',
  };

  changeClient() {
    this.client.set(
      this.client() === this.client1 ? this.client2 : this.client1
    );
  }
}
```

```html
<p>
  ¿Deseas
  {{ client().gender | i18nSelect : invitationMap }}
  a cenar?
</p>
<!-- Si gender='male'   → "¿Deseas invitarlo a cenar?" -->
<!-- Si gender='female' → "¿Deseas invitarla a cenar?" -->

<button (click)="changeClient()">Cambiar cliente</button>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `i18nSelect` / `I18nSelectPipe` | Pipe de selección por valor de expresión |
| Mapa de selección | Objeto `{ clave: 'texto', other: 'default' }` |
| `'other'` | Clave especial para el caso por defecto |
| `signal()` / `.set()` | Señal reactiva y su método de actualización |
| Toggle de clientes | Patrón para alternar entre dos valores con una señal |

## Resumen final
`I18nSelectPipe` elimina la necesidad de `@if`/`@else` para frases que cambian según un valor discreto (género, rol, estado). Basta con definir un mapa de selección y aplicar el pipe en el template.
