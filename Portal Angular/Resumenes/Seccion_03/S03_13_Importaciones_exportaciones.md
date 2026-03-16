# Leccion 13 - Importaciones y Exportaciones

---

## 1. Titulo de la leccion

**Modulos: como exportar e importar codigo entre archivos**

---

## 2. Que se aprende en esta leccion

Se aprende el concepto de modulo y como compartir codigo entre archivos usando las palabras `export` e `import`. Esto permite reutilizar interfaces, funciones y constantes desde cualquier parte del proyecto sin duplicar codigo.

---

## 3. Puntos clave explicados

- **Que es un modulo:** Un archivo se convierte en modulo cuando exporta algo. Lo que esta dentro del modulo esta encapsulado y solo lo que se exporta explicitamente queda disponible para otros archivos.
- **`export` en interfaces y funciones:** Se coloca la palabra `export` antes de la declaracion para exponerla al exterior. Ejemplo: `export interface Product { ... }` o `export const taxCalculation = ...`.
- **`import` con desestructuracion:** Para importar algo de otro archivo se usa la sintaxis `import { Nombre } from './ruta-del-archivo'`. No hace falta escribir la extension `.ts`.
- **IntelliSense para importaciones:** Cuando se empieza a escribir el nombre de una funcion o interfaz ya exportada, el editor de VS Code sugiere automaticamente agregarla al `import` desde el archivo correcto.
- **Navegar a la definicion:** Con `Ctrl + clic` (o `Cmd + clic` en Mac) sobre el nombre de una funcion o interfaz se puede ir directamente al archivo donde esta definida.
- **Evitar ejecutar codigo en modulos:** Los archivos que se importan se ejecutan completos al ser requeridos. Por eso, los modulos solo deben contener definiciones (interfaces, funciones, constantes), nunca codigo que se ejecute directamente como `console.log`, para no generar efectos no deseados al importar.
- **Reutilizacion real:** Al exportar la interfaz `Product` y la funcion `taxCalculation` desde un archivo, otro archivo puede importarlas y usarlas sin redefinirlas.

---

## 4. Ejemplo sencillo

```typescript
// En 06-function-destructuring.ts
export interface Product {
  description: string;
  price: number;
}

export const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
  // ...implementacion
};

// En 07-import-export.ts
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
  { description: 'Nokia', price: 100 },
  { description: 'iPad', price: 150 },
];

const [total, tax] = taxCalculation({ products: shoppingCart, tax: 0.15 });
console.log('Total', total);
console.log('Tax', ax);
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `export` | Expone una declaracion (interfaz, funcion, constante) para que otros archivos la usen |
| `import { X } from './ruta'` | Importa una declaracion especifica desde otro archivo |
| Modulo | Archivo que exporta al menos algo; su contenido queda encapsulado |
| `Ctrl + clic` | Navega directamente a la definicion de una funcion o interfaz |
| IntelliSense de importacion | VS Code sugiere automaticamente el `import` cuando se usa algo exportado |
| `.ts` en importacion | No es necesario incluir la extension al importar archivos TypeScript |

---

## 6. Resumen final en pocas palabras

Los modulos permiten organizar el codigo en archivos separados y compartir solo lo necesario mediante `export` e `import`. Esto evita duplicar codigo, facilita la reutilizacion y es la base del desarrollo profesional tanto en TypeScript como en Angular.
