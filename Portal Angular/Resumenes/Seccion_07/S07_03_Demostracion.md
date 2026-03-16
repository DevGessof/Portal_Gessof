# Seccion 7 - Leccion 03: Demostracion

---

## 1. Titulo de la leccion

**Demo del resultado final: busqueda de GIFs, historial en sidebar y persistencia con LocalStorage**

---

## 2. Que se aprende en esta leccion

Se muestra el resultado final de la seccion: peticion HTTP al API de Giphy, buscador funcional, historial de busquedas en el sidebar, persistencia con LocalStorage y rutas dinamicas tipo `/history/goku`.

---

## 3. Puntos clave explicados

- **Peticion HTTP a Giphy:** La pantalla Trending muestra GIFs reales obtenidos del API.
- **Buscador:** Al escribir un termino y presionar Enter se hace una peticion al endpoint de busqueda de Giphy y se muestran los resultados.
- **Historial en sidebar:** Cada busqueda nueva se agrega al menu lateral como enlace. Al hacer clic en un elemento del historial se muestran los GIFs de esa busqueda previa.
- **Cache en memoria:** Los resultados de busquedas previas se guardan en un objeto `Record` dentro del servicio. Si ya se busco algo, se muestra desde cache sin hacer una nueva peticion HTTP.
- **LocalStorage:** El historial persiste aunque se recargue el navegador. Al recargar, el historial se recupera del LocalStorage.
- **Rutas dinamicas:** Cada busqueda del historial genera una ruta del tipo `/dashboard/history/saitama`, creada de forma dinamica.
- **Seccion siguiente:** Se implementara infinite scroll y diseno Masonry.

---

## 4. Ejemplo sencillo

```
URL al hacer clic en historial:
/dashboard/history/saitama
/dashboard/history/goku
/dashboard/history/overwatch

Objeto en LocalStorage (key: "gifs"):
{
  "saitama": [ { id, title, url }, ... ],
  "goku":    [ { id, title, url }, ... ]
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Trending | Pantalla que muestra GIFs populares del API de Giphy |
| Buscador | Input que dispara peticion HTTP al escribir y presionar Enter |
| Historial en sidebar | Lista dinamica de terminos buscados; persiste con LocalStorage |
| Cache en memoria | Objeto `Record` en el servicio que evita peticiones HTTP repetidas |
| Ruta dinamica `/history/:query` | Cada entrada del historial tiene su propio URL |

---

## 6. Resumen final en pocas palabras

Al finalizar la seccion la app muestra GIFs reales, tiene un buscador que guarda historial en el sidebar, las busquedas se cachean en memoria para no repetir peticiones HTTP, todo persiste en LocalStorage al recargar, y cada entrada del historial tiene su propia ruta dinamica.
