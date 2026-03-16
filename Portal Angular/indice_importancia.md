# Curso Angular — Prioridades orientadas a Microservicios

> Análisis de las **23 secciones** y sus lecciones reales, clasificadas según su aporte al objetivo central:
> **consumir, integrar y autenticar Microservicios desde Angular**.
>
> Fuente: resúmenes generados a partir de los scripts originales del curso.

---

## Leyenda de Prioridades

| Prioridad | Significado |
|-----------|-------------|
| 🔴 **1 – Imprescindible** | Directamente relacionado con consumo, autenticación o integración con microservicios. No saltear. |
| 🟠 **2 – Muy Recomendado** | Complementa el objetivo principal. Conviene estudiar para una integración robusta y mantenible. |
| 🟡 **3 – Útil** | Aporta a la calidad general del proyecto pero no es específico de microservicios. Ver si hay tiempo. |
| ⚪ **4 – Opcional** | No impacta el objetivo de microservicios. Se puede omitir o revisar muy por encima. |

---

## Sección 1 – Introducción al Curso

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción al Curso "Angular de Cero a Experto" | ⚪ 4 – Opcional | Presentación motivacional. Sin contenido técnico. |
| 02 | Cómo Funciona el Curso | ⚪ 4 – Opcional | Metodología del instructor. Sin impacto técnico. |
| 03 | Instalaciones Recomendadas | 🟡 3 – Útil | Configurar el entorno. Necesario solo la primera vez. |
| 04 | Hoja de Atajos - Recomendaciones | 🟡 3 – Útil | Material de referencia. Útil tenerlo a mano. |

---

## Sección 2 – Angular y TypeScript: Conceptos Previos

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a la Base de Angular | ⚪ 4 – Opcional | Contexto introductorio. Sin contenido técnico aplicable. |
| 02 | ¿Qué es TypeScript? ¿Por qué Angular lo usa? | 🟠 2 – Muy Recomendado | Entender el tipado es clave para modelar respuestas de APIs. |
| 03 | 10 Mitos y Realidades de Angular | ⚪ 4 – Opcional | Contenido opinativo. No aporta al objetivo técnico. |

---

## Sección 3 – Bases de TypeScript

> Proyecto: ejercicios con Vite y TypeScript puro.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a la Sección | ⚪ 4 – Opcional | Presentación de la sección. |
| 03 | Inicio de Proyecto: Bases de TypeScript | 🟡 3 – Útil | Configurar entorno de práctica. |
| 04 | Tipos Básicos y Conceptos Generales | 🟠 2 – Muy Recomendado | Necesario para tipar respuestas HTTP de microservicios. |
| 05 | Objetos, Arreglos e Interfaces | 🔴 1 – Imprescindible | Las interfaces modelan los DTOs/contratos de APIs. Fundamental. |
| 06 | Funciones Básicas | 🟠 2 – Muy Recomendado | Base para construir métodos de servicios HTTP. |
| 07 | Funciones con Objetos como Argumentos | 🟠 2 – Muy Recomendado | Patrón para enviar payloads a endpoints POST/PUT. |
| 08 | Tarea sobre Objetos e Interfaces | 🟡 3 – Útil | Refuerzo de interfaces. Útil si hay dudas. |
| 09 | Desestructuración de Objetos | 🟠 2 – Muy Recomendado | Frecuente al procesar respuestas JSON de APIs REST. |
| 10 | Desestructuración de Arreglos | 🟠 2 – Muy Recomendado | Frecuente al procesar listas paginadas de microservicios. |
| 11 | Desestructuración de Argumentos | 🟠 2 – Muy Recomendado | Patrón en mappers y transformaciones de DTOs. |
| 12 | Resolución de la Tarea: Desestructuración | 🟡 3 – Útil | Refuerzo. Ver solo si hubo dudas en la tarea. |
| 13 | Importaciones y Exportaciones | 🔴 1 – Imprescindible | Organización de módulos y servicios. Crítico con múltiples endpoints. |
| 14 | Clases Básicas | 🟠 2 – Muy Recomendado | Los servicios Angular son clases. Entender su estructura es necesario. |
| 15 | Constructor de una Clase | 🔴 1 – Imprescindible | Introduce inyección de dependencias. Base de HttpClient en servicios. |
| 16 | Extender una Clase (Herencia) | 🟡 3 – Útil | Buen diseño de servicios base. No crítico para consumo de APIs. |
| 17 | Priorizar Composición sobre Herencia | 🟠 2 – Muy Recomendado | Explica el patrón base de la inyección de dependencias en Angular. |
| 18 | Genéricos | 🔴 1 – Imprescindible | `HttpClient<T>` usa genéricos para tipar respuestas. Imprescindible. |
| 19 | Decoradores | 🔴 1 – Imprescindible | `@Injectable`, `@Component` son el corazón de Angular. |
| 20 | Encadenamiento Opcional (`?.`) | 🟠 2 – Muy Recomendado | Indispensable al acceder a propiedades de respuestas que pueden ser nulas. |

---

## Sección 4 – Primeros Pasos en Angular con Señales

