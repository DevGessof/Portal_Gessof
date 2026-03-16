# Seccion 6 - Leccion 03: Demostracion

---

## 1. Titulo de la leccion

**Demostracion del resultado final: GifsApp con sidebar, rutas y estructura por features**

---

## 2. Que se aprende en esta leccion

Se muestra el resultado final de la seccion: una aplicacion de Angular con un panel lateral (sidebar), area de contenido dinamico con rutas, y una estructura de carpetas organizada por features (`gifs/`, `shared/`).

---

## 3. Puntos clave explicados

- **Arquitectura visual:** La aplicacion tiene dos grandes areas: el sidebar (menu lateral constante) y el area de contenido donde cambian las rutas.
- **Cada area es un componente:** El sidebar es un componente, el area de contenido es otro componente, y hay componentes internos dentro de cada uno.
- **Reutilizacion:** Si se cambia el diseno de un item del menu, el cambio se refleja en todos automaticamente porque es un componente comun.
- **Sistema de rutas:** Al hacer clic en un item del menu, solo cambia el contenido del area principal. El sidebar permanece igual. Esto es el router-outlet en accion.
- **Estructura de carpetas por feature:**
  - `gifs/components/`, `gifs/interfaces/`, `gifs/pages/`, `gifs/services/`
  - `shared/components/`, `shared/interfaces/`, `shared/pages/`, `shared/services/`
  - Cada feature tiene su propia estructura interna identica.
- **Standalone components = modulos:** No hay archivos `.module.ts`. Los standalone components son tanto componente como modulo. Esta es la forma moderna desde Angular 17+.
- **Variables de entorno:** Visibles en la estructura de archivos del proyecto final.

---

## 4. Ejemplo sencillo

```
src/app/
├── gifs/
│   ├── components/
│   ├── interfaces/
│   ├── pages/
│   └── services/
├── shared/
│   ├── components/
│   ├── interfaces/
│   ├── pages/
│   └── services/
└── app.routes.ts
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Sidebar | Componente de menu lateral que permanece constante en toda la app |
| Area de contenido | Zona donde el `router-outlet` muestra el componente de la ruta activa |
| Feature folder | Carpeta que agrupa todo lo de un dominio: `gifs/`, `auth/`, `shared/` |
| Standalone components | Componentes que son su propio modulo; sustituyen a los `.module.ts` |
| `router-outlet` | Marca el lugar donde Angular inserta el componente de la ruta activa |

---

## 6. Resumen final en pocas palabras

El resultado final es una SPA con sidebar fijo y area de contenido dinamica. Cada seccion visual es un componente independiente. La estructura de carpetas sigue el patron de feature folders con `components/`, `interfaces/`, `pages/` y `services/` por dominio. No hay modulos tradicionales; todo son standalone components.
