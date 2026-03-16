# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 8: ESTRUCTURAS CONDICIONALES

---

## LECCIÓN 24: ESTRUCTURA CONDICIONAL IF - ELSE

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

## LECCIÓN 25: ESTRUCTURA CONDICIONAL IF - ELSE IF

### ¿Qué se aprende en esta lección?

En esta lección se aprende a evaluar múltiples condiciones usando else if, permitiendo crear programas que manejen más de dos alternativas. Se entiende cómo las condiciones se evalúan de forma secuencial y cómo estructurar decisiones en cascada.

### Puntos clave explicados

- **else if**: Permite agregar condiciones adicionales entre el if inicial y el else final.

- **Condiciones anidadas**: Varias condiciones que se evalúan una tras otra.

- **Evaluación secuencial**: Las condiciones se revisan en orden de arriba hacia abajo.

- **Primera condición que se cumple**: Una vez que una condición es verdadera, se ejecuta su código y se ignoran las demás.

- **else final**: Opcional, se ejecuta solo si ninguna de las condiciones anteriores fue verdadera.

- **Múltiples alternativas**: Permite clasificar datos en más de dos categorías.

- **Sintaxis**:
  ```
  if (condición1) {
      // código si condición1 es verdadera
  } else if (condición2) {
      // código si condición2 es verdadera
  } else {
      // código si ninguna condición fue verdadera
  }
  ```

### Ejemplo sencillo

Clasificar por edad en tres categorías:

```java
import java.util.Scanner;

public class EstructuraCondicional {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int edad;
        
        System.out.println("Ingresa tu edad:");
        edad = entrada.nextInt();
        
        // Evaluar múltiples condiciones
        if (edad < 15) {
            System.out.println("Eres un niño");
        } else if (edad < 17) {
            System.out.println("Eres un joven");
        } else {
            System.out.println("Eres un adulto");
        }
    }
}
```

Ejecución con diferentes edades:
```
Ingresa tu edad:
3
Eres un niño

Ingresa tu edad:
15
Eres un joven

Ingresa tu edad:
45
Eres un adulto
```

Explicación del flujo:
1. Si edad < 15 (ejemplo: 3) → imprime "Eres un niño" y termina
2. Si no, evalúa edad < 17 (ejemplo: 15) → imprime "Eres un joven" y termina
3. Si no, ejecuta el else → imprime "Eres un adulto"

### Funciones, palabras clave o elementos importantes

- **else if**: Palabra clave para agregar condiciones adicionales.

- **Evaluación secuencial**: Las condiciones se revisan en orden, de arriba hacia abajo.

- **Condiciones anidadas**: Serie de condiciones conectadas que se evalúan una tras otra.

- **Primera coincidencia**: Solo se ejecuta el código de la primera condición verdadera.

- **else opcional**: No es obligatorio tener un else al final.

- **Múltiples else if**: Se pueden tener tantos else if como sean necesarios.

- **Flujo de control**: El programa "salta" al código correspondiente según la condición que se cumpla.

### Resumen final en pocas palabras

else if permite evaluar múltiples condiciones en secuencia, creando programas que manejan varios escenarios diferentes. Las condiciones se evalúan de arriba hacia abajo y solo se ejecuta el código de la primera que sea verdadera. El else final es opcional y captura todos los casos no contemplados en las condiciones anteriores.
