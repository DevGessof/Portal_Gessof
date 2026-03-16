# Lección 13 – I18nPluralPipe

## ¿Qué se aprende en esta lección?
Se aprende a usar `I18nPluralPipe` para mostrar mensajes gramaticalmente correctos según una cantidad, usando un mapa de casos con claves especiales. También se practica la actualización de una señal de arreglo y el deshabilitar un botón cuando no hay elementos.

## Puntos clave explicados
- `I18nPluralPipe` evalúa un **número** y devuelve el texto del caso que corresponda en el mapa.
- Claves del mapa de pluralización:
  - `'=0'` → exactamente cero
  - `'=1'` → exactamente uno
  - `'other'` → cualquier otro número; el símbolo `#` se reemplaza por el valor actual
- La señal `clients` es un arreglo de nombres de tipo `signal<string[]>`.
- `deleteClient()` usa `clients.update(prev => prev.slice(0, -1))` para eliminar el último elemento.
- El botón de eliminar se deshabilita con `[disabled]="clients().length === 0"`.
- Se importa `I18nPluralPipe` desde `@angular/common`.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { I18nPluralPipe } from '@angular/common';

@Component({ imports: [I18nPluralPipe] })
export class UncommonPageComponent {
  clients = signal(['Ana', 'Luis', 'María', 'Pedro']);

  clientsMap: Record<string, string> = {
    '=0':    'No tenemos ningún cliente esperando.',
    '=1':    'Tenemos un cliente esperando.',
    'other': 'Tenemos # clientes esperando.',
  };

  deleteClient() {
    this.clients.update(prev => prev.slice(0, -1));
  }
}
```

```html
<p>{{ clients().length | i18nPlural : clientsMap }}</p>
<!-- 4 clientes → "Tenemos 4 clientes esperando." -->
<!-- 1 cliente  → "Tenemos un cliente esperando." -->
<!-- 0 clientes → "No tenemos ningún cliente esperando." -->

<button (click)="deleteClient()" [disabled]="clients().length === 0">
  Eliminar cliente
</button>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `i18nPlural` / `I18nPluralPipe` | Pipe de pluralización basado en número |
| `'=0'` / `'=1'` / `'other'` | Claves del mapa de casos |
| `#` | Placeholder reemplazado por el valor numérico |
| `signal<string[]>()` | Señal de arreglo tipada |
| `clients.update(prev => prev.slice(0,-1))` | Elimina el último elemento de forma inmutable |
| `[disabled]` | Binding para deshabilitar el botón condicionalmente |

## Resumen final
`I18nPluralPipe` genera mensajes pluralizados correctamente usando un mapa de casos con `=0`, `=1` y `other`. Combinado con señales de arreglo y `update`, permite construir interfaces reactivas que describen cantidades de forma natural.
