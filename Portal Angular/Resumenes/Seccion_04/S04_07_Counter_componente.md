# Seccion 4 - Leccion 07: Counter Page - Componente

---

## 1. Titulo de la leccion

**Crear el primer componente desde cero: CounterPageComponent**

---

## 2. Que se aprende en esta leccion

Se crea manualmente el primer componente propio, se conecta a una ruta, se usa interpolacion para mostrar valores en el HTML y se maneja el evento `click` para modificar el estado.

---

## 3. Puntos clave explicados

- **Carpeta `pages/`:** Convencion del instructor para guardar componentes que ocupan toda la pantalla. No es obligatoria en Angular, pero es una buena practica.
- **Crear un componente manualmente:** Se crea un archivo `.ts`, se exporta una clase y se le agrega el decorador `@Component` importado de `@angular/core`.
- **`template` obligatorio:** El decorador `@Component` requiere al menos un `template` o `templateUrl`. Sin uno de los dos, Angular marca error.
- **Convension de nombres:** El archivo debe llamarse `counter-page.component.ts` y la clase `CounterPageComponent`. Usar `dash-case` para archivos y `UpperCamelCase` para clases.
- **Conectar a una ruta:** En `app.routes.ts` se agrega un objeto con `path` (la URL) y `component` (el componente a mostrar). El path no debe empezar con `/`.
- **`router-outlet`:** Muestra el componente de la ruta activa. Al tener una ruta con path vacio, se muestra de entrada.
- **Interpolacion `{{ }}`:** Permite mostrar valores en el HTML. Acepta cualquier expresion JavaScript valida como `1 + 1` o el valor de una propiedad.
- **Evento `(click)`:** En Angular, los eventos del DOM se envuelven en parentesis. `(click)="metodo()"` llama a un metodo al hacer clic.
- **Metodo con argumento tipado:** TypeScript garantiza que el argumento del metodo sea del tipo correcto al llamarlo desde el template.
- **Contenido estatico en `app.component.html`:** Todo lo que este fuera del `<router-outlet>` (como un nav o footer) aparece en todas las paginas.

---

## 4. Ejemplo sencillo

```typescript
// pages/counter/counter-page.component.ts
import { Component } from '@angular/core';

@Component({
  template: `
    <h1>Counter: {{ counter }}</h1>
    <button (click)="increaseBy(1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
}
```

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';

export const routes: Routes = [
  { path: '', component: CounterPageComponent }
];
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `@Component` | Decorador que convierte la clase en un componente Angular |
| `template` | HTML escrito directamente en el decorador, entre backticks |
| `templateUrl` | Ruta a un archivo HTML externo para el componente |
| `{{ valor }}` | Interpolacion: muestra el valor de una expresion en el HTML |
| `(click)="metodo()"` | Manejo de eventos: ejecuta el metodo al hacer clic |
| `path: ''` | Ruta raiz (sin segmento en la URL); se muestra al entrar a la app |
| `router-outlet` | Renderiza el componente correspondiente a la ruta activa |
| `this.propiedad` | Accede a la propiedad de la instancia del componente desde un metodo |
| Convencion `pages/` | Carpeta para componentes que representan pantallas completas |

---

## 6. Resumen final en pocas palabras

Un componente Angular se crea con una clase y el decorador `@Component`. Para mostrarlo se conecta a una ruta en `app.routes.ts`. La interpolacion `{{ }}` muestra valores dinamicos en el HTML y los eventos como `(click)` permiten reaccionar a acciones del usuario. Todo lo externo al `router-outlet` aparece en todas las paginas.
