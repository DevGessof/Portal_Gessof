# Cambios en la estructura del proyecto

## ¿Qué se aprende?

Esta lección recorre los cambios más importantes en la estructura de archivos de un proyecto Angular 17 respecto a versiones anteriores. El cambio principal es la desaparición del `app.module.ts`: ya no existe un módulo raíz. En su lugar, la configuración global de la aplicación vive en `app.config.ts`. También se explica cómo funciona el bootstrap de la aplicación, qué significa que los componentes sean `standalone` por defecto, y por qué se genera automáticamente el archivo `app.routes.ts`.

---

## Puntos clave

**Los archivos de configuración de TypeScript no cambian**

Los archivos `tsconfig.json`, `tsconfig.app.json` y `tsconfig.spec.json` siguen siendo los mismos. El `tsconfig.json` es la configuración base y los otros dos se desprenden de él: uno para la aplicación y otro para los tests. En próximas lecciones se verá cómo configurar alias de rutas en el `tsconfig.json`.

**`angular.json` sigue igual**

El archivo `angular.json` es la configuración del proyecto Angular (estilos globales, assets, configuración de build, etc.). No ha cambiado de forma radical respecto a versiones anteriores.

**Desaparece `app.module.ts`**

Al abrir la carpeta `src/app`, lo primero que llama la atención es que ya no existe el archivo `app.module.ts`. El módulo raíz de la aplicación desapareció. En su lugar existe `app.config.ts`.

**`app.config.ts`: el nuevo lugar de configuración global**

Este archivo reemplaza al módulo raíz. Contiene la configuración de toda la aplicación y permite registrar proveedores globales. Por ejemplo, para usar `HttpClient` en servicios, antes se importaba `HttpClientModule` en el módulo raíz. Ahora se registra en `app.config.ts` mediante la función `provideHttpClient()`.

El `app.config.ts` también es el segundo argumento de la función `bootstrapApplication` en el `main.ts`:

```typescript
// main.ts
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
```

Esto hace el arranque de la aplicación más explícito y sencillo que antes.

**Componentes `standalone` por defecto**

En Angular 17 todos los componentes nuevos son `standalone: true` por defecto. Esto significa que cada componente es autónomo: no necesita ser declarado en ningún módulo para funcionar, simplemente se importa directamente donde se necesite. El instructor anticipa que en versiones 18, 19 o 20 de Angular el `standalone: true` posiblemente ni siquiera aparecerá explícitamente porque será la única opción.

**`app.routes.ts`: rutas generadas por defecto**

El proyecto nuevo incluye automáticamente el archivo `app.routes.ts` con el arreglo de rutas vacío. Esto es conveniente porque la gran mayoría de aplicaciones necesitan rutas. Si no se van a usar rutas, es más sencillo borrar el archivo que haber tenido que crearlo y configurarlo desde cero. Las rutas se registran en `app.config.ts` mediante `provideRouter(routes)`.

**`HttpClientModule` ya no se importa como módulo**

Con la nueva arquitectura sin módulo raíz, si se necesita `HttpClient` en un servicio con `providedIn: 'root'`, ya no se importa `HttpClientModule` en ningún módulo. En cambio, se usa la función `provideHttpClient()` directamente en el arreglo `providers` del `app.config.ts`. El instructor sigue recomendando usar el `HttpClient` de Angular en lugar del `fetch` nativo, aunque ambos son válidos.

---

## Ejemplo sencillo

El `app.config.ts` es como el panel de control centralizado del edificio (la aplicación): desde ahí se activan los servicios globales (agua, luz, internet) que todos los pisos (componentes) van a necesitar. Antes ese panel era el `app.module.ts`; ahora es el `app.config.ts`, que hace exactamente lo mismo pero de forma más simple y explícita.

---

## Palabras clave y elementos importantes

- `app.module.ts` — archivo que ya NO existe en Angular 17; fue reemplazado por `app.config.ts`
- `app.config.ts` — archivo de configuración global de la aplicación; reemplaza al módulo raíz; aquí se registran proveedores como `provideRouter` y `provideHttpClient`
- `bootstrapApplication(AppComponent, appConfig)` — nueva forma de arrancar la aplicación en `main.ts`; recibe el componente raíz y la configuración global
- `standalone: true` — propiedad del decorador `@Component`; en Angular 17 viene activada por defecto en todos los componentes; hace que el componente sea autónomo y no necesite ser declarado en ningún módulo
- `app.routes.ts` — archivo generado automáticamente con el arreglo de rutas; se registra en `app.config.ts` mediante `provideRouter(routes)`
- `provideRouter(routes)` — función que registra el sistema de rutas en la configuración global; reemplaza la importación de `RouterModule.forRoot()` en el módulo raíz
- `provideHttpClient()` — función que registra el `HttpClient` globalmente; reemplaza la importación de `HttpClientModule`
- `tsconfig.json` — archivo de configuración de TypeScript; no cambió; se usará más adelante para configurar alias de rutas

---

## Resumen final

El cambio más radical en Angular 17 es la desaparición del `app.module.ts`. En su lugar existe `app.config.ts`, que centraliza la configuración global (rutas, HttpClient, etc.) mediante funciones `provide*`. Todos los componentes son `standalone: true` por defecto, lo que los hace autónomos y elimina la necesidad de módulos de funcionalidad. El archivo `app.routes.ts` se genera automáticamente porque casi toda aplicación necesita rutas. En conjunto, la nueva estructura es más simple y explícita que la arquitectura de módulos anterior.
