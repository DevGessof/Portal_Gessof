# Diseño del panel administrativo

## ¿Qué se aprende?

En esta lección se construye la apariencia visual del layout del panel administrativo: barra lateral con menú de navegación, nombre del usuario autenticado, botón de cerrar sesión, y área de contenido con `<router-outlet>`. Todo usando Tailwind CSS y daisyUI.

---

## Puntos clave

**HTML base del layout**

El instructor proporciona en el material adjunto un enlace a un dashboard administrativo de muestra hecho con Tailwind (disponible en un sitio de componentes gratuitos). Desde ese sitio se accede al HTML del dashboard haciendo clic en "Show Code". Se copia únicamente el `div` de contenido, sin los estilos inline ni los scripts del ejemplo.

Este HTML se pega en `admin-dashboard-layout.component.html`, reemplazando el `<router-outlet>` provisional.

**Ajuste del color de fondo**

El fondo original usa `bg-slate-100`. Se cambia a `bg-slate-800` para que el panel luzca oscuro.

**Inyección del `AuthService` en el layout**

El layout necesita mostrar el nombre del usuario autenticado. Se inyecta el `AuthService` y se crea una señal computada local para acceder al usuario sin repetir `authService.user()` en todo el template:

```typescript
authService = inject(AuthService);
user = computed(() => this.authService.user());
```

En el template se usa con optional chaining para evitar errores cuando el usuario aún no se ha cargado:

```html
{{ user()?.fullName }}
```

**Menú lateral: solo dos items**

Del HTML de ejemplo se eliminan todos los anchor tags del menú excepto dos:

1. Un enlace genérico al "Dashboard" (se le asigna `routerLink="/admin/dashboard"` aunque esa ruta no existe, para que no haga nada al hacer clic).
2. Un enlace a "Productos" (Listado de productos):
   ```html
   <a routerLink="/admin/products" routerLinkActive="bg-blue-500">
     Listado de productos
   </a>
   ```

`routerLinkActive="bg-blue-500"` aplica el fondo azul automáticamente cuando la ruta está activa.

**Importaciones necesarias en el componente TypeScript**

El layout usa `RouterOutlet`, `RouterLink` y `RouterLinkActive`, que deben importarse en el componente standalone:

```typescript
imports: [RouterOutlet, RouterLink, RouterLinkActive]
```

**`<router-outlet>` dentro del layout**

El contenido de las rutas hijas se renderiza en un `div` posicionado a la derecha de la barra lateral:

```html
<div class="flex-1 ml-64 pt-5 px-5">
  <router-outlet />
</div>
```

- `flex-1` — ocupa el espacio restante.
- `ml-64` — margen izquierdo para no quedar tapado por la barra lateral (que tiene `w-64`).
- `pt-5 px-5` — padding superior y horizontal.

**Botón de cerrar sesión**

Justo debajo del `divider` en la barra lateral se añade el botón de logout:

```html
<button class="btn btn-ghost text-accent w-full" (click)="authService.logout()">
  Cerrar sesión
</button>
```

Al hacer clic, llama directamente a `authService.logout()`. No se hace redirección desde aquí porque un Guard se encargará de eso automáticamente.

**Comportamiento al cerrar sesión**

Al tocar el botón de logout, el nombre del usuario desaparece del sidebar porque `user()` pasa a ser `null`. Sin embargo el usuario se queda en la misma pantalla porque todavía no hay Guard que lo redirija. Esto se corrige en la lección siguiente.

---

## Ejemplo sencillo

El layout del panel es como el plano de una oficina: hay un pasillo central (la barra lateral con el menú), y una sala de trabajo a la derecha (el área donde se muestran las páginas mediante `router-outlet`). El nombre en la placa de la puerta es el del usuario autenticado, y hay un botón de salida de emergencia (logout) que abre la puerta hacia afuera.

---

## Palabras clave y elementos importantes

- `admin-dashboard-layout.component.html` — archivo donde va el HTML del panel con barra lateral y `router-outlet`
- `bg-slate-800` — color de fondo oscuro para el panel (reemplaza `bg-slate-100` del ejemplo)
- `computed(() => authService.user())` — señal computada local para exponer el usuario en el template de forma concisa
- `user()?.fullName` — acceso seguro con optional chaining al nombre del usuario desde la señal computada
- `RouterLink` / `RouterLinkActive` / `RouterOutlet` — directivas importadas en el componente standalone del layout
- `routerLinkActive="bg-blue-500"` — aplica la clase cuando la ruta del enlace está activa
- `ml-64` — margen izquierdo del área de contenido para compensar el ancho de la barra lateral
- `(click)="authService.logout()"` — llama directamente al método logout del servicio desde el template
- `divider` — clase daisyUI que dibuja una línea separadora

---

## Resumen final

Esta lección construye la apariencia del layout del panel administrativo usando HTML basado en Tailwind/daisyUI. Se inyecta el `AuthService` y se crea una señal `computed` para mostrar el nombre del usuario. El menú lateral queda con dos ítems: uno para el dashboard (sin ruta real) y otro para el listado de productos con `routerLink` y `routerLinkActive`. El `<router-outlet>` se coloca en un `div` a la derecha con `ml-64` para separarlo de la barra lateral. El botón de logout llama a `authService.logout()` directamente, aunque la redirección tras el logout se delegará al Guard de la lección siguiente.
