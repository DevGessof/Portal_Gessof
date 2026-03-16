# Seccion 2 - Leccion 2: ¿Que es TypeScript? ¿Por que Angular lo usa?

---

## ¿Que se aprende en esta leccion?

Esta leccion explica de forma sencilla que es TypeScript, en que se diferencia de JavaScript y por que Angular lo utiliza obligatoriamente. Es una leccion teorica que sienta las bases para entender mejor el codigo que se escribira mas adelante.

---

## Puntos clave explicados

- **TypeScript es un "superset" de JavaScript**
  Eso significa que TypeScript contiene todo lo que tiene JavaScript y le agrega cosas extra: principalmente el manejo de tipos de datos y estructuras orientadas a objetos. En pocas palabras, es una version mas poderosa de JavaScript.

- **Todo codigo JavaScript valido funciona en TypeScript**
  El 99.9% del codigo que se escribe en JavaScript es compatible directamente con TypeScript. Esto hace que sea mas facil comenzar a usarlo si ya se sabe algo de JavaScript.

- **La principal diferencia: el tipado**
  JavaScript es "debilmente tipado", lo que significa que no exige declarar que tipo de dato usa una variable. TypeScript es "fuertemente tipado", lo que obliga a especificarlo. Esto ayuda a detectar errores antes de ejecutar el codigo.

- **Los archivos TypeScript tienen extension ".ts"**
  Mientras que los archivos JavaScript tienen extension ".js", los de TypeScript usan ".ts". Esa es la forma mas facil de distinguirlos.

- **TypeScript muestra errores mientras se escribe el codigo**
  En JavaScript, muchos errores solo se descubren cuando la aplicacion se ejecuta. TypeScript los detecta directamente en el editor, lo que ahorra tiempo y reduce errores.

- **TypeScript obliga a documentar el codigo**
  Al definir tipos de datos y estructuras, el codigo queda mas claro y es mas facil de entender por otros programadores.

- **Por que Angular usa TypeScript: los decoradores**
  Angular usa una caracteristica de TypeScript llamada "decoradores". Estos son etiquetas especiales que se colocan sobre una Clase para decirle a Angular que tipo de pieza es: si es un componente, un servicio, una directiva, etc. Esto hace que Angular funcione de forma muy uniforme y ordenada.

- **TypeScript es ampliamente adoptado**
  Frameworks como React, Vue y muchos otros soportan TypeScript. Algunos lo hacen opcional, pero Angular lo requiere por su diseno.

- **El codigo TypeScript se "transpila" a JavaScript**
  Los navegadores no entienden TypeScript directamente. Por eso, antes de ejecutarse, el codigo TypeScript se convierte automaticamente a JavaScript. Eso significa que cualquier libreria escrita en JavaScript tambien puede usarse en proyectos Angular.

---

## Ejemplo sencillo

Supongamos que tenemos una funcion para calcular el impuesto de un producto.

- En **JavaScript**, no se sabe exactamente que propiedades tiene el producto ni si el codigo va a funcionar hasta ejecutarlo.
- En **TypeScript**, se define exactamente como luce el producto (sus propiedades y tipos de datos), y si algo esta mal, el editor lo marca con un error antes de ejecutar nada.

Esto hace que el codigo sea mas seguro y mas facil de entender.

---

## Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| **TypeScript** | Version extendida de JavaScript con tipado de datos y orientacion a objetos. |
| **Superset** | Conjunto que contiene todo lo de otro mas elementos adicionales. TypeScript es un superset de JavaScript. |
| **Tipado estricto** | Caracteristica de TypeScript que obliga a declarar el tipo de cada dato (numero, texto, objeto, etc.). |
| **Tipado debil** | Caracteristica de JavaScript que no exige declarar el tipo de dato de las variables. |
| **Extension ".ts"** | Extension de los archivos TypeScript, equivalente al ".js" de JavaScript. |
| **Decoradores** | Etiquetas especiales de TypeScript que le dicen a Angular que tipo de pieza de codigo es una Clase. |
| **Clase** | Estructura de codigo orientada a objetos. En Angular, casi todo esta construido sobre Clases. |
| **Transpilacion** | Proceso de convertir codigo TypeScript a JavaScript para que el navegador pueda ejecutarlo. |
| **Microsoft** | Empresa creadora y duena de TypeScript. |

---

## Resumen final en pocas palabras

TypeScript es una version mejorada de JavaScript que agrega tipos de datos y estructuras orientadas a objetos. Angular lo usa porque permite organizar el codigo de manera uniforme a traves de los decoradores, y porque detecta errores antes de ejecutar la aplicacion. Todo el codigo TypeScript termina convirtiendose a JavaScript para que los navegadores puedan entenderlo.
