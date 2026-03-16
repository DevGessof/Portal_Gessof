# RESÚMENES DIDÁCTICOS - JAVA BÁSICO
# SECCIÓN 7: CONVERSIÓN DE TIPOS DE DATOS

---

## LECCIÓN 20: CONVERSIÓN DE TIPOS DE DATOS - PARTE 1

### ¿Qué se aprende en esta lección?

En esta lección se aprende qué es la conversión de tipos de datos y por qué es necesaria. Se introduce el concepto de "parsing" y se muestra cómo convertir texto (String) a números usando la clase Integer y el método parseInt().

### Puntos clave explicados

- **Problema inicial**: Los números entre comillas son tratados como texto, no como números para operaciones matemáticas.

- **Concatenación vs Suma**: 
  - Sin comillas: `120 + 16` = 136 (suma matemática)
  - Con comillas: `"120" + "16"` = "12016" (concatenación de texto)

- **Conversión de datos**: Proceso de cambiar un dato de un tipo a otro (ejemplo: de String a int).

- **Parse**: Método para convertir texto a números.

- **Integer.parseInt()**: Convierte un String que contiene números a un valor int.

- **Sintaxis**: `Integer.parseInt("número")` donde "número" es texto que queremos convertir.

### Ejemplo sencillo

Problema - texto que no suma:
```java
System.out.println(120 + 16);       // Imprime: 136 (suma matemática)
System.out.println("120" + "16");   // Imprime: 12016 (concatenación)
```

Solución - convertir texto a número:
```java
// Convertir String a int para poder sumar
System.out.println(Integer.parseInt("120") + Integer.parseInt("16"));
// Imprime: 136 (ahora sí suma correctamente)
```

Explicación paso a paso:
1. `"120"` es un String (texto)
2. `Integer.parseInt("120")` convierte el texto a número 120
3. Ahora se puede sumar matemáticamente
4. El resultado es 136, no "12016"

### Funciones, palabras clave o elementos importantes

- **Conversión de tipos**: Cambiar un dato de un tipo a otro.

- **Parse**: Analizar y convertir texto a otro tipo de dato.

- **Integer**: Clase envolvente (wrapper) para trabajar con números enteros.

- **parseInt()**: Método que convierte String a int.

- **String entre comillas**: Los números entre comillas " " son tratados como texto.

- **Operación matemática**: Solo funciona con números, no con texto.

- **Concatenación**: Unir textos, se hace con el símbolo + cuando hay Strings.

### Resumen final en pocas palabras

La conversión de tipos de datos es esencial cuando tenemos números almacenados como texto y necesitamos hacer operaciones matemáticas con ellos. El método parseInt() de la clase Integer permite convertir texto numérico a valores enteros reales que pueden sumarse, restarse, etc.

---

## LECCIÓN 21: CONVERSIÓN DE TIPOS DE DATOS - PARTE 2

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

## LECCIÓN 22: CONVERSIÓN DE TIPOS DE DATOS - PARTE 3

### ¿Qué se aprende en esta lección?

En esta lección se practica la conversión de un String a diferentes tipos numéricos usando los métodos parse de las clases wrapper. Se aprende a convertir texto a byte, int, float y double, entendiendo las limitaciones de cada tipo.

### Puntos clave explicados

- **String como origen**: Se parte de un número almacenado como texto.

- **Conversión a diferentes tipos**: Un mismo String puede convertirse a distintos tipos numéricos.

- **Limitaciones de rangos**: Cada tipo tiene un rango máximo y mínimo de valores permitidos.

- **Byte.parseByte()**: Convierte String a byte (rango: -128 a 127).

- **Integer.parseInt()**: Convierte String a int (números enteros más grandes).

- **Float.parseFloat()**: Convierte String a float (números decimales).

- **Double.parseDouble()**: Convierte String a double (números decimales de mayor precisión).

- **Error por desbordamiento**: Si el número excede el límite del tipo, genera error.

### Ejemplo sencillo

Convertir un String a diferentes tipos:

```java
String numero = "90";  // Número almacenado como texto

// Convertir a byte
byte bNumero = Byte.parseByte(numero);
System.out.println(bNumero);  // Imprime: 90

// Convertir a int
int iNumero = Integer.parseInt(numero);
System.out.println(iNumero);  // Imprime: 90

// Convertir a float
float fNumero = Float.parseFloat(numero);
System.out.println(fNumero);  // Imprime: 90.0

// Convertir a double
double dNumero = Double.parseDouble(numero);
System.out.println(dNumero);  // Imprime: 90.0
```

