# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 1: INTRODUCCIÓN Y CONFIGURACIÓN DEL ENTORNO

---

## LECCIÓN 1: INTRODUCCIÓN A JAVA

### ¿Qué se aprende en esta lección?

Esta lección presenta el curso de Java Básico y explica qué se puede esperar del aprendizaje. Se enfoca en dar a conocer que Java es un lenguaje de alta demanda laboral y que el curso será 100% práctico, orientado a las necesidades reales del mundo empresarial.

### Puntos clave explicados

- **Java es un lenguaje de programación de alta demanda**: Se utiliza ampliamente en empresas y negocios para desarrollar soluciones tecnológicas.

- **El curso es 100% práctico**: No solo se aprenderá teoría, sino que se trabajará con ejercicios reales y útiles para el ámbito laboral.

- **Se aprenderán los recursos necesarios**: Durante el curso se conocerán las herramientas y funcionalidades necesarias para dominar Java desde cero.

- **Orientado a principiantes**: El curso está diseñado para personas que están iniciando en el mundo de la programación.

### Ejemplo sencillo

En esta lección no se muestra un ejemplo práctico explícito.

### Funciones, palabras clave o elementos importantes

- **Java**: Lenguaje de programación de alta demanda en el mercado laboral.

- **Recursos**: Herramientas que se necesitarán para programar en Java (se descargarán en las siguientes lecciones).

### Resumen final en pocas palabras

Esta lección sirve como bienvenida al curso de Java Básico. El objetivo es aprender Java de forma práctica, enfocándose en lo que realmente se necesita para trabajar con este lenguaje en empresas y negocios.

---

## LECCIÓN 2: DESCARGA E INSTALACIÓN DEL JDK

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué es el JDK y por qué es necesario para programar en Java. Se explica la diferencia entre versiones comerciales y gratuitas, y se muestra cómo descargar e instalar OpenJDK 11, que es una versión gratuita y de código abierto.

### Puntos clave explicados

- **JDK es el compilador de Java**: Es un software que convierte el código que escribimos en instrucciones que la computadora puede ejecutar.

- **Necesitamos dos recursos principales**: El JDK (compilador) y el IDE Apache NetBeans (interfaz gráfica para escribir código).

- **OpenJDK es gratuito**: A diferencia de las versiones de Oracle que son comerciales, OpenJDK es de código abierto y no tiene costo.

- **Se utiliza OpenJDK 11 LTS**: Esta versión tiene soporte extendido y mantenimiento a largo plazo.

- **Configuración durante la instalación**: Se marcan opciones como establecer la variable Java Home y la clave de registro Java Soft.

### Ejemplo sencillo

En esta lección no se muestra un ejemplo de programación, pero se realiza un ejemplo práctico de instalación:

1. Buscar "OpenJDK" en Google
2. Entrar a la página oficial
3. Seleccionar versión 11 LTS
4. Elegir JVM HotSpot
5. Descargar el instalador para Windows 64 bits
6. Ejecutar el instalador y seguir los pasos

### Funciones, palabras clave o elementos importantes

- **JDK (Java Development Kit)**: Kit de desarrollo de Java, es el compilador que interpreta nuestro código.

- **IDE (Integrated Development Environment)**: Entorno de desarrollo integrado, es la interfaz gráfica donde escribiremos el código.

- **Compilador**: Programa que traduce el código Java en instrucciones que la computadora entiende.

- **OpenJDK**: Versión gratuita y de código abierto del JDK.

- **LTS (Long Term Support)**: Soporte a largo plazo, significa que la versión recibirá actualizaciones y mantenimiento por más tiempo.

- **Java Home**: Variable del sistema que indica dónde está instalado Java en la computadora.

### Resumen final en pocas palabras

El JDK es esencial para programar en Java porque funciona como el compilador que interpreta nuestro código. OpenJDK 11 es la versión gratuita recomendada para aprender y desarrollar aplicaciones sin restricciones comerciales.

---

## LECCIÓN 3: DESCARGA E INSTALACIÓN DEL IDE APACHE NETBEANS

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué es Apache NetBeans y cómo instalarlo. Se explica que es un entorno de desarrollo donde escribiremos el código Java, y se muestra cómo vincularlo correctamente con el JDK instalado previamente.

### Puntos clave explicados

- **Apache NetBeans es un IDE**: Es una interfaz gráfica que facilita escribir código Java de manera organizada y profesional.

