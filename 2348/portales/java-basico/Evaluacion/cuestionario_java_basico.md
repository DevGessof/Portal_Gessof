# CUESTIONARIO - CURSO JAVA BÁSICO
# 15 Preguntas de Selección Múltiple

---

## NIVEL FÁCIL (Preguntas 1-5)

### PREGUNTA 1
**¿Qué es el JDK en Java?**

a) Un editor de texto para escribir código  
b) El compilador que interpreta el código Java  
c) Una librería para crear interfaces gráficas  
d) Un navegador web para ejecutar aplicaciones Java

**RESPUESTA CORRECTA:** b) El compilador que interpreta el código Java

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 2) se explica que "JDK es el compilador de Java: Es un software que convierte el código que escribimos en instrucciones que la computadora puede ejecutar."
- ❌ **a) es FALSA** porque el JDK no es un editor de texto. El editor es el IDE Apache NetBeans.
- ❌ **c) es FALSA** porque el JDK no es una librería, es el Kit de Desarrollo de Java completo.
- ❌ **d) es FALSA** porque el JDK no es un navegador, es una herramienta de desarrollo.

---

### PREGUNTA 2
**¿Cuál es el tipo de dato correcto para almacenar el valor "Hola Mundo"?**

a) int  
b) double  
c) String  
d) boolean

**RESPUESTA CORRECTA:** c) String

**EXPLICACIÓN:**
- ✅ **c) es CORRECTA** porque en el curso (Lección 9) se explica que String es el tipo de dato para cadenas de texto, y se usa con comillas dobles.
- ❌ **a) es FALSA** porque int es para números enteros, no para texto.
- ❌ **b) es FALSA** porque double es para números decimales, no para texto.
- ❌ **d) es FALSA** porque boolean solo acepta true o false, no texto.

---

### PREGUNTA 3
**¿Qué símbolo se usa para escribir comentarios de una sola línea en Java?**

a) /* */  
b) //  
c) #  
d) --

**RESPUESTA CORRECTA:** b) //

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 5) se enseña que // se usa para comentarios de una línea.
- ❌ **a) es FALSA** porque /* */ se usa para comentarios de múltiples líneas, no de una sola.
- ❌ **c) es FALSA** porque # no se usa para comentarios en Java (se usa en otros lenguajes como Python).
- ❌ **d) es FALSA** porque -- no es válido para comentarios en Java (se usa en SQL).

---

### PREGUNTA 4
**¿Cuál comando se usa para imprimir en pantalla CON salto de línea?**

a) System.out.print()  
b) System.out.println()  
c) System.in.read()  
d) Scanner.nextLine()

**RESPUESTA CORRECTA:** b) System.out.println()

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 6) se explica que println() imprime con salto de línea automático.
- ❌ **a) es FALSA** porque print() imprime SIN salto de línea.
- ❌ **c) es FALSA** porque System.in.read() no imprime, sirve para leer entrada.
- ❌ **d) es FALSA** porque Scanner.nextLine() captura datos del teclado, no imprime.

---

### PREGUNTA 5
**¿Qué resultado da la operación: 5 + 3 * 2?**

a) 16  
b) 11  
c) 10  
d) 13

**RESPUESTA CORRECTA:** b) 11

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 11) se explica que la multiplicación tiene prioridad sobre la suma, entonces: 3 * 2 = 6, luego 5 + 6 = 11.
- ❌ **a) es FALSA** porque 16 sería el resultado de (5 + 3) * 2, pero sin paréntesis la multiplicación va primero.
- ❌ **c) es FALSA** porque 10 sería 5 + 3 + 2, ignorando la multiplicación.
- ❌ **d) es FALSA** porque 13 no corresponde a ninguna operación válida con estos números.

---

## NIVEL MEDIO (Preguntas 6-10)

### PREGUNTA 6
**¿Qué método se usa para convertir un String "25" a un número entero?**

a) String.parseInt("25")  
b) Integer.parseInt("25")  
c) Double.parseDouble("25")  
d) convert.toInt("25")

**RESPUESTA CORRECTA:** b) Integer.parseInt("25")

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 20) se explica que Integer.parseInt() convierte String a int.
- ❌ **a) es FALSA** porque String no tiene el método parseInt(), es Integer quien lo tiene.
- ❌ **c) es FALSA** porque Double.parseDouble() convierte a double (decimal), no a int (entero).
- ❌ **d) es FALSA** porque convert.toInt() no existe en Java.