Ejemplo de error por límite:
```java
String numero = "1500";
byte bNumero = Byte.parseByte(numero);  // ERROR - 1500 excede el límite de byte (127)

// Solución: usar String con valor dentro del rango
String numero = "90";
byte bNumero = Byte.parseByte(numero);  // OK - 90 está dentro del rango
```

### Funciones, palabras clave o elementos importantes

- **Byte.parseByte()**: Convierte String a byte (rango: -128 a 127).

- **Integer.parseInt()**: Convierte String a int.

- **Float.parseFloat()**: Convierte String a float.

- **Double.parseDouble()**: Convierte String a double.

- **Rango de valores**: Límite mínimo y máximo que puede almacenar un tipo de dato.

- **Desbordamiento**: Error que ocurre cuando un valor excede el límite del tipo.

- **sout + Tab**: Atajo rápido para escribir System.out.println().

### Resumen final en pocas palabras

Cada clase wrapper ofrece su método parse para convertir String al tipo correspondiente: parseByte(), parseInt(), parseFloat(), parseDouble(). Es importante conocer los límites de cada tipo para evitar errores de desbordamiento. El mismo String puede convertirse a diferentes tipos según la necesidad del programa.

---

## LECCIÓN 23: CONVERSIÓN DE TIPOS DE DATOS - PARTE 4

### ¿Qué se aprende en esta lección?

En esta lección se aprende a concatenar (unir) una variable String con diferentes tipos de datos primitivos. Se descubre que Java permite mezclar String con cualquier tipo de dato (int, float, double, char, boolean) usando el operador +.

### Puntos clave explicados

- **Concatenación universal**: String se puede concatenar con cualquier tipo de dato.

- **Conversión automática**: Java convierte automáticamente los tipos primitivos a String al concatenar.

- **Variables de diferentes tipos**: Se pueden crear múltiples variables de distintos tipos y combinarlas.

- **Tipos primitivos en la lección**:
  - byte (números pequeños)
  - int (números enteros)
  - float (decimales) - requiere 'f' al final
  - double (decimales de mayor precisión)
  - char (un solo carácter) - usa comillas simples ' '
  - boolean (verdadero/falso)

- **Sintaxis especial**:
  - float: termina con 'f' (ejemplo: `15f`)
  - char: usa comillas simples (ejemplo: `'a'`)

### Ejemplo sencillo

Concatenar String con diferentes tipos:

```java
String texto = "Contenido de texto: ";

byte bNumero = 10;
int iNumero = 120;
float fNumero = 15f;
double dNumero = 16.0;
char cadena = 'a';
boolean verdad = true;

// Concatenar con byte
texto = texto + bNumero;
System.out.println(texto);  // Imprime: Contenido de texto: 10

// Concatenar con int
texto = "Contenido de texto: " + iNumero;
System.out.println(texto);  // Imprime: Contenido de texto: 120

// Concatenar con float
texto = "Contenido de texto: " + fNumero;
System.out.println(texto);  // Imprime: Contenido de texto: 15.0

// Concatenar con double
texto = "Contenido de texto: " + dNumero;
System.out.println(texto);  // Imprime: Contenido de texto: 16.0

// Concatenar con char
texto = "Contenido de texto: " + cadena;
System.out.println(texto);  // Imprime: Contenido de texto: a

// Concatenar con boolean
texto = "Contenido de texto: " + verdad;
System.out.println(texto);  // Imprime: Contenido de texto: true
```

### Funciones, palabras clave o elementos importantes

- **byte**: Tipo para números enteros pequeños (-128 a 127).

- **int**: Tipo para números enteros normales.

- **float**: Tipo para números decimales, requiere 'f' al final del valor.

- **double**: Tipo para números decimales de mayor precisión.

- **char**: Tipo para un solo carácter, usa comillas simples ' '.

- **boolean**: Tipo lógico (true o false).

- **Comillas dobles " "**: Para String (texto).

- **Comillas simples ' '**: Para char (un carácter).

- **Concatenación automática**: Java convierte automáticamente tipos primitivos a String al usar +.

### Resumen final en pocas palabras

Java permite concatenar String con cualquier tipo de dato primitivo (byte, int, float, double, char, boolean) usando el operador +. La conversión a texto se hace automáticamente, facilitando la creación de mensajes que mezclan texto con valores numéricos o lógicos. Es importante recordar usar 'f' para float y comillas simples para char.
