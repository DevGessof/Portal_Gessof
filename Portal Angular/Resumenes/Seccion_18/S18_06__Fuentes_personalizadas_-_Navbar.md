# Lección 06: Fuentes Personalizadas - Navbar

## ¿Qué se aprende en esta lección?

En esta lección se implementa el **navbar** de la tienda usando un template de daisyUI, se configuran los enlaces de navegación con `routerLink`, y se aprende a integrar una **fuente personalizada** (Montserrat) en el proyecto usando Tailwind CSS.

---

## Puntos clave explicados

- **Navbar desde daisyUI:** Se copia el HTML del navbar desde la documentación de daisyUI y se pega en el componente `front-navbar`. El navbar es responsive y se adapta a pantallas móviles.

- **Dos versiones del menú:** El navbar tiene dos versiones del menú: una para escritorio (desktop) y otra para dispositivos móviles (responsive). Ambas deben configurarse.

- **`routerLink` y `routerLinkActive`:**
  - `routerLink` remplaza el atributo `href` para navegar entre rutas de Angular sin recargar la página.
  - `routerLinkActive` aplica una clase CSS cuando la ruta del enlace está activa (por ejemplo, cambiar el color del texto).

- **Enlaces de navegación creados:** Hombres (`/gender/men`), Mujeres (`/gender/women`), Niños (`/gender/kids`).

- **Fuente personalizada (Montserrat Alternates):** Se descarga desde Google Fonts y se coloca en la carpeta `public/assets/fonts/montserrat-alternates/`.

- **Configuración de la fuente en Tailwind:** Se agrega la fuente en el archivo `tailwind.config` dentro de `theme > fontFamily`. Esto crea una clase de Tailwind llamada `font-montserrat`.

- **Registrar la fuente con `@font-face`:** Tailwind no carga la fuente automáticamente. Es necesario declararla en `styles.css` con `@font-face` indicando el nombre, la ruta del archivo `.ttf` y el formato `truetype`.

- **Fallback font:** Si la fuente Montserrat no puede cargarse, se usa `sans-serif` como respaldo.

---

## Ejemplo sencillo

Declaración de la fuente en `styles.css`:

```css
@layer base {
  @font-face {
    font-family: 'Montserrat';
    src: url('assets/fonts/montserrat-alternates/montserrat-alternates-medium.ttf') format('truetype');
  }
}
```

Configuración en `tailwind.config`:

```js
theme: {
  fontFamily: {
    montserrat: ['Montserrat', 'sans-serif']
  }
}
```

Uso en HTML con clase de Tailwind:

```html
<h1 class="font-montserrat">Teslo | Shop</h1>
```

---

## Funciones, palabras clave o elementos importantes

| Término | Descripción |
|--------|-------------|
| **`routerLink`** | Directiva de Angular que reemplaza el `href` para navegar sin recargar la página. |
| **`routerLinkActive`** | Directiva que aplica una clase CSS cuando la ruta del enlace está activa. |
| **`@font-face`** | Regla CSS para registrar una fuente personalizada indicando su nombre y ubicación. |
| **`fontFamily` en Tailwind** | Configuración en `tailwind.config` para crear una clase CSS con una fuente personalizada. |
| **Fallback font** | Fuente de respaldo que se usa si la fuente principal no puede cargarse. |
| **`truetype`** | Formato de archivo de fuente con extensión `.ttf`. |
| **`public/assets/`** | Carpeta donde se colocan los recursos estáticos del proyecto (fuentes, imágenes, etc.). |

---

## Resumen final en pocas palabras

En esta lección se construye el navbar funcional de la tienda con enlaces de navegación activos, y se aprende el proceso completo para integrar una fuente personalizada en un proyecto Angular con Tailwind: descargar la fuente, configurarla en Tailwind y registrarla en el CSS global.
