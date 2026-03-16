# ChangeDetection — OnPush

## ¿Qué se aprende?

Esta lección explica qué es el sistema de detección de cambios de Angular (`ChangeDetection`), cuál es la diferencia entre la estrategia por defecto (`CheckAlways`) y la estrategia `OnPush`, y por qué Angular está evolucionando hacia un modelo Zoneless. Se demuestra con un ejemplo práctico que una propiedad de clase tradicional no actualiza la vista con `OnPush`, pero una señal sí lo hace. Se introduce también el concepto de señal computada (`computed`).

---

## Puntos clave

**Contexto: la página Change Detection**

Se trabaja en el componente `change-detection.component`. El template se define directamente en el TypeScript (inline). Se importa `TitleComponent` para mostrar el título de la página.

**Dos formas de almacenar datos**

Se crean dos propiedades en el componente para comparar su comportamiento:

```typescript
public frameworkAsSignal = signal({ name: 'Angular', releaseYear: 2016 });
public frameworkAsProperty = { name: 'Angular', releaseYear: 2016 };
```

- `frameworkAsSignal` — valor envuelto en una señal.
- `frameworkAsProperty` — propiedad de clase tradicional (sin señal).

Ambas se muestran en el template con el pipe `json`:

```html
<pre>{{ frameworkAsSignal() | json }}</pre>
<pre>{{ frameworkAsProperty | json }}</pre>
```

**Cómo funciona Zone.js (estrategia por defecto)**

Angular usa una librería llamada `Zone.js` que intercepta eventos asíncronos (como `setTimeout`, peticiones HTTP, eventos del DOM) y notifica a Angular para que verifique si algo cambió. Este comportamiento es la estrategia `CheckAlways` (opción por defecto en `ChangeDetectionStrategy`): Angular verifica todos los componentes ante cualquier evento.

**El problema con Zone.js**

Zone.js funciona bien, pero tiene un coste: Angular verifica el estado de todos los componentes ante cualquier cambio, aunque ese cambio no afecte a la mayoría de ellos. Angular está migrando hacia el modo "Zoneless", donde cada componente se actualiza solo cuando sus señales o inputs cambian.

**Cambiar a la estrategia `OnPush`**

Se puede activar `OnPush` en el decorador del componente:

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  ...
})
```

Con `OnPush`, Angular solo actualiza el componente cuando:

- Un `@Input()` cambia.
- Una señal usada en el template cambia.
- Se dispara un evento desde el propio componente.
- Se llama manualmente a `markForCheck()` del `ChangeDetectorRef`.

**Demostración del comportamiento**

Se añade un `setTimeout` en el constructor que después de 3 segundos modifica ambas propiedades:

```typescript
constructor() {
  setTimeout(() => {
    this.frameworkAsProperty.name = 'React';           // propiedad tradicional
    this.frameworkAsSignal.update(v => ({ ...v, name: 'React' })); // señal
    console.log('Hecho');
  }, 3000);
}
```

- **Sin `OnPush`** — ambas propiedades se actualizan en la vista a los 3 segundos porque Zone.js detecta el `setTimeout` y fuerza la verificación.
- **Con `OnPush`** — la propiedad tradicional NO actualiza la vista (Angular no detecta ese cambio). La señal SÍ actualiza la vista, porque Angular sabe que esa señal cambió.

**Por qué la señal sí funciona con `OnPush`**

Las señales son reactivas: cuando cambian, notifican directamente a Angular qué partes del DOM deben actualizarse. No necesitan Zone.js. Por eso son compatibles con `OnPush` y con el futuro modo Zoneless.

**Señal computada (`computed`)**

Una señal computada es una señal de solo lectura que se recalcula automáticamente cuando alguna de sus dependencias (otras señales) cambia:

```typescript
public currentFramework = computed(() =>
  `Change Detection — ${this.frameworkAsSignal().name}`
);
```

- `computed()` — función de `@angular/core`.
- La función interna se vuelve a ejecutar automáticamente cada vez que `frameworkAsSignal` cambia.
- Se usa en el template como cualquier señal: `currentFramework()`.

En la lección, `currentFramework` se pasa como título al `TitleComponent`:

```html
<app-title [title]="currentFramework()" />
```

Así el título de la página cambia automáticamente cuando el framework activo cambia, sin ninguna lógica adicional.

**El futuro: modo Zoneless**

El instructor anticipa que en versiones futuras de Angular (18, 19, 20), `OnPush` podría convertirse en la estrategia por defecto o incluso ser la única opción. El modo Zoneless eliminaría la necesidad de Zone.js completamente, dejando a las señales como el único mecanismo de notificación de cambios. Esto haría Angular considerablemente más rápido, comparativamente mejor que React en rendimiento según benchmarks que el instructor menciona.

---

## Ejemplo sencillo

Zone.js es como un vigilante de seguridad que revisa todas las habitaciones del edificio cada vez que suena cualquier alarma, aunque el problema sea solo en una habitación. `OnPush` con señales es como instalar sensores individuales en cada habitación: solo se activa la alarma del cuarto que realmente tuvo un cambio.

---

## Palabras clave y elementos importantes

- **Zone.js** — librería usada por Angular para interceptar eventos asíncronos y disparar la detección de cambios; presente en la estrategia `CheckAlways`
- `ChangeDetectionStrategy` — enumeración de Angular con dos opciones: `Default` (alias `CheckAlways`) y `OnPush`
- `ChangeDetectionStrategy.Default` / `CheckAlways` — estrategia por defecto; Angular verifica todos los componentes ante cualquier evento asíncrono
- `ChangeDetectionStrategy.OnPush` — estrategia optimizada; Angular solo actualiza el componente cuando cambia un input, una señal usada en el template, o un evento propio del componente
- **Zoneless** — modo futuro de Angular sin Zone.js; los cambios se propagan únicamente mediante señales y ciclos de vida del componente
- `computed(fn)` — función de `@angular/core` que crea una señal de solo lectura derivada de otras señales; se recalcula automáticamente cuando sus dependencias cambian
- `signal.update(fn)` — método para actualizar el valor de una señal basándose en el valor anterior; la función recibe el valor actual y devuelve el nuevo
- `{ ...v, name: 'React' }` — spread operator de JavaScript para crear un nuevo objeto copiando las propiedades del original y sobreescribiendo `name`; necesario con `OnPush` porque Angular detecta el nuevo objeto como distinto al anterior
- `| json` — pipe de Angular que serializa un objeto a JSON para mostrarlo en el template; útil para depuración
- `setTimeout` — función JavaScript usada aquí para simular un cambio asíncrono después de 3 segundos

---

## Resumen final

La estrategia `OnPush` hace que Angular solo actualice un componente cuando sus señales o inputs cambian, en lugar de verificar todo ante cualquier evento. Con `OnPush` activo, una propiedad de clase tradicional modificada directamente no actualiza la vista; una señal sí lo hace porque notifica directamente a Angular. Las señales computadas (`computed`) derivan su valor de otras señales y se actualizan automáticamente. Este modelo es la base del futuro modo Zoneless de Angular, que promete mejoras significativas de rendimiento.
