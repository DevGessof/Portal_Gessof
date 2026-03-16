# Seccion 5 - Leccion 10: Inputs - Agregar Personaje

---

## 1. Titulo de la leccion

**Leer valores de inputs con referencias locales, [value] y eventos**

---

## 2. Que se aprende en esta leccion

Se aprende a leer el valor de un input HTML de dos formas: con el binding `[value]` para mostrar el valor de una senal, y con referencias locales (`#variable`) junto a eventos `(input)` o `(change)` para capturar lo que el usuario escribe.

---

## 3. Puntos clave explicados

- **`[value]="senal()"`:** Asigna el valor de una senal al atributo `value` del input. Forma correcta de hacer binding de atributos. La interpolacion `{{ }}` en atributos es tecnicamente posible pero no recomendada.
- **Llaves cuadradas `[ ]`:** En Angular, las llaves cuadradas asignan dinamicamente el valor de una expresion a un atributo HTML.
- **Referencia local `#nombreRef`:** El `#` seguido de un nombre crea una referencia al elemento HTML del DOM. Permite acceder a sus propiedades (como `.value`) directamente en el template o al pasarlo a un metodo.
- **Evento `(input)`:** Se dispara con cada tecla presionada. Util para actualizar la senal en tiempo real.
- **Evento `(change)`:** Se dispara cuando el input pierde el foco despues de un cambio. Menos frecuente que `(input)`.
- **`$event`:** Objeto del evento del DOM. Se puede pasar al metodo para acceder a `$event.target.value`, aunque con referencias locales es mas limpio.
- **Problema de tipado con `$event`:** Angular manda un evento generico que TypeScript no puede tipar bien. Las referencias locales resuelven este problema de forma mas limpia.

---

## 4. Ejemplo sencillo

```html
<!-- Referencia local + evento (input) -->
<input #txtName
       [value]="name()"
       (input)="name.set(txtName.value)" />

<input #txtPower
       type="number"
       [value]="power()"
       (input)="power.set(+txtPower.value)" />

<button (click)="addCharacter()">Agregar</button>
```

```typescript
export class DragonBallPageComponent {
  name  = signal('Gohan');
  power = signal(100);

  addCharacter(): void {
    console.log(this.name(), this.power());
  }
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `[value]="expresion"` | Binding de atributo: asigna el valor de una expresion al atributo del elemento |
| `#nombreRef` | Referencia local al elemento HTML; permite acceder a `.value` directamente |
| `(input)="metodo()"` | Evento que se dispara con cada tecla presionada en el input |
| `(change)="metodo()"` | Evento que se dispara al perder el foco despues de un cambio |
| `+txtPower.value` | Convierte el string del input a numero con el operador `+` |
| `$event` | Objeto del evento del DOM; accesible en el template |

---

## 6. Resumen final en pocas palabras

Para leer inputs en Angular sin formularios reactivos, se combinan referencias locales (`#ref`) con el evento `(input)` para actualizar senales en tiempo real. El binding `[value]` muestra el valor actual de la senal en el campo. Los valores de los inputs siempre son strings, por lo que hay que convertirlos a numero con `+` cuando sea necesario.
