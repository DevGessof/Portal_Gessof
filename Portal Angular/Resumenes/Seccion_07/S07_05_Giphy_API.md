# Seccion 7 - Leccion 05: Giphy API - Servicio de GIFs

---

## 1. Titulo de la leccion

**Crear una cuenta en Giphy Developers, obtener API Key y explorar el endpoint de Trending**

---

## 2. Que se aprende en esta leccion

Se crea una cuenta en Giphy Developers, se genera una API Key propia y se explora el endpoint de Trending en el API Explorer y en Postman para entender la estructura de la respuesta.

---

## 3. Puntos clave explicados

- **Giphy API:** API publica usada por WhatsApp, Facebook, Spotify y otras empresas para mostrar GIFs y stickers. Requiere registro y API Key propia.
- **Limite gratuito:** Hasta 100 peticiones por hora en el tier gratuito. Hay que ser eficiente para no agotarlo.
- **API vs SDK:** Se elige la opcion "API" (no el SDK) para practicar el consumo de una API REST tradicional desde Angular.
- **API Key:** Cadena unica que identifica la aplicacion. Siempre usar la propia, nunca la del instructor. Se guarda en `environment.ts` como `giphyApiKey`.
- **Endpoint Trending:** `GET https://api.giphy.com/v1/gifs/trending?api_key=...&limit=25&offset=0&rating=g`
- **Estructura de respuesta:** Cada GIF tiene mucha informacion: `id`, `title`, `slug`, `images.original.url`, `images.fixed_height`, etc. Solo se usaran los campos que la aplicacion necesite.
- **Postman:** Herramienta para probar APIs. Se pega el URL del API Explorer y se verifica que la respuesta sea la esperada.
- **Principio de interfaz minima:** Si la app solo necesita `id`, `title` e `url`, crear interfaces que solo contengan esos campos, no toda la respuesta del API.

---

## 4. Ejemplo sencillo

```typescript
// src/environments/environment.ts
export const environment = {
  production: true,
  companyName: 'Gifs App',
  companySlogan: 'Maneja tus gifs',
  giphyApiKey: 'TU_API_KEY_AQUI',
  giphyUrl: 'https://api.giphy.com/v1'
};
```

```
// URL del endpoint Trending (para probar en Postman)
https://api.giphy.com/v1/gifs/trending?api_key=TU_KEY&limit=25&offset=0&rating=g
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Giphy Developers | Portal para obtener API Key y explorar endpoints |
| API Key | Token de autenticacion; siempre usar la propia |
| `giphyApiKey` | Nombre de la propiedad en `environment.ts` |
| `giphyUrl` | URL base del API: `https://api.giphy.com/v1` |
| API Explorer | Herramienta en el portal de Giphy para probar endpoints |
| Postman | Cliente REST para probar APIs externamente |
| Interfaz minima | Solo tipar los campos que la app realmente usa |

---

## 6. Resumen final en pocas palabras

Se crea una cuenta en Giphy Developers y se genera una API Key propia que se guarda en `environment.ts`. El endpoint Trending devuelve muchos campos por GIF, pero la app solo usara `id`, `title` e `url`. Postman permite verificar la respuesta antes de implementarla en Angular.
