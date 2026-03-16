# RESUMEN DIDÁCTICO - CLASE 11: Camel - Llamadas Paralelas y Agregación

⚠️ **Parte poco clara en la transcripción:** Esta clase tiene problemas significativos de transcripción automática, pero se puede entender el concepto general.

## 1) TÍTULO
**Apache Camel: Multicast y Agregación de Respuestas Paralelas**

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña cómo hacer **múltiples llamadas HTTP en paralelo** usando Camel y **combinar las respuestas** en un solo objeto.

**Analogía:** Es como pedir comida a dos restaurantes simultáneamente y combinar ambos pedidos en una sola caja.

## 3) CONCEPTOS CLAVE

### Multicast (Llamadas Paralelas)

**¿Qué hace?**
Ejecuta múltiples rutas en paralelo simultáneamente.

```java
from("direct:combinedRoute")
    .multicast()
        .to("direct:digimonRoute")  // Llamada 1
        .to("direct:pokemonRoute")  // Llamada 2 (en paralelo)
    .end()
```

**Ventaja:** No esperas que termine una para empezar la otra.

### Aggregation (Combinar Respuestas)

**Problema:** Multicast ejecuta en paralelo, pero ¿cómo combinas las respuestas?

**Solución:** AggregationStrategy

```java
.multicast(new CombinedAggregationStrategy())
    .to("direct:digimonRoute")
    .to("direct:pokemonRoute")
.end()
```

**AggregationStrategy:**
```java
@Component
public class CombinedAggregationStrategy implements AggregationStrategy {
    
    @Override
    public Exchange aggregate(Exchange oldExchange, Exchange newExchange) {
        
        Object newBody = newExchange.getIn().getBody();
        
        if (oldExchange == null) {
            // Primera respuesta - crear lista
            List<Object> list = new ArrayList<>();
            list.add(newBody);
            newExchange.getIn().setBody(list);
            return newExchange;
        }
        
        // Respuestas siguientes - agregar a lista
        List<Object> list = oldExchange.getIn().getBody(List.class);
        list.add(newBody);
        return oldExchange;
    }
}
```

### Problema: Sobrescritura de Body

**Cuando haces múltiples llamadas, el body puede sobrescribirse.**

**Solución:** Usar AggregationStrategy para acumular respuestas en lista.

## 4) PASO A PASO

### Paso 1: Crear rutas individuales
```java
// Ruta Digimon
from("direct:digimonRoute")
    .process(exchange -> {
        String name = exchange.getIn().getHeader("digimonName", String.class);
        // ... lógica
    })
    .to("${header.digiUrl}")
    .unmarshal().json(JsonLibrary.Jackson, DigimonResponse.class);

// Ruta Pokémon
from("direct:pokemonRoute")
    .process(exchange -> {
        String name = exchange.getIn().getHeader("pokemonName", String.class);
        // ... lógica
    })
    .to("${header.pokeUrl}")
    .unmarshal().json(JsonLibrary.Jackson, PokemonResponse.class);
```

### Paso 2: Crear ruta combinada con Multicast
```java
from("direct:combinedRoute")
    .routeId("combined-route")
    .multicast(new CombinedAggregationStrategy())
        .to("direct:digimonRoute")
        .to("direct:pokemonRoute")
    .end()
    .process(exchange -> {
        List<Object> responses = exchange.getIn().getBody(List.class);
        // Procesar lista combinada
    });
```

### Paso 3: Crear Mapper para combinar
```java
@Component
public class CombinedMapper {
    
    public CombinedResponse map(List<Object> responses) {
        
        DigimonResponse digimon = null;
        PokemonResponse pokemon = null;
        
        for (Object obj : responses) {
            if (obj instanceof DigimonResponse) {
                digimon = (DigimonResponse) obj;
            } else if (obj instanceof PokemonResponse) {
                pokemon = (PokemonResponse) obj;
            }
        }
        
        return CombinedResponse.builder()
            .digimonName(digimon != null ? digimon.getName() : "Not found")
            .pokemonName(pokemon != null ? pokemon.getName() : "Not found")
            .build();
    }
}
```

## 5) EJEMPLO EXPLICADO

**Flujo completo:**

1. Cliente: `GET /api/v1/combined/agumon`
2. Controller llama: `camelService.getCombined("agumon")`
3. Camel inicia ruta `direct:combinedRoute`
4. **Multicast ejecuta en paralelo:**
   - Thread 1: `direct:digimonRoute` → API Digimon
   - Thread 2: `direct:pokemonRoute` → API Pokémon
5. **AggregationStrategy combina:**
   - Primera respuesta → crea `List` con 1 elemento
   - Segunda respuesta → agrega a `List` (ahora 2 elementos)
6. Mapper procesa lista y crea `CombinedResponse`
7. Devuelve:

```json
{
  "digimonName": "Agumon",
  "digimonLevel": "Rookie",
  "pokemonName": "Pikachu",
  "pokemonWeight": 60
}
```

## 6) RESUMEN ULTRA CORTO

1. **Multicast**: Ejecuta múltiples rutas en paralelo
2. **AggregationStrategy**: Combina respuestas en lista
3. **instanceof**: Identifica tipo de objeto en lista
4. **Ventaja**: Respuestas paralelas = más rápido
5. **Cuidado**: Sin aggregation, el body se sobrescribe

## 7) PREGUNTAS DE REPASO

**1. ¿Qué hace .multicast() en Camel?**
<details>
<summary>Ver respuesta</summary>
Ejecuta múltiples rutas en paralelo simultáneamente en lugar de secuencialmente.
</details>

**2. ¿Por qué necesitas AggregationStrategy?**
<details>
<summary>Ver respuesta</summary>
Para combinar las respuestas de las llamadas paralelas en un solo objeto/lista. Sin ella, el body se sobrescribe.
</details>

**3. ¿Cómo identificas qué tipo de respuesta recibiste?**
<details>
<summary>Ver respuesta</summary>
Usando instanceof: if (obj instanceof DigimonResponse)
</details>

**4. ¿Ventaja de multicast vs llamadas secuenciales?**
<details>
<summary>Ver respuesta</summary>
Multicast es más rápido porque las llamadas se ejecutan en paralelo, no una después de otra.
</details>

---

**NOTA:** Esta clase muestra patrones avanzados de integración con Apache Camel para casos donde necesitas consultar múltiples servicios y combinar resultados.

---

*Fin del resumen de Clase 11*
