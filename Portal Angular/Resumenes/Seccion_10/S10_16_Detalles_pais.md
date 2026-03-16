# Seccion 10 - Leccion 16: Detalles del Pais

---

## 1. Titulo de la leccion

**NotFoundComponent con Location.back(), CountryInformationComponent y estados de carga**

---

## 2. Que se aprende en esta leccion

Se crea `NotFoundComponent` con el boton "Regresar" usando `Location.back()`, se crea `CountryInformationComponent` como componente interno de `CountryPageComponent` para mostrar los datos del pais, y se agrega un estado de "Cargando..." con `@if (countryResource.isLoading())`.

---

## 3. Puntos clave explicados

- **`NotFoundComponent`:** Se crea en `country/components/not-found/` con Angular Schematics. Recibe el HTML del error (icono SVG de Iconify, mensaje "No se encontro el pais", boton "Regresar"). Selector: `app-not-found`.
- **`Location` de `@angular/common`:** Se inyecta en `NotFoundComponent`. Metodo `back()` navega al historial del navegador hacia atras, sin importar de que ruta vino el usuario.
- **`location.back()` vs `routerLink`:** `location.back()` es dinamico: regresa a la pantalla anterior sea cual sea. `routerLink` enviaria siempre a una ruta fija. Se prefiere `location.back()` para un boton "Regresar" generico.
- **`(click)="goBack()"` en el anchor tag:** El metodo `goBack()` en el componente llama `this.location.back()`.
- **`CountryInformationComponent`:** Se crea dentro del directorio `country-page/` (componente interno de la pagina, no reutilizable). Selector personalizado: `country-information-page`. Recibe `country = input.required<Country>()`.
- **Organizacion de `CountryPageComponent`:** El template queda limpio con tres bloques: `@if isLoading` → "Cargando...", `@if error` → `<app-not-found>`, `@if hasValue` → `<country-information-page [country]="value()!">`.
- **Importar `CountryInformationComponent`:** Debe agregarse al arreglo `imports` de `CountryPageComponent` para que el selector funcione.
- **Beneficio de separar componentes:** `CountryPageComponent` queda con muy pocas lineas de HTML. Cada componente hijo tiene una responsabilidad clara.

---

## 4. Ejemplo sencillo

```typescript
// not-found.component.ts
@Component({ selector: 'app-not-found', ... })
export class NotFoundComponent {
  private location = inject(Location);  // de @angular/common

  goBack(): void {
    this.location.back();
  }
}
```

```html
<!-- not-found.component.html -->
<section class="flex flex-col items-center justify-center mt-10">
  <!-- icono SVG de Iconify -->
  <svg ...></svg>
  <h1>No se encontro el pais</h1>
  <a class="link-primary cursor-pointer" (click)="goBack()">Regresar</a>
</section>
```

```typescript
// country-information.component.ts (interno de country-page)
@Component({ selector: 'country-information-page', ... })
export class CountryInformationComponent {
  country = input.required<Country>();
}
```

```html
<!-- country-page.component.html -->
@if (countryResource.isLoading()) {
  <h3 class="text-3xl">Cargando...</h3>
}
@if (countryResource.error()) {
  <app-not-found />
}
@if (countryResource.hasValue()) {
  <country-information-page [country]="countryResource.value()!" />
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `Location` de `@angular/common` | Servicio de Angular para interactuar con el historial del navegador |
| `location.back()` | Navega a la pagina anterior del historial; equivale al boton Atras del navegador |
| `(click)="goBack()"` | Conecta el clic del anchor tag con el metodo que llama `location.back()` |
| Componente interno | Componente creado dentro del directorio de una pagina; no se reutiliza fuera |
| `input.required<Country>()` | Prop obligatoria en `CountryInformationComponent` |
| Selector personalizado | `country-information-page` en lugar del prefijo `app-` por convencion interna |
| Separacion de responsabilidades | `CountryPageComponent` solo gestiona estados; `CountryInformationComponent` solo muestra datos |

---

## 6. Resumen final en pocas palabras

`NotFoundComponent` centraliza el HTML del error y usa `Location.back()` para regresar dinamicamente a la pantalla anterior. `CountryInformationComponent` es un componente interno que recibe un `Country` obligatorio y muestra sus detalles. `CountryPageComponent` queda con un template limpio de tres bloques: cargando, error y datos. Esta separacion hace el codigo facil de leer y mantener.
