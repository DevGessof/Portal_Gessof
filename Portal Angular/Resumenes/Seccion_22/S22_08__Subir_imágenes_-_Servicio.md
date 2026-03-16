# Subir imágenes — Servicio

## ¿Qué se aprende?

Esta lección implementa en `ProductsService` los métodos necesarios para subir imágenes al backend. Se explica cómo funciona el endpoint de carga de archivos, cómo construir un `FormData` para enviar una imagen por HTTP, y cómo usar el operador `forkJoin` de RxJS para subir múltiples imágenes en paralelo y esperar a que todas terminen antes de continuar.

---

## Puntos clave

**El endpoint de carga de archivos**

El backend expone un endpoint `POST /api/files/product` que recibe una imagen a la vez. El body debe ser `multipart/form-data` con una clave llamada exactamente `"file"` cuyo valor es el archivo de imagen. La respuesta incluye el `fileName` (nombre con el que quedó guardado en el servidor), que es lo que se almacenará después en el producto.

**Método `uploadImage(imageFile: File): Observable<string>`**

Este método sube una única imagen y devuelve el nombre del archivo guardado:

```typescript
private uploadImage(imageFile: File): Observable<string> {
  const formData = new FormData();
  formData.append('file', imageFile);

  return this.http.post<{ fileName: string }>(`${baseUrl}/files/product`, formData)
    .pipe(
      map(resp => resp.fileName)
    );
}
```

- `new FormData()` — API nativa de JavaScript que no requiere importación; crea el contenedor para datos de formulario multipart.
- `formData.append('file', imageFile)` — añade el archivo con la clave `'file'`, que es exactamente la que espera el backend.
- El tipo genérico `<{ fileName: string }>` le dice a Angular HttpClient qué forma tiene la respuesta.
- `.pipe(map(resp => resp.fileName))` — transforma la respuesta para extraer solo el nombre del archivo, cumpliendo con el tipo de retorno `Observable<string>`.

**Método `uploadImages(images?: FileList): Observable<string[]>`**

Este método recibe el `FileList` completo y sube todas las imágenes en paralelo:

```typescript
uploadImages(images?: FileList): Observable<string[]> {
  if (!images) return of([]);

  const uploadObservables = Array.from(images)
    .map(imageFile => this.uploadImage(imageFile));

  return forkJoin(uploadObservables).pipe(
    tap(imageNames => console.log(imageNames))
  );
}
```

- Si `images` es `undefined` o `null`, se devuelve `of([])` (un Observable que emite inmediatamente un arreglo vacío), cumpliendo el contrato de retorno sin hacer ninguna petición.
- `Array.from(images)` convierte el `FileList` en arreglo estándar para poder usar `.map`.
- `.map(imageFile => this.uploadImage(imageFile))` crea un arreglo de Observables, uno por imagen. Cada Observable representa la petición HTTP para subir esa imagen.
- El parámetro es opcional (`images?`) para mayor flexibilidad: si no se seleccionaron imágenes, el flujo continúa sin errores.

**`forkJoin`: el equivalente de `Promise.all` para Observables**

`forkJoin` recibe un arreglo de Observables y emite un único valor cuando **todos** se completan exitosamente. Ese valor es un arreglo con el resultado de cada Observable en el mismo orden.

```typescript
forkJoin([obs1, obs2, obs3]) // espera que los 3 terminen
  .subscribe(([res1, res2, res3]) => { ... })
```

- Si una imagen se sube antes que las otras, `forkJoin` espera a las demás.
- Si alguna falla, `forkJoin` lanza el error completo (se puede controlar con `catchError` en el Observable individual si se quiere continuar aunque alguna falle).
- Se importa de `'rxjs'`: `import { forkJoin } from 'rxjs'`.

**Por qué se suben de una en una y no en lote**

El backend solo acepta un archivo por petición (`POST /api/files/product`). Para subir N imágenes se hacen N peticiones en paralelo. `forkJoin` es exactamente la herramienta correcta para este patrón: lanza todas las peticiones al mismo tiempo y espera a que la última termine.

---

## Ejemplo sencillo

`forkJoin` es como enviar varios mensajes de correo al mismo tiempo y esperar a recibir respuesta de todos antes de continuar: no importa cuál llegue primero, se espera hasta tener todas las respuestas. Si uno falla, se considera que la operación completa falló.

---

## Palabras clave y elementos importantes

- `POST /api/files/product` — endpoint del backend para subir una imagen; body: `multipart/form-data` con clave `"file"`
- `new FormData()` — API nativa del navegador para construir datos de formulario multipart; no requiere importación
- `formData.append('file', imageFile)` — añade el archivo con la clave que espera el backend
- `uploadImage(imageFile: File): Observable<string>` — método privado que sube una imagen y devuelve el `fileName` del servidor
- `map(resp => resp.fileName)` — extrae solo el nombre del archivo de la respuesta del backend
- `uploadImages(images?: FileList): Observable<string[]>` — método público que sube todas las imágenes en paralelo
- `of([])` — Observable que emite inmediatamente un arreglo vacío; se usa como retorno cuando no hay imágenes
- `Array.from(images).map(...)` — convierte `FileList` en arreglo y crea un Observable por imagen
- `forkJoin(uploadObservables)` — espera a que todos los Observables emitan; equivalente a `Promise.all` para Observables; falla si cualquiera falla

---

## Resumen final

Esta lección crea dos métodos en `ProductsService`: `uploadImage` (privado) sube un solo archivo usando `FormData` + `POST /api/files/product` y devuelve el `fileName`; `uploadImages` (público) convierte el `FileList` en un arreglo de Observables y usa `forkJoin` para subirlos todos en paralelo, esperando a que todos terminen antes de emitir el arreglo de nombres. Si no hay imágenes, devuelve `of([])` para no interrumpir el flujo. En la siguiente lección se conectarán estos métodos con la actualización y creación del producto.
