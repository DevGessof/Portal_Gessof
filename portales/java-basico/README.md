# Portal de Aprendizaje Java Básico

Portal educativo modular e interactivo para aprender Java desde cero.

## 🚀 Inicio Rápido

1. **Abrir el portal**: Simplemente abre `index.html` en tu navegador web
2. **No requiere servidor**: Funciona completamente offline con `file://`

## 📂 Estructura del Proyecto

```
Portal Curso Java Basico/
├── index.html                 # Página principal (NUEVO - Modular)
├── index_backup.html          # Respaldo del HTML original
│
├── assets/
│   ├── css/
│   │   ├── main.css          # Estilos base, variables, layout
│   │   └── components.css    # Componentes (cards, carruseles, modales)
│   │
│   └── js/
│       ├── data/
│       │   └── data.js       # Datos del curso (CONFIG, videos, glosario)
│       ├── core/
│       │   ├── utils.js      # Utilidades (URLs Drive, helpers)
│       │   └── state.js      # Gestión de estado (localStorage)
│       └── components/
│           └── ui-components.js  # Renderizado de UI
│
├── Resumenes/                 # Resúmenes didácticos por sección (.md)
└── Drive.csv                  # Datos de Google Drive
```

## ✨ Características

✅ **Arquitectura Modular**: Código organizado y mantenible  
✅ **Persistencia Local**: Progreso guardado en `localStorage`  
✅ **Tema Claro/Oscuro**: Cambia entre temas con persistencia  
✅ **Carruseles por Sección**: 12 secciones con navegación suave  
✅ **Glosario Interactivo**: Búsqueda en tiempo real  
✅ **Videos de Google Drive**: Integración directa con Drive  
✅ **Responsive**: Adaptado para móviles y tablets  
✅ **Sin Dependencias Externas**: Funciona 100% offline  

## 🎯 Secciones del Portal

### 1. **Inicio**
- Bienvenida al curso
- Objetivos de aprendizaje
- Estadísticas del curso (39 videos, 12 secciones, 4.5h)

### 2. **Herramientas**
- Java JDK 11+ (OpenJDK)
- Apache NetBeans IDE
- Links oficiales de descarga

### 3. **Curso**
- 12 secciones temáticas
- 39 videos con carruseles independientes
- Sistema de progreso (marcar como visto)
- Videos favoritos (marcar con estrella)
- Resúmenes didácticos por video

### 4. **Glosario**
- 40+ términos de Java
- Búsqueda instantánea
- Organizado alfabéticamente

## 🔧 Funcionalidades Implementadas

### Gestión de Progreso
- **Marcar videos como vistos**: Click en el ícono de check
- **Videos favoritos**: Click en la estrella
- **Barra de progreso global**: Se actualiza automáticamente
- **Persistencia**: Todo se guarda en `localStorage`

### Navegación
- **Tabs principales**: Inicio, Herramientas, Curso, Glosario
- **Carruseles**: Navegación horizontal con flechas
- **Modales**: Videos y resúmenes en ventanas emergentes

### Personalización
- **Cambiar usuario**: Click en el ícono de usuario
- **Tema claro/oscuro**: Click en el ícono de luna/sol
- **Preferencias guardadas**: Se mantienen entre sesiones

## 📋 Contenido del Curso

### Sección 1: Descarga e Instalación de recursos
- Introducción a Java
- Instalación del JDK
- Instalación de NetBeans
- Personalización del IDE

### Sección 2: Definición de Proyecto
- Hola Mundo
- Comentarios
- Imprimir en pantalla
- Gestión de proyectos

### Sección 3: Variables
- Tipos de datos
- Declaración de variables

### Sección 4: Operadores
- Aritméticos
- Comparación
- Lógicos
- Incremento/Decremento
- Concatenación

### Sección 5: Entrada de datos
- Scanner
- Captura por teclado

### Sección 6: Personalizar NetBeans
- Temas visuales

### Sección 7: Conversión de tipos
- Casting
- Parse de datos

### Sección 8: Estructura Condicional IF
- if, else, else if

### Sección 9: Estructura Condicional SWITCH
- switch-case

### Sección 10: Estructuras Cíclicas
- while
- do-while
- for

### Sección 11: Vectores y Matrices
- Arrays unidimensionales
- Arrays bidimensionales

### Sección 12: Métodos y Clases
- Definición de métodos
- Programación orientada a objetos
- Clases y objetos

## 🎨 Personalización

### Cambiar Colores
Edita `assets/css/main.css` (líneas 15-45):

```css
:root {
    --primary: #0099d8;        /* Color principal */
    --accent-green: #10b981;   /* Color de "visto" */
    --accent-orange: #f59e0b;  /* Color de alertas */
}
```

### Agregar Nuevas Secciones
Edita `assets/js/data/data.js`:

```javascript
CONFIG.SECCIONES.push({
    id: 13,
    nombre: "Nueva Sección",
    descripcion: "Descripción de la sección",
    icono: "fas fa-icon",
    color: "#hexcolor"
});
```

## 🐛 Solución de Problemas

### El portal no carga
- Verifica que todos los archivos estén en las rutas correctas
- Abre la consola del navegador (F12) para ver errores

### Los videos no se reproducen
- Verifica la conexión a internet (los videos están en Google Drive)
- Revisa que los IDs de Drive en `data.js` sean correctos

### El progreso no se guarda
- Verifica que el navegador permita `localStorage`
- Algunos navegadores bloquean `localStorage` en modo `file://`
- Solución: Usa un servidor local simple (ej: `python -m http.server`)

### El tema no cambia
- Limpia el `localStorage` del navegador
- Recarga la página (Ctrl+F5)

## 📝 Notas Técnicas

- **Sin servidor HTTP**: Funciona con protocolo `file://`
- **Sin fetch()**: Todos los datos están embebidos en JavaScript
- **Escalable**: Fácil agregar nuevos videos y secciones
- **Mantenible**: Cada módulo tiene una responsabilidad única
- **Estándares web**: HTML5, CSS3, ES6+

## 🔄 Próximas Mejoras

- [ ] Cargar resúmenes completos desde archivos `.md`
- [ ] Agregar materiales de apoyo por video
- [ ] Sistema de búsqueda global
- [ ] Exportar/Importar progreso
- [ ] Modo de presentación

## 📄 Licencia

Este portal es un proyecto educativo para uso personal.

---

**Desarrollado con ❤️ para el aprendizaje de Java**
