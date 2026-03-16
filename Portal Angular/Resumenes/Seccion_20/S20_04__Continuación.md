# Continuación

## ¿Qué se aprende?

Esta lección es de preparación del entorno y estructura del proyecto. Se levantan el backend y el frontend, se retoma el estado de la aplicación al final de la Sección 19, y se crean las carpetas y archivos necesarios dentro del módulo `auth` para comenzar a trabajar con autenticación.

---

## Puntos clave

**Levantar el backend**

El procedimiento es idéntico al de secciones anteriores:

1. Abrir Docker Desktop y verificar que el contenedor de la base de datos esté en verde.
2. Si no lo está, ejecutar `docker compose up -d` en la carpeta del backend (`10-teslo-shop` o el nombre que corresponda).
3. Si es la primera vez que se descarga ese código fuente, seguir el README: `npm install`, copiar `.env.template` → `.env` y ajustar variables de entorno.
4. Levantar el servidor NestJS con `npm run start:dev`.
5. Opcionalmente ejecutar el seed en Postman (`GET localhost:3000/api/seed`) para poblar la base de datos si los datos no están presentes.

**Levantar el frontend**

En la carpeta del proyecto Angular (`09-teslo-shop`):

1. `npm install` para reconstruir `node_modules` si es necesario.
2. `ng serve -o` para levantar y abrir la aplicación en el navegador.

Al levantar, se verá la aplicación tal como se dejó al final de la Sección 19: paginación funcional, caché implementado y páginas de género operativas.

**Estructura de carpetas a crear en el módulo `auth`**

Dentro de `src/app/auth/` se crean tres nuevas carpetas:

- `services/` — para los servicios relacionados con autenticación (login, registro, verificación de token).
- `pages/` — para las pantallas de autenticación (login y registro).
- `layout/` — para el componente de layout compartido entre las páginas de autenticación.

Y una carpeta adicional nueva respecto a secciones anteriores:

- `guards/` — para los guards que protegerán las rutas de autenticación.

**Concepto de guard adelantado**

Los guards son funciones que Angular ejecuta antes de cargar una ruta. Sirven para proteger segmentos de la aplicación: pueden permitir o denegar el acceso según condiciones como si el usuario está autenticado o si tiene cierto rol. Se verán en detalle en lecciones posteriores de esta sección.

---

## Ejemplo sencillo

Preparar el entorno es como montar el escenario antes de que empiece la obra. El backend es el técnico de sonido, el frontend es el escenario con luces encendidas, y las carpetas nuevas (`services`, `pages`, `layout`, `guards`) son los camerinos y accesos que se abren específicamente para los actores que van a entrar en esta nueva escena: la autenticación.

---

## Palabras clave y elementos importantes

- `docker compose up -d` — comando para levantar los servicios del backend en segundo plano
- `npm run start:dev` — comando para iniciar el servidor NestJS en modo desarrollo
- `ng serve -o` — comando para levantar Angular y abrir el navegador automáticamente
- Seed — endpoint `GET /api/seed` que reinicia y repuebla la base de datos con datos de prueba
- `auth/services/` — carpeta para los servicios de autenticación
- `auth/pages/` — carpeta para los componentes de páginas de autenticación
- `auth/layout/` — carpeta para el componente de layout del módulo de autenticación
- `auth/guards/` — carpeta nueva para los guards que protegerán las rutas
- Guard — función que Angular evalúa antes de cargar una ruta para decidir si permite o bloquea el acceso

---

## Resumen final

Esta lección prepara el entorno para comenzar a implementar la autenticación. Se levanta el backend con Docker y NestJS, y el frontend con Angular CLI, retomando la aplicación al estado de la Sección 19. Dentro del módulo `auth` se crean las carpetas `services`, `pages`, `layout` y `guards`, siendo esta última una novedad respecto a la estructura de módulos anteriores. Con el entorno listo y la estructura definida, las lecciones siguientes ya pueden enfocarse en el código de autenticación.
