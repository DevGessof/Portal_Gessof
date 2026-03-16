# De Observable a Señal — toSignal

## ¿Qué se aprende?

Esta lección implementa la página de detalle de usuario y presenta la función `toSignal`, que convierte un Observable en una señal. Se explica por qué Angular seguirá usando Observables internamente durante mucho tiempo, cómo `ActivatedRoute` expone los parámetros de la URL como un Observable, y cómo encadenar ese Observable con `switchMap` para hacer una petición HTTP y convertir todo el resultado directamente en una señal usando `toSignal`.

---

## Puntos clave

**Contexto: la página de detalle de usuario**

Se trabaja en `UserComponent` (ruta `/dashboard/user/:id`). Cuando el usuario hace clic en un nombre de la lista, navega a esta página pasando el `id` en la URL. La tarea es leer ese `id` y mostrar los datos del usuario correspondiente.

**¿Para qué sirve `toSignal`?**

Angular utiliza Observables en muchas partes de su API interna: el router, los formularios reactivos, el `HttpClient`. Aunque las señales son el futuro, los Observables no van a desaparecer pronto. `toSignal` es el puente: convierte un Observable en una señal de solo lectura. Cada vez que el Observable emite un nuevo valor, la señal se actualiza automáticamente.

**`ActivatedRoute` y los parámetros de la URL**

Para leer el `id` de la URL se inyecta `ActivatedRoute`:

```typescript
private route = inject(ActivatedRoute);
// ActivatedRoute se importa de @angular/router
```

Los parámetros de la URL están disponibles como un Observable en `this.route.params`. Si se hace `console.log(this.route.params)`, se ve en la consola un objeto con método `subscribe`, confirmando que es un Observable. Esto es intencional: si el `id` en la URL cambiara sin que el componente se destruya (navegación entre usuarios), el Observable emitiría el nuevo valor y el componente podría reaccionar.

**Método `getUserById` en el servicio**

Se añade al `UsersService` un nuevo método:

```typescript
getUserById(id: string): Observable<User> {
  return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1500),
      map(resp => resp.data)
    );
}
```

- El endpoint para un usuario individual es el mismo base de URL seguido del `id`.
- `.pipe(map(resp => resp.data))` extrae únicamente el objeto `User` de la respuesta, descartando los metadatos.
- El método devuelve `Observable<User>`, no hace el `subscribe` internamente.
- Se crea la interfaz `UserResponse` (con `Paste JSON as Code` sobre la respuesta de `/api/users/2`) y se añade a `req-response.ts`.

**Convertir el Observable de params en señal con `toSignal` y `switchMap`**

En el `UserComponent` se define la señal `user`:

```typescript
import { toSignal } from '@angular/core/rxjs-interop';

public user = toSignal(
  this.route.params.pipe(
    switchMap(({ id }) => this.usersService.getUserById(id))
  )
);
```

- `toSignal(observable)` — función de `@angular/core/rxjs-interop` que convierte el Observable en una señal; se importa desde esa sub-ruta específica.
- `this.route.params` — Observable de parámetros de la URL.
- `.pipe(switchMap(({ id }) => ...))` — el operador `switchMap` aplana el Observable: cuando `params` emite un nuevo valor, cancela la petición anterior (si existía) y lanza una nueva con el nuevo `id`. Aquí se desestructura directamente el objeto de params para extraer `id`.
- El resultado es una señal que contiene `User | undefined` (puede ser `undefined` antes de que llegue la primera respuesta).
- `usersService` se inyecta como propiedad de clase con `inject(UsersService)`.

**Mostrar la información en el template**

Se muestra la información del usuario usando `@if` y `@else`:

```typescript
template: `
  <app-title title="User" />
  @if (user()) {
    <section>
      <img [srcSet]="user()?.avatar" [alt]="user()?.first_name" />
      <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
      <p>{{ user()?.email }}</p>
    </section>
  } @else {
    <p>Cargando información</p>
  }
`
```

- `user()` — llama a la señal para obtener su valor.
- El operador `?.` (optional chaining) evita errores cuando `user()` es `undefined`. TypeScript no es suficientemente inteligente para deducir que dentro del bloque `@if (user())` el valor ya está garantizado, por lo que hay que añadir el `?` manualmente.
- Mientras la petición no llega, `user()` es `undefined` y se muestra "Cargando información". Cuando llega la respuesta, la señal se actualiza y Angular re-renderiza el bloque `@if`.

**Nota sobre la tarea pendiente**

Al final de la lección el instructor anuncia que en la próxima clase se pedirá al estudiante implementar el título dinámico del componente usando una señal computada basada en el nombre del usuario. Ese es el puente con la lección siguiente.

---

## Ejemplo sencillo

`toSignal` es como un traductor en tiempo real: el Observable habla un idioma (emite valores de forma asíncrona con `subscribe`) y las señales hablan otro (reactivo, sin `subscribe`). `toSignal` escucha al Observable y cada vez que este emite algo, actualiza la señal con el nuevo valor, de modo que el resto de la aplicación puede trabajar con señales sin preocuparse por la suscripción.

---

## Palabras clave y elementos importantes

- `toSignal(observable)` — función de `@angular/core/rxjs-interop` que convierte un Observable en una señal de solo lectura; la señal se actualiza automáticamente cada vez que el Observable emite un valor
- `@angular/core/rxjs-interop` — sub-módulo de Angular que contiene utilidades para interoperar entre Observables y señales; se importa con su ruta completa
- `ActivatedRoute` — servicio de Angular Router que expone información sobre la ruta activa; sus propiedades (`params`, `queryParams`, `data`) son Observables
- `route.params` — Observable que emite un objeto con los parámetros de la URL cada vez que cambian; útil para detectar cambios de `id` sin destruir el componente
- `switchMap` — operador de RxJS que aplana un Observable de Observables; cancela la suscripción anterior cuando llega un nuevo valor y lanza una nueva; ideal para peticiones HTTP que dependen de un parámetro que puede cambiar
- `map(resp => resp.data)` — operador de RxJS que transforma el valor emitido por el Observable; aquí extrae solo el objeto `User` de la respuesta completa de la API
- `Observable<User>` — tipo de retorno del método `getUserById`; el componente no se suscribe manualmente porque `toSignal` se encarga de ello
- `User | undefined` — tipo de la señal generada por `toSignal`; es `undefined` antes de que el Observable emita su primer valor
- `?.` (optional chaining) — operador de JavaScript que evalúa la propiedad solo si el objeto no es `null` ni `undefined`; necesario porque TypeScript no deduce automáticamente que dentro de `@if (user())` el valor ya existe

---

## Resumen final

`toSignal` convierte cualquier Observable en una señal de solo lectura importándolo de `@angular/core/rxjs-interop`. En esta lección se encadena el Observable de parámetros de la URL (`route.params`) con `switchMap` para hacer la petición HTTP del usuario por `id`, y el resultado se convierte directamente en la señal `user` con `toSignal`. Mientras el Observable no ha emitido, la señal vale `undefined` y el template muestra "Cargando información"; cuando llega la respuesta, la señal se actualiza y Angular renderiza los datos del usuario automáticamente.
