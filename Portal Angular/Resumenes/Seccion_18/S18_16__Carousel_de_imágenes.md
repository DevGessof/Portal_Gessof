# Carrusel de imágenes

## ¿Qué se aprende?

En esta lección se integra la librería externa Swiper para mostrar un carrusel de imágenes en la pantalla de detalle de producto. Se crea un componente reutilizable `product-carousel`, se aprende a inicializar una librería JavaScript de terceros dentro del ciclo de vida de Angular usando `AfterViewInit` y `viewChild`, y se conecta todo con el pipe `productImage` creado anteriormente.

---

## Puntos clave

**Por qué usar un componente separado**

El carrusel puede necesitarse en múltiples lugares del proyecto (pantalla de detalle, carrito de compras, etc.). Crear un componente independiente `product-carousel` permite reutilizarlo en cualquier parte sin duplicar código.

**Instalar Swiper**

Swiper no tiene una implementación nativa para Angular, pero como Angular compila a JavaScript, cualquier librería JavaScript funciona. Se instala con:

```
npm install swiper
```

**Crear el componente `product-carousel`**

Se crea en `src/app/products/components/product-carousel`. El selector se cambia de `app-product-carousel` a simplemente `product-carousel` para evitar el prefijo `app-`.

El componente recibe un input requerido con el arreglo de nombres de imagen:

```typescript
images = input.required<string[]>();
```

**Template del carrusel**

Se usa el HTML base recomendado por la documentación de Swiper (el "Slider main container"). Se le agrega una referencia local `#swiperDiv` para poder tomarlo desde TypeScript:

```html
<div class="swiper" #swiperDiv>
  <div class="swiper-wrapper">
    @for (image of images(); track $index) {
      <div class="swiper-slide">
        <img [src]="image | productImage" class="w-full object-cover" />
      </div>
    }
  </div>
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
</div>
```

Cada imagen pasa por el pipe `productImage` para construir el URL completo o mostrar el placeholder si corresponde.

**Tomar la referencia del elemento con `viewChild`**

En el componente TypeScript se declara una referencia al elemento del DOM:

```typescript
swiperDiv = viewChild.required<ElementRef>('swiperDiv');
```

`viewChild.required` garantiza que el elemento exista, o lanza una excepción si no se encuentra. `ElementRef` permite acceder al elemento HTML nativo.

**Inicializar Swiper con `AfterViewInit`**

Swiper debe inicializarse después de que el DOM esté disponible. Para eso se implementa `AfterViewInit`:

```typescript
implements AfterViewInit

ngAfterViewInit() {
  const element = this.swiperDiv().nativeElement;
  if (!element) return;

  new Swiper(element, {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    modules: [Navigation, Pagination]
  });
}
```

Los módulos `Navigation` y `Pagination` se importan desde `swiper/modules`. Esto activa los controles de navegación (flechas) y los puntos indicadores de página.

**Estilos del carrusel**

En los estilos del componente se define el tamaño del contenedor del swiper:

```css
.swiper {
  width: 100%;
  height: 500px;
}
```

**Importar los estilos de Swiper**

Se importan los estilos CSS de Swiper directamente en el archivo TypeScript del componente:

```typescript
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
```

**Usar el componente en `product-page`**

En el template de `product-page`, donde antes estaba el espacio reservado para imágenes, se coloca el componente pasándole las imágenes del producto:

```html
<product-carousel [images]="productResource.value()?.images ?? []" />
```

El operador `?? []` garantiza que si `images` viene como `undefined`, se pase un arreglo vacío.

---

## Ejemplo sencillo

Imagina que tienes una caja de fotos de un producto y quieres poder hojearlas deslizando el dedo. Swiper es la herramienta que hace eso posible en la web. Angular no la conoce de forma nativa, pero como Angular en el fondo es JavaScript, simplemente se crea la instancia de Swiper apuntando al elemento HTML correcto, y eso es suficiente para que funcione.

---

## Palabras clave y elementos importantes

- `swiper` — librería JavaScript para carruseles, instalada con `npm install swiper`
- `product-carousel` — componente reutilizable creado en `products/components/`
- `images = input.required<string[]>()` — input obligatorio con el arreglo de nombres de imagen
- `viewChild.required<ElementRef>('swiperDiv')` — señal para acceder al elemento HTML del DOM
- `ElementRef` — clase de Angular que envuelve un elemento nativo del DOM
- `#swiperDiv` — referencia local en el template para identificar el contenedor del swiper
- `AfterViewInit` — interfaz del ciclo de vida de Angular; se ejecuta tras renderizar el DOM
- `ngAfterViewInit()` — método donde se inicializa Swiper
- `Navigation` / `Pagination` — módulos de Swiper importados desde `swiper/modules`
- `productImage` — pipe personalizado aplicado a cada imagen del carrusel
- `object-cover` — clase de Tailwind para que la imagen cubra el contenedor sin deformarse
- `?? []` — operador nullish coalescing: devuelve el arreglo vacío si el valor es `undefined`

---

## Resumen final

Esta lección integra Swiper como carrusel de imágenes mediante un componente reutilizable `product-carousel`. Se instala Swiper con npm, se crea el componente con un input requerido de imágenes, se usa `viewChild.required` para obtener la referencia al elemento del DOM, y se inicializa Swiper dentro de `ngAfterViewInit` con los módulos `Navigation` y `Pagination`. Las imágenes se muestran usando el pipe `productImage` para construir las URLs completas. El componente se conecta a `product-page` pasando el arreglo de imágenes del recurso reactivo.
