# Seccion 5 - Leccion 07: @for - Iteraciones de Elementos

---

## 1. Titulo de la leccion

**Iterar listas en el template con @for y la interfaz Character**

---

## 2. Que se aprende en esta leccion

Se crea una interfaz `Character`, se inicializa una senal con un arreglo de personajes y se usa la directiva estructural `@for` del nuevo control flow de Angular para renderizar la lista en el HTML.

---

## 3. Puntos clave explicados

- **Interfaz `Character`:** Se define fuera de la clase con `id: number`, `name: string` y `power: number` para tipar el contenido del arreglo.
- **Senal tipada:** `signal<Character[]>([])` indica explicitamente que la senal contendra un arreglo de personajes. Sin el tipo, TypeScript lo infiere como `never[]`.
- **`@for`:** Directiva estructural del nuevo control flow de Angular. Reemplaza al `*ngFor` tradicional. Su sintaxis es `@for (item of lista; track item.id) { ... }`.
- **`track`:** Identificador unico que Angular usa para hacer seguimiento eficiente de los elementos. Se recomienda usar el `id` del objeto, nunca el indice del arreglo.
- **Por que no usar el indice en `track`:** Si el arreglo se modifica constantemente, usar el indice puede generar efectos indeseados en la renderizacion.
- **Variables disponibles dentro de `@for`:** `$index`, `$count`, `$first`, `$last`, `$even`, `$odd`. Se declaran con `let varName = $variable`.
- **Scope del `@for`:** La variable del iterador (ej: `character`) solo existe dentro del bloque `@for`.

---

## 4. Ejemplo sencillo

```typescript
// dragonball-page.component.ts
interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({ templateUrl: './dragonball-page.component.html' })
export class DragonBallPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku',   power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ]);
}
```

```html
<!-- dragonball-page.component.html -->
<ul>
  @for (character of characters(); track character.id; let idx = $index) {
    <li>{{ idx + 1 }} - {{ character.name }} ({{ character.power }})</li>
  }
</ul>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `@for (item of lista; track item.id)` | Itera sobre una lista; `track` es obligatorio |
| `signal<Tipo[]>([])` | Senal tipada con arreglo; evita la inferencia como `never[]` |
| `track item.id` | Identificador unico para seguimiento; nunca usar el indice del arreglo |
| `let idx = $index` | Declara el indice dentro del scope del `@for` |
| `$first`, `$last`, `$even`, `$odd` | Variables de estado disponibles dentro de `@for` |
| `*ngFor` | Forma tradicional; sigue funcionando pero ya no se recomienda |

---

## 6. Resumen final en pocas palabras

`@for` es el nuevo control flow de Angular para iterar listas. Requiere un `track` con un identificador unico del objeto (preferiblemente el `id`). La senal debe tiparsee explicitamente con `signal<Character[]>` para que TypeScript conozca la estructura. Variables como `$index`, `$first` y `$last` estan disponibles dentro del bloque.
