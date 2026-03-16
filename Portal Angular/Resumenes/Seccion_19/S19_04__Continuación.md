# Continuación

## ¿Qué se aprende?

Esta lección es de preparación del entorno de trabajo. Se explica cómo volver a levantar el backend con Docker y el frontend con Angular CLI para retomar el proyecto donde se dejó en la sección anterior. También se repasa brevemente cómo funciona la paginación en el API del backend.

---

## Puntos clave

**Levantar el backend con Docker**

El backend es una aplicación NestJS que corre sobre una base de datos PostgreSQL gestionada con Docker. Los pasos para levantarlo son:

1. Abrir Docker Desktop.
2. Verificar que el contenedor aparece en verde (activo). Si fue configurado con `restart: always`, se levanta automáticamente al abrir Docker.
3. Si el contenedor no existe, ir a la carpeta del proyecto backend (`nest-teslo-shop-backend`) y ejecutar `docker compose up -d`.
4. Instalar dependencias con `npm install` si es la primera vez.
5. Levantar el servidor con `npm run start:dev`.

**Ejecutar el seed para poblar la base de datos**

El seed reinicia la base de datos y la rellena con datos de prueba. Se ejecuta haciendo una petición GET a:

```
localhost:3000/api/seed
```

Importante: el seed es destructivo. Borra todos los registros existentes y los vuelve a crear con nuevos UUIDs. Esto significa que los productos guardados por UUID ya no existirán. Sin embargo, los slugs son constantes y no cambian entre ejecuciones del seed, por lo que los productos siguen siendo accesibles por slug.

**Cómo funciona la paginación en el API**

El endpoint de productos acepta dos parámetros opcionales:

- `limit`: cuántos registros devolver por página (equivalente al tamaño de página).
- `offset`: cuántos registros saltar desde el inicio.

La relación entre offset y número de página es:

- Página 1 → offset 0 (no se salta ningún registro)
- Página 2 → offset igual al `limit` (se saltan los primeros registros)
- Página 4 → offset igual a `limit × 3`

Por ejemplo, con un límite de 10 registros por página, la página 4 tiene un offset de 30.

También se puede filtrar por categoría de género usando el parámetro `gender` con los valores `men`, `women` o `kids`. Los productos unisex aparecen en todas las categorías.

**Levantar el frontend**

El proyecto frontend se encuentra en la carpeta `09-teslo-shop`. Para levantarlo:

1. Ejecutar `npm install` si no se tienen las dependencias instaladas.
2. Abrir Visual Studio Code con `code .`
3. Ejecutar `ng serve` para iniciar el servidor de desarrollo.

Al finalizar este proceso, la aplicación queda disponible con los nueve productos de la página principal, el carrusel de imágenes en cada producto y las páginas de género funcionando, que es el estado en que se dejó al final de la sección anterior.

---

## Ejemplo sencillo

El offset funciona como saltarse páginas en un libro. Si cada página tiene 10 renglones y quieres leer desde el renglón 31, simplemente saltas los primeros 30 (offset 30). El servidor hace exactamente eso: recibe el número de registros a saltar y devuelve los siguientes a partir de ahí.

---

## Palabras clave y elementos importantes

- Docker Desktop — herramienta para gestionar contenedores; aquí se usa para la base de datos PostgreSQL
- `docker compose up -d` — comando para levantar los servicios definidos en el archivo `docker-compose.yaml`
- `restart: always` — configuración de Docker que levanta el contenedor automáticamente al iniciar el sistema
- `npm run start:dev` — comando para iniciar el servidor NestJS en modo desarrollo
- Seed — endpoint `GET /api/seed` que reinicia y repuebla la base de datos con datos de prueba
- UUID — identificador único que cambia con cada seed; los slugs no cambian
- `limit` — parámetro del API que define cuántos registros devolver por página
- `offset` — parámetro del API que define cuántos registros saltar; se calcula como `(página - 1) × limit`
- `ng serve` — comando para levantar el servidor de desarrollo de Angular

---

## Resumen final

Esta lección de preparación explica cómo volver a levantar el proyecto completo: base de datos PostgreSQL con Docker, servidor NestJS con npm y aplicación Angular con `ng serve`. Se repasa el concepto de `limit` y `offset` del API, que son los parámetros que la paginación del frontend usará para pedir al servidor la página correcta. Con el entorno listo, las siguientes lecciones ya se enfocan en construir la paginación y el caché.
