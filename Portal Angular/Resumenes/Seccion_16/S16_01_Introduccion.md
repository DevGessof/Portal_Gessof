# Lección 01 – Introducción a la Sección 16

## ¿Qué se aprende en esta lección?
Se presenta la Sección 16 del curso, dedicada al **ciclo de vida de los componentes** en Angular. Se explica qué son los lifecycle hooks, cuáles son los más usados en la práctica y cómo las novedades de Angular (señales, efectos, `resource`) están cambiando cuáles de ellos siguen siendo relevantes.

## Puntos clave explicados
- Los **lifecycle hooks** son simples métodos que Angular llama automáticamente en momentos concretos de la vida de un componente (montaje, actualización, destrucción).
- No es necesario memorizar todos; lo importante es **saber que existen** y conocer sus casos de uso.
- Los cuatro más comunes son: `ngOnInit`, `ngOnDestroy`, `ngOnChanges` y `ngAfterViewInit`.
- **`ngOnInit`** se usaba para hacer peticiones HTTP al montar el componente, pero los nuevos `resource` y `rxResource` lo reemplazan en muchos casos.
- **`ngOnDestroy`** se usaba para limpiar suscripciones y timers, pero ahora los efectos con `onCleanup` cubren gran parte de ese trabajo.
- Desde Angular 17 se introducen nuevos hooks asociados al renderizado y a los efectos, que también se cubren en esta sección.
- Toda la sección se trabaja con una aplicación **Zoneless Angular**, que es la dirección futura del framework.

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| Lifecycle hook | Método con nombre reservado que Angular invoca en un momento del ciclo de vida |
| `ngOnInit` | Se ejecuta cuando el componente está listo; antes se usaba para peticiones HTTP |
| `ngOnDestroy` | Se ejecuta antes de destruir el componente; usado para limpieza |
| `ngOnChanges` | Se ejecuta cuando un `@Input` / `input()` del componente cambia de valor |
| `ngAfterViewInit` | Se ejecuta tras renderizar la vista del componente |
| `onCleanup` | Función de los efectos que reemplaza parte del rol de `ngOnDestroy` |

## Resumen final
La Sección 16 enseña los lifecycle hooks de Angular con una perspectiva actualizada: algunos clásicos como `ngOnInit` y `ngOnDestroy` pierden protagonismo frente a señales, efectos y recursos. Se trabaja en modo Zoneless, que es el estándar hacia el que evoluciona Angular.
