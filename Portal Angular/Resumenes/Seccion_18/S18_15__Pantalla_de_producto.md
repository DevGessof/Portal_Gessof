# Pantalla de producto

## ¿Qué se aprende?

En esta lección se implementa la página de detalle de un producto individual. Se crea un nuevo método en el servicio, se lee el parámetro dinámico de la URL usando `ActivatedRoute`, se construye un `rxResource` para la petición HTTP y se monta el template con un spinner de carga, el título y la descripción del producto. El carrusel de imágenes se deja preparado para la siguiente lección.

---

## Puntos clave

**Objetivo de la lección**

Al hacer clic en el título de una tarjeta de producto, la aplicación navega a `/product/:idSlug`. En esa pantalla se muestra el detalle del producto: título, descripción e imágenes (estas últimas como carrusel, en la siguiente clase).

**Nuevo método en el servicio: `getProductByIdSlug`**

En `products.service.ts` se agrega:

```typescript
getProductByIdSlug(idSlug: string): Observable<Product> {
  return this.http.get<Product>(`${this.baseUrl}/products/${idSlug}`);
}
```

El endpoint acepta tanto el UUID como el slug del producto. Ambos son únicos en la base de datos, por lo que funcionan igual de rápido.

**Leer el parámetro de la URL con `ActivatedRoute`**

En el componente `product-page` se inyecta `ActivatedRoute`:

```typescript
activatedRoute = inject(ActivatedRoute);
```

Luego se toma el parámetro `idSlug` usando el snapshot, ya que esta pantalla no cambia dinámicamente desde ella misma:

```typescript
productIdSlug = this.activatedRoute.snapshot.params['idSlug'];
```

El uso de `snapshot` es adecuado aquí porque el usuario no puede navegar de un producto a otro sin salir de la pantalla.

**`rxResource` para el detalle del producto**

Se crea el recurso reactivo que llama al servicio:

```typescript
productResource = rxResource({
  request: () => ({ idSlug: this.productIdSlug }),
  loader: ({ request }) => this.productService.getProductByIdSlug(request.idSlug)
});
```

El `rxResource` expone `isLoading()`, `hasValue()` y `value()` para usar en el template.

**Template: spinner y contenido**

Se usa `@if` para mostrar condicionalmente el spinner mientras carga y el contenido cuando ya hay datos:

```html
@if (productResource.isLoading()) {
  <div class="flex justify-center items-center h-screen">
    <span class="loading loading-spinner loading-lg"></span>
  </div>
}

@if (productResource.hasValue()) {
  <div class="grid grid-cols-2 gap-3">
    <!-- Espacio para el carrusel de imágenes (siguiente lección) -->

    <div>
      <h2 class="text-2xl font-bold font-montserrat">
        {{ productResource.value()?.title }}
      </h2>
      <div class="divider"></div>
      <p>{{ productResource.value()?.description }}</p>
    </div>
  </div>
}
```

Las clases `loading`, `loading-spinner` y `loading-lg` provienen de daisyUI y muestran un indicador giratorio.

**Enlace clickeable en `product-card`**

Para que el título de la tarjeta también navegue a la pantalla de detalle, se agrega `routerLink` al elemento `h2` dentro del componente `product-card`, con clases de Tailwind para simular la apariencia de un enlace:

```html
<h2 [routerLink]="['/product', product().slug]"
    class="cursor-pointer hover:underline text-2xl font-bold font-montserrat text-accent">
  {{ product().title }}
</h2>
```

**Nota sobre manejo de errores**

En esta lección no se maneja el caso en que el producto no se encuentre (error 404). Se menciona como algo a resolver en el futuro.

---

## Ejemplo sencillo

Imagina que en una tienda en línea haces clic en el nombre de una prenda y llegas a una página con toda la información de esa prenda. Angular toma el identificador de la URL (el slug), lo envía al servidor, recibe los datos del producto y los muestra. Mientras espera la respuesta, muestra un círculo giratorio para que el usuario sepa que algo está cargando.

---

## Palabras clave y elementos importantes

- `getProductByIdSlug(idSlug: string)` — método del servicio que retorna un `Observable<Product>`
- `ActivatedRoute` — servicio de Angular para acceder a los parámetros de la ruta activa
- `snapshot.params['idSlug']` — lectura del parámetro de URL en un único momento (no reactiva)
- `rxResource` — recurso reactivo que conecta el Observable al sistema de señales
- `productResource.isLoading()` — señal que indica si la petición está en curso
- `productResource.hasValue()` — señal que indica si ya hay datos disponibles
- `productResource.value()` — señal con el objeto `Product` recibido del servidor
- `loading loading-spinner loading-lg` — clases de daisyUI para el indicador de carga
- `grid grid-cols-2` — layout de dos columnas con Tailwind CSS
- `divider` — clase de daisyUI para una línea separadora visual
- `cursor-pointer` / `hover:underline` — clases de Tailwind para simular un enlace en un `h2`

---

## Resumen final

Esta lección conecta la tarjeta de producto con su pantalla de detalle. Se crea el método `getProductByIdSlug` en el servicio, se lee el slug desde la URL con `ActivatedRoute.snapshot`, se construye un `rxResource` para la petición y se monta un template que muestra un spinner de carga seguido del título y la descripción del producto. El espacio para el carrusel de imágenes queda preparado para la siguiente lección.
