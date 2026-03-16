# Lección 07 – Decimal, Percent y Currency Pipes

## ¿Qué se aprende en esta lección?
Se exploran los pipes numéricos de Angular: `number` (DecimalPipe), `percent` (PercentPipe) y `currency` (CurrencyPipe). Se aprende a controlar el formato de decimales con la cadena `digitsInfo` y a personalizar la moneda y su símbolo.

## Puntos clave explicados
- **`DecimalPipe`** se usa con el nombre `number` en el template.
  - Formato `digitsInfo`: `"minEnteros.minDecimales-maxDecimales"` → ej. `"1.2-2"`.
- **`PercentPipe`** multiplica el valor por 100 y añade `%`.
  - También acepta `digitsInfo` para controlar decimales.
- **`CurrencyPipe`** formatea un número como valor monetario.
  - Parámetros: `currencyCode` (ej. `'USD'`, `'CAD'`, `'HND'`), `display` (`'symbol'`, `'symbol-narrow'`, `'code'`), `digitsInfo`.
- El **locale** activo afecta los separadores (punto vs. coma) en todos los pipes numéricos.
- Los pipes **no mutan** el dato original; solo cambian la presentación.

## Ejemplo sencillo
```typescript
// numbers-page.component.ts
import { DecimalPipe, PercentPipe, CurrencyPipe } from '@angular/common';

@Component({ imports: [DecimalPipe, PercentPipe, CurrencyPipe] })
export class NumbersPageComponent {
  piValue    = signal(3.14159265);
  discount   = signal(0.1523);
  salary     = signal(1234.5);
}
```

```html
<!-- numbers-page.component.html -->
<p>{{ piValue()  | number:'1.2-4' }}</p>       <!-- 3.1416  -->
<p>{{ discount() | percent:'1.2-2' }}</p>       <!-- 15.23%  -->
<p>{{ salary()   | currency:'CAD':'symbol-narrow':'1.2-2' }}</p>  <!-- $1,234.50 -->
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `number` / `DecimalPipe` | Pipe de números decimales |
| `percent` / `PercentPipe` | Pipe de porcentajes (×100 + %) |
| `currency` / `CurrencyPipe` | Pipe de moneda con código y símbolo |
| `digitsInfo` (`"min.min-max"`) | Cadena de formato para decimales |
| `currencyCode` | Código ISO de moneda: `'USD'`, `'CAD'`… |
| `display` | `'symbol'`, `'symbol-narrow'`, `'code'` |
| Locale | Determina separadores y formato regional |

## Resumen final
`number`, `percent` y `currency` formatean valores numéricos en el template con control preciso sobre decimales y símbolo de moneda. El locale activo influye en los separadores, pero en todos los casos el valor original permanece sin cambios.
