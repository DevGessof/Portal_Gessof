# JAVA BÁSICO - SECCIÓN 4
# LECCIÓN 13: OPERADORES LÓGICOS

---

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

