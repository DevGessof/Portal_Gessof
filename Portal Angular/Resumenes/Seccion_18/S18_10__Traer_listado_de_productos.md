# Traer listado de productos

## ¿Qué se aprende?

En esta lección se realiza la primera petición HTTP real desde Angular hacia el backend de TesloShop. Se crea la interfaz TypeScript que representa la respuesta del servidor, se configura el cliente HTTP en la aplicación y se construye un servicio que expone el método para obtener los productos.

---

## Puntos clave

**Verificar el backend antes de comenzar**

Es necesario tener Docker corriendo (o al menos su demonio activo) para que la base de datos esté disponible. El backend de NestJS corre en `localhost:3000`. Si se accede a la raíz puede mostrar un error por falta de `index.html`, pero el API sigue funcionando correctamente.

**Explorar la API con Postman**

Al hacer una petición GET a `localhost:3000/api/products` se obtiene una respuesta paginada. Por defecto trae 10 productos de 52 totales. Cada producto contiene: `id` (UUID), `title`, `price`, `description`, `slug`, `stock`, `sizes`, `gender`, `tags`, `images` (arreglo con el nombre del archivo), y el `user` que lo creó. Las rutas que crean o modifican productos requieren autenticación; consultar productos es abierto.

**Crear la interfaz con "Paste JSON as Code"**

Se copia la respuesta de Postman, se crea el archivo `src/app/products/interfaces/product.interface.ts` y se usa la extensión "Paste JSON as Code" (también conocida como quicktype.io) desde la paleta de comandos. Al nombre raíz se le pone `ProductsResponse`. Esta herramienta genera automáticamente las interfaces TypeScript. Para obtener mejores resultados (más tallas en `sizes`, mejor inferencia), conviene repetir el proceso con un límite de 52 para tener todos los productos como muestra.

Se recomienda ajustar manualmente el resultado: eliminar tipos innecesarios como `Tag`, y separar la interfaz `User` a su propio archivo en `src/app/auth/interfaces/user.interface.ts`. Luego se corrige la importación con `Ctrl + .` usando el alias `@auth/interfaces`.

**Configurar HttpClient en app.config**

Para poder hacer peticiones HTTP se agrega `provideHttpClient(withFetch())` en el arreglo de providers de `app.config.ts`. El uso de `withFetch()` indica que se usará el estándar Fetch del navegador en lugar del XMLHttpRequest tradicional, lo que tiene ventajas al trabajar con interceptores.

**Crear el servicio `products.service.ts`**

En `src/app/products/services/products.service.ts` se crea la clase `ProductsService` usando el snippet `a-service`. Dentro se inyecta `HttpClient` con la función `inject()`:

```typescript
private http = inject(HttpClient);
```

Se crea el método `getProducts()` que realiza una petición GET y retorna un `Observable<ProductsResponse>`:

```typescript
getProducts() {
  return this.http.get<ProductsResponse>('http://localhost:3000/api/products').pipe(
    tap(console.log)
  );
}
```

El operador `tap` de RxJS permite observar la respuesta (por ejemplo con `console.log`) sin modificarla.

**Usar el servicio desde `home-page`**

En el componente `home-page` se inyecta el servicio y se crea un `rxResource` para conectarlo al template reactivo:

```typescript
productsService = inject(ProductsService);

productsResource = rxResource({
  request: () => ({}),
  loader: () => this.productsService.getProducts()
});
```

El `rxResource` expone señales como `isLoading`, `isError` y `value` para usar en el template.

**Nota sobre valores en duro**

La URL `http://localhost:3000/api/products` está escrita directamente en el servicio. Esto se mejora en la siguiente lección con variables de entorno.

---

## Ejemplo sencillo

Imagina que tienes una tienda en línea y quieres mostrar los productos del catálogo. Tu aplicación Angular necesita pedirle al servidor la lista de productos. Para eso se define primero cómo luce esa respuesta (la interfaz), luego se crea un "mensajero" (el servicio con HttpClient) que va a buscarla, y finalmente un componente que le pide al mensajero que traiga los datos al cargar la página.

---

## Palabras clave y elementos importantes

- `provideHttpClient(withFetch())` — configura el cliente HTTP en `app.config.ts`
- `HttpClient` — clase de Angular para hacer peticiones HTTP
- `inject(HttpClient)` — forma moderna de inyectar dependencias sin constructor
- `ProductsResponse` — interfaz que describe la respuesta del endpoint `/api/products`
- `products.service.ts` — servicio ubicado en `src/app/products/services/`
- `getProducts()` — método que retorna un `Observable<ProductsResponse>`
- `tap` — operador de RxJS para efectos secundarios como `console.log`
- `rxResource` — recurso reactivo que conecta un Observable al sistema de señales
- `Paste JSON as Code` — extensión/herramienta para generar interfaces TypeScript desde JSON
- `user.interface.ts` — interfaz del usuario separada en `src/app/auth/interfaces/`

---

## Resumen final

En esta lección se completa el primer ciclo de comunicación entre Angular y el backend: se explora la API en Postman, se genera la interfaz TypeScript automáticamente a partir del JSON real, se configura `HttpClient` en la aplicación, se crea el servicio `ProductsService` con el método `getProducts()` usando `Observable` y el operador `tap`, y finalmente se conecta ese Observable al componente `home-page` mediante `rxResource`. La URL del backend está en duro como punto de partida, y se mejorará en la siguiente lección con variables de entorno.
