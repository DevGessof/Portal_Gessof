# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 4: OPERADORES EN JAVA

---

## LECCIÓN 11: OPERADORES ARITMÉTICOS

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

## LECCIÓN 12: OPERADORES DE COMPARACIÓN

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

## LECCIÓN 13: OPERADORES LÓGICOS

### ¿Qué se aprende en esta lección?

En esta lección se aprende a combinar múltiples comparaciones usando operadores lógicos. Se entiende cómo funcionan AND (&&), OR (||) y NOT (!), y cómo evalúan expresiones para devolver un resultado verdadero o falso.

### Puntos clave explicados

- **Operadores lógicos**: Permiten combinar o modificar expresiones booleanas.

- **AND (&&)**: Devuelve true solo si TODAS las expresiones son verdaderas.

- **OR (||)**: Devuelve true si AL MENOS UNA expresión es verdadera.

- **NOT (!)**: Invierte el valor lógico (true se convierte en false y viceversa).

- **Tabla de verdad AND**: 
  - true && true = true
  - true && false = false
  - false && true = false
  - false && false = false

- **Tabla de verdad OR**:
  - true || true = true
  - true || false = true
  - false || true = true
  - false || false = false

- **Combinación de comparaciones**: Se pueden unir múltiples condiciones con operadores lógicos.

### Ejemplo sencillo

Usando AND (&&):
```java
boolean resultado;

// Ambas comparaciones son verdaderas
resultado = (5 == 5) && (6 == 6);
System.out.println(resultado);  // Imprime: true

// Una es verdadera y otra falsa
resultado = (5 == 5) && (6 == 7);
System.out.println(resultado);  // Imprime: false
```

Usando OR (||):
```java
// Al menos una es verdadera
resultado = (5 == 5) || (6 == 7);
System.out.println(resultado);  // Imprime: true

// Ambas son falsas
resultado = (5 == 6) || (6 == 7);
System.out.println(resultado);  // Imprime: false
```

Usando NOT (!):
```java
// Invierte el resultado
resultado = !(5 == 5);
System.out.println(resultado);  // Imprime: false (invierte true a false)
```

### Funciones, palabras clave o elementos importantes

- **&&**: Operador AND (Y lógico). Requiere que todas las condiciones sean verdaderas.

- **||**: Operador OR (O lógico). Requiere que al menos una condición sea verdadera.

- **!**: Operador NOT (negación). Invierte el valor booleano.

- **Tabla de verdad**: Referencia que muestra todos los posibles resultados de combinar valores booleanos.

- **Expresión lógica**: Combinación de comparaciones usando operadores lógicos.

- **Evaluación**: Proceso de calcular si una expresión completa es verdadera o falsa.

### Resumen final en pocas palabras

Los operadores lógicos permiten crear condiciones más complejas combinando múltiples comparaciones. AND requiere que todo sea verdadero, OR requiere al menos uno verdadero, y NOT invierte el resultado. Son esenciales para tomar decisiones basadas en múltiples criterios.

---

## LECCIÓN 14: OPERADORES DE INCREMENTO Y DECREMENTO

### ¿Qué se aprende en esta lección?

En esta lección se aprende a aumentar o disminuir el valor de una variable en 1 de forma rápida usando operadores especiales. Se entiende la diferencia entre escribir el código de forma tradicional y usar los operadores ++ y --.

### Puntos clave explicados

- **Incremento**: Aumentar el valor de una variable en 1.

- **Decremento**: Disminuir el valor de una variable en 1.

- **Forma tradicional de incrementar**: `numero = numero + 1;`

- **Forma abreviada con ++**: `numero++;` (hace lo mismo que la forma tradicional).

- **Forma abreviada con --**: `numero--;` (resta 1 al valor actual).

- **Aplicación múltiple**: Se puede aplicar varias veces para aumentar o disminuir más de una unidad.

- **Solo para números**: Funciona con tipos de datos numéricos (int, double, etc.).

### Ejemplo sencillo

Incremento tradicional vs abreviado:
```java
int numero1 = 0;

// Forma tradicional
numero1 = numero1 + 1;
System.out.println(numero1);  // Imprime: 1

// Forma abreviada (mismo resultado)
numero1 = 0;
numero1++;
System.out.println(numero1);  // Imprime: 1

// Aplicar dos veces
numero1++;
System.out.println(numero1);  // Imprime: 2
```

Decremento:
```java
int numero1 = 5;
int numero2 = 5;

// Decrementar una vez
numero1--;
System.out.println(numero1);  // Imprime: 4

// Decrementar dos veces
numero2--;
numero2--;
System.out.println(numero2);  // Imprime: 3
```

### Funciones, palabras clave o elementos importantes

- **++**: Operador de incremento. Suma 1 al valor de la variable.

- **--**: Operador de decremento. Resta 1 al valor de la variable.

- **Incremento**: Acción de aumentar un valor en 1.

- **Decremento**: Acción de disminuir un valor en 1.

- **Forma abreviada**: Manera más corta de escribir operaciones comunes.

