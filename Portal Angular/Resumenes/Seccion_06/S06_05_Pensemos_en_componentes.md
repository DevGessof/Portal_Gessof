# Seccion 6 - Leccion 05: Pensemos en Componentes

---

## 1. Titulo de la leccion

**Estructurar la aplicacion por features y crear la primera ruta con lazy load**

---

## 2. Que se aprende en esta leccion

Se crea la estructura de carpetas por features (`gifs/`, `shared/`), se genera el componente `DashboardPageComponent` con Angular Schematics, se mueve el HTML del dashboard al componente, y se configura la primera ruta con `loadComponent` para implementar lazy load.

---

## 3. Puntos clave explicados

- **Pensar en componentes:** Antes de escribir codigo, identificar las piezas visuales: sidebar, area de contenido, items del menu. Cada pieza sera un componente independiente.
- **Estructura de carpetas por feature:** Dentro de `src/app/` se crean carpetas por dominio: `gifs/` y `shared/`. Cada una tendra `components/`, `interfaces/`, `pages/` y `services/`.
- **Angular Schematics:** Se usa la extension de VS Code para generar el componente `dashboard-page` con `externalTemplate: true` y `skipStyle: true`. Estas opciones se guardan en `.vscode/settings.json` para que apliquen a todos los componentes generados en el workspace.
- **`export default class`:** Para usar `loadComponent` en las rutas, la clase del componente debe exportarse como `export default`. Esto permite a Angular importar el componente directamente sin necesidad del `.then()`.
- **`loadComponent`:** Propiedad de una ruta que implementa lazy load. Recibe una funcion que retorna un `import()` dinamico. Angular carga el archivo JS del componente solo cuando el usuario navega a esa ruta.
- **Diferencia `component` vs `loadComponent`:** `component` incluye el componente en el bundle principal. `loadComponent` lo separa en un chunk independiente que se descarga bajo demanda.
- **Ruta comodin con `redirectTo`:** Se agrega `{ path: '**', redirectTo: 'dashboard' }` para redirigir cualquier ruta desconocida al dashboard.
- **Tarea:** Crear dos rutas adicionales al mismo nivel que `dashboard`: `trending` y `search`, con sus respectivos componentes en `gifs/pages/`.

---

## 4. Ejemplo sencillo

```typescript
// src/app/gifs/pages/dashboard-page/dashboard-page.component.ts
@Component({
  templateUrl: './dashboard-page.component.html'
})
export default class DashboardPageComponent {}
//      ↑ export default necesario para loadComponent
```

```typescript
// app.routes.ts
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page.component')
    // Angular toma el export default automaticamente
  },
  { path: '**', redirectTo: 'dashboard' }
];
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Feature folder | Carpeta por dominio: `gifs/`, `auth/`, `shared/` con sus subcarpetas |
| `loadComponent` | Propiedad de ruta para lazy load; carga el componente solo al navegar a esa ruta |
| `export default class` | Necesario para que `loadComponent` importe el componente sin `.then()` |
| `import()` dinamico | Importacion en tiempo de ejecucion que divide el bundle en chunks |
| Angular Schematics | Extension de VS Code para generar componentes con configuracion personalizada |
| `.vscode/settings.json` | Archivo que guarda la configuracion de Schematics para todo el workspace |
| `externalTemplate: true` | Genera el template en archivo `.html` separado (no inline) |
| `skipStyle: true` | No genera archivo de estilos al crear el componente |

---

## 6. Resumen final en pocas palabras

Se organiza la app en carpetas por feature (`gifs/`, `shared/`) con subcarpetas `components/`, `pages/`, `services/`, `interfaces/`. El primer componente `DashboardPageComponent` se genera con Angular Schematics, se declara con `export default` y se registra en las rutas con `loadComponent` para activar lazy load. La ruta comodin `**` redirige al dashboard por defecto.