> Proyecto: aplicación base con contador y señales.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 03 | Introducción a Angular | 🟠 2 – Muy Recomendado | Entender las piezas fundamentales de Angular antes de consumir APIs. |
| 04 | Primer Proyecto en Angular | 🔴 1 – Imprescindible | Sin crear un proyecto Angular no se puede integrar nada. |
| 05 | Explicación de Archivos y Directorios | 🔴 1 – Imprescindible | Sin conocer la estructura no se pueden organizar servicios ni módulos. |
| 06 | Explicación del Directorio SRC | 🔴 1 – Imprescindible | Anatomía de un componente. Base de toda la app. |
| 07 | Counter Page — Componente | 🟠 2 – Muy Recomendado | Primer componente funcional. Patrón base reutilizable. |
| 08 | Tarea — Separar Template de la Lógica | 🟡 3 – Útil | Buena práctica de organización. No crítico para microservicios. |
| 09 | Señales (Signals) | 🔴 1 – Imprescindible | Las señales son el mecanismo reactivo moderno para manejar estado de APIs. |
| 10 | Zoneless Angular | 🟠 2 – Muy Recomendado | Entender por qué las señales reemplazan a Zone.js. Contexto importante. |
| 11 | Tarea — Reforzar lo Aprendido | 🟡 3 – Útil | Refuerzo. Opcional si los conceptos quedaron claros. |
| 12 | Solución a la Tarea | 🟡 3 – Útil | Ver solo si hubo dudas en la tarea anterior. |
| 13 | Señales Computadas (`computed()`) | 🔴 1 – Imprescindible | Derivar estados de loading/error/data desde respuestas de APIs. |
| 14 | Resumen de lo Aprendido | ⚪ 4 – Opcional | Repaso. Sin contenido nuevo. |

---

## Sección 5 – Diseño Condicional, Servicios y Despliegue

> Proyecto: DragonBall App con comunicación entre componentes y servicios.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 03 | Continuación de Proyecto | 🟡 3 – Útil | Retomar proyecto. Contexto de sección. |
| 04 | RouterLink | 🟠 2 – Muy Recomendado | Navegación entre módulos/dominios de la app multi-servicio. |
| 05 | RouterLinkActive | 🟡 3 – Útil | UX del menú. No relacionado directamente con microservicios. |
| 06 | Tarea — DragonBall Page | 🟡 3 – Útil | Práctica de componentes. No relacionado con APIs. |
| 07 | @for — Iteraciones de Elementos | 🔴 1 – Imprescindible | Renderizar listas recibidas de microservicios. |
| 08 | ngClass — Clases CSS Condicionales | 🟡 3 – Útil | UI/UX. No específico de microservicios. |
| 09 | @if — Mostrar Elementos Condicionalmente | 🔴 1 – Imprescindible | Mostrar loading/error/data según estado de la petición HTTP. |
| 10 | Inputs — Agregar Personaje | 🟡 3 – Útil | UI de entrada. No directamente sobre APIs. |
| 11 | Solución a la Tarea | 🟡 3 – Útil | Ver solo si hubo dudas. |
| 12 | Preparación de una Nueva Página | 🟡 3 – Útil | Scaffolding de componente. |
| 13 | `input()` — Comunicación entre Componentes | 🟠 2 – Muy Recomendado | Pasar datos de la capa de servicio/API a componentes hijos. |
| 14 | Tarea — Signal Inputs y Componentes | 🟡 3 – Útil | Práctica. Ver si hay tiempo. |
| 15 | `output()` — Emitir Valores | 🟠 2 – Muy Recomendado | Comunicar eventos (ej: formulario enviado) hacia el servicio HTTP. |
| 16 | Servicios en Angular | 🔴 1 – Imprescindible | Los servicios son el patrón central para encapsular llamadas HTTP. |
| 17 | Efectos y LocalStorage | 🟠 2 – Muy Recomendado | `effect()` para reaccionar a cambios de estado de API y persistirlos. |
| 18 | LinkedSignal — Cargar del LocalStorage | 🟡 3 – Útil | Persistencia local. Útil pero no core de microservicios. |
| 19 | Despliegues y HashRouter | 🟡 3 – Útil | Deploy del frontend. Útil para completar el ciclo con el backend. |

---

## Sección 6 – GifsApp: Lazy Load, Rutas y Variables de Entorno

> Proyecto: GifsApp con estructura por features y lazy loading.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview del resultado. Sin código nuevo. |
| 04 | Inicio de Proyecto — GifsApp | 🟡 3 – Útil | Scaffolding del proyecto. |
| 05 | Pensemos en Componentes (Lazy Load) | 🔴 1 – Imprescindible | Estructura por features = un feature por dominio de microservicio. |
| 06 | Rutas Hijas | 🟠 2 – Muy Recomendado | Organizar sub-rutas por dominio/microservicio. |
| 07 | Componentes para el Menú Lateral | 🟡 3 – Útil | UI de navegación. No relacionado con microservicios. |
| 08 | RouterLinks desde Componentes Hijos | 🟡 3 – Útil | Navegación entre secciones. UX. |
| 09 | Angular Environments y Path Alias | 🔴 1 – Imprescindible | Gestión de URLs base de microservicios por ambiente (dev/prod). |
| 10 | Mostrar Imágenes de Relleno | ⚪ 4 – Opcional | UI de placeholders. Sin relación con microservicios. |
| 11 | Tarea — Input de Imágenes (Prop Drilling) | 🟡 3 – Útil | Patrón de paso de datos entre componentes. Útil en general. |

---

## Sección 7 – HttpClient, Observables y RxJS

> Proyecto: GifsApp conectada a la API de Giphy.
> **Esta sección es el núcleo del consumo de microservicios.**

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a HttpClient, Observables y RxJS | 🔴 1 – Imprescindible | Presenta el módulo central para consumir cualquier microservicio. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview del resultado. |
| 04 | Continuación de la Aplicación | 🟡 3 – Útil | Retomar proyecto. |
| 05 | Giphy API — Obtener API Key | 🟡 3 – Útil | Configuración de credenciales. El patrón aplica a cualquier API. |
| 06 | GifService e Interfaces ("Paste JSON as Code") | 🔴 1 – Imprescindible | Crear servicio HTTP + interfaces desde respuesta JSON real. Patrón directo. |
| 07 | Petición HTTP GET + Mapper | 🔴 1 – Imprescindible | Primera petición real. Observable + suscripción + transformación de DTO. |
| 08 | Mostrar GIFs en Pantalla | 🟠 2 – Muy Recomendado | Conectar datos del servicio HTTP al template. |
| 09 | Diseño del Buscador | 🟡 3 – Útil | UI del buscador. El foco es el template, no el servicio. |
| 10 | Mostrar Resultados (`pipe`, `tap`, `map`) | 🔴 1 – Imprescindible | Operadores RxJS para transformar respuestas de microservicios. |
| 11 | Historial y Caché con `Record<string, T>` | 🟠 2 – Muy Recomendado | Evitar re-peticiones al mismo endpoint. Patrón clave en producción. |
| 12 | Argumentos Dinámicos por URL + `toSignal` | 🔴 1 – Imprescindible | Rutas con `:id` → `GET /resource/:id`. Base de cualquier detalle de recurso. |
| 13 | Mostrar Historial con Señal Computada | 🟠 2 – Muy Recomendado | Derivar listas de respuestas HTTP en señales computadas. |
| 14 | LocalStorage — Persistir Historial con `effect()` | 🟠 2 – Muy Recomendado | Persistir estado derivado de APIs. Patrón de caché local. |

