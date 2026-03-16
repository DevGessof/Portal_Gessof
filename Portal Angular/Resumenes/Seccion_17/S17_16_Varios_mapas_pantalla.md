# Resumen de Lección - Sección 17, Clase 16

---

## 1. Titulo de la leccion

**Varios mapas en pantalla**

---

## 2. Que se aprende en esta leccion

Se aprende a mostrar multiples instancias de un mapa dentro de tarjetas (cards), usando una interfaz propia para las propiedades, el componente Card con badge de daisyUI, un grid responsivo de Tailwind y la creacion de un nuevo componente reutilizable llamado `MiniMapComponent`. Al final se deja como tarea implementar el mapa dentro de ese componente.

---

## 3. Puntos clave explicados

- **Pagina `HousesPage`:** se crea la estructura con un `h2` de titulo, un `h3` con el numero de propiedades disponibles y una seccion de grid.
- **Grid responsivo:** se usa `grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2` para que en pantallas grandes se muestren hasta 3 tarjetas por fila.
- **Componente Card de daisyUI:** se copia el HTML del ejemplo "Card with badge" de la documentacion de daisyUI y se adapta.
- **Interfaz `HouseProperty`:** se define con `id`, `name`, `description`, `lngLat` (propia, no la de Mapbox) y `tags`. Las propiedades se declaran como arreglo fijo dentro del componente en lugar de venir de un servicio, para enfocarse en el mapa.
- **Iteracion con `@for`:** se recorre la senal de casas con `@for (house of houses; track house.id)` y opcionalmente se toma el indice con `let i = $index`.
- **Badge condicional:** se muestra la etiqueta "New" solo para el segundo elemento (`@if i === 1`) como ejemplo de uso del indice.
- **Tags con `@for` anidado:** los tags de cada propiedad se iteran en un segundo `@for` dentro de la tarjeta.
- **Componente `MiniMapComponent`:** se crea en `maps/components/mini-map` usando Angular Schematics. Este componente va a mostrar el mapa dentro de cada tarjeta, reemplazando la imagen de ejemplo.
- **Tarea:** el instructor pide que el estudiante implemente el mapa dentro de `MiniMapComponent` usando lo aprendido, con `width: 100%` y `height: 260px`. En la siguiente clase se resuelve la tarea y se parametriza el componente.

---

## 4. Ejemplo sencillo

Estructura de la interfaz:

```typescript
interface HouseProperty {
  id: string;
  name: string;
  description: string;
  lngLat: { lng: number; lat: number };
  tags: string[];
}
```

Uso en el HTML:

```html
@for (house of houses; track house.id; let i = $index) {
  <app-mini-map />
  <h3>{{ house.name }}</h3>
  <p>{{ house.description }}</p>
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `grid-cols-1 sm:grid-cols-2 xl:grid-cols-3` | Clases de Tailwind para un grid que cambia de columnas segun el tamano de pantalla |
| `@for ... let i = $index` | Permite acceder al indice numerico del elemento actual en la iteracion |
| Interfaz `HouseProperty` | Define la forma de cada propiedad/casa con sus campos personalizados |
| `uuid` | Se importa nuevamente para generar IDs unicos a cada propiedad |
| `MiniMapComponent` | Componente reutilizable creado con Angular Schematics para encapsular el mapa de cada tarjeta |
| `app-mini-map` | Selector del nuevo componente que se usa dentro de la tarjeta |
| `allowedCommonJsDependencies` | (Se menciona implicito) El componente de mapa requiere la misma configuracion de importacion de Mapbox |

---

## 6. Resumen final en pocas palabras

Se construye una pagina con multiples tarjetas de propiedades en un grid responsivo. Cada tarjeta usa datos de una interfaz propia y muestra tags con un segundo `@for`. El componente `MiniMapComponent` se crea para encapsular el mapa de cada tarjeta, separando responsabilidades y haciendo el componente reutilizable para cualquier tipo de entidad, no solo casas.
