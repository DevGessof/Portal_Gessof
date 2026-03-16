# Lección 05 – Ciclo de vida de los componentes

## ¿Qué se aprende en esta lección?
Se implementan los primeros lifecycle hooks del `HomePageComponent` y se observa en consola el orden exacto en que Angular los invoca al montar el componente. También se crea una función auxiliar `log()` para colorear los mensajes en consola.

## Puntos clave explicados
- Los lifecycle hooks son **métodos con nombres reservados**. Angular busca si el componente los tiene definidos y los invoca en el momento adecuado. No es obligatorio implementar una interfaz para que funcionen, aunque hacerlo es recomendable.
- El primer hook es el **constructor**: se ejecuta cuando Angular crea la instancia del componente, antes de que haya cualquier contenido en pantalla. Al navegar fuera y volver, se crea una nueva instancia (a diferencia de los servicios, que son singleton).
- Orden de ejecución al montar el componente:
  1. `constructor`
  2. `ngOnInit` — componente listo, antes era el lugar para peticiones HTTP
  3. `ngDoCheck` — se ejecuta cada vez que Angular revisa cambios (propiedades o señales)
  4. `ngAfterContentInit` — después de que el contenido proyectado es inicializado
  5. `ngAfterContentChecked` — después de revisar el contenido proyectado
  6. `ngAfterViewInit` — después de que la vista del componente está renderizada
  7. `ngAfterViewChecked` — después de revisar la vista
- **`ngOnChanges` no aparece** porque este componente no tiene `@Input()` / `input()`. Solo se dispara cuando cambia el valor de un input recibido desde el padre.
- Se crea una función `log()` fuera de la clase para colorear los mensajes: usa `%c` en `console.log` con color `#bada55` aplicado al segundo argumento.
- **Implementar la interfaz** (ej. `implements OnInit`) es opcional pero útil: obliga al componente a tener el método y TypeScript marca error si falta.

## Ejemplo sencillo
```typescript
// Función auxiliar de color en consola
const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`, 'color: #bada55');
};

@Component({ ... })
export class HomePageComponent {
  constructor() { log('constructor', 'Instancia creada'); }

  ngOnInit()               { log('ngOnInit',               'Componente listo'); }
  ngDoCheck()              { log('ngDoCheck',              'Revisión de cambios'); }
  ngAfterContentInit()     { log('ngAfterContentInit',     'Contenido inicializado'); }
  ngAfterContentChecked()  { log('ngAfterContentChecked',  'Contenido revisado'); }
  ngAfterViewInit()        { log('ngAfterViewInit',        'Vista inicializada'); }
  ngAfterViewChecked()     { log('ngAfterViewChecked',     'Vista revisada'); }
}
```

## Funciones, palabras clave o elementos importantes
| Hook | Cuándo se llama |
|---|---|
| `constructor` | Al crear la instancia del componente |
| `ngOnInit` | Componente inicializado y listo para usar |
| `ngDoCheck` | Cada vez que Angular detecta o revisa posibles cambios |
| `ngAfterContentInit` | Tras inicializar el contenido proyectado (`ng-content`) |
| `ngAfterContentChecked` | Tras revisar el contenido proyectado |
| `ngAfterViewInit` | Tras renderizar la vista del componente e hijos |
| `ngAfterViewChecked` | Tras revisar la vista del componente e hijos |
| `implements OnInit` | Interfaz opcional que garantiza que el método existe con el nombre correcto |

## Resumen final
Los lifecycle hooks no son más que métodos con nombres reservados. Angular los busca y los invoca automáticamente. Conocer su orden de ejecución permite saber exactamente en qué momento el componente está listo para cada operación. `ngOnChanges` es el único ausente porque requiere que el componente tenga inputs recibidos desde un padre.
