# Seccion 5 - Leccion 17: Efectos y LocalStorage

---

## 1. Titulo de la leccion

**Guardar el estado en LocalStorage con effect()**

---

## 2. Que se aprende en esta leccion

Se introduce `effect()` de Angular para ejecutar una accion secundaria cada vez que una senal cambia. Se usa para guardar automaticamente el arreglo de personajes en el LocalStorage del navegador.

---

## 3. Puntos clave explicados

- **LocalStorage:** Espacio de almacenamiento del navegador por dominio. Guarda pares clave-valor como strings. Persiste aunque el usuario cierre el navegador (a diferencia del SessionStorage que se purga al cerrar).
- **SessionStorage vs LocalStorage:** SessionStorage se borra al cerrar todas las ventanas del navegador; LocalStorage persiste indefinidamente hasta que se limpie manualmente.
- **No guardar datos sensibles:** El LocalStorage puede ser modificado por cualquier usuario con conocimientos basicos. No se deben guardar tarjetas de credito ni informacion confidencial.
- **`JSON.stringify()`:** Serializa un objeto o arreglo a string para poder guardarlo en LocalStorage. No requiere importacion; es parte del API nativo del navegador.
- **`effect()`:** Funcion de Angular que registra un callback que se ejecuta automaticamente cuando alguna de las senales leidas dentro de el cambia. Angular detecta las dependencias automaticamente.
- **Casos de uso validos de `effect()`:** Logueo, sincronizacion con LocalStorage, manipulacion del DOM, canvas. No se recomienda para peticiones HTTP.
- **Un efecto, una tarea:** Es buena practica que cada `effect()` tenga una sola responsabilidad.
- **`localStorage.setItem(llave, valor)`:** Guarda un item en LocalStorage. El valor debe ser string.
- **El efecto se dispara al inicializar:** Cuando el servicio se instancia, el efecto se ejecuta una vez con el valor inicial de la senal.

---

## 4. Ejemplo sencillo

```typescript
// dragonball.service.ts
import { Injectable, signal, effect } from '@angular/core';
import type { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {

  characters = signal<Character[]>([
    { id: 1, name: 'Goku',   power: 90000 },
    { id: 2, name: 'Vegeta', power: 85000 },
  ]);

  // Efecto: se ejecuta cada vez que 'characters' cambia
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character): void {
    this.characters.update(list => [...list, character]);
  }
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `effect(() => { })` | Ejecuta el callback cuando alguna senal leida dentro cambia; importar de `@angular/core` |
| `localStorage.setItem(key, value)` | Guarda un string en LocalStorage bajo una clave |
| `localStorage.getItem(key)` | Lee un valor de LocalStorage; devuelve `string` o `null` |
| `localStorage.removeItem(key)` | Elimina un item del LocalStorage |
| `localStorage.clear()` | Limpia todo el LocalStorage del dominio |
| `JSON.stringify(obj)` | Serializa un objeto a string para guardarlo en LocalStorage |
| SessionStorage | Como LocalStorage pero se purga al cerrar todas las ventanas del navegador |

---

## 6. Resumen final en pocas palabras

`effect()` ejecuta automaticamente un callback cuando las senales que lee cambian. Es ideal para sincronizar el estado con LocalStorage usando `JSON.stringify()` y `localStorage.setItem()`. Cada efecto debe tener una sola responsabilidad y no se recomienda usarlo para peticiones HTTP.
