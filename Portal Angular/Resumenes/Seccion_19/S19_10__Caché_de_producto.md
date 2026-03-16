# Caché de producto

## ¿Qué se aprende?

Esta lección aplica la misma estrategia de caché del listado de productos al detalle de un producto individual. Se añade un segundo `Map` en `ProductsService` que almacena cada producto consultado usando su `idSlug` como llave. También se añade la animación `animate-fadeIn` al carrusel de imágenes.

---

## Puntos clave

**La misma estrategia, aplicada al producto individual**

El método `getProductByIdSlug` hace una petición HTTP cada vez que se visita la pantalla de un producto. Si el usuario entra, sale y vuelve a entrar al mismo producto, se repite la petición innecesariamente. La solución es idéntica a la del caché de listados: un `Map` privado en el servicio.

**Nuevo `Map` tipado para productos individuales**

Se añade una propiedad privada con una llave string y un valor de tipo `Product` (singular, no `ProductsResponse`):

```typescript
private productCache = new Map<string, Product>();
```

A diferencia de `productsCache` (en plural), aquí la llave no necesita combinar varios parámetros: el `idSlug` es suficiente para identificar de forma única a cada producto.

**Verificar y devolver desde caché**

Al inicio del método `getProductByIdSlug`, se comprueba si el `idSlug` ya está en el mapa:

```typescript
if (this.productCache.has(idSlug)) {
  return of(this.productCache.get(idSlug)!);
}
```

El operador `!` indica a TypeScript que el valor existe porque se acaba de verificar con `has()`.

**Guardar en caché tras la primera petición**

Se encadena un `tap` al Observable de la petición HTTP para almacenar el producto al recibirlo:

```typescript
return this.http.get<Product>(`${baseUrl}/products/${idSlug}`).pipe(
  tap(product => this.productCache.set(idSlug, product))
);
```

**Usar `delay` para demostrar el caché visualmente**

Para que el efecto sea visible durante el desarrollo, se añade temporalmente un operador `delay(2000)` a la petición HTTP:

```typescript
return this.http.get<Product>(...).pipe(
  delay(2000),
  tap(product => this.productCache.set(idSlug, product))
);
```

Con el `delay` activo, la primera visita a un producto tarda 2 segundos. La segunda visita es instantánea porque ya está en caché. Una vez comprobado el comportamiento, se elimina el `delay`.

**Resultado verificado**

- Primera visita a un producto: carga con 2 segundos de espera (o sin pausa una vez eliminado el delay).
- Segunda visita al mismo producto: carga instantánea desde caché.
- Visita a un producto diferente: nueva petición HTTP (su `idSlug` no está en el mapa).

**Animación `animate-fadeIn` en el carrusel**

Como mejora visual adicional, se añade la clase `animate-fadeIn` a las imágenes del componente `product-carousel`. Esta clase fue definida en `tailwind.config` en una lección anterior de la Sección 18. La animación se dispara al cargar cada imagen, lo que suaviza la transición al entrar a la pantalla de producto.

**Pendiente: invalidación del caché**

Cuando en secciones futuras se permita editar o crear productos, será necesario invalidar las entradas del caché afectadas para que los datos desactualizados no persistan. TanStack Query gestiona esta invalidación de forma automática, lo que refuerza la recomendación de usarlo en proyectos reales.

---

## Ejemplo sencillo

Imagina que cada vez que alguien te pregunta cuánto mide la Torre Eiffel, consultas un libro de referencia. La segunda vez que alguien te lo pregunta, ya lo recuerdas sin necesitar el libro. El `productCache` es tu memoria: la primera consulta requiere buscar en el libro (petición HTTP), las siguientes son instantáneas porque ya lo sabes.

---

## Palabras clave y elementos importantes

- `productCache` — `Map<string, Product>` privado que almacena cada producto por su `idSlug`
- `idSlug` — identificador único del producto usado como llave del caché
- `of(valor)` — crea un Observable que emite el valor almacenado inmediatamente, sin petición HTTP
- `!` (non-null assertion) — indica a TypeScript que el valor no es `null` ni `undefined`
- `tap` — operador de RxJS para ejecutar efectos secundarios; aquí guarda el producto en el mapa
- `delay(ms)` — operador de RxJS que retrasa la emisión un número de milisegundos; útil para probar el caché visualmente
- `animate-fadeIn` — clase de animación CSS definida en Tailwind que aplica una transición de opacidad al aparecer
- Invalidación de caché — marcar entradas como obsoletas cuando los datos fuente cambian; pendiente para secciones futuras
- TanStack Query — librería recomendada para manejo completo de caché, revalidación e invalidación automática

---

## Resumen final

Esta lección extiende el sistema de caché al detalle de producto individual. Se añade `productCache`, un `Map<string, Product>` en `ProductsService`. Al visitar un producto, se verifica si su `idSlug` ya está en el mapa; si es así, se retorna con `of()` de forma instantánea; si no, se hace la petición HTTP y se guarda el resultado con `tap`. Se utiliza `delay(2000)` temporalmente para demostrar el comportamiento del caché de forma visible antes de eliminarlo. Adicionalmente, se añade la clase `animate-fadeIn` al carrusel para mejorar la experiencia visual. Con esto queda completa la Sección 19: paginación reutilizable por URL y caché de datos tanto del listado como del detalle de producto.
