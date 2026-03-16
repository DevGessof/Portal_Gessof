# Autodoc: Extracción de Reglas de Negocio

## 1. Reglas Críticas

El portal se guía por políticas de validación inyectadas directo en el frontend que fungen como reglas obligatorias de negocio, previo el envío a la Base de Datos o API.

| Nro. | Regla Operativa (Negocio) | Evidencia Transformada del Backend/Code Snippet |
| :--- | :--- | :--- |
| **B1** | Cambio Contraseña | Se fuerza al usuario a no registrarse ni cambiar perfiles con contraseñas de pobre longitud (Menores a 6) para aligerar rechazos del motor Auth. Las contraseñas en los campos de "Confirmar" deben coincidir sintácticamente. |
| **B2** | Barra de Salud de Perfil | Un Password no es "Fuerte" hasta que integre no solo longitud, sino minúsculas, mayúsculas y caracteres de escape, lo que previene accesos inseguros al nivel Administrativo. |
| **B3** | Carga Iframes (Cursos) | Evitar el rastreo entre portales de aprendizaje mediante Referrer-Policy en Headers (Políticas anti-click tracking). |
| **B4** | Autenticación Estricta | Todo servicio de Supabase (CRUD Proyectos/Cursos) responderá un Row Access Denied si el usuario carece de JWT emitido. No existen vistas públicas mas que el login. |
| **B5** | Prioridad Tareas | Kanban: Solo "Alta", "Media", "Baja" limitando la saturación de etiquetas manuales. |

## 2. Políticas Específicas: Modales de UI

El modelo de interacción es modal-centric, lo que refuerza la filosofía arquitectónica: el usuario no debe abandonar el contexto ("Pantalla Dashboard") durante su tarea en el formulario de Creación ni recuperar Claves. La experiencia se dictamina interactiva e inmediata como Regla Visual Superior.
