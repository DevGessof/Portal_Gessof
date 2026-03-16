# Swiper — Dot fix

## ¿Qué se aprende?

Esta lección es opcional y profundiza en la solución al problema de los bullets de paginación del Swiper (los "puntitos") que no se regeneraban correctamente al reinicializar el carrusel. Se explica cómo limpiar el contenido HTML interno del elemento `swiper-pagination` usando `nativeElement.querySelector` antes de reinicializar el Swiper, y se introduce el uso de `setTimeout` de 100ms para garantizar que el DOM esté listo antes de crear la nueva instancia.

---

## Puntos clave

**El problema: los bullets de paginación no se regeneran bien**

Cuando el Swiper se destruye y se reinicializa, la librería añade bullets de paginación al elemento `.swiper-pagination`. Si ese elemento ya contiene bullets de la inicialización anterior, al reinicializar quedan duplicados o en un estado incorrecto. El problema ocurre porque los cambios del input en Angular llegan más rápido de lo que el Swiper puede detectar que el DOM fue actualizado.

**`nativeElement.querySelector` para acceder a elementos internos**

En lugar de usar `document.querySelector('.swiper-pagination')` (que encontraría el primero que exista en toda la página, problemático si hay varios Swipers), se usa la referencia del `viewChild`:

```typescript
const paginationEl = this.swiperDiv().nativeElement
  .querySelector('.swiper-pagination') as HTMLDivElement;

paginationEl.innerHTML = '';
```

- `this.swiperDiv()` — invoca la señal del `viewChild` para obtener el `ElementRef`.
- `.nativeElement.querySelector('.swiper-pagination')` — busca el elemento de paginación únicamente dentro del div del Swiper actual, no en toda la página.
- `paginationEl.innerHTML = ''` — limpia todo el HTML interno generado por Swiper en la inicialización anterior, dejando el elemento en su estado original.
- El cast `as HTMLDivElement` es necesario para que TypeScript proporcione autocompletado sobre las propiedades del elemento.

**`setTimeout` de 100ms como solución al problema de sincronización**

El nodo raíz del problema es que los cambios de señales en Angular son casi instantáneos pero asincrónicos respecto al ciclo de renderizado del DOM. Si se llama `swiperInit()` inmediatamente después de `destroy()`, el Swiper se inicializa antes de que Angular haya reconstruido el HTML de los slides.

Envolver la reinicialización en un `setTimeout` de 100ms resuelve esto:

```typescript
ngOnChanges(changes: SimpleChanges): void {
  if (changes['images'].firstChange) return;
  if (!this.swiper) return;
  this.swiper.destroy(true, true);

  const paginationEl = this.swiperDiv().nativeElement
    .querySelector('.swiper-pagination') as HTMLDivElement;
  paginationEl.innerHTML = '';

  setTimeout(() => this.swiperInit(), 100);
}
```

100 milisegundos son imperceptibles para el usuario pero suficientes para que Angular complete el ciclo de renderizado y el DOM esté en su estado final antes de crear la nueva instancia del Swiper.

**Cuándo aplica este problema**

Este problema solo ocurre en el panel administrativo cuando el usuario selecciona nuevas imágenes. En la tienda (store-front), el Swiper se crea una sola vez con las imágenes ya cargadas del producto y el input nunca cambia, por lo que no hay problema de sincronización.

**Reflexión sobre librerías externas en Angular**

El instructor señala que este tipo de interacciones (destruir y reinicializar manualmente, limpiar el DOM, usar `setTimeout`) son propias de integrar librerías JavaScript que no están escritas para Angular. Si se usara un componente Swiper creado nativamente para Angular, este tendría acceso completo al ciclo de vida del framework y no requeriría este tipo de intervención manual.

---

## Ejemplo sencillo

Es como reiniciar un juego de mesa a la mitad de una partida: primero hay que recoger todas las fichas de la partida anterior (`paginationEl.innerHTML = ''`), luego esperar que el tablero se limpie completamente (los 100ms del `setTimeout`), y solo entonces repartir las nuevas fichas (`swiperInit()`). Si se salta algún paso el tablero queda en un estado mixto.

---

## Palabras clave y elementos importantes

- Clase opcional — esta lección solo es necesaria si se quiere que los bullets de paginación funcionen correctamente al cambiar las imágenes del carrusel en el panel administrativo
- `nativeElement.querySelector('.swiper-pagination')` — selecciona el elemento de paginación dentro del contenedor del Swiper actual, no en toda la página
- `as HTMLDivElement` — cast de TypeScript para obtener autocompletado sobre el elemento del DOM
- `paginationEl.innerHTML = ''` — limpia los bullets de paginación generados por la inicialización anterior del Swiper
- `setTimeout(() => swiperInit(), 100)` — espera 100ms para que el DOM se actualice antes de reinicializar el Swiper
- `swiper.destroy(true, true)` — destruye la instancia del Swiper y limpia los estilos añadidos al DOM
- Problema de timing — el DOM de Angular se actualiza casi instantáneamente pero de forma asincrónica; sin el delay, el Swiper se inicializa antes de que el DOM esté listo

---

## Resumen final

Esta lección opcional resuelve el problema de los bullets duplicados o incorrectos al reinicializar el Swiper. La solución completa en `ngOnChanges` es: verificar que no sea el primer cambio, destruir el Swiper con `destroy(true, true)`, limpiar el `innerHTML` del elemento `.swiper-pagination` usando `nativeElement.querySelector`, y esperar 100ms con `setTimeout` antes de llamar `swiperInit()`. Esto enseña a usar `nativeElement.querySelector` de forma segura y acotada, y a entender por qué las librerías externas a veces requieren un manejo especial del timing al integrarse con Angular.
