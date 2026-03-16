#  PROJECT_RULES.md
## Portal de Aprendizaje Angular

---

## 1. Idioma y enfoque general

- Todo el contenido del proyecto debe estar **100% en español**.
- El lenguaje debe ser:
  - Claro
  - Didactico
  - Pensado para personas **sin conocimientos previos**
  - Sin exceso de tecnicismos innecesarios

---

## 2. Fuente del contenido

- Todos los videos, transcripciones (SRT) y materiales estan **alojados en Google Drive**.
- El contenido se organiza en **24 secciones** del curso. Detalle en archivo Estrucutra_del_proyecto.txt
- Duracion total aproximada: **33,5 horas de video**.

---

## 3. Estructura del curso en Drive

Cada seccion del curso contiene archivos con el siguiente patron:

N.video_nombre.mp4
N.video_nombre.srt
N.X_material_descarga.html
N.X_imagen_referencia.jpg
N.entre otros


Donde:
- `N` corresponde al numero del video dentro de la seccion
- Todos los archivos que comienzan con el mismo numero pertenecen al **mismo video**
- El `.mp4` se usa para reproduccion
- El `.srt` se usa **exclusivamente para generar el resumen**
- El resto de archivos son **material de apoyo** y deben mostrarse como:
  - enlaces
  - recursos descargables
  - vistas embebidas si son HTML
  
- Archivo Drive.txt contiene todo la informacion de drive para poder acceder a ellos.
- Estrucutra del archivo:
   Numero de seccion
   Nombre de la seccion
   Nombre de archivo
   Id de google drive 
   Tipo de archivo
- Separado por punto y coma (;)

---

## 4. Estructura del proyecto web

- Existe varios portales dentro de la carpeta, donde se debe analizar el archivo `index.html` base que **debe respetarse visual y estructuralmente**.
- El proyecto debe ser **modular**, evitando:
  - un solo HTML gigante
  - logica mezclada con contenido
- Separacion obligatoria:
  - HTML (estructura)
  - CSS (estilos)
  - JavaScript (logica) separada por seccion
  - Datos / configuracion

---

## 5. Secciones del portal

El sitio tiene 5 secciones principales:

### 5.1 Inicio
Debe mostrar:
- Resumen general del curso
- Objetivos de aprendizaje
- El siguiente contenido textual debe incluirse y respetarse:

Lo que aprenderás:
- Angular profundamente
- Desarrollar tus propias aplicaciones usando Angular
- Seguir estándares y buenas prácticas framework
- Aprender Angular basado en TypeScript
- Usar librerías de terceros
- Aprender otros temas relacionados en desarrollo de aplicaciones con Angular


Requisitos:
Saber JavaScript básico
NO es necesario saber TypeScript pero ayudaría
NO es necesario conocimiento alguno de Angular u otras versiones

Descripción:

Angular es un framework para desarrollo de aplicaciones de todo tipo, por defecto genera aplicaciones web muy poderosas y robustas, y si se mezcla con otras tecnologías, puedes hacer aplicaciones móviles y de escritorio también con el mismo código.

Este curso te ayudará a aprender Angular (la última versión) a profundidad mediante ejercicios y tareas que tú mismo harás. Partiendo de cero conocimiento de TypeScript hasta crear un sistema robusto de autenticación, uso de mapas, consumo de servicios y mucho más. Puntualmente tocamos estos temas:

- Bases de TypeScript y ESCMAScript
- Hola Mundo en Angular
- Componentes
- Interceptores
- Servicios
- Aplicaciones sin módulos (Y explicación de como integrar módulos)
- Todos los pipes de Angular
- Rutas
- Rutas Hijas
- Carga perezosa o Lazyload de componentes y funcionalidades
- Guards
- Protección de rutas
- Autenticación mediante JsonWebTokens
- Mapas
- Uso de librerías de terceros escritas en Angular
- Uso de librerías NO escritas para Angular
- Consumo de APIs
- CRUD
- SPA
- Git
- GitHub
- Despliegues a producción
- Carga de archivos
- Diferentes diseños de aplicaciones
- Tailwind
- Node
- Re-utilización de componentes, servicios..
- Comunicación entre componentes y módulos
- Uso de extensiones reactivas
- Bootstrap
- Deferrable Views
- Triggers
- Signals
- Writable Signals
- Computed Signals
- Input Signals
- Output Signals
- LinkedSignals
- Recursos
- RxResouce
- Resource
- Efectos
- Standalone components
- Y mucho más...

