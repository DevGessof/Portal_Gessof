# RESUMEN DIDÁCTICO - CLASE 7: Builder Pattern y Reutilización de Código

## 1) TÍTULO
**Patrón Builder de Lombok y Reutilización de Métodos en Services**

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña a usar el **patrón Builder** de Lombok para construir objetos de forma más legible y cómo **reutilizar métodos** existentes en lugar de duplicar llamadas HTTP.

**Analogía Builder:** Es como pedir un combo en McDonald's configurándolo paso a paso: "Quiero BigMac + papas medianas + Coca grande" en lugar de crear todo manualmente.

## 3) CONCEPTOS CLAVE

### Patrón Builder (@Builder de Lombok)

**¿Qué hace?**
Permite construir objetos de forma fluida y legible.

**Sin Builder:**
```java
DigimonBasicInfo info = new DigimonBasicInfo();
info.setName("Agumon");
info.setLevel("Rookie");
info.setImg("url");
```

**Con Builder:**
```java
DigimonBasicInfo info = DigimonBasicInfo.builder()
    .name("Agumon")
    .level("Rookie")
    .img("url")
    .build();
```

**Ventajas:**
- Más legible
- No necesitas recordar orden de parámetros
- Puedes omitir campos opcionales
- Código más limpio

**Uso en DTOs:**
```java
@Data
@Builder
public class DigimonBasicInfo {
    private String name;
    private String level;
    private String img;
}
```

### Reutilización de Métodos

**Problema:** Duplicar llamadas HTTP a la misma API
```java
// ❌ MAL - Duplicación
@GetMapping("/full")
public DigimonResponse getFull(String name) {
    return restTemplate.getForEntity(url + name, DigimonResponse.class);
}

@GetMapping("/basic")
public DigimonBasicInfo getBasic(String name) {
    return restTemplate.getForEntity(url + name, DigimonResponse.class); // Duplicado!
}
```

**Solución:** Reutilizar el método que ya hace la llamada
```java
// ✅ BIEN - Reutilización
@GetMapping("/full")
public DigimonResponse getFull(String name) {
    return callDigimonAPI(name);
}

@GetMapping("/basic")
public DigimonBasicInfo getBasic(String name) {
    DigimonResponse full = callDigimonAPI(name); // Reutiliza
    return mapToBasicInfo(full); // Solo mapea
}

private DigimonResponse callDigimonAPI(String name) {
    return restTemplate.getForEntity(url + name, DigimonResponse.class);
}
```

### Mappers con Builder

**Mapper usando Builder:**
```java
@Component
public class DigimonMapper {
    
    public DigimonBasicInfo toBasicInfo(DigimonResponse response) {
        
        // Validar
        if (response == null) {
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR, 
                "Error al obtener Digimon"
            );
        }
        
        // Construir con Builder
        return DigimonBasicInfo.builder()
            .name(response.getName())
            .level(response.getLevel())
            .img(response.getImg())
            .build();
    }
}
```

### Manejo de Campos Null

**Problema:** Campos Boolean pueden venir null de la API

**Solución:** Operador ternario con valor por defecto
```java
@Builder
public class DigimonInfo {
    private String name;
    private Boolean isEvolved; // Puede ser null
}

// En el Mapper
.isEvolved(response.getIsEvolved() != null ? 
           response.getIsEvolved() : 
           false) // Valor por defecto
```

## 4) PASO A PASO

### Paso 1: Crear DTO con @Builder
```java
@Data
@Builder
public class DigimonBasicInfo {
    private String name;
    private String level;
    private String img;
}
```

### Paso 2: Crear método reutilizable en Service
```java
@Service
public class DigimonServiceImpl {
    
    private final RestTemplate restTemplate;
    private final DigimonMapper mapper;
    
    @Value("${digimon.api.url}")
    private String baseUrl;
    
    // Método base reutilizable
    public DigimonResponse getDigimon(String name) {
        String url = baseUrl + "/name/" + name;
        ResponseEntity<DigimonResponse> response = 
            restTemplate.getForEntity(url, DigimonResponse.class);
        return response.getBody();
    }
}
```

### Paso 3: Crear método que reutiliza + mapea
```java
public DigimonBasicInfo getBasicInfo(String name) {
    // Reutilizar método existente
    DigimonResponse full = getDigimon(name);
    
    // Mapear a info básica
    return mapper.toBasicInfo(full);
}
```

### Paso 4: Crear Mapper con Builder
```java
@Component
public class DigimonMapper {
    
    public DigimonBasicInfo toBasicInfo(DigimonResponse response) {
        
        if (response == null) {
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "Error al obtener Digimon"
            );
        }
        
        return DigimonBasicInfo.builder()
            .name(response.getName())
            .level(response.getLevel())
            .img(response.getImg())
            .build();
    }
}
```

### Paso 5: Usar en Controller
```java
@RestController
@RequestMapping("/api/v1/digimon")
public class DigimonController {
    
    private final DigimonService service;
    
    @GetMapping("/{name}/basic")
    public ResponseEntity<DigimonBasicInfo> getBasicInfo(
        @PathVariable String name) {
        
        DigimonBasicInfo info = service.getBasicInfo(name);
        return ResponseEntity.ok(info);
    }
}
```

## 5) EJEMPLO EXPLICADO

**Flujo completo:**

1. Cliente: `GET /api/v1/digimon/agumon/basic`
2. Controller llama: `service.getBasicInfo("agumon")`
3. Service llama: `getDigimon("agumon")` (método reutilizable)
4. RestTemplate hace HTTP GET a Digimon API
5. Recibe JSON completo con 20+ campos
6. Service llama: `mapper.toBasicInfo(response)`
7. Mapper usa Builder para crear objeto con solo 3 campos
8. Devuelve:
```json
{
  "name": "Agumon",
  "level": "Rookie",
  "img": "https://..."
}
```

**Ventaja:** No duplicaste la llamada HTTP, solo mapeaste diferente.

## 6) RESUMEN ULTRA CORTO

1. **@Builder**: Patrón para construir objetos de forma fluida
2. **Reutilización**: Llamar método existente en lugar de duplicar HTTP calls
3. **Mapper + Builder**: Combinar para crear DTOs limpios
4. **Null safety**: Usar operador ternario para valores por defecto
5. **DRY**: Don't Repeat Yourself - un solo método para llamar la API

## 7) PREGUNTAS DE REPASO

**1. ¿Qué hace @Builder de Lombok?**
<details>
<summary>Ver respuesta</summary>
Genera patrón Builder que permite construir objetos de forma fluida: objeto.builder().campo1(valor).campo2(valor).build()
</details>

**2. ¿Por qué reutilizar métodos en lugar de duplicar llamadas HTTP?**
<details>
<summary>Ver respuesta</summary>
Evita duplicación de código, un solo lugar para cambiar la URL/lógica, más fácil mantener, menos errores.
</details>

**3. ¿Cómo manejar campos Boolean que pueden venir null?**
<details>
<summary>Ver respuesta</summary>
Usar operador ternario: campo != null ? campo : false
</details>

**4. ¿Dónde deben estar las llamadas HTTP: Controller o Service?**
<details>
<summary>Ver respuesta</summary>
En el Service. El Controller solo recibe peticiones y llama al Service. Las llamadas HTTP son lógica de negocio.
</details>

**5. ¿Cuándo usar Builder vs constructor normal?**
<details>
<summary>Ver respuesta</summary>
Builder para objetos con muchos campos opcionales o cuando quieres código más legible. Constructor para objetos simples con pocos campos obligatorios.
</details>

---

*Fin del resumen de Clase 7*
