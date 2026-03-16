# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 10: ESTRUCTURAS CÍCLICAS (BUCLES)

---

## LECCIÓN 27: ESTRUCTURA CÍCLICA WHILE

### ¿Qué se aprende en esta lección?

En esta lección se aprende a crear bucles (ciclos repetitivos) usando while, que ejecuta código múltiples veces mientras una condición sea verdadera. Se practica creando un programa que muestra la tabla de multiplicar de cualquier número ingresado por el usuario.

### Puntos clave explicados

- **Estructura cíclica o bucle**: Permite ejecutar código repetidamente mientras se cumpla una condición.

- **while (mientras)**: Ejecuta el código dentro de sus llaves mientras la condición sea verdadera.

- **Condición primero**: while evalúa la condición ANTES de ejecutar el código. Si es falsa desde el inicio, el código nunca se ejecuta.

- **Variable de control**: Se necesita una variable que cambie en cada repetición para evitar bucles infinitos.

- **Incremento**: Es importante aumentar la variable de control para que eventualmente la condición sea falsa y el bucle termine.

- **Sintaxis**:
  ```
  while (condición) {
      // código que se repite
  }
  ```

- **Uso práctico**: Ideal cuando no se sabe exactamente cuántas veces se repetirá el código, solo que debe continuar mientras algo sea verdadero.

### Ejemplo sencillo

Tabla de multiplicar usando while:

```java
import java.util.Scanner;

public class EstructuraCiclicaWhile {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int numeroTabla = 0;
        int secuencia = 0;
        
        System.out.println("Indicar número de tabla de multiplicar:");
        numeroTabla = entrada.nextInt();
        
        // Bucle while para imprimir la tabla
        while (secuencia <= 12) {
            System.out.println(numeroTabla + " x " + secuencia + " = " + 
                             (numeroTabla * secuencia));
            secuencia++;  // Incrementar para que eventualmente termine
        }
    }
}
```

Ejecución:
```
Indicar número de tabla de multiplicar:
5
5 x 0 = 0
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
...
5 x 12 = 60
```

Explicación del flujo:
1. secuencia inicia en 0
2. Evalúa: ¿0 <= 12? Sí → ejecuta el código, imprime, incrementa secuencia a 1
3. Evalúa: ¿1 <= 12? Sí → ejecuta, incrementa a 2
4. Continúa hasta que secuencia sea 13
5. Evalúa: ¿13 <= 12? No → termina el bucle

### Funciones, palabras clave o elementos importantes

- **while**: Palabra clave para crear un bucle condicional.

- **Condición**: Expresión entre paréntesis que se evalúa como true o false.

- **Bucle o ciclo**: Repetición de código múltiples veces.

- **Variable de control**: Variable que cambia en cada repetición (secuencia en el ejemplo).

- **Incremento (++)**: Aumenta la variable en 1 para controlar cuándo termina el bucle.

- **Bucle infinito**: Error que ocurre si la condición nunca es falsa (olvidar incrementar).

- **Evaluación previa**: La condición se evalúa ANTES de ejecutar el código cada vez.

### Resumen final en pocas palabras

while crea bucles que repiten código mientras una condición sea verdadera. La condición se evalúa antes de cada ejecución, y es crucial tener una variable de control que se incremente para evitar bucles infinitos. Es útil cuando el número de repeticiones depende de una condición dinámica.

---

## LECCIÓN 28: ESTRUCTURA CÍCLICA DO WHILE

### ¿Qué se aprende en esta lección?

En esta lección se aprende la estructura do-while, que es similar a while pero con una diferencia clave: el código se ejecuta AL MENOS UNA VEZ antes de evaluar la condición. Se comprende cuándo es útil usar do-while en lugar de while.

### Puntos clave explicados

- **do-while**: Ejecuta el código primero y luego evalúa la condición.

- **Diferencia con while**: 
  - while: evalúa condición → ejecuta código
  - do-while: ejecuta código → evalúa condición

- **Garantía de ejecución**: El código dentro del do-while se ejecuta SÍ O SÍ al menos una vez, incluso si la condición es falsa desde el inicio.

- **Sintaxis**:
  ```
  do {
      // código que se ejecuta
  } while (condición);
  ```

- **Punto y coma final**: Importante poner ; después del paréntesis de la condición.

- **Uso práctico**: Útil cuando necesitas ejecutar código al menos una vez, como mostrar un menú o validar entrada.

### Ejemplo sencillo

Comparación entre while y do-while:

```java
public class EstructuraCiclicaDoWhile {
    public static void main(String[] args) {
        int edad = 30;
        
        // Con do-while
        do {
            System.out.println("Hola");
        } while (edad < 30);
        
        // Salida: Imprime "Hola" una vez
        // Aunque edad NO es menor que 30, se ejecuta una vez
    }
}
```

