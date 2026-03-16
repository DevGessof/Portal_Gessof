# Lección 04 - Continuación: Revisión del proyecto base

---

## ¿Qué se aprende en esta lección?

El instructor presenta el proyecto base sobre el que se trabajará durante la sección. Se abre la aplicación en Visual Studio Code, se levanta el servidor de desarrollo y se identifican los problemas actuales que se irán resolviendo: pérdida de información al navegar, peticiones HTTP repetidas innecesariamente, y la sección "Por región" que aún no tiene contenido.

---

## Puntos clave explicados

- **Abrir el proyecto:** Se usa la aplicación llamada `04-country-app` dentro de Visual Studio Code y se levanta con el comando `ng serve -o`.

- **Reconstruir módulos de Node:** Si se descargó el código fuente del instructor, es posible que falten los módulos de Node. Para reconstruirlos se usa el comando `npm install` en la terminal.

- **Problema de pérdida de datos:** La aplicación actual guarda los resultados de búsqueda en memoria. Al navegar entre pantallas, esa información se borra y hay que volver a buscar.

- **Peticiones HTTP repetidas:** Cada vez que se regresa a una pantalla y se vuelve a buscar, la aplicación hace una nueva petición al servidor aunque ya había traído esa información antes. Esto no es eficiente.

- **Caché agresivo:** La solución propuesta es implementar un caché para no tener que consultar el servidor cuando ya se tiene la respuesta guardada.

- **Sección "Por región" vacía:** Esta sección no tiene contenido todavía y se completará como ejercicio práctico.

- **Estructura del proyecto:** El proyecto tiene carpetas para componentes compartidos (`shared`), lógica de países (`country`) y configuración de rutas (`routes`).

---

## Ejemplo sencillo

Se busca "Costa Rica" en la sección "Por país". Aparecen los resultados. Luego se navega a "Por capital" y se regresa a "Por país": la búsqueda desaparece y hay que volver a escribir "Costa Rica" desde cero, incluyendo esperar la respuesta del servidor nuevamente.

---

## Funciones, palabras clave o elementos importantes

- **`npm install`:** Comando que instala los módulos de Node necesarios para que el proyecto funcione.
- **`ng serve -o`:** Comando que inicia el servidor de desarrollo de Angular y abre la aplicación en el navegador.
- **Memoria (en el contexto de datos):** Lugar temporal donde se guarda la información durante la sesión. Se pierde al navegar o recargar.
- **Caché:** Almacenamiento de respuestas ya obtenidas para evitar repetir peticiones al servidor.
- **Petición HTTP:** Solicitud que la aplicación envía al servidor para obtener datos (por ejemplo, buscar países).

---

## Resumen final en pocas palabras

En esta lección se revisa el estado inicial del proyecto y se identifican sus limitaciones: datos que se pierden al navegar y peticiones repetidas al servidor. El objetivo de las próximas lecciones es resolver estos problemas usando caché y query parameters en el URL.
