# Evaluación: Angular orientado a Microservicios

> **15 preguntas** basadas exclusivamente en el contenido del curso, organizadas en **3 niveles de dificultad**.
> Cada pregunta incluye respuesta correcta y justificación completa de todas las alternativas.

---

## 📋 Instrucciones

- Lee cada pregunta con atención antes de responder.
- Elige **una sola alternativa** por pregunta.
- Las respuestas y justificaciones están al final de cada pregunta.
- Las preguntas cubren las secciones de prioridad 1 y 2 del curso (S4, S5, S6, S7, S9, S10, S11, S18, S19, S20, S21, S22, S23).

---

## 🟢 Nivel 1 — Básico (Preguntas 1 a 5)

---

### Pregunta 1

En el curso se trabaja con `signal()` para manejar el estado reactivo. ¿Cuál es la forma **correcta** de leer el valor de una señal en un template de Angular?

**a)** `{{ mySignal }}`
**b)** `{{ mySignal.value }}`
**c)** `{{ mySignal() }}`
**d)** `{{ mySignal.get() }}`

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: c) `{{ mySignal() }}`**

En el curso (Sección 4) se explica explícitamente que una señal es una **función**. Para obtener su valor hay que invocarla con paréntesis, tanto en el template como en el código TypeScript (`this.mySignal()`). El instructor incluso señala este como un error frecuente de principiantes.

- **a) `{{ mySignal }}`** — Incorrecto. Sin paréntesis, Angular mostraría el texto `"Signal: valor"`, que es la representación de la función señal en sí, no su valor. El instructor lo menciona como un error común.
- **b) `{{ mySignal.value }}`** — Incorrecto. Las señales de Angular no tienen una propiedad `.value`. Esa sintaxis no existe en la API de `signal()` de Angular.
- **d) `{{ mySignal.get() }}`** — Incorrecto. Las señales tampoco tienen un método `.get()`. La API de señales de Angular usa únicamente la invocación directa como función.

</details>

---

### Pregunta 2

En la Sección 7, al implementar el `GifService`, se necesita hacer una petición HTTP GET. ¿Qué debe hacerse en `app.config.ts` para que `HttpClient` esté disponible en toda la aplicación?

**a)** Importar `HttpClientModule` en el array `imports` del `AppComponent`.
**b)** Agregar `provideHttpClient(withFetch())` en el arreglo `providers` de `app.config.ts`.
**c)** Declarar `HttpClient` directamente en el constructor del servicio sin ninguna configuración previa.
**d)** Agregar `HttpClient` al array `imports` del decorador del servicio.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Agregar `provideHttpClient(withFetch())` en el arreglo `providers` de `app.config.ts`.**

El curso (Sección 7 y Sección 10) enseña que en Angular moderno con standalone components, `HttpClient` se registra globalmente usando `provideHttpClient(withFetch())` en el archivo `app.config.ts`. `withFetch()` configura el cliente HTTP para usar la Fetch API nativa en lugar de XHR. Sin este paso, Angular lanza un `NullInjectorError` al intentar inyectar `HttpClient`.

- **a)** — Incorrecto. `HttpClientModule` es el enfoque antiguo basado en NgModules. El curso trabaja exclusivamente con standalone components y la API moderna de providers. Además, en el curso nunca se usa este módulo.
- **c)** — Incorrecto. Declarar `HttpClient` en el constructor sin haberlo registrado en el árbol de inyección lanza un error en tiempo de ejecución (`NullInjectorError`). La inyección de dependencias de Angular necesita que el servicio esté provisto antes de poder inyectarlo.
- **d)** — Incorrecto. `HttpClient` es un servicio, no una directiva ni un componente. Los servicios no van en el array `imports` de los decoradores de componentes. Solo van pipes, directivas y otros componentes.

</details>

---

### Pregunta 3

En la Sección 5 se aprende comunicación padre-hijo. Un componente hijo necesita emitir un evento al padre cuando el usuario agrega un personaje. Según la sintaxis moderna enseñada en el curso, ¿cómo se declara correctamente ese output en el componente hijo?

