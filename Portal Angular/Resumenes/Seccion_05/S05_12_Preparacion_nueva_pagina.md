# Seccion 5 - Leccion 12: Preparacion de una Nueva Pagina

---

## 1. Titulo de la leccion

**Duplicar el componente DragonBall para crear DragonBall Super y separar responsabilidades**

---

## 2. Que se aprende en esta leccion

Se crea el componente `DragonBallSuperPageComponent` duplicando el anterior, se agrega su ruta y su entrada en el navbar, y se prepara la estructura para comenzar la separacion en componentes mas pequenos (listado y formulario independientes).

---

## 3. Puntos clave explicados

- **Duplicar un componente:** En Angular 19+ basta con copiar y pegar la carpeta, renombrar los archivos y cambiar el nombre de la clase. No hay modulos que actualizar.
- **Nombres descriptivos:** El nuevo componente se llama `DragonBallSuperPageComponent` con su archivo `dragonball-super-page.component.ts|html`.
- **Colision de selectores:** Si dos componentes tienen el mismo selector, Angular arroja un error. Se soluciona asignando un selector distinto en el decorador del nuevo componente.
- **Nueva ruta:** `{ path: 'dragonball-super', component: DragonBallSuperPageComponent }` en `app.routes.ts`.
- **Nuevo enlace en el navbar:** Se agrega el `routerLink` apuntando a `dragonball-super`.
- **Preparacion para refactorizar:** Se eliminan los personajes extra dejando solo dos (Goku y Vegeta) para empezar limpio. Se anticipa la separacion en componente de listado y componente de formulario.
- **Proximo paso:** Las clases siguientes crean componentes independientes: `CharacterListComponent` y `CharacterAddComponent`.

---

## 4. Ejemplo sencillo

```typescript
// dragonball-super-page.component.ts
@Component({
  selector: 'dragonball-super',  // distinto al de DragonBall
  templateUrl: './dragonball-super-page.component.html'
})
export class DragonBallSuperPageComponent {
  characters = signal<Character[]>([
    { id: 1, name: 'Goku',   power: 90000 },
    { id: 2, name: 'Vegeta', power: 85000 },
  ]);
}
```

```typescript
// app.routes.ts
{ path: 'dragonball-super', component: DragonBallSuperPageComponent }
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Duplicar componente | Copiar carpeta y renombrar archivos y clase; sin modulos no hay mas pasos |
| Colision de selectores | Error cuando dos componentes tienen el mismo `selector`; se soluciona cambiando uno |
| Refactorizacion | Proceso de reorganizar el codigo sin cambiar su comportamiento |
| `CharacterListComponent` | Componente que se creara para mostrar el listado de personajes |
| `CharacterAddComponent` | Componente que se creara para el formulario de agregar personajes |

---

## 6. Resumen final en pocas palabras

Se crea `DragonBallSuperPageComponent` duplicando el componente anterior y ajustando nombre, ruta y selector. La pagina se limpia para comenzar la refactorizacion en componentes mas pequenos con responsabilidad unica: un componente para el listado y otro para el formulario.
