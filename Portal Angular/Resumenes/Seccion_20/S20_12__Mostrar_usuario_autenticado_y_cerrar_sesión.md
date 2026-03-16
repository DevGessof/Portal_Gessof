# Mostrar usuario autenticado y cerrar sesión

## ¿Qué se aprende?

En esta lección se conecta el `AuthService` al navbar para mostrar el nombre del usuario autenticado, un botón de cerrar sesión y un enlace de login, cambiando lo que se muestra según el estado de autenticación.

---

## Puntos clave

**Inyectar el `AuthService` en el navbar**

En `store-front/components/front-navbar.component.ts` se inyecta el servicio:

```typescript
authService = inject(AuthService);
```

Con esto el template tiene acceso al estado de autenticación y al usuario.

**Tres estados posibles en el navbar**

El navbar usa `@if` / `@else if` / `@else` para mostrar contenido diferente según el `authStatus`:

```html
@if (authService.authStatus() === 'authenticated') {
  <!-- Usuario autenticado: nombre + botón salir -->
} @else if (authService.authStatus() === 'not-authenticated') {
  <!-- No autenticado: enlace al login -->
} @else {
  <!-- checking: indicador de carga (...) -->
}
```

El estado `'checking'` se muestra durante la verificación inicial del token (al recargar la página). Aparece brevemente como tres puntos `...` con clase `btn btn-ghost`.

**Botón con el nombre del usuario**

Dentro del bloque `authenticated`:

```html
<button class="btn btn-ghost">
  {{ authService.user()?.fullName }}
</button>
```

Se usa el operador `?.` (optional chaining) porque aunque en teoría si estamos autenticados siempre hay usuario, TypeScript no puede garantizarlo desde el tipo.

**Botón de cerrar sesión**

Justo después del botón con el nombre:

```html
<button class="btn btn-sm btn-error" (click)="authService.logout()">
  Salir
</button>
```

`btn-sm` lo hace pequeño, `btn-error` lo pone en rojo. El `(click)` llama directamente a `authService.logout()` sin necesitar un método intermediario en el componente.

**Enlace de inicio de sesión**

Dentro del bloque `not-authenticated`:

```html
<a class="btn btn-secondary" routerLink="/auth/login">
  Iniciar sesión
</a>
```

`btn-secondary` le da el color morado de daisyUI. Se necesita importar `RouterLink` en el componente.

**Separación de elementos con `gap-4`**

Al `navbar-end` se le añade la clase `gap-4` para que los botones tengan separación entre sí.

**Problema identificado: el login sigue siendo accesible con sesión activa**

Si el usuario tiene sesión y recarga en `/auth/login`, se queda en esa pantalla porque todavía no hay un Guard que lo bloquee. Eso se resuelve con interceptores y Guards en las lecciones siguientes.

**Por qué añadir el token manualmente en cada petición es un problema**

En `checkAuthStatus()` se añade el encabezado `Authorization` manualmente. Pero cuando en el futuro se creen, actualicen o eliminen productos desde el panel administrativo, esas peticiones también necesitarán el token. Copiarlo en cada servicio viola el principio DRY. La solución son los **interceptores HTTP**, tema de la siguiente lección.

---

## Ejemplo sencillo

El navbar con `@if/@else if/@else` es como el marcador de una sala VIP: si ya tienes el brazalete (`authenticated`), muestra tu nombre y un botón para quitártelo; si no tienes brazalete (`not-authenticated`), muestra la taquilla para comprarlo; si aún están comprobando si tienes reserva (`checking`), muestra un indicador de espera.

---

## Palabras clave y elementos importantes

- `inject(AuthService)` en el navbar — acceso al estado de autenticación desde cualquier componente
- `authService.authStatus()` — señal `computed` de solo lectura con el estado actual
- `authService.user()?.fullName` — acceso seguro al nombre del usuario con optional chaining
- `@if / @else if / @else` — bloque condicional de Angular para renderizar contenido diferente según el estado
- `'authenticated'` / `'not-authenticated'` / `'checking'` — tres estados del `AuthStatus`
- `btn-ghost` / `btn-secondary` / `btn-sm` / `btn-error` — clases de daisyUI para el estilo de los botones
- `(click)="authService.logout()"` — llamada directa a un método del servicio desde el template
- `routerLink="/auth/login"` — navegación declarativa al login desde el enlace
- `gap-4` — clase Tailwind para separar los elementos del `navbar-end`

---

## Resumen final

En esta lección se actualiza el navbar para reaccionar al estado de autenticación. Con `@if/@else if/@else` sobre `authService.authStatus()` se muestra el nombre del usuario y un botón de logout si está autenticado, un enlace al login si no lo está, y un indicador de espera (`...`) durante la verificación inicial. El botón "Salir" llama directamente a `authService.logout()` en el `(click)`. Se identifica el siguiente problema a resolver: el token debe añadirse automáticamente a todas las peticiones HTTP sin repetir código, lo que se solucionará con interceptores.
