# Seccion 6 - Leccion 01: Introduccion

---

## 1. Titulo de la leccion

**Bienvenida a la Seccion 6: aplicacion real con GifsApp, lazy load y variables de entorno**

---

## 2. Que se aprende en esta leccion

El instructor presenta los objetivos de la seccion: construir una aplicacion real de Angular partiendo de HTML existente, separarlo en componentes reutilizables, implementar lazy load, rutas hijas, variables de entorno y una estructura de carpetas escalable por features.

---

## 3. Puntos clave explicados

- **Dia a dia en Angular:** El flujo tipico consiste en recibir un HTML (de un disenador o template) y convertirlo en componentes pequenos, reutilizables y mantenibles.
- **Estructura por features (Feature Modules):** Organizar el codigo en carpetas por dominio (`gifs/`, `auth/`, `shared/`) cada una con sus propias subcarpetas `components/`, `interfaces/`, `pages/`, `services/`. Facilita escalar y trabajar en equipo.
- **Standalone components como modulos:** Desde Angular 19, los componentes son standalone por defecto. Ya no es obligatorio crear archivos `.module.ts`. Cada componente es su propio modulo.
- **Lazy load:** Tecnica para cargar partes del bundle solo cuando el usuario las necesita, reduciendo el peso inicial de la aplicacion.
- **Variables de entorno:** Angular CLI permite configurar variables de entorno en `angular.json` para distinguir entre desarrollo y produccion.
- **Alcance de esta seccion:** Solo se construye la estructura visual y el sistema de rutas. La logica de peticiones HTTP y la data real se veran en la siguiente seccion.

---

## 4. Ejemplo sencillo

No aplica para esta leccion introductoria.

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Feature Module | Carpeta que agrupa todo lo relacionado a un dominio: `gifs/`, `auth/`, `shared/` |
| Standalone component | Componente que es su propio modulo; valor por defecto en Angular 19+ |
| Lazy load | Carga bajo demanda de partes del bundle para optimizar el peso inicial |
| Variables de entorno | Configuracion separada para desarrollo y produccion en `angular.json` |
| `.module.ts` | Archivo de modulo tradicional; ya no es obligatorio con standalone components |

---

## 6. Resumen final en pocas palabras

La Seccion 6 construye una aplicacion real de GIFs partiendo de un template HTML. El foco esta en separar el HTML en componentes por features, implementar lazy load, rutas hijas y variables de entorno. Los standalone components reemplazan a los modulos tradicionales. La logica HTTP se trabajara en la seccion siguiente.