---

## Sección 8 – Infinite Scroll, Paginación y Depuración *(Opcional)*

> Proyecto: GifsApp con scroll infinito y preservar posición.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción *(sección marcada como opcional)* | ⚪ 4 – Opcional | El instructor mismo la marca como opcional. |
| 03 | Demostración | ⚪ 4 – Opcional | — |
| 04 | Continuación de la Aplicación | ⚪ 4 – Opcional | — |
| 05 | Diseño Masonry | ⚪ 4 – Opcional | CSS puro. Sin relación con microservicios. |
| 06 | `viewChild` — Referencias del Template | 🟡 3 – Útil | Acceso a elementos DOM. Útil en general. |
| 07 | Determinar Fin de Scroll | 🟡 3 – Útil | Trigger para paginación. Aplica a listas de APIs. |
| 08 | Cargar Siguiente Página (offset/paginación) | 🟠 2 – Muy Recomendado | Paginación con parámetros HTTP: `offset`, `limit`. Patrón estándar en APIs. |
| 09 | Preservar Posición del Scroll | ⚪ 4 – Opcional | UX avanzada. Sin relación directa con microservicios. |
| 10 | Depuración de Aplicación (DevTools, breakpoints) | 🟠 2 – Muy Recomendado | Depurar peticiones HTTP y respuestas de microservicios en desarrollo. |

---

## Sección 9 – CountryApp: Estructura, Tailwind y DaisyUI

> Proyecto: CountryApp — setup y diseño base (sin HTTP todavía).

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview del resultado. |
| 04 | Inicio de Proyecto — CountryApp | 🟡 3 – Útil | Scaffolding. |
| 05 | Rutas y Estructura de Carpetas por Dominio | 🔴 1 – Imprescindible | Organizar features por dominio de microservicio (la estructura más importante). |
| 06 | Layout Components + Router Outlet | 🟠 2 – Muy Recomendado | Contenedor de vistas por módulo/microservicio. |
| 07 | DaisyUI — Hero, Footer | 🟡 3 – Útil | UI/UX. Sin relación con microservicios. |
| 08 | Menú Superior e Iconos | ⚪ 4 – Opcional | Navegación visual. |
| 09 | Inputs y Tablas | 🟡 3 – Útil | UI de búsqueda. El patrón de tabla sí aplica para listar recursos de APIs. |
| 10 | Solución a la Tarea (componentes de búsqueda) | 🟡 3 – Útil | Componentes reutilizables de búsqueda. |
| 11 | Guía de Estilos — Standalone Components sin NgModule | 🟠 2 – Muy Recomendado | Arquitectura standalone: impacta cómo se provee `HttpClient` en la app. |

---

## Sección 10 – CountryApp: HttpClient con `resource` y `rxResource`

> Proyecto: CountryApp conectada a REST Countries API.
> **Primera integración completa con API REST real + manejo de errores.**

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Continuación — Explorar API con Postman | 🔴 1 – Imprescindible | Explorar el contrato de un microservicio antes de consumirlo. |
| 05 | CountryService + `provideHttpClient` + Interfaces | 🔴 1 – Imprescindible | Crear el servicio HTTP + proveer `HttpClient` + generar interfaces desde JSON real. |
| 06 | Country Interface y Mapeo (DTO → modelo propio) | 🔴 1 – Imprescindible | Desacoplar el modelo de la app del contrato del microservicio. Patrón esencial. |
| 07 | Solución — CountryMapper + operador `map` de RxJS | 🔴 1 – Imprescindible | Implementar el mapper. Transformar respuesta HTTP en modelo de la app. |
| 08 | Nombre del País en Español (mapeo anidado) | 🟠 2 – Muy Recomendado | Mapear propiedades anidadas de respuestas JSON complejas de APIs. |
| 09 | DecimalPipe para formatear datos | 🟡 3 – Útil | Presentación de datos. No crítico para la integración. |
| 10 | Manejo de Excepciones (`catchError`, `throwError`) | 🔴 1 – Imprescindible | Los microservicios fallan. Manejar errores HTTP es obligatorio. |
| 11 | Reactividad con `resource` (Angular 19) | 🟠 2 – Muy Recomendado | API moderna para peticiones reactivas. Reemplaza `isLoading`/`isError` manual. |
| 12 | Tarea — Buscar Países con `resource` | 🟠 2 – Muy Recomendado | Práctica del patrón `resource` aplicado a búsqueda sobre una API. |
| 13 | `rxResource` — Observables directos | 🟠 2 – Muy Recomendado | Variante que trabaja con Observables. Aplica a servicios ya basados en RxJS. |
| 14 | Mostrar Estados al Usuario (loading/error/empty) | 🔴 1 – Imprescindible | Patrón completo de UX al esperar respuestas de microservicios. |
| 15 | Información de un País (`ActivatedRoute` + `rxResource`) | 🔴 1 – Imprescindible | GET `/resource/:id` con parámetro de ruta + rxResource. Patrón de detalle. |
| 16 | Detalles del País (`Location.back()`, componente interno) | 🟠 2 – Muy Recomendado | Navegación hacia atrás + componente de detalle reutilizable. |
| 17 | Resolución de la Tarea (Stats, `computed`, región) | 🟠 2 – Muy Recomendado | `computed()` para derivar datos de la respuesta API. Extender interfaz + mapper. |

