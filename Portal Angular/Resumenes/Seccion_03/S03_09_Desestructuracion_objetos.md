# Leccion 09 - Desestructuracion de Objetos

---

## 1. Titulo de la leccion

**Como extraer propiedades de un objeto usando desestructuracion**

---

## 2. Que se aprende en esta leccion

Se aprende la tecnica de desestructuracion aplicada a objetos. Permite extraer propiedades especificas de un objeto en variables independientes, haciendo el codigo mas corto, limpio y facil de leer. Aunque no es exclusiva de TypeScript, es fundamental en Angular.

---

## 3. Puntos clave explicados

- **Que es la desestructuracion:** Es una tecnica que permite extraer propiedades de un objeto o valores de un arreglo directamente en variables, sin tener que acceder a cada propiedad con la notacion `objeto.propiedad`.
- **Sin desestructuracion:** Para acceder a varias propiedades se repite el nombre del objeto muchas veces (ej: `audioPlayer.song`, `audioPlayer.details.author`), lo que se vuelve tedioso e incomodo.
- **Con desestructuracion de objetos:** Se usan llaves `{}` para indicar que propiedades se quieren extraer. Ejemplo: `const { song } = audioPlayer`.
- **Renombrar al desestructurar:** Si ya existe una variable con el mismo nombre, se puede renombrar la propiedad extraida usando `: nuevoNombre`. Ejemplo: `const { song: anotherSong } = audioPlayer`.
- **Desestructuracion de objetos anidados:** Se puede desestructurar una propiedad que a su vez es un objeto en pasos separados. Aunque tambien se puede hacer en una sola linea, hacerlo en dos lineas es mas legible.
- **Priorizar la legibilidad:** Si dos formas de codigo hacen lo mismo, siempre se debe preferir la que sea mas facil de leer, aunque sea una linea mas larga.
- **Interfaces de practica:** Se crea la interfaz `AudioPlayer` con propiedades como `audioVolume`, `songDuration`, `song` y `details` (que es otra interfaz `Details` con `author` y `year`).

---

## 4. Ejemplo sencillo

```typescript
// Sin desestructuracion (tedioso)
console.log(audioPlayer.song);
console.log(audioPlayer.details.author);

// Con desestructuracion
const { song, songDuration: duration } = audioPlayer;
console.log(song);
console.log(duration);

// Desestructurar objeto anidado en dos pasos (mas legible)
const { details } = audioPlayer;
const { author } = details;
console.log(author);
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `const { propiedad } = objeto` | Extrae una propiedad del objeto en una nueva variable |
| `: nuevoNombre` | Renombra la variable al momento de desestructurar |
| Objeto anidado | Un objeto que contiene otro objeto como propiedad |
| `Ctrl + Espacio` | Muestra las propiedades disponibles del objeto en el editor |
| `Add missing properties` | Opcion de VS Code para agregar automaticamente las propiedades faltantes de una interfaz |

---

## 6. Resumen final en pocas palabras

La desestructuracion de objetos permite extraer propiedades especificas en variables de forma mas limpia y corta. Es una tecnica muy usada en Angular que facilita trabajar con objetos complejos sin repetir el nombre del objeto en cada acceso. Siempre se debe priorizar la legibilidad del codigo.
