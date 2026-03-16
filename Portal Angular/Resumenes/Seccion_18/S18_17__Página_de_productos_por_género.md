# Página de productos por género

## ¿Qué se aprende?

En esta lección se implementa la página `gender-page`, que muestra productos filtrados por categoría (hombres, mujeres, niños). La clave es que esta página se reutiliza para los tres géneros y que el parámetro de la URL cambia sin destruir el componente, lo que requiere una señal reactiva en lugar de un snapshot estático.

---

## Puntos clave

**Por qué no usar `snapshot` aquí**

En la pantalla de detalle de producto (`product-page`) se usó `snapshot` porque el usuario no puede navegar de un producto a otro sin salir de la pantalla. En `gender-page` es distinto: el usuario puede ir de "Hombres" a "Mujeres" a "Niños" y siempre está en la misma pantalla, solo cambia el parámetro `gender` del URL. Como el componente no se destruye, `snapshot` no se actualizaría. Por eso se necesita observar los params de forma reactiva.

**Inyectar `ActivatedRoute`**

Se inyecta la ruta activa en el componente:

```typescript
route = inject(ActivatedRoute);
```

**Crear la señal `gender` con `toSignal`**

Para convertir el Observable de parámetros en una señal de Angular, se usa `toSignal` junto con el operador `map` de RxJS:

```typescript
gender = toSignal(
  this.route.params.pipe(
    map(params => params['gender'])
  )
);
```

Cada vez que el parámetro `gender` cambie en la URL, esta señal emite el nuevo valor y todo lo que dependa de ella se recalcula automáticamente.

**`rxResource` reactivo al género**

El recurso de productos se configura para que su `request` incluya el género como señal:

```typescript
productsResource = rxResource({
  request: () => ({ gender: this.gender() }),
  loader: ({ request }) => this.productsService.getProducts({ gender: request.gender })
});
```

Cuando `gender()` cambia, `rxResource` detecta el cambio en la `request` y dispara automáticamente una nueva petición HTTP con el género actualizado.

**Reutilizar el template del `home-page`**

El HTML de `gender-page` es prácticamente idéntico al de `home-page`: se usa el mismo `@for` sobre `productsResource().value?.products`, el mismo `product-card` y el mismo bloque `@empty`. Lo único que cambia es el título, donde se muestra el género activo:

```html
<h1>
  Todos los productos
  <span class="text-accent">{{ gender() }}</span>
</h1>
```

La clase `text-accent` resalta visualmente el nombre del género actual.

**Reutilización del `productsService`**

El mismo método `getProducts({ gender })` que usa `home-page` sirve para `gender-page`. Simplemente se pasa el valor del género como opción. Si el género es un string vacío, el backend devuelve todos los productos sin filtrar.

**Limitación: no hay caché**

Cada vez que el usuario navega entre géneros (o entre géneros y la página principal), se hace una nueva petición HTTP al backend. El instructor menciona que esto se puede resolver implementando un sistema de caché (por ejemplo, con un timeout de un minuto) o usando la librería TanStack Query. Eso queda fuera del alcance de esta lección.

---

## Ejemplo sencillo

Imagina una tienda con tres secciones: Hombres, Mujeres y Niños. En lugar de tener tres páginas separadas, se tiene una sola página inteligente que escucha cuál sección está activa y pide al servidor solo los productos de esa categoría. Cada vez que el cliente cambia de sección, la página se actualiza sola porque está "escuchando" el cambio en la URL.

---

## Palabras clave y elementos importantes

- `toSignal()` — convierte un Observable en una señal de Angular
- `map` (RxJS) — operador que transforma los valores emitidos por un Observable
- `route.params` — Observable que emite cada vez que cambian los parámetros de la ruta
- `gender` — señal derivada del parámetro `gender` de la URL
- `rxResource` — recurso reactivo que re-ejecuta el loader cuando cambia la `request`
- `request: () => ({ gender: this.gender() })` — función que hace la señal reactiva al género
- `getProducts({ gender })` — método del servicio reutilizado con el filtro de género
- `text-accent` — clase de Tailwind/daisyUI para resaltar el género activo en el título
- `snapshot` vs `params` Observable — diferencia clave: snapshot para rutas que no cambian en sí mismas, Observable para rutas que se actualizan dinámicamente
- Caché — mecanismo no implementado en esta lección que evitaría peticiones repetidas al navegar entre géneros

---

## Resumen final

`gender-page` es la misma estructura visual que `home-page` pero con un filtro dinámico de género. La diferencia técnica clave está en cómo se lee el parámetro de la URL: en lugar de `snapshot` (que solo captura el valor inicial), se usa `toSignal` sobre `route.params` para obtener una señal reactiva que se actualiza cada vez que el usuario navega entre géneros. El `rxResource` detecta ese cambio y dispara automáticamente una nueva petición al servicio, pasando el género como filtro. Con esto se cierra la Sección 18 del curso.
