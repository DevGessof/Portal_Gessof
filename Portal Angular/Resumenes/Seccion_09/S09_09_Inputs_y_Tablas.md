# Seccion 9 - Leccion 09: Inputs y Tablas

---

## 1. Titulo de la leccion

**Input de busqueda con referencia local, tabla de paises con daisyUI y tarea de componentes**

---

## 2. Que se aprende en esta leccion

Se crea el input de busqueda con boton en `ByCapitalPageComponent` usando clases de daisyUI, se maneja el evento `keyup.enter` y el click del boton con una referencia local, y se construye la tabla de paises. Al final se plantea la tarea de extraerlos a componentes reutilizables.

---

## 3. Puntos clave explicados

- **Input con daisyUI:** Las clases `input input-bordered` dan estilo al campo de texto. `w-56` limita el ancho a ~224px. `autofocus` pone el cursor alli al montar el componente.
- **Referencia local `#txtSearch`:** Permite acceder al valor del input (`txtSearch.value`) desde el template sin crear una propiedad en el componente.
- **`(keyup.enter)`:** Modificador de evento que escucha solo la tecla Enter. Llama a `onSearch(txtSearch.value)`.
- **`(click)` en el boton:** El boton "Buscar" llama a `onSearch(txtSearch.value)` al hacer clic. Ambos eventos (Enter y clic) ejecutan el mismo metodo.
- **`onSearch(value: string)`:** Metodo en el componente que por ahora solo hace `console.log`. En la seccion 10 disparara la peticion HTTP.
- **Tabla con daisyUI:** Las clases `table table-md w-full` crean una tabla estilizada. Las columnas son: #, Bandera, Nombre, Capital, Poblacion y un espacio para detalles.
- **Tarea propuesta:** Extraer el bloque del input+boton a `SearchInputComponent` (en `country/components/`) y el bloque de la tabla a `CountryListComponent`. Ambos deben ser reutilizables para las tres paginas de busqueda.
- **`output<string>()`:** Para que `SearchInputComponent` emita el valor buscado al padre, se usa `output<string>()` con un evento llamado `value` (sin prefijo `on`, siguiendo la guia de estilos de Angular).
- **`input()` para placeholder:** El placeholder del buscador deberia ser un `input()` opcional con valor por defecto `'Buscar'`, para poder personalizarlo desde cada pagina que use el componente.

---

## 4. Ejemplo sencillo

```html
<!-- by-capital-page.component.html (antes de extraer a componentes) -->
<section>
  <div class="flex flex-row gap-2 mt-2">
    <input
      #txtSearch
      type="text"
      class="input input-bordered w-56"
      placeholder="Buscar por capital"
      autofocus
      (keyup.enter)="onSearch(txtSearch.value)"
    />
    <button class="btn btn-primary" (click)="onSearch(txtSearch.value)">
      Buscar
    </button>
  </div>
</section>

<section class="mt-5">
  <table class="table table-md w-full mt-2">
    <thead>
      <tr>
        <th>#</th>
        <th>Bandera</th>
        <th>Nombre</th>
        <th>Capital</th>
        <th>Poblacion</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <!-- filas de paises aqui -->
    </tbody>
  </table>
</section>
```

```typescript
// by-capital-page.component.ts
onSearch(value: string): void {
  console.log({ value });
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `input input-bordered` | Clases daisyUI para estilizar un campo de texto |
| `autofocus` | Atributo HTML que pone el foco en el input al montar el componente |
| `#txtSearch` | Referencia local para acceder al valor del input desde el template |
| `(keyup.enter)` | Evento que se dispara solo al presionar Enter |
| `onSearch(value)` | Metodo que recibe el texto buscado; hara la peticion HTTP en la seccion 10 |
| `table table-md` | Clases daisyUI para una tabla estilizada de tamano mediano |
| `output<string>()` | Funcion para emitir el valor buscado desde `SearchInputComponent` al padre |
| `input()` con default | Prop opcional para personalizar el placeholder por cada instancia del componente |

---

## 6. Resumen final en pocas palabras

El input usa `#txtSearch` como referencia local para pasar su valor a `onSearch` tanto con Enter como con el boton. La tabla de daisyUI define las columnas de paises. La tarea es extraer ambos bloques a `SearchInputComponent` y `CountryListComponent` con `output<string>()` para emitir la busqueda y `input()` para recibir el placeholder personalizable.
