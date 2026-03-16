# Autodoc: Catálogo de Componentes de UI

## 1. Visión General del Sistema de Diseño

El portal utiliza un sistema de diseño basado en **Vanilla CSS + Bootstrap 5**, con un enfoque en estética premium, Glassmorphism y temas adaptables (Modo Claro/Oscuro). 

La lógica de componentes no está encapsulada en frameworks como React/Angular a nivel global, sino que se gestiona mediante inyección de HTML en Vanilla JS dentro de `index.html`.

## 2. Fichas de Componentes Principales

### 2.1. Modal Global (Global Video Modal)
- **Ubicación**: `index.html` (línea 841)
- **Props/Params**: `url` (String), `title` (String), `summary` (HTML/String)
- **Descripción**: Overlay de pantalla completa con desenfoque (backdrop-filter) que inyecta un iframe para reproducir videos de recursos (ej. Drive) manteniendo al usuario dentro de la app sin bloquear `fullscreen`.

### 2.2. Tarjetas Estadísticas (Stat Cards)
- **Ubicación**: Función dinámica en JS + Clases CSS `.stat-card`
- **Variantes**: Primary (Azul), Success (Verde), Warning (Naranja), Danger (Rojo)
- **Comportamiento**: Presentan contadores animados (0 al valor real). Se usan en el Dashboard principal.

### 2.3. Modal Modificable (Modal-Custom)
- **Ubicación**: Estructuras genéricas en `.modal-custom` y `.modal-box`
- **Uso**: Heredado por todos los modales de la app (Nuevo Proyecto, Nueva Tarea, Cambiar Contraseña).
- **Interactividad**: Soporte para cierre mediante evento clic en backdrop (`e.target === this`) y tecla `Escape`.

### 2.4. Tarjetas de Curso (Course Cards)
- **Ubicación**: `index.html` `section-training`
- **Comportamiento**: Tarjetas clickeables con efecto translacional (`translateY(-4px)`). 
- **Sub-componente**: Barra de progreso animada dependiente de datos de Supabase.

## 3. Guía de Reuso

Para crear un nuevo Modal, copiar la estructura anidada de `<div class="modal-custom">` al final del `body` en `index.html` y controlar su visibilidad asignando la clase `active` vía `openModal('id')` y `closeModal('id')`.
