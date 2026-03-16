# Servicios con señales

## ¿Qué se aprende?

Esta lección crea el primer servicio de la aplicación (`UsersService`) e introduce un patrón de gestión de estado basado en señales. Se define una interfaz `State` que encapsula el estado del servicio, se declara la señal de estado como privada usando la sintaxis ECMAScript `#`, se expone la información al exterior mediante señales computadas de solo lectura, y se inyecta el servicio en el componente de lista de usuarios usando la función `inject()`.

---

## Puntos clave

**Crear el servicio `UsersService`**

Se genera el servicio en la carpeta `app/services` con el generador de Angular (clic derecho → generar servicio → nombre "users"). El archivo de pruebas generado se elimina. El resultado es `users.service.ts` con el decorador `@Injectable({ providedIn: 'root' })`, lo que lo convierte en un singleton disponible en toda la aplicación sin necesidad de declararlo en ningún módulo.

**La interfaz `State`**

Dentro del archivo del servicio (no necesita estar en un archivo separado) se define una interfaz que representa el estado completo del servicio:

```typescript
interface State {
  users: User[];
  loading: boolean;
}
```

- `users` — arreglo de usuarios; inicialmente vacío.
- `loading` — indica si hay una petición en curso; inicialmente `true`.

La interfaz `User` se importará desde las interfaces del proyecto.

**Crear la interfaz `User` con "Paste JSON as Code"**

Para tipar los usuarios correctamente, el instructor copia el JSON de respuesta de la API `reqres.in` (endpoint `/api/users`) y usa la extensión VS Code "Paste JSON as Code" (de quicktype.io) para generar automáticamente las interfaces TypeScript. El nombre raíz se llama `UsersResponse` y el tipo del arreglo de datos se renombra de `Datum` a `User`. Las interfaces generadas se guardan en el archivo `interfaces/req-response.ts`.

**La señal de estado con `#` (privada a nivel ECMAScript)**

El estado del servicio se almacena en una señal privada:

```typescript
#state = signal<State>({
  loading: true,
  users: []
});
```

El símbolo `#` hace la propiedad privada a nivel de ECMAScript (no solo de TypeScript). La diferencia con el modificador `private` de TypeScript es importante: `private` solo existe durante la compilación; cuando TypeScript transpila a JavaScript, la restricción desaparece y es posible acceder a la propiedad desde fuera. Con `#`, la propiedad es privada también en el JavaScript generado, lo que garantiza encapsulación real en tiempo de ejecución.

**Señales computadas públicas para exponer el estado**

Para que los componentes puedan leer partes del estado sin poder modificarlo, se crean señales computadas públicas derivadas de `#state`:

```typescript
public users = computed(() => this.#state().users);
public loading = computed(() => this.#state().loading);
```

- `computed()` crea una señal de solo lectura.
- No tiene los métodos `set` ni `update`, por lo que no puede modificarse desde fuera del servicio.
- Se actualiza automáticamente cuando `#state` cambia.
- Es compatible con `ChangeDetectionStrategy.OnPush`.

**El constructor: log de carga**

Por ahora el constructor solo contiene un `console.log('Cargando data')` para verificar que el servicio se inicializa correctamente. La petición HTTP real se implementará en la siguiente lección.

**Inyectar el servicio en el componente con `inject()`**

En `UsersComponent` se inyecta el servicio usando la función `inject()`, que es la forma moderna equivalente a la inyección por constructor:

```typescript
public usersService = inject(UsersService);
```

Ambas formas (constructor e `inject()`) son válidas. La forma con `inject()` es más concisa.

**Configurar alias `@services` en `tsconfig.json`**

Como práctica de la lección de alias vista anteriormente, se añade un nuevo alias en `tsconfig.json`:

```json
"@services/*": ["./src/app/services/*"]
```

Esto permite importar el servicio con `@services/users.service` en lugar de una ruta relativa larga. La tarea propuesta es que el estudiante configure este alias por su cuenta.

**Resultado: el servicio funciona**

Al navegar a la página "User List", la consola muestra "Cargando data", lo que confirma que el servicio se instanció correctamente. Desde el `UsersComponent` se puede acceder a `usersService.users` (señal de solo lectura) y `usersService.loading`, pero no se puede llamar a `set` ni `update` sobre ellas, lo que garantiza que solo el propio servicio puede modificar su estado.

---

## Ejemplo sencillo

El patrón `#state` con señales computadas es como una caja fuerte (el `#state`) dentro de una tienda: solo los empleados de la tienda (el servicio) pueden abrir la caja y cambiar su contenido. Los clientes (los componentes) pueden ver el precio que está exhibido en el escaparate (las señales computadas `users` y `loading`), pero no pueden meter mano en la caja directamente.

---

## Palabras clave y elementos importantes

- `@Injectable({ providedIn: 'root' })` — decorador que registra el servicio como singleton global; disponible en toda la aplicación sin importarlo en ningún módulo
- `inject(Clase)` — función de Angular para inyectar dependencias; alternativa moderna a la inyección por constructor; se puede usar como inicializador de propiedad de clase
- `#nombrePropiedad` — sintaxis ECMAScript de campo privado de clase; la propiedad es inaccesible desde fuera de la clase incluso en el JavaScript transpilado; más fuerte que el modificador `private` de TypeScript
- `private` (TypeScript) — modificador que restringe el acceso en tiempo de compilación; desaparece en el JavaScript generado y la propiedad puede accederse en runtime
- `interface State` — interfaz local definida en el mismo archivo del servicio que modela el estado completo; contiene `users` y `loading`
- `computed(() => this.#state().propiedad)` — señal derivada de solo lectura; se recalcula automáticamente cuando `#state` cambia; no tiene `set` ni `update`
- **"Paste JSON as Code"** — extensión de VS Code de quicktype.io que genera interfaces TypeScript automáticamente desde JSON pegado en el portapapeles
- `reqres.in` — API REST de prueba usada en el curso para simular peticiones de usuarios; endpoint `/api/users` devuelve una lista de usuarios con id, nombre, apellido, email y avatar

---

## Resumen final

Esta lección establece el patrón de servicios con señales del proyecto: el estado (`#state`) se encapsula en una señal privada con `#`, garantizando que solo el servicio pueda modificarlo; las partes del estado que los componentes necesitan se exponen como señales computadas públicas de solo lectura con `computed()`. El servicio se inyecta en los componentes con `inject()`. Este patrón combina encapsulación sólida con reactividad automática y compatibilidad con `OnPush`, sentando las bases para las peticiones HTTP de la siguiente lección.
