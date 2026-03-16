# Continuación

## ¿Qué se aprende?

Esta lección explica cómo levantar el entorno de desarrollo completo para continuar trabajando en la Sección 22: base de datos PostgreSQL con Docker, backend NestJS, y la aplicación Angular. Es una lección de configuración; si el entorno ya está en marcha, puede omitirse.

---

## Puntos clave

**Cuándo ver esta lección**

Solo es necesaria para quienes tienen el entorno detenido o acaban de descargar el código fuente de la sección anterior. Si la base de datos, el backend y Angular ya están corriendo correctamente, se puede saltar directamente a la siguiente lección.

**Paso 1: levantar la base de datos con Docker**

Se trabaja con la carpeta `10-teslo-shop-backend`. Si se descargó el código fuente de la sección anterior:

```bash
npm install
```

Luego renombrar `.env.template` a `.env`. Las variables de entorno por defecto son válidas para el entorno de desarrollo local y no necesitan modificarse a menos que se quiera cambiar la semilla del JWT o la contraseña de la base de datos.

Para levantar PostgreSQL:

```bash
docker compose up -d
```

Esto crea o inicia el contenedor de PostgreSQL. Si la imagen de Postgres no está descargada, Docker la descarga automáticamente.

**Paso 2: levantar el backend NestJS**

```bash
npm run start:dev
```

Este script levanta el backend en modo de desarrollo con recarga automática.

**Paso 3: ejecutar el seed**

Desde Postman (o cualquier cliente HTTP) se ejecuta el endpoint del seed para resetear la base de datos a su estado inicial:

```
GET http://localhost:3000/api/seed
```

Este endpoint destruye todos los datos existentes (productos, usuarios) y los recrea desde cero con datos de prueba. Si se tenían productos de prueba creados en la sección anterior, se pierden. Los ids y usuarios también se regeneran.

**Credenciales de prueba**

El seed crea los siguientes usuarios por defecto:

- Usuario administrador: `test1@google.com` / `Abc123`

**Paso 4: levantar la aplicación Angular**

Se trabaja con la carpeta `09-teslo-shop`. Si se descargó el código fuente:

```bash
npm install
ng serve -o
```

`ng serve -o` levanta el servidor de desarrollo y abre el navegador automáticamente.

**Verificación**

Una vez todo levantado, se accede a la aplicación, se inicia sesión con las credenciales del seed y se navega al panel administrativo (`/admin`). Desde ahí se puede seleccionar cualquier producto para comenzar a trabajar con la carga de imágenes.

**Nota sobre el error 401**

Si al entrar a la página de detalle de un producto aparece un error 401 "Unauthorized" en la consola, es porque se accedió antes de iniciar sesión. Al autenticarse, el error desaparece.

---

## Ejemplo sencillo

Levantar el entorno es como arrancar el taller antes de empezar a trabajar: primero se enciende la maquinaria (Docker/base de datos), luego se abre el taller (backend NestJS) y finalmente se prepara la mesa de trabajo (Angular). El seed es el proceso de limpiar y ordenar el taller al inicio del día para empezar con todo en su lugar.

---

## Palabras clave y elementos importantes

- `10-teslo-shop-backend` — carpeta del proyecto NestJS
- `.env.template` → `.env` — archivo de variables de entorno que debe renombrarse antes de levantar el proyecto
- `docker compose up -d` — levanta el contenedor de PostgreSQL en segundo plano
- `npm run start:dev` — levanta NestJS en modo de desarrollo
- Seed (`GET /api/seed`) — resetea la base de datos; borra todos los datos existentes y recrea usuarios y productos de prueba
- `09-teslo-shop` — carpeta del proyecto Angular
- `ng serve -o` — levanta Angular en modo desarrollo y abre el navegador automáticamente
- `test1@google.com` / `Abc123` — credenciales del usuario administrador creado por el seed
- Error 401 — aparece al intentar acceder a rutas protegidas sin estar autenticado; se resuelve iniciando sesión

---

## Resumen final

Esta lección es una guía de puesta en marcha del entorno de desarrollo para la Sección 22. Los pasos son: `npm install` + renombrar `.env` + `docker compose up -d` para la base de datos, `npm run start:dev` para el backend, seed para resetear los datos, y `ng serve -o` para Angular. Una vez todo levantado y con sesión iniciada como administrador, el entorno está listo para trabajar en la carga de imágenes.
