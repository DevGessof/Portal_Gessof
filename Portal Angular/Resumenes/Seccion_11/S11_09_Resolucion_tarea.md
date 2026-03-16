# Lección 09 - Resolución de la tarea: Países por región

---

## ¿Qué se aprende en esta lección?

El instructor resuelve paso a paso la tarea de la lección anterior: construir la pantalla "Por región" con botones interactivos, petición al API, caché de resultados y botón activo. También se corrige un error encontrado durante el desarrollo (bug en el mapper relacionado con el método `.join()`).

---

## Puntos clave explicados

- **Cuándo usar señal vs propiedad normal:** Si un dato necesita ser reactivo (es decir, que la pantalla reaccione visualmente cuando cambia), se usa una señal. Si es un dato estático que no va a cambiar (como el listado de regiones disponibles), una propiedad normal es suficiente.

- **Señal `selectedRegion`:** Se crea como una señal que puede ser de tipo `Region` o `null`. Se inicializa en `null` porque al comenzar no hay ninguna región seleccionada.

- **Método `selectRegion`:** Al hacer clic en un botón, se llama este método que actualiza la señal `selectedRegion` con la región elegida.

- **Clase CSS dinámica:** En el HTML, el botón activo recibe la clase `btn-primary` solo si `selectedRegion()` es igual a la región del botón en ese momento del ciclo. Los demás botones reciben `btn-outline`.

- **Método `searchByRegion` en el servicio:** Se crea usando `rxResource`, inyectando el servicio de países y usando la señal `selectedRegion` como fuente del query.

- **Caché para región:** Se crea el `Map` llamado `queryCacheRegion` y se aplica el mismo patrón de caché (`.has()`, `of()`, `tap`, `.set()`).

- **Bug en el mapper:** Al buscar "Asia", aparece un error porque algunos países de Asia no tienen capital definida y el método `.join()` falla al intentar unir un valor `undefined`. La solución es agregar una verificación condicional antes de llamar al `.join()`.

- **Error de nombrado:** El instructor comete un error usando `queryCacheCountry` en lugar de `queryCacheRegion` en el método `searchByRegion`. Lo corrige y la pantalla pasa a funcionar correctamente con caché.

---

## Ejemplo sencillo

```typescript
// En el componente de la pantalla "Por región"
regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
selectedRegion = signal<Region | null>(null);

selectRegion(region: Region) {
  this.selectedRegion.set(region);
}
```

```html
<!-- En el HTML: botón activo si coincide con selectedRegion() -->
@for (region of regiones; track region) {
  <button
    [class.btn-primary]="selectedRegion() === region"
    [class.btn-outline]="selectedRegion() !== region"
    (click)="selectRegion(region)">
    {{ region }}
  </button>
}
```

---

## Funciones, palabras clave o elementos importantes

- **`signal<Region | null>(null)`:** Señal que puede guardar una región o ser nula.
- **`[class.btn-primary]`:** Aplica la clase CSS `btn-primary` si la condición es verdadera.
- **`rxResource`:** Herramienta de Angular para hacer peticiones reactivas basadas en señales.
- **`inject()`:** Función de Angular para inyectar dependencias como servicios dentro de un componente.
- **`.join()`:** Método de JavaScript que une los elementos de un arreglo en un string. Falla si el arreglo es `undefined`.
- **`queryCacheRegion`:** `Map` de caché para búsquedas por región.

---

## Resumen final en pocas palabras

Esta lección muestra cómo construir una pantalla funcional con botones interactivos, peticiones HTTP y caché. También demuestra que los errores son parte del proceso de desarrollo y cómo depurar y corregirlos de forma metódica. Al final, la pantalla "Por región" funciona correctamente para todas las regiones disponibles.
