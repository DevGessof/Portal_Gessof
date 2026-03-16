# Configuración del dashboard — Tailwind

## ¿Qué se aprende?

Esta lección aplica un layout visual completo al dashboard usando un componente HTML preestilizado con Tailwind obtenido de una fuente externa. Se reorganiza el template del `DashboardComponent` para separar el menú lateral (`SideMenuComponent`) del área de contenido principal, y se construye dinámicamente el menú lateral leyendo las rutas definidas en `app.routes.ts`.

---

## Puntos clave

**Fuente del diseño: tailwindcomponents**

El instructor deja en el material adjunto un enlace a `tailwindcomponents`, una página que ofrece componentes HTML preestilizados con Tailwind, de código abierto y listos para copiar y pegar. El componente utilizado es un dashboard administrativo con menú lateral. No es un componente Angular, es simplemente HTML con clases de Tailwind.

**Reemplazar el template del `DashboardComponent`**

Se copia el HTML del dashboard de `tailwindcomponents` y se pega en el template del `DashboardComponent`, reemplazando el contenido anterior. Luego se hacen ajustes:

- Se eliminan los `styles` e `imports` innecesarios que quedaban del template anterior.
- Se reestructura el layout: el contenido del menú lateral se corta del `DashboardComponent` y se pega en el `SideMenuComponent`.
- En el lugar donde estaba el menú se coloca `<app-sidemenu />`.
- El `router-outlet` se coloca dentro de un `div` con clases `text-black px-2 mt-2 w-full` para que el contenido de cada página ocupe el área principal.
- El `DashboardComponent` necesita importar `SideMenuComponent` y `RouterModule` para que funcionen el selector y el `router-outlet`.

**Ajuste del layout: `flex relative`**

El contenedor raíz del dashboard se configura con las clases `flex relative` (en lugar de `flex flex-col`) para que el menú y el contenido principal se coloquen uno al lado del otro en forma de fila (row), no apilados verticalmente.

**Quitar `fixed` del menú lateral**

El HTML del componente descargado tenía la clase `fixed` en el menú, lo que lo sobreponía sobre el contenido. Se quita esa clase para que el menú forme parte del flujo normal del documento.

**Generar el listado de ítems del menú a partir de las rutas**

En lugar de codificar los enlaces del menú a mano, se construye dinámicamente leyendo las rutas del archivo `app.routes.ts`. En el `SideMenuComponent` se define una propiedad de clase:

```typescript
public menuItems = routes
  .map(route => route.children ?? [])
  .flat()
  .filter(route => route && route.path)
  .filter(route => !route.path!.includes(':'));
```

- `.map(route => route.children ?? [])` — extrae los `children` de cada ruta (o un arreglo vacío si no tiene).
- `.flat()` — aplana el arreglo de arreglos en uno solo.
- `.filter(route => route && route.path)` — elimina rutas sin `path` (como las de `redirectTo`).
- `.filter(route => !route.path!.includes(':'))` — elimina rutas con parámetros dinámicos como `user/:id` que no deben aparecer en el menú.

El resultado es un arreglo con todas las rutas que sí se quieren mostrar en el menú.

**Usar el menú en el template con la nueva sintaxis**

Los ítems del menú se iteran con el nuevo `@for` de Angular 17 (que se verá en detalle en la siguiente lección). Cada ítem usa `routerLink` para navegar y `routerLinkActive` para marcar la ruta activa con una clase CSS (`bg-blue-800`). El texto mostrado es `item.title` y se muestra también `item.path` como referencia visual.

**`RouterModule` en `SideMenuComponent`**

Como `SideMenuComponent` es un componente `standalone` y usa `routerLink` y `routerLinkActive`, necesita importar `RouterModule` en su arreglo `imports`. Sin este import, Angular no reconoce esas directivas.

---

## Ejemplo sencillo

Construir el menú a partir de las rutas es como generar automáticamente el índice de un libro leyendo los títulos de cada capítulo, en lugar de escribir el índice a mano. Cada vez que se añade una nueva ruta al archivo de rutas, aparece automáticamente en el menú sin tocar el HTML del menú.

---

## Palabras clave y elementos importantes

- **tailwindcomponents** — sitio con componentes HTML preestilizados con Tailwind, de código abierto; fuente del diseño del dashboard
- `SideMenuComponent` — componente al que se mueve el HTML del menú lateral; se usa con `<app-sidemenu />` en el `DashboardComponent`
- `RouterModule` — debe importarse en componentes `standalone` que usen `routerLink`, `routerLinkActive` o `router-outlet`
- `flex relative` — clases Tailwind para el contenedor raíz del dashboard; organiza menú y contenido en fila
- `.map().flat().filter()` — cadena de métodos de arreglo usada para extraer y limpiar las rutas hijas de `app.routes.ts`
- `route.children ?? []` — operador `??` (nullish coalescing): devuelve `route.children` si existe, o `[]` si es `undefined`
- `.flat()` — método de arreglo que aplana un arreglo de arreglos en un único nivel
- `.includes(':')` — condición para detectar rutas con parámetros dinámicos y excluirlas del menú
- `menuItems` — propiedad pública del `SideMenuComponent` que contiene las rutas filtradas para mostrar en el menú
- `routerLinkActive` — directiva de Angular que añade una clase CSS al enlace activo; requiere `RouterModule`

---

## Resumen final

Esta lección aplica un diseño visual al dashboard copiando HTML preestilizado con Tailwind de `tailwindcomponents`. El HTML del menú lateral se separa al `SideMenuComponent` y el `DashboardComponent` queda con el layout principal (`<app-sidemenu />` + `<router-outlet />`). El menú se genera dinámicamente leyendo las rutas de `app.routes.ts` con una cadena `.map().flat().filter()` que extrae las rutas hijas, elimina las redirecciones y excluye las rutas con parámetros. La navegación se implementa con `routerLink` y `routerLinkActive`, requiriendo que `RouterModule` esté importado en el componente standalone.
