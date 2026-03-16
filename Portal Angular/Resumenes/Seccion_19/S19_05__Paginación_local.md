# Paginación local

## ¿Qué se aprende?

En esta lección se construye la estructura base del componente de paginación reutilizable. Se crea el componente en el módulo `shared`, se definen sus inputs, se genera dinámicamente la lista de botones de página con una propiedad `computed` y se conecta al `home-page` para que reciba el número total de páginas desde el servidor.

---

## Puntos clave

**Por qué el componente va en `shared` y no en `products`**

La paginación no está ligada a los productos: podría paginar usuarios, pedidos o cualquier otra cosa. Al colocarlo en `src/app/shared/components/`, el componente queda disponible para cualquier módulo del proyecto sin crear dependencias innecesarias entre features.

**Crear el componente `pagination`**

Se crea con Angular Schematics dentro de `src/app/shared/components/`. El selector se deja como `app-pagination` para dejar claro que es un componente propio del proyecto.

**Inputs del componente**

El componente recibe dos inputs:

```typescript
currentPage = input<number>(1);  // página activa, por defecto 1
pages      = input<number>(0);   // total de páginas, por defecto 0
```

`currentPage` es opcional porque si no se indica, se asume que estamos en la página 1. `pages` empieza en 0 para que si no se pasan páginas, no se renderice ningún botón.

**Generar la lista de páginas con `computed`**

En lugar de trabajar con el número de páginas directamente en el template, se crea una propiedad `computed` que genera un arreglo de números:

```typescript
getPagesList = computed(() => {
  return Array(this.pages()).fill(null).map((_, i) => i + 1);
});
```

Si `pages()` vale 6, el resultado es `[1, 2, 3, 4, 5, 6]`. Esto facilita el uso de `@for` en el template y hace que la lista se recalcule automáticamente si el número de páginas cambia.

**Template del componente**

Se usa el HTML de paginación de daisyUI como base. El contenedor principal recibe clases de Tailwind para centrarlo:

```html
<div class="join flex justify-center items-center mt-4 mb-10">
  @for (page of getPagesList(); track page) {
    <button class="join-item btn" [class.btn-primary]="page === currentPage()">
      {{ page }}
    </button>
  }
  @empty {
    <p>No hay páginas</p>
  }
</div>
```

El binding `[class.btn-primary]` añade o quita la clase CSS según si el botón corresponde a la página activa. `@empty` muestra un mensaje si no hay páginas, útil solo para depuración.

**Conectar el componente al `home-page`**

En el template de `home-page` se coloca el componente encima de la lista de productos:

```html
<app-pagination [pages]="productsResource.value()?.pages ?? 0" />
```

El operador `?? 0` asegura que si el valor es `undefined` (mientras carga), se pase 0 y no se muestren botones.

Se importa `PaginationComponent` en el arreglo `imports` del componente `home-page`. El alias `@shared/*` definido en `tsconfig.json` facilita la importación.

**Estado al final de la lección**

La paginación ya muestra los botones (1, 2, 3, 4, 5, 6 para 52 productos de 9 en 9) y resalta el botón de la página actual. Sin embargo, al hacer clic en los botones todavía no ocurre nada: esa funcionalidad se implementa en la siguiente lección.

---

## Ejemplo sencillo

Piensa en un índice de un libro. El componente de paginación es como el índice: sabe cuántos capítulos hay (porque se lo dice la página padre) y muestra el número de cada uno. Resalta el capítulo en el que estás. Pero por ahora solo muestra los números; hacer que al tocar un número se vaya a esa página es el siguiente paso.

---

## Palabras clave y elementos importantes

- `shared/components/` — carpeta para componentes que no pertenecen a ningún feature específico
- `app-pagination` — selector del componente de paginación reutilizable
- `input<number>(1)` — input opcional con valor por defecto
- `currentPage` — input que indica qué página está activa; por defecto es 1
- `pages` — input con el total de páginas que devuelve el servidor; por defecto es 0
- `computed` — señal derivada que se recalcula automáticamente cuando cambian sus dependencias
- `Array(n).fill(null).map((_, i) => i + 1)` — forma de crear un arreglo `[1, 2, ..., n]`
- `getPagesList` — propiedad `computed` que transforma el número de páginas en un arreglo iterable
- `[class.btn-primary]` — binding condicional de clase CSS en Angular
- `@for` / `@empty` — bloques de control de flujo del nuevo syntax de Angular
- `join`, `btn`, `btn-primary` — clases de daisyUI para estilizar botones de paginación
- `?? 0` — operador nullish coalescing: usa 0 si el valor es `undefined` o `null`
- `productsResource.value()?.pages` — número total de páginas que devuelve el API junto con los productos

---

## Resumen final

Esta lección construye la estructura visual del componente de paginación. Se crea en `shared/components/` con dos inputs (`currentPage` y `pages`) y una propiedad `computed` llamada `getPagesList` que convierte el número total de páginas en un arreglo iterable. El template usa `@for` para renderizar un botón por página y `[class.btn-primary]` para resaltar la página activa. El componente se conecta a `home-page`, que le pasa el número de páginas desde el `rxResource`. Los botones ya se muestran correctamente, pero la navegación al hacer clic se implementa en la siguiente lección.