Si fuera con while:
```java
int edad = 30;

// Con while
while (edad < 30) {
    System.out.println("Hola");
}

// Salida: No imprime nada
// Como edad NO es menor que 30, nunca ejecuta
```

Diferencia clave:
- **do-while**: Ejecuta primero, pregunta después → "Hola" se imprime 1 vez
- **while**: Pregunta primero, ejecuta después → "Hola" NO se imprime

### Funciones, palabras clave o elementos importantes

- **do**: Palabra clave que inicia el bloque de código a ejecutar.

- **while**: Palabra clave que evalúa la condición al final.

- **Ejecución garantizada**: El código se ejecuta al menos una vez, siempre.

- **Evaluación posterior**: La condición se verifica DESPUÉS de ejecutar el código.

- **;**: Punto y coma obligatorio después de while(condición).

- **Primera ejecución**: Ocurre antes de cualquier evaluación de la condición.

### Resumen final en pocas palabras

do-while ejecuta el código primero y luego evalúa la condición, garantizando que el código se ejecute al menos una vez. Es útil cuando necesitas que una acción ocurra siempre antes de decidir si continuar, como mostrar un menú inicial o pedir datos que deben ingresarse al menos una vez.

---

## LECCIÓN 29: ESTRUCTURA CÍCLICA FOR

### ¿Qué se aprende en esta lección?

En esta lección se aprende la estructura for, el bucle más compacto y organizado cuando se conoce exactamente cuántas veces debe repetirse el código. Se practica creando una tabla de multiplicar con una sintaxis más simple que while.

### Puntos clave explicados

- **for**: Estructura cíclica más compacta, ideal cuando se sabe cuántas repeticiones se necesitan.

- **Tres partes en una línea**:
  1. **Inicialización**: Crea y asigna valor inicial a la variable de control
  2. **Condición**: Define hasta cuándo se ejecuta el bucle
  3. **Incremento**: Define cómo cambia la variable en cada repetición

- **Sintaxis**:
  ```
  for (inicialización; condición; incremento) {
      // código que se repite
  }
  ```

- **Variable de control local**: La variable creada en el for solo existe dentro del bucle.

- **Todo en una línea**: Toda la lógica del bucle está en el paréntesis, haciendo el código más limpio.

- **Atajo en NetBeans**: Escribir "for" y presionar Tab crea automáticamente la estructura.

### Ejemplo sencillo

Tabla de multiplicar con for:

```java
import java.util.Scanner;

public class EstructuraCiclicaFor {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int nTabla = 0;
        
        System.out.println("Ingresa el número de tabla de multiplicar:");
        nTabla = entrada.nextInt();
        
        // Bucle for desde 0 hasta 12
        for (int numero = 0; numero <= 12; numero++) {
            System.out.println(nTabla + " x " + numero + " = " + 
                             (nTabla * numero));
        }
    }
}
```

Ejecución:
```
Ingresa el número de tabla de multiplicar:
7
7 x 0 = 0
7 x 1 = 7
7 x 2 = 14
...
7 x 12 = 84
```

Explicación de las tres partes:
```java
for (int numero = 0;    // 1. Inicialización: numero comienza en 0
     numero <= 12;       // 2. Condición: continuar mientras numero <= 12
     numero++)           // 3. Incremento: aumentar numero en 1 cada vez
```

Comparación con while:
```java
// Con while (más código)
int numero = 0;              // Inicialización separada
while (numero <= 12) {       // Solo la condición
    // código
    numero++;                // Incremento al final
}

// Con for (más compacto)
for (int numero = 0; numero <= 12; numero++) {
    // código
}
```

### Funciones, palabras clave o elementos importantes

- **for**: Palabra clave para crear bucles contados.

- **Inicialización**: Primera parte, crea la variable (ej: `int numero = 0`).

- **Condición**: Segunda parte, define cuándo continuar (ej: `numero <= 12`).

- **Incremento**: Tercera parte, cómo cambia la variable (ej: `numero++`).

- **;**: Punto y coma separa las tres partes dentro del paréntesis.

- **Variable local**: La variable creada en el for solo existe dentro del bucle.

- **for + Tab**: Atajo en NetBeans para crear la estructura automáticamente.

- **Bucle contado**: Cuando se sabe exactamente cuántas veces repetir.

### Resumen final en pocas palabras

for es la estructura cíclica más compacta, ideal cuando se sabe cuántas veces repetir el código. Agrupa inicialización, condición e incremento en una sola línea, haciendo el código más limpio y legible. Es la opción preferida para bucles con un número específico de repeticiones.
