# Lección 16 – KeyValuePipe

## ¿Qué se aprende en esta lección?
Se aprende a usar `KeyValuePipe` para convertir un objeto literal (o un `Map`) en un arreglo de pares `{ key, value }`, lo que permite iterarlo con `@for` en el template. Es la solución para cuando se necesita recorrer las propiedades de un objeto directamente en la vista.

## Puntos clave explicados
- Los objetos literales de JavaScript **no son iterables**, por lo que no se pueden usar directamente con `@for`.
- `KeyValuePipe` transforma el objeto en un arreglo de pares `{ key: string, value: any }`.
- Dentro del `@for` se accede a cada par con `item.key` e `item.value`.
- Se puede combinar con `TitleCasePipe` para capitalizar las claves al mostrarlas.
- También funciona con `Map` y `Set` de JavaScript.
- Por defecto el pipe ordena las claves alfabéticamente; se puede personalizar pasando una función comparadora.
- Se importa `KeyValuePipe` desde `@angular/common`.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { KeyValuePipe, TitleCasePipe } from '@angular/common';

@Component({ imports: [KeyValuePipe, TitleCasePipe] })
export class UncommonPageComponent {
  profile = signal({
    name:    'Fernando',
    age:     35,
    country: 'México',
  });
}
```

```html
<ul>
  @for (item of profile() | keyvalue; track item.key) {
    <li>
      <strong>{{ item.key | titlecase }}:</strong> {{ item.value }}
    </li>
  }
</ul>
<!--
  Age:     35
  Country: México
  Name:    Fernando
-->
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `keyvalue` / `KeyValuePipe` | Transforma objeto en arreglo de pares clave-valor |
| `item.key` / `item.value` | Acceso a la clave y el valor de cada par |
| `TitleCasePipe` | Encadenable para capitalizar las claves |
| `Map` / `Set` | También compatibles con `KeyValuePipe` |
| Orden alfabético | Comportamiento por defecto del pipe |
| Función comparadora | Argumento opcional para personalizar el orden |

## Resumen final
`KeyValuePipe` resuelve la limitación de los objetos literales ante `@for`. Al convertirlos en pares iterables, permite mostrar propiedades de un objeto directamente en el template, y se combina fácilmente con otros pipes como `titlecase` para refinar la presentación.
