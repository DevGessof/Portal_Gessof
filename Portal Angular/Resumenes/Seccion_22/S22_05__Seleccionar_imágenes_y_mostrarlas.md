# Seleccionar imágenes y mostrarlas

## ¿Qué se aprende?

Esta lección implementa la selección múltiple de imágenes y su vista previa inmediata en el formulario del producto. Se configura el `<input type="file">` para aceptar solo imágenes y múltiples archivos, se genera una URL temporal por cada archivo usando `URL.createObjectURL`, se almacena tanto el `FileList` como los URLs temporales en propiedades del componente, y se muestran las imágenes seleccionadas en una grilla debajo del formulario.

---

## Puntos clave

**Configuración del `<input type="file">`**

El `input` ya existía en el HTML del formulario. Se añaden dos atributos:

```html
<input
  type="file"
  multiple
  accept="image/*"
  (change)="onFilesChanged($event)"
/>
```

- `multiple` — permite seleccionar más de un archivo a la vez (con `Shift` o `Ctrl`). Sin este atributo, el explorador de archivos solo permite elegir uno.
- `accept="image/*"` — filtra el explorador de archivos para mostrar solo imágenes (jpg, png, webp, etc.). Los archivos de otros tipos quedan deshabilitados en el explorador.
- `(change)="onFilesChanged($event)"` — escucha el evento de cambio del input y llama al método del componente pasando el evento.

**Método `onFilesChanged(event: Event)`**

```typescript
onFilesChanged(event: Event): void {
  const fileList = (event.target as HTMLInputElement).files;

  this.imageFileList = fileList ?? undefined;

  const imageUrls = Array.from(fileList ?? [])
    .map(file => URL.createObjectURL(file));

  this.tempImages.set(imageUrls);
}
```

- `event.target as HTMLInputElement` — el evento es de tipo genérico `Event`, por lo que se hace un cast a `HTMLInputElement` para poder acceder a la propiedad `.files`.
- `.files` — devuelve un objeto de tipo `FileList` (no un arreglo normal), que contiene los archivos seleccionados.
- `Array.from(fileList ?? [])` — convierte el `FileList` en un arreglo JavaScript estándar para poder usar `.map`. El `?? []` evita errores si `fileList` es `null`.
- `URL.createObjectURL(file)` — API nativa del navegador (no requiere importación) que genera una URL temporal de tipo `blob:` que apunta al archivo local. Esta URL solo es válida mientras la pestaña del navegador esté abierta; no llega al backend.
- El resultado es un arreglo de strings con URLs tipo `blob:localhost/...`.

**Dos propiedades para dos propósitos distintos**

Se guardan dos cosas separadas en el componente:

```typescript
// Para mostrar la vista previa (arreglo de strings con URLs blob)
tempImages = signal<string[]>([]);

// Para subir al backend (el FileList original con los metadatos del archivo)
imageFileList: FileList | undefined = undefined;
```

- `tempImages` — señal que alimenta la grilla de vista previa en el HTML. Contiene URLs `blob:` que el navegador puede mostrar directamente en un `<img>`.
- `imageFileList` — propiedad de clase ordinaria (no señal, porque no necesita reactividad) que guarda el `FileList` original. Este objeto contiene los archivos reales con su nombre, tamaño, tipo MIME, etc. Se usará en la siguiente lección para enviar los archivos al backend.

**Grilla de vista previa en el HTML**

Debajo del `input`, se añade un `div` que muestra las imágenes seleccionadas:

```html
<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
  @for (image of tempImages(); track image) {
    <img
      [src]="image"
      alt="Image to upload"
      class="w-full object-cover rounded-xl"
    />
  }
</div>
```

- `grid-cols-2 sm:grid-cols-4` — 2 columnas en pantallas pequeñas, 4 columnas en pantallas medianas o mayores.
- `gap-2 mt-2` — separación entre imágenes y margen superior.
- `tempImages()` — invoca la señal para obtener el arreglo de URLs.
- `[src]="image"` — pasa la URL `blob:` directamente al atributo `src` de la imagen. El navegador la resuelve localmente sin petición de red.
- `rounded-xl` — esquinas redondeadas para un acabado visual más cuidado.

**Tarea: mostrar las imágenes seleccionadas en el carrusel**

Al final de la lección se propone una tarea: hacer que las imágenes seleccionadas (los URLs `blob:`) aparezcan también en el carrusel de imágenes que está en la parte superior del formulario. Para lograrlo habrá que modificar el pipe `ProductImagePipe` para que, si la imagen empieza con `"blob"`, la devuelva sin transformar (sin añadir el baseUrl del servidor). La solución se dará en la próxima lección.

---

## Ejemplo sencillo

`URL.createObjectURL` es como sacar una fotografía Polaroid de un archivo: instantáneamente tienes una imagen que puedes ver ahora mismo, aunque el original todavía esté en tu carpeta. El `blob:` URL es esa polaroid: solo existe mientras tengas la sesión abierta y nunca abandona tu equipo hasta que presiones "Guardar".

---

## Palabras clave y elementos importantes

- `multiple` — atributo del `input` que permite seleccionar varios archivos a la vez
- `accept="image/*"` — filtra el explorador de archivos para mostrar solo imágenes
- `(change)="onFilesChanged($event)"` — escucha el cambio en el input y llama al método con el evento
- `event.target as HTMLInputElement` — cast necesario para acceder a `.files` desde un `Event` genérico
- `FileList` — tipo de objeto que devuelve `.files`; no es un arreglo sino un objeto propio del navegador
- `Array.from(fileList ?? [])` — convierte el `FileList` en arreglo estándar para usar `.map`
- `URL.createObjectURL(file)` — API nativa del navegador que genera una URL `blob:` temporal para mostrar el archivo localmente
- URL `blob:localhost/...` — URL temporal que apunta al archivo en memoria del navegador; no llega al backend
- `tempImages = signal<string[]>([])` — señal que almacena los URLs `blob:` para la vista previa
- `imageFileList: FileList | undefined` — propiedad de clase que guarda el `FileList` original para la subida posterior
- `grid-cols-2 sm:grid-cols-4 gap-2 mt-2` — clases Tailwind para la grilla responsive de vista previa
- Tarea: modificar `ProductImagePipe` para que imágenes con prefijo `blob:` se devuelvan sin transformar

---

## Resumen final

Esta lección configura el `<input type="file" multiple accept="image/*">` y el método `onFilesChanged` que se dispara al seleccionar archivos. Dentro del método se obtiene el `FileList` del evento, se guarda en `imageFileList` para uso posterior, y se genera un arreglo de URLs `blob:` con `URL.createObjectURL` que se almacena en la señal `tempImages`. En el HTML se añade una grilla `@for` que muestra las imágenes temporales inmediatamente. Para la siguiente lección queda la tarea de mostrarlas también en el carrusel modificando el `ProductImagePipe`.
