# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 2: PRIMEROS PASOS EN JAVA

---

## LECCIÓN 4: CLÁSICO HOLA MUNDO

### ¿Qué se aprende en esta lección?

En esta lección se crea el primer proyecto en Java y se ejecuta el programa tradicional "Hola Mundo". Se aprende a crear un proyecto desde cero, configurar la ubicación de los archivos y ejecutar el primer código Java.

### Puntos clave explicados

- **Crear un nuevo proyecto**: Se puede hacer desde el botón "New Project" o desde el menú File > New Project.

- **Seleccionar tipo de proyecto**: Se usa "Java with Ant" y luego "Java Application" para crear un proyecto básico.

- **Definir nombre y ubicación**: Es importante elegir dónde se guardarán los archivos del proyecto en la computadora.

- **Crear carpeta de trabajo**: Se recomienda crear una carpeta específica (ejemplo: "AprendizajeJava" en disco C) para organizar todos los proyectos.

- **Clase principal (Main Class)**: Al crear el proyecto se puede generar automáticamente una clase principal donde escribir código.

- **Extensión de archivos Java**: Todos los archivos de código tienen la extensión .java

- **Ejecutar el programa**: Se hace clic derecho sobre el archivo y se selecciona "Run File" para ver el resultado.

### Ejemplo sencillo

Código del primer "Hola Mundo":

```java
public class Aprendizaje {
    public static void main(String[] args) {
        System.out.println("Hola mundo");
    }
}
```

Pasos para ejecutar:
1. Crear el proyecto
2. Escribir el código dentro del método main
3. Guardar los cambios
4. Clic derecho en el archivo > Run File
5. Ver el resultado en la parte inferior (ventana de salida)

### Funciones, palabras clave o elementos importantes

- **New Project**: Opción para crear un nuevo proyecto en NetBeans.

- **Java with Ant**: Tecnología que se utiliza para crear proyectos Java básicos.

- **Java Application**: Tipo de proyecto para aplicaciones Java estándar.

- **Browse**: Botón para seleccionar manualmente la ubicación donde guardar el proyecto.

- **Main Class**: Clase principal del proyecto, punto de entrada del programa.

- **System.out.println()**: Comando para imprimir texto en pantalla.

- **public static void main**: Método principal donde comienza la ejecución del programa.

- **Run File**: Comando para ejecutar el archivo y ver el resultado.

- **.java**: Extensión de todos los archivos de código Java.

### Resumen final en pocas palabras

Crear el primer proyecto en Java es simple: se elige la ubicación, se define el nombre, y se escribe código dentro del método main. El clásico "Hola Mundo" es el punto de partida tradicional para aprender cualquier lenguaje de programación.

---

## LECCIÓN 5: DEFINIR COMENTARIOS

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué son los comentarios en Java y cómo usarlos. Los comentarios sirven para escribir notas en el código que no se ejecutan, ayudando a explicar qué hace cada parte del programa.

### Puntos clave explicados

- **Los comentarios no se ejecutan**: Son texto que el compilador ignora, solo sirven como referencia para el programador.

- **Comentario de una línea**: Se usa doble barra `//` para escribir un comentario en una sola línea.

- **Comentario de múltiples líneas**: Se usa `/*` para iniciar y `*/` para cerrar un bloque de comentarios que puede tener varias líneas.

- **Cambiar tamaño de letra en NetBeans**: Se puede ajustar desde Tools > Options > Fonts & Colors para mejorar la visualización del código.

- **Los comentarios ayudan a documentar**: Sirven para explicar el código, recordar qué hace cada parte, o dejar notas para el futuro.

### Ejemplo sencillo

Comentario de una línea:
```java
// Esto va a imprimir el Hola mundo
System.out.println("Hola mundo");
```

Comentario de múltiples líneas:
```java
/*
Esta es la primera línea de comentario
Segunda línea de comentario
Tercera línea de comentario
*/
System.out.println("Hola mundo");
```

### Funciones, palabras clave o elementos importantes

- **//**: Símbolo para comentario de una sola línea.

