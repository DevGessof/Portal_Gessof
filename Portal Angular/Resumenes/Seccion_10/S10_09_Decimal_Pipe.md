# Seccion 10 - Leccion 09: Decimal Pipe

---

## 1. Titulo de la leccion

**DecimalPipe para formatear la poblacion y badge de daisyUI**

---

## 2. Que se aprende en esta leccion

Se usa el `DecimalPipe` de Angular para formatear el numero de poblacion con separadores de miles, se aplica el componente `badge` de daisyUI para resaltar visualmente el valor, y se detecta el problema de estado sucio al buscar algo inexistente.

---

## 3. Puntos clave explicados

- **Problema de legibilidad:** El numero de poblacion se muestra sin formato (ej: `10278345`). Es dificil de leer.
- **`DecimalPipe` de Angular:** Pipe de Angular para formatear numeros. Se importa en el componente como `DecimalPipe`. En el template se usa con el caracter de tuberia `|` seguido de `number`.
- **`| number` en el template:** Aplica el `DecimalPipe` al valor. Ejemplo: `{{ country.population | number }}` muestra `10,278,345`. La separacion de miles depende de la configuracion regional (locale) del navegador.
- **La data no cambia:** El pipe solo transforma la representacion visual. El valor interno sigue siendo un `number` que se puede usar en calculos.
- **Badge de daisyUI:** Se envuelve la poblacion en un `<span class="badge badge-secondary">` para resaltarla visualmente como una etiqueta.
- **Problema de estado sucio:** Si se busca algo inexistente (error 404), los resultados anteriores permanecen en pantalla. El usuario ve datos incorrectos. Hay que limpiar `countries` cuando hay un error.
- **Siguiente paso:** Manejar las excepciones para limpiar el estado y mostrar un mensaje de error al usuario.

---

## 4. Ejemplo sencillo

```typescript
// country-list.component.ts
@Component({
  imports: [DecimalPipe, ...],
  ...
})
export class CountryListComponent { ... }
```

```html
<!-- country-list.component.html -->
<td>
  <span class="badge badge-secondary">
    {{ country.population | number }}
  </span>
</td>
<!-- Muestra: 10,278,345 en lugar de 10278345 -->
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `DecimalPipe` | Pipe de Angular para formatear numeros; se importa en el componente |
| `\| number` | Sintaxis del template para aplicar el `DecimalPipe` |
| Separadores de miles | La coma (o punto) depende de la configuracion regional del navegador |
| Pipe = transformacion visual | El valor interno no cambia; solo cambia como se muestra |
| `badge badge-secondary` | Clases daisyUI para mostrar un valor como una etiqueta resaltada |
| Estado sucio | Resultados previos que permanecen en pantalla cuando hay un error 404 |

---

## 6. Resumen final en pocas palabras

El `DecimalPipe` formatea numeros con separadores de miles usando `| number` en el template. Se importa en el componente como cualquier standalone. La data interna no cambia. Se detecta el problema de estado sucio (resultados anteriores visibles tras un error) que se resuelve en la siguiente leccion.
