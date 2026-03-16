# Resumen de Lección - Sección 17, Clase 19

---

## 1. Titulo de la leccion

**Construir y desplegar**

---

## 2. Que se aprende en esta leccion

Se aprende a construir la aplicacion Angular para produccion con `ng build`, a resolver los problemas de tamano y compatibilidad que genera el paquete `mapbox-gl`, y a desplegar la carpeta resultante en Netlify. Como paso final se implementa el `HashLocationStrategy` para evitar errores de rutas al recargar la pagina en produccion.

---

## 3. Puntos clave explicados

- **`ng build`:** comando que genera la carpeta `dist/` con los archivos optimizados listos para subir a cualquier servidor web.
- **Bundle size de 1.75 MB:** el paquete `mapbox-gl` no es un modulo ESM moderno, por lo que no permite "tree shaking" (eliminar el codigo que no se usa). Esto hace que todo el paquete se incluya en el bundle final, inflando el tamano.
- **Error de budget:** Angular tiene un presupuesto maximo de bundle de `1 MB` por defecto. Si se supera, lanza un error y no genera los archivos. Hay que incrementarlo en `angular.json`.
- **`allowedCommonJsDependencies`:** propiedad en `angular.json` que permite indicar que `mapbox-gl` es una dependencia CommonJS conocida, eliminando el warning de optimizacion.
- **Ajuste del budget en `angular.json`:** se cambia `maximumWarning` a `1MB` y `maximumError` a `3MB` en la seccion de `budgets` dentro de `configurations.production`.
- **Carpeta de despliegue:** el resultado util es `dist/maps-app/browser/`. Esa es la carpeta que se sube al servidor de hosting.
- **Netlify (deploy manual):** se va a Netlify, se crea un nuevo sitio con "Deploy manually" y se arrastra la carpeta `browser/` al area de subida. No hay paso de compilacion porque ya esta construido.
- **Problema de rutas en produccion:** al recargar en una URL como `/fullscreen`, Netlify busca una carpeta llamada `fullscreen` que no existe y devuelve "Page not found".
- **`HashLocationStrategy`:** solucion al problema anterior. Agrega un `#` al URL (`/#/fullscreen`) de forma que el servidor siempre sirve `index.html` y Angular maneja el enrutamiento internamente. Se configura en `app.config.ts` con `{ provide: LocationStrategy, useClass: HashLocationStrategy }`.
- **Nuevo deploy:** despues de configurar el hash se hace otro `ng build` y se vuelve a subir la carpeta `browser/` a Netlify para aplicar el cambio.

---

## 4. Ejemplo sencillo

Configuracion en `app.config.ts`:

```typescript
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
};
```

La URL resultante en produccion queda como: `https://mi-app.netlify.app/#/markers`

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `ng build` | Comando que compila y empaqueta la aplicacion Angular para produccion |
| Bundle size | Tamano total del archivo JavaScript generado; `mapbox-gl` lo incrementa significativamente |
| Tree shaking | Optimizacion que elimina el codigo no usado; `mapbox-gl` no lo soporta por ser CommonJS |
| `allowedCommonJsDependencies` | Campo en `angular.json` para suprimir el warning de dependencias CommonJS conocidas |
| `budgets` en `angular.json` | Configuracion que define el tamano maximo permitido del bundle antes de lanzar warning o error |
| `dist/maps-app/browser/` | Carpeta que contiene los archivos finales listos para subir al servidor |
| Netlify deploy manual | Opcion para subir archivos estaticos directamente sin necesidad de conectar un repositorio |
| `HashLocationStrategy` | Estrategia de Angular que usa `#` en la URL para evitar errores 404 en servidores sin configuracion de redireccion |
| `LocationStrategy` | Token de inyeccion de dependencias de Angular que define como se manejan las URLs de las rutas |

---

## 6. Resumen final en pocas palabras

El `ng build` genera los archivos de produccion pero `mapbox-gl` causa advertencias de tamano y compatibilidad. Se resuelven ajustando `allowedCommonJsDependencies` y el budget en `angular.json`. La carpeta `browser/` se sube a Netlify con deploy manual. Para que las rutas funcionen al recargar se implementa `HashLocationStrategy`, que agrega un `#` al URL y deja que Angular gestione toda la navegacion. Con esto la aplicacion queda completamente desplegada y funcional en produccion.
