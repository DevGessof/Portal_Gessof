# Lección 02 – Demostración del resultado final

## ¿Qué se aprende en esta lección?
Vista previa de la aplicación terminada. Se recorren todas las funcionalidades que se construirán en la sección para que el alumno sepa exactamente a qué llegar.

## Puntos clave explicados
- El mapa se muestra a pantalla completa con la posibilidad de **inclinar, girar y hacer zoom** con el mouse o el trackpad.
- Controles propios de Mapbox disponibles: **zoom in/out** y **orientar al norte**.
- **Control personalizado de coordenadas:** muestra las coordenadas del punto central del mapa en tiempo real.
- **Control personalizado de zoom:** un slider que sincroniza el zoom del mapa con una señal; si el mapa cambia el zoom (rueda del mouse), el control también se actualiza.
- **Marcadores:** el usuario hace clic en el mapa para añadir marcadores. La lista de marcadores se muestra en una sección aparte; al hacer clic en un marcador de la lista, el mapa navega animadamente a esa ubicación respetando el zoom actual.
- **Diseño responsive:** en dispositivos móviles la UI cambia de disposición; en pantallas grandes se muestra de forma diferente.
- **Reutilización del mapa como componente:** la pantalla de "propiedades" muestra varios mapas simultáneos, cada uno centrado en la ubicación de una propiedad con su marcador correspondiente.

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| Controles nativos Mapbox | Zoom, rotación y orientación al norte, incluidos en la librería |
| Control personalizado de zoom | Slider sincronizado con la señal de zoom del componente |
| Marcadores | Pins colocados por el usuario en el mapa; navegables desde una lista |
| Responsive | Layout diferente en móvil y escritorio usando Tailwind/daisyUI |
| Componente de mapa reutilizable | Se instancia N veces en la misma pantalla, cada uno con su propia configuración |

## Resumen final
La demostración muestra que el resultado final es una aplicación de mapas completa: interactiva, responsive y con el componente de mapa desacoplado para poder reutilizarse. Cada funcionalidad que se ve aquí se construirá paso a paso en las lecciones siguientes.
