# JAVA BÁSICO - SECCIÓN 7
# LECCIÓN 22: CONVERSIÓN DE TIPOS DE DATOS - PARTE 3

---

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