- **Es totalmente gratuito**: No tiene restricciones ni costos de licencia, es de código libre.

- **Se descarga la versión más reciente**: Al momento de la lección es la versión 15 para Windows 64 bits.

- **Debe vincularse con el JDK**: Durante la instalación, NetBeans detecta automáticamente dónde está instalado el OpenJDK.

- **Verificación importante**: Después de instalar, se debe revisar en Tools > Options > Java > Java Shell que esté usando el OpenJDK correcto.

- **Es modular y extensible**: Se pueden agregar módulos para mejorar la experiencia de desarrollo.

### Ejemplo sencillo

Paso a paso de la instalación:

1. Buscar "Apache NetBeans" en Google
2. Entrar a la página oficial
3. Hacer clic en "Download"
4. Seleccionar la versión 15 para Windows 64 bits
5. Descargar usando la opción HTTP
6. Ejecutar el instalador
7. Aceptar términos y condiciones
8. Verificar que detecte la ruta del OpenJDK (si no, buscarla manualmente en Program Files > Eclipse > adoptium > JDK 11)
9. Desmarcar actualizaciones automáticas (opcional)
10. Completar la instalación

### Funciones, palabras clave o elementos importantes

- **Apache NetBeans**: IDE gratuito y libre diseñado principalmente para programación en Java.

- **IDE (Integrated Development Environment)**: Entorno integrado de desarrollo, es donde escribimos y organizamos nuestro código.

- **Ruta del JDK**: Ubicación en la computadora donde está instalado el compilador de Java.

- **Browse**: Opción para buscar manualmente la carpeta del JDK si no se detecta automáticamente.

- **Tools > Options**: Menú para configurar opciones del NetBeans.

- **Java Shell**: Configuración dentro de NetBeans donde se verifica qué versión del JDK se está usando.

### Resumen final en pocas palabras

Apache NetBeans es el entorno donde escribiremos todo nuestro código Java. Es gratuito, fácil de usar y debe estar correctamente vinculado con el OpenJDK para funcionar. Una vez instalado, ya tenemos las dos herramientas esenciales para programar.

---

## LECCIÓN 4: TEMAS DISPONIBLES EN IDE APACHE NETBEANS

### ¿Qué se aprende en esta lección?

En esta lección se aprende a personalizar la apariencia visual de Apache NetBeans. Se muestra cómo cambiar el tema o la interfaz gráfica del IDE para trabajar con la que más le guste o sea más cómoda para cada persona.

### Puntos clave explicados

- **Personalización de la interfaz**: NetBeans permite cambiar su apariencia visual para adaptarse a las preferencias de cada usuario.

- **Múltiples temas disponibles**: Existen diferentes opciones de temas visuales que se pueden aplicar.

- **El cambio requiere reiniciar**: Después de aplicar un nuevo tema, es necesario cerrar y volver a abrir NetBeans para que los cambios se apliquen.

- **Es una preferencia personal**: Cada usuario puede elegir el tema con el que se sienta más cómodo para trabajar.

### Ejemplo sencillo

Pasos para cambiar el tema de NetBeans:

1. Ir al menú "Tools" (Herramientas)
2. Seleccionar "Options" (Opciones)
3. Hacer clic en la pestaña "Appearance" (Apariencia)
4. Seleccionar "Look and Feel" (LUT)
5. Elegir un tema de la lista (ejemplos: Darcula Metal, Nimbus)
6. Hacer clic en "Apply" (Aplicar) y luego en "OK"
7. Cerrar y volver a abrir NetBeans para ver los cambios

### Funciones, palabras clave o elementos importantes

- **Tools**: Menú de herramientas donde se encuentran las opciones de configuración.

- **Options**: Sección donde se personalizan las preferencias del IDE.

- **Appearance**: Pestaña específica para cambiar la apariencia visual.

- **Look and Feel (LUT)**: Opciones de temas visuales disponibles en NetBeans.

- **Darcula Metal**: Uno de los temas disponibles (generalmente oscuro).

- **Nimbus**: Otro tema disponible con diferente estilo visual.

- **Apply**: Botón para aplicar los cambios realizados.

### Resumen final en pocas palabras

Personalizar la apariencia de NetBeans es fácil y ayuda a que el entorno de trabajo sea más agradable. Se pueden probar diferentes temas hasta encontrar el que resulte más cómodo para programar.
