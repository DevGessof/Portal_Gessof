# Leccion 20 - Encadenamiento Opcional

---

## 1. Titulo de la leccion

**Operadores `?.` y `!.`: encadenamiento opcional y asercion de no nulo**

---

## 2. Que se aprende en esta leccion

Se aprende a manejar propiedades que pueden ser `undefined` usando dos operadores de TypeScript/JavaScript: el **encadenamiento opcional** (`?.`) y el **operador de asercion de no nulo** (`!`). Tambien se refuerza el uso del operador `||` como alternativa para valores por defecto.

---

## 3. Puntos clave explicados

- **Propiedad opcional en interfaz:** Una propiedad marcada con `?` en la interfaz puede no estar presente en el objeto. Su valor sera `undefined` si no se proporciona.
- **Problema con propiedades opcionales:** Si se intenta acceder a `.length` de una propiedad que puede ser `undefined`, JavaScript lanzara un error en tiempo de ejecucion porque `undefined` no tiene `.length`.
- **Encadenamiento opcional `?.`:** Permite acceder a una propiedad o metodo solo si el valor anterior no es `null` o `undefined`. Si lo es, la expresion devuelve `undefined` en lugar de lanzar un error.
- **Operador `||` para valor por defecto:** Combinando `?.` con `||` se puede establecer un valor por defecto cuando el resultado es `undefined`. Ejemplo: `passenger.children?.length || 0`.
- **Operador de asercion de no nulo `!`:** Le dice a TypeScript "confia en mi, este valor nunca sera nulo ni undefined". Elimina la advertencia de TypeScript, pero si en ejecucion el valor es `undefined`, si ocurrira el error. Debe usarse solo cuando se esta completamente seguro.
- **Diferencia entre `?.` y `!`:** `?.` es seguro y defensivo (evita errores). `!` es una promesa al compilador que puede causar errores si no se cumple. Generalmente se prefiere `?.`.
- **Cierre de la seccion:** Esta fue la ultima leccion de TypeScript. A partir de la siguiente seccion se empieza a trabajar directamente con Angular.

---

## 4. Ejemplo sencillo

```typescript
interface Passenger {
  name: string;
  children?: string[]; // propiedad opcional
}

const passenger1: Passenger = { name: 'Fernando' };
const passenger2: Passenger = { name: 'Melissa', children: ['Natalia', 'Elizabeth'] };

const printChildren = (passenger: Passenger): void => {
  // ?.length devuelve undefined si children no existe, en vez de error
  const howManyChildren = passenger.children?.length || 0;
  console.log(`${passenger.name} tiene ${howManyChildren} hijos`);
};

printChildren(passenger1); // "Fernando tiene 0 hijos"
printChildren(passenger2); // "Melissa tiene 2 hijos"
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `?.` (optional chaining) | Accede a una propiedad solo si el valor anterior no es `null`/`undefined`; devuelve `undefined` si no existe |
| `\|\|` (or logico) | Proporciona un valor por defecto si la expresion anterior es `undefined`, `null` o `false` |
| `!` (non-null assertion) | Le dice a TypeScript que el valor nunca sera nulo; peligroso si no se cumple |
| `undefined` | Valor de una propiedad opcional cuando no se proporciona |
| Propiedad opcional `?` | Propiedad que puede o no estar presente en un objeto; su tipo es `tipo | undefined` |

---

## 6. Resumen final en pocas palabras

El encadenamiento opcional `?.` permite acceder de forma segura a propiedades que podrian no existir, devolviendo `undefined` en lugar de lanzar un error. Combinado con `||` permite establecer valores por defecto. El operador `!` es lo opuesto: asegura a TypeScript que el valor existe, pero es peligroso si esa promesa no se cumple. Con esta leccion concluye la seccion de TypeScript y comienza Angular.
