# Lección 05 – Pipe personalizado: ToggleCase

## ¿Qué se aprende en esta lección?
Se crea el **primer pipe personalizado** del curso: `toggleCase`. Se aprende la estructura mínima de un pipe Angular, cómo registrarlo en un componente standalone y cómo recibir argumentos adicionales en `transform()`. También se practica el uso de señales para pasar un argumento dinámico al pipe.

## Puntos clave explicados
- Un pipe personalizado es una clase decorada con `@Pipe({ name: 'nombrePipe' })` que implementa la interfaz `PipeTransform`.
- El método obligatorio es `transform(value, ...args)`: recibe el valor a transformar y argumentos opcionales.
- **Ubicación del pipe:** si es de uso genérico en toda la app, se coloca en `src/app/pipes/`; si es específico de un módulo, junto a ese módulo.
- Convención de nombre de archivo: `toggle-case.pipe.ts`.
- Se puede usar un snippet `a-pipe` para generar la estructura base rápidamente.
- El pipe recibe como segundo argumento un `caseType` (ej. `'upper'`, `'lower'`, `'title'`) y devuelve el texto transformado.
- En el template, el `caseType` viene de una señal, lo que hace que el pipe se re-evalúe automáticamente al cambiar.
- En el template **no se puede usar `signal.update()`** directamente (problema de scope en callbacks); la alternativa es usar `signal.set(signal() === ... )` o delegar a un método del componente.

## Ejemplo sencillo
```typescript
// pipes/toggle-case.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'toggleCase', standalone: true })
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, caseType: 'upper' | 'lower' | 'title'): string {
    switch (caseType) {
      case 'upper': return value.toUpperCase();
      case 'lower': return value.toLowerCase();
      case 'title': return value.replace(/\w\S*/g, txt =>
        txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
      default: return value;
    }
  }
}
```

```typescript
// basic-page.component.ts
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({ imports: [ToggleCasePipe] })
export class BasicPageComponent {
  name     = signal('hola mundo');
  caseType = signal<'upper' | 'lower' | 'title'>('lower');

  toggleCase() {
    const order: Array<'upper' | 'lower' | 'title'> = ['upper', 'lower', 'title'];
    const idx = order.indexOf(this.caseType());
    this.caseType.set(order[(idx + 1) % order.length]);
  }
}
```

```html
<p>{{ name() | toggleCase : caseType() }}</p>
<button (click)="toggleCase()">Cambiar casing</button>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `@Pipe({ name: '...' })` | Decorador que define el pipe y su nombre en template |
| `PipeTransform` | Interfaz con el método `transform()` |
| `transform(value, ...args)` | Método central: recibe el dato y argumentos extra |
| `standalone: true` | Hace el pipe usable sin NgModule |
| Carpeta `pipes/` | Ubicación recomendada para pipes de uso global |
| Snippet `a-pipe` | Atajo para generar la estructura base del pipe |

## Resumen final
Crear un pipe personalizado en Angular requiere solo una clase con `@Pipe` y el método `transform()`. `ToggleCasePipe` demuestra el flujo completo: definición, argumento dinámico desde una señal e importación en el componente standalone.
