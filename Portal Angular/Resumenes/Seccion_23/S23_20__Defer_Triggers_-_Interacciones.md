# Defer Triggers — Interacciones

## ¿Qué se aprende?

Esta lección trabaja en la página "Defer Options" e implementa el trigger `on interaction` de forma práctica. Se crea el componente `HeavyLoadersFast` con `ng-content` para recibir contenido proyectado desde el padre, se explica el rol del `@placeholder` como elemento obligatorio para algunos triggers, y se demuestra cómo delegar el disparo del trigger a un elemento externo (un botón) mediante referencias locales de template.

---

## Puntos clave

**Preparar el componente `HeavyLoadersFast`**

Se crea un nuevo componente `HeavyLoadersFast` similar al anterior pero sin el código bloqueante artificial. Su template consiste en una `<section>` con:

- `[ngClass]` para combinar la clase `w-full` con el valor del input `cssClass` (requerido).
- `<ng-content>` para proyectar contenido desde el componente padre.

```html
<section [ngClass]="['w-full', cssClass()]">
  <ng-content />
</section>
```

El uso de `ng-content` lo convierte en un componente de orden superior (*Higher Order Component*): el padre puede pasarle elementos HTML internos que se renderizan en el lugar donde está `<ng-content>`.

El componente recibe el input `cssClass` como requerido:

```typescript
cssClass = input.required<string>();
```

**Importar componentes en `DeferOptionsComponent`**

Al ser un componente `standalone`, `DeferOptionsComponent` debe importar explícitamente `HeavyLoadersFastComponent` y `TitleComponent` en su arreglo `imports` para poder usarlos en el template.

**Uso básico del componente con `ng-content`**

En el template del `DeferOptionsComponent` se usa el componente enviando contenido interno:

```html
<app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
  <span>On Interaction</span>
</app-heavy-loaders-fast>
```

El `<span>On Interaction</span>` se proyecta mediante `ng-content` y aparece dentro de la sección del componente.

**El trigger `on interaction` y por qué requiere `@placeholder`**

Al añadir `on interaction` al bloque `@defer`, Angular genera un error si no hay un `@placeholder`:

```
interaction trigger con ningún parámetro solo puede ser utilizado si hay un placeholder block
```

Esto es lógico: `on interaction` espera que el usuario interactúe con algo visible. Si no hay `@placeholder`, no hay nada con lo que interactuar antes de que el componente se construya.

La solución es añadir un `@placeholder`:

```html
@defer (on interaction) {
  <app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
    <span>On Interaction</span>
  </app-heavy-loaders-fast>
} @placeholder {
  <div class="w-full h-20 bg-purple-100">Click en el div</div>
}
```

Con esta configuración, al hacer clic sobre el `div` morado del `@placeholder`, Angular comienza a construir el componente.

**Delegar la interacción a un elemento externo con referencia local**

El `on interaction` por defecto escucha eventos sobre el `@placeholder`. Pero también se puede especificar un elemento diferente como disparador pasándole una referencia local de template:

```html
<button #btnInteraction>Click me!</button>

@defer (on interaction(btnInteraction)) {
  <app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
    <span>On Interaction</span>
  </app-heavy-loaders-fast>
} @placeholder {
  <div class="w-full h-20 bg-purple-100">Placeholder div</div>
}
```

- `#btnInteraction` — referencia local al elemento `<button>`.
- `on interaction(btnInteraction)` — el trigger escucha la interacción sobre el botón, no sobre el `@placeholder`.

Con esto, hacer clic en el `div` del placeholder no dispara la carga, pero hacer clic en el botón sí lo hace. Esto es útil cuando el disparador debe ser un elemento semánticamente distinto al placeholder (como un botón "Cargar más", un menú, etc.).

**Resultado práctico**

Al recargar la página, el componente `HeavyLoadersFast` no aparece en la consola porque no se ha construido aún. Solo cuando el usuario hace clic en el botón el componente se crea, el `@placeholder` desaparece y el componente real toma su lugar. Esto mejora significativamente el tiempo de carga inicial al posponer la construcción de componentes hasta que el usuario los necesita.

---

## Ejemplo sencillo

El trigger `on interaction` es como un formulario de suscripción que solo aparece cuando alguien hace clic en el botón "Suscribirse". Antes de ese clic, el componente no existe en memoria. El botón es el disparador que ordena construirlo.

---

## Palabras clave y elementos importantes

- `on interaction` — trigger de `@defer` que dispara la carga al hacer clic, tap o pulsar una tecla; por defecto escucha sobre el `@placeholder`; requiere que haya un `@placeholder` definido
- `on interaction(referencia)` — variante que delega el disparo al elemento referenciado en lugar del `@placeholder`; útil para botones u otros elementos externos
- `#nombreReferencia` — referencia local de template en Angular; se crea con `#` en el HTML y permite referenciar ese elemento desde el mismo template
- `ng-content` — directiva de Angular para proyectar contenido desde el padre hacia adentro del componente hijo; convierte al componente en un contenedor de orden superior
- **Higher Order Component** — componente que actúa como contenedor y renderiza contenido que recibe desde su padre a través de `ng-content`
- `@placeholder` — bloque obligatorio con algunos triggers (como `on interaction`); muestra contenido transitorio antes de que el componente diferido se construya
- `input.required<string>()` — función de Angular para declarar un input obligatorio; genera error de compilación si el padre no lo envía
- **Tiempo de carga inicial** — tiempo que tarda la página en estar lista para el usuario; los bloques `@defer` con triggers lo reducen al posponer la construcción de componentes no críticos

---

## Resumen final

Esta lección implementa el trigger `on interaction` en la página "Defer Options". El componente `HeavyLoadersFast` se construye con `ng-content` para proyectar contenido y con un input requerido `cssClass`. El trigger `on interaction` requiere un `@placeholder` obligatorio porque necesita algo visible con lo que el usuario pueda interactuar. La referencia local `#btnInteraction` permite delegar el disparo del trigger a un botón externo en lugar del placeholder, lo que da control total sobre qué elemento del UI activa la carga del componente.
