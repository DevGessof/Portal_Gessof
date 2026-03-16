# Lección 01 – Introducción a los Pipes Personalizados

## ¿Qué se aprende en esta lección?
Se introduce la Sección 13 del curso, centrada en la creación de **pipes personalizados** en Angular. Se explica por qué los pipes de `@angular/common` no siempre son suficientes y cuándo tiene sentido crear los propios.

## Puntos clave explicados
- Los pipes incluidos en Angular cubren casos generales, pero cada proyecto puede tener necesidades específicas que ningún pipe estándar resuelve.
- Un **pipe personalizado** encapsula una transformación concreta de la aplicación, lo que lo hace reutilizable y fácil de mantener.
- Si la lógica de transformación cambia en el futuro, basta con modificar el pipe en un solo lugar.
- Los pipes personalizados se pueden compartir entre diferentes partes de la app, publicarse en npm o reutilizarse en otros proyectos.
- La sección abordará pipes de complejidad creciente: desde transformaciones de texto simples hasta ordenamiento y filtrado de listas.

## Ejemplo sencillo
```
Sin pipe personalizado:
→ Lógica de transformación repetida en múltiples componentes.

Con pipe personalizado:
→ La lógica vive en un solo archivo .pipe.ts
→ Se usa en cualquier template con | nombrePipe
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| Pipe personalizado | Transformación reutilizable creada por el desarrollador |
| `@Pipe({ name: '...' })` | Decorador que convierte una clase en pipe |
| `PipeTransform` | Interfaz que obliga a implementar `transform()` |
| Convención de nombre | `nombre-del-pipe.pipe.ts` |
| Reutilización | Compartible entre componentes, módulos y proyectos |

## Resumen final
Cuando los pipes de Angular no cubren una necesidad concreta, la solución es crear un pipe personalizado. Esta sección enseña a construirlos desde cero, desde los más simples hasta pipes que ordenan y filtran colecciones enteras.
