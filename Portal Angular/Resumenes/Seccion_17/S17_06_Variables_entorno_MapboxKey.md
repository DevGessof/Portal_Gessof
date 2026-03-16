# Lección 06 – Variables de entorno (.env) y Mapbox Key

## ¿Qué se aprende en esta lección?
Se explica la estrategia correcta para manejar claves API sensibles (como el token de Mapbox) en un proyecto Angular: usar un archivo `.env` local que **nunca se suba al repositorio**, combinado con los `environment.ts` de Angular que tampoco se suben. Se crea también el `.env.template` y se documenta el proceso en el `README.md`.

## Puntos clave explicados
- **Por qué no poner el token en duro en el código:** el token es personal, identifica la cuenta de facturación y si se sube al repositorio queda expuesto públicamente.
- **Token de Mapbox:** se genera en `mapbox.com → Account → Tokens → Create token`. Se pueden restringir los dominios desde los que funciona para mayor seguridad en producción.
- **`ng generate environments`:** genera los archivos `src/environments/environment.ts` (producción) y `src/environments/environment.development.ts` (desarrollo) y actualiza `angular.json` para que Angular haga el swap automático al hacer el build de producción. El problema: **ambos archivos son parte del código** y se subirían al repositorio con el token adentro.
- **Flujo recomendado con `.env`:**
  1. Crear `.env` en la raíz del proyecto con `MAPBOX_KEY=pk.xxx…`
  2. Añadir `.env` al `.gitignore` para que Git lo ignore.
  3. Añadir también `environment.ts` y `environment.development.ts` al `.gitignore`.
  4. Crear `.env.template` (copia del `.env` pero sin el valor real, solo `MAPBOX_KEY=XXXX`) que **sí se sube** al repositorio para que otros desarrolladores sepan qué variables configurar.
- **README.md:** documentar los pasos de configuración: clonar repo → `npm install` → crear `.env` basado en `.env.template` → `npm run set-envs` → `ng serve`.

## Ejemplo sencillo
```
# .env  (ignorado por Git)
MAPBOX_KEY=pk.eyJ1Ijoixxxxxxx…

# .env.template  (sí va al repositorio)
# Obtener la key en: https://account.mapbox.com/access-tokens/
MAPBOX_KEY=XXXX
```

```
# .gitignore  (añadir)
.env
src/environments/environment.ts
src/environments/environment.development.ts
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `.env` | Archivo estándar para variables de entorno locales; nunca va al repositorio |
| `.env.template` | Plantilla sin valores reales; documenta las variables necesarias para otros devs |
| `ng generate environments` | Genera los archivos de entorno de Angular y configura `angular.json` |
| `.gitignore` | Lista de archivos/carpetas que Git no debe rastrear |
| Token restringido por dominio | Medida de seguridad en Mapbox para que el token solo funcione en URLs autorizadas |

## Resumen final
El token de Mapbox nunca debe estar en el código del repositorio. La solución es: `.env` local (ignorado por Git) + `environment.ts` (también ignorado) generado automáticamente por un script. El `.env.template` y el `README.md` garantizan que cualquier otro desarrollador sepa qué hacer sin ver las claves reales.
