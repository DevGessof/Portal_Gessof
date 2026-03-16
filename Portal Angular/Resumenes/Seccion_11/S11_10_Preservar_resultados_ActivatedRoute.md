# Lección 10 - Preservar resultados con ActivatedRoute y linkedSignal

---

## ¿Qué se aprende en esta lección?

Se implementa la preservación del estado de búsqueda usando el URL. Cuando el usuario busca algo y navega a otra pantalla, al regresar el término de búsqueda sigue visible porque está guardado como un query parameter en el URL. También se introduce `linkedSignal`, una nueva herramienta de Angular para inicializar señales con un valor calculado.

---

## Puntos clave explicados

- **El problema a resolver:** Al buscar "Madrid" y entrar al detalle de un país, al regresar la caja de texto queda vacía y los resultados desaparecen, porque todo estaba en memoria.

- **Solución con query parameters en el URL:** En lugar de guardar el término en memoria, se almacena en el URL como un query parameter (ejemplo: `?query=madrid`). Así, al recargar o compartir el URL, la información se preserva.

- **`ActivatedRoute`:** Servicio de Angular que da acceso a la información de la ruta activa, incluyendo los query parameters del URL actual.

- **`snapshot.queryParamMap.get('query')`:** Forma de leer el valor actual de un query parameter del URL de manera estática (no reactiva). Es útil cuando solo se necesita leer el valor una vez al cargar la pantalla.

- **`snapshot` vs suscripción:** El `snapshot` es una fotografía del estado actual de la ruta, no reactiva. Si se necesita reaccionar a cambios del URL en tiempo real, habría que suscribirse al Observable de `queryParams` o `queryParamMap`. Para este caso, el `snapshot` es suficiente.

- **Propiedad `queryParam`:** Se crea en el componente para guardar el valor leído del URL. Siempre será un string (o string vacío si no hay valor en el URL).

- **Inicializar la señal `query` con `queryParam`:** Se intenta inicializar la señal `query` con el valor de `queryParam`. Sin embargo, esto no funciona como se espera porque el efecto del componente de búsqueda emite un string vacío 500 ms después, sobreescribiendo el valor.

- **`linkedSignal`:** Solución al problema anterior. Es una nueva herramienta de Angular que crea una señal cuyo valor inicial se calcula a partir de un proceso o función. Después, la señal se comporta como cualquier otra señal modificable. Con `linkedSignal`, el `inputValue` del campo de búsqueda se inicializa correctamente con el `queryParam` leído del URL.

- **`initialValue` como input del componente:** Se agrega al componente de búsqueda un `input` llamado `initialValue` para que la pantalla que lo usa pueda pasarle el valor inicial que debe mostrar en la caja de texto.

---

## Ejemplo sencillo

```typescript
// Leer el query parameter del URL al cargar la pantalla
activatedRoute = inject(ActivatedRoute);

queryParam = this.activatedRoute.snapshot
  .queryParamMap.get('query') ?? '';

// Inicializar la señal de búsqueda con ese valor usando linkedSignal
query = linkedSignal(() => this.queryParam);
```

Si el URL es `/country/by-capital?query=madrid`, la caja de texto mostrará "madrid" al cargar y la búsqueda se ejecutará automáticamente.

---

## Funciones, palabras clave o elementos importantes

- **`ActivatedRoute`:** Servicio de Angular que provee información sobre la ruta activa (params, query params, etc.).
- **`snapshot`:** Fotografía estática de la ruta en un momento dado. No reactiva.
- **`queryParamMap.get('query')`:** Obtiene el valor del query parameter llamado `query` del URL.
- **`linkedSignal()`:** Nueva función de Angular que crea una señal con un valor inicial calculado. Luego puede modificarse como cualquier señal normal.
- **`input()` (Angular signals):** Permite que un componente reciba un valor desde el componente padre como un `input` reactivo.
- **`initialValue`:** Propiedad que se agrega al componente de búsqueda para recibir el texto inicial que debe mostrar.

---

## Resumen final en pocas palabras

Para preservar el estado de búsqueda al navegar, se lee el query parameter del URL con `ActivatedRoute` y se usa `linkedSignal` para inicializar correctamente la señal del campo de búsqueda. Esto permite que al recargar la página o regresar desde otra pantalla, el término de búsqueda y los resultados sigan visibles.
