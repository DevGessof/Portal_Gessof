# JAVA BÁSICO - SECCIÓN 7
# LECCIÓN 21: CONVERSIÓN DE TIPOS DE DATOS - PARTE 2

---

### ¿Qué se aprende en esta lección?

En esta lección se comprende la diferencia entre tipos de datos primitivos y tipos de datos de objeto (clases envolventes o wrappers). Se aprende que existen dos formas de trabajar con datos: usando tipos primitivos (int, double, boolean) o usando sus equivalentes en forma de clases (Integer, Double, Boolean).

### Puntos clave explicados

- **Tipos primitivos**: Son los tipos básicos de Java (int, double, boolean, byte, etc.).

- **Tipos objeto (Wrappers)**: Son clases que envuelven los tipos primitivos (Integer, Double, Boolean, Byte, etc.).

- **Diferencia visual**: Los tipos objeto comienzan con mayúscula, los primitivos con minúscula.

- **Ambos funcionan igual**: Se pueden usar indistintamente para crear variables.

- **Ventaja de los objetos**: Tienen métodos adicionales como parse para conversión.

- **Ejemplos de equivalencias**:
  - int ↔ Integer
  - double ↔ Double
  - boolean ↔ Boolean

### Ejemplo sencillo

Tipos primitivos vs tipos objeto:

```java
// TIPO PRIMITIVO
int numeroEntero1 = 15;
double variableDouble1 = 15.0;
boolean verdad1 = true;

// TIPO OBJETO (Wrapper)
Integer numeroEntero2 = 15;
Double variableDouble2 = 15.0;
Boolean verdad2 = false;

// Ambas formas funcionan y almacenan el mismo tipo de dato
```

Comparación lado a lado:

| Tipo Primitivo | Tipo Objeto (Wrapper) |
|----------------|----------------------|
| int            | Integer              |
| double         | Double               |
| boolean        | Boolean              |
| byte           | Byte                 |
| float          | Float                |
| char           | Character            |

### Funciones, palabras clave o elementos importantes

- **Tipo primitivo**: Tipo de dato básico de Java (int, double, boolean, etc.).

- **Tipo objeto**: Clase que envuelve un tipo primitivo (Integer, Double, Boolean, etc.).

- **Wrapper**: Palabra en inglés que significa "envolvente", se refiere a las clases objeto.

- **Integer**: Versión objeto del tipo int.

- **Double**: Versión objeto del tipo double.

- **Boolean**: Versión objeto del tipo boolean.

- **Mayúscula inicial**: Los tipos objeto siempre empiezan con mayúscula.

- **Métodos adicionales**: Los tipos objeto tienen funcionalidades extras como parse.

### Resumen final en pocas palabras

Java ofrece dos formas de trabajar con datos: tipos primitivos (int, double, boolean) y tipos objeto o wrappers (Integer, Double, Boolean). Los tipos objeto son clases que "envuelven" los primitivos y ofrecen métodos adicionales, especialmente útiles para conversión de datos. Ambas formas funcionan para almacenar valores, pero los wrappers son necesarios para operaciones avanzadas.

---

