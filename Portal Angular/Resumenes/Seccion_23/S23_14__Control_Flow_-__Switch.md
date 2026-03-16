# Control Flow — @switch

## ¿Qué se aprende?

Esta lección implementa el nuevo bloque `@switch` de Angular 17 en la página de Control Flow. Se crea un tipo TypeScript personalizado para limitar los valores posibles de una señal, se construye un `@switch` con `@case` y `@default` en el template, y se compara con la sintaxis anterior basada en `ngSwitch` y `ng-template` para mostrar cuánto más simple es la nueva forma.

---

## Puntos clave

**Crear un tipo personalizado para las calificaciones**

En el componente TypeScript se define un tipo que limita los valores posibles:

```typescript
type Grade = 'A' | 'B' | 'F';
```

Esto significa que la señal solo puede contener uno de esos tres strings. Si se intenta asignar otro valor, TypeScript lanza un error de compilación.

**Crear la señal con el tipo personalizado**

```typescript
public grade = signal<Grade>('A');
```

La señal se inicializa con `'A'` y está tipada como `WritableSignal<Grade>`. Al llamar a `grade.set()`, el autocompletado de VS Code solo ofrece los valores `'A'`, `'B'` o `'F'`.

**Preparar el contenido: un párrafo por cada caso**

En el template se preparan tres párrafos:

- `'A'` → "Arriba de 90"
- `'B'` → "Arriba de 80"
- `'F'` → "Reprobado"

**La nueva sintaxis del `@switch`**

```html
@switch (grade()) {
  @case ('A') {
    <p>Arriba de 90</p>
  }
  @case ('B') {
    <p>Arriba de 80</p>
  }
  @default {
    <p>Reprobado</p>
  }
}
```

- `@switch (expresion)` — evalúa la expresión (aquí el valor de la señal `grade()`).
- `@case ('valor')` — se ejecuta si la expresión coincide con ese valor.
- `@default` — se ejecuta si ningún `@case` coincide; equivale al `default` de un `switch` en JavaScript.

**Mostrar el valor actual de la señal**

Para ver visualmente qué calificación está activa, se añade en el template:

```html
<p class="text-3xl">{{ grade() }}</p>
```

**Comparación con la sintaxis anterior**

Con la sintaxis anterior, implementar un `switch` en Angular requería:

```html
<div [ngSwitch]="grade">
  <ng-template ngSwitchCase="'A'"><p>Arriba de 90</p></ng-template>
  <ng-template ngSwitchCase="'B'"><p>Arriba de 80</p></ng-template>
  <ng-template ngSwitchDefault><p>Reprobado</p></ng-template>
</div>
```

Era necesario usar `ng-template` por cada caso, la sintaxis era más verbosa y más difícil de recordar. La nueva sintaxis es directamente legible y similar a un `switch` de JavaScript.

**La sintaxis anterior sigue funcionando**

El instructor aclara que usar `ngSwitch` no es un "breaking change": la sintaxis anterior sigue siendo válida en Angular 17. No es obligatorio migrar. Solo se recomienda la nueva forma para código nuevo.

**Nota sobre Prettier y el autoformateo**

El instructor menciona que en el momento de la grabación, Prettier (el formateador de código) no formateaba bien la nueva sintaxis de `@switch`. Esperaba que esto se arreglara en versiones posteriores de Prettier. No afecta al funcionamiento del código.

---

## Ejemplo sencillo

El `@switch` funciona igual que un `switch` de JavaScript: se evalúa una expresión, se compara con cada `@case` de arriba a abajo, y se ejecuta el bloque del primer `@case` que coincide. Si ninguno coincide, se ejecuta el `@default`. La diferencia es que en lugar de mostrar código JavaScript se muestra HTML condicionalmente.

---

## Palabras clave y elementos importantes

- `type Grade = 'A' | 'B' | 'F'` — tipo TypeScript de unión de strings literales; limita los valores posibles que puede tener una variable o señal
- `signal<Grade>('A')` — señal tipada con el tipo personalizado `Grade`; el autocompletado solo ofrece los valores permitidos
- `@switch (expresion) { }` — nueva sintaxis de Angular 17 para mostrar contenido según el valor de una expresión; reemplaza `[ngSwitch]`
- `@case ('valor') { }` — bloque que se renderiza cuando la expresión del `@switch` coincide con ese valor; reemplaza `ngSwitchCase`
- `@default { }` — bloque que se renderiza cuando ningún `@case` coincide; reemplaza `ngSwitchDefault`
- `[ngSwitch]` — directiva de la sintaxis anterior para switch; sigue siendo válida en Angular 17
- `ng-template` con `ngSwitchCase` / `ngSwitchDefault` — sintaxis anterior para los casos; más verbosa que los nuevos bloques `@case` y `@default`
- **Breaking change** — cambio que rompe el código existente; el instructor aclara que la nueva sintaxis NO es un breaking change: el `ngSwitch` antiguo sigue funcionando

---

## Resumen final

Esta lección implementa el `@switch` de Angular 17 usando un tipo personalizado `Grade` para tipar la señal. En el template, `@switch (grade())` evalúa el valor de la señal y muestra el párrafo correspondiente según el `@case`. Si ningún caso coincide, muestra el `@default`. La nueva sintaxis es más legible y similar al `switch` de JavaScript. La sintaxis anterior con `[ngSwitch]` y `ng-template` sigue siendo válida; no es obligatorio migrar el código existente.
