# Caché de productos

## ¿Qué se aprende?

En esta lección se implementa un caché local en el `ProductsService` para evitar peticiones HTTP repetidas al navegar entre páginas y categorías. Cada combinación única de `limit`, `offset` y `gender` se almacena como entrada en un `Map`. Si esa entrada ya existe, se devuelve directamente sin consultar el servidor.

---

## Puntos clave

**El problema: peticiones repetidas**

Cada vez que el usuario navega a una pantalla ya visitada (por ejemplo, volver a "Mujeres" después de haber estado en "Hombres"), el `rxResource` vuelve a hacer una petición HTTP aunque los datos no hayan cambiado. Eso es lento e innecesario si los productos no se actualizan frecuentemente.

**La solución: un `Map` privado en el servicio**

Se añade una propiedad privada `productsCache` en `ProductsService`, tipada como `Map<string, ProductsResponse>`:

```typescript
private productsCache = new Map<string, ProductsResponse>();
```

Un `Map` de JavaScript permite asociar cualquier string como llave a un objeto como valor. Al ser una propiedad de un servicio singleton (`providedIn: 'root'`), el mapa persiste en memoria durante toda la sesión del usuario.

**Construir la llave del caché**

La llave es una concatenación de los tres parámetros que identifican de forma única una consulta:

```typescript
const key = `${limit}-${offset}-${gender}`;
```

Ejemplos de llaves generadas:
- `9-0-` — home, página 1, sin género
- `9-9-men` — hombres, página 2
- `9-0-kid` — niños, página 1

Si alguno de los tres parámetros cambia, la llave cambia y se considera una consulta diferente.

**Devolver desde caché si la llave existe**

Al inicio del método `getProducts`, antes de hacer la petición HTTP, se comprueba si la llave ya está en el mapa:

```typescript
if (this.productsCache.has(key)) {
  return of(this.productsCache.get(key)!);
}
```

`of()` es una función de RxJS que crea un Observable que emite un valor inmediatamente. Así se mantiene la interfaz del método (siempre retorna un Observable) sin tocar el código que lo consume.

**Guardar en caché tras la primera petición**

En el `pipe` de la petición HTTP, se añade un operador `tap` que almacena la respuesta en el mapa antes de devolverla al consumidor:

```typescript
return this.http.get<ProductsResponse>(...).pipe(
  tap(response => console.log(response)),          // ya existía
  tap(response => this.productsCache.set(key, response))  // nuevo
);
```

El segundo `tap` no modifica la respuesta; solo la guarda como efecto secundario.

**Comportamiento resultante**

- Primera visita a una pantalla → petición HTTP real, respuesta guardada en el mapa.
- Visitas siguientes a la misma combinación → retorno instantáneo desde el mapa, sin petición HTTP.
- Nueva combinación de página o género → nueva petición, nuevo registro en el mapa.

**Limitaciones de este enfoque y TanStack Query**

Este caché no tiene tiempo de expiración ni mecanismo de invalidación automática. Si los productos cambian en el servidor, el caché mostrará datos desactualizados hasta que el usuario recargue la página. TanStack Query resuelve estos problemas de forma nativa (tiempo de vida configurable, revalidación automática, invalidación manual), por lo que se recomienda para proyectos que requieran un caché más robusto.

---

## Ejemplo sencillo

Imagina que cada vez que buscas una palabra en el diccionario, apuntas la definición en un cuaderno. La próxima vez que necesites esa palabra, consultas el cuaderno en lugar de abrir el diccionario de nuevo. El `Map` es ese cuaderno, la llave es la palabra buscada y la definición almacenada es la respuesta del servidor.

---

## Palabras clave y elementos importantes

- `productsCache` — propiedad privada de tipo `Map<string, ProductsResponse>` que almacena las respuestas en memoria
- `Map` — estructura de datos de JavaScript que asocia llaves únicas a valores; más eficiente que un objeto literal para este uso
- Llave del caché — concatenación `limit-offset-gender` que identifica de forma única cada consulta
- `productsCache.has(key)` — verifica si ya existe una entrada para esa llave
- `of(valor)` — función creadora de Observables de RxJS que emite un valor inmediatamente; permite retornar el caché manteniendo la interfaz Observable
- `productsCache.get(key)!` — obtiene el valor almacenado; el `!` indica a TypeScript que el valor existe (ya se verificó con `has`)
- `tap` — operador de RxJS que ejecuta un efecto secundario sin modificar el valor del Observable; aquí se usa para guardar en el mapa
- `productsCache.set(key, response)` — almacena la respuesta en el mapa con la llave calculada
- Invalidación de caché — proceso de marcar una entrada como obsoleta para forzar una nueva petición; no implementado en esta lección
- TanStack Query — librería externa que gestiona caché, revalidación e invalidación de forma automática

---

## Resumen final

Esta lección implementa un caché manual en `ProductsService` usando un `Map<string, ProductsResponse>`. Antes de cada petición HTTP se construye una llave con `limit`, `offset` y `gender`. Si esa llave ya existe en el mapa, se devuelve la respuesta almacenada como Observable con `of()`. Si no existe, se hace la petición HTTP y se guarda la respuesta en el mapa con `tap`. El resultado es que cada combinación única de página y categoría solo genera una petición HTTP en toda la sesión, mejorando notablemente la velocidad percibida de la aplicación.
