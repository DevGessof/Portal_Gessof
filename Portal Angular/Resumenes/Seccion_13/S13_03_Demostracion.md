# Lección 03 – Demostración del resultado final

## ¿Qué se aprende en esta lección?
Se hace una vista previa de la aplicación terminada que se construirá a lo largo de la sección, mostrando los pipes personalizados en acción para que el estudiante conozca el objetivo antes de comenzar a codificar.

## Puntos clave explicados
- **ToggleCase Pipe:** el primer ejercicio. Un botón cicla el texto entre `UPPERCASE`, `lowercase`, `TitleCase`, etc.
- **Tabla de héroes dinámica:** la segunda parte de la sección. Una tabla con datos de superhéroes donde todos los elementos visuales son procesados por pipes personalizados:
  - Columna "¿Puede volar?": muestra texto en lugar de `true`/`false` (`CanFlyPipe`).
  - Color del nombre del héroe según un mapa de colores (`HeroColorPipe`, `HeroTextColorPipe`).
  - Botones para ordenar la tabla por nombre, capacidad de volar, color o creador (`HeroSortByPipe`).
  - Caja de texto para filtrar héroes por nombre u otro criterio (`HeroFilterPipe`).
- Todo esto se logra sin lógica adicional en el componente: la transformación vive en los pipes.

## Ejemplo sencillo
```
Tabla de héroes (resultado final):
┌──────────────┬───────────┬────────────┬──────────┐
│ Nombre       │ ¿Vuela?   │ Color      │ Creador  │
├──────────────┼───────────┼────────────┼──────────┤
│ Batman       │ No vuela  │ ●          │ DC       │
│ Superman     │ Sí vuela  │ ●          │ DC       │
│ Hawkeye      │ No vuela  │ ●          │ Marvel   │
└──────────────┴───────────┴────────────┴──────────┘
[Por nombre] [Por volar] [Por color] [Por creador]
[ Buscar héroe... ]
```

## Funciones, palabras clave o elementos importantes
| Pipe | Propósito |
|---|---|
| `toggleCase` | Cicla el casing de un texto |
| `canFly` | Convierte `true`/`false` en texto legible |
| `heroColor` | Devuelve un color CSS según el nombre del héroe |
| `heroTextColor` | Devuelve una clase CSS según el creador del héroe |
| `heroSortBy` | Ordena el arreglo de héroes por criterio |
| `heroFilter` | Filtra héroes por texto de búsqueda |

## Resumen final
La demostración muestra que los pipes personalizados permiten mantener los componentes limpios y delegar toda la lógica de presentación a clases reutilizables. La sección va de lo más simple (texto) a lo más complejo (ordenamiento y filtrado de colecciones).
