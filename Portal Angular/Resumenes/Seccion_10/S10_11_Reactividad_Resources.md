# Seccion 10 - Leccion 11: Reactividad con Resources

---

## 1. Titulo de la leccion

**resource de Angular 19: reemplazar isLoading, isError y countries con un solo objeto reactivo**

---

## 2. Que se aprende en esta leccion

Se introduce `resource` de Angular 19, un objeto que gestiona automaticamente los estados de carga, error y valor de una peticion asincrona. Se reemplaza toda la logica manual del componente (senales de estado, suscripcion, callbacks) con un `resource` que reacciona automaticamente al cambio de una senal.

---

## 3. Puntos clave explicados

- **Problema del enfoque anterior:** El componente necesitaba 3 senales manuales (`isLoading`, `isError`, `countries`), bloqueo de peticiones duplicadas, callbacks `next` y `error`, y limpieza de estado. Demasiado codigo repetitivo.
- **`resource()`:** Funcion de Angular 19 (importar de `@angular/core`). Recibe un objeto con dos propiedades: `request` y `loader`.
- **`request`:** Funcion que retorna un objeto con los argumentos que se pasan al `loader`. Debe usar senales para que sea reactiva. Cada vez que cambia la senal, el `resource` vuelve a disparar el `loader` automaticamente.
- **`loader`:** Funcion asincrona (`async`) que recibe los argumentos de `request` desestructurados como `{ request, previous, abortSignal }`. Realiza el trabajo asincrono y retorna el valor.
- **`abortSignal`:** Permite cancelar la peticion si se dispara una nueva antes de que termine la anterior.
- **`request.query`:** Se accede al valor del query desde el argumento desestructurado en el `loader`, no directamente desde `this.query()`.
- **`firstValueFrom` de RxJS:** Como `resource` trabaja con Promesas, se usa `await firstValueFrom(observable)` para convertir el Observable del servicio en una Promesa que resuelve con el primer valor emitido.
- **Condicion de seguridad en loader:** Si `request.query` esta vacio, retornar `[]` inmediatamente sin hacer la peticion HTTP.
- **Properties del resource:** `value` (senal con el dato), `hasValue` (booleano si tiene dato), `isLoading` (senal), `error` (senal), `status` (Idle/Loading/Resolved/Error/Reloading/Local), `reload()`, `set()`, `update()`.
- **En el template:** Usar `countryResource.hasValue()` para el `@if`, y `countryResource.value()!` (con `!`) dentro del bloque porque ya verificamos que existe.
- **Comparacion con TanStack Query:** El patron es muy similar; gestiona automaticamente los estados de la peticion.

---

## 4. Ejemplo sencillo

```typescript
// by-capital-page.component.ts
query = signal('');

countryResource = resource({
  request: () => ({ query: this.query() }),
  loader: async ({ request }) => {
    if (!request.query) return [];
    return await firstValueFrom(
      this.countryService.searchByCapital(request.query)
    );
  }
});

onSearch(query: string): void {
  this.query.set(query);
  // No hay mas codigo aqui; el resource se dispara automaticamente
}
```

```html
<!-- by-capital-page.component.html -->
@if (countryResource.error()) {
  <p>{{ countryResource.error() }}</p>
}
@if (countryResource.hasValue()) {
  <country-list [countries]="countryResource.value()!" />
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `resource()` | Funcion de Angular 19 para gestionar peticiones asincronas con senales |
| `request` | Funcion del resource que retorna los argumentos del loader; debe usar senales |
| `loader` | Funcion async del resource que realiza la peticion; retorna una Promesa |
| `firstValueFrom(obs)` | Convierte un Observable en una Promesa que resuelve con el primer valor |
| `abortSignal` | Argumento del loader para cancelar peticiones anteriores |
| `resource.value()` | Senal con el dato retornado por el loader |
| `resource.hasValue()` | Verdadero si el resource tiene un valor disponible |
| `resource.isLoading()` | Senal booleana; verdadera mientras el loader esta ejecutandose |
| `resource.error()` | Senal con el error si el loader lanzo una excepcion |
| `resource.reload()` | Fuerza volver a ejecutar el loader |

---

## 6. Resumen final en pocas palabras

`resource` de Angular 19 reemplaza todas las senales manuales de estado (`isLoading`, `isError`, `countries`) y la logica de `subscribe` con un unico objeto reactivo. La propiedad `request` define los argumentos reactivos y `loader` ejecuta la peticion asincrona. Al cambiar la senal del query, el resource se vuelve a disparar automaticamente. Como trabaja con Promesas, se usa `firstValueFrom` para convertir el Observable del servicio.
