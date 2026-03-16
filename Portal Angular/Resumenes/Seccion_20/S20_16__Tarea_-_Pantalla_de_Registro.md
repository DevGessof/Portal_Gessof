# Tarea - Pantalla de Registro

## ¿Qué se aprende?

Esta lección es una tarea propuesta al estudiante: implementar la pantalla de registro de usuarios completa, aplicando todo lo aprendido en la sección sobre formularios reactivos, `AuthService` y navegación.

---

## Puntos clave

**El endpoint de registro**

El backend expone `POST /api/auth/register`. A diferencia del login, requiere tres campos en el body:

```json
{
  "email":    "test4@google.com",
  "password": "Abc123",
  "fullName": "Fernando Herrera"
}
```

La respuesta es idéntica a la del login: un objeto con `user` y `token`. Si el correo ya existe, el backend devuelve un error.

**La tarea consiste en**

1. Crear el formulario reactivo en `register-page.component.ts` con tres campos: `email`, `password` y `fullName`, con sus validaciones respectivas.
2. Implementar el método `register()` en `AuthService`, que hace la petición `POST /api/auth/register` usando la misma lógica que `login()`: `pipe(map(resp => this.handleAuthSuccess(resp)), catchError(error => this.handleAuthError(error)))`.
3. En `register-page`, llamar a `authService.register()` en el `onSubmit()` y redirigir al home si el resultado es `true`, igual que en el login.
4. No redirigir al login después del registro. La respuesta del registro ya incluye el token, por lo que el usuario queda autenticado directamente. Simplemente navegar al home.

**Por qué no hay que ir al login tras registrarse**

La respuesta de `POST /api/auth/register` es exactamente la misma que la del login: devuelve `user` y `token`. El `handleAuthSuccess()` ya gestiona esa respuesta, por lo que después del registro el usuario queda autenticado automáticamente y puede ir directo al home sin pasar por el login.

**Revertir el comentario del `localStorage.removeItem`**

En la lección 13 se comentó temporalmente el `localStorage.removeItem('token')` dentro de `logout()` para hacer pruebas del interceptor. Antes de entregar la tarea hay que quitarle el comentario y dejarlo activo, para que al cerrar sesión se limpie correctamente el token del almacenamiento local.

**Lo que se practica con esta tarea**

- Reutilización del `handleAuthSuccess` y `handleAuthError` para el método `register()`.
- Formulario reactivo con un campo adicional (`fullName`).
- Conexión del formulario al template con `formGroup`, `formControlName` y `ngSubmit`.
- Navegación programática con `router.navigateByUrl('/')` tras el registro exitoso.
- Gestión de errores con la señal `hasError`.

---

## Ejemplo sencillo

Registrarse es exactamente como iniciar sesión, pero rellenando una ficha más larga (con el nombre completo). La ventanilla del backend (`/register`) procesa la ficha, crea el usuario y entrega el mismo brazalete de acceso (token) que entregaría el login. No hace falta volver a hacer la cola del login: ya tienes el brazalete en la mano.

---

## Palabras clave y elementos importantes

- `POST /api/auth/register` — endpoint de registro; requiere `email`, `password` y `fullName`
- `fullName` — campo adicional requerido en el registro que no existe en el login
- `register()` en `AuthService` — método nuevo a implementar, idéntico en estructura a `login()`, apuntando a `/auth/register`
- `handleAuthSuccess()` — método privado ya existente, reutilizable para el registro sin cambios
- `handleAuthError()` — método privado ya existente, reutilizable para el registro sin cambios
- No redirigir al login tras el registro — la respuesta del registro ya autentica al usuario directamente
- `localStorage.removeItem('token')` — línea en `logout()` que se comentó temporalmente y debe restaurarse antes de entregar la tarea

---

## Resumen final

Esta lección cierra la Sección 20 con una tarea práctica: implementar la pantalla de registro. El estudiante debe crear el formulario reactivo con `fullName`, `email` y `password`, añadir el método `register()` al `AuthService` (reutilizando `handleAuthSuccess` y `handleAuthError`), conectar el formulario y navegar al home tras el registro exitoso. Como el endpoint de registro devuelve la misma respuesta que el login, el usuario queda autenticado directamente sin pasar por el login. La siguiente sección cubrirá el panel administrativo con operaciones CRUD de productos.