---

### PREGUNTA 7
**En un bucle while, ¿cuándo se evalúa la condición?**

a) Después de ejecutar el código al menos una vez  
b) Al final del bucle, siempre  
c) ANTES de ejecutar el código cada vez  
d) Solo la primera vez que inicia el bucle

**RESPUESTA CORRECTA:** c) ANTES de ejecutar el código cada vez

**EXPLICACIÓN:**
- ✅ **c) es CORRECTA** porque en el curso (Lección 27) se explica que "while evalúa la condición ANTES de ejecutar el código. Si es falsa desde el inicio, el código nunca se ejecuta."
- ❌ **a) es FALSA** porque esa es la característica del do-while, no del while.
- ❌ **b) es FALSA** porque while evalúa ANTES de cada ejecución, no al final.
- ❌ **d) es FALSA** porque evalúa la condición en cada iteración, no solo la primera vez.

---

### PREGUNTA 8
**¿Cuál es la diferencia entre print() y println()?**

a) print() imprime números, println() imprime texto  
b) print() NO hace salto de línea, println() SÍ hace salto de línea  
c) print() es más rápido que println()  
d) Son exactamente lo mismo

**RESPUESTA CORRECTA:** b) print() NO hace salto de línea, println() SÍ hace salto de línea

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 6) se explica claramente esta diferencia.
- ❌ **a) es FALSA** porque ambos pueden imprimir tanto números como texto.
- ❌ **c) es FALSA** porque el curso no menciona diferencias de velocidad, la diferencia es el salto de línea.
- ❌ **d) es FALSA** porque NO son lo mismo, la diferencia está en el salto de línea.

---

### PREGUNTA 9
**¿Qué estructura se debe usar cuando se tienen múltiples condiciones específicas para evaluar una misma variable?**

a) if - else if  
b) switch  
c) while  
d) for

**RESPUESTA CORRECTA:** b) switch

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 26) se explica que switch es "una alternativa más limpia a múltiples if-else cuando se compara una variable contra muchos valores específicos."
- ❌ **a) es FALSA** porque aunque if-else if funciona, switch es más apropiado y limpio para casos específicos.
- ❌ **c) es FALSA** porque while es una estructura cíclica (bucle), no condicional.
- ❌ **d) es FALSA** porque for es una estructura cíclica (bucle), no condicional.

---

### PREGUNTA 10
**En un vector, ¿desde qué posición comienzan los índices?**

a) Desde 1  
b) Desde 0  
c) Desde -1  
d) Depende del tamaño del vector

**RESPUESTA CORRECTA:** b) Desde 0

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 30) se explica explícitamente que "las posiciones del vector comienzan desde 0 (no desde 1)."
- ❌ **a) es FALSA** porque los índices NO comienzan en 1, esa es una confusión común.
- ❌ **c) es FALSA** porque Java no usa índices negativos como otros lenguajes.
- ❌ **d) es FALSA** porque SIEMPRE comienzan desde 0, independientemente del tamaño.

---

## NIVEL DIFÍCIL (Preguntas 11-15)

### PREGUNTA 11
**¿Cuál es la principal diferencia entre do-while y while?**

a) do-while es más rápido que while  
b) do-while ejecuta el código AL MENOS UNA VEZ antes de evaluar la condición  
c) do-while solo se usa con números enteros  
d) while puede tener múltiples condiciones, do-while solo una

**RESPUESTA CORRECTA:** b) do-while ejecuta el código AL MENOS UNA VEZ antes de evaluar la condición

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 28) se explica que "esta estructura cíclica do-while si o si se va a ejecutar en una primera vez, se cumpla o no se cumpla la condición."
- ❌ **a) es FALSA** porque el curso no menciona diferencias de velocidad entre ambas estructuras.
- ❌ **c) es FALSA** porque do-while puede usarse con cualquier tipo de condición, no solo números enteros.
- ❌ **d) es FALSA** porque ambos pueden tener condiciones complejas con operadores lógicos.

---

### PREGUNTA 12
**En una matriz de 3x3, ¿cómo se accede al elemento en la fila 2, columna 1?**

