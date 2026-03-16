# Leccion 05 - Objetos, Arreglos e Interfaces

---

## 1. Titulo de la leccion

**Como tipar objetos y arreglos usando Interfaces en TypeScript**

---

## 2. Que se aprende en esta leccion

Se aprende a trabajar con arreglos (listas) y objetos en TypeScript, garantizando que su contenido sea siempre del tipo correcto. Tambien se introduce el concepto de **interfaz**, una herramienta de TypeScript que permite definir la estructura que debe tener un objeto.

---

## 3. Puntos clave explicados

- **Arreglos tipados:** Se puede indicar que un arreglo solo acepte un tipo de dato. Por ejemplo, un arreglo de strings se declara como `string[]`. Si se intenta agregar un numero o un booleano, TypeScript muestra un error.
- **Inferencia en arreglos:** Si no se define el tipo, TypeScript lo infiere segun los valores del arreglo. Si hay tipos mezclados, el arreglo quedara con un tipo union, lo cual puede no ser lo deseado.
- **Objetos literales:** Son objetos creados directamente con llaves `{}`. En JavaScript puro no se puede definir el tipo de cada propiedad directamente dentro del objeto. Para eso existe la interfaz.
- **Que es una interfaz:** Es una estructura que describe como debe lucir un objeto: que propiedades tiene y de que tipo es cada una. Cuando el codigo se convierte a JavaScript, la interfaz desaparece; no ocupa espacio en el resultado final.
- **Propiedades opcionales:** Usando `?` despues del nombre de la propiedad en la interfaz, se indica que esa propiedad no es obligatoria. Su valor sera el dato ingresado o `undefined` si no se proporciona.
- **Constantes para objetos:** Si el objeto no va a ser reemplazado por otro, se recomienda usar `const`.
- **Autocompletado con interfaces:** Al tipar un objeto con una interfaz, el editor de codigo sugiere automaticamente las propiedades disponibles y alerta si falta alguna obligatoria.

---

## 4. Ejemplo sencillo

```typescript
// Definicion de la interfaz
interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // Propiedad opcional
}

// Objeto que cumple la interfaz
const strider: Character = {
  name: 'Strider',
  hp: 100,
  skills: ['Bash', 'Counter'],
};

// Asignar la propiedad opcional despues
strider.hometown = 'Rivendell';

// Mostrar en consola como tabla
console.table(strider);
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `string[]` | Declara un arreglo que solo acepta valores de texto |
| `number[]` | Declara un arreglo que solo acepta numeros |
| `interface` | Palabra clave para definir la estructura de un objeto |
| `?` | Indica que una propiedad de la interfaz es opcional |
| `undefined` | Valor que toma una propiedad opcional cuando no se le asigna nada |
| `console.table()` | Muestra un objeto en la consola con formato de tabla |
| `const` | Se recomienda para objetos que no van a ser reemplazados |

---

## 6. Resumen final en pocas palabras

En esta leccion se aprende a definir arreglos con tipos estrictos y a crear interfaces para controlar la estructura de los objetos. Las interfaces le dicen a TypeScript como debe lucir un objeto, evitando errores y facilitando el trabajo en equipo. Al convertirse a JavaScript, las interfaces no dejan rastro en el codigo final.
