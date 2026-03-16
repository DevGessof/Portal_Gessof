# RESUMEN DIDÁCTICO - CLASE 12: Arquitectura Hexagonal (Ports and Adapters)

## 1) TÍTULO
**Arquitectura Hexagonal: Separación de Lógica de Negocio y Detalles Técnicos**

## 2) EXPLICACIÓN SENCILLA

Arquitectura Hexagonal (también llamada **Ports and Adapters**) es un patrón de diseño que separa la lógica de negocio del código técnico (bases de datos, APIs, frameworks).

**Analogía del Motor de Auto:**
- **Dominio (lógica negocio)** = Motor del auto (lo importante)
- **Adaptadores** = Ruedas, carrocería (intercambiables)
- Puedes cambiar las ruedas sin tocar el motor

**Objetivo:** Cambiar tecnologías (MySQL → PostgreSQL, REST → GraphQL) sin reescribir lógica de negocio.

## 3) CONCEPTOS CLAVE

### Principios Fundamentales

**1. Inversión de Dependencias**
- El Dominio NO depende de infraestructura
- La Infraestructura depende del Dominio
- El Dominio define interfaces, la Infraestructura las implementa

**2. Separación de Responsabilidades**
- **Dominio**: Piensa (lógica de negocio)
- **Adaptadores**: Ejecutan (detalles técnicos)

**3. Independencia Tecnológica**
- Cambiar BD, framework o API sin modificar lógica
- Solo cambias adaptadores

### Capas de Hexagonal

```
┌─────────────────────────────────────┐
│         ADAPTADORES PRIMARIOS       │
│    (Controllers, APIs, GraphQL)     │
└──────────────┬──────────────────────┘
               │ Puertos de Entrada
┌──────────────▼──────────────────────┐
│           DOMINIO (CORE)            │
│  - Entities                         │
│  - Value Objects                    │
│  - Interfaces (Ports)               │
│  - Lógica de Negocio                │
└──────────────┬──────────────────────┘
               │ Puertos de Salida
┌──────────────▼──────────────────────┐
│      ADAPTADORES SECUNDARIOS        │
│  (Repositories, HTTP Clients, DB)   │
└─────────────────────────────────────┘
```

### Componentes Core

**1. Domain (Núcleo)**
```
domain/
  ├── model/        → Entities y Value Objects
  ├── ports/        → Interfaces (contratos)
  │   ├── input/    → UseC cases (entrada)
  │   └── output/   → Repositories, Clients (salida)
  └── services/     → Lógica de negocio
```

**2. Application**
```
application/
  └── usecases/     → Implementación de casos de uso
```

**3. Infrastructure**
```
infrastructure/
  ├── adapters/
  │   ├── input/    → REST Controllers
  │   └── output/   → JPA Repositories, HTTP Clients
  └── config/       → Configuraciones
```

### Puertos (Interfaces)

**Puertos de Entrada (Input Ports):**
```java
// Interface que define caso de uso
public interface CreateOrderUseCase {
    OrderResponse execute(CreateOrderCommand command);
}
```

**Puertos de Salida (Output Ports):**
```java
// Interface para persistencia
public interface OrderRepository {
    Order save(Order order);
    Optional<Order> findById(OrderId id);
}

// Interface para servicios externos
public interface PaymentClient {
    PaymentResponse processPayment(Payment payment);
}
```

### Entities vs DTOs

**Entity (tiene lógica):**
```java
@Getter
public class Order {
    private OrderId id;
    private Money total;
    private OrderStatus status;
    
    // Constructor privado
    private Order(OrderId id, Money total) {
        this.id = id;
        this.total = total;
        this.status = OrderStatus.PENDING;
    }
    
    // Factory method
    public static Order create(OrderId id, Money total) {
        validateTotal(total);
        return new Order(id, total);
    }
    
    // Lógica de negocio
    public void activate() {
        if (this.status != OrderStatus.PENDING) {
            throw new IllegalStateException("Solo pending puede activarse");
        }
        this.status = OrderStatus.ACTIVE;
    }
    
    // Validaciones
    private static void validateTotal(Money total) {
        if (total.isNegative()) {
            throw new IllegalArgumentException("Total no puede ser negativo");
        }
    }
}
```

**DTO (solo datos):**
```java
@Data
public class CreateOrderDTO {
    private String customerId;
    private BigDecimal amount;
    // Solo getters/setters, SIN lógica
}
```

## 4) VENTAJAS vs MVC

| Aspecto | MVC | Hexagonal |
|---------|-----|-----------|
| **Complejidad** | Baja | Media-Alta |
| **Curva aprendizaje** | Baja | Media-Alta |
| **Testabilidad** | Media | Alta |
| **Flexibilidad** | Baja | Muy Alta |
| **Desacoplamiento** | Medio | Alto |
| **Cambio tecnología** | Difícil | Fácil |

