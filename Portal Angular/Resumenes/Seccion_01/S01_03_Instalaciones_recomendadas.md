# Leccion 3: Instalaciones Recomendadas

---

## ¿Que se aprende en esta leccion?

Esta leccion guia al estudiante paso a paso para instalar todas las herramientas necesarias antes de empezar a programar con Angular. Se distingue entre instalaciones obligatorias y opcionales, y se explica para que sirve cada programa o extension.

---

## Puntos clave explicados

- **Hoja de atajos de Angular**
  El instructor recomienda descargarla e imprimirla. Sirve como guia de referencia durante todo el curso. Contiene comandos, conceptos e instalaciones importantes.

- **Node.js (obligatorio)**
  Es un entorno necesario para que Angular funcione. Se debe instalar la version recomendada (minimo la 20.10). Para verificar que esta instalado, se ejecuta `node --version` en la terminal.

- **Visual Studio Code (obligatorio)**
  Editor de codigo que se usara en el curso. El instructor lo personaliza para tener menos distracciones (oculta la barra lateral y el explorador de archivos).

- **Navegador web basado en Chromium (recomendado)**
  Permite usar las herramientas de desarrollo de Angular (Angular DevTools) de forma optima. Tambien funciona con Firefox.

- **Postman o Insomnia (recomendado)**
  Herramientas gratuitas para probar peticiones a servidores web (llamadas HTTP). Se usaran mas adelante en el curso.

- **Git (recomendado)**
  Herramienta para llevar un historial del codigo. Permite guardar cambios, crear ramas y trabajar con GitHub. Para verificar la instalacion se usa `git --version`.

- **Docker Desktop (opcional)**
  Se usara mas adelante en el curso. Se recomienda descargarlo con anticipacion.

- **TablePlus y Mongo Compass (opcionales)**
  Programas para visualizar bases de datos. TablePlus funciona con bases de datos relacionales; Mongo Compass es para bases de datos no relacionales como MongoDB.

- **Extensiones de Visual Studio Code**
  Se recomienda instalar varias extensiones que facilitan el trabajo con Angular.

---

## Ejemplo sencillo

Para verificar que Node esta instalado correctamente, se abre la terminal y se escribe:

```
node --version
```

Si aparece un numero de version (como `v20.10.0`), la instalacion fue exitosa.

---

## Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| **Node.js** | Entorno de ejecucion necesario para instalar y correr Angular. |
| **npm** | Gestor de paquetes que viene con Node. Se usa para instalar Angular y otras librerias. |
| **Angular CLI** | Herramienta de linea de comandos para crear y gestionar proyectos Angular. Se instala con `npm install -g @angular/cli`. |
| **Visual Studio Code** | Editor de codigo donde se escribira el proyecto. |
| **Git** | Herramienta de control de versiones para guardar el historial del codigo. |
| **Postman** | Programa para probar peticiones HTTP a servidores o APIs. |
| **Docker** | Herramienta para crear entornos de ejecucion aislados. Se usara mas adelante. |
| **Angular Language Service** | Extension de VS Code que ayuda a entender la sintaxis de Angular. |
| **Angular Snippets** | Extension que permite escribir componentes y servicios rapidamente con atajos de codigo. |
| **Angular Schematics** | Extension para crear componentes en carpetas especificas con facilidad. |
| **Error Lens** | Extension que muestra los errores directamente en el codigo, sin necesidad de pasar el cursor encima. |
| **Paste JSON as Code** | Extension que convierte objetos JSON en interfaces de TypeScript automaticamente. |
| **Auto Close Tag** | Extension que cierra automaticamente las etiquetas HTML al abrirlas. |
| **Auto Rename Tag** | Extension que renombra automaticamente la etiqueta de cierre al cambiar la de apertura. |
| **Angular DevTools** | Extension del navegador para inspeccionar y depurar aplicaciones Angular. |
| **Better Comments** | Extension que resalta los comentarios del codigo con colores segun su tipo. |
| **Tailwind IntelliSense** | Extension que sugiere clases de estilo de Tailwind CSS al escribir. |

---

## Resumen final en pocas palabras

Antes de empezar a programar en Angular es necesario tener instaladas ciertas herramientas: Node.js, Visual Studio Code, Git y el Angular CLI como minimo. Tambien se recomienda instalar extensiones en el editor para trabajar de forma mas comoda y eficiente durante el curso.
