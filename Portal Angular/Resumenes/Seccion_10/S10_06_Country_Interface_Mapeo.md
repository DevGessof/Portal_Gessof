# Seccion 10 - Leccion 06: Country Interface y Mapeo de Datos

---

## 1. Titulo de la leccion

**Interfaz Country propia, CountryMapper y separacion entre datos del API y datos de la app**

---

## 2. Que se aprende en esta leccion

Se crean las senales de estado en el componente (`isLoading`, `isError`, `countries`), se muestra la data en `CountryListComponent`, se define la interfaz `Country` propia con solo los campos necesarios, y se plantea la tarea de crear `CountryMapper`.

---

## 3. Puntos clave explicados

- **Senales de estado en el componente:** `isLoading = signal(false)`, `isError = signal<string|null>(null)`, `countries = signal<RESTCountry[]>([])`. Se gestionan manualmente en `onSearch`.
- **Bloqueo de peticiones duplicadas:** Si `isLoading()` es `true`, `onSearch` hace `return` inmediato para no disparar multiples peticiones simultaneas.
- **Flujo en `subscribe`:** Al entrar: `isLoading.set(true)`, `isError.set(null)`. Al recibir data: `isLoading.set(false)`, `countries.set(countries)`. El error se gestiona en la siguiente clase.
- **`input.required<RESTCountry[]>()` en `CountryListComponent`:** El componente recibe el arreglo de paises como prop obligatoria. El padre lo pasa con `[countries]="countries()"`.
- **`@for` en la tabla:** Itera `countries()` con `track country.cca2`. Muestra: indice+1, `country.flag` (emoji), imagen SVG (`country.flags.svg`), `country.name.common`, `country.capital[0]`, `country.population`, y boton "Mas informacion".
- **Problema de dependencia del API:** Usar `RESTCountry` directamente en toda la app la hace fragil. Si el API cambia (ej: `latlng` → `lat`/`lng`), hay que modificar toda la base de codigo.
- **Interfaz `Country` propia:** Se crea `country/interfaces/country.interface.ts` con solo los campos necesarios: `cca2`, `flag`, `flagSvg`, `name`, `capital`, `population`. Nombres propios (ej: `flagSvg` en lugar de `flags.svg`).
- **`country/mappers/country.mapper.ts`:** Se crea la clase `CountryMapper` con metodos estaticos. La tarea es implementar `mapRestCountryToCountry(restCountry)` y `mapRestCountryArrayToCountryArray(restCountries)`.

---

## 4. Ejemplo sencillo

```typescript
// country/interfaces/country.interface.ts
export interface Country {
  cca2:       string;
  flag:       string;   // emoji
  flagSvg:    string;   // URL del SVG
  name:       string;   // nombre en espanol
  capital:    string;
  population: number;
}
```

```typescript
// country/mappers/country.mapper.ts (esqueleto de la tarea)
export class CountryMapper {
  // Tarea: implementar estos metodos estaticos
  static mapRestCountryToCountry(restCountry: RESTCountry): Country { ... }
  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] { ... }
}
```

```html
<!-- country-list.component.html -->
@for (country of countries(); track country.cca2; let index = $index) {
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ country.flag }}</td>
    <td><img [src]="country.flags.svg" class="w-10" /></td>
    <td>{{ country.name.common }}</td>
    <td>{{ country.capital }}</td>
    <td>{{ country.population }}</td>
    <td><a class="link-primary">Mas informacion</a></td>
  </tr>
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `isLoading = signal(false)` | Controla el estado de carga para bloquear peticiones duplicadas |
| `isError = signal<string\|null>(null)` | Almacena el mensaje de error o null si no hay error |
| `countries = signal<T[]>([])` | Arreglo reactivo de paises mostrado en la tabla |
| `input.required<Country[]>()` | Prop obligatoria en `CountryListComponent` |
| `track country.cca2` | Identificador unico para el `@for` de la tabla |
| Interfaz `Country` propia | Solo contiene los campos que realmente usa la app |
| `CountryMapper` | Clase con metodos estaticos para transformar `RESTCountry` → `Country` |
| Principio de mapper | Aisla la app de cambios en el API externo |

---

## 6. Resumen final en pocas palabras

Se crean senales manuales para los estados de carga y error, se muestra la data con `@for` en la tabla, y se define la interfaz `Country` propia con solo los campos necesarios. La tarea es implementar `CountryMapper` para transformar el objeto del API al objeto propio de la app, aislando la aplicacion de cambios futuros en el API externo.
