# Seccion 5 - Leccion 03: Continuacion de Proyecto

---

## 1. Titulo de la leccion

**Retomar el proyecto 02-bases y configurar la ruta comodin**

---

## 2. Que se aprende en esta leccion

Se retoma el proyecto de la seccion anterior, se instalan dependencias si es necesario y se agrega una ruta comodin (`**`) para redirigir rutas inexistentes al componente por defecto.

---

## 3. Puntos clave explicados

- **Retomar el proyecto:** Si el alumno usa el codigo fuente del instructor, debe ejecutar `npm i` para reconstruir los `node_modules` antes de levantar el servidor.
- **Ruta comodin `**`:** En `app.routes.ts` se puede agregar una ruta con `path: '**'` que captura cualquier URL no definida. Se combina con `redirectTo` para redirigir a una ruta existente.
- **`redirectTo`:** Propiedad de una ruta que redirige a otro path en lugar de mostrar un componente.
- **Orden de las rutas importa:** La ruta comodin debe ir al final del arreglo de rutas, ya que Angular evalua las rutas en orden.
- **Archivos grises en VS Code:** Los archivos como `dist/` y `node_modules/` aparecen en gris porque estan en el `.gitignore` y no se versionan con Git.

---

## 4. Ejemplo sencillo

```typescript
// app.routes.ts
export const routes: Routes = [
  { path: '',      component: CounterPageComponent },
  { path: 'hero',  component: HeroPageComponent },
  // Ruta comodin: captura todo lo que no coincida arriba
  { path: '**',    redirectTo: '' }
];
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `path: '**'` | Ruta comodin que captura cualquier URL no definida anteriormente |
| `redirectTo` | Propiedad que redirige a otro path en lugar de mostrar un componente |
| `npm i` | Instala las dependencias del `package.json`; necesario al clonar o descargar un proyecto |
| Archivos en gris | Archivos ignorados por Git (`.gitignore`); pueden regenerarse automaticamente |

---

## 6. Resumen final en pocas palabras

Se retoma el proyecto con `npm i` y `ng serve -o`. La ruta comodin `**` con `redirectTo` garantiza que cualquier URL desconocida redirija al componente por defecto en lugar de mostrar una pantalla en blanco.
