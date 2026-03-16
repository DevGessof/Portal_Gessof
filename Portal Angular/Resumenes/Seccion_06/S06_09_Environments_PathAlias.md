# Seccion 6 - Leccion 09: Angular Environments y Path Alias

---

## 1. Titulo de la leccion

**Configurar variables de entorno con ng generate environments y path alias en tsconfig**

---

## 2. Que se aprende en esta leccion

Se generan los archivos de environments con Angular CLI, se agregan variables de configuracion (nombre de la app, slogan) y se crea un path alias `@environments` en `tsconfig.json` para simplificar las importaciones.

---

## 3. Puntos clave explicados

- **`ng generate environments`:** Comando del Angular CLI que crea los archivos `src/environments/environment.ts` (produccion) y `src/environments/environment.development.ts` (desarrollo). Tambien configura automaticamente `fileReplacements` en `angular.json`.
- **`fileReplacements` en `angular.json`:** Indica a Angular que en modo desarrollo reemplace `environment.ts` por `environment.development.ts`. En produccion se usa el archivo base sin reemplazos.
- **Siempre importar `environment.ts`:** El archivo a importar siempre es el de produccion (sin `.development`). Angular se encarga del reemplazo automatico segun el modo de compilacion.
- **Contenido de los environments:** Son objetos simples de TypeScript. Se pueden agregar propiedades como `companyName`, `companySlogan`, `apiKey`, URLs, etc.
- **Uso en componentes:** Se importa el objeto `environment` y se asigna a una propiedad del componente (ej: `envs = environment`). Luego se usa en el template con `{{ envs.companyName }}`.
- **Path alias en `tsconfig.json`:** Dentro de `compilerOptions` se agrega `baseUrl: "."` y `paths: { "@environments/*": ["src/environments/*"] }`. Esto permite importar con `@environments/environment` en lugar de rutas relativas largas.
- **Ventajas del path alias:** Mas legible, no se rompe al mover archivos a otros directorios, y TypeScript lo reconoce con autocompletado.
- **No abusar de los alias:** Solo crearlos cuando el path relativo sea realmente complicado o cuando el archivo se use en muchos lugares distintos.

---

## 4. Ejemplo sencillo

```bash
# Generar archivos de environments
ng generate environments
```

```typescript
// src/environments/environment.ts (produccion)
export const environment = {
  production: true,
  companyName: 'Gifs App',
  companySlogan: 'Maneja tus gifs'
};
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@environments/*": ["src/environments/*"]
    }
  }
}
```

```typescript
// side-menu-header.component.ts
import { environment } from '@environments/environment';

@Component({ templateUrl: './side-menu-header.component.html' })
export class SideMenuHeaderComponent {
  envs = environment;  // referencia para el template
}
```

```html
<!-- side-menu-header.component.html -->
<h1>{{ envs.companyName }}</h1>
<p>{{ envs.companySlogan }}</p>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng generate environments` | Crea los archivos de environment y configura `fileReplacements` en `angular.json` |
| `environment.ts` | Archivo base (produccion); siempre es el que se importa |
| `environment.development.ts` | Archivo de desarrollo; Angular lo sustituye automaticamente en modo dev |
| `fileReplacements` | Configuracion en `angular.json` que define que archivo reemplaza a cual segun el modo |
| `baseUrl` en `tsconfig.json` | Define el directorio raiz para los path alias |
| `paths` en `tsconfig.json` | Define los alias de rutas: `{ "@alias/*": ["ruta/*"] }` |
| `@environments/environment` | Ejemplo de importacion con alias; mas legible que rutas relativas |

---

## 6. Resumen final en pocas palabras

`ng generate environments` crea los archivos de configuracion y conecta el reemplazo automatico en `angular.json`. Siempre se importa `environment.ts`; Angular usa el de desarrollo o produccion segun el modo. Los path alias en `tsconfig.json` (`paths`) simplifican las importaciones y evitan rutas relativas largas y fragiles.
