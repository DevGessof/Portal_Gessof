# Seccion 5 - Leccion 16: Servicios en Angular

---

## 1. Titulo de la leccion

**Crear y usar un servicio para centralizar el estado con Inyeccion de Dependencias**

---

## 2. Que se aprende en esta leccion

Se introduce el concepto de servicio en Angular, se crea `DragonballService` con el snippet `a-service`, se mueve la logica del estado ahi y se inyecta en el componente pagina usando la funcion `inject()`.

---

## 3. Puntos clave explicados

- **Que es un servicio:** Una clase comun con el decorador `@Injectable`. Su proposito es centralizar el estado y la logica de negocio (peticiones HTTP, manejo de datos) fuera de los componentes.
- **Singleton:** Gracias al `@Injectable({ providedIn: 'root' })`, Angular crea una sola instancia del servicio para toda la aplicacion. Si el componente es destruido y recreado, el servicio sigue vivo con su estado intacto.
- **`providedIn: 'root'`:** Hace que el servicio este disponible globalmente. Tambien existen scopes por modulo o feature, pero `root` es el mas comun.
- **Por que usar servicios:** Cuando el usuario navega entre paginas y destruye un componente, los datos en el componente se pierden. Al moverlos al servicio, persisten mientras viva la aplicacion.
- **Inyeccion de dependencias con `inject()`:** Forma moderna. Se asigna a una propiedad: `dragonballService = inject(DragonballService)`. No requiere constructor y funciona fuera de clases si se esta en contexto Angular.
- **Inyeccion tradicional con `constructor`:** `constructor(public dragonballService: DragonballService)`. Sigue funcionando pero la funcion `inject()` es la recomendada actualmente.
- **El servicio no se importa en `imports`:** A diferencia de los componentes, los servicios con `providedIn: 'root'` no necesitan declararse en el array `imports` del componente.

---

## 4. Ejemplo sencillo

```typescript
// dragonball.service.ts
import { Injectable, signal } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku',   power: 90000 },
    { id: 2, name: 'Vegeta', power: 85000 },
  ]);

  addCharacter(character: Character): void {
    this.characters.update(list => [...list, character]);
  }
}
```

```typescript
// dragonball-super-page.component.ts
import { Component, inject } from '@angular/core';
import { DragonballService } from '../../services/dragonball.service';

export class DragonBallSuperPageComponent {
  // Inyeccion moderna con inject()
  dragonballService = inject(DragonballService);

  addCharacter(character: Character): void {
    this.dragonballService.addCharacter(character);
  }
}
```

```html
<!-- dragonball-super-page.component.html -->
<dragonball-character-list
  [characters]="dragonballService.characters()"
  listName="Personajes fuertes" />
<dragonball-character-add (newCharacter)="addCharacter($event)" />
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `@Injectable({ providedIn: 'root' })` | Decorador que convierte una clase en servicio disponible globalmente |
| Singleton | Una sola instancia del servicio en toda la app; el estado persiste entre navegaciones |
| `inject(Clase)` | Funcion moderna para inyectar dependencias; importar de `@angular/core` |
| `constructor(private s: Servicio)` | Forma tradicional de inyeccion; sigue funcionando |
| `a-service` (snippet) | Atajo para generar la estructura base de un servicio en VS Code |
| `providedIn: 'root'` | Registra el servicio a nivel global de la aplicacion |

---

## 6. Resumen final en pocas palabras

Un servicio es una clase con `@Injectable` que centraliza el estado y la logica. Al ser un Singleton con `providedIn: 'root'`, su estado persiste aunque los componentes se destruyan al navegar. Se inyecta con `inject(Servicio)` en cualquier componente sin necesidad de declararlo en `imports`.
