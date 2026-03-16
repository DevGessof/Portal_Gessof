# Inicio de proyecto — MyDashboard

## ¿Qué se aprende?

Esta lección crea el proyecto Angular que se usará durante toda la sección. Se explica cómo verificar la versión del Angular CLI, cómo crear el nuevo proyecto con `ng new`, y se presentan dos novedades del proceso de creación en Angular 17: la pregunta sobre Server Side Rendering (SSR) ahora integrado directamente en Angular (antes era Angular Universal), y la pantalla de bienvenida renovada.

---

## Puntos clave

**Verificar la versión del Angular CLI**

Antes de crear el proyecto se ejecuta `ng version` en la terminal para confirmar que la versión instalada es 17 o superior. Todo el contenido de la sección requiere Angular 17 o superior para funcionar.

**Crear el proyecto**

El comando para crear el proyecto es:

```bash
ng new my-dashboard
```

El nombre `my-dashboard` es el elegido por el instructor, pero el estudiante puede usar cualquier nombre. Al ejecutar el comando, el CLI hace dos preguntas:

1. **Formato de estilos** — se selecciona CSS.
2. **¿Activar Server Side Rendering (SSR)?** — se responde que no por ahora.

**SSR ahora integrado en Angular**

En versiones anteriores, el SSR (renderizado en el servidor) se implementaba mediante una librería separada llamada "Angular Universal". A partir de Angular 17, el SSR está integrado directamente en el framework y se actualiza junto con las versiones de Angular. Esto es una ventaja importante ya que antes había que gestionar la compatibilidad entre las versiones de Angular y Angular Universal por separado. El instructor menciona que tiene planeado hacer un curso de Ecommerce basado en Angular donde se usará el SSR.

**Abrir el proyecto en Visual Studio Code**

Una vez creado el proyecto, se navega al directorio y se abre con:

```bash
cd my-dashboard
code .
```

**Levantar la aplicación**

```bash
ng serve -o
```

La bandera `-o` abre el navegador automáticamente. Al levantarse, se muestra la nueva pantalla de bienvenida de Angular 17, que tiene un diseño renovado con el nuevo logo de Angular que el instructor describe positivamente.

**Pregunta de telemetría**

Al ejecutar `ng serve` por primera vez, el CLI pregunta si se desea compartir información anónima con Google. Es una decisión personal del usuario.

---

## Ejemplo sencillo

Crear un proyecto de Angular es como preparar un área de trabajo antes de empezar a construir: se elige el tipo de materiales (CSS), se decide si se necesita una instalación especial (SSR: no por ahora), y luego se abre el taller (VS Code) listo para empezar.

---

## Palabras clave y elementos importantes

- `ng version` — comando para verificar la versión del Angular CLI instalada; debe ser 17 o superior para esta sección
- `ng new my-dashboard` — comando para crear el proyecto; acepta cualquier nombre
- **SSR (Server Side Rendering)** — renderizado en el servidor; a partir de Angular 17 está integrado directamente en Angular sin necesidad de Angular Universal
- **Angular Universal** — librería separada que se usaba antes para SSR; reemplazada por la integración nativa en Angular 17
- `ng serve -o` — levanta la aplicación en modo desarrollo y abre el navegador automáticamente
- `code .` — abre el directorio actual en Visual Studio Code
- **Pantalla de bienvenida de Angular 17** — nuevo diseño con el logo renovado de Angular que aparece en una aplicación recién creada

---

## Resumen final

Esta lección crea el proyecto `my-dashboard` con `ng new`, seleccionando CSS como formato de estilos y rechazando SSR por ahora. Se destaca que el SSR ya no requiere Angular Universal sino que está integrado en Angular 17. Tras crear el proyecto se abre en VS Code con `code .` y se levanta con `ng serve -o`. La aplicación muestra la nueva pantalla de bienvenida de Angular 17. En las siguientes lecciones se comenzará a modificar la estructura del proyecto.
