# Demostración de la sección

## ¿Qué se aprende?

Esta lección muestra el resultado final de la sección antes de empezar a construirla. Se presenta visualmente cada una de las funcionalidades que se van a implementar: la View Transition API, el nuevo ChangeDetection con `onPush`, el nuevo control de flujo, los Defer Options, los Defer Views, y la gestión de usuarios con señales y Observables. El objetivo es que el estudiante sepa de antemano qué va a lograr al finalizar la sección.

---

## Puntos clave

**View Transition API**

Angular 17 integra soporte para la View Transition API del navegador. Permite crear transiciones visuales animadas entre rutas o entre estados de la interfaz de usuario. El instructor la muestra en funcionamiento dentro del dashboard.

**ChangeDetection con `onPush`**

Se muestra un ejercicio sobre el nuevo comportamiento de `onPush` en Angular 17. El instructor adelanta que habrá un resultado inesperado: en ciertos casos, aunque deberían cambiar dos componentes, solo cambia uno. Esto se explica con detalle cuando se trabaja el ejercicio.

**Nuevo control de flujo**

La sección incluye un ejercicio con la nueva sintaxis de control de flujo de Angular 17, que reemplaza las directivas `ngIf`, `ngFor` y `ngSwitch`. El ejercicio es sencillo, pero sirve para explicar a fondo la nueva sintaxis y sus diferencias respecto a las directivas anteriores.

**Defer Options: carga diferida con condiciones**

Los Defer Options permiten controlar programáticamente cuándo se carga un componente. Las condiciones que se demuestran son:

- Cuando se carga la página.
- Cuando el usuario pasa el mouse por encima del elemento.
- Cuando el usuario hace clic en un botón.

Todo esto sin usar ningún `if` ni lógica manual: solo con un bloque `@defer` y sus opciones. El instructor lo califica como "bien poderoso".

**Defer Views: carga diferida al entrar en el viewport**

Los Defer Views permiten cargar componentes pesados únicamente cuando entran en el área visible de la pantalla (viewport). El instructor muestra un componente que bloquea el hilo principal (simula un componente pesado) y explica cómo, al envolverlo en un bloque `@defer`, solo se carga cuando el usuario hace scroll hasta verlo. Mientras tanto se puede mostrar un contenido de carga. Todo con una simple función, sin lógica adicional.

**Usuarios: señales, Observables y propiedades privadas**

En la sección de usuarios se muestran varias técnicas:

- Cargar usuarios desde una API y mostrarlos.
- Transformar Observables en señales.
- Manejar servicios que usan señales.
- Usar señales computadas.
- Usar propiedades nuevas privadas de TypeScript/Angular.

**Resumen visual de la sección**

El instructor muestra toda la aplicación funcionando antes de empezar, para que el estudiante tenga claridad de hacia dónde se dirige. Es una sección con mucha funcionalidad nueva, útil y que el instructor describe como "bien interesante y bien poderoso".

---

## Ejemplo sencillo

Los Defer Views son como los mensajes que se cargan en una red social: en lugar de cargar todos los comentarios al abrir la página (lo que la haría lenta), solo se cargan cuando el usuario hace scroll hasta verlos. En Angular 17 este comportamiento se implementa con un solo bloque `@defer` sin ninguna lógica adicional.

---

## Palabras clave y elementos importantes

- **View Transition API** — API del navegador integrada en Angular 17 para crear animaciones al navegar entre rutas o estados
- **ChangeDetection `onPush`** — estrategia de detección de cambios que en Angular 17 tiene un comportamiento nuevo que puede resultar inesperado en ciertos casos
- **Nuevo control de flujo** — sintaxis nativa con bloques `@if`, `@for`, `@switch` que reemplaza las directivas `ngIf`, `ngFor`, `ngSwitch`
- **`@defer`** — bloque de Angular 17 para carga diferida de componentes; no requiere ningún `if` ni lógica manual
- **Defer Options** — condiciones que controlan cuándo se activa la carga diferida: al cargar la página, al pasar el mouse, al hacer clic
- **Defer Views** — carga de componentes pesados solo cuando entran en el viewport; mejora el rendimiento sin cambios en la lógica del componente
- **Viewport** — área visible de la pantalla del usuario; los Defer Views cargan el componente solo cuando llega a esta área
- **Transformar Observable a señal** — técnica para convertir el resultado de una petición HTTP (Observable) en una señal de Angular, facilitando su uso en plantillas
- **Señal computada** — señal derivada de otras señales; se recalcula automáticamente cuando sus dependencias cambian
- **Propiedades privadas** — nuevas formas de declarar propiedades privadas en componentes Angular que se ven en esta sección

---

## Resumen final

Esta lección es una demostración del resultado final de la sección: una aplicación dashboard que implementa la View Transition API, el nuevo `ChangeDetection onPush`, el nuevo control de flujo, los Defer Options (carga diferida con condiciones de interacción), los Defer Views (carga diferida al entrar en el viewport), y una sección de usuarios con señales, Observables transformados y señales computadas. Verlo antes de empezar ayuda al estudiante a entender el propósito de cada lección siguiente.
