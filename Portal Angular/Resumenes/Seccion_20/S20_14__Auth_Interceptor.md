# Auth Interceptor

## ¿Qué se aprende?

En esta lección se crea el `authInterceptor`, que añade automáticamente el token JWT en el encabezado `Authorization` de todas las peticiones HTTP, eliminando la necesidad de añadirlo manualmente en cada servicio.

---

## Puntos clave

**Las peticiones HTTP son inmutables**

Un interceptor no puede modificar directamente la petición (`req`) porque es un objeto inmutable. Para modificarla hay que clonarla con `req.clone()` y trabajar con el clon. El clon es la nueva petición que se envía al servidor en lugar de la original.

```typescript
const newReq = req.clone({
  headers: req.headers.append('Authorization', `Bearer ${token}`)
});
return next(newReq);
```

**Ubicación del archivo**

Se crea en `src/app/auth/interceptors/auth.interceptor.ts`. La carpeta `interceptors/` va dentro del módulo `auth/` porque este interceptor pertenece lógicamente al dominio de autenticación.

**Estructura del `authInterceptor`**

```typescript
export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const token = inject(AuthService).token();

  console.log(token); // temporal, para verificar

  const newReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`)
  });

  return next(newReq);
}
```

- Se inyecta el `AuthService` con `inject()` directamente dentro de la función. Esto es posible porque el interceptor se ejecuta dentro del contexto de inyección de Angular.
- `authService.token()` — se llama como señal (con paréntesis) para obtener el valor actual del token.
- El encabezado se llama `Authorization` con `A` mayúscula.
- El formato del valor es `Bearer <token>`.

**Por qué el token podría ser `null` inicialmente**

Cuando el servicio se crea, `_token` se inicializa en `null` (valor por defecto de la señal). Para que el interceptor tenga el token desde el primer momento, se actualiza la señal `_token` en el `AuthService` para que se inicialice leyendo directamente del `localStorage`:

```typescript
// En auth.service.ts
private _token = signal<string | null>(localStorage.getItem('token'));
```

Así, cuando el interceptor se ejecuta por primera vez, la señal ya tiene el valor del token si existe en `localStorage`, en lugar de `null`.

**Registrar el interceptor en `app.config.ts`**

```typescript
provideHttpClient(
  withFetch(),
  withInterceptors([authInterceptor, loggingInterceptor])
)
```

Se puede añadir antes o después del `loggingInterceptor`. El orden determina en qué secuencia se ejecutan.

**Verificación**

Al recargar la aplicación con el token en `localStorage`, la consola muestra el token en cada petición y las peticiones al backend devuelven `200` correctamente. El `checkStatus` ya no necesita añadir el encabezado manualmente.

**Simplificación del `checkAuthStatus()`**

Con el interceptor en marcha, se puede eliminar el objeto `headers` del `http.get()` en `checkAuthStatus()`:

```typescript
// Antes:
return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`, {
  headers: { Authorization: `Bearer ${token}` }
});

// Después:
return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`);
```

El interceptor se encarga de añadir el encabezado automáticamente.

**Aplicación selectiva del token (opcional)**

Si se quiere enviar el token solo a ciertas URLs, se puede añadir una condición:

```typescript
if (req.url.includes('/api/auth') || req.url.includes('/api/products')) {
  // clonar con token
}
return next(req); // peticiones no protegidas pasan sin token
```

Por ahora se aplica a todas las peticiones sin filtrar.

---

## Ejemplo sencillo

El `authInterceptor` es como un empleado que, antes de que cualquier paquete salga de la oficina, le pega automáticamente la etiqueta de identificación corporativa. Los remitentes (servicios) no tienen que preocuparse por la etiqueta: simplemente preparan el paquete y el interceptor lo etiqueta antes de entregarlo al mensajero.

---

## Palabras clave y elementos importantes

- `req.clone({ headers: ... })` — crea una copia modificable de la petición; necesario porque `HttpRequest` es inmutable
- `req.headers.append('Authorization', 'Bearer <token>')` — añade el encabezado sin eliminar los existentes
- `inject(AuthService)` dentro de la función — inyección de dependencias válida dentro del contexto de ejecución del interceptor
- `authService.token()` — señal computada de solo lectura que devuelve el token actual
- `signal<string | null>(localStorage.getItem('token'))` — inicialización de la señal con el valor del `localStorage` para que el token esté disponible desde el primer render
- `Bearer <token>` — formato estándar del encabezado de autenticación HTTP
- `src/app/auth/interceptors/auth.interceptor.ts` — ruta del archivo del interceptor
- `withInterceptors([authInterceptor])` — registro del interceptor en `app.config.ts`
- Interceptores múltiples — se pueden registrar varios en el mismo arreglo; se ejecutan en orden

---

## Resumen final

Esta lección implementa el `authInterceptor`, que lee el token del `AuthService` e inyecta automáticamente el encabezado `Authorization: Bearer <token>` en cada petición HTTP. Como `HttpRequest` es inmutable, se usa `req.clone()` para crear la petición modificada. El `AuthService` se actualiza para que `_token` se inicialice con el valor de `localStorage` en lugar de `null`. Una vez registrado el interceptor en `app.config.ts`, el método `checkAuthStatus()` puede simplificarse eliminando el encabezado manual. A partir de aquí, cualquier servicio que use `HttpClient` enviará el token automáticamente sin código adicional.
