# Required Input

## ¿Qué se aprende?

Esta lección crea el componente `TitleComponent` como componente reutilizable que recibe el título de la página como un `@Input()`. Se introduce la opción `required: true` para hacer el input obligatorio, lo que genera un error de compilación si el componente padre no envía el valor. También se explica la función `booleanAttribute` como forma de transformar un atributo HTML en un booleano, permitiendo usar la sintaxis simplificada sin corchetes.

---

## Puntos clave

**Objetivo: convertir el `<h1>` en un componente reutilizable**

En la página de Control Flow existe un `<h1>` con el título "Control Flow". En lugar de repetir ese HTML en cada página, se crea un componente `TitleComponent` que acepta el título como input y lo muestra. Así todas las páginas usan el mismo componente con su propio título.

**Estructura del `TitleComponent`**

El archivo HTML del componente se elimina (no se necesita por la simplicidad del template) y el template se define directamente en el decorador del componente TypeScript con la propiedad `template`:

```typescript
@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1 class="text-3xl mb-5">{{ title }}</h1>`
})
export class TitleComponent {
  title = input.required<string>();
}
```

**Crear el input con la función `input()`**

A partir de Angular 16+, los inputs se pueden declarar con la función `input()` en lugar del decorador `@Input()`:

```typescript
// Forma antigua
@Input() title: string = '';

// Forma nueva con función input()
title = input<string>();           // opcional, puede ser undefined
title = input.required<string>();  // obligatorio
```

La función `input()` viene de `@angular/core`.

**`input.required<T>()`: input obligatorio**

Al usar `input.required<string>()`, Angular genera un error de compilación si el componente padre usa `<app-title>` sin enviar el atributo `title`. Esto garantiza que el componente nunca se renderiza sin su dato necesario.

Como TypeScript sabe que el valor siempre estará presente (es requerido), no hace falta inicializarlo con un valor por defecto ni usar el operador `!` para indicar que no será `undefined`.

**Importar y usar el componente en la página**

Para usar `TitleComponent` en `ControlFlowComponent` (componente standalone), hay que importarlo:

```typescript
@Component({
  standalone: true,
  imports: [TitleComponent, ...],
  ...
})
export class ControlFlowComponent { }
```

En el template:

```html
<app-title title="Control Flow" />
```

**Inputs booleanos con `booleanAttribute`**

Frameworks como Vue, Qwik o React permiten pasar un atributo booleano simplemente escribiendo el nombre del atributo (sin valor), y eso se interpreta como `true`. Por ejemplo:

```html
<app-title withShadow />  <!-- equivalente a withShadow="true" -->
```

En Angular esto no funciona directamente porque el atributo sin valor llega como un string vacío `""`, no como `true`. Para solucionar esto, se usa la opción `transform` del input con la función `booleanAttribute`:

```typescript
withShadow = input(false, { transform: booleanAttribute });
```

- `booleanAttribute` — función de `@angular/core` que transforma el valor del atributo: si el atributo está presente (aunque sea como string vacío), lo convierte en `true`; si no está presente, es `false`.
- Con esta configuración se puede usar `<app-title withShadow />` y el valor llega como `true` al componente.

**Alias del input**

Dentro de las opciones del input también se puede configurar un `alias` para que el nombre del atributo en el template sea diferente al nombre de la propiedad en la clase:

```typescript
title = input.required<string>({ alias: 'label' });
```

Con ese alias, el template usaría `<app-title label="Control Flow" />` aunque la propiedad interna siga llamándose `title`.

---

## Ejemplo sencillo

Un input requerido es como un formulario de registro donde el campo "nombre" es obligatorio: si lo dejas vacío y presionas "Enviar", el formulario no avanza y muestra un error. Con `input.required()`, Angular hace lo mismo en tiempo de compilación: si olvidas enviar el input al componente, el proyecto no compila.

---

## Palabras clave y elementos importantes

- `input()` — función de `@angular/core` (Angular 16+) para declarar inputs en componentes standalone; reemplaza al decorador `@Input()`
- `input.required<T>()` — versión obligatoria de `input()`; genera error de compilación si el padre no envía el valor
- `input<T>()` — versión opcional de `input()`; el valor puede ser `undefined` si el padre no lo envía
- `@Input()` — decorador antiguo para declarar inputs; sigue siendo válido pero `input()` es la forma moderna
- `booleanAttribute` — función de `@angular/core` usada en la opción `transform` de un input; convierte la presencia del atributo HTML en `true` y su ausencia en `false`
- `transform` — opción del input que permite transformar el valor recibido antes de asignarlo a la propiedad
- `alias` — opción del input que permite usar un nombre diferente en el template al nombre de la propiedad interna
- **Componente standalone** — requiere importar explícitamente todos los componentes y módulos que usa en su arreglo `imports`
- `template` — propiedad del decorador `@Component` que define el HTML del componente directamente en el archivo TypeScript, sin archivo `.html` separado

---

## Resumen final

Esta lección crea `TitleComponent` con un input requerido usando `input.required<string>()`. El input requerido garantiza que el componente padre siempre envíe el título, generando un error de compilación si lo omite. Para usar el componente, el padre lo importa en su arreglo `imports` y lo usa con `<app-title title="..." />`. Adicionalmente, se explica `booleanAttribute` como transformador para inputs booleanos, que permite usar la sintaxis de atributo sin valor (`<app-title withShadow />`) y que llegue como `true` al componente.
