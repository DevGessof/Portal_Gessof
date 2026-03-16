# Seccion 10 - Leccion 01: Introduccion

---

## 1. Titulo de la leccion

**CountryApp funcional: HTTP con resource y rxResource (Angular 19+)**

---

## 2. Que se aprende en esta leccion

Se presenta la seccion 10, que hace funcionar la aplicacion CountryApp con peticiones HTTP reales. Se introduce `resource` y `rxResource`, dos nuevos objetos de Angular 19 que simplifican el manejo de peticiones asincronas integrando senales.

---

## 3. Puntos clave explicados

- **Objetivo de la seccion:** Hacer peticiones HTTP reales, mostrar y filtrar datos de paises, y gestionar los estados de carga y error.
- **Diferencia con GifsApp:** En GifsApp se uso el enfoque tradicional con Observables, `.subscribe()` y senales manuales. En CountryApp se usara ese enfoque primero para luego reemplazarlo con `resource` y `rxResource`.
- **`resource` y `rxResource`:** Nuevos objetos de Angular 19+. Trabajan internamente con senales. Gestionan automaticamente los estados de carga (`isLoading`), datos (`value`) y error (`error`) sin codigo manual.
- **Cuándo usar cada uno:** `resource` trabaja con Promesas; `rxResource` trabaja con Observables (RxJS). Ambos se integran con el sistema de senales de Angular.
- **Version requerida:** Angular 19 o superior. En versiones 18 o anteriores estos objetos no existen.
- **Seccion adicional opcional:** La siguiente seccion expandira la app de paises con mas funcionalidades, pero es opcional.

---

## 4. Ejemplo sencillo

```
Flujo de la seccion:
1. Crear CountryService con HttpClient
2. Metodo searchByCapital → Observable<Country[]>
3. Manejo manual de isLoading, isError, countries con senales
4. Introduccion al DecimalPipe y manejo de excepciones
5. Refactorizacion con rxResource para simplificar todo el estado
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `resource` | Nuevo objeto de Angular 19 para peticiones con Promesas + senales |
| `rxResource` | Variante de `resource` para Observables (RxJS) + senales |
| Enfoque tradicional | `.subscribe()` + senales manuales para `isLoading`, `isError`, `countries` |
| Angular 19+ | Version minima requerida para usar `resource` y `rxResource` |

---

## 6. Resumen final en pocas palabras

La seccion 10 hace funcionar CountryApp con HTTP real. Primero se implementa el enfoque tradicional con `subscribe()` y senales manuales, luego se reemplaza con `rxResource` de Angular 19 que gestiona automaticamente los estados de carga, datos y error en pocas lineas de codigo.
