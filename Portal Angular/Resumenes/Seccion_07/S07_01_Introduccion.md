# Seccion 7 - Leccion 01: Introduccion

---

## 1. Titulo de la leccion

**Introduccion a HttpClient, Observables y RxJS en Angular**

---

## 2. Que se aprende en esta leccion

Se presenta el objetivo de la seccion: hacer funcionar la aplicacion de GIFs mediante peticiones HTTP reales usando `HttpClient` de Angular, Observables y operadores de RxJS.

---

## 3. Puntos clave explicados

- **Por que no usar Fetch API directamente:** El Fetch API tradicional es limitado para cancelar peticiones, aplicar tipado estricto, transformar respuestas o crear interceptores de autenticacion.
- **`HttpClient`:** Objeto de Angular que permite hacer peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`, etc.) y trabaja basado en Observables.
- **Observable:** Patron de diseno donde un objeto emite valores a lo largo del tiempo. En peticiones HTTP, emite la respuesta cuando llega del servidor.
- **RxJS:** Libreria de programacion reactiva que provee operadores para transformar, filtrar, combinar y manejar efectos secundarios sobre Observables.
- **Senales + Observables:** Angular permite convertir Observables en senales con `toSignal()`, combinando los beneficios de ambos sistemas.
- **Contenido de la seccion:** Se vera como integrar `HttpClient`, suscripciones, operadores `map`, `tap`, caché con `Record`, historial, LocalStorage y rutas dinamicas.

---

## 4. Ejemplo sencillo

```typescript
// Fetch API (limitado)
const res = await fetch('https://api.example.com/data');
const data = await res.json();

// HttpClient de Angular (mas poderoso)
this.http.get<MiTipo>('https://api.example.com/data').subscribe(data => {
  console.log(data);
});
// Permite: cancelar, interceptar, transformar con operadores RxJS, tipado estricto
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `HttpClient` | Servicio de Angular para hacer peticiones HTTP basadas en Observables |
| `Observable` | Patron de emision de valores; las peticiones HTTP emiten la respuesta |
| RxJS | Libreria de operadores reactivos: `map`, `tap`, `pipe`, `catchError`, etc. |
| `toSignal()` | Convierte un Observable en una senal de Angular |
| Interceptores | Middlewares que procesan peticiones antes/despues de enviarlas |

---

## 6. Resumen final en pocas palabras

Esta seccion hace funcionar la app de GIFs con peticiones HTTP reales. `HttpClient` es mas poderoso que `fetch` porque se integra con Observables y operadores de RxJS, permitiendo transformar respuestas, manejar errores y crear interceptores. Las senales y Observables se complementan con `toSignal()`.
