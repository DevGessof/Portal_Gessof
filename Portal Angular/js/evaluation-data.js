/**
 * GESSOF Academy - Datos de Evaluación
 * Portal: Angular de Cero a Experto
 * 
 * 15 preguntas basadas en el contenido del curso,
 * 3 niveles de dificultad (5 preguntas por nivel).
 * Aprobación: 80% (12/15)
 */

const EVAL_DATA = {
    titulo: 'Evaluación: Angular orientado a Microservicios',
    descripcion: 'Las preguntas están basadas en las secciones de prioridad 1 y 2 del curso (S4–S23). Cada pregunta tiene una sola respuesta correcta con justificación completa.',
    puntajeAprobacion: 12,
    totalPreguntas: 15,
    preguntas: [
        // ── NIVEL 1 BÁSICO ──────────────────────────────────────────────────
        {
            id: 1,
            nivel: '🟢 Básico',
            seccion: 'S4',
            texto: 'En Angular, se usa `signal()` para manejar el estado reactivo. ¿Cuál es la forma correcta de leer el valor de una señal en un template?',
            opciones: [
                { letra: 'A', texto: '{{ mySignal }}' },
                { letra: 'B', texto: '{{ mySignal.value }}' },
                { letra: 'C', texto: '{{ mySignal() }}' },
                { letra: 'D', texto: '{{ mySignal.get() }}' }
            ],
            correcta: 'C',
            justificacion: 'Una señal es una función. Para leer su valor se la invoca con paréntesis: `mySignal()`. Sin paréntesis Angular mostraría la representación de la función, no su valor.'
        },
        {
            id: 2,
            nivel: '🟢 Básico',
            seccion: 'S7 / S10',
            texto: 'Para que `HttpClient` esté disponible en toda la aplicación con standalone components, ¿qué debe agregarse en `app.config.ts`?',
            opciones: [
                { letra: 'A', texto: 'Importar `HttpClientModule` en `imports` de `AppComponent`.' },
                { letra: 'B', texto: 'Agregar `provideHttpClient(withFetch())` en el arreglo `providers`.' },
                { letra: 'C', texto: 'Declarar `HttpClient` directamente en el constructor del servicio.' },
                { letra: 'D', texto: 'Agregar `HttpClient` al array `imports` del decorador del servicio.' }
            ],
            correcta: 'B',
            justificacion: '`provideHttpClient(withFetch())` registra el cliente HTTP globalmente. Sin este paso Angular lanza un `NullInjectorError`. `HttpClientModule` es el enfoque antiguo de NgModules.'
        },
        {
            id: 3,
            nivel: '🟢 Básico',
            seccion: 'S5',
            texto: 'Un componente hijo necesita emitir un evento al padre. Según la sintaxis moderna del curso, ¿cómo se declara correctamente ese output?',
            opciones: [
                { letra: 'A', texto: '`@Output() newCharacter = new EventEmitter<Character>();`' },
                { letra: 'B', texto: '`newCharacter = output<Character>();`' },
                { letra: 'C', texto: '`@Input() newCharacter: Character;`' },
                { letra: 'D', texto: '`newCharacter = signal<Character | null>(null);`' }
            ],
            correcta: 'B',
            justificacion: 'La función `output<T>()` es la forma moderna recomendada en el curso, importada de `@angular/core`. Reemplaza `@Output() + EventEmitter`. Para disparar usa `.emit(valor)`.'
        },
        {
            id: 4,
            nivel: '🟢 Básico',
            seccion: 'S5 / S7',
            texto: '¿Cuál es la razón principal por la que se usa `effect()` para persistir en `localStorage` en lugar de llamar `.setItem()` dentro de cada método que modifica la señal?',
            opciones: [
                { letra: 'A', texto: 'Porque `localStorage.setItem()` no funciona inside métodos de clase en Angular.' },
                { letra: 'B', texto: '`effect()` se ejecuta automáticamente cada vez que una señal leída dentro de él cambia, centralizando la sincronización.' },
                { letra: 'C', texto: 'Porque `effect()` encripta los datos antes de guardarlos.' },
                { letra: 'D', texto: 'Angular prohíbe el acceso a `localStorage` fuera de un `effect()`.' }
            ],
            correcta: 'B',
            justificacion: '`effect()` detecta automáticamente las señales leídas y se re-ejecuta cuando alguna cambia, evitando repetir el código de persistencia en cada método que muta el estado.'
        },
        {
            id: 5,
            nivel: '🟢 Básico',
            seccion: 'S10',
            texto: 'Al consumir la API de REST Countries, el instructor crea una clase `CountryMapper`. ¿Cuál es su propósito principal?',
            opciones: [
                { letra: 'A', texto: 'Mejorar el rendimiento de las peticiones HTTP con caché automático.' },
                { letra: 'B', texto: 'Transformar la respuesta del API externo al modelo interno de la app, desacoplándola del contrato del API.' },
                { letra: 'C', texto: 'Validar que los datos cumplen con las validaciones del formulario reactivo.' },
                { letra: 'D', texto: 'Convertir Observables en Promesas para usar con `async/await`.' }
            ],
            correcta: 'B',
            justificacion: 'El Mapper desacopla la app del API externo. Si el api cambia su estructura, solo se actualiza el Mapper, no todos los componentes. El mismo patrón se usa en `GifMapper` (S7).'
        },
        // ── NIVEL 2 INTERMEDIO ───────────────────────────────────────────────
        {
            id: 6,
            nivel: '🟡 Intermedio',
            seccion: 'S7',
            texto: 'El instructor usa `.pipe(tap(...), map(...))` en `searchGifs()`. ¿Cuál es la diferencia entre `tap` y `map`?',
            opciones: [
                { letra: 'A', texto: '`tap` transforma el valor y lo devuelve; `map` solo ejecuta un efecto secundario.' },
                { letra: 'B', texto: '`tap` ejecuta un efecto secundario sin modificar el valor; `map` transforma y reemplaza el valor emitido.' },
                { letra: 'C', texto: '`tap` solo se usa en peticiones GET; `map` solo en POST.' },
                { letra: 'D', texto: '`tap` cancela el Observable si la condición no se cumple; `map` lo deja pasar siempre.' }
            ],
            correcta: 'B',
            justificacion: '`tap` es de observación (efectos secundarios como logging o actualizar historial) sin tocar el flujo. `map` transforma lo que fluye y emite el nuevo valor.'
        },
        {
            id: 7,
            nivel: '🟡 Intermedio',
            seccion: 'S20',
            texto: '¿Por qué `canLoad` está deprecado y el instructor recomienda usar `canMatch` en los Guards?',
            opciones: [
                { letra: 'A', texto: 'Porque `canLoad` solo funciona con NgModules y el curso usa standalone components.' },
                { letra: 'B', texto: '`canLoad` no vuelve a ejecutarse si el módulo ya está cargado en memoria. `canMatch` se evalúa en cada intento de navegación.' },
                { letra: 'C', texto: 'Porque `canMatch` es más rápido ya que no verifica la autenticación en cada petición HTTP.' },
                { letra: 'D', texto: '`canLoad` solo acepta Promesas; `canMatch` acepta Promesas y Observables.' }
            ],
            correcta: 'B',
            justificacion: 'Si el usuario se autentica, navega a una ruta protegida, luego cierra sesión e intenta volver, `canLoad` ya no se dispara porque el módulo está en memoria. `canMatch` evalúa en cada intento.'
        },
        {
            id: 8,
            nivel: '🟡 Intermedio',
            seccion: 'S19',
            texto: 'Al implementar caché de productos con un `Map`, ¿qué llave identifica de forma única cada entrada en el caché?',
            opciones: [
                { letra: 'A', texto: 'Solo el `gender`, porque es el único parámetro que cambia entre categorías.' },
                { letra: 'B', texto: 'Una concatenación de `limit`, `offset` y `gender` (ej: `"9-0-men"`), porque cualquier combinación representa una consulta única.' },
                { letra: 'C', texto: 'El ID del último producto de la página, porque es único en la base de datos.' },
                { letra: 'D', texto: 'El número de página actual, porque es el único parámetro que cambia al navegar.' }
            ],
            correcta: 'B',
            justificacion: 'El código exacto del curso: `` const key = `${limit}-${offset}-${gender}` ``. Los tres juntos identifican consultas únicas. Solo `gender` mezclaría páginas distintas.'
        },
        {
            id: 9,
            nivel: '🟡 Intermedio',
            seccion: 'S20',
            texto: 'En el `authInterceptor`, `req` es inmutable. ¿Cuál es la forma correcta de agregar el header `Authorization`?',
            opciones: [
                { letra: 'A', texto: '`req.headers["Authorization"] = "Bearer " + token;` y luego `return next(req);`' },
                { letra: 'B', texto: '`req.headers.set("Authorization", "Bearer " + token);` y luego `return next(req);`' },
                { letra: 'C', texto: 'Clonar con `req.clone({ headers: req.headers.append("Authorization", "Bearer " + token) })` y pasar el clon a `next()`.' },
                { letra: 'D', texto: 'Agregar el header directamente con `Object.assign(req, { Authorization: token })`.' }
            ],
            correcta: 'C',
            justificacion: 'Las peticiones HTTP son objetos inmutables. `req.clone()` crea una copia con los cambios. Es el patrón exacto mostrado en el curso: `const newReq = req.clone({...}); return next(newReq);`'
        },
        {
            id: 10,
            nivel: '🟡 Intermedio',
            seccion: 'S10',
            texto: '`rxResource` de Angular 19 se presenta como alternativa al enfoque manual. ¿Cuáles señales reemplaza automáticamente?',
            opciones: [
                { letra: 'A', texto: 'Solo la señal de datos (`countries`).' },
                { letra: 'B', texto: 'Solo la señal `isLoading` para el spinner.' },
                { letra: 'C', texto: 'Las señales `isLoading`, `isError` y los datos (`value`), todas gestionadas automáticamente.' },
                { letra: 'D', texto: 'Solo la señal `isError` para mensajes de error.' }
            ],
            correcta: 'C',
            justificacion: '`rxResource` expone `.isLoading()`, `.error()` y `.value()`, reemplazando todo el código manual (señales + `.subscribe()` + `catchError`). El instructor lo usa para eliminar código repetitivo.'
        },
        // ── NIVEL 3 AVANZADO ─────────────────────────────────────────────────
        {
            id: 11,
            nivel: '🔴 Avanzado',
            seccion: 'S20',
            texto: 'El Guard tiene el problema del estado `"checking"` en `authStatus`. ¿Qué solución usa el instructor para que el Guard espere la verificación del token?',
            opciones: [
                { letra: 'A', texto: 'Usar `setTimeout()` con un delay de 500ms antes de que el Guard evalúe el estado.' },
                { letra: 'B', texto: 'Usar `firstValueFrom()` de RxJS con `async/await` para pausar el Guard hasta recibir el resultado definitivo.' },
                { letra: 'C', texto: 'Configurar `APP_INITIALIZER` en `app.config.ts` para bloquear rutas hasta verificar autenticación.' },
                { letra: 'D', texto: 'Marcar el `AuthService` con `providedIn: "platform"` para que se inicialice antes de los componentes.' }
            ],
            correcta: 'B',
            justificacion: 'El código exacto del curso: `const isAuthenticated = await firstValueFrom(authService.checkAuthStatus());`. Convierte el Observable en Promesa y pausa el Guard con `async/await` hasta recibir el valor definitivo.'
        },
        {
            id: 12,
            nivel: '🔴 Avanzado',
            seccion: 'S19',
            texto: '¿Por qué NO se puede usar `snapshot.params` para leer el parámetro `page` en el componente `home-page`?',
            opciones: [
                { letra: 'A', texto: '`snapshot.params` solo funciona con parámetros de ruta (`:id`) y no con query parameters (`?page=2`).' },
                { letra: 'B', texto: '`home-page` no se destruye al cambiar de página; Angular reutiliza la instancia, y `snapshot` no se actualiza después del montaje inicial.' },
                { letra: 'C', texto: '`snapshot` está deprecado en Angular 19.' },
                { letra: 'D', texto: 'Los query params no están disponibles en `ActivatedRoute.snapshot`; solo en el Observable `queryParamMap`.' }
            ],
            correcta: 'B',
            justificacion: 'Al ir de `?page=1` a `?page=2`, Angular no destruye `home-page`. La instancia se reutiliza y `snapshot` (fotografía del montaje) no cambia. Hay que suscribirse al Observable reactivo `queryParamMap`.'
        },
        {
            id: 13,
            nivel: '🔴 Avanzado',
            seccion: 'S21',
            texto: '¿Cuál es el problema de rendimiento al tener `NotAuthenticatedGuard` e `IsAdminGuard` activos juntos, y qué mejora sugiere el instructor?',
            opciones: [
                { letra: 'A', texto: 'Ambos guards compilan TypeScript en paralelo causando errores de build. La solución es fusionarlos en un archivo.' },
                { letra: 'B', texto: 'Ambos pueden disparar dos peticiones HTTP a `checkAuthStatus()` simultáneamente. La mejora es implementar caché con timestamp en `checkAuthStatus()`.' },
                { letra: 'C', texto: 'Ambos guards bloquean el hilo principal de JavaScript. La solución es ejecutarlos en un Web Worker.' },
                { letra: 'D', texto: 'Los guards no pueden coexistir en el mismo arreglo `canMatch`; solo puede haber uno activo por ruta.' }
            ],
            correcta: 'B',
            justificacion: 'Con dos guards que llaman a `checkAuthStatus()`, podrían dispararse dos peticiones al backend. La mejora opcional: guardar el resultado con un timestamp y devolver el caché si fue verificado recientemente.'
        },
        {
            id: 14,
            nivel: '🔴 Avanzado',
            seccion: 'S22',
            texto: 'Al subir 4 imágenes con `forkJoin`, si el backend falla en UNA de ellas y no se usa `catchError` individual, ¿qué ocurre?',
            opciones: [
                { letra: 'A', texto: '`forkJoin` ignora el error de esa imagen y completa con las tres restantes.' },
                { letra: 'B', texto: '`forkJoin` emite un error completo, cancela todas las peticiones pendientes y el Observable falla sin devolver ninguna imagen.' },
                { letra: 'C', texto: '`forkJoin` reintenta automáticamente la imagen fallida hasta 3 veces.' },
                { letra: 'D', texto: 'Angular muestra automáticamente un diálogo de error al usuario.' }
            ],
            correcta: 'B',
            justificacion: '`forkJoin` espera que TODOS los Observables completen. Si uno falla, lanza error completo. Para tolerancia a fallos hay que agregar `catchError` a cada Observable individual antes de pasarlo a `forkJoin`.'
        },
        {
            id: 15,
            nivel: '🔴 Avanzado',
            seccion: 'S23',
            texto: 'El instructor usa `#state` (símbolo `#` de ECMAScript) en lugar de `private` de TypeScript. ¿Cuál es la diferencia clave?',
            opciones: [
                { letra: 'A', texto: '`private` en TypeScript genera propiedades privadas también en el JavaScript compilado; `#` solo es privado durante la escritura del código.' },
                { letra: 'B', texto: '`private` de TypeScript solo restringe en compilación; en el JS generado desaparece. `#` es privado en el JS generado, garantizando encapsulación real en tiempo de ejecución.' },
                { letra: 'C', texto: '`private` y `#` son equivalentes; la diferencia es que `#` requiere menos tipado.' },
                { letra: 'D', texto: '`#` solo puede usarse en servicios inyectables; `private` puede usarse en cualquier clase TypeScript.' }
            ],
            correcta: 'B',
            justificacion: '`private` desaparece al transpilar a JS (accesible desde DevTools). `#` es privacidad nativa ECMAScript: inaccesible incluso en el JS generado y en las DevTools. Mayor encapsulación del estado del servicio.'
        }
    ]
};
