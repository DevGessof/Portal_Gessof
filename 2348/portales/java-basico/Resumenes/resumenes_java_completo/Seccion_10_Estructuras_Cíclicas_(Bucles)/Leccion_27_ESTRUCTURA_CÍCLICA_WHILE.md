# JAVA BÁSICO - SECCIÓN 10
# LECCIÓN 27: ESTRUCTURA CÍCLICA WHILE

---

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

