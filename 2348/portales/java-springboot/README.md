# Portal de Aprendizaje - Java Spring Boot Microservicios

Portal educativo modular para el curso de Microservicios y APIs REST con Spring Boot, OAuth2 y Docker.

## 📁 Estructura del Proyecto

```
Portal Aprendizaje/
│
├── index.html                      # Página principal (esqueleto modular)
├── index_backup_original.html      # Backup del HTML original
│
├── css/                            # Estilos modulares
│   ├── main.css                    # Estilos base y variables CSS
│   ├── dark-mode.css               # Tema oscuro
│   └── components.css              # Estilos de componentes (tarjetas, modales, carruseles)
│
├── js/                             # Lógica modular de la aplicación
│   ├── config.js                   # Configuración global y constantes
│   ├── data-loader.js              # Carga y procesamiento de Drive.csv
│   ├── ui-builder.js               # Construcción dinámica de la interfaz
│   ├── player.js                   # Reproductor de videos (YouTube y Drive)
│   ├── progress.js                 # Gestión de progreso y videos importantes
│   └── app.js                      # Orquestador principal de la aplicación
│
├── data/                           # Datos del curso
│   ├── Drive.csv                   # Fuente de datos principal
│   └── summaries/                  # Resúmenes generados por IA (JSON)
│       └── ejemplo_resumen.json    # Ejemplo de formato de resumen
│
└── [Carpetas de Secciones 1-13]   # Contenido del curso original
```

## 🚀 Características

### Fase 1 (Actual)
- ✅ **Arquitectura Modular**: Separación de estilos, lógica y datos
- ✅ **Carga Dinámica**: Procesamiento automático de `Drive.csv`
- ✅ **Carruseles por Sección**: Un carrusel independiente para cada una de las 13 secciones
- ✅ **Reproductor Universal**: Soporte para videos de YouTube y Google Drive
- ✅ **Sistema de Progreso**: Seguimiento de videos vistos con localStorage
- ✅ **Videos Importantes**: Marcado de clases clave con sistema de favoritos
- ✅ **Modo Oscuro**: Tema claro/oscuro persistente
- ✅ **Resúmenes Didácticos**: Carga de resúmenes desde archivos JSON

### Fase 2 (Pendiente)
- ⏳ Generación automática de resúmenes desde archivos `.srt`
- ⏳ Ejercicios prácticos por sección (2-13)
- ⏳ Proyectos descargables en formato ZIP

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Variables CSS, Grid, Flexbox, Animaciones
- **JavaScript (ES6+)**: Módulos, Async/Await, Fetch API
- **Font Awesome**: Iconografía
- **Google Fonts**: Tipografía (Outfit, JetBrains Mono)

## 📊 Formato de Datos

### Drive.csv
```csv
Seccion;Nombre Seccion;Nombre_Archivo;ID_Archivo;Tipo
1;Antes de empezar (Las bases);1. Introduccion.mp4;abc123xyz;video
1;Antes de empezar (Las bases);1. Introduccion.srt;def456uvw;subtitle
```

### Resumen JSON
```json
{
    "titulo": "Título del resumen",
    "resumen": "Descripción general...",
    "puntosClave": ["Punto 1", "Punto 2"],
    "conceptos": [
        {
            "nombre": "Concepto",
            "descripcion": "Explicación"
        }
    ],
    "codigoEjemplo": "// Código de ejemplo"
}
```

## 🎯 Cómo Usar

### Opción 1: Servidor Local (Recomendado)

Para evitar problemas de CORS al cargar el CSV, usa el servidor incluido:

```bash
# Desde la carpeta Portal Aprendizaje
python server.py
```

Luego abre tu navegador en: **http://localhost:8000/index.html**

### Opción 2: Servidor HTTP de Python

```bash
python -m http.server 8000
```

### Navegación en el Portal

1. **Navegar por secciones**: Usa las pestañas superiores (Inicio, Herramientas, Curso)
2. **Ver videos**: Haz clic en cualquier tarjeta de video para reproducirlo
3. **Marcar progreso**: Usa el checkbox en la esquina superior derecha de cada video
4. **Videos importantes**: Haz clic en la estrella (⭐) para marcar clases clave
5. **Cambiar tema**: Usa el botón de luna/sol en el header
6. **Ver resúmenes**: Los resúmenes se cargan automáticamente al abrir un video

## 📊 Estadísticas del Proyecto

- ✅ **125 resúmenes generados** automáticamente desde archivos SRT
- ✅ **13 secciones** del curso cargadas dinámicamente
- ✅ **6 módulos JavaScript** modulares y reutilizables
- ✅ **3 archivos CSS** organizados por responsabilidad

## 📝 Reglas del Proyecto

Este proyecto sigue estrictamente las reglas definidas en `PROJECT_RULES.md`:

- ✅ Todo el contenido está 100% en español
- ✅ Lenguaje claro y didáctico
- ✅ Arquitectura modular y escalable
- ✅ Un carrusel por sección (no global)
- ✅ Resúmenes basados exclusivamente en archivos `.srt`
- ✅ Material de apoyo accesible y organizado

## 🔄 Próximos Pasos (Fase 1)

1. **Procesar archivos SRT**: Crear script para generar resúmenes automáticamente
2. **Poblar carpeta summaries**: Generar JSON para cada video del curso
3. **Verificación completa**: Probar carga de las 13 secciones
4. **Optimización**: Mejorar tiempos de carga y rendimiento

## 📞 Soporte

Para dudas o problemas, consulta la documentación en `PROJECT_RULES.md` o revisa el plan de implementación en la carpeta de artefactos.

---

**GESSOF Academy** - Portal de Aprendizaje Profesional
