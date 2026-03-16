# Lección 10 – Cambiar locale dinámicamente

## ¿Qué se aprende en esta lección?
Se implementa un **`LocaleService`** que permite al usuario cambiar el idioma de la aplicación en tiempo de ejecución. El locale elegido se persiste en `localStorage` y se aplica recargando la página. También se aprende a inyectar un servicio en los `providers` de la app con `useFactory` y `deps`.

## Puntos clave explicados
- Se crea `LocaleService` con una señal `currentLocale` y un tipo `AvailableLocale = 'es' | 'fr' | 'en'`.
- El método `changeLocale(locale)` guarda el locale en `localStorage` y llama a `window.location.reload()`.
- Al inicializar el servicio se lee `localStorage.getItem('locale')` para restaurar el locale anterior.
- En `app.config.ts` se usa `useFactory` para que `LOCALE_ID` obtenga su valor del servicio:
  ```ts
  { provide: LOCALE_ID, useFactory: (ls: LocaleService) => ls.currentLocale(), deps: [LocaleService] }
  ```
- `deps: [LocaleService]` indica a Angular qué inyectar como argumento de la factory.
- En el componente se puede mostrar el locale activo con `inject(LOCALE_ID)`.

## Ejemplo sencillo
```typescript
// locale.service.ts
@Injectable({ providedIn: 'root' })
export class LocaleService {
  currentLocale = signal<AvailableLocale>(
    (localStorage.getItem('locale') as AvailableLocale) ?? 'es'
  );

  changeLocale(locale: AvailableLocale) {
    localStorage.setItem('locale', locale);
    window.location.reload();
  }
}
```

```typescript
// app.config.ts
providers: [
  { provide: LOCALE_ID,
    useFactory: (ls: LocaleService) => ls.currentLocale(),
    deps: [LocaleService] }
]
```

```html
<!-- numbers-page.component.html -->
<button (click)="localeService.changeLocale('es')">ES</button>
<button (click)="localeService.changeLocale('fr')">FR</button>
<button (click)="localeService.changeLocale('en')">EN</button>
<p>Locale actual: {{ currentLocale }}</p>
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `LocaleService` | Servicio que gestiona el locale activo |
| `AvailableLocale` | Tipo union: `'es' \| 'fr' \| 'en'` |
| `localStorage` | API del navegador para persistir datos entre recargas |
| `window.location.reload()` | Recarga la app para aplicar el nuevo locale |
| `useFactory` | Proveedor dinámico que ejecuta una función |
| `deps` | Dependencias inyectadas en la función factory |
| `inject(LOCALE_ID)` | Obtiene el locale activo en un componente |

## Resumen final
El locale dinámico se logra combinando un servicio con señal, `localStorage` para persistencia y `window.location.reload()` para recargar. La conexión entre el servicio y `LOCALE_ID` se hace con `useFactory` + `deps` en los providers de la aplicación.
