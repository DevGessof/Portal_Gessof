# Demostración

## ¿Qué se aprende?

Esta lección muestra el resultado final de la sección en funcionamiento. El instructor navega por la aplicación terminada para que los estudiantes vean concretamente qué van a construir: un sistema de login con sesión persistente, un guard que impide entrar al login si ya hay sesión activa y otro que permite salir cerrando sesión.

---

## Puntos clave

**Login funcional con nombre de usuario en el navbar**

Al ingresar el correo `test4@google.com` y la contraseña `Abc123`, la aplicación autentica al usuario y muestra su nombre ("Fernando Herrera") en el navbar junto a un botón "Salir". Esto indica que la sesión está activa y la aplicación conoce al usuario.

**La sesión persiste al recargar el navegador**

Tras iniciar sesión, si el usuario recarga la página, la sesión sigue activa. La información no desaparece porque se almacena en algún mecanismo de persistencia (localStorage o similar) y se verifica automáticamente al cargar la aplicación mediante el JWT guardado.

**Guard que bloquea el acceso al login si ya hay sesión**

Si el usuario ya está autenticado e intenta navegar manualmente a `/auth/login`, el guard lo redirige automáticamente de vuelta a la aplicación. Esto evita una situación confusa donde el usuario vería la pantalla de login pensando que su sesión se cerró cuando en realidad no es así.

**Guard que permite el acceso al login cuando no hay sesión**

Si el usuario cierra sesión (botón "Salir") y luego intenta entrar a `/auth/login`, el guard lo deja pasar porque ya no hay sesión activa.

**Interceptores y Guards como funciones en Angular moderno**

El instructor menciona que tanto los interceptores como los guards se trabajan como funciones simples en Angular moderno. Esto eliminó la necesidad de crear clases con interfaces específicas, simplificando considerablemente su configuración.

---

## Ejemplo sencillo

El guard funciona como la puerta de una empresa que tiene un torniquete. Si ya llevas tu tarjeta de acceso activada (sesión iniciada), el sistema no te obliga a pasar por recepción a registrarte de nuevo (te bloquea el acceso al login). Si dejas la tarjeta en la empresa (cierras sesión), el torniquete sí te permite pasar por recepción para identificarte de nuevo.

---

## Palabras clave y elementos importantes

- Login — pantalla de autenticación con formulario de correo y contraseña
- Sesión persistente — el estado de autenticación sobrevive a la recarga de la página gracias al JWT almacenado localmente
- Guard de autenticación — protege rutas que requieren sesión iniciada; redirige al login si no hay sesión
- Guard de no autenticación — protege rutas como el login y el registro; redirige al home si ya hay sesión
- Navbar — barra de navegación que muestra el nombre del usuario autenticado y el botón "Salir"
- Botón "Salir" — cierra sesión del usuario y limpia el estado de autenticación
- Función de guard — en Angular moderno, los guards son funciones simples, no clases

---

## Resumen final

La demostración muestra tres comportamientos clave del sistema de autenticación terminado: el login funciona con JWT y muestra el nombre del usuario en el navbar; la sesión persiste tras recargar el navegador; y los guards impiden que un usuario autenticado acceda al login (redirigiéndolo al home) mientras que sí permiten el acceso cuando la sesión está cerrada. Todo esto se implementará usando funciones de Angular moderno tanto para interceptores como para guards.
