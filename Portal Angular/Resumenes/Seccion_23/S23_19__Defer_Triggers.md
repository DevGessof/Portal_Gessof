# Defer Triggers

## ¿Qué se aprende?

Esta lección introduce el concepto de *triggers* (disparadores) para los bloques `@defer`. Un trigger le indica a Angular **bajo qué condición** debe comenzar a construir el componente diferido. Se presenta el catálogo completo de triggers disponibles y se implementa en detalle el trigger `on viewport`, que carga el componente solo cuando entra en el área visible del navegador para el usuario.

---

## Puntos clave

**¿Qué es un trigger?**

Un trigger es una condición o evento que indica a Angular cuándo debe dejar de diferir la carga y construir el componente. Sin trigger, `@defer` construye el componente lo antes posible. Con un trigger, la construcción espera hasta que se cumpla esa condición específica.

La sintaxis general es:

```html
@defer (on trigger) {
  <app-componente />
} @placeholder {
  <p>Contenido provisional</p>
}
```

**Catálogo de triggers disponibles**

| Trigger | Cuándo se dispara |
|---|---|
| `on idle` | Cuando el navegador entra en estado inactivo (ya se construyeron todos los componentes de la ruta y no hay trabajo pendiente) |
| `on viewport` | Cuando el elemento `@placeholder` entra en el área visible del usuario (viewport) |
| `on interaction` | Cuando el usuario hace clic o pulsa una tecla sobre el `@placeholder` (en móvil, al tocarlo con tap) |
| `on hover` | Cuando el cursor del mouse pasa sobre el `@placeholder` (en móvil, al tocarlo) |
| `on immediate` | Tan pronto termine la renderización inicial de la página |
| `on timer(ms)` | Después de un tiempo determinado en milisegundos |
| `when condicion` | Cuando una expresión booleana (señal, variable) se vuelve `true` |

**El trigger `on viewport`**

Es el que se implementa en esta lección. Se añade a los tres bloques `@defer` de la página "Defer Views":

```html
@defer (on viewport) {
  <app-heavy-loaders-slow cssClass="bg-blue-500" />
} @placeholder {
  <!-- skeleton -->
}
```

Con este trigger, cada componente solo comienza a construirse cuando su `@placeholder` entra en el área visible del navegador. Si el usuario no hace scroll hasta ese componente, este nunca se construye y nunca consume recursos.

**Comportamiento observado**

Al recargar la página:

- El primer y segundo componente (que ya están visibles en pantalla) se construyen de inmediato al entrar en el viewport.
- El tercer componente (que está más abajo y requiere scroll) muestra su skeleton y **no aparece en la consola** hasta que el usuario hace scroll hasta él.
- Al hacer scroll, el tercer componente entra en el viewport, comienza a construirse y, cuando termina, reemplaza el skeleton.

Esto demuestra que con `on viewport` solo se paga el coste de construcción de los componentes que el usuario realmente llega a ver.

**Nota sobre el código bloqueante**

El instructor recuerda que como los tres componentes usan el bucle `while` bloqueante, el orden de aparición en consola puede parecer distinto al esperado. En código real (con Promesas u Observables), los tres se construirían en paralelo y de forma no bloqueante.

**Tarea: añadir el `TitleComponent`**

Al final de la lección se propone como ejercicio reforzar el uso de `standalone components` importando `TitleComponent` en el `DeferViewsComponent` para mostrar el título "Defer Views / Blocks" con `<app-title title="Defer Views / Blocks" />`. La solución requiere solo añadir `TitleComponent` al arreglo `imports` del componente.

---

## Ejemplo sencillo

El trigger `on viewport` funciona como las farolas de una calle que se encienden solo cuando alguien pasa por debajo: no tiene sentido tener encendidas las farolas de toda la calle si nadie está caminando por esa zona. Cada componente se "enciende" (construye) solo cuando el usuario llega a verlo.

---

## Palabras clave y elementos importantes

- `@defer (on trigger)` — sintaxis para especificar la condición bajo la cual Angular construirá el componente diferido
- `on viewport` — trigger que dispara la carga cuando el `@placeholder` del bloque `@defer` entra en el área visible del navegador
- `on idle` — trigger que dispara la carga cuando el navegador termina todo el trabajo pendiente y queda inactivo
- `on interaction` — trigger que dispara la carga al hacer clic, tap o pulsar una tecla sobre el `@placeholder`
- `on hover` — trigger que dispara la carga al pasar el cursor sobre el `@placeholder`
- `on immediate` — trigger que dispara la carga tan pronto termina la renderización inicial, sin esperar ninguna interacción
- `on timer(ms)` — trigger que dispara la carga después de un tiempo especificado en milisegundos
- `when condicion` — trigger que dispara la carga cuando una expresión booleana se evalúa como `true`; útil con señales
- **Viewport** — área visible de la pantalla del navegador en un momento dado; lo que el usuario ve sin necesidad de hacer scroll

---

## Resumen final

Los triggers de `@defer` controlan el momento exacto en que Angular construye un componente diferido. `on viewport` es especialmente poderoso porque garantiza que solo se construyen los componentes que el usuario realmente ve, sin desperdiciar recursos en contenido fuera de pantalla. Otros triggers como `on idle`, `on interaction`, `on hover`, `on immediate`, `on timer` y `when` ofrecen control granular sobre el ciclo de vida de carga, adaptándose a distintos casos de uso.
