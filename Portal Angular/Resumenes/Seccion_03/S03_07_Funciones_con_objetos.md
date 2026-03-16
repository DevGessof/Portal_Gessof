# Leccion 07 - Funciones con Objetos como Argumentos

---

## 1. Titulo de la leccion

**Usar interfaces como tipo de dato en los argumentos de funciones**

---

## 2. Que se aprende en esta leccion

Se aprende a crear funciones que reciben objetos como argumentos y a garantizar, mediante interfaces, que esos objetos tengan exactamente la estructura esperada. Tambien se explica como definir metodos dentro de una interfaz y como TypeScript ayuda a evitar errores cuando los nombres de las propiedades no coinciden.

---

## 3. Puntos clave explicados

- **Problema sin tipado:** Cuando una funcion recibe un objeto sin tipo definido, TypeScript lo marca como `any`. Esto significa que no habra ninguna validacion sobre sus propiedades, lo que puede generar errores dificiles de detectar.
- **Interfaz como tipo de argumento:** Se puede usar una interfaz directamente como tipo de un argumento. Asi, TypeScript verifica que el objeto enviado tenga todas las propiedades requeridas con sus tipos correctos.
- **Metodos dentro de una interfaz:** Las interfaces no solo pueden tener propiedades de datos, tambien pueden definir funciones (metodos). La sintaxis es: `nombreMetodo: () => tipoDeRetorno`.
- **`this` dentro de un objeto:** Dentro de un metodo de un objeto, `this` hace referencia al propio objeto, permitiendo acceder a sus propiedades como `this.hp`.
- **Deteccion de errores por nombre incorrecto:** Si se intenta acceder a una propiedad que no existe en la interfaz (por ejemplo, escribir `pv` en lugar de `hp`), TypeScript muestra el error de inmediato.
- **Cumplir la interfaz, no necesariamente ser del mismo tipo:** TypeScript acepta cualquier objeto que tenga las mismas propiedades definidas en la interfaz, aunque no sea exactamente del mismo tipo declarado. Lo que importa es que "luzca igual".
- **`console.table()`:** Permite imprimir objetos en la consola del navegador en formato de tabla, lo cual es mas facil de leer.

---

## 4. Ejemplo sencillo

```typescript
// Definicion de la interfaz con un metodo
interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

// Funcion que recibe un objeto de tipo Character
const healCharacter = (character: Character, amount: number): void => {
  character.hp += amount;
};

// Objeto que cumple la interfaz
const strider: Character = {
  name: 'Strider',
  hp: 50,
  showHp() {
    console.log(`Puntos de vida: ${this.hp}`);
  },
};

strider.showHp(); // "Puntos de vida: 50"

healCharacter(strider, 10);
strider.showHp(); // "Puntos de vida: 60"
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `interface` | Define la estructura esperada de un objeto |
| `() => void` | Sintaxis para definir un metodo en una interfaz que no devuelve nada |
| `this` | Dentro de un metodo, hace referencia al propio objeto |
| `any` | Tipo sin control; aparece cuando TypeScript no puede inferir el tipo |
| `+=` | Operador que suma y asigna al mismo tiempo (equivale a `x = x + y`) |
| `console.table()` | Muestra un objeto en la consola en formato de tabla |
| Template literal | Texto con backticks que permite insertar variables usando `${}` |

---

## 6. Resumen final en pocas palabras

En esta leccion se aprende a pasar objetos como argumentos a funciones, usando interfaces para garantizar que esos objetos tengan la estructura correcta. Gracias a esto, TypeScript puede alertar de inmediato cuando se usa una propiedad inexistente, evitando errores que en JavaScript solo se descubren al ejecutar el programa.
