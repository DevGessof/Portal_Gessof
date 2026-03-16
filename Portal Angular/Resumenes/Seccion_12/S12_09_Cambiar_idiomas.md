# Lección 09 – Cambiar de idiomas (configuración de locale)

## ¿Qué se aprende en esta lección?
Se aprende a configurar el **locale** de la aplicación Angular para que los pipes de número, porcentaje, moneda y fecha utilicen el formato regional correcto. Se registran los datos de locale con `registerLocaleData` y se provee el token `LOCALE_ID`.

## Puntos clave explicados
- Por defecto Angular usa el locale `en-US`.
- Para cambiar el locale se deben dar dos pasos:
  1. **Registrar los datos** del locale con `registerLocaleData(localeEs)` en `app.config.ts`.
  2. **Proveer el token `LOCALE_ID`** con el valor deseado en el arreglo `providers`.
- Los datos de cada locale se importan desde `@angular/common/locales/<codigo>`.
- Se pueden registrar varios locales a la vez (ej. `es`, `fr`, `en`).
- El cambio de locale **requiere recargar la aplicación** para aplicarse completamente.
- En esta lección se preparan los botones de cambio de idioma, pero la funcionalidad dinámica se implementa en la lección siguiente.

## Ejemplo sencillo
```typescript
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeEs);
registerLocaleData(localeFr);

export const appConfig: ApplicationConfig = {
  providers: [
    // ...rutas
    { provide: LOCALE_ID, useValue: 'es' },
  ],
};
```

```html
<!-- Con locale 'es', el separador decimal es coma -->
<p>{{ 1234.5 | number:'1.2-2' }}</p>    <!-- 1.234,50 -->
<p>{{ 0.15   | percent }}</p>            <!-- 15 %     -->
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `LOCALE_ID` | Token de Angular que define el locale activo |
| `registerLocaleData()` | Registra datos de un locale para que Angular los use |
| `@angular/common/locales/es` | Datos del locale español |
| `{ provide: LOCALE_ID, useValue: 'es' }` | Proveedor del token en `app.config.ts` |
| `providers` | Arreglo de proveedores en la configuración de la app |

## Resumen final
Para que los pipes respeten el formato regional, se registra el locale con `registerLocaleData` y se provee `LOCALE_ID` en `app.config.ts`. Con esto, números y fechas se formatean automáticamente según el idioma configurado.
