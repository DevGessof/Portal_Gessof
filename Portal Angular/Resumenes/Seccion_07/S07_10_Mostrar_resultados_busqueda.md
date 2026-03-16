# Seccion 7 - Leccion 10: Mostrar Resultados de Busqueda

---

## 1. Titulo de la leccion

**Operadores RxJS: pipe, tap y map para transformar la respuesta en el servicio**

---

## 2. Que se aprende en esta leccion

Se refactoriza `searchGifs` para que el servicio retorne el Observable transformado (en lugar de suscribirse internamente), y se aprende a usar los operadores `tap` y `map` de RxJS dentro del metodo `pipe`.

---

## 3. Puntos clave explicados

- **Patron "retornar el Observable":** El servicio hace `return this.http.get(...)` sin suscribirse. El componente se suscribe y maneja el resultado. Esto es el patron mas comun en Angular con servicios.
- **La peticion solo se dispara con `.subscribe()`:** Si el servicio retorna el Observable sin suscribirse, la peticion no se ejecuta hasta que el componente llame `.subscribe()`.
- **`.pipe(...operadores)`:** Metodo de todos los Observables que permite encadenar operadores de RxJS. Los operadores se ejecutan en orden, de arriba hacia abajo.
- **Operador `tap(callback)`:** Para efectos secundarios (logs, actualizaciones de estado) sin modificar el valor emitido. Se importa de `rxjs`. El valor pasa sin cambios al siguiente operador.
- **Operador `map(callback)`:** Transforma el valor emitido y lo reemplaza con el valor retornado. Se importa de `rxjs`. Es el operador principal para transformar la respuesta del API.
- **Desestructurar la respuesta:** `map(({ data }) => ...)` extrae solo la propiedad `data` de la respuesta, que contiene el arreglo de `GiphyItem`.
- **Encadenar `map` con `GifMapper`:** `map(({ data }) => GifMapper.mapGiphyItemsToGifArray(data))` retorna directamente `Gif[]`, dejando toda la logica de transformacion en el servicio.
- **El componente recibe `Gif[]`:** Tras suscribirse, el componente recibe el arreglo ya transformado y lo asigna con `this.gifs.set(resp)`.

---

## 4. Ejemplo sencillo

```typescript
// GifService - patron retornar Observable
searchGifs(query: string): Observable<Gif[]> {
  return this.http.get<GiphyResponse>(
    `${environment.giphyUrl}/gifs/search`,
    { params: { api_key: environment.giphyApiKey, limit: 20, q: query } }
  ).pipe(
    tap(resp => console.log('Respuesta cruda:', resp)),   // efecto secundario
    map(({ data }) => GifMapper.mapGiphyItemsToGifArray(data))  // transformacion
  );
}
```

```typescript
// SearchPageComponent - el componente se suscribe
onSearch(query: string): void {
  this.gifService.searchGifs(query)
    .subscribe(gifs => this.gifs.set(gifs));
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Patron "retornar Observable" | El servicio retorna el Observable sin suscribirse; el componente lo hace |
| `.pipe(...ops)` | Encadena operadores de RxJS sobre un Observable |
| `tap(cb)` | Efecto secundario sin modificar el valor; importar de `rxjs` |
| `map(cb)` | Transforma el valor emitido; el retorno reemplaza el valor |
| `map(({ data }) => ...)` | Desestructura la respuesta para acceder directamente a `data` |
| `Observable<Gif[]>` | Tipo de retorno del metodo `searchGifs`; explicita que emite `Gif[]` |

---

## 6. Resumen final en pocas palabras

El servicio retorna el Observable sin suscribirse. Los operadores `tap` y `map` dentro de `pipe` permiten agregar efectos secundarios y transformar la respuesta. `map(({ data }) => GifMapper.mapGiphyItemsToGifArray(data))` convierte la respuesta cruda en `Gif[]`. El componente se suscribe y recibe el arreglo ya procesado, que asigna a su senal con `.set()`.