---

## Sección 11 – CountryApp: Caché, Debounce y QueryParams

> Proyecto: CountryApp — optimización y preservación de estado con ActivatedRoute.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Continuación — Revisión del proyecto base | 🟡 3 – Útil | Contexto. |
| 05 | Debounce — Búsquedas automáticas sin saturar el servidor | 🔴 1 – Imprescindible | Patrón crítico: evitar disparar peticiones HTTP por cada tecla. `effect` + `setTimeout`. |
| 06 | Caché de Resultados de Búsqueda | 🔴 1 – Imprescindible | Evitar re-peticiones al mismo endpoint. Patrón fundamental en producción. |
| 07 | Tarea — Caché de `searchByCountry` | 🟠 2 – Muy Recomendado | Práctica: aplicar caché a otro endpoint del mismo microservicio. |
| 08 | Tarea — Países por Región | 🟠 2 – Muy Recomendado | Nuevo endpoint con parámetros de filtro. Patrón de búsqueda por categoría. |
| 09 | Resolución de la Tarea: Países por Región | 🟠 2 – Muy Recomendado | Solución completa. Ver junto con la tarea. |
| 10 | Preservar Resultados con `ActivatedRoute` y `linkedSignal` | 🔴 1 – Imprescindible | Mantener estado al navegar entre páginas que consumen la misma API. |
| 11 | Cambiar Query Parameters vía Código | 🟠 2 – Muy Recomendado | Modificar parámetros de búsqueda programáticamente → peticiones filtradas a APIs. |
| 12 | Validar Parámetros de Query | 🟠 2 – Muy Recomendado | Validar parámetros antes de enviarlos al microservicio. Evita peticiones inválidas. |

---

## Sección 12 – Pipes de Angular

> Proyecto: PipesApp — todos los pipes built-in de Angular.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a los Pipes de Angular | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Inicio de Proyecto | 🟡 3 – Útil | Scaffolding. |
| 05 | Lectura de Rutas Dinámicamente | 🟡 3 – Útil | Leer parámetros de ruta. Útil para llamadas a APIs con ID dinámico. |
| 06 | UpperCase, LowerCase, TitleCase Pipes | ⚪ 4 – Opcional | Formateo de texto. Sin relación con microservicios. |
| 07 | Decimal, Percent, Currency Pipes | 🟡 3 – Útil | Formatear datos numéricos recibidos de APIs (precios, porcentajes). |
| 08 | Date Pipe | 🟡 3 – Útil | Formatear fechas de respuestas de APIs. |
| 09 | Cambiar Idiomas (locale) | ⚪ 4 – Opcional | Internacionalización. No relacionado con microservicios. |
| 10 | Cambiar Locale Dinámicamente | ⚪ 4 – Opcional | Internacionalización avanzada. |
| 11 | Content Projection | 🟡 3 – Útil | Componentes reutilizables contenedores. Útil en general. |
| 12 | I18nSelectPipe | ⚪ 4 – Opcional | Internacionalización. |
| 13 | I18nPluralPipe | ⚪ 4 – Opcional | Internacionalización. |
| 14 | SlicePipe | 🟡 3 – Útil | Paginar/recortar listas recibidas de APIs en el template. |
| 15 | JsonPipe | 🟠 2 – Muy Recomendado | Depurar respuestas de microservicios directamente en el template. |
| 16 | KeyValuePipe | 🟡 3 – Útil | Iterar objetos de respuestas API en el template. |
| 17 | AsyncPipe (con Promesas) | 🔴 1 – Imprescindible | Suscripción automática en template. Evita memory leaks con Observables HTTP. |
| 18 | AsyncPipe con Observables | 🔴 1 – Imprescindible | Aplicar AsyncPipe directamente a Observables de `HttpClient`. Patrón muy común. |

---

## Sección 13 – Pipes Personalizados

> Proyecto: tabla de héroes con pipes de transformación personalizados.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a los Pipes Personalizados | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Continuación del Proyecto | ⚪ 4 – Opcional | Contexto. |
| 05 | Pipe Personalizado: ToggleCase | 🟡 3 – Útil | Entender cómo crear un pipe. El patrón aplica para transformar datos de APIs. |
| 06 | Preparación del Proyecto (tabla de héroes) | ⚪ 4 – Opcional | Setup de demo. |
| 07 | CanFlyPipe y HeroColorPipe | 🟡 3 – Útil | Transformar propiedades booleanas de respuestas API en texto/color. |
| 08 | HeroTextColorPipe | 🟡 3 – Útil | Similar al anterior. |
| 09 | HeroSortByPipe | 🟠 2 – Muy Recomendado | Ordenar listas recibidas de APIs directamente en el template. |
| 10 | HeroFilterPipe | 🟠 2 – Muy Recomendado | Filtrar localmente listas recibidas de microservicios sin llamada adicional. |

---

## Sección 14 – Formularios Reactivos (Parte 1)

