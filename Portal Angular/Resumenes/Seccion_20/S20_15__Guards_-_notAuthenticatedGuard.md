# Guards - notAuthenticatedGuard

## ¿Qué se aprende?

En esta lección se introduce el concepto de Guards en Angular, se implementa el `NotAuthenticatedGuard` usando `canMatch` y `firstValueFrom`, y se aplica a las rutas de autenticación para impedir que un usuario ya autenticado acceda al login o al registro.

---

## Puntos clave

**¿Qué es un Guard?**

Un Guard es una función que actúa como vigilante de una ruta. Antes de que Angular cargue o active una ruta, el Guard decide si el usuario tiene permiso para acceder. Si devuelve `true`, la navegación continúa; si devuelve `false`, se cancela.

Los Guards son equivalentes al concepto de "middleware de ruta" en otros frameworks de backend.

**Tipos de Guards (hooks del ciclo de vida de navegación)**

- `canMatch` — se ejecuta cada vez que se intenta navegar a la ruta; es el más recomendado para verificar autenticación, ya que se dispara incluso si el módulo ya fue cargado.
- `canActivate` — se ejecuta antes de activar un componente.
- `canActivateChild` — para rutas hijas.
- `canDeactivate` — para controlar si el usuario puede salir de una ruta (p.ej. formulario con cambios sin guardar).
- `canLoad` — deprecado; usar `canMatch` en su lugar.

**Por qué `canMatch` y no `canLoad`**

`canLoad` solo se ejecuta la primera vez que se intenta cargar el módulo lazy. Si el usuario se autentica, carga el módulo y luego cierra sesión, `canLoad` no vuelve a ejecutarse. `canMatch` sí se ejecuta en cada intento de navegación, lo que lo hace más adecuado para verificar el estado de autenticación dinámico.

**Estructura del `NotAuthenticatedGuard`**

Se crea en `src/app/auth/guards/not-authenticated.guard.ts`:

```typescript
export const NotAuthenticatedGuard: CanMatchFn = async (route, segments) => {
  const authService = inject(AuthService);
  const router      = inject(Router);

  const isAuthenticated = await firstValueFrom(authService.checkAuthStatus());

  console.log('NotAuthenticatedGuard', isAuthenticated);

  if (isAuthenticated) {
    router.navigateByUrl('/');
    return false;
  }

  return true;
};
```

**El problema del estado `'checking'` y por qué `firstValueFrom`**

Al recargar la página, el `authStatus` empieza en `'checking'`. Si el Guard lee el estado en ese momento, no sabe aún si el usuario está autenticado. Hay que esperar a que `checkAuthStatus()` complete su petición HTTP y emita el resultado final (`true` o `false`).

`firstValueFrom` convierte un Observable en una Promesa que se resuelve con el primer valor emitido. Combinado con `async/await`, el Guard espera ese valor antes de tomar una decisión:

```typescript
const isAuthenticated = await firstValueFrom(authService.checkAuthStatus());
```

Se importa `firstValueFrom` de `rxjs`.

**Lógica del Guard**

- Si `isAuthenticated === true` (hay sesión activa): redirige al home (`/`) y devuelve `false` para bloquear el acceso a la ruta de autenticación.
- Si `isAuthenticated === false` (no hay sesión): devuelve `true` para permitir el acceso al login o registro.

**Registrar el Guard en las rutas**

Se aplica en `app.routes.ts` sobre la ruta `auth`, para que cubra tanto `login` como `register`:

```typescript
{
  path: 'auth',
  canMatch: [NotAuthenticatedGuard],
  loadChildren: () => import('./auth/auth.routes')
}
```

`canMatch` recibe un arreglo. Pueden colocarse varios Guards; todos deben devolver `true` para que la ruta sea accesible. Los Guards se ejecutan en el orden en que aparecen en el arreglo.

**Comportamiento verificado**

- Con sesión activa: al intentar navegar a `/auth/login`, el Guard detecta autenticación, redirige al home y bloquea la ruta.
- Sin sesión (token borrado del localStorage): el Guard devuelve `true` y se puede acceder al login normalmente.
- Sin hacer logout, al escribir `/auth/login` en la barra de direcciones: el Guard impide el acceso.

**Múltiples Guards en el arreglo**

Todos los Guards del arreglo se ejecutan; si cualquiera devuelve `false`, la ruta queda bloqueada. El orden sí importa: si se quiere detener la cadena con el primero que falle, el orden determina cuál se evalúa primero. Si un Guard devuelve `false`, los demás siguen ejecutándose de todas formas (Angular no corta la cadena).

---

## Ejemplo sencillo

El `NotAuthenticatedGuard` es como el portero de un club nocturno que verifica si ya tienes pulsera de entrada. Si ya la llevas puesta (sesión activa), el portero no te deja volver a hacer la cola de entrada (login/registro) y te indica que pases directamente a la pista. Si no llevas pulsera (sin sesión), te deja acceder a la cola normalmente para registrarte.

---

## Palabras clave y elementos importantes

- Guard — función que decide si se permite o deniega la navegación a una ruta
- `CanMatchFn` — tipo TypeScript del Guard de tipo `canMatch`; se importa de `@angular/router`
- `canMatch` — hook de navegación que se ejecuta cada vez que se intenta acceder a la ruta; recomendado para verificar autenticación
- `canLoad` — deprecado; reemplazado por `canMatch`
- `firstValueFrom(observable)` — convierte un Observable en una Promesa que se resuelve con el primer valor emitido; importado de `rxjs`
- `async / await` — permite esperar la resolución de `firstValueFrom` dentro del Guard
- `inject(AuthService)` y `inject(Router)` — inyección de dependencias dentro de una función Guard
- `router.navigateByUrl('/')` — redirige al home si el usuario ya está autenticado
- `canMatch: [NotAuthenticatedGuard]` — propiedad de la definición de ruta donde se registra el Guard
- `src/app/auth/guards/not-authenticated.guard.ts` — ruta del archivo del Guard

---

## Resumen final

Esta lección implementa el `NotAuthenticatedGuard` con `canMatch`, que impide que un usuario autenticado acceda a las rutas de login o registro. El Guard usa `firstValueFrom` junto con `async/await` para esperar el resultado de `checkAuthStatus()` antes de tomar una decisión, resolviendo así el problema del estado `'checking'` inicial. Si el usuario está autenticado devuelve `false` y lo redirige al home; si no lo está devuelve `true` y lo deja pasar. El Guard se registra en `app.routes.ts` sobre la ruta `auth` con `canMatch: [NotAuthenticatedGuard]`.
