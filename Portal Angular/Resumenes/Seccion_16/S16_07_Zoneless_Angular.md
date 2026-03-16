# Lección 07 – Zoneless Angular

## ¿Qué se aprende en esta lección?
Se explica qué es **Zoneless Angular**, por qué Angular quiere eliminar la dependencia de `Zone.js`, y se demuestra prácticamente la diferencia entre actualizar el DOM con una propiedad tradicional vs. con una señal cuando `Zone.js` ya no está presente.

## Puntos clave explicados
- Las aplicaciones tradicionales de Angular incluyen la librería **`Zone.js`** como polyfill. Esta librería "parchea" las APIs nativas del navegador (setTimeout, eventos, Promises…) para notificar a Angular cuándo algo cambia y debe re-renderizar.
- **Zoneless Angular** elimina esa dependencia: Angular ya no monitorea el entorno global. En su lugar depende exclusivamente de las **señales** para saber cuándo actualizar el DOM.
- Para activarlo se reemplaza `provideZoneChangeDetection()` por `provideExperimentalZonelessChangeDetection()` (nombre exacto puede variar según la versión; en versiones estables será `provideZonelessChangeDetection()`). Ambos no pueden coexistir.
- Se añaden dos propiedades al componente para demostrar la diferencia:
  - `traditionalProperty = 'Fernando'` — propiedad de clase normal
  - `signalProperty = signal('Fernando')` — señal
- **Con Zoneless activo**, si se actualiza `traditionalProperty` desde un `setTimeout` (fuera del ciclo de Angular), el DOM **no se actualiza**: Angular no se entera del cambio.
- Si se actualiza `signalProperty.set('Juan Carlos')` desde el mismo `setTimeout`, el DOM **sí se actualiza** porque las señales notifican a Angular directamente.
- **Conclusión práctica:** en Zoneless Angular todas las propiedades que afectan la vista deben ser señales. Las propiedades tradicionales cuyo valor no cambia después de crearse (constantes) no necesitan ser señales.
- Mezclar `signal.set()` y cambios de propiedad tradicional en el mismo bloque puede dar falsos positivos: el re-render disparado por la señal también refleja el cambio de la propiedad. No hacer esa mezcla.

## Ejemplo sencillo
```typescript
// app.config.ts — activar Zoneless
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // Quitar provideZoneChangeDetection() y usar:
    provideExperimentalZonelessChangeDetection(),
  ]
};
```

```typescript
// home-page.component.ts
traditionalProperty = 'Fernando';
signalProperty = signal('Fernando');

constructor() {
  setTimeout(() => {
    this.traditionalProperty = 'Juan Carlos'; // ❌ DOM NO cambia en Zoneless
    this.signalProperty.set('Juan Carlos');   // ✅ DOM SÍ cambia
  }, 2000);
}
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `Zone.js` | Librería que Angular usa para detectar cambios en el entorno global |
| Zoneless Angular | Modo en que Angular opera sin `Zone.js`, basado solo en señales |
| `provideExperimentalZonelessChangeDetection()` | Provider que activa Zoneless (nombre estable: `provideZonelessChangeDetection()`) |
| Propiedad tradicional | No notifica a Angular al cambiar; invisible para Zoneless |
| `signal().set()` | Notifica a Angular directamente; funciona en Zoneless |
| Polyfill | Código que habilita funcionalidades en entornos con compatibilidad limitada |

## Resumen final
Zoneless Angular es el futuro del framework: más rápido, mejor compatibilidad con `async/await` y sin la sobrecarga de `Zone.js`. La regla es simple: si el valor de una variable va a cambiar y ese cambio debe reflejarse en la vista, usa una **señal**.
