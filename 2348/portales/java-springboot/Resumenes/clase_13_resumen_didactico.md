# RESUMEN DIDÁCTICO - CLASE 13: Testing Unitario (Unit Tests)

## 1) TÍTULO
**Testing Unitario en Spring Boot con JUnit y Mockito**

## 2) EXPLICACIÓN SENCILLA

Esta clase enseña cómo crear **tests unitarios** para verificar que tu código funciona correctamente. Los tests son pequeños programas que prueban tu código automáticamente.

**Analogía:** Es como tener un checklist antes de volar un avión. Verificas que cada componente funcione individualmente antes de confiar en todo el sistema.

**Objetivo:** Probar que cada parte de tu aplicación funciona correctamente de forma aislada.

## 3) CONCEPTOS CLAVE

### ¿Qué es un Test Unitario?

Prueba automática que verifica **una unidad pequeña de código** (método, clase) funcione correctamente.

**Características:**
- Rápido de ejecutar
- Aislado (no depende de BD, APIs externas)
- Repetible (siempre da el mismo resultado)
- Independiente de otros tests

### JUnit

Framework de testing para Java.

**Anotaciones principales:**
```java
@Test              // Marca método como test
@BeforeEach        // Se ejecuta antes de cada test
@AfterEach         // Se ejecuta después de cada test
```

### Mockito

Framework para crear **mocks** (simulaciones) de dependencias.

**¿Por qué mockear?**
Para probar código sin depender de:
- Base de datos
- APIs externas
- Servicios HTTP
- Archivos

**Anotaciones:**
```java
@Mock              // Crea mock de una dependencia
@InjectMocks       // Inyecta mocks en la clase a probar
```

### Assertions (Verificaciones)

Verifican que el resultado sea el esperado.

```java
import static org.junit.jupiter.api.Assertions.*;

assertEquals(expected, actual);      // Verifica igualdad
assertNotNull(value);                // Verifica no null
assertTrue(condition);               // Verifica condición verdadera
assertThrows(Exception.class, () -> {
    // código que debe lanzar excepción
});
```

## 4) ESTRUCTURA BÁSICA DE UN TEST

### Test Simple
```java
@SpringBootTest
class DigimonControllerTest {
    
    @Mock
    private DigimonGetUseCase getUseCase;
    
    @InjectMocks
    private DigimonController controller;
    
    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }
    
    @Test
    void testGetDigimon_Success() {
        // 1. ARRANGE (Preparar)
        String name = "Agumon";
        DigimonResponse expected = DigimonResponse.builder()
            .name("Agumon")
            .level("Rookie")
            .build();
        
        // Simular respuesta del UseCase
        when(getUseCase.execute(name)).thenReturn(expected);
        
        // 2. ACT (Actuar)
        ResponseEntity<DigimonResponse> response = controller.getDigimon(name);
        
        // 3. ASSERT (Verificar)
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("Agumon", response.getBody().getName());
    }
}
```

### Test con Excepción
```java
@Test
void testGetDigimon_NotFound() {
    // ARRANGE
    String name = "DigimonNoExiste";
    
    // Simular que lanza excepción
    when(getUseCase.execute(name))
        .thenThrow(new DigimonNotFoundException("Digimon no encontrado"));
    
    // ACT & ASSERT
    assertThrows(DigimonNotFoundException.class, () -> {
        controller.getDigimon(name);
    });
}
```

## 5) PASO A PASO - Crear Test

### Paso 1: Agregar dependencias (pom.xml)
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-test</artifactId>
    <scope>test</scope>
</dependency>
```

### Paso 2: Crear clase de test
```
src/
  └── test/
      └── java/
          └── com/example/
              └── DigimonControllerTest.java
```

### Paso 3: Anotar clase
```java
@SpringBootTest
class DigimonControllerTest {
    // Tests aquí
}
```

### Paso 4: Crear mocks
```java
@Mock
private DigimonGetUseCase getUseCase;

@InjectMocks
private DigimonController controller;

