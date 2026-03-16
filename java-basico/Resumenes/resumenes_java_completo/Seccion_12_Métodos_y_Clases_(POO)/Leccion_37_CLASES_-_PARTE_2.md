# JAVA BÁSICO - SECCIÓN 12
# LECCIÓN 37: CLASES - PARTE 2

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a combinar métodos con clases, creando métodos dentro de una clase y llamándolos desde otra clase. Se entiende cómo una clase puede tener tanto atributos como métodos.

### Puntos clave explicados

- **Métodos en clases**: Una clase puede contener tanto atributos como métodos.

- **Acceso entre clases**: Un método de una clase puede ser llamado desde otra clase.

- **NombreClase.metodo()**: Sintaxis para llamar a un método de otra clase.

- **Organización**: Las clases agrupan datos (atributos) y funciones (métodos) relacionados.

- **static en métodos**: Permite llamar al método sin crear un objeto.

- **Estructura completa de clase**:
  ```
  class NombreClase {
      // Atributos
      // Métodos
  }
  ```

### Ejemplo sencillo

Clase con atributos y método:

```java
public class EjemplosClases {
    
    public static void main(String[] args) {
        // Crear objeto
        Persona persona1 = new Persona();
        persona1.nombre = "Víctor";
        
        // Llamar al método de la clase Persona
        Persona.saludo(persona1.nombre);
    }
}

class Persona {
    // Atributos
    String nombre;
    int edad;
    String telefono;
    
    // Método
    static void saludo(String sNombre) {
        System.out.println("Hola, qué tal " + sNombre);
    }
}
```

Salida:
```
Hola, qué tal Víctor
```

Llamar método directamente desde la clase:

```java
public static void main(String[] args) {
    // Llamar método sin crear objeto (porque es static)
    Persona.saludo("Víctor");
}
```

Estructura completa:

```
Clase Persona:
┌──────────────────────────┐
│ ATRIBUTOS:               │
│   - nombre: String       │
│   - edad: int            │
│   - telefono: String     │
│                          │
│ MÉTODOS:                 │
│   - saludo(String)       │
└──────────────────────────┘
```

### Funciones, palabras clave o elementos importantes

- **Métodos en clases**: Funciones que pertenecen a una clase.

- **NombreClase.metodo()**: Llamar a un método estático de otra clase.

- **static**: Permite usar el método sin crear objetos.

- **Organización**: Agrupar atributos y métodos relacionados en una clase.

- **Acceso**: Usar el nombre de la clase seguido de punto para acceder a métodos.

- **Reutilización**: Los métodos de una clase pueden usarse desde cualquier parte.

### Resumen final en pocas palabras

Las clases pueden contener tanto atributos como métodos. Los métodos static pueden llamarse usando `NombreClase.metodo()` sin necesidad de crear objetos. Esto permite organizar el código agrupando datos y funciones relacionadas en una misma clase.

---