Este es un curso robusto y fuerte, que contiene todo lo que necesitarás para trabajar en Angular y poder desenvolverte como deseas en el Framework, eso incluye poder leer la documentación, errores y optimizaciones de código para mejorar la forma de escribir nuestras aplicaciones.

AI finalizar el curso, podrás crear tus propias aplicaciones usando Angular y poder comprender código de otros desarrolladores porque seguimos estándares recomendados por el framework, sin contar que también hay información extra dentro del mismo para seguir el camino una vez terminado el curso.

---

### 5.2 Herramientas
- Debe listar todas las herramientas necesarias para el curso.
- Cada herramienta debe incluir:
  - Nombre
  - Descripcion breve
  - **Link oficial actualizado a la fecha**
- Es obligatorio buscar los links en internet (fuentes oficiales). 

---

### 5.3 Curso (seccion principal)

- Cada seccion del curso debe mostrarse de forma independiente.
- Cada seccion debe tener:
	- Un carrusel de videos
	- Un carrusel por seccion (no uno global)
- se debe generar un indice de importancia idnicando cuales son las seccion mas importantes y mas relavantes. para esto se debe tomar como ejemplo el portal de Javaspring, seccion curso.
-El indice de importancia sera tomado desde el archivo indice_importancia.txt	
	
### 5.4 Evaluacion 
Se requiere generar una evaluacion en base a preguntas con alternativas.

Fuente de preguntas:
 - Utilizar todas las preguntas y respuestas contenidas en el archivo:
 - 15_preguntas_Angular.md

La evaluación debe incluir todas las preguntas del archivo (no seleccionar solo algunas).

Flujo de la Evaluación:
Pantalla inicial se dividira en dos test, una teorica y otra practica.

#TEORICA

Al ingresar a teorica, mostrar un texto indicando:
- Que iniciará una evaluación de X preguntas.
- Que debe aprobarse para avanzar al siguiente nivel de aprendizaje.
- Mostrar un botón “Comenzar”.
Al presionar el botón, iniciar el cuestionario.

Aleatoriedad requerida:
Orden de preguntas

- Las preguntas deben mostrarse en orden aleatorio cada vez que se inicia el examen.
- Si el usuario repite la evaluación, el orden debe ser diferente.

Orden de alternativas (REQUERIMIENTO IMPORTANTE)

NO quiero que cambie el orden visual de A, B, C, D.
Quiero:
Mantener siempre el orden visual:
A
B
C
D

Pero:
El contenido de cada alternativa debe asignarse aleatoriamente.
Es decir, la respuesta correcta puede estar en A en un intento y en B en otro.
Lo que cambia es el texto asignado a cada letra, no el orden de las letras.

Ejemplo:

Pregunta:
En un bucle while, ¿cuándo se evalúa la condición?

Intento 1:
A: Antes de ejecutar el código cada vez (correcta)
B: ...
C: ...
D: ...

Intento 2:
A: ...
B: Antes de ejecutar el código cada vez (correcta)
C: ...
D: ...

El orden A-B-C-D debe mantenerse fijo visualmente, pero el contenido debe variar aleatoriamente en cada intento.


Comportamiento durante la evaluación:

- NO mostrar si la respuesta es correcta o incorrecta al momento de seleccionarla.
- NO dar retroalimentación inmediata.
- El usuario debe completar toda la evaluación primero.

Resultados finales:

Al finalizar el cuestionario:

- Mostrar un botón: “Ver Resultados”

