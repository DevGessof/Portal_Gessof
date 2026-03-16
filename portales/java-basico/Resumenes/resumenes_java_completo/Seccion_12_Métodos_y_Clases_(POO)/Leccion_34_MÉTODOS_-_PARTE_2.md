# JAVA BÁSICO - SECCIÓN 12
# LECCIÓN 34: MÉTODOS - PARTE 2

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a crear métodos que reciben información (parámetros) para trabajar con ella. Los parámetros hacen que los métodos sean más flexibles y puedan adaptarse a diferentes datos sin modificar su código interno.

### Puntos clave explicados

- **Parámetros**: Variables que el método recibe para trabajar con ellas.

- **Información de entrada**: Los datos que se envían al método cuando se llama.

- **Tipo de dato del parámetro**: Se debe especificar qué tipo de dato recibirá (String, int, etc.).

- **Múltiples parámetros**: Un método puede recibir varios parámetros separados por comas.

- **Flexibilidad**: Los parámetros permiten usar el método con diferentes valores sin cambiar su código.

- **Sintaxis con parámetros**:
  ```
  static void nombreMetodo(TipoDato parametro) {
      // usar el parámetro
  }
  ```

- **Llamada con argumentos**: Al llamar al método, se envían los valores entre paréntesis.

### Ejemplo sencillo

Método con un parámetro:

```java
public class EjemplosMetodos {
    
    public static void main(String[] args) {
        mensaje("Este es mi primer método en Java");
    }
    
    static void mensaje(String sTexto) {
        System.out.println(sTexto);
    }
}
```

Salida:
```
Este es mi primer método en Java
```

Método con dos parámetros:

```java
public class EjemplosMetodos {
    
    public static void main(String[] args) {
        mensaje("Solo trabajo en Java", "Víctor");
    }
    
    static void mensaje(String sTexto, String sNombre) {
        System.out.println(sTexto);
        System.out.println(sNombre);
    }
}
```

Salida:
```
Solo trabajo en Java
Víctor
```

Ventaja de los parámetros:
```java
// Mismo método, diferentes valores
mensaje("Hola", "Juan");
mensaje("Bienvenido", "María");
// No hay que modificar el método, solo cambiar los valores al llamarlo
```

### Funciones, palabras clave o elementos importantes

- **Parámetro**: Variable que recibe el método para trabajar.

- **Argumento**: Valor que se envía al método al llamarlo.

- **TipoDato**: Tipo del parámetro (String, int, double, etc.).

- **Nombre del parámetro**: Identificador de la variable dentro del método.

- **Coma (,)**: Separa múltiples parámetros.

- **Llamada**: `nombreMetodo(valor1, valor2);`

- **Flexibilidad**: Cambiar valores sin modificar el código del método.

### Resumen final en pocas palabras

Los parámetros permiten que los métodos reciban información para trabajar. Se declaran especificando tipo y nombre dentro de los paréntesis. Al llamar al método, se envían los valores que se necesitan. Esto hace que los métodos sean flexibles y reutilizables con diferentes datos.

---

