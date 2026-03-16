# JAVA BÁSICO - SECCIÓN 7
# LECCIÓN 23: CONVERSIÓN DE TIPOS DE DATOS - PARTE 4

---

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
