/**
 * GESSOF Academy - Datos de Evaluación
 * 15 Preguntas sobre Microservicios con Spring Boot
 */

const EVALUATION_DATA = {
    title: "Evaluación de Microservicios con Spring Boot",
    description: "Esta evaluación consta de 15 preguntas sobre los temas vistos en el curso de Java Spring Boot (Niveles 1 y 2).",
    passingScore: 80, // Porcentaje mínimo para aprobar
    totalQuestions: 15,
    questions: [
        {
            id: 1,
            title: "PREGUNTA 1 - Definición de Microservicios",
            section: "Sección 1",
            text: "¿Qué característica define principalmente a un microservicio?",
            options: {
                a: "Es una aplicación que usa MongoDB como base de datos",
                b: "Es un servicio pequeño y autónomo que hace una cosa bien",
                c: "Es una aplicación que solo funciona con Spring Boot",
                d: "Es un programa que debe ejecutarse en Kubernetes"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 1 se define que "Un microservicio es un servicio pequeño, autónomo que hace una cosa bien" y que "cada microservicio se enfoca en una capacidad de negocio específica".\n- ❌ **a) es FALSA** porque el curso no menciona MongoDB como requisito. Los microservicios pueden usar cualquier base de datos (el curso usa PostgreSQL).\n- ❌ **c) es FALSA** porque aunque el curso usa Spring Boot, los microservicios pueden implementarse con cualquier tecnología (Node.js, Python, Go, etc.).\n- ❌ **d) es FALSA** porque los microservicios pueden ejecutarse en Docker, máquinas virtuales o servidores físicos, no solo Kubernetes.`
        },
        {
            id: 2,
            title: "PREGUNTA 2 - Eureka Server",
            section: "Sección 5",
            text: "¿Qué función cumple Eureka Server en una arquitectura de microservicios?",
            options: {
                a: "Compila el código Java de los microservicios",
                b: "Funciona como base de datos principal del sistema",
                c: "Actúa como Service Registry donde los microservicios se registran y descubren",
                d: "Maneja la autenticación de usuarios con OAuth2"
            },
            correctAnswer: "c",
            explanation: `**EXPLICACIÓN:**\n- ✅ **c) es CORRECTA** porque en la Sección 5 se explica que "Eureka Server es el Service Registry donde los microservicios se registran automáticamente al iniciar" y permite "Service Discovery para que servicios se encuentren dinámicamente".\n- ❌ **a) es FALSA** porque Eureka no compila código, esa función la realiza Maven con el compilador Java.\n- ❌ **b) es FALSA** porque Eureka no almacena datos de negocio, solo mantiene un registro de servicios disponibles. La base de datos del curso es PostgreSQL.\n- ❌ **d) es FALSA** porque la autenticación OAuth2 la maneja Keycloak (Sección 12), no Eureka.`
        },
        {
            id: 3,
            title: "PREGUNTA 3 - Docker Compose",
            section: "Sección 10",
            text: "¿Para qué se utiliza docker-compose.yml?",
            options: {
                a: "Para compilar el código Java de los microservicios",
                b: "Para definir y orquestar múltiples contenedores de servicios",
                c: "Para configurar las rutas del API Gateway",
                d: "Para crear la base de datos PostgreSQL manualmente"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 10 se explica que "docker-compose.yml permite definir y orquestar múltiples servicios (contenedores) en un solo archivo" y "facilita levantar todo el sistema con docker-compose up".\n- ❌ **a) es FALSA** porque docker-compose no compila código, ejecuta contenedores ya construidos. La compilación la hace Maven.\n- ❌ **c) es FALSA** porque las rutas del Gateway se configuran en application.yml del api-gateway, no en docker-compose.\n- ❌ **d) es FALSA** porque docker-compose usa la imagen oficial de PostgreSQL, no crea la base de datos manualmente.`
        },
        {
            id: 4,
            title: "PREGUNTA 4 - API Gateway",
            section: "Sección 11",
            text: "¿Cuál es la ventaja principal de usar un API Gateway según el curso?",
            options: {
                a: "Aumenta la velocidad de compilación de Maven",
                b: "Proporciona un punto de entrada único para todos los microservicios",
                c: "Reemplaza completamente a Eureka Server",
                d: "Elimina la necesidad de usar Docker"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 11 se destaca que "API Gateway actúa como Single Entry Point (punto de entrada único)" y "el cliente solo conoce la URL del Gateway, no de cada microservicio".\n- ❌ **a) es FALSA** porque el Gateway no afecta la compilación de Maven, son conceptos completamente separados.\n- ❌ **c) es FALSA** porque el Gateway y Eureka trabajan juntos: el Gateway usa Eureka para descubrir servicios dinámicamente (lb://SERVICE-NAME).\n- ❌ **d) es FALSA** porque Docker y Gateway son conceptos independientes. De hecho, en el curso el Gateway también se dockeriza.`
        },
        {
            id: 5,
            title: "PREGUNTA 5 - JWT",
            section: "Sección 12",
            text: "¿Cuántas partes tiene un JWT (JSON Web Token)?",
            options: {
                a: "2 partes: header y payload",
                b: "3 partes: header, payload y signature",
                c: "4 partes: header, payload, signature y metadata",
                d: "1 parte: el token completo sin divisiones"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 12 se explica que "JWT tiene tres partes separadas por puntos: header.payload.signature" donde "header contiene algoritmo y tipo, payload contiene claims (sub, roles, exp), y signature es la firma digital".\n- ❌ **a) es FALSA** porque le falta la tercera parte: la signature (firma digital) que es crucial para validar la integridad del token.\n- ❌ **c) es FALSA** porque JWT solo tiene 3 partes, no existe una cuarta parte llamada metadata.\n- ❌ **d) es FALSA** porque JWT está dividido en tres partes distintas separadas por puntos, no es un bloque único.`
        },
        {
            id: 6,
            title: "PREGUNTA 6 - Database per Service",
            section: "Sección 1",
            text: "¿Qué implica el patrón 'Database per Service' en microservicios?",
            options: {
                a: "Todos los microservicios comparten una única base de datos centralizada",
                b: "Cada microservicio tiene su propia base de datos aislada",
                c: "Los microservicios no pueden usar bases de datos",
                d: "Solo el API Gateway puede acceder a la base de datos"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 1 se establece que "cada microservicio debe tener su propia base de datos (Database per Service)" para "garantizar independencia y evitar acoplamiento". En el curso, Customer, Product y Transaction tienen cada uno su propia BD PostgreSQL.\n- ❌ **a) es FALSA** porque compartir una base de datos viola el principio de independencia de microservicios y crea acoplamiento tight.\n- ❌ **c) es FALSA** porque los microservicios SÍ usan bases de datos, pero cada uno la suya propia.\n- ❌ **d) es FALSA** porque el Gateway no accede directamente a bases de datos, solo enruta requests a los microservicios que sí las usan.`
        },
        {
            id: 7,
            title: "PREGUNTA 7 - WebClient",
            section: "Sección 4",
            text: "¿Por qué el curso recomienda usar WebClient en lugar de RestTemplate para comunicación entre microservicios?",
            options: {
                a: "Porque WebClient es síncrono y bloqueante",
                b: "Porque WebClient es reactivo y non-blocking, ofreciendo mejor performance",
                c: "Porque RestTemplate no funciona con Spring Boot 3",
                d: "Porque WebClient no requiere configuración"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 4 se explica que "WebClient es el cliente HTTP reactivo y non-blocking recomendado" y que "ofrece mejor performance que RestTemplate que es síncrono y bloqueante".\n- ❌ **a) es FALSA** porque es al revés: WebClient es NON-blocking (no bloqueante) y reactivo, mientras que RestTemplate es el síncrono y bloqueante.\n- ❌ **c) es FALSA** porque RestTemplate sigue funcionando en Spring Boot 3, solo está deprecated (no recomendado), pero no eliminado.\n- ❌ **d) es FALSA** porque WebClient SÍ requiere configuración (crear bean WebClient.Builder con @LoadBalanced para usar Eureka).`
        },
        {
            id: 8,
            title: "PREGUNTA 8 - Config Server",
            section: "Sección 5",
            text: "¿Cuál es la ventaja principal de usar Spring Cloud Config Server?",
            options: {
                a: "Permite configuración centralizada y actualización sin redeploy con @RefreshScope",
                b: "Reemplaza completamente a application.properties",
                c: "Solo funciona con archivos en formato JSON",
                d: "Mejora la velocidad de compilación de Maven"
            },
            correctAnswer: "a",
            explanation: `**EXPLICACIÓN:**\n- ✅ **a) es CORRECTA** porque en la Sección 5 se destaca que "Config Server permite configuración centralizada versionada" y "con @RefreshScope los servicios pueden actualizar configuración sin reiniciar (refresh dinámico)".\n- ❌ **b) es FALSA** porque Config Server complementa a application.properties, no lo reemplaza. Los servicios pueden tener configuración local + centralizada.\n- ❌ **c) es FALSA** porque Config Server soporta archivos .properties y .yml (YAML), no solo JSON.\n- ❌ **d) es FALSA** porque Config Server no tiene nada que ver con la compilación de Maven, son conceptos totalmente separados.`
        },
        {
            id: 9,
            title: "PREGUNTA 9 - Spring Boot Admin",
            section: "Sección 6",
            text: "¿Qué información proporciona Spring Boot Admin Server según el curso?",
            options: {
                a: "Solo el código fuente de los microservicios",
                b: "Métricas, health checks, logs y detalles de configuración de todos los servicios",
                c: "Únicamente la versión de Java instalada",
                d: "Acceso directo a la base de datos PostgreSQL"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 6 se explica que "Admin Server proporciona UI centralizada con métricas (CPU, memoria), health checks, logs en tiempo real, información de threads, y detalles de configuración de todos los servicios registrados".\n- ❌ **a) es FALSA** porque Admin Server no muestra código fuente, muestra información de runtime (ejecución) de los servicios.\n- ❌ **c) es FALSA** porque aunque muestra la versión de Java, proporciona MUCHA más información: métricas, health, logs, etc.\n- ❌ **d) es FALSA** porque Admin Server no proporciona acceso a la base de datos, eso lo hacen herramientas como pgAdmin o DBeaver.`
        },
        {
            id: 10,
            title: "PREGUNTA 10 - Docker Volumes",
            section: "Sección 10",
            text: "¿Para qué se usan volumes en Docker Compose con PostgreSQL?",
            options: {
                a: "Para aumentar la velocidad de las consultas SQL",
                b: "Para persistir los datos incluso cuando el contenedor se elimina",
                c: "Para compilar automáticamente el código Java",
                d: "Para compartir configuración con Eureka Server"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 10 se explica que "volumes en Docker permiten persistir datos fuera del contenedor" y que "cuando el contenedor de PostgreSQL se elimina, los datos en el volume permanecen (postgres-data:/var/lib/postgresql/data)".\n- ❌ **a) es FALSA** porque volumes no afectan la velocidad de consultas, solo la persistencia de datos.\n- ❌ **c) es FALSA** porque la compilación de Java la hace Maven, no Docker volumes.\n- ❌ **d) es FALSA** porque volumes son para persistencia de datos, no para compartir configuración entre servicios (eso lo hace Config Server).`
        },
        {
            id: 11,
            title: "PREGUNTA 11 - Gateway Filters",
            section: "Sección 11",
            text: "¿Cuál es la diferencia entre un GatewayFilter y un GlobalFilter?",
            options: {
                a: "GatewayFilter se aplica a rutas específicas, GlobalFilter se aplica a todas las rutas",
                b: "GatewayFilter es para POST, GlobalFilter es para GET",
                c: "GatewayFilter solo funciona con Eureka, GlobalFilter no",
                d: "No hay diferencia, son lo mismo"
            },
            correctAnswer: "a",
            explanation: `**EXPLICACIÓN:**\n- ✅ **a) es CORRECTA** porque en la Sección 11 se explica que "GatewayFilter se configura para rutas específicas en application.yml (filters: - Authentication)" mientras que "GlobalFilter se aplica automáticamente a TODAS las rutas (ej: LoggingGlobalFilter implementa GlobalFilter)".\n- ❌ **b) es FALSA** porque ambos tipos de filtros se aplican a cualquier método HTTP (GET, POST, PUT, DELETE), no están limitados por método.\n- ❌ **c) es FALSA** porque tanto GatewayFilter como GlobalFilter pueden usar Eureka (mediante lb://SERVICE-NAME), no hay diferencia en este aspecto.\n- ❌ **d) es FALSA** porque SÍ hay diferencia crucial: scope de aplicación (específico vs global).`
        },
        {
            id: 12,
            title: "PREGUNTA 12 - OAuth2 Grant Types",
            section: "Sección 12",
            text: "¿Qué Grant Type de OAuth2 se usa en los ejemplos prácticos para obtener tokens de Keycloak?",
            options: {
                a: "Authorization Code Flow",
                b: "Client Credentials Flow",
                c: "Password Grant (Resource Owner Password Credentials)",
                d: "Implicit Flow"
            },
            correctAnswer: "c",
            explanation: `**EXPLICACIÓN:**\n- ✅ **c) es CORRECTA** because in the Section 12 se usa "Password Grant" donde el request a Keycloak incluye "grant_type=password, username=admin-user, password=123456". El curso menciona que "este flow es menos seguro pero útil para demos".\n- ❌ **a) es FALSA** porque Authorization Code Flow requiere redirect URIs y es más seguro pero más complejo. El curso lo menciona como "el más seguro para apps web" pero no es el usado en ejemplos.\n- ❌ **b) es FALSA** porque Client Credentials se usa para machine-to-machine (sin usuario), el curso lo menciona pero no lo usa en los ejemplos prácticos.\n- ❌ **d) es FALSA** porque Implicit Flow está deprecated y el curso no lo recomienda, sugiere usar PKCE para SPAs en su lugar.`
        },
        {
            id: 13,
            title: "PREGUNTA 13 - Load Balancing",
            section: "Sección 5",
            text: "Cuando se usa @LoadBalanced con WebClient y lb://CUSTOMER-SERVICE, ¿quién decide a qué instancia de Customer Service enviar el request?",
            options: {
                a: "API Gateway decide y envía al servidor",
                b: "Eureka Server decide y enruta directamente",
                c: "El cliente (Transaction Service) decide usando Client-Side Load Balancing",
                d: "PostgreSQL decide basándose en la carga de la base de datos"
            },
            correctAnswer: "c",
            explanation: `**EXPLICACIÓN:**\n- ✅ **c) es CORRECTA** porque en la Sección 5 se explica que "@LoadBalanced habilita Client-Side Load Balancing" donde "el cliente (ej: Transaction Service) consulta a Eureka las instancias disponibles de CUSTOMER-SERVICE y DECIDE localmente (usando algoritmo Round Robin) a cuál enviar el request".\n- ❌ **a) es FALSA** porque en este flujo no pasa por Gateway. Transaction llama directamente a Customer usando WebClient + Eureka.\n- ❌ **b) es FALSA** porque Eureka solo proporciona la lista de instancias disponibles, NO enruta requests. El enrutamiento lo hace el cliente.\n- ❌ **d) es FALSA** porque PostgreSQL no participa en decisiones de load balancing, solo almacena datos.`
        },
        {
            id: 14,
            title: "PREGUNTA 14 - Filtros de Autorización",
            section: "Sección 12",
            text: "¿Qué sucede si un usuario con rol USER intenta hacer un POST a /api/v1/customer cuando el Gateway requiere rol ADMIN?",
            options: {
                a: "El Gateway retorna 401 Unauthorized",
                b: "El Gateway retorna 403 Forbidden",
                c: "El Gateway retorna 404 Not Found",
                d: "El Gateway retorna 200 OK y ejecuta el POST"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en la Sección 12 se explica que "cuando usuario está autenticado (tiene token válido) pero NO tiene el rol requerido, AuthorizationFilter retorna 403 Forbidden". El usuario USER tiene token válido pero le falta rol ADMIN.\n- ❌ **a) es FALSA** porque 401 Unauthorized se retorna cuando NO hay token o el token es inválido/expirado. Aquí el usuario SÍ está autenticado (tiene token USER válido).\n- ❌ **c) es FALSA** porque 404 Not Found indica que el endpoint no existe, pero /api/v1/customer SÍ existe, el problema es de permisos.\n- ❌ **d) es FALSA** porque el Gateway bloquea el request en el AuthorizationFilter antes de llegar al microservicio Customer.`
        },
        {
            id: 15,
            title: "PREGUNTA 15 - Puertos Aleatorios",
            section: "Secciones 10, 11",
            text: "¿Por qué se configuran los microservicios con puertos aleatorios (server.port=0) cuando se dockerizan?",
            options: {
                a: "Para mejorar la seguridad ocultando el puerto real",
                b: "Para permitir múltiples instancias sin conflictos de puerto y facilitar escalado horizontal",
                c: "Porque Docker no soporta puertos fijos",
                d: "Para que Keycloak pueda validar los tokens correctamente"
            },
            correctAnswer: "b",
            explanation: `**EXPLICACIÓN:**\n- ✅ **b) es CORRECTA** porque en las Secciones 10 y 11 se explica que "puertos aleatorios (server.port=\$\{random.int[8081,8999]\} o server.port=0) permiten ejecutar múltiples instancias del mismo servicio sin conflictos" y "facilitan escalado horizontal (docker-compose up -d --scale customer-service=3)". El Gateway accede vía Eureka (lb://CUSTOMER-SERVICE), no por puerto directo.\n- ❌ **a) es FALSA** porque el objetivo NO es seguridad, es escalabilidad. Los servicios están aislados en red Docker de todos modos.\n- ❌ **c) es FALSA** porque Docker SÍ soporta puertos fijos (de hecho el Gateway usa 8080 fijo). Los aleatorios son una elección de diseño, no limitación técnica.\n- ❌ **d) es FALSA** porque la validación de Keycloak no depende del puerto del microservicio, valida el JWT independientemente del puerto.`
        }
    ]
};
