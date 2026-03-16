# Resumen de Lección - Sección 17, Clase 18

---

## 1. Titulo de la leccion

**Tailwind - Responsive design**

---

## 2. Que se aprende en esta leccion

Se aprende a hacer la pagina de marcadores responsive usando el enfoque "mobile first" de Tailwind. El objetivo es que en pantallas pequenas el listado de marcadores aparezca debajo del mapa en lugar de flotar encima de el, mejorando la experiencia en dispositivos moviles.

---

## 3. Puntos clave explicados

- **Problema inicial:** en pantallas pequenas el panel de marcadores (con `position: fixed`) tapa el mapa, haciendo la experiencia poco accesible.
- **Mobile first en Tailwind:** todas las clases de Tailwind se aplican primero para el tamano movil. Para aplicar una clase solo en pantallas mas grandes se antepone un prefijo de breakpoint como `sm:`, `md:`, `lg:` o `xl:`.
- **Breakpoints de Tailwind:** `sm` equivale a pantallas de al menos 640px. Lo que se escribe sin prefijo aplica siempre (desde movil hacia arriba).
- **Cambio del height del mapa:** en movil se quiere que el mapa ocupe el `60vh` de la pantalla. En `sm` se aplica la clase de altura calculada (`calc(100vh - 64px)`) que ya teniamos. Se usan dos clases de `h-`, una para movil y otra con prefijo `sm:`.
- **Panel de marcadores responsivo:** las clases `fixed`, `top-20`, `left-10` y `rounded` se prefijan con `sm:` para que solo se apliquen en pantallas medianas o mas grandes. En movil el panel queda en el flujo normal del documento (debajo del mapa).
- **Width en movil:** el ancho del panel en pantallas pequenas se deja en `100%` o similar para que ocupe todo el ancho disponible.
- **`overflow-y-scroll`:** se agrega al contenedor del listado para que si hay muchos marcadores el usuario pueda hacer scroll dentro del panel sin que este crezca indefinidamente.
- **Limpieza del navbar:** se eliminan dos botones que quedaron del desarrollo (un indicador y un icono SVG) del componente `navbar` para dejar la app mas limpia antes de desplegarla.

---

## 4. Ejemplo sencillo

Clase del mapa con mobile first:

```html
<!-- movil: 60vh | sm en adelante: calc(100vh - 64px) -->
<div class="w-full h-[60vh] sm:h-[calc(100vh-64px)]" #map></div>
```

Panel de marcadores:

```html
<!-- movil: flujo normal | sm: flotante fijo -->
<section class="w-full sm:fixed sm:top-20 sm:left-10 sm:w-[260px] bg-white sm:rounded p-5 overflow-y-scroll">
  ...marcadores...
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Mobile first | Enfoque en el que los estilos base se escriben para movil y se amplian para pantallas mayores |
| Prefijo `sm:` | En Tailwind aplica la clase solo desde el breakpoint `sm` (640px) hacia arriba |
| `h-[60vh]` | Clase arbitraria de Tailwind para un height del 60% del viewport en movil |
| `sm:fixed` | La posicion `fixed` solo se aplica en pantallas `sm` o mayores; en movil el elemento sigue el flujo normal |
| `overflow-y-scroll` | Agrega una barra de scroll vertical cuando el contenido supera la altura del contenedor |
| Breakpoints de Tailwind | `sm` = 640px, `md` = 768px, `lg` = 1024px, `xl` = 1280px |

---

## 6. Resumen final en pocas palabras

Con Tailwind y el enfoque mobile first se logra que la pagina funcione bien tanto en movil como en escritorio sin cambios estructurales en el HTML. Las clases sin prefijo definen el comportamiento movil; los prefijos `sm:`, `md:`, etc., sobreescriben esos estilos en pantallas mas grandes. El `overflow-y-scroll` garantiza que el listado de marcadores no se desborde aunque haya muchos elementos.
