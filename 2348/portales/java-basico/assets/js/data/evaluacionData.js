/**
 * EVALUACION DATA - PORTAL JAVA BÁSICO
 * =====================================
 * Datos del cuestionario de evaluación.
 * 15 preguntas con 4 alternativas, sin letras fijas.
 * Las letras A-B-C-D se asignan aleatoriamente en cada intento.
 *
 * Aprobación: 80% de 30 puntos = 24 puntos mínimos.
 * Escala:
 *   Fácil  → 5 preguntas × 1 punto  =  5 pts
 *   Medio  → 5 preguntas × 2 puntos = 10 pts
 *   Difícil→ 5 preguntas × 3 puntos = 15 pts
 */

const EVALUACION_DATA = {
    puntajeTotal: 30,
    puntajeAprobacion: 24, // 80% de 30
    preguntas: [

        // ===== NIVEL FÁCIL (1 punto c/u) =====
        {
            id: 1,
            nivel: 'facil',
            puntos: 1,
            pregunta: '¿Qué es el JDK en Java?',
            opciones: [
                {
                    texto: 'El compilador que interpreta el código Java',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 2) se explica que "JDK es el compilador de Java: Es un software que convierte el código que escribimos en instrucciones que la computadora puede ejecutar."'
                },
                {
                    texto: 'Un editor de texto para escribir código',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque el JDK no es un editor de texto. El editor es el IDE Apache NetBeans.'
                },
                {
                    texto: 'Una librería para crear interfaces gráficas',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque el JDK no es una librería, es el Kit de Desarrollo de Java completo.'
                },
                {
                    texto: 'Un navegador web para ejecutar aplicaciones Java',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque el JDK no es un navegador, es una herramienta de desarrollo.'
                }
            ]
        },
        {
            id: 2,
            nivel: 'facil',
            puntos: 1,
            pregunta: '¿Cuál es el tipo de dato correcto para almacenar el valor "Hola Mundo"?',
            opciones: [
                {
                    texto: 'String',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 9) se explica que String es el tipo de dato para cadenas de texto, y se usa con comillas dobles.'
                },
                {
                    texto: 'int',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque int es para números enteros, no para texto.'
                },
                {
                    texto: 'double',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque double es para números decimales, no para texto.'
                },
                {
                    texto: 'boolean',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque boolean solo acepta true o false, no texto.'
                }
            ]
        },
        {
            id: 3,
            nivel: 'facil',
            puntos: 1,
            pregunta: '¿Qué símbolo se usa para escribir comentarios de una sola línea en Java?',
            opciones: [
                {
                    texto: '//',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 5) se enseña que // se usa para comentarios de una línea.'
                },
                {
                    texto: '/* */',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque /* */ se usa para comentarios de múltiples líneas, no de una sola.'
                },
                {
                    texto: '#',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque # no se usa para comentarios en Java (se usa en otros lenguajes como Python).'
                },
                {
                    texto: '--',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque -- no es válido para comentarios en Java (se usa en SQL).'
                }
            ]
        },
        {
            id: 4,
            nivel: 'facil',
            puntos: 1,
            pregunta: '¿Cuál comando se usa para imprimir en pantalla CON salto de línea?',
            opciones: [
                {
                    texto: 'System.out.println()',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 6) se explica que println() imprime con salto de línea automático.'
                },
                {
                    texto: 'System.out.print()',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque print() imprime SIN salto de línea.'
                },
                {
                    texto: 'System.in.read()',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque System.in.read() no imprime, sirve para leer entrada.'
                },
                {
                    texto: 'Scanner.nextLine()',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque Scanner.nextLine() captura datos del teclado, no imprime.'
                }
            ]
        },
        {
            id: 5,
            nivel: 'facil',
            puntos: 1,
            pregunta: '¿Qué resultado da la operación: 5 + 3 * 2?',
            opciones: [
                {
                    texto: '11',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 11) se explica que la multiplicación tiene prioridad sobre la suma, entonces: 3 * 2 = 6, luego 5 + 6 = 11.'
                },
                {
                    texto: '16',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque 16 sería el resultado de (5 + 3) * 2, pero sin paréntesis la multiplicación va primero.'
                },
                {
                    texto: '10',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque 10 sería 5 + 3 + 2, ignorando la multiplicación.'
                },
                {
                    texto: '13',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque 13 no corresponde a ninguna operación válida con estos números.'
                }
            ]
        },

        // ===== NIVEL MEDIO (2 puntos c/u) =====
        {
            id: 6,
            nivel: 'medio',
            puntos: 2,
            pregunta: '¿Qué método se usa para convertir un String "25" a un número entero?',
            opciones: [
                {
                    texto: 'Integer.parseInt("25")',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 20) se explica que Integer.parseInt() convierte String a int.'
                },
                {
                    texto: 'String.parseInt("25")',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque String no tiene el método parseInt(), es Integer quien lo tiene.'
                },
                {
                    texto: 'Double.parseDouble("25")',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque Double.parseDouble() convierte a double (decimal), no a int (entero).'
                },
                {
                    texto: 'convert.toInt("25")',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque convert.toInt() no existe en Java.'
                }
            ]
        },
        {
            id: 7,
            nivel: 'medio',
            puntos: 2,
            pregunta: 'En un bucle while, ¿cuándo se evalúa la condición?',
            opciones: [
                {
                    texto: 'ANTES de ejecutar el código cada vez',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 27) se explica que "while evalúa la condición ANTES de ejecutar el código. Si es falsa desde el inicio, el código nunca se ejecuta."'
                },
                {
                    texto: 'Después de ejecutar el código al menos una vez',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque esa es la característica del do-while, no del while.'
                },
                {
                    texto: 'Al final del bucle, siempre',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque while evalúa ANTES de cada ejecución, no al final.'
                },
                {
                    texto: 'Solo la primera vez que inicia el bucle',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque evalúa la condición en cada iteración, no solo la primera vez.'
                }
            ]
        },
        {
            id: 8,
            nivel: 'medio',
            puntos: 2,
            pregunta: '¿Cuál es la diferencia entre print() y println()?',
            opciones: [
                {
                    texto: 'print() NO hace salto de línea, println() SÍ hace salto de línea',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 6) se explica claramente esta diferencia.'
                },
                {
                    texto: 'print() imprime números, println() imprime texto',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque ambos pueden imprimir tanto números como texto.'
                },
                {
                    texto: 'print() es más rápido que println()',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque el curso no menciona diferencias de velocidad, la diferencia es el salto de línea.'
                },
                {
                    texto: 'Son exactamente lo mismo',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque NO son lo mismo, la diferencia está en el salto de línea.'
                }
            ]
        },
        {
            id: 9,
            nivel: 'medio',
            puntos: 2,
            pregunta: '¿Qué estructura se debe usar cuando se tienen múltiples condiciones específicas para evaluar una misma variable?',
            opciones: [
                {
                    texto: 'switch',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 26) se explica que switch es "una alternativa más limpia a múltiples if-else cuando se compara una variable contra muchos valores específicos."'
                },
                {
                    texto: 'if - else if',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque aunque if-else if funciona, switch es más apropiado y limpio para casos específicos.'
                },
                {
                    texto: 'while',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque while es una estructura cíclica (bucle), no condicional.'
                },
                {
                    texto: 'for',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque for es una estructura cíclica (bucle), no condicional.'
                }
            ]
        },
        {
            id: 10,
            nivel: 'medio',
            puntos: 2,
            pregunta: 'En un vector, ¿desde qué posición comienzan los índices?',
            opciones: [
                {
                    texto: 'Desde 0',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 30) se explica explícitamente que "las posiciones del vector comienzan desde 0 (no desde 1)."'
                },
                {
                    texto: 'Desde 1',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque los índices NO comienzan en 1, esa es una confusión común.'
                },
                {
                    texto: 'Desde -1',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque Java no usa índices negativos como otros lenguajes.'
                },
                {
                    texto: 'Depende del tamaño del vector',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque SIEMPRE comienzan desde 0, independientemente del tamaño.'
                }
            ]
        },

        // ===== NIVEL DIFÍCIL (3 puntos c/u) =====
        {
            id: 11,
            nivel: 'dificil',
            puntos: 3,
            pregunta: '¿Cuál es la principal diferencia entre do-while y while?',
            opciones: [
                {
                    texto: 'do-while ejecuta el código AL MENOS UNA VEZ antes de evaluar la condición',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 28) se explica que "esta estructura cíclica do-while si o si se va a ejecutar en una primera vez, se cumpla o no se cumpla la condición."'
                },
                {
                    texto: 'do-while es más rápido que while',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque el curso no menciona diferencias de velocidad entre ambas estructuras.'
                },
                {
                    texto: 'do-while solo se usa con números enteros',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque do-while puede usarse con cualquier tipo de condición, no solo números enteros.'
                },
                {
                    texto: 'while puede tener múltiples condiciones, do-while solo una',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque ambos pueden tener condiciones complejas con operadores lógicos.'
                }
            ]
        },
        {
            id: 12,
            nivel: 'dificil',
            puntos: 3,
            pregunta: 'En una matriz de 3x3, ¿cómo se accede al elemento en la fila 2, columna 1?',
            opciones: [
                {
                    texto: 'matriz[2][1]',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 32) se explica que "el primer índice = fila, segundo índice = columna" y que los índices comienzan en 0, por lo que fila 2, columna 1 es [2][1].'
                },
                {
                    texto: 'matriz[1][2]',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque [1][2] sería fila 1, columna 2, el orden está invertido.'
                },
                {
                    texto: 'matriz[3][2]',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque [3][2] sería fila 3, columna 2, y además una matriz 3x3 tiene índices 0-2, no llega a 3.'
                },
                {
                    texto: 'matriz[1,2]',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque en Java se usan corchetes separados [fila][columna], no comas.'
                }
            ]
        },
        {
            id: 13,
            nivel: 'dificil',
            puntos: 3,
            pregunta: '¿Qué significa que un método tenga "void" en su declaración?',
            opciones: [
                {
                    texto: 'Que el método NO devuelve ningún valor',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 33) se explica que "void: Indica que el método NO devuelve ningún valor."'
                },
                {
                    texto: 'Que el método está vacío y no tiene código',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque void no significa que esté vacío, puede tener código completo, solo indica que no retorna valor.'
                },
                {
                    texto: 'Que el método puede recibir cualquier tipo de parámetro',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque void se refiere al retorno, no a los parámetros que recibe.'
                },
                {
                    texto: 'Que el método es privado',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque void no tiene relación con la visibilidad (público/privado) del método.'
                }
            ]
        },
        {
            id: 14,
            nivel: 'dificil',
            puntos: 3,
            pregunta: '¿Para qué sirve la palabra clave "return" en un método?',
            opciones: [
                {
                    texto: 'Para devolver un valor y terminar la ejecución del método',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 35) se explica que "return: Devuelve un valor desde el método y termina su ejecución."'
                },
                {
                    texto: 'Para reiniciar el método desde el principio',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque return no reinicia el método, lo termina definitivamente.'
                },
                {
                    texto: 'Para repetir el método automáticamente',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque return no repite el método, lo finaliza.'
                },
                {
                    texto: 'Para importar librerías necesarias',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque para importar librerías se usa "import", no "return".'
                }
            ]
        },
        {
            id: 15,
            nivel: 'dificil',
            puntos: 3,
            pregunta: '¿Qué hace la palabra clave "import" en Java?',
            opciones: [
                {
                    texto: 'Permite usar clases de otros archivos o paquetes',
                    esCorrecta: true,
                    explicacion: 'es CORRECTA porque en el curso (Lección 38) se explica que "import: Palabra clave para usar clases de otros archivos" y se muestra el ejemplo de importar clases entre archivos Java.'
                },
                {
                    texto: 'Importa datos desde un archivo de texto',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque import no lee archivos de texto, importa clases de Java.'
                },
                {
                    texto: 'Crea una copia de seguridad del proyecto',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque import no tiene relación con copias de seguridad.'
                },
                {
                    texto: 'Convierte el código a un ejecutable',
                    esCorrecta: false,
                    explicacion: 'es FALSA porque import no compila ni convierte a ejecutable, solo permite usar clases externas.'
                }
            ]
        }
    ]
};
