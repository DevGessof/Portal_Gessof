# Lección 01 - Introducción a la Sección 11

---

## ¿Qué se aprende en esta lección?

Esta lección es una introducción a la Sección 11 del curso. El instructor explica qué temas se van a cubrir y cuál es el objetivo principal: hacer que la aplicación funcione mejor, sea más rápida y que la información no se pierda cuando el usuario navega entre pantallas.

---

## Puntos clave explicados

- **El problema principal:** Cuando el usuario busca algo (por ejemplo, "Madrid") y luego entra al detalle de un país y regresa, pierde toda la información que había buscado.

- **Una solución común pero limitada:** Se podría guardar la información en los servicios de Angular, pero eso tiene un inconveniente: si compartes el URL con otra persona, esa persona no verá los mismos resultados de búsqueda que tú veías.

- **La solución correcta:** Guardar el estado de la búsqueda en el URL mediante parámetros de consulta (query parameters), de modo que cualquier persona que reciba ese enlace pueda ver exactamente lo mismo.

- **linkedSignal:** Se menciona que en esta sección también se aprenderá sobre `linkedSignal`, que es una nueva herramienta de Angular que permite crear una señal modificable cuyo valor inicial se calcula automáticamente.

---

## Ejemplo sencillo

Imagina que buscas "San Salvador" y ves una lista de países. Si entras a ver los detalles de uno y luego regresas, la lista desaparece. El objetivo de esta sección es que el URL guarde "San Salvador" como parámetro, así al regresar la lista aparece de nuevo, y además puedes compartir ese URL con alguien más para que vea exactamente lo mismo.

---

## Funciones, palabras clave o elementos importantes

- **Query parameters:** Información opcional que se puede agregar al final de un URL (por ejemplo: `?query=madrid`). Permiten preservar el estado de una búsqueda y compartirla.
- **linkedSignal:** Nueva herramienta de Angular que crea una señal cuyo valor inicial viene de un cálculo, pero que después puede modificarse como cualquier otra señal.
- **Estado en memoria:** Información que solo existe mientras la página está abierta; se pierde al navegar o recargar.

---

## Resumen final en pocas palabras

En esta sección se aprenderá a mejorar una aplicación Angular para que no pierda la información de búsqueda al navegar, usando el URL como medio de preservar el estado. Además, se explorarán nuevas herramientas como `linkedSignal` para manejar señales de forma más avanzada.
