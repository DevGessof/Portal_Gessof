# JAVA BÁSICO - SECCIÓN 5
# LECCIÓN 17: ENTRADA DE DATOS POR TECLADO

---

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

