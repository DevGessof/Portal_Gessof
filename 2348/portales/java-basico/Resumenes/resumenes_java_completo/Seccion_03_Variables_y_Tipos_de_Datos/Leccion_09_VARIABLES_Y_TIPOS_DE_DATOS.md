# JAVA BÁSICO - SECCIÓN 3
# LECCIÓN 9: VARIABLES Y TIPOS DE DATOS

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué son las variables y los tipos de datos en Java. Se entiende que las variables son espacios en la memoria donde se puede almacenar información de diferentes tipos: números enteros, decimales, texto, entre otros. También se aprende a crear variables y asignarles valores.

### Puntos clave explicados

- **Variables**: Son espacios de memoria que permiten almacenar información durante la ejecución del programa.

- **Tipos de datos primitivos**: Son los tipos básicos que vienen con Java (byte, short, int, long, float, double, boolean, char).

- **Tipos de datos de objetos**: Son tipos más complejos como String, Scanner, ArrayList.

- **Tipos de datos recomendados para iniciar**:
  - `int` - Para números enteros
  - `double` - Para números decimales
  - `String` - Para texto (alfanumérico)
  - `boolean` - Para valores lógicos (verdadero/falso)

- **Estructura para crear variables**: Se debe indicar primero el tipo de dato, luego el nombre de la variable.

- **Asignar valores**: Se usa el símbolo `=` para dar un valor a la variable.

- **Punto y coma**: Cada instrucción en Java termina con punto y coma `;`

- **Formas de crear variables**:
  1. Crear la variable y luego asignarle valor (dos líneas)
  2. Crear y asignar valor en la misma línea (una línea)

### Ejemplo sencillo

Forma 1 - Crear variable y luego asignar valor:
```java
int edad;
String nombre;

edad = 39;
nombre = "Victor";

System.out.println(edad);
System.out.println(nombre);
```

Forma 2 - Crear y asignar en la misma línea:
```java
int edad = 39;
String nombre = "Victor";

System.out.println(edad);
System.out.println(nombre);
```

Forma 3 - Todo en una línea (muy compacto):
```java
int edad = 39; String nombre = "Victor";
System.out.println(edad);
System.out.println(nombre);
```

Resultado en pantalla:
```
39
Victor
```

### Funciones, palabras clave o elementos importantes

- **int**: Tipo de dato para números enteros (sin decimales).

- **String**: Tipo de dato para texto o cadenas de caracteres (alfanumérico). Comienza con mayúscula.

- **double**: Tipo de dato para números decimales.

- **boolean**: Tipo de dato para valores lógicos (true o false).

- **byte**: Tipo de dato para números enteros pequeños (-128 a 127).

- **=**: Operador de asignación, se usa para dar valor a una variable.

- **;**: Punto y coma, indica el final de cada instrucción.

- **Comillas dobles ""**: Se usan para encerrar texto cuando se asigna a una variable String.

- **Nombre de variable**: Debe ser descriptivo de lo que contiene (edad, nombre, sueldo, etc.).

### Resumen final en pocas palabras

Las variables son fundamentales en programación porque permiten guardar información que se puede usar y modificar durante la ejecución del programa. En Java se debe indicar el tipo de dato y el nombre de la variable, y opcionalmente se puede asignar un valor inicial.

---

