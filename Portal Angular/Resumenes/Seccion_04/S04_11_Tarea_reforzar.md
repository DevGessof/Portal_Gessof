# Seccion 4 - Leccion 11: Tarea - Reforzar lo Aprendido

---

## 1. Titulo de la leccion

**Tarea: crear el componente HeroPage con senales, rutas y metodos**

---

## 2. Que se aprende en esta leccion

Se plantea una tarea integradora que combina todo lo visto hasta el momento: crear un nuevo componente con senales, conectarlo a una ruta, usar interpolacion, manejar eventos y aplicar Bootstrap como framework CSS.

---

## 3. Puntos clave explicados

- **Agregar Bootstrap globalmente:** Se copia el enlace CDN de Bootstrap y se pega en el `index.html` dentro de la etiqueta `<head>`. Esto habilita Bootstrap en toda la aplicacion.
- **Nueva ruta `/hero`:** El componente `HeroPageComponent` debe ser accesible en `localhost:4200/hero`. La ruta se agrega en `app.routes.ts` con `path: 'hero'` (sin `/` inicial).
- **Dos senales:** Se crean las senales `name` (string, valor por defecto `'Ironman'`) y `age` (number, valor por defecto `45`).
- **Metodo `getHeroDescription()`:** Retorna un string que concatena el nombre y la edad usando interpolacion de template literals con los valores de las senales.
- **Metodo `changeHero()`:** Cambia la senal `name` a `'Spiderman'` y `age` a `22` usando `.set()`.
- **Metodo `changeAge()`:** Cambia la senal `age` a otro valor (por ejemplo `60`) usando `.set()`.
- **Metodo `resetForm()`:** Restablece `name` a `'Ironman'` y `age` a `45`.
- **Punto extra:** Mostrar el nombre en mayusculas sin crear una nueva senal (se puede usar `.toUpperCase()` directamente en la interpolacion del template).

---

## 4. Ejemplo sencillo

```typescript
// pages/hero/hero-page.component.ts
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

```html
<!-- hero-page.component.html (fragmento) -->
<dd>{{ name() }}</dd>
<dd>{{ age() }}</dd>
<dd>{{ getHeroDescription() }}</dd>
<dd>{{ name().toUpperCase() }}</dd>

<button (click)="changeHero()">Cambiar nombre</button>
<button (click)="changeAge()">Cambiar edad</button>
<button (click)="resetForm()">Reset</button>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Bootstrap CDN | Se incluye en `index.html` para aplicar estilos globales de Bootstrap |
| `path: 'hero'` | Ruta sin `/` inicial; error comun es poner `/hero` |
| `signal('valor')` | Crea senal de tipo string; `signal(45)` crea senal numerica |
| `.set(valor)` | Cambia el valor de la senal a un valor fijo |
| Template literal | Permite concatenar valores de senales en un string con backticks: `` `${this.name()} - ${this.age()}` `` |
| `.toUpperCase()` | Metodo de string que capitaliza; se puede usar dentro de la interpolacion `{{ }}` |
| `getHeroDescription()` | Metodo del componente que devuelve texto; se invoca desde el template |

---

## 6. Resumen final en pocas palabras

Esta tarea integra rutas, senales, interpolacion, eventos y un componente completo. Se crea `HeroPageComponent` con senales para nombre y edad, metodos para cambiarlas y resetearlas, y se conecta a la ruta `/hero`. El punto extra introduce transformar valores directamente en el template sin senales adicionales.
