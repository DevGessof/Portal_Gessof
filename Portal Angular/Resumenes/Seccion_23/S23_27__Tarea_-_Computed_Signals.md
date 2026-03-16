# Tarea — Computed Signals

## ¿Qué se aprende?

Esta última lección de la sección propone y resuelve una tarea práctica: crear una señal computada `titleLabel` que genere dinámicamente el título del componente de detalle de usuario. El título muestra "Información del usuario" mientras la petición no ha llegado y el nombre completo del usuario una vez que los datos están disponibles. Se refuerza el orden de inicialización de señales dependientes y se introduce la posibilidad de pasar el valor de una señal (en lugar de la señal misma) como input a un componente hijo.

---

## Puntos clave

**El objetivo de la tarea**

En la página de detalle de usuario, el `<app-title>` muestra un título estático. La tarea es reemplazarlo por un título dinámico que:

- Diga "Información del usuario" mientras la señal `user` es `undefined` (datos aún no disponibles).
- Cambie automáticamente al nombre completo del usuario (`"Tracey Ramos"`, por ejemplo) cuando la petición HTTP completa y la señal `user` se actualiza.

Esto se debe implementar con una señal computada, no con lógica en el template.

**Solución: señal computada `titleLabel`**

```typescript
public titleLabel = computed(() => {
  if (this.user()) {
    return `${this.user()!.first_name} ${this.user()!.last_name}`;
  }
  return 'Información del usuario';
});
```

- `computed(() => { ... })` — función de `@angular/core` que crea una señal de solo lectura derivada de otras señales.
- Dentro del callback, se lee `this.user()`. Si tiene un valor (el usuario cargado), se retorna el nombre completo concatenado con template literal.
- Si `this.user()` es `undefined`, se retorna el texto por defecto "Información del usuario".
- El operador `!` (non-null assertion) en `this.user()!.first_name` le indica a TypeScript que en ese punto el valor definitivamente no es `undefined`, ya que acabamos de comprobarlo en el `if`.

**Usar `titleLabel` en el template**

```html
<app-title [title]="titleLabel()" />
```

- Se pasa el **valor** de la señal (llamándola con `()`) al input `title` del `TitleComponent`, no la señal en sí.
- El instructor menciona que también sería posible modificar `TitleComponent` para que su input acepte directamente una señal, pero lo deja fuera del alcance de esta lección.
- Cada vez que `titleLabel` cambia (porque `user` cambió), Angular re-renderiza el `<app-title>` con el nuevo valor.

**Comportamiento en el navegador**

Al navegar a la página de un usuario:

1. Aparece "Información del usuario" en el título (la petición aún no ha respondido).
2. Después de ~1,5 segundos (el delay artificial), llega la respuesta, `user` se actualiza, `titleLabel` se recalcula y el título cambia a "Tracey Ramos" (o el nombre del usuario seleccionado).

**Orden de declaración de señales dependientes**

El instructor recomienda declarar las señales en orden lógico de dependencia:

1. Primero `user` (no depende de ninguna otra señal de la clase).
2. Luego `titleLabel` (depende de `user`).

Aunque JavaScript/TypeScript permiten declarar `titleLabel` antes que `user` gracias al *hoisting* de clases, el instructor prefiere el orden lógico por claridad: "me gusta que vaya en orden lógico".

**Cierre de la sección**

El instructor señala que esto es el cierre de la Sección 28 del curso. Anima a los estudiantes que ven el contenido en YouTube a tomar el curso completo de "Angular de cero a experto" para profundizar en todos los temas. Lo aprendido en esta sección —señales, `@defer`, nuevo control de flujo, View Transitions, `toSignal`— ya puede aplicarse en cualquier proyecto Angular 17+.

---

## Ejemplo sencillo

Una señal computada `titleLabel` que depende de `user` es como el cartel de una tienda que se actualiza solo: mientras no hay dueño asignado dice "Próximamente"; en cuanto se registra un dueño, el cartel cambia automáticamente al nombre del negocio. No hay que ir a cambiar el cartel manualmente: el cartel "observa" si hay un dueño y se actualiza por sí solo.

---

## Palabras clave y elementos importantes

- `computed(() => { ... return valor; })` — función de `@angular/core` que crea una señal de solo lectura cuyo valor se recalcula automáticamente cuando cualquiera de las señales que lee en su interior cambia
- `this.user()!` — lectura de la señal con `!` (non-null assertion operator); le indica a TypeScript que en ese punto el valor no puede ser `null` ni `undefined`; se usa dentro de un bloque `if` que ya lo verificó
- **Template literal** — sintaxis de JavaScript con backticks para interpolación: `` `${this.user()!.first_name} ${this.user()!.last_name}` `` — permite concatenar strings de forma legible
- **Orden de declaración** — convención recomendada: declarar primero las señales sin dependencias (`user`) y luego las señales computadas que dependen de ellas (`titleLabel`); mejora la legibilidad
- `[title]="titleLabel()"` — binding de input que pasa el **valor** de la señal al componente hijo; para pasar el valor se llama con `()`; para pasar la señal misma se pasaría sin `()`
- **Señal como input** — posibilidad mencionada pero no implementada: modificar `TitleComponent` para que su input acepte directamente una señal; actualmente acepta un `string`
- `toSignal` + `computed` — patrón del curso: `toSignal` convierte el Observable de la petición HTTP en señal `user`; `computed` deriva `titleLabel` de `user`; ambas se actualizan en cadena automáticamente cuando llegan los datos

---

## Resumen final

La tarea consiste en crear la señal computada `titleLabel` que lee `user()` y retorna el nombre completo del usuario si existe, o "Información del usuario" si aún es `undefined`. Se pasa el valor de la señal al `<app-title>` con `[title]="titleLabel()"`. El título cambia automáticamente de "Información del usuario" a "Tracey Ramos" cuando la petición HTTP completa, sin ningún código adicional en el constructor ni en el template. Esta es la lección final de la Sección 28, que cubre las principales novedades de Angular 17: nuevo control de flujo, bloques diferidos, View Transitions, señales, `toSignal` y el patrón de servicios con estado encapsulado.
