# Leccion 17 - Priorizar Composicion sobre Herencia

---

## 1. Titulo de la leccion

**Composicion: alternativa a la herencia y base de la Inyeccion de Dependencias**

---

## 2. Que se aprende en esta leccion

Se explica por que es preferible usar composicion en lugar de herencia cuando hay multiples niveles. Se muestra como reemplazar el `extends` por una propiedad que recibe una instancia de otra clase, y como ese patron es la base de la Inyeccion de Dependencias en Angular.

---

## 3. Puntos clave explicados

- **Problema de la herencia en cadena:** Cuando una clase extiende de otra que extiende de otra, el codigo es dificil de leer y entender. Rastrear de donde viene cada propiedad se vuelve confuso con varios niveles.
- **Que es la composicion:** En lugar de extender una clase, se incluye una instancia de ella como propiedad. La clase hija "tiene" una persona en lugar de "ser" una persona.
- **Como implementar composicion:** Se elimina el `extends`, se agrega una propiedad de tipo `Person` en la clase y se crea o recibe una instancia de `Person` en el constructor.
- **Dependencia directa vs inyectada:** Si la clase crea ella misma la instancia con `new Person()`, depende directamente de ella. Cualquier cambio en `Person` afectara a la clase hija.
- **Inyeccion de la dependencia:** La solucion es que la clase **reciba** la instancia de `Person` como argumento del constructor en lugar de crearla internamente. Asi, si `Person` cambia, la clase hija no necesita modificarse.
- **Base de la Inyeccion de Dependencias en Angular:** Angular hace exactamente esto: detecta que una clase necesita una dependencia en su constructor y se la inyecta automaticamente. El codigo es literalmente el mismo patron que se acaba de ver.
- **Reutilizacion:** Al separar la instancia, la misma persona puede ser usada por multiples clases sin crear duplicados.

---

## 4. Ejemplo sencillo

```typescript
// Composicion: Hero "tiene" una Person, no "es" una Person
export class Hero {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,   // se inyecta desde afuera
  ) {}
}

// Crear la persona por separado
const tony = new Person('Tony Stark', 'Stark', 'New York');

// Inyectarla al crear el heroe
const ironman = new Hero('Ironman', 45, 'Tony', tony);

console.log(ironman);
// Hero { alterEgo: 'Ironman', age: 45, realName: 'Tony', person: Person { ... } }
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Composicion | Patron en el que una clase incluye instancias de otras clases como propiedades |
| Herencia | Patron en el que una clase extiende de otra; puede complicarse con multiples niveles |
| Inyeccion de Dependencias | Recibir una instancia ya creada como argumento del constructor en lugar de crearla internamente |
| `new Person()` dentro del constructor | Dependencia directa; la clase depende de como esta construida `Person` |
| Recibir `person: Person` en constructor | Dependencia inyectada; la clase no sabe como se construyo, solo la usa |

---

## 6. Resumen final en pocas palabras

La composicion reemplaza el `extends` por una propiedad que recibe una instancia de otra clase. Esto hace el codigo mas flexible, mas facil de leer y menos propenso a romper otras clases cuando algo cambia. Este patron es exactamente la Inyeccion de Dependencias que Angular usa para conectar servicios con componentes.
