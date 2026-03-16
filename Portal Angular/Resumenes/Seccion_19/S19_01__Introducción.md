# Introducción

## ¿Qué se aprende?

Esta lección presenta los dos temas principales de la Sección 19: paginación reutilizable basada en el URL y manejo de caché en el frontend. Se explica el enfoque general y la motivación detrás de cada decisión de diseño, sin escribir código todavía.

---

## Puntos clave

**Dos temas de la sección**

La sección cubre dos problemas que aparecen cuando la aplicación crece:

1. Paginación: mostrar los productos en grupos y permitir navegar entre páginas.
2. Caché: evitar repetir peticiones HTTP cuando el usuario ya consultó esa información.

**El problema de repetir la paginación en cada página**

La tienda tiene cuatro pantallas que necesitan paginación: la página principal (home) y las tres páginas de género (hombres, mujeres, niños). Si se implementa la lógica de paginación por separado en cada una, el mismo código se repite cuatro veces. Eso viola el principio DRY (Don't Repeat Yourself): no repetirse a uno mismo.

**La solución: un componente de paginación basado en el URL**

En lugar de que cada pantalla gestione su propia paginación, se creará un único componente reutilizable. Ese componente no pagina los datos directamente; solamente modifica el URL añadiendo el número de página (`?page=1`, `?page=2`, etc.). Luego cada pantalla lee ese parámetro del URL y lo usa para pedir al servidor los datos correctos. Así la lógica de paginación queda centralizada y puede reutilizarse en cualquier pantalla.

**Conexión con `rxResource`**

El parámetro de página que viene del URL se conecta directamente al `rxResource` de cada pantalla. Cuando el URL cambia, la señal cambia, y `rxResource` automáticamente dispara una nueva petición con el offset correspondiente.

**El caché: una combinación de factores**

El caché en esta sección es más complejo que en aplicaciones anteriores porque hay que considerar tres variables al mismo tiempo: qué página se está viendo, qué categoría de género está activa y si los datos ya fueron descargados antes. Cuando esas variables coincidan con una consulta anterior, no se realiza una nueva petición HTTP.

**TanStack Query como alternativa**

El instructor menciona que todo lo que se implementará manualmente en esta sección es lo que hace de forma automática la librería TanStack Query. Se recomienda usarla en proyectos reales que necesiten caché avanzado. Lo que se construye aquí es una implementación propia para entender el concepto desde adentro.

---

## Ejemplo sencillo

Imagina que en una tienda física hay cuatro estantes y todos necesitan el mismo sistema de etiquetas para indicar en qué sección comienza cada categoría. En lugar de inventar un sistema distinto para cada estante, se usa el mismo en todos lados. Eso es exactamente lo que hace el componente de paginación compartido: un solo sistema que funciona en cualquier pantalla.

---

## Palabras clave y elementos importantes

- Paginación — mecanismo para dividir una lista larga en grupos más pequeños navegables
- Principio DRY — "Don't Repeat Yourself": evitar duplicar lógica en varios lugares
- Componente reutilizable — componente que puede usarse en múltiples páginas sin modificarlo
- Query parameters — parámetros opcionales en el URL, como `?page=2`
- Caché — almacenar temporalmente los resultados de una petición para no repetirla
- `rxResource` — recurso reactivo de Angular que reacciona a cambios en señales
- TanStack Query — librería externa que automatiza el caché y la gestión de peticiones HTTP

---

## Resumen final

La Sección 19 se enfoca en paginación y caché para TesloShop. La estrategia central es crear un único componente de paginación reutilizable que opere a través del URL, evitando duplicar código en las cuatro pantallas que necesitan paginar. Ese componente se conectará al sistema reactivo de Angular mediante `rxResource`. Además se implementará un caché manual para evitar peticiones repetidas, con la aclaración de que TanStack Query resuelve ese problema de forma más completa en proyectos reales.
