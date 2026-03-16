# RESUMEN DIDÁCTICO - CLASE 8: Mapeo Avanzado con Listas y Validaciones

⚠️ **Parte poco clara en la transcripción:** Esta clase tiene algunos problemas de transcripción automática, pero se puede entender el concepto general.

## 1) TÍTULO
**Mapeo Avanzado: Trabajar con Múltiples Listas y Validaciones de Datos Vacíos**

## 2) EXPLICACIÓN SENCILLA

Esta clase avanza en mapeo mostrando cómo trabajar con **múltiples listas** dentro de una respuesta y cómo **validar datos vacíos o null** para evitar errores.

**Concepto clave:** Cuando una API devuelve listas que pueden venir vacías o null, debes validar antes de procesarlas.

## 3) CONCEPTOS CLAVE

### Mapeo de Múltiples Listas

**Problema:** La API devuelve un objeto con varias listas:
```json
{
  "name": "Agumon",
  "types": [{"type": "Vaccine"}, {"type": "Data"}],
  "fields": [{"field": "Virus Busters"}, {"field": "Metal Empire"}]
}
```

**Solución:** Mapear cada lista por separado

```java
@Data
@Builder
public class DigimonDataAndTypes {
    private String name;
    private String releaseDate;
    private List<String> types;    // Lista 1
    private List<String> fields;   // Lista 2
}
```

### Validación de Listas Vacías/Null

**Problema:** Las listas pueden venir null o vacías

**Solución:** Operador ternario con `Collections.emptyList()`

```java
// Si la lista es null o vacía, devuelve lista vacía
List<String> types = (response.getTypes() != null && !response.getTypes().isEmpty()) 
    ? response.getTypes()
            .stream()
            .map(t -> t.getType())
            .collect(Collectors.toList())
    : Collections.emptyList(); // Lista vacía por defecto
```

### Collections.emptyList()

**¿Qué hace?**
Devuelve una lista vacía inmutable (no se puede modificar).

**¿Por qué usarlo?**
- Evita NullPointerException
- No necesitas crear `new ArrayList<>()`
- Más eficiente en memoria

**Ejemplo:**
```java
List<String> empty = Collections.emptyList();
// empty.size() = 0
// empty.isEmpty() = true
```

## 4) PASO A PASO - Mapear Múltiples Listas

### Paso 1: Crear DTO con múltiples listas
```java
@Data
@Builder
public class DigimonDataAndTypes {
    private String name;
    private String releaseDate;
    private List<String> types;
    private List<String> fields;
}
```

### Paso 2: Crear Mapper con validaciones
```java
@Component
public class DigimonMapper {
    
    public DigimonDataAndTypes toDataAndTypes(DigimonResponse response) {
        
        // Validación inicial
        if (response == null) {
            throw new ResponseStatusException(
                HttpStatus.INTERNAL_SERVER_ERROR,
                "Error al obtener Digimon"
            );
        }
        
        // Mapear lista de tipos con validación
        List<String> types = (response.getTypes() != null && 
                             !response.getTypes().isEmpty())
            ? response.getTypes()
                    .stream()
                    .map(t -> t.getType())
                    .collect(Collectors.toList())
            : Collections.emptyList();
        
        // Mapear lista de fields con validación
        List<String> fields = (response.getFields() != null && 
                              !response.getFields().isEmpty())
            ? response.getFields()
                    .stream()
                    .map(f -> f.getField())
                    .collect(Collectors.toList())
            : Collections.emptyList();
        
        // Construir con Builder
        return DigimonDataAndTypes.builder()
            .name(response.getName())
            .releaseDate(response.getReleaseDate())
            .types(types)
            .fields(fields)
            .build();
    }
}
```

### Paso 3: Usar en Service
```java
@Service
public class DigimonServiceImpl {
    
    private final DigimonMapper mapper;
    
    public DigimonDataAndTypes getDataAndTypes(String name) {
        // Reutilizar método que hace la llamada HTTP
        DigimonResponse response = getDigimon(name);
        
        // Mapear
        return mapper.toDataAndTypes(response);
    }
}
```

## 5) EJEMPLO EXPLICADO

**Flujo completo:**

1. Cliente: `GET /api/v1/digimon/agumon/data`
2. Controller → Service → `getDigimon("agumon")` (reutiliza llamada HTTP)
3. Recibe respuesta completa con múltiples listas
4. Service → Mapper → `toDataAndTypes(response)`
5. Mapper valida cada lista:
   - Si `types != null && !isEmpty()` → mapea
   - Si no → `Collections.emptyList()`
6. Construye objeto con Builder
7. Devuelve:

```json
{
  "name": "Agumon",
  "releaseDate": "1999",
  "types": ["Vaccine", "Data"],
  "fields": ["Virus Busters"]
}
```

**Si alguna lista viene vacía:**
```json
{
  "name": "Agumon",
  "types": [],        // Lista vacía en lugar de null
  "fields": []
}
```

## 6) RESUMEN ULTRA CORTO

1. **Múltiples listas**: Mapear cada una por separado
2. **Validación**: `!= null && !isEmpty()` antes de procesar
3. **Collections.emptyList()**: Devuelve lista vacía inmutable
4. **Operador ternario**: condición ? valorSí : valorNo
5. **Builder**: Construir objeto final con todas las listas
6. **Reutilización**: Llamar método HTTP una sola vez

## 7) PREGUNTAS DE REPASO

**1. ¿Qué hace Collections.emptyList()?**
<details>
<summary>Ver respuesta</summary>
Devuelve una lista vacía inmutable. Evita crear new ArrayList<>() y previene NullPointerException.
</details>

**2. ¿Por qué validar listas antes de procesarlas con .stream()?**
<details>
<summary>Ver respuesta</summary>
Porque si la lista es null, .stream() lanzará NullPointerException. Siempre validar != null primero.
</details>

**3. ¿Cuál es la diferencia entre null y lista vacía?**
<details>
<summary>Ver respuesta</summary>
null = no existe objeto. Lista vacía = existe objeto pero sin elementos (size=0). Siempre preferir lista vacía.
</details>

**4. ¿Cómo funciona el operador ternario?**
<details>
<summary>Ver respuesta</summary>
condición ? valorSiTrue : valorSiFalse. Evalúa condición y devuelve uno de dos valores.
</details>

**5. ¿Por qué mapear múltiples listas por separado?**
<details>
<summary>Ver respuesta</summary>
Cada lista puede tener validaciones diferentes, estructuras diferentes, y necesitas extraer campos específicos de cada una.
</details>

---

**NOTA:** Esta clase refuerza conceptos de mapeo avanzado trabajando con casos reales donde las APIs devuelven estructuras complejas con múltiples listas anidadas.

---

*Fin del resumen de Clase 8*
