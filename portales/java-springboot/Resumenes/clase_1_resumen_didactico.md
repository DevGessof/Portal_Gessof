# RESUMEN DIDÁCTICO - CLASE 1: Introducción a Java y Spring Boot

## 1) TÍTULO DEL TEMA
**Introducción a Java, Spring Boot y Programación Orientada a Objetos**

---

## 2) EXPLICACIÓN SENCILLA

Esta clase es una introducción general al mundo de Java y Spring Boot. Imagina que Java es como el idioma que usamos para darle instrucciones a la computadora, y Spring Boot es como un asistente que hace que escribir esas instrucciones sea mucho más fácil y rápido.

**¿Qué es Java?**
Java es un lenguaje de programación que se usa muchísimo en empresas (especialmente bancos y aseguradoras) porque es:
- **Seguro**: Limpia su memoria automáticamente y tiene validaciones
- **Portable**: Escribes el código una vez y funciona en Windows, Mac, Linux, la nube, etc.
- **Estable**: Por eso los bancos lo usan
- **El segundo lenguaje más usado del mundo** (compite con Python)

**¿Qué es Spring Boot?**
Spring Boot es un framework (una herramienta) que simplifica muchísimo trabajar con Java. Antes de Spring Boot, configurar un proyecto Java era muy complicado y tenía muchas dependencias difíciles de manejar. Spring Boot automatiza todo eso.

**¿Dónde se usa?**
- Microservicios (pequeños servicios independientes)
- Aplicaciones bancarias
- Sistemas de seguros
- Aplicaciones en la nube (AWS, Azure, Google Cloud)
- Desarrollo Android
- APIs e integraciones

---

## 3) CONCEPTOS CLAVE

### Java
- **Lenguaje orientado a objetos**: Organiza el código usando objetos (como piezas de Lego que puedes reutilizar)
- **Portable/Multiplataforma**: Funciona en cualquier sistema operativo sin modificar el código
- **Máquina Virtual (JVM)**: Java no se ejecuta directamente en el sistema operativo, sino en una "máquina virtual" que hace que sea portable
- **Versión estable actual**: Java 17 (aunque ya existe Java 21 y Java 25)
- **Recolección de memoria automática**: Java limpia la memoria por ti

### Spring Boot
- **Framework**: Herramienta construida sobre Java que simplifica el desarrollo
- **Automatiza configuraciones**: Ya no tienes que hacer configuraciones complicadas manualmente
- **Gestión de dependencias**: Maneja automáticamente las librerías que necesitas

### Gestores de Dependencias
- **Maven**: El más usado en empresas. Usa un archivo llamado `pom.xml`. Es muy estable.
- **Gradle**: Más rápido, más moderno, usa archivos con extensión `.gradle`. Más común en proyectos pequeños.

### IntelliJ IDEA
- **IDE (Entorno de Desarrollo Integrado)**: Es como Microsoft Word pero para programar
- **Versión Community**: Gratis y completa
- **Ventajas sobre otros IDEs**: Liviano, interfaz intuitiva, integra Git, tiene herramientas de testing

### Programación Orientada a Objetos (POO)
- **Clases**: Son como "moldes" o "plantillas" (ejemplo: Persona)
- **Objetos**: Son instancias creadas a partir de una clase (ejemplo: persona1, persona2)
- **Atributos**: Características de un objeto (ejemplo: nombre, edad)
- **Métodos**: Acciones que puede hacer un objeto (ejemplo: saludar())

### Arquitecturas mencionadas
- **MVC (Modelo-Vista-Controlador)**: Arquitectura tradicional que separa datos, lógica y presentación
- **Hexagonal**: Arquitectura con puertos y adaptadores que invierte dependencias (más moderna)

---

## 4) PASO A PASO (Ejemplo mostrado en clase)

El profesor mostró un ejemplo práctico de POO con dos clases:

**Paso 1: Crear la clase base (Persona)**
```java
public class Persona {
    private String nombre;
    private int edad;
    
    // Constructor
    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Método
    public void saludar() {
        System.out.println("Hola, soy " + nombre + " y tengo " + edad + " años");
    }
}
```

