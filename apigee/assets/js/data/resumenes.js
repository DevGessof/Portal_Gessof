/**
 * RESÚMENES COMPLETOS - CURSO APIGEE X
 * =====================================
 * Resúmenes completos extraídos de archivos .txt
 * Generado automáticamente por parse_resumenes.py
 */

const RESUMENES_COMPLETOS = {
  seccion1: {
    1: `INTRODUCCIÓN AL CURSO
Este es el video de bienvenida al curso de Apigee en español. El instructor, Eduardo Celedonio, tiene aproximadamente seis años de experiencia ayudando a empresas (especialmente bancos y telecomunicaciones) a resolver problemas usando APIs y Apigee.
¿Para quién es este curso?
Este curso está diseñado para desarrolladores de software que ya tienen experiencia programando y quieren especializarse en Apigee. No es para principiantes en programación. Si nunca has programado, primero necesitas aprender los fundamentos de programación antes de tomar este curso.
¿Qué necesitas para el curso?

Un navegador web (Chrome, Firefox, etc.)
Postman (herramienta para probar APIs)
Un editor de código, preferiblemente Visual Studio Code
Una tarjeta de crédito o débito (solo para validar tu cuenta de Google Cloud, no te cobrarán)
Muchas ganas de aprender

El instructor está certificado por Google Cloud como desarrollador y arquitecto, lo que garantiza que el contenido viene de alguien con experiencia real trabajando con Apigee en la industria.
Qué deberías haber entendido al finalizar esta lección:

Este curso es para desarrolladores con experiencia previa, no para principiantes absolutos
Apigee es una herramienta profesional para gestionar APIs de manera avanzada
Necesitas algunas herramientas básicas instaladas antes de comenzar
La tarjeta de crédito es solo para validación, no te cobrarán automáticamente`,
    2: `CREACIÓN DE CUENTA DE GMAIL
Este video te guía paso a paso para crear una cuenta de Gmail, que es el primer requisito para poder usar Google Cloud Platform y, posteriormente, Apigee.
Pasos básicos:
El proceso es bastante directo: entras a gmail.com, haces clic en "Crear una cuenta" y seleccionas "para uso personal". Luego ingresas tu nombre, apellido, fecha de nacimiento y género. Debes elegir una dirección de correo única y crear una contraseña segura (que incluya letras, números y símbolos).
¿Por qué es importante?
Una contraseña fuerte protege tanto tu cuenta de Gmail como todos los proyectos que crearás en la nube. Opcionalmente puedes agregar un correo alternativo o número de teléfono para recuperar tu cuenta si olvidas la contraseña, aunque este paso puede omitirse.
Al finalizar, aceptas los términos y condiciones y listo: tienes una cuenta de Gmail activa. Esta cuenta es tu puerta de entrada a todo el ecosistema de Google Cloud.
Qué deberías haber entendido al finalizar esta lección:

Gmail es el punto de partida necesario para acceder a Google Cloud
Debes crear una contraseña segura para proteger tu cuenta
Esta cuenta te permitirá acceder a todos los servicios de Google Cloud Platform`,
    3: `CREACIÓN DE CUENTA EN GOOGLE CLOUD PLATFORM
Google Cloud Platform (GCP) es la plataforma en la nube de Google donde funciona Apigee. Para usar Apigee, primero debes activar una cuenta de prueba en GCP.
El proceso de activación:
Primero buscas "Cloud Console" en Google y accedes a la consola. Allí seleccionas "Comenzar gratis" para activar tu cuenta de prueba. GCP te pide algunos datos básicos: confirmas tu correo de Gmail, seleccionas tu país y aceptas los términos.
¿Por qué piden tarjeta de crédito?
Aquí viene la parte que genera dudas: GCP solicita un método de pago (tarjeta de crédito o débito). NO te preocupes, esto es solo una medida de seguridad para evitar fraudes o abusos en las cuentas de prueba. A la fecha del video, Google Cloud no realiza ningún cargo automático.
Configuración final:
Después de ingresar tus datos de pago, completas algunos campos sobre tu organización (puedes seleccionar "compañía pequeña"), indicas que estás usando GCP para "aprender o explorar", y seleccionas tu rol (por ejemplo, "Ingeniero/Desarrollador").
Una vez completado todo, tu cuenta de prueba de Google Cloud está lista para usarse y podrás comenzar a trabajar con Apigee.
Qué deberías haber entendido al finalizar esta lección:

GCP es la plataforma en la nube donde vive Apigee
La tarjeta de crédito es solo para validación de seguridad, no te cobran automáticamente
Una vez activada, tienes acceso completo a los servicios de Google Cloud en modo de prueba`,
    4: `ARQUITECTURA DE APIGEE X
Este video explica cómo funciona Apigee "por dentro" a nivel técnico. Aunque suena complicado, entender la arquitectura te ayudará a comprender por qué se configuran las cosas de cierta manera.
Las dos formas de configurar Apigee:
Apigee te ofrece dos opciones principales de arquitectura:

Con VPC Peering habilitado: Esta opción conecta dos redes (la tuya y la de Apigee) de forma directa. Es como construir un puente privado entre dos edificios. El "VPC Network Peering" permite que ambas redes intercambien datos sin pasar por Internet, lo cual es más seguro y rápido.
Con Private Service Connect (VPC Peering deshabilitado): Esta opción usa una tecnología diferente para conectar las redes, pero el concepto es similar: crear una conexión privada y segura.

El flujo básico de una llamada a un API:
Imagina que alguien desde Internet quiere usar tu API. El proceso es así:

Una aplicación cliente hace una llamada a tu API de Apigee
La solicitud llega primero a un "balanceador de cargas" (un componente que distribuye el tráfico)
El balanceador envía la solicitud a unas máquinas virtuales que actúan como "puente"
Estas máquinas se comunican con la red de Apigee
Apigee procesa la solicitud y la envía al servicio backend (tu sistema real)
La respuesta regresa por el mismo camino hasta el cliente

¿Por qué es importante entender esto?
Porque en el siguiente video vas a aprovisionar (configurar) tu organización de Apigee, y entender esta arquitectura te ayudará a comprender qué está pasando en cada paso de la configuración.
Qué deberías haber entendido al finalizar esta lección:

Apigee necesita conectar dos redes: la tuya y la de Google
Hay componentes como balanceadores de carga y máquinas virtuales que hacen posible esta conexión
El objetivo es que las llamadas a tus APIs fluyan de manera segura y eficiente
Esta arquitectura puede parecer compleja, pero todo se configura casi automáticamente`,
    5: `APROVISIONANDO TU ORGANIZACIÓN APIGEE X
"Aprovisionar" significa configurar y preparar todo lo necesario para que Apigee funcione. Este es el video más práctico e importante de la sección.
Paso 1: Crear un proyecto en Google Cloud
Primero creas un proyecto llamado "API Curso" (o el nombre que prefieras). Los proyectos en GCP son como contenedores donde organizas tus recursos.
Paso 2: Habilitar las APIs necesarias
La mayoría de servicios en Google Cloud funcionan a través de APIs. Para que Apigee trabaje correctamente, debes habilitar tres APIs:

Apigee API
Compute Engine API
Services Networking API

Paso 3: Configurar la red
Aquí las cosas se vuelven más técnicas. Apigee necesita un rango de direcciones IP para funcionar (algo llamado "notación CIDR /22"). Para este tutorial se usa la VPC "default" (una red que viene por defecto), pero en producción deberías crear una VPC personalizada.
También se configura un "VPC peering" que conecta tu red con la de Apigee de forma segura.
Paso 4: Seleccionar las regiones
Debes elegir dónde se alojarán tus datos. Se recomienda usar la misma región para los datos analíticos y el runtime (el motor de ejecución) para optimizar costos y rendimiento.
Paso 5: Aprovisionar
Das clic en "Aprovisionar" y... esperas. Este proceso puede tardar hasta 45 minutos. Es un buen momento para un café o descanso.
Paso 6: Configurar el Access Routing
Defines cómo los usuarios accederán a tus APIs:

External: Acceso desde Internet (cualquier persona)
Internal: Acceso restringido solo desde dentro de tu red

Para el tutorial se elige "External" y se usa un dominio wildcard (un dominio temporal que Google proporciona). En producción usarías tu propio dominio.
Verificación final:
Apigee crea un proxy de prueba que puedes llamar usando una URL específica. Debes guardar esta URL porque la usarás durante todo el curso.
Qué deberías haber entendido al finalizar esta lección:

Aprovisionar Apigee implica varios pasos de configuración técnica
El proceso es mayormente automático, pero toma tiempo (unos 45 minutos)
Al final obtienes una URL para probar que todo funciona correctamente
Ahora tienes una organización de Apigee lista para trabajar`,
    6: `ELIMINAR APIGEE X DE PRUEBA
IMPORTANTE: Este video debes verlo AL FINAL del curso, no ahora. Está incluido aquí para que sepas cómo eliminar todo cuando termines de aprender, evitando cargos innecesarios en tu cuenta.
¿Por qué eliminar?
Aunque estás usando una cuenta de prueba, si dejas Apigee funcionando por mucho tiempo podrías generar gastos. Este video te enseña cómo limpiar todo correctamente.
El proceso de eliminación:

Deshabilitar la facturación: Vas al menú "Billing" en GCP, seleccionas tu proyecto "curso-api" y deshabilitas el billing (facturación).
Eliminar el proyecto: Luego vas a "Cloud Overview", seleccionas tu proyecto y lo eliminas. Te pedirá confirmar el ID del proyecto para asegurarte de que realmente quieres borrarlo.
Verificación: Una vez eliminado, el proyecto desaparece de tu lista. Si intentas acceder a Apigee, verás que ya no existe tu organización.

¿Cuándo hacer esto?
Solo cuando hayas completado todo el curso y ya no necesites practicar. Mientras estés aprendiendo, mantén tu organización activa.
Qué deberías haber entendido al finalizar esta lección:

Este paso es para el FINAL del curso, no para ahora
Eliminar el proyecto evita cargos innecesarios
El proceso tiene dos pasos: deshabilitar billing y luego eliminar el proyecto
Una vez eliminado, deberás crear todo de nuevo si quieres volver a practicar`,
  },

  seccion2: {
    1: `EXPLOREMOS LA UI DE APIGEE X
================================================================================

La interfaz de Apigee se accede desde Google Cloud y está organizada en secciones específicas para diferentes funciones.

La pantalla principal (Overview) muestra accesos directos para crear proxies, la URL de tu organización, y estadísticas básicas. Cuando Apigee se configura por primera vez, incluye un API de prueba llamado "HelloWorld" que puedes probar directamente. La sección más importante es "Proxy Development" donde crearás tus API proxies - tiene tres pestañas: Overview (información general), Develop (configuración y políticas), y Debug (herramienta de diagnóstico).

Debug es particularmente útil porque permite iniciar sesiones de 10 minutos donde capturas el recorrido completo de cada petición, mostrando qué políticas se ejecutaron y qué variables se poblaron. Puedes descargar estas sesiones y compartirlas con tu equipo. Los Shared Flows son flujos reutilizables que evitan repetir código - por ejemplo, si varios proxies necesitan enviar logs de la misma manera, creas un shared flow y lo llamas desde cualquier proxy.

La sección "Developers" administra quienes consumen tus APIs. "Apps" permite relacionar desarrolladores con productos y generar API Keys. "Analytics" proporciona dashboards automáticos con tráfico, tiempos de respuesta y análisis por proxy. "Management" muestra información de tu organización: instancias, ubicación del runtime, rangos de IPs y ambientes configurados.

Algunas funcionalidades aún requieren acceder a la "UI clásica" (apigee.google.com) ya que Google Cloud está migrando gradualmente toda la interfaz. Cuando veas que falta alguna opción, busca el botón para acceder a la UI clásica.


================================================================================`,
    2: `¿QUÉ ES UN API PROXY?
================================================================================

Un API Proxy es un intermediario entre el cliente y tu backend que agrega funcionalidades sin modificar el código del backend.

Imagina que tienes un servicio backend en "https://mi-backend.com/users". En vez de dar esta URL directamente a los clientes, creas un API Proxy en Apigee que expone "https://mi-org.apigee.net/usuarios". Cuando alguien llama a tu proxy, Apigee recibe la petición, puede aplicar transformaciones, seguridad, validaciones, y luego llama al backend real. El cliente nunca sabe que existe un backend detrás.

Las ventajas principales son: agregar seguridad sin tocar el backend (API Keys, OAuth, validación de tokens), transformar datos (XML a JSON o viceversa), aplicar límites de uso (quotas, spike arrest), cachear respuestas para mejorar performance, y tener un punto centralizado para logs y monitoreo.

Un caso de uso común es cuando tienes un backend antiguo que responde en XML pero tus clientes móviles necesitan JSON. Con un proxy, transformas la respuesta automáticamente. Otro caso es agregar autenticación OAuth a un servicio que originalmente no la tenía.

El proxy funciona como capa de abstracción: el backend puede cambiar de tecnología o ubicación, pero mientras el proxy mantenga el mismo contrato con los clientes, ellos no se ven afectados.


================================================================================`,
    3: `CREANDO NUESTRO PRIMER API PROXY
================================================================================

En este video se crea el primer proxy de forma práctica usando el asistente de Apigee.

Vas a API Proxies y haces clic en "Create". Seleccionas "Reverse Proxy" que es el tipo más común - recibe peticiones y las reenvía a un backend. Le das un nombre como "my-first-proxy" y defines el Base Path "/v1/users" - esta es la ruta que expondrás a tus clientes.

En Target (backend), pones la URL real de tu servicio, por ejemplo "https://jsonplaceholder.typicode.com/users". Opcionalmente puedes habilitar CORS si lo necesitas para aplicaciones web. Luego das "Create" y Apigee genera el proxy automáticamente con configuración básica.

Después de crearlo puedes desplegarlo a un ambiente (eval o dev). Una vez desplegado, obtienes una URL completa como "https://tu-org.apigee.net/v1/users". Cuando llamas a esta URL, Apigee recibe la petición y la reenvía a tu backend en jsonplaceholder.

Puedes probar directamente desde la UI de Apigee o usar Postman. Si todo está bien configurado, recibes la respuesta del backend. Este es el flujo básico más simple: cliente → proxy → backend → proxy → cliente.


================================================================================`,
    4: `CONOCIENDO EL APIGEE API
================================================================================

Apigee tiene su propio API REST que permite automatizar tareas administrativas sin usar la interfaz gráfica.

El Apigee API te permite crear, actualizar, desplegar y eliminar proxies programáticamente. Esto es útil cuando tienes pipelines de CI/CD y quieres automatizar despliegues. Por ejemplo, puedes crear un script que al hacer commit en Git, automáticamente despliega la nueva versión del proxy a desarrollo.

La documentación del API está en la sección de referencia de Apigee. Ahí encuentras todos los endpoints disponibles organizados por recurso: proxies, productos, developers, apps, etc. Cada endpoint muestra qué parámetros acepta, qué devuelve, y ejemplos de uso.

Para usar el API necesitas autenticarte. Hay dos métodos principales: OAuth 2.0 con un access token, o usando las credenciales de tu cuenta de Google Cloud. El método más común es generar un access token y enviarlo en el header Authorization de tus peticiones.

Las operaciones típicas incluyen: listar todos los proxies de una organización, obtener detalles de un proxy específico, desplegar una revisión a un ambiente, o crear nuevos recursos como productos o apps.


================================================================================`,
    5: `ORGANIZACIONES DE APIGEE X
================================================================================

Una organización en Apigee es el contenedor principal donde viven todos tus recursos: proxies, productos, developers, ambientes, etc.

Cuando aprovisionas Apigee en Google Cloud, se crea automáticamente una organización con el mismo nombre que tu proyecto de GCP. Por ejemplo, si tu proyecto se llama "mi-proyecto-123", tu organización de Apigee también se llamará "mi-proyecto-123".

Dentro de una organización puedes tener múltiples ambientes (dev, test, prod) y cada ambiente puede tener diferentes configuraciones. Los proxies se despliegan a ambientes específicos - puedes tener una versión en desarrollo y otra diferente en producción.

La organización también determina ciertos límites y capacidades dependiendo de tu tipo de suscripción. Las organizaciones trial tienen límites como número máximo de ambientes o transacciones por segundo. Las organizaciones de pago (Standard o Enterprise) tienen límites mucho más altos.

Todos los recursos como KVMs, Target Servers, y configuraciones de seguridad están asociados a la organización. Si trabajas en múltiples proyectos, cada uno tendrá su propia organización de Apigee independiente.


================================================================================`,
    6: `GENERANDO UN ACCESS TOKEN PARA CONSUMIR EL APIGEE API
================================================================================

Para usar el Apigee API necesitas autenticarte con un access token de Google Cloud.

El comando más directo es "gcloud auth print-access-token" que genera un token temporal válido por aproximadamente una hora. Ejecutas este comando en tu terminal (requiere tener instalado gcloud CLI) y te devuelve un string largo que es el token.

Este token lo usas en el header Authorization de tus peticiones al Apigee API con el formato "Bearer [token]". Por ejemplo, si quieres listar todos los proxies, haces un GET a "https://apigee.googleapis.com/v1/organizations/[tu-org]/apis" con el header "Authorization: Bearer [tu-token]".

El token expira, así que si estás trabajando por mucho tiempo necesitarás generar uno nuevo. En scripts automatizados puedes incluir el comando para generar el token justo antes de hacer las peticiones al API.

Alternativamente puedes usar OAuth 2.0 creando una Service Account en Google Cloud, pero para pruebas rápidas el método con gcloud es más simple.


================================================================================`,
    7: `CONFIGURACIÓN DE ENVIRONMENTS Y ENVIRONMENT GROUPS
================================================================================

Los ambientes (Environments) permiten tener diferentes configuraciones para desarrollo, pruebas y producción.

Apigee crea automáticamente dos ambientes: "eval" (evaluación) y "prod" (producción). Puedes crear ambientes adicionales como "dev" o "test" dependiendo de tus necesidades. Cada ambiente tiene su propia configuración: KVMs, Target Servers, y variables específicas.

Los Environment Groups agrupan ambientes y les asignan hostnames. Por ejemplo, puedes tener un grupo "desarrollo" con hostname "dev-apis.tuempresa.com" que apunte al ambiente "dev", y otro grupo "produccion" con hostname "apis.tuempresa.com" que apunte a "prod".

Cuando despliegas un proxy a un ambiente, especificas cuál. Un proxy puede estar desplegado simultáneamente en múltiples ambientes con diferentes configuraciones. Por ejemplo, la versión 1.0 en producción y la versión 2.0 beta en desarrollo.

Para cambiar la configuración de un ambiente vas a Admin → Environments, seleccionas el ambiente y ahí puedes configurar propiedades, KVMs, o incluso borrar el ambiente si ya no lo necesitas.


================================================================================`,
    8: `LOAD BALANCING Y ENVIRONMENTS
================================================================================

Apigee puede distribuir tráfico entre múltiples backends usando load balancing a nivel de Target Servers.

Si tienes varios servidores backend (por ejemplo, tres instancias de tu servicio para alta disponibilidad), puedes configurar Target Servers en Apigee para cada uno. Luego en tu proxy, en vez de apuntar directamente a una URL, referencias el Target Server.

Apigee automáticamente distribuye las peticiones entre los servidores disponibles usando round-robin (cada petición va al siguiente servidor en la lista). Si un servidor está caído, Apigee lo detecta y deja de enviarle tráfico hasta que se recupere.

Esto es útil porque centralizas la configuración de tus backends. Si cambias la IP de un servidor, solo actualizas el Target Server en Apigee, no necesitas modificar cada proxy. Puedes tener diferentes Target Servers por ambiente - tus servidores de desarrollo apuntan a IPs de dev, y los de producción a IPs de prod.

La configuración de health checks permite que Apigee verifique periódicamente si los backends están funcionando, automáticamente removiendo del pool los que fallen.


================================================================================`,
    9: `CONFIGURANDO FRONTEND PARA AMBIENTE PRODUCTIVO
================================================================================

El frontend de un proxy es la URL que expones a tus clientes y se configura mediante Environment Groups.

Por defecto Apigee te da un hostname autogenerado como "eval-grupo-xyz.apigee.net". Para producción querrás usar tu propio dominio como "api.tuempresa.com". Para esto creas un Environment Group, le asignas el hostname personalizado, y lo vinculas al ambiente productivo.

Después necesitas configurar DNS para que tu dominio apunte a Apigee. Obtienes la IP del Environment Group desde la configuración de Apigee y creas un registro A en tu DNS apuntando ahí. Opcionalmente puedes configurar SSL/TLS subiendo tus certificados.

Una vez configurado, tus clientes pueden llamar a "https://api.tuempresa.com/v1/users" en vez de la URL autogenerada de Apigee. Esto da una imagen más profesional y te permite controlar completamente el dominio.

Puedes tener múltiples Environment Groups para diferentes propósitos: uno para APIs públicas, otro para APIs internas, etc., cada uno con su propio dominio.


================================================================================`,
    10: `SOLVENTANDO LÍMITE DE AMBIENTES EN ORGANIZACIÓN TRIAL
================================================================================

Las organizaciones trial de Apigee tienen límite de dos ambientes (eval y prod), pero puedes trabajar con esta limitación.

Si necesitas un ambiente de desarrollo pero ya tienes eval y prod, la solución más simple es usar "eval" como tu ambiente de desarrollo y reservar "prod" para cuando realmente vayas a producción. Renombrar no es posible, pero puedes cambiar la forma en que usas los ambientes.

Otra opción es crear diferentes revisiones del mismo proxy en el mismo ambiente. Por ejemplo, tienes revisión 1 estable y revisión 2 en desarrollo, ambas desplegadas en "eval". Usas diferentes base paths para diferenciarlas: "/v1/users" para la estable y "/v2/users" para la en desarrollo.

Para organizaciones de pago puedes crear hasta 12 ambientes, dándote total flexibilidad para tener dev, test, staging, prod, y otros que necesites. También puedes solicitar aumentos de límites contactando a soporte de Google Cloud.

La limitación de ambientes no afecta el número de proxies que puedes crear - solo limita dónde puedes desplegarlos.


================================================================================`,
    11: `APIGEE FLOWS
================================================================================

Los flows son las etapas por las que pasa una petición dentro de un proxy, permitiendo ejecutar lógica en momentos específicos.

Hay dos tipos principales de flujos: ProxyEndpoint (del lado del cliente) y TargetEndpoint (del lado del backend). Cada uno tiene sub-flujos: PreFlow (antes de flujos condicionales), Conditional Flows (se ejecutan solo si se cumple una condición), y PostFlow (después de flujos condicionales).

El orden completo de ejecución es: ProxyEndpoint PreFlow Request → Conditional Flows → ProxyEndpoint PostFlow Request → TargetEndpoint PreFlow Request → TargetEndpoint PostFlow Request → llamada al backend → TargetEndpoint PreFlow Response → TargetEndpoint PostFlow Response → ProxyEndpoint PreFlow Response → ProxyEndpoint PostFlow Response.

Los Conditional Flows permiten ejecutar lógica solo para ciertos casos. Por ejemplo, un flow que solo se ejecuta cuando el path es "/users" y el método es GET. Si la condición no se cumple, ese flow se salta.

Entender los flows es fundamental porque te permite colocar políticas en el momento correcto. Si quieres validar seguridad antes de todo, va en ProxyEndpoint PreFlow Request. Si quieres transformar la respuesta del backend, va en TargetEndpoint PostFlow Response.


================================================================================`,
    12: `POLÍTICAS Y SUS TIPOS
================================================================================

Las políticas son bloques de funcionalidad que agregas a los flows para implementar características como seguridad, transformación, validación, etc.

Apigee tiene más de 40 políticas diferentes organizadas en categorías. Las de Seguridad incluyen Verify API Key, OAuth, Basic Authentication, y CORS. Las de Transformación incluyen JSON to XML, XML to JSON, y XSLT. Las de Tráfico incluyen Quota, Spike Arrest, y Response Cache.

Cada política se configura mediante XML donde defines su comportamiento. Por ejemplo, la política Quota necesita saber cuántas llamadas permitir y en qué período de tiempo. Una vez configurada, arrastras la política al flow donde quieres que se ejecute.

Las políticas se ejecutan en el orden en que las colocas en el flow. Si pones Verify API Key seguido de Quota, primero valida la API Key y luego aplica el límite de uso. El orden importa - si inviertes estos dos, aplicarías quota incluso a requests con API Key inválida.

Algunas políticas populares: Assign Message (manipular headers/body), Service Callout (llamar a otro servicio), JavaScript (ejecutar código personalizado), y Extract Variables (extraer datos del request/response).


================================================================================`,
    13: `AGREGANDO POLÍTICAS - EXTRACT VARIABLES
================================================================================

La política Extract Variables permite extraer información de un request o response y guardarla en variables para usarla después.

Por ejemplo, si tu cliente envía un query parameter "user_id=123", puedes usar Extract Variables para guardar ese valor en una variable llamada "userId". Luego otras políticas pueden usar esa variable, como incluirla en logs o usarla para construir un nuevo request.

En la configuración XML defines de dónde extraer (query params, headers, body JSON/XML, o path) y en qué variable guardarlo. Si extraes de JSON puedes usar JSONPath para navegar la estructura. Para XML usas XPath.

Un caso de uso común es extraer información del cliente como su IP, user agent, o API key para incluirla en logs de auditoría. Otro caso es extraer campos del response del backend para construir un response personalizado al cliente.

Las variables extraídas quedan disponibles durante toda la ejecución del proxy. Puedes verlas en Debug y son muy útiles para hacer el flujo dinámico basado en el contenido de las peticiones.


================================================================================`,
    14: `XML TO JSON
================================================================================

Esta política convierte automáticamente respuestas XML en formato JSON.

Muchos servicios antiguos responden en XML pero las aplicaciones modernas (especialmente móviles) prefieren JSON. En vez de modificar el backend, agregas la política XML to JSON en el flujo de respuesta del proxy.

La configuración es simple: defines la fuente (típicamente "response" que es la respuesta del backend) y el destino (también "response" para sobrescribir). Apigee automáticamente detecta la estructura XML y la convierte a JSON equivalente.

Por ejemplo, un XML como \`<user><name>Juan</name><age>30</age></user>\` se convierte en \`{"user": {"name": "Juan", "age": 30}}\`. Arrays en XML también se convierten correctamente a arrays JSON.

La política se coloca típicamente en TargetEndpoint PostFlow Response, después de recibir la respuesta del backend pero antes de enviarla al cliente. También cambias el header Content-Type a "application/json" para que el cliente sepa que está recibiendo JSON.


================================================================================`,
    15: `SERVICE CALLOUT Y JSON TO XML
================================================================================

Service Callout permite llamar a otro servicio externo desde dentro de tu proxy, útil para casos como consultar bases de datos externas o servicios de validación.

Por ejemplo, tu proxy recibe un request, usa Service Callout para verificar el ID del usuario en otro servicio, y dependiendo de la respuesta decide si continuar o rechazar. La política hace un HTTP request completo (puedes especificar método, headers, body) y guarda la respuesta en una variable.

JSON to XML hace lo contrario de XML to JSON - convierte JSON a XML. Esto es útil cuando tu cliente envía JSON pero tu backend antiguo solo acepta XML. Configuras la política para leer el request del cliente (que viene en JSON), convertirlo a XML, y enviarlo al backend.

Puedes encadenar estas políticas: cliente envía JSON → JSON to XML → llamas al backend → backend responde XML → XML to JSON → cliente recibe JSON. Tu proxy actúa como traductor bidireccional.

La política Service Callout puede hacer peticiones síncronas (espera la respuesta) o asíncronas dependiendo de tu configuración. Para casos donde no necesitas esperar la respuesta, asíncrona es más eficiente.


================================================================================`,
    16: `USUARIOS Y ROLES EN APIGEE
================================================================================

Apigee maneja permisos mediante roles que asignas a usuarios de tu organización de Google Cloud.

Los roles principales son: Organization Administrator (control total), API Admin (puede crear/modificar proxies), Analytics Viewer (solo ver reportes), y Developer Admin (administrar developers y apps). Asignas roles mediante IAM en Google Cloud.

Cuando agregas un usuario a tu proyecto de GCP con rol de Apigee, automáticamente tiene acceso a la interfaz de Apigee con los permisos correspondientes. Por ejemplo, un usuario con rol "API Admin" puede crear proxies pero no puede cambiar configuraciones de organización.

Para equipos grandes es buena práctica crear roles personalizados con permisos específicos. Por ejemplo, un rol "Deployer" que solo puede desplegar proxies existentes pero no crearlos o modificarlos.

Los permisos son a nivel de organización en Apigee X. No puedes dar acceso solo a ciertos proxies - si alguien tiene acceso, ve todos los proxies de la organización. Para separación estricta necesitarías múltiples organizaciones.


================================================================================`,
    17: `TARGET SERVERS
================================================================================

Target Servers son configuraciones reutilizables que definen hacia dónde apuntan tus proxies, facilitando cambios de backend.

En vez de hardcodear "https://mi-backend.com:8080" en cada proxy, creas un Target Server llamado "backend-users" con esa URL. Luego en tus proxies simplemente referencias "backend-users". Si cambias el servidor, actualizas el Target Server una vez y todos los proxies que lo usan apuntan automáticamente al nuevo.

Los Target Servers se configuran por ambiente. Puedes tener "backend-users" apuntando a "dev-backend.com" en desarrollo pero a "prod-backend.com" en producción. El mismo proxy usa diferentes backends según dónde esté desplegado.

Para crear un Target Server vas a Admin → Environments → seleccionas el ambiente → Target Servers → Create. Defines el host, puerto, y opcionalmente SSL. Puedes tener múltiples Target Servers para el mismo servicio y Apigee hará load balancing entre ellos.

En el proxy, en la sección TargetEndpoint, cambias la URL fija por una referencia al Target Server usando la sintaxiis específica de Apigee.


================================================================================`,
    18: `KEY VALUE MAPS (KVMs)
================================================================================

Los KVMs son almacenes clave-valor donde guardas información de configuración que puede cambiar sin redesplegar el proxy.

Piensa en KVMs como un diccionario: guardas pares de "clave: valor" como "backend_url: https://mi-api.com" o "api_key: abc123xyz". Tus proxies leen estos valores durante ejecución, entonces si cambias el valor en el KVM, inmediatamente afecta a todos los proxies que lo usen.

Hay tres niveles de KVMs: Organización (compartido por todos los ambientes), Ambiente (específico de dev/prod), y Proxy (solo para un proxy específico). La mayoría del tiempo usas KVMs de ambiente.

Los KVMs pueden ser encriptados para datos sensibles como API Keys o passwords. Cuando creas un KVM encriptado, los valores se guardan cifrados y solo se desencriptan cuando el proxy los lee.

Casos de uso comunes: guardar URLs de backends que cambian, API Keys de servicios externos, configuraciones de negocio (como límites de quota que puedes ajustar sin redesplegar), o feature flags para activar/desactivar funcionalidades.


================================================================================`,
    19: `ADMINISTRACIÓN DE KVMs
================================================================================

Los KVMs se pueden administrar tanto desde la UI como mediante el Apigee API.

Desde la UI vas a Admin → Environments → seleccionas ambiente → Key Value Maps. Ahí puedes crear nuevos KVMs, agregar/editar/eliminar entradas, o marcar un KVM como encriptado. Cada entrada tiene una clave y un valor - ambos son strings.

Para KVMs encriptados, cuando agregas una entrada el valor se muestra como asteriscos una vez guardado. No puedes ver el valor encriptado después, solo reemplazarlo. Esto protege credenciales sensibles.

Mediante el API puedes automatizar la gestión de KVMs. Por ejemplo, en tu pipeline de CI/CD puedes tener un script que actualiza el KVM con la nueva URL de backend después de desplegar. El API te permite crear, leer, actualizar y eliminar tanto KVMs como sus entradas.

Una práctica recomendada es documentar qué KVMs existen y para qué sirve cada uno. En proyectos grandes puedes terminar con muchos KVMs y sin documentación se vuelve confuso cuáles están en uso.


================================================================================`,
    20: `KVM OPERATION POLICY
================================================================================

La política Key Value Map Operations permite leer y escribir valores en KVMs desde tu proxy.

La operación más común es GET que lee un valor del KVM y lo guarda en una variable de flujo. Por ejemplo, lees la clave "backend_url" del KVM "configuracion" y la guardas en la variable "target.url" que luego usas para construir el request al backend.

En la configuración XML especificas: el nombre del KVM, la operación (GET, PUT, DELETE), la clave que quieres leer, y la variable donde guardar el resultado. Para GET es común guardar en variables que luego otras políticas usan.

La operación PUT permite escribir valores durante la ejecución. Por ejemplo, podrías guardar un contador de cuántas veces se ha llamado cierto endpoint. DELETE remueve una entrada del KVM.

Un patrón útil es combinar KVMs con políticas condicionales: lees un valor del KVM y dependiendo de su contenido ejecutas diferentes flujos. Por ejemplo, un feature flag en el KVM decide si usar el backend nuevo o el antiguo.

La política se coloca típicamente temprano en el flujo si necesitas el valor para decisiones posteriores, o al final si estás guardando resultados de la ejecución.


================================================================================

FIN DE LA SECCIÓN 2
================================================================================`,
  },

  seccion3: {
    1: `EXPLICANDO QUÉ ES API PRODUCT, DEVELOPER Y APP EN APIGEE X
================================================================================

Estos tres conceptos están relacionados y forman el sistema de gestión de acceso a tus APIs.

Un **Developer** es la persona o empresa que consumirá tus APIs. Por ejemplo, si tienes una API de pagos, cada empresa que quiera usarla debe registrarse como Developer. Guardas su información de contacto: nombre, email, empresa. Un Developer puede tener múltiples Apps.

Un **API Product** es un paquete de APIs que ofreces. Incluye qué proxies están disponibles, qué operaciones se permiten, y qué límites de uso tiene (como cuotas). Por ejemplo, puedes tener un producto "Basic" con límite de 1000 llamadas/día y otro "Premium" con 100,000 llamadas/día. Los productos permiten monetizar - cobras diferente por cada tier.

Una **App** es la aplicación específica que un Developer crea para consumir tus APIs. Cuando un Developer crea una App, la asocias con un API Product. Apigee genera automáticamente credenciales para esa App: un API Key (identificador público) y un App Secret (contraseña). Estas credenciales son las que el Developer usa para llamar a tus APIs.

El flujo completo es: creas un Developer → creas un API Product (con tus proxies y límites) → el Developer crea una App → asocias la App con el Product → Apigee genera credenciales → el Developer usa esas credenciales para autenticarse. Este modelo te da control granular sobre quién puede acceder a qué y con qué límites.


================================================================================`,
    2: `CREANDO NUESTRO PRIMER DEVELOPER EN APIGEE X
================================================================================

Los Developers se crean desde la sección Publish en la interfaz de Apigee.

Vas a Publish → Developers → Create y llenas la información básica: nombre, apellido, email y username. El username debe ser único en tu organización. Opcionalmente puedes agregar atributos personalizados como empresa, teléfono, o cualquier metadato relevante para tu caso de uso.

Una vez creado, el Developer aparece en el listado. Puedes editarlo después para actualizar información o agregar más atributos. Los Developers no tienen acceso directo a nada todavía - solo existen en el sistema. El acceso real se otorga cuando creas Apps y las asocias con Products.

En producción, muchas organizaciones automatizan esto mediante el Apigee API. Por ejemplo, cuando alguien se registra en tu portal de desarrolladores, un script automáticamente crea el Developer en Apigee usando el API. Esto evita trabajo manual cuando tienes cientos de desarrolladores.

Puedes tener tantos Developers como necesites sin límite. Cada uno es independiente y puede tener múltiples Apps, cada App con sus propias credenciales.


================================================================================`,
    3: `CREANDO NUESTRO PRIMER API PRODUCT EN APIGEE X
================================================================================

Los API Products definen qué proxies están disponibles y con qué restricciones.

Vas a Publish → API Products → Create. Le das un nombre como "producto-basico" y agregas una descripción. Lo importante es la sección de Operations donde defines qué APIs incluyes. Seleccionas el proxy (por ejemplo "my-first-proxy"), defines el path (puede ser "/" para todo o paths específicos como "/users"), y opcionalmente especificas métodos permitidos (GET, POST, etc.).

Puedes agregar múltiples proxies al mismo producto. Por ejemplo, un producto "Suite Completa" podría incluir tu API de usuarios, API de pagos, y API de notificaciones. Los límites de quota se configuran después cuando proteges el proxy con la política Quota.

Los productos tienen estados: Published (publicado y activo) o Deprecated (obsoleto pero aún funcional). También puedes configurar aprobación automática o manual de Apps que quieran usar este producto.

En entornos empresariales, los productos se usan para diferentes planes de suscripción. Producto Free con límites bajos, producto Pro con más llamadas, producto Enterprise sin límites. Cada uno se cobra diferente usando el módulo de Monetización de Apigee.


================================================================================`,
    4: `CREANDO NUESTRA PRIMERA APP EN APIGEE X
================================================================================

Las Apps son el vínculo entre Developers y Products, y generan las credenciales para autenticarse.

Vas a Publish → Apps → Create. Seleccionas el Developer que será dueño de la App y le das un nombre. Lo crucial es agregar los API Products que esta App podrá consumir - seleccionas de la lista los productos disponibles. Puedes agregar múltiples productos a una App.

Una vez creada, Apigee genera automáticamente un **Key** (API Key) y un **Secret** (App Secret). El Key es como un username - puede ser público. El Secret es como una password - debe mantenerse secreto. El Developer usará estas credenciales para autenticarse al llamar tus APIs.

Puedes ver las credenciales haciendo clic en "Show" junto al Secret. También puedes generar nuevos keys, revocar existentes, o configurar tiempo de expiración. Si sospechas que un Secret fue comprometido, lo revocas y generas uno nuevo.

En Debug puedes ver qué App está haciendo cada llamada cuando usas Verify API Key. Las variables pobladas incluyen developer.email, app.name, y apiproduct.name, útiles para logs y auditoría.


================================================================================`,
    5: `PROTEGIENDO NUESTRO API PROXY USANDO POLÍTICA VERIFY API KEY
================================================================================

La política Verify API Key valida que el cliente tenga credenciales válidas antes de procesar su petición.

Agregas la política al proxy especificando dónde viene el API Key - típicamente en un header llamado "X-API-Key" o como query parameter "apikey". La política verifica que el key exista, esté activo, no haya expirado, y tenga acceso al proxy según el API Product asociado.

La política se coloca en ProxyEndpoint PreFlow Request, lo más temprano posible. Así rechazas peticiones no autorizadas antes de ejecutar cualquier lógica costosa. Si la validación falla, retorna automáticamente error 401 "Invalid API Key".

Cuando la validación pasa, Apigee popula muchas variables útiles: verifyapikey.*.client_id (el API Key usado), developer.email, developer.id, app.name, apiproduct.name. Estas variables quedan disponibles para otras políticas - por ejemplo, incluirlas en logs o usarlas para lógica condicional.

Probando en Postman, envías el header "X-API-Key: [tu-api-key]". Si el key es válido y la App tiene acceso al proxy, recibes 200 OK. Si no envías el header o el key es inválido, recibes 401. Puedes ver todo el proceso en Debug viendo qué variables se poblaron.


================================================================================`,
    6: `QUOTA POLICY - FORZANDO LÍMITES DE USO
================================================================================

Quota limita cuántas llamadas puede hacer un cliente en un período de tiempo para prevenir abuso y controlar costos.

La política Quota se configura con un límite (por ejemplo 10) y un intervalo (por ejemplo "hour" para hora). Puedes usar "minute", "hour", "day", "week", o "month". El límite aplica por API Key - cada App tiene su propio contador independiente.

Un patrón común es usar el Identifier con la variable "verifyapikey.*.client_id" para que cada API Key tenga su propia quota. Sin identifier, todas las peticiones comparten el mismo contador. La política debe ir DESPUÉS de Verify API Key porque necesita saber qué App está llamando.

Cuando se alcanza el límite, Apigee retorna error 429 "Too Many Requests" automáticamente. El contador se resetea al inicio del siguiente período. Por ejemplo, con límite de 100/día, si alguien usa las 100 llamadas a las 2pm, debe esperar hasta medianoche para que el contador vuelva a 0.

Puedes configurar quotas diferentes por producto editando el Product y usando variables. Por ejemplo, producto Basic tiene quota de 1000/día, producto Pro tiene 10,000/día. La misma política Quota lee límites dinámicos del producto sin necesidad de múltiples políticas.

En Debug ves las variables quota.*.allowed.count (límite total), quota.*.used.count (cuántas ha usado), y quota.*.available.count (cuántas le quedan). Útil para mostrar al cliente cuántas llamadas le restan.


================================================================================

FIN DE LA SECCIÓN 3
================================================================================`,
  },

  seccion4: {
    1: `INTRODUCCIÓN AL CASO DE USO 1
================================================================================

Este caso de uso muestra cómo crear un proxy que combina caché, seguridad mediante KVMs, y transformación de respuestas para mejorar performance.

El proyecto consiste en crear un proxy que consulta una API externa de empleos (RapidAPI) que tarda aproximadamente 1.7 segundos en responder. Usando caché, las peticiones subsecuentes tardarán solo 40 milisegundos - una mejora de 97% en performance. Además, la respuesta del backend tiene muchos campos innecesarios, así que usaremos JavaScript para transformarla y enviar al cliente solo los datos relevantes.

El flujo completo es: primero verificar si la respuesta está en caché, si no está entonces leer las credenciales del API externo desde un KVM, llamar al backend con esas credenciales, guardar la respuesta en caché por 7 días, transformar el JSON para simplificarlo, y finalmente enviar la respuesta al cliente. Si la siguiente petición pide los mismos datos, se sirve directamente desde caché sin llamar al backend.

Los componentes principales que usaremos son: KVM para almacenar el API Key de RapidAPI de forma segura, Response Cache policy para cachear respuestas por 7 días, Assign Message policies para preparar headers del request, y JavaScript policy para transformar el JSON de respuesta.

Este patrón es muy útil para APIs que consultan datos que no cambian frecuentemente, como catálogos de productos, tipos de cambio, o feeds de noticias. Reducir la latencia de 1700ms a 40ms mejora dramáticamente la experiencia del usuario.


================================================================================`,
    2: `CREACIÓN DE CUENTA EN RAPIDAPI.COM
================================================================================

RapidAPI es un marketplace donde desarrolladores publican APIs que otros pueden consumir, muchas con planes gratuitos.

Para este caso de uso necesitas crear una cuenta gratuita en rapidapi.com. Una vez registrado, buscas "Active Jobs API" que es el servicio que usaremos - proporciona ofertas de trabajo actualizadas de los últimos 7 días. Seleccionas el plan gratuito que permite cierto número de llamadas al mes.

Cuando te suscribes al API, RapidAPI te asigna un API Key único. Este key lo usarás para autenticarte en cada petición. Lo importante es copiar dos valores: el X-RapidAPI-Key (tu API key) y el X-RapidAPI-Host (el hostname del servicio). Ambos deben enviarse como headers en cada petición.

El endpoint que usaremos es GET /active-ats-7d que devuelve las ofertas de trabajo publicadas en los últimos 7 días. Puedes probarlo directamente en el playground de RapidAPI para ver qué estructura tiene la respuesta - viene con muchos campos como título del puesto, empresa, ubicación, URL de aplicación, fecha de publicación, etc.

Guarda el API Key en un lugar seguro porque lo usaremos en el siguiente paso para configurar el KVM en Apigee.


================================================================================`,
    3: `CREACIÓN DE KVM Y ENTRADA PARA EL APIKEY
================================================================================

El API Key de RapidAPI se guarda en un KVM para no hardcodearlo en el código del proxy.

Puedes crear el KVM desde la UI o mediante el Apigee API. En este caso se usa el API para mostrar ambos métodos. Primero generas un access token con "gcloud auth print-access-token" para autenticarte. Luego haces un POST al endpoint de KVMs de Apigee con un JSON que especifica el nombre del KVM ("kvm-credentials") y si es encriptado o no.

Una vez creado el KVM, agregas una entrada con la clave "seven-days-jobs-v1__jobs__api-key" y el valor es tu API Key de RapidAPI. Este naming convention (nombre-del-proxy__recurso__tipo) ayuda a organizar cuando tienes muchas entradas en el mismo KVM.

Desde la UI también puedes crear KVMs: vas a Admin → Environments → Dev → Key Value Maps → Create. Le das un nombre, marcas si será encriptado, y agregas las entradas manualmente. El resultado es el mismo - un KVM a nivel de ambiente que tu proxy puede leer.

El KVM debe ser de ambiente (no de organización ni de proxy) porque diferentes ambientes podrían usar diferentes API Keys - uno de prueba en desarrollo y uno de producción en prod.


================================================================================`,
    4: `CREACIÓN DEL PROXY Y PREPARACIÓN DEL REQUEST
================================================================================

Se crea el proxy "seven-days-jobs-v1" configurando el request hacia RapidAPI con las credenciales del KVM.

Creas un reverse proxy con base path "/v1" y target URL "https://active-jobs-db.p.rapidapi.com/active-ats-7d". Luego creas un flujo condicional llamado "GetJobs" que solo se ejecuta cuando el path es "/jobs" y el método es GET. Así el endpoint completo será "GET /v1/jobs".

Dentro del flujo GetJobs agregas varias políticas en orden. Primero "KVM-Get-API-Key" que lee el API Key del KVM y lo guarda en una variable "flow.x-rapid-apikey". Segunda política es "RF-Credentials-Missing" (Raise Fault) que solo se ejecuta si el API key no se encontró en el KVM - retorna error 401.

Tercera política "AM-Set-Request" (Assign Message) inyecta los headers requeridos por RapidAPI: X-RapidAPI-Key con el valor leído del KVM, y X-RapidAPI-Host con el valor fijo del servicio. También quita cualquier query parameter que el cliente haya enviado ya que este endpoint no los necesita.

Cuarta política "AM-Remove-Jobs-Path" usa Assign Message para quitar "/jobs" del path antes de llamar al backend, porque el target URL ya incluye la ruta completa. El orden de estas políticas es importante - primero obtienes credenciales, luego validas que existan, luego preparas el request.


================================================================================`,
    5: `CONFIGURACIÓN DEL CACHE
================================================================================

La política Response Cache almacena respuestas para servirlas rápidamente sin llamar al backend.

Se agrega la política "Response-Cache" configurada con un CacheKey que incluye un prefijo único "seven-days-jobs-v1__cache" más información de la petición. El ExpirySettings se configura en 604800 segundos que equivalen a 7 días - después de este tiempo la entrada del caché expira automáticamente.

La política debe colocarse en dos lugares específicos: en ProxyEndpoint PreFlow Response (después de recibir respuesta del backend) y en TargetEndpoint PostFlow Response. Apigee verifica en el primer lugar si la respuesta existe en caché - si sí, la sirve directamente saltándose el TargetEndpoint completo. Si no, continúa la ejecución normal.

En la primera petición (cache miss) el flujo completo se ejecuta: verifica caché → no encuentra → llama backend → guarda en caché → retorna. Tarda 1700ms. En peticiones subsecuentes (cache hit) el flujo es: verifica caché → encuentra → retorna. Tarda solo 40ms.

Apigee popula variables como "responsecache.Response-Cache.cachehit" con valor true/false que puedes ver en Debug. Esto te permite saber si la respuesta vino del caché o del backend. El caché es compartido entre todos los usuarios que hagan la misma petición.


================================================================================`,
    6: `PERSONALIZANDO LA RESPUESTA DEL API
================================================================================

El backend retorna un JSON muy grande con muchos campos innecesarios que se limpia usando JavaScript.

Se crea una política JavaScript que referencia un archivo "JS-Customize-Response.js". En ese archivo escribes código JavaScript que lee la respuesta del backend con "context.getVariable('response.content')", la parsea como JSON, extrae solo los campos que necesitas (id, title, organization, countries, url, posted_date), y construye un nuevo JSON más pequeño.

Además se traducen algunos nombres de campos al español para mejor experiencia del usuario: "title" se convierte en "titulo", "organization" en "empleador", "posted_date" en "fecha_publicacion", etc. Solo se toma el primer país del array countries_derived.

El código incluye try-catch para manejar errores. Si algo falla durante la transformación, logeas el error pero devuelves un objeto vacío en vez de romper todo el proxy. Al final usas "context.setVariable('response.content', nuevoJSON)" para reemplazar la respuesta original con la simplificada.

Esta política se coloca en ProxyEndpoint PreFlow Response DESPUÉS de Response-Cache. Así tanto las respuestas del caché como las del backend pasan por la transformación. El cliente siempre recibe el formato simplificado.


================================================================================`,
    7: `RESULTADO DEL CASO DE USO - PRUEBAS Y ANÁLISIS
================================================================================

Se prueba el proxy completo en Debug para verificar que todo funcione correctamente.

En la primera petición puedes ver en Debug todo el flujo: obtener API Key del KVM → inyectar headers → quitar path → verificar caché (no encuentra) → llamar backend (1708ms) → guardar en caché → transformar JSON → retornar respuesta. La variable responsecache.cachehit es false.

En la segunda petición el flujo es mucho más corto: verificar caché (encuentra) → transformar JSON → retornar (43ms). La variable responsecache.cachehit es true. Nunca se ejecutan las políticas de TargetEndpoint porque Apigee cortocircuita directo a la respuesta cacheada.

Puedes verificar que la transformación funciona comparando la respuesta del backend (que tiene 20+ campos) con la que recibe el cliente (solo 6 campos en español). El JSON es mucho más pequeño y legible.

El proxy también permite exportarlo como ZIP para respaldo. Este archivo contiene todas las políticas, código JavaScript, y configuración XML. Puedes importarlo en otra organización de Apigee o versionarlo en Git.

Este patrón es muy común en producción para APIs que consultan datos relativamente estáticos como catálogos, tasas de cambio, feeds de noticias, clima, etc. El caché reduce costos (menos llamadas al backend), mejora performance (40ms vs 1700ms), y protege el backend de picos de tráfico.


================================================================================

FIN DE LA SECCIÓN 4
================================================================================`,
  },

  seccion5: {
    1: `POLÍTICA BASIC AUTHENTICATION
================================================================================

La política Basic Authentication permite trabajar con credenciales codificadas en Base64, que es un formato estándar usado en autenticación HTTP.

**¿Qué hace esta política?**

Tiene dos funciones principales: ENCODE (codificar) y DECODE (decodificar). La función ENCODE toma un usuario y contraseña y los convierte en un código Base64 que se coloca en el header Authorization. Por ejemplo, si tienes usuario "Jacinto" y contraseña "test1234", los codifica como "Basic SmFjaW50bzp0ZXN0MTIzNA==". La función DECODE hace lo contrario: lee ese código del header y extrae el usuario y contraseña originales.

**Preparando el proxy**

En el video se crea un proxy llamado "sec-example-v1" para probar políticas de seguridad. Antes de agregar las políticas, se crea un Property Set (archivo de propiedades) llamado "User.properties" donde se guardan credenciales de prueba: username=Jacinto y password=test1234. Los Property Sets son útiles para almacenar configuraciones que puedes cambiar sin modificar el código del proxy.

**Configurando ENCODE**

Se crea la primera política llamada "BA-Encode" que lee el usuario y contraseña del Property Set usando la sintaxis "propertyset.User.username" y "propertyset.User.password". Esta política genera el código Base64 y lo coloca en el header "Authorization" del request. Es importante notar que los valores pueden venir de otras fuentes como query parameters o headers, no solo de Property Sets.

**Configurando DECODE**

La segunda política "BA-Decode" hace el proceso inverso. Lee el header "Authorization" que contiene el código Base64, lo decodifica y separa el usuario y contraseña. En este caso, los valores decodificados se guardan como query parameters para que viajen al backend. Ambas políticas se agregan al PreFlow en orden: primero ENCODE y luego DECODE.

**Probando en Debug**

Al hacer una petición y ver el Debug, puedes observar cómo la política ENCODE crea el header Authorization con el valor codificado. Inmediatamente después, la política DECODE lee ese header, extrae "Jacinto" y "test1234", y los inyecta como query parameters. Esta política es útil cuando necesitas integrar con APIs antiguas que usan Basic Authentication.

**Lo que debes entender**

Basic Authentication es un método simple de autenticación donde las credenciales viajan codificadas en Base64. Apigee te permite tanto generar estos códigos como leerlos y extraer las credenciales. Los Property Sets son archivos de configuración que te ayudan a separar datos del código, haciendo más fácil el mantenimiento.


================================================================================`,
    2: `POLÍTICA JSON THREAT PROTECTION
================================================================================

Esta política protege tu API contra ataques que envían JSONs muy grandes o mal formados que podrían hacer que tu servicio se caiga o se vuelva lento.

**¿Por qué es importante?**

Imagina que alguien envía un JSON con 1 millón de elementos en un array, o con una estructura de 1000 niveles de profundidad. Tu servidor tendría que procesar todo eso, gastando memoria y CPU, y podría dejar de funcionar. JSON Threat Protection establece límites para prevenir estos ataques.

**Las validaciones principales**

La política tiene varias propiedades configurables. ArrayElementCount limita cuántos elementos puede tener un array (en el ejemplo: 4 elementos máximo). ContainerDepth controla la profundidad de anidamiento - básicamente cuántos niveles de llaves "{}" o corchetes "[]" puedes tener (ejemplo: 2 niveles). ObjectEntryCount limita cuántas propiedades puede tener un objeto JSON (ejemplo: 3 propiedades máximo).

**Validaciones de texto**

ObjectEntryNameLength controla qué tan largo puede ser el nombre de una propiedad (ejemplo: máximo 20 caracteres). StringValueLength limita el tamaño de los valores de texto (ejemplo: 50 caracteres). Si alguien intenta enviar un nombre de 100 caracteres cuando solo permites 20, la política rechaza el request inmediatamente.

**Probando en Postman**

Cuando envías un JSON válido que cumple todos los límites, recibes 200 OK. Pero si agregas un quinto elemento a un array cuando solo permites 4, obtienes un error claro: "Exceeded array element count at line 5". Lo mismo pasa si excedes la profundidad, el número de objetos, o el tamaño de strings.

**Flexibilidad en la configuración**

No tienes que usar todas las validaciones. Si solo te preocupa el tamaño de arrays, puedes configurar únicamente ArrayElementCount y omitir las demás. La política debe colocarse lo más temprano posible en el flujo (PreFlow Request) para rechazar payloads peligrosos antes de que consuman recursos del servidor.

**Lo que debes entender**

Esta política es como un guardia de seguridad que revisa que los JSONs que llegan no sean demasiado grandes o complejos. Es especialmente importante en APIs públicas donde no controlas quién hace las peticiones. Los límites que configures dependen de tu caso de uso: una API de carga masiva necesitará límites más altos que una API simple.


================================================================================`,
    3: `POLÍTICA SPIKE ARREST
================================================================================

Spike Arrest protege tu API backend contra picos repentinos de tráfico, distribuyendo las peticiones de manera uniforme en el tiempo.

**La diferencia con Quota**

Quota (que vimos antes) dice "puedes hacer 1000 llamadas por día" pero permite que todas lleguen en el primer minuto. Spike Arrest dice "puedes hacer 5 llamadas por minuto" y las distribuye uniformemente - no permite que las 5 lleguen al mismo tiempo. Esto protege tu backend de colapsar cuando hay un pico súbito de tráfico.

**Identifier: quién está llamando**

La propiedad Identifier te permite controlar el límite por solicitante. Si usas "request.header.solicitante", cada cliente tiene su propio contador independiente. Si no pones Identifier (lo dejas vacío), el límite aplica para todas las peticiones juntas. Por ejemplo, con límite de 5pm y un Identifier, Eduardo puede hacer 5 llamadas y María otras 5. Sin Identifier, entre Eduardo y María solo pueden hacer 5 llamadas en total.

**MessageWeight: peticiones pesadas**

Esta propiedad permite que ciertas peticiones "cuenten" más que otras. Si el peso es 1, cada petición cuenta como 1. Si el peso es 2, cada petición cuenta como 2, entonces con un límite de 5pm solo podrías hacer 2 peticiones (porque 2×2=4, y una más excedería el límite). Esto es útil cuando algunas operaciones son más costosas que otras.

**Rate: el límite**

Aquí defines cuántas peticiones permites. Se escribe como número + unidad: "5pm" significa 5 por minuto, "10ps" significa 10 por segundo. Apigee distribuye las peticiones uniformemente: si dices 60pm, significa 1 petición cada segundo durante 60 segundos, no 60 peticiones en el primer segundo y luego nada.

**UseEffectiveCount y pruebas**

Esta propiedad (configurada en "true") sincroniza el contador entre todos los servidores de Apigee, asegurando que el límite sea preciso. Al probar en Postman con límite de 5pm y peso 1, las primeras 5 peticiones pasan bien. La sexta petición recibe error 429 "Spike arrest violation". Si cambias el peso a 2, solo pasan 2 peticiones antes de bloquearse.

**Lo que debes entender**

Spike Arrest suaviza los picos de tráfico para que tu backend no se sature. Es diferente de Quota: uno controla la velocidad (peticiones por tiempo) y otro el total permitido. Generalmente usas ambas políticas juntas: Spike Arrest previene ataques súbitos y Quota controla el uso total del servicio.


================================================================================`,
    4: `OAUTH 2.0 - CLIENT CREDENTIALS FLOW (TEORÍA)
================================================================================

OAuth 2.0 es un estándar de la industria para autorización de APIs. El flujo de Client Credentials es específico para cuando dos aplicaciones necesitan comunicarse sin que haya un usuario humano de por medio.

**¿Qué es OAuth 2.0?**

Es un protocolo que permite obtener acceso a recursos de forma segura usando tokens temporales en lugar de enviar credenciales directamente. En vez de enviar tu usuario y contraseña en cada petición, primero obtienes un "access token" (token de acceso) que expira después de cierto tiempo, y usas ese token para las peticiones a la API.

**Client Credentials: comunicación máquina a máquina**

Este flujo se usa cuando no hay un usuario final involucrado, solo dos sistemas hablando entre sí. Por ejemplo: un servicio de facturación consultando un servicio de inventario, o un trabajo programado que actualiza reportes cada noche. A esto se le llama "machine to machine" o M2M.

**Los componentes del flujo**

Hay una aplicación cliente (backend) que necesita acceder a recursos. Hay un Authorization Server (servidor de autorización) que genera los tokens - esto lo implementaremos en Apigee. Y hay API Proxies (servidores de recursos) que validan esos tokens antes de dar acceso. El cliente tiene credenciales propias: un Client ID (identificador público) y un Client Secret (contraseña secreta).

**Cómo funciona el flujo**

Paso 1: El cliente envía su Client ID y Client Secret al Authorization Server. Paso 2: Si las credenciales son válidas, el servidor genera un Access Token y lo devuelve. Paso 3: El cliente usa ese token para llamar a las APIs protegidas enviándolo en el header Authorization. Paso 4: La API verifica que el token sea válido antes de procesar la petición.

**Ventajas de este enfoque**

El token expira automáticamente (típicamente después de 30 minutos), limitando el daño si alguien lo roba. Puedes revocar tokens sin cambiar las credenciales de la aplicación. Es un estándar ampliamente adoptado, así que funciona con muchas plataformas diferentes.

**Lo que debes entender**

OAuth 2.0 Client Credentials es la forma profesional de autenticar comunicaciones entre servicios. No es para aplicaciones móviles o web con usuarios - es específicamente para servicios backend. En los próximos videos implementaremos este flujo completo en Apigee.


================================================================================`,
    5: `OAUTH 2.0 - CREACIÓN DE PROXY DE OAUTH
================================================================================

En este video se crea el proxy que actuará como Authorization Server, es decir, el que genera los Access Tokens.

**Creando el proxy base**

Se crea un nuevo proxy llamado "oauth-v1-example" con tipo "No Target" porque no necesita llamar a ningún backend - su única función es generar tokens. El base path es "/oauth/v1" para seguir convenciones estándar de OAuth.

**La política OAuth V2**

Se agrega la política "OAuth v2.0" con nombre "Generate-Access-Token". En la configuración XML se cambia la operación a "GenerateAccessToken". La propiedad ExpiresIn se configura en 1,800,000 milisegundos (que son 30 minutos) - este es el tiempo que el token será válido. En SupportedGrantTypes se indica "client_credentials" para aceptar solo este tipo de flujo.

**El flujo condicional**

Se crea un flujo condicional llamado "Create-Access-Token" que escucha en el path "/token" con método POST. La política Generate-Access-Token se agrega en la sección Response de este flujo (no en Request). Esto es importante porque Apigee necesita validar las credenciales antes de generar el token.

**Obteniendo credenciales de prueba**

Para probar, necesitas ir a Publish → Apps y seleccionar una app existente (como "app-eduardo-pro"). Ahí encontrarás el Key (Client ID) y el Secret (Client Secret). Estos son los valores que usarás para autenticarte y obtener el token.

**Probando con Postman**

Se hace un POST a "https://[dominio].apigee.net/oauth/v1/token". En Authorization se usa Basic Auth con el Client ID como username y Client Secret como password. En el Body (tipo x-www-form-urlencoded) se envía "grant_type=client_credentials". Si todo está bien configurado, la respuesta incluye un access_token, token_type "Bearer", y expires_in "1799" (segundos).

**Lo que debes entender**

Este proxy es una pieza fundamental: genera los tokens que otros servicios usarán para autenticarse. El token es temporal (30 minutos) por seguridad. Apigee automáticamente valida que las credenciales existan y estén activas antes de generar el token. El access_token que recibes es un JWT (JSON Web Token) firmado por Apigee.


================================================================================`,
    6: `VERIFICACIÓN DE ACCESS TOKEN
================================================================================

Ahora que podemos generar tokens, necesitamos proteger nuestros API proxies para que solo acepten peticiones con tokens válidos.

**Agregando verificación a un proxy**

Se usa el proxy "seven-days-jobs-v1" como ejemplo. Se agrega una nueva política OAuth v2.0 llamada "Verify-Access-Token" con la operación "VerifyAccessToken". Esta política lee automáticamente el header Authorization, extrae el token, verifica que sea válido y que no haya expirado.

**Ubicación en el flujo**

La política se coloca en el PreFlow Request como la primera política que se ejecuta. Esto asegura que ninguna petición sin token válido pueda acceder a la lógica del proxy. Es como un guardia de seguridad en la entrada.

**Prueba 1: Sin token**

Al hacer una petición sin incluir el header Authorization, recibes error 401 "Invalid access token". La política detecta que no hay token y rechaza la petición inmediatamente.

**Prueba 2: Token válido pero sin permisos**

Cuando envías un token válido pero recibes error de que no tiene permisos, es porque falta configurar los API Products. La App que generó el token debe tener acceso tanto al proxy OAuth como al proxy que estás protegiendo.

**Configurando API Products**

Vas a Publish → Apps → Seleccionas tu App → Ves qué producto tiene asociado → Editas ese producto. En Operations agregas dos proxies: "oauth-v1-example" (para poder generar tokens) y "seven-days-jobs-v1" (para poder consumirlo). Después de guardar y esperar unos segundos, el token ya funciona correctamente.

**Prueba exitosa**

Con el producto bien configurado, al enviar el request con header "Authorization: Bearer [tu-token]", recibes 200 OK y la respuesta normal de la API. En Debug puedes ver que la política Verify-Access-Token se ejecutó exitosamente y pobló variables como oauth.client_id.

**Lo que debes entender**

Proteger un proxy con OAuth es agregar la política Verify-Access-Token al inicio del flujo. Los API Products controlan qué Apps tienen acceso a qué proxies - es el sistema de permisos de Apigee. Un token solo funciona si la App que lo generó tiene permiso para acceder al proxy que estás llamando.


================================================================================`,
    7: `SHARED FLOW DE SEGURIDAD
================================================================================

Los Shared Flows permiten reutilizar la misma lógica de seguridad en múltiples proxies sin tener que copiar y pegar políticas en cada uno.

**¿Qué es un Shared Flow?**

Es como una función reutilizable que puedes llamar desde cualquier proxy. En vez de tener la política "Verify-Access-Token" duplicada en 10 proxies diferentes, la pones una vez en un Shared Flow y todos los proxies la usan. Si necesitas cambiar algo, lo cambias en un solo lugar y afecta a todos.

**Creando el Shared Flow**

Vas a la sección Shared Flows y creas uno nuevo llamado "sf-security-oauth". Agregas la política OAuth v2.0 con operación VerifyAccessToken (igual que antes). En un Shared Flow no hay PreFlow ni PostFlow - solo agregas las políticas en un flujo lineal simple. Luego despliegas el Shared Flow al ambiente.

**Usando el Shared Flow en un proxy**

En tu proxy (por ejemplo seven-days-jobs-v1) agregas la política "Flow Callout" con nombre "FC-Security-OAuth". En la configuración indicas qué Shared Flow quieres llamar: "<SharedFlowBundle>sf-security-oauth</SharedFlowBundle>". Luego reemplazas la política antigua Verify-Access-Token con esta nueva política Flow Callout en el PreFlow.

**Probando que funciona**

Haces la misma petición con el token y funciona exactamente igual que antes. La diferencia es que ahora estás usando el Shared Flow. En Debug puedes ver cómo la política FC-Security-OAuth llama al Shared Flow, este ejecuta su política Verify-Access-Token, y todo funciona normalmente.

**Ventajas de este enfoque**

Si necesitas cambiar la lógica de OAuth (por ejemplo, agregar logging o validaciones adicionales), solo editas el Shared Flow una vez y automáticamente todos los proxies que lo usan tienen la nueva versión. Esto hace el mantenimiento mucho más fácil y garantiza que todos usen exactamente la misma lógica de seguridad.

**Lo que debes entender**

Los Shared Flows son para código que se repite en muchos lugares. En vez de duplicar políticas, las centralizas. Un proxy invoca el Shared Flow usando la política Flow Callout. Esto es especialmente útil para seguridad, logging, o cualquier lógica común. El Shared Flow debe estar desplegado para que funcione.


================================================================================

FIN DEL DOCUMENTO
================================================================================`,
  },

  seccion6: {
    1: `SERVICE ACCOUNT PARA CLOUD LOGGING
================================================================================

Para enviar logs desde Apigee hacia Cloud Logging (el sistema de registro de Google Cloud), primero necesitas crear una cuenta de servicio con los permisos adecuados.

**¿Qué es una Service Account?**

Una Service Account es como un usuario especial que usa tu aplicación (no una persona real) para interactuar con servicios de Google Cloud. En este caso, Apigee necesita una cuenta con permiso para escribir en Cloud Logging.

**Creando el rol personalizado**

Primero vas a IAM (Identity and Access Management) en Google Cloud y creas un rol nuevo llamado "Apigee-Logging-Role". Este rol necesita un permiso específico que te indica la documentación de Apigee: el permiso para escribir logs. Lo seleccionas de la lista de permisos disponibles y creas el rol.

**Creando la Service Account**

Luego vas a Service Accounts y creas una nueva cuenta llamada "sa-apigee-logger". Durante la creación, le asignas el rol personalizado que acabas de crear. No necesitas llenar los campos opcionales - con el nombre y el rol es suficiente.

**Copiando el email de la cuenta**

Una vez creada, necesitas copiar el email completo de la Service Account porque lo usarás cuando despliegues el Shared Flow de logging. Este email tiene un formato como "sa-apigee-logger@tu-proyecto.iam.gserviceaccount.com".

**Lo que debes entender**

Las Service Accounts son identidades que usan las aplicaciones para acceder a servicios de Google Cloud de forma segura. En este caso, le estás dando a Apigee permiso para enviar información de logs a Cloud Logging sin exponer credenciales de usuario. Este paso es necesario antes de poder enviar logs.


================================================================================`,
    2: `SHARED FLOW PARA LOGS USANDO CLOUD LOGGING
================================================================================

Ahora se crea un Shared Flow que todos tus proxies podrán usar para enviar logs automáticamente a Cloud Logging.

**Creando el Shared Flow**

Vas a Proxy Development → Shared Flows → Create y lo nombras "sf-logger". Luego agregas una política llamada "Message Logging" que es la que permite enviar información a Cloud Logging. Esta política tiene una configuración especial con la etiqueta "CloudLogging".

**Configurando la política de logging**

La configuración incluye el "LogName" que sigue un formato específico: "projects/[nombre-de-tu-organización]/logs/apigee-logs-ops". El nombre de tu organización en Apigee coincide con el nombre de tu proyecto en Google Cloud. Luego defines qué información quieres enviar: timestamp, nombre del proxy, ID de la petición, IP del cliente, URL, método HTTP, código de respuesta, etc.

**Variables de Apigee**

La política usa variables que Apigee popula automáticamente durante cada petición. Por ejemplo, "apiproxy.name" contiene el nombre del proxy, "client.ip" tiene la IP del cliente, "request.verb" es el método HTTP (GET, POST, etc.). Puedes consultar todas las variables disponibles en la documentación de Apigee en la sección de Flow Variables.

**El problema del despliegue**

Cuando intentas desplegar este Shared Flow, te dará un error. Esto es porque la política Message Logging requiere que especifiques una Service Account con permisos para escribir en Cloud Logging. Aquí es donde usas el email de la Service Account que creaste en el video anterior.

**Desplegando con la Service Account**

En el formulario de despliegue aparece un campo para la Service Account. Pegas ahí el email completo de "sa-apigee-logger" y ahora sí el despliegue funciona correctamente. El Shared Flow queda desplegado en el ambiente de desarrollo.

**Lo que debes entender**

Message Logging es la política que envía información a Cloud Logging. Puedes personalizar qué datos enviar usando las variables de Apigee. La Service Account es obligatoria porque Apigee necesita autenticarse para escribir en Cloud Logging. El Shared Flow está listo, pero por sí solo no hace nada - necesitas activarlo con Flow Hooks.


================================================================================`,
    3: `FLOW HOOKS
================================================================================

Los Flow Hooks son un mecanismo poderoso que permite ejecutar Shared Flows automáticamente en todos tus proxies sin tener que modificarlos uno por uno.

**¿Qué es un Flow Hook?**

Imagina que tienes 50 proxies y quieres que todos envíen logs. Normalmente tendrías que editar los 50 proxies agregando la política Flow Callout en cada uno. Los Flow Hooks te permiten configurar una sola vez a nivel de ambiente que cierto Shared Flow se ejecute automáticamente para todos los proxies.

**Los cuatro tipos de Flow Hooks**

Vas a Admin → Environments → Dev → Flow Hooks y encuentras cuatro opciones. Pre-Proxy Flow Hook se ejecuta antes de que entre cualquier lógica del proxy - útil para seguridad. Pre-Target Flow Hook se ejecuta justo antes de llamar al backend. Post-Target Flow Hook se ejecuta después de recibir respuesta del backend. Post-Proxy Flow Hook se ejecuta al final, después de toda la lógica del proxy.

**Configurando el Flow Hook para logging**

Como queremos registrar información completa de la petición (incluyendo la respuesta), seleccionamos Post-Proxy Flow Hook. Ahí eliges el Shared Flow "sf-logger" de la lista desplegable y guardas. Con solo este cambio, TODOS los proxies del ambiente de desarrollo ejecutarán automáticamente el Shared Flow de logging.

**Probando que funciona**

Haces una petición a cualquier proxy (por ejemplo seven-days-jobs) y en Debug puedes ver que después de toda la ejecución normal, aparece el Flow Hook llamando al Shared Flow sf-logger. Incluso si la petición falla (por ejemplo, token expirado), el log se envía igual capturando el error.

**Viendo los logs en Cloud Logging**

Vas a la consola de Google Cloud, buscas "Cloud Logging" y ahí puedes filtrar por el nombre que le pusiste a tus logs: "apigee-logs-ops". Aparecen todos los logs de tus proxies con toda la información que configuraste: nombre del proxy, método HTTP, status code, IP del cliente, timestamp, etc. Puedes ver tanto peticiones exitosas como errores.

**Ventajas de usar Flow Hooks**

No tienes que modificar ningún proxy individualmente. Todos automáticamente envían logs. Si quieres cambiar qué información se registra, solo editas el Shared Flow y afecta a todos. Es especialmente útil para funcionalidades obligatorias como logging, seguridad o monitoreo.

**Lo que debes entender**

Los Flow Hooks ejecutan Shared Flows automáticamente para todos los proxies de un ambiente. Son perfectos para funcionalidades transversales como logging. Post-Proxy es ideal para logs porque captura información completa de la petición y respuesta. Cloud Logging te da visibilidad centralizada de todo lo que pasa en tus APIs.


================================================================================`,
    4: `FIN DEL CURSO
================================================================================

Este es el mensaje final del instructor felicitándote por completar el curso.

**El logro de terminar**

El instructor te felicita por llegar hasta el final del curso. Menciona que terminar un curso de Udemy requiere mucha disciplina - muchas personas compran cursos pero no los completan. Si llegaste aquí, demuestra tu compromiso con aprender.

**Un curso vivo**

Este no es un curso estático que se quedará sin actualizar. El instructor lo considera su producto digital y estará continuamente mejorándolo. Estará atento a los comentarios de los estudiantes para hacer mejoras y agregar contenido que sea útil.

**Nuevas secciones por venir**

Se seguirán agregando nuevas secciones al curso. No te quedarás sin contenido - habrá actualizaciones continuas con temas nuevos para que sigas aprendiendo más sobre Apigee.

**Lo que has logrado**

Has aprendido desde los conceptos básicos de Apigee hasta temas avanzados como OAuth 2.0, Shared Flows, y logging profesional. Tienes las bases para trabajar con Apigee en entornos reales. El curso te dio conocimientos prácticos que puedes aplicar inmediatamente.


================================================================================


RESUMEN FINAL DE LA SECCIÓN 6
================================================================================

En esta última sección aprendiste sobre logging y monitoreo profesional:

✅ **Service Accounts**: Identidades para aplicaciones que acceden a servicios de Google Cloud de forma segura.

✅ **Cloud Logging**: Sistema centralizado de Google Cloud para ver y analizar logs de todas tus aplicaciones.

✅ **Message Logging Policy**: Política de Apigee que envía información personalizada a Cloud Logging.

✅ **Flow Hooks**: Mecanismo para ejecutar Shared Flows automáticamente en todos los proxies de un ambiente sin modificarlos individualmente.

✅ **Logging completo**: Configuraste un sistema que registra automáticamente todas las peticiones a tus APIs con información como: nombre del proxy, método HTTP, IP del cliente, códigos de respuesta, timestamps, etc.

**Aplicación práctica**:

Este setup de logging es fundamental en producción. Te permite monitorear el comportamiento de tus APIs, detectar errores, analizar patrones de uso, y tener trazabilidad completa de todas las transacciones. Es el tipo de configuración que encontrarás en implementaciones empresariales de Apigee.

**¡Felicidades por completar el curso!**

Ahora tienes conocimientos sólidos sobre Apigee X, desde conceptos básicos hasta configuraciones avanzadas de seguridad y monitoreo.

================================================================================
FIN DEL DOCUMENTO Y DEL CURSO
================================================================================`,
  },

  /**
   * Obtiene el resumen completo de un video
   * @param {number} seccion - Número de sección (1-6)
   * @param {number} numeroVideo - Número del video
   * @returns {string} Resumen completo del video
   */
  obtenerResumen(seccion, numeroVideo) {
    const seccionKey = `seccion${seccion}`;
    if (this[seccionKey] && this[seccionKey][numeroVideo]) {
      return this[seccionKey][numeroVideo];
    }
    return 'Resumen no disponible para este video.';
  }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESUMENES_COMPLETOS };
}
