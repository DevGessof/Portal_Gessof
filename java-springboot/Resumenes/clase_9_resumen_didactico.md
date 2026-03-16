# RESUMEN DIDÁCTICO - CLASE 9: JPA Repository y CRUD con Base de Datos

## 1) TÍTULO
**JPA Repository: Crear, Leer, Actualizar y Eliminar (CRUD) con MySQL/PostgreSQL**

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña cómo **conectar Spring Boot con una base de datos** (MySQL o PostgreSQL) y hacer operaciones CRUD usando **JPA Repository**.

**CRUD = Create, Read, Update, Delete** (Crear, Leer, Actualizar, Eliminar)

**Analogía:** JPA Repository es como un asistente que sabe hablar SQL. Tú le dices "guarda esto" o "busca aquello" y él traduce a SQL automáticamente.

## 3) CONCEPTOS CLAVE

### JPA (Java Persistence API)

**¿Qué es?**
Herramienta que mapea objetos Java a tablas de base de datos automáticamente.

**Ventajas:**
- No escribes SQL manualmente
- Funciona con cualquier BD (MySQL, PostgreSQL, Oracle, etc.)
- JpaRepository trae métodos CRUD predefinidos

### Entity (Entidad)

**¿Qué hace @Entity?**
Marca una clase como tabla de base de datos.

```java
@Entity
@Table(name = "usuarios")
public class UsuarioEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name = "nombres")
    private String nombres;
    
    @Column(name = "apellidos")
    private String apellidos;
    
    @Column(name = "correo")
    private String correo;
    
    // Getters y Setters
}
```

**Anotaciones importantes:**
- `@Entity`: Marca la clase como tabla
- `@Table(name="usuarios")`: Nombre de la tabla en BD
- `@Id`: Campo es Primary Key
- `@GeneratedValue`: BD genera el ID automáticamente
- `@Column(name="...")`: Mapea campo Java a columna BD

### Repository

**¿Qué es?**
Interfaz que extiende JpaRepository y hereda métodos CRUD automáticamente.

```java
@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
    // Métodos heredados automáticamente:
    // save(entity)
    // findById(id)
    // findAll()
    // deleteById(id)
    // count()
    // existsById(id)
}
```

**JpaRepository<UsuarioEntity, Long>:**
- `UsuarioEntity`: Tipo de entidad
- `Long`: Tipo del ID

### DTOs para CRUD

**CreateUsuarioModel:** Para crear nuevos usuarios (sin ID)
```java
@Data
public class CreateUsuarioModel {
    private String nombres;
    private String apellidos;
    private String correo;
    // No lleva ID porque la BD lo genera
}
```

**UpdateUsuarioModel:** Para actualizar usuarios (con ID)
```java
@Data
public class UpdateUsuarioModel {
    private Long id;           // Necesario para saber cuál actualizar
    private String nombres;
    private String apellidos;
    private String correo;
}
```

### Configuración de Base de Datos

**application.properties:**
```properties
# MySQL
spring.datasource.url=jdbc:mysql://localhost:3306/ramirez
spring.datasource.username=root
spring.datasource.password=root
spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# PostgreSQL (alternativa)
spring.datasource.url=jdbc:postgresql://localhost:5432/ramirez
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.datasource.driver-class-name=org.postgresql.Driver

# JPA/Hibernate
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

**spring.jpa.hibernate.ddl-auto opciones:**
- `create`: Borra y crea tablas al iniciar (PELIGRO: borra datos)
- `update`: Actualiza esquema sin borrar datos (RECOMENDADO en desarrollo)
- `validate`: Solo valida que esquema coincida
- `none`: No hace nada automático

## 4) PASO A PASO - CRUD Completo

### Paso 1: Dependencias (pom.xml)
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-jpa</artifactId>
</dependency>
<dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
</dependency>
<!-- O PostgreSQL -->
<dependency>
    <groupId>org.postgresql</groupId>
    <artifactId>postgresql</artifactId>
</dependency>
```

### Paso 2: Configurar BD (application.properties)
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/ramirez
spring.datasource.username=root
spring.datasource.password=root
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### Paso 3: Crear Entity
```java
@Entity
@Table(name = "usuarios")
public class UsuarioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nombres;
    private String apellidos;
    private String correo;
    // Getters y Setters
}
```

### Paso 4: Crear Repository
```java
@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioEntity, Long> {
    // ¡Ya tiene métodos CRUD automáticamente!
}
```

