# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 12: MÉTODOS Y CLASES (PROGRAMACIÓN ORIENTADA A OBJETOS)

---

## LECCIÓN 33: MÉTODOS - PARTE 1

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

## LECCIÓN 34: MÉTODOS - PARTE 2

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

## LECCIÓN 35: MÉTODOS - PARTE 3

### ¿Qué se aprende en esta lección?

En esta lección se aprende a crear métodos que devuelven un valor (con return), permitiendo que el método calcule algo y entregue el resultado. Se cambia void por el tipo de dato que se va a retornar.

### Puntos clave explicados

- **return**: Palabra clave que devuelve un valor desde el método.

- **Tipo de retorno**: Se especifica qué tipo de dato devolverá (int, String, double, etc.).

- **No más void**: Cuando un método retorna, se cambia void por el tipo de dato.

- **Cálculos y operaciones**: Útil para métodos que realizan operaciones y devuelven resultados.

- **Uso del resultado**: El valor retornado puede imprimirse, guardarse en una variable o usarse en operaciones.

- **Sintaxis con retorno**:
  ```
  static TipoDato nombreMetodo(parametros) {
      return valor;
  }
  ```

- **Parámetros + retorno**: Un método puede recibir datos Y devolver un resultado.

### Ejemplo sencillo

Método que retorna un valor:

```java
public class EjemplosMetodos {
    
    public static void main(String[] args) {
        // Imprimir directamente el resultado
        System.out.println("La suma de 2 + 4 es igual a " + sumar(2, 4));
    }
    
    static int sumar(int valor1, int valor2) {
        return valor1 + valor2;
    }
}
```

Salida:
```
La suma de 2 + 4 es igual a 6
```

Guardando el resultado en una variable:

```java
public static void main(String[] args) {
    int resultado = sumar(5, 3);
    System.out.println("El resultado es: " + resultado);
}

static int sumar(int valor1, int valor2) {
    return valor1 + valor2;
}
```

Comparación void vs return:

```java
// Sin retorno (void) - solo imprime
static void mostrarSuma(int a, int b) {
    System.out.println(a + b);
}

// Con retorno (int) - devuelve el valor
static int calcularSuma(int a, int b) {
    return a + b;
}

// Uso:
mostrarSuma(2, 3);           // Solo imprime: 5
int total = calcularSuma(2, 3); // Guarda el resultado: 5
```

### Funciones, palabras clave o elementos importantes

- **return**: Devuelve un valor y termina la ejecución del método.

- **Tipo de retorno**: int, double, String, boolean, etc. (reemplaza a void).

- **void**: Usado cuando el método NO retorna nada.

- **Valor de retorno**: El dato que el método envía de vuelta.

- **Operaciones**: Se pueden hacer cálculos directamente en el return.

- **Asignación**: El valor retornado puede guardarse en una variable.

- **Impresión directa**: Se puede imprimir el resultado del método directamente.

### Resumen final en pocas palabras

Los métodos con return devuelven un valor calculado. Se especifica el tipo de retorno (int, String, etc.) en lugar de void. La palabra return envía el resultado de vuelta. Esto permite usar el método para obtener valores calculados y usarlos en el programa.

---

## LECCIÓN 36: CLASES - PARTE 1

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

## LECCIÓN 37: CLASES - PARTE 2

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

## LECCIÓN 38: CLASES - PARTE 3 (FINAL DEL CURSO)

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