@BeforeEach
void setUp() {
    MockitoAnnotations.openMocks(this);
}
```

### Paso 5: Escribir test
```java
@Test
void testGetDigimon() {
    // ARRANGE
    DigimonResponse expected = new DigimonResponse();
    when(getUseCase.execute("Agumon")).thenReturn(expected);
    
    // ACT
    ResponseEntity<DigimonResponse> response = 
        controller.getDigimon("Agumon");
    
    // ASSERT
    assertEquals(HttpStatus.OK, response.getStatusCode());
}
```

### Paso 6: Ejecutar tests
```bash
mvn test
```

## 6) PATRÓN AAA (Arrange, Act, Assert)

**ARRANGE (Preparar):**
- Configurar datos de prueba
- Configurar mocks
- Definir comportamiento esperado

**ACT (Actuar):**
- Ejecutar el método a probar
- Obtener resultado

**ASSERT (Verificar):**
- Comprobar que el resultado es el esperado
- Verificar que no hay errores

```java
@Test
void testExample() {
    // ARRANGE
    String input = "test";
    String expected = "TEST";
    
    // ACT
    String result = myService.toUpperCase(input);
    
    // ASSERT
    assertEquals(expected, result);
}
```

## 7) MOCKITO - Sintaxis Común

### when().thenReturn()
```java
// Cuando llames este método, devuelve esto
when(mockService.getData()).thenReturn(expectedData);
```

### when().thenThrow()
```java
// Cuando llames este método, lanza excepción
when(mockService.getData())
    .thenThrow(new RuntimeException("Error"));
```

### verify()
```java
// Verifica que se llamó el método
verify(mockService).saveData(any());
verify(mockService, times(2)).getData();
```

## 8) TESTING EN HEXAGONAL

En arquitectura hexagonal, testas cada capa:

```
Tests por capa:
├── Controller Test  → Verifica endpoints HTTP
├── UseCase Test     → Verifica lógica de negocio
├── Adapter Test     → Verifica llamadas HTTP/DB
└── Mapper Test      → Verifica transformaciones
```

**Ejemplo UseCase Test:**
```java
@ExtendWith(MockitoExtension.class)
class GetDigimonUseCaseTest {
    
    @Mock
    private DigimonRepository repository;
    
    @InjectMocks
    private GetDigimonUseCaseImpl useCase;
    
    @Test
    void execute_Success() {
        // ARRANGE
        String name = "Agumon";
        DigimonResponse expected = new DigimonResponse();
        when(repository.getDigimon(name)).thenReturn(expected);
        
        // ACT
        DigimonResponse result = useCase.execute(name);
        
        // ASSERT
        assertNotNull(result);
        verify(repository).getDigimon(name);
    }
}
```

## 9) RESUMEN ULTRA CORTO

1. **Tests**: Programas que verifican tu código
2. **JUnit**: Framework de testing (@Test)
3. **Mockito**: Simula dependencias (@Mock, @InjectMocks)
4. **AAA**: Arrange, Act, Assert
5. **when().thenReturn()**: Simula respuestas
6. **assertEquals()**: Verifica resultados
7. **Hexagonal**: Testa cada capa independientemente

## 10) PREGUNTAS DE REPASO

**1. ¿Qué es un mock?**
<details>
<summary>Ver respuesta</summary>
Simulación de una dependencia para probar código de forma aislada sin depender de BD, APIs externas, etc.
</details>

**2. ¿Para qué sirve when().thenReturn()?**
<details>
<summary>Ver respuesta</summary>
Para simular el comportamiento de un método mock. Defines qué debe devolver cuando se llama.
</details>

**3. ¿Qué hace @InjectMocks?**
<details>
<summary>Ver respuesta</summary>
Crea una instancia de la clase e inyecta automáticamente todos los mocks marcados con @Mock.
</details>

**4. ¿Diferencia entre assertEquals y assertNotNull?**
<details>
<summary>Ver respuesta</summary>
assertEquals verifica que dos valores sean iguales. assertNotNull solo verifica que un valor no sea null.
</details>

**5. ¿Por qué testas cada capa en hexagonal?**
<details>
<summary>Ver respuesta</summary>
Porque están desacopladas. Puedes probar lógica de negocio sin controllers, adapters sin servicios, etc.
</details>

---

**NOTA DEL PROFESOR:**
> "El testing es parte fundamental del desarrollo profesional. En proyectos empresariales reales se requiere cobertura de tests, especialmente en arquitectura hexagonal."

**Coverage (Cobertura):**
- % de líneas de código testeadas
- % de métodos testeados
- Herramientas: JaCoCo, SonarQube

---

*Fin del resumen de Clase 13 - ¡CURSO COMPLETADO!*