**a)** `@Output() newCharacter = new EventEmitter<Character>();`
**b)** `newCharacter = output<Character>();`
**c)** `@Input() newCharacter: Character;`
**d)** `newCharacter = signal<Character | null>(null);`

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) `newCharacter = output<Character>();`**

En la Sección 5, el instructor presenta la función `output<T>()` como la **forma moderna** de crear outputs en Angular. Se importa de `@angular/core` y reemplaza al decorador `@Output()` con `EventEmitter`. Para disparar el evento se usa `.emit(valor)`. El instructor además indica que no se recomienda prefijar el nombre con `on` (como `onNewCharacter`) ya que el uso de paréntesis en el template ya lo hace evidente como evento.

- **a)** — No es incorrecta en términos técnicos (el curso la menciona como sintaxis anterior que sigue siendo válida), pero **no es la forma moderna enseñada**. El curso explícitamente promueve la función `output()` sobre el decorador.
- **c)** — Incorrecto. `@Input()` sirve para **recibir** datos del padre, no para **emitir** eventos hacia él. Es la dirección contraria de comunicación.
- **d)** — Incorrecto. Una señal almacena estado reactivo dentro del componente, no emite eventos hacia el padre. No hay mecanismo de escucha automática desde el componente padre.

</details>

---

### Pregunta 4

En el curso se implementa persistencia con `localStorage` usando `effect()`. ¿Cuál es la razón principal por la que se usa `effect()` en lugar de llamar a `localStorage.setItem()` directamente dentro del método que modifica la señal?

**a)** Porque `localStorage.setItem()` no funciona dentro de métodos de clase en Angular.
**b)** Porque `effect()` se ejecuta automáticamente cada vez que alguna señal leída dentro de él cambia, centralizando la sincronización sin repetir código.
**c)** Porque `effect()` encripta los datos antes de guardarlos en `localStorage`.
**d)** Porque Angular prohíbe el acceso a `localStorage` fuera de un `effect()`.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Porque `effect()` se ejecuta automáticamente cada vez que alguna señal leída dentro de él cambia, centralizando la sincronización sin repetir código.**

En la Sección 5 (y reforzado en la Sección 7), el instructor explica que `effect()` es ideal para este caso porque Angular detecta automáticamente qué señales se leen dentro del callback y lo re-ejecuta cada vez que alguna cambia. Así, si hay múltiples métodos que modifican la señal `characters`, no hay que agregar `localStorage.setItem()` en cada uno; el efecto lo hace automáticamente en un solo lugar. El instructor también aclara que los casos de uso válidos de `effect()` son: logging, sincronización con almacenamiento, y manipulación del DOM.

- **a)** — Incorrecto. `localStorage.setItem()` funciona en cualquier lugar del código JavaScript/TypeScript, incluyendo métodos de clase. No hay ninguna restricción al respecto.
- **c)** — Incorrecto. `effect()` no tiene ninguna capacidad de encriptación. Los datos se guardan en texto plano (como JSON) en `localStorage`.
- **d)** — Incorrecto. Angular no prohíbe el acceso a `localStorage` en ningún contexto. Es una API nativa del navegador accesible desde cualquier parte del código.

</details>

---

### Pregunta 5

En la Sección 10, al consumir la API de REST Countries, el instructor crea una clase `CountryMapper`. ¿Cuál es el propósito principal de este patrón Mapper en el contexto del curso?

**a)** Mejorar el rendimiento de las peticiones HTTP usando caché automático.
**b)** Transformar el objeto de respuesta del API externo (`RESTCountry`) al modelo interno propio de la app (`Country`), desacoplando la app del contrato de la API.
**c)** Validar que los datos recibidos del API cumplen con las validaciones del formulario reactivo.
**d)** Convertir los Observables del API en Promesas para usarlas con `async/await`.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Transformar el objeto de respuesta del API externo (`RESTCountry`) al modelo interno propio de la app (`Country`), desacoplando la app del contrato de la API.**

