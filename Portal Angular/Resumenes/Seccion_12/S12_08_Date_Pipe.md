# Lección 08 – Date Pipe

## ¿Qué se aprende en esta lección?
Se trabaja con `DatePipe` para mostrar fechas con distintos formatos predefinidos y personalizados. Además, se implementa un reloj en tiempo real usando `setInterval` dentro de un `effect`, con limpieza automática mediante `onCleanup`.

## Puntos clave explicados
- `DatePipe` se importa de `@angular/common` y se usa con el nombre `date` en el template.
- Formatos predefinidos: `short`, `medium`, `long`, `full`.
- Formatos personalizados: cadenas como `'yyyy/MM/dd'`, `'HH:mm:ss'`.
- Se puede pasar la **zona horaria** como segundo argumento: `date:'short':'UTC'`.
- Para actualizar la fecha cada segundo se usa `setInterval` dentro de `effect()`.
- `onCleanup` (callback recibido por `effect`) ejecuta `clearInterval` cuando el componente se destruye, evitando fugas de memoria.

## Ejemplo sencillo
```typescript
// numbers-page.component.ts
import { DatePipe } from '@angular/common';
import { signal, effect } from '@angular/core';

@Component({ imports: [DatePipe] })
export class NumbersPageComponent {
  currentDate = signal(new Date());

  constructor() {
    effect((onCleanup) => {
      const intervalId = setInterval(() => {
        this.currentDate.set(new Date());
      }, 1000);

      onCleanup(() => clearInterval(intervalId));
    });
  }
}
```

```html
<p>{{ currentDate() | date:'short' }}</p>         <!-- 1/1/24, 12:00 AM -->
<p>{{ currentDate() | date:'full' }}</p>           <!-- Monday, January 1, 2024 ... -->
<p>{{ currentDate() | date:'HH:mm:ss':'UTC' }}</p> <!-- 00:00:00 (UTC) -->
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `date` / `DatePipe` | Pipe de fechas |
| `short` / `medium` / `long` / `full` | Formatos predefinidos |
| `'yyyy/MM/dd'` | Ejemplo de formato personalizado |
| Segundo argumento (timezone) | Zona horaria: `'UTC'`, `'America/New_York'`… |
| `effect()` | Efecto reactivo de Angular que se re-ejecuta al cambiar señales |
| `onCleanup` | Callback para limpiar recursos cuando el efecto se destruye |
| `setInterval` / `clearInterval` | Control de temporizador en JavaScript |

## Resumen final
`DatePipe` formatea fechas con formatos predefinidos o personalizados y soporta zonas horarias. Para actualizar una fecha en tiempo real se combina `signal` + `effect` + `setInterval`, y se usa `onCleanup` para limpiar el intervalo al destruir el componente.
