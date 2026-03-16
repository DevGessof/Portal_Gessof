# JAVA BÁSICO - SECCIÓN 4
# LECCIÓN 15: OPERADOR CONDICIONAL

---

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

