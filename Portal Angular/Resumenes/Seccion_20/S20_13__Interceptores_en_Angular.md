# Interceptores en Angular

## ¿Qué se aprende?

En esta lección se introduce el concepto de interceptores HTTP en Angular, se crea un interceptor de logging como ejemplo práctico y se aprende a registrarlo en `app.config.ts` usando `withInterceptors`.

---

## Puntos clave

**¿Qué es un interceptor?**

Un interceptor es una función que se sitúa entre el código que hace una petición HTTP y el servidor. Intercepta cada petición antes de enviarla (y/o la respuesta antes de devolverla) y permite transformarla, modificarla, registrarla o cancelarla.

Los casos de uso más comunes son:
- Añadir el token de autenticación a todas las peticiones automáticamente (sin repetirlo en cada servicio).
- Transformar la estructura de la respuesta del backend si cambia el formato.
- Registrar en consola cada petición y su código de respuesta (logging).
- Implementar caché a nivel de peticiones HTTP.

**Dos formas de crear interceptores en Angular**

La forma tradicional usa una clase con el decorator `@Injectable` que implementa `HttpInterceptor`. Angular está migrando hacia una forma más moderna basada en **funciones simples**, que es la que se enseña en esta lección. Las funciones son más concisas y alineadas con la tendencia de Angular de reducir decoradores.

**Estructura de un interceptor funcional**

```typescript
// src/app/shared/interceptors/logging.interceptor.ts

export function loggingInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  return next(req).pipe(
    tap(event => {
      if (event.type === HttpEventType.Response) {
        console.log(req.url, 'returned a response with status', event.status);
      }
    })
  );
}
```

- `req: HttpRequest<unknown>` — la petición saliente. Es de tipo `unknown` para que el interceptor sea genérico y aplique a cualquier tipo de petición.
- `next: HttpHandlerFn` — función que continúa la cadena. Si no se llama a `next(req)`, la petición se corta y nunca llega al servidor. Es equivalente al `next()` de un middleware.
- El interceptor devuelve un `Observable<HttpEvent<unknown>>` — el mismo tipo que devuelve `next(req)`.
- El operador `tap` permite observar la respuesta sin modificarla. Solo se loggea cuando el evento es de tipo `Response` (código de respuesta HTTP).

**Ubicación del archivo**

Se crea en `src/app/shared/interceptors/logging.interceptor.ts`, dentro de una nueva carpeta `interceptors/` dentro de `shared`.

**Registrar el interceptor en `app.config.ts`**

Los interceptores se registran en `provideHttpClient()` usando `withInterceptors()`:

```typescript
// app.config.ts
provideHttpClient(
  withFetch(),
  withInterceptors([loggingInterceptor])
)
```

`withInterceptors` recibe un arreglo de funciones interceptoras. Se pasa la referencia a la función, no se instancia. Se importa de `@angular/common/http`.

**Verificación**

Al recargar la aplicación con el interceptor activo, la consola muestra las URLs de las peticiones realizadas (`/api/auth/check-status`, `/api/products`) junto con su código de respuesta (`200`).

**Demostración del problema que resuelven los interceptores**

Para mostrar por qué son útiles, se comenta el encabezado `Authorization` del método `checkAuthStatus()` y se observa que la petición devuelve `401 Unauthorized`. Esto confirma que sin el encabezado el backend rechaza la petición. La solución es crear un interceptor que añada ese encabezado automáticamente en todas las peticiones, sin tocar cada servicio individualmente.

---

## Ejemplo sencillo

Un interceptor es como el guardia de seguridad en la entrada de una empresa. Cada empleado (petición HTTP) que quiera salir del edificio pasa primero por el guardia. El guardia puede revisar sus credenciales, añadirle una tarjeta de identificación si le falta, o registrar su salida. El empleado no tiene que hacer nada diferente: simplemente camina hacia la puerta y el guardia hace su trabajo automáticamente. Si el guardia no llama a `next()`, el empleado nunca sale.

---

## Palabras clave y elementos importantes

- Interceptor HTTP — función que intercepta peticiones y/o respuestas HTTP para transformarlas o reaccionar a ellas
- Interceptor funcional — forma moderna de crear interceptores en Angular, sin clase ni decorador, solo una función exportada
- `HttpRequest<unknown>` — tipo de la petición interceptada; `unknown` lo hace genérico para cualquier tipo de body
- `HttpHandlerFn` — tipo de la función `next` que continúa la cadena de peticiones
- `next(req)` — llamada obligatoria para que la petición siga su curso; si se omite, se cancela
- `HttpEvent<unknown>` — tipo del Observable que devuelve el interceptor
- `HttpEventType.Response` — tipo de evento que indica que la respuesta HTTP ya fue recibida
- `tap` — operador RxJS para observar valores sin modificar el flujo
- `withInterceptors([...])` — función de configuración que registra los interceptores en `provideHttpClient()`
- `app.config.ts` — archivo donde se registran los interceptores junto a `provideHttpClient`
- `401 Unauthorized` — respuesta del backend cuando falta el token de autenticación en la petición

---

## Resumen final

Esta lección introduce los interceptores HTTP funcionales de Angular. Un interceptor es una función con la firma `(req, next) => Observable` que se ejecuta en cada petición HTTP. Se crea un interceptor de logging que imprime la URL y el código de respuesta de cada petición. El interceptor se registra en `app.config.ts` mediante `withInterceptors([loggingInterceptor])` dentro de `provideHttpClient()`. Al eliminar el encabezado `Authorization` del `checkAuthStatus()` se demuestra visualmente que sin el token el backend responde `401`, motivando la creación del interceptor de autenticación en la lección siguiente.
