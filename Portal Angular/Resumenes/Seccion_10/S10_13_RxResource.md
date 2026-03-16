# Seccion 10 - Leccion 13: rxResource

---

## 1. Titulo de la leccion

**rxResource: variante de resource que trabaja directamente con Observables**

---

## 2. Que se aprende en esta leccion

Se introduce `rxResource`, la variante de `resource` que trabaja con Observables de RxJS en lugar de Promesas, eliminando la necesidad de `firstValueFrom`. Se aprende a manejar el caso del query vacio retornando `of([])` para evitar un error inmediato al cargar.

---

## 3. Puntos clave explicados

- **Problema con `resource`:** Requiere `async/await` y `firstValueFrom` para convertir el Observable del servicio en una Promesa. Agrega codigo innecesario si ya se trabaja con Observables.
- **`rxResource`:** Funcion de Angular 19. Se importa de `@angular/core/rxjs-interop`. Misma API que `resource` (`request` + `loader`), pero el `loader` debe retornar un Observable, no una Promesa. No se usa `async/await`.
- **Simplificacion:** El `loader` retorna directamente `this.countryService.searchByCapital(request.query)`, sin `await` ni `firstValueFrom`. El `rxResource` toma el primer valor del Observable automaticamente.
- **Error al cargar con query vacio:** Al iniciar la app, el query es `''` (string vacio). El `rxResource` se dispara inmediatamente con ese valor vacio, el servicio hace la peticion y recibe un 404. Hay que prevenir esto.
- **`of([])` de RxJS:** Si el query esta vacio, se retorna `of([])` en lugar de llamar al servicio. `of(valor)` crea un Observable que emite inmediatamente ese valor y completa. Esto mantiene el tipo correcto (`Observable<Country[]>`) en todos los caminos.
- **Por que no retornar `[]` directamente:** El `loader` de `rxResource` debe retornar siempre un Observable. Retornar `[]` (arreglo) romperia el tipo esperado.
- **Importacion:** `rxResource` viene de `@angular/core/rxjs-interop`. Puede cambiar de ubicacion en versiones futuras de Angular.
- **Tarea:** Implementar `rxResource` en `ByCountryPageComponent` reemplazando el `resource` anterior. El codigo es identico salvo quitar `async`, `await` y `firstValueFrom`.

---

## 4. Ejemplo sencillo

```typescript
// before: resource con Promesas
countryResource = resource({
  request: () => ({ query: this.query() }),
  loader: async ({ request }) => {
    if (!request.query) return [];
    return await firstValueFrom(this.countryService.searchByCapital(request.query));
  }
});

// after: rxResource con Observables (mas corto)
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

countryResource = rxResource({
  request: () => ({ query: this.query() }),
  loader: ({ request }) => {
    if (!request.query) return of([]);
    return this.countryService.searchByCapital(request.query);
  }
});
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `rxResource` | Variante de `resource` para Observables; importar de `@angular/core/rxjs-interop` |
| `loader` retorna Observable | A diferencia de `resource`, no se usa `async/await` |
| `of([])` | Crea un Observable que emite `[]` inmediatamente; evita peticion con query vacio |
| Sin `firstValueFrom` | `rxResource` toma el primer valor del Observable automaticamente |
| Query vacio al inicio | El resource se dispara al montar el componente; hay que retornar `of([])` para evitar 404 |
| `@angular/core/rxjs-interop` | Paquete actual de importacion; puede cambiar en versiones futuras |

---

## 6. Resumen final en pocas palabras

`rxResource` es la version de `resource` para Observables. El `loader` retorna directamente el Observable del servicio sin `async/await` ni `firstValueFrom`. Al iniciar la app el query esta vacio, por lo que hay que retornar `of([])` como Observable vacio para evitar una peticion HTTP erronea. El resultado final es mas corto y directo que con `resource` + Promesas.
