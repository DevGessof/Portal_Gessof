#  PROJECT_RULES.md
## Portal de Aprendizaje Java Spring Boot (Microservicios)

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
- El contenido se organiza en **13 secciones** del curso. Detalle en archivo Estrucutra_del_proyecto.txt
- Duracion total aproximada: **18,5 horas de video**.

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
  
- Archivo Drive.csv contiene todo la informacion de drive para poder acceder a ellos.
- Estrucutra del archivo:
   Numero de seccion
   Nombre de la seccion
   Nombre de archivo
   Id de google drive 
   Tipo de archivo
- Separado por punto y coma (;)

---

## 4. Estructura del proyecto web

- Existe un archivo `index.html` base que **debe respetarse visual y estructuralmente**.
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

El sitio tiene 3 secciones principales:

### 5.1 Inicio
Debe mostrar:
- Resumen general del curso
- Objetivos de aprendizaje
- El siguiente contenido textual debe incluirse y respetarse:

**Lo que aprenderas**
- Dise?ar y desarrollar microservicios con buenas practicas y estandares de seguridad
- Seguridad en APIs con OAuth2, JWT, SSO, OpenID Connect y Keycloak
- Construccion de aplicaciones con Spring Boot + Angular
- Contenedores Docker y orquestacion con Docker Compose
- Spring Cloud, Eureka, Config Server, Spring Admin
- Programacion reactiva con Spring WebFlux
- Spring Data, PostgreSQL y manejo centralizado de excepciones
- APIs con OpenAPI, Swagger y API First
- Conceptos avanzados: reverse proxy, service mesh, API Manager
- Variables de entorno, configuracion centralizada y Maven

---

### 5.2 Herramientas
- Debe listar todas las herramientas necesarias para el curso.
- Cada herramienta debe incluir:
  - Nombre
  - Descripcion breve
  - **Link oficial actualizado a la fecha**
- Es obligatorio buscar los links en internet (fuentes oficiales). 
- En la pagina index.html se hace referencia a las aplicacion base, agregar mas de ser necesario segun el contenido del curso.

---

### 5.3 Curso (seccion principal)

- Cada seccion del curso debe mostrarse de forma independiente.
- Cada seccion debe tener
- Un carrusel de videos
- Un carrusel por seccion (no uno global)
  
  

---

## 6. Videos y resumenes

Para cada video:

- El video debe poder reproducirse desde Google Drive, con el link adjunto en documento Drive.csv
- Debe mostrarse un **resumen asociado al video**.
- El resumen debe:
  - Basarse exclusivamente en el archivo `.srt`
  - Ser claro y didactico
  - Permitir entender el contenido sin ver el video
  - No ser excesivamente largo
  - No explicar todo en detalle tecnico profundo

---

## 7. Material de apoyo

- Todo material adicional del mismo numero del video debe mostrarse:
  - como enlaces
  - como recursos embebidos si corresponde
- No se debe ignorar ningun archivo de apoyo.

---

## 8. Ejercicios practicos por seccion

- Al final de cada seccion (excepto la seccion 1 de instalacion):
  - Debe existir un **ejercicio practico completo**
  - El ejercicio debe:
    - Integrar los conceptos vistos en la seccion
    - Simular un escenario real (Api publica)
    - Incluir instrucciones claras
- El ejercicio debe ser **generado con IA**
- El proyecto generado debe adjuntarse a la seccion correspondiente en formato zip.
- El Proyecto generado debe ser poder compilado y ejecutado.
- Debe incluir manual de ejcuccion.
- El proyecto debe tener una estrucutra basada en lo aprendido en la seccion.

---

## 9. Principios de desarrollo

- Codigo limpio
- Modularidad
- Reutilizacion de componentes
- Escalabilidad del proyecto
- Facilidad de mantenimiento

---

## 10. Restricciones importantes

- No asumir datos inexistentes
- No inventar contenido fuera del Drive
- No mezclar secciones
- No romper la estructura base del `index.html`
- No generar soluciones monoloticas

---

## 11. Regla de oro

Si existe duda:
**priorizar claridad, modularidad y experiencia de aprendizaje**