- **/\* ... \*/**: Símbolos para comentario de múltiples líneas (inicia con /* y termina con */).

- **Tools > Options**: Menú para configurar las preferencias de NetBeans.

- **Fonts & Colors**: Sección donde se cambia el tamaño y estilo de la letra del código.

- **Comentario**: Texto que no se ejecuta, solo sirve para explicar o documentar el código.

### Resumen final en pocas palabras

Los comentarios son fundamentales para documentar el código. Se usan `//` para una línea y `/* */` para varias líneas. El programa ignora los comentarios al ejecutarse, pero ayudan a entender mejor qué hace cada parte del código.

---

## LECCIÓN 6: IMPRIMIR EN PANTALLA

### ¿Qué se aprende en esta lección?

En esta lección se explica en detalle las diferentes formas de imprimir texto en pantalla usando Java. Se comprende la diferencia entre `print` y `println`, y cómo controlar dónde aparece el texto y el cursor.

### Puntos clave explicados

- **System.out**: Acceso a la librería System para realizar operaciones de salida (imprimir en pantalla).

- **print vs println**: La diferencia principal es el manejo del cursor después de imprimir.

- **print sin ln**: Imprime el texto pero mantiene el cursor en la misma línea.

- **println con ln**: Imprime el texto y mueve el cursor a la siguiente línea.

- **Estructura del código**: Se trabaja dentro del método `public static void main` que está dentro de una clase.

- **Librería System**: Es un conjunto de herramientas disponibles en Java para realizar diferentes operaciones.

### Ejemplo sencillo

Usando `print` (sin salto de línea):
```java
System.out.print("Mi curso es ");
System.out.print("Java");
```
Resultado: `Mi curso es Java` (todo en una línea)

Usando `println` (con salto de línea):
```java
System.out.println("Mi curso es");
System.out.println("Java");
```
Resultado:
```
Mi curso es
Java
```
(Cada texto en una línea diferente)

### Funciones, palabras clave o elementos importantes

- **System**: Librería que contiene recursos para operaciones del sistema.

- **out**: Recurso dentro de System que sirve para salida (output) de datos.

- **print**: Imprime texto en pantalla sin mover el cursor a la siguiente línea.

- **println**: Imprime texto en pantalla y mueve el cursor a la siguiente línea (ln = line, línea).

- **Cursor**: Posición donde aparecerá el siguiente texto que se imprima.

- **Salto de línea**: Acción de mover el cursor a la línea siguiente.

### Resumen final en pocas palabras

Para imprimir en Java se usa `System.out.print()` o `System.out.println()`. La diferencia está en el salto de línea: `print` mantiene el cursor en la misma línea, mientras que `println` lo envía a la siguiente línea después de imprimir.

---

## LECCIÓN 7: ELIMINAR PROYECTO

### ¿Qué se aprende en esta lección?

En esta lección se aprende cómo eliminar proyectos de Java en NetBeans. Es importante saber que la eliminación es permanente y borra todos los archivos del proyecto de la computadora.

### Puntos clave explicados

- **Eliminar es permanente**: Cuando se elimina un proyecto en NetBeans, se borra definitivamente, no va a la papelera de reciclaje.

- **Proceso simple**: Solo se necesita hacer clic derecho sobre el nombre del proyecto y seleccionar "Delete".

- **Opción de eliminar archivos**: Se puede elegir si eliminar solo la referencia en NetBeans o también todos los archivos físicos del proyecto.

- **Verificar antes de eliminar**: Es recomendable revisar la carpeta del proyecto antes de borrarlo para estar seguro.

- **No es común eliminar proyectos**: Normalmente se mantienen los proyectos, pero es útil saber cómo hacerlo.

### Ejemplo sencillo

Pasos para eliminar un proyecto:

1. Hacer clic derecho sobre el nombre del proyecto (ejemplo: "Aprendizaje")
2. Seleccionar la opción "Delete"
3. Aparece un cuadro de confirmación
4. Marcar la opción "Also delete sources" si se quieren eliminar también los archivos físicos
5. Hacer clic en "Yes"
6. El proyecto y todos sus archivos se eliminan permanentemente

