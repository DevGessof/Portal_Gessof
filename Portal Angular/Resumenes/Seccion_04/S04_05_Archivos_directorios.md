# Seccion 4 - Leccion 05: Explicacion de Archivos y Directorios

---

## 1. Titulo de la leccion

**Para que sirve cada archivo y carpeta de un proyecto Angular**

---

## 2. Que se aprende en esta leccion

Se hace un recorrido por todos los archivos y directorios que genera Angular al crear un proyecto nuevo, explicando el proposito de cada uno y cuales se modifican habitualmente.

---

## 3. Puntos clave explicados

- **`tsconfig.json`:** Configuracion de TypeScript del proyecto. Define como compilar, que modulos usar, etc. Raramente se modifica.
- **`tsconfig.app.json` y `tsconfig.spec.json`:** Extienden del `tsconfig.json` principal. El primero aplica en desarrollo, el segundo en testing.
- **`package.json`:** Define los scripts del proyecto (`ng serve`, `ng build`, etc.), las dependencias de produccion y las de desarrollo (`devDependencies`). Las dependencias de produccion viajan al bundle final; las de desarrollo no.
- **`package-lock.json`:** Archivo gestionado automaticamente por npm para reconstruir exactamente las mismas dependencias. No se modifica manualmente.
- **`angular.json`:** Configuracion de Angular: como construir, como servir, archivos de estilos globales, scripts, etc. Se modifica ocasionalmente (por ejemplo, para agregar estilos globales o eliminar Zone.js).
- **`.gitignore`:** Lista de archivos y carpetas que Git no debe versionar (como `node_modules` y `dist/`).
- **`.editorconfig`:** Configuracion del editor de codigo (comillas, charset, etc.) para mantener consistencia en el equipo.
- **`public/`:** Carpeta de recursos estaticos (imagenes, iconos, fuentes). El favicon del proyecto vive aqui.
- **`node_modules/`:** Carpeta con todas las dependencias instaladas. Muy pesada (~220 MB) pero no viaja al bundle final.
- **`dist/`:** Carpeta generada por `ng build` con la version de produccion. Solo aparece despues de ejecutar el build.
- **`src/`:** Carpeta principal donde se trabaja el 99% del tiempo. Se detalla en la siguiente leccion.

---

## 4. Ejemplo sencillo

```
proyecto-angular/
├── src/                  ← aqui se trabaja todo el dia
│   └── app/
├── public/               ← recursos estaticos (favicon, imagenes)
├── angular.json          ← configuracion de Angular
├── tsconfig.json         ← configuracion de TypeScript
├── package.json          ← dependencias y scripts
├── package-lock.json     ← gestionado por npm, no tocar manualmente
├── .gitignore            ← archivos ignorados por Git
├── .editorconfig         ← configuracion del editor
├── node_modules/         ← dependencias instaladas (no se sube a Git)
└── dist/                 ← bundle de produccion (se genera con ng build)
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `angular.json` | Archivo de configuracion principal de Angular; define build, estilos globales y scripts |
| `tsconfig.json` | Configuracion de TypeScript; no se suele modificar |
| `package.json` | Dependencias y scripts del proyecto |
| `devDependencies` | Dependencias solo usadas en desarrollo y testing; no viajan al bundle final |
| `public/` | Recursos estaticos disponibles en toda la aplicacion |
| `dist/` | Carpeta con el bundle de produccion generado por `ng build` |
| `.gitignore` | Define que archivos no versionara Git |
| Bundle | Version optimizada y minificada de la aplicacion lista para subir a produccion |

---

## 6. Resumen final en pocas palabras

Un proyecto Angular tiene muchos archivos de configuracion pero la mayoria no se modifican. Lo importante es entender que `angular.json` configura el comportamiento de Angular, `package.json` gestiona las dependencias y scripts, y la carpeta `src/` es donde se trabaja el codigo real de la aplicacion.
