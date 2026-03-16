# Leccion 10 - Desestructuracion de Arreglos

---

## 1. Titulo de la leccion

**Como extraer elementos de un arreglo usando desestructuracion**

---

## 2. Que se aprende en esta leccion

Se aprende a aplicar la desestructuracion en arreglos, una tecnica similar a la de objetos pero usando corchetes `[]`. Permite acceder a elementos por posicion de forma clara y tambien asignar valores por defecto cuando el elemento no existe.

---

## 3. Puntos clave explicados

- **Indices en arreglos:** Los arreglos en JavaScript empiezan en el indice `0`. El primer elemento es `[0]`, el segundo `[1]`, y asi sucesivamente.
- **Sin desestructuracion:** Para acceder a un elemento se usa `arreglo[indice]`. Por ejemplo: `dbz[2]` para obtener el tercer elemento.
- **Con desestructuracion de arreglos:** Se usan corchetes `[]` para extraer elementos por posicion y asignarlos a variables con un nombre mas descriptivo.
- **Ignorar posiciones:** Si no se necesita un elemento de una posicion anterior, se pueden dejar comas vacias para saltarlo. Ejemplo: `const [, , trunks] = dbz` ignora las dos primeras posiciones.
- **Valores por defecto:** Si el elemento en esa posicion no existe (es `undefined`), se puede asignar un valor por defecto usando `= 'valor'`. Ejemplo: `const [, , trunks = 'Not found'] = dbz`.
- **Diferencia clave con objetos:** En objetos se desestructura con llaves `{}`, en arreglos con corchetes `[]`. El resultado es similar pero la sintaxis cambia.

---

## 4. Ejemplo sencillo

```typescript
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

// Sin desestructuracion
const personaje3 = dbz[2]; // 'Trunks'

// Con desestructuracion (nombra los elementos)
const [p1, p2, p3] = dbz;
console.log(p3); // 'Trunks'

// Ignorar posiciones y valor por defecto
const [, , trunks = 'Not found'] = dbz;
console.log(trunks); // 'Trunks' (o 'Not found' si no existiera)
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `const [a, b, c] = arreglo` | Desestructura un arreglo extrayendo elementos por posicion |
| `[, , elemento]` | Ignora las posiciones anteriores y extrae solo la que interesa |
| `= 'valor'` | Asigna un valor por defecto si el elemento es `undefined` |
| `undefined` | Valor que aparece cuando se accede a una posicion que no existe en el arreglo |
| `string[]` | Arreglo tipado que solo acepta elementos de texto |

---

## 6. Resumen final en pocas palabras

La desestructuracion de arreglos permite extraer elementos por posicion con nombres descriptivos y asignar valores por defecto si no existen. Se usa con corchetes `[]` en lugar de las llaves `{}` de los objetos, y es muy util para hacer el codigo mas legible cuando se trabaja con listas de datos.