**Paso 2: Crear la clase Empleado que hereda de Persona**
```java
public class Empleado extends Persona {
    private String puesto;
    
    public Empleado(String nombre, int edad, String puesto) {
        super(nombre, edad);  // Llama al constructor de Persona
        this.puesto = puesto;
    }
    
    @Override  // Sobreescribe el método saludar
    public void saludar() {
        super.saludar();  // Llama al saludar de Persona
        System.out.println("y trabajo como " + puesto);
    }
}
```

**Paso 3: Usar el servicio para manejar una lista de personas**
```java
public class PersonaService {
    private List<Persona> personas = new ArrayList<>();
    
    public void listar() {
        for (Persona persona : personas) {
            persona.saludar();
        }
    }
}
```

**Paso 4: Resultado en consola**
Cuando ejecutas el método `listar()`, la consola muestra:
```
Hola, soy Juan y tengo 25 años
Hola, soy María y tengo 30 años y trabajo como Desarrolladora
```

⚠ **Nota del profesor**: Se encontró un pequeño error de espaciado en el output, pero el concepto funciona correctamente.

---

## 5) EJEMPLO EXPLICADO

**Analogía simple de Herencia:**
Piensa en Persona como la "plantilla general" de un ser humano. Empleado es una "versión especializada" de Persona que añade información extra (el puesto de trabajo).

**¿Qué significa `@Override`?**
Es como decir "voy a redefinir este método de mi manera". Empleado tiene su propia versión de `saludar()` que primero hace lo que hace Persona y luego añade información del puesto.

**¿Por qué usar `super`?**
`super` es como decir "llama a la versión de mi clase padre". Es útil cuando no quieres repetir código.

---

## 6) RESUMEN ULTRA CORTO PARA MEMORIZAR

1. **Java**: Lenguaje seguro, portable y orientado a objetos. Versión estable: Java 17
2. **Spring Boot**: Framework que simplifica Java automatizando configuraciones
3. **Maven**: Gestor de dependencias más usado (archivo `pom.xml`)
4. **IntelliJ IDEA**: IDE recomendado (gratis, liviano, intuitivo)
5. **POO**: Clases (moldes) → Objetos (instancias) → Atributos + Métodos
6. **Herencia**: Una clase puede heredar de otra usando `extends`
7. **@Override**: Redefine un método de la clase padre
8. **Se usa en**: Bancos, seguradoras, microservicios, cloud, Android

---

## 7) PREGUNTAS DE REPASO

**1. ¿Por qué Java es considerado un lenguaje portable o multiplataforma?**
<details>
<summary>Ver respuesta</summary>
Porque el código se ejecuta en la Máquina Virtual de Java (JVM), no directamente en el sistema operativo. Esto permite que el mismo código funcione en Windows, Mac, Linux, etc., sin modificaciones.
</details>

**2. ¿Cuál es la diferencia principal entre Maven y Gradle?**
<details>
<summary>Ver respuesta</summary>
Maven es más estable y usado en empresas, usa archivo pom.xml. Gradle es más rápido y moderno, más común en proyectos pequeños.
</details>

**3. ¿Qué problema resuelve Spring Boot?**
<details>
<summary>Ver respuesta</summary>
Simplifica la configuración y gestión de dependencias de Java, que antes era muy complicada. Automatiza configuraciones.
</details>

**4. En POO, ¿qué significa que Empleado "hereda" de Persona?**
<details>
<summary>Ver respuesta</summary>
Que Empleado tiene todos los atributos y métodos de Persona, más los suyos propios. No necesita repetir el código de Persona.
</details>

**5. ¿Qué hace la anotación @Override?**
<details>
<summary>Ver respuesta</summary>
Indica que estás redefiniendo (sobreescribiendo) un método que ya existe en la clase padre con una nueva implementación.
</details>

---

**NOTA IMPORTANTE DEL PROFESOR**: Las dos primeras clases son las más teóricas. A partir de la tercera clase se empezará a programar en conjunto, aplicando todo lo visto aquí.

**HERRAMIENTAS NECESARIAS**:
- IntelliJ IDEA Community (gratis)
- Java 17 (JDK)
- Maven (viene integrado en IntelliJ)

---

*Fin del resumen de Clase 1*
