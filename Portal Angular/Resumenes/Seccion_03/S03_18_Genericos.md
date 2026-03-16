# Leccion 18 - Genericos

---

## 1. Titulo de la leccion

**Genericos en TypeScript: funciones flexibles con tipo seguro**

---

## 2. Que se aprende en esta leccion

Se aprende el concepto de **genericos**, que permiten crear funciones capaces de trabajar con cualquier tipo de dato sin perder la seguridad del tipado. Son la alternativa correcta al uso de `any` cuando se necesita flexibilidad.

---

## 3. Puntos clave explicados

- **El problema con `any`:** Usar `any` elimina todas las restricciones de TypeScript. Si se le llama a un metodo que no existe, no hay error en tiempo de escritura, solo al ejecutar. Usar `any` es equivalente a escribir JavaScript sin TypeScript.
- **Que son los genericos:** Permiten definir un "tipo variable" representado con la letra `T` (por convencion). Ese tipo se resuelve automaticamente segun el argumento que se le pase a la funcion.
- **Sintaxis del generico:** Se escribe `<T>` despues del nombre de la funcion. Luego `T` se usa como tipo del argumento y del valor de retorno.
- **Inferencia automatica:** TypeScript infiere el tipo de `T` segun el valor que se le pasa. Si se pasa un string, `T` es string; si se pasa un numero, `T` es number.
- **Tipo explicito:** Tambien se puede forzar el tipo del generico escribiendolo explicitamente: `whatsMyType<string>('hola')`.
- **IntelliSense con genericos:** Al usar genericos, el editor conoce el tipo exacto del valor retornado y ofrece autocompletado con los metodos y propiedades correctos. Con `any` esto no es posible.
- **Uso en Angular:** Los genericos se usan mucho para tipar respuestas HTTP, arreglos genericos y otros elementos donde el tipo depende del contexto.

---

## 4. Ejemplo sencillo

```typescript
// Funcion generica: T se resuelve segun el argumento
export function whatsMyType<T>(argument: T): T {
  return argument;
}

// TypeScript infiere el tipo automaticamente
const amIString = whatsMyType('Hola Mundo'); // T = string
const amINumber = whatsMyType(100);          // T = number
const amIArray  = whatsMyType([1, 2, 3, 4]); // T = number[]

// Con tipo explicito
const forced = whatsMyType<string>('Hola');

// Ahora el IntelliSense funciona correctamente
amIString.split(' ');   // metodos de string disponibles
amINumber.toFixed(2);   // metodos de number disponibles
amIArray.filter(x => x > 2); // metodos de arreglo disponibles
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `<T>` | Declara un generico; `T` es el nombre convencional del primer tipo variable |
| Generico | Tipo variable que se resuelve segun el argumento recibido |
| Inferencia de genericos | TypeScript determina automaticamente el tipo de `T` sin que se especifique |
| Tipo explicito `<string>` | Fuerza el tipo del generico al llamar la funcion |
| `any` | Tipo sin restricciones; debe evitarse porque elimina la seguridad de TypeScript |
| IntelliSense con genericos | El editor muestra los metodos correctos segun el tipo inferido |

---

## 6. Resumen final en pocas palabras

Los genericos permiten crear funciones flexibles que trabajan con cualquier tipo de dato sin sacrificar la seguridad del tipado. Son la alternativa correcta al `any`, porque mantienen el IntelliSense, la deteccion de errores y la autodocumentacion del codigo. Se usaran ampliamente en Angular para tipar respuestas y colecciones de datos.
