# Lección 06 - Caché de resultados de búsqueda

---

## ¿Qué se aprende en esta lección?

Se implementa un sistema de caché en el servicio de países para evitar hacer la misma petición HTTP al servidor cuando ya se tiene la respuesta guardada. Esto mejora el rendimiento y reduce el consumo innecesario del API.

---

## Puntos clave explicados

- **El problema que resuelve el caché:** Si el usuario busca "Tegucigalpa", borra el texto y vuelve a escribir "Tegucigalpa", sin caché se hace una nueva petición al servidor aunque ya se tenía esa información. El caché evita ese viaje innecesario.

- **Dónde se implementa:** Dentro del servicio `country.service`, creando una propiedad privada de tipo `Map`.

- **Uso de `Map` en JavaScript:** Un `Map` es una estructura de datos que almacena pares de clave-valor. En este caso, la clave es el término de búsqueda (string) y el valor es el arreglo de países devuelto por el servidor.

- **Diferencia entre `Map` y `Set`:**
  - `Map`: guarda pares clave-valor; útil cuando necesitas buscar por una llave y obtener un valor asociado.
  - `Set`: guarda valores únicos sin duplicados; útil para primitivos como números o strings cuando no quieres repetidos.

- **Verificar si ya existe en caché:** Antes de hacer la petición HTTP, se verifica con `.has(query)` si el término ya fue buscado antes.

- **Retornar desde caché:** Si ya existe, se usa `of()` de RxJS para devolver el valor almacenado como si fuera un Observable, sin ir al servidor.

- **Guardar en caché con `tap`:** Si la respuesta viene del servidor, se usa el operador `tap` de RxJS para guardar el resultado en el `Map` usando `.set(query, countries)`, sin interrumpir el flujo del Observable.

- **Operador `??` (nullish coalescing):** Se usa para devolver un arreglo vacío si el caché no contiene valor para esa clave, evitando errores.

---

## Ejemplo sencillo

```typescript
// Caché privado: clave = término buscado, valor = lista de países
private queryCacheCapital = new Map<string, Country[]>();

searchByCapital(query: string): Observable<Country[]> {
  // Si ya existe en caché, retornarlo directamente
  if (this.queryCacheCapital.has(query)) {
    return of(this.queryCacheCapital.get(query) ?? []);
  }

  // Si no existe, ir al servidor y guardarlo en caché
  return this.http.get<...>(url).pipe(
    map(...), // transformar la respuesta
    tap(countries => this.queryCacheCapital.set(query, countries)),
    catchError(...)
  );
}
```

---

## Funciones, palabras clave o elementos importantes

- **`Map`:** Estructura de datos de JavaScript que guarda pares clave-valor con métodos como `.has()`, `.get()`, `.set()` y `.size`.
- **`Set`:** Estructura de datos de JavaScript que guarda valores únicos sin duplicados.
- **`of()`:** Función de RxJS que convierte un valor normal (como un arreglo) en un Observable.
- **`tap()`:** Operador de RxJS que permite ejecutar efectos secundarios (como guardar en caché) sin modificar el valor del Observable.
- **`.has(key)`:** Método de `Map` que verifica si una clave existe.
- **`.get(key)`:** Método de `Map` que obtiene el valor asociado a una clave.
- **`.set(key, value)`:** Método de `Map` que guarda o actualiza un par clave-valor.
- **`??` (nullish coalescing):** Operador que devuelve el valor de la derecha si el de la izquierda es `null` o `undefined`.

---

## Resumen final en pocas palabras

El caché evita peticiones repetidas al servidor almacenando los resultados en un `Map`. Antes de cada búsqueda se verifica si la respuesta ya existe; si es así, se devuelve directamente. Si no, se consulta el servidor y se guarda el resultado para futuros usos.
