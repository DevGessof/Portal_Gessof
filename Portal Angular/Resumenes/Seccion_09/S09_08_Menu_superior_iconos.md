# Seccion 9 - Leccion 08: Menu Superior e Iconos

---

## 1. Titulo de la leccion

**TopMenuComponent con navegacion, routerLinkActive y SVG de Iconify**

---

## 2. Que se aprende en esta leccion

Se crea `TopMenuComponent` dentro de `country/components/`, se usa en el `CountryLayoutComponent`, se agregan opciones de navegacion con `routerLink` y `routerLinkActive`, y se insertan iconos SVG descargados de Iconify.

---

## 3. Puntos clave explicados

- **`TopMenuComponent` en `country/components/`:** Al ser especifico del modulo de paises, se crea dentro de `country/components/`, no en `shared/`.
- **Selector personalizado:** Se cambia el selector a `country-top-menu` para indicar que pertenece al modulo country.
- **HTML del menu desde daisyUI:** Se copia un menu horizontal de daisyUI y se personaliza: se quitan items innecesarios y se reemplazan los textos por "Por capital", "Por pais" y "Por region".
- **`nav` semantico:** Se envuelve el `ul` del menu en una etiqueta `<nav>` con clases `p-4 w-full` para mejor semantica y espaciado.
- **`routerLink` por opcion:** Cada `<a>` del menu lleva `[routerLink]="'by-capital'"` (o `by-country`, `by-region`) para navegar entre las rutas hijas.
- **`routerLinkActive`:** Aplica automaticamente la clase `btn-primary` al enlace cuya ruta esta activa. La clase base de todos los enlaces es `btn`. Solo el activo tiene ademas `btn-primary`.
- **Iconify para SVGs:** Servicio gratuito con cientos de miles de iconos. Se busca el icono deseado, se copia el SVG y se pega directamente en el template de Angular. Se ajusta `width` y `height` (e.g. `20` o `24`) y el `viewBox` para un tamano consistente.
- **SVG inline:** Angular permite usar SVGs directamente en el HTML. Para reutilizar un icono se puede crear un componente Angular especifico o un archivo `.svg`.

---

## 4. Ejemplo sencillo

```html
<!-- country-top-menu.component.html -->
<nav class="p-4 w-full">
  <ul class="menu menu-horizontal">
    <li>
      <a
        class="btn"
        [routerLink]="'by-capital'"
        routerLinkActive="btn-primary"
      >
        <svg width="20" height="20" viewBox="0 0 24 24"><!-- icono SVG --></svg>
        Por capital
      </a>
    </li>
    <li>
      <a
        class="btn"
        [routerLink]="'by-country'"
        routerLinkActive="btn-primary"
      >
        <svg width="20" height="20" viewBox="0 0 24 24"><!-- icono SVG --></svg>
        Por pais
      </a>
    </li>
    <li>
      <a
        class="btn"
        [routerLink]="'by-region'"
        routerLinkActive="btn-primary"
      >
        <svg width="20" height="20" viewBox="0 0 24 24"><!-- icono SVG --></svg>
        Por region
      </a>
    </li>
  </ul>
</nav>
```

```html
<!-- country-layout.component.html -->
<country-top-menu />
<section class="px-4">
  <router-outlet />
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `TopMenuComponent` | Menu horizontal de navegacion entre las rutas hijas del modulo country |
| `country-top-menu` | Selector con prefijo del modulo para mayor claridad |
| `[routerLink]` | Navegacion SPA a una ruta relativa o absoluta |
| `routerLinkActive="btn-primary"` | Clase aplicada automaticamente cuando la ruta esta activa |
| Iconify | Servicio de iconos SVG gratuito; se copia el SVG y se pega en el template |
| SVG inline | SVG incrustado directamente en el HTML; permite controlar tamano y color con CSS |

---

## 6. Resumen final en pocas palabras

`TopMenuComponent` usa un menu horizontal de daisyUI con tres opciones de navegacion. `routerLink` navega entre rutas hijas y `routerLinkActive` resalta la opcion activa con `btn-primary`. Los iconos se obtienen de Iconify como SVG y se pegan directamente en el template ajustando `width`, `height` y `viewBox`.
