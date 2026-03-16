# Defer Blocks

## ¿Qué se aprende?

Esta lección introduce los bloques diferidos (`@defer`) de Angular 17, descritos por el instructor como una de las características más innovadoras vistas en un framework en mucho tiempo. Se demuestra el problema real que resuelven — componentes pesados que bloquean la carga de la aplicación — y se muestra cómo envolver un componente en `@defer` para que su construcción no bloquee el hilo principal. También se introduce el bloque `@placeholder` para mostrar contenido transitorio mientras el componente carga.

---

## Puntos clave

**¿Qué son los Defer Blocks / Deferrable Views?**

Son una nueva característica del sistema de plantillas de Angular 17 que permite controlar **cuándo y cómo** se carga un componente. En lugar de construir todos los componentes de una ruta de forma inmediata y síncrona, se puede indicar que un componente se construya de forma diferida (lazy), y bajo qué condición debe hacerlo.

Se les llama de varias formas: *defer blocks*, *defer views*, *deferrable views*. Todos se refieren a la misma funcionalidad.

**El problema: componentes bloqueantes**

Para demostrar el beneficio, se crea un componente llamado `HeavyLoadersSlow` que simula un proceso muy costoso en el constructor mediante un bucle `while` que bloquea el hilo de JavaScript durante 3 segundos:

```typescript
constructor() {
  const start = Date.now();
  while (Date.now() - start < 3000) { }
  console.log('Cargado');
}
```

El instructor aclara repetidamente que esto **no debe hacerse en código real**; es solo una forma de simular una carga costosa para fines de demostración. En producción, una operación costosa se haría asíncrona con Promesas u Observables.

Sin ningún tratamiento, este componente hace que la aplicación quede completamente congelada durante 3 segundos al navegar a la página que lo contiene: no se puede hacer clic en nada, el contenido no aparece, todo queda en blanco.

**La solución: `@defer`**

Envolviendo el componente en el bloque `@defer` en el template:

```html
@defer {
  <app-heavy-loaders-slow cssClass="bg-blue-500" />
}
```

El componente ya no bloquea la carga inicial de la página. La aplicación entra, se renderiza normalmente y el componente pesado se construye de forma diferida en segundo plano (o bajo las condiciones que se configuren).

**El bloque `@placeholder`**

Mientras el componente diferido aún no se ha construido, se puede mostrar contenido transitorio con el bloque `@placeholder`:

```html
@defer {
  <app-heavy-loaders-slow cssClass="bg-blue-500" />
} @placeholder {
  <p>Cargando...</p>
}
```

Esto permite mostrar al usuario un indicador de que algo está por llegar, en lugar de un espacio en blanco. El instructor implementa un efecto "skeleton" usando clases de Tailwind: un bloque con gradiente y animación `animate-pulse` que visualmente simula el tamaño del componente que va a aparecer.

**Múltiples componentes diferidos en la misma página**

Se pueden añadir varios bloques `@defer` en la misma página. Angular los ejecuta de forma diferida uno tras otro (no en paralelo cuando el código es bloqueante). El orden de construcción puede variar.

**El input `cssClass` en `HeavyLoadersSlow`**

Para poder reutilizar el componente con diferentes colores de fondo, se añade un input requerido `cssClass: string` al `HeavyLoadersSlow`. El template del componente usa `ngClass` para aplicar la clase recibida junto con `w-full` y `h-[600px]`. Cada instancia del componente recibe un color diferente (`bg-blue-500`, `bg-green-500`, `bg-purple-500`).

**Por qué es importante: carga por viewport**

El instructor plantea una reflexión: si el usuario nunca hace scroll para ver un componente que está al fondo de la página, ¿por qué construirlo y gastar recursos? Con `@defer` y sus triggers (que se verán en las siguientes lecciones), se puede controlar que un componente solo se construya cuando el usuario realmente lo va a ver.

---

## Ejemplo sencillo

Un bloque `@defer` es como pedir comida a domicilio para un evento: no vas al restaurante a buscar todo desde el principio (lo que bloquearía todo lo demás). En su lugar, mandas pedir y mientras esperas (el `@placeholder`) sigues haciendo otras cosas. La comida llega cuando está lista sin haber paralizado el resto del evento.

---

## Palabras clave y elementos importantes

- `@defer { }` — nuevo bloque de Angular 17 que envuelve un componente para que se construya de forma diferida; el componente no bloquea la carga inicial de la página
- `@placeholder { }` — bloque opcional que se muestra mientras el componente diferido aún no se ha construido; se reemplaza por el componente real cuando este termina de construirse
- **Deferrable Views / Defer Views / Defer Blocks** — nombres equivalentes para la misma característica de Angular 17
- **Código bloqueante** — código que detiene el hilo principal de JavaScript mientras se ejecuta; el `while (Date.now() - start < 3000)` es un ejemplo artificial; en producción se usan Promesas u Observables
- **Skeleton** — patrón de UX que muestra un bloque animado del mismo tamaño que el contenido real mientras este carga; implementado aquí con clases Tailwind y `animate-pulse`
- `ngClass` — directiva de Angular para aplicar clases CSS condicionalmente o dinámicamente; usada aquí para combinar clases fijas (`w-full`, `h-[600px]`) con el valor del input `cssClass`
- **Lazy load a nivel de template** — el `@defer` extiende el concepto de lazy load (que antes solo se aplicaba a rutas con `loadComponent`) hasta el interior de los templates

---

## Resumen final

Los bloques `@defer` de Angular 17 permiten que componentes pesados no bloqueen la carga de la página envolviéndolos en `@defer { }`. Mientras el componente se construye en segundo plano, el bloque `@placeholder { }` muestra contenido transitorio al usuario (como un skeleton animado). En las siguientes lecciones se verá cómo controlar el momento exacto en que se dispara la carga diferida mediante *triggers* como `on viewport`, `on interaction`, `on hover` y otros.