El instructor (Sección 10) explica que el API de REST Countries devuelve objetos complejos con muchas propiedades que la app no necesita. Al crear la interfaz `Country` con solo los campos relevantes y el `CountryMapper` que realiza la transformación, si el API externo cambia su estructura solo hay que modificar el Mapper, no todos los componentes que usan `Country`. El mismo patrón se repite en la Sección 7 con `GifMapper`.

- **a)** — Incorrecto. El Mapper no tiene relación con el caché. El caché se implementa por separado con un `Map` de JavaScript en el servicio (Sección 19).
- **c)** — Incorrecto. El Mapper transforma estructuras de datos, no valida datos de formularios. Las validaciones de formularios se hacen con `Validators` del módulo de formularios reactivos.
- **d)** — Incorrecto. La conversión de Observables a Promesas se hace con `firstValueFrom()` de RxJS, no con el Mapper. El Mapper opera sobre los valores ya resueltos.

</details>

---

## 🟡 Nivel 2 — Intermedio (Preguntas 6 a 10)

---

### Pregunta 6

En la Sección 7 se implementa el método `searchGifs()` en el `GifService`. El instructor usa `.pipe(tap(...), map(...))`. ¿Cuál es la diferencia entre `tap` y `map` según lo enseñado en el curso?

**a)** `tap` transforma el valor y lo devuelve modificado; `map` solo ejecuta un efecto secundario sin cambiar nada.
**b)** `tap` ejecuta un efecto secundario sin modificar el valor del Observable; `map` transforma el valor emitido y lo reemplaza con el resultado.
**c)** `tap` se usa solo para peticiones GET; `map` se usa solo para peticiones POST.
**d)** `tap` cancela el Observable si la condición no se cumple; `map` lo deja pasar siempre.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) `tap` ejecuta un efecto secundario sin modificar el valor del Observable; `map` transforma el valor emitido y lo reemplaza con el resultado.**

En la Sección 7, el instructor explica explícitamente que `tap` sirve para efectos secundarios (como actualizar el historial de búsquedas o hacer logging) sin alterar lo que fluye por el Observable. `map` en cambio toma el valor emitido y devuelve uno nuevo que reemplaza al anterior (por ejemplo, `map(({ data }) => ...)` para extraer solo el arreglo `data` de la respuesta de Giphy).

- **a)** — Incorrecto. Invierte completamente los roles. Es exactamente al revés: `map` es el que transforma; `tap` el que observa sin modificar.
- **c)** — Incorrecto. Ambos operadores son agnósticos al tipo de petición HTTP. Se pueden usar con cualquier Observable, sea de una petición GET, POST, o incluso de un `interval()`.
- **d)** — Incorrecto. El operador que filtra o cancela un Observable según una condición es `filter()`, no `tap`. Tanto `tap` como `map` dejan pasar todos los valores.

</details>

---

### Pregunta 7

En la Sección 11 se implementa caché con debounce para la búsqueda de países. Según el curso, ¿por qué `canLoad` está deprecado y el instructor recomienda usar `canMatch` en los Guards?

**a)** Porque `canLoad` solo funciona con NgModules y el curso usa standalone components.
**b)** Porque `canLoad` solo se ejecuta la primera vez que se carga el módulo lazy; si el usuario cierra sesión, `canLoad` no vuelve a ejecutarse al intentar acceder a la misma ruta, pero `canMatch` sí se ejecuta en cada intento de navegación.
**c)** Porque `canMatch` es más rápido en términos de rendimiento al no verificar la autenticación en cada petición HTTP.
**d)** Porque `canLoad` requiere que el guard retorne una Promesa mientras que `canMatch` acepta tanto Promesas como Observables.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Porque `canLoad` solo se ejecuta la primera vez que se carga el módulo lazy; si el usuario cierra sesión, `canLoad` no vuelve a ejecutarse al intentar acceder a la misma ruta, pero `canMatch` sí se ejecuta en cada intento de navegación.**

