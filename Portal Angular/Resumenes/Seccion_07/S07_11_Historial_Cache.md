# Seccion 7 - Leccion 11: Historial y Cache de Busqueda

---

## 1. Titulo de la leccion

**Crear searchHistory con Record<string, Gif[]>, searchHistoryKeys computado y mostrar historial en sidebar**

---

## 2. Que se aprende en esta leccion

Se implementa un cache de busquedas en el servicio usando `Record<string, Gif[]>`, se obtienen las llaves con una senal computada, se actualiza el historial con el operador `tap` y se muestra la lista de busquedas previas en el sidebar.

---

## 3. Puntos clave explicados

- **Problema:** Al navegar fuera del buscador, los resultados se pierden porque estan en una senal local del componente.
- **`Record<string, Gif[]>`:** Tipo de TypeScript para un objeto con llaves dinamicas de tipo `string` y valores de tipo `Gif[]`. Permite indexar como `historial['goku']` o `historial[query]`.
- **`searchHistory = signal<Record<string, Gif[]>>({})` :** Senal del servicio inicializada como objeto vacio. Almacena todos los resultados de busquedas pasadas.
- **`searchHistoryKeys`:** Senal computada que extrae las llaves del objeto con `Object.keys(this.searchHistory())`. Se recalcula automaticamente cada vez que `searchHistory` cambia.
- **Operador `tap` para actualizar el historial:** Dentro del `pipe` de `searchGifs`, un `tap` llama a `this.searchHistory.update()` para agregar la nueva busqueda al objeto sin perder las anteriores.
- **`signal.update(fn)`:** Actualiza una senal recibiendo el valor anterior. Ideal cuando el nuevo valor depende del anterior. Se usa `{ ...history, [query.toLowerCase()]: items }` para agregar la nueva llave.
- **Propiedad computada con clave dinamica:** `{ [query]: items }` crea un objeto con una llave cuyo nombre viene de la variable `query`.
- **Sidebar con historial:** Se inyecta `GifService` en `SideMenuOptionsComponent`. Se itera `gifService.searchHistoryKeys()` con `@for` y se muestra cada llave como un enlace en el menu.

---

## 4. Ejemplo sencillo

```typescript
// GifService
searchHistory = signal<Record<string, Gif[]>>({});

searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

searchGifs(query: string): Observable<Gif[]> {
  return this.http.get<GiphyResponse>(url, { params }).pipe(
    map(({ data }) => GifMapper.mapGiphyItemsToGifArray(data)),
    tap(items => {
      this.searchHistory.update(history => ({
        ...history,
        [query.toLowerCase()]: items
      }));
    })
  );
}
```

```html
<!-- side-menu-options.component.html -->
@for (key of gifService.searchHistoryKeys(); track key) {
  <a [routerLink]="['/dashboard/search']" class="flex items-center gap-3 p-3">
    <i class="fa-solid fa-clock-rotate-left"></i>
    <span>{{ key }}</span>
  </a>
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `Record<string, Gif[]>` | Tipo de objeto con llaves string dinamicas y valores `Gif[]` |
| `signal<Record<...>>({})` | Senal del servicio para el historial; inicializada vacia |
| `computed(() => Object.keys(...))` | Senal derivada con las llaves del historial |
| `signal.update(fn)` | Actualiza una senal basandose en su valor anterior |
| `{ ...history, [query]: items }` | Spread + propiedad computada para agregar sin perder las anteriores |
| `tap(items => ...)` | Efecto secundario que actualiza el historial tras cada busqueda |
| `Object.keys(obj)` | Retorna las llaves de un objeto como arreglo de strings |

---

## 6. Resumen final en pocas palabras

El historial se almacena en `searchHistory`, una senal de tipo `Record<string, Gif[]>` en el servicio. Cada busqueda agrega su resultado al objeto con `update()` usando un `tap` en el pipe. Las llaves del historial se exponen como senal computada `searchHistoryKeys`. El sidebar itera esas llaves con `@for` para mostrar el historial de busquedas.
