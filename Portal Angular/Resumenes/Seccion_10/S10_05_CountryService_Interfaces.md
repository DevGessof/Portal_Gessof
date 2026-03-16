# Seccion 10 - Leccion 05: CountryService - Interfaces

---

## 1. Titulo de la leccion

**CountryService, provideHttpClient, metodo searchByCapital y RESTCountry interface con Paste JSON as Code**

---

## 2. Que se aprende en esta leccion

Se crea `CountryService` con el metodo `searchByCapital`, se configura `provideHttpClient` en `app.config.ts`, se genera la interfaz `RESTCountry` con "Paste JSON as Code", y se conecta el buscador para mostrar resultados en consola.

---

## 3. Puntos clave explicados

- **`CountryService`:** Se crea en `country/services/` con Angular Schematics (tipo "service", nombre "country"). No necesita constructor.
- **`inject(HttpClient)` en el servicio:** Se inyecta el cliente HTTP de forma funcional. Si no se provee, lanza `NullInjectorError: No provider for HttpClient`.
- **`provideHttpClient(withFetch())` en `app.config.ts`:** Soluciona el error de `HttpClient`. `withFetch()` hace que Angular use la Fetch API nativa en lugar de XHR para las peticiones HTTP.
- **`const API_URL`:** Se define fuera de la clase como constante con la URL base del API. Se concatena el slash de cada endpoint dentro de los metodos.
- **`searchByCapital(query: string)`:** Convierte el query a minusculas, luego retorna `this.http.get<RESTCountry[]>(\`${API_URL}/capital/${query}\`)`. Tipado explicito del generico para que TypeScript infiera el tipo de la respuesta.
- **`RESTCountry` interface:** Se genera automaticamente desde la respuesta del API usando la extension "Paste JSON as Code". Se copia la respuesta de Postman, se crea el archivo `rest-countries.interfaces.ts` en `country/interfaces/`, y se usa el comando de paleta para generar las interfaces.
- **Suscripcion en el componente:** El Observable de `searchByCapital` no dispara la peticion hasta que se llama `.subscribe()`. Se suscribe en `onSearch` del componente y se imprime la respuesta en consola.
- **Sin suscripcion = sin peticion:** Un Observable es "frio" por defecto; no ejecuta nada hasta que alguien se suscribe.

---

## 4. Ejemplo sencillo

```typescript
// app/country/services/country.service.ts
const API_URL = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<RESTCountry[]> {
    query = query.toLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`);
  }
}
```

```typescript
// app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())  // soluciona NullInjectorError
  ]
};
```

```typescript
// by-capital-page.component.ts
private countryService = inject(CountryService);

onSearch(query: string): void {
  this.countryService.searchByCapital(query)
    .subscribe(resp => console.log(resp));
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `inject(HttpClient)` | Inyeccion funcional del cliente HTTP en el servicio |
| `NullInjectorError` | Error cuando `HttpClient` no esta proveido en `app.config.ts` |
| `provideHttpClient(withFetch())` | Activa el cliente HTTP usando Fetch API nativa en vez de XHR |
| `http.get<RESTCountry[]>(url)` | Peticion GET tipada; retorna `Observable<RESTCountry[]>` |
| `API_URL` | Constante fuera de la clase con la URL base del API |
| Observable "frio" | No ejecuta la peticion hasta que alguien se suscribe |
| Paste JSON as Code | Extension VS Code para generar interfaces TypeScript desde JSON |

---

## 6. Resumen final en pocas palabras

`CountryService` inyecta `HttpClient` y expone `searchByCapital` que retorna un `Observable<RESTCountry[]>`. Para que funcione hay que agregar `provideHttpClient(withFetch())` en `app.config.ts`. La interfaz `RESTCountry` se genera con "Paste JSON as Code" desde la respuesta de Postman. El Observable no dispara la peticion hasta que el componente llama `.subscribe()`.
