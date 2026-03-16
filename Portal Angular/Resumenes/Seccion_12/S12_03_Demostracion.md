# Lección 03 – Demostración del resultado final

## ¿Qué se aprende en esta lección?
Se hace una vista previa de la aplicación terminada que se construirá a lo largo de la sección. El objetivo es que el estudiante sepa de antemano qué pipes verá en acción y cómo lucirá el resultado, para contextualizar cada lección siguiente.

## Puntos clave explicados
- La app final tiene varias páginas que agrupan los pipes por categoría.
- **Página de pipes básicos:** `LowerCase`, `UpperCase`, `TitleCase`.
- **Página de números:** `DecimalPipe`, `PercentPipe`, `CurrencyPipe` con distintos locales y símbolos.
- **Página de fechas:** `DatePipe` con múltiples formatos y soporte de idioma.
- **Página de pipes poco comunes:** `I18nSelectPipe`, `I18nPluralPipe`, `SlicePipe`, `JsonPipe`, `KeyValuePipe`, `AsyncPipe`.
- Se muestra el cambio dinámico de locale (español, francés, inglés) y cómo afecta la visualización de números y fechas.
- El `AsyncPipe` se demuestra con una promesa y con un observable de intervalo.

## Ejemplo sencillo
```
Vista previa de la app:
┌─────────────────────────────────┐
│  Basic Page │ Numbers │ Uncommon │
├─────────────────────────────────┤
│  "ANGULAR"   ← uppercase        │
│  "angular"   ← lowercase        │
│  "Angular"   ← titlecase        │
│  $1,234.56   ← currency (USD)   │
│  12/31/2024  ← date (short)     │
└─────────────────────────────────┘
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `LowerCase` / `UpperCase` / `TitleCase` | Pipes de texto |
| `DecimalPipe` / `PercentPipe` / `CurrencyPipe` | Pipes numéricos |
| `DatePipe` | Fechas con formato y locale |
| `I18nSelectPipe` | Selección por género u otro criterio |
| `I18nPluralPipe` | Pluralización con mapa de casos |
| `SlicePipe` | Recorte de arreglos |
| `JsonPipe` | Visualización de objetos JSON |
| `KeyValuePipe` | Iteración sobre propiedades de un objeto |
| `AsyncPipe` | Manejo de Promesas y Observables |

## Resumen final
Esta lección es una demostración visual del proyecto terminado. Sirve como mapa de ruta: el estudiante ve todos los pipes en acción antes de construirlos, lo que facilita entender el propósito de cada lección posterior.
