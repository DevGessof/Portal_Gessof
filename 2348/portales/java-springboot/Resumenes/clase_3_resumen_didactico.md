# RESUMEN DIDÁCTICO - CLASE 3: Componentes, Anotaciones y Flujo de Datos

## 1) TÍTULO DEL TEMA
**Componentes de Spring Boot: Controller, Service, Repository, Entity y DTOs - Flujo Completo de una Petición**

---

## 2) EXPLICACIÓN SENCILLA

Esta clase explica cómo fluyen los datos en una aplicación Spring Boot desde que llega una petición HTTP hasta que se consulta la base de datos y se devuelve la respuesta.

**Analogía del Restaurant:**
Imagina un restaurant donde:
- **Controller** = Mesero (recibe el pedido del cliente)
- **Service** = Cocina (prepara el pedido con la lógica correcta)
- **Repository** = Almacén/Bodega (sabe dónde están los ingredientes)
- **Entity** = Lista de ingredientes disponibles (representación de la despensa)
- **DTO** = El plato servido en el plato bonito (presentación al cliente)

El mesero no cocina, solo toma el pedido. La cocina no va directamente al almacén, pasa por el inventario. Y al cliente no le das los ingredientes crudos, le das un plato preparado.

---

## 3) CONCEPTOS CLAVE

### Patrones de Diseño mencionados

**MVC (Modelo-Vista-Controlador)**
- Patrón tradicional de N capas
- Separa: Datos (Modelo) - Presentación (Vista) - Lógica (Controlador)

**Arquitectura Hexagonal**
- También de N capas
- Separa: Infraestructura - Negocio - Exposición
- Usa puertos y adaptadores

### Componentes Principales y su Orden Jerárquico

**FLUJO COMPLETO DE UNA PETICIÓN:**

```
Cliente HTTP Request
      ↓
1. Controller (Puerta de entrada)
      ↓
2. Service (Lógica de negocio)
      ↓
3. Repository (Interfaz de datos)
      ↓
4. Entity (Representa tabla de BD)
      ↓
5. Base de Datos
      ↑ (devuelve datos)
6. Entity (convierte datos en objeto Java)
      ↑
7. DTO (transforma Entity a formato de respuesta)
      ↑
8. Service (procesa DTO)
      ↑
9. Controller (devuelve respuesta HTTP)
      ↑
Cliente recibe JSON
```

### 1. Controller

**¿Qué hace?**
- Es la "puerta de entrada" de las peticiones HTTP
- Recibe requests y devuelve responses
- **NO tiene lógica de negocio**

**Responsabilidades:**
- Validar que lleguen los datos esperados
- Llamar al Service correspondiente
- Devolver la respuesta con el código HTTP correcto

```java
@RestController
@RequestMapping("/api/v1/contacts")
public class ContactController {
    
    private final ContactService contactService;
    
    @GetMapping
    public ResponseEntity<List<ContactDTO>> getAll() {
        List<ContactDTO> contacts = contactService.findAll();
        return ResponseEntity.ok(contacts);
    }
}
```

### 2. Service

**¿Qué hace?**
- Contiene toda la **lógica de negocio**
- Procesa los datos, hace cálculos, valida reglas de negocio
- Llama al Repository para consultar/guardar datos
- Transforma Entity a DTO

**Responsabilidades:**
- Validaciones complejas
- Cálculos y transformaciones
- Orquestar llamadas a múltiples Repositories si es necesario

```java
@Service
public class ContactService {
    
    private final ContactRepository contactRepository;
    
    public List<ContactDTO> findAll() {
        List<Contact> entities = contactRepository.findAll();
        // Transforma Entity → DTO
        return entities.stream()
                       .map(this::toDTO)
                       .collect(Collectors.toList());
    }
}
```

### 3. Repository

**¿Qué hace?**
- Es una **interfaz** (no clase normal)
- Se comunica directamente con la base de datos
- Hereda de JpaRepository que ya tiene métodos predefinidos

**Responsabilidades:**
- Ejecutar queries (consultas SQL)
- Guardar, actualizar, eliminar datos
- Devolver Entities

```java
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // Spring crea automáticamente métodos como:
    // findAll(), findById(), save(), delete(), etc.
    
    // Puedes agregar consultas personalizadas:
    List<Contact> findByAgeGreaterThan(int age);
}
```

### 4. Entity

**¿Qué es?**
- Representa una **tabla de la base de datos**
- Es un objeto Java que mapea los campos de la tabla
- Tiene las mismas columnas que la tabla

