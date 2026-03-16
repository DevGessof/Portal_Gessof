/**
 * GESSOF Academy - Resúmenes del Curso Microservicios
 * Este archivo contiene los resúmenes didácticos de las 13 clases del curso.
 * Migrado desde los archivos MD originales para funcionamiento local.
 */

const MICROSERVICIOS_SUMMARIES = {
    1: {
        titulo: "Introducción a Java, Spring Boot y Programación Orientada a Objetos",
        resumen: "Esta clase es una introducción general al mundo de Java y Spring Boot. Java es el lenguaje base seguro y portable, mientras que Spring Boot es el framework que simplifica el desarrollo de microservicios y aplicaciones empresariales.",
        conceptos: [
            { nombre: "Java", descripcion: "Lenguaje seguro, portable, estable y orientado a objetos. Versión estable actual: Java 17." },
            { nombre: "Spring Boot", descripcion: "Framework que automatiza configuraciones y simplifica el desarrollo en Java." },
            { nombre: "Gestores de Dependencias", descripcion: "Maven (pom.xml) y Gradle (.gradle) para manejar librerías." },
            { nombre: "POO", descripcion: "Organiza el código en Clases (moldes), Objetos (instancias), Atributos y Métodos." },
            { nombre: "Herencia", descripcion: "Una clase puede heredar de otra usando 'extends' para reutilizar código." }
        ],
        puntosClave: [
            "Java es portable gracias a la JVM (Máquina Virtual).",
            "Maven es el gestor de dependencias más usado en empresas.",
            "IntelliJ IDEA es el IDE recomendado por su eficiencia.",
            "Se usa @Override para redefinir métodos de la clase padre.",
            "Spring Boot gestiona la memoria y dependencias automáticamente."
        ],
        codigoEjemplo: "public class Persona {\n    private String nombre;\n    public Persona(String nombre) {\n        this.nombre = nombre;\n    }\n    public void saludar() {\n        System.out.println(\"Hola, soy \" + nombre);\n    }\n}\n\npublic class Empleado extends Persona {\n    private String puesto;\n    public Empleado(String nombre, String puesto) {\n        super(nombre);\n        this.puesto = puesto;\n    }\n    @Override\n    public void saludar() {\n        super.saludar();\n        System.out.println(\"y trabajo como \" + puesto);\n    }\n}"
    },
    2: {
        titulo: "Arquitectura de Spring Boot y REST Controllers",
        resumen: "Se explica la organización en capas de Spring Boot (Controller, Service, Repository) y cómo crear servicios REST usando métodos HTTP básicos como GET, POST, PUT y DELETE.",
        conceptos: [
            { nombre: "Controller", descripcion: "Puerta de entrada de las peticiones. No debe tener lógica de negocio." },
            { nombre: "Service", descripcion: "Donde reside toda la lógica de negocio y se procesan los datos." },
            { nombre: "Repository", descripcion: "Interfaz que se comunica directamente con la base de datos (JPA)." },
            { nombre: "Beans", descripcion: "Objetos gestionados y creados automáticamente por Spring." },
            { nombre: "IoC / DI", descripcion: "Inversión de Control e Inyección de Dependencias (Spring controla los objetos)." }
        ],
        puntosClave: [
            "GET para consultar, POST para crear, PUT para actualizar y DELETE para eliminar.",
            "Preferir inyección por constructor sobre @Autowired en campos.",
            "ResponseEntity permite controlar códigos de estado y headers HTTP.",
            "El POST exitoso debe retornar un código 201 Created.",
            "Los controladores deben ser livianos y delegar al Service."
        ],
        codigoEjemplo: "@RestController\n@RequestMapping(\"/api/v1/products\")\npublic class ProductController {\n    private final ProductService service;\n    public ProductController(ProductService service) {\n        this.service = service;\n    }\n    @GetMapping\n    public ResponseEntity<List<ProductDTO>> getAll() {\n        return ResponseEntity.ok(service.findAll());\n    }\n    @PostMapping\n    public ResponseEntity<ProductDTO> create(@RequestBody ProductDTO dto) {\n        return ResponseEntity.status(HttpStatus.CREATED).body(service.save(dto));\n    }\n}"
    },
    3: {
        titulo: "Componentes, Anotaciones y Flujo de Datos",
        resumen: "Profundización en el flujo de una petición desde el Controller hasta la BD, el rol de los DTOs para proteger la integridad de las Entidades y la arquitectura de microservicios distribuidos.",
        conceptos: [
            { nombre: "Entity", descripcion: "Representación exacta de una tabla en la base de datos." },
            { nombre: "DTO", descripcion: "Data Transfer Object. Se usa para enviar solo los datos necesarios al cliente." },
            { nombre: "Mapper", descripcion: "Lógica para transformar Entities en DTOs y viceversa." },
            { nombre: "API Gateway", descripcion: "Pasarela que recibe peticiones y las distribuye a los microservicios." },
            { nombre: "Flujo de Petición", descripcion: "Controller -> Service -> Repository -> Entity -> Base de Datos." }
        ],
        puntosClave: [
            "Nunca devolver las Entities directamente al cliente (usar DTOs).",
            "Los microservicios corren en puertos diferentes e independientes.",
            "JpaRepository ya tiene métodos predefinidos como findAll() y save().",
            "Separar capas ayuda al mantenimiento y escalabilidad.",
            "Las anotaciones como @Table y @Column definen el mapeo a la BD."
        ],
        codigoEjemplo: "@Entity\n@Table(name = \"contacts\")\npublic class Contact {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String nombre;\n    private String correo;\n}\n\npublic class ContactDTO {\n    private Long id;\n    private String nombre;\n    private int edad; // Campo calculado, no está en BD\n}"
    },
    4: {
        titulo: "Consumo de APIs Externas y Mapeo de JSON",
        resumen: "Cómo configurar Spring Boot para pedir datos a servicios externos (ej. PokeAPI) usando RestTemplate y mapear las respuestas JSON automáticamente a objetos Java.",
        conceptos: [
            { nombre: "RestTemplate", descripcion: "Herramienta síncrona para realizar peticiones HTTP (deprecada en favor de WebClient)." },
            { nombre: "Lombok @Data", descripcion: "Anotación que genera automáticamente getters, setters y constructores." },
            { nombre: "Mapeo JSON", descripcion: "Conversión automática de JSON a Java si los nombres y tipos coinciden." },
            { nombre: "Orquestador", descripcion: "Configurar el microservicio como intermediario entre cliente y APIs externas." }
        ],
        puntosClave: [
            "RestTemplate.getForEntity() para obtener una respuesta HTTP completa.",
            "En el mapeo, JSON 'base_experience' se mapea a Java 'baseExperience'.",
            "@PathVariable extrae variables directamente de la URL.",
            "Se deben organizar DTOs en paquetes de 'request' y 'response'.",
            "Spring actúa como puente procesando y filtrando datos externos."
        ],
        codigoEjemplo: "@GetMapping(\"/pokemon/{name}\")\npublic ResponseEntity<PokemonDTO> getPokemon(@PathVariable String name) {\n    String url = \"https://pokeapi.co/api/v2/pokemon/\" + name;\n    RestTemplate restTemplate = new RestTemplate();\n    return restTemplate.getForEntity(url, PokemonDTO.class);\n}"
    },
    5: {
        titulo: "Mappers, Validaciones y Filtrado de Datos",
        resumen: "Técnicas para transformar y filtrar respuestas gigantes de APIs externas. Uso de Java Streams para manejar listas y manejo de errores con ResponseStatusException.",
        conceptos: [
            { nombre: "Mapper Manual", descripcion: "Clase @Component dedicada a transformar un objeto en otro de forma controlada." },
            { nombre: "ResponseStatusException", descripcion: "Lanza errores HTTP personalizados (404, 500) con mensajes claros." },
            { nombre: "Filtrado", descripcion: "Seleccionar solo campos relevantes del JSON externo para la respuesta final." },
            { nombre: "Java Streams", descripcion: "Uso de .map() y .collect() para transformar colecciones eficientemente." }
        ],
        puntosClave: [
            "Validar siempre si response.getBody() es null antes de operar.",
            "Separar la lógica de mapeo del Service hace el código más testeable.",
            "Reducir el tamaño de las respuestas mejora el performance de la API.",
            "Lanzar 404 Not Found si el recurso externo no existe.",
            "Usar .stream().map() simplifica la transformación de listas de objetos."
        ],
        codigoEjemplo: "public List<String> mapMoveNames(PokemonResponse response) {\n    return response.getMoves().stream()\n        .map(move -> move.getMove().getName())\n        .collect(Collectors.toList());\n}"
    },
    6: {
        titulo: "WebClient y Programación Asíncrona",
        resumen: "Introducción a WebClient, el cliente HTTP moderno de Spring. Se explica la diferencia entre procesos síncronos (bloqueantes) y asíncronos (reactivos).",
        conceptos: [
            { nombre: "WebClient", descripcion: "Cliente HTTP reactivo, moderno y no bloqueante." },
            { nombre: "Mono<T>", descripcion: "Publisher reactivo que emite 0 o 1 elemento." },
            { nombre: "Flux<T>", descripcion: "Publisher reactivo que emite una secuencia de 0 a N elementos." },
            { nombre: "Asíncrono", descripcion: "Permite ejecutar múltiples tareas sin esperar a que una termine." }
        ],
        puntosClave: [
            "WebClient reemplaza al antiguo RestTemplate.",
            "Es más eficiente en aplicaciones con mucha concurrencia.",
            "Uso de @Configuration para crear un Bean de WebClient global.",
            "Configurar timeouts (5s) para evitar que la app espere indefinidamente.",
            ".block() convierte el Mono reactivo en un objeto normal (bloqueante)."
        ],
        codigoEjemplo: "public DigimonResponse getDigimon(String name) {\n    return webClient.get()\n        .uri(\"/name/{name}\", name)\n        .retrieve()\n        .bodyToMono(DigimonResponse.class)\n        .block();\n}"
    },
    7: {
        titulo: "Builder Pattern y Reutilización de Código",
        resumen: "Uso de @Builder de Lombok para construir objetos complejos y cómo reutilizar métodos en los Services para evitar duplicar llamadas HTTP innecesarias.",
        conceptos: [
            { nombre: "@Builder", descripcion: "Patrón floral para instanciar objetos campo por campo de forma legible." },
            { nombre: "Reutilización", descripcion: "Tener un solo método que realice la llamada HTTP base." },
            { nombre: "DRY", descripcion: "Don't Repeat Yourself. Principio de no duplicar lógica." },
            { nombre: "Null Safety", descripcion: "Manejo de valores nulos con operadores ternarios por defecto." }
        ],
        puntosClave: [
            "Builder evita constructores gigantes con muchos parámetros.",
            "El código es más limpio: .campo1(v).campo2(v).build().",
            "Mapear diferentes DTOs llamando al mismo método de la API base.",
            "Manejar campos Boolean nulos poniéndoles 'false' por defecto.",
            "Facilita la creación de objetos de prueba en los tests."
        ],
        codigoEjemplo: "DigimonDTO dto = DigimonDTO.builder()\n    .name(response.getName())\n    .level(response.getLevel())\n    .isAvailable(response.getValid() != null ? response.getValid() : false)\n    .build();"
    },
    8: {
        titulo: "Mapeo Avanzado con Listas y Validaciones",
        resumen: "Manejo de estructuras JSON complejas con múltiples listas anidadas. Validar cada lista antes de procesarla para evitar fallos catastróficos.",
        conceptos: [
            { nombre: "Multi-Listas", descripcion: "Mapear un objeto que contiene varias listas de tipos diferentes." },
            { nombre: "Collections.emptyList()", descripcion: "Retornar una lista vacía inmutable en lugar de null." },
            { nombre: "Validación Robusta", descripcion: "Comprobar (lista != null && !lista.isEmpty()) antes de usar Streams." }
        ],
        puntosClave: [
            "NullPointerException es el error más común al procesar listas de APIs.",
            "Collections.emptyList() es más eficiente en memoria que crear un ArrayList.",
            "Mapear cada lista por separado en el mismo objeto de respuesta.",
            "Usar Operador Ternario para asignar valores por defecto en una línea.",
            "Consolidar múltiples fuentes de datos en un solo DTO final."
        ],
        codigoEjemplo: "List<String> types = (response.getTypes() != null) \n    ? response.getTypes().stream().map(t -> t.getName()).collect(Collectors.toList())\n    : Collections.emptyList();"
    },
    9: {
        titulo: "JPA Repository y CRUD con Base de Datos",
        resumen: "Conexión real a MySQL/PostgreSQL. Implementación de operaciones Create, Read, Update y Delete usando interfaces de Spring Data JPA.",
        conceptos: [
            { nombre: "CRUD", descripcion: "Create (Crear), Read (Leer), Update (Actualizar), Delete (Eliminar)." },
            { nombre: "JpaRepository", descripcion: "Interface que brinda métodos como save(), findById() y deleteById()." },
            { nombre: "ddl-auto=update", descripcion: "Configuración que actualiza las tablas automáticamente al cambiar el código." },
            { nombre: "Primary Key", descripcion: "Identificador único de cada registro (anotado con @Id)." }
        ],
        puntosClave: [
            "Spring convierte las clases @Entity en tablas SQL automáticamente.",
            "repository.save() sirve tanto para guardar como para actualizar.",
            "Se deben configurar credenciales en application.properties.",
            "Usar Optional con orElseThrow para manejar registros no encontrados.",
            "show-sql=true permite ver las consultas reales en la consola de Spring."
        ],
        codigoEjemplo: "@Repository\npublic interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> { }\n\n// Uso en Service\npublic UsuarioEntity save(UsuarioDTO dto) {\n    UsuarioEntity entity = new UsuarioEntity();\n    entity.setNombre(dto.getNombre());\n    return repository.save(entity);\n}"
    },
    10: {
        titulo: "Apache Camel para Integración",
        resumen: "Introducción a Apache Camel como orquestador de microservicios. Creación de rutas (Routes) y procesamiento de mensajes entre endpoints.",
        conceptos: [
            { nombre: "Apache Camel", descripcion: "Framework de integración para conectar aplicaciones y servicios." },
            { nombre: "RouteBuilder", descripcion: "Clase donde se definen las rutas 'from' (origen) y 'to' (destino)." },
            { nombre: "ProducerTemplate", descripcion: "Herramienta para enviar mensajes y arrancar rutas desde Java." },
            { nombre: "Exchange", descripcion: "Contenedor que lleva los datos (headers, body) por toda la ruta." }
        ],
        puntosClave: [
            "Camel facilita la comunicación entre microservicios de forma visual/lógica.",
            ".process() permite inyectar código Java puro en medio de una ruta.",
            "toD() permite enviar datos a URLs dinámicas usando cabeceras.",
            "Permite transformar formatos (JSON a XML o viceversa) vía componentes.",
            "Es ideal para integrar sistemas legacy con microservicios modernos."
        ],
        codigoEjemplo: "public void configure() {\n    from(\"direct:getDigimon\")\n        .setHeader(Exchange.HTTP_METHOD, constant(\"GET\"))\n        .toD(\"https://api.digimon.com/${header.name}\")\n        .unmarshal().json(JsonLibrary.Jackson, Digimon.class);\n}"
    },
    11: {
        titulo: "Camel - Llamadas Paralelas y Agregación",
        resumen: "Uso de Multicast para consultar varios servicios al mismo tiempo y AggregationStrategy para combinar sus respuestas en un único objeto final.",
        conceptos: [
            { nombre: "Multicast", descripcion: "Envía una copia del mensaje a varias rutas en paralelo simultáneamente." },
            { nombre: "AggregationStrategy", descripcion: "Lógica para unir dos respuestas diferentes en una sola estructura." },
            { nombre: "ParallelProcessing", descripcion: "Activar el uso de varios hilos para ganar velocidad en peticiones." }
        ],
        puntosClave: [
            "Hacer llamadas en paralelo reduce drásticamente los tiempos de espera.",
            "Aggregation evita que la segunda respuesta sobrescriba la primera.",
            "Uso de 'instanceof' en Java para saber de qué microservicio es cada respuesta.",
            "Se pueden configurar timeouts globales para el multicast.",
            "Permite consolidar información de 5 o más APIs en segundos."
        ],
        codigoEjemplo: "from(\"direct:start\")\n    .multicast(new MyAggregator()).parallelProcessing()\n        .to(\"direct:api1\", \"direct:api2\")\n    .end();"
    },
    12: {
        titulo: "Arquitectura Hexagonal (Ports and Adapters)",
        resumen: "Conceptos avanzados de arquitectura para grandes empresas. Separar la lógica de negocio (Núcleo) de los componentes técnicos (Frameworks, DB, APIs).",
        conceptos: [
            { nombre: "Capa de Dominio", descripcion: "El corazón del software. Solo contiene lógica pura de negocio." },
            { nombre: "Puertos (Ports)", descripcion: "Interfaces que definen qué necesita el dominio desde afuera." },
            { nombre: "Adaptadores", descripcion: "Implementaciones técnicas (Controller, JPA, RestTemplate)." },
            { nombre: "Independencia", descripcion: "Poder cambiar de base de datos sin tocar la lógica del negocio." }
        ],
        puntosClave: [
            "Inversión de dependencias: El núcleo no conoce el framework.",
            "Arquitectura ideal para microservicios que evolucionarán a largo plazo.",
            "Entities de dominio llevan la lógica, Entities de persistencia solo datos.",
            "Facilita enormemente las pruebas unitarias al estar tan desacoplado.",
            "Aunque es más complejo de montar, ahorra mucho mantenimiento luego."
        ],
        codigoEjemplo: "// Puerto (Contrato)\npublic interface UserRepository {\n    void save(User user);\n}\n\n// Adaptador (Implementación técnica)\n@Component\npublic class UserJpaAdapter implements UserRepository {\n    private final JpaRepo jpa; \n    public void save(User user) { jpa.save(mapToEntity(user)); }\n}"
    },
    13: {
        titulo: "Testing Unitario (Unit Tests)",
        resumen: "Aprender a escribir pruebas automáticas para asegurar que los cambios no rompan funcionalidades existentes. Uso de JUnit 5 y Mockito para simular dependencias.",
        conceptos: [
            { nombre: "Test Unitario", descripcion: "Prueba aislada de un método o clase pequeña." },
            { nombre: "Mockito", descripcion: "Herramienta para crear 'Mocks' (objetos falsos) de la BD o servicios." },
            { nombre: "Assertions", descripcion: "Verificaciones: assertEquals(esperado, real)." },
            { nombre: "Patrón AAA", descripcion: "Arrange (Preparar), Act (Ejecutar), Assert (Verificar)." }
        ],
        puntosClave: [
            "Probar el 'camino feliz' y también los casos de error (excepciones).",
            "@Mock crea el objeto falso, @InjectMocks inyecta esos falsos en tu clase.",
            "Los tests deben ser rápidos y no depender de servicios externos reales.",
            "verify() asegura que se llamó a un método las veces necesarias.",
            "Un buen test documenta cómo debe comportarse el código."
        ],
        codigoEjemplo: "@Test\nvoid testService() {\n    when(repo.find(1L)).thenReturn(new User(\"Test\"));\n    User result = service.get(1L);\n    assertEquals(\"Test\", result.getNombre());\n    verify(repo).find(1L);\n}"
    }
};
