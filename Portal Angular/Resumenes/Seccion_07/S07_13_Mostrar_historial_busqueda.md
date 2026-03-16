# Seccion 7 - Leccion 13: Mostrar Historial de Busqueda

---

## 1. Titulo de la leccion

**getHistoryGifs(), propiedad computada gifsByKey y reutilizar GifListComponent en GifHistoryComponent**

---

## 2. Que se aprende en esta leccion

Se crea el metodo `getHistoryGifs(query)` en el servicio, se declara la senal computada `gifsByKey` en `GifHistoryComponent` dependiente del `query` de la URL, y se reutiliza `GifListComponent` para mostrar los GIFs del historial.

---

## 3. Puntos clave explicados

- **`getHistoryGifs(query: string): Gif[]`:** Metodo del servicio que lee `this.searchHistory()[query]` y retorna el arreglo de GIFs o un arreglo vacio si no existe la llave. Acceso directo al objeto con indexado dinamico.
- **`gifsByKey` senal computada:** Propiedad del componente declarada como `computed(() => this.gifService.getHistoryGifs(this.query()))`. Se recalcula automaticamente cuando `query` (senal del parametro de URL) cambia.
- **Encadenamiento de inyecciones:** Como `gifService` y `query` se declaran como propiedades del componente (no en constructor), se pueden usar directamente en el `computed`. Esto es posible gracias a la inyeccion moderna con `inject()`.
- **Reutilizar `GifListComponent`:** El mismo componente que usa `TrendingPage` y `SearchPage` se usa en `GifHistoryComponent`. Solo cambia la fuente de datos.
- **`[gifs]="gifsByKey()"`:** Se pasa la senal computada al input de `GifListComponent`. Paréntesis porque es una senal.
- **Tipado del retorno:** Se recomienda anotar el tipo de retorno en los metodos del servicio. Ejemplo: `searchGifs(query: string): Observable<Gif[]>`.

---

## 4. Ejemplo sencillo

```typescript
// GifService - nuevo metodo
getHistoryGifs(query: string): Gif[] {
  return this.searchHistory()[query] ?? [];
}
```

```typescript
// gif-history.component.ts
export default class GifHistoryComponent {
  private activatedRoute = inject(ActivatedRoute);
  private gifService     = inject(GifService);

  query = toSignal(
    this.activatedRoute.params.pipe(map(p => p['query'] ?? ''))
  );

  gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query() ?? ''));
}
```

```html
<!-- gif-history.component.html -->
<h3 class="text-2xl font-bold">Mostrando: {{ query() }}</h3>
<hr class="my-4" />
<section class="py-5">
  <gif-list [gifs]="gifsByKey()" />
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `getHistoryGifs(query)` | Metodo del servicio que retorna `Gif[]` desde el historial o `[]` |
| `this.searchHistory()[query]` | Acceso dinamico al objeto por llave |
| `?? []` | Nullish coalescing: retorna `[]` si la llave no existe |
| `gifsByKey = computed(...)` | Senal computada que depende de `query` (parametro de URL) |
| `this.gifService.getHistoryGifs(this.query())` | Llamada al servicio dentro del `computed`; `query()` con parentesis |
| Reutilizar `GifListComponent` | Mismo componente para trending, busqueda e historial |
| `Observable<Gif[]>` como tipo de retorno | Buena practica: anotar el tipo de retorno en metodos del servicio |

---

## 6. Resumen final en pocas palabras

`getHistoryGifs(query)` lee el historial del servicio y retorna el arreglo de GIFs o vacio. En el componente, `gifsByKey` es una senal computada que depende del parametro de URL (`query`). Al hacer clic en distintas entradas del historial, `query` cambia, `gifsByKey` se recalcula y `GifListComponent` muestra los GIFs correspondientes sin peticiones HTTP adicionales.
