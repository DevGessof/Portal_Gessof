# Configurar alias de importaciones en TypeScript

## ¿Qué se aprende?

Esta lección explica cómo configurar alias de rutas de importación en TypeScript usando el archivo `tsconfig.json`. Un alias permite reemplazar rutas relativas largas (como `../../shared/side-menu/side-menu.component`) por rutas cortas y descriptivas (como `@shared/side-menu/side-menu.component`). No es una característica de Angular sino de TypeScript, y funciona en cualquier proyecto que use `tsconfig.json`.

---

## Puntos clave

**¿Qué es un alias de importación?**

Cuando una aplicación crece, los componentes se importan desde rutas relativas que pueden volverse largas y confusas:

```typescript
import { SideMenuComponent } from '../../shared/side-menu/side-menu.component';
```

Un alias permite escribir lo mismo así:

```typescript
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';
```

El alias `@shared` es un nombre corto que apunta a la carpeta `src/app/shared`. TypeScript resuelve el alias durante la compilación.

**¿Dónde se configura?**

Los alias se configuran en el archivo `tsconfig.json`, dentro de la propiedad `compilerOptions`, en una propiedad llamada `paths`:

```json
{
  "compilerOptions": {
    "paths": {
      "@shared/*": ["./src/app/shared/*"]
    }
  }
}
```

- La clave (`"@shared/*"`) es el alias. El `/*` al final indica que cualquier sub-ruta que venga después también se resuelve.
- El valor (`["./src/app/shared/*"]`) es la ruta real relativa al archivo `tsconfig.json`. También lleva `/*` al final para que coincida con cualquier sub-ruta.

**Posible necesidad de recargar VS Code**

Después de guardar los cambios en `tsconfig.json`, en algunos casos el servidor de lenguaje de TypeScript en VS Code puede necesitar recargarse para reconocer los nuevos alias. Si los alias no aparecen en el autocompletado, se puede recargar VS Code para forzar la actualización.

**Usar el alias después de configurarlo**

Una vez configurado, VS Code ofrece el alias como opción de importación automática con `Ctrl + .`. Al importar `SideMenuComponent` en el `DashboardComponent`, aparece la opción de importarlo desde `@shared/side-menu/side-menu.component` en lugar de desde la ruta relativa.

**Se pueden crear tantos alias como se necesiten**

Ejemplos de aliases útiles en un proyecto Angular:

```json
"paths": {
  "@shared/*": ["./src/app/shared/*"],
  "@services/*": ["./src/app/services/*"],
  "@interfaces/*": ["./src/app/interfaces/*"]
}
```

Cada carpeta con componentes que se importa frecuentemente puede tener su propio alias.

**Opinión del instructor: ventajas y desventajas**

El instructor menciona que algunos desarrolladores no los usan porque el alias oculta visualmente la ubicación física del archivo. Con una ruta relativa, al leerla se sabe en qué carpeta está el archivo. Con un alias, no es inmediatamente obvio, aunque VS Code permite hacer clic en la importación y navegar directamente al archivo. En última instancia, usarlos o no depende de la preferencia del equipo.

---

## Ejemplo sencillo

Un alias de importación es como tener un contacto guardado en el teléfono: en lugar de marcar el número completo `+56 9 1234 5678` cada vez, marcas "Mamá". TypeScript hace la traducción automática del nombre corto al número completo cuando compila el código.

---

## Palabras clave y elementos importantes

- **Alias de importación** — nombre corto configurado en `tsconfig.json` que reemplaza una ruta de importación larga; es una característica de TypeScript, no de Angular
- `tsconfig.json` — archivo de configuración de TypeScript de la aplicación; aquí se definen los alias bajo `compilerOptions.paths`
- `compilerOptions.paths` — propiedad del `tsconfig.json` donde se configuran los alias; es un objeto con claves (alias) y valores (rutas reales)
- `"@shared/*"` — ejemplo de alias con wildcard `/*`; permite importar cualquier archivo dentro de la carpeta `shared` usando el prefijo `@shared/`
- `/*` — wildcard al final del alias y de la ruta real; indica que se resuelven todas las sub-rutas dentro de esa carpeta
- `Ctrl + .` — atajo de VS Code para autocompletar importaciones; muestra el alias como opción cuando está configurado
- **Ruta relativa** — forma de importación original, ej: `../../shared/side-menu`; explícita pero puede ser larga
- **Ruta con alias** — forma alternativa, ej: `@shared/side-menu`; más corta pero oculta la ubicación física del archivo

---

## Resumen final

Los alias de importación se configuran en `tsconfig.json` bajo `compilerOptions.paths`. Cada alias es un par clave-valor donde la clave es el nombre corto (como `@shared/*`) y el valor es la ruta real de la carpeta (como `./src/app/shared/*`). Una vez configurados, VS Code los ofrece como opciones de autocompletado al importar. Se pueden crear tantos alias como se necesiten. Su uso depende de la preferencia del equipo: simplifican las importaciones pero ocultan la ubicación física de los archivos.
