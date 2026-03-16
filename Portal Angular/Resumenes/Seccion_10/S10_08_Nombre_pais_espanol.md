# Seccion 10 - Leccion 08: Nombre del Pais en Espanol

---

## 1. Titulo de la leccion

**Mapear translations.spa.common para mostrar el nombre del pais en espanol**

---

## 2. Que se aprende en esta leccion

Se modifica el `CountryMapper` para obtener el nombre del pais en espanol desde el campo `translations.spa.common` de la respuesta del API, usando acceso a propiedades computadas y el operador `??` (nullish coalescing) como valor de respaldo.

---

## 3. Puntos clave explicados

- **`translations` en el API:** El objeto de pais incluye `translations`, un objeto dinamico donde la llave es el codigo de idioma (ej: `"spa"`, `"fra"`, `"deu"`) y el valor es un objeto con `official` y `common`.
- **Tipo de `translations`:** Se define como `Record<string, Translation>` donde `Translation = { official: string; common: string }`. Es un objeto con llaves dinamicas.
- **Acceso con propiedad computada:** Para obtener la traduccion al espanol hay que usar `restCountry.translations['spa']` (corchetes con string) o `restCountry.translations?.['spa']`. No se puede usar punto directamente para claves dinamicas en TypeScript.
- **`.common`:** Dentro del objeto de idioma, `common` es el nombre abreviado del pais (ej: "Honduras"). `official` seria "Republica de Honduras".
- **Operador `??` (nullish coalescing):** Si `translations['spa']?.common` es `null` o `undefined`, se usa el valor de respaldo. Ejemplo: `restCountry.translations?.['spa']?.common ?? 'No Spanish Name'`. Garantiza que `name` siempre sea un `string`.
- **Solo afecta al mapper:** El cambio es solo en `CountryMapper.mapRestCountryToCountry`. El resto de la app no necesita modificarse; recibe `country.name` igual que antes, pero ahora con el valor en espanol.
- **Resultado visible:** Buscar "al" ahora muestra "India", "Sahara Occidental", "Belgica", "Nueva Zelanda" en espanol en lugar de los nombres en ingles.

---

## 4. Ejemplo sencillo

```typescript
// Antes (nombre en ingles):
name: restCountry.name.common
// → "Honduras", "Costa Rica", "New Zealand"

// Despues (nombre en espanol):
name: restCountry.translations?.['spa']?.common ?? restCountry.name.common
// → "Honduras", "Costa Rica", "Nueva Zelanda"
```

```typescript
// En el CountryMapper
static mapRestCountryToCountry(restCountry: RESTCountry): Country {
  return {
    cca2:       restCountry.cca2,
    flag:       restCountry.flag,
    flagSvg:    restCountry.flags.svg,
    name:       restCountry.translations?.['spa']?.common ?? restCountry.name.common,
    capital:    restCountry.capital?.join(', ') ?? '',
    population: restCountry.population
  };
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `translations` | Objeto del API con nombres del pais en multiples idiomas |
| `translations['spa']` | Acceso con propiedad computada al espanol |
| `Record<string, Translation>` | Tipo TypeScript para objetos con claves dinamicas |
| `?.['spa']` | Optional chaining con propiedad computada; evita error si no existe |
| `??` nullish coalescing | Usa el valor de la derecha si el de la izquierda es null o undefined |
| Solo cambia el mapper | El resto de la app no se modifica; recibe `country.name` igual que antes |

---

## 6. Resumen final en pocas palabras

Para mostrar el nombre en espanol se accede a `translations['spa'].common` usando corchetes (propiedad computada). El operador `??` garantiza un string de respaldo si no existe la traduccion. El cambio es solo en el mapper, lo que demuestra la ventaja de la capa de transformacion: cambiar el origen de un dato sin tocar el resto de la aplicacion.
