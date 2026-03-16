# Seccion 6 - Leccion 10: Mostrar Imagenes de Relleno

---

## 1. Titulo de la leccion

**Crear GifListComponent y GifListItemComponent con estructura Masonry de Tailwind**

---

## 2. Que se aprende en esta leccion

Se crea la estructura visual de la galeria de imagenes con dos componentes: `GifListComponent` (grid contenedor) y `GifListItemComponent` (tarjeta individual). Se usa HTML de FlowBite como base y se aplica un grid responsivo de Tailwind.

---

## 3. Puntos clave explicados

- **FlowBite:** Libreria de componentes basada en Tailwind. Se usa solo el HTML del "Default Gallery" como punto de partida visual, sin instalar la libreria.
- **Grid responsivo con Tailwind:** `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4` crea una cuadricula de 1, 2 o 3 columnas segun el ancho de la pantalla.
- **Problema de scroll no deseado:** Si el area de contenido tiene `w-full`, puede generar scroll horizontal. Se soluciona quitando esa clase del div contenedor en `dashboard-page.component.html`.
- **`GifListComponent`:** Componente que contiene el grid completo. Se coloca en `gifs/components/gif-list/`. El trending-page lo usa directamente.
- **`GifListItemComponent`:** Componente de una tarjeta individual. Se coloca dentro de `gifs/components/gif-list/gif-list-item/`. Representa una imagen/gif del listado.
- **Estructura Masonry:** Grid "desordenado" visualmente pero organizado en columnas de igual ancho. Para implementarlo en Tailwind se necesita agrupar los items en grupos de tres (se hara en una tarea posterior).
- **Padding desde el padre:** El padding de separacion se da en el componente padre (`trending-page`) mediante un `<section class="py-5">`, no en el `GifListComponent`, porque el componente no debe conocer su contexto de ubicacion.
- **Componentes con selector personalizado:** `gif-list` y `gif-list-item` sin el prefijo `app-`.

---

## 4. Ejemplo sencillo

```
gifs/components/
└── gif-list/
    ├── gif-list.component.ts|html
    └── gif-list-item/
        └── gif-list-item.component.ts|html
```

```html
<!-- gif-list.component.html -->
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  <gif-list-item />
  <gif-list-item />
  <gif-list-item />
</div>
```

```html
<!-- trending-page.component.html -->
<section class="py-5">
  <gif-list />
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| FlowBite | Libreria de componentes Tailwind; se usa solo el HTML de referencia |
| `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` | Grid responsivo: 1 col por defecto, 2 en sm, 3 en md |
| `gap-4` | Separacion entre celdas del grid |
| Breakpoints en Tailwind | `sm:`, `md:`, `lg:` aplican clases a partir de cierto ancho |
| `py-5` | Padding en eje Y (top y bottom); lo da el padre, no el componente |
| Masonry | Grid de columnas con alturas variables; requiere agrupacion de items |
| `GifListItemComponent` | Tarjeta individual del gif; selector `gif-list-item` |

---

## 6. Resumen final en pocas palabras

Se crean `GifListComponent` y `GifListItemComponent` anidados. El grid usa Tailwind con breakpoints responsivos. El padding de separacion lo aporta el componente padre mediante `py-5`. El `GifListItemComponent` representa una tarjeta individual que en secciones posteriores recibira los datos reales del gif via input signals.
