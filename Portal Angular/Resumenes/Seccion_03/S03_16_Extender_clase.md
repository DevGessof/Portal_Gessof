# Leccion 16 - Extender una Clase (Herencia)

---

## 1. Titulo de la leccion

**Herencia de clases con `extends` y uso de `super`**

---

## 2. Que se aprende en esta leccion

Se aprende a crear una clase que hereda propiedades y comportamientos de otra usando la palabra `extends`. Tambien se explica el uso de `super` para llamar al constructor de la clase padre y los riesgos de usar herencia en multiples niveles.

---

## 3. Puntos clave explicados

- **`extends`:** Permite que una clase nueva herede todo lo que tiene otra clase. La clase nueva se llama **clase hija** y la original **clase padre**.
- **Lo que se hereda:** La clase hija automaticamente tiene todas las propiedades y metodos de la clase padre, ademas de los propios que se le agreguen.
- **`super`:** Es una funcion especial que llama al constructor de la clase padre. Cuando la clase hija define su propio constructor, debe llamar a `super(...)` pasando los argumentos que el constructor del padre necesita.
- **Nuevo constructor en la clase hija:** La clase hija puede tener su propio constructor con propiedades adicionales. Las que pertenecen al padre se pasan con `super(...)`.
- **Riesgo de herencia en cadena:** Cuando una clase extiende de otra que a su vez extiende de otra, el codigo se vuelve dificil de leer y mantener. Se recomienda evitar mas de un nivel de herencia.
- **Recomendacion:** Priorizar la **composicion** sobre la herencia (tema de la siguiente leccion).

---

## 4. Ejemplo sencillo

```typescript
export class Person {
  constructor(
    public name: string,
    private address: string = 'No Address',
  ) {}
}

export class Hero extends Person {
  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
  ) {
    super(realName, 'New York'); // llama al constructor de Person
  }
}

const ironman = new Hero('Ironman', 45, 'Tony');
console.log(ironman);
// Hero { name: 'Tony', address: 'New York', alterEgo: 'Ironman', age: 45, realName: 'Tony' }
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `extends` | Indica que una clase hereda de otra |
| `super(...)` | Llama al constructor de la clase padre; obligatorio si la clase hija tiene constructor propio |
| Clase padre | La clase de la que se hereda |
| Clase hija | La clase que extiende y hereda de otra |
| Herencia en cadena | Cuando hay multiples niveles de extension; dificulta la lectura del codigo |
| Composicion | Alternativa a la herencia; se prefiere para mantener el codigo simple |

---

## 6. Resumen final en pocas palabras

La herencia con `extends` permite que una clase reutilice propiedades y metodos de otra. Es util para un nivel, pero se vuelve compleja cuando hay multiples niveles encadenados. En esos casos, la composicion es una mejor alternativa que se vera en la siguiente leccion.
