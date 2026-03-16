# JAVA BÁSICO - SECCIÓN 11
# LECCIÓN 32: MATRICES

---

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
