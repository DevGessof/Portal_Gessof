# Seccion 5 - Leccion 19: Despliegues y HashRouter

---

## 1. Titulo de la leccion

**Desplegar la aplicacion en Netlify y resolver rutas con HashLocationStrategy**

---

## 2. Que se aprende en esta leccion

Se construye la aplicacion con `ng build`, se despliega en Netlify arrastrando la carpeta `dist/browser`, y se soluciona el problema de rutas al recargar usando `HashLocationStrategy`.

---

## 3. Puntos clave explicados

- **`ng build`:** Compila la aplicacion en modo produccion. Genera la carpeta `dist/` con los archivos optimizados listos para desplegar. No se necesita el flag `--prod`.
- **Carpeta `dist/browser`:** Contiene el producto final: `index.html`, archivos JS, CSS e iconos. No incluye `node_modules`. Es lo que se sube al servidor.
- **Netlify:** Plataforma de hosting que permite desplegar aplicaciones arrastrando la carpeta al panel. No requiere configuracion de servidor para el despliegue basico.
- **Problema de rutas al recargar:** Al recargar en `/dragonball-super`, el servidor busca fisicamente esa carpeta en el hosting y no la encuentra. Angular solo existe en el directorio raiz (`/`).
- **Por que ocurre:** En un SPA, Angular toma el control del enrutamiento solo desde el `index.html` del root. Las rutas como `/hero` no son carpetas reales en el servidor.
- **Solucion 1 - Configurar el servidor:** Redirigir todas las peticiones al `index.html` (configuracion Apache, Nginx o `_redirects` en Netlify). Requiere acceso a la configuracion del servidor.
- **Solucion 2 - `HashLocationStrategy`:** Agrega un `#` en el URL: `/#/dragonball-super`. El navegador nunca envia lo que va despues del `#` al servidor, por lo que siempre llega al root y Angular toma el control.
- **Configurar `HashLocationStrategy`:** En `app.config.ts` se agrega un provider con `LocationStrategy` y `useClass: HashLocationStrategy`, ambos de `@angular/common`.
- **Limitacion del Hash:** No es SEO friendly. Solo se indexaria el `index.html`. Para SEO se necesita Server Side Rendering (Angular SSR).

---

## 4. Ejemplo sencillo

```bash
# Construir para produccion
ng build
# Resultado en: dist/02-bases/browser/
```

```typescript
// app.config.ts
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // Agrega # en las URLs para evitar el problema de rutas en el servidor
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
```

**URL resultante:**
```
Sin Hash:  https://mi-app.netlify.app/dragonball-super  ← falla al recargar
Con Hash:  https://mi-app.netlify.app/#/dragonball-super ← siempre funciona
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng build` | Compila la app en modo produccion; genera la carpeta `dist/` |
| `dist/browser/` | Carpeta con el producto final listo para subir al servidor |
| Netlify | Plataforma de hosting; permite despliegue por drag & drop |
| `HashLocationStrategy` | Agrega `#` en el URL para que el servidor siempre sirva el root |
| `LocationStrategy` | Token de Angular que define la estrategia de enrutamiento en el URL |
| `useClass` | Propiedad del provider que indica que clase usar para implementar el token |
| SPA vs SSR | SPA: un solo `index.html`, no SEO; SSR: renderizado en servidor, SEO friendly |

---

## 6. Resumen final en pocas palabras

`ng build` genera la carpeta `dist/browser/` lista para desplegar. Al subir a Netlify, recargar en rutas que no sean la raiz da error 404 porque el servidor no encuentra esas carpetas fisicamente. `HashLocationStrategy` soluciona esto agregando `#` al URL para que el servidor siempre sirva el `index.html`. No es SEO friendly; para eso se necesita Angular SSR.