**Responsabilidades:**
- Definir estructura de la tabla
- Mapear tipos de datos SQL a Java
- **NO tiene lógica de negocio**, solo estructura

```java
@Entity
@Table(name = "contacts")
public class Contact {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombre", nullable = false)
    private String nombre;
    
    @Column(name = "correo")
    private String correo;
    
    @Column(name = "fecha_nacimiento")
    private LocalDate fechaNacimiento;
    
    // Getters y Setters
}
```

### 5. DTO (Data Transfer Object)

**¿Qué es?**
- Objeto para **transferir datos** entre capas
- Define qué datos se envían al cliente
- Puede tener estructura diferente al Entity

**¿Por qué usar DTOs y no Entities directamente?**
1. **Seguridad**: No expones la estructura completa de tu BD
2. **Flexibilidad**: Puedes mostrar solo algunos campos
3. **Versionado**: Puedes tener DTOs diferentes para v1, v2 de tu API
4. **Desacoplamiento**: Si cambias la BD, no afectas la API

**Ejemplo:**
```java
// DTO de entrada (Request)
public class CreateContactDTO {
    private String nombre;
    private String correo;
    private LocalDate fechaNacimiento;
    // Solo getters y setters, sin lógica
}

// DTO de salida (Response)
public class ContactDTO {
    private Long id;
    private String nombre;
    private String correo;
    private int edad;  // Campo calculado, no está en BD
    // Solo getters y setters
}
```

### 6. Configuration

**¿Qué hace?**
- Configura Beans específicos
- Se usa cuando necesitas configurar objetos externos
- Evita poner todo en application.properties

**Ejemplo de uso:**
- Múltiples bases de datos
- Configuración de RestTemplate, WebClient
- Configuración de seguridad personalizada

```java
@Configuration
public class DatabaseConfig {
    
    @Bean
    @Primary
    public DataSource primaryDataSource() {
        // Configuración de primera BD
    }
    
    @Bean
    public DataSource secondaryDataSource() {
        // Configuración de segunda BD
    }
}
```

---

## 4) PASO A PASO - Flujo Completo con Ejemplo

**Caso: Obtener contactos mayores de 50 años**

### Paso 1: Cliente hace petición
```
GET /api/v1/contacts?age=50
```

### Paso 2: Controller recibe la petición
```java
@GetMapping
public ResponseEntity<List<ContactDTO>> getContactsOverAge(
    @RequestParam int age) {
    
    // Solo recibe y llama al Service
    List<ContactDTO> contacts = contactService.findByAgeOver(age);
    return ResponseEntity.ok(contacts);
}
```

### Paso 3: Service procesa la lógica
```java
@Service
public class ContactService {
    
    private final ContactRepository repository;
    
    public List<ContactDTO> findByAgeOver(int age) {
        // 1. Llama al Repository
        List<Contact> entities = repository.findByAgeGreaterThan(age);
        
        // 2. Transforma Entity → DTO
        return entities.stream()
                       .map(this::entityToDTO)
                       .collect(Collectors.toList());
    }
    
    private ContactDTO entityToDTO(Contact entity) {
        ContactDTO dto = new ContactDTO();
        dto.setId(entity.getId());
        dto.setNombre(entity.getNombre());
        dto.setCorreo(entity.getCorreo());
        // Calcula edad (lógica en Service)
        dto.setEdad(calcularEdad(entity.getFechaNacimiento()));
        return dto;
    }
}
```

### Paso 4: Repository ejecuta query
```java
@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    
    // Spring genera automáticamente el SQL:
    // SELECT * FROM contacts WHERE edad > ?
    List<Contact> findByAgeGreaterThan(int age);
}
```

### Paso 5: Entity mapea los datos de la BD
```java
@Entity
@Table(name = "contacts")
public class Contact {
    @Id
    private Long id;
    private String nombre;
    private String correo;
    private LocalDate fechaNacimiento;
    
    // La BD devuelve:
    // [{"id": 1, "nombre": "Juan", "correo": "juan@mail.com", "fecha_nacimiento": "1960-05-15"}, ...]
    // Y Entity lo convierte a objetos Contact
}
```

### Paso 6: Service transforma a DTO

Entity tiene: `id, nombre, correo, fechaNacimiento`  
DTO tiene: `id, nombre, correo, edad` (edad es calculada)

