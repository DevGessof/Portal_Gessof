/**
 * GESSOF Academy - Datos de Evaluación Práctica
 * Basado en Evaluacion_Practica.txt
 */

const PRACTICAL_EVALUATION_DATA = {
    title: "Evaluación Práctica - Spring Boot & Microservicios",
    globalRequirements: {
        apis: [
            { name: "Monster Hunter DB", url: "https://wilds.mhdb.io/en/monsters" },
            { name: "Digimon API", url: "https://digi-api.com/api/v1/digimon/{name}" }
        ],
        general: [
            "Trabajar con Arquitectura Hexagonal",
            "Crear una clase AppConfig dentro del paquete config",
            "Definir Beans explícitos para RestTemplate y WebClient",
            "Utilizar Camel al menos en uno de los flujos de consumo",
            "Implementar persistencia con JPA para almacenar los resultados procesados (H2 en memoria)",
            "Implementar pruebas unitarias con JUnit 5 y Mockito (mínimo de servicios)",
            "El proyecto debe compilar y ejecutarse correctamente"
        ],
        jpa: [
            "Crear entidades JPA para Monster y Digimon",
            "Uso correcto de @Entity y @Id",
            "Solo grabar el nombre, un uuid y timestamp de consulta",
            "Configuración vía application.yml o application.properties"
        ],
        testing: [
            "Pruebas para servicios de consumo de APIs y lógica de filtrado",
            "Uso de Mockito para mock de llamadas externas (no consumir APIs reales en tests)"
        ]
    },
    exercises: [
        {
            id: 1,
            title: "EJERCICIO 1 – MONSTER HUNTER API (RESTTEMPLATE)",
            endpoint: "GET https://wilds.mhdb.io/en/monsters",
            requirements: [
                "Obtener la lista completa de monstruos",
                "Filtrar aquellos cuya location.name sea exactamente: 'Ruins of Wyveria'",
                "Devolver una lista con campos: name, species, description",
                "Condición adicional: Si species == 'temnoceran', agregar resistances y weaknesses",
                "Excluir explícitamente los campos: id y condition",
                "Persistir el resultado final en base de datos usando JPA"
            ]
        },
        {
            id: 2,
            title: "EJERCICIO 2 – DIGIMON API (WEBCLIENT + RESTTEMPLATE + CAMEL)",
            endpoints: [
                "GET https://digi-api.com/api/v1/digimon/leviamon",
                "GET https://digi-api.com/api/v1/digimon/mugendramon",
                "GET https://digi-api.com/api/v1/digimon/sakuyamon"
            ],
            requirements: [
                "Consumir los 3 Digimon indicados",
                "Construir una lista ordenada alfabéticamente por name",
                "Cada Digimon debe contener: name, descriptions (solo inglés, incluir language), priorEvolutions (solo id y digimon), nextEvolutions (solo id y digimon)",
                "Implementar al menos un consumo usando WebClient",
                "Implementar al menos un consumo usando RestTemplate",
                "Orquestación o procesamiento usando Apache Camel"
            ]
        }
    ]
};
