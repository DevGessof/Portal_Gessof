# JAVA BÁSICO - SECCIÓN 2
# LECCIÓN 8: CREAR JAVA CLASS

---

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
