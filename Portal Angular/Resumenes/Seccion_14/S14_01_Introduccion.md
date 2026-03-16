# Lección 01 – Introducción a los Formularios Reactivos

## ¿Qué se aprende en esta lección?
Se presenta la Sección 14 del curso, centrada en **formularios reactivos** de Angular. Se explica por qué se prefieren sobre los formularios por template y se hace un repaso de los temas que cubre la sección.

## Puntos clave explicados
- Angular ofrece tres enfoques para formularios: referencias locales (manual), formularios por **template** y formularios **reactivos**.
- Los formularios por template colocan la lógica en el HTML, lo que dificulta la lectura y el mantenimiento cuando el formulario crece.
- Los **formularios reactivos** mantienen la lógica en TypeScript, ofrecen mayor control, permiten suscribirse a cambios y facilitan las validaciones síncronas y asíncronas.
- La sección cubre: `FormBuilder`, validaciones incluidas en Angular, formularios dinámicos (agregar y quitar campos), estados `pristine`/`touched`, y reseteo de formularios.
- Esta sección sienta las bases de la siguiente, por lo que ambas van en conjunto.

## Ejemplo sencillo
```
Formulario por template → lógica en HTML → difícil de mantener
Formulario reactivo     → lógica en TypeScript → limpio, testeable, poderoso
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| Formularios reactivos | Enfoque recomendado: lógica en TypeScript |
| Formularios por template | Lógica en HTML; no recomendado para formularios complejos |
| `FormBuilder` | Servicio que simplifica la creación de formularios |
| Validaciones incluidas | Angular provee validadores listos (`required`, `min`, `minLength`…) |
| `pristine` / `touched` | Estados del formulario para controlar cuándo mostrar errores |

## Resumen final
Los formularios reactivos son la opción recomendada en Angular porque concentran la lógica en TypeScript, son más fáciles de validar y mantener. Esta sección enseña el ciclo completo: creación, validación, visualización de errores y reseteo.
