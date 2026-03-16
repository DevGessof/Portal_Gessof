# Lección 12 - Validar parámetros de query

---

## ¿Qué se aprende en esta lección?

Se implementa una función de validación para los query parameters del URL relacionados con la región. El problema es que el URL puede ser modificado manualmente por el usuario con cualquier valor, incluso uno inválido. Esta lección enseña cómo verificar que el valor recibido sea una región permitida, y si no lo es, usar un valor por defecto.

---

## Puntos clave explicados

- **El problema:** Si el usuario escribe en el URL `?region=OceaniaInventada`, la aplicación intenta buscar esa región que no existe, lo que puede generar errores o comportamientos inesperados.

- **Función auxiliar `validateQueryParam`:** Se crea una función fuera del componente (función pura, no un método de clase) que recibe el valor del query parameter como string y devuelve siempre un valor de tipo `Region`.

- **Objeto `validRegions`:** Dentro de la función, se crea un objeto (de tipo `Record<string, Region>`) que mapea cada nombre de región en minúsculas a su valor correcto con la capitalización exacta. Por ejemplo: `'africa'` apunta a `'Africa'`, `'americas'` a `'Americas'`, etc.

- **Uso de `.toLowerCase()`:** El valor recibido del URL se convierte a minúsculas antes de buscarlo en el objeto `validRegions`. Esto garantiza que funcione aunque el usuario escriba `AFRICA`, `Africa` o `africa`.

- **Valor por defecto:** Si el valor del URL no coincide con ninguna región válida, la función devuelve `'Americas'` como valor por defecto, evitando que la aplicación se rompa.

- **Reemplazar el `as Region`:** Antes, se usaba `as Region` para forzar el tipo y evitar el error de TypeScript, pero eso no era una validación real. Ahora se llama a `validateQueryParam(this.queryParam)` que garantiza un tipo correcto de verdad.

- **`linkedSignal` con el valor validado:** La señal `selectedRegion` se inicializa con el resultado de `validateQueryParam`, asegurando que siempre parta de una región válida.

---

## Ejemplo sencillo

```typescript
// Función auxiliar de validación (fuera del componente)
function validateQueryParam(queryParam: string): Region {
  const validRegions: Record<string, Region> = {
    'africa':   'Africa',
    'americas': 'Americas',
    'asia':     'Asia',
    'europe':   'Europe',
    'oceania':  'Oceania',
    'antartic': 'Antartic',
  };

  return validRegions[queryParam.toLowerCase()] ?? 'Americas';
}

// Dentro del componente
selectedRegion = linkedSignal<Region>(() =>
  validateQueryParam(this.queryParam)
);
```

Si el URL tiene `?region=EuropeInventada`, la función busca `'europeinventada'` en el objeto, no lo encuentra, y devuelve `'Americas'` por defecto.

---

## Funciones, palabras clave o elementos importantes

- **`validateQueryParam()`:** Función auxiliar que recibe un string y devuelve una `Region` válida.
- **`Record<string, Region>`:** Tipo de TypeScript que define un objeto con claves string y valores de tipo `Region`.
- **`.toLowerCase()`:** Convierte un string a minúsculas para hacer comparaciones sin importar el caso.
- **`??` (nullish coalescing):** Devuelve el valor de la derecha si el de la izquierda es `null` o `undefined`. Se usa para asignar el valor por defecto `'Americas'`.
- **`linkedSignal()`:** Crea una señal cuyo valor inicial se calcula a partir de una función. Útil para inicializar con valores que provienen del URL.
- **`as Region`:** Conversión forzada de tipo en TypeScript. No valida, solo le dice al compilador qué tipo asumir. Se reemplaza por la validación real con `validateQueryParam`.

---

## Resumen final en pocas palabras

Esta lección cierra el ciclo de mejoras de la aplicación implementando validación de los query parameters del URL. Con una función auxiliar sencilla y un objeto de equivalencias, se garantiza que la región leída del URL siempre sea válida, protegiendo la aplicación de errores causados por valores inesperados o manipulación manual del URL.
