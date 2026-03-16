# Seccion 9 - Leccion 10: Solucion a la Tarea

---

## 1. Titulo de la leccion

**SearchInputComponent, CountryListComponent, rutas by-country y by-region, y ruta dinamica by/:codigo**

---

## 2. Que se aprende en esta leccion

Se resuelve la tarea: se extraen el buscador y la tabla a componentes reutilizables, se crean las paginas `ByCountryPage` y `ByRegionPage` con sus rutas, y se crea la ruta dinamica `/country/by/:codigo` con `CountryPageComponent`.

---

## 3. Puntos clave explicados

- **`SearchInputComponent` en `country/components/`:** Recibe `placeholder` como `input()` opcional (default `'Buscar'`) y emite el valor con `output<string>()` llamado `value`. Emite directamente desde el template con `value.emit(txtSearch.value)` sin metodo intermedio si no hay logica adicional.
- **`[placeholder]="placeholder()"` en el template:** Aplica el valor de la senal de input al atributo `placeholder` del campo HTML. Los `input()` de Angular son senales.
- **`CountryListComponent` en `country/components/`:** Contiene la tabla. Por ahora no recibe ni emite datos. Se expandira en la seccion 10.
- **Selector sin prefijo `app-`:** Se recomienda usar `country-search-input` y `country-list` en lugar de `app-search-input` para que el modulo de origen sea obvio.
- **Ubicacion del buscador:** Aunque podria ir en `shared/` por ser generico, se coloca en `country/components/` porque su uso primario es en busquedas de paises.
- **`ByCountryPageComponent` y `ByRegionPageComponent`:** Se crean en `country/pages/` y se agregan a `children` en `country.routes.ts`. "Por pais" tiene buscador + tabla; "Por region" solo tabla.
- **Ruta dinamica `by/:codigo`:** Se agrega en `children` con `path: 'by/:codigo'`. El parametro `:codigo` puede ser cualquier identificador (id, codigo ISO, etc.).
- **`CountryPageComponent`:** Pagina de detalle de un pais. Se crea en `country/pages/` y se asocia a la ruta `by/:codigo`.
- **Guia de estilos de Angular:** No usar prefijo `on` en nombres de eventos emitidos. Usar `value`, `saved`, `selected` en lugar de `onValue`, `onSaved`.

---

## 4. Ejemplo sencillo

```typescript
// search-input.component.ts
@Component({ selector: 'country-search-input', ... })
export class SearchInputComponent {
  placeholder = input<string>('Buscar');
  value       = output<string>();
}
```

```html
<!-- search-input.component.html -->
<section>
  <div class="flex flex-row gap-2 mt-2">
    <input
      #txtSearch
      type="text"
      class="input input-bordered w-56"
      [placeholder]="placeholder()"
      autofocus
      (keyup.enter)="value.emit(txtSearch.value)"
    />
    <button class="btn btn-primary" (click)="value.emit(txtSearch.value)">
      Buscar
    </button>
  </div>
</section>
```

```html
<!-- by-capital-page.component.html -->
<country-search-input
  placeholder="Buscar por capital"
  (value)="onSearch($event)"
/>
<country-list />
```

```typescript
// country.routes.ts (children completos)
children: [
  { path: 'by-capital', component: ByCapitalPageComponent },
  { path: 'by-country', component: ByCountryPageComponent },
  { path: 'by-region',  component: ByRegionPageComponent  },
  { path: 'by/:codigo', component: CountryPageComponent   },
  { path: '**',         redirectTo: 'by-capital'          }
]
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `SearchInputComponent` | Componente reutilizable con input + boton; emite el texto buscado |
| `output<string>()` llamado `value` | Emite el texto al padre; sin prefijo `on` segun guia de estilos |
| `input<string>('Buscar')` | Prop con valor por defecto para personalizar el placeholder |
| `value.emit(txtSearch.value)` | Emision directa desde el template sin metodo intermedio |
| `CountryListComponent` | Tabla de paises reutilizable en las tres paginas de busqueda |
| `path: 'by/:codigo'` | Ruta dinamica; `:codigo` es el parametro que cambia por cada pais |
| `CountryPageComponent` | Pagina de detalle de un pais; lee el parametro `:codigo` de la URL |
| Guia de estilos Angular | Eventos sin prefijo `on`; `value` no `onValue` |

---

## 6. Resumen final en pocas palabras

Se extraen el buscador y la tabla a componentes reutilizables con `output<string>()` e `input()`. Se crean las paginas `ByCountry`, `ByRegion` y su ruta dinamica `by/:codigo` con `CountryPageComponent`. La guia de estilos de Angular recomienda no usar el prefijo `on` en los nombres de los eventos emitidos.
