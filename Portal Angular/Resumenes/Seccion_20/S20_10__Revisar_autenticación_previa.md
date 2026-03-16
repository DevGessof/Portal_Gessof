# Revisar autenticación previa

## ¿Qué se aprende?

En esta lección se implementa el método `checkAuthStatus()` en el `AuthService`, que verifica al cargar la aplicación si el token guardado en `localStorage` sigue siendo válido, restaurando la sesión sin que el usuario tenga que volver a iniciar sesión.

---

## Puntos clave

**El problema: el estado se pierde al recargar**

Cuando el usuario recarga la página, todas las señales del servicio se reinician a sus valores por defecto (`'checking'`, `null`, `null`). El token sigue en `localStorage`, pero Angular no lo lee automáticamente. Por eso la sesión parece perdida aunque el token aún sea válido.

**El endpoint `check-status`**

El backend expone `GET /api/auth/check-status`. Este endpoint requiere el token en el encabezado HTTP como `Authorization: Bearer <token>`. Si el token es válido, devuelve la misma estructura que el login (`AuthResponse`): datos del usuario y un nuevo token renovado con otras dos horas de vigencia. Si el token no existe o no es válido, devuelve `401 Unauthorized`.

**Método `checkAuthStatus()`**

```typescript
checkAuthStatus(): Observable<boolean> {
  const token = localStorage.getItem('token');

  if (!token) {
    // Sin token: no hay nada que verificar
    return of(false);
  }

  return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`, {
    headers: { Authorization: `Bearer ${token}` }
  }).pipe(
    tap(resp => { /* mismo tap que en login */ }),
    map(() => true),
    catchError(error => { /* mismo catchError que en login */ })
  );
}
```

Puntos importantes:
- Si no hay token en `localStorage`, se devuelve `of(false)` directamente sin hacer petición HTTP.
- El token se envía en el encabezado `Authorization` con el formato `Bearer <token>`. La `A` de `Authorization` debe ser mayúscula.
- La petición es `GET`, no `POST`, porque solo se está consultando el estado.
- El segundo argumento del `http.get()` es la configuración de la petición; ahí se pasan los `headers`.

**`rxResource` como disparador automático**

En lugar de llamar `checkAuthStatus()` manualmente desde un componente, se crea un `rxResource` privado en el propio servicio:

```typescript
private checkStatusResource = rxResource({
  loader: () => this.checkAuthStatus()
});
```

`rxResource` se dispara automáticamente la primera vez que el servicio es inyectado en la aplicación. Esto garantiza que tan pronto algún componente use el `AuthService`, se verifique el token sin necesidad de código adicional en ningún componente. Se importa desde `@angular/core/rxjs-interop`.

**Resultado verificado**

Con el token válido en `localStorage`, al recargar la página el `rxResource` dispara `checkAuthStatus()`, el backend valida el token, y el `AuthService` actualiza las señales a `'authenticated'` con los datos del usuario. Sin token (o con uno caducado), el estado queda en `'not-authenticated'`.

---

## Ejemplo sencillo

`checkAuthStatus()` es como el sistema automático de puertas en un edificio de oficinas: cada vez que el edificio se "abre" (la app carga), el sistema busca tu tarjeta de acceso en el llavero (`localStorage`). Si la encuentra, la pasa por el lector (`check-status`). Si la tarjeta sigue siendo válida, la puerta se abre sola. Si no hay tarjeta o está caducada, la puerta permanece cerrada. El empleado no tiene que pasar por recepción a registrarse de nuevo.

---

## Palabras clave y elementos importantes

- `localStorage.getItem('token')` — obtiene el token guardado anteriormente; devuelve `null` si no existe
- `GET /api/auth/check-status` — endpoint que verifica la validez del token y devuelve un nuevo token renovado
- `headers: { Authorization: 'Bearer <token>' }` — encabezado HTTP requerido para autenticar la petición; la `A` es mayúscula
- Bearer Token — formato estándar de autenticación por token; se envía como `Bearer ` seguido del JWT
- `of(false)` — Observable que emite `false` inmediatamente; se devuelve cuando no hay token
- `http.get<AuthResponse>(url, { headers })` — petición GET tipada con configuración de encabezados
- `rxResource` — utilidad de Angular que ejecuta automáticamente una petición observable cuando el servicio es inyectado por primera vez
- `loader` — función del `rxResource` que devuelve el Observable a ejecutar
- `@angular/core/rxjs-interop` — path de importación del `rxResource`
- Estado `'checking'` — estado inicial que indica que se está verificando la sesión; se resuelve una vez que `checkAuthStatus()` completa

---

## Resumen final

Esta lección implementa la verificación de sesión previa. El método `checkAuthStatus()` lee el token de `localStorage`, y si existe lo envía al endpoint `GET /api/auth/check-status` con el encabezado `Authorization: Bearer <token>`. Si el token es válido, el servicio actualiza las señales y restaura la sesión. Si no existe o no es válido, el estado queda en `'not-authenticated'`. El método se dispara automáticamente usando un `rxResource` privado en el servicio, sin necesitar ningún código adicional en los componentes. La siguiente lección refactorizará el código duplicado entre `login()` y `checkAuthStatus()`.
