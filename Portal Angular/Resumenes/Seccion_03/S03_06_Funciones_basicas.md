# Leccion 06 - Funciones Basicas

---

## 1. Titulo de la leccion

**Como crear y tipar funciones en TypeScript**

---

## 2. Que se aprende en esta leccion

Se aprende a crear funciones en TypeScript de dos formas distintas, a definir el tipo de dato de sus argumentos y a indicar que tipo de valor devuelven. Tambien se ve como manejar argumentos opcionales y argumentos con valores por defecto.

---

## 3. Puntos clave explicados

- **Funcion tradicional:** Se declara con la palabra `function`, seguida del nombre, parentesis con argumentos y llaves con el cuerpo de la funcion.
- **Funcion de flecha (arrow function):** Es otra forma de escribir funciones, usando el simbolo `=>`. Se comporta igual que una funcion tradicional en la mayoria de casos.
- **Tipo de dato en argumentos:** Cada argumento de la funcion debe tener su tipo indicado. Si no se define, TypeScript lo marca como `any`, lo cual genera una advertencia.
- **Tipo de retorno:** Se puede indicar que tipo de valor devuelve la funcion escribiendo `: tipo` despues de los parentesis. Si no devuelve nada, el tipo es `void`.
- **`void` vs `undefined`:** `void` significa que la funcion no tiene un `return` explicito. `undefined` significa que el `return` existe pero no devuelve nada. Para uso practico son muy similares.
- **Inferencia de retorno:** Si no se especifica el tipo de retorno, TypeScript lo infiere segun lo que se devuelve. Aunque es mejor definirlo explicitamente.
- **Argumentos opcionales:** Agregando `?` despues del nombre del argumento, este se vuelve opcional. La funcion puede llamarse sin enviarlo.
- **Argumentos con valor por defecto:** Se le asigna un valor al argumento directamente en la definicion. Si no se envia, usa ese valor. Se consideran opcionales automaticamente.
- **Orden recomendado de argumentos:** Primero los obligatorios, luego los opcionales, y por ultimo los que tienen valor por defecto.
- **`tsconfig.json`:** Archivo de configuracion de TypeScript que define el nivel de estrictez del lenguaje y otras opciones del proyecto. Viene configurado en modo estricto por defecto.

---

## 4. Ejemplo sencillo

```typescript
// Funcion tradicional que suma dos numeros
function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = addNumbers(1, 2); // result = 3

// Funcion de flecha equivalente
const addNumbersArrow = (a: number, b: number): number => a + b;

// Funcion con argumento opcional y valor por defecto
function multiply(firstNumber: number, secondNumber?: number, base: number = 2): number {
  return firstNumber * base;
}

const multiplyResult = multiply(5); // Usa base = 2 por defecto, resultado = 10
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `function` | Palabra clave para declarar una funcion tradicional |
| `=>` | Simbolo que define una funcion de flecha (arrow function) |
| `: tipo` en argumentos | Indica el tipo de dato que acepta cada argumento |
| `: tipo` en la funcion | Indica el tipo de dato que devuelve la funcion |
| `void` | Indica que la funcion no devuelve ningun valor |
| `any` | Tipo sin restriccion; se debe evitar colocandolo siempre de forma explicita |
| `?` en argumentos | Hace que un argumento sea opcional |
| `= valor` en argumentos | Asigna un valor por defecto si el argumento no se envia |
| `return` | Palabra clave para devolver un valor desde la funcion |
| `tsconfig.json` | Archivo de configuracion que controla el comportamiento de TypeScript |
| `toString()` | Convierte un numero u otro valor a texto |
| Template literals (backticks) | Permiten insertar expresiones dentro de un texto usando `${}` |

---

## 6. Resumen final en pocas palabras

En esta leccion se aprende a crear funciones tipadas en TypeScript, tanto de forma tradicional como usando funciones de flecha. El tipado de argumentos y del valor de retorno permite que TypeScript detecte errores antes de ejecutar el codigo, haciendo el desarrollo mas seguro y predecible.
