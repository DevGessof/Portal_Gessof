# Tailwind en Angular

## ¿Qué se aprende?

Esta lección instala y configura Tailwind CSS en el proyecto Angular. El proceso es sencillo y sigue la guía oficial de Tailwind para Angular. Se instalan tres dependencias, se inicializa el archivo de configuración de Tailwind, se actualiza el `tailwind.config.js` para indicar qué archivos debe procesar, y se añaden las directivas de Tailwind al `styles.css` global. Al final se verifica que Tailwind funciona correctamente y se deja el `app.component.html` limpio para empezar a trabajar.

---

## Puntos clave

**Dónde encontrar la guía de instalación**

La guía oficial está en `tailwindcss.com`, dentro de la sección "Framework Guides". Al hacer clic en "Angular" aparecen los pasos exactos de instalación que se siguen en la lección. El instructor también deja el enlace en el material adjunto del curso.

**Paso 1: instalar las tres dependencias**

Con el proyecto ya creado y abierto en VS Code, se abre la terminal integrada y se ejecuta:

```bash
npm install -D tailwindcss postcss autoprefixer
```

- `tailwindcss` — el framework principal de estilos utilitarios.
- `postcss` — procesador de CSS que Tailwind usa para transformar sus clases.
- `autoprefixer` — añade prefijos de navegador automáticamente a las propiedades CSS.

Las tres se instalan como dependencias de desarrollo (`-D`).

**Paso 2: inicializar Tailwind**

```bash
npx tailwindcss init
```

Esto crea el archivo `tailwind.config.js` en la raíz del proyecto. Es el archivo de configuración de Tailwind.

**Paso 3: configurar los archivos que Tailwind debe procesar**

En `tailwind.config.js`, la propiedad `content` debe indicar qué archivos contienen clases de Tailwind para que Tailwind las incluya en el CSS de producción. La guía de Angular proporciona el valor exacto que hay que copiar y pegar en esa propiedad. Se graban los cambios.

**Paso 4: añadir las directivas de Tailwind al `styles.css`**

En `src/styles.css` (el archivo de estilos globales de Angular) se borra el contenido existente y se añaden las tres directivas de Tailwind:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Se graban los cambios.

**Paso 5: verificar que funciona**

Para verificar la instalación, la guía proporciona un elemento HTML de ejemplo con clases de Tailwind. Se copia y se pega en `app.component.html`. Por ejemplo:

```html
<h1 class="text-3xl font-bold underline">Hello World!</h1>
```

Sin embargo, al guardar y revisar el navegador, los estilos no se aplican todavía. Esto se debe a que el proceso de Tailwind necesita que se reinicie el servidor de desarrollo.

**Por qué hay que reiniciar `ng serve`**

Tailwind funciona como un plugin de PostCSS que se ejecuta durante el proceso de compilación. Cuando se instala después de que `ng serve` ya está corriendo, Angular no recompila automáticamente las nuevas dependencias de PostCSS. Es necesario detener el servidor (`Ctrl + C`) y volver a ejecutar `ng serve` para que Tailwind se integre correctamente en el proceso de compilación.

Tras el reinicio se puede verificar en el navegador que los estilos se aplican: el "Hello World!" aparece con texto grande, negrita y subrayado, y los márgenes por defecto del navegador desaparecen (Tailwind aplica un reset de CSS llamado Preflight).

**Limpiar `app.component.html`**

El archivo `app.component.html` de una aplicación Angular recién creada contiene el HTML de la pantalla de bienvenida de Angular. Todo eso ya no es necesario. Se borra y se deja solo el `<router-outlet>`, que es el elemento que Angular usa para mostrar el componente correspondiente a la ruta activa.

---

## Ejemplo sencillo

Instalar Tailwind es como enchufar un nuevo accesorio a un ordenador: primero se instala el driver (las tres dependencias), luego se configura qué archivos debe revisar (el `content` del `tailwind.config.js`), se activa en el sistema (las directivas en `styles.css`), y finalmente se reinicia el ordenador (se reinicia `ng serve`) para que el sistema reconozca el nuevo dispositivo.

---

## Palabras clave y elementos importantes

- `npm install -D tailwindcss postcss autoprefixer` — comando para instalar las tres dependencias de Tailwind como dependencias de desarrollo
- `npx tailwindcss init` — comando que crea el archivo `tailwind.config.js` en la raíz del proyecto
- `tailwind.config.js` — archivo de configuración de Tailwind; la propiedad `content` indica qué archivos contienen clases de Tailwind
- `content` — propiedad del `tailwind.config.js`; debe apuntar a todos los archivos HTML y TypeScript del proyecto Angular para que Tailwind incluya las clases utilizadas
- `@tailwind base` / `@tailwind components` / `@tailwind utilities` — tres directivas que se añaden al `styles.css`; activan las capas de Tailwind
- `src/styles.css` — archivo de estilos globales de Angular; aquí se añaden las directivas de Tailwind
- **Preflight** — reset de CSS que aplica Tailwind automáticamente al añadir `@tailwind base`; elimina márgenes y estilos por defecto del navegador
- **Reiniciar `ng serve`** — necesario después de instalar Tailwind para que Angular recompile integrando el plugin de PostCSS
- `<router-outlet>` — único elemento que debe quedar en `app.component.html` después de limpiar el template; muestra el componente de la ruta activa

---

## Resumen final

Instalar Tailwind en Angular requiere cuatro pasos: instalar las tres dependencias (`tailwindcss postcss autoprefixer`), inicializar con `npx tailwindcss init`, configurar la propiedad `content` en `tailwind.config.js`, y añadir las tres directivas al `styles.css`. Después hay que reiniciar `ng serve` para que Angular compile con Tailwind activo. Una vez reiniciado, las clases de Tailwind funcionan en cualquier componente del proyecto. El `app.component.html` se limpia dejando solo el `<router-outlet>`.
