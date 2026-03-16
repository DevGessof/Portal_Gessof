# Lección 04: Inicio de Proyecto - TesloShop

## ¿Qué se aprende en esta lección?

En esta lección se da inicio al proyecto **TesloShop** desde cero. Se crea la aplicación con Angular CLI, se instalan las herramientas de estilos (Tailwind CSS y daisyUI) y se define la estructura de carpetas del proyecto siguiendo el patrón de **feature modules**.

---

## Puntos clave explicados

- **Creación del proyecto:** Se usa el comando `ng new teslo-shop` para crear la aplicación Angular. Se elige CSS como formato de estilos y se desactiva el Server Side Rendering.

- **Instalación de Tailwind CSS:** Se instala como librería de estilos siguiendo la guía oficial para Angular. Permite aplicar estilos directamente como clases en el HTML.

- **Instalación de daisyUI:** Es un complemento de Tailwind que ofrece componentes visuales listos para usar (tarjetas, botones, navbar, etc.). Se configura el tema **"night"** (azul oscuro).

- **Estructura de carpetas (feature modules):** Dentro de `src/app` se crean carpetas que agrupan el código por funcionalidad:
  - `products/` — Todo lo relacionado con los productos (componentes, interfaces, pipes, servicios).
  - `auth/` — Todo lo relacionado con la autenticación de usuarios.
  - `admin-dashboard/` — Panel administrativo para gestión interna.
  - `store-front/` — Vista principal de la tienda (lo que el usuario ve).

- **Archivo `.gitkeep`:** Se crea en carpetas vacías para que Git las rastree, ya que Git ignora las carpetas vacías por defecto.

- **`router-outlet` en el componente principal:** El `app.component` solo tendrá el `router-outlet`, sin estilos propios, para que cada sección de la aplicación tenga su propio diseño.

---

## Ejemplo sencillo

Estructura de carpetas creada en el proyecto:

```
src/app/
├── products/
│   ├── components/
│   ├── interfaces/
│   ├── pipes/
│   └── services/
├── auth/
├── admin-dashboard/
└── store-front/
```

Cada carpeta agrupa todo lo relacionado a esa funcionalidad. Esto es lo que se llama **feature module**.

---

## Funciones, palabras clave o elementos importantes

| Término | Descripción |
|--------|-------------|
| `ng new teslo-shop` | Comando para crear un nuevo proyecto Angular llamado "teslo-shop". |
| **Tailwind CSS** | Librería de CSS que permite dar estilos usando clases directamente en el HTML. |
| **daisyUI** | Plugin de Tailwind con componentes visuales prediseñados (botones, tarjetas, etc.). |
| **Feature module** | Patrón de organización que agrupa archivos por funcionalidad dentro de carpetas. |
| **`router-outlet`** | Etiqueta de Angular donde se renderiza el contenido según la ruta activa. |
| **`.gitkeep`** | Archivo vacío que se coloca en carpetas para que Git las incluya en el repositorio. |
| `ng serve -o` | Comando para levantar la aplicación Angular y abrirla automáticamente en el navegador. |

---

## Resumen final en pocas palabras

Esta lección establece las bases del proyecto TesloShop: se crea la aplicación Angular, se instalan las herramientas de diseño (Tailwind + daisyUI) y se organiza el código en carpetas por funcionalidad, lo que facilitará el trabajo a medida que el proyecto crezca.
