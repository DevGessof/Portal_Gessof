# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 5: ENTRADA DE DATOS POR TECLADO

---

## LECCIÓN 17: ENTRADA DE DATOS POR TECLADO

### ¿Qué se aprende en esta lección?

En esta lección se aprende a recibir información del usuario mientras el programa está ejecutándose. Se introduce la clase Scanner, que permite capturar texto y números que el usuario escribe en el teclado, haciendo los programas más interactivos.

### Puntos clave explicados

- **Entrada de datos**: Permite al usuario ingresar información mientras el programa se ejecuta.

- **Clase Scanner**: Herramienta de Java que permite recibir datos desde el teclado.

- **Import**: Palabra clave para traer clases externas al programa (`import java.util.Scanner;`).

- **Ubicación del import**: Se escribe fuera de la clase, después del package.

- **Crear objeto Scanner**: Se crea una variable especial que tendrá capacidad de recibir datos.

- **new**: Palabra clave para crear (instanciar) un nuevo objeto Scanner.

- **System.in**: Parámetro que indica que los datos vienen del teclado (entrada estándar).

- **nextLine()**: Método para capturar texto (String) desde el teclado.

- **Proceso**: El usuario escribe algo, presiona Enter, y el dato se guarda en una variable.

### Ejemplo sencillo

Estructura completa para recibir datos:

```java
import java.util.Scanner;

public class EntradaDatos {
    public static void main(String[] args) {
        
        // Crear variable Scanner para recibir datos
        Scanner entrada = new Scanner(System.in);
        
        // Variable para almacenar lo que escriba el usuario
        String datos;
        
        // Capturar el texto que escribe el usuario
        datos = entrada.nextLine();
        
        // Mostrar lo que se capturó
        System.out.println("Este es el contenido ingresado por teclado: " + datos);
    }
}
```

Funcionamiento paso a paso:
1. Se importa la clase Scanner
2. Se crea un objeto Scanner llamado `entrada`
3. El programa espera que el usuario escriba algo
4. Lo que el usuario escribe se guarda en la variable `datos`
5. Se muestra en pantalla lo que se capturó

### Funciones, palabras clave o elementos importantes

- **import java.util.Scanner**: Línea que trae la clase Scanner al programa.

- **Scanner**: Clase que permite capturar datos del teclado.

- **new**: Palabra para crear un nuevo objeto.

- **System.in**: Indica que la entrada viene del teclado.

- **nextLine()**: Método para capturar una línea completa de texto.

- **Objeto**: Variable especial con capacidades adicionales (en este caso, `entrada`).

- **Instanciar**: Crear un nuevo objeto usando `new`.

- **Enter**: Tecla que el usuario presiona para confirmar lo que escribió.

### Resumen final en pocas palabras

La clase Scanner permite crear programas interactivos que reciben información del usuario. Se debe importar la clase, crear un objeto Scanner, y usar métodos como nextLine() para capturar datos del teclado. Esto hace que los programas sean dinámicos en lugar de trabajar solo con datos fijos.

---

## LECCIÓN 18: ENTRADA DE DATOS POR TECLADO - PARTE 2

### ¿Qué se aprende en esta lección?

En esta lección se aprende a capturar diferentes tipos de datos (texto, números enteros y decimales) usando los diversos métodos que ofrece la clase Scanner. Se practica creando un programa que solicita múltiples datos al usuario.

### Puntos clave explicados

- **Scanner para múltiples tipos de datos**: Un solo objeto Scanner puede recibir diferentes tipos de información.

- **nextLine()**: Captura texto completo (tipo String).

- **nextInt()**: Captura números enteros (tipo int).

- **nextDouble()**: Captura números decimales (tipo double).

- **Mensajes al usuario**: Es importante mostrar mensajes que indiquen qué información se necesita.

- **Secuencia de captura**: Los datos se capturan uno por uno, en el orden que se programó.

- **Almacenar en variables**: Cada dato capturado se guarda en una variable del tipo correspondiente.

- **Concatenar resultados**: Al final se pueden combinar todos los datos capturados en un mensaje.

### Ejemplo sencillo

Programa completo que captura diferentes tipos de datos:

```java
import java.util.Scanner;

public class EntradaDatos {
    public static void main(String[] args) {
        
        // Crear el objeto Scanner
        Scanner entrada = new Scanner(System.in);
        
        // Variables para almacenar los datos
        String nombre;
        String profesion;
        int edad;
        double sueldo;
        
        // Solicitar y capturar el nombre
        System.out.println("Ingresa tu nombre:");
        nombre = entrada.nextLine();
        
        // Solicitar y capturar la profesión
        System.out.println("Ingresa tu profesión:");
        profesion = entrada.nextLine();
        
        // Solicitar y capturar la edad
        System.out.println("Ingresa tu edad:");
        edad = entrada.nextInt();
        
        // Solicitar y capturar el sueldo
        System.out.println("Ingresa tu sueldo:");
        sueldo = entrada.nextDouble();
        
        // Mostrar todos los datos capturados
        System.out.println("Hola " + nombre + " tu profesión es " + profesion + 
                          " siendo tu edad " + edad + " y ganando el sueldo " + sueldo);
    }
}
```

Ejecución del programa:
```
Ingresa tu nombre:
Victor
Ingresa tu profesión:
desarrollador de sistemas
Ingresa tu edad:
39
Ingresa tu sueldo:
2500
Hola Victor tu profesión es desarrollador de sistemas siendo tu edad 39 y ganando el sueldo 2500.0
```

### Funciones, palabras clave o elementos importantes

- **nextLine()**: Método para capturar texto completo (String).

- **nextInt()**: Método para capturar solo números enteros (int).

- **nextDouble()**: Método para capturar números enteros y decimales (double).

- **Scanner entrada**: Objeto único que sirve para capturar todos los tipos de datos.

- **Mensajes guía**: Textos que informan al usuario qué debe ingresar.

- **Flujo secuencial**: Los datos se piden uno tras otro en el orden programado.

- **Compatibilidad de tipos**: El método usado debe coincidir con el tipo de variable (nextInt() para int, nextDouble() para double, etc.).

### Resumen final en pocas palabras

La clase Scanner ofrece diferentes métodos para capturar distintos tipos de datos: nextLine() para texto, nextInt() para enteros, y nextDouble() para decimales. Con un solo objeto Scanner se pueden recibir todos estos tipos de datos, permitiendo crear programas interactivos completos que solicitan y procesan información variada del usuario.
