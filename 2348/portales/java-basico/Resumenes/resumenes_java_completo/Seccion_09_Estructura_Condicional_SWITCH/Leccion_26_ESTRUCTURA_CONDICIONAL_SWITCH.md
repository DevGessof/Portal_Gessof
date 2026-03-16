# JAVA BÁSICO - SECCIÓN 9
# LECCIÓN 26: ESTRUCTURA CONDICIONAL SWITCH

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a usar la estructura switch, una alternativa más ordenada y legible que múltiples if-else when cuando se necesita comparar una variable con varios valores específicos. Se practica con un ejemplo que convierte números de días (1-7) en nombres de días de la semana.

### Puntos clave explicados

- **Switch**: Estructura condicional por selección que evalúa una variable contra múltiples casos.

- **Ventaja sobre if-else**: Más clara y ordenada cuando se compara una variable con muchos valores específicos.

- **case**: Cada caso representa un valor posible que puede tener la variable.

- **break**: Palabra clave que termina un caso y sale del switch.

- **default**: Caso opcional que se ejecuta si ningún case coincide (similar al else).

- **Sintaxis básica**:
  ```
  switch (variable) {
      case valor1:
          // código
          break;
      case valor2:
          // código
          break;
      default:
          // código si no coincide ningún case
  }
  ```

- **Dos puntos (:)**: Separan el valor del case del código a ejecutar.

- **Evaluación por igualdad**: Switch solo compara si la variable es igual a cada valor, no puede usar <, >, etc.

### Ejemplo sencillo

Convertir número de día a nombre del día:

```java
import java.util.Scanner;

public class TrabajandoConSwitch {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        int nDia = 0;
        String resultado = "";
        
        System.out.println("Ingresa el número de día de la semana:");
        nDia = entrada.nextInt();
        
        switch (nDia) {
            case 1:
                resultado = "Lunes";
                break;
            case 2:
                resultado = "Martes";
                break;
            case 3:
                resultado = "Miércoles";
                break;
            case 4:
                resultado = "Jueves";
                break;
            case 5:
                resultado = "Viernes";
                break;
            case 6:
                resultado = "Sábado";
                break;
            case 7:
                resultado = "Domingo";
                break;
            default:
                resultado = "Número de día ingresado no válido";
        }
        
        System.out.println(resultado);
    }
}
```

Ejecución:
```
Ingresa el número de día de la semana:
6
Sábado

Ingresa el número de día de la semana:
8
Número de día ingresado no válido
```

### Funciones, palabras clave o elementos importantes

- **switch**: Palabra clave que inicia la estructura condicional por selección.

- **case**: Define cada posible valor que se quiere evaluar.

- **break**: Termina un case y sale del switch. Es MUY IMPORTANTE ponerlo.

- **default**: Caso que se ejecuta cuando ningún case coincide (opcional).

- **:**: Dos puntos después del valor de cada case.

- **Variable a evaluar**: Se coloca entre paréntesis después de switch.

- **Sin break**: Si se olvida el break, el código continuará ejecutando los siguientes cases (efecto cascada).

- **Comparación por igualdad**: Switch solo verifica si la variable es exactamente igual al valor del case.

### Resumen final en pocas palabras

La estructura switch es ideal para evaluar una variable contra múltiples valores específicos de forma clara y organizada. Cada case representa un valor posible, break termina ese caso, y default maneja valores no contemplados. Es más legible que múltiples if-else when cuando se comparan muchos valores exactos de una misma variable.
