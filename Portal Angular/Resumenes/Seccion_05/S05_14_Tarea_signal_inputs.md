# Seccion 5 - Leccion 14: Tarea - Signal Inputs y Creacion de Componentes

---

## 1. Titulo de la leccion

**Tarea: agregar listName como input y crear CharacterAddComponent**

---

## 2. Que se aprende en esta leccion

Se resuelve una tarea que consiste en agregar un nuevo input signal `listName` al componente de listado, y crear el componente `CharacterAddComponent` que encapsula el formulario de agregar personajes con sus propias senales y metodo.

---

## 3. Puntos clave explicados

- **`listName` sin llaves cuadradas:** Si el valor es un string estatico (no dinAmico), se puede pasar sin llaves cuadradas: `listName="Listado de personajes"`. Las llaves cuadradas se usan cuando el valor viene de una variable o senal.
- **Crear `CharacterAddComponent`:** Componente dentro de `src/app/components/dragonball/character-add/` que contiene el formulario, las senales `name` y `power`, y el metodo `addCharacter()`.
- **Mover codigo al nuevo componente:** Se corta el HTML del formulario de la pagina y se pega en el template del nuevo componente. Se migran tambien las senales `name`, `power` y el metodo `addCharacter()`.
- **`addCharacter()` sin insertar:** En este punto el componente no tiene acceso al arreglo de personajes del padre. Por ahora se usa `console.log()` para verificar que los datos se capturan correctamente.
- **`Ctrl + .` → Add all missing members:** Atajo para que VS Code declare automaticamente los miembros que faltan en el componente cuando el template los referencia.
- **Importar el componente en el padre:** `CharacterAddComponent` debe agregarse al array `imports` del componente padre para que el selector funcione en el template.
- **`Alt + Clic`:** Atajo para navegar al archivo HTML del componente desde el TypeScript en VS Code.

---

## 4. Ejemplo sencillo

```typescript
// character-list.component.ts
export class CharacterListComponent {
  characters = input.required<Character[]>();
  listName   = input.required<string>();  // nuevo input
}
```

```html
<!-- character-list.component.html -->
<h3>{{ listName() }}</h3>  <!-- muestra el titulo dinamico -->
```

```html
<!-- dragonball-super-page: pasa listName como string estatico -->
<dragonball-character-list
  [characters]="characters()"
  listName="Listado de personajes fuertes" />
```

```typescript
// character-add.component.ts
export class CharacterAddComponent {
  name  = signal('');
  power = signal(0);

  addCharacter(): void {
    // Por ahora: solo verifica en consola
    const newCharacter = { id: Math.random(), name: this.name(), power: this.power() };
    console.log(newCharacter);
  }
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `listName="texto"` | Pasa un string estatico como input sin llaves cuadradas |
| `[listName]="variable"` | Pasa un valor dinamico (de variable o senal) con llaves cuadradas |
| `CharacterAddComponent` | Componente con responsabilidad unica: el formulario de agregar personajes |
| `console.log()` | Usado temporalmente para verificar el valor antes de implementar la emision |
| `Math.random()` | Id provisional para el nuevo personaje; en produccion vendria del backend |
| `Alt + Clic` | Navega al HTML del componente desde VS Code |

---

## 6. Resumen final en pocas palabras

Se agrega `listName` como input obligatorio al componente de listado, pasandolo como string estatico sin llaves cuadradas. Se crea `CharacterAddComponent` con sus propias senales y el metodo `addCharacter()` que por ahora solo imprime en consola. La siguiente leccion enseña como emitir el nuevo personaje al componente padre.
