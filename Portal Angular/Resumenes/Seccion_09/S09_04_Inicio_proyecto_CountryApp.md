# Seccion 9 - Leccion 04: Inicio de Proyecto - CountryApp

---

## 1. Titulo de la leccion

**Crear el proyecto country-app e instalar Tailwind CSS y daisyUI**

---

## 2. Que se aprende en esta leccion

Se crea el proyecto Angular `country-app` sin SSR, se instala y configura Tailwind CSS v3, y se instala daisyUI como plugin de Tailwind con un tema personalizado (sunset).

---

## 3. Puntos clave explicados

- **`ng new country-app`:** Se elige CSS (no SCSS) y se rechaza Server Side Rendering. Para SSR hay un curso separado ("Angular PRO").
- **Tailwind primero:** daisyUI depende de Tailwind, por lo que Tailwind se instala primero.
- **Instalacion de Tailwind:** `npm install -D tailwindcss postcss autoprefixer` + `npx tailwindcss init` genera `tailwind.config.js`.
- **`tailwind.config.js` → content:** Se agrega `"./src/**/*.{html,ts}"` para que Tailwind escanee todos los archivos y solo incluya las clases usadas.
- **`styles.css` → directivas:** Se agregan `@tailwind base`, `@tailwind components` y `@tailwind utilities`. Requiere reiniciar `ng serve` para que tome efecto.
- **Instalacion de daisyUI:** `npm install -D daisyui`. Se agrega `require('daisyui')` en `plugins` de `tailwind.config.js`.
- **Temas de daisyUI:** Se especifican en `tailwind.config.js` bajo la llave `daisyui.themes`. Solo se generan los estilos de los temas listados. Temas disponibles: `light`, `dark`, `cupcake`, `sunset`, etc. El instructor usa `sunset` (tema oscuro).
- **Ventaja de Tailwind + daisyUI:** El bundle CSS final solo contiene las clases realmente usadas, a diferencia de importar Bootstrap completo.

---

## 4. Ejemplo sencillo

```bash
# Crear proyecto
ng new country-app  # elegir CSS, no SSR
cd country-app
mv country-app 04-country-app

# Instalar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

```javascript
// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: { extend: {} },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["sunset"]  // solo generar este tema
  }
}
```

```css
/* src/styles.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

```bash
# Instalar daisyUI (despues de Tailwind)
npm install -D daisyui
# Reiniciar ng serve para que tome los cambios
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng new` | Crea un nuevo proyecto Angular |
| `tailwindcss postcss autoprefixer` | Dependencias necesarias para Tailwind CSS |
| `tailwind.config.js` | Archivo de configuracion de Tailwind |
| `content: ["./src/**/*.{html,ts}"]` | Le dice a Tailwind que archivos escanear |
| `@tailwind base/components/utilities` | Directivas en `styles.css` para activar Tailwind |
| `require('daisyui')` | Agrega daisyUI como plugin en `tailwind.config.js` |
| `daisyui.themes` | Lista de temas a incluir en el bundle CSS |
| Tema `sunset` | Tema oscuro con colores calidos usado en la app |

---

## 6. Resumen final en pocas palabras

Se crea el proyecto con `ng new`, se instala Tailwind configurando `content` en `tailwind.config.js` y las directivas en `styles.css`, y se instala daisyUI como plugin especificando el tema `sunset`. Es obligatorio reiniciar `ng serve` despues de instalar Tailwind para que los cambios tomen efecto.
