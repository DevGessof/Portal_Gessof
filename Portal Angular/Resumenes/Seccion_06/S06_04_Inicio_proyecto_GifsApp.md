# Seccion 6 - Leccion 04: Inicio de Proyecto - GifsApp

---

## 1. Titulo de la leccion

**Crear el proyecto GifsApp e instalar Tailwind CSS v4**

---

## 2. Que se aprende en esta leccion

Se crea el proyecto Angular `gifs-app` con `ng new`, se instala y configura Tailwind CSS v4, y se pega el HTML de un dashboard administrativo en `app.component.html` como punto de partida para la aplicacion.

---

## 3. Puntos clave explicados

- **`ng new gifs-app`:** Crea el proyecto. Se elige CSS como preprocesador y se rechaza el Server Side Rendering (SSR) por ahora.
- **SSR en Angular:** Angular integra SSR sin necesidad de metaframeworks como Next o Nuxt. Se omite en esta seccion para centrarse en los conceptos base.
- **Instalar Tailwind CSS v4:** Se siguen los pasos de la documentacion oficial en `tailwindcss.com` → Framework Guides → Angular. Los comandos pueden cambiar entre versiones; siempre seguir la documentacion oficial.
- **`.postcssrc.json`:** Archivo de configuracion de PostCSS que se crea en el root del proyecto. Necesario para que Tailwind funcione con Angular.
- **`styles.css`:** Se agrega la directiva `@import "tailwindcss"` (v4) en el archivo global de estilos.
- **Reiniciar `ng serve`:** Despues de instalar Tailwind hay que bajar y volver a subir el servidor para que tome los cambios.
- **Tailwind IntelliSense:** Extension de VS Code que muestra sugerencias de clases de Tailwind mientras se escribe.
- **Punto de partida visual:** Se copia el HTML de un dashboard administrativo gratuito basado en Tailwind (enlace en material adjunto) y se pega en `app.component.html` para tener una base visual real.
- **`router-outlet`:** Se mantiene comentado o presente en el template; es el punto donde se renderizaran las rutas.

---

## 4. Ejemplo sencillo

```bash
# 1. Crear proyecto
ng new gifs-app
cd gifs-app

# 2. Instalar Tailwind CSS v4
npm install tailwindcss @tailwindcss/postcss postcss --force
```

```json
// .postcssrc.json (en el root del proyecto)
{
  "plugins": {
    "@tailwindcss/postcss": {}
  }
}
```

```css
/* src/styles.css */
@import "tailwindcss";
```

```html
<!-- app.component.html - probar que Tailwind funciona -->
<h1 class="text-blue-500 text-4xl">Hello world!</h1>
<router-outlet />
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng new nombre` | Crea un nuevo proyecto Angular |
| Tailwind CSS | Framework de utilidades CSS; se aplica mediante clases en el HTML |
| `.postcssrc.json` | Archivo de configuracion de PostCSS requerido para Tailwind v4 con Angular |
| `@import "tailwindcss"` | Directiva en `styles.css` que activa Tailwind CSS v4 |
| Tailwind IntelliSense | Extension de VS Code con autocompletado de clases de Tailwind |
| SSR | Server Side Rendering; disponible en Angular pero no se usa en esta seccion |

---

## 6. Resumen final en pocas palabras

Se crea el proyecto `gifs-app` con `ng new`, se instala Tailwind CSS v4 siguiendo la documentacion oficial (`.postcssrc.json` + `@import` en `styles.css`) y se reinicia el servidor. Como punto de partida visual se pega el HTML de un dashboard administrativo de Tailwind en `app.component.html`. En clases siguientes se separara en componentes.
