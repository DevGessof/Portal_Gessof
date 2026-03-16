# Lección 07 – FormBuilder

## ¿Qué se aprende en esta lección?
Se introduce el servicio `FormBuilder` como alternativa más limpia y recomendada para construir formularios reactivos, evitando el uso directo de `new FormGroup()` / `new FormControl()`. También se presenta la estructura de los validadores síncronos y asíncronos en el arreglo de configuración de cada campo.

## Puntos clave explicados
- `new FormGroup({ ... new FormControl() })` es tedioso cuando hay objetos anidados: la indentación crece y el código se vuelve difícil de leer.
- **`FormBuilder`** es un servicio inyectable que provee los métodos `.group()`, `.control()` y `.array()`, permitiendo definir el formulario como un objeto literal plano.
- Se inyecta con `inject(FormBuilder)` o en el constructor. La abreviatura `fb` es convención común.
- Dentro de `.group({})` cada campo se define como un **arreglo de tres posiciones**:
  1. Valor inicial del campo.
  2. Validadores síncronos (uno o un arreglo).
  3. Validadores asíncronos (uno o un arreglo).
- Functionally es idéntico a `new FormGroup({ ... new FormControl() })` pero mucho más legible.
- `FormBuilder` forma parte de `ReactiveFormsModule`, por lo que no requiere importación adicional.

## Ejemplo sencillo
```typescript
// SIN FormBuilder (tedioso)
myForm = new FormGroup({
  name:      new FormControl('',  [Validators.required]),
  price:     new FormControl(0,   [Validators.min(10)]),
  inStorage: new FormControl(0,   [Validators.min(0)]),
});

// CON FormBuilder (recomendado)
private fb = inject(FormBuilder);

myForm: FormGroup = this.fb.group({
  name:      ['',  [/* validadores síncronos */], [/* asíncronos */]],
  price:     [0,   [/* validadores síncronos */]],
  inStorage: [0,   [/* validadores síncronos */]],
});
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `FormBuilder` | Servicio que simplifica la creación de grupos, controles y arreglos |
| `fb.group({})` | Crea un `FormGroup` desde un objeto literal |
| `fb.control()` | Crea un `FormControl` individual |
| `fb.array([])` | Crea un `FormArray` de controles |
| Arreglo `[valor, síncronos, asíncronos]` | Estructura de cada campo en `.group()` |
| `inject(FormBuilder)` | Inyección del servicio con la API moderna de Angular |

## Resumen final
`FormBuilder` es la forma recomendada de construir formularios reactivos en Angular. Convierte la definición del formulario en un objeto literal legible y reduce el código repetitivo de `new FormControl()`. La estructura `[valor, síncronos, asíncronos]` deja claro de un vistazo cuáles son las validaciones de cada campo.
