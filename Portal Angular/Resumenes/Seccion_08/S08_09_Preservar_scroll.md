# Seccion 8 - Leccion 09: Preservar Posicion del Scroll

---

## 1. Titulo de la leccion

**ScrollStateService, AfterViewInit y restaurar el scroll al reconstruir el componente**

---

## 2. Que se aprende en esta leccion

Se crea `ScrollStateService` para guardar la posicion del scroll en memoria, se guarda `scrollTop` en cada evento de scroll, y se restaura la posicion al reconstruir el componente implementando el hook de ciclo de vida `ngAfterViewInit`.

---

## 3. Puntos clave explicados

- **Por que en memoria y no LocalStorage:** El scroll esta ligado a los GIFs en memoria. Si se purga el LocalStorage, los GIFs desaparecen pero el scroll guardado apuntaria a contenido inexistente. Es mas coherente guardar ambos en memoria.
- **`ScrollStateService`:** Servicio en `shared/services/scroll-state.service.ts` con `providedIn: 'root'`. Contiene la senal `trendingScrollState = signal<number>(0)`.
- **Encapsulacion recomendada:** Se recomienda hacer la senal `private` y exponer un metodo `setScrollState(page, value)` para controlar desde donde se puede modificar. La senal publica es accesible por cualquier componente y dificulta el rastreo de cambios.
- **Guardar en `onScroll`:** Cada vez que se detecta scroll, se llama `scrollStateService.trendingScrollState.set(scrollTop)` para guardar la posicion actual.
- **`ngAfterViewInit`:** Hook del ciclo de vida de Angular que se ejecuta cuando la vista del componente (y sus hijos) ya fueron renderizados. Es el momento correcto para interactuar con el DOM.
- **`implements AfterViewInit`:** El componente debe declarar que implementa esta interfaz, importada de `@angular/core`.
- **Restaurar el scroll:** Dentro de `ngAfterViewInit`, se toma `scrollDivRef` y se asigna `scrollDiv.scrollTop = this.scrollStateService.trendingScrollState()`. Esto mueve el scroll instantaneamente al valor guardado.
- **El efecto es invisible:** Angular destruye y recrea el componente tan rapido que el usuario no percibe el cambio; solo ve que el scroll esta donde lo dejo.
- **Mejora con `Record<string, number>`:** Se puede generalizar el servicio usando `signal<Record<string, number>>({})` donde la llave es el nombre de la pagina y el valor es su posicion de scroll. Mas flexible para multiples paginas.

---

## 4. Ejemplo sencillo

```typescript
// shared/services/scroll-state.service.ts
@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  trendingScrollState = signal<number>(0);
}
```

```typescript
// trending-page.component.ts
import { AfterViewInit } from '@angular/core';

export default class TrendingPageComponent implements AfterViewInit {
  private scrollStateService = inject(ScrollStateService);

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;
    // Restaurar posicion guardada
    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
  }

  onScroll(event: Event): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if (!scrollDiv) return;

    const { scrollTop, clientHeight, scrollHeight } = scrollDiv;

    // Guardar posicion actual
    this.scrollStateService.trendingScrollState.set(scrollTop);

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    if (isAtBottom) this.gifService.loadTrendingGifs();
  }
}
```

```typescript
// Version generalizada del servicio (para multiples paginas)
@Injectable({ providedIn: 'root' })
export class ScrollStateService {
  pagesScrollState = signal<Record<string, number>>({
    trending: 0,
    search: 0
  });
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ScrollStateService` | Servicio en `shared/services/` que guarda posiciones de scroll en memoria |
| `trendingScrollState` | Senal numerica con la posicion del scroll de la pagina Trending |
| `ngAfterViewInit` | Hook que se ejecuta cuando la vista ya esta renderizada; ideal para interactuar con el DOM |
| `implements AfterViewInit` | Declaracion en la clase para usar el hook |
| `scrollDiv.scrollTop = valor` | Mueve el scroll del elemento a la posicion indicada |
| `Record<string, number>` | Tipo para generalizar el servicio a multiples paginas |
| Encapsulacion de senales | Hacer la senal `private` y exponer metodos para modificarla |

---

## 6. Resumen final en pocas palabras

`ScrollStateService` guarda la posicion del scroll en una senal en memoria. En cada evento `onScroll` se actualiza el valor. Al reconstruir el componente, `ngAfterViewInit` lee el valor guardado y restaura `scrollDiv.scrollTop`. El proceso es tan rapido que el usuario no nota que el componente fue destruido y recreado.
