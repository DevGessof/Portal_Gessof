# Seccion 8 - Leccion 07: Determinar Fin de Scroll

---

## 1. Titulo de la leccion

**Calcular scrollTop, clientHeight y scrollHeight para detectar el fin del scroll**

---

## 2. Que se aprende en esta leccion

Se aprende a usar las tres propiedades del DOM necesarias para determinar cuando el usuario esta cerca del final del contenido desplazable: `scrollTop`, `clientHeight` y `scrollHeight`. Con estos valores se calcula si es momento de disparar la siguiente peticion HTTP.

---

## 3. Puntos clave explicados

- **`scrollTop`:** Cantidad de pixeles que el usuario ha desplazado hacia abajo desde el inicio del contenedor. Vale `0` cuando esta en la parte superior.
- **`clientHeight`:** Altura visible del contenedor (el "viewport" del div). Es la porcion del contenido que el usuario puede ver en pantalla. No cambia al hacer scroll.
- **`scrollHeight`:** Altura total del contenido dentro del contenedor, incluyendo la parte no visible. Es el maximo posible del scroll.
- **Formula del infinite scroll:** `scrollTop + clientHeight >= scrollHeight` → si es `true`, el usuario llego al final.
- **Margen de adelanto (300px):** En lugar de esperar a llegar exactamente al final, se resta un margen: `scrollTop + clientHeight + 300 >= scrollHeight`. Asi la peticion se dispara antes de llegar al fondo y el usuario no ve el final vacio.
- **`isAtBottom`:** Variable booleana calculada con la formula anterior. Cuando es `true` es el momento de cargar la siguiente pagina.
- **Patron de proteccion anticipada:** Al inicio de `onScroll` se verifica si `scrollDivRef` existe. Si no, `return` inmediato. Esto evita el uso de `?.` en cada propiedad.

---

## 4. Ejemplo sencillo

```typescript
onScroll(event: Event): void {
  const scrollDiv = this.scrollDivRef()?.nativeElement;
  if (!scrollDiv) return;

  const scrollTop    = scrollDiv.scrollTop;     // scroll realizado
  const clientHeight = scrollDiv.clientHeight;  // altura visible
  const scrollHeight = scrollDiv.scrollHeight;  // altura total

  // true cuando faltan 300px o menos para llegar al final
  const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

  if (isAtBottom) {
    // TODO: cargar siguiente pagina
  }
}
```

```
Visualizacion:
┌─────────────────────────────┐  ← inicio del contenedor
│                             │
│  [visible en pantalla]      │  clientHeight = 690px
│                             │
├─────────────────────────────┤  ← scrollTop = 400px (desplazado)
│  [contenido no visible]     │
│  ...                        │  scrollHeight total = 1200px
│                             │
└─────────────────────────────┘  ← fin del contenido

400 + 690 + 300 = 1390 >= 1200 → isAtBottom: true
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `scrollTop` | Pixeles desplazados desde el inicio; 0 = sin scroll |
| `clientHeight` | Altura visible del div (viewport del contenedor) |
| `scrollHeight` | Altura total del contenido, incluyendo la parte oculta |
| `scrollTop + clientHeight >= scrollHeight` | Formula para detectar el final del scroll |
| Margen de 300px | Adelanta la peticion HTTP antes de llegar exactamente al fondo |
| `isAtBottom` | Booleano que indica si es momento de cargar mas contenido |

---

## 6. Resumen final en pocas palabras

El infinite scroll necesita tres valores del DOM: `scrollTop` (cuanto se ha desplazado), `clientHeight` (lo que se ve) y `scrollHeight` (el total). Su suma determina si el usuario esta cerca del final. Restar un margen de 300px adelanta la peticion para que el usuario nunca vea el final vacio.