En la Sección 20, el instructor explica este punto con precisión: `canLoad` solo funciona la primera vez que se carga el módulo. Si el usuario se autentica, navega al área protegida cargando el módulo, luego cierra sesión e intenta volver, `canLoad` ya no se vuelve a disparar porque el módulo ya está en memoria. `canMatch`, en cambio, se evalúa en **cada intento de navegación**, lo que lo hace la opción correcta para verificar el estado dinámico de autenticación.

- **a)** — Incorrecto. `canLoad` puede funcionar tanto con NgModules como con rutas lazy de standalone components. El problema no es de compatibilidad sino de comportamiento en re-navegaciones.
- **c)** — Incorrecto. Los Guards no interceptan peticiones HTTP; protegen rutas de navegación. El rendimiento de las peticiones HTTP es independiente del tipo de guard usado.
- **d)** — Incorrecto. Ambos, `canLoad` y `canMatch`, aceptan funciones que retornan `boolean`, `Observable<boolean>` o `Promise<boolean>`. No hay diferencia en ese aspecto.

</details>

---

### Pregunta 8

En la Sección 19 se implementa caché de productos con un `Map`. ¿Cuál es la llave que se usa para identificar de forma única cada entrada en el caché de productos y por qué?

**a)** Solo el `gender` del producto, porque es el único parámetro que cambia entre categorías.
**b)** Una concatenación de `limit`, `offset` y `gender` (ej: `"9-0-men"`), porque cualquier combinación de estos tres parámetros representa una consulta única diferente.
**c)** El ID del último producto de la página, porque es único en la base de datos.
**d)** El número de página actual, porque es el único parámetro que cambia al navegar.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Una concatenación de `limit`, `offset` y `gender` (ej: `"9-0-men"`), porque cualquier combinación de estos tres parámetros representa una consulta única diferente.**

El instructor (Sección 19) muestra el código exacto: `const key = \`${limit}-${offset}-${gender}\``. Explica que los tres parámetros juntos identifican de forma única una consulta: `9-0-` es el home página 1, `9-9-men` es hombres página 2, `9-0-kid` es niños página 1. Si cualquiera de los tres cambia, la llave cambia y se considera una consulta diferente que requiere ir al servidor.

- **a)** — Incorrecto. Solo usar `gender` significaría que `men` página 1 y `men` página 2 tendrían la misma llave, devolviendo siempre los primeros 9 productos sin importar la página.
- **c)** — Incorrecto. El ID del último producto no es un parámetro conocido antes de hacer la petición. No se puede construir la llave antes de recibir la respuesta.
- **d)** — Incorrecto. Solo el número de página ignora el filtro por género: la página 1 de "hombres" y la página 1 de "mujeres" tendrían la misma llave y se mezclarían en el caché.

</details>

---

### Pregunta 9

En la Sección 20 se implementa el `authInterceptor`. El instructor menciona que `req` (la petición HTTP) es inmutable. ¿Cuál es la forma correcta de agregar el header `Authorization` a la petición?

**a)** `req.headers['Authorization'] = 'Bearer ' + token;` y luego `return next(req);`
**b)** `req.headers.set('Authorization', 'Bearer ' + token);` y luego `return next(req);`
**c)** Clonar la petición con `req.clone({ headers: req.headers.append('Authorization', 'Bearer ' + token) })` y pasar el clon a `next()`.
**d)** Agregar el header directamente al objeto `req` usando `Object.assign(req, { Authorization: token })`.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: c) Clonar la petición con `req.clone({ headers: req.headers.append('Authorization', 'Bearer ' + token) })` y pasar el clon a `next()`.**

En la Sección 20, el instructor explica explícitamente que las peticiones HTTP en Angular son **objetos inmutables**. No se pueden modificar directamente. La forma correcta es usar `req.clone()` para crear una copia con los cambios deseados, y pasar esa copia (no el original) a `next()`. El código exacto mostrado en el curso es: `const newReq = req.clone({ headers: req.headers.append('Authorization', \`Bearer ${token}\`) }); return next(newReq);`.

