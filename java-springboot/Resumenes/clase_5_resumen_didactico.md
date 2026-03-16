# RESUMEN DIDÁCTICO - CLASE 5: Mappers, Validaciones y Filtrado de Datos de APIs

## 1) TÍTULO DEL TEMA
**Mappers para Transformar Datos, Validaciones con ResponseStatusException y Filtrado de Respuestas de APIs**

---

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña cómo **transformar** los datos que recibes de una API externa (como PokeAPI) para devolver solo lo que necesitas, no todo el JSON gigante.

**Analogía:** Es como ir al supermercado (API externa), comprar 50 ingredientes (JSON completo), pero en tu restaurant (tu API) solo servir 3 ingredientes específicos en el plato (DTO filtrado).

**Conceptos clave:**
- **Mapper**: Clase que transforma datos de un formato a otro
- **Validaciones**: Verificar que los datos existan antes de procesarlos
- **Filtrado**: Quedarte solo con los datos que necesitas

---

## 3) CONCEPTOS CLAVE

### Mapper (Transformador de Datos)

**¿Qué es?**
Una clase con métodos que convierten un objeto en otro. Transforma datos "crudos" en datos "presentables".

**Ejemplo:**
```java
@Component
public class PokemonMapper {
    
    // Transforma Response completo → Solo habilidades
    public List<AbilityDTO> abilitiesMapper(ResponseEntity<PokemonResponseDTO> response) {
        return response.getBody().getAbilities();
    }
}
```

**¿Por qué usar Mappers?**
1. Separas la lógica de transformación del Controller/Service
2. Código más limpio y organizado
3. Reutilizable en varios lugares
4. Fácil de testear

### Validaciones con ResponseStatusException

**Problema:** ¿Qué pasa si la API externa no devuelve datos o devuelve null?

**Solución:** Validar y lanzar excepciones personalizadas

```java
if (response.getBody() == null || response.getBody().getAbilities() == null) {
    throw new ResponseStatusException(
        HttpStatus.INTERNAL_SERVER_ERROR, 
        "Error al obtener el Pokémon"
    );
}
```

**ResponseStatusException:**
- Clase de Spring para lanzar errores HTTP personalizados
- Recibe: código de estado + mensaje
- Detiene la ejecución y devuelve error al cliente

**Códigos HTTP comunes:**
- `HttpStatus.INTERNAL_SERVER_ERROR` (500): Error del servidor
- `HttpStatus.NOT_FOUND` (404): No encontrado
- `HttpStatus.BAD_REQUEST` (400): Petición incorrecta

### Filtrado de Datos

**Problema:** PokeAPI devuelve JSON con 100+ campos, solo necesitas 2-3.

**Solución:** Crear DTOs específicos con solo los campos necesarios

**Ejemplo - JSON completo de PokeAPI:**
```json
{
  "id": 25,
  "name": "pikachu",
  "abilities": [...],
  "moves": [...121 movimientos...],
  "sprites": {...},
  "stats": [...],
  "types": [...]
  // ... 50+ campos más
}
```

**DTO filtrado que devuelves:**
```java
@Data
public class PokemonAbilityResponse {
    private String pokemonName;
    private String ability;
}
```

**Resultado JSON filtrado:**
```json
{
  "pokemonName": "pikachu",
  "ability": "static"
}
```

### Uso de Streams para Transformar Listas

**Problema:** Tienes una lista de objetos complejos, necesitas una lista de objetos simples.

**Solución:** Usar Java Streams con `map()` y `collect()`

```java
List<MoveDTO> moves = response.getBody().getMoves()
    .stream()
    .map(move -> new MoveDTO(move.getMove().getName()))
    .collect(Collectors.toList());
```

**Explicación paso a paso:**
1. `.stream()` - Convierte la lista en un Stream (flujo de datos)
2. `.map()` - Transforma cada elemento de la lista
3. `new MoveDTO(...)` - Crea un nuevo objeto simplificado
4. `.collect(Collectors.toList())` - Convierte el Stream de vuelta a List

---

## 4) PASO A PASO - Crear un Mapper Completo

### Paso 1: Crear la clase Mapper
```java
@Component
public class PokemonMapper {
    // Se marca como @Component para que Spring la gestione
}
```

### Paso 2: Crear método de mapeo básico
```java
public List<AbilityDTO> abilitiesMapper(
    ResponseEntity<PokemonResponseDTO> response) {
    
    // 1. Validar que la respuesta no sea null
    if (response.getBody() == null || 
        response.getBody().getAbilities() == null) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR, 
            "Error al obtener habilidades del Pokémon"
        );
    }
    
    // 2. Retornar la lista de habilidades
    return response.getBody().getAbilities();
}
```

### Paso 3: Crear método de mapeo con transformación
```java
public PokemonAbilityResponse abilitySummary(
    ResponseEntity<PokemonResponseDTO> response) {
    
    // 1. Validar
    if (response.getBody() == null) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR, 
            "Error al obtener el Pokémon"
        );
    }
    
    // 2. Crear objeto de respuesta simplificado
    PokemonAbilityResponse summary = new PokemonAbilityResponse();
    summary.setPokemonName(response.getBody().getName());
    
    // 3. Obtener primera habilidad (si existe)
    if (!response.getBody().getAbilities().isEmpty()) {
        String abilityName = response.getBody()
            .getAbilities()
            .get(0)
            .getAbility()
            .getName();
        summary.setAbility(abilityName);
    }
    
    return summary;
}
```

