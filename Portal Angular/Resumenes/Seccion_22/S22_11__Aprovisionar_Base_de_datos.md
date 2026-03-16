# Aprovisionar Base de datos

## ¿Qué se aprende?

Esta lección muestra cómo crear una base de datos PostgreSQL gratuita en la nube usando neon.tech. El proceso es rápido: crear una cuenta, crear un proyecto, seleccionar región, y copiar la cadena de conexión que se usará después en las variables de entorno del backend. También se reflexiona sobre la diferencia entre los ambientes de desarrollo local y de producción/preproducción.

---

## Puntos clave

**Por qué detener los servidores locales primero**

Antes de iniciar el proceso de despliegue se detiene tanto el backend (`npm run start:dev`) como el frontend (`ng serve`). El objetivo es trabajar en el ambiente de producción desde cero, sin dependencias del entorno local.

**Diferencia entre desarrollo, preproducción y producción**

- **Desarrollo (`localhost`)** — entorno local con Docker para PostgreSQL; datos de prueba que se pueden borrar con el seed; cambios instantáneos.
- **Preproducción (staging)** — ambiente en la nube lo más parecido posible a producción; sirve para detectar comportamientos inesperados antes de que los vean usuarios reales (imágenes que no cargan instantáneamente, layouts que se mueven al cargar, tiempos de respuesta lentos).
- **Producción** — no tiene seed destructivo; los datos son reales; requiere servicios de pago con alta disponibilidad.

Lo que se hace en esta sección es técnicamente preproducción, aunque para simplificar se le llame "despliegue".

**Proceso en neon.tech**

1. Ir a `neon.tech` y hacer clic en "Login".
2. Autenticarse con una cuenta de red social (para no gestionar contraseñas adicionales).
3. Crear un nuevo proyecto con el nombre `teslo-shop`.
4. Seleccionar el proveedor de nube (AWS o Azure) y la región más cercana geográficamente.
5. Hacer clic en "Crear proyecto".

La base de datos queda aprovisionada en segundos. neon.tech crea automáticamente una base de datos llamada `neondb` con un usuario llamado `neondb_owner`.

**La cadena de conexión y sus partes**

neon.tech proporciona una sola cadena de conexión con este formato:

```
postgresql://neondb_owner:PASSWORD@HOST/neondb?sslmode=require
```

Desglose de cada parte (que corresponde a variables de entorno del backend):

| Parte de la cadena | Variable de entorno | Ejemplo |
|---|---|---|
| `neondb_owner` | `DB_USERNAME` | `neondb_owner` |
| `PASSWORD` | `DB_PASSWORD` | cadena alfanumérica larga |
| `HOST` (entre `@` y `/`) | `DB_HOST` | `ep-xxx.us-east-2.aws.neon.tech` |
| `neondb` (al final) | `DB_NAME` | `neondb` |
| `5432` (puerto por defecto) | `DB_PORT` | `5432` |

El host es la parte que va desde el `@` hasta la `/` final, que incluye el subdominio de neon.tech. No es `localhost` como en el entorno de desarrollo.

**Compatibilidad de versiones**

Durante el desarrollo se usó la imagen Docker de PostgreSQL 14. neon.tech provee por defecto PostgreSQL 17. El schema y las operaciones de TypeORM son compatibles entre ambas versiones, por lo que no hay ningún cambio necesario en el código del backend.

**Guardar la cadena de conexión**

Se recomienda copiar la cadena de conexión en un archivo de texto local inmediatamente, ya que se necesitará en la siguiente lección para configurar las variables de entorno del backend en Render. La cadena siempre se puede volver a consultar desde la opción "Connect" dentro del dashboard de neon.tech.

---

## Ejemplo sencillo

Aprovisionar la base de datos en neon.tech es como contratar una caja fuerte en un banco en lugar de guardar el dinero debajo del colchón (Docker local). El banco (neon.tech) gestiona la seguridad, los backups y la disponibilidad; solo hay que quedarse con la llave (cadena de conexión) para poder acceder.

---

## Palabras clave y elementos importantes

- **neon.tech** — servicio de PostgreSQL gestionado en la nube; tier gratuito; sin necesidad de tarjeta de crédito
- **Cadena de conexión** — string con usuario, contraseña, host y nombre de base de datos; proporcionada por neon.tech al crear el proyecto
- `neondb` — nombre por defecto de la base de datos creada por neon.tech
- `neondb_owner` — nombre por defecto del usuario de la base de datos
- **DB_HOST** — parte de la cadena de conexión entre el `@` y la `/`; reemplaza a `localhost` del entorno de desarrollo
- **DB_PASSWORD** — parte de la cadena de conexión entre los dos puntos `:` y el `@`
- **Preproducción (staging)** — ambiente lo más parecido posible a producción donde se detectan comportamientos reales antes del lanzamiento
- **PostgreSQL 17** — versión por defecto en neon.tech; compatible con el TypeORM configurado en el backend aunque en desarrollo se usara la versión 14

---

## Resumen final

Aprovisionar la base de datos en neon.tech toma menos de un minuto: crear cuenta, crear proyecto, elegir región y copiar la cadena de conexión. La cadena incluye usuario, contraseña, host y nombre de base de datos, que se usarán como variables de entorno en el backend desplegado en Render. Es importante guardar esa cadena en un lugar accesible antes de cerrar la ventana, aunque siempre se puede volver a consultar desde el dashboard de neon.tech.
