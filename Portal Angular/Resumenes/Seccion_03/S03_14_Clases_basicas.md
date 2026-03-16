# Leccion 14 - Clases Basicas

---

## 1. Titulo de la leccion

**Introduccion a las Clases en TypeScript**

---

## 2. Que se aprende en esta leccion

Se aprende a crear clases en TypeScript, que son moldes para generar objetos con estructura y comportamiento definidos. Se explican las propiedades, los modificadores de acceso (`public` y `private`) y como crear instancias de una clase.

---

## 3. Puntos clave explicados

- **Que es una clase:** Es un molde que define como lucen y se comportan los objetos que se crean a partir de ella. Todas las instancias de esa clase tendran la misma estructura.
- **Diferencia con JavaScript:** Las clases de TypeScript funcionan mejor y tienen mas sentido semantico que en JavaScript puro, especialmente con modificadores de acceso como `private` y metodos estaticos.
- **Propiedades:** Las variables dentro de una clase se llaman **propiedades**. Se declaran con un modificador de acceso (`public` o `private`) seguido del nombre y tipo.
- **`public`:** La propiedad o metodo puede ser accedido desde fuera de la clase.
- **`private`:** La propiedad o metodo solo puede usarse dentro de la clase. Desde afuera, TypeScript marca un error si se intenta acceder.
- **Constructor:** Es el metodo especial que se ejecuta cuando se crea una instancia de la clase. Se puede usar para asignar valores iniciales a las propiedades con `this.nombre = valor`.
- **Instanciar una clase:** Se usa `new NombreClase()` para crear una nueva instancia. TypeScript reconoce el tipo automaticamente.
- **Advertencia sobre `private` en JavaScript:** Aunque TypeScript marca error al acceder a una propiedad privada, el codigo compilado a JavaScript no aplica esa restriccion. Es una proteccion en tiempo de escritura, no en ejecucion.
- **Metodos:** Las funciones dentro de una clase se llaman **metodos**.

---

## 4. Ejemplo sencillo

```typescript
export class Person {
  public name?: string;
  private address?: string;

  constructor() {
    this.name = 'Fernando';
    this.address = 'New York';
  }
}

// Crear instancia
const ironman = new Person();
console.log(ironman);        // Person { name: 'Fernando', address: 'New York' }
console.log(ironman.name);   // 'Fernando' (acceso permitido, es public)
// console.log(ironman.address); // ERROR: address es private
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `class` | Palabra clave para declarar una clase |
| `public` | La propiedad o metodo es accesible desde cualquier lugar |
| `private` | La propiedad o metodo solo es accesible dentro de la clase |
| `constructor` | Metodo especial que se ejecuta al crear una instancia |
| `this` | Hace referencia a la instancia actual de la clase |
| `new NombreClase()` | Crea una nueva instancia de la clase |
| Propiedad | Variable que vive dentro de una clase |
| Metodo | Funcion que vive dentro de una clase |
| `export class` | Exporta la clase para que pueda usarse en otros archivos |

---

## 6. Resumen final en pocas palabras

Las clases son moldes para crear objetos con estructura definida. TypeScript agrega tipado y modificadores de acceso (`public`/`private`) que permiten controlar que propiedades son visibles desde afuera. Crear una clase bien tipada sienta las bases para entender la Inyeccion de Dependencias que se usara en Angular.
