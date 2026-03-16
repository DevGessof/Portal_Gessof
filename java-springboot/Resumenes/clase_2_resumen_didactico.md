# RESUMEN DIDÁCTICO - CLASE 2: Arquitectura de Spring Boot y REST Controllers

## 1) TÍTULO DEL TEMA
**Arquitectura de Spring Boot: Capas, Controllers REST y Métodos HTTP (GET, POST, PUT, DELETE)**

---

## 2) EXPLICACIÓN SENCILLA

Esta clase explica cómo está organizado un proyecto de Spring Boot y cómo crear servicios REST (APIs) que otros sistemas puedan consumir.

**Analogía de Spring Boot:**
- **Java** = El idioma que hablas
- **Spring Boot** = La caja de herramientas y plantillas que hacen más rápido crear aplicaciones

**Arquitectura por Capas (como una casa):**
Imagina que tu aplicación es una casa:
- **Controller** = La puerta de entrada y salida (donde llegan las peticiones)
- **Service** = La cocina (donde se prepara/procesa todo)
- **Repository** = El almacén/bodega (donde guardas y buscas datos)
- **Model/DTO** = Los muebles y objetos (estructura de tus datos)
- **Configuration** = Las instalaciones (luz, agua) que configuraste al inicio

**API REST:**
Es como un menú de restaurant. Defines qué operaciones puedes hacer:
- **GET** = Consultar/Ver (como leer el menú)
- **POST** = Crear algo nuevo (como hacer un pedido)
- **PUT** = Actualizar algo completo (como cambiar todo tu pedido)
- **DELETE** = Eliminar (como cancelar un pedido)

---

## 3) CONCEPTOS CLAVE

### Capas de la Arquitectura Spring Boot

**1. Controller / RestController**
- Son la "puerta de entrada" de la aplicación
- Exponen los endpoints (URLs) que pueden ser consumidos
- **@Controller**: Para aplicaciones MVC que retornan HTML/vistas
- **@RestController**: Para APIs que retornan JSON/objetos (más común)
- **NO deben tener lógica de negocio**, solo validar datos y llamar al Service

**2. Service**
- Es la "cocina" donde se procesa todo
- Contiene toda la lógica de negocio
- Aquí van los cálculos, validaciones complejas, transformaciones

**3. Repository**
- Exclusivo de JPA (Java Persistence API)
- Se encarga de hablar con la base de datos
- Si no usas JPA, no usas Repository

**4. Model / DTO**
- Clases que definen la estructura de los datos
- Solo atributos + getters/setters
- **NO deben llevar lógica de negocio**

**5. Configuration**
- Clases de configuración
- Se usan para inyectar dependencias externas (RestTemplate, WebClient, etc.)
- Evita configurar todo en la clase principal

### Beans (Objetos gestionados por Spring)

**¿Qué es un Bean?**
Un Bean es un objeto que Spring crea, administra e inyecta automáticamente donde se necesite.

**Analogía:** Spring es una empresa que compra una impresora (Bean) y la comparte con todos los empleados. Nadie crea su propia impresora, todos usan la misma.

**¿Dónde aparecen los Beans?**
Clases con estas anotaciones se convierten en Beans:
- @Component
- @Service
- @Repository
- @Controller
- @RestController
- @Configuration

**Características:**
- Por defecto son **Singleton** (una única instancia por tipo)
- Spring los crea al iniciar la aplicación
- Ejecuta los constructores automáticamente

### Inversión de Control (IoC)

**Antes:** Tú creabas los objetos manualmente
```java
ProductService service = new ProductService();
```

**Ahora:** Spring decide cuándo y cómo crearlos
```java
@Autowired
private ProductService service; // Spring lo inyecta automáticamente
```

### Inyección de Dependencias

Spring entrega automáticamente los componentes que una clase necesita.

**Formas de inyectar:**
1. **Por constructor** (recomendado - buena práctica)
```java
public class ProductController {
    private final ProductService productService;
    
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
```

2. **Por @Autowired** (menos recomendado)
```java
@Autowired
private ProductService productService;
```

### Anotaciones de Mapping (Mapeo de URLs)

