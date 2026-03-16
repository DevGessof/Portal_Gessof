# Control Flow — @if

## ¿Qué se aprende?

Esta lección implementa el nuevo bloque `@if` de Angular 17 en la página de "Control Flow". Se crea una señal booleana que controla si un contenido se muestra o se oculta, se construye un botón que alterna ese valor usando el método `update` de la señal, y se introduce el bloque `@else` para mostrar contenido alternativo cuando la condición es falsa. También se aprovecha para explicar las señales de solo lectura (`asReadOnly`).

---

## Puntos clave

**Contexto: la página de Control Flow**

Se trabaja en el componente `control-flow.component`. Se abre tanto el archivo TypeScript como el HTML. En el HTML se añade una sección con clases de Tailwind para el layout en grilla (`grid grid-cols-1 md:grid-cols-2 gap-3`).

**Crear una señal booleana**

En el componente TypeScript se define una señal:

```typescript
public showContent = signal(false);
```

- `signal(false)` — crea una señal con valor inicial `false`. Se importa desde `@angular/core`.
- El tipo inferido es `WritableSignal<boolean>` porque el valor puede cambiarse.
- El instructor prefiere poner `public` explícitamente para que quede claro que es una propiedad de clase, aunque no es obligatorio.

**Las señales como wrapper**

Una señal es un "wrapper" o contenedor que envuelve un valor. Para leer su valor se llama como función: `showContent()`. Para modificarlo se usan métodos: `set()`, `update()`.

**Señales de solo lectura (`asReadOnly`)**

Si se añade `.asReadOnly()` al crear la señal, el resultado es una señal de solo lectura: no tiene los métodos `set` ni `update`. Esto es útil para exponer una señal al template sin permitir que se modifique desde fuera. En esta lección se usa la señal mutable, pero se menciona esta opción para el conocimiento del estudiante.

**Crear un método para alternar el valor**

En lugar de modificar la señal directamente desde el template, el instructor crea un método en la clase:

```typescript
toggleContent() {
  this.showContent.update(value => !value);
}
```

- `update(fn)` — recibe una función que toma el valor actual y devuelve el nuevo valor. Aquí se niega el booleano actual.

**Conectar el botón al método**

En el template, un botón llama al método con el evento `(click)`:

```html
<button (click)="toggleContent()" class="p-2 bg-blue-500 rounded text-white">
  Click me!
</button>
```

Al hacer clic, el valor de `showContent` alterna entre `true` y `false`.

**Usar `@if` en el template**

La nueva sintaxis del `@if`:

```html
@if (showContent()) {
  <div>Hola Mundo</div>
}
```

- `showContent()` — se llama con paréntesis para obtener el valor de la señal.
- El contenido entre llaves solo se renderiza en el DOM cuando la condición es verdadera.

**Agregar `@else`**

El bloque `@else` se escribe inmediatamente después del cierre del `@if`:

```html
@if (showContent()) {
  <div>Hola Mundo</div>
} @else {
  <div>***********</div>
}
```

Cuando `showContent()` es `false`, se muestra el contenido del `@else`. Antes de Angular 17, implementar un `else` requería referenciar un `ng-template`, lo que era más complejo y difícil de recordar.

**Ventaja respecto a la sintaxis anterior**

Con `*ngIf` el `else` requería:

```html
<div *ngIf="condicion; else miTemplate">Contenido</div>
<ng-template #miTemplate>Alternativa</ng-template>
```

Con la nueva sintaxis es mucho más intuitivo y similar a estructuras de control de cualquier lenguaje de programación.

---

## Ejemplo sencillo

El `@if` funciona exactamente como un `if` de JavaScript pero dentro del HTML: "si esta condición es verdadera, muestra este bloque; de lo contrario, muestra el bloque del `@else`". La señal booleana es el interruptor que controla cuál de los dos bloques se muestra.

---

## Palabras clave y elementos importantes

- `signal(valorInicial)` — función de Angular para crear una señal; se importa de `@angular/core`; el valor puede ser de cualquier tipo
- `WritableSignal<T>` — tipo de una señal que se puede modificar; tiene los métodos `set()`, `update()` y `mutate()` (este último eliminado en Angular 17)
- `update(fn)` — método de la señal que recibe una función con el valor actual y devuelve el nuevo valor; útil para calcular el nuevo valor basándose en el anterior
- `.asReadOnly()` — convierte una señal mutable en una señal de solo lectura; ya no tiene `set` ni `update`; útil para exponer señales sin permitir su modificación externa
- `@if (condicion) { }` — nueva sintaxis de Angular 17 para renderizado condicional; reemplaza `*ngIf`
- `@else { }` — bloque que se renderiza cuando la condición del `@if` es falsa; se escribe inmediatamente después del cierre del `@if`
- `(click)="metodo()"` — binding de evento en Angular; ejecuta el método al hacer clic en el elemento
- `showContent()` — notación con paréntesis para leer el valor de una señal en el template

---

## Resumen final

Esta lección implementa el `@if` y el `@else` de Angular 17 en la página de Control Flow. Se crea la señal `showContent` con valor inicial `false` y un método `toggleContent` que usa `update` para alternar su valor. El template usa `@if (showContent())` para mostrar un contenido y `@else` para mostrar otro. Comparado con `*ngIf`, la nueva sintaxis es más directa, similar al `if/else` de cualquier lenguaje de programación, y no requiere `ng-template` para el caso alternativo.
