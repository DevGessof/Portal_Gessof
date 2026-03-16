# Plan de despliegue

## ¿Qué se aprende?

Esta lección explica la estrategia arquitectónica para desplegar TesloShop en Internet de forma gratuita usando tres servicios independientes: uno para la base de datos (neon.tech), uno para el backend NestJS (Render) y uno para el frontend Angular (a definir). Se argumenta por qué es mejor mantener los tres en servidores separados en lugar de unificarlos, y se describen las implicaciones de latencia y escalabilidad de cada opción.

---

## Puntos clave

**Las tres piezas del despliegue**

Toda la aplicación requiere tres componentes funcionando simultáneamente:

- **Base de datos PostgreSQL** — almacena productos, usuarios e imágenes.
- **Backend NestJS** — sirve el API REST, autentica usuarios y gestiona archivos.
- **Frontend Angular** — la aplicación SPA que el usuario ve en el navegador.

**Por qué separar en tres servidores**

Una alternativa es empaquetar el `ng build` de Angular dentro de la carpeta `public` del backend NestJS y servirlo desde ahí, dejando solo dos servidores. Sin embargo, esto crea una dependencia entre ambas aplicaciones:

- Cada vez que se actualiza Angular hay que redesplegar también NestJS.
- Si en el futuro hay múltiples frontends (web, móvil, otra aplicación) conectados al mismo API, sería inviable meter todos dentro del backend.
- Con servidores separados, cada capa se actualiza, escala y gestiona de forma independiente.

**Servicios gratuitos que se van a usar**

- **neon.tech** — PostgreSQL gestionado en la nube; tier gratuito sin tarjeta de crédito.
- **Render** — plataforma para desplegar el backend NestJS; tier gratuito disponible, aunque el servicio entra en suspensión tras 8 horas de inactividad (advertencia ya mencionada en la sección).
- **Netlify** (o similar) — para servir los archivos estáticos del frontend Angular.

El instructor aclara que estos servicios no son patrocinios: los recomienda porque han funcionado bien para otros estudiantes.

**Flujo de datos en producción**

```
Usuario (navegador)
    ↓ peticiones HTTP
Angular (Netlify)
    ↓ llamadas al API
NestJS (Render)
    ↓ consultas SQL
PostgreSQL (neon.tech)
    ↑ datos
NestJS
    ↑ respuestas JSON
Angular
    ↑ interfaz actualizada
Usuario
```

Cada flecha representa una comunicación en red con su propia latencia. En un escenario de producción real se añadiría Redis para caché y se usarían servicios de pago con mayor disponibilidad.

**Consideraciones de producción real**

- Los servicios gratuitos son suficientes para preproducción y experimentación, pero no para aplicaciones con usuarios reales.
- La latencia entre los tres servidores es visible (especialmente en Render, que suspende el servicio).
- La base de datos en neon.tech es PostgreSQL estándar compatible con el TypeORM configurado en el backend.
- Escalar cada capa de forma independiente (más réplicas del backend, base de datos más potente, CDN para el frontend) es posible precisamente porque están separadas.

---

## Ejemplo sencillo

Es como un restaurante: la cocina (base de datos), el personal de servicio (backend) y el salón (frontend) funcionan de forma independiente. Si hay que remodelar el salón no es necesario cerrar la cocina. Si la cocina necesita más fogones no afecta al salón. Cada área escala según sus propias necesidades.

---

## Palabras clave y elementos importantes

- **neon.tech** — servicio gratuito de PostgreSQL en la nube; se usa para aprovisionar la base de datos de producción
- **Render** — plataforma de hosting para el backend NestJS; tier gratuito disponible; suspende el servicio tras 8h de inactividad
- **Netlify** — plataforma para servir el frontend Angular como archivos estáticos
- **Separación de capas** — mantener base de datos, backend y frontend en servidores distintos para permitir actualizaciones y escalado independientes
- **Latencia** — tiempo de comunicación entre los servidores; aumenta cuando están en regiones geográficas distintas
- **Tier gratuito** — plan sin coste de cada servicio; sujeto a limitaciones de recursos y disponibilidad
- **Preproducción (staging)** — ambiente que imita producción para detectar problemas antes de que los vean los usuarios reales
- **CI/CD** — integración y despliegue continuo; con Render y GitHub, cada push a `main` redespliega automáticamente el backend

---

## Resumen final

Esta lección es conceptual: explica que el despliegue de TesloShop requiere tres servicios independientes (neon.tech para la base de datos, Render para NestJS, Netlify para Angular) y argumenta por qué es mejor no unificarlos aunque sea técnicamente posible. La separación permite actualizar cada capa de forma independiente, soportar múltiples frontends conectados al mismo API y escalar cada componente según sus necesidades. Las siguientes lecciones implementan paso a paso cada uno de estos despliegues.
