# Seccion 10 - Leccion 12: Tarea - Buscar Paises

---

## 1. Titulo de la leccion

**Tarea: implementar searchByCountry con resource y agregar RouterLink al listado**

---

## 2. Que se aprende en esta leccion

Se implementa `searchByCountry` en el servicio usando el endpoint `/name/{query}`, se replica el patron `resource` en `ByCountryPageComponent`, y se agrega `RouterLink` en `CountryListComponent` para navegar a la pagina de detalle del pais.

---

## 3. Puntos clave explicados

- **Nuevo endpoint:** `${API_URL}/name/${query}`. Busca paises por nombre. El resto del metodo es identico a `searchByCapital`: misma estructura, mismo mapper, mismo manejo de errores.
- **`searchByCountry(query: string)`:** Se crea en `CountryService`. La unica diferencia con `searchByCapital` es la URL (`/name/` en lugar de `/capital/`). El mapeo y el `catchError` son identicos.
- **Codigo duplicado:** Se reconoce que los dos metodos son casi iguales; solo cambia la URL. Se menciona que se puede optimizar mas adelante con un metodo privado comun.
- **Replicar el resource en `ByCountryPageComponent`:** Se copia el mismo patron de `by-capital-page` (senal `query`, `countryResource` con `resource`, `onSearch` que solo llama `query.set()`), cambiando `searchByCapital` por `searchByCountry`.
- **`CountryListComponent` + `RouterLink`:** Se agrega `[routerLink]="['/dashboard/country/by', country.cca2]"` (o la ruta configurada) al boton "Mas informacion" de la tabla. Se importa `RouterLink` en el componente.
- **Navegacion a `/country/by/CR`:** Al hacer clic en "Mas informacion" de Costa Rica, la URL cambia a `/country/by/CR` y se muestra el componente `CountryPageComponent`.
- **Estado en memoria:** Al regresar desde la pagina de detalle, los resultados de busqueda se pierden porque el state esta en memoria. Se menciona que se abordara en la siguiente seccion.

---

## 4. Ejemplo sencillo

```typescript
// country.service.ts - nuevo metodo
searchByCountry(query: string): Observable<Country[]> {
  query = query.toLowerCase();
  return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`)
    .pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray),
      catchError(error => {
        console.error('Error fetching:', error);
        return throwError(() => new Error(`No se pudo obtener paises con el query: ${query}`));
      })
    );
}
```

```typescript
// by-country-page.component.ts
query = signal('');

countryResource = resource({
  request: () => ({ query: this.query() }),
  loader: async ({ request }) => {
    if (!request.query) return [];
    return await firstValueFrom(
      this.countryService.searchByCountry(request.query)
    );
  }
});

onSearch(query: string): void {
  this.query.set(query);
}
```

```html
<!-- country-list.component.html - boton con RouterLink -->
<a [routerLink]="['/country/by', country.cca2]" class="link-primary">
  Mas informacion
</a>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `/name/${query}` | Endpoint de REST Countries para buscar por nombre de pais |
| Codigo duplicado | `searchByCapital` y `searchByCountry` son casi iguales; solo cambia la URL |
| `[routerLink]="['/country/by', country.cca2]"` | Navega a la pagina de detalle usando el codigo alfa del pais |
| `RouterLink` importado | Debe importarse en `CountryListComponent` para que el binding funcione |
| `country.cca2` | Codigo de dos letras del pais usado como parametro de ruta |
| Estado en memoria | Los resultados se pierden al navegar; se resuelve en la siguiente seccion |

---

## 6. Resumen final en pocas palabras

Se crea `searchByCountry` con el endpoint `/name/`, identico a `searchByCapital` salvo la URL. Se replica el patron `resource` en `ByCountryPageComponent` cambiando solo el metodo del servicio. Se agrega `RouterLink` en la tabla para navegar a `/country/by/:cca2`. La arquitectura es la misma en todas las paginas de busqueda, lo que confirma que el patron `resource` es consistente y reutilizable.
