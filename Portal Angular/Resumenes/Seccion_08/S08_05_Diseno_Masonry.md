# Seccion 8 - Leccion 05: Diseno Masonry

---

## 1. Titulo de la leccion

**Implementar diseno Masonry con Tailwind agrupando GIFs de tres en tres**

---

## 2. Que se aprende en esta leccion

Se reemplaza el grid uniforme por un diseno tipo Masonry usando Tailwind CSS puro. Se crea la senal computada `trendingGifGroup` en el servicio que transforma el arreglo plano de GIFs en un arreglo de grupos de tres, y se usa un `@for` anidado en el template.

---

## 3. Puntos clave explicados

- **Diseno Masonry:** Las imagenes se organizan en columnas donde cada grupo de tres GIFs forma una fila visual con alturas variables. El efecto se logra con un grid CSS dentro de otro grid.
- **Problema de estructura:** El HTML del Masonry requiere grupos de tres elementos. El arreglo plano `Gif[]` no sirve directamente; hay que transformarlo en `Gif[][]`.
- **`trendingGifGroup = computed(...)`:** Senal computada en `GifService` que convierte `trendingGifs` (arreglo plano) en un arreglo de grupos de tres con un bucle `for` y `.slice(i, i + 3)`.
- **Bucle `for` con paso de 3:** `for(let i = 0; i < trendingGifs().length; i += 3)` avanza de tres en tres y empuja cada slice al arreglo de grupos.
- **`@for` anidado en el template:** El template itera los grupos con un primer `@for`, y dentro itera cada gif del grupo con un segundo `@for`.
- **`track gif.id`:** Se usa el `id` del gif como identificador en el `track` del `@for` interno para mejor rendimiento.
- **`object-cover w-full h-full`:** Clases Tailwind para que las imagenes llenen su celda sin deformarse.
- **`padding-top`:** Se agrega `pt-5` al contenedor para separar la galeria del borde superior.

---

## 4. Ejemplo sencillo

```typescript
// GifService - senal computada
trendingGifGroup = computed<Gif[][]>(() => {
  const groups: Gif[][] = [];
  const gifs = this.trendingGifs();
  for (let i = 0; i < gifs.length; i += 3) {
    groups.push(gifs.slice(i, i + 3));
  }
  return groups;
});
```

```html
<!-- trending-page.component.html -->
<section class="pt-5">
  <div class="grid grid-cols-3 gap-4">
    @for (group of gifService.trendingGifGroup(); track $index) {
      <div class="grid gap-4">
        @for (gif of group; track gif.id) {
          <img
            [src]="gif.url"
            [alt]="gif.title"
            class="w-full h-full object-cover rounded"
          />
        }
      </div>
    }
  </div>
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Masonry | Grid visual con columnas de alturas variables |
| `Gif[][]` | Arreglo de arreglos: cada elemento es un grupo de tres GIFs |
| `trendingGifGroup` | Senal computada que agrupa `trendingGifs` de tres en tres |
| `.slice(i, i + 3)` | Extrae tres elementos consecutivos del arreglo |
| `i += 3` | Paso del bucle `for` para avanzar de grupo en grupo |
| `@for` anidado | Primer `@for` para grupos, segundo `@for` para GIFs del grupo |
| `object-cover` | Tailwind: ajusta la imagen para llenar su contenedor sin deformarse |

---

## 6. Resumen final en pocas palabras

El diseno Masonry requiere agrupar los GIFs de tres en tres. `trendingGifGroup` es una senal computada que usa un bucle con paso 3 y `.slice()` para crear `Gif[][]`. El template usa dos `@for` anidados: el externo itera grupos y el interno itera los tres GIFs de cada grupo. Todo el estilo es Tailwind puro.
