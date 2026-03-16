# Glosario del Curso: Angular de Cero a Experto

> Referencia completa de términos, conceptos, funciones y palabras clave organizados por categoría.
> Basado en el contenido real de las 23 secciones del curso.

---

## Índice de Categorías

1. [TypeScript — Fundamentos](#1-typescript--fundamentos)
2. [TypeScript — Clases y Orientación a Objetos](#2-typescript--clases-y-orientación-a-objetos)
3. [Angular — Arquitectura y Estructura](#3-angular--arquitectura-y-estructura)
4. [Angular — Señales (Signals)](#4-angular--señales-signals)
5. [Angular — Componentes y Templates](#5-angular--componentes-y-templates)
6. [Angular — Directivas de Control de Flujo](#6-angular--directivas-de-control-de-flujo)
7. [Angular — Enrutamiento (Router)](#7-angular--enrutamiento-router)
8. [Angular — Comunicación entre Componentes](#8-angular--comunicación-entre-componentes)
9. [Angular — Servicios e Inyección de Dependencias](#9-angular--servicios-e-inyección-de-dependencias)
10. [Angular — HTTP y RxJS](#10-angular--http-y-rxjs)
11. [Angular — Pipes](#11-angular--pipes)
12. [Angular — Formularios Reactivos](#12-angular--formularios-reactivos)
13. [Angular — Ciclo de Vida de Componentes](#13-angular--ciclo-de-vida-de-componentes)
14. [Angular — Autenticación y Seguridad](#14-angular--autenticación-y-seguridad)
15. [Angular — Rendimiento y Carga Diferida](#15-angular--rendimiento-y-carga-diferida)
16. [Angular — Despliegue y Configuración](#16-angular--despliegue-y-configuración)
17. [JavaScript / Web APIs](#17-javascript--web-apis)
18. [Herramientas y Ecosistema](#18-herramientas-y-ecosistema)

---

## 1. TypeScript — Fundamentos

### Tipos de datos

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `string` | Tipo de dato para texto y caracteres. | `let nombre: string = 'Angular';` |
| `number` | Tipo numérico (enteros y decimales). | `let edad: number = 25;` |
| `boolean` | Solo acepta `true` o `false`. | `let activo: boolean = true;` |
| `any` | Sin restricciones de tipo. Debe evitarse; elimina la seguridad de TypeScript. | `let dato: any = 'hola';` |
| `void` | Función que no retorna nada. | `function log(): void { console.log('ok'); }` |
| `undefined` | Valor de una propiedad opcional cuando no se provee. | `propiedad?: string // puede ser undefined` |
| Tipo `union` (`\|`) | Variable que acepta más de un tipo. | `let id: number \| string = 42;` |
| Tipo literal | Limita los valores aceptados a un conjunto fijo. | `let dir: 'izq' \| 'der' = 'izq';` |

---

### Inferencia y declaración

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| Inferencia de tipos | TypeScript detecta el tipo automáticamente según el valor asignado. | `let n = 5; // TypeScript infiere number` |
| Declaración explícita | Escribir `: tipo` después del nombre para indicar el tipo. | `let nombre: string;` |
| `const` | Variable cuyo valor no cambia. Preferida sobre `let` cuando el valor es fijo. | `const PI = 3.14;` |
| `let` | Variable cuyo valor puede cambiar. | `let contador = 0;` |
| `export {}` | Convierte el archivo en módulo para evitar conflictos de nombres globales. | Al inicio de un archivo TypeScript. |

---

### Interfaces

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `interface` | Define la estructura que debe tener un objeto: sus propiedades y tipos. Las interfaces desaparecen al compilar a JavaScript. | `interface User { name: string; age: number; }` |
| Propiedad opcional (`?`) | Marca una propiedad como no obligatoria; su valor será `undefined` si no se provee. | `interface Config { debug?: boolean; }` |
| Interfaces anidadas | Cuando una propiedad es un objeto complejo, se le crea su propia interfaz. | `interface Hero { address: Address; }` |
| `UpperCamelCase` | Convención de nombres para interfaces y clases. | `interface ProductCard { }` |
| `import type` | Importa solo un tipo o interfaz, el compilador lo elimina del bundle. | `import type { User } from './user.interface';` |

---

### Genéricos

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `<T>` | Declara un tipo variable (genérico). `T` es el nombre convencional. | `function getId<T>(item: T): T { return item; }` |
| Inferencia de genéricos | TypeScript determina `T` según el argumento sin necesidad de especificarlo. | `getId(42) // T es number` |
| Genérico explícito | Se puede forzar el tipo escribiéndolo. | `getId<string>('hola')` |

---

### Desestructuración

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| Desestructuración de objetos | Extrae propiedades de un objeto en variables. | `const { name, age } = user;` |
| Renombrar al desestructurar | Cambia el nombre de la variable extraída. | `const { name: userName } = user;` |
| Desestructuración de arreglos | Extrae elementos por posición con corchetes. | `const [first, , third] = arr;` |
| Valor por defecto | Si el elemento es `undefined`, usa el valor indicado. | `const [a = 'N/A'] = arr;` |
| Desestructuración en argumentos | Se puede desestructurar el objeto directamente en los parámetros de la función. | `function calc({ price, tax }: Options) { }` |
| Tupla | Arreglo con número fijo de elementos y tipos definidos. Más estricto que `number[]`. | `function fn(): [number, number] { return [1, 2]; }` |

---

### Módulos

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `export` | Expone una declaración para que otros archivos la usen. | `export interface Product { }` |
| `export default` | Exportación por defecto del archivo; solo puede haber una. | `export default class MyComponent { }` |
| `import { X } from './ruta'` | Importa una declaración específica desde otro archivo. | `import { Product } from './product.interface';` |

---

### Operadores de seguridad

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `?.` (optional chaining) | Accede a una propiedad solo si el valor previo no es `null`/`undefined`; si lo es, devuelve `undefined`. | `user?.address?.city` |
| `!.` (non-null assertion) | Le dice a TypeScript "confía en mí, no es nulo". Puede causar error si la promesa no se cumple. | `element!.value` |
| `??` (nullish coalescing) | Devuelve el valor de la derecha si el de la izquierda es `null` o `undefined`. | `const val = dato ?? 'default';` |
| `\|\|` (OR lógico) | Proporciona un valor por defecto si la expresión es falsy (`0`, `''`, `false`, `null`, `undefined`). | `const n = valor \|\| 0;` |

---

## 2. TypeScript — Clases y Orientación a Objetos

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `class` | Define un molde para crear objetos con estructura y comportamiento. | `class Hero { name: string; }` |
| `constructor` | Método que se ejecuta al crear una instancia. Puede recibir argumentos para inicializar propiedades. | `constructor(private name: string) { }` |
| `public` | Modificador que permite acceder a la propiedad desde fuera de la clase. | `public name: string;` |
| `private` | Modificador que restringe el acceso a dentro de la clase (restricción solo en TypeScript). | `private _token: string;` |
| `#propiedad` | Privado real a nivel ECMAScript; la restricción persiste en el JavaScript generado. | `#state = signal<State>({ loading: true });` |
| Forma corta del constructor | Declarar propiedades directamente en los parámetros del constructor. | `constructor(public name: string, private age: number) { }` |
| `this` | Referencia a la instancia actual de la clase. | `this.name = 'Angular';` |
| `extends` | Permite que una clase herede propiedades y métodos de otra (herencia). | `class Admin extends User { }` |
| `super()` | Llama al constructor de la clase padre; obligatorio si la clase hija tiene constructor propio. | `constructor(name: string) { super(name); }` |
| Composición | En lugar de heredar, una clase incluye una instancia de otra como propiedad. Base de la inyección de dependencias. | `class Admin { person = new Person(); }` |
| Decorador (`@`) | Función especial que modifica el comportamiento de una clase, propiedad o método. | `@Component({ selector: 'app-root' })` |
| `@Injectable` | Decorador que convierte una clase en servicio inyectable por Angular. | `@Injectable({ providedIn: 'root' })` |
| `@Component` | Decorador que convierte una clase en componente Angular. | `@Component({ selector: 'app-hero' })` |
| `@Pipe` | Decorador que convierte una clase en un pipe de Angular. | `@Pipe({ name: 'myPipe', standalone: true })` |

---

## 3. Angular — Arquitectura y Estructura

### Archivos clave del proyecto

| Término | Descripción |
|---------|-------------|
| `angular.json` | Configuración principal de Angular: cómo construir, estilos globales, scripts. Se modifica para agregar estilos o eliminar Zone.js. |
| `app.config.ts` | Configuración global de la app: provee el router, HttpClient, estrategia de detección de cambios. |
| `app.routes.ts` | Define las rutas de la aplicación: qué componente mostrar según el URL activo. |
| `main.ts` | Punto de entrada de la aplicación. Inicializa Angular con el componente raíz y la configuración global. |
| `index.html` | HTML global donde se monta `<app-root>`. Sirve para incluir scripts y estilos CDN. |
| `tsconfig.json` | Configuración de TypeScript: nivel de estrictez, alias de rutas (`paths`), módulos. |
| `package.json` | Scripts del proyecto (`ng serve`, `ng build`), dependencias de producción y desarrollo. |
| `environment.ts` | Archivo de variables de entorno para producción (URLs de APIs, API keys). |
| `environment.development.ts` | Variables de entorno para desarrollo; Angular lo sustituye automáticamente en modo dev. |

---

### Anatomía de un componente

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `selector` | Nombre de la etiqueta HTML personalizada que representa al componente. | `selector: 'app-hero'` → `<app-hero />` |
| `template` | HTML inline del componente (para templates cortos). | `template: '<h1>Hola</h1>'` |
| `templateUrl` | Apunta a un archivo `.html` externo. Recomendado cuando el HTML supera 3 líneas. | `templateUrl: './hero.component.html'` |
| `styleUrl` | Apunta a un archivo CSS externo con scope automático al componente. | `styleUrl: './hero.component.css'` |
| `styles` | CSS inline dentro del decorador (para estilos cortos). | `styles: ['h1 { color: red; }']` |
| `imports` | Componentes, directivas y pipes que se usarán en el template de este componente. | `imports: [RouterLink, NgClass]` |
| Standalone component | Componente que no necesita NgModule; estándar desde Angular v17+. | Por defecto en proyectos nuevos. |
| `changeDetection` | Estrategia de detección de cambios del componente. | `changeDetection: ChangeDetectionStrategy.OnPush` |

---

### Interpolación y bindings

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `{{ expresión }}` | Interpolación: muestra el valor de una expresión en el HTML. | `<h1>{{ title }}</h1>` |
| `[atributo]="valor"` | Property binding: asigna un valor dinámico a un atributo HTML. | `[value]="nombre()"` |
| `(evento)="método()"` | Event binding: escucha un evento del DOM y llama a un método. | `(click)="guardar()"` |
| `[(ngModel)]` | Two-way binding: sincroniza el valor del input con la propiedad (requiere `FormsModule`). | `[(ngModel)]="email"` |
| `#ref` | Referencia local al elemento HTML del DOM en el template. | `<input #txtName />` → `txtName.value` |
| `$event` | Objeto del evento del DOM dentro de un event binding. | `(input)="fn($event)"` |
| `[class.nombre]="cond"` | Aplica una clase CSS si la condición es `true`. | `[class.active]="isActive"` |
| `[ngClass]="objeto"` | Aplica múltiples clases condicionalmente. Requiere importar `NgClass`. | `[ngClass]="{ 'btn-primary': isPrimary }"` |
| `[style.propiedad]="valor"` | Asigna un estilo inline dinámico. | `[style.color]="heroColor \| pipe"` |

---

## 4. Angular — Señales (Signals)

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `signal(valorInicial)` | Crea una señal reactiva con un valor inicial. Importar de `@angular/core`. | `count = signal(0);` |
| `WriteableSignal` | Tipo de señal creada con `signal()`. Permite `set` y `update`. | `name = signal<string>('Angular');` |
| `ReadOnlySignal` | Tipo de señal computada. No tiene `set` ni `update`. | Resultado de `computed()`. |
| `señal()` (invocar) | Para leer el valor de una señal hay que invocarla como función (con paréntesis). | `{{ count() }}` o `this.count()` |
| `.set(valor)` | Establece un nuevo valor directamente, sin considerar el valor anterior. | `count.set(10);` |
| `.update(callback)` | Actualiza el valor basándose en el valor actual. Recomendado para incrementos. | `count.update(n => n + 1);` |
| `computed(callback)` | Señal de solo lectura que se recalcula cuando sus dependencias cambian. | `double = computed(() => this.count() * 2);` |
| `effect(callback)` | Efecto secundario que se ejecuta automáticamente cuando una señal leída dentro de él cambia. | `effect(() => console.log(this.count()));` |
| `onCleanup(cb)` | Callback dentro de `effect()` para limpiar recursos cuando el efecto se destruye. | `effect(() => { const t = setInterval(...); onCleanup(() => clearInterval(t)); });` |
| `toSignal(observable$)` | Convierte un Observable en una señal. Importar de `@angular/core/rxjs-interop`. | `data = toSignal(this.http.get('/api'));` |
| `linkedSignal` | Señal que se puede inicializar con un valor derivado de otra señal o de LocalStorage. | `val = linkedSignal(() => this.loadFromStorage());` |
| `#state` (privado ECMAScript) | Patrón moderno para encapsular el estado del servicio. Privado también en JS compilado. | `#state = signal<State>({ loading: true, data: [] });` |
| `ChangeDetectionStrategy.OnPush` | Le dice a Angular que no use Zone.js en el componente. Solo las señales notifican cambios. | `changeDetection: ChangeDetectionStrategy.OnPush` |
| Zoneless Angular | Modo en que Angular no depende de Zone.js. Las señales notifican cambios directamente. | Configurado en `app.config.ts` con `provideZonelessChangeDetection()`. |

---

## 5. Angular — Componentes y Templates

### Componentes

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `ng generate component nombre` | Genera los archivos de un componente (`.ts`, `.html`, `.css`, `.spec.ts`). | `ng g c navbar` |
| `ng new nombre` | Crea un nuevo proyecto Angular con toda la estructura base. | `ng new mi-app` |
| `ng serve -o` | Levanta el servidor de desarrollo y abre el navegador en `localhost:4200`. | `ng serve -o` |
| `ng build` | Genera el bundle de producción optimizado en la carpeta `dist/`. | `ng build` |
| `router-outlet` | Directiva que indica dónde se renderiza el componente de la ruta activa. | `<router-outlet />` |
| `<ng-content>` | Punto de inserción del contenido proyectado desde el componente padre (Content Projection). | `<ng-content />` dentro del componente hijo. |
| `viewChild('ref')` | Obtiene una referencia reactiva a un elemento del DOM o componente hijo. Devuelve una señal. | `div = viewChild<ElementRef>('myDiv');` |
| `AfterViewInit` | Hook que se ejecuta cuando la vista ya está renderizada. Ideal para interactuar con el DOM. | `ngAfterViewInit() { this.div()?.nativeElement.focus(); }` |

---

### Pipes en templates

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `\| pipe` | Operador que aplica un pipe al valor de la izquierda en el template. | `{{ precio \| currency }}` |
| `PipeTransform` | Interfaz que obliga a implementar el método `transform()` en un pipe personalizado. | `implements PipeTransform` |
| `transform(value, ...args)` | Método central de un pipe: recibe el dato y los argumentos opcionales. | `transform(text: string): string { return text.toUpperCase(); }` |

---

## 6. Angular — Directivas de Control de Flujo

### Control de flujo moderno (Angular 17+)

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `@if (condicion)` | Muestra el bloque si la condición es `true`. El elemento se elimina del DOM si es `false`. | `@if (user()) { <p>Bienvenido</p> }` |
| `@else` | Bloque alternativo del `@if`. | `@if (x) { ... } @else { <p>No hay datos</p> }` |
| `@else if (cond)` | Encadena condiciones adicionales. | `@if (a) { } @else if (b) { } @else { }` |
| `@for (item of lista; track item.id)` | Itera sobre una lista. `track` es obligatorio e identifica cada elemento. | `@for (p of products(); track p.id) { <li>{{ p.name }}</li> }` |
| `track` | Identificador único para el `@for`. Usar el ID del objeto, nunca el índice. | `track product.id` |
| `@empty` | Bloque dentro de `@for` que se muestra cuando la lista está vacía. | `@for (...) { ... } @empty { <p>Sin resultados</p> }` |
| `@switch (expr)` | Evalúa una expresión y muestra el bloque del caso coincidente. | `@switch (status) { @case ('ok') { } @default { } }` |
| Variables del `@for` | Variables locales disponibles dentro del bloque. | `$index`, `$first`, `$last`, `$even`, `$odd`, `$count` |

---

### Directivas clásicas (aún válidas)

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `*ngFor` | Directiva estructural clásica para iterar (reemplazada por `@for`). | `*ngFor="let item of lista"` |
| `*ngIf` | Directiva estructural clásica para condiciones (reemplazada por `@if`). | `*ngIf="mostrar"` |
| `NgClass` | Directiva que aplica clases CSS condicionalmente desde un objeto. Importar de `@angular/common`. | `[ngClass]="{ 'active': isActive }"` |

---

### Defer Blocks (Angular 17+)

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `@defer { }` | Carga un componente de forma diferida (lazy). No bloquea la renderización de la página. | `@defer { <app-heavy /> }` |
| `@placeholder { }` | Contenido mostrado mientras el componente diferido no se ha construido. | `@defer { <app-heavy /> } @placeholder { <p>Cargando...</p> }` |
| `@loading { }` | Contenido mostrado durante la carga asíncrona del chunk. | `@defer { } @loading { <spinner /> }` |
| `@error { }` | Contenido mostrado si la carga del componente falla. | `@defer { } @error { <p>Error</p> }` |
| `on idle` | Trigger: carga cuando el navegador entra en estado inactivo. | `@defer (on idle) { }` |
| `on viewport` | Trigger: carga cuando el `@placeholder` entra en el área visible. | `@defer (on viewport) { }` |
| `on interaction` | Trigger: carga al hacer clic o pulsar tecla sobre el placeholder. | `@defer (on interaction) { }` |
| `on hover` | Trigger: carga cuando el cursor pasa sobre el placeholder. | `@defer (on hover) { }` |
| `on timer(ms)` | Trigger: carga después de un tiempo determinado. | `@defer (on timer(2000)) { }` |
| `when condicion` | Trigger: carga cuando una expresión booleana se vuelve `true`. | `@defer (when isReady()) { }` |

---

## 7. Angular — Enrutamiento (Router)

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `provideRouter(routes)` | Registra el router globalmente en `app.config.ts`. | `provideRouter(appRoutes)` |
| Objeto de ruta `{ path, component }` | Entrada del arreglo de rutas. Define qué componente mostrar según el URL. | `{ path: 'hero', component: HeroPageComponent }` |
| `path: ''` | Ruta raíz (home). | `{ path: '', component: HomeComponent }` |
| `path: '**'` | Ruta comodín: captura cualquier URL no definida. Debe ir al final. | `{ path: '**', redirectTo: '' }` |
| `redirectTo` | Redirige a otro path en lugar de mostrar un componente. | `{ path: '**', redirectTo: '/home' }` |
| `loadComponent` | Carga el componente de forma perezosa (lazy load). | `loadComponent: () => import('./hero.component')` |
| `loadChildren` | Carga un archivo de rutas de forma perezosa. | `loadChildren: () => import('./hero.routes')` |
| `children` | Arreglo de rutas hijas dentro de una ruta padre. | `{ path: 'admin', children: [...] }` |
| `canMatch` | Guard que decide si una ruta puede ser activada. | `canMatch: [AuthGuard]` |
| `RouterLink` | Directiva para navegar entre rutas sin recargar la página. Importar de `@angular/router`. | `<a routerLink="/hero">Ir</a>` |
| `[routerLink]` | Versión dinámica de `RouterLink` (acepta expresiones). | `[routerLink]="['/product', id]"` |
| `RouterLinkActive` | Agrega una clase CSS cuando la ruta del enlace está activa. | `routerLinkActive="btn-primary"` |
| `[routerLinkActiveOptions]="{ exact: true }"` | Solo activa la clase si la ruta coincide exactamente (no como prefijo). | Útil para la ruta raíz `/`. |
| `ActivatedRoute` | Servicio con la información de la ruta activa (params, queryParams). Se inyecta. | `route = inject(ActivatedRoute);` |
| `.snapshot.params['id']` | Lee el parámetro de ruta de forma estática (no reactiva). | `const id = this.route.snapshot.params['id'];` |
| `.params` (Observable) | Observable que emite cuando los parámetros de ruta cambian. | `toSignal(this.route.params)` |
| `QueryParams` | Parámetros de búsqueda en el URL (`?q=Angular`). | `route.queryParams` |
| `:param` en el path | Segmento dinámico de una ruta. | `{ path: 'product/:id', ... }` |
| `HashLocationStrategy` | Estrategia de URL que agrega `#` para evitar errores 404 en servidores sin configuración. | Configurable en `app.config.ts`. |
| `Location` | Servicio de `@angular/common` para interactuar con el historial del navegador. | `location.back()` — navega a la página anterior. |

---

## 8. Angular — Comunicación entre Componentes

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `input()` | Función moderna que crea un Input Signal para recibir datos del componente padre. | `name = input<string>();` |
| `input.required<T>()` | Input obligatorio; Angular marca error si el padre no lo provee. | `product = input.required<Product>();` |
| `input<T>(defaultValue)` | Input opcional con valor por defecto. | `placeholder = input<string>('Buscar');` |
| `InputSignal` | Tipo del valor devuelto por `input()`. Se consume invocándolo con paréntesis. | `{{ name() }}` |
| `[propiedad]="valor"` | Sintaxis para pasar un valor del padre al hijo (property binding). | `[user]="currentUser()"` |
| `output<T>()` | Función moderna que crea un output tipado. El hijo lo usa para emitir eventos al padre. | `saved = output<Product>();` |
| `.emit(valor)` | Dispara el evento con el valor enviado al componente padre. | `this.saved.emit(product);` |
| `(evento)="método($event)"` | Sintaxis del padre para escuchar el evento emitido por el hijo. | `(saved)="onSaved($event)"` |
| `@Input()` | Decorador clásico para recibir valores del padre (reemplazado por `input()`). | `@Input() name: string = '';` |
| `@Output()` | Decorador clásico para emitir eventos al padre (reemplazado por `output()`). | `@Output() saved = new EventEmitter<Product>();` |
| `EventEmitter` | Clase para emitir eventos con el decorador `@Output()`. | `new EventEmitter<string>()` |
| `ng-content` | Content Projection: inserta el contenido que el padre pone entre las etiquetas del componente hijo. | `<app-card><p>Contenido</p></app-card>` |

---

## 9. Angular — Servicios e Inyección de Dependencias

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| Servicio | Clase con `@Injectable` que centraliza la lógica de negocio y el estado. | `@Injectable({ providedIn: 'root' }) class UserService { }` |
| `@Injectable({ providedIn: 'root' })` | Hace que el servicio esté disponible globalmente como singleton. | El más común. |
| Singleton | Una sola instancia del servicio existe para toda la app mientras dure la sesión. | Garantizado por `providedIn: 'root'`. |
| `inject(Clase)` | Función moderna para inyectar una dependencia. No requiere constructor. | `authService = inject(AuthService);` |
| Constructor injection | Forma tradicional de inyectar; sigue siendo válida. | `constructor(private authService: AuthService) { }` |
| `provideHttpClient(withFetch())` | Registra `HttpClient` globalmente en `app.config.ts`. | Requerido para poder usar `HttpClient`. |
| `Mapper` | Clase con métodos estáticos que transforma el DTO de la API al modelo propio de la app. | `CountryMapper.mapToCountry(item)` |
| `Record<K, V>` | Tipo TypeScript para objetos con claves dinámicas tipadas. | `Record<string, Product[]>` — caché de productos. |

---

## 10. Angular — HTTP y RxJS

### HttpClient

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `HttpClient` | Servicio de Angular para hacer peticiones HTTP basadas en Observables. Inyectar con `inject()`. | `http = inject(HttpClient);` |
| `http.get<T>(url, options)` | Petición GET tipada. Devuelve `Observable<T>`. | `http.get<Product[]>('/api/products')` |
| `http.post<T>(url, body)` | Petición POST con cuerpo. | `http.post<AuthResponse>('/api/auth/login', { email, password })` |
| `http.patch<T>(url, body)` | Petición PATCH para actualizar parcialmente un recurso. | `http.patch<Product>('/api/products/1', data)` |
| `HttpParams` | Clase para construir parámetros de URL de forma tipada. | `new HttpParams().set('q', 'Angular')` |
| `FormData` | API nativa del navegador para construir datos de formulario `multipart/form-data`. Necesaria para subir archivos. | `const fd = new FormData(); fd.append('file', file);` |
| `withFetch()` | Configura `HttpClient` para usar la Fetch API nativa en lugar de XHR. | `provideHttpClient(withFetch())` |
| Interceptor HTTP | Función que intercepta todas las peticiones HTTP para modificarlas (ej: agregar token Bearer). | Ver sección de autenticación. |
| `withInterceptors([fn])` | Registra interceptores funcionales en `provideHttpClient()`. | `provideHttpClient(withFetch(), withInterceptors([authInterceptor]))` |

---

### RxJS — Observables

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `Observable` | Patrón de emisión de valores en el tiempo. Las peticiones HTTP devuelven Observables. | `Observable<Product[]>` |
| `.subscribe({ next, error, complete })` | Activa el Observable. Callbacks para éxito, error y finalización. | `obs$.subscribe({ next: d => console.log(d) })` |
| `of(valor)` | Crea un Observable que emite un valor inmediatamente y se completa. | `of([])` — Observable de arreglo vacío. |
| `firstValueFrom(obs$)` | Convierte un Observable en una Promesa que resuelve con el primer valor emitido. | `await firstValueFrom(this.http.get('/api'))` |
| `interval(ms)` | Observable que emite un número cada `ms` milisegundos. | `interval(1000)` — emite cada segundo. |

---

### RxJS — Operadores

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `.pipe(...ops)` | Encadena operadores RxJS sobre un Observable. | `obs$.pipe(map(x => x * 2), filter(x => x > 0))` |
| `map(callback)` | Transforma cada valor emitido. El retorno reemplaza el valor. | `map(resp => resp.data)` |
| `tap(callback)` | Efecto secundario (logging, actualizar señales) sin modificar el valor. | `tap(data => this.cache.set('key', data))` |
| `filter(callback)` | Deja pasar solo los valores que cumplen la condición. | `filter(e => e instanceof NavigationEnd)` |
| `catchError(callback)` | Intercepta errores en la cadena del Observable y permite devolver un nuevo Observable. | `catchError(() => of(false))` |
| `throwError(() => new Error())` | Genera un Observable que emite un error inmediatamente. | `throwError(() => new Error('No autorizado'))` |
| `switchMap(callback)` | Cancela el Observable anterior y se suscribe al nuevo retornado por el callback. | `switchMap(id => this.http.get('/api/' + id))` |
| `forkJoin([obs1, obs2])` | Espera a que todos los Observables completen y emite sus últimos valores en un arreglo. | `forkJoin(imagenes.map(img => this.upload(img)))` |

---

### Resource API (Angular 19+)

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `resource({ request, loader })` | Objeto reactivo de Angular 19 para peticiones basadas en Promesas + señales. Reemplaza `isLoading` y `isError` manuales. | `res = resource({ request: () => this.id(), loader: async ({ request }) => fetch('/api/' + request) })` |
| `rxResource({ request, loader })` | Variante de `resource` para Observables. Importar de `@angular/core/rxjs-interop`. | `res = rxResource({ request: () => this.query(), loader: ({ request }) => this.http.get('/api?q=' + request) })` |
| `resource.value()` | Señal con el dato retornado por el loader. | `this.res.value()` |
| `resource.isLoading()` | Señal booleana; `true` mientras el loader se ejecuta. | `@if (res.isLoading()) { <spinner /> }` |
| `resource.error()` | Señal con el error si el loader lanzó una excepción. | `@if (res.error()) { <p>Error</p> }` |
| `resource.hasValue()` | `true` si el resource tiene un valor disponible. | `@if (res.hasValue()) { ... }` |
| `resource.reload()` | Fuerza re-ejecutar el loader. | `this.res.reload()` |
| `abortSignal` | Argumento del loader para cancelar peticiones anteriores automáticamente. | `loader: async ({ abortSignal }) => fetch(url, { signal: abortSignal })` |

---

## 11. Angular — Pipes

### Pipes de texto

| Pipe | Descripción | Ejemplo |
|------|-------------|---------|
| `uppercase` | Convierte texto a mayúsculas. | `{{ 'angular' \| uppercase }}` → `ANGULAR` |
| `lowercase` | Convierte texto a minúsculas. | `{{ 'ANGULAR' \| lowercase }}` → `angular` |
| `titlecase` | Primera letra de cada palabra en mayúscula. | `{{ 'hello world' \| titlecase }}` → `Hello World` |

---

### Pipes numéricos

| Pipe | Descripción | Ejemplo |
|------|-------------|---------|
| `number` / `DecimalPipe` | Formatea números con separadores de miles y decimales. | `{{ 1234567.89 \| number:'1.2-2' }}` → `1,234,567.89` |
| `percent` / `PercentPipe` | Multiplica por 100 y agrega `%`. | `{{ 0.75 \| percent }}` → `75%` |
| `currency` / `CurrencyPipe` | Formatea como moneda. | `{{ 99.9 \| currency:'USD' }}` → `$99.90` |

---

### Pipes de fecha

| Pipe | Descripción | Ejemplo |
|------|-------------|---------|
| `date` / `DatePipe` | Formatea fechas con soporte de locale. | `{{ fecha \| date:'dd/MM/yyyy' }}` |
| Formatos predefinidos | `short`, `medium`, `long`, `full` | `{{ hoy \| date:'long' }}` → `12 de marzo de 2026` |

---

### Pipes de utilidad

| Pipe | Descripción | Ejemplo |
|------|-------------|---------|
| `async` / `AsyncPipe` | Se suscribe automáticamente a un Observable o Promesa en el template. Cancela la suscripción al destruir el componente. | `{{ obs$ \| async }}` |
| `json` / `JsonPipe` | Serializa objetos a JSON formateado. Útil para depuración. | `<pre>{{ obj \| json }}</pre>` |
| `slice` / `SlicePipe` | Recorta un arreglo o string. | `{{ lista \| slice:0:5 }}` — primeros 5 elementos. |
| `keyvalue` / `KeyValuePipe` | Transforma un objeto en un arreglo de pares `{ key, value }` para iterar con `@for`. | `@for (item of obj \| keyvalue; track item.key)` |
| `i18nSelect` | Selecciona un string según el valor de una expresión (ej: género). | `{{ genero \| i18nSelect: { 'M': 'Él', 'F': 'Ella', 'other': 'Otro' } }}` |
| `i18nPlural` | Pluraliza un mensaje según un número. | `{{ count \| i18nPlural: { '=0': 'Sin items', '=1': 'Un item', 'other': '# items' } }}` |

---

### Pipes personalizados

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `@Pipe({ name: 'miPipe', standalone: true })` | Decorador que define el pipe y su nombre en el template. | `@Pipe({ name: 'heroColor', standalone: true })` |
| `transform(value, ...args)` | Método que recibe el dato y argumentos opcionales, y retorna el valor transformado. | `transform(canFly: boolean): string { return canFly ? 'Vuela' : 'No vuela'; }` |
| Encadenar pipes | Varios pipes pueden aplicarse en secuencia. | `{{ lista \| heroFilter:query \| heroSortBy:'name' }}` |

---

## 12. Angular — Formularios Reactivos

### Estructura del formulario

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `ReactiveFormsModule` | Módulo que habilita las directivas de formularios reactivos. Importar en el componente. | `imports: [ReactiveFormsModule]` |
| `FormGroup` | Contenedor del formulario; agrupa controles. | `myForm = new FormGroup({ name: new FormControl('') })` |
| `FormControl` | Representa un campo individual del formulario con su valor, estado y validaciones. | `new FormControl('', [Validators.required])` |
| `FormArray` | Colección dinámica de controles indexados. | `this.fb.array([this.fb.control('')])` |
| `FormBuilder` | Servicio que simplifica la creación de grupos, controles y arreglos. Inyectar con `inject()`. | `fb = inject(FormBuilder);` |
| `fb.group({})` | Crea un `FormGroup` desde un objeto literal. | `fb.group({ email: ['', Validators.email] })` |
| `fb.control(valor)` | Crea un `FormControl` individual. | `fb.control('', Validators.required)` |
| `fb.array([])` | Crea un `FormArray` con elementos iniciales. | `fb.array([fb.control('')])` |

---

### Binding en el template

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `[formGroup]="myForm"` | Enlaza el `<form>` con el `FormGroup` de la clase. | `<form [formGroup]="myForm">` |
| `formControlName="campo"` | Asocia un `<input>` con un control del grupo por nombre. | `<input formControlName="email">` |
| `[formControl]="control"` | Enlaza un control independiente (no pertenece al FormGroup). | `<input [formControl]="searchControl">` |
| `formArrayName="items"` | Asocia un bloque HTML al `FormArray` del formulario. | `<div formArrayName="items">` |
| `[formControlName]="i"` | Dentro de `formArrayName`, usa el índice para identificar cada control. | `<input [formControlName]="i">` |
| `(ngSubmit)="onSubmit()"` | Evento del formulario reactivo (incluye `preventDefault` automático). | `<form (ngSubmit)="onSubmit()">` |

---

### Validaciones

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `Validators.required` | El campo no puede estar vacío. | `fb.control('', Validators.required)` |
| `Validators.minLength(n)` | El string debe tener al menos `n` caracteres. | `Validators.minLength(6)` |
| `Validators.email` | El string debe tener formato de correo electrónico. | `Validators.email` |
| `Validators.pattern(rx)` | El valor debe coincidir con la expresión regular. | `Validators.pattern(/^[a-z0-9_-]+$/)` |
| `Validators.min(n)` | El número debe ser ≥ `n`. | `Validators.min(0)` |
| `Validators.max(n)` | El número debe ser ≤ `n`. | `Validators.max(100)` |
| `.errors` | Objeto con las claves de las validaciones fallidas (`null` si todo es válido). | `myForm.get('email')?.errors` |
| `.valid` | `true` si el formulario pasa todas sus validaciones. | `myForm.valid` |
| `.invalid` | `true` si alguna validación no pasa. | `myForm.invalid` |
| `.touched` | `true` si el usuario ha interactuado con el campo. | `control.touched` |
| `.pristine` | `true` si el formulario no ha sido modificado. | `myForm.pristine` |
| `markAllAsTouched()` | Marca todos los controles como tocados. Útil al intentar enviar el formulario. | `myForm.markAllAsTouched()` |
| `myForm.reset(obj?)` | Resetea valores, `pristine` y `touched`. Acepta valores por defecto. | `myForm.reset({ name: '' })` |
| `patchValue(obj)` | Actualiza solo los campos especificados sin tocar los demás. | `myForm.patchValue({ tags: tags.join(', ') })` |
| `FormArray.push(control)` | Agrega un nuevo control al arreglo dinámico. | `this.items.push(this.fb.control(''))` |
| `FormArray.removeAt(index)` | Elimina el control en la posición indicada. | `this.items.removeAt(2)` |

---

## 13. Angular — Ciclo de Vida de Componentes

| Hook | Cuándo se ejecuta | Ejemplo de uso |
|------|-------------------|----------------|
| `constructor` | Al crear la instancia. Antes de cualquier input o vista. | Inyectar dependencias. |
| `ngOnInit` | Tras la primera detección de cambios; el componente está listo. | Llamadas HTTP, suscripciones. |
| `ngOnChanges(changes: SimpleChanges)` | Cada vez que un `input()` del componente cambia de valor. | Reaccionar a nuevos datos del padre. |
| `ngOnDestroy` | Antes de destruir el componente. | Cancelar suscripciones, limpiar timers. |
| `ngDoCheck` | Cada vez que Angular detecta o revisa posibles cambios. | Detección de cambios personalizada. |
| `ngAfterViewInit` | Tras renderizar la vista del componente y sus hijos. | Acceder a referencias del DOM (`viewChild`). |
| `ngAfterViewChecked` | Tras revisar la vista del componente. | — |
| `ngAfterContentInit` | Tras inicializar el contenido proyectado (`ng-content`). | — |
| `afterNextRender(cb)` | Una vez tras el primer render completo. Función (no interfaz). | Inicializar librerías de UI. |
| `afterRender(cb)` | Cada vez que hay un render completo. | — |
| `SimpleChange` | Objeto con `previousValue`, `currentValue` e `isFirstChange()` por cada input cambiado. | Dentro de `ngOnChanges`. |
| `implements OnInit` | Interfaz opcional que garantiza el nombre correcto del método. | `class MyComp implements OnInit { }` |

---

## 14. Angular — Autenticación y Seguridad

### JWT y AuthService

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| JWT (JSON Web Token) | Mecanismo de autenticación basado en un token firmado (header.payload.firma). El cliente lo envía en cada petición protegida. | `Authorization: Bearer eyJhbGci...` |
| Bearer Token | Formato estándar: el token se envía con el prefijo `Bearer ` en el encabezado `Authorization`. | `headers: { Authorization: 'Bearer ' + token }` |
| `AuthStatus` | Tipo union con los estados posibles de autenticación. | `type AuthStatus = 'checking' \| 'authenticated' \| 'not-authenticated'` |
| `localStorage.setItem(key, val)` | Persiste el token entre recargas del navegador. | `localStorage.setItem('token', resp.token)` |
| `localStorage.getItem(key)` | Lee el token guardado. Devuelve `null` si no existe. | `const token = localStorage.getItem('token')` |
| `localStorage.removeItem(key)` | Elimina el token al cerrar sesión. | `localStorage.removeItem('token')` |
| `check-status` endpoint | Endpoint del backend que verifica si el token sigue siendo válido y devuelve un token renovado. | `GET /api/auth/check-status` |

---

### Interceptores

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| Interceptor HTTP | Función que intercepta todas las peticiones HTTP salientes para modificarlas (agregar headers, loggear, etc.). | Ver ejemplo abajo. |
| Interceptor funcional | Forma moderna de Angular: una función simple, sin clase ni decorador. | `export function authInterceptor(req, next) { ... }` |
| `req.headers.append(key, val)` | Agrega un header a la petición HTTP sin mutar el original (las peticiones son inmutables). | `req.headers.append('Authorization', 'Bearer ' + token)` |
| `req.clone({ headers })` | Clona la petición con los nuevos headers. | `const authReq = req.clone({ headers: req.headers.append(...) })` |
| `next(req)` | Pasa la petición (posiblemente modificada) al siguiente interceptor o al servidor. | `return next(authReq)` |

```typescript
// Ejemplo: Auth Interceptor
export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn) {
  const token = inject(AuthService).token();
  if (!token) return next(req);
  const authReq = req.clone({
    headers: req.headers.append('Authorization', `Bearer ${token}`)
  });
  return next(authReq);
}
```

---

### Guards

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| Guard | Función que protege una ruta evaluando una condición antes de permitir o bloquear la navegación. | `export const AuthGuard: CanMatchFn = async () => { ... }` |
| `CanMatchFn` | Tipo del guard moderno basado en función. | `export const IsAdminGuard: CanMatchFn = ...` |
| `canMatch` | Propiedad de la ruta que recibe un arreglo de guards. | `{ path: 'admin', canMatch: [IsAdminGuard] }` |
| `firstValueFrom(obs$)` | Convierte un Observable en Promesa para que el guard pueda hacer `await` y esperar el estado de autenticación. | `await firstValueFrom(authService.checkAuthStatus())` |
| `isAdmin` | Señal computada en `AuthService` que devuelve `true` si el usuario tiene rol `admin`. | `isAdmin = computed(() => this._user()?.roles.includes('admin') ?? false)` |

---

## 15. Angular — Rendimiento y Carga Diferida

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| Lazy loading | Cargar el código de un módulo o componente solo cuando el usuario navega a esa ruta. | `loadComponent: () => import('./hero.component')` |
| Caché manual | Guardar respuestas previas de la API para no repetir peticiones. | `Map<string, Product[]>` o `Record<string, T>` |
| Debounce | Técnica que retrasa la ejecución hasta que el usuario deja de escribir. Evita peticiones por cada tecla. | `effect(() => { const t = setTimeout(() => emitir(), 500); onCleanup(() => clearTimeout(t)); })` |
| Paginación | Dividir grandes listas en páginas. Parámetros típicos: `page`, `limit`, `offset`. | `GET /api/products?page=2&limit=9` |
| `offset` | Posición de inicio en la paginación. `offset = (página - 1) * límite`. | `offset = page * 9` |
| `ScrollStateService` | Servicio que guarda la posición del scroll entre navegaciones. | `trendingScrollState = signal(0)` |
| Infinite scroll | Carga más contenido al llegar al final de la lista. Detectado con `scrollTop + clientHeight >= scrollHeight`. | — |
| `@defer` | Carga componentes pesados de forma diferida, sin bloquear la renderización principal. | `@defer (on viewport) { <app-heavy /> }` |
| `export default class` | Requerido para que `loadComponent` importe el componente directamente sin `.then()`. | `export default class HeroComponent { }` |
| `ChangeDetectionStrategy.OnPush` | El componente solo se actualiza cuando sus señales o inputs cambian. Mejora el rendimiento. | `changeDetection: ChangeDetectionStrategy.OnPush` |

---

## 16. Angular — Despliegue y Configuración

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `ng build` | Compila en modo producción. Genera `dist/` con archivos optimizados. | `ng build` |
| `fileReplacements` | Configuración en `angular.json` que sustituye `environment.ts` por el archivo del ambiente correspondiente. | Automático según `ng serve` o `ng build`. |
| Path alias | Nombre corto para rutas largas de importación. Se configura en `tsconfig.json`. | `@products/*` → `./src/app/products/*` |
| `baseUrl` en `tsconfig.json` | Raíz desde la que parten los alias. | `"baseUrl": "./"` |
| `paths` en `tsconfig.json` | Define los alias: `{ "@alias/*": ["./src/app/.../*"] }`. | `"@auth/*": ["./src/app/auth/*"]` |
| `allowedCommonJsDependencies` | Campo en `angular.json` para suprimir warnings de dependencias CommonJS. | Necesario con librerías como Mapbox. |
| `budgets` en `angular.json` | Tamaño máximo del bundle antes de lanzar warning o error. | Se puede ajustar para bundles grandes. |
| `HashLocationStrategy` | Agrega `#` al URL para que el servidor siempre sirva el `index.html`. | Necesario en hostings sin configuración de redirección. |
| `withHashLocation()` | Función que activa `HashLocationStrategy` en el router. | `provideRouter(routes, withHashLocation())` |
| `docker-compose up -d` | Levanta los contenedores Docker en segundo plano (modo detached). | Para el backend + base de datos. |
| `openssl rand -base64 32` | Genera un string aleatorio seguro para usar como `JWT_SECRET`. | En Mac/Linux. |
| CI/CD | Integración y despliegue continuo. Cada push a `main` redespliega automáticamente. | Render y Netlify lo soportan nativamente. |

---

## 17. JavaScript / Web APIs

| Término | Descripción | Ejemplo |
|---------|-------------|---------|
| `JSON.stringify(obj)` | Serializa un objeto a string JSON para guardarlo en localStorage. | `JSON.stringify({ id: 1, name: 'Angular' })` |
| `JSON.parse(string)` | Reconstruye un objeto desde un string JSON. Inverso de `stringify`. | `JSON.parse(localStorage.getItem('user') ?? '{}')` |
| `localStorage.setItem(k, v)` | Guarda un par clave-valor en el almacenamiento persistente del navegador. | `localStorage.setItem('token', jwt)` |
| `localStorage.getItem(k)` | Lee el valor guardado. Devuelve `null` si no existe. | `localStorage.getItem('token')` |
| `localStorage.removeItem(k)` | Elimina una clave del almacenamiento local. | `localStorage.removeItem('token')` |
| `sessionStorage` | Similar a localStorage pero se borra al cerrar el navegador/pestaña. | Menos persistente que localStorage. |
| `URL.createObjectURL(file)` | Genera una URL temporal (`blob:`) para previsualizar un archivo en el navegador sin subirlo. | `const preview = URL.createObjectURL(imageFile)` |
| `new FormData()` | API nativa para construir datos `multipart/form-data`. No requiere importación. | `const fd = new FormData(); fd.append('file', img);` |
| `Object.keys(obj)` | Retorna las claves de un objeto como arreglo de strings. | `Object.keys({ a: 1, b: 2 })` → `['a', 'b']` |
| `Promise` | API nativa para operaciones asíncronas. Puede resolver (`resolve`) o rechazar (`reject`). | `new Promise((res, rej) => setTimeout(res, 1000))` |
| `async / await` | Sintaxis para trabajar con Promesas de forma síncrona. | `const data = await fetch('/api').then(r => r.json())` |
| `setTimeout(fn, ms)` | Ejecuta una función una vez después de `ms` milisegundos. | `setTimeout(() => console.log('ok'), 500)` |
| `clearTimeout(id)` | Cancela un `setTimeout` pendiente. Usado en debounce con `onCleanup`. | `clearTimeout(timerId)` |
| `setInterval(fn, ms)` | Ejecuta una función repetidamente cada `ms` milisegundos. | `setInterval(() => this.tick(), 1000)` |
| `clearInterval(id)` | Cancela un `setInterval` activo. | `clearInterval(intervalId)` |
| `scrollTop` | Píxeles desplazados desde el inicio del contenedor. `0` = sin scroll. | `div.scrollTop` |
| `clientHeight` | Altura visible del contenedor (viewport del elemento). | `div.clientHeight` |
| `scrollHeight` | Altura total del contenido, incluyendo la parte oculta por el scroll. | `div.scrollHeight` |
| `localeCompare(b)` | Comparación de strings respetando el locale del usuario. Útil para ordenar con `Array.sort()`. | `a.name.localeCompare(b.name)` |
| `Array.includes(val)` | Devuelve `true` si el arreglo contiene el valor. | `roles.includes('admin')` |
| `Array.filter(fn)` | Retorna un nuevo arreglo con los elementos que pasan la condición. | `list.filter(x => x.id !== id)` |
| `Array.find(fn)` | Retorna el primer elemento que cumple la condición. | `list.find(x => x.id === id)` |
| `Array.sort(fn)` | Ordena el arreglo in-place. Usar con una copia para no mutar el original. | `[...arr].sort((a, b) => a.name.localeCompare(b.name))` |
| Spread operator (`...`) | Crea una copia de un arreglo u objeto. Esencial para no mutar señales. | `[...prev, newItem]` |
| `debugger` | Pausa la ejecución en las DevTools del navegador. | `debugger;` dentro de un método. |

---

## 18. Herramientas y Ecosistema

### Angular CLI y comandos

| Comando | Descripción |
|---------|-------------|
| `ng new nombre` | Crea un nuevo proyecto Angular. |
| `ng serve -o` | Levanta el servidor de desarrollo y abre el navegador en `localhost:4200`. |
| `ng build` | Genera el bundle de producción en `dist/`. |
| `ng generate component nombre` (`ng g c`) | Genera los archivos de un componente. |
| `ng generate service nombre` (`ng g s`) | Genera un servicio. |
| `ng generate environments` | Genera los archivos de entorno y configura `fileReplacements` en `angular.json`. |
| `ng g pipe nombre` | Genera un pipe personalizado. |

---

### VS Code — Atajos y extensiones

| Herramienta | Descripción |
|-------------|-------------|
| `Ctrl + .` | Autoimporta un componente, pipe o directiva al usarlo en el template. |
| `Ctrl + clic` | Navega a la definición de una función, interfaz o componente. |
| `F2` | Renombra una propiedad en todos los archivos del proyecto a la vez. |
| `Alt + Clic` | Navega al archivo HTML del componente desde el TypeScript. |
| `Ctrl + .` → "Add all missing members" | Agrega automáticamente todos los miembros faltantes como placeholders. |
| Snippet `a-component` | Genera la estructura base de un componente Angular con Tab. |
| Snippet `a-service` | Genera la estructura base de un servicio Angular. |
| "Paste JSON as Code" | Extensión que genera interfaces TypeScript desde una respuesta JSON. |
| Angular Schematics | Extensión de VS Code para generar componentes con configuración personalizada (sin estilos, template externo). |

---

### Librerías y herramientas externas

| Herramienta | Descripción |
|-------------|-------------|
| Vite | Empaquetador de desarrollo ultrarrápido. Angular lo usa internamente desde v17. |
| Tailwind CSS | Framework de CSS utilitario. Se instala y configura con `ng generate environments`. |
| daisyUI | Plugin de Tailwind con componentes visuales listos (botones, tarjetas, tablas, navbar). |
| Mapbox GL JS | Librería de mapas interactivos. Requiere API key y `allowedCommonJsDependencies`. |
| Docker / Docker Compose | Herramienta para correr la base de datos y el backend en contenedores aislados. |
| NestJS | Framework de Node.js usado para el backend del proyecto TesloShop. |
| PostgreSQL | Base de datos relacional usada por el backend de TesloShop. |
| neon.tech | Servicio de PostgreSQL gestionado en la nube (tier gratuito). |
| Render | Plataforma de hosting para el backend NestJS (tier gratuito). |
| Netlify | Plataforma para servir el frontend Angular como archivos estáticos. |
| uuid | Paquete npm para generar identificadores únicos. | `import { v4 as uuidv4 } from 'uuid'` |
| Swiper | Librería de carrusel/slider. Se incluye desde CDN en `index.html`. |
| reqres.in | API pública de prueba para simular usuarios. Usada en la Sección 23. |
| REST Countries API | API gratuita de información de países (`restcountries.com/v3.1`). |
| Giphy API | API de GIFs animados. Requiere API key de `developers.giphy.com`. |
| Postman | Herramienta para explorar y probar endpoints de APIs antes de consumirlos en Angular. |

---

### Patrones y conceptos generales

| Término | Descripción |
|---------|-------------|
| SPA (Single Page Application) | Aplicación que carga una sola vez y actualiza el contenido dinámicamente sin recargar la página. |
| Feature module | Organizar el código por dominio/funcionalidad (carpetas `auth/`, `products/`, `admin/`). |
| Mapper / DTO | Transformar el contrato de la API (DTO) al modelo interno de la app para desacoplarlos. |
| DRY (Don't Repeat Yourself) | Principio de no repetir lógica; extraerla a servicios, utilidades o métodos compartidos. |
| Slug | Identificador legible en la URL (ej: `camiseta-roja` en lugar de `123`). Favorable para SEO. |
| Seed | Proceso que llena la base de datos con datos de prueba. |
| `.env` | Archivo local con variables de entorno sensibles (API keys, contraseñas). Nunca se sube al repositorio. |
| `.env.template` | Plantilla sin valores reales que documenta las variables necesarias para otros desarrolladores. |
| `.gitignore` | Lista de archivos y carpetas que Git no debe versionar (como `node_modules/` y `.env`). |
| Hot reload | Angular detecta cambios y actualiza el navegador automáticamente en desarrollo. |
| SSR (Server Side Rendering) | Renderizar la app en el servidor para mejorar SEO y velocidad inicial. Angular lo soporta. |
| CI/CD | Integración y Despliegue Continuo: cada `git push` a `main` redespliega automáticamente. |
| Staging / Preproducción | Ambiente en la nube idéntico a producción para detectar problemas antes del lanzamiento real. |