### Funciones, palabras clave o elementos importantes

- **Delete**: Opción del menú contextual para eliminar el proyecto.

- **Also delete sources**: Opción para eliminar también la carpeta física y todos los archivos del proyecto.

- **Clic derecho**: Acción que abre el menú contextual con las opciones disponibles.

- **Eliminación definitiva**: Los archivos no van a la papelera de reciclaje, se borran completamente.

- **Carpeta del proyecto**: Ubicación física en el disco donde están guardados todos los archivos.

### Resumen final en pocas palabras

Eliminar un proyecto en NetBeans es fácil pero permanente. Se hace clic derecho sobre el proyecto, se selecciona Delete, y se confirma. Si se marca la opción correspondiente, todos los archivos se borran definitivamente del disco.

---

## LECCIÓN 8: CREAR JAVA CLASS

### ¿Qué se aprende en esta lección?

En esta lección se explora el entorno de trabajo de NetBeans y se aprende a crear la estructura correcta para trabajar: primero un paquete (package) y luego archivos de clase (Java Class) dentro de ese paquete. También se entiende la estructura básica de un archivo Java.

### Puntos clave explicados

- **Entorno de NetBeans**: Tiene diferentes pestañas y paneles para organizar el trabajo.

- **Página de inicio**: Se puede desactivar desde la misma página para que no aparezca cada vez que se abre NetBeans.

- **Panel de proyectos**: Muestra todos los proyectos y archivos en los que se está trabajando.

- **Ventana de salida (Output)**: Muestra los resultados cuando se ejecutan los programas.

- **Crear proyecto sin Main Class**: Se puede crear un proyecto vacío para construir la estructura manualmente.

- **Source Packages**: Carpeta donde se crean los paquetes del proyecto.

- **Libraries**: Carpeta que contiene el JDK 11 y otros recursos necesarios.

- **Package (paquete)**: Carpeta organizadora donde se guardan los archivos Java.

- **Java Class**: Archivo donde se escribe el código Java.

- **Estructura de un archivo Java**: Todo archivo tiene un package, una clase, y opcionalmente un método main.

- **Método main**: Punto de entrada del programa, se genera automáticamente escribiendo "main" y presionando TAB.

### Ejemplo sencillo

Estructura completa de un archivo Java:

```java
package aprendizaje;

public class Practica_1 {
    
    public static void main(String[] args) {
        System.out.println("Este es mi primer archivo de Java");
    }
    
}
```

Explicación de cada parte:
- `package aprendizaje;` → Indica a qué paquete pertenece el archivo
- `public class Practica_1` → Define la clase (mismo nombre que el archivo)
- `{` y `}` → Llaves que encierran todo el contenido de la clase
- `public static void main(String[] args)` → Método principal
- `{` y `}` → Llaves que encierran el contenido del método
- El código se escribe dentro del método main

### Funciones, palabras clave o elementos importantes

- **Package**: Paquete o carpeta que organiza los archivos Java.

- **Source Packages**: Carpeta raíz donde se crean todos los paquetes.

- **Java Class**: Tipo de archivo donde se escribe código Java.

- **class**: Palabra clave que define una clase en Java.

- **public**: Modificador de acceso que hace que la clase sea visible desde otros lugares.

- **main**: Atajo que al presionar TAB genera automáticamente el método principal.

- **public static void main(String[] args)**: Método principal donde comienza la ejecución del programa.

- **Llaves { }**: Símbolos que encierran bloques de código (clases, métodos, etc.).

- **Mismo nombre**: El archivo .java y la clase dentro de él deben tener exactamente el mismo nombre.

### Resumen final en pocas palabras

Para trabajar en Java se necesita crear primero un paquete (package) y dentro de él un archivo Java Class. Cada archivo tiene una clase con el mismo nombre del archivo, y para ejecutar código se necesita un método main. La estructura se organiza con llaves que abren y cierran cada sección del código.