- **a)** — Incorrecto. Las peticiones son inmutables; intentar asignar directamente al objeto `headers` no modifica la petición real. En TypeScript, este intento podría lanzar un error en tiempo de compilación.
- **b)** — Incorrecto. `.set()` y `.append()` en `HttpHeaders` devuelven un **nuevo** objeto `HttpHeaders` (son inmutables también); no mutan el original. Pero el error aquí es no clonar la petición entera y no pasar el resultado a `req.clone()`.
- **d)** — Incorrecto. `Object.assign()` podría sobrescribir propiedades del objeto pero no modificaría los headers HTTP de la petición de forma que Angular los reconozca. Además rompe la inmutabilidad del objeto de petición.

</details>

---

### Pregunta 10

En la Sección 10, `rxResource` de Angular 19 se presenta como alternativa al enfoque manual de señales. ¿Cuál de las siguientes señales que había que gestionar **manualmente** con el enfoque tradicional (`.subscribe()`) reemplaza automáticamente `rxResource`?

**a)** Solo la señal de los datos retornados (`countries`).
**b)** Solo la señal `isLoading` para mostrar el spinner.
**c)** Las señales `isLoading`, `isError` y los datos (`value`), todas gestionadas automáticamente por el resource.
**d)** Solo la señal `isError` para mostrar mensajes de error.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: c) Las señales `isLoading`, `isError` y los datos (`value`), todas gestionadas automáticamente por el resource.**

En la Sección 10, el instructor muestra lado a lado el código manual (crear `isLoading = signal(false)`, `isError = signal<string|null>(null)`, `countries = signal<Country[]>([])`, manejar los callbacks `next` y `error` del subscribe, el `catchError` en el pipe) y el código con `rxResource`. El instructor concluye que todo ese código se reemplaza con `rxResource` que expone automáticamente `.isLoading()`, `.error()` y `.value()`. La motivación explícita del uso de `rxResource` es eliminar ese código repetitivo.

- **a)** — Incorrecto. `rxResource` no solo gestiona los datos; también gestiona los estados `isLoading` y `error`. Limitarlo solo a los datos ignoraría gran parte de su valor.
- **b)** — Incorrecto. `rxResource` gestiona los tres estados, no solo el de carga.
- **d)** — Incorrecto. Similar a las anteriores, `rxResource` es más completo que solo gestionar errores.

</details>

---

## 🔴 Nivel 3 — Avanzado (Preguntas 11 a 15)

---

### Pregunta 11

En la Sección 20 se implementa `checkAuthStatus()` usando `rxResource` privado en el `AuthService`. El instructor menciona un problema con el estado `'checking'` en los Guards. ¿Qué solución se aplica en el curso para que el Guard espere el resultado de la verificación del token antes de tomar una decisión?

**a)** Se usa `setTimeout()` con un delay de 500ms para esperar que el servicio se inicialice antes de que el Guard evalúe el estado.
**b)** Se usa `firstValueFrom()` de RxJS combinado con `async/await` en el Guard para esperar a que `checkAuthStatus()` complete su petición y emita un valor definitivo.
**c)** Se configura `APP_INITIALIZER` en `app.config.ts` para que Angular no cargue ninguna ruta hasta que la autenticación esté verificada.
**d)** Se marca el `AuthService` con `providedIn: 'platform'` para que se inicialice antes que los componentes.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Se usa `firstValueFrom()` de RxJS combinado con `async/await` en el Guard para esperar a que `checkAuthStatus()` complete su petición y emita un valor definitivo.**

En la Sección 20 (lección de Guards), el instructor explica que al recargar la página, `authStatus` empieza en `'checking'`. Si el Guard leyera el estado en ese momento, no sabría si el usuario está autenticado o no. La solución es convertir el Observable de `checkAuthStatus()` en una Promesa con `firstValueFrom()` y usar `async/await` para que el Guard pause su ejecución hasta recibir `true` o `false`. El código exacto del curso es: `const isAuthenticated = await firstValueFrom(authService.checkAuthStatus());`.