## 5) CUÁNDO USAR

### ✅ USA HEXAGONAL cuando:
- Microservicios complejos con mucha lógica
- Necesitas cambiar tecnologías frecuentemente
- Múltiples interfaces de consumo (REST, GraphQL, MQ)
- **Múltiples equipos trabajan en mismo servicio**
- Proyecto largo plazo que evolucionará
- Testing exhaustivo es crítico

### ❌ USA MVC cuando:
- CRUD simple sin lógica compleja
- Prototipos rápidos
- Equipos pequeños sin experiencia
- Proyecto corto o temporal
- Un solo equipo pequeño

## 6) DIFERENCIAS CON LO VISTO EN EL CURSO

**Lo que ya hacíamos (MVC):**
```
Controller → Service → Repository → DB
```

**Con Hexagonal (más separado):**
```
Controller → UseCase (interface) → UseCaseImpl → 
  → Repository (interface) → RepositoryImpl → DB
  → Client (interface) → ClientImpl → External API
```

**Cambios principales:**
1. **Más interfaces**: Todo pasa por contratos
2. **Client separado**: Llamadas HTTP en capa aparte (no en Service)
3. **UseCases**: Lógica de negocio muy específica
4. **Entities con lógica**: No solo DTOs pasivos

## 7) EJEMPLO COMPARATIVO

### MVC (lo que hicimos):
```java
@Service
public class UserService {
    private final UserRepository repository;
    private final RestTemplate restTemplate;
    
    public User create(CreateUserDTO dto) {
        // Lógica + llamada HTTP + persistencia todo aquí
        User user = new User();
        user.setEmail(dto.getEmail());
        
        // Llamada externa
        Payment payment = restTemplate.getForObject(url, Payment.class);
        
        // Guardar
        return repository.save(user);
    }
}
```

### HEXAGONAL (separado):
```java
// 1. Puerto de entrada (interface)
public interface CreateUserUseCase {
    UserResponse execute(CreateUserCommand command);
}

// 2. Implementación del caso de uso
@Service
public class CreateUserUseCaseImpl implements CreateUserUseCase {
    private final UserRepository repository;     // Puerto salida
    private final PaymentClient paymentClient;  // Puerto salida
    
    public UserResponse execute(CreateUserCommand command) {
        // Solo lógica de negocio
        User user = User.create(command.getEmail());
        
        // Delega a adaptadores
        Payment payment = paymentClient.process(user.getId());
        User saved = repository.save(user);
        
        return UserMapper.toResponse(saved);
    }
}

// 3. Adaptador de salida (implementa puerto)
@Component
public class PaymentClientImpl implements PaymentClient {
    private final RestTemplate restTemplate;
    
    public Payment process(UserId userId) {
        // Solo se encarga de la llamada HTTP
        return restTemplate.getForObject(url, Payment.class);
    }
}
```

## 8) RESUMEN ULTRA CORTO

1. **Hexagonal**: Dominio en el centro, infraestructura afuera
2. **Inversión**: Infraestructura depende de Dominio (no al revés)
3. **Ports**: Interfaces (contratos)
4. **Adapters**: Implementaciones técnicas
5. **Ventaja**: Cambiar tecnología sin tocar lógica
6. **Testing**: Se testea cada capa independientemente
7. **Usar cuando**: Proyectos complejos, múltiples equipos

## 9) PREGUNTAS DE REPASO

**1. ¿Qué significa inversión de dependencias?**
<details>
<summary>Ver respuesta</summary>
El Dominio define interfaces (contratos). La Infraestructura las implementa. El Dominio NO conoce detalles técnicos (BD, frameworks).
</details>

**2. ¿Diferencia entre Ports y Adapters?**
<details>
<summary>Ver respuesta</summary>
Ports = Interfaces (contratos, qué se necesita). Adapters = Implementaciones (cómo se hace técnicamente).
</details>

**3. ¿Por qué Entities pueden tener lógica en Hexagonal?**
<details>
<summary>Ver respuesta</summary>
Porque representan el modelo de dominio (lógica de negocio), no son simples DTOs de transferencia.
</details>

**4. ¿Cuándo NO usar Hexagonal?**
<details>
<summary>Ver respuesta</summary>
CRUD simples, prototipos rápidos, equipos sin experiencia, proyectos temporales.
</details>

**5. ¿Qué permite cambiar fácilmente en Hexagonal?**
<details>
<summary>Ver respuesta</summary>
Base de datos, frameworks, APIs externas, forma de exponer servicios (REST, GraphQL). Solo cambias adaptadores.
</details>

---

**NOTA IMPORTANTE DEL PROFESOR:**
> "No se trata de código perfecto, se trata de crear código que pueda evolucionar sin dolor. Simple, legible y escalable."

---

*Fin del resumen de Clase 12*
