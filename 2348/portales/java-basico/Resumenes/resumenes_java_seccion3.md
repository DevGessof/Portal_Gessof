# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 3: VARIABLES Y TIPOS DE DATOS

---

## LECCIÓN 9: VARIABLES Y TIPOS DE DATOS

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

## LECCIÓN 10: VARIABLES Y TIPOS DE DATOS - PARTE 2

### ¿Qué se aprende en esta lección?

En esta lección se amplía el conocimiento sobre tipos de datos, explorando `double` para números decimales, `boolean` para valores lógicos, y `byte` para números enteros pequeños. También se da un mensaje motivacional importante sobre cómo aprender programación de forma efectiva.

### Puntos clave explicados

- **Filosofía de aprendizaje**: No es necesario aprender todos los tipos de datos al inicio, solo los más usados (aproximadamente el 15% que se usa en el trabajo real).

- **Java no es complicado**: El lenguaje es sencillo si se aprenden primero los conceptos fundamentales y más utilizados.

- **Ventajas de Java**: Se puede usar en Windows, Linux, Mac, aplicaciones de escritorio, web, móviles, y más.

- **Tipo double**: Permite almacenar números con decimales (ejemplo: 1500.35).

- **Tipo boolean**: Solo acepta dos valores: `true` (verdadero) o `false` (falso).

- **Tipo byte**: Para números enteros muy pequeños, rango de -128 a 127.

- **Límites importantes**: Cada tipo de dato tiene un rango de valores permitidos. Si se intenta usar un valor fuera del rango, Java marca error.

### Ejemplo sencillo

Usando diferentes tipos de datos:

```java
int edad = 39;
String nombre = "Victor";
double sueldo = 1500.35;
boolean soltero = false;

System.out.println(edad);
System.out.println(nombre);
System.out.println(sueldo);
System.out.println(soltero);
```

Resultado en pantalla:
```
39
Victor
1500.35
false
```

Ejemplo con boolean:
```java
boolean soltero = true;   // Verdadero, sí es soltero
System.out.println(soltero);  // Imprime: true

boolean soltero = false;  // Falso, no es soltero (está casado)
System.out.println(soltero);  // Imprime: false
```

Ejemplo con byte y sus límites:
```java
byte numero = 127;   // Funciona, está en el límite máximo
byte numero = 128;   // ERROR - Supera el límite máximo

byte numero = -128;  // Funciona, está en el límite mínimo
byte numero = -129;  // ERROR - Supera el límite mínimo
```

### Funciones, palabras clave o elementos importantes

- **double**: Tipo de dato para números decimales (enteros y con punto decimal).

- **boolean**: Tipo de dato lógico, solo acepta `true` (verdadero) o `false` (falso).

- **true**: Valor verdadero en tipo boolean.

- **false**: Valor falso en tipo boolean.

- **byte**: Tipo de dato para números enteros pequeños, rango: -128 a 127.

- **Límite mínimo**: El valor más bajo que puede almacenar un tipo de dato.

- **Límite máximo**: El valor más alto que puede almacenar un tipo de dato.

- **Punto decimal**: En números decimales se usa punto (.), no coma.

### Resumen final en pocas palabras

Java ofrece varios tipos de datos, pero al iniciar es suficiente dominar `int`, `double`, `String` y `boolean`. Cada tipo tiene límites específicos de valores que puede almacenar. Lo importante es aprender lo esencial primero y luego ir ampliando conocimientos con la práctica.
