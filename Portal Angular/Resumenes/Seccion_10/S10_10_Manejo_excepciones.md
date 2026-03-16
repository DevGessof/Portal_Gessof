# Seccion 10 - Leccion 10: Manejo de Excepciones

---

## 1. Titulo de la leccion

**Callbacks next/error en subscribe, catchError y throwError de RxJS**

---

## 2. Que se aprende en esta leccion

Se aprende a manejar errores en Observables usando el objeto de callbacks `{ next, error }` en `.subscribe()`, y el operador `catchError` con `throwError` de RxJS en el servicio para interceptar y relanzar errores con mensajes personalizados.

---

## 3. Puntos clave explicados

- **Objeto de callbacks en `.subscribe()`:** En lugar de pasar solo un callback, se pasa un objeto con tres propiedades opcionales: `next` (cuando llega un valor), `error` (cuando ocurre una excepcion) y `complete` (cuando el Observable termina sin mas valores).
- **Problema del `this` en callbacks:** Si se usan funciones normales (`function`) dentro de `next` o `error`, el `this` no apunta al componente. La solucion es usar funciones de flecha (`=>`).
- **En `next`:** Se reciben los `countries`, se hace `isLoading.set(false)`, `countries.set(countries)`.
- **En `error`:** Se hace `isLoading.set(false)`, `countries.set([])` (limpiar estado), `isError.set(err.message)` para mostrar el mensaje al usuario.
- **`@if (isError())` en el template:** Si hay error, se muestra un `<h3>` con el mensaje en lugar de la tabla. Con `@else` se muestra la tabla normalmente.
- **Operador `catchError` de RxJS:** Se agrega al `.pipe()` del servicio. Intercepta cualquier error del Observable. Recibe el error como parametro.
- **`throwError(() => new Error(mensaje))` de RxJS:** Dentro de `catchError` se puede relanzar el error con un mensaje personalizado. Genera un Observable que emite inmediatamente un error y se detiene. Detiene la cadena de operadores.
- **Template literal en el mensaje:** `\`No se pudo obtener paises con el query: ${query}\`` incluye el query en el mensaje de error.
- **El `err` en el componente:** El error que llega al callback `error` del `subscribe` es el `Error` lanzado por `throwError`. Se accede a su mensaje con `err.message`.
- **Motivacion para `rxResource`:** Todo este codigo manual (`isLoading`, `isError`, `countries`, `next`, `error`, `catchError`) se simplifica drasticamente con `rxResource` de Angular 19, que lo gestiona automaticamente.

---

## 4. Ejemplo sencillo

```typescript
// by-capital-page.component.ts - subscribe con objeto de callbacks
onSearch(query: string): void {
  if (this.isLoading()) return;
  this.isLoading.set(true);
  this.isError.set(null);

  this.countryService.searchByCapital(query)
    .subscribe({
      next: (countries) => {
        this.isLoading.set(false);
        this.countries.set(countries);
      },
      error: (err: Error) => {
        this.isLoading.set(false);
        this.countries.set([]);
        this.isError.set(err.message);
      }
    });
}
```

```typescript
// country.service.ts - catchError en el pipe
import { catchError, throwError, map } from 'rxjs';

searchByCapital(query: string): Observable<Country[]> {
  query = query.toLowerCase();
  return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      catchError(error => {
        console.error('Error fetching:', error);
        return throwError(() => new Error(`No se pudo obtener paises con el query: ${query}`));
      })
    );
}
```

```html
<!-- by-capital-page.component.html -->
@if (isError()) {
  <h3>{{ isError() }}</h3>
} @else {
  <country-list [countries]="countries()" />
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `{ next, error, complete }` | Objeto de callbacks para `.subscribe()`; maneja exito, error y fin |
| `next(value)` | Se ejecuta cuando el Observable emite un valor exitoso |
| `error(err)` | Se ejecuta cuando el Observable lanza un error |
| `complete()` | Se ejecuta cuando el Observable termina sin mas valores |
| `catchError` de RxJS | Operador que intercepta errores en la cadena del Observable |
| `throwError(() => new Error(...))` | Genera un Observable que emite inmediatamente un error y termina |
| Funcion de flecha en callbacks | Preserva el contexto `this` del componente dentro de los callbacks |
| `rxResource` (preview) | Objeto de Angular 19 que elimina todo este codigo manual |

---

## 6. Resumen final en pocas palabras

Los errores en Observables se manejan con el callback `error` en el objeto de `.subscribe()`. En el servicio, `catchError` intercepta el error y `throwError` lo relanza con un mensaje personalizado. El componente limpia el estado y muestra el mensaje con `@if (isError())`. Todo este codigo manual (6+ lineas de gestion de estado) sera reemplazado en la proxima leccion por `rxResource` de Angular 19.
