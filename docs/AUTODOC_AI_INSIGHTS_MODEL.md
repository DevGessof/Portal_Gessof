# Autodoc: Insights Model y Lógica Estratégica

*(Nota: En su fase actual, este portal no contiene motores formales de LLMs u orquestación in-app de Inteligencia Artificial para el usuario final). Sin embargo, analizamos los "Insights" o decisiones de negocio algorítmicas presentes.*

## 1. Motores de Decisión Algorítmica

El proyecto implementa "Insights" visuales mediante el cálculo reactivo de estado y la visualización de métricas críticas pre-procesadas por el sistema.

| Módulo | Fuente de Datos | Insight/Transformación Generada |
| :--- | :--- | :--- |
| **Termómetro de Salud de Contraseña** | Input del Modal de Perfil | Calcula en tiempo real (regex) 5 niveles probabilísticos de robustez de contraseña. |
| **Dashboard de Salud Operativa** | Tabla `projects` y `tasks` | Agrega un balanceador de carga visual indicando "Alta / Media / Baja" prioridad a la espera del usuario. |
| **Tracking de Finalización Cursos** | `course_progress` vía Supabase | Detecta % de lecciones marcadas como vistas (`watched_videos / total_videos`) para generar resúmenes visuales para el usuario. |

## 2. Diagrama de Decisión: Resumen Operativo

```mermaid
graph TD
    style IN color:#000
    style D1 color:#000
    style D2 color:#000
    style OUT color:#000
    
    IN[Entrada: Visita al Dashboard] --> D1{¿Hay tareas pendientes prioritarias?}
    D1 -- Sí --> OUT[Notificación Destacada: 'Alta Prioridad en Rojo']
    D1 -- No --> D2{¿Progreso de Curso Activo?}
    D2 -- Sí --> OUT
