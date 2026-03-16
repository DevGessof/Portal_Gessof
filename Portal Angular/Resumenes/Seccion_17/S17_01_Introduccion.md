# Lección 01 – Introducción a la Sección 17

## ¿Qué se aprende en esta lección?
Se presenta la Sección 17 del curso, enfocada en la integración de **mapas interactivos** con Angular usando **Mapbox GL JS**. Se explica por qué se usa Mapbox en lugar de Google Maps y se enumera todo lo que se construirá.

## Puntos clave explicados
- El objetivo principal es aprender a integrar **librerías de terceros** en Angular, tomando Mapbox como caso práctico.
- Se construirán mapas a pantalla completa, controles personalizados, marcadores interactivos y el componente de mapa como pieza **reutilizable** (varios mapas en la misma pantalla).
- La aplicación se desplegará a producción, lo que implica trabajar con **variables de entorno** y aprender a generarlas con un script.
- El diseño usará **Tailwind CSS** + **daisyUI** y será completamente **responsive** (se adapta a móvil y escritorio).
- Se usa **Mapbox** y no Google Maps porque: los mapas son más atractivos visualmente, tiene APIs muy buenas (incluyendo mapas 3D), el portal de desarrolladores es más amigable y **no exige datos de facturación** para empezar a usarlo.
- El API de Mapbox y el de Google Maps son conceptualmente similares: aprender uno facilita aprender el otro.

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| Mapbox GL JS | Librería JavaScript para mostrar mapas vectoriales interactivos |
| Variables de entorno | Archivos `.env` y `environment.ts` para separar llaves por entorno |
| Tailwind CSS + daisyUI | Sistema de utilidades CSS y biblioteca de componentes visuales |
| Responsive | Diseño adaptable a distintas resoluciones de pantalla |
| Componente reutilizable | El mapa se empaqueta en un componente que se puede usar varias veces |

## Resumen final
La Sección 17 lleva el curso más allá de los conceptos básicos de Angular: integra una librería de mapas real, trabaja con variables de entorno de forma segura, construye un diseño responsive y despliega la aplicación a producción. Mapbox es el proveedor elegido por su facilidad de uso sin datos de facturación.
