# Seccion 5 - Leccion 04: RouterLink

---

## 1. Titulo de la leccion

**Crear el navbar y navegar entre paginas con RouterLink**

---

## 2. Que se aprende en esta leccion

Se crea el componente `NavbarComponent` con el Angular CLI, se usa la directiva `RouterLink` para navegar entre rutas sin recargar la pagina y se aplican estilos inline al navbar.

---

## 3. Puntos clave explicados

- **`ng generate component navbar`** (o `ng g c navbar`): Genera automaticamente los archivos `.ts`, `.html`, `.css` y `.spec.ts` de un componente.
- **Mover componentes en Angular 19+:** Si se genera en la ubicacion incorrecta, basta con arrastrar la carpeta al lugar correcto. No hay modulos que actualizar.
- **Uso del selector:** El selector `app-navbar` permite insertar el componente en cualquier template con `<app-navbar />`.
- **Importar componentes:** Para usar un componente en otro, debe agregarse al array `imports` del decorador. Angular lo autoimporta al hacer Tab sobre el selector en el template.
- **`RouterLink`:** Directiva de Angular que reemplaza el `href` en los anchor tags para navegar sin hacer un full refresh del navegador. Se importa de `@angular/router`.
- **`[routerLink]` con llaves cuadradas:** Permite mandar el path como expresion dinamica (ej: un arreglo). Sin las llaves, se manda como string literal.
- **Navegacion SPA:** Con `RouterLink`, solo cambia el contenido del `router-outlet`; el navbar permanece igual en todas las pantallas.

---

## 4. Ejemplo sencillo

```bash
# Generar componente con Angular CLI
ng g c components/shared/navbar
```

```typescript
// navbar.component.ts
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {}
```

```html
<!-- navbar.component.html -->
<nav style="display:flex; background-color:#333; color:white; padding:10px">
  <a routerLink="/">Contador</a>
  <a routerLink="/hero">Hero</a>
</nav>
```

```html
<!-- app.component.html -->
<app-navbar />
<router-outlet />
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng g c nombre` | Genera un componente con todos sus archivos |
| `RouterLink` | Directiva para navegar entre rutas sin full refresh; importar de `@angular/router` |
| `routerLink="/ruta"` | Forma simple: manda el path como string literal |
| `[routerLink]="['/ruta']"` | Forma dinamica: manda el path como expresion evaluada |
| `imports: [RouterLink]` | Necesario en el componente para que la directiva funcione |
| Full refresh | Recarga completa del navegador; ocurre con `href` pero no con `RouterLink` |

---

## 6. Resumen final en pocas palabras

`RouterLink` es la directiva que habilita la navegacion en un SPA sin recargar la pagina. Se aplica en anchor tags en lugar de `href` y debe importarse en el componente donde se usa. El navbar se coloca en `app.component.html` para que aparezca en todas las pantallas.
