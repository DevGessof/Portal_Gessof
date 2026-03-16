# JAVA BÁSICO - SECCIÓN 10
# LECCIÓN 28: ESTRUCTURA CÍCLICA DO WHILE

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende la estructura do-while, que es similar a while pero con una diferencia clave: el código se ejecuta AL MENOS UNA VEZ antes de evaluar la condición. Se comprende cuándo es útil usar do-while en lugar de while.

### Puntos clave explicados

- **do-while**: Ejecuta el código primero y luego evalúa la condición.

- **Diferencia con while**: 
  - while: evalúa condición → ejecuta código
  - do-while: ejecuta código → evalúa condición

- **Garantía de ejecución**: El código dentro del do-while se ejecuta SÍ O SÍ al menos una vez, incluso si la condición es falsa desde el inicio.

- **Sintaxis**:
  ```
  do {
      // código que se ejecuta
  } while (condición);
  ```

- **Punto y coma final**: Importante poner ; después del paréntesis de la condición.

- **Uso práctico**: Útil cuando necesitas ejecutar código al menos una vez, como mostrar un menú o validar entrada.

### Ejemplo sencillo

Comparación entre while y do-while:

```java
public class EstructuraCiclicaDoWhile {
    public static void main(String[] args) {
        int edad = 30;
        
        // Con do-while
        do {
            System.out.println("Hola");
        } while (edad < 30);
        
        // Salida: Imprime "Hola" una vez
        // Aunque edad NO es menor que 30, se ejecuta una vez
    }
}
```

Si fuera con while:
```java
int edad = 30;

// Con while
while (edad < 30) {
    System.out.println("Hola");
}

// Salida: No imprime nada
// Como edad NO es menor que 30, nunca ejecuta
```

Diferencia clave:
- **do-while**: Ejecuta primero, pregunta después → "Hola" se imprime 1 vez
- **while**: Pregunta primero, ejecuta después → "Hola" NO se imprime

### Funciones, palabras clave o elementos importantes

- **do**: Palabra clave que inicia el bloque de código a ejecutar.

- **while**: Palabra clave que evalúa la condición al final.

- **Ejecución garantizada**: El código se ejecuta al menos una vez, siempre.

- **Evaluación posterior**: La condición se verifica DESPUÉS de ejecutar el código.

- **;**: Punto y coma obligatorio después de while(condición).

- **Primera ejecución**: Ocurre antes de cualquier evaluación de la condición.

### Resumen final en pocas palabras

do-while ejecuta el código primero y luego evalúa la condición, garantizando que el código se ejecute al menos una vez. Es útil cuando necesitas que una acción ocurra siempre antes de decidir si continuar, como mostrar un menú inicial o pedir datos que deben ingresarse al menos una vez.

---

