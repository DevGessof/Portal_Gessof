# Seccion 6 - Leccion 11: Tarea - Input de Imagenes

---

## 1. Titulo de la leccion

**Tarea y solucion: prop drilling de imageUrl desde TrendingPage hasta GifListItemComponent**

---

## 2. Que se aprende en esta leccion

Se practica el "prop drilling": pasar datos de un componente padre a un nieto a traves de inputs. El arreglo de URLs de imagenes viaja de `TrendingPageComponent` → `GifListComponent` → `GifListItemComponent`, donde finalmente se muestra la imagen.

---

## 3. Puntos clave explicados

- **Prop drilling:** Patron donde un dato se pasa de padre a hijo a nieto mediante inputs encadenados. No es malo en jerarquias cortas; para jerarquias profundas se prefieren servicios o signals.
- **`GifListItemComponent` recibe `imageUrl`:** Input signal obligatorio de tipo `string`. Se declara con `imageUrl = input.required<string>()`. Se usa en el template como `{{ imageUrl() }}` o en un `src`.
- **`GifListComponent` recibe `gifs`:** Input signal obligatorio de tipo `string[]`. Se itera con `@for (gif of gifs(); track gif)` y se pasa cada `gif` al `GifListItemComponent` con `[imageUrl]="gif"`.
- **`TrendingPageComponent` tiene el arreglo de URLs:** Se define como `gifs = signal<string[]>(imageUrls)` usando los URLs de un Gist externo. Se pasa al `GifListComponent` con `[gifs]="gifs()"`.
- **`track` con el propio valor:** Cuando los elementos son strings unicos (URLs), se puede usar `track gif` directamente como identificador.
- **Convension de nombres:** El input en `GifListComponent` se llama `gifs` (lo que recibe). El input en `GifListItemComponent` se llama `imageUrl` (lo que usa).
- **Datos temporales:** El arreglo de URLs es provisional. En la siguiente seccion vendra de una API real. Por eso la propiedad puede ser senal desde ya para facilitar la migracion.

---

## 4. Ejemplo sencillo

```typescript
// gif-list-item.component.ts
export class GifListItemComponent {
  imageUrl = input.required<string>();
}
```

```html
<!-- gif-list-item.component.html -->
<img [src]="imageUrl()" alt="gif" class="w-full rounded" />
```

```typescript
// gif-list.component.ts
export class GifListComponent {
  gifs = input.required<string[]>();
}
```

```html
<!-- gif-list.component.html -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  @for (gif of gifs(); track gif) {
    <gif-list-item [imageUrl]="gif" />
  }
</div>
```

```typescript
// trending-page.component.ts
const imageUrls = ['https://...url1', 'https://...url2', '...'];  // datos temporales

export default class TrendingPageComponent {
  gifs = signal<string[]>(imageUrls);
}
```

```html
<!-- trending-page.component.html -->
<section class="py-5">
  <gif-list [gifs]="gifs()" />
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Prop drilling | Pasar datos de padre a hijo a nieto mediante inputs encadenados |
| `input.required<string>()` | Input signal obligatorio de tipo string |
| `input.required<string[]>()` | Input signal obligatorio de tipo arreglo de strings |
| `@for (item of senal(); track item)` | Iteracion de un input signal; con parentesis porque es senal |
| `[imageUrl]="gif"` | Pasa el string iterado como valor del input del hijo |
| `track gif` | Usa el propio string como identificador unico en el `@for` |

---

## 6. Resumen final en pocas palabras

Se implementa prop drilling de tres niveles: `TrendingPage` tiene el arreglo de URLs como senal, lo pasa a `GifList` que itera con `@for`, y cada iteracion pasa el URL a `GifListItem` que muestra la imagen. Todos los inputs son obligatorios con `input.required<Tipo>()`. Los datos son temporales y seran reemplazados por la API en la proxima seccion.