- **Aplicación sucesiva**: Usar el operador varias veces para incrementar/decrementar más de 1.

### Resumen final en pocas palabras

Los operadores ++ y -- son formas abreviadas de aumentar o disminuir una variable en 1. Son más rápidos de escribir que la forma tradicional y se usan frecuentemente en programación, especialmente en ciclos y contadores.

---

## LECCIÓN 15: OPERADOR CONDICIONAL

### ¿Qué se aprende en esta lección?

En esta lección se aprende a usar el operador condicional (también llamado operador ternario) que permite evaluar una condición y elegir entre dos resultados posibles en una sola línea de código.

### Puntos clave explicados

- **Operador condicional**: Permite tomar decisiones en una sola línea de código.

- **Estructura**: `condición ? resultado_si_verdadero : resultado_si_falso`

- **Tres partes**:
  1. Expresión a evaluar (comparación)
  2. Resultado si la condición es verdadera (después de ?)
  3. Resultado si la condición es falsa (después de :)

- **Símbolo ?**: Separa la condición del resultado verdadero.

- **Símbolo :**: Separa el resultado verdadero del resultado falso.

- **Almacenar resultado**: El resultado se puede guardar en una variable.

### Ejemplo sencillo

```java
int numero1 = 6;
int numero2 = 5;
String respuesta;

// ¿número1 es mayor que número2?
respuesta = numero1 > numero2 ? "es mayor" : "es menor";
System.out.println(respuesta);  // Imprime: es mayor

// Cambiar valores
numero1 = 6;
numero2 = 10;
respuesta = numero1 > numero2 ? "es mayor" : "es menor";
System.out.println(respuesta);  // Imprime: es menor
```

Explicación paso a paso:
1. Se evalúa: `numero1 > numero2` (¿6 es mayor que 5?)
2. Como es verdadero, se toma: `"es mayor"`
3. El texto se guarda en la variable `respuesta`
4. Se imprime: "es mayor"

### Funciones, palabras clave o elementos importantes

- **?**: Símbolo de interrogación. Separa la condición del resultado para true.

- **:**: Dos puntos. Separa el resultado true del resultado false.

- **Operador ternario**: Otro nombre para el operador condicional (tiene tres partes).

- **Condición**: Expresión que se evalúa como verdadero o falso.

- **Expresión verdadera**: Lo que se ejecuta si la condición es true.

- **Expresión falsa**: Lo que se ejecuta si la condición es false.

### Resumen final en pocas palabras

El operador condicional permite escribir decisiones simples en una sola línea. Evalúa una condición y devuelve uno de dos valores posibles. Es una forma compacta de escribir decisiones que más adelante se podrán hacer con estructuras if-else más complejas.

---

## LECCIÓN 16: CONCATENACIÓN

### ¿Qué se aprende en esta lección?

En esta lección se aprende a unir o combinar textos y valores usando el símbolo +. La concatenación permite crear mensajes personalizados mezclando texto fijo con variables, incluso de diferentes tipos de datos.

### Puntos clave explicados

- **Concatenación**: Unir o combinar varios textos o valores en uno solo.

- **Símbolo +**: Se usa para concatenar (unir) strings.

- **Mezclar tipos de datos**: Se puede concatenar String con int, double, etc.

- **Espacios**: Se deben agregar manualmente en el texto para que la salida se vea bien.

- **Múltiples concatenaciones**: Se pueden unir varios elementos en una sola línea.

- **Variables y texto fijo**: Se puede combinar texto directo (entre comillas) con variables.

### Ejemplo sencillo

```java
String nombre = "Victor";
String profesion = "desarrollador de sistemas";
int edad = 39;

// Concatenar variables con texto
System.out.println("Mi nombre es " + nombre);
// Imprime: Mi nombre es Victor

// Concatenar múltiples elementos
System.out.println("Mi nombre es " + nombre + " y mi profesión es " + profesion);
// Imprime: Mi nombre es Victor y mi profesión es desarrollador de sistemas

// Concatenar String con int
System.out.println("Mi nombre es " + nombre + " y mi profesión es " + profesion + " y mi edad es " + edad + " años");
// Imprime: Mi nombre es Victor y mi profesión es desarrollador de sistemas y mi edad es 39 años
```

### Funciones, palabras clave o elementos importantes

- **+**: Operador de concatenación. Une strings y otros valores.

- **String**: Tipo de dato para texto o cadenas de caracteres.

- **Concatenar**: Unir o combinar textos.

- **Comillas dobles ""**: Encierran texto literal que se quiere mostrar.

- **Espacios**: Caracteres en blanco que se agregan para separar palabras.

- **Mezcla de tipos**: Java convierte automáticamente números a texto al concatenar.

### Resumen final en pocas palabras

La concatenación permite unir texto y variables usando el símbolo +. Es muy útil para crear mensajes personalizados que combinen información fija con datos variables. Java permite mezclar diferentes tipos de datos al concatenar, convirtiendo todo a texto automáticamente.
