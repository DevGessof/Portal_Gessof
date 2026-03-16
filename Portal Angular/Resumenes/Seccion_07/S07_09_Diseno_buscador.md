# Seccion 7 - Leccion 09: Diseno de Pantalla - Buscador de GIFs

---

## 1. Titulo de la leccion

**Crear el buscador con referencia local, modificador de evento (keyup.enter) y metodo searchGifs en el servicio**

---

## 2. Que se aprende en esta leccion

Se construye la UI del buscador con Tailwind, se captura el valor del input con una referencia local, se dispara la busqueda al presionar Enter usando el modificador `(keyup.enter)`, y se crea el metodo `searchGifs(query)` en el servicio.

---

## 3. Puntos clave explicados

- **Referencia local `#txtSearch`:** Declara una variable de template que apunta al elemento HTML del input. Permite acceder a `txtSearch.value` directamente sin formularios reactivos ni NgModel.
- **`(keyup.enter)`:** Modificador de evento de Angular que solo se dispara cuando se presiona la tecla Enter. Evita escuchar todas las pulsaciones.
- **Sin formularios reactivos:** La captura del valor se hace con la referencia local y el evento nativo, que es suficiente para casos sencillos.
- **`onSearch(query: string)`:** Metodo del componente que recibe el query y llama al servicio. Por ahora solo hace `console.log`.
- **`searchGifs(query)` en el servicio:** Hace una peticion GET al endpoint `/gifs/search` mandando `q: query` como parametro. Igual al trending pero con `search` en la ruta y el parametro `q`.
- **Reutilizar `GifListComponent`:** La pantalla de busqueda usa el mismo componente `gif-list` que la pantalla de Trending. Por ahora se pasa un arreglo vacio mientras no hay resultados.
- **Importar `GifListComponent` en `SearchPageComponent`:** Como es standalone, hay que agregarlo al array `imports`.

---

## 4. Ejemplo sencillo

```html
<!-- search-page.component.html -->
<h2 class="text-2xl font-bold mt-5">Buscar Gifs</h2>
<h3 class="text-sm text-gray-500">Buscar gifs por nombre o tags</h3>

<div class="flex flex-col gap-4">
  <input
    #txtSearch
    type="text"
    placeholder="Buscar Gifs"
    class="mt-3 border border-gray-300 rounded-md p-2"
    (keyup.enter)="onSearch(txtSearch.value)"
  />
  <gif-list [gifs]="gifs()" />
</div>
```

```typescript
// search-page.component.ts
export default class SearchPageComponent {
  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string): void {
    this.gifService.searchGifs(query)
      .subscribe(resp => this.gifs.set(resp));
  }
}
```

```typescript
// En GifService
searchGifs(query: string) {
  return this.http.get<GiphyResponse>(
    `${environment.giphyUrl}/gifs/search`,
    { params: { api_key: environment.giphyApiKey, limit: 20, q: query } }
  ).pipe(
    map(({ data }) => GifMapper.mapGiphyItemsToGifArray(data))
  );
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `#txtSearch` | Referencia local al elemento input del template |
| `(keyup.enter)` | Evento que solo se dispara al presionar Enter |
| `txtSearch.value` | Valor actual del input leido desde la referencia local |
| `onSearch(query)` | Metodo del componente que delega la busqueda al servicio |
| `searchGifs(query)` | Metodo del servicio que hace GET a `/gifs/search?q=query` |
| Reutilizar `GifListComponent` | La misma lista sirve para Trending y para busqueda |

---

## 6. Resumen final en pocas palabras

El buscador captura el valor del input con una referencia local `#txtSearch` sin necesidad de formularios reactivos. Al presionar Enter se llama `onSearch()` que delega al servicio. El servicio hace GET a `/gifs/search` con el query como parametro `q` y retorna un Observable transformado con el mapper.
