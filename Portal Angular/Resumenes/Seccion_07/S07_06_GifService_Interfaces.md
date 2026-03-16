# Seccion 7 - Leccion 06: GifService e Interfaces

---

## 1. Titulo de la leccion

**Crear GifService, interfaces de Giphy con "Paste JSON as Code" y proveer HttpClient**

---

## 2. Que se aprende en esta leccion

Se crea el servicio `GifService`, se generan las interfaces de la respuesta de Giphy usando la extension "Paste JSON as Code" (quicktype.io), se inyecta `HttpClient` y se configura `provideHttpClient` en `app.config.ts`.

---

## 3. Puntos clave explicados

- **`gifs/interfaces/giphy.interface.ts`:** Archivo para las interfaces que representan la respuesta del API de Giphy. Son interfaces externas (del proveedor), separadas de las interfaces propias de la app.
- **Extension "Paste JSON as Code":** Genera interfaces de TypeScript automaticamente a partir de un objeto JSON en el clipboard. Se invoca desde la paleta de comandos de VS Code. El tipo raiz se llama `GiphyResponse` y el tipo de cada gif se renombra de `Datum` a `GiphyItem` con F2.
- **`import type`:** Se recomienda usar `import type` para importar interfaces, ya que ayuda al compilador a optimizar el build.
- **`GifService`:** Servicio singleton (`providedIn: 'root'`) con metodo `loadTrendingGifs()`. Inyecta `HttpClient` con `inject(HttpClient)`.
- **`this.http.get<GiphyResponse>(url, { params })`:** Realiza la peticion GET tipada. Retorna un `Observable<GiphyResponse>`. La peticion NO se dispara hasta que alguien se suscriba.
- **`params`:** Los parametros de query string se pasan como objeto en la opcion `params`. El nombre `api_key` (con guion bajo) es el que espera el API de Giphy.
- **`provideHttpClient(withFetch())`:** Se agrega en `app.config.ts` para que Angular sepa que existe el `HttpClient`. Sin esto, la inyeccion falla. `withFetch()` hace que use el Fetch API moderno por debajo en lugar de XHR.

---

## 4. Ejemplo sencillo

```typescript
// gifs/services/gifs.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';

@Injectable({ providedIn: 'root' })
export class GifService {
  private http = inject(HttpClient);

  loadTrendingGifs(): void {
    this.http.get<GiphyResponse>(
      `${environment.giphyUrl}/gifs/trending`,
      { params: { api_key: environment.giphyApiKey, limit: 20 } }
    ).subscribe(resp => {
      console.log(resp);
    });
  }
}
```

```typescript
// app.config.ts
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch())
  ]
};
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `Paste JSON as Code` | Extension VS Code que genera interfaces TypeScript desde JSON |
| `GiphyResponse` | Interfaz raiz de la respuesta del API de Giphy |
| `GiphyItem` | Interfaz de cada gif en la respuesta (renombrado desde `Datum`) |
| `HttpClient` | Servicio de Angular para peticiones HTTP; se inyecta con `inject()` |
| `http.get<T>(url, { params })` | Peticion GET tipada; retorna `Observable<T>` |
| `provideHttpClient(withFetch())` | Registra `HttpClient` globalmente en `app.config.ts` |
| `import type` | Importacion de solo tipos; ayuda al compilador a optimizar |

---

## 6. Resumen final en pocas palabras

Se crea `GifService` con `HttpClient` inyectado. Las interfaces del API se generan automaticamente con "Paste JSON as Code". El tipo de cada gif se renombra a `GiphyItem`. La peticion GET es tipada con `GiphyResponse` y retorna un Observable. Para que todo funcione es obligatorio agregar `provideHttpClient(withFetch())` en `app.config.ts`.
