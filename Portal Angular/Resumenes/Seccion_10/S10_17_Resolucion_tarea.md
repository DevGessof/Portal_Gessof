# Seccion 10 - Leccion 17: Resolucion de la Tarea

---

## 1. Titulo de la leccion

**Pagina de detalle con Stats de daisyUI, computed para el anio actual, region/subRegion en la interfaz y efecto diff con bandera**

---

## 2. Que se aprende en esta leccion

Se construye la pagina de detalle del pais usando el componente `Stats` de daisyUI, se usa `computed()` para obtener el anio actual, se agregan `region` y `subRegion` a la interfaz `Country` y al mapper, y se aplica un efecto visual con el componente `Diff` de daisyUI para mostrar la bandera.

---

## 3. Puntos clave explicados

- **Stats de daisyUI:** Componente de estadisticas con casillas visuales. Se usa para mostrar poblacion, nombre del pais, region y subregion de forma elegante. Se copia el HTML del ejemplo de la documentacion de daisyUI y se personaliza.
- **`computed()` para el anio actual:** No se puede usar `new Date()` directamente en una expresion del template HTML. Se crea una propiedad computada en el componente: `currentYear = computed(() => new Date().getFullYear())`. Alternativa: getter de TypeScript (no es una senal; se accede sin parentesis en el template).
- **Extender la interfaz `Country`:** Se agregan `region: string` y `subRegion: string` a `country.interface.ts`. Solo requiere dos cambios: la interfaz y el mapper.
- **Actualizar `CountryMapper`:** Se agregan `region: restCountry.region` y `subRegion: restCountry.subregion` en `mapRestCountryToCountry`. Automaticamente disponible en toda la app sin tocar ningun componente.
- **Componente `Diff` de daisyUI:** Muestra dos imagenes superpuestas con un slider para comparar. Se usa para mostrar la bandera con un efecto de desenfoque (`blur`) y reduccion de brillo (`brightness-75`) en la imagen de fondo, y la bandera normal en primer plano.
- **Misma imagen en ambas capas:** La imagen de primer plano es `country().flagSvg` normal. La imagen de fondo es la misma pero con clases `blur opacity-75` para crear el efecto de profundidad.
- **`country().flag`:** El emoji de la bandera se muestra como un `Stat` adicional.
- **Proximo paso (seccion siguiente, opcional):** Preservar el estado de busqueda al navegar de vuelta, implementar cache de peticiones HTTP para no repetir llamadas, y completar la busqueda por region.

---

## 4. Ejemplo sencillo

```typescript
// country.interface.ts - campos agregados
export interface Country {
  cca2:       string;
  flag:       string;
  flagSvg:    string;
  name:       string;
  capital:    string;
  population: number;
  region:     string;   // nuevo
  subRegion:  string;   // nuevo
}
```

```typescript
// country.mapper.ts - campos agregados
static mapRestCountryToCountry(restCountry: RESTCountry): Country {
  return {
    ...
    region:    restCountry.region,
    subRegion: restCountry.subregion,
  };
}
```

```typescript
// country-information.component.ts
currentYear = computed(() => new Date().getFullYear());
// Alternativa sin senal:
// get currentYear() { return new Date().getFullYear(); }
```

```html
<!-- country-information.component.html (simplificado) -->
<div class="stats shadow">
  <div class="stat">
    <div class="stat-title">Poblacion</div>
    <div class="stat-value">{{ country().population | number }}</div>
    <div class="stat-desc">Desde {{ currentYear() }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Nombre</div>
    <div class="stat-value">{{ country().name }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Sub Region</div>
    <div class="stat-value">{{ country().subRegion }}</div>
  </div>
  <div class="stat">
    <div class="stat-title">Region</div>
    <div class="stat-value">{{ country().region }}</div>
  </div>
</div>

<!-- Efecto diff con la bandera -->
<div class="diff aspect-video">
  <div class="diff-item-1">
    <img [alt]="country().name" [src]="country().flagSvg" />
  </div>
  <div class="diff-item-2">
    <img [alt]="country().name" [src]="country().flagSvg" class="blur brightness-75" />
  </div>
</div>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `Stats` de daisyUI | Componente de estadisticas con casillas visuales para mostrar datos numericos |
| `Diff` de daisyUI | Componente que superpone dos imagenes con slider; se usa para efecto visual con la bandera |
| `computed(() => new Date().getFullYear())` | Senal computada para el anio actual; necesaria porque `new Date()` no va directo en el template |
| Getter de TypeScript | Alternativa a `computed`; se accede sin parentesis, no es reactivo |
| Extender interfaz + mapper | Agregar un campo nuevo solo requiere cambiar la interfaz y el mapper; el resto de la app lo recibe automaticamente |
| `blur brightness-75` | Clases Tailwind para desenfocar y oscurecer la imagen de fondo en el efecto diff |
| Seccion siguiente (opcional) | Preservar estado al navegar, cache HTTP, busqueda por region |

---

## 6. Resumen final en pocas palabras

La tarea se resuelve con el componente `Stats` de daisyUI para los datos numericos y `Diff` para el efecto visual de la bandera. Para el anio actual se usa `computed()` porque no se puede invocar `new Date()` directamente en el template. Agregar `region` y `subRegion` solo requiere modificar la interfaz y el mapper, demostrando la ventaja de la capa de transformacion. Con esto queda completada la Seccion 10.
