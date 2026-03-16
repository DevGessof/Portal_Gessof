# PROJECT_RULES_TEMPLATE.md
## [Nombre del Proyecto] - Reglas y Estándares

---

## 1. Filosofía de Desarrollo
- **Enfoque Premium**: UI moderna, Glassmorphism, transiciones suaves y tipografía profesional (Google Fonts).
- **Cero Dependencias Externas Complejas**: No usar frameworks pesados (React/Vue/Angular) a menos que sea estrictamente necesario. Usar **Vanilla JS** modular.
- **Modularidad Estricta**: Separación clara de responsabilidades (HTML estructura, CSS estilo, JS lógica y datos).

---

## 2. Estructura de Archivos Obligatoria

El proyecto debe seguir esta estructura para garantizar mantenibilidad:

```
Proyecto/
├── index.html                    # Único punto de entrada
├── server.py                     # Servidor local simple (evitar file://)
├── assets/
│   ├── css/
│   │   ├── variables.css         # Colores y tokens de diseño
│   │   ├── base.css              # Resets y tipografía
│   │   ├── components.css        # Cards, botones, modales
│   │   ├── sections.css          # Estilos específicos de secciones
│   │   └── responsive.css        # Media queries
│   └── js/
│       ├── data/                 # DATOS ESTÁTICOS (No fetch)
│       │   ├── courseData.js     # Estructura del curso/videos
│       │   ├── summaries.js      # Resúmenes detallados
│       │   └── glossary.js       # Términos y definiciones
│       ├── core/                 # LÓGICA DE NEGOCIO
│       │   ├── config.js         # Configuraciones globales
│       │   ├── utils.js          # Helpers y formateadores
│       │   ├── storage.js        # Gestión de localStorage
│       │   ├── modal.js          # Sistema de ventanas modales
│       │   └── theme.js          # Dark/Light mode
│       ├── components/           # UI RENDERING
│       │   └── renderer.js       # Generador de HTML dinámico
│       └── main.js               # Inicialización (bootstrapper)
```

---

## 3. Manejo de Datos (CRÍTICO)

### 3.1 Sin Fetch Local
Para garantizar funcionamiento sin backend complejo y evitar problemas CORS `file://`:
- **NO usar `fetch()`** para archivos `.json` locales.
- **USAR archivos `.js`** que exporten constantes globales o módulos.

**Ejemplo correcto (`data/courseData.js`):**
```javascript
const COURSE_DATA = [ ... ];
```

### 3.2 Estructura de Resúmenes
Los resúmenes NO deben ser texto plano. Deben ser **bloques estructurados** para una UI rica:
```javascript
{
  tipo: "info|success|warning|process|concept",
  titulo: "Título del Bloque",
  contenido: "Texto explicativo...",
  items: ["Lista 1", "Lista 2"]
}
```

---

## 4. UI/UX Standards

### 4.1 Reproducción de Video
- Usar **Modales** para la reproducción, no incrustar directamente en la lista.
- El modal debe contener: Video, Controles de "Visto", Materiales de Apoyo y Resumen.

### 4.2 Materiales Descargables
- Los materiales deben definirse junto al video.
- **UX Obligatorio**:
  - Enlaces con `target="_blank"` y `rel="noopener noreferrer"`.
  - Nombres de archivo truncados con CSS (`text-overflow: ellipsis`) para no romper el diseño.
  - Iconos distintivos por tipo de archivo (ZIP, PDF, Código).

### 4.3 Navegación y Progreso
- Barra de progreso global persistente.
- Checkboxes visuales en cada item.
- Persistencia automática en `localStorage`.

---

## 5. Servidor de Desarrollo
Aunque el proyecto sea estático, se debe incluir siempre un script `server.py` para levantar un entorno local robusto en un puerto no conflictivo (ej. 8085).

```python
import http.server
import socketserver
import webbrowser

PORT = 8085
Handler = http.server.SimpleHTTPRequestHandler
# ... configuración CORS si es necesaria
```

---

## 6. Reglas de Código (Linting Mental)
1. **HTML Limpio**: El `index.html` solo debe contener la estructura base (`<div id="app">` o secciones vacías). El contenido se inyecta vía JS.
2. **Variables CSS**: TODO color o medida repetida debe ser una variable en `variables.css`.
3. **Nombres en Español**: Si el proyecto es en español, variables y funciones deben ser coherentes (o todo inglés o todo español, preferiblemente inglés para código, español para textos).
