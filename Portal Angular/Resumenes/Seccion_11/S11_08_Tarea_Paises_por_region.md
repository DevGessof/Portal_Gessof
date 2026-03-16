# Lección 08 - Tarea: Países por región

---

## ¿Qué se aprende en esta lección?

Esta lección presenta una tarea más compleja: construir desde cero la pantalla "Por región". El estudiante debe crear botones para seleccionar una región del mundo, mostrar los países correspondientes, implementar el caché para esa búsqueda, y hacer que el botón seleccionado luzca visualmente diferente al resto.

---

## Puntos clave explicados

- **Tipo `Region`:** Se provee un `type` de TypeScript con los valores válidos de región: `Africa`, `Americas`, `Asia`, `Europe`, `Oceania`, entre otros. Esto garantiza que solo se usen valores permitidos.

- **Arreglo de regiones:** Se provee una propiedad con el listado de regiones que se usará para generar los botones dinámicamente.

- **URL del API:** Se provee el endpoint que hay que llamar para obtener los países filtrados por región.

- **Crear el método `searchByRegion`:** El servicio debe tener un nuevo método que recibe una `Region` como argumento y hace la petición al API correspondiente, con su propio caché.

- **Botones dinámicos:** En la pantalla se generan botones recorriendo el arreglo de regiones con un ciclo `@for`. Cada botón muestra el nombre de la región.

- **Botón activo:** Al hacer clic en un botón, debe cambiar visualmente (por ejemplo, con una clase CSS diferente) para indicar cuál región está seleccionada.

- **Señal `selectedRegion`:** Para saber qué región está activa, se usa una señal que se actualiza al hacer clic en un botón.

---

## Ejemplo sencillo

Se muestran botones: `Americas`, `Africa`, `Asia`, `Europe`, `Oceania`. Al hacer clic en `Americas`, ese botón cambia de color y se muestra la lista de países de América. Al hacer clic en `Europe`, el botón de `Americas` vuelve a su estilo normal y el de `Europe` se activa.

---

## Funciones, palabras clave o elementos importantes

- **`type Region`:** Tipo de TypeScript que restringe los valores posibles a las regiones válidas del mundo.
- **`@for`:** Directiva de Angular para iterar sobre un arreglo en la plantilla HTML.
- **`signal()`:** Crea una señal reactiva para guardar la región seleccionada.
- **`[class]` o `[ngClass]`:** Permite aplicar clases CSS dinámicamente según una condición.
- **`searchByRegion(region)`:** Método nuevo en el servicio que busca países por región usando el API correspondiente.
- **Caché por región:** `Map` privado donde la clave es la región y el valor es el arreglo de países.

---

## Resumen final en pocas palabras

Esta tarea integra varios conceptos aprendidos: señales, ciclos en plantillas, clases CSS dinámicas, peticiones HTTP y caché. El resultado es una pantalla funcional que permite filtrar países por región, con botones interactivos y respuestas rápidas gracias al caché implementado.