- **a)** — Incorrecto. Un `setTimeout` fijo es frágil: si la red es lenta, el token puede no haberse verificado en 500ms. El curso nunca propone esta solución; siempre usa mecanismos reactivos.
- **c)** — Incorrecto. `APP_INITIALIZER` es un token de Angular para ejecutar código antes de que la app se inicialice, pero el curso no lo usa. La solución del curso es específica en el Guard, no global.
- **d)** — Incorrecto. `providedIn: 'platform'` hace que el servicio esté disponible a nivel de plataforma (antes del módulo raíz), pero no resuelve el problema de timing del Guard. El estado `'checking'` seguiría existiendo.

</details>

---

### Pregunta 12

En la Sección 19 se implementa paginación conectada al URL con `queryParamMap`. El instructor explica por qué **no** se puede usar `snapshot.params` para leer el parámetro `page` en el componente `home-page`. ¿Cuál es la razón correcta?

**a)** Porque `snapshot.params` solo funciona con parámetros de ruta (`:id`) y no con query parameters (`?page=2`).
**b)** Porque el componente `home-page` no se destruye ni se recrea al cambiar de página; Angular reutiliza la misma instancia, y `snapshot` solo captura el estado en el momento de montaje sin actualizarse después.
**c)** Porque `snapshot` está deprecado en Angular 19 y ya no está disponible.
**d)** Porque los query parameters no están disponibles en `ActivatedRoute.snapshot`; solo en el Observable `queryParamMap`.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Porque el componente `home-page` no se destruye ni se recrea al cambiar de página; Angular reutiliza la misma instancia, y `snapshot` solo captura el estado en el momento de montaje sin actualizarse después.**

En la Sección 19, el instructor explica este punto con precisión: al navegar a la página de detalle de un género (ej: `/gender/men`) sí se crea un nuevo componente porque es una ruta diferente. Pero al cambiar de `?page=1` a `?page=2` dentro del mismo `home-page`, Angular no destruye el componente; simplemente actualiza el URL. Por eso `snapshot` —que es una fotografía del estado en el momento de creación— no se actualiza. Hay que suscribirse al Observable reactivo `queryParamMap` y usar `toSignal()` para que reaccione a cada cambio.

- **a)** — Parcialmente verdadero pero incompleto y no es la razón principal del curso. `snapshot` sí expone `queryParamMap` (como `snapshot.queryParamMap`), pero el problema real es el de la instancia reutilizada.
- **c)** — Incorrecto. `snapshot` no está deprecado en Angular 19. El curso sí lo usa en la Sección 10 para leer el parámetro `:code` en la página de detalle de un país, donde sí funciona porque el componente se crea nuevo.
- **d)** — Incorrecto. `ActivatedRoute.snapshot.queryParamMap` sí existe y es accesible. El problema no es la disponibilidad sino la reactividad.

</details>

---

### Pregunta 13

En la Sección 21 se implementa el `IsAdminGuard`. El instructor menciona un potencial problema de rendimiento al tener tanto `NotAuthenticatedGuard` como `IsAdminGuard` activos. ¿Cuál es ese problema y qué mejora opcional sugiere el instructor?

**a)** Ambos guards compilan el TypeScript en paralelo causando errores de build. La solución es combinarlos en un solo archivo.
**b)** Ambos guards pueden disparar dos peticiones HTTP a `checkAuthStatus()` al mismo tiempo. La mejora sugerida es implementar caché con timestamp en `checkAuthStatus()` para no repetir la petición si ya se verificó recientemente.
**c)** Ambos guards bloquean el hilo principal de JavaScript. La solución es ejecutarlos en un Web Worker.
**d)** Los guards no pueden coexistir en el mismo arreglo `canMatch`. Solo puede haber uno activo por ruta.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) Ambos guards pueden disparar dos peticiones HTTP a `checkAuthStatus()` al mismo tiempo. La mejora sugerida es implementar caché con timestamp en `checkAuthStatus()` para no repetir la petición si ya se verificó recientemente.**

