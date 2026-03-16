# Lección 08: TypeScript - Path Alias

## ¿Qué se aprende en esta lección?

En esta lección se aprende a configurar **alias de rutas (path alias)** en TypeScript para simplificar las importaciones de archivos en proyectos grandes. En lugar de escribir rutas largas y complicadas, se pueden usar atajos cortos y fáciles de recordar.

---

## Puntos clave explicados

- **¿Qué es un path alias?** Es un nombre corto que representa una ruta larga de carpetas. Por ejemplo, en lugar de escribir `../../products/components/product-card`, se puede escribir `@products/components/product-card`.

- **¿Por qué usarlos?** En proyectos grandes, las rutas relativas se vuelven largas y frágiles. Si se mueve un archivo de lugar, las rutas se rompen. Los alias hacen que las importaciones sean más robustas y legibles.

- **Archivo de configuración:** Los alias se definen en el archivo `tsconfig.json`, dentro de las propiedades `baseUrl` y `paths`.

- **`baseUrl`:** Indica desde dónde parten todas las rutas. Se establece en `"./"` para que apunte a la carpeta donde está el `tsconfig.json`.

- **`paths`:** Es el objeto donde se definen los alias. Cada alias tiene un nombre (ej: `@products/*`) y apunta a una ruta real (ej: `./src/app/products/*`).

- **Alias creados en la lección:**
  - `@products/*` → `./src/app/products/*`
  - `@auth/*` → `./src/app/auth/*`
  - `@store-front/*` → `./src/app/store-front/*`
  - `@dashboard/*` → `./src/app/admin-dashboard/*`
  - `@shared/*` → `./src/app/shared/*`

- **El alias global `@/*`:** Se puede crear un alias general que apunte a toda la carpeta `src/app`, pero si existe, los alias específicos pierden sentido porque el global ya los cubre. El instructor decide borrarlo para que los alias específicos se vean más claros.

- **Verificación:** Se puede probar usando `Ctrl + .` sobre una importación en VS Code; si el alias está bien configurado, aparecerá como opción de importación automática.

---

## Ejemplo sencillo

Configuración en `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@products/*": ["./src/app/products/*"],
      "@auth/*": ["./src/app/auth/*"],
      "@store-front/*": ["./src/app/store-front/*"],
      "@dashboard/*": ["./src/app/admin-dashboard/*"]
    }
  }
}
```

Importación sin alias (larga y frágil):
```ts
import { ProductCardComponent } from '../../products/components/product-card/product-card.component';
```

Importación con alias (corta y clara):
```ts
import { ProductCardComponent } from '@products/components/product-card/product-card.component';
```

---

## Funciones, palabras clave o elementos importantes

| Término | Descripción |
|--------|-------------|
| **Path alias** | Nombre corto que reemplaza una ruta larga de carpetas en las importaciones. |
| **`tsconfig.json`** | Archivo de configuración de TypeScript donde se definen los alias y otras opciones del compilador. |
| **`baseUrl`** | Punto de partida desde donde TypeScript resuelve las rutas definidas en `paths`. |
| **`paths`** | Objeto dentro de `tsconfig.json` donde se declaran los alias de rutas. |
| **`@nombre/*`** | Convención común para nombrar alias (el `@` ayuda a identificarlos como alias). |
| **`ng build`** | Comando para compilar el proyecto y verificar que no haya errores de importación. |

---

## Resumen final en pocas palabras

Los path alias simplifican las importaciones en proyectos grandes. Configurados en `tsconfig.json`, permiten reemplazar rutas largas y frágiles por nombres cortos y descriptivos, haciendo el código más limpio y fácil de mantener.
