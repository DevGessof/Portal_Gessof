# Lección 06 – UpperCase, LowerCase y TitleCase Pipes

## ¿Qué se aprende en esta lección?
Se presentan los tres pipes de transformación de texto más básicos de Angular: `lowercase`, `uppercase` y `titlecase`. Se aprende a importarlos, usarlos en el template y entender que **no modifican** la señal o variable original.

## Puntos clave explicados
- Los tres pipes se importan desde `@angular/common`:
  - `LowerCasePipe` → convierte todo el texto a minúsculas.
  - `UpperCasePipe` → convierte todo el texto a mayúsculas.
  - `TitleCasePipe` → pone en mayúscula la primera letra de cada palabra.
- Se crean señales para los valores de ejemplo: `nameLower`, `nameUpper`, `fullName`.
- En el template se aplica el pipe con `|` seguido del nombre del pipe.
- El **dato original** en la señal permanece intacto; el pipe solo cambia la visualización.
- Se deben declarar los pipes en el arreglo `imports` del decorador `@Component` (componentes standalone).

## Ejemplo sencillo
```typescript
// basic-page.component.ts
import { LowerCasePipe, UpperCasePipe, TitleCasePipe } from '@angular/common';

@Component({
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
})
export class BasicPageComponent {
  nameLower = signal('ANGULAR PIPES');
  nameUpper = signal('angular pipes');
  fullName  = signal('fernando herrera');
}
```

```html
<!-- basic-page.component.html -->
<p>{{ nameLower() | lowercase }}</p>   <!-- angular pipes -->
<p>{{ nameUpper() | uppercase }}</p>   <!-- ANGULAR PIPES -->
<p>{{ fullName()  | titlecase }}</p>   <!-- Fernando Herrera -->
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `lowercase` | Pipe: todo en minúsculas |
| `uppercase` | Pipe: todo en mayúsculas |
| `titlecase` | Pipe: primera letra de cada palabra en mayúscula |
| `LowerCasePipe` / `UpperCasePipe` / `TitleCasePipe` | Clases a importar de `@angular/common` |
| `signal()` | Señal de Angular para valores reactivos |
| `imports: [...]` | Arreglo donde se declaran pipes en componentes standalone |

## Resumen final
`lowercase`, `uppercase` y `titlecase` son los pipes de texto más simples de Angular. Se importan de `@angular/common`, se añaden al arreglo `imports` del componente y se aplican con `|` en el template, sin alterar el valor original de la señal.
