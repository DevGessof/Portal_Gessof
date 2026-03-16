# Lección 05 – Rutas padre y template HTML

## ¿Qué se aprende en esta lección?
Se finalizan las rutas perezosas de los tres feature modules, se conectan al sistema de rutas raíz y se aplican los templates HTML provistos por el instructor a cada página. También se construye el `SideMenuComponent` con navegación dinámica.

## Puntos clave explicados
- **Exportación por defecto en rutas:** si el archivo exporta `export default routes`, el `loadChildren` puede resolverse directamente sin `.then()`. Si no hay exportación por defecto, hay que encadenar `.then(m => m.nombreExport)`.
- Las rutas padre con `path: ''` + `children` permiten agrupar rutas relacionadas bajo un prefijo común sin repetirlo en cada hijo.
- El comodín `**` dentro de `children` redirige rutas no reconocidas a la ruta por defecto del módulo.
- Los templates HTML se copian desde el Gist del instructor a cada componente. Todos los que usan `| json` deben importar `JsonPipe` en el componente.
- El `SideMenuComponent` construye su menú leyendo `reactiveRoutes[0].children` y filtrando las entradas con `path !== '**'`.
- La interfaz `MenuItem { title: string; route: string }` tipifica cada ítem del menú.
- El layout principal usa `container` en `<body>` y una grilla Bootstrap `row` con `mt-5` para separar el formulario del menú.

## Ejemplo sencillo
```typescript
// app.routes.ts
export const appRoutes: Routes = [
  {
    path: 'reactive',
    loadChildren: () => import('./reactive/reactive.routes')
      .then(m => m.reactiveRoutes)   // sin export default
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes')  // con export default
  },
  { path: '**', redirectTo: 'reactive' }
];
```

```typescript
// side-menu.component.ts
interface MenuItem { title: string; route: string; }

reactiveMenu: MenuItem[] = reactiveRoutes[0].children
  ?.filter(r => r.path !== '**')
  .map(r => ({ route: 'reactive/' + r.path, title: r.title as string })) ?? [];
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `export default` | Permite importación directa en `loadChildren` sin `.then()` |
| `loadChildren` + `.then()` | Necesario cuando no hay exportación por defecto |
| Ruta padre `path: ''` + `children` | Agrupa rutas de un módulo bajo un prefijo |
| Comodín `**` en `children` | Redirige rutas desconocidas dentro del módulo |
| `JsonPipe` | Pipe necesario para mostrar objetos en plantilla con `\| json` |
| `MenuItem` | Interfaz local para tipar los ítems del menú lateral |

## Resumen final
Las rutas perezosas con `loadChildren` permiten cargar cada feature module solo cuando el usuario lo necesita. El truco de `export default` simplifica la sintaxis. El `SideMenuComponent` con `reactiveRoutes` demuestra cómo construir menús dinámicos directamente desde la configuración de rutas.