En la Sección 21 (lección de `IsAdminGuard`), el instructor menciona explícitamente que al tener dos guards que llaman a `checkAuthStatus()`, podría haber dos peticiones HTTP duplicadas al backend. Sugiere como mejora opcional (no obligatoria en el curso) implementar caché similar al de productos: guardar el último resultado junto con un timestamp y devolver el valor cacheado si la última verificación fue hace menos de cierto tiempo. También aclara que cuando no hay token, `checkAuthStatus()` retorna `of(false)` sin hacer petición, mitigando el impacto real.

- **a)** — Incorrecto. Los guards son funciones TypeScript independientes; no hay conflicto de compilación entre ellos. La colocación en archivos separados o juntos no afecta el build.
- **c)** — Incorrecto. Los guards son asíncronos (retornan Promesas) y no bloquean el hilo principal. Angular espera la resolución de la Promesa antes de continuar la navegación.
- **d)** — Incorrecto. El arreglo `canMatch` puede contener múltiples guards. Todos deben retornar `true` para que la ruta sea accesible. El instructor mismo muestra `canMatch: [IsAdminGuard]` junto a otros guards en el curso.

</details>

---

### Pregunta 14

En la Sección 22 se implementa la subida de imágenes usando `forkJoin`. Considerando el código del curso, ¿qué ocurre si el backend falla al subir **una** de las cuatro imágenes seleccionadas y no se usa `catchError` individual por imagen?

**a)** `forkJoin` ignora el error de esa imagen y completa con las tres restantes.
**b)** `forkJoin` emite un error completo, cancela todas las peticiones pendientes y el Observable falla sin devolver ninguna imagen subida.
**c)** `forkJoin` reintenta automáticamente la imagen fallida hasta tres veces antes de lanzar el error.
**d)** Angular muestra automáticamente un diálogo de error al usuario cuando `forkJoin` detecta un fallo.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) `forkJoin` emite un error completo, cancela todas las peticiones pendientes y el Observable falla sin devolver ninguna imagen subida.**

En la Sección 22, el instructor explica el comportamiento de `forkJoin`: espera a que **todos** los Observables completen y emite sus últimos valores en un arreglo. Si alguno falla, `forkJoin` lanza el error completo. El instructor menciona esto como un comportamiento conocido y señala que si se quiere que la subida continúe aunque alguna imagen falle, se debe agregar `catchError` en cada Observable individual antes de pasarlo a `forkJoin`. Sin ese tratamiento, un solo fallo aborta todo el proceso.

- **a)** — Incorrecto. `forkJoin` no ignora errores. Es parte de su diseño: si quieres el arreglo completo de resultados, todos deben completar exitosamente. Para comportamiento tolerante a fallos hay que manejar el error por Observable.
- **c)** — Incorrecto. `forkJoin` no tiene lógica de reintentos. Si se quisieran reintentos habría que usar el operador `retry()` o `retryWhen()` de RxJS explícitamente en cada Observable.
- **d)** — Incorrecto. Angular no muestra diálogos automáticos ante errores de HTTP. El manejo visual de errores es responsabilidad del desarrollador (señales de error, mensajes en el template, etc.).

</details>

---

### Pregunta 15

En la Sección 23 (Angular moderno) se introduce la sintaxis `#state` con el símbolo `#` para propiedades privadas en servicios. El instructor explica una diferencia clave entre usar `private` de TypeScript y usar `#` de ECMAScript. ¿Cuál es esa diferencia según el curso?

