# Leccion 08 - Tarea sobre Objetos e Interfaces

---

## 1. Titulo de la leccion

**Tarea practica: Crear una interfaz para un SuperHeroe**

---

## 2. Que se aprende en esta leccion

Esta leccion plantea una tarea practica en la que el alumno debe crear por su cuenta una interfaz que defina la estructura de un objeto SuperHeroe. Tambien se presenta la solucion del instructor y se refuerzan buenas practicas de nombrado y organizacion del codigo.

---

## 3. Puntos clave explicados

- **Tarea propuesta:** Se proporciona un objeto de tipo SuperHeroe ya creado con propiedades y metodos. El alumno debe definir la interfaz que lo describa correctamente.
- **TypeScript como guia:** Dejando el cursor sobre el objeto sin interfaz, TypeScript puede inferir la estructura y mostrarla como sugerencia, lo cual ayuda a construir la interfaz.
- **Objetos dentro de objetos:** El SuperHeroe tiene una propiedad `address` que es a su vez un objeto. Se recomienda crear una interfaz separada para ese objeto interno.
- **Interfaces anidadas:** Cuando un objeto tiene propiedades que son otros objetos, la buena practica es separar cada uno en su propia interfaz para que el codigo sea mas facil de leer y mantener.
- **Renombrar variables con F2:** Visual Studio Code permite renombrar una propiedad en todos los lugares donde se use al mismo tiempo, usando la tecla `F2`.
- **UpperCamelCase para interfaces:** Los nombres de las interfaces deben comenzar con letra mayuscula y cada palabra nueva tambien en mayuscula. Ejemplo: `SuperHero`, `Address`.
- **Codigo limpio en ingles:** Se recomienda escribir el codigo en ingles para que sea mas profesional, universal y legible.

---

## 4. Ejemplo sencillo

```typescript
interface Address {
  street: string;
  country: string;
  city: string;
}

interface SuperHero {
  name: string;
  age: number;
  address: Address;
  showAddress: () => string;
}

const spiderman: SuperHero = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: '5th Avenue',
    country: 'USA',
    city: 'New York',
  },
  showAddress() {
    return `${this.name}, ${this.address.city}, ${this.address.country}`;
  },
};
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `interface` | Define la estructura que debe cumplir un objeto |
| `UpperCamelCase` | Convencion de nombres para interfaces y clases (primera letra en mayuscula) |
| `camelCase` | Convencion para variables, metodos y propiedades |
| `F2` | Tecla en VS Code para renombrar una propiedad en todos los lugares a la vez |
| `Ctrl + Espacio` | Fuerza el autocompletado del editor para ver opciones disponibles |
| Interfaz anidada | Cuando un objeto dentro de otro objeto tambien tiene su propia interfaz |
| `() => string` | Sintaxis para definir un metodo en una interfaz que devuelve texto |

---

## 6. Resumen final en pocas palabras

Esta leccion refuerza el uso de interfaces mediante una tarea practica sobre un objeto SuperHeroe con propiedades anidadas. Se aprende a separar objetos internos en sus propias interfaces, a nombrar correctamente con UpperCamelCase y a usar herramientas del editor como F2 para renombrar de forma segura en todo el proyecto.
