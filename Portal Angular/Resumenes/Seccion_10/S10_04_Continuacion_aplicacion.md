# Seccion 10 - Leccion 04: Continuacion de la Aplicacion

---

## 1. Titulo de la leccion

**Retomar country-app y explorar el API de REST Countries con Postman**

---

## 2. Que se aprende en esta leccion

Se retoma el proyecto `04-country-app` de la seccion 9, se presenta el API de REST Countries v3.1 y se explora el endpoint de busqueda por capital con Postman para entender la estructura de la respuesta antes de usarla en Angular.

---

## 3. Puntos clave explicados

- **REST Countries API:** API gratuita (sin API Key) disponible en `restcountries.com`. Version actual: 3.1. Provee informacion de todos los paises del mundo.
- **Endpoint por capital:** `https://restcountries.com/v3.1/capital/{query}`. Busqueda parcial: buscar "el" devuelve todos los paises con capitales que contienen "el".
- **La respuesta es un arreglo:** Aunque se busque una capital especifica, el API siempre devuelve un arreglo (`[]`). Puede contener uno o varios paises.
- **El objeto pais es grande:** La respuesta contiene decenas de propiedades: nombre en multiples idiomas, codigos, monedas, idiomas, banderas, coordenadas, fronteras, etc. No se necesitan todas.
- **Nombres en varios idiomas:** El objeto tiene `translations` con el nombre del pais en frances, hungaro, italiano, espanol, etc.
- **Status 404:** Si no se encuentra ningun pais con ese query, el API retorna un error 404 (no un arreglo vacio). Hay que manejarlo como excepcion.
- **Estructura de carpetas lista:** El proyecto ya tiene `country/services/` creada. Si no existe, crearla manualmente.
- **No bombardear el API:** Es un API gratuito sin autenticacion. Hay que ser considerado con la cantidad de peticiones que se realizan.

---

## 4. Ejemplo sencillo

```
Endpoint: GET https://restcountries.com/v3.1/capital/tegucigalpa

Respuesta (arreglo con 1 elemento):
[
  {
    "name": { "common": "Honduras", "official": "Republic of Honduras" },
    "capital": ["Tegucigalpa"],
    "population": 10278345,
    "flags": { "svg": "https://...", "png": "https://..." },
    "flag": "🇭🇳",
    "translations": { "spa": { "official": "República de Honduras", "common": "Honduras" } },
    "cca2": "HN",
    ...muchos campos mas
  }
]

Si no existe la capital buscada → 404 Not Found (no arreglo vacio)
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `restcountries.com` | API gratuita de informacion de paises, version 3.1 |
| `/v3.1/capital/{query}` | Endpoint de busqueda por capital; acepta nombres parciales |
| Respuesta como arreglo | Siempre devuelve `[]`, aunque sea un solo pais |
| Status 404 | El API lanza 404 cuando no hay coincidencias; no devuelve arreglo vacio |
| `translations.spa` | Campo con el nombre del pais en espanol |
| `cca2` | Codigo de dos letras del pais (ej: "HN" para Honduras) |

---

## 6. Resumen final en pocas palabras

El API de REST Countries es gratuito, no requiere API Key y devuelve siempre un arreglo de paises. Si no hay coincidencias lanza un 404, no un arreglo vacio. La respuesta es un objeto grande con muchas propiedades; solo se usaran las necesarias mediante un mapper. El endpoint de capital acepta busquedas parciales.
