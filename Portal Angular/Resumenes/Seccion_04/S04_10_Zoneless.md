# Seccion 4 - Leccion 10: Zoneless Angular

---

## 1. Titulo de la leccion

**Que es Zoneless Angular y por que las senales lo hacen posible**

---

## 2. Que se aprende en esta leccion

Se explica que es Zone.js, por que Angular quiere abandonarla y como las senales hacen posible trabajar sin ella. Se demuestra de forma practica la diferencia entre detectar cambios con Zone.js y con senales, usando `ChangeDetectionStrategy.OnPush`.

---

## 3. Puntos clave explicados

- **Zone.js:** Libreria externa que Angular usa actualmente para detectar cambios de estado y sincronizar el DOM. Monitorea toda la aplicacion en todo momento, lo que la hace pesada e incompatible con `async/await` en ciertos contextos.
- **Problema con Zone.js:** Genera un "overhead" (cuello de botella) porque revisa todo el arbol de componentes cada vez que hay un cambio, aunque sea minimo.
- **Zoneless:** Modo en el que Angular no depende de Zone.js. Las senales le avisan directamente a Angular que algo cambio y donde, sin necesidad de una libreria que monitoree todo.
- **Ventajas de Zoneless:** Mejor rendimiento, actualizaciones mas rapidas del DOM, mejor Web Core Vitals, mas facil de depurar y mejor ecosistema.
- **`ChangeDetectionStrategy.OnPush`:** Configuracion que le dice a Angular que no use Zone.js en ese componente. Se agrega en el decorador `@Component` con `changeDetection: ChangeDetectionStrategy.OnPush`.
- **Demostracion practica:** Con `OnPush`, un `setInterval` que cambia una propiedad comun no actualiza el DOM porque Zone.js no esta activo. Pero el mismo `setInterval` cambiando una senal si actualiza el DOM, porque las senales notifican el cambio directamente.
- **Propiedad comun vs senal:** Sin Zone.js, las propiedades comunes no se sincronizan. Solo las senales funcionan correctamente en modo Zoneless.
- **Recomendacion:** El futuro de Angular es Zoneless. Trabajar con senales hoy es prepararse para ese futuro.

---

## 4. Ejemplo sencillo

```typescript
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './counter-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush  // sin Zone.js
})
export class CounterPageComponent {
  counter = 10;                    // propiedad comun (NO se actualiza sin Zone.js)
  counterSignal = signal(10);      // senal (SI se actualiza sin Zone.js)

  constructor() {
    setInterval(() => {
      this.counter += 1;           // no se refleja en el DOM con OnPush
      this.counterSignal.update(c => c + 1); // si se refleja en el DOM
    }, 2000);
  }
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Zone.js | Libreria que detecta cambios de estado en Angular tradicional |
| Zoneless | Modo de Angular que no usa Zone.js; depende de senales para detectar cambios |
| `ChangeDetectionStrategy.OnPush` | Le indica a Angular que no use Zone.js en ese componente |
| `changeDetection` | Propiedad del decorador `@Component` para configurar la estrategia de deteccion |
| `setInterval` | Funcion de JavaScript que ejecuta un callback cada X milisegundos |
| Overhead | Trabajo extra y costoso que Zone.js hace para monitorear todos los cambios |
| Web Core Vitals | Metricas de rendimiento web que mejoran con Zoneless y senales |

---

## 6. Resumen final en pocas palabras

Zone.js es la libreria que Angular usa para detectar cambios, pero es pesada y genera problemas de rendimiento. Con `ChangeDetectionStrategy.OnPush` y senales, Angular puede funcionar sin Zone.js: las propiedades comunes dejan de sincronizarse pero las senales si lo hacen, porque notifican los cambios directamente. Este es el camino al que Angular se dirige.