**a)** `private` en TypeScript genera propiedades privadas tanto en TypeScript como en el JavaScript compilado; `#` solo es privado durante la escritura del código.
**b)** `private` de TypeScript solo restringe el acceso durante la compilación; cuando se transpila a JavaScript, la restricción desaparece. `#` es privado también en el JavaScript generado, garantizando encapsulación real en tiempo de ejecución.
**c)** `private` y `#` son equivalentes; la única diferencia es que `#` requiere menos tipado en el teclado.
**d)** `#` solo puede usarse en servicios inyectables; `private` puede usarse en cualquier clase TypeScript.

<details>
<summary>✅ Respuesta y justificación</summary>

**Respuesta correcta: b) `private` de TypeScript solo restringe el acceso durante la compilación; cuando se transpila a JavaScript, la restricción desaparece. `#` es privado también en el JavaScript generado, garantizando encapsulación real en tiempo de ejecución.**

En la Sección 23, el instructor explica con precisión que `private` de TypeScript es una protección **en tiempo de escritura**: el compilador de TypeScript lanza errores si se intenta acceder desde fuera, pero el JavaScript resultante no tiene esa restricción. Un desarrollador podría acceder a la propiedad desde las DevTools del navegador. Con `#`, la propiedad es privada a nivel de **ECMAScript**, lo que significa que ni en JavaScript ni en las DevTools es accesible desde fuera de la clase. Esto garantiza una encapsulación real del estado del servicio en tiempo de ejecución.

- **a)** — Incorrecto. Es exactamente lo contrario de lo explicado en el curso. `private` es la opción que solo protege durante la compilación; `#` es la que protege en ambos contextos.
- **c)** — Incorrecto. No son equivalentes. La diferencia es fundamental: uno protege en compilación, el otro en ejecución. El instructor dedica tiempo específico a explicar por qué `#` es la opción superior para encapsular el estado del servicio.
- **d)** — Incorrecto. `#` es una característica nativa de JavaScript/ECMAScript y puede usarse en cualquier clase, no solo en servicios. Y `private` de TypeScript también puede usarse en cualquier clase TypeScript.

</details>

---

## 📊 Tabla de Resultados

| Pregunta | Sección del curso | Tema | Nivel |
|----------|-------------------|------|-------|
| 1 | S4 | Señales: lectura correcta de valor | 🟢 Básico |
| 2 | S7, S10 | `provideHttpClient(withFetch())` | 🟢 Básico |
| 3 | S5 | Comunicación hijo→padre con `output()` | 🟢 Básico |
| 4 | S5, S7 | `effect()` y persistencia en localStorage | 🟢 Básico |
| 5 | S7, S10 | Patrón Mapper / DTO | 🟢 Básico |
| 6 | S7 | Operadores RxJS: `tap` vs `map` | 🟡 Intermedio |
| 7 | S20 | Guards: `canMatch` vs `canLoad` | 🟡 Intermedio |
| 8 | S19 | Clave del caché con `Map` | 🟡 Intermedio |
| 9 | S20 | Interceptor HTTP e inmutabilidad de `req` | 🟡 Intermedio |
| 10 | S10 | `rxResource` vs enfoque manual | 🟡 Intermedio |
| 11 | S20 | Guards + `firstValueFrom` + estado `'checking'` | 🔴 Avanzado |
| 12 | S19 | `snapshot` vs Observable reactivo en paginación | 🔴 Avanzado |
| 13 | S21 | `IsAdminGuard` + caché en `checkAuthStatus` | 🔴 Avanzado |
| 14 | S22 | `forkJoin` y comportamiento ante errores | 🔴 Avanzado |
| 15 | S23 | `private` TypeScript vs `#` ECMAScript | 🔴 Avanzado |

---

## 🏆 Puntuación sugerida

| Puntaje | Resultado |
|---------|-----------|
| 13-15 correctas | Excelente dominio del material |
| 10-12 correctas | Buen nivel, repasar secciones con errores |
| 7-9 correctas | Nivel medio, se recomienda revisar las secciones 10, 19 y 20 |
| 0-6 correctas | Se recomienda releer los resúmenes de las secciones prioritarias |
