# JAVA BÁSICO - SECCIÓN 4
# LECCIÓN 12: OPERADORES DE COMPARACIÓN

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a comparar valores en Java usando operadores de comparación. Estos operadores permiten verificar si dos valores son iguales, diferentes, o si uno es mayor o menor que otro. El resultado de estas comparaciones siempre es un valor booleano (true o false).

### Puntos clave explicados

- **Operadores de comparación**: También llamados operadores de igualdad o relacionales, permiten comparar datos.

- **Resultado booleano**: Toda comparación devuelve `true` (verdadero) o `false` (falso).

- **Tipos compatibles**: Solo se pueden comparar datos del mismo tipo (números con números, texto con texto).

- **Doble igual (==)**: Compara si dos valores son iguales.

- **Diferente (!=)**: Compara si dos valores son distintos (no iguales).

- **Mayor que (>)**: Verifica si un valor es mayor que otro.

- **Menor que (<)**: Verifica si un valor es menor que otro.

- **Mayor o igual (>=)**: Verifica si un valor es mayor o igual que otro.

- **Menor o igual (<=)**: Verifica si un valor es menor o igual que otro.

### Ejemplo sencillo

```java
int numero1 = 120;
int numero2 = 50;
boolean resultado;

// Comparación: ¿Son iguales?
resultado = numero1 == numero2;
System.out.println(resultado);  // Imprime: false (120 no es igual a 50)

// Si fueran iguales
numero2 = 120;
resultado = numero1 == numero2;
System.out.println(resultado);  // Imprime: true (120 es igual a 120)

// ¿Son diferentes?
numero2 = 50;
resultado = numero1 != numero2;
System.out.println(resultado);  // Imprime: true (120 es diferente de 50)

// ¿Es mayor?
resultado = numero1 > numero2;
System.out.println(resultado);  // Imprime: true (120 es mayor que 50)

// ¿Es menor?
resultado = numero1 < numero2;
System.out.println(resultado);  // Imprime: false (120 no es menor que 50)

// ¿Es mayor o igual?
resultado = numero1 >= numero2;
System.out.println(resultado);  // Imprime: true (120 es mayor que 50)
```

### Funciones, palabras clave o elementos importantes

- **==**: Operador de igualdad (doble igual). Pregunta "¿son iguales?".

- **!=**: Operador de diferencia o "no igual". Pregunta "¿son diferentes?".

- **>**: Operador "mayor que".

- **<**: Operador "menor que".

- **>=**: Operador "mayor o igual que".

- **<=**: Operador "menor o igual que".

- **boolean**: Tipo de dato que almacena el resultado de una comparación (true o false).

- **true**: Valor verdadero.

- **false**: Valor falso.

### Resumen final en pocas palabras

Los operadores de comparación permiten verificar relaciones entre valores. Siempre devuelven un resultado booleano (verdadero o falso). Son fundamentales para tomar decisiones en programación basadas en condiciones específicas.

---

