/**
 * RESÚMENES DIDÁCTICOS - PORTAL JAVA BÁSICO
 * Resúmenes organizados por video con bloques de colores
 */

const RESUMENES = {
    1: {
        titulo: "INTRODUCCIÓN A JAVA",
        seccion: 1,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "Esta lección presenta el curso de Java Básico y explica qué se puede esperar del aprendizaje. Se enfoca en dar a conocer que Java es un lenguaje de alta demanda laboral y que el curso será 100% práctico, orientado a las necesidades reales del mundo empresarial."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Java es un lenguaje de programación de alta demanda**: Se utiliza ampliamente en empresas y negocios para desarrollar soluciones tecnológicas.",
                    "**El curso es 100% práctico**: No solo se aprenderá teoría, sino que se trabajará con ejercicios reales y útiles para el ámbito laboral.",
                    "**Se aprenderán los recursos necesarios**: Durante el curso se conocerán las herramientas y funcionalidades necesarias para dominar Java desde cero.",
                    "**Orientado a principiantes**: El curso está diseñado para personas que están iniciando en el mundo de la programación."
                ]
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Java**: Lenguaje de programación de alta demanda en el mercado laboral.",
                    "**Recursos**: Herramientas que se necesitarán para programar en Java (se descargarán en las siguientes lecciones)."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Esta lección sirve como bienvenida al curso de Java Básico. El objetivo es aprender Java de forma práctica, enfocándose en lo que realmente se necesita para trabajar con este lenguaje en empresas y negocios."
            }
        ]
    },
    2: {
        titulo: "DESCARGA E INSTALACIÓN DEL JDK",
        seccion: 1,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué es el JDK y por qué es necesario para programar en Java. Se explica la diferencia entre versiones comerciales y gratuitas, y se muestra cómo descargar e instalar OpenJDK 11, que es una versión gratuita y de código abierto."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**JDK es el compilador de Java**: Es un software que convierte el código que escribimos en instrucciones que la computadora puede ejecutar.",
                    "**Necesitamos dos recursos principales**: El JDK (compilador) y el IDE Apache NetBeans (interfaz gráfica para escribir código).",
                    "**OpenJDK es gratuito**: A diferencia de las versiones de Oracle que son comerciales, OpenJDK es de código abierto y no tiene costo.",
                    "**Se utiliza OpenJDK 11 LTS**: Esta versión tiene soporte extendido y mantenimiento a largo plazo.",
                    "**Configuración durante la instalación**: Se marcan opciones como establecer la variable Java Home y la clave de registro Java Soft."
                ]
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**JDK (Java Development Kit)**: Kit de desarrollo de Java, es el compilador que interpreta nuestro código.",
                    "**IDE (Integrated Development Environment)**: Entorno de desarrollo integrado, es la interfaz gráfica donde escribiremos el código.",
                    "**Compilador**: Programa que traduce el código Java en instrucciones que la computadora entiende.",
                    "**OpenJDK**: Versión gratuita y de código abierto del JDK.",
                    "**LTS (Long Term Support)**: Soporte a largo plazo, significa que la versión recibirá actualizaciones y mantenimiento por más tiempo.",
                    "**Java Home**: Variable del sistema que indica dónde está instalado Java en la computadora."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "El JDK es esencial para programar en Java porque funciona como el compilador que interpreta nuestro código. OpenJDK 11 es la versión gratuita recomendada para aprender y desarrollar aplicaciones sin restricciones comerciales."
            }
        ]
    },
    3: {
        titulo: "DESCARGA E INSTALACIÓN DEL IDE APACHE NETBEANS",
        seccion: 1,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué es Apache NetBeans y cómo instalarlo. Se explica que es un entorno de desarrollo donde escribiremos el código Java, y se muestra cómo vincularlo correctamente con el JDK instalado previamente."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Apache NetBeans es un IDE**: Es una interfaz gráfica que facilita escribir código Java de manera organizada y profesional.",
                    "**Es totalmente gratuito**: No tiene restricciones ni costos de licencia, es de código libre.",
                    "**Se descarga la versión más reciente**: Al momento de la lección es la versión 15 para Windows 64 bits.",
                    "**Debe vincularse con el JDK**: Durante la instalación, NetBeans detecta automáticamente dónde está instalado el OpenJDK.",
                    "**Verificación importante**: Después de instalar, se debe revisar en Tools > Options > Java > Java Shell que esté usando el OpenJDK correcto.",
                    "**Es modular y extensible**: Se pueden agregar módulos para mejorar la experiencia de desarrollo."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Paso a paso de la instalación:\n\n1. Buscar \"Apache NetBeans\" en Google\n2. Entrar a la página oficial\n3. Hacer clic en \"Download\"\n4. Seleccionar la versión 15 para Windows 64 bits\n5. Descargar usando la opción HTTP\n6. Ejecutar el instalador\n7. Aceptar términos y condiciones\n8. Verificar que detecte la ruta del OpenJDK (si no, buscarla manualmente en Program Files > Eclipse > adoptium > JDK 11)\n9. Desmarcar actualizaciones automáticas (opcional)\n10. Completar la instalación"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Apache NetBeans**: IDE gratuito y libre diseñado principalmente para programación en Java.",
                    "**IDE (Integrated Development Environment)**: Entorno integrado de desarrollo, es donde escribimos y organizamos nuestro código.",
                    "**Ruta del JDK**: Ubicación en la computadora donde está instalado el compilador de Java.",
                    "**Browse**: Opción para buscar manualmente la carpeta del JDK si no se detecta automáticamente.",
                    "**Tools > Options**: Menú para configurar opciones del NetBeans.",
                    "**Java Shell**: Configuración dentro de NetBeans donde se verifica qué versión del JDK se está usando."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Apache NetBeans es el entorno donde escribiremos todo nuestro código Java. Es gratuito, fácil de usar y debe estar correctamente vinculado con el OpenJDK para funcionar. Una vez instalado, ya tenemos las dos herramientas esenciales para programar."
            }
        ]
    },
    4: {
        titulo: "TEMAS DISPONIBLES EN IDE APACHE NETBEANS",
        seccion: 1,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a personalizar la apariencia visual de Apache NetBeans. Se muestra cómo cambiar el tema o la interfaz gráfica del IDE para trabajar con la que más le guste o sea más cómoda para cada persona."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Personalización de la interfaz**: NetBeans permite cambiar su apariencia visual para adaptarse a las preferencias de cada usuario.",
                    "**Múltiples temas disponibles**: Existen diferentes opciones de temas visuales que se pueden aplicar.",
                    "**El cambio requiere reiniciar**: Después de aplicar un nuevo tema, es necesario cerrar y volver a abrir NetBeans para que los cambios se apliquen.",
                    "**Es una preferencia personal**: Cada usuario puede elegir el tema con el que se sienta más cómodo para trabajar."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Pasos para cambiar el tema de NetBeans:\n\n1. Ir al menú \"Tools\" (Herramientas)\n2. Seleccionar \"Options\" (Opciones)\n3. Hacer clic en la pestaña \"Appearance\" (Apariencia)\n4. Seleccionar \"Look and Feel\" (LUT)\n5. Elegir un tema de la lista (ejemplos: Darcula Metal, Nimbus)\n6. Hacer clic en \"Apply\" (Aplicar) y luego en \"OK\"\n7. Cerrar y volver a abrir NetBeans para ver los cambios"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Tools**: Menú de herramientas donde se encuentran las opciones de configuración.",
                    "**Options**: Sección donde se personalizan las preferencias del IDE.",
                    "**Appearance**: Pestaña específica para cambiar la apariencia visual.",
                    "**Look and Feel (LUT)**: Opciones de temas visuales disponibles en NetBeans.",
                    "**Darcula Metal**: Uno de los temas disponibles (generalmente oscuro).",
                    "**Nimbus**: Otro tema disponible con diferente estilo visual.",
                    "**Apply**: Botón para aplicar los cambios realizados."
                ]
            }
        ]
    },
    5: {
        titulo: "CLÁSICO HOLA MUNDO",
        seccion: 2,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se crea el primer proyecto en Java y se ejecuta el programa tradicional \"Hola Mundo\". Se aprende a crear un proyecto desde cero, configurar la ubicación de los archivos y ejecutar el primer código Java."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Crear un nuevo proyecto**: Se puede hacer desde el botón \"New Project\" o desde el menú File > New Project.",
                    "**Seleccionar tipo de proyecto**: Se usa \"Java with Ant\" y luego \"Java Application\" para crear un proyecto básico.",
                    "**Definir nombre y ubicación**: Es importante elegir dónde se guardarán los archivos del proyecto en la computadora.",
                    "**Crear carpeta de trabajo**: Se recomienda crear una carpeta específica (ejemplo: \"AprendizajeJava\" en disco C) para organizar todos los proyectos.",
                    "**Clase principal (Main Class)**: Al crear el proyecto se puede generar automáticamente una clase principal donde escribir código.",
                    "**Extensión de archivos Java**: Todos los archivos de código tienen la extensión .java",
                    "**Ejecutar el programa**: Se hace clic derecho sobre el archivo y se selecciona \"Run File\" para ver el resultado."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Código del primer \"Hola Mundo\":\n\n```java\npublic class Aprendizaje {\n    public static void main(String[] args) {\n        System.out.println(\"Hola mundo\");\n    }\n}\n```\n\nPasos para ejecutar:\n1. Crear el proyecto\n2. Escribir el código dentro del método main\n3. Guardar los cambios\n4. Clic derecho en el archivo > Run File\n5. Ver el resultado en la parte inferior (ventana de salida)"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**New Project**: Opción para crear un nuevo proyecto en NetBeans.",
                    "**Java with Ant**: Tecnología que se utiliza para crear proyectos Java básicos.",
                    "**Java Application**: Tipo de proyecto para aplicaciones Java estándar.",
                    "**Browse**: Botón para seleccionar manualmente la ubicación donde guardar el proyecto.",
                    "**Main Class**: Clase principal del proyecto, punto de entrada del programa.",
                    "**System.out.println()**: Comando para imprimir texto en pantalla.",
                    "**public static void main**: Método principal donde comienza la ejecución del programa.",
                    "**Run File**: Comando para ejecutar el archivo y ver el resultado.",
                    "**.java**: Extensión de todos los archivos de código Java."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Crear el primer proyecto en Java es simple: se elige la ubicación, se define el nombre, y se escribe código dentro del método main. El clásico \"Hola Mundo\" es el punto de partida tradicional para aprender cualquier lenguaje de programación."
            }
        ]
    },
    6: {
        titulo: "DEFINIR COMENTARIOS",
        seccion: 2,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué son los comentarios en Java y cómo usarlos. Los comentarios sirven para escribir notas en el código que no se ejecutan, ayudando a explicar qué hace cada parte del programa."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Los comentarios no se ejecutan**: Son texto que el compilador ignora, solo sirven como referencia para el programador.",
                    "**Comentario de una línea**: Se usa doble barra `//` para escribir un comentario en una sola línea.",
                    "**Comentario de múltiples líneas**: Se usa `/*` para iniciar y `*/` para cerrar un bloque de comentarios que puede tener varias líneas.",
                    "**Cambiar tamaño de letra en NetBeans**: Se puede ajustar desde Tools > Options > Fonts & Colors para mejorar la visualización del código.",
                    "**Los comentarios ayudan a documentar**: Sirven para explicar el código, recordar qué hace cada parte, o dejar notas para el futuro."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Comentario de una línea:\n```java\n// Esto va a imprimir el Hola mundo\nSystem.out.println(\"Hola mundo\");\n```\n\nComentario de múltiples líneas:\n```java\n/*\nEsta es la primera línea de comentario\nSegunda línea de comentario\nTercera línea de comentario\n*/\nSystem.out.println(\"Hola mundo\");\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**//**: Símbolo para comentario de una sola línea.",
                    "**/\\* ... \\*/**: Símbolos para comentario de múltiples líneas (inicia con /* y termina con */).",
                    "**Tools > Options**: Menú para configurar las preferencias de NetBeans.",
                    "**Fonts & Colors**: Sección donde se cambia el tamaño y estilo de la letra del código.",
                    "**Comentario**: Texto que no se ejecuta, solo sirve para explicar o documentar el código."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los comentarios son fundamentales para documentar el código. Se usan `//` para una línea y `/* */` para varias líneas. El programa ignora los comentarios al ejecutarse, pero ayudan a entender mejor qué hace cada parte del código."
            }
        ]
    },
    7: {
        titulo: "IMPRIMIR EN PANTALLA",
        seccion: 2,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se explica en detalle las diferentes formas de imprimir texto en pantalla usando Java. Se comprende la diferencia entre `print` y `println`, y cómo controlar dónde aparece el texto y el cursor."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**System.out**: Acceso a la librería System para realizar operaciones de salida (imprimir en pantalla).",
                    "**print vs println**: La diferencia principal es el manejo del cursor después de imprimir.",
                    "**print sin ln**: Imprime el texto pero mantiene el cursor en la misma línea.",
                    "**println con ln**: Imprime el texto y mueve el cursor a la siguiente línea.",
                    "**Estructura del código**: Se trabaja dentro del método `public static void main` que está dentro de una clase.",
                    "**Librería System**: Es un conjunto de herramientas disponibles en Java para realizar diferentes operaciones."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Usando `print` (sin salto de línea):\n```java\nSystem.out.print(\"Mi curso es \");\nSystem.out.print(\"Java\");\n```\nResultado: `Mi curso es Java` (todo en una línea)\n\nUsando `println` (con salto de línea):\n```java\nSystem.out.println(\"Mi curso es\");\nSystem.out.println(\"Java\");\n```\nResultado:\n```\nMi curso es\nJava\n```\n(Cada texto en una línea diferente)"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**System**: Librería que contiene recursos para operaciones del sistema.",
                    "**out**: Recurso dentro de System que sirve para salida (output) de datos.",
                    "**print**: Imprime texto en pantalla sin mover el cursor a la siguiente línea.",
                    "**println**: Imprime texto en pantalla y mueve el cursor a la siguiente línea (ln = line, línea).",
                    "**Cursor**: Posición donde aparecerá el siguiente texto que se imprima.",
                    "**Salto de línea**: Acción de mover el cursor a la línea siguiente."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Para imprimir en Java se usa `System.out.print()` o `System.out.println()`. La diferencia está en el salto de línea: `print` mantiene el cursor en la misma línea, mientras que `println` lo envía a la siguiente línea después de imprimir."
            }
        ]
    },
    8: {
        titulo: "ELIMINAR PROYECTO",
        seccion: 2,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende cómo eliminar proyectos de Java en NetBeans. Es importante saber que la eliminación es permanente y borra todos los archivos del proyecto de la computadora."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Eliminar es permanente**: Cuando se elimina un proyecto en NetBeans, se borra definitivamente, no va a la papelera de reciclaje.",
                    "**Proceso simple**: Solo se necesita hacer clic derecho sobre el nombre del proyecto y seleccionar \"Delete\".",
                    "**Opción de eliminar archivos**: Se puede elegir si eliminar solo la referencia en NetBeans o también todos los archivos físicos del proyecto.",
                    "**Verificar antes de eliminar**: Es recomendable revisar la carpeta del proyecto antes de borrarlo para estar seguro.",
                    "**No es común eliminar proyectos**: Normalmente se mantienen los proyectos, pero es útil saber cómo hacerlo."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Pasos para eliminar un proyecto:\n\n1. Hacer clic derecho sobre el nombre del proyecto (ejemplo: \"Aprendizaje\")\n2. Seleccionar la opción \"Delete\"\n3. Aparece un cuadro de confirmación\n4. Marcar la opción \"Also delete sources\" si se quieren eliminar también los archivos físicos\n5. Hacer clic en \"Yes\"\n6. El proyecto y todos sus archivos se eliminan permanentemente"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Delete**: Opción del menú contextual para eliminar el proyecto.",
                    "**Also delete sources**: Opción para eliminar también la carpeta física y todos los archivos del proyecto.",
                    "**Clic derecho**: Acción que abre el menú contextual con las opciones disponibles.",
                    "**Eliminación definitiva**: Los archivos no van a la papelera de reciclaje, se borran completamente.",
                    "**Carpeta del proyecto**: Ubicación física en el disco donde están guardados todos los archivos."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Eliminar un proyecto en NetBeans es fácil pero permanente. Se hace clic derecho sobre el proyecto, se selecciona Delete, y se confirma. Si se marca la opción correspondiente, todos los archivos se borran definitivamente del disco."
            }
        ]
    },
    9: {
        titulo: "CREAR JAVA CLASS",
        seccion: 2,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se explora el entorno de trabajo de NetBeans y se aprende a crear la estructura correcta para trabajar: primero un paquete (package) y luego archivos de clase (Java Class) dentro de ese paquete. También se entiende la estructura básica de un archivo Java."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Entorno de NetBeans**: Tiene diferentes pestañas y paneles para organizar el trabajo.",
                    "**Página de inicio**: Se puede desactivar desde la misma página para que no aparezca cada vez que se abre NetBeans.",
                    "**Panel de proyectos**: Muestra todos los proyectos y archivos en los que se está trabajando.",
                    "**Ventana de salida (Output)**: Muestra los resultados cuando se ejecutan los programas.",
                    "**Crear proyecto sin Main Class**: Se puede crear un proyecto vacío para construir la estructura manualmente.",
                    "**Source Packages**: Carpeta donde se crean los paquetes del proyecto.",
                    "**Libraries**: Carpeta que contiene el JDK 11 y otros recursos necesarios.",
                    "**Package (paquete)**: Carpeta organizadora donde se guardan los archivos Java.",
                    "**Java Class**: Archivo donde se escribe el código Java.",
                    "**Estructura de un archivo Java**: Todo archivo tiene un package, una clase, y opcionalmente un método main.",
                    "**Método main**: Punto de entrada del programa, se genera automáticamente escribiendo \"main\" y presionando TAB."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Estructura completa de un archivo Java:\n\n```java\npackage aprendizaje;\n\npublic class Practica_1 {\n    \n    public static void main(String[] args) {\n        System.out.println(\"Este es mi primer archivo de Java\");\n    }\n    \n}\n```\n\nExplicación de cada parte:\n- `package aprendizaje;` → Indica a qué paquete pertenece el archivo\n- `public class Practica_1` → Define la clase (mismo nombre que el archivo)\n- `{` y `}` → Llaves que encierran todo el contenido de la clase\n- `public static void main(String[] args)` → Método principal\n- `{` y `}` → Llaves que encierran el contenido del método\n- El código se escribe dentro del método main"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Package**: Paquete o carpeta que organiza los archivos Java.",
                    "**Source Packages**: Carpeta raíz donde se crean todos los paquetes.",
                    "**Java Class**: Tipo de archivo donde se escribe código Java.",
                    "**class**: Palabra clave que define una clase en Java.",
                    "**public**: Modificador de acceso que hace que la clase sea visible desde otros lugares.",
                    "**main**: Atajo que al presionar TAB genera automáticamente el método principal.",
                    "**public static void main(String[] args)**: Método principal donde comienza la ejecución del programa.",
                    "**Llaves { }**: Símbolos que encierran bloques de código (clases, métodos, etc.).",
                    "**Mismo nombre**: El archivo .java y la clase dentro de él deben tener exactamente el mismo nombre."
                ]
            }
        ]
    },
    10: {
        titulo: "VARIABLES Y TIPOS DE DATOS",
        seccion: 3,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué son las variables y los tipos de datos en Java. Se entiende que las variables son espacios en la memoria donde se puede almacenar información de diferentes tipos: números enteros, decimales, texto, entre otros. También se aprende a crear variables y asignarles valores."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Variables**: Son espacios de memoria que permiten almacenar información durante la ejecución del programa.",
                    "**Tipos de datos primitivos**: Son los tipos básicos que vienen con Java (byte, short, int, long, float, double, boolean, char).",
                    "**Tipos de datos de objetos**: Son tipos más complejos como String, Scanner, ArrayList.",
                    "**Tipos de datos recomendados para iniciar**:\n  - `int` - Para números enteros\n  - `double` - Para números decimales\n  - `String` - Para texto (alfanumérico)\n  - `boolean` - Para valores lógicos (verdadero/falso)\n\n- **Estructura para crear variables**: Se debe indicar primero el tipo de dato, luego el nombre de la variable.",
                    "**Asignar valores**: Se usa el símbolo `=` para dar un valor a la variable.",
                    "**Punto y coma**: Cada instrucción en Java termina con punto y coma `;`"
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Forma 1 - Crear variable y luego asignar valor:\n```java\nint edad;\nString nombre;\n\nedad = 39;\nnombre = \"Victor\";\n\nSystem.out.println(edad);\nSystem.out.println(nombre);\n```\n\nForma 2 - Crear y asignar en la misma línea:\n```java\nint edad = 39;\nString nombre = \"Victor\";\n\nSystem.out.println(edad);\nSystem.out.println(nombre);\n```\n\nForma 3 - Todo en una línea (muy compacto):\n```java\nint edad = 39; String nombre = \"Victor\";\nSystem.out.println(edad);\nSystem.out.println(nombre);\n```\n\nResultado en pantalla:\n```\n39\nVictor\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**int**: Tipo de dato para números enteros (sin decimales).",
                    "**String**: Tipo de dato para texto o cadenas de caracteres (alfanumérico). Comienza con mayúscula.",
                    "**double**: Tipo de dato para números decimales.",
                    "**boolean**: Tipo de dato para valores lógicos (true o false).",
                    "**byte**: Tipo de dato para números enteros pequeños (-128 a 127).",
                    "**=**: Operador de asignación, se usa para dar valor a una variable.",
                    "**;**: Punto y coma, indica el final de cada instrucción.",
                    "**Comillas dobles \"\"**: Se usan para encerrar texto cuando se asigna a una variable String.",
                    "**Nombre de variable**: Debe ser descriptivo de lo que contiene (edad, nombre, sueldo, etc.)."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Las variables son fundamentales en programación porque permiten guardar información que se puede usar y modificar durante la ejecución del programa. En Java se debe indicar el tipo de dato y el nombre de la variable, y opcionalmente se puede asignar un valor inicial."
            }
        ]
    },
    11: {
        titulo: "VARIABLES Y TIPOS DE DATOS - PARTE 2",
        seccion: 3,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se amplía el conocimiento sobre tipos de datos, explorando `double` para números decimales, `boolean` para valores lógicos, y `byte` para números enteros pequeños. También se da un mensaje motivacional importante sobre cómo aprender programación de forma efectiva."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Filosofía de aprendizaje**: No es necesario aprender todos los tipos de datos al inicio, solo los más usados (aproximadamente el 15% que se usa en el trabajo real).",
                    "**Java no es complicado**: El lenguaje es sencillo si se aprenden primero los conceptos fundamentales y más utilizados.",
                    "**Ventajas de Java**: Se puede usar en Windows, Linux, Mac, aplicaciones de escritorio, web, móviles, y más.",
                    "**Tipo double**: Permite almacenar números con decimales (ejemplo: 1500.35).",
                    "**Tipo boolean**: Solo acepta dos valores: `true` (verdadero) o `false` (falso).",
                    "**Tipo byte**: Para números enteros muy pequeños, rango de -128 a 127.",
                    "**Límites importantes**: Cada tipo de dato tiene un rango de valores permitidos. Si se intenta usar un valor fuera del rango, Java marca error."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Usando diferentes tipos de datos:\n\n```java\nint edad = 39;\nString nombre = \"Victor\";\ndouble sueldo = 1500.35;\nboolean soltero = false;\n\nSystem.out.println(edad);\nSystem.out.println(nombre);\nSystem.out.println(sueldo);\nSystem.out.println(soltero);\n```\n\nResultado en pantalla:\n```\n39\nVictor\n1500.35\nfalse\n```\n\nEjemplo con boolean:\n```java\nboolean soltero = true;   // Verdadero, sí es soltero\nSystem.out.println(soltero);  // Imprime: true\n\nboolean soltero = false;  // Falso, no es soltero (está casado)\nSystem.out.println(soltero);  // Imprime: false\n```\n\nEjemplo con byte y sus límites:\n```java\nbyte numero = 127;   // Funciona, está en el límite máximo\nbyte numero = 128;   // ERROR - Supera el límite máximo\n\nbyte numero = -128;  // Funciona, está en el límite mínimo\nbyte numero = -129;  // ERROR - Supera el límite mínimo\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**double**: Tipo de dato para números decimales (enteros y con punto decimal).",
                    "**boolean**: Tipo de dato lógico, solo acepta `true` (verdadero) o `false` (falso).",
                    "**true**: Valor verdadero en tipo boolean.",
                    "**false**: Valor falso en tipo boolean.",
                    "**byte**: Tipo de dato para números enteros pequeños, rango: -128 a 127.",
                    "**Límite mínimo**: El valor más bajo que puede almacenar un tipo de dato.",
                    "**Límite máximo**: El valor más alto que puede almacenar un tipo de dato.",
                    "**Punto decimal**: En números decimales se usa punto (.), no coma."
                ]
            }
        ]
    },
    12: {
        titulo: "OPERADORES ARITMÉTICOS",
        seccion: 4,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a realizar operaciones matemáticas básicas en Java usando operadores aritméticos. Se practica con suma, resta, multiplicación, división y obtención de residuos, entendiendo cómo Java procesa estos cálculos."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Operadores aritméticos**: Símbolos que permiten hacer cálculos matemáticos (suma, resta, multiplicación, división, residuo).",
                    "**Suma (+)**: Une o suma dos valores numéricos.",
                    "**Resta (-)**: Calcula la diferencia entre dos valores.",
                    "**Multiplicación (*)**: Multiplica dos valores.",
                    "**División (/)**: Divide dos valores y devuelve solo la parte entera del resultado.",
                    "**Residuo (%)**: Devuelve lo que sobra de una división (el resto).",
                    "**Variables para almacenar resultados**: Se crean variables específicas para guardar el resultado de cada operación.",
                    "**División en enteros**: Cuando se divide con variables int, solo se muestra la parte entera, no los decimales."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "```java\nint numero1 = 10;\nint numero2 = 15;\nint resultadoSuma, resultadoResta, resultadoMul;\nint resultadoDiv1, resultadoDiv2;\n\n// Suma\nresultadoSuma = numero1 + numero2;\nSystem.out.println(resultadoSuma);  // Imprime: 25\n\n// Resta\nresultadoResta = numero2 - numero1;\nSystem.out.println(resultadoResta);  // Imprime: 5\n\n// Multiplicación\nresultadoMul = numero1 * numero2;\nSystem.out.println(resultadoMul);  // Imprime: 150\n\n// División (resultado)\nresultadoDiv1 = 21 / 2;\nSystem.out.println(resultadoDiv1);  // Imprime: 10\n\n// Residuo (lo que sobra)\nresultadoDiv2 = 21 % 2;\nSystem.out.println(resultadoDiv2);  // Imprime: 1\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**+**: Operador de suma.",
                    "**-**: Operador de resta.",
                    "**\\***: Operador de multiplicación.",
                    "**/**: Operador de división (devuelve solo la parte entera si son números enteros).",
                    "**%**: Operador de residuo o módulo (devuelve lo que sobra de una división).",
                    "**Resultado**: Variable donde se almacena el resultado de una operación.",
                    "**División entera**: Cuando se dividen dos int, el resultado no incluye decimales.",
                    "**Residuo**: Lo que sobra cuando un número no se puede dividir exactamente entre otro."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los operadores aritméticos permiten hacer cálculos matemáticos en Java. Se usan los símbolos tradicionales (+, -, *, /), y el símbolo % permite obtener el residuo de una división. Es importante recordar que la división entre enteros solo devuelve la parte entera del resultado."
            }
        ]
    },
    13: {
        titulo: "OPERADORES DE COMPARACIÓN",
        seccion: 4,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a comparar valores en Java usando operadores de comparación. Estos operadores permiten verificar si dos valores son iguales, diferentes, o si uno es mayor o menor que otro. El resultado de estas comparaciones siempre es un valor booleano (true o false)."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Operadores de comparación**: También llamados operadores de igualdad o relacionales, permiten comparar datos.",
                    "**Resultado booleano**: Toda comparación devuelve `true` (verdadero) o `false` (falso).",
                    "**Tipos compatibles**: Solo se pueden comparar datos del mismo tipo (números con números, texto con texto).",
                    "**Doble igual (==)**: Compara si dos valores son iguales.",
                    "**Diferente (!=)**: Compara si dos valores son distintos (no iguales).",
                    "**Mayor que (>)**: Verifica si un valor es mayor que otro.",
                    "**Menor que (<)**: Verifica si un valor es menor que otro.",
                    "**Mayor o igual (>=)**: Verifica si un valor es mayor o igual que otro.",
                    "**Menor o igual (<=)**: Verifica si un valor es menor o igual que otro."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "```java\nint numero1 = 120;\nint numero2 = 50;\nboolean resultado;\n\n// Comparación: ¿Son iguales?\nresultado = numero1 == numero2;\nSystem.out.println(resultado);  // Imprime: false (120 no es igual a 50)\n\n// Si fueran iguales\nnumero2 = 120;\nresultado = numero1 == numero2;\nSystem.out.println(resultado);  // Imprime: true (120 es igual a 120)\n\n// ¿Son diferentes?\nnumero2 = 50;\nresultado = numero1 != numero2;\nSystem.out.println(resultado);  // Imprime: true (120 es diferente de 50)\n\n// ¿Es mayor?\nresultado = numero1 > numero2;\nSystem.out.println(resultado);  // Imprime: true (120 es mayor que 50)\n\n// ¿Es menor?\nresultado = numero1 < numero2;\nSystem.out.println(resultado);  // Imprime: false (120 no es menor que 50)\n\n// ¿Es mayor o igual?\nresultado = numero1 >= numero2;\nSystem.out.println(resultado);  // Imprime: true (120 es mayor que 50)\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**==**: Operador de igualdad (doble igual). Pregunta \"¿son iguales?\".",
                    "**!=**: Operador de diferencia o \"no igual\". Pregunta \"¿son diferentes?\".",
                    "**>**: Operador \"mayor que\".",
                    "**<**: Operador \"menor que\".",
                    "**>=**: Operador \"mayor o igual que\".",
                    "**<=**: Operador \"menor o igual que\".",
                    "**boolean**: Tipo de dato que almacena el resultado de una comparación (true o false).",
                    "**true**: Valor verdadero.",
                    "**false**: Valor falso."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los operadores de comparación permiten verificar relaciones entre valores. Siempre devuelven un resultado booleano (verdadero o falso). Son fundamentales para tomar decisiones en programación basadas en condiciones específicas."
            }
        ]
    },
    14: {
        titulo: "OPERADORES LÓGICOS",
        seccion: 4,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a combinar múltiples comparaciones usando operadores lógicos. Se entiende cómo funcionan AND (&&), OR (||) y NOT (!), y cómo evalúan expresiones para devolver un resultado verdadero o falso."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Operadores lógicos**: Permiten combinar o modificar expresiones booleanas.",
                    "**AND (&&)**: Devuelve true solo si TODAS las expresiones son verdaderas.",
                    "**OR (||)**: Devuelve true si AL MENOS UNA expresión es verdadera.",
                    "**NOT (!)**: Invierte el valor lógico (true se convierte en false y viceversa).",
                    "**Tabla de verdad AND**: - true && true = true\n  - true && false = false\n  - false && true = false\n  - false && false = false",
                    "**Tabla de verdad OR**:\n  - true || true = true\n  - true || false = true\n  - false || true = true\n  - false || false = false\n\n- **Combinación de comparaciones**: Se pueden unir múltiples condiciones con operadores lógicos."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Usando AND (&&):\n```java\nboolean resultado;\n\n// Ambas comparaciones son verdaderas\nresultado = (5 == 5) && (6 == 6);\nSystem.out.println(resultado);  // Imprime: true\n\n// Una es verdadera y otra falsa\nresultado = (5 == 5) && (6 == 7);\nSystem.out.println(resultado);  // Imprime: false\n```\n\nUsando OR (||):\n```java\n// Al menos una es verdadera\nresultado = (5 == 5) || (6 == 7);\nSystem.out.println(resultado);  // Imprime: true\n\n// Ambas son falsas\nresultado = (5 == 6) || (6 == 7);\nSystem.out.println(resultado);  // Imprime: false\n```\n\nUsando NOT (!):\n```java\n// Invierte el resultado\nresultado = !(5 == 5);\nSystem.out.println(resultado);  // Imprime: false (invierte true a false)\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**&&**: Operador AND (Y lógico). Requiere que todas las condiciones sean verdaderas.",
                    "**||**: Operador OR (O lógico). Requiere que al menos una condición sea verdadera.",
                    "**!**: Operador NOT (negación). Invierte el valor booleano.",
                    "**Tabla de verdad**: Referencia que muestra todos los posibles resultados de combinar valores booleanos.",
                    "**Expresión lógica**: Combinación de comparaciones usando operadores lógicos.",
                    "**Evaluación**: Proceso de calcular si una expresión completa es verdadera o falsa."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los operadores lógicos permiten crear condiciones más complejas combinando múltiples comparaciones. AND requiere que todo sea verdadero, OR requiere al menos uno verdadero, y NOT invierte el resultado. Son esenciales para tomar decisiones basadas en múltiples criterios."
            }
        ]
    },
    15: {
        titulo: "OPERADORES DE INCREMENTO Y DECREMENTO",
        seccion: 4,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a aumentar o disminuir el valor de una variable en 1 de forma rápida usando operadores especiales. Se entiende la diferencia entre escribir el código de forma tradicional y usar los operadores ++ y --."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Incremento**: Aumentar el valor de una variable en 1.",
                    "**Decremento**: Disminuir el valor de una variable en 1.",
                    "**Forma tradicional de incrementar**: `numero = numero + 1;`",
                    "**Forma abreviada con ++**: `numero++;` (hace lo mismo que la forma tradicional).",
                    "**Forma abreviada con --**: `numero--;` (resta 1 al valor actual).",
                    "**Aplicación múltiple**: Se puede aplicar varias veces para aumentar o disminuir más de una unidad.",
                    "**Solo para números**: Funciona con tipos de datos numéricos (int, double, etc.)."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Incremento tradicional vs abreviado:\n```java\nint numero1 = 0;\n\n// Forma tradicional\nnumero1 = numero1 + 1;\nSystem.out.println(numero1);  // Imprime: 1\n\n// Forma abreviada (mismo resultado)\nnumero1 = 0;\nnumero1++;\nSystem.out.println(numero1);  // Imprime: 1\n\n// Aplicar dos veces\nnumero1++;\nSystem.out.println(numero1);  // Imprime: 2\n```\n\nDecremento:\n```java\nint numero1 = 5;\nint numero2 = 5;\n\n// Decrementar una vez\nnumero1--;\nSystem.out.println(numero1);  // Imprime: 4\n\n// Decrementar dos veces\nnumero2--;\nnumero2--;\nSystem.out.println(numero2);  // Imprime: 3\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**++**: Operador de incremento. Suma 1 al valor de la variable.",
                    "**--**: Operador de decremento. Resta 1 al valor de la variable.",
                    "**Incremento**: Acción de aumentar un valor en 1.",
                    "**Decremento**: Acción de disminuir un valor en 1.",
                    "**Forma abreviada**: Manera más corta de escribir operaciones comunes.",
                    "**Aplicación sucesiva**: Usar el operador varias veces para incrementar/decrementar más de 1."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los operadores ++ y -- son formas abreviadas de aumentar o disminuir una variable en 1. Son más rápidos de escribir que la forma tradicional y se usan frecuentemente en programación, especialmente en ciclos y contadores."
            }
        ]
    },
    16: {
        titulo: "OPERADOR CONDICIONAL",
        seccion: 4,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a usar el operador condicional (también llamado operador ternario) que permite evaluar una condición y elegir entre dos resultados posibles en una sola línea de código."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Operador condicional**: Permite tomar decisiones en una sola línea de código.",
                    "**Estructura**: `condición ? resultado_si_verdadero : resultado_si_falso`",
                    "**Tres partes**:\n  1. Expresión a evaluar (comparación)\n  2. Resultado si la condición es verdadera (después de ?)\n  3. Resultado si la condición es falsa (después de :)\n\n- **Símbolo ?**: Separa la condición del resultado verdadero.",
                    "**Símbolo :**: Separa el resultado verdadero del resultado falso.",
                    "**Almacenar resultado**: El resultado se puede guardar en una variable."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "```java\nint numero1 = 6;\nint numero2 = 5;\nString respuesta;\n\n// ¿número1 es mayor que número2?\nrespuesta = numero1 > numero2 ? \"es mayor\" : \"es menor\";\nSystem.out.println(respuesta);  // Imprime: es mayor\n\n// Cambiar valores\nnumero1 = 6;\nnumero2 = 10;\nrespuesta = numero1 > numero2 ? \"es mayor\" : \"es menor\";\nSystem.out.println(respuesta);  // Imprime: es menor\n```\n\nExplicación paso a paso:\n1. Se evalúa: `numero1 > numero2` (¿6 es mayor que 5?)\n2. Como es verdadero, se toma: `\"es mayor\"`\n3. El texto se guarda en la variable `respuesta`\n4. Se imprime: \"es mayor\""
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**?**: Símbolo de interrogación. Separa la condición del resultado para true.",
                    "**:**: Dos puntos. Separa el resultado true del resultado false.",
                    "**Operador ternario**: Otro nombre para el operador condicional (tiene tres partes).",
                    "**Condición**: Expresión que se evalúa como verdadero o falso.",
                    "**Expresión verdadera**: Lo que se ejecuta si la condición es true.",
                    "**Expresión falsa**: Lo que se ejecuta si la condición es false."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "El operador condicional permite escribir decisiones simples en una sola línea. Evalúa una condición y devuelve uno de dos valores posibles. Es una forma compacta de escribir decisiones que más adelante se podrán hacer con estructuras if-else más complejas."
            }
        ]
    },
    17: {
        titulo: "CONCATENACIÓN",
        seccion: 4,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a unir o combinar textos y valores usando el símbolo +. La concatenación permite crear mensajes personalizados mezclando texto fijo con variables, incluso de diferentes tipos de datos."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Concatenación**: Unir o combinar varios textos o valores en uno solo.",
                    "**Símbolo +**: Se usa para concatenar (unir) strings.",
                    "**Mezclar tipos de datos**: Se puede concatenar String con int, double, etc.",
                    "**Espacios**: Se deben agregar manualmente en el texto para que la salida se vea bien.",
                    "**Múltiples concatenaciones**: Se pueden unir varios elementos en una sola línea.",
                    "**Variables y texto fijo**: Se puede combinar texto directo (entre comillas) con variables."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "```java\nString nombre = \"Victor\";\nString profesion = \"desarrollador de sistemas\";\nint edad = 39;\n\n// Concatenar variables con texto\nSystem.out.println(\"Mi nombre es \" + nombre);\n// Imprime: Mi nombre es Victor\n\n// Concatenar múltiples elementos\nSystem.out.println(\"Mi nombre es \" + nombre + \" y mi profesión es \" + profesion);\n// Imprime: Mi nombre es Victor y mi profesión es desarrollador de sistemas\n\n// Concatenar String con int\nSystem.out.println(\"Mi nombre es \" + nombre + \" y mi profesión es \" + profesion + \" y mi edad es \" + edad + \" años\");\n// Imprime: Mi nombre es Victor y mi profesión es desarrollador de sistemas y mi edad es 39 años\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**+**: Operador de concatenación. Une strings y otros valores.",
                    "**String**: Tipo de dato para texto o cadenas de caracteres.",
                    "**Concatenar**: Unir o combinar textos.",
                    "**Comillas dobles \"\"**: Encierran texto literal que se quiere mostrar.",
                    "**Espacios**: Caracteres en blanco que se agregan para separar palabras.",
                    "**Mezcla de tipos**: Java convierte automáticamente números a texto al concatenar."
                ]
            }
        ]
    },
    18: {
        titulo: "ENTRADA DE DATOS POR TECLADO",
        seccion: 5,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a recibir información del usuario mientras el programa está ejecutándose. Se introduce la clase Scanner, que permite capturar texto y números que el usuario escribe en el teclado, haciendo los programas más interactivos."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Entrada de datos**: Permite al usuario ingresar información mientras el programa se ejecuta.",
                    "**Clase Scanner**: Herramienta de Java que permite recibir datos desde el teclado.",
                    "**Import**: Palabra clave para traer clases externas al programa (`import java.util.Scanner;`).",
                    "**Ubicación del import**: Se escribe fuera de la clase, después del package.",
                    "**Crear objeto Scanner**: Se crea una variable especial que tendrá capacidad de recibir datos.",
                    "**new**: Palabra clave para crear (instanciar) un nuevo objeto Scanner.",
                    "**System.in**: Parámetro que indica que los datos vienen del teclado (entrada estándar).",
                    "**nextLine()**: Método para capturar texto (String) desde el teclado.",
                    "**Proceso**: El usuario escribe algo, presiona Enter, y el dato se guarda en una variable."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Estructura completa para recibir datos:\n\n```java\nimport java.util.Scanner;\n\npublic class EntradaDatos {\n    public static void main(String[] args) {\n        \n        // Crear variable Scanner para recibir datos\n        Scanner entrada = new Scanner(System.in);\n        \n        // Variable para almacenar lo que escriba el usuario\n        String datos;\n        \n        // Capturar el texto que escribe el usuario\n        datos = entrada.nextLine();\n        \n        // Mostrar lo que se capturó\n        System.out.println(\"Este es el contenido ingresado por teclado: \" + datos);\n    }\n}\n```\n\nFuncionamiento paso a paso:\n1. Se importa la clase Scanner\n2. Se crea un objeto Scanner llamado `entrada`\n3. El programa espera que el usuario escriba algo\n4. Lo que el usuario escribe se guarda en la variable `datos`\n5. Se muestra en pantalla lo que se capturó"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**import java.util.Scanner**: Línea que trae la clase Scanner al programa.",
                    "**Scanner**: Clase que permite capturar datos del teclado.",
                    "**new**: Palabra para crear un nuevo objeto.",
                    "**System.in**: Indica que la entrada viene del teclado.",
                    "**nextLine()**: Método para capturar una línea completa de texto.",
                    "**Objeto**: Variable especial con capacidades adicionales (en este caso, `entrada`).",
                    "**Instanciar**: Crear un nuevo objeto usando `new`.",
                    "**Enter**: Tecla que el usuario presiona para confirmar lo que escribió."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "La clase Scanner permite crear programas interactivos que reciben información del usuario. Se debe importar la clase, crear un objeto Scanner, y usar métodos como nextLine() para capturar datos del teclado. Esto hace que los programas sean dinámicos en lugar de trabajar solo con datos fijos."
            }
        ]
    },
    19: {
        titulo: "ENTRADA DE DATOS POR TECLADO - PARTE 2",
        seccion: 5,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a capturar diferentes tipos de datos (texto, números enteros y decimales) usando los diversos métodos que ofrece la clase Scanner. Se practica creando un programa que solicita múltiples datos al usuario."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Scanner para múltiples tipos de datos**: Un solo objeto Scanner puede recibir diferentes tipos de información.",
                    "**nextLine()**: Captura texto completo (tipo String).",
                    "**nextInt()**: Captura números enteros (tipo int).",
                    "**nextDouble()**: Captura números decimales (tipo double).",
                    "**Mensajes al usuario**: Es importante mostrar mensajes que indiquen qué información se necesita.",
                    "**Secuencia de captura**: Los datos se capturan uno por uno, en el orden que se programó.",
                    "**Almacenar en variables**: Cada dato capturado se guarda en una variable del tipo correspondiente.",
                    "**Concatenar resultados**: Al final se pueden combinar todos los datos capturados en un mensaje."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Programa completo que captura diferentes tipos de datos:\n\n```java\nimport java.util.Scanner;\n\npublic class EntradaDatos {\n    public static void main(String[] args) {\n        \n        // Crear el objeto Scanner\n        Scanner entrada = new Scanner(System.in);\n        \n        // Variables para almacenar los datos\n        String nombre;\n        String profesion;\n        int edad;\n        double sueldo;\n        \n        // Solicitar y capturar el nombre\n        System.out.println(\"Ingresa tu nombre:\");\n        nombre = entrada.nextLine();\n        \n        // Solicitar y capturar la profesión\n        System.out.println(\"Ingresa tu profesión:\");\n        profesion = entrada.nextLine();\n        \n        // Solicitar y capturar la edad\n        System.out.println(\"Ingresa tu edad:\");\n        edad = entrada.nextInt();\n        \n        // Solicitar y capturar el sueldo\n        System.out.println(\"Ingresa tu sueldo:\");\n        sueldo = entrada.nextDouble();\n        \n        // Mostrar todos los datos capturados\n        System.out.println(\"Hola \" + nombre + \" tu profesión es \" + profesion + \n                          \" siendo tu edad \" + edad + \" y ganando el sueldo \" + sueldo);\n    }\n}\n```\n\nEjecución del programa:\n```\nIngresa tu nombre:\nVictor\nIngresa tu profesión:\ndesarrollador de sistemas\nIngresa tu edad:\n39\nIngresa tu sueldo:\n2500\nHola Victor tu profesión es desarrollador de sistemas siendo tu edad 39 y ganando el sueldo 2500.0\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**nextLine()**: Método para capturar texto completo (String).",
                    "**nextInt()**: Método para capturar solo números enteros (int).",
                    "**nextDouble()**: Método para capturar números enteros y decimales (double).",
                    "**Scanner entrada**: Objeto único que sirve para capturar todos los tipos de datos.",
                    "**Mensajes guía**: Textos que informan al usuario qué debe ingresar.",
                    "**Flujo secuencial**: Los datos se piden uno tras otro en el orden programado.",
                    "**Compatibilidad de tipos**: El método usado debe coincidir con el tipo de variable (nextInt() para int, nextDouble() para double, etc.)."
                ]
            }
        ]
    },
    20: {
        titulo: "PERSONALIZAR EL IDE APACHE NETBEANS - DRACULA THEME",
        seccion: 6,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a personalizar la apariencia del IDE Apache NetBeans instalando un tema oscuro llamado Dracula. Se explica cómo descargar, instalar y configurar el tema para hacer más cómodo y agradable el trabajo de programación, especialmente para reducir el cansancio visual."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Importancia de la comodidad**: Un entorno de trabajo cómodo mejora la experiencia de aprendizaje.",
                    "**Temas oscuros**: Reducen el brillo de la pantalla y son más cómodos para los ojos durante sesiones largas de trabajo.",
                    "**Dracula Theme**: Tema popular y profesional disponible para NetBeans, similar a los temas de otros IDE como Visual Studio.",
                    "**Proceso de instalación**: 1. Buscar y descargar el tema\n  2. Importarlo en NetBeans\n  3. Ajustar el tamaño de fuente\n  4. Personalizar según preferencias",
                    "**Configuración adicional**: Se puede cambiar el tipo de fuente, tamaño y otros aspectos visuales.",
                    "**Atajo útil**: Alt + rueda del mouse permite ampliar o reducir el tamaño del texto mientras se trabaja."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Pasos detallados para instalar el tema:\n\n**Paso 1 - Descargar el tema:**\n1. Abrir el navegador web\n2. Buscar en Google: \"Dracula theme Java NetBeans\"\n3. Entrar a draculatheme.com\n4. Buscar la sección de NetBeans\n5. Hacer clic en \"Download File\"\n6. Descargar el archivo (no es necesario descomprimirlo)\n\n**Paso 2 - Importar en NetBeans:**\n1. Ir a Tools > Options\n2. Seleccionar \"Fonts and Colors\"\n3. Crear un duplicado del perfil actual (botón \"Duplicate\")\n4. Darle un nombre (ejemplo: \"prueba\")\n5. Hacer clic en el botón \"Import\" (parte inferior)\n6. Buscar y seleccionar el archivo descargado\n7. Hacer clic en \"Abrir\"\n8. Confirmar el reemplazo (OK)\n9. Guardar cambios (OK)\n10. NetBeans se reiniciará con el nuevo tema\n\n**Paso 3 - Ajustar el tamaño de fuente:**\n1. Ir a Tools > Options\n2. Seleccionar \"Fonts and Colors\"\n3. En la pestaña \"Syntax\"\n4. Cambiar el tamaño de fuente (ejemplo: 16 o 17)\n5. Aplicar cambios (Apply)\n6. Guardar (OK)"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Dracula Theme**: Tema de colores oscuro popular para editores de código.",
                    "**Tools > Options**: Menú de configuración de NetBeans.",
                    "**Fonts and Colors**: Sección donde se configuran las fuentes y colores del editor.",
                    "**Import**: Botón para importar temas externos al IDE.",
                    "**Duplicate**: Opción para crear una copia del perfil actual antes de hacer cambios.",
                    "**Font**: Tipo de letra usado en el editor de código.",
                    "**Size**: Tamaño de la fuente en el editor.",
                    "**Alt + rueda del mouse**: Atajo para ampliar/reducir texto rápidamente.",
                    "**draculatheme.com**: Sitio web oficial del tema Dracula."
                ]
            }
        ]
    },
    21: {
        titulo: "CONVERSIÓN DE TIPOS DE DATOS - PARTE 1",
        seccion: 7,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué es la conversión de tipos de datos y por qué es necesaria. Se introduce el concepto de \"parsing\" y se muestra cómo convertir texto (String) a números usando la clase Integer y el método parseInt()."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Problema inicial**: Los números entre comillas son tratados como texto, no como números para operaciones matemáticas.",
                    "**Concatenación vs Suma**: - Sin comillas: `120 + 16` = 136 (suma matemática)\n  - Con comillas: `\"120\" + \"16\"` = \"12016\" (concatenación de texto)",
                    "**Conversión de datos**: Proceso de cambiar un dato de un tipo a otro (ejemplo: de String a int).",
                    "**Parse**: Método para convertir texto a números.",
                    "**Integer.parseInt()**: Convierte un String que contiene números a un valor int.",
                    "**Sintaxis**: `Integer.parseInt(\"número\")` donde \"número\" es texto que queremos convertir."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Problema - texto que no suma:\n```java\nSystem.out.println(120 + 16);       // Imprime: 136 (suma matemática)\nSystem.out.println(\"120\" + \"16\");   // Imprime: 12016 (concatenación)\n```\n\nSolución - convertir texto a número:\n```java\n// Convertir String a int para poder sumar\nSystem.out.println(Integer.parseInt(\"120\") + Integer.parseInt(\"16\"));\n// Imprime: 136 (ahora sí suma correctamente)\n```\n\nExplicación paso a paso:\n1. `\"120\"` es un String (texto)\n2. `Integer.parseInt(\"120\")` convierte el texto a número 120\n3. Ahora se puede sumar matemáticamente\n4. El resultado es 136, no \"12016\""
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Conversión de tipos**: Cambiar un dato de un tipo a otro.",
                    "**Parse**: Analizar y convertir texto a otro tipo de dato.",
                    "**Integer**: Clase envolvente (wrapper) para trabajar con números enteros.",
                    "**parseInt()**: Método que convierte String a int.",
                    "**String entre comillas**: Los números entre comillas \" \" son tratados como texto.",
                    "**Operación matemática**: Solo funciona con números, no con texto.",
                    "**Concatenación**: Unir textos, se hace con el símbolo + cuando hay Strings."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "La conversión de tipos de datos es esencial cuando tenemos números almacenados como texto y necesitamos hacer operaciones matemáticas con ellos. El método parseInt() de la clase Integer permite convertir texto numérico a valores enteros reales que pueden sumarse, restarse, etc."
            }
        ]
    },
    22: {
        titulo: "CONVERSIÓN DE TIPOS DE DATOS - PARTE 2",
        seccion: 7,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se comprende la diferencia entre tipos de datos primitivos y tipos de datos de objeto (clases envolventes o wrappers). Se aprende que existen dos formas de trabajar con datos: usando tipos primitivos (int, double, boolean) o usando sus equivalentes en forma de clases (Integer, Double, Boolean)."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Tipos primitivos**: Son los tipos básicos de Java (int, double, boolean, byte, etc.).",
                    "**Tipos objeto (Wrappers)**: Son clases que envuelven los tipos primitivos (Integer, Double, Boolean, Byte, etc.).",
                    "**Diferencia visual**: Los tipos objeto comienzan con mayúscula, los primitivos con minúscula.",
                    "**Ambos funcionan igual**: Se pueden usar indistintamente para crear variables.",
                    "**Ventaja de los objetos**: Tienen métodos adicionales como parse para conversión."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Tipos primitivos vs tipos objeto:\n\n```java\n// TIPO PRIMITIVO\nint numeroEntero1 = 15;\ndouble variableDouble1 = 15.0;\nboolean verdad1 = true;\n\n// TIPO OBJETO (Wrapper)\nInteger numeroEntero2 = 15;\nDouble variableDouble2 = 15.0;\nBoolean verdad2 = false;\n\n// Ambas formas funcionan y almacenan el mismo tipo de dato\n```\n\nComparación lado a lado:\n\n| Tipo Primitivo | Tipo Objeto (Wrapper) |\n|----------------|----------------------|\n| int            | Integer              |\n| double         | Double               |\n| boolean        | Boolean              |\n| byte           | Byte                 |\n| float          | Float                |\n| char           | Character            |"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Tipo primitivo**: Tipo de dato básico de Java (int, double, boolean, etc.).",
                    "**Tipo objeto**: Clase que envuelve un tipo primitivo (Integer, Double, Boolean, etc.).",
                    "**Wrapper**: Palabra en inglés que significa \"envolvente\", se refiere a las clases objeto.",
                    "**Integer**: Versión objeto del tipo int.",
                    "**Double**: Versión objeto del tipo double.",
                    "**Boolean**: Versión objeto del tipo boolean.",
                    "**Mayúscula inicial**: Los tipos objeto siempre empiezan con mayúscula.",
                    "**Métodos adicionales**: Los tipos objeto tienen funcionalidades extras como parse."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Java ofrece dos formas de trabajar con datos: tipos primitivos (int, double, boolean) y tipos objeto o wrappers (Integer, Double, Boolean). Los tipos objeto son clases que \"envuelven\" los primitivos y ofrecen métodos adicionales, especialmente útiles para conversión de datos. Ambas formas funcionan para almacenar valores, pero los wrappers son necesarios para operaciones avanzadas."
            }
        ]
    },
    23: {
        titulo: "CONVERSIÓN DE TIPOS DE DATOS - PARTE 3",
        seccion: 7,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se practica la conversión de un String a diferentes tipos numéricos usando los métodos parse de las clases wrapper. Se aprende a convertir texto a byte, int, float y double, entendiendo las limitaciones de cada tipo."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**String como origen**: Se parte de un número almacenado como texto.",
                    "**Conversión a diferentes tipos**: Un mismo String puede convertirse a distintos tipos numéricos.",
                    "**Limitaciones de rangos**: Cada tipo tiene un rango máximo y mínimo de valores permitidos.",
                    "**Byte.parseByte()**: Convierte String a byte (rango: -128 a 127).",
                    "**Integer.parseInt()**: Convierte String a int (números enteros más grandes).",
                    "**Float.parseFloat()**: Convierte String a float (números decimales).",
                    "**Double.parseDouble()**: Convierte String a double (números decimales de mayor precisión).",
                    "**Error por desbordamiento**: Si el número excede el límite del tipo, genera error."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Convertir un String a diferentes tipos:\n\n```java\nString numero = \"90\";  // Número almacenado como texto\n\n// Convertir a byte\nbyte bNumero = Byte.parseByte(numero);\nSystem.out.println(bNumero);  // Imprime: 90\n\n// Convertir a int\nint iNumero = Integer.parseInt(numero);\nSystem.out.println(iNumero);  // Imprime: 90\n\n// Convertir a float\nfloat fNumero = Float.parseFloat(numero);\nSystem.out.println(fNumero);  // Imprime: 90.0\n\n// Convertir a double\ndouble dNumero = Double.parseDouble(numero);\nSystem.out.println(dNumero);  // Imprime: 90.0\n```\n\nEjemplo de error por límite:\n```java\nString numero = \"1500\";\nbyte bNumero = Byte.parseByte(numero);  // ERROR - 1500 excede el límite de byte (127)\n\n// Solución: usar String con valor dentro del rango\nString numero = \"90\";\nbyte bNumero = Byte.parseByte(numero);  // OK - 90 está dentro del rango\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Byte.parseByte()**: Convierte String a byte (rango: -128 a 127).",
                    "**Integer.parseInt()**: Convierte String a int.",
                    "**Float.parseFloat()**: Convierte String a float.",
                    "**Double.parseDouble()**: Convierte String a double.",
                    "**Rango de valores**: Límite mínimo y máximo que puede almacenar un tipo de dato.",
                    "**Desbordamiento**: Error que ocurre cuando un valor excede el límite del tipo.",
                    "**sout + Tab**: Atajo rápido para escribir System.out.println()."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Cada clase wrapper ofrece su método parse para convertir String al tipo correspondiente: parseByte(), parseInt(), parseFloat(), parseDouble(). Es importante conocer los límites de cada tipo para evitar errores de desbordamiento. El mismo String puede convertirse a diferentes tipos según la necesidad del programa."
            }
        ]
    },
    24: {
        titulo: "CONVERSIÓN DE TIPOS DE DATOS - PARTE 4",
        seccion: 7,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a concatenar (unir) una variable String con diferentes tipos de datos primitivos. Se descubre que Java permite mezclar String con cualquier tipo de dato (int, float, double, char, boolean) usando el operador +."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Concatenación universal**: String se puede concatenar con cualquier tipo de dato.",
                    "**Conversión automática**: Java convierte automáticamente los tipos primitivos a String al concatenar.",
                    "**Variables de diferentes tipos**: Se pueden crear múltiples variables de distintos tipos y combinarlas."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Concatenar String con diferentes tipos:\n\n```java\nString texto = \"Contenido de texto: \";\n\nbyte bNumero = 10;\nint iNumero = 120;\nfloat fNumero = 15f;\ndouble dNumero = 16.0;\nchar cadena = 'a';\nboolean verdad = true;\n\n// Concatenar con byte\ntexto = texto + bNumero;\nSystem.out.println(texto);  // Imprime: Contenido de texto: 10\n\n// Concatenar con int\ntexto = \"Contenido de texto: \" + iNumero;\nSystem.out.println(texto);  // Imprime: Contenido de texto: 120\n\n// Concatenar con float\ntexto = \"Contenido de texto: \" + fNumero;\nSystem.out.println(texto);  // Imprime: Contenido de texto: 15.0\n\n// Concatenar con double\ntexto = \"Contenido de texto: \" + dNumero;\nSystem.out.println(texto);  // Imprime: Contenido de texto: 16.0\n\n// Concatenar con char\ntexto = \"Contenido de texto: \" + cadena;\nSystem.out.println(texto);  // Imprime: Contenido de texto: a\n\n// Concatenar con boolean\ntexto = \"Contenido de texto: \" + verdad;\nSystem.out.println(texto);  // Imprime: Contenido de texto: true\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**byte**: Tipo para números enteros pequeños (-128 a 127).",
                    "**int**: Tipo para números enteros normales.",
                    "**float**: Tipo para números decimales, requiere 'f' al final del valor.",
                    "**double**: Tipo para números decimales de mayor precisión.",
                    "**char**: Tipo para un solo carácter, usa comillas simples ' '.",
                    "**boolean**: Tipo lógico (true o false).",
                    "**Comillas dobles \" \"**: Para String (texto).",
                    "**Comillas simples ' '**: Para char (un carácter).",
                    "**Concatenación automática**: Java convierte automáticamente tipos primitivos a String al usar +."
                ]
            }
        ]
    },
    25: {
        titulo: "ESTRUCTURA CONDICIONAL IF - ELSE",
        seccion: 8,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a crear programas que toman decisiones basándose en condiciones. Se introduce la estructura if (si) que permite ejecutar código solo cuando se cumple una condición, y else (sino) que ofrece una alternativa cuando la condición no se cumple."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Estructura condicional**: Permite que el programa tome decisiones y ejecute diferentes códigos según las condiciones.",
                    "**if (si)**: Evalúa una condición. Si es verdadera, ejecuta el código dentro de sus llaves.",
                    "**else (sino)**: Se ejecuta solo si la condición del if es falsa. Ofrece una alternativa.",
                    "**Condición**: Expresión que se evalúa como verdadero (true) o falso (false).",
                    "**Sintaxis con una sola alternativa (solo if)**:\n  ```\n  if (condición) {\n      // código si la condición es verdadera\n  }\n  ```\n\n- **Sintaxis con dos alternativas (if-else)**:\n  ```\n  if (condición) {\n      // código si la condición es verdadera\n  } else {\n      // código si la condición es falsa\n  }\n  ```\n\n- **Llaves { }**: Delimitan el bloque de código que se ejecutará.",
                    "**Comparaciones**: Se usan operadores como < (menor), > (mayor), <= (menor o igual), >= (mayor o igual)."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Solo if (una alternativa):\n```java\nimport java.util.Scanner;\n\npublic class EstructuraCondicional {\n    public static void main(String[] args) {\n        Scanner entrada = new Scanner(System.in);\n        int edad = 0;\n        \n        System.out.println(\"Ingresa tu edad:\");\n        edad = entrada.nextInt();\n        \n        // Solo evalúa si es menor de 18\n        if (edad < 18) {\n            System.out.println(\"Eres menor de edad\");\n        }\n        // Si edad >= 18, no muestra nada\n    }\n}\n```\n\nEjecución:\n```\nIngresa tu edad:\n16\nEres menor de edad\n\nIngresa tu edad:\n19\n(no muestra nada)\n```\n\nif-else (dos alternativas):\n```java\nif (edad < 18) {\n    System.out.println(\"Eres menor de edad\");\n} else {\n    System.out.println(\"Eres adulto\");\n}\n```\n\nEjecución:\n```\nIngresa tu edad:\n12\nEres menor de edad\n\nIngresa tu edad:\n40\nEres adulto\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**if**: Palabra clave para crear una condición (significa \"si\").",
                    "**else**: Palabra clave para la alternativa (significa \"sino\" o \"de lo contrario\").",
                    "**Condición**: Expresión entre paréntesis que se evalúa como true o false.",
                    "**{ }**: Llaves que encierran el código a ejecutar.",
                    "**Bloque de código**: Conjunto de instrucciones entre llaves.",
                    "**Evaluación**: Proceso de verificar si una condición es verdadera o falsa.",
                    "**Alternativa**: Opción diferente de ejecución según el resultado de la condición.",
                    "**Scanner**: Para recibir datos del usuario y evaluar condiciones con valores reales."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "La estructura if permite que un programa tome decisiones ejecutando código solo cuando una condición es verdadera. Al agregar else, se ofrece una alternativa para cuando la condición es falsa. Esto hace que los programas sean dinámicos y respondan de forma diferente según los datos que reciben."
            }
        ]
    },
    26: {
        titulo: "ESTRUCTURA CONDICIONAL IF - ELSE IF",
        seccion: 8,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a evaluar múltiples condiciones usando else if, permitiendo crear programas que manejen más de dos alternativas. Se entiende cómo las condiciones se evalúan de forma secuencial y cómo estructurar decisiones en cascada."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**else if**: Permite agregar condiciones adicionales entre el if inicial y el else final.",
                    "**Condiciones anidadas**: Varias condiciones que se evalúan una tras otra.",
                    "**Evaluación secuencial**: Las condiciones se revisan en orden de arriba hacia abajo.",
                    "**Primera condición que se cumple**: Una vez que una condición es verdadera, se ejecuta su código y se ignoran las demás.",
                    "**else final**: Opcional, se ejecuta solo si ninguna de las condiciones anteriores fue verdadera.",
                    "**Múltiples alternativas**: Permite clasificar datos en más de dos categorías."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Clasificar por edad en tres categorías:\n\n```java\nimport java.util.Scanner;\n\npublic class EstructuraCondicional {\n    public static void main(String[] args) {\n        Scanner entrada = new Scanner(System.in);\n        int edad;\n        \n        System.out.println(\"Ingresa tu edad:\");\n        edad = entrada.nextInt();\n        \n        // Evaluar múltiples condiciones\n        if (edad < 15) {\n            System.out.println(\"Eres un niño\");\n        } else if (edad < 17) {\n            System.out.println(\"Eres un joven\");\n        } else {\n            System.out.println(\"Eres un adulto\");\n        }\n    }\n}\n```\n\nEjecución con diferentes edades:\n```\nIngresa tu edad:\n3\nEres un niño\n\nIngresa tu edad:\n15\nEres un joven\n\nIngresa tu edad:\n45\nEres un adulto\n```\n\nExplicación del flujo:\n1. Si edad < 15 (ejemplo: 3) → imprime \"Eres un niño\" y termina\n2. Si no, evalúa edad < 17 (ejemplo: 15) → imprime \"Eres un joven\" y termina\n3. Si no, ejecuta el else → imprime \"Eres un adulto\""
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**else if**: Palabra clave para agregar condiciones adicionales.",
                    "**Evaluación secuencial**: Las condiciones se revisan en orden, de arriba hacia abajo.",
                    "**Condiciones anidadas**: Serie de condiciones conectadas que se evalúan una tras otra.",
                    "**Primera coincidencia**: Solo se ejecuta el código de la primera condición verdadera.",
                    "**else opcional**: No es obligatorio tener un else al final.",
                    "**Múltiples else if**: Se pueden tener tantos else if como sean necesarios.",
                    "**Flujo de control**: El programa \"salta\" al código correspondiente según la condición que se cumpla."
                ]
            }
        ]
    },
    27: {
        titulo: "ESTRUCTURA CONDICIONAL SWITCH",
        seccion: 9,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a usar la estructura switch, una alternativa más ordenada y legible que múltiples if-else when cuando se necesita comparar una variable con varios valores específicos. Se practica con un ejemplo que convierte números de días (1-7) en nombres de días de la semana."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Switch**: Estructura condicional por selección que evalúa una variable contra múltiples casos.",
                    "**Ventaja sobre if-else**: Más clara y ordenada cuando se compara una variable con muchos valores específicos.",
                    "**case**: Cada caso representa un valor posible que puede tener la variable.",
                    "**break**: Palabra clave que termina un caso y sale del switch.",
                    "**default**: Caso opcional que se ejecuta si ningún case coincide (similar al else).",
                    "**Sintaxis básica**:\n  ```\n  switch (variable) {\n      case valor1:\n          // código\n          break;\n      case valor2:\n          // código\n          break;\n      default:\n          // código si no coincide ningún case\n  }\n  ```\n\n- **Dos puntos (:)**: Separan el valor del case del código a ejecutar.",
                    "**Evaluación por igualdad**: Switch solo compara si la variable es igual a cada valor, no puede usar <, >, etc."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Convertir número de día a nombre del día:\n\n```java\nimport java.util.Scanner;\n\npublic class TrabajandoConSwitch {\n    public static void main(String[] args) {\n        Scanner entrada = new Scanner(System.in);\n        int nDia = 0;\n        String resultado = \"\";\n        \n        System.out.println(\"Ingresa el número de día de la semana:\");\n        nDia = entrada.nextInt();\n        \n        switch (nDia) {\n            case 1:\n                resultado = \"Lunes\";\n                break;\n            case 2:\n                resultado = \"Martes\";\n                break;\n            case 3:\n                resultado = \"Miércoles\";\n                break;\n            case 4:\n                resultado = \"Jueves\";\n                break;\n            case 5:\n                resultado = \"Viernes\";\n                break;\n            case 6:\n                resultado = \"Sábado\";\n                break;\n            case 7:\n                resultado = \"Domingo\";\n                break;\n            default:\n                resultado = \"Número de día ingresado no válido\";\n        }\n        \n        System.out.println(resultado);\n    }\n}\n```\n\nEjecución:\n```\nIngresa el número de día de la semana:\n6\nSábado\n\nIngresa el número de día de la semana:\n8\nNúmero de día ingresado no válido\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**switch**: Palabra clave que inicia la estructura condicional por selección.",
                    "**case**: Define cada posible valor que se quiere evaluar.",
                    "**break**: Termina un case y sale del switch. Es MUY IMPORTANTE ponerlo.",
                    "**default**: Caso que se ejecuta cuando ningún case coincide (opcional).",
                    "**:**: Dos puntos después del valor de cada case.",
                    "**Variable a evaluar**: Se coloca entre paréntesis después de switch.",
                    "**Sin break**: Si se olvida el break, el código continuará ejecutando los siguientes cases (efecto cascada).",
                    "**Comparación por igualdad**: Switch solo verifica si la variable es exactamente igual al valor del case."
                ]
            }
        ]
    },
    28: {
        titulo: "ESTRUCTURA CÍCLICA WHILE",
        seccion: 10,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a crear bucles (ciclos repetitivos) usando while, que ejecuta código múltiples veces mientras una condición sea verdadera. Se practica creando un programa que muestra la tabla de multiplicar de cualquier número ingresado por el usuario."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Estructura cíclica o bucle**: Permite ejecutar código repetidamente mientras se cumpla una condición.",
                    "**while (mientras)**: Ejecuta el código dentro de sus llaves mientras la condición sea verdadera.",
                    "**Condición primero**: while evalúa la condición ANTES de ejecutar el código. Si es falsa desde el inicio, el código nunca se ejecuta.",
                    "**Variable de control**: Se necesita una variable que cambie en cada repetición para evitar bucles infinitos.",
                    "**Incremento**: Es importante aumentar la variable de control para que eventualmente la condición sea falsa y el bucle termine.",
                    "**Sintaxis**:\n  ```\n  while (condición) {\n      // código que se repite\n  }\n  ```\n\n- **Uso práctico**: Ideal cuando no se sabe exactamente cuántas veces se repetirá el código, solo que debe continuar mientras algo sea verdadero."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Tabla de multiplicar usando while:\n\n```java\nimport java.util.Scanner;\n\npublic class EstructuraCiclicaWhile {\n    public static void main(String[] args) {\n        Scanner entrada = new Scanner(System.in);\n        int numeroTabla = 0;\n        int secuencia = 0;\n        \n        System.out.println(\"Indicar número de tabla de multiplicar:\");\n        numeroTabla = entrada.nextInt();\n        \n        // Bucle while para imprimir la tabla\n        while (secuencia <= 12) {\n            System.out.println(numeroTabla + \" x \" + secuencia + \" = \" + \n                             (numeroTabla * secuencia));\n            secuencia++;  // Incrementar para que eventualmente termine\n        }\n    }\n}\n```\n\nEjecución:\n```\nIndicar número de tabla de multiplicar:\n5\n5 x 0 = 0\n5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n...\n5 x 12 = 60\n```\n\nExplicación del flujo:\n1. secuencia inicia en 0\n2. Evalúa: ¿0 <= 12? Sí → ejecuta el código, imprime, incrementa secuencia a 1\n3. Evalúa: ¿1 <= 12? Sí → ejecuta, incrementa a 2\n4. Continúa hasta que secuencia sea 13\n5. Evalúa: ¿13 <= 12? No → termina el bucle"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**while**: Palabra clave para crear un bucle condicional.",
                    "**Condición**: Expresión entre paréntesis que se evalúa como true o false.",
                    "**Bucle o ciclo**: Repetición de código múltiples veces.",
                    "**Variable de control**: Variable que cambia en cada repetición (secuencia en el ejemplo).",
                    "**Incremento (++)**: Aumenta la variable en 1 para controlar cuándo termina el bucle.",
                    "**Bucle infinito**: Error que ocurre si la condición nunca es falsa (olvidar incrementar).",
                    "**Evaluación previa**: La condición se evalúa ANTES de ejecutar el código cada vez."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "while crea bucles que repiten código mientras una condición sea verdadera. La condición se evalúa antes de cada ejecución, y es crucial tener una variable de control que se incremente para evitar bucles infinitos. Es útil cuando el número de repeticiones depende de una condición dinámica."
            }
        ]
    },
    29: {
        titulo: "ESTRUCTURA CÍCLICA DO WHILE",
        seccion: 10,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende la estructura do-while, que es similar a while pero con una diferencia clave: el código se ejecuta AL MENOS UNA VEZ antes de evaluar la condición. Se comprende cuándo es útil usar do-while en lugar de while."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**do-while**: Ejecuta el código primero y luego evalúa la condición.",
                    "**Diferencia con while**: - while: evalúa condición → ejecuta código\n  - do-while: ejecuta código → evalúa condición",
                    "**Garantía de ejecución**: El código dentro del do-while se ejecuta SÍ O SÍ al menos una vez, incluso si la condición es falsa desde el inicio.",
                    "**Sintaxis**:\n  ```\n  do {\n      // código que se ejecuta\n  } while (condición);\n  ```\n\n- **Punto y coma final**: Importante poner ; después del paréntesis de la condición.",
                    "**Uso práctico**: Útil cuando necesitas ejecutar código al menos una vez, como mostrar un menú o validar entrada."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Comparación entre while y do-while:\n\n```java\npublic class EstructuraCiclicaDoWhile {\n    public static void main(String[] args) {\n        int edad = 30;\n        \n        // Con do-while\n        do {\n            System.out.println(\"Hola\");\n        } while (edad < 30);\n        \n        // Salida: Imprime \"Hola\" una vez\n        // Aunque edad NO es menor que 30, se ejecuta una vez\n    }\n}\n```\n\nSi fuera con while:\n```java\nint edad = 30;\n\n// Con while\nwhile (edad < 30) {\n    System.out.println(\"Hola\");\n}\n\n// Salida: No imprime nada\n// Como edad NO es menor que 30, nunca ejecuta\n```\n\nDiferencia clave:\n- **do-while**: Ejecuta primero, pregunta después → \"Hola\" se imprime 1 vez\n- **while**: Pregunta primero, ejecuta después → \"Hola\" NO se imprime"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**do**: Palabra clave que inicia el bloque de código a ejecutar.",
                    "**while**: Palabra clave que evalúa la condición al final.",
                    "**Ejecución garantizada**: El código se ejecuta al menos una vez, siempre.",
                    "**Evaluación posterior**: La condición se verifica DESPUÉS de ejecutar el código.",
                    "**;**: Punto y coma obligatorio después de while(condición).",
                    "**Primera ejecución**: Ocurre antes de cualquier evaluación de la condición."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "do-while ejecuta el código primero y luego evalúa la condición, garantizando que el código se ejecute al menos una vez. Es útil cuando necesitas que una acción ocurra siempre antes de decidir si continuar, como mostrar un menú inicial o pedir datos que deben ingresarse al menos una vez."
            }
        ]
    },
    30: {
        titulo: "ESTRUCTURA CÍCLICA FOR",
        seccion: 10,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende la estructura for, el bucle más compacto y organizado cuando se conoce exactamente cuántas veces debe repetirse el código. Se practica creando una tabla de multiplicar con una sintaxis más simple que while."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**for**: Estructura cíclica más compacta, ideal cuando se sabe cuántas repeticiones se necesitan.",
                    "**Tres partes en una línea**:\n  1. **Inicialización**: Crea y asigna valor inicial a la variable de control\n  2. **Condición**: Define hasta cuándo se ejecuta el bucle\n  3. **Incremento**: Define cómo cambia la variable en cada repetición",
                    "**Sintaxis**:\n  ```\n  for (inicialización; condición; incremento) {\n      // código que se repite\n  }\n  ```\n\n- **Variable de control local**: La variable creada en el for solo existe dentro del bucle.",
                    "**Todo en una línea**: Toda la lógica del bucle está en el paréntesis, haciendo el código más limpio.",
                    "**Atajo en NetBeans**: Escribir \"for\" y presionar Tab crea automáticamente la estructura."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Tabla de multiplicar con for:\n\n```java\nimport java.util.Scanner;\n\npublic class EstructuraCiclicaFor {\n    public static void main(String[] args) {\n        Scanner entrada = new Scanner(System.in);\n        int nTabla = 0;\n        \n        System.out.println(\"Ingresa el número de tabla de multiplicar:\");\n        nTabla = entrada.nextInt();\n        \n        // Bucle for desde 0 hasta 12\n        for (int numero = 0; numero <= 12; numero++) {\n            System.out.println(nTabla + \" x \" + numero + \" = \" + \n                             (nTabla * numero));\n        }\n    }\n}\n```\n\nEjecución:\n```\nIngresa el número de tabla de multiplicar:\n7\n7 x 0 = 0\n7 x 1 = 7\n7 x 2 = 14\n...\n7 x 12 = 84\n```\n\nExplicación de las tres partes:\n```java\nfor (int numero = 0;    // 1. Inicialización: numero comienza en 0\n     numero <= 12;       // 2. Condición: continuar mientras numero <= 12\n     numero++)           // 3. Incremento: aumentar numero en 1 cada vez\n```\n\nComparación con while:\n```java\n// Con while (más código)\nint numero = 0;              // Inicialización separada\nwhile (numero <= 12) {       // Solo la condición\n    // código\n    numero++;                // Incremento al final\n}\n\n// Con for (más compacto)\nfor (int numero = 0; numero <= 12; numero++) {\n    // código\n}\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**for**: Palabra clave para crear bucles contados.",
                    "**Inicialización**: Primera parte, crea la variable (ej: `int numero = 0`).",
                    "**Condición**: Segunda parte, define cuándo continuar (ej: `numero <= 12`).",
                    "**Incremento**: Tercera parte, cómo cambia la variable (ej: `numero++`).",
                    "**;**: Punto y coma separa las tres partes dentro del paréntesis.",
                    "**Variable local**: La variable creada en el for solo existe dentro del bucle.",
                    "**for + Tab**: Atajo en NetBeans para crear la estructura automáticamente.",
                    "**Bucle contado**: Cuando se sabe exactamente cuántas veces repetir."
                ]
            }
        ]
    },
    31: {
        titulo: "VECTORES",
        seccion: 11,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué son los vectores (también llamados arreglos o arrays), cómo crearlos y cómo almacenar múltiples valores del mismo tipo en una sola estructura. Se practica accediendo a cada posición del vector y recorriéndolo con un bucle for."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Vector o arreglo**: Estructura que almacena múltiples valores del mismo tipo de dato.",
                    "**Diferencia con variables**: Una variable guarda un solo valor; un vector guarda múltiples valores relacionados.",
                    "**Índices**: Las posiciones del vector comienzan desde 0 (no desde 1).",
                    "**Mismo tipo de dato**: Todos los elementos del vector deben ser del mismo tipo (todos String, todos int, etc.).",
                    "**Tamaño fijo**: Al crear el vector se define cuántos elementos tendrá.",
                    "**Sintaxis de declaración**:\n  ```\n  TipoDato[] nombreVector = new TipoDato[tamaño];\n  ```\n\n- **Acceso por posición**: Se usa el índice entre corchetes: `nombreVector[0]`, `nombreVector[1]`, etc.",
                    "**Recorrido con for**: Ideal para acceder a todos los elementos del vector secuencialmente."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Crear y usar un vector de nombres:\n\n```java\npublic class Vectores {\n    public static void main(String[] args) {\n        // Crear vector de 3 elementos tipo String\n        String[] nombres = new String[3];\n        \n        // Asignar valores a cada posición\n        nombres[0] = \"Víctor\";\n        nombres[1] = \"Carlos\";\n        nombres[2] = \"Juan\";\n        \n        // Recorrer e imprimir todos los elementos\n        for (int i = 0; i <= 2; i++) {\n            System.out.println(nombres[i]);\n        }\n    }\n}\n```\n\nSalida:\n```\nVíctor\nCarlos\nJuan\n```\n\nRepresentación gráfica del vector:\n```\nnombres:\n┌─────────┬─────────┬─────────┐\n│ Víctor  │ Carlos  │  Juan   │\n└─────────┴─────────┴─────────┘\nPosición:  0         1         2\n```\n\nAcceso a elementos:\n- `nombres[0]` → \"Víctor\"\n- `nombres[1]` → \"Carlos\"\n- `nombres[2]` → \"Juan\""
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**[]**: Corchetes que indican que es un vector.",
                    "**new**: Palabra clave para crear el vector en memoria.",
                    "**Índice o posición**: Número entre corchetes que indica qué elemento acceder.",
                    "**Posición 0**: El primer elemento está en la posición 0, no en la 1.",
                    "**Tamaño**: Cantidad de elementos que puede almacenar el vector.",
                    "**TipoDato[]**: Declaración de un vector de ese tipo.",
                    "**nombreVector[i]**: Forma de acceder a la posición i del vector.",
                    "**Límite**: Si el vector tiene 3 elementos, las posiciones son 0, 1 y 2."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los vectores permiten almacenar múltiples valores del mismo tipo en una sola estructura. Las posiciones comienzan desde 0 y se accede a cada elemento usando corchetes con el índice. Son útiles para manejar colecciones de datos relacionados y se recorren fácilmente con bucles for."
            }
        ]
    },
    32: {
        titulo: "VECTORES - PARTE 2",
        seccion: 11,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se practica con vectores de forma dinámica, creando un programa que solicita al usuario cuántas notas ingresará, crea un vector de ese tamaño, pide cada nota y finalmente las muestra. Se combina Scanner, vectores y bucles for."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Tamaño dinámico**: El tamaño del vector puede definirse según input del usuario.",
                    "**Entrada de datos para vectores**: Se usa Scanner dentro de un bucle para llenar el vector.",
                    "**Bucle for para llenar**: Se recorre el vector pidiendo un valor para cada posición.",
                    "**Bucle for para mostrar**: Se recorre nuevamente para imprimir todos los valores.",
                    "**Variable de usuario**: El usuario decide cuántos elementos tendrá el vector.",
                    "**Índice i como contador**: La variable i del for sirve como índice del vector."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Programa de notas con tamaño dinámico:\n\n```java\nimport java.util.Scanner;\n\npublic class Vectores2 {\n    public static void main(String[] args) {\n        Scanner entrada = new Scanner(System.in);\n        int nCantidadNotas = 0;\n        \n        // Pedir cantidad de notas\n        System.out.println(\"Cantidad de calificaciones:\");\n        nCantidadNotas = entrada.nextInt();\n        \n        // Crear vector del tamaño indicado\n        double[] notas = new double[nCantidadNotas];\n        \n        // Llenar el vector con notas\n        for (int i = 0; i < nCantidadNotas; i++) {\n            System.out.print(\"Ingresa la nota para la posición \" + i + \": \");\n            notas[i] = entrada.nextDouble();\n        }\n        \n        // Mostrar todas las notas\n        System.out.println(\"\\nNotas ingresadas:\");\n        for (int i = 0; i < nCantidadNotas; i++) {\n            System.out.println(\"Nota \" + i + \": \" + notas[i]);\n        }\n    }\n}\n```\n\nEjecución:\n```\nCantidad de calificaciones:\n3\nIngresa la nota para la posición 0: 15.5\nIngresa la nota para la posición 1: 18.0\nIngresa la nota para la posición 2: 16.5\n\nNotas ingresadas:\nNota 0: 15.5\nNota 1: 18.0\nNota 2: 16.5\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Tamaño variable**: El tamaño del vector se define con una variable, no un número fijo.",
                    "**i < nCantidadNotas**: Condición del for que usa la cantidad ingresada por el usuario.",
                    "**notas[i]**: Acceso a cada posición usando la variable i del for.",
                    "**entrada.nextDouble()**: Para capturar números decimales.",
                    "**Dos bucles**: Uno para llenar el vector, otro para mostrarlo.",
                    "**print vs println**: print no hace salto de línea, útil para pedir entrada en la misma línea.",
                    "**Concatenación en for**: Usar i para mostrar números de posición al usuario."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los vectores pueden crearse con tamaño dinámico usando una variable. Se combinan Scanner y bucles for para pedir datos al usuario y llenar el vector posición por posición. Luego se puede recorrer nuevamente para mostrar todos los valores almacenados."
            }
        ]
    },
    33: {
        titulo: "MATRICES",
        seccion: 11,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué son las matrices (arreglos bidimensionales), cómo se organizan en filas y columnas, y cómo acceder a cada posición usando coordenadas. Las matrices permiten almacenar mucha más información que los vectores simples."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Matriz**: Estructura bidimensional que organiza datos en filas y columnas.",
                    "**Mayor capacidad**: Puede almacenar mucho más contenido que un vector simple.",
                    "**Coordenadas**: Se accede a cada posición con dos índices: [fila][columna].",
                    "**Filas**: Líneas horizontales de la matriz.",
                    "**Columnas**: Líneas verticales de la matriz.",
                    "**Ambos índices desde 0**: Tanto filas como columnas comienzan en posición 0.",
                    "**Sintaxis**:\n  ```\n  TipoDato[][] nombreMatriz = new TipoDato[filas][columnas];\n  ```\n\n- **Acceso**: `nombreMatriz[fila][columna]`"
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Representación gráfica de una matriz:\n\n```\nmatriz[4][4]:\n\n       Col0    Col1    Col2    Col3\n     ┌───────┬───────┬───────┬───────┐\nFila0│ [0,0] │ [0,1] │ [0,2] │ [0,3] │\n     ├───────┼───────┼───────┼───────┤\nFila1│ [1,0] │ [1,1] │ [1,2] │ [1,3] │\n     ├───────┼───────┼───────┼───────┤\nFila2│ [2,0] │ [2,1] │ [2,2] │ [2,3] │\n     ├───────┼───────┼───────┼───────┤\nFila3│ [3,0] │ [3,1] │ [3,2] │ [3,3] │\n     └───────┴───────┴───────┴───────┘\n```\n\nCódigo de ejemplo:\n\n```java\npublic class Matrices {\n    public static void main(String[] args) {\n        // Crear matriz de 3 filas x 3 columnas\n        int[][] numeros = new int[3][3];\n        \n        // Asignar valores\n        numeros[0][0] = 5;    // Fila 0, Columna 0\n        numeros[0][1] = 10;   // Fila 0, Columna 1\n        numeros[1][0] = 15;   // Fila 1, Columna 0\n        numeros[2][2] = 20;   // Fila 2, Columna 2\n        \n        // Mostrar un valor específico\n        System.out.println(numeros[0][0]);  // Imprime: 5\n        System.out.println(numeros[2][2]);  // Imprime: 20\n    }\n}\n```\n\nCoordenadas explicadas:\n- `[0][0]` = Fila 0, Columna 0 (esquina superior izquierda)\n- `[0][1]` = Fila 0, Columna 1\n- `[1][0]` = Fila 1, Columna 0\n- `[2][2]` = Fila 2, Columna 2"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**[][]**: Doble corchete indica matriz bidimensional.",
                    "**Fila**: Primer índice entre corchetes.",
                    "**Columna**: Segundo índice entre corchetes.",
                    "**[fila][columna]**: Orden para acceder a posiciones.",
                    "**Coordenadas**: Par de números que ubican una posición exacta.",
                    "**Bidimensional**: Tiene dos dimensiones (filas y columnas).",
                    "**new TipoDato[filas][columnas]**: Crear matriz especificando ambas dimensiones.",
                    "**Mayor almacenamiento**: Puede guardar muchos más datos que un vector simple."
                ]
            }
        ]
    },
    34: {
        titulo: "MÉTODOS - PARTE 1",
        seccion: 12,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué son los métodos, bloques de código reutilizables que realizan tareas específicas. Se crea el primer método simple sin parámetros ni retorno, solo para ejecutar una tarea (imprimir mensajes)."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Método**: Bloque de código que realiza una tarea específica y puede ser llamado múltiples veces.",
                    "**Pertenece a una clase**: Los métodos siempre se crean dentro de una clase.",
                    "**main es un método**: El método principal que hemos usado todo el curso es un ejemplo de método.",
                    "**Método simple**: Puede ejecutar tareas sin necesidad de recibir datos ni devolver valores.",
                    "**static void**: Palabras clave para crear un método que no devuelve valores.",
                    "**Llamar un método**: Se invoca escribiendo su nombre seguido de paréntesis ().",
                    "**Sintaxis básica**:\n  ```\n  static void nombreMetodo() {\n      // código a ejecutar\n  }\n  ```\n\n- **Reutilización**: Un método puede ser llamado tantas veces como se necesite."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Crear y usar un método simple:\n\n```java\npublic class EjemplosMetodos {\n    \n    // Método principal\n    public static void main(String[] args) {\n        mensaje();  // Llamar al método\n    }\n    \n    // Método personalizado\n    static void mensaje() {\n        System.out.println(\"Hola mundo\");\n        System.out.println(\"Mi nombre es Víctor\");\n    }\n}\n```\n\nSalida:\n```\nHola mundo\nMi nombre es Víctor\n```\n\nExplicación:\n1. Se crea el método `mensaje()` que imprime dos líneas\n2. Desde `main()` se llama a `mensaje()`\n3. El código dentro de `mensaje()` se ejecuta\n4. Se pueden agregar más tareas dentro del método"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**static**: Palabra clave que permite llamar al método sin crear objetos.",
                    "**void**: Indica que el método NO devuelve ningún valor.",
                    "**nombreMetodo()**: Nombre del método seguido de paréntesis.",
                    "**Llamada de método**: `nombreMetodo();` ejecuta el código del método.",
                    "**Bloque de código**: El contenido entre llaves { } del método.",
                    "**main()**: Método principal desde donde se ejecuta el programa.",
                    "**Reutilización**: Los métodos evitan repetir el mismo código."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los métodos son bloques de código reutilizables que realizan tareas específicas. Se crean con `static void nombreMetodo()` y se llaman escribiendo `nombreMetodo();`. Permiten organizar el código y ejecutar la misma tarea múltiples veces sin repetir código."
            }
        ]
    },
    35: {
        titulo: "MÉTODOS - PARTE 2",
        seccion: 12,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a crear métodos que reciben información (parámetros) para trabajar con ella. Los parámetros hacen que los métodos sean más flexibles y puedan adaptarse a diferentes datos sin modificar su código interno."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Parámetros**: Variables que el método recibe para trabajar con ellas.",
                    "**Información de entrada**: Los datos que se envían al método cuando se llama.",
                    "**Tipo de dato del parámetro**: Se debe especificar qué tipo de dato recibirá (String, int, etc.).",
                    "**Múltiples parámetros**: Un método puede recibir varios parámetros separados por comas.",
                    "**Flexibilidad**: Los parámetros permiten usar el método con diferentes valores sin cambiar su código.",
                    "**Sintaxis con parámetros**:\n  ```\n  static void nombreMetodo(TipoDato parametro) {\n      // usar el parámetro\n  }\n  ```\n\n- **Llamada con argumentos**: Al llamar al método, se envían los valores entre paréntesis."
                ]
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Parámetro**: Variable que recibe el método para trabajar.",
                    "**Argumento**: Valor que se envía al método al llamarlo.",
                    "**TipoDato**: Tipo del parámetro (String, int, double, etc.).",
                    "**Nombre del parámetro**: Identificador de la variable dentro del método.",
                    "**Coma (,)**: Separa múltiples parámetros.",
                    "**Llamada**: `nombreMetodo(valor1, valor2);`",
                    "**Flexibilidad**: Cambiar valores sin modificar el código del método."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los parámetros permiten que los métodos reciban información para trabajar. Se declaran especificando tipo y nombre dentro de los paréntesis. Al llamar al método, se envían los valores que se necesitan. Esto hace que los métodos sean flexibles y reutilizables con diferentes datos."
            }
        ]
    },
    36: {
        titulo: "MÉTODOS - PARTE 3",
        seccion: 12,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a crear métodos que devuelven un valor (con return), permitiendo que el método calcule algo y entregue el resultado. Se cambia void por el tipo de dato que se va a retornar."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**return**: Palabra clave que devuelve un valor desde el método.",
                    "**Tipo de retorno**: Se especifica qué tipo de dato devolverá (int, String, double, etc.).",
                    "**No más void**: Cuando un método retorna, se cambia void por el tipo de dato.",
                    "**Cálculos y operaciones**: Útil para métodos que realizan operaciones y devuelven resultados.",
                    "**Uso del resultado**: El valor retornado puede imprimirse, guardarse en una variable o usarse en operaciones.",
                    "**Sintaxis con retorno**:\n  ```\n  static TipoDato nombreMetodo(parametros) {\n      return valor;\n  }\n  ```\n\n- **Parámetros + retorno**: Un método puede recibir datos Y devolver un resultado."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Método que retorna un valor:\n\n```java\npublic class EjemplosMetodos {\n    \n    public static void main(String[] args) {\n        // Imprimir directamente el resultado\n        System.out.println(\"La suma de 2 + 4 es igual a \" + sumar(2, 4));\n    }\n    \n    static int sumar(int valor1, int valor2) {\n        return valor1 + valor2;\n    }\n}\n```\n\nSalida:\n```\nLa suma de 2 + 4 es igual a 6\n```\n\nGuardando el resultado en una variable:\n\n```java\npublic static void main(String[] args) {\n    int resultado = sumar(5, 3);\n    System.out.println(\"El resultado es: \" + resultado);\n}\n\nstatic int sumar(int valor1, int valor2) {\n    return valor1 + valor2;\n}\n```\n\nComparación void vs return:\n\n```java\n// Sin retorno (void) - solo imprime\nstatic void mostrarSuma(int a, int b) {\n    System.out.println(a + b);\n}\n\n// Con retorno (int) - devuelve el valor\nstatic int calcularSuma(int a, int b) {\n    return a + b;\n}\n\n// Uso:\nmostrarSuma(2, 3);           // Solo imprime: 5\nint total = calcularSuma(2, 3); // Guarda el resultado: 5\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**return**: Devuelve un valor y termina la ejecución del método.",
                    "**Tipo de retorno**: int, double, String, boolean, etc. (reemplaza a void).",
                    "**void**: Usado cuando el método NO retorna nada.",
                    "**Valor de retorno**: El dato que el método envía de vuelta.",
                    "**Operaciones**: Se pueden hacer cálculos directamente en el return.",
                    "**Asignación**: El valor retornado puede guardarse en una variable.",
                    "**Impresión directa**: Se puede imprimir el resultado del método directamente."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los métodos con return devuelven un valor calculado. Se especifica el tipo de retorno (int, String, etc.) en lugar de void. La palabra return envía el resultado de vuelta. Esto permite usar el método para obtener valores calculados y usarlos en el programa."
            }
        ]
    },
    37: {
        titulo: "CLASES - PARTE 1",
        seccion: 12,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende qué son las clases, plantillas para crear objetos con atributos (propiedades). Se introduce la programación orientada a objetos creando una clase Persona con características como nombre, edad y teléfono."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Clase**: Plantilla o molde para crear objetos con características y comportamientos.",
                    "**Programación Orientada a Objetos (POO)**: Paradigma que organiza código en objetos basados en clases.",
                    "**Atributos**: Variables que pertenecen a la clase (nombre, edad, teléfono, etc.).",
                    "**Instanciar**: Crear un objeto a partir de una clase (hacer una copia de la plantilla).",
                    "**new**: Palabra clave para crear un nuevo objeto de una clase.",
                    "**Punto (.)**: Operador para acceder a los atributos del objeto.",
                    "**Múltiples objetos**: Se pueden crear varios objetos de la misma clase."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Crear una clase y usarla:\n\n```java\npublic class EjemplosClases {\n    \n    public static void main(String[] args) {\n        // Instanciar (crear objeto de la clase Persona)\n        Persona persona1 = new Persona();\n        \n        // Asignar valores a los atributos\n        persona1.nombre = \"Víctor\";\n        persona1.edad = 40;\n        persona1.telefono = \"123456789\";\n        \n        // Crear segundo objeto\n        Persona persona2 = new Persona();\n        persona2.nombre = \"Carlos\";\n        persona2.edad = 25;\n        persona2.telefono = \"987654321\";\n        \n        // Imprimir valores\n        System.out.println(persona1.nombre);  // Víctor\n        System.out.println(persona2.nombre);  // Carlos\n    }\n}\n\n// Definición de la clase Persona\nclass Persona {\n    // Atributos\n    String nombre;\n    int edad;\n    String telefono;\n}\n```\n\nRepresentación gráfica:\n\n```\nClase Persona (plantilla):\n┌─────────────────┐\n│ nombre: String  │\n│ edad: int       │\n│ telefono: String│\n└─────────────────┘\n\npersona1 (objeto):        persona2 (objeto):\n┌─────────────────┐      ┌─────────────────┐\n│ nombre: \"Víctor\"│      │ nombre: \"Carlos\"│\n│ edad: 40        │      │ edad: 25        │\n│ telefono: \"123\" │      │ telefono: \"987\" │\n└─────────────────┘      └─────────────────┘\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**class**: Palabra clave para definir una clase.",
                    "**Atributos**: Variables dentro de la clase que definen características.",
                    "**new**: Crea un nuevo objeto de la clase.",
                    "**Instanciar**: Acción de crear un objeto a partir de una clase.",
                    "**Objeto**: Instancia específica de una clase con valores propios.",
                    "**.**: Operador punto para acceder a atributos (objeto.atributo).",
                    "**Plantilla**: La clase es un molde, los objetos son copias con datos específicos."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Las clases son plantillas que definen la estructura de objetos con atributos (propiedades). Se crean objetos usando `new NombreClase()` y se accede a sus atributos con el operador punto. Cada objeto tiene sus propios valores aunque compartan la misma estructura de la clase."
            }
        ]
    },
    38: {
        titulo: "CLASES - PARTE 2",
        seccion: 12,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección se aprende a combinar métodos con clases, creando métodos dentro de una clase y llamándolos desde otra clase. Se entiende cómo una clase puede tener tanto atributos como métodos."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**Métodos en clases**: Una clase puede contener tanto atributos como métodos.",
                    "**Acceso entre clases**: Un método de una clase puede ser llamado desde otra clase.",
                    "**NombreClase.metodo()**: Sintaxis para llamar a un método de otra clase.",
                    "**Organización**: Las clases agrupan datos (atributos) y funciones (métodos) relacionados.",
                    "**static en métodos**: Permite llamar al método sin crear un objeto."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "Clase con atributos y método:\n\n```java\npublic class EjemplosClases {\n    \n    public static void main(String[] args) {\n        // Crear objeto\n        Persona persona1 = new Persona();\n        persona1.nombre = \"Víctor\";\n        \n        // Llamar al método de la clase Persona\n        Persona.saludo(persona1.nombre);\n    }\n}\n\nclass Persona {\n    // Atributos\n    String nombre;\n    int edad;\n    String telefono;\n    \n    // Método\n    static void saludo(String sNombre) {\n        System.out.println(\"Hola, qué tal \" + sNombre);\n    }\n}\n```\n\nSalida:\n```\nHola, qué tal Víctor\n```\n\nLlamar método directamente desde la clase:\n\n```java\npublic static void main(String[] args) {\n    // Llamar método sin crear objeto (porque es static)\n    Persona.saludo(\"Víctor\");\n}\n```\n\nEstructura completa:\n\n```\nClase Persona:\n┌──────────────────────────┐\n│ ATRIBUTOS:               │\n│   - nombre: String       │\n│   - edad: int            │\n│   - telefono: String     │\n│                          │\n│ MÉTODOS:                 │\n│   - saludo(String)       │\n└──────────────────────────┘\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**Métodos en clases**: Funciones que pertenecen a una clase.",
                    "**NombreClase.metodo()**: Llamar a un método estático de otra clase.",
                    "**static**: Permite usar el método sin crear objetos.",
                    "**Organización**: Agrupar atributos y métodos relacionados en una clase.",
                    "**Acceso**: Usar el nombre de la clase seguido de punto para acceder a métodos.",
                    "**Reutilización**: Los métodos de una clase pueden usarse desde cualquier parte."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Las clases pueden contener tanto atributos como métodos. Los métodos static pueden llamarse usando `NombreClase.metodo()` sin necesidad de crear objetos. Esto permite organizar el código agrupando datos y funciones relacionadas en una misma clase."
            }
        ]
    },
    39: {
        titulo: "CLASES - PARTE 3 (FINAL DEL CURSO)",
        seccion: 12,
        bloques: [
            {
                tipo: "info",
                titulo: "¿Qué se aprende en esta lección?",
                contenido: "En esta lección final se aprende a usar clases de un archivo Java en otro archivo diferente mediante importación. Se completa el concepto de programación orientada a objetos trabajando con múltiples archivos organizados."
            },
            {
                tipo: "success",
                titulo: "Puntos Clave Explicados",
                items: [
                    "**import**: Palabra clave para usar clases de otros archivos.",
                    "**Archivos separados**: Las clases pueden estar en diferentes archivos .java.",
                    "**Organización**: Permite mantener el código organizado en múltiples archivos.",
                    "**Paquetes**: Carpetas que agrupan archivos Java relacionados.",
                    "**Reutilización entre archivos**: Una clase puede usarse en múltiples archivos.",
                    "**Sintaxis de importación**:\n  ```\n  import nombrePaquete.NombreArchivo;\n  ```\n\n- **Acceso completo**: Después de importar, se accede a clases, atributos y métodos."
                ]
            },
            {
                tipo: "process",
                titulo: "Ejemplo Práctico",
                contenido: "**Archivo: EjemplosClases.java**\n```java\npackage aprendizaje;\n\npublic class EjemplosClases {\n    // Este archivo solo contiene la clase\n}\n\nclass Persona {\n    // Atributos\n    String nombre;\n    int edad;\n    String telefono;\n    \n    // Método\n    static void saludo(String sNombre) {\n        System.out.println(\"Hola, qué tal \" + sNombre);\n    }\n}\n```\n\n**Archivo: Tarea.java** (importa y usa la clase Persona)\n```java\npackage aprendizaje;\n\nimport aprendizaje.EjemplosClases;  // Importar el archivo\n\npublic class Tarea {\n    \n    public static void main(String[] args) {\n        // Usar la clase Persona del otro archivo\n        Persona per1 = new Persona();\n        \n        // Asignar valores a los atributos\n        per1.nombre = \"Víctor\";\n        per1.edad = 40;\n        per1.telefono = \"942366999\";\n        \n        // Llamar al método de la clase Persona\n        Persona.saludo(\"Víctor\");\n    }\n}\n```\n\nSalida:\n```\nHola, qué tal Víctor\n```\n\nEstructura de archivos:\n\n```\nProyecto Java\n└── aprendizaje (paquete)\n    ├── EjemplosClases.java\n    │   └── class Persona\n    └── Tarea.java\n        └── main() - usa Persona\n```"
            },
            {
                tipo: "concept",
                titulo: "Conceptos y Elementos Clave",
                items: [
                    "**import**: Importa clases de otros archivos.",
                    "**package**: Define a qué paquete pertenece un archivo.",
                    "**nombrePaquete.NombreArchivo**: Ruta completa para importar.",
                    "**Organización**: Separar código en múltiples archivos.",
                    "**Reutilización**: Una clase puede usarse en muchos archivos diferentes.",
                    "**Punto y coma (;)**: Termina la sentencia import.",
                    "**Acceso después de import**: Se puede usar todo lo público del archivo importado."
                ]
            },
            {
                tipo: "warning",
                titulo: "Resumen Final",
                contenido: "Los archivos Java pueden importarse entre sí usando `import nombrePaquete.NombreArchivo;`. Esto permite organizar el código en múltiples archivos y reutilizar clases en diferentes partes del proyecto. Es la base de la programación orientada a objetos en Java para proyectos más grandes."
            }
        ]
    }
};