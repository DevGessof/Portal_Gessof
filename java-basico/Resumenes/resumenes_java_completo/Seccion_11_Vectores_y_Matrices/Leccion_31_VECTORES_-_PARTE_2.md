# JAVA BÁSICO - SECCIÓN 11
# LECCIÓN 31: VECTORES - PARTE 2

---

### ¿Qué se aprende en esta lección?

En esta lección se practica con vectores de forma dinámica, creando un programa que solicita al usuario cuántas notas ingresará, crea un vector de ese tamaño, pide cada nota y finalmente las muestra. Se combina Scanner, vectores y bucles for.

### Puntos clave explicados

- **Tamaño dinámico**: El tamaño del vector puede definirse según input del usuario.

- **Entrada de datos para vectores**: Se usa Scanner dentro de un bucle para llenar el vector.

- **Bucle for para llenar**: Se recorre el vector pidiendo un valor para cada posición.

- **Bucle for para mostrar**: Se recorre nuevamente para imprimir todos los valores.

- **Variable de usuario**: El usuario decide cuántos elementos tendrá el vector.

- **Índice i como contador**: La variable i del for sirve como índice del vector.

- **Proceso completo**:
  1. Preguntar cuántos elementos
  2. Crear vector de ese tamaño
  3. Pedir cada elemento con un for
  4. Mostrar elementos con otro for

### Ejemplo sencillo

Programa de notas con tamaño dinámico:

```java
import java.util.Scanner;

public class Vectores2 {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int nCantidadNotas = 0;
        
        // Pedir cantidad de notas
        System.out.println("Cantidad de calificaciones:");
        nCantidadNotas = entrada.nextInt();
        
        // Crear vector del tamaño indicado
        double[] notas = new double[nCantidadNotas];
        
        // Llenar el vector con notas
        for (int i = 0; i < nCantidadNotas; i++) {
            System.out.print("Ingresa la nota para la posición " + i + ": ");
            notas[i] = entrada.nextDouble();
        }
        
        // Mostrar todas las notas
        System.out.println("\nNotas ingresadas:");
        for (int i = 0; i < nCantidadNotas; i++) {
            System.out.println("Nota " + i + ": " + notas[i]);
        }
    }
}
```

Ejecución:
```
Cantidad de calificaciones:
3
Ingresa la nota para la posición 0: 15.5
Ingresa la nota para la posición 1: 18.0
Ingresa la nota para la posición 2: 16.5

Notas ingresadas:
Nota 0: 15.5
Nota 1: 18.0
Nota 2: 16.5
```

### Funciones, palabras clave o elementos importantes

- **Tamaño variable**: El tamaño del vector se define con una variable, no un número fijo.

- **i < nCantidadNotas**: Condición del for que usa la cantidad ingresada por el usuario.

- **notas[i]**: Acceso a cada posición usando la variable i del for.

- **entrada.nextDouble()**: Para capturar números decimales.

- **Dos bucles**: Uno para llenar el vector, otro para mostrarlo.

- **print vs println**: print no hace salto de línea, útil para pedir entrada en la misma línea.

- **Concatenación en for**: Usar i para mostrar números de posición al usuario.

### Resumen final en pocas palabras

Los vectores pueden crearse con tamaño dinámico usando una variable. Se combinan Scanner y bucles for para pedir datos al usuario y llenar el vector posición por posición. Luego se puede recorrer nuevamente para mostrar todos los valores almacenados.

---

