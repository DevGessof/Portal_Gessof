# Defer Triggers — Interacciones — Parte 2

## ¿Qué se aprende?

Esta lección continúa explorando los triggers de `@defer` implementando `on hover`, `on immediate`, `on timer` y la combinación de múltiples triggers en un mismo bloque. También se introduce la palabra reservada `prefetch`, que permite precargar el código JavaScript del componente antes de construirlo, y se advierte sobre las peticiones en cascada que pueden generarse cuando los bloques `@defer` están anidados.

---

## Puntos clave

**Punto de partida**

Se parte de la sección de "interacciones" construida en la clase anterior y se copia tres veces para demostrar los nuevos triggers. Cada copia cambia únicamente el trigger usado.

**Trigger `on hover`**

```html
@defer (on hover) {
  <app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
    <span>On Hover</span>
  </app-heavy-loaders-fast>
} @placeholder {
  <div class="w-full h-20 bg-purple-100">Placeholder div</div>
}
```

Se dispara cuando el cursor del mouse pasa sobre el `@placeholder`. En dispositivos móviles se activa al tocar el elemento. Al igual que `on interaction`, se puede pasar una referencia local para que el trigger observe un elemento diferente al placeholder:

```html
@defer (on hover(btnInteraction)) { ... }
```

En ese caso, pasar el cursor sobre el botón `btnInteraction` dispara la carga, no pasar sobre el placeholder.

**Trigger `on immediate`**

```html
@defer (on immediate) {
  <app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
    <span>On Immediate</span>
  </app-heavy-loaders-fast>
} @placeholder {
  ...
}
```

Se dispara tan pronto termina la renderización inicial de la página, sin esperar ninguna interacción del usuario. El componente se construye lo antes posible después de que la aplicación está lista, pero sin bloquear esa renderización inicial.

**Trigger `on timer(ms)`**

```html
@defer (on timer(2000)) {
  <app-heavy-loaders-fast cssClass="bg-green-500" class="h-20">
    <span>On Timer</span>
  </app-heavy-loaders-fast>
} @placeholder {
  <div class="w-full h-20 bg-purple-100">Placeholder div</div>
}
```

Se dispara después del tiempo indicado en milisegundos. Aquí, `2000` equivale a 2 segundos. Es útil para componentes pesados (como grillas de datos o tablas grandes) que no son necesarios de inmediato pero que deben estar disponibles poco después de que el usuario llegue a la página.

**Combinar múltiples triggers**

Es posible declarar más de un trigger en el mismo bloque `@defer`. Angular dispara la carga cuando se cumple **cualquiera** de las condiciones:

```html
@defer (on hover; on idle) {
  <app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
    <span>Hover o Idle</span>
  </app-heavy-loaders-fast>
} @placeholder {
  <div class="w-full h-20 bg-purple-100">Placeholder div</div>
}
```

En este ejemplo, el componente se construye si el usuario pasa el cursor sobre el placeholder **o** si el navegador entra en estado inactivo, lo que ocurra primero.

**La palabra reservada `prefetch`**

`prefetch` es una instrucción adicional que le indica a Angular que descargue el código JavaScript del componente de forma anticipada, sin construirlo todavía:

```html
@defer (on hover; prefetch on idle) {
  <app-heavy-loaders-fast cssClass="bg-blue-500" class="h-20">
    <span>Hover + Prefetch idle</span>
  </app-heavy-loaders-fast>
} @placeholder {
  <div class="w-full h-20 bg-purple-100">Placeholder div</div>
}
```

- `on hover` — el componente se **construye** cuando el cursor pasa sobre el placeholder.
- `prefetch on idle` — el código JavaScript necesario para construir el componente se **descarga** cuando el navegador está inactivo.

La distinción es importante: `prefetch` no ejecuta el constructor ni crea el componente en el DOM. Solo prepara el bundle de JavaScript en memoria para que, cuando llegue el trigger real (`on hover`), la construcción sea más rápida porque el código ya está descargado. Es análogo a descargar un instalador antes de ejecutarlo.

**Advertencia: peticiones en cascada**

La documentación oficial de Angular advierte que si hay bloques `@defer` anidados — un componente diferido que internamente tiene otro `@defer`, que a su vez tiene otro — se pueden generar peticiones en cascada. Cada nivel de `@defer` descarga su bundle de JavaScript de forma independiente, lo que puede resultar en múltiples peticiones secuenciales. El instructor recomienda tener esto presente al diseñar la arquitectura de componentes diferidos.

**El trigger `when`**

Aunque no se implementa en detalle en esta lección, el instructor recuerda que `when` acepta cualquier expresión booleana (incluyendo señales). Cuando esa expresión se vuelve `true`, se dispara la carga:

```html
@defer (when miSenial()) { ... }
```

Esto permite coordinar la carga del componente con la lógica de negocio de la aplicación.

---

## Ejemplo sencillo

`on hover` es como una vista previa que aparece al pasar el cursor sobre un enlace: el contenido no existe hasta que el usuario muestra interés acercando el cursor. `prefetch` sería como que el navegador empiece a descargar esa vista previa en segundo plano mientras el usuario está inactivo, para que cuando pase el cursor ya esté lista al instante.

---

## Palabras clave y elementos importantes

- `on hover` — trigger que dispara la carga al pasar el cursor sobre el `@placeholder`; acepta referencia local opcional para escuchar sobre otro elemento
- `on immediate` — trigger que dispara la carga tan pronto termina la renderización inicial de la página, sin esperar interacción del usuario
- `on timer(ms)` — trigger que dispara la carga después de `ms` milisegundos desde que la página se renderizó
- **Múltiples triggers** — se pueden combinar con `;` en el mismo `@defer`; la carga se dispara cuando se cumple cualquiera de ellos
- `prefetch on trigger` — descarga anticipada del código JavaScript del componente sin construirlo; cuando llega el trigger principal, la construcción es más rápida al tener el código ya en memoria
- **Peticiones en cascada** — problema que ocurre cuando hay bloques `@defer` anidados; cada nivel genera su propia petición de descarga de forma secuencial; hay que tenerlo presente al diseñar la arquitectura
- `when condicion` — trigger que dispara la carga cuando una expresión booleana (señal u otra) se vuelve `true`
- `on idle` — trigger que dispara la carga cuando el navegador termina todo el trabajo pendiente y queda en estado inactivo; útil como `prefetch` para preparar componentes sin afectar la experiencia inicial

---

## Resumen final

Esta lección completa el catálogo de triggers de `@defer`: `on hover` (cursor encima), `on immediate` (tan pronto termina la renderización), `on timer(ms)` (después de un tiempo). Se puede combinar múltiples triggers en un mismo bloque separándolos con `;`, y la carga se dispara con el primero que se cumpla. La palabra `prefetch` permite descargar el código del componente por adelantado sin construirlo, reduciendo el tiempo de construcción cuando finalmente se dispara el trigger. Se debe tener cuidado con los `@defer` anidados para evitar peticiones en cascada.
