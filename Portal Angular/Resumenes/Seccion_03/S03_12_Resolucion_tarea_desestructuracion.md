# Leccion 12 - Resolucion de la Tarea: Desestructuracion

---

## 1. Titulo de la leccion

**Solucion completa: desestructuracion en resultado, argumentos y tuplas**

---

## 2. Que se aprende en esta leccion

Se presenta la solucion completa de la tarea de desestructuracion. Se explica como aplicarla en el resultado de una funcion, en los argumentos del `forEach` y en el objeto de opciones. Tambien se introduce el concepto de **tupla** para tipar funciones que devuelven exactamente dos valores.

---

## 3. Puntos clave explicados

- **Desestructurar el retorno de una funcion:** En lugar de usar `result[0]` y `result[1]`, se puede desestructurar directamente con `const [total, taxTotal] = taxCalculation(...)`. Esto es mas legible y menos propenso a errores.
- **Conflicto de nombres al desestructurar:** Si ya existe una variable con el mismo nombre en el mismo scope, se debe renombrar la variable al desestructurar usando `: nuevoNombre`.
- **Desestructurar el argumento del `forEach`:** Dentro del `forEach`, el producto que se recibe como argumento puede desestructurarse directamente para extraer solo el `price`, sin necesidad de escribir `product.price`.
- **Tupla como tipo de retorno:** Una tupla es un arreglo con un numero fijo de elementos y tipos definidos. Ejemplo: `[number, number]` indica exactamente dos numeros. TypeScript avisa si se intenta acceder a una posicion que no existe.
- **Diferencia entre `number[]` y `[number, number]`:** `number[]` es un arreglo de numeros de longitud indefinida. `[number, number]` es una tupla con exactamente dos numeros. La tupla es mas estricta y mas segura.
- **Desestructurar las opciones en la firma:** En lugar de recibir el objeto `options` y luego usar `options.tax` y `options.products`, se puede desestructurar el objeto directamente en los parentesis de la funcion para que el codigo sea mas limpio.

---

## 4. Ejemplo sencillo

```typescript
// Tupla como tipo de retorno (exactamente dos numeros)
const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
  let total = 0;
  options.products.forEach(({ price }) => { // desestructura el argumento
    total += price;
  });
  return [total, total * options.tax];
};

// Desestructurar el resultado
const [total, taxTotal] = taxCalculation({
  products: shoppingCart,
  tax: 0.15,
});

// Desestructurar opciones en la firma de la funcion
const taxCalculation2 = ({ tax, products }: TaxCalculationOptions): [number, number] => {
  let total = 0;
  products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * tax];
};
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Tupla | Arreglo con numero fijo de elementos y tipos definidos. Ej: `[number, number]` |
| `[number, number]` | Tipo de retorno que garantiza exactamente dos numeros |
| `number[]` | Arreglo de numeros de longitud variable (menos estricto que la tupla) |
| Desestructuracion en `forEach` | Extraer propiedades del elemento directamente en los parentesis del callback |
| Desestructuracion en firma | Extraer propiedades del argumento objeto directamente en los parentesis de la funcion |
| `: nuevoNombre` | Renombra una variable al desestructurar para evitar conflictos de nombre |

---

## 6. Resumen final en pocas palabras

Esta leccion cierra el tema de desestructuracion mostrando su aplicacion en tres niveles: en el resultado de la funcion, en los argumentos del `forEach` y en el objeto de opciones de la firma. Ademas, se introduce la tupla como tipo de retorno mas estricto y seguro cuando una funcion devuelve exactamente dos valores.
