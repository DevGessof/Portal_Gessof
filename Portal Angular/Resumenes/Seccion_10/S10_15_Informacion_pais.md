# Seccion 10 - Leccion 15: Informacion de un Pais

---

## 1. Titulo de la leccion

**searchByAlphaCode, ActivatedRoute snapshot y rxResource en CountryPageComponent**

---

## 2. Que se aprende en esta leccion

Se crea el metodo `searchByAlphaCode` en el servicio, se lee el codigo del pais desde `ActivatedRoute.snapshot.params`, y se usa `rxResource` para cargar los detalles del pais. Se muestra el componente `NotFoundComponent` cuando el codigo no existe.

---

## 3. Puntos clave explicados

- **Endpoint `/alpha/{code}`:** Busca un pais por su codigo alpha (ej: `CR`, `HN`, `CRI`). La respuesta sigue siendo un arreglo aunque siempre devuelva un elemento.
- **`searchByAlphaCode(code: string): Observable<Country | undefined>`:** Retorna el primer elemento del arreglo mapeado. Se usa `.pipe(map(countries => countries[0]))` o `countries.at(0)`. El tipo de retorno es `Country | undefined` porque si no se encuentra nada, el arreglo puede estar vacio.
- **`ActivatedRoute.snapshot.params`:** Forma no reactiva de leer parametros de ruta. Se usa cuando la pagina siempre se desmonta y remonta al navegar (no hay navegacion interna dentro de la misma pagina). Se accede con `inject(ActivatedRoute).snapshot.params['code']`.
- **Snapshot vs Observable:** El snapshot es una "fotografia" del estado actual de la ruta. No se actualiza si el parametro cambia sin desmontar el componente. En este caso es suficiente porque siempre se entra y sale de la pagina.
- **`rxResource` en `CountryPageComponent`:** Usa `countryCode` (string plano, no senal) en la `request`. Como el codigo no cambia mientras se esta en la pagina, `request: () => ({ code: this.countryCode })` es estatico.
- **`countryResource.hasValue()` en el template:** Se usa para el `@if` que decide si mostrar la informacion del pais. Con `!` se le dice a TypeScript que en ese bloque el valor existe.
- **Mostrar error con `NotFoundComponent`:** Si `countryResource.error()` tiene valor, se muestra un componente dedicado en lugar de codigo inline. El HTML del error se extrae a `country/components/not-found/`.

---

## 4. Ejemplo sencillo

```typescript
// country.service.ts
searchByAlphaCode(code: string): Observable<Country | undefined> {
  return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`)
    .pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      map(countries => countries[0]),  // retorna el primero o undefined
      catchError(() => throwError(() => new Error('No se encontro el pais')))
    );
}
```

```typescript
// country-page.component.ts
countryCode = inject(ActivatedRoute).snapshot.params['code'];  // no es senal
countryService = inject(CountryService);

countryResource = rxResource({
  request: () => ({ code: this.countryCode }),
  loader: ({ request }) => this.countryService.searchByAlphaCode(request.code)
});
```

```html
<!-- country-page.component.html -->
@if (countryResource.error()) {
  <app-not-found />
}
@if (countryResource.hasValue()) {
  <h3>{{ countryResource.value()!.name }}</h3>
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `/alpha/{code}` | Endpoint de REST Countries para buscar por codigo alpha |
| `countries[0]` o `countries.at(0)` | Extrae el primer (y unico) pais del arreglo de respuesta |
| `Country \| undefined` | Tipo de retorno cuando el arreglo puede estar vacio |
| `ActivatedRoute.snapshot.params` | Lee parametros de ruta de forma no reactiva (fotografia actual) |
| Snapshot vs Observable de params | Snapshot: estatico; Observable: reactivo. Se usa snapshot cuando la pagina se desmonta al navegar |
| `countryResource.value()!` | El `!` indica a TypeScript que el valor existe (ya se verifico con `hasValue()`) |
| `app-not-found` | Componente dedicado para mostrar el error de pais no encontrado |

---

## 6. Resumen final en pocas palabras

`searchByAlphaCode` usa el endpoint `/alpha/` y retorna el primer elemento del arreglo mapeado. En `CountryPageComponent` se lee el codigo desde `ActivatedRoute.snapshot.params` (no reactivo, suficiente para esta pagina) y se carga el pais con `rxResource`. El template usa `hasValue()` para mostrar datos y `error()` para mostrar `NotFoundComponent`.
