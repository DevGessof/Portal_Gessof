# Lección 05 - Debounce: Búsquedas automáticas sin saturar el servidor

---

## ¿Qué se aprende en esta lección?

Se implementa el concepto de **debounce** en el campo de búsqueda. El objetivo es que la aplicación no haga una petición al servidor por cada tecla que el usuario presiona, sino que espere a que el usuario deje de escribir por un tiempo determinado (por ejemplo, 500 milisegundos) antes de realizar la búsqueda.

---

## Puntos clave explicados

- **El problema sin debounce:** Actualmente, cada vez que el usuario escribe una letra, se emite el valor y se hace una petición. Esto genera demasiadas peticiones innecesarias al servidor.

- **Qué es el debounce:** Es una técnica que retrasa la ejecución de una acción hasta que el usuario deja de realizar cambios por un tiempo definido. Si el usuario sigue escribiendo, el contador se reinicia.

- **Dónde colocar el debounce:** Se implementa en el componente del campo de búsqueda (`search-input`), no en el servicio. El servicio solo debe encargarse de hacer peticiones HTTP; el control del tiempo es responsabilidad del componente.

- **Señal `inputValue`:** Se crea una señal que almacena el texto actual del campo de búsqueda. Se actualiza con cada tecla presionada.

- **Efecto (`effect`) con `setTimeout`:** Se usa un efecto de Angular que se dispara cada vez que `inputValue` cambia. Dentro del efecto se usa `setTimeout` para esperar 500 milisegundos antes de emitir el valor hacia el exterior.

- **Limpieza con `onCleanup`:** Si el efecto se vuelve a disparar antes de que pasen los 500 ms (porque el usuario siguió escribiendo), se cancela el `setTimeout` anterior con `clearTimeout`. Esto es lo que crea el efecto de debounce real.

- **Parámetro configurable `debounceTime`:** El tiempo de espera puede recibirse como un `input` del componente, lo que permite configurar el debounce desde cada pantalla que lo use (por ejemplo, 300 ms o 500 ms).

---

## Ejemplo sencillo

El usuario escribe "T", "e", "g", "u" rápidamente. Sin debounce, se harían 4 peticiones. Con debounce de 500 ms, solo cuando el usuario deja de escribir "tegu" por medio segundo, se realiza una sola petición con ese término.

```typescript
// Señal que guarda el texto del input
inputValue = signal('');

// Efecto que implementa el debounce
debounceEffect = effect((onCleanup) => {
  const value = this.inputValue();

  const timeout = setTimeout(() => {
    // Aquí se emite el valor después de 500 ms
    this.onValue.emit(value);
  }, 500);

  onCleanup(() => clearTimeout(timeout)); // Cancela el timeout anterior
});
```

---

## Funciones, palabras clave o elementos importantes

- **Debounce:** Técnica que espera a que el usuario deje de escribir antes de ejecutar una acción.
- **`signal()`:** Función de Angular para crear una variable reactiva.
- **`effect()`:** Función de Angular que ejecuta código automáticamente cuando una señal cambia.
- **`setTimeout`:** Función de JavaScript que ejecuta código después de un tiempo de espera.
- **`clearTimeout`:** Cancela un `setTimeout` que todavía no se ha ejecutado.
- **`onCleanup`:** Función dentro de un efecto que se ejecuta antes de que el efecto se vuelva a disparar o cuando el componente se destruye.
- **`inputSignal`:** Señal de entrada que permite recibir valores desde el componente padre.

---

## Resumen final en pocas palabras

El debounce evita que la aplicación haga demasiadas peticiones al servidor mientras el usuario escribe. Se implementa usando señales, efectos y `setTimeout` en el componente de búsqueda, y se puede personalizar el tiempo de espera desde cada pantalla que lo utilice.
