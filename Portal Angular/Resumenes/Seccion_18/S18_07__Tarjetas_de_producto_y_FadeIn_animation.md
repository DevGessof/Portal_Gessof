# Lección 07: Tarjetas de Producto y Animación FadeIn

## ¿Qué se aprende en esta lección?

En esta lección se crea el componente de **tarjeta de producto** reutilizable y se aprende a configurar una **animación de tipo "fade in"** directamente desde Tailwind CSS usando keyframes personalizados.

---

## Puntos clave explicados

- **Tarjeta de producto desde daisyUI:** Se copia el HTML de una tarjeta ("card compact") desde la documentación de daisyUI y se usa como base visual para mostrar un producto.

- **Componente reutilizable `product-card`:** La tarjeta no se repite manualmente en el HTML; se convierte en un componente independiente llamado `product-card`, ubicado en `products/components/`. Así puede reutilizarse múltiples veces.

- **Grid responsive:** En la página `home-page` se usa un sistema de cuadrícula (grid) de Tailwind para mostrar las tarjetas en columnas:
  - 1 columna en móvil
  - 2 columnas en pantallas medianas
  - 3 columnas en pantallas grandes
  - 4 columnas en pantallas muy grandes

- **Enlace con `routerLink` en la tarjeta:** El botón "Comprar" se reemplaza por un enlace (`<a>`) con `routerLink` que apunta a la página del producto (`/product/:slug`). Se estiliza con clases `link link-accent` de daisyUI.

- **Animación "fade in" personalizada en Tailwind:**
  - Se define en el archivo `tailwind.config` dentro de `theme > extend`.
  - Se crean dos partes: la animación (`animation`) y los fotogramas clave (`keyframes`).
  - La animación dura `0.3s` con efecto `ease-in-out`.
  - Los keyframes van de `opacity: 0` (invisible) al inicio a `opacity: 1` (visible) al final.
  - Esto genera la clase `animate-fadeIn` disponible en Tailwind.

- **Reiniciar el servidor:** Cuando se hacen cambios en `tailwind.config`, a veces es necesario cancelar y volver a levantar el servidor para que los cambios tomen efecto.

---

## Ejemplo sencillo

Configuración de la animación en `tailwind.config`:

```js
theme: {
  extend: {
    animation: {
      fadeIn: 'fadeIn 0.3s ease-in-out'
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' }
      }
    }
  }
}
```

Uso en el componente HTML:

```html
<div class="animate-fadeIn">
  <!-- contenido de la tarjeta -->
</div>
```

---

## Funciones, palabras clave o elementos importantes

| Término | Descripción |
|--------|-------------|
| **`product-card`** | Componente reutilizable que contiene el HTML de una tarjeta de producto. |
| **Grid de Tailwind** | Sistema de columnas que organiza los elementos en filas y columnas según el tamaño de pantalla. |
| **`animate-fadeIn`** | Clase de Tailwind personalizada que aplica la animación de aparición gradual. |
| **`@keyframes`** | Regla CSS (o configuración de Tailwind) que define los pasos de una animación. |
| **`ease-in-out`** | Tipo de transición suave que acelera al inicio y desacelera al final. |
| **`opacity`** | Propiedad CSS que controla la transparencia de un elemento (0 = invisible, 1 = visible). |
| **`link link-accent`** | Clases de daisyUI para estilizar un enlace con color acento. |

---

## Resumen final en pocas palabras

Esta lección enseña a crear un componente de tarjeta de producto reutilizable, a organizarlo en un grid responsive y a agregarle una animación de aparición suave (fade in) configurada directamente en Tailwind. Estos pequeños detalles mejoran notablemente la apariencia de la aplicación.
