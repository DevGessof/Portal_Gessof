# Autodoc: Glosario Modular del Portal

Este glosario define un vocabulario estandarizado para que todos los usuarios y desarrolladores se refieran de igual manera a las entidades operativas de la plataforma.

| Concepto Técnico | Definición Humana Operacional | Uso en el Sistema |
| :--- | :--- | :--- |
| **BaaS** | *Backend as a Service*, o "Infraestructura Como Servicio Web". | Refiere a Supabase. Indica que el equipo no mantiene servidores SQL, sino que usa endpoints para guardar datos. |
| **DaaS Base de Datos** | Área donde residen `projects`, `tasks`, y los perfiles de los empleados. | Sistema PostgreSQL subyacente que gestiona Supabase. |
| **Dashboard** | Pantalla de inicio de la app. | Zona analítica donde los directivos y PMs observan el número global de iniciativas activas. |
| **Entry Point (Modal)** | El punto lógico donde el usuario pide hacer un cambio de valor. | Como en "El modal de Nueva Tarea o el diálogo de contraseña segura". |
| **Iframe / Portal View** | Forma de encapsular y mostrar otras apps directamente dentro del propio portal, sin enviar al empleado a otra URL. | Se usa agresivamente en el **Centro de Capacitación** para mostrar videos o diapositivas. |
| **Progreso (Training)** | Es la medida calculada del avance en una ruta académica como "Apigee" o "Angular". | Suele reflejarse en barras de carga y resúmenes de % en el Frontend de la vista `portales/`. |
| **Glassmorphism** | Estilo visual con efectos de vidrio borroso. | Define cómo se logran los tonos del Modo Claro y Oscuro del sistema, y los *Backdrops* modales. |
