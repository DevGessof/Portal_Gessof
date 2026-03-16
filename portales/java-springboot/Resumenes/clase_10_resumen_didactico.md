# RESUMEN DIDÁCTICO - CLASE 10: Apache Camel para Integración

## 1) TÍTULO
**Apache Camel: Framework de Integración y Orquestación de Servicios**

## 2) EXPLICACIÓN SENCILLA

Apache Camel es un framework para **orquestar y conectar diferentes servicios** creando rutas de integración.

**Analogía:** Camel es como un director de orquesta que coordina cuándo y cómo los servicios se comunican entre sí.

## 3) CONCEPTOS CLAVE

### ¿Qué es Apache Camel?

Framework de integración empresarial que permite:
- Crear rutas de comunicación entre servicios
- Transformar datos entre formatos
- Aplicar lógica de negocio en el flujo
- Orquestar llamadas HTTP

### Componentes Principales

**RouteBuilder:** Clase base para definir rutas
```java
@Component
public class DigimonRoute extends RouteBuilder {
    @Override
    public void configure() throws Exception {
        // Definir rutas aquí
    }
}
```

**from():** Punto de entrada de la ruta
```java
from("direct:digimonRoute")
    .routeId("digimon-route")
    // ... lógica
```

**to():** Envía mensaje a otro endpoint
```java
.to("{{digimon.api.url}}")
```

**process():** Ejecuta lógica Java personalizada
```java
.process(exchange -> {
    String name = exchange.getIn().getHeader("digimonName", String.class);
    String url = baseUrl + "/name/" + name;
    exchange.getIn().setHeader("digiUrl", url);
})
```

**ProducerTemplate:** Clase para invocar rutas
```java
@Service
public class CamelServiceImpl {
    private final ProducerTemplate producerTemplate;
    
    public String callRoute(String name) {
        return producerTemplate.requestBodyAndHeader(
            "direct:digimonRoute",  // Ruta
            null,                   // Body
            "digimonName",         // Header name
            name,                  // Header value
            String.class           // Tipo respuesta
        );
    }
}
```

## 4) PASO A PASO

### Paso 1: Dependencia
```xml
<dependency>
    <groupId>org.apache.camel.springboot</groupId>
    <artifactId>camel-spring-boot-starter</artifactId>
</dependency>
```

### Paso 2: Crear RouteBuilder
```java
@Component
public class DigimonRoute extends RouteBuilder {
    
    @Value("${digimon.api.url}")
    private String baseUrl;
    
    @Override
    public void configure() throws Exception {
        from("direct:digimonRoute")
            .routeId("digimon-route")
            .setHeader("Content-Type", constant("application/json"))
            .setHeader(Exchange.HTTP_METHOD, constant("GET"))
            .process(exchange -> {
                String name = exchange.getIn()
                    .getHeader("digimonName", String.class);
                String url = baseUrl + "/name/" + name;
                exchange.getIn().setHeader("digiUrl", url);
            })
            .toD("${header.digiUrl}")
            .unmarshal().json(JsonLibrary.Jackson, String.class)
            .log("Resultado: ${body}");
    }
}
```

### Paso 3: Usar ProducerTemplate
```java
@Service
public class CamelServiceImpl {
    
    private final ProducerTemplate producerTemplate;
    
    public String getDigimon(String name) {
        return producerTemplate.requestBodyAndHeader(
            "direct:digimonRoute",
            null,
            "digimonName",
            name,
            String.class
        );
    }
}
```

## 5) RESUMEN ULTRA CORTO

1. **Camel**: Orquestador de integraciones
2. **RouteBuilder**: Define rutas de comunicación
3. **from()**: Punto inicio, **to()**: destino
4. **process()**: Lógica Java personalizada
5. **ProducerTemplate**: Invoca rutas desde Service
6. **Exchange**: Objeto que lleva datos entre pasos

## 6) PREGUNTAS DE REPASO

**1. ¿Para qué sirve Apache Camel?**
<details>
<summary>Ver respuesta</summary>
Para orquestar e integrar diferentes servicios creando rutas de comunicación configurables.
</details>

**2. ¿Qué hace .process() en Camel?**
<details>
<summary>Ver respuesta</summary>
Ejecuta lógica Java personalizada dentro del flujo de la ruta.
</details>

**3. ¿Diferencia entre to() y toD()?**
<details>
<summary>Ver respuesta</summary>
to() usa URL estática. toD() permite URL dinámica usando variables/headers.
</details>

---

*Fin del resumen de Clase 10*
