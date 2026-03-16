# Servicio de paginación

## ¿Qué se aprende?

En esta lección se extrae la lógica de lectura del query parameter `page` hacia un servicio dedicado llamado `PaginationService`. Con eso el `home-page` se simplifica y la misma lógica queda disponible para cualquier otra pantalla que necesite paginación, como la página de género.

---

## Puntos clave

**El problema: lógica de paginación duplicada**

El `home-page` tiene en su TypeScript el `ActivatedRoute`, el `toSignal` y el `map` para leer la página del URL. Si la página de género (`gender-page`) y el futuro panel administrativo necesitan lo mismo, habría que copiar ese código en cada componente. Eso viola el principio DRY.

**Crear `PaginationService` junto al componente de paginación**

Se crea el archivo `pagination.service.ts` directamente dentro de `src/app/shared/components/pagination/`. Se coloca ahí, y no en una carpeta `services/` separada, para que el servicio y el componente vivan juntos y puedan moverse o reutilizarse como una unidad cohesionada.

El servicio se registra en `root` con `providedIn: 'root'`:

```typescript
@Injectable({ providedIn: 'root' })
export class PaginationService {
  private activatedRoute = inject(ActivatedRoute);

  currentPage = toSignal(
    this.activatedRoute.queryParamMap.pipe(
      map(params => +params.get('page')),
      map(page => isNaN(page) ? 1 : page)
    ),
    { initialValue: 1 }
  );
}
```

`activatedRoute` es privado porque ningún componente externo necesita acceder directamente al `ActivatedRoute` del servicio. `currentPage` queda expuesto como señal pública para que los componentes la consuman.

**Simplificar `home-page` con el servicio**

Se elimina del `home-page` todo el código de `ActivatedRoute`, `toSignal` y `map`. En su lugar se inyecta el servicio:

```typescript
paginationService = inject(PaginationService);
```

Y se usa `paginationService.currentPage()` en la `request` del `rxResource` y en el binding al componente de paginación:

```typescript
request: () => ({ page: this.paginationService.currentPage() })
```

```html
<app-pagination
  [pages]="productsResource.value()?.pages ?? 0"
  [currentPage]="paginationService.currentPage()" />
```

**Aplicar la misma paginación en `gender-page`**

Se añade `app-pagination` al template de `gender-page` y se inyecta `PaginationService`. Solo hay que incluir `page` en el objeto `request` del `rxResource` y calcular el offset:

```typescript
paginationService = inject(PaginationService);

productsResource = rxResource({
  request: () => ({
    gender: this.gender(),
    page: this.paginationService.currentPage()
  }),
  loader: ({ request }) => this.productsService.getProducts({
    gender: request.gender,
    offset: (request.page - 1) * 9
  })
});
```

El template recibe los mismos bindings que `home-page`. La paginación funciona igual en la página de hombres, mujeres y niños sin duplicar la lógica de lectura del URL.

**Beneficio adicional: la URL es compartible**

Al navegar a `/gender/men?page=3` y compartir ese link, cualquier persona que lo abra llegará exactamente a esa combinación de categoría y página.

---

## Ejemplo sencillo

En lugar de que cada empleado de una empresa tenga su propia agenda con los turnos de trabajo, la empresa tiene un sistema centralizado de turnos al que cualquier empleado puede consultar. El `PaginationService` es ese sistema centralizado: cualquier componente que necesite saber en qué página está el usuario solo tiene que consultar el servicio, sin necesidad de implementar su propia lógica.

---

## Palabras clave y elementos importantes

- `PaginationService` — servicio que encapsula la lectura reactiva del query parameter `page` del URL
- `pagination.service.ts` — archivo ubicado junto a `pagination.component.ts` para mantener cohesión
- `providedIn: 'root'` — hace que el servicio sea singleton disponible en toda la aplicación
- `private activatedRoute` — campo privado porque no necesita ser accedido desde fuera del servicio
- `currentPage` — señal pública que expone el número de página actual leído del URL
- `inject(PaginationService)` — forma de inyectar el servicio en un componente sin usar el constructor
- DRY — "Don't Repeat Yourself": principio que motiva mover la lógica al servicio
- `request` en `rxResource` — al añadir `page` al objeto de request, un cambio de página dispara una nueva carga
- `(request.page - 1) * 9` — cálculo del offset a partir del número de página

---

## Resumen final

Esta lección refactoriza la lógica de paginación hacia un servicio independiente `PaginationService`. El servicio lee el query parameter `page` del URL, lo valida y lo expone como señal pública `currentPage`. Tanto `home-page` como `gender-page` inyectan el servicio y usan `currentPage()` en la `request` de su `rxResource`. El resultado es una paginación completamente funcional en todas las pantallas de la tienda, con código no duplicado y fácil de extender a futuras pantallas como el panel administrativo.