a) matriz[1][2]  
b) matriz[2][1]  
c) matriz[3][2]  
d) matriz[1,2]

**RESPUESTA CORRECTA:** b) matriz[2][1]

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 32) se explica que "el primer índice = fila, segundo índice = columna" y que los índices comienzan en 0, por lo que fila 2, columna 1 es [2][1].
- ❌ **a) es FALSA** porque [1][2] sería fila 1, columna 2, el orden está invertido.
- ❌ **c) es FALSA** porque [3][2] sería fila 3, columna 2, y además una matriz 3x3 tiene índices 0-2, no llega a 3.
- ❌ **d) es FALSA** porque en Java se usan corchetes separados [fila][columna], no comas.

---

### PREGUNTA 13
**¿Qué significa que un método tenga "void" en su declaración?**

a) Que el método está vacío y no tiene código  
b) Que el método NO devuelve ningún valor  
c) Que el método puede recibir cualquier tipo de parámetro  
d) Que el método es privado

**RESPUESTA CORRECTA:** b) Que el método NO devuelve ningún valor

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 33) se explica que "void: Indica que el método NO devuelve ningún valor."
- ❌ **a) es FALSA** porque void no significa que esté vacío, puede tener código completo, solo indica que no retorna valor.
- ❌ **c) es FALSA** porque void se refiere al retorno, no a los parámetros que recibe.
- ❌ **d) es FALSA** porque void no tiene relación con la visibilidad (público/privado) del método.

---

### PREGUNTA 14
**¿Para qué sirve la palabra clave "return" en un método?**

a) Para reiniciar el método desde el principio  
b) Para devolver un valor y terminar la ejecución del método  
c) Para repetir el método automáticamente  
d) Para importar librerías necesarias

**RESPUESTA CORRECTA:** b) Para devolver un valor y terminar la ejecución del método

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 35) se explica que "return: Devuelve un valor desde el método y termina su ejecución."
- ❌ **a) es FALSA** porque return no reinicia el método, lo termina definitivamente.
- ❌ **c) es FALSA** porque return no repite el método, lo finaliza.
- ❌ **d) es FALSA** porque para importar librerías se usa "import", no "return".

---

### PREGUNTA 15
**¿Qué hace la palabra clave "import" en Java?**

a) Importa datos desde un archivo de texto  
b) Permite usar clases de otros archivos o paquetes  
c) Crea una copia de seguridad del proyecto  
d) Convierte el código a un ejecutable

**RESPUESTA CORRECTA:** b) Permite usar clases de otros archivos o paquetes

**EXPLICACIÓN:**
- ✅ **b) es CORRECTA** porque en el curso (Lección 38) se explica que "import: Palabra clave para usar clases de otros archivos" y se muestra el ejemplo de importar clases entre archivos Java.
- ❌ **a) es FALSA** porque import no lee archivos de texto, importa clases de Java.
- ❌ **c) es FALSA** porque import no tiene relación con copias de seguridad.
- ❌ **d) es FALSA** porque import no compila ni convierte a ejecutable, solo permite usar clases externas.

---

## RESUMEN DE RESPUESTAS CORRECTAS

1. b) El compilador que interpreta el código Java
2. c) String
3. b) //
4. b) System.out.println()
5. b) 11
6. b) Integer.parseInt("25")
7. c) ANTES de ejecutar el código cada vez
8. b) print() NO hace salto de línea, println() SÍ hace salto de línea
9. b) switch
10. b) Desde 0
11. b) do-while ejecuta el código AL MENOS UNA VEZ antes de evaluar la condición
12. b) matriz[2][1]
13. b) Que el método NO devuelve ningún valor
14. b) Para devolver un valor y terminar la ejecución del método
15. b) Permite usar clases de otros archivos o paquetes

---

## PUNTUACIÓN

**Nivel Fácil:** 5 preguntas × 1 punto = 5 puntos  
**Nivel Medio:** 5 preguntas × 2 puntos = 10 puntos  
**Nivel Difícil:** 5 preguntas × 3 puntos = 15 puntos  

**TOTAL:** 30 puntos posibles

**Escala de calificación:**
- 27-30 puntos: Excelente dominio del curso
- 21-26 puntos: Buen conocimiento
- 15-20 puntos: Conocimiento básico
- 0-14 puntos: Necesita repasar el curso
