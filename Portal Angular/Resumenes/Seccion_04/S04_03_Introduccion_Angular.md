# Seccion 4 - Leccion 03: Introduccion a Angular

---

## 1. Titulo de la leccion

**Que es Angular y cuales son sus piezas fundamentales**

---

## 2. Que se aprende en esta leccion

Se presenta Angular como framework, se explica para que sirve y se describen sus seis piezas fundamentales: componentes, rutas, directivas, servicios, modulos y pipes.

---

## 3. Puntos clave explicados

- **Que es Angular:** Es un framework creado por Google que permite crear aplicaciones web (SPA, SSR, SSG), moviles (con Ionic o NativeScript) y de escritorio (con Electron).
- **Framework vs libreria:** Angular es un framework porque trae todo lo necesario para crear una aplicacion completa: enrutamiento, reactividad, HTTP, formularios, directivas, etc. sin necesidad de dependencias externas.
- **Versionado sincronizado:** Cuando Angular lanza una nueva version, todos sus paquetes (core, router, HTTP, etc.) actualizan al mismo numero de version, garantizando compatibilidad entre ellos.
- **Componentes:** Piezas que representan partes de la interfaz. Tienen logica TypeScript, HTML y estilos opcionales.
- **Rutas:** Permiten navegar entre paginas (que son componentes a pantalla completa). Tambien controlan acceso y estrategias de renderizado.
- **Directivas:** Modifican el comportamiento de elementos HTML. Hay directivas de atributo, estructurales (como `@if`, `@for`) y de componente.
- **Servicios:** Encapsulan la logica de negocio y centralizan el acceso a datos. Son la pieza principal del gestor de estado en Angular.
- **Modulos:** Agrupan funcionalidades relacionadas. Con los standalone components, su uso se ha reducido pero siguen siendo parte del ecosistema.
- **Pipes:** Transforman datos de forma visual en el HTML sin modificar el valor real. Hay pipes puros (se recalculan cuando cambia el argumento) e impuros (se recalculan en cada ciclo de deteccion).

---

## 4. Ejemplo sencillo

```
Aplicacion Angular tipica:
- app.component.ts     → componente raiz
- app.routes.ts        → define las rutas
- hero.service.ts      → servicio con logica de negocio
- hero-page.component.ts → componente/pagina conectada a una ruta
- uppercase.pipe.ts    → pipe para transformar texto a mayusculas
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| SPA | Single Page Application; la aplicacion carga una sola vez y navega sin recargar |
| SSR | Server Side Rendering; la aplicacion se renderiza en el servidor |
| SSG | Static Site Generation; el contenido se genera estaticamente en tiempo de construccion |
| Componente | Pieza de UI con logica TypeScript, HTML y estilos opcionales |
| Servicio | Clase que encapsula logica de negocio y puede inyectarse en componentes |
| Pipe puro | Se recalcula solo cuando cambia el argumento de entrada |
| Pipe impuro | Se recalcula en cada ciclo de deteccion de cambios |
| Standalone component | Componente que es su propio modulo; es el estandar desde Angular v19 |
| `@if` / `@for` | Nuevo control flow de Angular; reemplazo moderno de `ngIf` y `ngFor` |

---

## 6. Resumen final en pocas palabras

Angular es un framework completo de Google con seis piezas fundamentales: componentes, rutas, directivas, servicios, modulos y pipes. Cada pieza tiene un rol especifico y juntas permiten construir aplicaciones web profesionales. Desde Angular 19, los standalone components son el estandar y los modulos se usan con menos frecuencia.
