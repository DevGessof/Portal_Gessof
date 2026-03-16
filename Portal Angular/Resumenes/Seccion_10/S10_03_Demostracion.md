# Seccion 10 - Leccion 03: Demostracion

---

## 1. Titulo de la leccion

**Demo del resultado final: busqueda por capital, pais y region con nombres en espanol**

---

## 2. Que se aprende en esta leccion

Se muestra el resultado final de la seccion: busqueda funcional por capital y por pais con nombres en espanol, formato de poblacion con separadores, bandera SVG, iconos, y pagina de detalle de un pais.

---

## 3. Puntos clave explicados

- **Busqueda por capital:** Escribir "teg" devuelve "Tegucigalpa" (Honduras) y "Gitega" (Burundi). La busqueda es parcial, no exacta.
- **Busqueda por pais:** Escribir "cos" devuelve "Islas Cocos", "Costa Rica", "Islas Turks y Caicos". Los nombres se muestran en espanol.
- **Nombres en espanol:** El API de REST Countries incluye traducciones. Se mapea el campo `translations.spa.common` para mostrar el nombre en espanol.
- **Formato de poblacion:** Los numeros de poblacion se muestran con separadores de miles gracias al `DecimalPipe` (`number` en el template).
- **Tabla de resultados:** Muestra columnas: #, flag (emoji), bandera (SVG), nombre en espanol, capital, poblacion formateada, y boton "Mas informacion".
- **Pagina de detalle:** Al hacer clic en "Mas informacion" se navega a la ruta `/country/by/:codigo` con datos del pais: poblacion, region, icono y una seccion colapsable para ver la bandera.
- **Estado pendiente:** La busqueda "Por region" no esta implementada en esta seccion; se completa en la siguiente seccion (opcional).

---

## 4. Ejemplo sencillo

```
Busqueda por capital "teg":
→ Honduras (Tegucigalpa), poblacion: 10,278,345
→ Burundi (Gitega), poblacion: 12,255,433

Busqueda por pais "cos":
→ Islas Cocos
→ Costa Rica
→ Islas Turks y Caicos
(todos en espanol gracias al mapper)
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `translations.spa.common` | Campo del API con el nombre del pais en espanol |
| `DecimalPipe` (`number`) | Formatea numeros con separadores de miles en el template |
| Busqueda parcial | El API devuelve todos los paises cuya capital contiene el texto buscado |
| Pagina de detalle | Ruta `/country/by/:codigo` con informacion del pais seleccionado |
| Flag emoji vs bandera SVG | El API provee ambos; el emoji es texto Unicode, el SVG es una imagen |

---

## 6. Resumen final en pocas palabras

Al terminar la seccion la app busca paises por capital o por nombre, muestra los nombres en espanol mediante el mapper, formatea la poblacion con `DecimalPipe`, y permite ver el detalle de un pais. La busqueda por region queda pendiente para la seccion siguiente.
