# Seccion 7 - Leccion 08: Mostrar GIFs en Pantalla

---

## 1. Titulo de la leccion

**Conectar trendingGifs del servicio al template de TrendingPage**

---

## 2. Que se aprende en esta leccion

Se inyecta `GifService` en `TrendingPageComponent`, se conecta la senal `trendingGifs` al template pasandola al componente `GifListComponent`, y se agrega la senal `trendingGifsLoading` para indicar el estado de carga.

---

## 3. Puntos clave explicados

- **Inyectar el servicio en el componente:** `gifService = inject(GifService)`. Angular reutiliza la instancia existente; si no hay ninguna, crea una nueva.
- **El servicio es Singleton:** El constructor del servicio solo se llama una vez. Al navegar entre rutas y volver, los GIFs ya estan en memoria; no se vuelve a hacer la peticion HTTP.
- **`trendingGifsLoading`:** Senal booleana inicializada en `true` en el servicio. Se pone en `false` tras recibir la respuesta. Util para mostrar spinners o estados de carga en el template.
- **Pasar el arreglo de `Gif` al componente:** `[gifs]="gifService.trendingGifs()"`. El input del `GifListComponent` ahora espera `Gif[]` en lugar de `string[]`.
- **Actualizar input en cascada:** Al cambiar el tipo de `gifs` en `GifListComponent` de `string[]` a `Gif[]`, hay que actualizar tambien `GifListItemComponent` para recibir el `url` del objeto `Gif`.
- **`object-cover w-full h-full`:** Clases de Tailwind en las imagenes para que se adapten al espacio del grid sin deformarse.
- **Demo del Singleton:** Agregar `console.log('Servicio creado')` en el constructor del servicio. Al navegar entre rutas y regresar, el log no se repite porque la instancia ya existia.

---

## 4. Ejemplo sencillo

```typescript
// trending-page.component.ts
export default class TrendingPageComponent {
  gifService = inject(GifService);
}
```

```html
<!-- trending-page.component.html -->
<section class="py-5">
  <gif-list [gifs]="gifService.trendingGifs()" />
</section>
```

```typescript
// gif-list.component.ts
export class GifListComponent {
  gifs = input.required<Gif[]>();  // cambio de string[] a Gif[]
}
```

```html
<!-- gif-list.component.html -->
@for (gif of gifs(); track gif.id) {
  <gif-list-item [imageUrl]="gif.url" />
}
```

```typescript
// En GifService
trendingGifsLoading = signal<boolean>(true);

// Dentro de subscribe:
this.trendingGifsLoading.set(false);
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `inject(GifService)` | Inyecta la instancia del servicio en el componente |
| Singleton | El servicio se crea una vez; los GIFs persisten entre navegaciones |
| `trendingGifsLoading` | Senal booleana que indica si la peticion esta en curso |
| `[gifs]="gifService.trendingGifs()"` | Pasa la senal del servicio como input al componente hijo |
| `object-cover w-full h-full` | Clases Tailwind para ajustar imagenes al contenedor del grid |

---

## 6. Resumen final en pocas palabras

Se inyecta `GifService` en `TrendingPageComponent` y se conecta la senal `trendingGifs` al template. El input de `GifListComponent` cambia de `string[]` a `Gif[]`. El servicio es Singleton: los GIFs se cargan una sola vez y persisten entre navegaciones sin repetir la peticion HTTP.
