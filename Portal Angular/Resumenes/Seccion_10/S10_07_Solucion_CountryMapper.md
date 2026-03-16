# Seccion 10 - Leccion 07: Solucion de la Tarea - CountryMapper

---

## 1. Titulo de la leccion

**Implementar CountryMapper y usar el operador map de RxJS en el servicio**

---

## 2. Que se aprende en esta leccion

Se implementan los dos metodos estaticos de `CountryMapper`, se aprende a usar el operador `map` de RxJS en el servicio con `.pipe()`, y se corrige el problema del contexto `this` al pasar referencias de metodos como callbacks.

---

## 3. Puntos clave explicados

- **`mapRestCountryToCountry(restCountry: RESTCountry): Country`:** Metodo estatico que toma un objeto del API y retorna el objeto `Country` propio. Mapea: `cca2`, `flag`, `flagSvg` (`restCountry.flags.svg`), `name` (`restCountry.name.common`), `capital` (`restCountry.capital.join(', ')`), `population`.
- **`capital.join(', ')`:** La capital en el API es un arreglo (`string[]`) por si hay mas de una capital. Se une con `.join()` para convertirlo a `string`.
- **`mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[]`:** Usa `restCountries.map(this.mapRestCountryToCountry)` para transformar cada elemento.
- **Problema del `this` con referencia a metodo:** Al pasar `this.mapRestCountryToCountry` como referencia, `this` pierde el contexto dentro del metodo. Solucion: usar `(country) => this.mapRestCountryToCountry(country)` o referenciar por nombre de clase: `CountryMapper.mapRestCountryToCountry`.
- **Operador `map` de RxJS en el servicio:** Se agrega `.pipe(map(restCountries => CountryMapper.mapRestCountryArrayToCountryArray(restCountries)))` al Observable en `searchByCapital`. Simplificado: `.pipe(map(CountryMapper.mapRestCountryArrayToCountryArray))`.
- **El mapper va en el servicio, no en el componente:** Si se mapea en el componente, cada lugar que use el servicio tendra que repetir el mapper. Al mapearlo en el servicio, todos los consumidores reciben ya el tipo `Country[]`.
- **`pipe()` y encadenamiento de `map`:** Cada operador `map` recibe el valor retornado por el anterior. El primer `map` recibe el valor del Observable original.
- **Retorno correcto del servicio:** `searchByCapital` ahora retorna `Observable<Country[]>` en lugar de `Observable<RESTCountry[]>`.

---

## 4. Ejemplo sencillo

```typescript
// country/mappers/country.mapper.ts
export class CountryMapper {
  static mapRestCountryToCountry(restCountry: RESTCountry): Country {
    return {
      cca2:       restCountry.cca2,
      flag:       restCountry.flag,
      flagSvg:    restCountry.flags.svg,
      name:       restCountry.name.common,   // se cambia en leccion 08
      capital:    restCountry.capital?.join(', ') ?? '',
      population: restCountry.population
    };
  }

  static mapRestCountryArrayToCountryArray(restCountries: RESTCountry[]): Country[] {
    return restCountries.map(CountryMapper.mapRestCountryToCountry);
    // Equivalente: restCountries.map(c => CountryMapper.mapRestCountryToCountry(c))
  }
}
```

```typescript
// country/services/country.service.ts
searchByCapital(query: string): Observable<Country[]> {
  query = query.toLowerCase();
  return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`)
    .pipe(
      map(CountryMapper.mapRestCountryArrayToCountryArray)
    );
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Metodo estatico | Se llama con `CountryMapper.metodo()`, no necesita instancia |
| `capital.join(', ')` | Une el arreglo de capitales en un string separado por coma |
| `.pipe(map(...))` | Encadena transformaciones sobre el Observable |
| Operador `map` de RxJS | Transforma cada valor emitido por el Observable (importar de `rxjs`) |
| Referencia de metodo | Pasar `CountryMapper.metodo` sin parentesis como argumento a otro `map` |
| Problema del `this` | Al pasar `this.metodo` como referencia, `this` pierde contexto; usar nombre de clase |
| Mapper en el servicio | Centraliza la transformacion; todos los consumidores reciben `Country[]` |

---

## 6. Resumen final en pocas palabras

`CountryMapper` tiene dos metodos estaticos: uno que transforma un `RESTCountry` en `Country` (mapeando campos especificos) y otro que transforma arreglos usando el primero. El operador `map` de RxJS se aplica con `.pipe()` en el servicio para que todos los consumidores reciban directamente `Country[]`. Al pasar metodos estaticos como referencia se evita el problema de contexto del `this`.
