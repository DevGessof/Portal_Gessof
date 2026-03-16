# JAVA BÁSICO - SECCIÓN 10
# LECCIÓN 29: ESTRUCTURA CÍCLICA FOR

---

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
