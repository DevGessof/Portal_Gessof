# RESUMEN DIDÁCTICO - CLASE 6: WebClient y Programación Asíncrona

## 1) TÍTULO
**WebClient para Llamadas HTTP Asíncronas y Reactivas**

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña **WebClient**, la forma moderna de consumir APIs en Spring Boot. A diferencia de RestTemplate (síncrono), WebClient es **reactivo y asíncrono**.

**Analogía:**
- **Síncrono (RestTemplate)**: Llamas por teléfono y esperas en la línea hasta que respondan
- **Asíncrono (WebClient)**: Envías WhatsApp y sigues haciendo otras cosas mientras esperas respuesta

## 3) CONCEPTOS CLAVE

### Síncrono vs Asíncrono

**Síncrono:**
```
Paso 1 → Esperar → Paso 2 → Esperar → Paso 3
```
- Bloquea ejecución hasta obtener respuesta
- Un hilo por petición

**Asíncrono:**
```
Paso 1 ↘
Paso 2 → Procesamiento paralelo → Resultado
Paso 3 ↗
```
- No bloquea
- Múltiples operaciones en paralelo
- Más eficiente

### WebClient

**Características:**
- Reactivo y no bloqueante
- Trabaja con **Mono** (0-1 elemento) y **Flux** (0-N elementos)
- Reemplaza a RestTemplate
- Más eficiente en aplicaciones con alta concurrencia

**Configuración básica:**
```java
@Configuration
public class WebClientConfig {
    
    @Bean
    public WebClient webClient(WebClient.Builder builder) {
        return builder
            .clientConnector(new ReactorClientHttpConnector(
                HttpClient.create()
                    .responseTimeout(Duration.ofSeconds(5))
                    .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
            ))
            .build();
    }
}
```

**Timeouts configurados:**
- `responseTimeout`: Tiempo máximo para respuesta (5 seg)
- `connectTimeout`: Tiempo máximo para conectar (5 seg)

### Mono y Flux (Programación Reactiva)

**Mono<T>:**
- Representa 0 o 1 elemento
- Para respuestas únicas
- Ejemplo: `Mono<DigimonResponse>`

**Flux<T>:**
- Representa 0 a N elementos  
- Para listas/streams
- Ejemplo: `Flux<Digimon>`

**Convertir Mono a objeto:**
```java
DigimonResponse response = webClient
    .get()
    .uri("/digimon")
    .retrieve()
    .bodyToMono(DigimonResponse.class)
    .block();  // Bloquea y convierte a objeto normal
```

⚠️ `.block()` bloquea el hilo (pierde ventaja asíncrona). Úsalo solo cuando sea necesario.

## 4) PASO A PASO - Consumir API con WebClient

### Paso 1: Agregar dependencia
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-webflux</artifactId>
</dependency>
```

### Paso 2: Crear configuración
```java
@Configuration
public class WebClientConfig {
    
    @Value("${digimon.api.url}")
    private String baseUrl;
    
    @Bean
    public WebClient webClient() {
        return WebClient.builder()
            .baseUrl(baseUrl)
            .clientConnector(connectionConfig())
            .build();
    }
    
    private ReactorClientHttpConnector connectionConfig() {
        return new ReactorClientHttpConnector(
            HttpClient.create()
                .responseTimeout(Duration.ofSeconds(5))
                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 5000)
        );
    }
}
```

### Paso 3: Usar en Service
```java
@Service
public class DigimonServiceImpl implements DigimonService {
    
    private final WebClient webClient;
    
    public DigimonServiceImpl(WebClient webClient) {
        this.webClient = webClient;
    }
    
    @Override
    public DigimonResponse getDigimonByName(String name) {
        return webClient
            .get()
            .uri("/name/{name}", name)
            .retrieve()
            .bodyToMono(DigimonResponse.class)
            .block();
    }
}
```

### Paso 4: Llamar desde Controller
```java
@RestController
@RequestMapping("/api/v1/digimon")
public class DigimonController {
    
    private final DigimonService service;
    
    @GetMapping("/{name}")
    public ResponseEntity<DigimonResponse> getDigimon(@PathVariable String name) {
        DigimonResponse digimon = service.getDigimonByName(name);
        return ResponseEntity.ok(digimon);
    }
}
```

## 5) EJEMPLO EXPLICADO

**API consumida:** Digimon API (`https://digimon-api.vercel.app/api/digimon/name/agumon`)

**Respuesta:**
```json
{
  "id": 1,
  "name": "Agumon",
  "img": "url-imagen",
  "level": "Rookie"
}
```

**DTO:**
```java
@Data
public class DigimonResponse {
    private Integer id;
    private String name;
    private String img;
    private String level;
}
```

**Flujo:**
1. Controller recibe petición
2. Service llama WebClient
3. WebClient hace GET a API Digimon
4. Recibe Mono<DigimonResponse>
5. `.block()` convierte a DigimonResponse
6. Devuelve al Controller

## 6) RESUMEN ULTRA CORTO

1. **WebClient**: Cliente HTTP reactivo moderno
2. **Asíncrono**: No bloquea, múltiples operaciones paralelas
3. **Mono<T>**: 0-1 elemento, Flux<T>: 0-N elementos
4. **Config**: Timeouts de 5 segundos (connect + response)
5. **`.block()`**: Convierte Mono a objeto (bloquea hilo)
6. **@Configuration**: Crear bean de WebClient reutilizable

## 7) PREGUNTAS DE REPASO

**1. ¿Cuál es la diferencia entre síncrono y asíncrono?**
<details>
<summary>Ver respuesta</summary>
Síncrono espera respuesta antes de continuar (bloquea). Asíncrono continúa ejecutando sin esperar (no bloquea).
</details>

**2. ¿Qué representa un Mono<DigimonResponse>?**
<details>
<summary>Ver respuesta</summary>
Un publisher reactivo que emitirá 0 o 1 elemento de tipo DigimonResponse.
</details>

**3. ¿Para qué sirve .block() en WebClient?**
<details>
<summary>Ver respuesta</summary>
Convierte un Mono/Flux en objeto normal bloqueando el hilo hasta obtener respuesta. Pierde ventaja asíncrona.
</details>

**4. ¿Por qué configurar timeouts en WebClient?**
<details>
<summary>Ver respuesta</summary>
Para evitar que la aplicación espere indefinidamente si la API externa no responde o es lenta.
</details>

**5. ¿Qué ventaja tiene WebClient sobre RestTemplate?**
<details>
<summary>Ver respuesta</summary>
Es reactivo, no bloqueante, más eficiente con alta concurrencia, trabaja con programación funcional.
</details>

---

*Fin del resumen de Clase 6*
