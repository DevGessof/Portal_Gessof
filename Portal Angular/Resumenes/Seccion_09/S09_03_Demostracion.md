# Seccion 9 - Leccion 03: Demostracion

---

## 1. Titulo de la leccion

**Demo del resultado final: CountryApp con Masonry, rutas, buscador y tabla de paises**

---

## 2. Que se aprende en esta leccion

Se muestra el resultado final de la seccion: una aplicacion con landing page, menu de navegacion superior, buscadores por capital/pais/region, tabla de paises, footer global y pagina de detalle de un pais. Todo con diseño daisyUI.

---

## 3. Puntos clave explicados

- **Landing page (Home):** Pantalla de bienvenida con hero de daisyUI. Boton "Empezar" navega a la seccion de paises.
- **Footer global:** Aparece en todas las rutas (home y paises) porque esta en `app.component.html`, fuera del router-outlet.
- **Layout de paises:** Envuelve las tres rutas (por capital, por pais, por region) con un estilo comun. Incluye el menu superior y el footer del layout.
- **Menu superior:** Navegacion horizontal con tres opciones: "Por capital", "Por pais", "Por region". La opcion activa se resalta con `routerLinkActive`.
- **Buscadores:** "Por capital" y "Por pais" tienen un input con boton. "Por region" solo tiene tabla.
- **Tabla de paises:** Muestra columnas: #, bandera (SVG), nombre, capital, poblacion y un boton de detalle.
- **Pagina de detalle:** Ruta dinamica `/country/by/CRI` (o cualquier codigo de pais) que mostrara informacion del pais seleccionado (funcionalidad en seccion 10).
- **Componentes reutilizables:** El buscador y la tabla son componentes independientes que se usan en las tres paginas.
- **Sin funcionalidad:** Los buscadores no hacen peticiones HTTP todavia. Eso se implementa en la seccion 10.

---

## 4. Ejemplo sencillo

```
Rutas de la app:
/                        → HomePageComponent (landing)
/country                 → CountryLayoutComponent (redirige a by-capital)
/country/by-capital      → ByCapitalPageComponent
/country/by-country      → ByCountryPageComponent
/country/by-region       → ByRegionPageComponent
/country/by/:codigo      → CountryPageComponent (detalle)
**                       → Redirige a /
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Footer global | En `app.component.html` → presente en todas las rutas |
| Layout de paises | Componente con `router-outlet` que envuelve las rutas hijas de `/country` |
| `routerLinkActive` | Clase aplicada automaticamente a la opcion del menu activa |
| Componentes reutilizables | `SearchInputComponent` y `CountryListComponent` usados en varias paginas |
| Ruta dinamica `/by/:codigo` | Acepta cualquier codigo de pais como parametro |

---

## 6. Resumen final en pocas palabras

Al finalizar la seccion la app tiene landing page, footer global, layout para paises con menu superior, tres paginas de busqueda (capital, pais, region), tabla de resultados y ruta de detalle dinamica. Todo estilizado con daisyUI. La funcionalidad HTTP se agrega en la seccion 10.
