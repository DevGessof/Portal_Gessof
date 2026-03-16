# Leccion 11 - Desestructuracion de Argumentos

---

## 1. Titulo de la leccion

**Desestructuracion en argumentos de funciones y en resultados**

---

## 2. Que se aprende en esta leccion

Se aprende a aplicar la desestructuracion dentro de los argumentos de una funcion y en los valores que devuelve. Se trabaja con un ejemplo practico de calculo de impuestos que combina interfaces, objetos, arreglos y desestructuracion.

---

## 3. Puntos clave explicados

- **Limite de argumentos recomendado:** Segun las buenas practicas de Clean Code, una funcion no deberia tener mas de tres argumentos. Si necesita mas, lo ideal es agruparlos en un objeto.
- **Objeto de opciones (options pattern):** En lugar de pasar muchos argumentos por separado, se crea un objeto que los agrupe. Este patron es muy comun en librerias y paquetes profesionales.
- **Interfaz para las opciones:** Al crear un objeto de opciones, se le crea su propia interfaz tipada con el nombre en UpperCamelCase. Ejemplo: `TaxCalculationOptions`.
- **Retorno como arreglo:** Una funcion puede regresar multiples valores empaquetados en un arreglo. El que llama puede luego desestructurar ese resultado.
- **Desestructuracion del resultado:** En lugar de usar `result[0]` y `result[1]`, se puede desestructurar el arreglo de retorno directamente. Ejemplo: `const [total, tax] = taxCalculation(options)`.
- **Desestructuracion del argumento en la firma:** Se puede desestructurar el objeto que llega como argumento directamente en los parentesis de la funcion, evitando escribir `options.tax` y `options.products` dentro de la funcion.
- **`forEach`:** Metodo de JavaScript para recorrer cada elemento de un arreglo y ejecutar una funcion sobre el.

---

## 4. Ejemplo sencillo

```typescript
interface Product {
  description: string;
  price: number;
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// La funcion regresa un arreglo con dos numeros
const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
  let total = 0;
  options.products.forEach(({ price }) => {
    total += price;
  });
  return [total, total * options.tax];
};

// Desestructurar el resultado
const [total, taxTotal] = taxCalculation({
  tax: 0.15,
  products: shoppingCart,
});

console.log('Total', total);   // 400
console.log('Tax', taxTotal);  // 60
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Options pattern | Patron de agrupar argumentos en un objeto para funciones con muchos parametros |
| `TaxCalculationOptions` | Interfaz que describe el objeto de opciones para el calculo de impuesto |
| `forEach` | Recorre cada elemento de un arreglo y ejecuta una funcion sobre el |
| `[number, number]` | Tipo de retorno que indica un arreglo con exactamente dos numeros (tupla) |
| Desestructuracion en firma | Extraer propiedades del argumento directamente en los parentesis de la funcion |
| `const [a, b] = funcion()` | Desestructura el resultado de una funcion que devuelve un arreglo |

---

## 6. Resumen final en pocas palabras

Esta leccion muestra como aplicar la desestructuracion en los argumentos de funciones y en sus resultados. Usar un objeto de opciones como argumento y desestructurar el valor de retorno hace que el codigo sea mas corto, mas expresivo y mas facil de mantener, especialmente cuando las funciones manejan varios valores relacionados.
