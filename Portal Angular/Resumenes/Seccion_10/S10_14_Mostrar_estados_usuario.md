# Seccion 10 - Leccion 14: Mostrar Diferentes Estados al Usuario

---

## 1. Titulo de la leccion

**Inputs opcionales en CountryListComponent para errorMessage, isLoading e isEmpty**

---

## 2. Que se aprende en esta leccion

Se enriquece `CountryListComponent` con inputs opcionales (`errorMessage`, `isLoading`, `isEmpty`) para mostrar diferentes estados al usuario desde el template de la tabla. Se usa el operador `delay` de RxJS para simular latencia y verificar los estados visualmente.

---

## 3. Puntos clave explicados

- **Operador `delay` de RxJS:** Se agrega `.pipe(delay(3000))` en `searchByCountry` para simular 3 segundos de latencia y poder observar el estado de carga. Se elimina al terminar la clase (se deja en 2000ms para la demo).
- **`countryResource.value() ?? []`:** En el template del padre, en lugar de un `@if` complejo para verificar `hasValue`, se pasa directamente `countryResource.value() ?? []` al input `countries`. Si no hay valor, se envia arreglo vacio. Simplifica el template del padre.
- **Inputs opcionales en `CountryListComponent`:** Se agregan con `input<tipo>()` sin `required`. Al no especificar un valor por defecto, el tipo sera `string | undefined`, `boolean | undefined`, etc.
  - `errorMessage = input<string | unknown | null>()` — mensaje de error a mostrar
  - `isLoading = input<boolean>(false)` — indica si hay una carga en progreso
  - `isEmpty = input<boolean>(false)` — indica si el arreglo de paises esta vacio
- **Filas condicionales en el `tbody`:** Se agregan tres bloques `@if` al final del `tbody` de la tabla:
  1. Si `errorMessage()` → mostrar fila con el mensaje de error, `colspan="8"`, `text-center`
  2. Si `countries().length === 0 && !isLoading()` → mostrar "No se encontraron resultados"
  3. Si `isLoading()` → mostrar "Buscando paises..." (o un spinner)
- **Comentario separador antes de cada `@if`:** La nueva sintaxis de control flow de Angular fusiona bloques `@if` adyacentes visualmente. Un comentario HTML entre ellos los separa y mejora la legibilidad.
- **Pasar valores desde el padre:** En `by-country-page.component.html` se agregan los bindings al `country-list`:
  - `[errorMessage]="countryResource.error()"`
  - `[isEmpty]="(countryResource.value()?.length ?? 0) === 0"`
  - `[isLoading]="countryResource.isLoading()"`
- **Mismo patron en `by-capital-page`:** Se copia y pega el mismo bloque de bindings para que ambas paginas de busqueda tengan la misma experiencia de usuario.

---

## 4. Ejemplo sencillo

```typescript
// country-list.component.ts
@Component({ imports: [...], ... })
export class CountryListComponent {
  countries    = input.required<Country[]>();
  errorMessage = input<string | unknown | null>();
  isLoading    = input<boolean>(false);
  isEmpty      = input<boolean>(false);
}
```

```html
<!-- country-list.component.html - dentro del tbody -->
<!-- estados adicionales -->
@if (errorMessage()) {
  <tr><td colspan="8" class="text-center">{{ errorMessage() }}</td></tr>
}
<!-- sin resultados -->
@if (countries().length === 0 && !isLoading()) {
  <tr><td colspan="8" class="text-center">No se encontraron resultados</td></tr>
}
<!-- cargando -->
@if (isLoading()) {
  <tr><td colspan="8" class="text-center">Buscando paises...</td></tr>
}
```

```html
<!-- by-country-page.component.html -->
<country-list
  [countries]="countryResource.value() ?? []"
  [errorMessage]="countryResource.error()"
  [isEmpty]="(countryResource.value()?.length ?? 0) === 0"
  [isLoading]="countryResource.isLoading()"
/>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `delay(ms)` de RxJS | Operador que retrasa la emision del Observable; util para simular latencia |
| `input<tipo>(defaultValue)` | Input opcional con valor por defecto; no requiere `required` |
| `countryResource.value() ?? []` | Si el resource no tiene valor, usa arreglo vacio como fallback |
| `colspan="8"` | Hace que una celda de tabla ocupe 8 columnas; util para mensajes de estado |
| Comentario separador en `@if` | Evita que bloques `@if` adyacentes se fusionen visualmente en el template |
| `countryResource.isLoading()` | Senal del resource; verdadera mientras el loader esta ejecutandose |

---

## 6. Resumen final en pocas palabras

Se enriquece `CountryListComponent` con tres inputs opcionales (`errorMessage`, `isLoading`, `isEmpty`) que muestran filas de estado dentro del `tbody`. El padre pasa los valores directamente desde las propiedades del `countryResource`. El operador `delay` de RxJS permite simular latencia para verificar visualmente el estado de carga. El mismo patron se replica en todas las paginas de busqueda.
