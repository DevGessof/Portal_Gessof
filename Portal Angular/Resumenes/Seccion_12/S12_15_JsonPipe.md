# Lección 15 – JsonPipe

## ¿Qué se aprende en esta lección?
Se aprende a usar `JsonPipe` para mostrar objetos y arreglos como texto JSON formateado en el template. Es especialmente útil durante el desarrollo para inspeccionar el estado de señales y objetos sin salir del navegador.

## Puntos clave explicados
- `JsonPipe` convierte cualquier objeto o arreglo en su representación JSON legible, con indentación.
- Se usa principalmente para **depuración**: ver qué contiene una señal o variable en tiempo real.
- Los pipes se pueden **encadenar** con `|`: el resultado de un pipe pasa como entrada al siguiente.
  - Ejemplo: `valor | keyvalue | json` — primero transforma a pares clave-valor, luego muestra el JSON resultante.
- El **orden de los pipes importa**: cambiar el orden puede producir resultados diferentes.
- También se puede encadenar con otros pipes como `uppercase`: `nombre | uppercase | json` (aunque poco práctico, ilustra el concepto).
- Se importa `JsonPipe` desde `@angular/common`.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { JsonPipe } from '@angular/common';

@Component({ imports: [JsonPipe] })
export class UncommonPageComponent {
  profile = signal({
    name: 'Fernando',
    age: 35,
    skills: ['Angular', 'TypeScript']
  });
}
```

```html
<!-- Inspeccionar el objeto completo -->
<pre>{{ profile() | json }}</pre>
<!--
{
  "name": "Fernando",
  "age": 35,
  "skills": ["Angular", "TypeScript"]
}
-->

<!-- Encadenamiento: primero keyvalue, luego json -->
<pre>{{ profile() | keyvalue | json }}</pre>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `json` / `JsonPipe` | Serializa objetos a JSON formateado |
| Encadenamiento de pipes (`\|`) | La salida de un pipe es la entrada del siguiente |
| Orden de pipes | Importa: el resultado varía según el orden |
| `<pre>` | Etiqueta HTML recomendada para preservar el formato JSON |
| Uso en depuración | Ver el estado de señales u objetos directamente en la vista |

## Resumen final
`JsonPipe` es la herramienta de depuración visual por excelencia en Angular: convierte cualquier objeto en JSON legible en el template. Su verdadero potencial se muestra al encadenarlo con otros pipes como `keyvalue`, aprovechando la composición de pipes.
