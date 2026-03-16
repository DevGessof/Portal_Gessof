# Introducción

## ¿Qué se aprende?

Esta lección presenta los tres temas principales de la Sección 20: autenticación con JSON Web Token, interceptores HTTP e interceptores de rutas (Guards). Se explica la diferencia entre autenticación y autorización, y por qué se necesita cada mecanismo.

---

## Puntos clave

**Autenticación vs. autorización**

Son dos conceptos distintos que se aplican en fases diferentes:

- Autenticación: saber quién es el usuario. Verifica la identidad, es decir, confirma que alguien es quien dice ser (proceso de login).
- Autorización: saber qué puede hacer ese usuario. Determina si tiene permiso para acceder a un recurso específico (por ejemplo, el panel administrativo).

Esta sección cubre únicamente la autenticación. La autorización se implementará en la sección siguiente, cuando se construya el panel administrativo.

**JSON Web Token (JWT)**

La autenticación se basa en JWT. Cuando el usuario inicia sesión correctamente, el servidor devuelve un token. Ese token debe enviarse en las peticiones HTTP posteriores que requieran identificar al usuario. No todas las peticiones necesitan el token, solo las protegidas.

**El problema de enviar el token manualmente**

Si hay muchas peticiones HTTP que requieren el token, habría que inyectar el `AuthService`, obtener el token y añadirlo en cada petición. Eso genera código repetido en muchos lugares y es difícil de mantener.

**Solución: interceptores HTTP**

Un interceptor es una pieza de código que se coloca en el "camino" de todas las peticiones HTTP salientes. Antes de que la petición llegue al servidor, el interceptor puede modificarla, por ejemplo añadiendo el token de autorización en el encabezado. Así el token se gestiona en un solo lugar y no hay que repetir ese código en cada servicio.

Otros usos posibles de los interceptores:
- Registrar peticiones que devuelven error para análisis o debugging.
- Detectar intentos de acceso a rutas sin autenticación.
- Implementar caché centralizado para todas las respuestas HTTP.

**Guards: protección de rutas**

Los Guards actúan como guardias de seguridad en las rutas de la aplicación. Antes de que Angular cargue una ruta, el guard evalúa una condición y decide si permite o bloquea el acceso. Esto sirve, por ejemplo, para redirigir al login a usuarios que intentan entrar a páginas protegidas, o para evitar que usuarios ya autenticados vuelvan a la pantalla de login.

En versiones recientes de Angular los guards se implementan como funciones simples, lo que simplificó mucho su configuración respecto a versiones anteriores.

---

## Ejemplo sencillo

Imagina un club. La autenticación es el proceso de mostrar tu carnet en la puerta para demostrar que eres socio. La autorización es el sistema que dentro del club decide si puedes entrar a la sala VIP o solo a las áreas comunes. El interceptor sería como un empleado que revisa que tu carnet está adjunto a cada solicitud antes de pasarla al encargado, sin que tú tengas que recordar presentarlo cada vez. El guard es el portero que directamente no te deja entrar si no tienes carnet.

---

## Palabras clave y elementos importantes

- Autenticación — proceso de verificar la identidad de un usuario (login)
- Autorización — proceso de verificar si un usuario autenticado tiene permiso para acceder a un recurso
- JSON Web Token (JWT) — formato estándar de token que el servidor entrega al autenticar al usuario y que el cliente envía en peticiones posteriores
- Interceptor HTTP — función que intercepta todas las peticiones HTTP salientes para modificarlas antes de enviarlas al servidor
- Guard — función que protege una ruta evaluando una condición antes de permitir o bloquear la navegación
- `AuthService` — servicio que gestionará el estado de autenticación y el token
- DRY — principio "Don't Repeat Yourself" que motiva el uso del interceptor para centralizar el manejo del token

---

## Resumen final

La Sección 20 se enfoca en autenticación para TesloShop. Se diferencia autenticación (saber quién es el usuario) de autorización (qué puede hacer), siendo esta última tema de la sección siguiente. Se implementará login con JWT, un interceptor HTTP que añada el token automáticamente a las peticiones que lo requieran y Guards que protejan rutas según el estado de sesión del usuario. En Angular moderno los guards son funciones simples, lo que simplifica su implementación.
