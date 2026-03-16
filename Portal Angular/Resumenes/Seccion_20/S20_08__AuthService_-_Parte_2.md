# AuthService - Parte 2

## ¿Qué se aprende?

En esta lección se implementa el método `login()` del `AuthService`, se crea la interfaz `AuthResponse`, se conecta el servicio al componente `login-page` y se verifica el flujo completo de autenticación en el navegador, incluyendo el almacenamiento del token en `localStorage`.

---

## Puntos clave

**Interfaz `AuthResponse`**

Se crea `src/app/auth/interfaces/auth-response.interface.ts`. Su estructura refleja exactamente la respuesta exitosa del endpoint de login:

```typescript
interface AuthResponse {
  user:  User;
  token: string;
}
```

La interfaz `User` ya existía previamente en el proyecto y se reutiliza aquí. La interfaz `AuthResponse` tiene la propiedad `token` (el JWT) y `user` (los datos del usuario autenticado).

**Método `login()` en el servicio**

```typescript
login(email: string, password: string): Observable<boolean> {
  return this.http.post<AuthResponse>(`${baseUrl}/auth/login`, { email, password })
    .pipe(
      tap(resp => {
        this._authStatus.set('authenticated');
        this._user.set(resp.user);
        this._token.set(resp.token);
        localStorage.setItem('token', resp.token);
      }),
      map(() => true),
      catchError(error => {
        // manejo de errores — próxima lección
        return of(false);
      })
    );
}
```

Puntos importantes:
- `baseUrl` se extrae de `environment.baseUrl` al inicio del archivo como constante local, para no tener que escribir `environment.` en cada URL.
- El método devuelve un `Observable<boolean>`. Si todo sale bien, emite `true`; si hay error, emite `false`.
- El operador `tap` es el lugar donde se actualizan las señales privadas y el `localStorage`, ya que `tap` dispara efectos secundarios sin modificar el valor del Observable.
- `localStorage.setItem('token', resp.token)` persiste el token para que sobreviva a una recarga del navegador.
- El `map(() => true)` convierte la respuesta `AuthResponse` en el valor booleano que se comprometió a emitir.

**Persistencia del token**

Al autenticarse correctamente, el token se guarda en `localStorage` con la clave `'token'`. Esto es necesario porque el estado en memoria (las señales) se pierde cuando el usuario recarga la página; `localStorage` persiste entre recargas.

**Por qué el estado inicial es `'checking'`**

Cuando el servicio se inicializa (al cargar la app), no se sabe si hay una sesión activa. Se necesita consultar el backend con el token almacenado antes de poder afirmar si el usuario está autenticado. Por eso el estado inicial es `'checking'` y no `'not-authenticated'`.

**Conexión al `login-page`**

En `login-page.component.ts`:
- Se inyecta el servicio: `authService = inject(AuthService)`.
- Se inyecta el router: `router = inject(Router)`.
- En `onSubmit()`, se reemplaza el `console.log` por:

```typescript
this.authService.login(email!, password!).subscribe(isAuthenticated => {
  console.log(isAuthenticated);
});
```

El `!` no nulo es necesario porque TypeScript infiere que `email` y `password` podrían ser `string | null | undefined` según la definición del `FormGroup`, aunque en la práctica siempre hay un valor porque el formulario se inicializó con strings vacíos.

**Verificación en el navegador**

Tras iniciar sesión con credenciales correctas, se puede verificar en las DevTools de Angular que el `AuthService` muestra `_authStatus: 'authenticated'`, `_user` con los datos del usuario y `_token` con el JWT. En la pestaña Application del navegador, aparece el token guardado en `localStorage`.

Al recargar la página, el estado vuelve a `'checking'` y los datos se pierden porque la señal aún no lee el token del `localStorage` — eso se implementará en la lección siguiente.

---

## Ejemplo sencillo

El flujo de `login()` es como una recepción de hotel: el huésped entrega su nombre y número de reserva (`email` y `password`), el recepcionista verifica con el sistema (`http.post`), si todo está bien entrega la llave magnética (`token`) y registra internamente quién está en la habitación (`_user`, `_authStatus`). La llave también se guarda en una caja fuerte del huésped (`localStorage`) para que si sale y vuelve, no tenga que hacer el proceso completo de nuevo.

---

## Palabras clave y elementos importantes

- `AuthResponse` — interfaz que describe la respuesta exitosa del backend: `{ user: User, token: string }`
- `http.post<AuthResponse>(url, body)` — petición POST tipada que devuelve un Observable de `AuthResponse`
- `baseUrl` — constante local extraída de `environment.baseUrl` para simplificar las URLs
- `tap(resp => {...})` — operador RxJS que dispara efectos secundarios (actualizar señales, guardar en localStorage) sin modificar el valor del Observable
- `map(() => true)` — transforma la respuesta `AuthResponse` en el valor `true`
- `catchError` — operador RxJS que intercepta errores del Observable; se completará en la siguiente lección
- `of(false)` — crea un Observable que emite inmediatamente el valor `false`; se usa para retornar en caso de error
- `localStorage.setItem('token', resp.token)` — guarda el JWT en el almacenamiento local del navegador
- `inject(AuthService)` — inyección del servicio en el componente
- `inject(Router)` — inyección del router para navegar tras autenticarse
- `Observable<boolean>` — tipo de retorno del método `login()`; `true` si el login fue exitoso, `false` si hubo error

---

## Resumen final

Esta lección completa la implementación básica del login. Se crea la interfaz `AuthResponse`, se implementa el método `login()` que hace la petición POST, actualiza las señales privadas, guarda el token en `localStorage` y devuelve un `Observable<boolean>`. El componente `login-page` inyecta el servicio y llama a `login()` desde `onSubmit()`. Se verifica en el navegador que el estado se actualiza correctamente tras autenticarse. Queda pendiente el manejo de errores (cuando las credenciales son incorrectas) y la lectura del token al recargar la página.
