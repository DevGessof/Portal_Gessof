# JAVA BÁSICO - SECCIÓN 2
# LECCIÓN 6: IMPRIMIR EN PANTALLA

---

### ¿Qué se aprende en esta lección?

En esta lección se explica en detalle las diferentes formas de imprimir texto en pantalla usando Java. Se comprende la diferencia entre `print` y `println`, y cómo controlar dónde aparece el texto y el cursor.

### Puntos clave explicados

- **System.out**: Acceso a la librería System para realizar operaciones de salida (imprimir en pantalla).

- **print vs println**: La diferencia principal es el manejo del cursor después de imprimir.

- **print sin ln**: Imprime el texto pero mantiene el cursor en la misma línea.

- **println con ln**: Imprime el texto y mueve el cursor a la siguiente línea.

- **Estructura del código**: Se trabaja dentro del método `public static void main` que está dentro de una clase.

- **Librería System**: Es un conjunto de herramientas disponibles en Java para realizar diferentes operaciones.

### Ejemplo sencillo

Usando `print` (sin salto de línea):
```java
System.out.print("Mi curso es ");
System.out.print("Java");
```
Resultado: `Mi curso es Java` (todo en una línea)

Usando `println` (con salto de línea):
```java
System.out.println("Mi curso es");
System.out.println("Java");
```
Resultado:
```
Mi curso es
Java
```
(Cada texto en una línea diferente)

### Funciones, palabras clave o elementos importantes

- **System**: Librería que contiene recursos para operaciones del sistema.

- **out**: Recurso dentro de System que sirve para salida (output) de datos.

- **print**: Imprime texto en pantalla sin mover el cursor a la siguiente línea.

- **println**: Imprime texto en pantalla y mueve el cursor a la siguiente línea (ln = line, línea).

- **Cursor**: Posición donde aparecerá el siguiente texto que se imprima.

- **Salto de línea**: Acción de mover el cursor a la línea siguiente.

### Resumen final en pocas palabras

Para imprimir en Java se usa `System.out.print()` o `System.out.println()`. La diferencia está en el salto de línea: `print` mantiene el cursor en la misma línea, mientras que `println` lo envía a la siguiente línea después de imprimir.

---

