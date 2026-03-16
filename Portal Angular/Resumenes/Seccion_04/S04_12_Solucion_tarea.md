# Seccion 4 - Leccion 12: Solucion a la Tarea

---

## 1. Titulo de la leccion

**Solucion completa: HeroPageComponent con señales y ruta funcional**

---

## 2. Que se aprende en esta leccion

Se presenta la solucion de la tarea anterior paso a paso: crear el archivo HTML y TypeScript del componente, conectarlo a la ruta correcta, implementar todos los metodos y senales, y usar `Ctrl + .` para agregar miembros faltantes rapidamente.

---

## 3. Puntos clave explicados

- **Crear el componente:** Se crean los archivos `hero-page.component.html` y `hero-page.component.ts` dentro de `src/app/pages/hero/`.
- **Snippet `a-component`:** En VS Code con los snippets de Angular instalados, escribir `a-component` y presionar Tab genera automaticamente la estructura base de un componente.
- **Las paginas no necesitan `selector`:** Los componentes de pagina se conectan mediante el router, no se insertan como etiquetas HTML en otro componente. El selector es opcional para ellos.
- **`Ctrl + .` → "Add all missing members":** Cuando el template tiene referencias a propiedades o metodos que no existen en el componente, TypeScript lo marca como error. Con `Ctrl + .` se pueden agregar todos los miembros faltantes automaticamente como placeholder para luego implementarlos.
- **Corregir los placeholders:** Los miembros agregados automaticamente son de tipo generico o `throw`. Hay que reemplazarlos con la implementacion correcta: senales para `name` y `age`, metodos reales para `getHeroDescription`, `changeHero`, `changeAge` y `resetForm`.
- **Error comun con rutas:** El path en `app.routes.ts` no debe empezar con `/`. Si se escribe `/hero` Angular muestra el error "Invalid configuration of route '/hero': path cannot start with a slash".
- **Resultado esperado:** Al ir a `/hero` se ve el componente con los datos del heroe, los botones funcionan y el reset restablece los valores originales.

---

## 4. Ejemplo sencillo

```typescript
// hero-page.component.ts (solucion completa)
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
  name = signal('Ironman');
  age  = signal(45);

  getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero(): void {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  changeAge(): void {
    this.age.set(60);
  }

  resetForm(): void {
    this.name.set('Ironman');
    this.age.set(45);
  }
}
```

```typescript
// app.routes.ts
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';

export const routes: Routes = [
  { path: '',     component: CounterPageComponent },
  { path: 'hero', component: HeroPageComponent }, // sin "/" al inicio
];
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `a-component` (snippet) | Atajo de VS Code para generar la estructura base de un componente Angular |
| `Ctrl + .` → Add all missing members | Agrega automaticamente todos los miembros faltantes como placeholders |
| Error "path cannot start with a slash" | Error al poner `/hero` en lugar de `hero` en `app.routes.ts` |
| `throw new Error('Unimplemented')` | Placeholder generado por el snippet; debe reemplazarse con la logica real |
| Paginas sin selector | Los componentes de pagina no necesitan selector porque se usan via router |

---

## 6. Resumen final en pocas palabras

La solucion crea `HeroPageComponent` con dos senales, cuatro metodos y su template HTML. Se conecta en `app.routes.ts` con `path: 'hero'` (sin barra). El truco de `Ctrl + .` para agregar miembros faltantes acelera el flujo de trabajo. Los errores de TypeScript y Angular son guias, no obstaculos: leerlos lleva directamente a la solucion.
