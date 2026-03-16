# Seccion 8 - Leccion 08: Cargar Siguiente Pagina de GIFs

---

## 1. Titulo de la leccion

**Paginacion con offset, senal trendingPage y actualizar trendingGifs con update()**

---

## 2. Que se aprende en esta leccion

Se implementa la carga de la siguiente pagina de GIFs al detectar el fin del scroll. Se crea la senal `trendingPage` para controlar el offset de la peticion, se bloquean peticiones duplicadas con `trendingGifsLoading`, y se acumulan los nuevos GIFs con `signal.update()` en lugar de `signal.set()`.

---

## 3. Puntos clave explicados

- **Paginacion por offset (no por pagina):** Giphy usa `offset` en lugar de numero de pagina. `offset = pagina * limite`. Ejemplo: pagina 0 → offset 0, pagina 1 → offset 20, pagina 2 → offset 40.
- **`trendingPage = signal<number>(0)`:** Senal privada del servicio que guarda la pagina actual. Se incrementa con `.update(page => page + 1)` despues de cada carga exitosa.
- **`trendingGifsLoading` como bloqueo:** Antes de hacer la peticion se verifica `if (this.trendingGifsLoading()) return`. Si ya hay una peticion en curso, se ignora la nueva llamada. Se pone en `true` al entrar y en `false` al terminar.
- **`signal.update()` para acumular GIFs:** En lugar de `trendingGifs.set(gifs)` (que sobrescribe), se usa `trendingGifs.update(currentGifs => [...currentGifs, ...gifs])`. Esto agrega los nuevos GIFs al final del arreglo existente.
- **`trendingGifGroup` se actualiza automaticamente:** Como es una senal computada que depende de `trendingGifs`, se recalcula sola cada vez que se agregan nuevos GIFs.
- **Incrementar la pagina tras la carga:** Sin incrementar `trendingPage`, el offset siempre es 0 y se cargan los mismos 20 GIFs en cada peticion.
- **Llamar `gifService.loadTrendingGifs()` en `onScroll`:** Cuando `isAtBottom` es `true`, se llama al metodo del servicio para disparar la siguiente peticion.

---

## 4. Ejemplo sencillo

```typescript
// GifService
private trendingPage    = signal<number>(0);
trendingGifsLoading     = signal<boolean>(true);
trendingGifs            = signal<Gif[]>([]);

loadTrendingGifs(): void {
  if (this.trendingGifsLoading()) return;  // bloquear si ya carga
  this.trendingGifsLoading.set(true);

  const offset = this.trendingPage() * 20;

  this.http.get<GiphyResponse>(
    `${environment.giphyUrl}/gifs/trending`,
    { params: { api_key: environment.giphyApiKey, limit: 20, offset } }
  ).subscribe(resp => {
    const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);

    this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
    this.trendingPage.update(page => page + 1);
    this.trendingGifsLoading.set(false);
  });
}
```

```typescript
// TrendingPageComponent - onScroll
onScroll(event: Event): void {
  const scrollDiv = this.scrollDivRef()?.nativeElement;
  if (!scrollDiv) return;

  const { scrollTop, clientHeight, scrollHeight } = scrollDiv;
  const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

  if (isAtBottom) {
    this.gifService.loadTrendingGifs();
  }
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Paginacion por offset | `offset = pagina * limite`; no hay numero de pagina directo |
| `trendingPage` | Senal privada que guarda la pagina actual; se incrementa tras cada carga |
| `trendingGifsLoading` | Senal booleana que bloquea peticiones duplicadas |
| `signal.update(fn)` | Actualiza la senal basandose en su valor anterior |
| `[...currentGifs, ...gifs]` | Combina GIFs existentes con los nuevos sin sobrescribir |
| `trendingPage.update(p => p + 1)` | Incrementa la pagina tras una carga exitosa |

---

## 6. Resumen final en pocas palabras

La paginacion se controla con la senal `trendingPage` que calcula el offset (`pagina * 20`). `trendingGifsLoading` evita peticiones duplicadas. Los nuevos GIFs se acumulan con `update([...anteriores, ...nuevos])` en lugar de sobrescribir con `set()`. Sin incrementar `trendingPage` siempre se cargarian los mismos GIFs.