Al presionarlo, mostrar:

- Puntaje obtenido
- Qué preguntas fueron correctas
- Qué preguntas fueron incorrectas
- Explicación completa de cada pregunta

Formato obligatorio de explicación

La explicación debe mostrarse EXACTAMENTE con el siguiente patrón (tal como aparece en el archivo .md):

*EXPLICACIÓN:*
- ? *b) es CORRECTA* porque en el curso (Lección 2) se explica que "JDK es el compilador de Java: Es un software que convierte el código que escribimos en instrucciones que la computadora puede ejecutar."
- ? *a) es FALSA* porque el JDK no es un editor de texto. El editor es el IDE Apache NetBeans.
- ? *c) es FALSA* porque el JDK no es una librería, es el Kit de Desarrollo de Java completo.
- ? *d) es FALSA* porque el JDK no es un navegador, es una herramienta de desarrollo.

Requisitos:

- Mostrar explicación completa.
- Respetar emojis.
- Respetar formato en negrita.
- Respetar estructura textual exacta.
- No resumir explicaciones.
- No reinterpretar el contenido.
- Mostrarlo tal como está en el archivo .md.

Persistencia y seguimiento de intentos

- Se requiere persistencia de resultados.
- Si el usuario realiza la evaluación más de una vez:
- Debe poder visualizar:
	- Número total de intentos realizados.
	- Puntaje obtenido en cada intento.
	- Último puntaje obtenido.


Resumen funcional esperado

El componente Evaluación debe:
- Cargar preguntas desde archivo .md.
- Mostrar pantalla introductoria.
- Iniciar cuestionario con preguntas aleatorias.
- Reordenar contenido de alternativas manteniendo A-B-C-D.
- No mostrar respuestas hasta el final.
- Mostrar resultados con explicaciones completas.
- Guardar intentos y puntajes con persistencia.
- Permitir ver historial de intentos.

#PRACTICO
al presionar el boton para entrar a la seccion de  evaluacion practica, debe poner un mensaje que se encuentra en desarollo, PROXIMAMENTE.

 
### 5.5 Glosario 
desde el archivo Resumenes/glosario.md, se debe tomar cada componente incluido en este y ser mostrado en forma de tarjetas dentro
del componente, respetando el formato, colores y distribucion con respecto a los demas portales en la misma seccion.

---

## 6. Videos y resumenes

Para cada video:

- El video debe poder reproducirse desde Google Drive, con el link adjunto en documento Drive.txt
- Debe mostrarse un **resumen asociado al video**.
- El resumen debe:
	- Ser agradable a la vistas
	- No incluir solo texto
	- Separar los puntos exactamente como viene dado cada Resumen
	- Los resumenes deben ser tomados independientemente de cada Archivo
	- Los resumenes se encuentran en la carpeta Resumenes/Seccion_XX, siendo XX el numero de seccion (01 al 24)
	- Dentro de cada seccion esta los resumenes por video con sus respectivos nombres.
	- La seccion 24 solamente corresponde al cierre del curso, no tiene Resumen.

---

## 7. Material de apoyo

- Todo material adicional del mismo numero del video debe mostrarse:
  - como enlaces
  - como recursos embebidos si corresponde
- No se debe ignorar ningun archivo de apoyo.
- Si solo existe material y no hay video asociado, agregarlo al carrusel en el orden que corresponde pudiendo descargar el material o acceder al enlace html.

---

## 8. Principios de desarrollo

- Codigo limpio
- Modularidad
- Reutilizacion de componentes
- Escalabilidad del proyecto
- Facilidad de mantenimiento

---

## 9. Restricciones importantes

- No asumir datos inexistentes
- No inventar contenido fuera del Drive
- No mezclar secciones
- No romper la estructura base del `index.html`
- No generar soluciones monoloticas
- Mantener el mismo diseño, tanto en colores, letras y estrucutra de los demas portales.
---

## 10. Regla de oro

Si existe duda:
**priorizar claridad, modularidad y experiencia de aprendizaje**
