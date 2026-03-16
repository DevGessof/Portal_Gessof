# Variables de entorno y parametrización

## ¿Qué se aprende?

En esta lección se elimina la URL escrita en duro dentro del servicio y se mueve a variables de entorno de Angular. Además, se parametriza el método `getProducts()` para aceptar opciones de paginación y filtrado por género, haciendo el servicio reutilizable para múltiples páginas del proyecto.

---

## Puntos clave

**Por qué evitar valores en duro (hardcoded)**

Si una URL como `http://localhost:3000/api` se escribe directamente en el código, cuando la aplicación se publique en producción habrá que buscarla y cambiarla en múltiples archivos. Eso genera deuda técnica. Las variables de entorno permiten centralizar ese valor y que Angular lo sustituya automáticamente según el entorno.

**Generar los archivos de entorno**

Se ejecuta en la terminal:

```
ng g environments
```

Esto modifica `angular.json` y crea dos archivos en `src/environments/`: `environment.ts` (producción) y `environment.development.ts` (desarrollo). A ambos se les agrega:

```typescript
export const environment = {
  baseUrl: 'http://localhost:3000/api'
};
```

No debe terminarse con barra diagonal (`/`) al final del valor, para evitar URLs con doble barra al concatenar rutas.

**Cómo usa Angular los entornos**

Angular sustituye automáticamente `environment.ts` por `environment.development.ts` cuando se ejecuta en modo desarrollo (`ng serve`). En producción (`ng build`) usa `environment.ts`. Por eso siempre se importa desde `environment.ts` (el de producción), no el de desarrollo.

**Aplicar la variable en el servicio**

En `products.service.ts` se define una constante local:

```typescript
private baseUrl = environment.baseUrl;
```

Y en el método `getProducts()` se usa con un template literal:

```typescript
return this.http.get<ProductsResponse>(`${this.baseUrl}/products`, { params });
```

Los backticks (`` ` ``) son obligatorios para usar la interpolación `${}`.

**Parámetros de la API: limit, offset y gender**

El backend acepta tres parámetros opcionales en la URL:

- `limit`: cuántos productos traer por página (recomendado: 9, para mostrar 3 filas de 3)
- `offset`: cuántos productos saltarse al inicio (para paginación: 0, 9, 18...)
- `gender`: filtrar por categoría (`men`, `women`, `kid`, `unisex`)

El género `unisex` aparece en las búsquedas de `men`, `women` y `kid` como comodín.

**Interfaz `Options` y desestructuración con valores por defecto**

Se define una interfaz local en el servicio:

```typescript
interface Options {
  limit?: number;
  offset?: number;
  gender?: string;
}
```

El método `getProducts()` recibe un objeto de opciones y lo desestructura asignando valores por defecto:

```typescript
getProducts({ limit = 9, offset = 0, gender = '' }: Options) {
  return this.http.get<ProductsResponse>(`${this.baseUrl}/products`, {
    params: { limit, offset, gender }
  });
}
```

Si no se manda ningún argumento, se usa `getProducts({})` con un objeto vacío.

**Ventaja de la desestructuración**

Extraer cada opción individualmente hace más fácil asignar valores por defecto y mantener el código legible. Pasar las opciones directamente también es válido, pero la desestructuración es más clara visualmente.

---

## Ejemplo sencillo

Imagina que tienes un buscador de ropa que siempre muestra 9 prendas por pantalla. Cuando entras a la sección de "niños", el buscador filtra por `gender=kid`. Cuando pasas a la segunda pantalla, salta los primeros 9 con `offset=9`. Todo ese comportamiento lo controla el mismo método `getProducts()` con sus tres opciones. Y la dirección del servidor (`baseUrl`) está guardada en un solo lugar: los archivos de entorno.

---

## Palabras clave y elementos importantes

- `ng g environments` — genera los archivos de variables de entorno
- `environment.ts` / `environment.development.ts` — archivos en `src/environments/`
- `baseUrl` — variable que almacena la URL base de la API
- `interface Options` — interfaz local con `limit`, `offset` y `gender` opcionales
- `limit` — número de productos por página (valor por defecto: 9)
- `offset` — cuántos registros saltar para la paginación (valor por defecto: 0)
- `gender` — filtro de categoría: `men`, `women`, `kid`, `unisex` (valor por defecto: `''`)
- `params` — segundo argumento de `http.get()` para enviar query parameters
- Deuda técnica — código que funciona hoy pero que será difícil de cambiar mañana

---

## Resumen final

Esta lección enseña dos mejoras importantes al servicio de productos: primero, mover la URL del servidor a variables de entorno con `ng g environments` para poder cambiarla fácilmente entre desarrollo y producción; segundo, parametrizar el método `getProducts()` con una interfaz `Options` que acepta `limit`, `offset` y `gender`, todos opcionales y con valores por defecto. El resultado es un servicio flexible que sirve tanto para la página principal como para las páginas filtradas por género, sin repetir código.
