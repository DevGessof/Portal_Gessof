# Seccion 4 - Leccion 06: Explicacion del Directorio SRC

---

## 1. Titulo de la leccion

**Estructura de la carpeta src y anatomia de un componente Angular**

---

## 2. Que se aprende en esta leccion

Se detalla la carpeta `src`, que es donde se trabaja el dia a dia en Angular. Se explica la estructura de un componente, el decorador `@Component`, el sistema de rutas, el archivo `main.ts` y la configuracion global de la aplicacion.

---

## 3. Puntos clave explicados

- **`styles.css`:** Archivo de estilos globales referenciado en `angular.json`. Los estilos aqui aplican a toda la aplicacion.
- **Estilos con scope:** Cada componente tiene su propio archivo de estilos que solo aplica al HTML de ese componente, evitando colisiones con otros componentes.
- **Anatomia de un componente:** Todo componente es una Clase TypeScript con el decorador `@Component`. Sus partes son: `selector`, `imports`, `template` (o `templateUrl`) y `styleUrl` (opcional).
- **`selector`:** Define el nombre de la etiqueta HTML personalizada que representa al componente (ej: `app-root`).
- **`template` vs `templateUrl`:** `template` permite escribir el HTML dentro del archivo `.ts`. `templateUrl` apunta a un archivo `.html` externo. Se recomienda separarlo cuando el HTML supera tres lineas.
- **`imports` en el componente:** Se importan los elementos que se usaran en el template (pipes, directivas, otros componentes). Es obligatorio en standalone components.
- **Standalone components:** Desde Angular v19 son el estandar. Un componente es standalone por defecto y no necesita declararse en un modulo.
- **`router-outlet`:** Directiva de Angular que indica donde se renderizara el componente correspondiente a la ruta activa. Vive en `app.component.html`.
- **`index.html`:** Archivo HTML global que envuelve toda la aplicacion. El componente raiz `<app-root>` se monta aqui.
- **`main.ts`:** Punto de entrada de la aplicacion. Inicializa Angular con el componente raiz y la configuracion global.
- **`app.config.ts`:** Archivo de configuracion global. Provee el router (`provideRouter`) y la estrategia de deteccion de cambios.
- **`app.routes.ts`:** Define las rutas de la aplicacion: que componente mostrar segun el URL activo.

---

## 4. Ejemplo sencillo

```typescript
// app.component.ts - estructura basica de un componente
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bases';
}
```

```html
<!-- app.component.html -->
<router-outlet />
```

```typescript
// app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [];
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `@Component` | Decorador que convierte una clase en componente Angular |
| `selector` | Nombre de la etiqueta HTML personalizada del componente |
| `templateUrl` | Ruta al archivo HTML externo del componente |
| `template` | HTML escrito directamente dentro del decorador (para templates cortos) |
| `router-outlet` | Directiva que renderiza el componente de la ruta activa |
| `app.routes.ts` | Archivo donde se definen las rutas de la aplicacion |
| `app.config.ts` | Configuracion global: proveedores del router y estrategia de cambios |
| `main.ts` | Punto de entrada; inicializa la aplicacion con el componente raiz |
| `index.html` | HTML global que monta `<app-root>` y puede incluir scripts o estilos globales |
| Standalone component | Componente que no necesita modulo; estandar desde Angular v19 |

---

## 6. Resumen final en pocas palabras

La carpeta `src` contiene toda la logica de la aplicacion. Un componente Angular es una clase con el decorador `@Component` que define su selector, template y estilos. El `router-outlet` muestra las paginas segun la ruta activa. `main.ts` es el punto de entrada y `app.config.ts` configura el comportamiento global de la aplicacion.
