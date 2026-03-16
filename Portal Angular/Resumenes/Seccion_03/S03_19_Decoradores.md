# Leccion 19 - Decoradores

---

## 1. Titulo de la leccion

**Decoradores: funciones especiales que modifican el comportamiento de clases**

---

## 2. Que se aprende en esta leccion

Se introduce el concepto de decorador en TypeScript. Se explica que son, como se crean, como se usan con la sintaxis `@` y, lo mas importante, que en Angular los decoradores ya estan creados y el alumno solo los usara, no necesita crearlos.

---

## 3. Puntos clave explicados

- **Que es un decorador:** Es una funcion especial que se adjunta a una clase, propiedad o metodo usando el simbolo `@`. Puede modificar o extender el comportamiento del elemento al que se aplica.
- **Uso practico en Angular:** En Angular todo son clases. Lo que diferencia un componente de un servicio o un modulo es el decorador que se le pone. Ejemplos: `@Component`, `@Service`, `@Module`.
- **Los decoradores ya estan hechos:** Es muy raro que un desarrollador necesite crear sus propios decoradores en Angular. El 99% del tiempo se usan los decoradores que el equipo de Angular ya creo.
- **Habilitar decoradores experimentales:** Para usar decoradores en un proyecto de Vite, hay que agregar `"experimentalDecorators": true` en el archivo `tsconfig.json`. En Angular esto ya viene configurado.
- **Decorador de clase:** Para que una funcion sea un decorador de clase debe recibir un constructor como argumento. Puede devolver una nueva clase que extiende el constructor original, agregando propiedades o comportamientos extra.
- **Sintaxis `@nombre`:** Se escribe el nombre del decorador precedido de `@` justo antes de la clase, propiedad o metodo al que se aplica.
- **Caracteristica experimental (en proceso de estabilizarse):** Los decoradores estuvieron muchos anos como caracteristica experimental pero ya estan siendo estabilizados en los estandares de JavaScript.

---

## 4. Ejemplo sencillo

```typescript
// Decorador simple de clase
function classDecorator<T extends new (...args: any[]) => object>(constructor: T) {
  return class extends constructor {
    newProperty = 'New Property';
    hello = 'override';
  };
}

// Aplicar el decorador con @
@classDecorator
export class SuperClass {
  public myProperty: string = 'abc123';

  print() {
    console.log('Hola Mundo');
  }
}

const myClass = new SuperClass();
console.log(myClass);
// SuperClass { myProperty: 'abc123', newProperty: 'New Property', hello: 'override' }
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Decorador | Funcion que modifica el comportamiento de una clase, propiedad o metodo |
| `@nombre` | Sintaxis para aplicar un decorador |
| `@Component` | Decorador de Angular que convierte una clase en un componente |
| `@Injectable` | Decorador de Angular que convierte una clase en un servicio |
| `@NgModule` | Decorador de Angular que convierte una clase en un modulo |
| `experimentalDecorators` | Opcion del `tsconfig.json` que habilita el uso de decoradores |
| `tsconfig.json` | Archivo de configuracion de TypeScript del proyecto |

---

## 6. Resumen final en pocas palabras

Los decoradores son funciones que se adjuntan a clases con `@` y pueden modificar su comportamiento. En Angular, el decorador es lo que define si una clase es un componente, servicio o modulo. No es necesario crearlos, solo usarlos. Entender su existencia es suficiente para trabajar bien con Angular.
