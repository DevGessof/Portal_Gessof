# AuthService - Controlar autenticación

## ¿Qué se aprende?

En esta lección se crea el `AuthService` que centraliza toda la lógica de autenticación. Se explorar el endpoint del backend, se define el tipo `AuthStatus`, se crean señales privadas para el estado, el usuario y el token, y se exponen señales de solo lectura mediante `computed`.

---

## Puntos clave

**Endpoint del backend en Postman**

El backend expone dos endpoints de autenticación como peticiones POST:
- `POST localhost:3000/api/auth/login` — recibe `{ email, password }` en el body JSON.
- `POST localhost:3000/api/auth/register` — recibe `{ email, password, fullName }`.

También existe un tercer endpoint:
- `GET localhost:3000/api/auth/check-status` — verifica si el token actual sigue siendo válido.

Los tres endpoints devuelven la misma estructura de respuesta: datos del usuario autenticado más un token JWT renovado. El token tiene vigencia de dos horas.

Si las credenciales son incorrectas o falta información, el backend responde con `400 Bad Request` con un detalle de los errores de validación.

**Estructura del JWT**

El JSON Web Token tiene tres partes separadas por puntos: header, payload y firma. El payload es visible (solo en base64), pero si alguien lo modifica, la firma deja de coincidir y el backend invalida el token. El token no necesita ser comprendido en profundidad para usarlo; basta con enviarlo en las peticiones que lo requieran.

**Creación del `AuthService`**

Se crea `src/app/auth/services/auth.service.ts` con Angular Schematics.

**Tipo `AuthStatus`**

```typescript
type AuthStatus = 'checking' | 'authenticated' | 'not-authenticated';
```

Los tres estados posibles:
- `'checking'` — estado inicial; no se sabe aún si el usuario tiene sesión activa (se está verificando).
- `'authenticated'` — hay un usuario con sesión activa.
- `'not-authenticated'` — el usuario no tiene sesión.

El estado inicial es `'checking'` porque al cargar la aplicación se necesita consultar al backend antes de saber si hay sesión.

**Señales privadas**

El servicio declara tres señales privadas (con prefijo `_`) para que no puedan ser modificadas desde el exterior:

```typescript
private _authStatus = signal<AuthStatus>('checking');
private _user       = signal<User | null>(null);
private _token      = signal<string | null>(null);
```

También se inyecta `HttpClient`:

```typescript
private http = inject(HttpClient);
```

**Señales públicas de solo lectura (computed)**

Para exponer los valores sin permitir modificaciones externas se usan señales `computed`:

```typescript
authStatus = computed<AuthStatus>(() => {
  if (this._authStatus() === 'checking') return 'checking';
  if (this._user()) return 'authenticated';
  return 'not-authenticated';
});

user  = computed(() => this._user());
token = computed(() => this._token());
```

El uso de `computed` garantiza que cualquier componente que consuma estas señales obtenga siempre el valor actualizado, pero nunca pueda llamar a `.set()` sobre ellas.

---

## Ejemplo sencillo

Las señales privadas son como los registros internos de un banco: solo los empleados (métodos del servicio) pueden modificarlos. Las señales `computed` son como el extracto de cuenta que el cliente puede ver: refleja el estado real, pero el cliente no puede escribir en él directamente.

---

## Palabras clave y elementos importantes

- `AuthStatus` — tipo TypeScript con tres valores posibles: `'checking'`, `'authenticated'`, `'not-authenticated'`
- `signal<AuthStatus>('checking')` — señal privada que almacena el estado de autenticación
- `signal<User | null>(null)` — señal privada para el usuario autenticado; null si no hay sesión
- `signal<string | null>(null)` — señal privada para el token JWT
- `computed()` — crea una señal derivada de solo lectura a partir de otras señales
- `inject(HttpClient)` — inyección del cliente HTTP para hacer peticiones al backend
- `providedIn: 'root'` — el servicio es singleton compartido en toda la aplicación
- Prefijo `_` — convención para señalar que una propiedad es privada y no debe usarse desde fuera del servicio
- JWT — token de autenticación en tres partes: header, payload y firma; vigente por dos horas
- `POST /api/auth/login` — endpoint de inicio de sesión
- `POST /api/auth/register` — endpoint de registro; requiere también `fullName`
- `GET /api/auth/check-status` — endpoint para verificar si el token sigue siendo válido

---

## Resumen final

Esta lección establece los cimientos del `AuthService`. Se define el tipo `AuthStatus` con tres estados posibles y se crean señales privadas para `_authStatus`, `_user` y `_token`, todas inicializadas en sus valores por defecto. Se exponen tres señales `computed` de solo lectura (`authStatus`, `user`, `token`) que permiten que los componentes consuman el estado sin poder modificarlo. El servicio inyecta `HttpClient` para las peticiones que se implementarán en la siguiente lección.
