# Seccion 7 - Leccion 04: Continuacion de la Aplicacion

---

## 1. Titulo de la leccion

**Retomar el proyecto gifs-app e instalar dependencias con npm install**

---

## 2. Que se aprende en esta leccion

Se retoma el proyecto `03-gifs-app` construido en la seccion anterior. Se recuerda como instalar dependencias desde cero con `npm install` y levantar el servidor de desarrollo.

---

## 3. Puntos clave explicados

- **Abrir el proyecto:** Usar `code .` si se tiene el shortcut de VS Code, o arrastrar la carpeta al editor.
- **`node_modules` no se sube al repositorio:** Esta carpeta no debe estar en git. Si no existe localmente, ejecutar `npm install` para reconstruirla a partir del `package.json`.
- **`npm install`:** Reconstruye todos los modulos de Node definidos en `package.json`. Necesario al clonar un repositorio o cuando se elimino `node_modules`.
- **`ng serve -o`:** Compila en modo desarrollo y abre automaticamente `localhost:4200` en el navegador.
- **Estado al iniciar:** La app tiene el buscador (sin funcionalidad) y la pantalla Trending (con imagenes de relleno estaticas). La seccion 7 hara que todo funcione con datos reales.

---

## 4. Ejemplo sencillo

```bash
# Clonar el repositorio (si es necesario)
git clone <url-del-repo>
cd 03-gifs-app

# Instalar dependencias (si node_modules no existe)
npm install

# Levantar servidor de desarrollo
ng serve -o
# Abre automaticamente http://localhost:4200
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `npm install` | Instala o reconstruye `node_modules` desde `package.json` |
| `node_modules` | Carpeta con dependencias; nunca se sube a git |
| `ng serve -o` | Levanta el servidor de desarrollo y abre el navegador |
| `localhost:4200` | Puerto por defecto de Angular en desarrollo |

---

## 6. Resumen final en pocas palabras

Para continuar el proyecto solo hace falta tener `node_modules` instalado con `npm install` y levantar el servidor con `ng serve -o`. La app queda en el mismo estado que al final de la seccion 6, lista para agregar las peticiones HTTP reales.
