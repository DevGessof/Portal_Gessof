# Lección 17 – AsyncPipe (con Promesas)

## ¿Qué se aprende en esta lección?
Se presenta `AsyncPipe`, que permite manejar **Promesas** directamente en el template sin necesidad de suscribirse manualmente en el componente. Se aprende a mostrar un estado de carga mientras la promesa está pendiente y a obtener el valor resuelto con `@if ... as`.

## Puntos clave explicados
- `AsyncPipe` se suscribe automáticamente a una Promesa u Observable y devuelve el valor cuando está disponible.
- Mientras la promesa está **pendiente**, `async` devuelve `null`.
- El patrón `@if (promesa | async; as valor)` captura el resultado resuelto en la variable `valor`.
- El bloque `@else` se muestra mientras la promesa no ha resuelto (estado de carga).
- Si la promesa es **rechazada** (`reject`), el error aparece en consola pero el template no muestra nada; se recomienda manejar errores manualmente en el componente.
- Se importa `AsyncPipe` desde `@angular/common`.

## Ejemplo sencillo
```typescript
// uncommon-page.component.ts
import { AsyncPipe } from '@angular/common';

@Component({ imports: [AsyncPipe] })
export class UncommonPageComponent {
  // Promesa que resuelve en 3 segundos
  promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Datos cargados correctamente');
      // reject('Algo salió mal');  // para probar el rechazo
    }, 3000);
  });
}
```

```html
@if (promiseValue | async; as value) {
  <p>{{ value }}</p>
} @else {
  <p>Cargando datos...</p>
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `async` / `AsyncPipe` | Pipe que resuelve Promesas y Observables en el template |
| `@if (... \| async; as valor)` | Patrón para capturar el valor resuelto |
| `@else` | Bloque mostrado mientras la promesa está pendiente |
| `null` | Valor que devuelve `async` mientras espera |
| `Promise` / `resolve` / `reject` | API nativa de JavaScript para operaciones asíncronas |
| Manejo de errores | Un `reject` no se refleja en el template; se recomienda manejarlo en el componente |

## Resumen final
`AsyncPipe` simplifica el trabajo con Promesas en el template: elimina el boilerplate de `.then()` en el componente y gestiona automáticamente el estado pendiente/resuelto. Para rechazos, conviene manejar el error en el componente antes de exponer la promesa al template.
