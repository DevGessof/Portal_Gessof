# Introducción a la sección

## ¿Qué se aprende?

Esta lección introduce la Sección 28 del curso, que también está disponible en YouTube. Se presenta el conjunto de temas nuevos que cubre la sección: características introducidas en Angular 17, el nuevo sistema de control de flujo, bloques diferidos (deferrable views), el nuevo sistema de detección de cambios, y la integración de Tailwind CSS en proyectos Angular.

---

## Puntos clave

**Contexto: Angular 17 y señales estables**

La sección se enfoca en características nuevas de Angular 17. En la versión 16 existía un método `mutate` en las señales que ya no existe en la versión 17. Las señales pasaron a ser estables a partir de esta versión, lo que significa que su API ya no cambiará de forma disruptiva.

**Nuevo control de flujo**

Angular 17 introduce una nueva sintaxis para el control de flujo en plantillas HTML. Esta nueva sintaxis reemplaza a las directivas `ngIf`, `ngFor` y `switch` que se usaban antes. Se verá en detalle en la sección.

**Bloques diferidos (deferrable views)**

Una de las características que el instructor destaca como más impresionante. No es simplemente lazy load (carga diferida de rutas): va más allá, permitiendo controlar de forma granular cuándo se carga un componente específico dentro de una página. Por ejemplo, cargar un componente solo cuando el usuario pasa el mouse por encima, cuando hace clic en un botón, o cuando el componente entra en el área visible de la pantalla (viewport). Esto permite mejorar la velocidad percibida de la aplicación de forma muy sencilla.

**Nuevo sistema de detección de cambios**

Se introduce el concepto de "Next Detection Strategy" o nuevo `ChangeDetection`. El instructor menciona que en el futuro Angular podría adoptar el modo "Zoneless" (sin Zone.js) como forma por defecto de trabajar, y esta sección sirve como preparación para ese cambio. Cuando suceda, quien haya seguido esta sección estará preparado.

**Tailwind CSS en Angular**

Muchos estudiantes habían pedido este tema. La sección incluye la instalación y configuración de Tailwind en un proyecto Angular. El instructor adelanta que la configuración no es complicada y que se usará Tailwind para construir un dashboard con un diseño visualmente atractivo.

**Objetivo de la sección**

Experimentar con las características nuevas de Angular a través de la construcción de un dashboard funcional. Algunas características ya son estables; otras todavía son experimentales. El instructor espera que las experimentales lleguen pronto a ser compatibles con todos los navegadores web.

---

## Ejemplo sencillo

Los bloques diferidos son como cargar las imágenes de una galería solo cuando el usuario hace scroll hasta verlas, en lugar de cargarlas todas al abrir la página. En Angular 17, este comportamiento se puede aplicar a cualquier componente con unas pocas líneas de código.

---

## Palabras clave y elementos importantes

- **Angular 17** — versión sobre la que se trabaja en esta sección; introduce control de flujo nativo, bloques diferidos y señales estables
- **Señales estables** — a partir de Angular 17 las señales ya no tienen el método `mutate` (que existía en v16) y su API es definitiva
- **Nuevo control de flujo** — sintaxis nativa en plantillas para reemplazar `ngIf`, `ngFor` y `ngSwitch`
- **Deferrable views / bloques diferidos** — mecanismo para cargar componentes de forma diferida con condiciones granulares (hover, clic, viewport); va más allá del lazy load de rutas
- **Lazy load** — carga diferida de módulos o componentes; los bloques diferidos lo llevan a un nivel superior
- **Next Detection Strategy / Zoneless** — nuevo sistema de detección de cambios que en el futuro podría ser el modo por defecto de Angular, eliminando la dependencia de Zone.js
- **Tailwind CSS** — framework de estilos utilitarios que se integra en el proyecto Angular de esta sección
- **Dashboard** — aplicación de práctica que se construye a lo largo de la sección para experimentar con todas las características nuevas

---

## Resumen final

La Sección 28 cubre las principales novedades de Angular 17: señales estables, nuevo control de flujo en plantillas, bloques diferidos para optimización de carga, nuevo sistema de detección de cambios orientado a Zoneless, y Tailwind CSS. Todo se aprende construyendo un dashboard funcional. Algunas características son ya estables; otras son experimentales. El objetivo es que el estudiante las experimente y quede preparado para el futuro de Angular.