> Proyecto: FormulariosApp — FormGroup, FormControl, validaciones.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a los Formularios Reactivos | 🟠 2 – Muy Recomendado | Los reactive forms son el patrón para construir payloads de POST/PUT a microservicios. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Inicio de la Aplicación | 🟡 3 – Útil | Scaffolding. |
| 05 | Rutas Padre y Template HTML | 🟡 3 – Útil | Estructura de rutas del módulo de formularios. |
| 06 | FormGroup y FormControl | 🔴 1 – Imprescindible | Estructura base de un formulario que enviará datos a un microservicio (POST/PUT). |
| 07 | FormBuilder | 🔴 1 – Imprescindible | Forma concisa de crear formularios complejos para payloads de APIs. |
| 08 | Validaciones de Campos Incluidas | 🟠 2 – Muy Recomendado | Validar antes de enviar al microservicio. Evita peticiones con datos inválidos. |
| 09 | Mostrar Errores en Pantalla | 🟠 2 – Muy Recomendado | Feedback al usuario antes de la petición HTTP. |
| 10 | Mejorar Reutilización y UX | 🟡 3 – Útil | UX de formularios. Útil en general. |
| 11 | Reutilización de Lógica entre Formularios | 🟡 3 – Útil | Compartir validadores entre formularios. |
| 12 | Formularios Dinámicos con FormArray | 🟠 2 – Muy Recomendado | Enviar arrays de objetos a endpoints que aceptan listas (ej: items de una orden). |
| 13 | Mostrar Errores en Formulario Dinámico | 🟡 3 – Útil | UX. Ver si hay tiempo. |
| 14 | Agregar y Eliminar Controles de Formulario | 🟡 3 – Útil | Formularios variables. Útil para payloads dinámicos. |
| 15 | Múltiples Eventos desde el Mismo Campo | 🟡 3 – Útil | Reaccionar a cambios de formulario antes de enviar. |

---

## Sección 15 – Formularios Reactivos (Parte 2)

> Proyecto: continuación FormulariosApp — validadores personalizados y formularios avanzados.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | 🟠 2 – Muy Recomendado | Validadores personalizados para lógica de negocio antes de enviar al microservicio. |
| 03 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Inicio de la Aplicación | 🟡 3 – Útil | Scaffolding. |
| 05 | Rutas Padre y Template HTML | 🟡 3 – Útil | Estructura. |
| 06 | FormGroup y FormControl | 🔴 1 – Imprescindible | Refuerzo del patrón de formularios para enviar a APIs. |
| 07 | FormBuilder | 🔴 1 – Imprescindible | Refuerzo. |
| 08 | Validaciones de Campos Incluidas | 🟠 2 – Muy Recomendado | Validar datos antes de la petición POST/PUT. |
| 09 | Mostrar Errores en Pantalla | 🟠 2 – Muy Recomendado | UX de errores de validación. |
| 10 | Mejorar Reutilización y UX | 🟡 3 – Útil | Reutilización de lógica de validación. |
| 11 | Reutilización de Lógica | 🟡 3 – Útil | DRY en validadores. |
| 12 | FormArray Dinámico | 🟠 2 – Muy Recomendado | Arrays de objetos para payloads complejos. |
| 13 | Mostrar Errores en Formulario Dinámico | 🟡 3 – Útil | UX. |
| 14 | Agregar y Eliminar Controles | 🟡 3 – Útil | Payloads variables. |
| 15 | Múltiples Eventos desde el Mismo Campo | 🟡 3 – Útil | Reactividad de formulario. |

---

## Sección 16 – Ciclo de Vida de Componentes

> Proyecto: LifeCycleApp — hooks del ciclo de vida y Zoneless Angular.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a la Sección 16 | ⚪ 4 – Opcional | Presentación. |
| 02 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Inicio de Proyecto: LifeCycle | 🟡 3 – Útil | Scaffolding. |
| 05 | Ciclo de Vida de los Componentes | 🔴 1 – Imprescindible | `ngOnInit` es donde se llaman los servicios HTTP. Orden exacto de ejecución. |
| 06 | Ciclo de Vida: Segunda Parte (desmontaje) | 🟠 2 – Muy Recomendado | `ngOnDestroy` para cancelar suscripciones a Observables HTTP. Evita memory leaks. |
| 07 | Zoneless Angular | 🟠 2 – Muy Recomendado | Entender el modelo de detección de cambios con señales y APIs reactivas. |
| 08 | OnChanges | 🟠 2 – Muy Recomendado | Reaccionar cuando un input que contiene datos de una API cambia su valor. |

---

## Sección 17 – MapsApp: Mapbox, Variables de Entorno y Deploy

> Proyecto: aplicación de mapas con Mapbox GL. **Dominio muy específico.**

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a la Sección 17 | ⚪ 4 – Opcional | Presentación. |
| 02 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Inicio de Aplicación: MapsApp | ⚪ 4 – Opcional | Dominio específico de mapas. |
| 05 | Título en el Navbar: Observable y Señal | 🟠 2 – Muy Recomendado | Patrón: `router.events` → Observable → `toSignal`. Aplica a cualquier app. |
| 06 | Variables de Entorno (.env) y Mapbox Key | 🔴 1 – Imprescindible | Gestión segura de credenciales y URLs de microservicios por ambiente. |
| 07 | Crear Environments mediante un Script Node.js | 🟠 2 – Muy Recomendado | Automatizar la generación de `environment.ts` desde variables de entorno del SO. |
| 08 | Mapa a Pantalla Completa | ⚪ 4 – Opcional | Específico de Mapbox. |
| 09 | Controlar el Mapa: Zoom | ⚪ 4 – Opcional | Específico de Mapbox. |
| 10 | Obtener la Posición Central | ⚪ 4 – Opcional | Específico de Mapbox. |
| 11 | Controles Propios de Mapbox | ⚪ 4 – Opcional | Específico de Mapbox. |
| 12 | Marcadores en el Mapa | ⚪ 4 – Opcional | Específico de Mapbox. |
| 13 | Marcadores Dinámicos | ⚪ 4 – Opcional | Específico de Mapbox. |
| 14 | Mostrar Listado de Marcadores | ⚪ 4 – Opcional | Específico de Mapbox. |
| 15 | Eliminar Marcadores | ⚪ 4 – Opcional | Específico de Mapbox. |
| 16 | Varios Mapas en Pantalla | ⚪ 4 – Opcional | Específico de Mapbox. |
| 17 | Solución de la Tarea — MiniMap | ⚪ 4 – Opcional | Específico de Mapbox. |
| 18 | Tailwind — Responsive Design | 🟡 3 – Útil | Responsive CSS. Útil en general pero no específico de microservicios. |
| 19 | Construir y Desplegar | 🟡 3 – Útil | Build y deploy de la app que consume microservicios. |

