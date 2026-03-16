# Seccion 6 - Leccion 07: Componentes para el Menu Lateral

---

## 1. Titulo de la leccion

**Separar el sidebar en SideMenuComponent, SideMenuHeaderComponent y SideMenuOptionsComponent**

---

## 2. Que se aprende en esta leccion

Se divide el menu lateral en tres componentes independientes: `SideMenuHeaderComponent` (logo y perfil), `SideMenuOptionsComponent` (navegacion) y `SideMenuComponent` (contenedor de ambos). Se aplica el principio de responsabilidad unica a cada pieza visual.

---

## 3. Puntos clave explicados

- **Pensar en componentes:** Antes de crear, identificar que partes del HTML son piezas reutilizables: el encabezado del menu, las opciones de navegacion y el contenedor general del sidebar son tres responsabilidades distintas.
- **`SideMenuHeaderComponent`:** Contiene el logo y la informacion de perfil. Selector: `gifs-side-menu-header`. El HTML se corta del `dashboard-page` y se pega en su template.
- **`SideMenuOptionsComponent`:** Contiene el `<nav>` con los enlaces de navegacion. Selector: `gifs-side-menu-options`.
- **`SideMenuComponent`:** Componente contenedor que agrupa el header y las opciones. Selector: `gifs-side-menu`. Importa los dos componentes anteriores.
- **Autoimportacion con `Ctrl + .`:** Al usar el selector de un componente en el template, VS Code sugiere importarlo automaticamente en el array `imports`.
- **Organizar por relacion:** Los componentes `SideMenuHeaderComponent` y `SideMenuOptionsComponent` pueden moverse dentro de la carpeta `side-menu/` ya que son partes internas de ese componente. Es opcional pero mejora la legibilidad.
- **`dashboard-page` queda limpio:** Al final solo necesita importar `RouterOutlet` y `SideMenuComponent`. Mucho mas facil de leer y mantener.
- **Navegacion entre archivos:** `Alt + Clic` en el selector del template navega al archivo del componente referenciado.

---

## 4. Ejemplo sencillo

```
gifs/components/
└── side-menu/
    ├── side-menu.component.ts|html
    ├── side-menu-header/
    │   └── side-menu-header.component.ts|html
    └── side-menu-options/
        └── side-menu-options.component.ts|html
```

```typescript
// side-menu.component.ts
@Component({
  selector: 'gifs-side-menu',
  imports: [SideMenuHeaderComponent, SideMenuOptionsComponent],
  templateUrl: './side-menu.component.html'
})
export class SideMenuComponent {}
```

```html
<!-- dashboard-page.component.html (resultado final limpio) -->
<gifs-side-menu />
<div class="ml-[220px] flex flex-col px-4">
  <router-outlet />
</div>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Responsabilidad unica | Cada componente hace una sola cosa: header, opciones, contenedor |
| Selector personalizado | `gifs-side-menu`, `gifs-side-menu-header`, `gifs-side-menu-options` |
| `Ctrl + .` | Atajo para autoimportar un componente al usarlo en el template |
| `Alt + Clic` | Navega al archivo del componente referenciado en el template |
| Componente contenedor | `SideMenuComponent` agrupa subcomponentes relacionados |
| Organizacion por carpetas | Subcomponentes dentro de la carpeta del componente padre |

---

## 6. Resumen final en pocas palabras

El sidebar se divide en tres componentes con responsabilidad unica: `SideMenuHeaderComponent` (logo/perfil), `SideMenuOptionsComponent` (navegacion) y `SideMenuComponent` (contenedor). El `dashboard-page` queda limpio importando solo `RouterOutlet` y `SideMenuComponent`. Esta estructura facilita el mantenimiento y la reutilizacion.
