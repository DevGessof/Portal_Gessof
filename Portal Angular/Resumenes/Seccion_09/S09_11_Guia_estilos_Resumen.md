# Seccion 9 - Leccion 11: Guia de Estilos - Resumen

---

## 1. Titulo de la leccion

**Guia de estilos de Angular, standalone components sin NgModule y resumen de la seccion**

---

## 2. Que se aprende en esta leccion

Se hace un repaso de las decisiones de arquitectura tomadas en la seccion: estructura de carpetas por dominio, ausencia de modulos `.module.ts`, y la guia oficial de estilos de Angular que estandariza nomenclatura y buenas practicas para equipos.

---

## 3. Puntos clave explicados

- **Estructura por dominios:** Separar el codigo en `country/`, `shared/`, etc. es una decision de organizacion. Angular no obliga a ninguna estructura, pero esta facilita el trabajo en equipo y la escalabilidad.
- **Sin modulos `.module.ts`:** Desde que los standalone components son el default, ya no es necesario crear archivos `NgModule`. Cada componente tiene sus propios `imports` internos y actua como su propio modulo.
- **Componente = modulo:** El array `imports` dentro de un `@Component` standalone cumple la misma funcion que `imports` en un `NgModule`. Esto reduce la cantidad de archivos y la complejidad.
- **Retrocompatibilidad:** El codigo con modulos tradicionales sigue siendo compatible con Angular moderno. Ambos enfoques conviven.
- **Guia de estilos oficial de Angular:** Documento mantenido por el equipo de Angular con recomendaciones de nomenclatura y estructura. Esta en el material adjunto de la leccion.
  - Nombres de eventos sin prefijo `on`: `value` no `onValue`, `saveTheDay` no `onSaveTheDay`.
  - La razon: los parentesis `()` ya indican que es un evento; el prefijo `on` es redundante.
  - Sintaxis moderna (`output()`) vs sintaxis anterior (`@Output() EventEmitter`): ambas son validas pero la nueva es mas concisa.
  - La guia cubre: nomenclatura de componentes, directivas, pipes, prefijos de selectores, estructura de archivos, y mucho mas.
- **Layouts vs Pages vs Components:** Son todos componentes de Angular. La distincion es conceptual: layouts tienen `router-outlet`, pages son pantallas completas, components son piezas reutilizables.
- **`country/interfaces/`:** Para las interfaces TypeScript del dominio de paises.
- **`country/services/`:** Para los servicios del dominio de paises.

---

## 4. Ejemplo sencillo

```typescript
// Sintaxis ANTERIOR (sigue siendo valida)
import { Output, EventEmitter } from '@angular/core';

@Output() onSavedTheDay = new EventEmitter<void>();
// Se usa como: (onSavedTheDay)="handler()"

// Sintaxis NUEVA (recomendada)
import { output } from '@angular/core';

savedTheDay = output<void>();
// Se usa como: (savedTheDay)="handler()"
// Sin prefijo "on" → mas legible y menos redundante
```

```
Estructura final de la seccion:
app/
  country/
    components/   → SearchInputComponent, TopMenuComponent, CountryListComponent
    interfaces/   → country.interface.ts (seccion 10)
    layouts/      → CountryLayoutComponent
    pages/        → ByCapitalPage, ByCountryPage, ByRegionPage, CountryPage
    services/     → country.service.ts (seccion 10)
    country.routes.ts
  shared/
    pages/        → HomePageComponent
    components/   → FooterComponent
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Guia de estilos de Angular | Documento oficial con buenas practicas de nomenclatura y estructura |
| Sin prefijo `on` en eventos | Recomendacion oficial: `value` no `onValue` |
| Standalone components | Componentes sin NgModule; sus `imports` son propios |
| `@Output() EventEmitter` | Sintaxis anterior para emitir eventos (sigue siendo valida) |
| `output<T>()` | Sintaxis moderna equivalente; mas concisa |
| Layout | Componente con `router-outlet` que envuelve rutas hijas |
| Page | Componente de pantalla completa asociado a una ruta |
| Component | Pieza reutilizable sin relacion directa con una ruta |

---

## 6. Resumen final en pocas palabras

La seccion 9 construyo la estructura completa de CountryApp: carpetas por dominio, rutas separadas con `loadChildren`, layouts, paginas y componentes reutilizables, daisyUI para el diseno, y SVGs de Iconify para los iconos. La guia oficial de Angular estandariza la nomenclatura para que todos los desarrolladores del equipo escriban codigo consistente. La funcionalidad HTTP se implementa en la seccion 10.
