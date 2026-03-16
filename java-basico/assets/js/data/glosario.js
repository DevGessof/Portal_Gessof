/**
 * GLOSARIO - PORTAL JAVA BÁSICO
 * Términos organizados por categorías
 */

const GLOSARIO = {
    "Conceptos Básicos": [
        {
            termino: "Variable",
            definicion: "Espacio en memoria con nombre que almacena un valor.",
            proposito: "Almacenar datos que pueden cambiar durante la ejecución del programa."
        },
        {
            termino: "Declaración",
            definicion: "Crear una variable indicando su tipo y nombre.",
            proposito: "Definir el espacio de memoria que usará una variable antes de utilizarla."
        },
        {
            termino: "Inicialización",
            definicion: "Asignar un valor inicial a una variable.",
            proposito: "Dar un valor de partida a una variable al momento de crearla."
        },
        {
            termino: "Compilador",
            definicion: "Programa que traduce código Java a lenguaje que la computadora entiende.",
            proposito: "Convertir el código fuente en bytecode ejecutable por la JVM."
        },
        {
            termino: "JDK",
            definicion: "Kit de desarrollo de Java que incluye el compilador y herramientas.",
            proposito: "Proporcionar todas las herramientas necesarias para desarrollar aplicaciones Java."
        },
        {
            termino: "IDE",
            definicion: "Entorno de desarrollo integrado (NetBeans, Eclipse).",
            proposito: "Facilitar la escritura, compilación y depuración de código Java."
        }
    ],

    "Tipos de Datos": [
        {
            termino: "int",
            definicion: "Tipo de dato numérico entero estándar.",
            proposito: "Almacenar números enteros sin decimales (ej: 42, -10, 0)."
        },
        {
            termino: "double",
            definicion: "Tipo de dato numérico decimal de alta precisión.",
            proposito: "Almacenar números con decimales de alta precisión (ej: 3.14159)."
        },
        {
            termino: "float",
            definicion: "Tipo de dato numérico decimal, requiere 'f' al final del valor.",
            proposito: "Almacenar números decimales con menor precisión que double."
        },
        {
            termino: "boolean",
            definicion: "Tipo de dato lógico que solo acepta dos valores: true o false.",
            proposito: "Representar condiciones verdaderas o falsas en el programa."
        },
        {
            termino: "char",
            definicion: "Tipo de dato para un solo carácter, se usa con comillas simples.",
            proposito: "Almacenar un único carácter Unicode (ej: 'A', '5', '@')."
        },
        {
            termino: "String",
            definicion: "Tipo de dato para cadenas de texto, se usa con comillas dobles.",
            proposito: "Almacenar y manipular texto (ej: \"Hola Mundo\")."
        },
        {
            termino: "byte",
            definicion: "Tipo de dato numérico entero pequeño (rango: -128 a 127).",
            proposito: "Ahorrar memoria cuando se trabaja con números pequeños."
        }
    ],

    "Estructuras de Control": [
        {
            termino: "if",
            definicion: "Estructura condicional que evalúa si algo es verdadero para ejecutar código.",
            proposito: "Tomar decisiones en el programa basadas en condiciones."
        },
        {
            termino: "else",
            definicion: "Alternativa que se ejecuta cuando la condición del if es falsa.",
            proposito: "Definir qué hacer cuando la condición no se cumple."
        },
        {
            termino: "else if",
            definicion: "Evalúa una condición adicional si la anterior fue falsa.",
            proposito: "Evaluar múltiples condiciones en secuencia."
        },
        {
            termino: "switch",
            definicion: "Estructura condicional por selección para múltiples casos específicos.",
            proposito: "Evaluar una variable contra múltiples valores posibles."
        },
        {
            termino: "case",
            definicion: "Define cada opción en una estructura switch.",
            proposito: "Especificar un valor a comparar en un switch."
        },
        {
            termino: "default",
            definicion: "Caso en switch que se ejecuta si ningún case coincide.",
            proposito: "Manejar valores no contemplados en los cases."
        },
        {
            termino: "break",
            definicion: "Termina un case en switch o sale de un bucle inmediatamente.",
            proposito: "Controlar el flujo de ejecución en switches y bucles."
        }
    ],

    "Bucles": [
        {
            termino: "while",
            definicion: "Bucle que repite código mientras una condición sea verdadera.",
            proposito: "Repetir acciones mientras se cumpla una condición."
        },
        {
            termino: "do-while",
            definicion: "Bucle que ejecuta código al menos una vez antes de evaluar la condición.",
            proposito: "Garantizar que el código se ejecute al menos una vez."
        },
        {
            termino: "for",
            definicion: "Bucle compacto ideal cuando se sabe cuántas veces repetir el código.",
            proposito: "Iterar un número específico de veces o recorrer estructuras."
        },
        {
            termino: "Bucle",
            definicion: "Estructura que repite código múltiples veces.",
            proposito: "Automatizar tareas repetitivas en el programa."
        }
    ],

    "Arreglos": [
        {
            termino: "Vector",
            definicion: "Arreglo unidimensional que almacena múltiples valores del mismo tipo.",
            proposito: "Gestionar colecciones de datos del mismo tipo de forma organizada."
        },
        {
            termino: "Matriz",
            definicion: "Arreglo bidimensional con filas y columnas [fila][columna].",
            proposito: "Representar datos en formato de tabla o grid."
        },
        {
            termino: "Índice",
            definicion: "Número que indica la posición en un vector o matriz (comienza en 0).",
            proposito: "Acceder a elementos específicos dentro de un arreglo."
        },
        {
            termino: "Arreglo",
            definicion: "Estructura de datos que almacena múltiples valores.",
            proposito: "Organizar y acceder a conjuntos de datos relacionados."
        }
    ],

    "POO (Programación Orientada a Objetos)": [
        {
            termino: "Clase",
            definicion: "Plantilla para crear objetos con atributos y métodos.",
            proposito: "Definir la estructura y comportamiento de los objetos."
        },
        {
            termino: "Objeto",
            definicion: "Instancia de una clase con valores específicos.",
            proposito: "Representar entidades concretas basadas en una clase."
        },
        {
            termino: "Método",
            definicion: "Bloque de código reutilizable que realiza una tarea específica.",
            proposito: "Encapsular funcionalidad que puede ser llamada múltiples veces."
        },
        {
            termino: "Atributo",
            definicion: "Variable que pertenece a una clase y define una característica del objeto.",
            proposito: "Almacenar el estado o propiedades de un objeto."
        },
        {
            termino: "Instanciar",
            definicion: "Crear un objeto a partir de una clase usando new.",
            proposito: "Generar una instancia concreta de una clase."
        },
        {
            termino: "new",
            definicion: "Palabra clave para crear nuevos objetos o arreglos en memoria.",
            proposito: "Reservar espacio en memoria para un nuevo objeto."
        },
        {
            termino: "static",
            definicion: "Palabra clave que permite usar métodos sin crear objetos.",
            proposito: "Definir miembros que pertenecen a la clase y no a instancias."
        },
        {
            termino: "void",
            definicion: "Indica que un método no devuelve ningún valor.",
            proposito: "Especificar que un método solo ejecuta acciones sin retornar datos."
        },
        {
            termino: "return",
            definicion: "Devuelve un valor desde un método y termina su ejecución.",
            proposito: "Enviar un resultado de vuelta al código que llamó al método."
        }
    ],

    "Entrada/Salida": [
        {
            termino: "Scanner",
            definicion: "Clase para capturar datos ingresados por teclado.",
            proposito: "Leer entrada del usuario desde la consola."
        },
        {
            termino: "System.in",
            definicion: "Entrada estándar (teclado).",
            proposito: "Fuente de datos de entrada del sistema."
        },
        {
            termino: "System.out.println()",
            definicion: "Comando para imprimir en pantalla con salto de línea.",
            proposito: "Mostrar información al usuario en la consola."
        },
        {
            termino: "print()",
            definicion: "Imprime en pantalla sin salto de línea.",
            proposito: "Mostrar texto sin mover el cursor a la siguiente línea."
        },
        {
            termino: "println()",
            definicion: "Imprime en pantalla con salto de línea al final.",
            proposito: "Mostrar texto y mover el cursor a la siguiente línea."
        },
        {
            termino: "nextInt()",
            definicion: "Método de Scanner para capturar números enteros.",
            proposito: "Leer un valor entero ingresado por el usuario."
        },
        {
            termino: "nextLine()",
            definicion: "Método de Scanner para capturar texto completo.",
            proposito: "Leer una línea completa de texto del usuario."
        },
        {
            termino: "nextDouble()",
            definicion: "Método de Scanner para capturar números decimales.",
            proposito: "Leer un valor decimal ingresado por el usuario."
        }
    ],

    "Operadores y Conversiones": [
        {
            termino: "Concatenación",
            definicion: "Unir textos o valores usando el operador +.",
            proposito: "Combinar cadenas de texto o valores en una sola cadena."
        },
        {
            termino: "Incremento (++)",
            definicion: "Aumenta una variable en 1.",
            proposito: "Incrementar el valor de una variable de forma compacta."
        },
        {
            termino: "Conversión de tipos",
            definicion: "Cambiar un dato de un tipo a otro (ejemplo: String a int).",
            proposito: "Adaptar datos para que sean compatibles con operaciones específicas."
        },
        {
            termino: "parse",
            definicion: "Convertir un String a otro tipo de dato (parseInt, parseDouble, etc.).",
            proposito: "Transformar texto en valores numéricos u otros tipos."
        },
        {
            termino: "Integer",
            definicion: "Versión objeto (wrapper) del tipo int, tiene métodos como parseInt().",
            proposito: "Proporcionar funcionalidad adicional para trabajar con enteros."
        },
        {
            termino: "Wrapper",
            definicion: "Clase que envuelve un tipo primitivo (Integer, Double, Boolean, etc.).",
            proposito: "Permitir usar tipos primitivos como objetos."
        }
    ],

    "Otros Conceptos": [
        {
            termino: "Comentario",
            definicion: "Texto que no se ejecuta, sirve para documentar código.",
            proposito: "Explicar el código para facilitar su comprensión y mantenimiento."
        },
        {
            termino: "main()",
            definicion: "Método principal desde donde inicia la ejecución del programa.",
            proposito: "Punto de entrada de toda aplicación Java."
        },
        {
            termino: "import",
            definicion: "Permite usar clases de otros archivos o paquetes.",
            proposito: "Acceder a funcionalidad definida en otras partes del código."
        },
        {
            termino: "package",
            definicion: "Define a qué paquete pertenece un archivo Java.",
            proposito: "Organizar clases en grupos lógicos."
        },
        {
            termino: "Argumento",
            definicion: "Valor que se envía a un método al llamarlo.",
            proposito: "Pasar datos a un método para que los procese."
        },
        {
            termino: "Parámetro",
            definicion: "Variable que recibe un método para trabajar con ella.",
            proposito: "Definir qué datos espera recibir un método."
        },
        {
            termino: "true",
            definicion: "Valor booleano que representa verdadero.",
            proposito: "Indicar que una condición se cumple."
        },
        {
            termino: "false",
            definicion: "Valor booleano que representa falso.",
            proposito: "Indicar que una condición no se cumple."
        }
    ]
};

// Funciones auxiliares para el glosario
function obtenerCategorias() {
    return Object.keys(GLOSARIO);
}

function obtenerTerminosPorCategoria(categoria) {
    return GLOSARIO[categoria] || [];
}

function buscarEnGlosario(termino) {
    const terminoBusqueda = termino.toLowerCase();
    const resultados = [];

    Object.keys(GLOSARIO).forEach(categoria => {
        GLOSARIO[categoria].forEach(item => {
            if (item.termino.toLowerCase().includes(terminoBusqueda) ||
                item.definicion.toLowerCase().includes(terminoBusqueda) ||
                item.proposito.toLowerCase().includes(terminoBusqueda)) {
                resultados.push({
                    ...item,
                    categoria: categoria
                });
            }
        });
    });

    return resultados;
}
