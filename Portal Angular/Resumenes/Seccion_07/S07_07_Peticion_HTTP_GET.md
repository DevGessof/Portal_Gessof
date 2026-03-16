# Seccion 7 - Leccion 07: Peticion HTTP GET

---

## 1. Titulo de la leccion

**Suscribirse al Observable, crear interfaz Gif propia y patron Mapper**

---

## 2. Que se aprende en esta leccion

Se suscribe el Observable del `HttpClient`, se crea la interfaz `Gif` propia de la app (solo 3 campos), se crea la clase `GifMapper` para transformar `GiphyItem` a `Gif`, y se almacena el resultado en una senal `trendingGifs`.

---

## 3. Puntos clave explicados

- **`.subscribe(callback)`:** La peticion HTTP NO se dispara hasta que alguien llame `.subscribe()`. El callback recibe la respuesta tipada.
- **Singleton del servicio:** El servicio se crea una sola vez. Inyectarlo en un componente no crea una nueva instancia si ya existe.
- **Interfaz `Gif` propia:** En `gifs/interfaces/gif.interface.ts` se define la interfaz interna de la app con solo `id`, `title` y `url`. Esto desacopla la app del API externo.
- **Senal `trendingGifs`:** Propiedad de tipo `signal<Gif[]>([])` en el servicio. Se actualiza con `.set(gifs)` tras recibir la respuesta.
- **`GifMapper`:** Clase con metodos estaticos que transforman objetos del API a la interfaz interna. Metodos: `mapGiphyItemToGif(item)` y `mapGiphyItemsToGifArray(items)`. Al aislar la transformacion en un mapper, si el API cambia solo hay que tocar el mapper.
- **`item.images.original.url`:** Ruta dentro del objeto `GiphyItem` para obtener la URL de la imagen en su tamano original.
- **`senal.set(valor)`:** Actualiza el valor de la senal con los gifs transformados.

---

## 4. Ejemplo sencillo

```typescript
// gifs/interfaces/gif.interface.ts
export interface Gif {
  id:    string;
  title: string;
  url:   string;
}
```

```typescript
// gifs/mapper/gif.mapper.ts
import type { GiphyItem } from '../interfaces/giphy.interface';
import type { Gif } from '../interfaces/gif.interface';

export class GifMapper {
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id:    item.id,
      title: item.title,
      url:   item.images.original.url
    };
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    return items.map(item => GifMapper.mapGiphyItemToGif(item));
  }
}
```

```typescript
// En GifService - loadTrendingGifs()
trendingGifs = signal<Gif[]>([]);

loadTrendingGifs(): void {
  this.http.get<GiphyResponse>(url, { params })
    .subscribe(resp => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
    });
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `.subscribe(callback)` | Activa la peticion HTTP; el callback recibe la respuesta |
| Interfaz `Gif` propia | Solo `id`, `title`, `url`; desacopla la app del API externo |
| `signal<Gif[]>([])` | Senal del servicio que almacena los gifs transformados |
| `GifMapper` | Clase con metodos estaticos para transformar `GiphyItem` a `Gif` |
| `mapGiphyItemsToGifArray(items)` | Transforma un arreglo de `GiphyItem` a `Gif[]` |
| `item.images.original.url` | Ruta al URL de la imagen en tamano original dentro de `GiphyItem` |
| `.set(valor)` | Actualiza el valor de una senal |

---

## 6. Resumen final en pocas palabras

La peticion HTTP se activa con `.subscribe()`. La respuesta del API se transforma con `GifMapper` a la interfaz `Gif` propia de la app (solo `id`, `title`, `url`). El resultado se almacena en la senal `trendingGifs` del servicio con `.set()`. El mapper aísla los cambios del API externo: si algo cambia, solo se toca el mapper.
