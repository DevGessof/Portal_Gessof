# Seccion 9 - Leccion 01: Introduccion

---

## 1. Titulo de la leccion

**CountryApp: estructura, diseño con Tailwind + daisyUI, rutas separadas y optimizacion**

---

## 2. Que se aprende en esta leccion

Se presenta la seccion 9, centrada en construir la estructura y el diseño de la aplicacion CountryApp (busqueda de paises). Se integran Tailwind y daisyUI, se aprende a separar rutas en archivos independientes por modulo, y se crea la arquitectura de carpetas.

---

## 3. Puntos clave explicados

- **Enfoque de la seccion:** Estructura, diseno y optimizacion. La funcionalidad real se implementa en la seccion 10.
- **Tailwind + daisyUI:** Angular no esta limitado a ninguna libreria de estilos. Se puede usar Bootstrap, Material UI, Tailwind, daisyUI, etc. daisyUI es un plugin de Tailwind que aporta componentes prefabricados y temas de color.
- **Ventaja de Tailwind:** Solo genera el CSS de las clases efectivamente usadas en la app. No importa todo el CSS como Bootstrap.
- **Separacion de rutas por modulo:** En lugar de poner todas las rutas en `app.routes.ts`, cada modulo (paises, auth, productos) tiene su propio archivo `*.routes.ts`. Esto evita conflictos al trabajar en equipo.
- **`loadChildren`:** Permite importar un archivo de rutas de forma perezosa (lazy loading).
- **Pagina 404:** Se puede mostrar un componente `NotFoundComponent` en el path `**` en lugar de redirigir.
- **Standalone components:** No se crean modulos `.module.ts`. Cada componente es su propio modulo gracias a los imports internos.

---

## 4. Ejemplo sencillo

```
Estructura de la seccion:
- Crear app country-app con ng new
- Instalar Tailwind + daisyUI
- Separar rutas: app.routes.ts → country.routes.ts
- Layouts, paginas y componentes para CountryApp
- La funcionalidad (HTTP, senales) viene en la seccion 10
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| daisyUI | Plugin de Tailwind con componentes prefabricados y temas de color |
| `loadChildren` | Carga un archivo de rutas de forma perezosa |
| `country.routes.ts` | Archivo de rutas especifico del modulo de paises |
| Pagina 404 | Componente mostrado en la ruta comodin `**` |
| Standalone components | Componentes sin necesidad de `NgModule` |

---

## 6. Resumen final en pocas palabras

La seccion 9 construye la estructura y el diseno de CountryApp sin funcionalidad real. Se aprende a integrar daisyUI con Tailwind, a separar las rutas de cada modulo en archivos independientes con `loadChildren`, y a organizar el proyecto en carpetas por dominio (country, shared, layouts, pages, components).
