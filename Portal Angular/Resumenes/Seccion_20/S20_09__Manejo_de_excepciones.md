# Manejo de excepciones

## ¿Qué se aprende?

En esta lección se implementa el manejo de errores en el `AuthService` y se conecta la respuesta del Observable al componente para mostrar feedback al usuario y redirigirlo al home tras un login exitoso.

---

## Puntos clave

**El método `login()` debe limpiar el estado en caso de error**

Cuando las credenciales son incorrectas, el backend devuelve un `400 Bad Request`. El operador `catchError` intercepta ese error. Dentro de `catchError` se limpian las señales y se devuelve `of(false)`:

```typescript
catchError(error => {
  this._user.set(null);
  this._token.set(null);
  this._authStatus.set('not-authenticated');
  return of(false);
})
```

Nota: técnicamente bastará con poner `_user` en `null`, porque la señal `computed` de `authStatus` ya detectará que no hay usuario y devolverá `'not-authenticated'`. Pero establecerlo explícitamente hace el código más claro.

**Por qué `catchError` devuelve `of(false)` y no solo `false`**

El operador `catchError` espera que se devuelva un nuevo Observable que reemplace al Observable que falló. `of(false)` crea un Observable que emite inmediatamente el valor `false` y luego se completa. Sin el `of(...)`, se estaría devolviendo el valor directamente en lugar de un Observable, lo que causaría un error de tipos.

**Cualquier código de respuesta que no sea 2xx es tratado como error**

Angular's `HttpClient` trata como error cualquier respuesta cuyo código HTTP no sea 2xx (éxito). Eso incluye `300`, `400`, `401`, `500`, etc. Solo los códigos `200`-`299` pasan por el flujo normal del Observable.

**Conexión en `login-page`: respuesta y navegación**

En `onSubmit()`, el `subscribe` ahora recibe el valor booleano y actúa en consecuencia:

```typescript
this.authService.login(email!, password!).subscribe(isAuthenticated => {
  if (isAuthenticated) {
    this.router.navigateByUrl('/');
  } else {
    this.hasError.set(true);
    setTimeout(() => this.hasError.set(false), 2500);
  }
});
```

- Si `isAuthenticated` es `true`, el usuario es redirigido al home (`'/'`) con `navigateByUrl`.
- Si es `false`, se activa la señal `hasError` para mostrar la alerta de error y se limpia automáticamente 2.5 segundos después.

**`navigateByUrl` vs `navigate`**

Se usa `navigateByUrl('/')` que acepta un string de URL directamente. Como detalle, se menciona la opción `{ replaceUrl: true }` que reemplaza la entrada actual en el historial del navegador para que el usuario no pueda usar el botón "Atrás" para volver al login después de autenticarse. Por ahora no se aplica, para poder verificar el comportamiento con los guards más adelante.

**Pendiente: `checkAuthentication` y `logout`**

Al finalizar la lección se identifican tres funcionalidades que aún faltan:
- `checkAuthStatus()` — verificar si el token guardado en `localStorage` sigue siendo válido al recargar la app.
- `register()` — método para registrar nuevos usuarios.
- `logout()` — método para cerrar sesión.

---

## Ejemplo sencillo

`catchError` es como el plan de contingencia de un vuelo: si el plan A (vuelo directo) falla por tormenta, en lugar de dejar al pasajero en tierra sin respuesta, el operador activa el plan B (vuelo alternativo) y le comunica al pasajero que no pudo embarcar. El pasajero (componente) recibe una respuesta booleana en ambos casos: `true` si aterrizó, `false` si no.

---

## Palabras clave y elementos importantes

- `catchError(error => {...})` — operador RxJS que intercepta cualquier error del Observable y permite devolver un nuevo Observable en su lugar
- `of(false)` — Observable que emite `false` inmediatamente; usado para retornar el valor del error de manera reactiva
- `400 Bad Request` — código HTTP que indica que los datos enviados no son válidos (credenciales incorrectas, campos faltantes, etc.)
- `2xx` — rango de códigos HTTP que Angular interpreta como éxito; cualquier otro código se trata como error
- `isAuthenticated` — nombre de la variable que recibe el valor `true` o `false` en el `subscribe`
- `router.navigateByUrl('/')` — redirige programáticamente al usuario al path `/` (home)
- `navigateByUrl({ replaceUrl: true })` — opción que reemplaza la URL actual en el historial para impedir volver atrás con el botón del navegador
- `hasError.set(true)` — activa la señal para mostrar la alerta de error en el template
- `setTimeout` — limpia la alerta de error automáticamente después de 2.5 segundos

---

## Resumen final

Esta lección cierra el ciclo del login implementando el manejo de errores. El operador `catchError` limpia las señales privadas del servicio y devuelve `of(false)`. En el componente, el valor `true` o `false` recibido en el `subscribe` determina si el usuario es redirigido al home o si se le muestra la alerta de error. Se identifica lo que queda pendiente: el método `checkAuthStatus()` para verificar la sesión al recargar, el `logout()` y el `register()`.
