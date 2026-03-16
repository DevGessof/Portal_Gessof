# Paginación local - Funcionalidad

## ¿Qué se aprende?

En esta lección se da funcionalidad real a los botones de paginación. Al hacer clic en un botón, el componente actualiza el query parameter `page` en el URL usando `routerLink`, y resalta el botón activo mediante una señal interna llamada `activePage`.

---

## Puntos clave

**El problema de partida**

Los botones de paginación ya se muestran, pero al hacer clic no ocurre nada. El componente solo tiene la estructura visual; le falta la navegación y la lógica de estado activo.

**Usar `routerLink` con arreglo vacío para navegar a la misma ruta**

Para modificar el URL sin cambiar de página, se usa `routerLink` apuntando a un arreglo vacío `[]`. Eso le indica al router de Angular "navega a la ruta actual". Sin este `routerLink`, los `queryParams` no funcionan:

```html
<button [routerLink]="[]" [queryParams]="{ page: page }">
  {{ page }}
</button>
```

Al hacer clic en el botón de la página 3, el URL pasa a ser, por ejemplo, `/` → `/?page=3`.

**Por qué funciona en cualquier ruta**

Como el `routerLink` apunta al URL actual y solo añade el query parameter `page`, el mismo componente funciona sin cambios tanto en `/` (home) como en `/gender/men` o `/gender/women`. La ruta no importa: siempre añade la página al URL que ya está activo.

**El problema con los inputs para el estado activo**

El componente recibe `currentPage` como `input`, pero los inputs no se pueden modificar directamente con `.set()` porque son señales de solo lectura controladas desde el componente padre. Para tener un estado interno modificable se necesita una señal propia.

**Solución con señal interna `activePage`**

Se crea una señal local inicializada con el valor del input:

```typescript
activePage = signal(this.currentPage());
```

Al hacer clic en un botón, se actualiza esta señal local:

```html
<button (click)="activePage.set(page)" [class.btn-primary]="page === activePage()">
```

Así el botón se resalta de inmediato sin depender de una respuesta del componente padre.

**`linkedSignal`: la alternativa recomendada por Angular**

Angular recomienda usar `linkedSignal` en lugar de `signal(this.currentPage())` cuando se quiere inicializar una señal desde un input y luego tratarla como señal independiente. La diferencia es que `linkedSignal` evita problemas de sincronización si el valor del input cambia desde fuera. Su uso es opcional y el comportamiento visible es el mismo.

```typescript
activePage = linkedSignal(() => this.currentPage());
```

**Resultado al final de la lección**

Al hacer clic en cualquier botón de página, el URL se actualiza con `?page=N` y el botón correspondiente queda resaltado. Sin embargo, los productos todavía no cambian al navegar entre páginas; eso se conecta en la siguiente lección.

---

## Ejemplo sencillo

Imagina un mando a distancia donde cada botón tiene una luz. Al pulsar el botón 3, la luz del 3 se enciende. Ese encendido de la luz es la señal `activePage`: no depende de que el televisor confirme que cambió de canal, simplemente se enciende de inmediato al tocar el botón. El URL sería el canal al que realmente sintoniza el televisor.

---

## Palabras clave y elementos importantes

- `[routerLink]="[]"` — navega a la ruta actual sin cambiarla; necesario para que `queryParams` funcione
- `[queryParams]="{ page: page }"` — añade o actualiza el query parameter `page` en el URL
- Query parameter — porción opcional del URL después del `?`, como `?page=3`
- `input` — señal de solo lectura que recibe valores del componente padre; no se puede modificar con `.set()`
- `signal(valor_inicial)` — señal interna y modificable; se inicializa con el valor del input
- `activePage` — señal interna del componente que controla qué botón aparece resaltado
- `.set(valor)` — método de una señal writable para cambiar su valor
- `[class.btn-primary]` — binding condicional de clase CSS en Angular
- `linkedSignal` — primitivo de Angular para inicializar una señal desde otra señal (como un input) y luego tratarla de forma independiente; alternativa recomendada a `signal(this.input())`

---

## Resumen final

Esta lección conecta los botones de paginación con el sistema de navegación de Angular. Al hacer clic, `routerLink` con arreglo vacío actualiza el query parameter `page` en el URL sin cambiar la ruta. El botón activo se resalta mediante una señal interna `activePage` que se actualiza en el evento `(click)`. Angular recomienda usar `linkedSignal` para inicializar señales a partir de inputs, aunque la solución con `signal()` también funciona. El siguiente paso es que ese cambio de URL dispare una nueva petición HTTP con los productos de la página correcta.
