# Demostración - Sección 21

## ¿Qué se aprende?

Esta lección muestra el resultado final de la sección: un panel administrativo funcional con listado paginado de productos, formulario de actualización con caché inteligente, y creación de nuevos productos con validaciones.

---

## Puntos clave

**Listado de productos con paginación**

El panel muestra todos los productos en una tabla. La paginación funciona igual que en la tienda: se puede navegar entre páginas y mostrar diferentes cantidades de registros (10, 50, 100, etc.).

**Actualización de producto con caché**

Al entrar en un producto y modificar su título (por ejemplo, añadirle `!!!`), al guardar el cambio el producto se actualiza sin hacer una petición HTTP adicional al backend. Esto es posible porque la actualización también invalida y renueva el caché del producto. Al regresar al listado, el título modificado aparece directamente desde caché.

**Creación de nuevo producto**

Existe un botón "Nuevo producto" que abre el formulario vacío. El formulario reactivo incluye:
- Título del producto.
- Precio (con validación: no se permiten números negativos).
- Tags (etiquetas como `hola, mundo`).
- Tallas (checkboxes seleccionables).
- Género (selector).

Al guardar, el producto se crea en el backend y aparece en el listado. No hay carga de imágenes en esta sección.

**Sin carga de imágenes**

La funcionalidad de subir imágenes no se implementa en esta sección. Es el tema de la siguiente.

---

## Ejemplo sencillo

El panel es como el panel de control de un comercio electrónico: se puede ver todo el inventario en una tabla, entrar a cualquier producto para editarlo, y crear nuevos productos desde un formulario. El caché inteligente evita recargar datos que ya están en memoria.

---

## Palabras clave y elementos importantes

- Panel administrativo — área privada accesible solo para usuarios con role `admin`
- Tabla paginada de productos — listado con navegación por páginas y control de cantidad de registros
- Formulario de creación/edición — formulario reactivo reutilizado tanto para crear como para actualizar productos
- Invalidación de caché — tras guardar un producto, el caché local se actualiza para reflejar los cambios sin petición adicional
- Tags — arreglo de etiquetas asociadas al producto
- Tallas (sizes) — arreglo de tallas seleccionables mediante checkboxes
- Género (gender) — campo selector con opciones predefinidas

---

## Resumen final

La demostración muestra el panel administrativo terminado: tabla paginada de productos, formulario reactivo para crear y actualizar con validaciones, e invalidación del caché al guardar para que los cambios sean inmediatamente visibles. La carga de imágenes queda pendiente para la siguiente sección.
