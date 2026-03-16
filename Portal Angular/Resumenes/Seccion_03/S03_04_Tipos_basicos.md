# Leccion 04 - Tipos Basicos y Conceptos Generales

---

## 1. Titulo de la leccion

**Tipos de datos basicos en TypeScript: string, number y boolean**

---

## 2. Que se aprende en esta leccion

Se aprende como TypeScript controla el tipo de informacion que puede guardar cada variable. Se explica como declarar variables con tipos especificos, que es la inferencia de tipos y como TypeScript detecta errores antes de ejecutar el codigo.

---

## 3. Puntos clave explicados

- **Tipado estricto:** TypeScript obliga a que cada variable guarde solo el tipo de dato que se le asigno. Por ejemplo, si una variable es de tipo texto, no se le puede guardar un numero.
- **Inferencia de tipos:** Cuando se crea una variable y se le da un valor de inmediato, TypeScript detecta automaticamente el tipo de dato sin que el programador lo escriba. Aunque es buena practica escribirlo de forma explicita.
- **Declaracion explicita de tipos:** Se escribe ` : tipo` despues del nombre de la variable para indicar que tipo de dato acepta. Por ejemplo: `let nombre: string`.
- **`let` vs `const`:** Se recomienda usar `const` cuando el valor de una variable no va a cambiar. Solo se usa `let` si el valor se va a modificar mas adelante.
- **Tipos union con `|`:** Usando el simbolo `|` se puede indicar que una variable acepta mas de un tipo de dato. Por ejemplo: `number | string`.
- **Tipos literales:** Es posible limitar los valores aceptados. Por ejemplo, que una variable solo acepte el numero 95 o la palabra exacta "FULL".
- **Modulos con `export`:** Para evitar conflictos entre archivos del proyecto se usa `export {}` al inicio del archivo, convirtiendo el archivo en un modulo.
- **Importar modulos:** Con la palabra `import` se puede referenciar otro archivo para que su codigo se ejecute.
- **El tipo `boolean`:** Acepta unicamente los valores `true` o `false`.
- **Transpilacion a JavaScript:** Al momento de publicar la aplicacion, TypeScript convierte todo el codigo a JavaScript, adaptandolo a la version del navegador que se necesite.

---

## 4. Ejemplo sencillo

```typescript
// Variable de texto
let name = 'Strider'; // TypeScript infiere que es string

// Variable numerica con tipo explicito
let hpPoints: number = 95;

// Variable que acepta numero o texto
let hpPoints2: number | string = 95;
hpPoints2 = 'FULL'; // Esto es valido

// Constante booleana
const isAlive: boolean = true;

// Imprimir en consola
console.log({ name, hpPoints, isAlive });
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `string` | Tipo de dato para texto y caracteres |
| `number` | Tipo de dato para numeros (enteros o decimales) |
| `boolean` | Tipo de dato que solo acepta `true` o `false` |
| `let` | Declara una variable cuyo valor puede cambiar |
| `const` | Declara una constante cuyo valor no cambia |
| `: tipo` | Sintaxis para indicar el tipo de dato de una variable |
| `\|` | Operador para permitir mas de un tipo de dato (tipo union) |
| `any` | Tipo que acepta cualquier valor; se debe evitar en lo posible |
| `export {}` | Convierte el archivo en un modulo para evitar conflictos de nombres |
| `import` | Permite incluir y ejecutar el contenido de otro archivo |
| `console.log()` | Muestra un valor en la consola del navegador |

---

## 6. Resumen final en pocas palabras

En esta leccion se aprende a controlar el tipo de datos de las variables en TypeScript. El tipado estricto permite detectar errores mientras se escribe el codigo, antes de ejecutarlo. Tambien se ve como TypeScript puede inferir tipos automaticamente, aunque siempre es mejor declararlos de forma explicita.
