# Autorización - IsAdminGuard

## ¿Qué se aprende?

En esta lección se implementa el `IsAdminGuard`, que protege el panel administrativo permitiendo el acceso solo a usuarios con el role `admin`. Se añade además la señal computada `isAdmin` al `AuthService` para centralizar esa lógica.

---

## Puntos clave

**Diferencia entre autenticación y autorización (repaso)**

- **Autenticación**: verificar que el usuario tiene una sesión activa (ya hecho con `checkAuthStatus`).
- **Autorización**: verificar que el usuario autenticado tiene permiso para acceder a un recurso específico. En este caso, comprobar que su arreglo de `roles` contiene `'admin'`.

**Señal `isAdmin` en el `AuthService`**

Se añade una señal computada pública al `AuthService` que devuelve `true` si el usuario tiene el role `'admin'`:

```typescript
// auth.service.ts
isAdmin = computed(() =>
  this._user()?.roles.includes('admin') ?? false
);
```

- Lee directamente de `_user` (la señal privada del usuario) para ir a la fuente.
- Si `_user()` es `null` o `roles` no contiene `'admin'`, devuelve `false`.
- Es reactiva: se actualiza automáticamente cuando cambia el usuario.

**Archivo del Guard**

Se crea en `src/app/auth/guards/is-admin.guard.ts`:

```typescript
export const IsAdminGuard: CanMatchFn = async (route, segments) => {
  const authService = inject(AuthService);

  await firstValueFrom(authService.checkAuthStatus());

  return authService.isAdmin();
};
```

- `CanMatchFn` — tipo del guard funcional con `canMatch`.
- `firstValueFrom(authService.checkAuthStatus())` — espera a que se resuelva la verificación de autenticación antes de leer `isAdmin`. Esto resuelve el problema del estado `'checking'` al recargar la página.
- `authService.isAdmin()` — devuelve `true` si el usuario tiene el role `admin`, `false` en caso contrario. No hace falta un `if`: se devuelve directamente el valor de la señal.
- La función es `async` porque usa `await`.

**El problema del estado `'checking'` (mismo patrón que `NotAuthenticatedGuard`)**

Al recargar la página, `authStatus` comienza en `'checking'`. Si se leyera `isAdmin` inmediatamente, devolvería `false` aunque el usuario sí sea admin. La solución es `await firstValueFrom(authService.checkAuthStatus())`, que espera al primer valor emitido del Observable (ya sea `true` o `false`) antes de continuar.

**Posible petición duplicada**

Al tener tanto `NotAuthenticatedGuard` como `IsAdminGuard` usando `checkAuthStatus()`, podría haber dos peticiones HTTP iguales al backend. El instructor menciona que esto es un inconveniente conocido y sugiere como mejora opcional implementar caché en `checkAuthStatus()` (similar al caché de productos): guardar la última respuesta junto con un timestamp y no volver a hacer la petición hasta que haya pasado cierto tiempo (p.ej. 10 minutos). Sin embargo, cuando no hay token la función retorna `of(false)` sin llegar al backend, por lo que el impacto real es mínimo.

**Registro del Guard en las rutas**

Se aplica en `admin-dashboard.routes.ts` sobre la ruta padre del panel:

```typescript
{
  path: '',
  canMatch: [IsAdminGuard],
  component: AdminDashboardLayoutComponent,
  children: [...]
}
```

Con esto, cualquier ruta bajo `/admin` queda protegida.

**Comportamiento verificado**

- Usuario `test2@google.com` (sin role `admin`): al intentar acceder a `/admin` o `/admin/products`, el Guard devuelve `false` y muestra la página 404 (not-found-page).
- Usuario `test1@google.com` (con role `admin`): el Guard devuelve `true` y el panel es accesible.

---

## Ejemplo sencillo

`IsAdminGuard` es como el guardia de seguridad en la entrada de un área restringida. No le basta con que el visitante tenga identificación (autenticación); también necesita que en esa identificación figure el permiso de "acceso a sala de administración" (role `admin`). Si el permiso no está, el guardia bloquea la entrada aunque la persona esté identificada.

---

## Palabras clave y elementos importantes

- Autorización — verificación del nivel de permisos de un usuario ya autenticado
- `isAdmin` — señal computada en `AuthService` que devuelve `true` si `_user().roles.includes('admin')`
- `is-admin.guard.ts` — archivo del Guard, ubicado en `src/app/auth/guards/`
- `CanMatchFn` — tipo TypeScript para guards funcionales con `canMatch`
- `await firstValueFrom(authService.checkAuthStatus())` — espera a que se resuelva la verificación de autenticación antes de evaluar el role
- `authService.isAdmin()` — valor de la señal computada que se devuelve directamente como resultado del Guard
- `canMatch: [IsAdminGuard]` — propiedad de la ruta padre en `admin-dashboard.routes.ts`
- Petición duplicada — inconveniente cuando dos Guards llaman a `checkAuthStatus()`; solución opcional: caché con timestamp en el servicio
- `test1@google.com` — usuario con role `admin` (puede acceder al panel)
- `test2@google.com` — usuario sin role `admin` (no puede acceder al panel)

---

## Resumen final

Esta lección implementa la autorización del panel administrativo. Se añade `isAdmin = computed(...)` al `AuthService` para saber si el usuario tiene el role `'admin'`. El `IsAdminGuard` usa `async/await` + `firstValueFrom(checkAuthStatus())` para esperar la verificación de sesión antes de leer `isAdmin()`, y devuelve ese valor directamente. El Guard se registra en `admin-dashboard.routes.ts` con `canMatch: [IsAdminGuard]` sobre la ruta padre, protegiendo todo el módulo. Los usuarios sin role `admin` ven la página 404; los usuarios admin acceden normalmente al panel.