---

## Sección 18 – TesloShop: Backend Real, Listado de Productos

> Proyecto: TesloShop (e-commerce) — primera conexión con backend NestJS propio.
> **Primera sección con backend real en Docker.**

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a la Sección 18 | ⚪ 4 – Opcional | Presentación. |
| 02 | Demostración del Proyecto TesloShop | 🟠 2 – Muy Recomendado | Ver el alcance completo del proyecto real antes de empezar. |
| 04 | Inicio de Proyecto — TesloShop | 🟡 3 – Útil | Scaffolding del proyecto. |
| 05 | Páginas y Rutas | 🟠 2 – Muy Recomendado | Estructura de rutas por dominio (products, auth, admin). |
| 06 | Fuentes Personalizadas — Navbar | ⚪ 4 – Opcional | UI/UX visual. Sin relación con microservicios. |
| 07 | Tarjetas de Producto y Animación FadeIn | ⚪ 4 – Opcional | UI/UX visual. |
| 08 | TypeScript — Path Alias | 🟠 2 – Muy Recomendado | Alias de importación para organizar un proyecto multi-servicio. |
| 09 | Levantar Backend — TesloShop (Docker + NestJS) | 🔴 1 – Imprescindible | Levantar el microservicio backend con Docker. Base de todas las secciones siguientes. |
| 10 | Traer Listado de Productos (GET /products) | 🔴 1 – Imprescindible | Primera petición real al backend NestJS. `ProductsService` + `HttpClient`. |
| 11 | Variables de Entorno y Parametrización del API URL | 🔴 1 – Imprescindible | Separar la URL base del microservicio por ambiente (dev/staging/prod). |
| 12 | Mostrar Productos en Pantalla (tarea) | 🟠 2 – Muy Recomendado | Conectar datos del microservicio al template. |
| 13 | Solución — Mostrar Productos | 🟠 2 – Muy Recomendado | Solución completa. Ver junto con la tarea. |
| 14 | ProductImage Pipe — Pipe Personalizado | 🟠 2 – Muy Recomendado | Transformar URLs de imágenes del microservicio. Patrón de normalización de respuestas. |
| 15 | Pantalla de Producto (GET /products/:id) | 🔴 1 – Imprescindible | Detalle de recurso. Parámetro dinámico + petición al microservicio. |
| 16 | Carrusel de Imágenes | 🟡 3 – Útil | UI de galería. El patrón de componente separado sí aplica. |
| 17 | Página de Productos por Género (queryParams) | 🔴 1 – Imprescindible | Filtrar listas del microservicio con `HttpParams`. Patrón de búsqueda/filtrado. |

---

## Sección 19 – TesloShop: Paginación y Caché

> Proyecto: TesloShop — paginación con RxResource y caché de respuestas.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción | ⚪ 4 – Opcional | Presentación. |
| 02 | Demostración | ⚪ 4 – Opcional | Preview. |
| 04 | Continuación (levantar Docker) | 🟡 3 – Útil | Setup del entorno. |
| 05 | Paginación Local (componente) | 🔴 1 – Imprescindible | Componente de paginación reutilizable para cualquier listado de microservicio. |
| 06 | Paginación Local — Funcionalidad | 🔴 1 – Imprescindible | Lógica de páginas: `page`, `limit`, `totalItems`. Patrón estándar en APIs REST. |
| 07 | Paginación con RxResource (URL controla los datos) | 🔴 1 – Imprescindible | El URL maneja el estado de paginación → petición reactiva al microservicio. |
| 08 | Servicio de Paginación (DRY) | 🔴 1 – Imprescindible | Centralizar lógica de paginación para reutilizar en múltiples microservicios. |
| 09 | Caché de Productos (`Map<page, products[]>`) | 🔴 1 – Imprescindible | Evitar re-peticiones al microservicio al volver a una página visitada. |
| 10 | Caché de Producto Individual | 🔴 1 – Imprescindible | Misma estrategia para el detalle. Evitar GET repetido al mismo endpoint. |

---

## Sección 20 – TesloShop: Autenticación, Interceptores y Guards

> Proyecto: TesloShop — login, JWT, interceptores HTTP y guards de rutas.
> **Sección más importante del curso para microservicios de autenticación.**

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción (autenticación vs. autorización) | 🔴 1 – Imprescindible | Distinguir estos conceptos es fundamental en arquitecturas de microservicios. |
| 02 | Demostración | 🟠 2 – Muy Recomendado | Ver el flujo completo antes de implementar. |
| 04 | Continuación (levantar backend) | 🟡 3 – Útil | Setup. |
| 05 | Rutas y Páginas de Autenticación | 🟠 2 – Muy Recomendado | Módulo de auth separado del resto de la app. Patrón de feature aislado. |
| 06 | Formulario Reactivo de Autenticación | 🔴 1 – Imprescindible | Formulario de login que envía credenciales al microservicio de auth. |
| 07 | AuthService — Controlar Autenticación (POST /auth/login) | 🔴 1 – Imprescindible | El servicio de autenticación es el más crítico en una arquitectura de microservicios. |
| 08 | AuthService — Parte 2 (`AuthResponse`, guardar token) | 🔴 1 – Imprescindible | Almacenar el JWT recibido del microservicio de auth. |
| 09 | Manejo de Excepciones (limpieza de estado en error) | 🔴 1 – Imprescindible | Limpiar estado al recibir 401/403 del microservicio. |
| 10 | Revisar Autenticación Previa (check-token al iniciar) | 🔴 1 – Imprescindible | Verificar JWT existente contra el microservicio al recargar la app. |
| 11 | Refactorización y Principio DRY | 🟠 2 – Muy Recomendado | Evitar código duplicado en el servicio de auth. |
| 12 | Mostrar Usuario Autenticado y Cerrar Sesión | 🟠 2 – Muy Recomendado | Mostrar datos del JWT y limpiar el estado al hacer logout. |
| 13 | Interceptores en Angular — ¿Qué es un Interceptor? | 🔴 1 – Imprescindible | Concepto central: middleware HTTP que actúa en todas las peticiones a microservicios. |
| 14 | Auth Interceptor (adjuntar Bearer Token) | 🔴 1 – Imprescindible | Inyectar `Authorization: Bearer <token>` automáticamente en cada petición. |
| 15 | Guards — `notAuthenticatedGuard` | 🔴 1 – Imprescindible | Proteger rutas verificando el estado de autenticación con el microservicio. |
| 16 | Tarea — Pantalla de Registro (POST /auth/register) | 🔴 1 – Imprescindible | Registro de usuario: petición POST con payload al microservicio de auth. |

