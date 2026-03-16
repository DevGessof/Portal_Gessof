# Hero Animation — View Transitions

## ¿Qué se aprende?

Esta lección implementa la animación de elementos compartidos entre rutas, conocida como *Hero Animation*, usando la View Transition API del navegador integrada en Angular 17. Con una única propiedad CSS aplicada a los elementos que deben animarse, el navegador calcula automáticamente la transición de posición, tamaño y otras propiedades visuales al navegar entre las dos páginas preparadas en la lección anterior.

---

## Puntos clave

**¿Qué es el Hero Animation?**

Es una técnica de animación donde un elemento que existe en la pantalla A y también existe en la pantalla B se anima suavemente de su posición y tamaño en A hasta su posición y tamaño en B al navegar entre ellas. No es una duplicación: el navegador detecta que es "el mismo elemento" en ambas páginas y anima la transición.

El instructor toma como referencia el concepto de Flutter, donde esta técnica se llama explícitamente *Hero Animation*. En la web se logra con la View Transition API del navegador, que Angular 17 integra a través de `withViewTransitions()`.

**Preparación del escenario: dos páginas distintas**

Se trabaja con los dos componentes creados en la lección anterior: `ViewTransition1Component` y `ViewTransition2Component`. Ambos tienen la misma imagen y la misma caja azul, pero en `view-transition2` se cambia la clase `justify-start` por `justify-end`, moviendo los elementos al lado derecho de la pantalla. Con esto, al navegar entre las dos páginas, los elementos están en posiciones distintas.

**La propiedad CSS `view-transition-name`**

Para que el navegador sepa que un elemento de la página A corresponde al mismo elemento de la página B y debe animarlo, se le asigna la propiedad CSS `view-transition-name` con un nombre único e idéntico en ambas páginas:

```html
<!-- En view-transition1.component -->
<img style="view-transition-name: hero1" srcSet="..." />
<div style="view-transition-name: hero2" class="bg-blue-500 w-56 h-56" />

<!-- En view-transition2.component: exactamente el mismo nombre -->
<img style="view-transition-name: hero1" srcSet="..." />
<div style="view-transition-name: hero2" class="bg-blue-800 w-32 h-32 rounded" />
```

- El nombre `hero1` conecta las dos imágenes entre páginas.
- El nombre `hero2` conecta las dos cajas azules entre páginas.
- Los nombres deben ser únicos dentro de cada página: si hubiera dos elementos con el mismo `view-transition-name` en la misma página, el navegador lanzaría un error porque no sabría cuál animar.

**Qué anima el navegador automáticamente**

El navegador compara los atributos CSS del elemento antes y después de la navegación y anima la diferencia. En este ejercicio:

- La imagen pasa de la izquierda (página 1) a la derecha (página 2): el navegador anima el movimiento.
- La caja azul cambia de `bg-blue-500` a `bg-blue-800` (color), de `w-56 h-56` a `w-32 h-32` (tamaño) y adquiere `rounded` (bordes redondeados): el navegador anima color, tamaño y forma simultáneamente.

No hay que escribir ningún keyframe ni CSS de transición manualmente. El navegador lo calcula solo.

**Posicionamiento fijo en una de las páginas**

Para demostrar la flexibilidad, en `view-transition2` la caja se coloca en posición fija en la esquina inferior derecha de la pantalla con `fixed bottom-16 right-10`. Al navegar desde la página 1, el navegador anima la caja desde su posición normal hasta esa esquina fija. Esto muestra que la View Transition API funciona independientemente del tipo de posicionamiento CSS.

**Consideración de compatibilidad**

El instructor recuerda la advertencia de la lección anterior: la View Transition API no está soportada en todos los navegadores (especialmente Safari y Firefox al momento de la grabación). Cuando no hay soporte, la navegación ocurre normalmente sin animación.

---

## Ejemplo sencillo

El `view-transition-name` es como poner una etiqueta de identificación al mismo objeto en dos fotografías. Cuando el navegador ve que el elemento `hero1` de la foto 1 pasa a la foto 2 con otra posición y tamaño, crea automáticamente la película que muestra ese objeto moviéndose de un lugar al otro, sin que el desarrollador tenga que dibujar fotograma a fotograma.

---

## Palabras clave y elementos importantes

- `view-transition-name` — propiedad CSS que asigna un identificador único a un elemento para que el navegador lo pueda rastrear entre páginas y animar su transición; debe ser única dentro de cada página
- **Hero Animation** — técnica de animación donde un elemento se mueve suavemente de su posición en la pantalla A a su posición en la pantalla B al navegar entre ellas; término popularizado por Flutter
- `withViewTransitions()` — función de `@angular/router` que activa la View Transition API del navegador para todas las navegaciones de Angular; necesaria para que `view-transition-name` tenga efecto
- `justify-end` — clase de Tailwind CSS para alinear el contenido al final (derecha) del eje principal en un contenedor `flex`; permite posicionar los elementos en un lado diferente entre las dos páginas
- `style="view-transition-name: nombreUnico"` — forma inline de aplicar la propiedad CSS directamente en el template de Angular
- **Transición automática de propiedades CSS** — el navegador anima automáticamente la diferencia en posición, tamaño, color, forma y otras propiedades CSS entre el estado del elemento en la página A y en la página B
- **Nombre único por página** — requisito de la API: si dos elementos en la misma página tienen el mismo `view-transition-name`, el navegador lanza un error; cada elemento animado debe tener un nombre exclusivo

---

## Resumen final

El Hero Animation se implementa asignando la propiedad CSS `view-transition-name` con el mismo nombre a los elementos correspondientes en ambas páginas. El navegador detecta automáticamente las diferencias de posición, tamaño y otras propiedades entre las dos versiones del elemento y genera la animación de transición sin necesidad de código adicional. El único requisito del lado de Angular es tener `withViewTransitions()` activo en `app.config.ts`, lo que se hizo en la lección anterior. La API no está soportada en todos los navegadores, pero degrada de forma elegante.
