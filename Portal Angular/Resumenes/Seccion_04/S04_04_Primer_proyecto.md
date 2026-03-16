# Seccion 4 - Leccion 04: Primer Proyecto en Angular

---

## 1. Titulo de la leccion

**Crear y levantar el primer proyecto Angular con Angular CLI**

---

## 2. Que se aprende en esta leccion

Se crea el primer proyecto Angular desde cero usando el Angular CLI, se elige la configuracion inicial y se levanta el servidor de desarrollo. Se hace una primera exploracion del codigo generado.

---

## 3. Puntos clave explicados

- **Angular CLI:** Herramienta de linea de comandos que permite crear y gestionar proyectos Angular. Se verifica con `ng --version`.
- **`ng new nombre`:** Comando para crear un nuevo proyecto. Genera todos los archivos, carpetas y dependencias necesarias automaticamente.
- **Opciones al crear:** El CLI pregunta por el tipo de estilos (CSS, Sass, Less) y si se desea Server Side Rendering. Para este curso se elige CSS y sin SSR.
- **`ng serve -o`:** Levanta el servidor de desarrollo y abre el navegador automaticamente. Por defecto en `localhost:4200`.
- **Hot reload:** Angular detecta cambios en el codigo y recarga la aplicacion automaticamente en el navegador sin necesidad de refrescar manualmente.
- **Archivo clave para empezar:** `src/app/app.component.ts` contiene el componente raiz. El titulo `Hello, bases` que aparece en el navegador viene de la propiedad `title` de ese archivo.
- **`ng build`:** Genera la version de produccion en la carpeta `dist/`. El bundle final es muy ligero (aprox. 277 KB), aunque los `node_modules` sean de 200+ MB.
- **Exploracion inicial:** Se recomienda revisar `app.component.ts` y `app.component.html` para familiarizarse con la estructura antes de la siguiente leccion.

---

## 4. Ejemplo sencillo

```bash
# Verificar que Angular CLI esta instalado
ng --version

# Crear nuevo proyecto
ng new bases

# Entrar a la carpeta y abrir VS Code
cd bases
code .

# Levantar servidor de desarrollo con apertura automatica del navegador
ng serve -o

# Generar version de produccion
ng build
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng new` | Crea un nuevo proyecto Angular con toda la estructura base |
| `ng serve -o` | Levanta el servidor de desarrollo y abre el navegador |
| `ng build` | Genera el bundle de produccion en la carpeta `dist/` |
| `ng --version` | Muestra la version del Angular CLI instalada |
| `localhost:4200` | URL por defecto donde corre el servidor de desarrollo |
| Hot reload | Recarga automatica del navegador al guardar cambios en el codigo |
| `node_modules` | Carpeta con todas las dependencias instaladas; no se sube al repositorio |
| `dist/` | Carpeta con el bundle de produccion generado por `ng build` |
| CSS | Opcion de estilos seleccionada para este curso |

---

## 6. Resumen final en pocas palabras

Con el Angular CLI, crear y levantar un proyecto es cuestion de un par de comandos. `ng new` genera toda la estructura, `ng serve -o` levanta el servidor de desarrollo con hot reload, y `ng build` genera la version de produccion. El codigo inicial vive en `src/app/app.component.ts` y desde ahi se empieza a explorar Angular.
