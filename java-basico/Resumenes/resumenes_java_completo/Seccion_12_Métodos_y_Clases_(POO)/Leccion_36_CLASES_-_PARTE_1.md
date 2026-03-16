# JAVA BÁSICO - SECCIÓN 12
# LECCIÓN 36: CLASES - PARTE 1

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué son las clases, plantillas para crear objetos con atributos (propiedades). Se introduce la programación orientada a objetos creando una clase Persona con características como nombre, edad y teléfono.

### Puntos clave explicados

- **Clase**: Plantilla o molde para crear objetos con características y comportamientos.

- **Programación Orientada a Objetos (POO)**: Paradigma que organiza código en objetos basados en clases.

- **Atributos**: Variables que pertenecen a la clase (nombre, edad, teléfono, etc.).

- **Instanciar**: Crear un objeto a partir de una clase (hacer una copia de la plantilla).

- **new**: Palabra clave para crear un nuevo objeto de una clase.

- **Punto (.)**: Operador para acceder a los atributos del objeto.

- **Múltiples objetos**: Se pueden crear varios objetos de la misma clase.

- **Sintaxis de clase**:
  ```
  class NombreClase {
      // atributos
      TipoDato atributo1;
      TipoDato atributo2;
  }
  ```

### Ejemplo sencillo

Crear una clase y usarla:

```java
public class EjemplosClases {
    
    public static void main(String[] args) {
        // Instanciar (crear objeto de la clase Persona)
        Persona persona1 = new Persona();
        
        // Asignar valores a los atributos
        persona1.nombre = "Víctor";
        persona1.edad = 40;
        persona1.telefono = "123456789";
        
        // Crear segundo objeto
        Persona persona2 = new Persona();
        persona2.nombre = "Carlos";
        persona2.edad = 25;
        persona2.telefono = "987654321";
        
        // Imprimir valores
        System.out.println(persona1.nombre);  // Víctor
        System.out.println(persona2.nombre);  // Carlos
    }
}

// Definición de la clase Persona
class Persona {
    // Atributos
    String nombre;
    int edad;
    String telefono;
}
```

Representación gráfica:

```
Clase Persona (plantilla):
┌─────────────────┐
│ nombre: String  │
│ edad: int       │
│ telefono: String│
└─────────────────┘

persona1 (objeto):        persona2 (objeto):
┌─────────────────┐      ┌─────────────────┐
│ nombre: "Víctor"│      │ nombre: "Carlos"│
│ edad: 40        │      │ edad: 25        │
│ telefono: "123" │      │ telefono: "987" │
└─────────────────┘      └─────────────────┘
```

### Funciones, palabras clave o elementos importantes

- **class**: Palabra clave para definir una clase.

- **Atributos**: Variables dentro de la clase que definen características.

- **new**: Crea un nuevo objeto de la clase.

- **Instanciar**: Acción de crear un objeto a partir de una clase.

- **Objeto**: Instancia específica de una clase con valores propios.

- **.**: Operador punto para acceder a atributos (objeto.atributo).

- **Plantilla**: La clase es un molde, los objetos son copias con datos específicos.

### Resumen final en pocas palabras

Las clases son plantillas que definen la estructura de objetos con atributos (propiedades). Se crean objetos usando `new NombreClase()` y se accede a sus atributos con el operador punto. Cada objeto tiene sus propios valores aunque compartan la misma estructura de la clase.

---

