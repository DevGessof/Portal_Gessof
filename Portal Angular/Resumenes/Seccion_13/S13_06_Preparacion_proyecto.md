# Lección 06 – Preparación del proyecto (tabla de héroes)

## ¿Qué se aprende en esta lección?
Se prepara la estructura visual y de datos que se usará en las lecciones siguientes para practicar pipes personalizados. Se construye una tabla de héroes con daisyUI y se añaden los botones de ordenamiento que se activarán en lecciones posteriores.

## Puntos clave explicados
- Se añade un separador visual (`divider`) con clases de Tailwind (`my-2`) entre secciones de la página.
- Se crea una tabla usando los componentes de **daisyUI**: clases `table`, `table-zebra`, etc.
- La tabla muestra columnas como: nombre, ¿puede volar?, color y creador.
- Se añade una sección de botones de ordenamiento con diferentes colores de daisyUI:
  - "Por nombre" → `btn-primary`
  - "Por volador" → `btn-accent`
  - "Por color" → `btn-secondary`
  - "Por creador" → `btn-info`
- Los botones aún no tienen funcionalidad; se conectarán en la lección del pipe `HeroSortBy`.
- Se define la interfaz `Hero` con propiedades: `name`, `canFly`, `color`, `creator`.
- Se crea un arreglo de héroes en el componente como señal o propiedad de clase.

## Ejemplo sencillo
```typescript
// interfaces/hero.interface.ts
export enum Creator { DC = 0, Marvel = 1 }

export interface Hero {
  name:    string;
  canFly:  boolean;
  color:   string;
  creator: Creator;
}
```

```typescript
// custom-page.component.ts
heroes = signal<Hero[]>([
  { name: 'Batman',   canFly: false, color: 'black',  creator: Creator.DC     },
  { name: 'Superman', canFly: true,  color: 'blue',   creator: Creator.DC     },
  { name: 'Hawkeye',  canFly: false, color: 'purple', creator: Creator.Marvel },
]);
```

```html
<!-- Botones de ordenamiento -->
<div class="flex gap-2 my-2">
  <button class="btn btn-primary">Por nombre</button>
  <button class="btn btn-accent">Por volador</button>
  <button class="btn btn-secondary">Por color</button>
  <button class="btn btn-info">Por creador</button>
</div>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `table` / `table-zebra` | Clases daisyUI para tablas estilizadas |
| `divider` | Clase daisyUI para separadores visuales |
| `Hero` (interfaz) | Tipo que describe cada héroe de la lista |
| `Creator` (enum) | Enumeración `DC = 0`, `Marvel = 1` |
| `signal<Hero[]>()` | Arreglo reactivo de héroes |
| Botones con `btn-*` | Colores semánticos de daisyUI |

## Resumen final
Esta lección sienta las bases visuales y de datos para las siguientes. Se define la interfaz `Hero`, se crea el arreglo de héroes como señal y se añade la tabla y los botones que los pipes personalizados harán funcionar.
