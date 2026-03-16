# RESUMEN DIDÁCTICO - CLASE 4: Consumo de APIs Externas y Mapeo de JSON

## 1) TÍTULO DEL TEMA
**Consumir APIs REST Externas: Response Entity, Mapeo de JSON a DTOs y Anotación @Data de Lombok**

---

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña cómo consumir APIs externas (como PokeAPI) desde Spring Boot. Es decir, tu aplicación puede pedir datos a otros servicios y procesarlos.

**Analogía:** Tu aplicación Spring Boot es como un vendedor de celulares. No fabricas los celulares (datos), los pides a un proveedor (API externa) y los vendes a tus clientes.

---

## 3) CONCEPTOS CLAVE

### APIs REST para Consumo HTTP

**ResponseEntity**
- Clase nativa de Spring para hacer llamadas HTTP
- Permite personalizar headers, códigos de estado, body
- **Síncrono** (espera la respuesta)

**RestTemplate** (mencionado, deprecado)
- Forma antigua de hacer llamadas HTTP
- Síncrono, fácil de usar
- Ya no se recomienda

**WebClient** (mencionado, preferido)
- Moderno, reactivo
- **Asíncrono** (no bloqueante)
- Se verá en clases futuras

### Consumir API Externa con ResponseEntity

**Paso a paso:**

1. Definir URL de la API externa
```java
private static final String BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
```

2. Crear método GET que consume la API
```java
@GetMapping("/pokemon/{name}")
public ResponseEntity<String> getPokemonInfo(@PathVariable String name) {
    String url = BASE_URL + name;
    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
    return response;
}
```

3. La respuesta llega como JSON (String)

### Mapeo de JSON a Objetos Java (DTOs)

**Problema:** La API devuelve JSON gigante, necesitamos convertirlo a objetos Java

**Solución:** Crear DTOs que mapeen la estructura del JSON

**Estructura de JSON de PokeAPI:**
```json
{
  "abilities": [
    {
      "ability": {"name": "static", "url": "..."},
      "is_hidden": false,
      "slot": 1
    }
  ],
  "base_experience": 112,
  "height": 4,
  "name": "pikachu",
  ...
}
```

**Crear DTOs correspondientes:**

```java
@Data
public class PokemonResponseDTO {
    private List<AbilityDTO> abilities;
    private Integer baseExperience;
    private Integer height;
    private String name;
    // ... más campos
}

@Data
public class AbilityDTO {
    private AbilityInfoDTO ability;
    private Boolean isHidden;
    private Integer slot;
}

@Data
public class AbilityInfoDTO {
    private String name;
    private String url;
}
```

### @Data de Lombok

**¿Qué hace?**
Genera automáticamente:
- Getters para todos los campos
- Setters para todos los campos
- Constructor vacío
- toString()
- equals() y hashCode()

**Sin @Data tendrías que escribir:**
```java
public class AbilityDTO {
    private String name;
    private String url;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
    // ... más código repetitivo
}
```

**Con @Data:**
```java
@Data
public class AbilityDTO {
    private String name;
    private String url;
}
// ¡Listo! Todo lo demás lo genera Lombok
```

### Organización de Packages

```
domain/
  ├── request/    (DTOs que envías)
  ├── response/   (DTOs que recibes)
  └── ...
```

### Reglas de Mapeo JSON ↔ Java

**IMPORTANTE:** Para que Spring convierta automáticamente JSON a objeto Java:

1. **Mismo nombre** de campo en JSON y Java
   - JSON: `"base_experience"` → Java: `baseExperience` (camelCase)
   
2. **Mismo tipo** de dato
   - JSON: `123` → Java: `Integer`
   - JSON: `"texto"` → Java: `String`
   - JSON: `true` → Java: `Boolean`
   - JSON: `[...]` → Java: `List<>`
   - JSON: `{...}` → Java: Objeto

3. Si no coinciden nombres/tipos, Spring no mapea correctamente

---

## 4) PASO A PASO - Consumir PokeAPI

### Paso 1: Crear Controller
```java
@RestController
@RequestMapping("/api/v1")
public class PokemonController {
    
    private static final String POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/";
}
```

