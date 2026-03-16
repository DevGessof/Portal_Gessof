# Seccion 5 - Leccion 18: LinkedSignal - Cargar del LocalStorage

---

## 1. Titulo de la leccion

**Leer el LocalStorage al inicializar la senal con una funcion auxiliar**

---

## 2. Que se aprende en esta leccion

Se crea la funcion `loadFromLocalStorage()` que lee y deserializa el arreglo de personajes del LocalStorage. Se usa como valor inicial de la senal para que los datos persistan entre recargas del navegador.

---

## 3. Puntos clave explicados

- **Problema:** El efecto de la leccion anterior solo guarda en LocalStorage, pero al recargar el navegador la senal se inicializa vacia porque nunca se lee.
- **`localStorage.getItem(key)`:** Devuelve el string guardado o `null` si la clave no existe. Hay que manejar ambos casos.
- **`JSON.parse(string)`:** Deserializa un string a objeto o arreglo. Operacion opuesta a `JSON.stringify()`.
- **Funcion auxiliar fuera de la clase:** `loadFromLocalStorage()` se define fuera del servicio porque no tiene dependencias con la clase. Devuelve `Character[]`.
- **Operador `??` (nullish coalescing):** Si `getItem()` devuelve `null`, se usa `?? '[]'` para proporcionar un arreglo vacio como fallback antes de parsear.
- **Inicializar la senal con la funcion:** `characters = signal<Character[]>(loadFromLocalStorage())`. Se llama una vez al crear la instancia del servicio.
- **Advertencia de seguridad:** `JSON.parse()` acepta cualquier string; no valida que el contenido sea realmente un arreglo de `Character`. Un usuario con conocimientos podria modificar el LocalStorage. Para produccion se recomienda validar cada objeto antes de usarlo.
- **Buena practica:** Verificar que el resultado sea un arreglo y que cada elemento tenga las propiedades esperadas (`id`, `name`, `power`) antes de confiar en los datos.

---

## 4. Ejemplo sencillo

```typescript
// Funcion auxiliar fuera del servicio
function loadFromLocalStorage(): Character[] {
  const data = localStorage.getItem('characters');
  if (!data) return [];
  return JSON.parse(data) as Character[];
}

// dragonball.service.ts
@Injectable({ providedIn: 'root' })
export class DragonballService {

  // La senal se inicializa con los datos del LocalStorage
  characters = signal<Character[]>(loadFromLocalStorage());

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
| `localStorage.getItem(key)` | Lee un valor; devuelve `string` o `null` |
| `JSON.parse(string)` | Deserializa un string a objeto o arreglo |
| `??` (nullish coalescing) | Si el valor es `null` o `undefined`, usa el valor de la derecha como fallback |
| Funcion fuera de la clase | Funcion auxiliar sin dependencias de la clase; puede definirse en el mismo archivo |
| Validacion de LocalStorage | En produccion, verificar que los datos parseados tengan la estructura esperada |
| `as Character[]` | Asercion de tipo en TypeScript; no valida en runtime, solo informa al compilador |

---

## 6. Resumen final en pocas palabras

Para persistir datos entre recargas se crea `loadFromLocalStorage()` que lee y parsea el LocalStorage y se usa como valor inicial de la senal: `signal(loadFromLocalStorage())`. Combinada con el `effect()` que guarda, la aplicacion carga y preserva el estado automaticamente. En produccion se debe validar la estructura de los datos antes de confiar en ellos.