**@RequestMapping**
- Define la ruta base del controlador
```java
@RequestMapping("/api/v1/products")
```

**@GetMapping**
- Para consultar/obtener datos
- Equivale a SELECT en base de datos
```java
@GetMapping  // GET /api/v1/products
public List<ProductDTO> getAllProducts() { }

@GetMapping("/{id}")  // GET /api/v1/products/123
public ProductDTO getProductById(@PathVariable Long id) { }
```

**@PostMapping**
- Para crear nuevos recursos
- Equivale a INSERT en base de datos
- Retorna código **201 Created**
```java
@PostMapping
public ResponseEntity<ProductDTO> createProduct(@RequestBody @Valid CreateProductDTO dto) {
    ProductDTO created = productService.create(dto);
    return ResponseEntity.created(URI.create("/api/v1/products/" + created.getId()))
                         .body(created);
}
```

**@PutMapping**
- Para actualizar/reemplazar recursos completos
- Equivale a UPDATE en base de datos
- Debe ser **idempotente** (repetir la misma petición produce el mismo resultado)
```java
@PutMapping("/{id}")
public ResponseEntity<ProductDTO> updateProduct(
    @PathVariable Long id,
    @RequestBody @Valid UpdateProductDTO dto) {
    ProductDTO updated = productService.update(id, dto);
    return ResponseEntity.ok(updated);
}
```

**@DeleteMapping**
- Para eliminar recursos
- Equivale a DELETE en base de datos
```java
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    productService.delete(id);
    return ResponseEntity.noContent().build();  // 204 No Content
}
```

### Anotaciones de Parámetros

**@PathVariable**
- Extrae variables de la URL
```java
@GetMapping("/{id}")
public Product getProduct(@PathVariable Long id) { }
// GET /products/123 → id = 123
```

**@RequestBody**
- Lee el cuerpo de la petición (JSON)
- Convierte JSON a objeto Java automáticamente
```java
@PostMapping
public Product create(@RequestBody CreateProductDTO dto) { }
```

**@Valid**
- Activa validaciones definidas en el DTO
```java
@PostMapping
public Product create(@RequestBody @Valid CreateProductDTO dto) { }
```

### ResponseEntity

Permite controlar la respuesta HTTP completa:
- Código de estado (200, 201, 404, etc.)
- Headers
- Body

```java
// 200 OK con body
return ResponseEntity.ok(product);

// 201 Created con Location header
return ResponseEntity.created(URI.create("/api/v1/products/123"))
                     .body(product);

// 204 No Content (sin body)
return ResponseEntity.noContent().build();

// 404 Not Found
return ResponseEntity.notFound().build();
```

---

## 4) PASO A PASO - Crear un Controller REST completo

### Paso 1: Crear el Controller
```java
@RestController
@RequestMapping("/api/v1/products")
public class ProductController {
    
    private final ProductService productService;
    
    // Constructor para inyección de dependencias
    public ProductController(ProductService productService) {
        this.productService = productService;
    }
}
```

### Paso 2: Método GET para listar todos
```java
@GetMapping
public ResponseEntity<List<ProductDTO>> getAllProducts() {
    List<ProductDTO> products = productService.findAll();
    return ResponseEntity.ok(products);
}
```

### Paso 3: Método GET por ID
```java
@GetMapping("/{id}")
public ResponseEntity<ProductDTO> getProductById(@PathVariable Long id) {
    ProductDTO product = productService.findById(id);
    return ResponseEntity.ok(product);
}
```

### Paso 4: Método POST para crear
```java
@PostMapping
public ResponseEntity<ProductDTO> createProduct(
    @RequestBody @Valid CreateProductDTO dto) {
    
    ProductDTO created = productService.create(dto);
    
    URI location = URI.create("/api/v1/products/" + created.getId());
    return ResponseEntity.created(location).body(created);
}
```

### Paso 5: Método PUT para actualizar
```java
@PutMapping("/{id}")
public ResponseEntity<ProductDTO> updateProduct(
    @PathVariable Long id,
    @RequestBody @Valid UpdateProductDTO dto) {
    
    ProductDTO updated = productService.update(id, dto);
    return ResponseEntity.ok(updated);
}
```

