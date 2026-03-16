# Seccion 5 - Leccion 06: Tarea - Preparacion de Pagina DragonBall

---

## 1. Titulo de la leccion

**Tarea: crear DragonBallPageComponent con HTML base y agregarlo al navbar**

---

## 2. Que se aprende en esta leccion

Se crea manualmente el componente `DragonBallPageComponent`, se conecta a la ruta `/dragonball`, se agrega al navbar y se construye la estructura HTML con Bootstrap para el formulario y el listado de personajes.

---

## 3. Puntos clave explicados

- **Crear pagina manualmente:** Se crean los archivos `.ts` y `.html` dentro de `src/app/pages/dragonball/` y se usa el snippet `a-component` en VS Code para generar la estructura base.
- **Conectar a ruta:** En `app.routes.ts` se agrega `{ path: 'dragonball', component: DragonBallPageComponent }`.
- **Agregar al navbar:** Se copia una linea del navbar y se adapta con `routerLink="/dragonball"`.
- **Estructura Bootstrap:** Se usa la clase `row` para el contenedor, `col-12` y `col-sm-6` para columnas responsivas, `form-control` para los inputs y `btn btn-primary` para el boton.
- **Un componente, una responsabilidad:** El instructor anticipa que en el futuro se separara la logica en componentes mas pequenos: uno para el formulario y otro para el listado.
- **Estructura HTML de la pagina:** Tiene un `h1`, un `hr`, una seccion con dos columnas: izquierda con formulario (nombre, poder, boton Agregar) y derecha con listado de personajes.

---

## 4. Ejemplo sencillo

```typescript
// dragonball-page.component.ts
@Component({
  templateUrl: './dragonball-page.component.html'
})
export class DragonBallPageComponent {}
```

```html
<!-- dragonball-page.component.html (estructura base) -->
<h1>DragonBall Page</h1>
<hr>
<section class="row">
  <div class="col-12 col-sm-6">
    <h3>Agregar</h3>
    <input class="form-control" placeholder="Nombre" />
    <input class="form-control mt-2" type="number" placeholder="Poder" />
    <button class="btn btn-primary mt-2">Agregar</button>
  </div>
  <div class="col-12 col-sm-6">
    <h3>Listado</h3>
    <ul>
      <li>Goku</li>
    </ul>
  </div>
</section>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `a-component` (snippet) | Atajo de VS Code para generar la estructura base de un componente Angular |
| `row` / `col-sm-6` | Clases de Bootstrap para layout en grid responsivo |
| `form-control` | Clase de Bootstrap para estilizar inputs |
| `btn btn-primary` | Clase de Bootstrap para boton azul |
| `mt-2` | Clase de Bootstrap para margin-top |
| Responsabilidad unica | Principio de diseno: cada componente debe tener una sola tarea |

---

## 6. Resumen final en pocas palabras

Se crea la pagina DragonBall con su estructura HTML base usando Bootstrap. El componente se conecta a la ruta `/dragonball` y se agrega al navbar. La estructura anticipa la separacion futura en componentes mas pequenos: formulario y listado independientes.
