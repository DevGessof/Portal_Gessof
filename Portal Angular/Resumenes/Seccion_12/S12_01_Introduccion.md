# Lección 01 – Introducción a los Pipes de Angular

## ¿Qué se aprende en esta lección?
Se presenta el concepto de **pipes** en Angular: qué son, para qué sirven y cuáles vienen incluidos en `@angular/common`. Se anticipa el contenido de la sección, que cubre pipes de cadenas de texto, números, fechas, internacionalización y pluralización, dejando los pipes personalizados para la sección siguiente.

## Puntos clave explicados
- Un **pipe** transforma la presentación de un valor en el template **sin mutar** el dato original.
- Se usan con el operador `|` dentro de las plantillas HTML: `{{ valor | nombrePipe }}`.
- Angular incluye una colección de pipes listos para usar en `@angular/common`.
- Categorías cubiertas en esta sección:
  - **Strings:** `uppercase`, `lowercase`, `titlecase`
  - **Números:** `number` (decimal), `percent`, `currency`
  - **Fechas:** `date`
  - **Internacionalización:** `i18nSelect`, `i18nPlural`
  - **Utilidades:** `slice`, `json`, `keyvalue`, `async`
- Los **pipes personalizados** se verán en la siguiente sección del curso.

## Ejemplo sencillo
```html
<!-- Sin pipe: muestra el valor tal cual -->
<p>{{ nombre }}</p>

<!-- Con pipe: transforma solo la visualización -->
<p>{{ nombre | uppercase }}</p>
```
El valor de la variable `nombre` **no cambia** en el componente; solo cambia cómo se muestra.

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `\|` | Operador pipe en templates Angular |
| `@angular/common` | Módulo donde viven los pipes incluidos |
| `uppercase` / `lowercase` / `titlecase` | Pipes de transformación de texto |
| `number` / `percent` / `currency` | Pipes numéricos |
| `date` | Pipe de fechas con soporte de locale |
| `i18nSelect` / `i18nPlural` | Pipes de internacionalización |
| `slice` / `json` / `keyvalue` / `async` | Pipes de utilidad |

## Resumen final
Los pipes son transformadores visuales que se aplican en el template con `|`. Angular incluye en `@angular/common` un conjunto completo para textos, números, fechas e internacionalización, todos sin modificar el dato subyacente.
