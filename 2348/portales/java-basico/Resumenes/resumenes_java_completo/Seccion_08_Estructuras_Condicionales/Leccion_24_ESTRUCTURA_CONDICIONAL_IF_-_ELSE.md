# JAVA BÁSICO - SECCIÓN 8
# LECCIÓN 24: ESTRUCTURA CONDICIONAL IF - ELSE

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a crear programas que toman decisiones basándose en condiciones. Se introduce la estructura if (si) que permite ejecutar código solo cuando se cumple una condición, y else (sino) que ofrece una alternativa cuando la condición no se cumple.

### Puntos clave explicados

- **Estructura condicional**: Permite que el programa tome decisiones y ejecute diferentes códigos según las condiciones.

- **if (si)**: Evalúa una condición. Si es verdadera, ejecuta el código dentro de sus llaves.

- **else (sino)**: Se ejecuta solo si la condición del if es falsa. Ofrece una alternativa.

- **Condición**: Expresión que se evalúa como verdadero (true) o falso (false).

- **Sintaxis con una sola alternativa (solo if)**:
  ```
  if (condición) {
      // código si la condición es verdadera
  }
  ```

- **Sintaxis con dos alternativas (if-else)**:
  ```
  if (condición) {
      // código si la condición es verdadera
  } else {
      // código si la condición es falsa
  }
  ```

- **Llaves { }**: Delimitan el bloque de código que se ejecutará.

- **Comparaciones**: Se usan operadores como < (menor), > (mayor), <= (menor o igual), >= (mayor o igual).

### Ejemplo sencillo

Solo if (una alternativa):
```java
import java.util.Scanner;

public class EstructuraCondicional {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int edad = 0;
        
        System.out.println("Ingresa tu edad:");
        edad = entrada.nextInt();
        
        // Solo evalúa si es menor de 18
        if (edad < 18) {
            System.out.println("Eres menor de edad");
        }
        // Si edad >= 18, no muestra nada
    }
}
```

Ejecución:
```
Ingresa tu edad:
16
Eres menor de edad

Ingresa tu edad:
19
(no muestra nada)
```

if-else (dos alternativas):
```java
if (edad < 18) {
    System.out.println("Eres menor de edad");
} else {
    System.out.println("Eres adulto");
}
```

Ejecución:
```
Ingresa tu edad:
12
Eres menor de edad

Ingresa tu edad:
40
Eres adulto
```

### Funciones, palabras clave o elementos importantes

- **if**: Palabra clave para crear una condición (significa "si").

- **else**: Palabra clave para la alternativa (significa "sino" o "de lo contrario").

- **Condición**: Expresión entre paréntesis que se evalúa como true o false.

- **{ }**: Llaves que encierran el código a ejecutar.

- **Bloque de código**: Conjunto de instrucciones entre llaves.

- **Evaluación**: Proceso de verificar si una condición es verdadera o falsa.

- **Alternativa**: Opción diferente de ejecución según el resultado de la condición.

- **Scanner**: Para recibir datos del usuario y evaluar condiciones con valores reales.

### Resumen final en pocas palabras

La estructura if permite que un programa tome decisiones ejecutando código solo cuando una condición es verdadera. Al agregar else, se ofrece una alternativa para cuando la condición es falsa. Esto hace que los programas sean dinámicos y respondan de forma diferente según los datos que reciben.

---

