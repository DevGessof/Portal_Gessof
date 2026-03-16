# Seccion 4 - Leccion 08: Tarea - Separar Template de la Logica

---

## 1. Titulo de la leccion

**Tarea: separar el HTML a un archivo externo y agregar botones con logica**

---

## 2. Que se aprende en esta leccion

Se plantea y resuelve una tarea que consiste en separar el template del componente a un archivo HTML externo usando `templateUrl`, agregar un boton de reset y opcionalmente agregar estilos inline al componente.

---

## 3. Puntos clave explicados

- **`templateUrl` en lugar de `template`:** Cuando el HTML supera tres lineas, Angular recomienda extraerlo a un archivo `.html` independiente. El nombre del archivo debe ser identico al del componente pero con extension `.html`.
- **Convencion de nombre del HTML:** Si el componente se llama `counter-page.component.ts`, su template externo debe llamarse `counter-page.component.html`. No es obligatorio, pero si es la convencion oficial de Angular.
- **Path relativo `./`:** Al usar `templateUrl`, se recomienda usar `./` al inicio para indicar que el path es relativo al directorio actual del componente. Ejemplo: `templateUrl: './counter-page.component.html'`.
- **Nuevo metodo `resetCounter`:** Se crea un metodo que no recibe argumentos y restablece el valor del contador a un valor fijo (por ejemplo `10`).
- **Estilos inline en el componente:** Se pueden agregar estilos directamente en el decorador usando `styles` con backticks. Aplican unicamente al HTML de ese componente (con scope automatico).
- **Cuando separar los estilos:** Si los estilos pasan de dos o tres reglas CSS, se recomienda extraerlos a un archivo `.css` externo usando `styleUrl`.
- **Tres botones:** El contador debe tener botones para incrementar en 1, decrementar en 1 y resetear.

---

## 4. Ejemplo sencillo

```typescript
// counter-page.component.ts
@Component({
  templateUrl: './counter-page.component.html',
  styles: [`
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `]
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }
}
```

```html
<!-- counter-page.component.html -->
<h1>Counter: {{ counter }}</h1>
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="resetCounter()">Reset</button>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `templateUrl` | Apunta a un archivo HTML externo; recomendado cuando el template supera 3 lineas |
| `styleUrl` | Apunta a un archivo CSS externo para los estilos del componente |
| `styles` | Permite escribir CSS directamente en el decorador, entre backticks |
| `./` en path | Indica que el path es relativo al directorio actual del archivo |
| Scope de estilos | Los estilos de un componente solo aplican al HTML de ese componente |
| `resetCounter()` | Metodo que restablece el valor del contador a su valor inicial |
| Convencion de nombre | El archivo HTML debe tener el mismo nombre base que el `.ts` del componente |

---

## 6. Resumen final en pocas palabras

Cuando el HTML de un componente crece, se debe separar en un archivo externo usando `templateUrl`. El nombre del archivo HTML debe coincidir con el del componente. Los estilos tambien pueden separarse con `styleUrl`. Estos son estandares que Angular recomienda para mantener el codigo organizado y legible.
