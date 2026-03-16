# Lección 07 – Crear environments mediante un script

## ¿Qué se aprende en esta lección?
Se crea un script Node.js (`scripts/set-envs.js`) que lee las variables del archivo `.env` con el paquete `dotenv` y genera automáticamente los dos archivos `environment.ts` de Angular. Se registra como comando `npm run set-envs` para que cualquier desarrollador pueda ejecutarlo fácilmente.

## Puntos clave explicados
- El script se escribe en **JavaScript puro** (no TypeScript) para evitar instalar `ts-node` o configuraciones extra. Si se usa `bun` o `deno`, TypeScript funcionaría sin configuración adicional.
- **Paquete `dotenv`:** se instala como dependencia de desarrollo (`npm install -D dotenv`). Al llamar `require('dotenv').config()` carga las variables del `.env` en `process.env`.
- **`fs.mkdirSync(path, { recursive: true })`:** crea el directorio `src/environments/` si no existe. Git no hace seguimiento de carpetas vacías, por eso el directorio puede faltar al clonar el repositorio.
- **`fs.writeFileSync(path, content)`:** escribe el archivo con el contenido generado.
- El script verifica que `process.env.MAPBOX_KEY` exista; si no, lanza un error con `throw new Error('MAPBOX_KEY is not set')` y detiene la ejecución.
- El contenido del archivo generado se define con un **template literal** (backticks) que interpola el valor de `process.env.MAPBOX_KEY`. Se genera el mismo contenido para ambos archivos (`environment.ts` y `environment.development.ts`).
- Se añade el script a `package.json` como `"set-envs": "node ./scripts/set-envs.js"` para poder ejecutarlo con `npm run set-envs`.
- Recuerda también documentar el paso en el `README.md`.

## Ejemplo sencillo
```javascript
// scripts/set-envs.js
const { writeFileSync, mkdirSync } = require('fs');
require('dotenv').config();

const targetPath    = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const mapboxKey = process.env['MAPBOX_KEY'];
if (!mapboxKey) throw new Error('MAPBOX_KEY is not set');

const envFileContent = `
export const environment = {
  mapboxKey: "${mapboxKey}",
};
`;

mkdirSync('./src/environments', { recursive: true });
writeFileSync(targetPath,    envFileContent);
writeFileSync(targetPathDev, envFileContent);

console.log('✅ Environments generados correctamente');
```

```json
// package.json
{
  "scripts": {
    "set-envs": "node ./scripts/set-envs.js"
  }
}
```

```bash
# Ejecutar
npm run set-envs
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `dotenv` | Paquete que carga variables de `.env` en `process.env` |
| `process.env['KEY']` | Acceso a variables de entorno en Node.js |
| `fs.writeFileSync(path, content)` | Escribe un archivo de forma síncrona |
| `fs.mkdirSync(path, { recursive: true })` | Crea un directorio (y sus padres) solo si no existe |
| `npm run <script>` | Ejecuta un comando definido en la sección `scripts` de `package.json` |
| Template literal (backticks) | Permite interpolar variables en la cadena de texto del archivo generado |

## Resumen final
El script `set-envs.js` automatiza la generación de los archivos de entorno de Angular a partir de variables locales en `.env`. Esto garantiza que las claves API nunca estén en el repositorio pero siempre estén disponibles en el entorno local de cada desarrollador con un solo comando: `npm run set-envs`.
