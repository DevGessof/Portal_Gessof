# ViewTransitions API

## ¿Qué se aprende?

Esta lección implementa la View Transition API de Angular 17, que permite animar automáticamente las transiciones entre rutas con una sola línea de configuración. Se explica cómo activarla globalmente en `app.config.ts`, qué opciones ofrece, qué navegadores la soportan, y se prepara la estructura de dos componentes de página para demostrar en la siguiente lección cómo animar elementos compartidos entre rutas.

---

## Puntos clave

**¿Qué es la View Transition API?**

Es una API nativa del navegador web que permite animar la transición visual entre dos estados de la pantalla. Cuando el usuario navega de una ruta a otra, en lugar de que el contenido simplemente aparezca y desaparezca, el navegador puede hacer una animación de fundido (fade) u otras transiciones suaves.

En Angular 17 se integra de forma nativa con el router, lo que hace que activarla sea trivial.

**Cómo activarla: `withViewTransitions` en `app.config.ts`**

La configuración es global y se hace en `app.config.ts`, el archivo que reemplaza a `app.module.ts` en proyectos standalone. Se añade `withViewTransitions()` dentro de la llamada a `provideRouter`:

```typescript
// app.config.ts
import { provideRouter, withViewTransitions } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions()),
    provideHttpClient()
  ]
};
```

Con solo este cambio, Angular aplica automáticamente una animación de fundido entre todas las rutas de la aplicación.

**Opción `skipInitialTransition`**

Se puede pasar un objeto de opciones a `withViewTransitions()`:

```typescript
withViewTransitions({ skipInitialTransition: true })
```

Con `skipInitialTransition: true`, la primera vez que se carga la aplicación no hay animación (la página aparece directamente). Las navegaciones posteriores sí se animan. Esto es útil para evitar que la pantalla de inicio haga un fade innecesario al cargarse por primera vez.

**Opción `onViewTransitionCreated`**

También se puede recibir información sobre cada transición en curso:

```typescript
withViewTransitions({
  skipInitialTransition: true,
  onViewTransitionCreated: (transitionInfo) => {
    console.log({ transitionInfo });
  }
})
```

El objeto `transitionInfo` contiene datos sobre la transición: la ruta de origen, la ruta de destino, si la transición ya terminó, entre otros. Esto permite personalizar el comportamiento de la animación según de dónde viene y a dónde va el usuario.

**Soporte de navegadores (al momento de la grabación)**

El instructor menciona que la View Transition API no estaba soportada por todos los navegadores:

- **Sí:** Chrome, Edge, Opera, Samsung Internet, Chrome para Android.
- **No:** Safari, Firefox, Android WebView.

La recomendación es verificar el soporte actual en la documentación de la API. En navegadores que no la soportan, la navegación simplemente ocurre sin animación (degradación elegante).

**El Arc Browser**

El instructor usa Arc Browser, que está construido sobre Chromium, por lo que también soporta la API.

**Preparar dos componentes para la siguiente lección**

Para demostrar las animaciones de elementos compartidos entre rutas (similar al *Hero Animation* de Flutter), se crean dos componentes de página:

1. Se duplica el componente `view-transition` y se renombra a `view-transition1` y `view-transition2`.
2. Se actualiza `app.routes.ts` para añadir dos rutas hijas nuevas: una apuntando a `ViewTransition1Component` y otra a `ViewTransition2Component`.
3. Ambos componentes tienen el mismo template por ahora: un `<app-title>`, una sección con una imagen de `picsum.photos` y un `div` cuadrado de color azul. Se diferencian solo por el número ("1" o "2") visible en el template.

La imagen usa el atributo `srcSet` (en lugar de `src`) para permitir optimizaciones de carga. Se especifican `width` y `height` fijos en la imagen para evitar el *layout shift* (salto de contenido) que ocurre cuando una imagen carga y desplaza el texto que la rodea.

**La animación de elementos compartidos (Hero Animation)**

El instructor anticipa lo que se construirá en la siguiente lección: si el mismo elemento (imagen o div) está presente en dos rutas diferentes pero en posiciones distintas, la View Transition API puede animar automáticamente el movimiento de ese elemento de una posición a la otra al navegar entre rutas. Esto es lo que Flutter llama *Hero Animation*. La preparación de los dos componentes idénticos con los mismos elementos visuales es el punto de partida para esa demostración.

---

## Ejemplo sencillo

La View Transition API es como el efecto de las presentaciones de PowerPoint donde una diapositiva no simplemente aparece sino que hace un fundido o deslizamiento desde la anterior. Con `withViewTransitions()`, Angular le dice al navegador "hazlo bonito" automáticamente al cambiar de una ruta a otra, sin necesidad de configurar animaciones manualmente.

---

## Palabras clave y elementos importantes

- **View Transition API** — API nativa del navegador que anima transiciones entre estados de la pantalla; integrada en Angular 17 a través del router
- `withViewTransitions()` — función de `@angular/router` que activa la View Transition API para todas las navegaciones de la aplicación; se pasa como argumento a `provideRouter` en `app.config.ts`
- `app.config.ts` — archivo de configuración global de la aplicación en proyectos Angular standalone; reemplaza a `app.module.ts`; aquí se registran providers globales como `provideRouter` y `provideHttpClient`
- `skipInitialTransition: true` — opción de `withViewTransitions()` que desactiva la animación de la primera carga de la aplicación
- `onViewTransitionCreated` — opción de `withViewTransitions()` que recibe un callback con información sobre cada transición en curso; útil para personalizar animaciones según la ruta de origen y destino
- **Degradación elegante** — comportamiento en el que una característica no soportada simplemente no se aplica sin romper la funcionalidad; en navegadores sin soporte, la navegación ocurre sin animación
- `srcSet` — atributo de la etiqueta `<img>` que permite al navegador elegir la imagen más apropiada según el dispositivo; también habilita optimizaciones de carga
- **Layout shift** — salto o movimiento brusco del contenido cuando una imagen carga sin dimensiones predefinidas; se evita especificando `width` y `height` en el HTML
- **Hero Animation** — efecto de animación en el que un elemento se mueve suavemente de su posición en una pantalla a su nueva posición en la siguiente; implementado por Flutter; la View Transition API permite replicarlo en el navegador

---

## Resumen final

La View Transition API se activa en Angular 17 con una sola función: añadir `withViewTransitions()` dentro de `provideRouter` en `app.config.ts`. Esto aplica automáticamente animaciones de fundido entre todas las rutas. Las opciones `skipInitialTransition` y `onViewTransitionCreated` permiten personalizar el comportamiento. La API no está soportada en todos los navegadores (en particular, Safari y Firefox no la soportaban al momento de la grabación), pero degrada de forma elegante. La lección prepara dos componentes de página idénticos con imagen y caja azul como base para demostrar la animación de elementos compartidos entre rutas en la siguiente lección.
