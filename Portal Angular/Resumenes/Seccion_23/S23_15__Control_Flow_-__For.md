# Control Flow — @for

## ¿Qué se aprende?

Esta lección explora en profundidad el nuevo bloque `@for` de Angular 17. Se implementan dos listas: una con elementos y otra vacía para demostrar el bloque `@empty`. Se muestra cómo acceder a las variables internas del `@for` (`$index`, `$first`, `$last`, `$even`, `$odd`, `$count`) y cómo usarlas para aplicar estilos condicionalmente con Tailwind CSS.

---

## Puntos clave

**Crear dos señales para los ejemplos**

En el componente TypeScript se definen dos señales de arreglo:

```typescript
public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
public frameworks2 = signal<string[]>([]);
```

- `frameworks` — arreglo con elementos; se usará para mostrar la lista.
- `frameworks2` — arreglo vacío; se usará para demostrar el `@empty`.

**Sintaxis básica del `@for`**

```html
<ul>
  @for (framework of frameworks(); track $index) {
    <li>{{ framework }}</li>
  }
</ul>
```

- `framework of frameworks()` — variable de iteración y arreglo fuente; se llama con `()` porque `frameworks` es una señal.
- `track $index` — Angular usa el índice para identificar cada elemento en el DOM.
- También se puede hacer `track framework` si el valor del string es único en el arreglo.

**El bloque `@empty`**

Cuando el arreglo fuente está vacío, el `@for` puede mostrar un mensaje usando el bloque `@empty`:

```html
@for (framework of frameworks2(); track $index) {
  <li>{{ framework }}</li>
} @empty {
  <li>No hay frameworks agregados</li>
}
```

El `@empty` se escribe inmediatamente después del cierre del `@for`. Tan pronto como el arreglo tenga al menos un elemento, el `@empty` deja de mostrarse y se renderiza el contenido normal del `@for`.

**Variables internas del `@for`**

El `@for` expone varias variables internas que se pueden capturar con la sintaxis `let variable = $nombre`:

```html
@for (
  framework of frameworks();
  track $index;
  let i = $index,
  let first = $first,
  let last = $last,
  let even = $even,
  let odd = $odd,
  let count = $count
) {
  <li>{{ i + 1 }}/{{ count }} — {{ framework }}</li>
}
```

| Variable | Descripción |
|---|---|
| `$index` | Índice numérico del elemento actual (empieza en 0) |
| `$first` | `true` si es el primer elemento del arreglo |
| `$last` | `true` si es el último elemento del arreglo |
| `$even` | `true` si el índice es par (0, 2, 4...) |
| `$odd` | `true` si el índice es impar (1, 3, 5...) |
| `$count` | Total de elementos en el arreglo |

**Usar las variables para aplicar estilos condicionalmente**

Se puede combinar `[class]` (binding de clase) con las variables internas para cambiar el color de fondo de cada elemento según su posición:

```html
<li [class]="{
  'bg-red-100': even && !first && !last,
  'bg-purple-100': odd && !first && !last,
  'bg-blue-100': first || last
}">
  {{ i + 1 }}/{{ count }} — {{ framework }}
</li>
```

- Los elementos pares intermedios tienen fondo rojo claro.
- Los elementos impares intermedios tienen fondo morado claro.
- El primer y el último elemento tienen fondo azul claro.

**Ventaja respecto a `*ngFor`**

Con `*ngFor` también se podían obtener estas variables (`index`, `first`, `last`, `even`, `odd`), pero la sintaxis era diferente y más verbosa. La principal mejora del nuevo `@for` es que se puede combinar con `@if` en el mismo nivel sin necesidad de `ng-container`, y que el `@empty` es nativo (antes requería un `*ngIf` adicional para comprobar si el arreglo estaba vacío).

---

## Ejemplo sencillo

Las variables internas del `@for` son como la información de contexto que tiene un camarero al servir una mesa larga: sabe cuál es el primer comensal (`$first`), el último (`$last`), en qué posición está cada uno (`$index`), cuántos son en total (`$count`) y si están en posición par o impar. Con esa información puede adaptar cómo sirve a cada uno.

---

## Palabras clave y elementos importantes

- `@for (item of array(); track expresion) { }` — nueva sintaxis para iterar arreglos; el arreglo puede ser una señal (llamar con `()`) o una propiedad normal
- `track $index` — seguimiento por índice; válido cuando los elementos no tienen un identificador único o no cambian de posición
- `track item` — seguimiento por valor; válido cuando el valor de cada elemento es único en el arreglo
- `@empty { }` — bloque que se muestra cuando el arreglo del `@for` está vacío; equivale a un `*ngIf` adicional sobre la longitud del arreglo
- `$index` — variable interna: índice numérico del elemento actual (empieza en 0)
- `$first` — variable interna: `true` para el primer elemento
- `$last` — variable interna: `true` para el último elemento
- `$even` — variable interna: `true` para elementos en posición par
- `$odd` — variable interna: `true` para elementos en posición impar
- `$count` — variable interna: total de elementos en el arreglo
- `let variable = $nombre` — sintaxis para capturar una variable interna del `@for` en una variable local
- `[class]="{ 'clase': condicion }"` — binding de objeto para clases condicionales en Angular; aplica la clase si la condición es `true`

---

## Resumen final

El `@for` de Angular 17 itera arreglos con la sintaxis `@for (item of arreglo; track expresion)`. El `@empty` muestra contenido alternativo cuando el arreglo está vacío. Las variables internas `$index`, `$first`, `$last`, `$even`, `$odd` y `$count` permiten personalizar el contenido o el estilo de cada elemento según su posición en el arreglo. Se pueden declarar como variables locales con `let variable = $nombre`. Estas variables facilitan tareas como numerar elementos, resaltar el primero y el último, o alternar colores entre filas pares e impares.
