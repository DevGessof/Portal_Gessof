# Seccion 6 - Leccion 08: RouterLinks desde Componentes Hijos

---

## 1. Titulo de la leccion

**Crear el menu de navegacion dinamico con @for, RouterLink y RouterLinkActive**

---

## 2. Que se aprende en esta leccion

Se define una interfaz `MenuOption`, se crea el arreglo de opciones del menu en `SideMenuOptionsComponent`, se itera con `@for` en el template, y se conecta cada enlace con `RouterLink` y `RouterLinkActive` para resaltar la ruta activa.

---

## 3. Puntos clave explicados

- **Interfaz `MenuOption`:** Define la forma de cada opcion del menu con `icon`, `label`, `subLabel` y `route` (todos string). Se puede definir en el mismo archivo del componente.
- **Arreglo `menuOptions`:** Propiedad de la clase (no senal) que contiene los objetos del menu. No necesita ser senal si no cambia dinamicamente; si cambia, se recomienda usar senal.
- **FontAwesome:** Libreria de iconos gratuita. Se vincula con un `<link>` CDN en `index.html`. Los iconos se renderizan con `<i class="fa-solid fa-nombre-icono"></i>`.
- **`[class]="valor"`:** Forma de asignar clases dinamicamente a un elemento HTML desde el template. Alternativa a `[ngClass]` para casos simples.
- **`@for` sobre arreglo no-senal:** Cuando el arreglo no es una senal, se itera directamente sin parentesis: `@for (item of menuOptions; track item.route)`.
- **`[routerLink]="item.route"`:** Enlaza cada anchor tag a la ruta del objeto del menu. Requiere importar `RouterLink` en el componente.
- **`routerLinkActive="bg-blue-800"`:** Agrega la clase CSS cuando la ruta del enlace esta activa. No necesita `{ exact: true }` para rutas bien especificas. Requiere importar `RouterLinkActive`.
- **Convension de nombres de outputs:** No se recomienda prefijar eventos con `on` porque el uso de parentesis ya lo indica.

---

## 4. Ejemplo sencillo

```typescript
// side-menu-options.component.ts
interface MenuOption {
  icon:     string;
  label:    string;
  subLabel: string;
  route:    string;
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html'
})
export class SideMenuOptionsComponent {
  menuOptions: MenuOption[] = [
    { icon: 'fa-solid fa-chart-line', label: 'Trending',  subLabel: 'Gifs Populares', route: '/dashboard/trending' },
    { icon: 'fa-solid fa-magnifying-glass', label: 'Buscar', subLabel: 'Buscar gifs', route: '/dashboard/search' }
  ];
}
```

```html
<!-- side-menu-options.component.html -->
@for (item of menuOptions; track item.route) {
  <a [routerLink]="item.route"
     routerLinkActive="bg-blue-800"
     class="flex items-center gap-3 p-3 rounded cursor-pointer">
    <i [class]="item.icon"></i>
    <div>
      <p>{{ item.label }}</p>
      <p class="text-sm">{{ item.subLabel }}</p>
    </div>
  </a>
}
```

```html
<!-- index.html: agregar enlace de FontAwesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" />
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Interfaz `MenuOption` | Tipo que define la forma de cada entrada del menu |
| `@for (item of array; track item.campo)` | Itera sobre arreglo no-senal; sin parentesis |
| `[class]="valor"` | Asigna clases CSS dinamicamente desde una variable |
| `[routerLink]="item.route"` | Navega a la ruta del objeto sin full refresh |
| `routerLinkActive="clase"` | Agrega la clase CSS cuando la ruta esta activa |
| FontAwesome | Libreria de iconos; se incluye como `<link>` CDN en `index.html` |
| `RouterLink` / `RouterLinkActive` | Directivas de navegacion; importar en el componente que las usa |

---

## 6. Resumen final en pocas palabras

Se crea una interfaz `MenuOption` y un arreglo de opciones en el componente. Con `@for` se itera en el template, `[routerLink]` conecta cada enlace a su ruta y `routerLinkActive` resalta la ruta activa con una clase CSS. Los iconos vienen de FontAwesome incluido via CDN en `index.html`.