### Paso 6: Método DELETE
```java
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
    productService.delete(id);
    return ResponseEntity.noContent().build();
}
```

---

## 5) EJEMPLO EXPLICADO

**Flujo completo de una petición POST:**

1. **Cliente envía:** `POST /api/v1/products` con JSON:
```json
{
  "name": "Laptop",
  "price": 1500.00
}
```

2. **Controller recibe:** `@PostMapping` captura la petición
```java
@PostMapping
public ResponseEntity<ProductDTO> createProduct(@RequestBody @Valid CreateProductDTO dto)
```

3. **@RequestBody convierte** JSON → CreateProductDTO automáticamente

4. **@Valid valida** que los datos sean correctos (ej: price > 0)

5. **Controller llama Service:**
```java
ProductDTO created = productService.create(dto);
```

6. **Service procesa** la lógica de negocio y llama Repository

7. **Repository guarda** en la base de datos

8. **Controller retorna** respuesta 201 Created con:
```java
return ResponseEntity.created(URI.create("/api/v1/products/123"))
                     .body(created);
```

9. **Cliente recibe:** Status 201 + Header Location + JSON del producto creado

---

## 6) RESUMEN ULTRA CORTO PARA MEMORIZAR

1. **Capas**: Controller (entrada/salida) → Service (lógica) → Repository (BD)
2. **Beans**: Objetos gestionados por Spring automáticamente (Singleton por defecto)
3. **Inyección**: Por constructor (mejor práctica) o @Autowired
4. **@RestController**: Para APIs que retornan JSON
5. **GET** = Consultar, **POST** = Crear (201), **PUT** = Actualizar, **DELETE** = Eliminar (204)
6. **@PathVariable**: Extrae valores de la URL (/products/{id})
7. **@RequestBody**: Lee el JSON del cuerpo de la petición
8. **Controller SIN lógica**, solo llama al Service

---

## 7) PREGUNTAS DE REPASO

**1. ¿Cuál es la diferencia entre @Controller y @RestController?**
<details>
<summary>Ver respuesta</summary>
@Controller es para aplicaciones MVC que retornan HTML/vistas. @RestController es para APIs que retornan JSON/objetos. @RestController combina @Controller + @ResponseBody.
</details>

**2. ¿Qué es un Bean y cómo se crea?**
<details>
<summary>Ver respuesta</summary>
Un Bean es un objeto gestionado por Spring. Se crea automáticamente al iniciar la aplicación cuando una clase tiene anotaciones como @Component, @Service, @Repository, @Controller o @RestController.
</details>

**3. ¿Por qué NO se debe poner lógica de negocio en el Controller?**
<details>
<summary>Ver respuesta</summary>
Por orden y separación de responsabilidades. El Controller solo debe validar datos de entrada y llamar al Service. La lógica va en el Service. Esto hace el código más mantenible y ordenado.
</details>

**4. ¿Qué código HTTP retorna un POST exitoso y por qué?**
<details>
<summary>Ver respuesta</summary>
201 Created, porque se ha creado un nuevo recurso. También debe incluir un header Location con la URL del recurso creado.
</details>

**5. ¿Qué significa que un PUT debe ser "idempotente"?**
<details>
<summary>Ver respuesta</summary>
Que repetir la misma petición PUT debe producir siempre el mismo resultado. Si actualizas un producto con los mismos datos 10 veces, el resultado final debe ser idéntico.
</details>

---

## BUENAS PRÁCTICAS MENCIONADAS

1. ✅ **Inyección por constructor** (no por @Autowired en campos)
2. ✅ **Separación por capas** (Controller, Service, Repository en packages separados)
3. ✅ **Controllers sin lógica** (solo validación y llamada a Service)
4. ✅ **Configuraciones externalizadas** (en application.yml/properties, no en código duro)
5. ✅ **Usar DTOs** para respuestas complejas (no trabajar con Objects genéricos)
6. ✅ **Validación centralizada** con @Valid
7. ✅ **Nomenclatura en inglés** y descriptiva

---

**IMPORTANTE:** El Controller es solo la "puerta". El Service es donde pasa todo lo importante.

---

*Fin del resumen de Clase 2*
