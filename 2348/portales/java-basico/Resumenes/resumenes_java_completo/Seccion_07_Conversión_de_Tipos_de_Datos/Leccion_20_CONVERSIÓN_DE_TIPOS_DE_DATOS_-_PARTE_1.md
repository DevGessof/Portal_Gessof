# JAVA BÁSICO - SECCIÓN 7
# LECCIÓN 20: CONVERSIÓN DE TIPOS DE DATOS - PARTE 1

---

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

