# @for — @if — Nueva sintaxis

## ¿Qué se aprende?

Esta lección muestra cómo usar la nueva sintaxis `@for` e `@if` de Angular 17 para renderizar el menú lateral. Se compara con el `*ngFor` y `*ngIf` tradicionales, se explica por qué la nueva sintaxis soluciona el problema de no poder combinar ambas directivas en el mismo elemento, y se implementa la navegación con `routerLink` y `routerLinkActive`.

---

## Puntos clave

**El problema con `*ngFor` y `*ngIf` en el mismo elemento**

Con la sintaxis anterior, no era posible colocar `*ngFor` y `*ngIf` en el mismo elemento HTML. Angular lanzaba un error indicando que no se pueden aplicar múltiples directivas estructurales al mismo elemento. Esto obligaba a crear un elemento contenedor adicional (`ng-container`) solo para separar las dos directivas, lo que añadía complejidad al código.

**La nueva sintaxis de `@for`**

Angular 17 introduce bloques de control de flujo nativos en las plantillas. La sintaxis del `@for` es:

```html
@for (item of menuItems; track $index) {
  <!-- HTML a duplicar por cada elemento -->
}
```

- `item of menuItems` — itera sobre el arreglo `menuItems`.
- `track` — propiedad obligatoria que indica cómo Angular identifica cada elemento para realizar seguimiento eficiente en el DOM. Se puede usar el índice (`$index`) o cualquier propiedad única del elemento (como `path` o `title`).
- El contenido entre las llaves es el HTML que se repite por cada ítem.

**Por qué `track` es obligatorio**

Angular necesita saber cómo identificar cada elemento del arreglo para poder actualizarlo de forma eficiente en el DOM (por ejemplo, en animaciones, drag and drop, o reordenamientos). Por eso el `@for` obliga a declarar el `track`. Si los elementos no van a cambiar de posición, usar `track $index` es suficiente. Si los elementos pueden cambiar, es mejor usar una propiedad única del objeto (como `item.path`).

**Combinar `@for` con `@if` sin problemas**

Con la nueva sintaxis, `@if` y `@for` son bloques independientes que se pueden anidar libremente:

```html
@if (true) {
  @for (item of menuItems; track $index) {
    <!-- HTML -->
  }
}
```

O en orden inverso:

```html
@for (item of menuItems; track $index) {
  @if (condicion) {
    <!-- Solo muestra si se cumple la condición -->
  }
}
```

Esto no era posible con `*ngFor` y `*ngIf` en el mismo elemento, y ahora es completamente natural.

**Implementación del menú lateral**

En el template del `SideMenuComponent` se mantiene solo un ítem base del menú (anchor tag) y se elimina el resto. Ese ítem base se envuelve en el `@for` para duplicarlo por cada ruta:

```html
@for (item of menuItems; track $index) {
  <a [routerLink]="item.path"
     routerLinkActive="bg-blue-800">
    {{ item.title }}
    {{ item.path }}
  </a>
}
```

- `[routerLink]="item.path"` — navega a la ruta del ítem al hacer clic.
- `routerLinkActive="bg-blue-800"` — añade la clase `bg-blue-800` cuando la ruta está activa.
- `{{ item.title }}` — muestra el título de la ruta (definido en `app.routes.ts`).
- `{{ item.path }}` — muestra la ruta para referencia visual.

**`RouterModule` necesario en componentes standalone**

Cada componente `standalone` es una "mini isla" independiente. Para usar `routerLink` y `routerLinkActive`, el componente debe importar `RouterModule` en su arreglo `imports`. Angular reutiliza el módulo ya cargado en memoria; no lo vuelve a descargar cada vez que un nuevo componente lo importa.

**Resultado**

Cada vez que se añade una nueva ruta al archivo `app.routes.ts`, aparece automáticamente en el menú lateral sin modificar el template del `SideMenuComponent`. El enlace activo se resalta visualmente con el color azul oscuro.

---

## Ejemplo sencillo

El `@for` es como una plantilla de impresión en serie: defines el diseño de una tarjeta una vez y se imprime automáticamente una copia por cada elemento de la lista. El `@if` es como la condición de impresión: "imprime esta tarjeta solo si el elemento cumple esta condición". Con la nueva sintaxis, se pueden combinar libremente sin trucos adicionales.

---

## Palabras clave y elementos importantes

- `@for (item of array; track expresion) { }` — nueva sintaxis de Angular 17 para iterar arreglos en plantillas; reemplaza `*ngFor`
- `track` — propiedad obligatoria en `@for`; indica cómo identificar cada elemento para seguimiento eficiente en el DOM
- `$index` — variable interna del `@for`; contiene el índice numérico del elemento actual; se usa como valor de `track` cuando no hay un identificador único
- `@if (condicion) { }` — nueva sintaxis de Angular 17 para mostrar contenido condicionalmente; reemplaza `*ngIf`
- **Directivas estructurales** — directivas que modifican el DOM (`*ngFor`, `*ngIf`); no se podían combinar en el mismo elemento; la nueva sintaxis elimina esta limitación
- `routerLink` — directiva de Angular para navegar a una ruta al hacer clic; requiere `RouterModule`
- `routerLinkActive` — directiva de Angular que añade una clase CSS cuando la ruta del enlace está activa; requiere `RouterModule`
- `RouterModule` — debe importarse en cada componente `standalone` que use directivas de rutas

---

## Resumen final

La nueva sintaxis `@for` e `@if` de Angular 17 reemplaza las directivas `*ngFor` y `*ngIf`. La principal ventaja es que se pueden anidar libremente sin restricciones. El `@for` requiere siempre la propiedad `track` para identificar los elementos. En esta lección se aplica `@for` para generar el menú lateral dinámicamente desde el arreglo `menuItems`, con `routerLink` y `routerLinkActive` para la navegación. El resultado es un menú que se actualiza solo cuando se añaden rutas al archivo de rutas de la aplicación.