### Paso 2: Crear método GET básico (devuelve String)
```java
@GetMapping("/pokemon/{name}")
public ResponseEntity<String> getPokemon(@PathVariable String name) {
    String url = POKE_API_URL + name;
    RestTemplate restTemplate = new RestTemplate();
    ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
    return response;
}
```

### Paso 3: Analizar JSON que devuelve la API
- Ir a: `https://pokeapi.co/api/v2/pokemon/pikachu`
- Ver estructura del JSON

### Paso 4: Crear DTOs mapeando el JSON
```java
@Data
public class PokemonResponseDTO {
    private List<AbilityDTO> abilities;
    private Integer baseExperience;
    private List<FormDTO> forms;
    private Integer height;
    private String name;
    // ... más campos según necesites
}
```

### Paso 5: Actualizar método para devolver DTO
```java
@GetMapping("/pokemon/{name}")
public ResponseEntity<PokemonResponseDTO> getPokemon(@PathVariable String name) {
    String url = POKE_API_URL + name;
    RestTemplate restTemplate = new RestTemplate();
    // Ahora Spring convierte JSON → PokemonResponseDTO automáticamente
    ResponseEntity<PokemonResponseDTO> response = 
        restTemplate.getForEntity(url, PokemonResponseDTO.class);
    return response;
}
```

### Paso 6: Probar en navegador o Postman
```
GET http://localhost:8080/api/v1/pokemon/pikachu
```

---

## 5) EJEMPLO EXPLICADO

**Flujo completo:**

1. Cliente hace: `GET /api/v1/pokemon/pikachu`
2. Controller recibe "pikachu" en `@PathVariable`
3. Construye URL: `https://pokeapi.co/api/v2/pokemon/pikachu`
4. RestTemplate hace petición HTTP a PokeAPI
5. PokeAPI devuelve JSON gigante
6. Spring convierte JSON → PokemonResponseDTO (mapeo automático)
7. Controller devuelve el DTO como JSON al cliente

**Spring actúa como orquestador:** Recibe petición → Consulta servicio externo → Devuelve respuesta (con o sin transformación)

---

## 6) RESUMEN ULTRA CORTO PARA MEMORIZAR

1. **ResponseEntity**: Clase para hacer llamadas HTTP síncronas
2. **RestTemplate**: Herramienta para ejecutar las llamadas (deprecada pero funcional)
3. **@Data**: Genera automáticamente getters, setters, constructores (Lombok)
4. **Mapeo JSON↔Java**: Mismo nombre + mismo tipo = conversión automática
5. **Organización**: DTOs en packages request/ y response/
6. **Spring Boot como orquestador**: Intermediario entre cliente y servicios externos

---

## 7) PREGUNTAS DE REPASO

**1. ¿Qué ventaja tiene usar @Data de Lombok?**
<details>
<summary>Ver respuesta</summary>
Genera automáticamente getters, setters, constructores, toString, equals y hashCode. Ahorra escribir código repetitivo.
</details>

**2. ¿Qué debe coincidir para que Spring mapee JSON a objeto Java automáticamente?**
<details>
<summary>Ver respuesta</summary>
El nombre del campo (en camelCase) y el tipo de dato deben coincidir entre el JSON y la clase Java.
</details>

**3. ¿Cuál es la diferencia entre ResponseEntity y WebClient?**
<details>
<summary>Ver respuesta</summary>
ResponseEntity/RestTemplate son síncronos (bloquean hasta obtener respuesta). WebClient es asíncrono y reactivo (no bloqueante).
</details>

**4. ¿Por qué se separaron los DTOs en packages request/ y response/?**
<details>
<summary>Ver respuesta</summary>
Por organización y claridad: request/ tiene DTOs que envías, response/ tiene DTOs que recibes de APIs externas.
</details>

**5. ¿Qué rol cumple Spring Boot al consumir APIs externas?**
<details>
<summary>Ver respuesta</summary>
Actúa como orquestador o intermediario: recibe petición del cliente, consulta servicio externo, procesa/transforma datos, devuelve respuesta.
</details>

---

**DEPENDENCIAS NECESARIAS:**
- Spring Web
- Spring Boot Starter
- Lombok

**HERRAMIENTA USADA:**
- Postman: Para probar las peticiones HTTP

---

*Fin del resumen de Clase 4*
