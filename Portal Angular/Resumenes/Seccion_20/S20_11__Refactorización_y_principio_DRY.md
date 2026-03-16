# Refactorización y principio DRY

## ¿Qué se aprende?

En esta lección se refactoriza el `AuthService` para eliminar el código duplicado entre `login()` y `checkAuthStatus()`. Se crean dos métodos privados auxiliares (`handleAuthSuccess` y `handleAuthError`) y se implementa el método `logout()`.

---

## Puntos clave

**El problema: código duplicado**

El bloque del `tap` (actualizar señales, guardar token) y el del `catchError` (limpiar estado, devolver `of(false)`) eran idénticos en `login()` y en `checkAuthStatus()`. Repetir ese código viola el principio DRY (*Don't Repeat Yourself*) y dificulta el mantenimiento.

**Método `logout()`**

Se implementa primero porque los métodos de limpieza lo reutilizarán:

```typescript
logout(): void {
  this._authStatus.set('not-authenticated');
  this._user.set(null);
  this._token.set(null);
  localStorage.removeItem('token'); // o localStorage.clear()
}
```

Limpia las tres señales privadas y elimina el token del `localStorage`. Tanto `removeItem('token')` como `clear()` funcionan, según si se quiere limpiar solo el token o todo el almacenamiento local.

**Método privado `handleAuthSuccess(resp: AuthResponse)`**

Extrae el bloque del `tap` que era idéntico en `login()` y `checkAuthStatus()`:

```typescript
private handleAuthSuccess({ user, token }: AuthResponse): boolean {
  this._authStatus.set('authenticated');
  this._user.set(user);
  this._token.set(token);
  localStorage.setItem('token', token);
  return true;
}
```

Se desestructura el argumento `AuthResponse` directamente en los parámetros para trabajar con `user` y `token` sin escribir `resp.user` y `resp.token`. Devuelve `true` para que pueda usarse directamente dentro del operador `map`.

**Método privado `handleAuthError(error: any)`**

Extrae el bloque del `catchError`:

```typescript
private handleAuthError(error: any): Observable<boolean> {
  this.logout();
  return of(false);
}
```

Llama a `logout()` para limpiar todo el estado y devuelve `of(false)`. Devuelve un `Observable<boolean>` porque `catchError` requiere un Observable como valor de retorno (a diferencia de `map`, que trabaja con valores directos).

**Por qué `map` devuelve un valor directo y `catchError` devuelve un Observable**

- `map` transforma el valor que fluye por el Observable. Lo que se devuelve en `map` es el nuevo valor del stream, no un nuevo Observable.
- `catchError` reemplaza el Observable que falló por un nuevo Observable. Por eso se necesita `of(false)` y no simplemente `false`.

**Código final de `login()` y `checkAuthStatus()` después de la refactorización**

```typescript
login(email: string, password: string): Observable<boolean> {
  return this.http.post<AuthResponse>(`${baseUrl}/auth/login`, { email, password })
    .pipe(
      map(resp => this.handleAuthSuccess(resp)),
      catchError(error => this.handleAuthError(error))
    );
}

checkAuthStatus(): Observable<boolean> {
  const token = localStorage.getItem('token');
  if (!token) return of(false);

  return this.http.get<AuthResponse>(`${baseUrl}/auth/check-status`, {
    headers: { Authorization: `Bearer ${token}` }
  }).pipe(
    map(resp => this.handleAuthSuccess(resp)),
    catchError(error => this.handleAuthError(error))
  );
}
```

El `tap` desaparece porque `handleAuthSuccess` ya no necesita ser un efecto secundario: ahora es un `map` que transforma la respuesta y devuelve `true`.

**Verificación final**

Con el token en `localStorage`, al recargar la app el estado se restaura a `'authenticated'`. Sin token, el estado queda en `'not-authenticated'`. El código es más corto, más legible y más fácil de mantener.

**Pendiente para la siguiente clase**

Mostrar el nombre del usuario en el navbar y añadir el botón de logout funcional.

---

## Ejemplo sencillo

La refactorización es como organizar una cocina de restaurante. Antes, cada cocinero (método) tenía su propia receta escrita para preparar la salsa base. Con DRY, se crea una receta única (`handleAuthSuccess`, `handleAuthError`) que todos los cocineros llaman en el momento necesario. Si la receta cambia, solo hay que modificarla en un lugar.

---

## Palabras clave y elementos importantes

- DRY (*Don't Repeat Yourself*) — principio de diseño que indica que cada pieza de lógica debe existir en un único lugar del código
- `logout()` — método público que limpia las tres señales y el `localStorage`
- `localStorage.removeItem('token')` — elimina solo la clave `'token'` del almacenamiento local
- `localStorage.clear()` — elimina todo el contenido del almacenamiento local
- `handleAuthSuccess(resp: AuthResponse)` — método privado que actualiza señales, guarda el token y devuelve `true`
- `handleAuthError(error: any)` — método privado que llama a `logout()` y devuelve `of(false)`
- Desestructuración de parámetros — `{ user, token }: AuthResponse` extrae directamente los campos del argumento
- `map(resp => this.handleAuthSuccess(resp))` — reemplaza el `tap` + `map(() => true)` por una sola transformación
- `catchError(error => this.handleAuthError(error))` — delega el manejo de errores al método privado
- `private` — modificador que impide llamar a los métodos auxiliares desde fuera del servicio

---

## Resumen final

La refactorización del `AuthService` elimina la duplicación de código usando dos métodos privados: `handleAuthSuccess()` centraliza la actualización de señales y localStorage, y `handleAuthError()` centraliza la limpieza llamando a `logout()`. El método `logout()` también queda implementado y disponible para el navbar. Los métodos `login()` y `checkAuthStatus()` quedan notablemente más cortos y simétricos. La siguiente lección conectará `logout()` con el botón del navbar y mostrará el nombre del usuario autenticado.
