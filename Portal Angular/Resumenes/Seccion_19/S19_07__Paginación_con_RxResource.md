# Paginación con RxResource

## ¿Qué se aprende?

En esta lección se conecta la paginación con el sistema de carga de datos. Se lee el query parameter `page` del URL como una señal reactiva y se pasa al `rxResource` del `home-page` para que al cambiar de página se dispare automáticamente una nueva petición HTTP con el offset correcto.

---

## Puntos clave

**El objetivo: que el URL controle los datos mostrados**

Hasta ahora los botones cambian el URL pero los productos no reaccionan. Hay que leer el query parameter `page` del URL y convertirlo en una señal que el `rxResource` pueda usar como parte de su `request`.

**Leer el query parameter con `ActivatedRoute` y `toSignal`**

El servicio `ActivatedRoute` de Angular expone el Observable `queryParamMap`, que emite cada vez que los query parameters del URL cambian. Se combina con el operador `map` de RxJS para extraer el valor del parámetro `page` y se convierte a señal con `toSignal`:

```typescript
private activatedRoute = inject(ActivatedRoute);

currentPage = toSignal(
  this.activatedRoute.queryParamMap.pipe(
    map(params => +params.get('page')),
    map(page => isNaN(page) ? 1 : page)
  ),
  { initialValue: 1 }
);
```

- `params.get('page')` devuelve un string o `null`.
- El operador `+` convierte el string a número.
- Un segundo `map` con `isNaN` garantiza que si alguien escribe algo no numérico en el URL (como `?page=abc`), el valor sea `1` y no `NaN`.
- `{ initialValue: 1 }` evita que `toSignal` retorne `undefined` antes de la primera emisión.

**Por qué no sirve `snapshot.params`**

En la lección anterior se usó `snapshot` para leer parámetros de ruta porque la navegación a una página de género crea un nuevo componente. Aquí, en cambio, se navega entre páginas dentro del mismo componente `home-page`, así que Angular no destruye y recrea el componente. Por eso hay que suscribirse al Observable reactivo y no leer el snapshot una sola vez.

**Conectar `currentPage` al `rxResource`**

La señal `currentPage` se incluye en el objeto `request` del `rxResource`. Cuando la señal cambia, `rxResource` detecta el cambio y vuelve a ejecutar el `loader`:

```typescript
productsResource = rxResource({
  request: () => ({ page: this.currentPage() }),
  loader: ({ request }) => this.productsService.getProducts({
    offset: (request.page - 1) * 9
  })
});
```

La fórmula `(página - 1) × 9` convierte el número de página (base 1) al offset que espera el API (base 0). Por ejemplo:
- Página 1 → offset 0
- Página 2 → offset 9
- Página 6 → offset 45

**Pasar `currentPage` al componente de paginación**

Para que el botón activo se sincronice con el URL al recargar la página, se pasa `currentPage` como input al componente `app-pagination`:

```html
<app-pagination
  [pages]="productsResource.value()?.pages ?? 0"
  [currentPage]="currentPage()" />
```

**Resultado final**

Al hacer clic en un botón de página, el URL cambia (`?page=N`), la señal `currentPage` reacciona, el `rxResource` lanza una nueva petición HTTP con el offset calculado y los productos se actualizan. Al recargar el navegador en la página 4, la aplicación carga directamente los productos de esa página.

---

## Ejemplo sencillo

Imagina un ascensor con botones de piso. El query parameter `page` es el número de piso que alguien marcó. `toSignal` es la pantalla del ascensor que muestra en tiempo real el piso seleccionado. `rxResource` es el motor que mueve el ascensor cuando ese número cambia. Sin la pantalla reactiva, el motor no sabe a qué piso ir.

---

## Palabras clave y elementos importantes

- `ActivatedRoute` — servicio de Angular que expone información sobre la ruta activa, incluidos los query parameters
- `queryParamMap` — Observable del `ActivatedRoute` que emite cada vez que cambian los query parameters
- `params.get('page')` — extrae el valor del query parameter `page` como string; puede ser `null`
- `+valor` — convierte un string a número en JavaScript; produce `NaN` si el string no es numérico
- `isNaN(valor)` — función de JavaScript que devuelve `true` si el valor no es un número válido
- `map` — operador de RxJS que transforma cada valor emitido por un Observable
- `toSignal` — función de Angular que convierte un Observable en una señal; acepta `{ initialValue }` para evitar `undefined`
- `{ initialValue: 1 }` — valor que la señal tendrá antes de la primera emisión del Observable
- `request` en `rxResource` — función que retorna el objeto de parámetros que desencadena nuevas cargas cuando cambia
- `(página - 1) × 9` — fórmula para convertir número de página (base 1) a offset (base 0)
- `snapshot` — lectura única y no reactiva de los parámetros de ruta; no sirve para query parameters que cambian en la misma pantalla

---

## Resumen final

Esta lección completa el ciclo reactivo de la paginación. Se usa `ActivatedRoute.queryParamMap` combinado con `toSignal` para convertir el query parameter `page` del URL en una señal Angular. Esa señal se incluye en el `request` del `rxResource`, lo que provoca una nueva petición HTTP cada vez que la página cambia. El offset se calcula como `(página - 1) × 9`. Además se valida que el parámetro sea un número con `isNaN`, evitando errores si el usuario manipula el URL manualmente. Al final la paginación está completamente funcional y persiste al recargar el navegador.