### Paso 5: Crear Service
```java
@Service
public class UsuarioServiceImpl implements UsuarioService {
    
    private final UsuarioRepository repository;
    
    public UsuarioServiceImpl(UsuarioRepository repository) {
        this.repository = repository;
    }
    
    // CREATE
    public UsuarioEntity create(CreateUsuarioModel request) {
        UsuarioEntity entity = new UsuarioEntity();
        entity.setNombres(request.getNombres());
        entity.setApellidos(request.getApellidos());
        entity.setCorreo(request.getCorreo());
        return repository.save(entity);
    }
    
    // READ ALL
    public List<UsuarioEntity> findAll() {
        return repository.findAll();
    }
    
    // READ ONE
    public UsuarioEntity findById(Long id) {
        return repository.findById(id)
            .orElseThrow(() -> new ResponseStatusException(
                HttpStatus.NOT_FOUND, "Usuario no encontrado"
            ));
    }
    
    // UPDATE
    public UsuarioEntity update(UpdateUsuarioModel request) {
        UsuarioEntity entity = findById(request.getId());
        entity.setNombres(request.getNombres());
        entity.setApellidos(request.getApellidos());
        entity.setCorreo(request.getCorreo());
        return repository.save(entity);
    }
    
    // DELETE
    public void delete(Long id) {
        repository.deleteById(id);
    }
}
```

### Paso 6: Crear Controller
```java
@RestController
@RequestMapping("/api/v1/usuarios")
public class UsuarioController {
    
    private final UsuarioService service;
    
    @PostMapping
    public ResponseEntity<UsuarioEntity> create(@RequestBody CreateUsuarioModel request) {
        return ResponseEntity.ok(service.create(request));
    }
    
    @GetMapping
    public ResponseEntity<List<UsuarioEntity>> findAll() {
        return ResponseEntity.ok(service.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioEntity> findById(@PathVariable Long id) {
        return ResponseEntity.ok(service.findById(id));
    }
    
    @PutMapping
    public ResponseEntity<UsuarioEntity> update(@RequestBody UpdateUsuarioModel request) {
        return ResponseEntity.ok(service.update(request));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
```

## 5) EJEMPLO EXPLICADO

**Crear usuario:**
```
POST /api/v1/usuarios
{
  "nombres": "Juan",
  "apellidos": "Pérez",
  "correo": "juan@mail.com"
}

→ Service crea UsuarioEntity
→ Repository.save() inserta en BD
→ BD genera ID automáticamente
← Devuelve {id: 1, nombres: "Juan", ...}
```

**Buscar todos:**
```
GET /api/v1/usuarios
→ Repository.findAll()
→ BD ejecuta: SELECT * FROM usuarios
← [{id:1, ...}, {id:2, ...}]
```

## 6) RESUMEN ULTRA CORTO

1. **JPA**: Mapea objetos Java ↔ Tablas BD
2. **@Entity**: Marca clase como tabla
3. **Repository**: Interfaz con CRUD automático
4. **save()**: Crea o actualiza
5. **findAll()/findById()**: Consulta
6. **deleteById()**: Elimina
7. **ddl-auto=update**: Actualiza esquema automático

## 7) PREGUNTAS DE REPASO

**1. ¿Qué hace JpaRepository?**
<details>
<summary>Ver respuesta</summary>
Proporciona métodos CRUD automáticos (save, findAll, findById, delete) sin escribir SQL.
</details>

**2. ¿Diferencia entre CreateModel y UpdateModel?**
<details>
<summary>Ver respuesta</summary>
CreateModel no tiene ID (la BD lo genera). UpdateModel tiene ID para saber cuál registro actualizar.
</details>

**3. ¿Qué hace @GeneratedValue(strategy = GenerationType.IDENTITY)?**
<details>
<summary>Ver respuesta</summary>
La base de datos genera el ID automáticamente (auto-increment).
</details>

**4. ¿Cuándo usar ddl-auto=update vs create?**
<details>
<summary>Ver respuesta</summary>
update: actualiza esquema sin borrar datos (desarrollo). create: borra y recrea tablas (PELIGRO en producción).
</details>

**5. ¿Por qué repository.save() sirve para CREATE y UPDATE?**
<details>
<summary>Ver respuesta</summary>
Si el entity no tiene ID o ID=null → INSERT. Si tiene ID existente → UPDATE.
</details>

---

*Fin del resumen de Clase 9*
