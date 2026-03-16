# JAVA BÁSICO - SECCIÓN 12
# LECCIÓN 38: CLASES - PARTE 3 (FINAL DEL CURSO)

---

### ¿Qué se aprende en esta lección?

En esta lección final se aprende a usar clases de un archivo Java en otro archivo diferente mediante importación. Se completa el concepto de programación orientada a objetos trabajando con múltiples archivos organizados.

### Puntos clave explicados

- **import**: Palabra clave para usar clases de otros archivos.

- **Archivos separados**: Las clases pueden estar en diferentes archivos .java.

- **Organización**: Permite mantener el código organizado en múltiples archivos.

- **Paquetes**: Carpetas que agrupan archivos Java relacionados.

- **Reutilización entre archivos**: Una clase puede usarse en múltiples archivos.

- **Sintaxis de importación**:
  ```
  import nombrePaquete.NombreArchivo;
  ```

- **Acceso completo**: Después de importar, se accede a clases, atributos y métodos.

### Ejemplo sencillo

**Archivo: EjemplosClases.java**
```java
package aprendizaje;

public class EjemplosClases {
    // Este archivo solo contiene la clase
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

**Archivo: Tarea.java** (importa y usa la clase Persona)
```java
package aprendizaje;

import aprendizaje.EjemplosClases;  // Importar el archivo

public class Tarea {
    
    public static void main(String[] args) {
        // Usar la clase Persona del otro archivo
        Persona per1 = new Persona();
        
        // Asignar valores a los atributos
        per1.nombre = "Víctor";
        per1.edad = 40;
        per1.telefono = "942366999";
        
        // Llamar al método de la clase Persona
        Persona.saludo("Víctor");
    }
}
```

Salida:
```
Hola, qué tal Víctor
```

Estructura de archivos:

```
Proyecto Java
└── aprendizaje (paquete)
    ├── EjemplosClases.java
    │   └── class Persona
    └── Tarea.java
        └── main() - usa Persona
```

### Funciones, palabras clave o elementos importantes

- **import**: Importa clases de otros archivos.

- **package**: Define a qué paquete pertenece un archivo.

- **nombrePaquete.NombreArchivo**: Ruta completa para importar.

- **Organización**: Separar código en múltiples archivos.

- **Reutilización**: Una clase puede usarse en muchos archivos diferentes.

- **Punto y coma (;)**: Termina la sentencia import.

- **Acceso después de import**: Se puede usar todo lo público del archivo importado.

### Resumen final en pocas palabras

Los archivos Java pueden importarse entre sí usando `import nombrePaquete.NombreArchivo;`. Esto permite organizar el código en múltiples archivos y reutilizar clases en diferentes partes del proyecto. Es la base de la programación orientada a objetos en Java para proyectos más grandes.

---

## 🎓 FELICITACIONES - FIN DEL CURSO BÁSICO DE JAVA

Has completado el curso básico de Java aprendiendo:
- Variables y tipos de datos
- Operadores y expresiones
- Estructuras condicionales (if, else, switch)
- Bucles (while, do-while, for)
- Vectores y matrices
- Métodos con y sin parámetros
- Clases y programación orientada a objetos

¡Ahora tienes las bases para continuar aprendiendo Java a nivel intermedio y avanzado!
