# Creación de archivos y directorios

## ¿Qué se aprende?

Esta lección crea de una sola vez todos los componentes y carpetas que se van a necesitar a lo largo de la sección. Se explica la estructura de directorios del proyecto (dashboard, pages, interfaces, services, shared), cómo generar componentes con la extensión "Angular Schematics" de VS Code o con el Angular CLI, qué opciones se seleccionan al crearlos (`skip-selector`, `inlineStyle`, `skipTests`, `standalone`), y qué es el `CommonModule` y cuándo se necesita.

---

## Puntos clave

**Por qué crear todo de una vez**

El instructor prefiere crear todos los archivos y carpetas al inicio de la sección para que las lecciones siguientes se enfoquen en el contenido temático sin interrupciones de configuración.

**Estructura de directorios**

Dentro de `src/app` se crea la siguiente estructura:

```
src/app/
├── dashboard/
│   ├── dashboard.component.ts
│   ├── dashboard.component.html
│   └── pages/
│       ├── change-detection/
│       ├── control-flow/
│       ├── defer-options/
│       ├── defer-views/
│       ├── user/
│       ├── users/
│       └── view-transition/
├── interfaces/
├── services/
└── shared/
    ├── heavy-loaders/
    │   ├── heavy-loaders-slow.component.ts  (luego renombrado a slow)
    │   └── heavy-loaders-fast.component.ts
    ├── side-menu/
    └── title/
```

- `dashboard/` — carpeta raíz que contiene el layout principal de la aplicación y sus páginas hijas.
- `dashboard/pages/` — cada subcarpeta contiene un componente que es una página del dashboard.
- `interfaces/` — carpeta para las interfaces TypeScript (vacía por ahora).
- `services/` — carpeta para los servicios (se crearán cuando sean necesarios).
- `shared/` — componentes reutilizables a lo largo de la aplicación.

**Cómo generar componentes con Angular Schematics (extensión VS Code)**

Con la extensión "Angular Schematics" instalada en VS Code, se puede hacer clic derecho en una carpeta y seleccionar "Nuevo componente". El flujo de opciones que se elige para los componentes de páginas es:

1. Nombre del componente (ej. `dashboard`).
2. `--skip-selector` — los componentes de ruta no necesitan selector HTML porque no se usan como etiquetas dentro de otros templates; solo se acceden por URL.
3. "Add more options":
   - `inlineStyle` — los estilos van dentro del mismo archivo TypeScript en lugar de en un archivo `.css` separado.
   - `skipTests` — no genera el archivo `.spec.ts` de tests.
4. El `standalone: true` ya viene por defecto; no hay que seleccionarlo.

El comando equivalente en la terminal sería:

```bash
ng generate component dashboard/dashboard --skip-selector --inline-style --skip-tests
```

**Exportación por defecto en componentes de ruta**

Para que `loadComponent` en el sistema de rutas funcione sin necesitar el `.then(m => m.NombreComponent)`, el componente debe ser la exportación por defecto del archivo:

```typescript
export default class DashboardComponent { ... }
```

Esto simplifica la configuración de rutas y hace el código más limpio.

**Mover archivos sin romper nada (ventaja de standalone)**

Si se genera un componente en el lugar equivocado, en la arquitectura de módulos habría que actualizar las declaraciones del módulo. Con `standalone components` no hay ningún módulo que registre el componente, así que simplemente se arrastran los archivos a la carpeta correcta y listo: no hay nada que actualizar.

**El `CommonModule` y cuándo usarlo**

Al generar componentes, el Angular Schematics añade automáticamente `CommonModule` en el arreglo `imports` del componente. El `CommonModule` provee directivas como `ngIf`, `ngFor`, `ngSwitch`, `ngClass` y otras. Se puede quitar si no se va a usar ninguna de esas directivas. Angular es eficiente con los módulos: si el mismo `CommonModule` se importa en varios componentes, Angular no lo carga varias veces; reutiliza la instancia ya cargada en memoria.

**Componentes en `shared/heavy-loaders`**

Se crean dos componentes para simular cargas pesadas:

- `heavy-loaders-slow` — componente que simula una carga lenta; se usará para demostrar los Defer Views.
- `heavy-loaders-fast` — copia del anterior con las referencias cambiadas a "fast".

Estos componentes se crean manualmente o duplicando uno y ajustando el nombre. En su versión inicial contienen solo un `<h1>Hola Mundo</h1>`.

**`users-loader.component.ts` creado manualmente**

El instructor también muestra cómo crear un componente completamente a mano dentro de `shared/`, sin usar el CLI ni la extensión, usando un snippet personalizado. El componente mínimo tiene esta estructura:

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-loader',
  standalone: true,
  imports: [],
  template: `<h1>Hola Mundo</h1>`
})
export class UsersLoaderComponent { }
```

Esto demuestra que no hay ninguna obligación de usar el Angular CLI; los componentes son simplemente archivos TypeScript con el decorador `@Component`.

**Componentes `side-menu` y `title`**

Se generan en la carpeta `shared/` con las mismas opciones (`inlineStyle`, `skipTests`). Estos serán componentes reutilizables del layout del dashboard.

**Ventaja principal de standalone: crear sin registrar**

Con la arquitectura de módulos, cada nuevo componente debía declararse en un módulo. Con `standalone components` se crean libremente y solo se importan cuando se necesitan. El instructor lo resume así: "los vas creando y ya está; simplemente los vas importando conforme los vas necesitando".

---

## Ejemplo sencillo

Crear componentes standalone es como escribir funciones en un archivo de utilidades: las escribes, las exportas, y las importas solo donde las necesitas. No tienes que registrarlas en ningún registro central para que existan.

---

## Palabras clave y elementos importantes

- **Angular Schematics (extensión VS Code)** — herramienta visual para generar componentes con opciones; equivalente a `ng generate component` en la terminal
- `--skip-selector` — bandera del Angular CLI; genera el componente sin selector HTML; útil para componentes de ruta que no se usan como etiquetas
- `--inline-style` — bandera del Angular CLI; los estilos van en el mismo archivo `.ts` en vez de en un `.css` separado
- `--skip-tests` — bandera del Angular CLI; no genera el archivo `.spec.ts` de tests
- `standalone: true` — propiedad por defecto en Angular 17; hace el componente autónomo; no necesita declararse en ningún módulo
- `export default class NombreComponent` — exportación por defecto necesaria para usar `loadComponent` en rutas sin el `.then(m => m.Nombre)`
- `CommonModule` — módulo que provee `ngIf`, `ngFor`, `ngSwitch`, `ngClass` y otras directivas; se añade automáticamente al generar componentes pero puede eliminarse si no se usa
- `dashboard/pages/` — carpeta que contiene un componente por cada página del dashboard
- `shared/` — carpeta para componentes reutilizables a lo largo de la aplicación
- `heavy-loaders` — componentes de prueba que simulan carga pesada; se usarán para demostrar los Defer Views

---

## Resumen final

Esta lección crea toda la estructura de carpetas y componentes del proyecto de una sola vez para no interrumpir las lecciones temáticas posteriores. La estructura principal es: `dashboard/` con su layout y carpeta `pages/` (siete componentes de página), más `interfaces/`, `services/` y `shared/` (con `heavy-loaders`, `side-menu` y `title`). Todos los componentes son `standalone: true` por defecto y se generan con `--skip-selector --inline-style --skip-tests`. La ventaja de `standalone` es que los componentes se crean libremente sin necesidad de registrarlos en ningún módulo.