---

## Sección 21 – TesloShop: Panel Administrativo (CRUD Completo)

> Proyecto: TesloShop — panel admin con autorización, CRUD de productos y caché.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción (autenticación vs. autorización) | 🔴 1 – Imprescindible | Distinción clave para proteger endpoints de microservicios por rol. |
| 02 | Demostración | 🟠 2 – Muy Recomendado | Ver el CRUD completo con el microservicio. |
| 04 | Continuación | 🟡 3 – Útil | Setup. |
| 05 | Diseño del Panel Administrativo | ⚪ 4 – Opcional | UI/UX del layout. |
| 06 | Autorización — `IsAdminGuard` (rol en JWT) | 🔴 1 – Imprescindible | Guard que verifica el rol dentro del token JWT. Protección por rol de microservicio. |
| 07 | Listado de Productos (admin) | 🟠 2 – Muy Recomendado | GET /products con credenciales de admin. |
| 08 | Mostrar Productos Paginados | 🔴 1 – Imprescindible | Conectar componente de paginación con el microservicio. Patrón completo. |
| 09 | Página de Producto por ID (GET /products/:id) | 🔴 1 – Imprescindible | Carga del recurso para edición. GET por ID con token. |
| 10 | Estructura del Formulario de Producto | 🟠 2 – Muy Recomendado | Organizar el formulario que construye el payload para PATCH/POST. |
| 11 | Formulario de Producto | 🔴 1 – Imprescindible | Formulario reactivo que construye el payload para actualizar/crear en el microservicio. |
| 12 | Botones de Selección (género) | 🟡 3 – Útil | UI de selección. El patrón de valor del formulario sí aplica al payload. |
| 13 | Mostrar Errores del Formulario | 🟠 2 – Muy Recomendado | Mostrar errores de validación antes de la petición al microservicio. |
| 14 | Preparar la Data para Actualizar (payload ≠ modelo) | 🔴 1 – Imprescindible | Transformar el modelo de la app al formato que espera el endpoint PATCH. |
| 15 | Actualizar Producto (PATCH /products/:id) | 🔴 1 – Imprescindible | Petición PATCH con token de autorización. CRUD completo. |
| 16 | Actualizar Caché tras Modificación | 🔴 1 – Imprescindible | Invalidar/actualizar caché local al modificar un recurso en el microservicio. |
| 17 | Crear Producto (POST /products) | 🔴 1 – Imprescindible | Crear recurso en el microservicio. Diferencia entre crear y actualizar. |
| 18 | Mejorar Experiencia de Usuario | 🟡 3 – Útil | Estados de carga y feedback post-petición. |

---

## Sección 22 – TesloShop: Upload de Imágenes y Deploy

> Proyecto: TesloShop — subir archivos al microservicio y desplegar en la nube.

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción (carga de imágenes) | 🟠 2 – Muy Recomendado | Subir archivos a microservicios es un patrón común (media, documentos). |
| 02 | Demostración del flujo de imágenes | 🟠 2 – Muy Recomendado | Ver el flujo completo de upload antes de implementar. |
| 04 | Continuación | 🟡 3 – Útil | Setup. |
| 05 | Seleccionar Imágenes y Mostrarlas (preview) | 🟡 3 – Útil | UI de selección antes del upload. No específico de la petición HTTP. |
| 06 | Solución — Imágenes Temporales (señal computed) | 🟡 3 – Útil | Señal computada para combinar imágenes locales con las del servidor. |
| 07 | Swiper — Dot Fix | ⚪ 4 – Opcional | Fix de UI de carrusel. Sin relación con microservicios. |
| 08 | Subir Imágenes — Servicio (`FormData` + `multipart`) | 🔴 1 – Imprescindible | `POST` con `FormData`. Patrón para microservicios de archivos/media. |
| 09 | Actualizar Imágenes del Producto (coordinar async) | 🔴 1 – Imprescindible | Coordinar múltiples Observables: primero subir imágenes, luego actualizar el producto. |
| 10 | Plan de Despliegue (3 piezas: DB, backend, frontend) | 🟠 2 – Muy Recomendado | Entender la arquitectura completa del sistema de microservicios en producción. |
| 11 | Aprovisionar Base de Datos (Railway/Render) | 🟠 2 – Muy Recomendado | Desplegar la capa de persistencia del microservicio backend. |
| 12 | Desplegar Backend — GitHub — Render | 🔴 1 – Imprescindible | Tener el microservicio backend accesible en la nube para conectar el frontend. |
| 13 | Preparar Aplicación de Angular (build config) | 🟠 2 – Muy Recomendado | Configurar la URL del microservicio en el build de producción. |
| 14 | Desplegar Aplicación de Angular (Vercel/Netlify) | 🟠 2 – Muy Recomendado | Desplegar el frontend que consume el microservicio. Completar el ciclo. |

---

## Sección 23 – MyDashboard: Angular 17+, Control Flow y Signals Avanzadas

> Proyecto: MyDashboard — características modernas de Angular 17+ con Signals.
> **Sección de buenas prácticas y patrones modernos.**

