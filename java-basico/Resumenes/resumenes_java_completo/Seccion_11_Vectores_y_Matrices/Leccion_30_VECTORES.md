# JAVA BÁSICO - SECCIÓN 11
# LECCIÓN 30: VECTORES

---

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

