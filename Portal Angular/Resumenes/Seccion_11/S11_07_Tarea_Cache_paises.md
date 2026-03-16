# Lección 07 - Tarea: Caché de países (searchByCountry)

---

## ¿Qué se aprende en esta lección?

Esta lección es una tarea práctica. El instructor pide al estudiante que implemente el caché para la búsqueda por nombre de país (`searchByCountry`), siguiendo exactamente el mismo patrón que se aplicó en la lección anterior para la búsqueda por capital. Luego muestra la solución.

---

## Puntos clave explicados

- **Objetivo de la tarea:** Implementar el caché en el método `searchByCountry` del servicio de países, de la misma manera que se hizo con `searchByCapital`.

- **Nueva propiedad de caché:** Se crea un nuevo `Map` privado llamado `queryCacheCountry` con la misma estructura: clave string, valor arreglo de países.

- **Lógica idéntica:** Se verifica con `.has(query)` si ya existe la respuesta. Si existe, se devuelve con `of(...)`. Si no, se hace la petición HTTP y se guarda el resultado con `tap` y `.set(query, countries)`.

- **El delay intencional:** La búsqueda por país tiene un `delay` de 2 segundos puesto intencionalmente para observar el estado de carga. Al retornar desde caché, ese delay no se aplica y la respuesta llega instantáneamente.

- **Agregar delay al caché (opcional):** Si se quisiera simular un retraso incluso cuando la respuesta viene del caché, se puede encadenar `.pipe(delay(2000))` al `of(...)` que devuelve el Observable, ya que `of()` también devuelve un Observable y admite operadores.

- **Otras funciones para crear Observables:** Se menciona que además de `of()`, RxJS tiene otras funciones como `interval`, aunque no tienen aplicación en este proyecto por ahora.

---

## Ejemplo sencillo

```typescript
// Nuevo caché para búsqueda por país
private queryCacheCountry = new Map<string, Country[]>();

searchByCountry(query: string): Observable<Country[]> {
  if (this.queryCacheCountry.has(query)) {
    return of(this.queryCacheCountry.get(query) ?? []);
  }

  return this.http.get<...>(url).pipe(
    delay(2000), // delay intencional para ver el loading
    map(...),
    tap(countries => this.queryCacheCountry.set(query, countries)),
    catchError(...)
  );
}
```

---

## Funciones, palabras clave o elementos importantes

- **`queryCacheCountry`:** Nombre del `Map` que almacena las búsquedas por nombre de país.
- **`of()`:** Convierte un arreglo en un Observable para poder devolverlo directamente sin ir al servidor.
- **`tap()`:** Ejecuta un efecto secundario (guardar en caché) sin modificar el valor del Observable.
- **`delay()`:** Operador de RxJS que retrasa la emisión del Observable por el tiempo indicado en milisegundos.
- **`.pipe()`:** Método de un Observable que permite encadenar operadores de RxJS.

---

## Resumen final en pocas palabras

Esta tarea refuerza el patrón de caché aprendido en la lección anterior, aplicándolo ahora a la búsqueda por nombre de país. El principio es siempre el mismo: verificar primero si ya existe la respuesta antes de ir al servidor, y guardarla cuando se recibe por primera vez.
