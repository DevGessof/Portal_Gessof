# JAVA BÁSICO - SECCIÓN 4
# LECCIÓN 16: CONCATENACIÓN

---

### ¿Qué se aprende en esta lección?

En esta lección se aprende a unir o combinar textos y valores usando el símbolo +. La concatenación permite crear mensajes personalizados mezclando texto fijo con variables, incluso de diferentes tipos de datos.

### Puntos clave explicados

- **Concatenación**: Unir o combinar varios textos o valores en uno solo.

- **Símbolo +**: Se usa para concatenar (unir) strings.

- **Mezclar tipos de datos**: Se puede concatenar String con int, double, etc.

- **Espacios**: Se deben agregar manualmente en el texto para que la salida se vea bien.

- **Múltiples concatenaciones**: Se pueden unir varios elementos en una sola línea.

- **Variables y texto fijo**: Se puede combinar texto directo (entre comillas) con variables.

### Ejemplo sencillo

```java
String nombre = "Victor";
String profesion = "desarrollador de sistemas";
int edad = 39;

// Concatenar variables con texto
System.out.println("Mi nombre es " + nombre);
// Imprime: Mi nombre es Victor

// Concatenar múltiples elementos
System.out.println("Mi nombre es " + nombre + " y mi profesión es " + profesion);
// Imprime: Mi nombre es Victor y mi profesión es desarrollador de sistemas

// Concatenar String con int
System.out.println("Mi nombre es " + nombre + " y mi profesión es " + profesion + " y mi edad es " + edad + " años");
// Imprime: Mi nombre es Victor y mi profesión es desarrollador de sistemas y mi edad es 39 años
```

### Funciones, palabras clave o elementos importantes

- **+**: Operador de concatenación. Une strings y otros valores.

- **String**: Tipo de dato para texto o cadenas de caracteres.

- **Concatenar**: Unir o combinar textos.

- **Comillas dobles ""**: Encierran texto literal que se quiere mostrar.

- **Espacios**: Caracteres en blanco que se agregan para separar palabras.

- **Mezcla de tipos**: Java convierte automáticamente números a texto al concatenar.

### Resumen final en pocas palabras

La concatenación permite unir texto y variables usando el símbolo +. Es muy útil para crear mensajes personalizados que combinen información fija con datos variables. Java permite mezclar diferentes tipos de datos al concatenar, convirtiendo todo a texto automáticamente.
