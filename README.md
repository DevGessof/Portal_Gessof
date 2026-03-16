# Portal Gessof (Portal Corporativo 2025)

![GESSOF Logo](assets/images/GESSOF_logo_transparente.png)

Una plataforma centralizada diseñada para la **gestión de proyectos, tareas** y, fundamentalmente, como un robusto **Centro de Capacitación Técnica**.

## 🚀 Características Principales

*   **Dashboard de Control**: Vista general con contadores estadísticos de proyectos activos, tareas completadas y pendientes.
*   **Gestión Operativa**: Secciones dedicadas a `Proyectos`, `Tareas` y `Equipo`, permitiendo organizar el trabajo de la empresa.
*   **Centro de Capacitación (LMS Interno)**: Portales de aprendizaje incorporados con control de progreso:
    *   **Portal Angular**: 23 secciones de estudio detallado.
    *   **Java Básico y Spring Boot**: Fundamentos y arquitectura de microservicios.
    *   **Apigee X**: Gestión profesional de APIs.
*   **Seguridad**: Autenticación manejada por **Supabase** (Login, registro on-the-fly, gestión de perfiles y cambio seguro de contraseñas desde el perfil de usuario).
*   **Personalización**: Soporte para cambio de tema (Claro / Oscuro) y personalización del perfil de usuario.

## 🛠️ Stack Tecnológico

*   **Frontend**: HTML5, CSS3, JavaScript (ES6 Modules)
*   **Frameworks CSS**: Bootstrap 5
*   **Backend as a Service (BaaS)**: Supabase (Auth, Database, Storage)
*   **Diseño**: Enfoque UI/UX premium con esquemas de cristal (Glassmorphism), micro-animaciones y diseño adaptable (Responsive).

## ⚙️ Cómo Ejecutar Localmente

El proyecto no requiere Node.js para construcción, se puede servir directamente con herramientas estándar.

1.  Clona el repositorio:
    ```bash
    git clone https://github.com/DevGessof/Portal_Gessof.git
    cd Portal_Gessof
    ```

2.  Inicia el servidor local (ejemplo usando Python 3):
    ```bash
    python servidor.py
    ```

3.  Abre tu navegador de preferencia en:
    ```text
    http://localhost:8080
    ```

## 🔒 Variables de Entorno / Supabase

Asegúrate de tener configurado tu proyecto de Supabase. El cliente espera encontrar las credenciales en la configuración de la base de datos o en variables de entorno (revisar `js/supabase-config.js` si es necesario actualizar URLs o keys). Revisar el archivo `config.js` para otros ajustes globales.

## 👥 Colaboración

Por favor sigue los lineamientos del proyecto ubicados en `PROJECT_RULES.md` para mantener la consistencia en el desarrollo y la documentación.
