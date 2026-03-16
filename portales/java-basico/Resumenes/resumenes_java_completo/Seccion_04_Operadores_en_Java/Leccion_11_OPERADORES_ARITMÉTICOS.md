# JAVA BÁSICO - SECCIÓN 4
# LECCIÓN 11: OPERADORES ARITMÉTICOS

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a realizar operaciones matemáticas básicas en Java usando operadores aritméticos. Se practica con suma, resta, multiplicación, división y obtención de residuos, entendiendo cómo Java procesa estos cálculos.

### Puntos clave explicados

- **Operadores aritméticos**: Símbolos que permiten hacer cálculos matemáticos (suma, resta, multiplicación, división, residuo).

- **Suma (+)**: Une o suma dos valores numéricos.

- **Resta (-)**: Calcula la diferencia entre dos valores.

- **Multiplicación (*)**: Multiplica dos valores.

- **División (/)**: Divide dos valores y devuelve solo la parte entera del resultado.

- **Residuo (%)**: Devuelve lo que sobra de una división (el resto).

- **Variables para almacenar resultados**: Se crean variables específicas para guardar el resultado de cada operación.

- **División en enteros**: Cuando se divide con variables int, solo se muestra la parte entera, no los decimales.

### Ejemplo sencillo

```java
int numero1 = 10;
int numero2 = 15;
int resultadoSuma, resultadoResta, resultadoMul;
int resultadoDiv1, resultadoDiv2;

// Suma
resultadoSuma = numero1 + numero2;
System.out.println(resultadoSuma);  // Imprime: 25

// Resta
resultadoResta = numero2 - numero1;
System.out.println(resultadoResta);  // Imprime: 5

// Multiplicación
resultadoMul = numero1 * numero2;
System.out.println(resultadoMul);  // Imprime: 150

// División (resultado)
resultadoDiv1 = 21 / 2;
System.out.println(resultadoDiv1);  // Imprime: 10

// Residuo (lo que sobra)
resultadoDiv2 = 21 % 2;
System.out.println(resultadoDiv2);  // Imprime: 1
```

### Funciones, palabras clave o elementos importantes

- **+**: Operador de suma.

- **-**: Operador de resta.

- **\***: Operador de multiplicación.

- **/**: Operador de división (devuelve solo la parte entera si son números enteros).

- **%**: Operador de residuo o módulo (devuelve lo que sobra de una división).

- **Resultado**: Variable donde se almacena el resultado de una operación.

- **División entera**: Cuando se dividen dos int, el resultado no incluye decimales.

- **Residuo**: Lo que sobra cuando un número no se puede dividir exactamente entre otro.

### Resumen final en pocas palabras

Los operadores aritméticos permiten hacer cálculos matemáticos en Java. Se usan los símbolos tradicionales (+, -, *, /), y el símbolo % permite obtener el residuo de una división. Es importante recordar que la división entre enteros solo devuelve la parte entera del resultado.

---

