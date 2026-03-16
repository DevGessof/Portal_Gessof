# JAVA BÁSICO - SECCIÓN 3
# LECCIÓN 10: VARIABLES Y TIPOS DE DATOS - PARTE 2

---

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
