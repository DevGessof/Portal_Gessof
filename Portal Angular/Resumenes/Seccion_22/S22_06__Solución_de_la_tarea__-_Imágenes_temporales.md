# Solución de la tarea — Imágenes temporales

## ¿Qué se aprende?

Esta lección resuelve la tarea de la clase anterior: hacer que las imágenes seleccionadas por el usuario (todavía no subidas al backend) aparezcan también en el carrusel Swiper de la parte superior del formulario. Para lograrlo se crea una señal `computed` que combina las imágenes del producto con las temporales, se actualiza el `ProductImagePipe` para que no transforme URLs que empiecen con `blob:`, y se resuelve un problema de sincronización entre el carrusel (librería externa) y el ciclo de vida de Angular mediante `ngOnChanges` y la destrucción controlada del Swiper.

---

## Puntos clave

**Señal `computed` para combinar imágenes**

En el componente `product-details` se crea una señal computada que une las imágenes actuales del producto con las imágenes temporales seleccionadas por el usuario:

```typescript
imagesToCarousel = computed(() => {
  const currentProductImages = this.product().images;
  return [...currentProductImages, ...this.tempImages()];
});
```

- `computed` se recalcula automáticamente cuando cambia la señal `product` o la señal `tempImages`.
- El spread `[...A, ...B]` crea un nuevo arreglo con ambos grupos.
- Esta señal se pasa como `input` al componente `product-carousel` en el HTML.

**Actualización del `ProductImagePipe`**

El carrusel pasa cada URL por el `ProductImagePipe` antes de mostrarla. Como las URLs temporales empiezan con `blob:`, el pipe las transformaba incorrectamente añadiendo el `baseUrl` del servidor. Se añade una condición nueva al pipe:

```typescript
if (typeof value === 'string' && value.startsWith('blob:')) {
  return value;
}
```

- `typeof value === 'string'` es necesario porque el valor también puede ser un arreglo.
- Con el `&&` encadenado se verifica que empieza con `"blob:"`.
- Si se cumple la condición, el valor se devuelve tal cual, sin ningún procesamiento adicional.

**Problema de sincronización con el Swiper**

Cuando el input `images` del componente `product-carousel` cambia (porque el usuario seleccionó imágenes), Angular actualiza los datos pero el Swiper (librería JavaScript externa) no detecta ese cambio porque no está integrado en el sistema de detección de cambios de Angular. Las imágenes aparecen en el DOM pero el Swiper sigue funcionando con su estructura HTML original.

**Solución con `ngOnChanges` y destrucción del Swiper**

Se implementa el ciclo de vida `ngOnChanges` en `product-carousel`:

```typescript
ngOnChanges(changes: SimpleChanges): void {
  if (changes['images'].firstChange) return;
  // Solo se ejecuta cuando el input cambia después de la inicialización
  if (!this.swiper) return;
  this.swiper.destroy(true, true); // destruye instancia y limpia estilos
  // reinicializar tras 100ms para que el DOM se reconstruya primero
}
```

Pasos completos de la solución:

1. La lógica de inicialización del Swiper se extrae a un método separado `swiperInit()`.
2. En `ngAfterViewInit` se llama `this.swiperInit()` como antes.
3. La instancia del Swiper se guarda en una propiedad de clase `swiper: Swiper | undefined`.
4. En `ngOnChanges`, si no es el primer cambio, se llama `this.swiper.destroy(true, true)` para destruir la instancia y limpiar los estilos que Swiper había añadido al DOM.
5. Se usa `setTimeout(() => this.swiperInit(), 100)` para esperar 100 milisegundos antes de reinicializar. Este breve delay es necesario porque Angular reconstruye el DOM casi instantáneamente pero no de forma síncrona; sin el timeout el Swiper se reinicializa antes de que el DOM esté listo.

**Por qué se usa `setTimeout` de 100ms**

Los cambios del input llegan muy rápido y el Swiper se reinicializaría antes de que Angular termine de actualizar el DOM. Esperar 100 milisegundos (imperceptibles para el usuario) garantiza que el DOM ya está en su estado final cuando se crea la nueva instancia de Swiper.

**`nativeElement.querySelector` para limpiar el DOM interno del Swiper**

Se muestra cómo usar `viewChild` + `nativeElement.querySelector` para acceder a elementos internos del Swiper (como `swiper-pagination`) y limpiar su `innerHTML` antes de reinicializar, asegurando que los bullets de paginación se regeneren correctamente. Esto enseña a usar `querySelector` de forma segura y acotada a un nativeElement específico (no al documento completo), lo que funciona aunque haya varios Swipers en la misma página.

**Nota sobre borrar imágenes**

Borrar una imagen existente del producto requeriría un endpoint en el backend que no está implementado en este proyecto. Sería una petición a un RESTful API para eliminar el archivo y actualizar la lista de imágenes del producto.

---

## Ejemplo sencillo

El problema del Swiper es como un tablón de anuncios físico al que alguien le añade carteles nuevos mientras el tablón ya estaba terminado: la estructura del tablón no cambia sola. La solución es desmontarlo (`.destroy()`), esperar un momento a que el pintor (Angular) ponga los carteles nuevos en la pared, y luego volver a montarlo (`swiperInit()`) para que quede sincronizado con el contenido actual.

---

## Palabras clave y elementos importantes

- `imagesToCarousel = computed(() => [...product().images, ...tempImages()])` — señal computada que combina imágenes guardadas e imágenes temporales para el carrusel
- `ProductImagePipe` — pipe actualizado con condición `typeof value === 'string' && value.startsWith('blob:')` para devolver URLs temporales sin transformar
- `ngOnChanges(changes: SimpleChanges)` — ciclo de vida de Angular que se dispara cuando cambia un `input`; se usa para detectar cuándo cambia el listado de imágenes
- `changes['images'].firstChange` — propiedad que indica si es el primer cambio del input; si es `true` se hace `return` para no reinicializar en la carga inicial
- `swiper.destroy(true, true)` — destruye la instancia del Swiper y limpia los estilos que había añadido al DOM
- `swiperInit()` — método extraído con la lógica de inicialización del Swiper, llamado tanto en `ngAfterViewInit` como tras la destrucción
- `setTimeout(() => swiperInit(), 100)` — espera 100ms para que el DOM se actualice antes de reinicializar el Swiper
- `nativeElement.querySelector('.swiper-pagination')` — selecciona un elemento interno dentro del `nativeElement` de un `viewChild`; más seguro que `document.querySelector` cuando hay múltiples instancias

---

## Resumen final

La tarea consistía en mostrar las imágenes temporales también en el carrusel. La solución tiene tres partes: (1) crear una señal `computed` que une `product().images` con `tempImages()` y pasarla al `product-carousel`; (2) actualizar `ProductImagePipe` para que devuelva sin transformar cualquier URL que empiece con `blob:`; (3) resolver el problema de sincronización del Swiper implementando `ngOnChanges` que, al detectar un cambio en el input `images`, destruye la instancia actual del Swiper y la reinicializa 100ms después para que el DOM esté listo.
