# JAVA BÁSICO - SECCIÓN 12
# LECCIÓN 33: MÉTODOS - PARTE 1

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué son los métodos, bloques de código reutilizables que realizan tareas específicas. Se crea el primer método simple sin parámetros ni retorno, solo para ejecutar una tarea (imprimir mensajes).

### Puntos clave explicados

- **Método**: Bloque de código que realiza una tarea específica y puede ser llamado múltiples veces.

- **Pertenece a una clase**: Los métodos siempre se crean dentro de una clase.

- **main es un método**: El método principal que hemos usado todo el curso es un ejemplo de método.

- **Método simple**: Puede ejecutar tareas sin necesidad de recibir datos ni devolver valores.

- **static void**: Palabras clave para crear un método que no devuelve valores.

- **Llamar un método**: Se invoca escribiendo su nombre seguido de paréntesis ().

- **Sintaxis básica**:
  ```
  static void nombreMetodo() {
      // código a ejecutar
  }
  ```

- **Reutilización**: Un método puede ser llamado tantas veces como se necesite.

### Ejemplo sencillo

Crear y usar un método simple:

```java
public class EjemplosMetodos {
    
    // Método principal
    public static void main(String[] args) {
        mensaje();  // Llamar al método
    }
    
    // Método personalizado
    static void mensaje() {
        System.out.println("Hola mundo");
        System.out.println("Mi nombre es Víctor");
    }
}
```

Salida:
```
Hola mundo
Mi nombre es Víctor
```

Explicación:
1. Se crea el método `mensaje()` que imprime dos líneas
2. Desde `main()` se llama a `mensaje()`
3. El código dentro de `mensaje()` se ejecuta
4. Se pueden agregar más tareas dentro del método

### Funciones, palabras clave o elementos importantes

- **static**: Palabra clave que permite llamar al método sin crear objetos.

- **void**: Indica que el método NO devuelve ningún valor.

- **nombreMetodo()**: Nombre del método seguido de paréntesis.

- **Llamada de método**: `nombreMetodo();` ejecuta el código del método.

- **Bloque de código**: El contenido entre llaves { } del método.

- **main()**: Método principal desde donde se ejecuta el programa.

- **Reutilización**: Los métodos evitan repetir el mismo código.

### Resumen final en pocas palabras

Los métodos son bloques de código reutilizables que realizan tareas específicas. Se crean con `static void nombreMetodo()` y se llaman escribiendo `nombreMetodo();`. Permiten organizar el código y ejecutar la misma tarea múltiples veces sin repetir código.

---

