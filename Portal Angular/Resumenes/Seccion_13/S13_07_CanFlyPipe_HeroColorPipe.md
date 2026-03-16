# Lección 07 – Pipes personalizados: CanFlyPipe y HeroColorPipe

## ¿Qué se aprende en esta lección?
Se crean dos pipes personalizados para la tabla de héroes: `CanFlyPipe`, que convierte un booleano en texto legible, y `HeroColorPipe`, que devuelve un color CSS según el nombre del héroe. Además, se muestra que los pipes pueden usarse dentro de **binding de atributos** `[style.color]`, no solo en interpolación.

## Puntos clave explicados
- **`CanFlyPipe`:** recibe un `boolean` y devuelve una cadena como `'Sí vuela'` o `'No vuela'`.
  - Se aplica a `hero.canFly` en la columna correspondiente de la tabla.
  - Se añaden clases CSS dinámicas con `[class.text-success]` y `[class.text-accent]` según el valor booleano.
- **`HeroColorPipe`:** recibe el nombre (o color) del héroe y devuelve un color CSS válido (`'blue'`, `'black'`…).
  - Se usa dentro de un **binding de estilo**: `[style.color]="hero.color | heroColor"`.
  - Demuestra que el resultado de un pipe puede ser el **valor de un binding**, no solo texto visible.
- Ambos pipes se crean en la carpeta `pipes/` con la misma estructura: `@Pipe` + `PipeTransform` + `transform()`.

## Ejemplo sencillo
```typescript
// pipes/can-fly.pipe.ts
@Pipe({ name: 'canFly', standalone: true })
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): string {
    return canFly ? 'Sí vuela' : 'No vuela';
  }
}
```

```typescript
// pipes/hero-color.pipe.ts
@Pipe({ name: 'heroColor', standalone: true })
export class HeroColorPipe implements PipeTransform {
  transform(color: string): string {
    // Mapeo simple: devuelve el color CSS o un valor por defecto
    const colorMap: Record<string, string> = {
      black:  '#1a1a1a',
      blue:   '#3b82f6',
      purple: '#a855f7',
    };
    return colorMap[color] ?? 'gray';
  }
}
```

```html
<!-- Columna ¿Puede volar? -->
<td>
  <span
    [class.text-success]="hero.canFly"
    [class.text-accent]="!hero.canFly"
    class="text-xs w-44">
    {{ hero.canFly | canFly }}
  </span>
</td>

<!-- Uso del pipe en binding de estilo -->
<td [style.color]="hero.color | heroColor">
  {{ hero.name }}
</td>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `canFly` / `CanFlyPipe` | Convierte `boolean` en texto descriptivo |
| `heroColor` / `HeroColorPipe` | Devuelve un color CSS según el valor recibido |
| `[style.color]="... \| pipe"` | Pipe usado como valor de binding de estilo |
| `[class.text-success]` | Binding condicional de clase CSS |
| `Record<string, string>` | Tipo TypeScript para objetos clave-valor |

## Resumen final
`CanFlyPipe` y `HeroColorPipe` muestran dos usos clave de los pipes personalizados: transformar texto para el usuario y proveer valores para bindings de estilo. Los pipes no son exclusivos de la interpolación `{{ }}`; pueden usarse en cualquier expresión de binding Angular.
