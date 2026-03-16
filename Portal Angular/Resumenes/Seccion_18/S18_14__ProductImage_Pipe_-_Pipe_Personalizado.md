# ProductImage Pipe — Pipe personalizado

## ¿Qué se aprende?

En esta lección se crea un pipe personalizado reutilizable llamado `ProductImagePipe` que centraliza la lógica para construir el URL completo de una imagen de producto. El pipe maneja tres casos: recibir un string con el nombre de la imagen, recibir un arreglo de imágenes, o no recibir nada, mostrando en ese último caso una imagen placeholder.

---

## Puntos clave

**Por qué un pipe personalizado**

Construir el URL de la imagen directamente en cada componente (con template literals o señales `computed`) genera código repetido. Si el proyecto crece y se necesita mostrar imágenes de producto en el carrito, en pantallas de detalle u otros lugares, habría que duplicar esa lógica en varios sitios. Un pipe centraliza esa responsabilidad en un único lugar.

**Preparar la imagen placeholder**

Antes de implementar el pipe, hay que colocar una imagen de respaldo en el proyecto:

```
public/assets/images/no-image.jpg
```

Esta imagen se mostrará cuando un producto no tenga imágenes cargadas.

**Crear el archivo del pipe**

El archivo se crea en `src/app/products/pipes/product-image.pipe.ts`. Usando el snippet `a-pipe` se obtiene la estructura base. Los valores clave:

- Selector: `productImage`
- Clase: `ProductImagePipe`

**Lógica del pipe (método `transform`)**

El pipe recibe un valor que puede ser un `string` o un arreglo de strings (`string[]`). La lógica usa `typeof` para determinar el tipo, sin anidar condiciones ni usar `else`:

```typescript
const baseUrl = environment.baseUrl;

transform(value: string | string[]): string {
  // Caso 1: es un string (nombre de imagen directo)
  if (typeof value === 'string') {
    return `${baseUrl}/files/product/${value}`;
  }

  // Caso 2: es un arreglo — tomar la primera imagen
  const image = value.at(0);

  // Si el arreglo está vacío, mostrar placeholder
  if (!image) {
    return './assets/images/no-image.jpg';
  }

  // Caso 3: arreglo con al menos una imagen
  return `${baseUrl}/files/product/${image}`;
}
```

El método `value.at(0)` devuelve `undefined` si el arreglo está vacío, lo que dispara el retorno del placeholder. La variable `baseUrl` se toma de `environment.baseUrl` para no repetir la URL en duro.

**Buena práctica: evitar el `else` anidado**

El instructor enfatiza escribir código sin bloques `else` encadenados. Usando `return` temprano en cada condición, el código queda más plano, más legible y más fácil de mantener.

**Usar el pipe en `product-card`**

En el componente `product-card` se importa `ProductImagePipe` en el arreglo `imports`. Luego en el template se usa directamente:

```html
<img [src]="product().images | productImage" [alt]="product().title" />
```

Esto reemplaza tanto la señal `computed` como cualquier URL construida manualmente.

**Verificar el placeholder**

Para probar que el placeholder funciona, se puede pasar un arreglo vacío al pipe (`[] | productImage`) y verificar que muestra la imagen `no-image.jpg`.

---

## Ejemplo sencillo

Imagina una función que recibe el nombre de un archivo de foto y devuelve su dirección completa. Si no hay nombre, devuelve la foto genérica "sin imagen". Eso es exactamente lo que hace este pipe: convierte cualquier dato de imagen de producto (ya sea un nombre suelto o una lista) en una URL lista para mostrar en pantalla.

---

## Palabras clave y elementos importantes

- Pipe personalizado — transformación reutilizable que se aplica en el template con `|`
- `product-image.pipe.ts` — archivo ubicado en `src/app/products/pipes/`
- Selector `productImage` — nombre con el que se usa el pipe en el template
- `ProductImagePipe` — nombre de la clase del pipe
- `transform(value)` — método que ejecuta la transformación
- `typeof value === 'string'` — verificación del tipo de dato recibido
- `value.at(0)` — accede al primer elemento del arreglo sin lanzar error si está vacío
- Imagen placeholder — `./assets/images/no-image.jpg`, mostrada cuando no hay imágenes
- `environment.baseUrl` — URL base tomada de variables de entorno, no escrita en duro
- `return` temprano — técnica para evitar `else` anidado y mantener el código plano

---

## Resumen final

Esta lección resuelve el problema de construir URLs de imágenes de producto de forma reutilizable. Se crea el pipe `ProductImagePipe` en `src/app/products/pipes/`, que acepta un string o un arreglo de strings y devuelve siempre una URL válida: la imagen del producto si existe, o una imagen placeholder si el arreglo está vacío. La URL base se toma de `environment.baseUrl`. El pipe se importa en `product-card` y se aplica directamente en el template, simplificando el código y centralizando la lógica de imágenes para todo el proyecto.
