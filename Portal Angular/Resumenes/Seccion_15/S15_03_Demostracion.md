# Lección 03 – Demostración del resultado final

## ¿Qué se aprende en esta lección?
Vista previa de la aplicación terminada que se construirá durante la sección. Se muestran los dos formularios principales y sus comportamientos para que el estudiante conozca el objetivo antes de programar.

## Puntos clave explicados
- **Formulario de producto** (básico): campos nombre, precio y existencias con validaciones visuales.
  - Si se toca "Guardar" sin completar los campos, aparecen los errores de cada campo.
  - El error desaparece en tiempo real conforme el usuario escribe el valor correcto.
  - Al guardar correctamente, el formulario se resetea.
  - Estados visibles en pantalla: `valid`, `pristine`, `touched` y el valor actual del formulario.
- **Formulario dinámico**: nombre de persona + lista de juegos favoritos que se puede ampliar.
  - Se escribe un juego en un campo auxiliar, se presiona "Enter" y se agrega a la lista.
  - Validación de arreglo: el formulario exige al menos un número mínimo de juegos.
  - Botón "Guardar" imprime el estado del formulario en consola aunque no pase todas las validaciones (para fines didácticos).
- La siguiente sección extenderá estos ejercicios con switches, pantalla de registro y objetos anidados.

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `valid` | El formulario cumple todas sus validaciones |
| `pristine` | El formulario no ha sido modificado desde que se sirvió |
| `touched` | El usuario ha interactuado con al menos un campo |
| `value` | Objeto con el valor actual de todos los controles |
| Formulario dinámico | Controles que se añaden o eliminan en tiempo de ejecución |

## Resumen final
La demostración muestra el flujo completo: validación en tiempo real, mensajes de error por campo, reseteo del formulario y formularios con arreglos dinámicos. Todo construido con formularios reactivos de Angular sin librerías externas.