| # | Lección | Prioridad | Justificación |
|---|---------|-----------|---------------|
| 01 | Introducción a la Sección | ⚪ 4 – Opcional | Presentación. |
| 03 | Demostración de la Sección | ⚪ 4 – Opcional | Preview. |
| 05 | Inicio de Proyecto — MyDashboard | 🟡 3 – Útil | Scaffolding. |
| 06 | Cambios en la Estructura del Proyecto | 🟡 3 – Útil | Nuevas convenciones de Angular 17+. Útil para proyectos modernos. |
| 07 | Tailwind en Angular | 🟡 3 – Útil | Instalación de Tailwind. No específico de microservicios. |
| 08 | Creación de Archivos y Directorios | 🟡 3 – Útil | Scaffolding de la estructura del proyecto. |
| 09 | Configuración de Rutas | 🟠 2 – Muy Recomendado | Rutas modernas con lazy load en Angular 17+. |
| 10 | Configuración del Dashboard con Tailwind | ⚪ 4 – Opcional | UI/UX del layout. |
| 11 | @for, @if — Nueva Sintaxis | 🔴 1 – Imprescindible | Sintaxis moderna obligatoria en Angular 17+. Renderizar listas y estados de APIs. |
| 12 | Configurar Alias de Importaciones en TypeScript | 🟠 2 – Muy Recomendado | Organizar imports de servicios de microservicios con alias claros. |
| 13 | Control Flow — @if | 🔴 1 – Imprescindible | Mostrar/ocultar según estado de petición HTTP (loading, error, data). |
| 14 | Control Flow — @switch | 🟠 2 – Muy Recomendado | Manejar múltiples estados de respuesta de un microservicio. |
| 15 | Control Flow — @for | 🔴 1 – Imprescindible | Iterar listas de datos recibidos de APIs con `track`. |
| 16 | Required Input | 🟠 2 – Muy Recomendado | Inputs obligatorios: garantizar que los datos de la API siempre lleguen al componente. |
| 17 | ChangeDetection — OnPush | 🟠 2 – Muy Recomendado | Optimizar detección de cambios con datos inmutables de APIs. |
| 18 | Defer Blocks | 🟠 2 – Muy Recomendado | Carga diferida de componentes pesados que consumen datos de microservicios. |
| 19 | Defer Triggers | 🟠 2 – Muy Recomendado | Controlar cuándo se activa la carga diferida (idle, viewport, interaction). |
| 20 | Defer Triggers — Interacciones | 🟡 3 – Útil | Triggers avanzados. Ver si hay tiempo. |
| 21 | Defer Triggers — Interacciones — Parte 2 | 🟡 3 – Útil | Continuación de triggers avanzados. |
| 22 | ViewTransitions API | ⚪ 4 – Opcional | Animaciones de navegación. Sin relación con microservicios. |
| 23 | Hero Animation — View Transitions | ⚪ 4 – Opcional | Animaciones de navegación. Sin relación con microservicios. |
| 24 | Servicios con Señales (`#state` privado) | 🔴 1 – Imprescindible | Patrón moderno de servicio con estado encapsulado. Aplicable a cualquier microservicio. |
| 25 | Peticiones HTTP — `importProvidersFrom` | 🔴 1 – Imprescindible | Proveer `HttpClient` en apps standalone. Base para consumir cualquier microservicio. |
| 26 | De Observable a Señal — `toSignal` | 🔴 1 – Imprescindible | Convertir respuestas de `HttpClient` (Observable) en señales. Patrón moderno clave. |
| 27 | Tarea — Computed Signals | 🟠 2 – Muy Recomendado | Derivar datos calculados (fullName, etc.) desde la respuesta del microservicio. |

---

## Resumen Ejecutivo — Ruta de Aprendizaje Sugerida

### Ruta Mínima Viable (solo Prioridad 1 — Imprescindible)

Las secciones y lecciones marcadas como **Imprescindibles** forman una ruta cohesiva que cubre el 100% de los patrones necesarios para consumir microservicios:

1. **S3** — Interfaces, genéricos, decoradores, constructor (base TypeScript para APIs)
2. **S4** — Estructura Angular, señales, `computed()` (base Angular)
3. **S5** — Servicios, `@for`, `@if` (comunicación y renderizado)
4. **S6** — Lazy loading, environments (arquitectura por feature/dominio)
5. **S7** — HttpClient, petición GET, operadores RxJS, `toSignal` (núcleo del consumo)
6. **S9** — Rutas por dominio (estructura escalable)
7. **S10** — Integración completa REST Countries: mapper, catchError, resource, estados (primer proyecto real)
8. **S11** — Debounce, caché, preservar estado (optimización)
9. **S12** — AsyncPipe (suscripción automática a Observables HTTP)
10. **S14/S15** — FormGroup, FormBuilder (construir payloads para POST/PUT)
11. **S16** — ngOnInit, ngOnDestroy (dónde llamar y cancelar servicios HTTP)
12. **S17** — Variables de entorno (gestión de URLs de microservicios)
13. **S18** — Backend real con Docker, GET /products, variables de entorno, detalle por ID, filtros
14. **S19** — Paginación completa, caché de listado e individual
15. **S20** — Login, JWT, AuthService, Interceptor Bearer, Guards *(la sección más importante para auth)*
16. **S21** — CRUD completo con autorización, PATCH/POST, invalidación de caché
17. **S22** — FormData multipart, coordinar Observables, deploy del microservicio y del frontend
18. **S23** — Sintaxis moderna (`@for`/`@if`), servicios con señales, `provideHttpClient`, `toSignal`

### Secciones que se pueden omitir sin impacto

- **S1** (lecciones 01, 02): motivacionales
- **S2** (lección 03): mitos y opiniones
- **S8**: el instructor la marca como opcional
- **S12** (lecciones 06, 09, 10, 12, 13): pipes de formateo e i18n
- **S13** completa: pipes personalizados de héroes (dominio de ejemplo)
- **S17** (lecciones 08–17): todo lo específico de Mapbox
- **S23** (lecciones 22, 23): Hero Animation y ViewTransitions
