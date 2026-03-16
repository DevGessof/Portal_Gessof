# JAVA BÁSICO - SECCIÓN 12
# LECCIÓN 35: MÉTODOS - PARTE 3

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a crear métodos que devuelven un valor (con return), permitiendo que el método calcule algo y entregue el resultado. Se cambia void por el tipo de dato que se va a retornar.

### Puntos clave explicados

- **return**: Palabra clave que devuelve un valor desde el método.

- **Tipo de retorno**: Se especifica qué tipo de dato devolverá (int, String, double, etc.).

- **No más void**: Cuando un método retorna, se cambia void por el tipo de dato.

- **Cálculos y operaciones**: Útil para métodos que realizan operaciones y devuelven resultados.

- **Uso del resultado**: El valor retornado puede imprimirse, guardarse en una variable o usarse en operaciones.

- **Sintaxis con retorno**:
  ```
  static TipoDato nombreMetodo(parametros) {
      return valor;
  }
  ```

- **Parámetros + retorno**: Un método puede recibir datos Y devolver un resultado.

### Ejemplo sencillo

Método que retorna un valor:

```java
public class EjemplosMetodos {
    
    public static void main(String[] args) {
        // Imprimir directamente el resultado
        System.out.println("La suma de 2 + 4 es igual a " + sumar(2, 4));
    }
    
    static int sumar(int valor1, int valor2) {
        return valor1 + valor2;
    }
}
```

Salida:
```
La suma de 2 + 4 es igual a 6
```

Guardando el resultado en una variable:

```java
public static void main(String[] args) {
    int resultado = sumar(5, 3);
    System.out.println("El resultado es: " + resultado);
}

static int sumar(int valor1, int valor2) {
    return valor1 + valor2;
}
```

Comparación void vs return:

```java
// Sin retorno (void) - solo imprime
static void mostrarSuma(int a, int b) {
    System.out.println(a + b);
}

// Con retorno (int) - devuelve el valor
static int calcularSuma(int a, int b) {
    return a + b;
}

// Uso:
mostrarSuma(2, 3);           // Solo imprime: 5
int total = calcularSuma(2, 3); // Guarda el resultado: 5
```

### Funciones, palabras clave o elementos importantes

- **return**: Devuelve un valor y termina la ejecución del método.

- **Tipo de retorno**: int, double, String, boolean, etc. (reemplaza a void).

- **void**: Usado cuando el método NO retorna nada.

- **Valor de retorno**: El dato que el método envía de vuelta.

- **Operaciones**: Se pueden hacer cálculos directamente en el return.

- **Asignación**: El valor retornado puede guardarse en una variable.

- **Impresión directa**: Se puede imprimir el resultado del método directamente.

### Resumen final en pocas palabras

Los métodos con return devuelven un valor calculado. Se especifica el tipo de retorno (int, String, etc.) en lugar de void. La palabra return envía el resultado de vuelta. Esto permite usar el método para obtener valores calculados y usarlos en el programa.

---