### Paso 4: Usar el Mapper en el Service
```java
@Service
public class PokemonServiceImpl implements PokemonService {
    
    private final PokemonMapper mapper;
    
    public PokemonServiceImpl(PokemonMapper mapper) {
        this.mapper = mapper;
    }
    
    @Override
    public PokemonAbilityResponse getAbilitySummary(
        ResponseEntity<PokemonResponseDTO> response) {
        
        return mapper.abilitySummary(response);
    }
}
```

### Paso 5: Llamar desde el Controller
```java
@RestController
@RequestMapping("/api/v1")
public class PokemonController {
    
    private final PokemonService service;
    
    @GetMapping("/pokemon/{name}/ability")
    public ResponseEntity<PokemonAbilityResponse> getAbility(
        @PathVariable String name) {
        
        // 1. Obtener respuesta de PokeAPI
        ResponseEntity<PokemonResponseDTO> response = 
            restTemplate.getForEntity(POKE_API_URL + name, 
                                     PokemonResponseDTO.class);
        
        // 2. Transformar con el mapper (a través del service)
        PokemonAbilityResponse summary = service.getAbilitySummary(response);
        
        return ResponseEntity.ok(summary);
    }
}
```

---

## 5) EJEMPLO EXPLICADO - Mapear Movimientos de Pokémon

**Problema:** PokeAPI devuelve 121 movimientos con estructura compleja:
```json
{
  "moves": [
    {
      "move": {
        "name": "mega-punch",
        "url": "..."
      },
      "version_group_details": [...]
    },
    // ... 120 movimientos más
  ]
}
```

**Solución:** Extraer solo los nombres de los movimientos

**DTOs necesarios:**
```java
// Movimiento individual
@Data
public class MoveDTO {
    private String name;
    private String url;
}

// Wrapper del movimiento
@Data
public class PokemonMoveDTO {
    private MoveDTO move;
}

// Respuesta simplificada
@Data
public class PokemonDataResponse {
    private Integer id;
    private String name;
    private List<String> moveNames; // Solo nombres!
}
```

**Mapper:**
```java
public PokemonDataResponse dataMovesMapper(
    ResponseEntity<PokemonResponseDTO> response) {
    
    // Validar
    if (response.getBody() == null) {
        throw new ResponseStatusException(
            HttpStatus.INTERNAL_SERVER_ERROR, 
            "Error al obtener datos del Pokémon"
        );
    }
    
    PokemonDataResponse data = new PokemonDataResponse();
    data.setId(response.getBody().getId());
    data.setName(response.getBody().getName());
    
    // Extraer solo nombres de movimientos usando Streams
    List<String> moveNames = response.getBody().getMoves()
        .stream()
        .map(move -> move.getMove().getName())
        .collect(Collectors.toList());
    
    data.setMoveNames(moveNames);
    
    return data;
}
```

**Resultado:**
```json
{
  "id": 25,
  "name": "pikachu",
  "moveNames": [
    "mega-punch",
    "thunder-shock",
    "thunderbolt",
    "... 118 movimientos más ..."
  ]
}
```

---

## 6) RESUMEN ULTRA CORTO PARA MEMORIZAR

1. **Mapper**: Clase que transforma datos (marcada con @Component)
2. **Validaciones**: Siempre verificar `if (response.getBody() == null)`
3. **ResponseStatusException**: Para lanzar errores HTTP personalizados
4. **Filtrado**: Crear DTOs específicos con solo campos necesarios
5. **Streams**: `.stream().map().collect()` para transformar listas
6. **Separación**: Controller → Service → Mapper (cada uno su responsabilidad)

---

## 7) PREGUNTAS DE REPASO

**1. ¿Qué hace un Mapper?**
<details>
<summary>Ver respuesta</summary>
Transforma datos de un formato a otro. Convierte objetos complejos de APIs externas en DTOs simples que devuelves al cliente.
</details>

**2. ¿Por qué es importante validar response.getBody() antes de usarlo?**
<details>
<summary>Ver respuesta</summary>
Porque puede ser null si la API externa falla o no devuelve datos. Sin validación, tu código lanzaría NullPointerException.
</details>

**3. ¿Qué hace .stream().map().collect(Collectors.toList())?**
<details>
<summary>Ver respuesta</summary>
Convierte una lista en Stream, transforma cada elemento con map(), y vuelve a convertir el Stream en List.
</details>

**4. ¿Cuál es la diferencia entre HttpStatus.INTERNAL_SERVER_ERROR (500) y HttpStatus.NOT_FOUND (404)?**
<details>
<summary>Ver respuesta</summary>
500 indica error del servidor (algo falló en tu código o en la API externa). 404 indica que el recurso solicitado no existe.
</details>

**5. ¿Por qué crear DTOs filtrados en lugar de devolver todo el JSON de la API externa?**
<details>
<summary>Ver respuesta</summary>
1) Reduces tamaño de respuesta (más rápido), 2) Solo expones datos necesarios (seguridad), 3) Tu API tiene estructura propia (independencia).
</details>

---

**BUENAS PRÁCTICAS MENCIONADAS:**
- ✅ Validar siempre antes de acceder a datos
- ✅ Separar transformación en clase Mapper
- ✅ Usar Streams para transformar listas
- ✅ Crear DTOs específicos para cada caso de uso
- ✅ Mensajes de error descriptivos en español

---

*Fin del resumen de Clase 5*
