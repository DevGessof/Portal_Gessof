# JAVA BÁSICO - SECCIÓN 4
# LECCIÓN 14: OPERADORES DE INCREMENTO Y DECREMENTO

---

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

