# Leccion 15 - Constructor de una Clase

---

## 1. Titulo de la leccion

**El constructor: forma corta y bases de la Inyeccion de Dependencias**

---

## 2. Que se aprende en esta leccion

Se profundiza en el constructor de una clase: como recibir argumentos, como asignar valores a las propiedades y como usar la **forma corta** que TypeScript ofrece para declarar y asignar propiedades en una sola linea. Se introduce ademas el concepto de Inyeccion de Dependencias.

---

## 3. Puntos clave explicados

- **Que es el constructor:** Es el primer metodo que se ejecuta cuando se crea una instancia de la clase con `new`. Es una funcion especial que acepta argumentos como cualquier otra.
- **Argumentos obligatorios y opcionales:** Los argumentos del constructor funcionan igual que en cualquier funcion: pueden ser obligatorios, opcionales (`?`) o tener valores por defecto (`= 'valor'`).
- **Forma tradicional:** Se declaran las propiedades arriba de la clase y se asignan dentro del constructor usando `this.nombre = argumento`.
- **Forma corta (recomendada):** En lugar de declarar las propiedades por separado y asignarlas en el constructor, se puede declarar todo directamente en los parametros del constructor con el modificador de acceso. TypeScript crea y asigna la propiedad automaticamente.
- **Valores por defecto en constructor:** Se puede asignar un valor por defecto directamente en el parametro del constructor. Ejemplo: `private address: string = 'No Address'`.
- **Base de la Inyeccion de Dependencias:** Este patron de recibir valores en el constructor es exactamente el mismo mecanismo que usa Angular para inyectar servicios. La unica diferencia es que en Angular se inyectan instancias de clases en lugar de strings.

---

## 4. Ejemplo sencillo

```typescript
// Forma tradicional (mas verbosa)
export class Person {
  public name: string;
  private address: string;

  constructor(name: string, address: string) {
    this.name = name;
    this.address = address;
  }
}

// Forma corta (recomendada en TypeScript)
export class Person {
  constructor(
    public name: string,
    private address: string = 'No Address',
  ) {}
}

// Uso
const ironman = new Person('Ironman', 'New York');
const anonymous = new Person('Anonimo'); // address = 'No Address'
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `constructor` | Metodo que se ejecuta al crear una instancia; recibe los argumentos de inicializacion |
| `this.propiedad` | Accede a la propiedad de la instancia actual |
| Forma corta | Declarar propiedades directamente en los parametros del constructor con `public`/`private` |
| `= 'valor'` en constructor | Asigna valor por defecto al parametro si no se proporciona al instanciar |
| Inyeccion de Dependencias | Patron en el que Angular inyecta automaticamente instancias de clases en el constructor |

---

## 6. Resumen final en pocas palabras

El constructor es el punto de entrada de una clase. La forma corta de TypeScript permite declarar y asignar propiedades en una sola linea dentro del constructor, haciendo el codigo mas compacto. Este mismo patron es la base de la Inyeccion de Dependencias, uno de los mecanismos mas importantes de Angular.
