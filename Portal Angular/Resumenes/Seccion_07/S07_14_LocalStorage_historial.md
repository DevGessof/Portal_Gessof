# Seccion 7 - Leccion 14: LocalStorage - Mantener el Historial

---

## 1. Titulo de la leccion

**Persistir searchHistory en LocalStorage con effect() y loadFromLocalStorage()**

---

## 2. Que se aprende en esta leccion

Se usa `effect()` para guardar automaticamente el historial en LocalStorage cada vez que cambia, y se crea la funcion `loadFromLocalStorage()` para recuperarlo al iniciar la app. La senal `searchHistory` se inicializa con los datos del LocalStorage.

---

## 3. Puntos clave explicados

- **Problema:** Al recargar el navegador, `searchHistory` se reinicia a `{}` y se pierde todo el historial aunque estuviera en LocalStorage.
- **`effect(fn)`:** Efecto de Angular que se dispara automaticamente cada vez que cualquier senal leida dentro de el cambia. Aqui se usa para escuchar `searchHistory` y guardarla en LocalStorage.
- **`JSON.stringify(this.searchHistory())`:** Serializa el objeto del historial a string para poder guardarlo en LocalStorage (que solo acepta strings).
- **`localStorage.setItem(key, value)`:** API nativa del navegador; no requiere importacion. Guarda el string en el almacenamiento persistente del navegador.
- **`loadFromLocalStorage()`:** Funcion que lee el LocalStorage, parsea el JSON y retorna el objeto `Record<string, Gif[]>`. Si no hay nada guardado, retorna `{}`.
- **`localStorage.getItem(key)`:** Retorna el string guardado o `null` si no existe. Se usa `?? '{}'` para garantizar siempre un string parseable.
- **`JSON.parse(string) as Record<string, Gif[]>`:** Reconstruye el objeto desde el string. Es un cast de TypeScript; no valida la estructura en tiempo de ejecucion.
- **Inicializar la senal con la funcion:** `searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage())`. Al crear el servicio, la senal ya tendra los datos guardados.
- **Problema de sobrescritura al iniciar:** Si la senal se inicializa vacia y el efecto se dispara de inmediato, sobrescribe el LocalStorage con un objeto vacio. La solucion es inicializar la senal con `loadFromLocalStorage()`.
- **Constante para la llave:** Se puede declarar `const GIF_KEY = 'gifs'` y usarla en `setItem` y `getItem` para evitar errores de tipeo.
- **Las rutas y el historial persisten al recargar:** Gracias al LocalStorage, al recargar el navegador en `/dashboard/history/vegeta` los GIFs siguen disponibles.

---

## 4. Ejemplo sencillo

```typescript
// GifService - persistencia completa

const GIF_KEY = 'gifs';

function loadFromLocalStorage(): Record<string, Gif[]> {
  const gifsString = localStorage.getItem(GIF_KEY) ?? '{}';
  return JSON.parse(gifsString) as Record<string, Gif[]>;
}

@Injectable({ providedIn: 'root' })
export class GifService {
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());

  private saveEffect = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY, historyString);
  });
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `effect(fn)` | Se dispara automaticamente cuando cambia cualquier senal leida dentro |
| `JSON.stringify(obj)` | Serializa un objeto a string para guardarlo en LocalStorage |
| `localStorage.setItem(key, val)` | Guarda un string en el almacenamiento persistente del navegador |
| `localStorage.getItem(key)` | Lee el string guardado; retorna `null` si no existe |
| `JSON.parse(string)` | Reconstruye el objeto desde un string JSON |
| `?? '{}'` | Si `getItem` retorna `null`, usa `'{}'` como valor por defecto |
| `loadFromLocalStorage()` | Funcion que carga y parsea el historial del LocalStorage |
| Inicializar senal con funcion | `signal(loadFromLocalStorage())` recupera datos al arrancar |
| Constante `GIF_KEY` | Evita errores de tipeo al usar la misma llave en `set` y `get` |

---

## 6. Resumen final en pocas palabras

Un `effect()` escucha `searchHistory` y la guarda en LocalStorage como JSON al cada cambio. Al iniciar el servicio, la senal se inicializa con `loadFromLocalStorage()` que parsea el LocalStorage y devuelve el historial previo. Asi el historial y los GIFs en cache persisten al recargar el navegador, y las rutas dinamicas siguen funcionando.
