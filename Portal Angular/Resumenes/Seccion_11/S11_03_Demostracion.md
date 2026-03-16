# Lección 03 - Demostración del resultado final

---

## ¿Qué se aprende en esta lección?

El instructor muestra en vivo cómo quedará la aplicación al finalizar la sección. Se ven los resultados esperados: búsquedas que se preservan al recargar la página, información guardada en caché para que no se repitan peticiones al servidor, y filtros por región que también se mantienen en el URL.

---

## Puntos clave explicados

- **Preservar la búsqueda con query parameters:** Al buscar "San Salvador", el término aparece en el URL como un parámetro. Si se recarga la página, la búsqueda se mantiene porque está en el URL.

- **Compartir el URL:** Como el término de búsqueda está en el URL, cualquier persona que reciba ese enlace verá exactamente el mismo listado de países.

- **Caché de resultados:** Al buscar "Costa Rica", entrar al detalle y regresar, la lista aparece al instante porque la información ya estaba guardada en caché, sin necesidad de volver a consultar el servidor.

- **Query parameter por región:** Al seleccionar "Oceanía" o "Europa" en la sección "Por región", ese valor también se guarda en el URL. Si se recarga la página, la región seleccionada se mantiene.

- **linkedSignal:** Se menciona como una de las nuevas herramientas que se aprenderán en esta sección.

---

## Ejemplo sencillo

El instructor busca "Costa Rica", entra al detalle del país y regresa. La lista aparece inmediatamente porque estaba en caché. Luego copia el URL con el parámetro de búsqueda y lo abre en una nueva ventana: la misma lista de resultados aparece exactamente igual.

---

## Funciones, palabras clave o elementos importantes

- **Query parameter:** Parte del URL que guarda información de búsqueda (ejemplo: `?query=costa rica`).
- **Caché:** Almacenamiento temporal de resultados para no tener que pedir la misma información al servidor dos veces.
- **linkedSignal:** Nueva herramienta de Angular para manejar señales con valores calculados.
- **Query parameters por región:** Parámetro en el URL que guarda la región seleccionada (ejemplo: `?region=Europe`).

---

## Resumen final en pocas palabras

Esta lección muestra el resultado final que se construirá a lo largo de la sección: una aplicación Angular que preserva búsquedas en el URL, usa caché para ser más rápida, y permite compartir resultados mediante un enlace. Es una vista previa del objetivo al que se llegará paso a paso.
