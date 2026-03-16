# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 11: VECTORES Y MATRICES (ARREGLOS)

---

## LECCIÓN 30: VECTORES

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué son los vectores (también llamados arreglos o arrays), cómo crearlos y cómo almacenar múltiples valores del mismo tipo en una sola estructura. Se practica accediendo a cada posición del vector y recorriéndolo con un bucle for.

### Puntos clave explicados

- **Vector o arreglo**: Estructura que almacena múltiples valores del mismo tipo de dato.

- **Diferencia con variables**: Una variable guarda un solo valor; un vector guarda múltiples valores relacionados.

- **Índices**: Las posiciones del vector comienzan desde 0 (no desde 1).

- **Mismo tipo de dato**: Todos los elementos del vector deben ser del mismo tipo (todos String, todos int, etc.).

- **Tamaño fijo**: Al crear el vector se define cuántos elementos tendrá.

- **Sintaxis de declaración**:
  ```
  TipoDato[] nombreVector = new TipoDato[tamaño];
  ```

- **Acceso por posición**: Se usa el índice entre corchetes: `nombreVector[0]`, `nombreVector[1]`, etc.

- **Recorrido con for**: Ideal para acceder a todos los elementos del vector secuencialmente.

### Ejemplo sencillo

Crear y usar un vector de nombres:

```java
public class Vectores {
    public static void main(String[] args) {
        // Crear vector de 3 elementos tipo String
        String[] nombres = new String[3];
        
        // Asignar valores a cada posición
        nombres[0] = "Víctor";
        nombres[1] = "Carlos";
        nombres[2] = "Juan";
        
        // Recorrer e imprimir todos los elementos
        for (int i = 0; i <= 2; i++) {
            System.out.println(nombres[i]);
        }
    }
}
```

Salida:
```
Víctor
Carlos
Juan
```

Representación gráfica del vector:
```
nombres:
┌─────────┬─────────┬─────────┐
│ Víctor  │ Carlos  │  Juan   │
└─────────┴─────────┴─────────┘
Posición:  0         1         2
```

Acceso a elementos:
- `nombres[0]` → "Víctor"
- `nombres[1]` → "Carlos"
- `nombres[2]` → "Juan"

### Funciones, palabras clave o elementos importantes

- **[]**: Corchetes que indican que es un vector.

- **new**: Palabra clave para crear el vector en memoria.

- **Índice o posición**: Número entre corchetes que indica qué elemento acceder.

- **Posición 0**: El primer elemento está en la posición 0, no en la 1.

- **Tamaño**: Cantidad de elementos que puede almacenar el vector.

- **TipoDato[]**: Declaración de un vector de ese tipo.

- **nombreVector[i]**: Forma de acceder a la posición i del vector.

- **Límite**: Si el vector tiene 3 elementos, las posiciones son 0, 1 y 2.

### Resumen final en pocas palabras

Los vectores permiten almacenar múltiples valores del mismo tipo en una sola estructura. Las posiciones comienzan desde 0 y se accede a cada elemento usando corchetes con el índice. Son útiles para manejar colecciones de datos relacionados y se recorren fácilmente con bucles for.

---

## LECCIÓN 31: VECTORES - PARTE 2

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

## LECCIÓN 32: MATRICES

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué son las matrices (arreglos bidimensionales), cómo se organizan en filas y columnas, y cómo acceder a cada posición usando coordenadas. Las matrices permiten almacenar mucha más información que los vectores simples.

### Puntos clave explicados

- **Matriz**: Estructura bidimensional que organiza datos en filas y columnas.

- **Mayor capacidad**: Puede almacenar mucho más contenido que un vector simple.

- **Coordenadas**: Se accede a cada posición con dos índices: [fila][columna].

- **Filas**: Líneas horizontales de la matriz.

- **Columnas**: Líneas verticales de la matriz.

- **Ambos índices desde 0**: Tanto filas como columnas comienzan en posición 0.

- **Sintaxis**:
  ```
  TipoDato[][] nombreMatriz = new TipoDato[filas][columnas];
  ```

- **Acceso**: `nombreMatriz[fila][columna]`

- **Primer índice = fila**, **Segundo índice = columna**

### Ejemplo sencillo

Representación gráfica de una matriz:

```
matriz[4][4]:

       Col0    Col1    Col2    Col3
     ┌───────┬───────┬───────┬───────┐
Fila0│ [0,0] │ [0,1] │ [0,2] │ [0,3] │
     ├───────┼───────┼───────┼───────┤
Fila1│ [1,0] │ [1,1] │ [1,2] │ [1,3] │
     ├───────┼───────┼───────┼───────┤
Fila2│ [2,0] │ [2,1] │ [2,2] │ [2,3] │
     ├───────┼───────┼───────┼───────┤
Fila3│ [3,0] │ [3,1] │ [3,2] │ [3,3] │
     └───────┴───────┴───────┴───────┘
```

Código de ejemplo:

```java
public class Matrices {
    public static void main(String[] args) {
        // Crear matriz de 3 filas x 3 columnas
        int[][] numeros = new int[3][3];
        
        // Asignar valores
        numeros[0][0] = 5;    // Fila 0, Columna 0
        numeros[0][1] = 10;   // Fila 0, Columna 1
        numeros[1][0] = 15;   // Fila 1, Columna 0
        numeros[2][2] = 20;   // Fila 2, Columna 2
        
        // Mostrar un valor específico
        System.out.println(numeros[0][0]);  // Imprime: 5
        System.out.println(numeros[2][2]);  // Imprime: 20
    }
}
```

Coordenadas explicadas:
- `[0][0]` = Fila 0, Columna 0 (esquina superior izquierda)
- `[0][1]` = Fila 0, Columna 1
- `[1][0]` = Fila 1, Columna 0
- `[2][2]` = Fila 2, Columna 2

### Funciones, palabras clave o elementos importantes

- **[][]**: Doble corchete indica matriz bidimensional.

- **Fila**: Primer índice entre corchetes.

- **Columna**: Segundo índice entre corchetes.

- **[fila][columna]**: Orden para acceder a posiciones.

- **Coordenadas**: Par de números que ubican una posición exacta.

- **Bidimensional**: Tiene dos dimensiones (filas y columnas).

- **new TipoDato[filas][columnas]**: Crear matriz especificando ambas dimensiones.

- **Mayor almacenamiento**: Puede guardar muchos más datos que un vector simple.

### Resumen final en pocas palabras

Las matrices son estructuras bidimensionales organizadas en filas y columnas, permitiendo almacenar mucha más información que los vectores. Se accede a cada elemento usando dos índices: el primero para la fila y el segundo para la columna. Ambos índices comienzan desde 0, igual que en los vectores.