### Paso 7: Controller devuelve respuesta
```java
return ResponseEntity.ok(contacts);
// HTTP 200 OK
// Body: [{"id": 1, "nombre": "Juan", "correo": "juan@mail.com", "edad": 64}, ...]
```

---

## 5) EJEMPLO EXPLICADO - Arquitectura de Microservicios

El profesor explicó un escenario real con **múltiples microservicios comunicándose**:

```
┌─────────────────┐
│  API Gateway    │  Puerto 8080 - Pasarela para cliente
│  (entrada)      │
└────────┬────────┘
         │
    ┌────┴─────┬─────────┬──────────┐
    │          │         │          │
┌───▼───┐  ┌──▼──┐  ┌───▼────┐  ┌──▼───┐
│ Logic │  │ MS  │  │  ACL   │  │ Otro │  
│ 8081  │  │8082 │  │  8083  │  │      │
└───────┘  └─────┘  └────────┘  └──────┘
           (BD)     (Externo)
```

**Roles de cada microservicio:**

1. **API Gateway (8080)**: Recibe peticiones del cliente, las distribuye
2. **MS Logic (8081)**: Tiene la lógica de negocio principal
3. **MS Database (8082)**: Solo hace transacciones con la BD
4. **ACL (8083)**: Se comunica con servicios externos (ej: Registro Civil)

**Flujo de ejemplo:**
1. Cliente pide información del Registro Civil
2. Gateway (8080) recibe la petición
3. Gateway llama a Logic (8081)
4. Logic llama a ACL (8083) para traer datos externos
5. Logic llama a MS Database (8082) para guardar los datos
6. Ambos responden OK
7. Logic responde a Gateway
8. Gateway responde al cliente

**Por eso corren en puertos diferentes** - Son servicios independientes en la misma máquina.

---

## 6) RESUMEN ULTRA CORTO PARA MEMORIZAR

1. **Flujo**: Controller → Service → Repository → Entity → BD
2. **Controller**: Puerta de entrada, sin lógica
3. **Service**: Toda la lógica de negocio
4. **Repository**: Interfaz que habla con BD (extiende JpaRepository)
5. **Entity**: Representa tabla de BD (campos = columnas)
6. **DTO**: Objeto de transferencia (lo que envías al cliente)
7. **Regla de oro**: Entity ≠ DTO (siempre transformar)
8. **Configuration**: Para beans personalizados y múltiples configuraciones

---

## 7) PREGUNTAS DE REPASO

**1. ¿Por qué se debe transformar Entity a DTO en lugar de devolver el Entity directamente?**
<details>
<summary>Ver respuesta</summary>
Por buenas prácticas: 1) Seguridad (no expones estructura completa de BD), 2) Flexibilidad (puedes mostrar solo algunos campos), 3) Desacoplamiento (cambios en BD no afectan API), 4) Versionado de API.
</details>

**2. ¿Cuál es el orden correcto del flujo de datos al hacer una consulta?**
<details>
<summary>Ver respuesta</summary>
Controller → Service → Repository → Entity → Base de Datos. La respuesta hace el camino inverso.
</details>

**3. ¿Qué hace exactamente el Repository?**
<details>
<summary>Ver respuesta</summary>
Es una interfaz que se comunica con la base de datos. Ejecuta queries y devuelve Entities. Hereda de JpaRepository que ya tiene métodos predefinidos (findAll, save, delete, etc.).
</details>

**4. ¿Puede el Controller tener lógica de negocio como cálculos o validaciones complejas?**
<details>
<summary>Ver respuesta</summary>
NO. El Controller solo debe validar que lleguen los datos esperados y llamar al Service. Toda la lógica de negocio va en el Service.
</details>

**5. ¿Qué diferencia hay entre Entity y DTO?**
<details>
<summary>Ver respuesta</summary>
Entity representa una tabla de la BD con sus columnas exactas. DTO es un objeto de transferencia que puede tener estructura diferente y se usa para enviar/recibir datos del cliente.
</details>

---

**HERRAMIENTAS MENCIONADAS:**
- **Postman**: Para hacer peticiones HTTP y probar APIs
- **application.properties**: Archivo de configuración (cambiar puerto, configurar BD, etc.)
- **Maven**: `mvn spring-boot:run` para ejecutar la aplicación

**BUENA PRÁCTICA IMPORTANTE:**
Aunque Entity y DTO tengan los mismos campos, SIEMPRE se debe hacer la transformación. Es la forma correcta y profesional de trabajar.

---

*Fin del resumen de Clase 3*
