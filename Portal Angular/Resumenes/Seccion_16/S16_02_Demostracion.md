# Lección 02 – Demostración del resultado final

## ¿Qué se aprende en esta lección?
Vista previa de la aplicación terminada que se construirá en la sección. Se observa en tiempo real cómo se disparan los diferentes lifecycle hooks al navegar entre rutas, al cambiar propiedades y al recibir inputs con distintos valores.

## Puntos clave explicados
- La aplicación tiene un **sistema de rutas** básico con navbar. Al cambiar de pantalla se destruye el componente y se dispara `ngOnDestroy` y `onCleanup` del efecto.
- Al regresar al componente se puede observar la **secuencia completa** del ciclo de vida: constructor → inicialización → revisión de cambios → contenido inicializado → vista renderizada.
- Existe un `TitleComponent` que recibe un `input()` llamado `name`. El `ngOnChanges` registra tanto el valor anterior como el valor actual cada vez que ese input cambia, e indica si es el primer cambio o no.
- Cuando el valor se cambia mediante una **señal**, también se dispara `ngOnChanges` con la información del cambio.
- La aplicación se construye completamente en modo **Zoneless Angular**, que en el momento de grabación era experimental pero representa el futuro del framework.

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `ngOnDestroy` | Visible en consola al navegar fuera del componente |
| `onCleanup` | Se dispara junto a `ngOnDestroy` cuando el efecto es destruido |
| `ngOnChanges` | Muestra `previousValue`, `currentValue` e `isFirstChange` en consola |
| `isFirstChange()` | Método de `SimpleChange` que indica si es la primera vez que el input recibe valor |
| Modo Zoneless | Configuración de Angular sin `Zone.js`; funciona con señales como fuente de verdad |

## Resumen final
La demostración muestra en vivo el orden y las condiciones en que se dispara cada lifecycle hook. La clave es observar qué sucede al montar, al cambiar valores y al destruir el componente, tanto con propiedades tradicionales como con señales.
