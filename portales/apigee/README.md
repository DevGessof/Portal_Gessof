# Portal de Aprendizaje - Apigee X

Portal educativo interactivo para el curso "Apigee X para Desarrolladores de APIs" con 6 secciones, 60 videos y sistema de progreso persistente.

## 🚀 Características

- ✅ **60 videos** organizados en 6 secciones temáticas
- ✅ **Carruseles horizontales** independientes por sección
- ✅ **Modales de video** con resúmenes didácticos
- ✅ **Sistema de progreso** persistente con localStorage
- ✅ **Glosario categorizado** con búsqueda en tiempo real
- ✅ **Modo oscuro/claro** con persistencia
- ✅ **Material de apoyo** integrado (JSON, ZIP, HTML)
- ✅ **100% offline** (excepto reproducción de videos)
- ✅ **Diseño responsive** (desktop, tablet, móvil)
- ✅ **Arquitectura modular** y escalable

## 📁 Estructura del Proyecto

```
Portal Aprendizaje/
├── index.html                  # Página principal
├── assets/
│   ├── css/
│   │   ├── variables.css       # Variables CSS (colores, fuentes)
│   │   ├── base.css            # Estilos base y reset
│   │   ├── components.css      # Componentes reutilizables
│   │   ├── sections.css        # Estilos por sección
│   │   └── responsive.css      # Media queries
│   └── js/
│       ├── data/
│       │   ├── driveData.js    # Datos de videos (60 videos)
│       │   ├── resumenes.js    # Resúmenes por video
│       │   └── glosario.js     # Glosario categorizado
│       ├── core/
│       │   ├── config.js       # Configuración global
│       │   ├── utils.js        # Funciones utilitarias
│       │   ├── storage.js      # Gestión de localStorage
│       │   ├── modal.js        # Sistema de modales
│       │   ├── progressBar.js  # Barra de progreso
│       │   ├── themeToggle.js  # Modo oscuro/claro
│       │   └── userManager.js  # Gestión de usuario
│       ├── components/
│       │   └── sections.js     # Componentes de secciones
│       └── main.js             # Inicialización
└── Resumen_Seccion/            # Archivos fuente (no usados en runtime)
```

## 🎯 Cómo Usar

### Opción 1: Abrir directamente
1. Navega a la carpeta `Portal Aprendizaje`
2. Haz doble clic en `index.html`
3. El portal se abrirá en tu navegador predeterminado

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
cd "Portal Aprendizaje"
python -m http.server 8000

# Con Node.js
npx http-server -p 8000
```
Luego abre: `http://localhost:8000`

## 📚 Secciones del Curso

1. **Introducción y aprovisionamiento de Apigee X** (6 videos)
2. **Creación y Gestión de Proxies de API** (21 videos)
3. **API Products, Developers y Apps** (6 videos)
4. **Caso de uso seven-days-jobs-v1** (7 videos)
5. **Seguridad en Apigee X** (7 videos)
6. **Monitoreo y logging en Apigee X** (4 videos)

## 🎨 Funcionalidades Principales

### Sistema de Progreso
- Marca videos como vistos con checkbox
- Barra de progreso global en el header
- Persistencia automática en localStorage
- Indicador visual en tarjetas de videos vistos

### Modales de Video
- Reproducción desde Google Drive
- Resumen didáctico por video
- Material de apoyo descargable
- Botón "Marcar como visto"

### Glosario
- 50+ términos categorizados
- Búsqueda en tiempo real
- 9 categorías temáticas
- Acordeones expandibles

### Modo Oscuro/Claro
- Toggle en el header
- Persistencia automática
- Transiciones suaves
- Paleta de colores optimizada

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Variables CSS, Grid, Flexbox
- **JavaScript Vanilla** - Sin frameworks
- **Font Awesome 6** - Iconografía
- **Google Fonts** - Tipografía (Outfit, JetBrains Mono)
- **localStorage** - Persistencia de datos

## 📱 Responsive

El portal es completamente responsive con breakpoints en:
- **Desktop**: > 768px
- **Tablet**: 768px
- **Móvil**: 480px

## 🔧 Personalización

### Cambiar colores
Edita `assets/css/variables.css`:
```css
:root {
  --primary: #4285F4;        /* Color principal */
  --accent-green: #34A853;   /* Color de acento */
  /* ... más variables */
}
```

### Agregar videos
Edita `assets/js/data/driveData.js` y agrega el video a la sección correspondiente.

### Agregar términos al glosario
Edita `assets/js/data/glosario.js` y agrega objetos al array `GLOSARIO`.

## 📝 Notas Importantes

- Los videos se reproducen desde Google Drive (requiere conexión)
- El progreso se guarda por navegador (localStorage)
- Los archivos HTML de material de apoyo se abren en preview
- El portal funciona offline excepto la reproducción de videos

## 🎓 Instructor

**Eduardo Celedonio**
- 6+ años de experiencia con Apigee
- Certificado por Google Cloud
- Especialista en APIs empresariales

## 📄 Licencia

Contenido educativo del curso de Udemy "Apigee X para Desarrolladores de APIs"

---

**Desarrollado con ❤️ para la comunidad de desarrolladores de APIs**
