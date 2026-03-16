# Peticiones HTTP — importProvidersFrom

## ¿Qué se aprende?

Esta lección conecta el `UsersService` con la API REST para obtener la lista de usuarios. Se explica por qué aparece el error `NullInjectorError` al intentar usar `HttpClient` en un proyecto sin `AppModule`, cómo resolverlo registrando `HttpClientModule` globalmente mediante `importProvidersFrom` en `app.config.ts`, y cómo actualizar el estado de la señal al completarse la petición. También se implementa la visualización de la lista en el template usando `@for`, `@empty` y `RouterModule`.

---

## Puntos clave

**Inyectar `HttpClient` en el servicio**

Se añade al `UsersService`:

```typescript
private http = inject(HttpClient);
```

`HttpClient` se importa de `@angular/common/http`. Al guardar los cambios, la consola del navegador muestra un `NullInjectorError`.

**Por qué aparece el `NullInjectorError`**

En proyectos Angular tradicionales con `AppModule`, se importaba `HttpClientModule` en el arreglo `imports` del módulo raíz, lo que registraba el proveedor de `HttpClient` de forma global. En proyectos standalone (sin `AppModule`), ese paso no existe. Al intentar inyectar `HttpClient` sin haberlo registrado, Angular no encuentra su proveedor en el árbol de inyección y lanza el error.

**Solución: `importProvidersFrom` en `app.config.ts`**

`app.config.ts` es el equivalente standalone del `AppModule` para registrar providers globales. Se añade `importProvidersFrom(HttpClientModule)` al arreglo `providers`:

```typescript
// app.config.ts
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    importProvidersFrom(HttpClientModule)
  ]
};
```

- `importProvidersFrom()` — función de `@angular/core` que extrae los providers de un módulo Angular clásico y los registra en el contexto standalone. Permite reutilizar módulos existentes (como `HttpClientModule`) sin necesidad de convertirlos a la nueva API.
- Dentro de `importProvidersFrom()` se pueden incluir todos los módulos que antes iban en el arreglo `imports` de `AppModule`.

Con esto, el error desaparece y `HttpClient` está disponible en toda la aplicación.

**Hacer la petición HTTP en el constructor**

En el constructor del `UsersService` se reemplaza el `console.log` por la petición HTTP:

```typescript
constructor() {
  this.http.get<UsersResponse>('https://reqres.in/api/users')
    .pipe(delay(1500))
    .subscribe(res => {
      this.#state.set({
        loading: false,
        users: res.data
      });
    });
}
```

- `this.http.get<UsersResponse>(url)` — genera un Observable que hará la petición GET al ejecutarse.
- `.pipe(delay(1500))` — operador de RxJS que añade un retraso artificial de 1,5 segundos para que sea visible el estado de carga en la demo.
- `.subscribe(res => { ... })` — la petición se ejecuta al suscribirse. Cuando llega la respuesta, se actualiza el estado de la señal con `set()`: `loading` pasa a `false` y `users` recibe `res.data` (el arreglo de usuarios de la respuesta).

**Visualizar la lista en `UsersComponent`**

En el template del `UsersComponent` se implementa la lista de usuarios:

```html
<app-title title="Listado de usuarios" />

<ul>
  @for (user of usersService.users(); track user.id) {
    <li class="flex items-center mx-2 cursor-pointer">
      <img [srcSet]="user.avatar" [alt]="user.first_name" class="rounded w-14" />
      <a [routerLink]="['/dashboard/user', user.id]"
         class="mx-5 hover:underline">
        {{ user.first_name }} {{ user.last_name }}
      </a>
    </li>
  } @empty {
    <li>Espere, por favor.</li>
  }
</ul>
```

- `@for` itera sobre `usersService.users()` (señal computada, se llama con `()`).
- `track user.id` — Angular usa el `id` del usuario para identificar cada elemento de forma eficiente.
- `@empty` se muestra mientras el arreglo está vacío (es decir, mientras la petición no ha llegado), actuando como indicador de carga.
- `[routerLink]="['/dashboard/user', user.id]"` — navega a la página del usuario al hacer clic.
- Para usar `routerLink`, el componente standalone debe importar `RouterModule` en su arreglo `imports`.

**Resultado visual**

Al navegar a la página "User List", aparece "Espere, por favor." durante 1,5 segundos (el delay artificial). Luego llegan los datos, el arreglo deja de estar vacío y se renderiza la lista de usuarios con imagen, nombre y enlace al perfil.

---

## Ejemplo sencillo

`importProvidersFrom(HttpClientModule)` es como registrar un servicio de mensajería en la recepción del edificio (la configuración global). Una vez registrado, cualquier departamento (componente o servicio) puede pedir que le traigan paquetes (hacer peticiones HTTP) sin tener que registrar el servicio de mensajería ellos mismos.

---

## Palabras clave y elementos importantes

- `HttpClient` — servicio de Angular para hacer peticiones HTTP; importar de `@angular/common/http`; preferido sobre el Fetch API nativo porque soporta cancelación, operadores RxJS, interceptores y tipado
- `NullInjectorError` — error de Angular cuando se intenta inyectar un servicio cuyo proveedor no está registrado en el árbol de inyección
- `importProvidersFrom(Modulo)` — función de `@angular/core` que extrae los providers de un módulo Angular clásico para registrarlos en una aplicación standalone; se añade al arreglo `providers` de `app.config.ts`
- `HttpClientModule` — módulo Angular que registra el proveedor de `HttpClient`; en proyectos con `AppModule` iba en `imports`; en proyectos standalone se incluye dentro de `importProvidersFrom()`
- `this.http.get<T>(url)` — método de `HttpClient` que devuelve un Observable tipado con el tipo de la respuesta; la petición no se ejecuta hasta que alguien se suscribe
- `.pipe(delay(ms))` — operador de RxJS que retrasa la emisión del Observable por el tiempo indicado en milisegundos; útil para simular latencia de red en demos
- `.subscribe(callback)` — inicia la ejecución del Observable; el callback recibe la respuesta cuando llega
- `#state.set({ loading, users })` — actualiza el estado completo de la señal privada con los datos recibidos de la petición
- `@empty { }` — bloque de `@for` que se muestra cuando el arreglo está vacío; aquí actúa como indicador de carga mientras `users` no tiene datos
- `RouterModule` — debe importarse en componentes standalone para usar `routerLink` y `routerLinkActive`

---

## Resumen final

El error `NullInjectorError` al usar `HttpClient` en proyectos standalone se resuelve añadiendo `importProvidersFrom(HttpClientModule)` al arreglo `providers` de `app.config.ts`. La petición HTTP se hace en el constructor del servicio con `this.http.get<T>(url).subscribe()`, y al llegar la respuesta se actualiza la señal privada `#state` con `set()`. El template del componente usa `@for` con `track user.id` para iterar la lista y `@empty` como indicador de carga mientras el arreglo está vacío. La navegación al perfil de usuario se implementa con `routerLink` (requiere `RouterModule` en el componente standalone).
