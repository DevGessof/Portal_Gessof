# Seccion 8 - Leccion 03: Demostracion

---

## 1. Titulo de la leccion

**Demo del resultado final: Masonry, infinite scroll y scroll preservado entre navegaciones**

---

## 2. Que se aprende en esta leccion

Se muestra el resultado final de la seccion: galeria de GIFs con diseno Masonry, infinite scroll funcional y preservacion de la posicion del scroll al navegar entre rutas.

---

## 3. Puntos clave explicados

- **Diseno Masonry:** Las imagenes se muestran en columnas de alturas variables, dando una apariencia mas dinamica y profesional que el grid uniforme anterior.
- **Scroll preservado:** Al navegar a otra pagina y regresar a Trending, el scroll vuelve exactamente al punto donde se habia dejado. El componente se destruye y recrea, pero la posicion se restaura desde un servicio.
- **El servicio guarda el estado:** La posicion del scroll se almacena en un servicio de Angular (en memoria). Al reconstruir el componente, se lee ese valor y se restaura el scroll.
- **No confundir con LocalStorage:** El scroll se guarda en memoria (servicio), no en LocalStorage, porque esta ligado a los GIFs que tambien estan en memoria.

---

## 4. Ejemplo sencillo

```
Flujo de scroll preservado:
1. Usuario hace scroll hasta el gif #50 en Trending
2. Usuario navega al buscador (componente Trending se destruye)
3. Usuario regresa a Trending (componente se recrea)
4. Angular restaura el scroll al gif #50 desde ScrollStateService
→ El usuario no nota que el componente fue destruido
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Masonry | Columnas visuales de alturas variables con Tailwind |
| Scroll preservado | La posicion del scroll se recupera al reconstruir el componente |
| `ScrollStateService` | Servicio que guarda la posicion del scroll en memoria |
| Componente destruido y recreado | Comportamiento normal al cambiar de ruta en Angular |

---

## 6. Resumen final en pocas palabras

La seccion produce una galeria Masonry con infinite scroll y una experiencia de navegacion fluida donde el scroll se preserva aunque el componente sea destruido. Todo se logra con un servicio en memoria y logica de ciclo de vida del componente.
