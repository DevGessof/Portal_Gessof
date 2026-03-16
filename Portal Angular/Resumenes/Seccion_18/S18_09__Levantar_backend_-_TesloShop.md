# Lección 09: Levantar Backend - TesloShop

## ¿Qué se aprende en esta lección?

En esta lección se configura y levanta el **backend** que será usado durante el resto del proyecto. Se aprende a leer un README, instalar dependencias, configurar variables de entorno, y usar **Docker** para levantar una base de datos PostgreSQL sin necesidad de instalarla directamente en la computadora.

---

## Puntos clave explicados

- **Backend proporcionado:** El instructor comparte un repositorio de GitHub (hecho en el curso de NestJS) con el backend ya construido. El estudiante no necesita saber cómo funciona por dentro; simplemente lo levanta y lo usa desde Angular.

- **Angular es agnóstico del backend:** Angular puede conectarse con cualquier backend (Node, Python, Java, C#, etc.). No importa con qué tecnología esté hecho.

- **Rama del repositorio:** Se debe descargar la rama `complete-backend-paginated`, que incluye la paginación ya implementada.

- **Pasos para levantar el backend (según el README):**
  1. Descargar o clonar el proyecto.
  2. Ejecutar `npm install` para instalar las dependencias.
  3. Copiar `.env.template` y renombrarlo a `.env` (variables de entorno).
  4. Levantar la base de datos con `docker-compose up -d`.
  5. Iniciar el servidor con `npm run start:dev`.
  6. Ejecutar el seed para poblar la base de datos.

- **Variables de entorno (`.env`):** Son configuraciones sensibles del proyecto como contraseñas, nombres de base de datos y puertos. Se almacenan en un archivo `.env` que no se sube al repositorio.

- **Docker y Docker Desktop:** Es una herramienta que permite correr aplicaciones en "contenedores" aislados. Se usa para levantar la base de datos **PostgreSQL** sin instalarla directamente en la computadora.

- **`docker-compose up -d`:** Comando que levanta todos los contenedores definidos en el archivo `docker-compose.yaml` en modo "detached" (segundo plano).

- **Volúmenes en Docker:** Son como un disco duro virtual conectado al contenedor. Los datos de la base de datos se guardan en una carpeta local (`postgres/`) para que no se pierdan al apagar el contenedor.

- **Seed de la base de datos:** Es un proceso que llena la base de datos con datos de prueba (productos, imágenes, etc.). Se ejecuta llamando al endpoint `localhost:3000/api/seed`.

- **Documentación de la API:** Disponible en `localhost:3000/api`. Muestra todos los endpoints disponibles para consultar productos, subir imágenes, autenticarse, etc.

- **JWT (JSON Web Token):** El backend usa JWT para el sistema de autenticación. La variable `JWT_SECRET` en el `.env` es la "llave" que firma y valida los tokens.

---

## Ejemplo sencillo

Pasos resumidos para levantar el backend:

```bash
# 1. Ir a la carpeta del backend
cd 10-nest-teslo-shop-backend

# 2. Instalar dependencias
npm install

# 3. Copiar el archivo de variables de entorno
cp .env.template .env

# 4. Levantar la base de datos con Docker
docker-compose up -d

# 5. Levantar el servidor
npm run start:dev

# 6. Poblar la base de datos (en Postman o navegador)
# GET http://localhost:3000/api/seed
```

---

## Funciones, palabras clave o elementos importantes

| Término | Descripción |
|--------|-------------|
| **Backend** | Servidor que gestiona la lógica del negocio y los datos. Angular lo consume como una API. |
| **NestJS** | Framework de Node.js usado para construir el backend del proyecto. |
| **Docker** | Herramienta para correr aplicaciones en contenedores aislados. |
| **`docker-compose up -d`** | Comando que levanta los contenedores en segundo plano. |
| **PostgreSQL** | Base de datos relacional usada por el backend. Se corre dentro de Docker. |
| **Variables de entorno (`.env`)** | Archivo de configuración con datos sensibles como contraseñas y puertos. |
| **Seed** | Proceso que llena la base de datos con datos iniciales de prueba. |
| **JWT (JSON Web Token)** | Mecanismo de autenticación basado en tokens cifrados. |
| **README** | Archivo de documentación de un proyecto que explica cómo instalarlo y usarlo. |
| **Volumen en Docker** | Mecanismo para persistir datos del contenedor en una carpeta local de la computadora. |

---

## Resumen final en pocas palabras

Esta lección enseña a levantar un backend existente paso a paso, usando Docker para gestionar la base de datos sin instalarla directamente en el equipo. A partir de aquí, Angular podrá consumir los productos y datos reales del servidor para construir la tienda.
