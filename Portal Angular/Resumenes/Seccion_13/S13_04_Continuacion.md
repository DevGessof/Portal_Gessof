# Lección 04 – Continuación del proyecto

## ¿Qué se aprende en esta lección?
Es una lección de transición: se retoma el proyecto `05-pipes-app` de la sección anterior y se prepara para continuar trabajando en él. Se recuerdan los pasos para abrir y correr el proyecto correctamente.

## Puntos clave explicados
- Se reutiliza el proyecto `05-pipes-app` creado en la Sección 12; no se crea una nueva aplicación.
- Si el estudiante descargó el código fuente o se saltó la sección anterior, debe recordar que **los `node_modules` no están incluidos** en el repositorio.
- El primer paso siempre es ejecutar `npm install` en la terminal para restaurar las dependencias.
- Tras instalar dependencias, se levanta el servidor con `ng serve`.
- A partir de esta lección se empezarán a crear los pipes personalizados sobre la base ya construida.

## Ejemplo sencillo
```bash
# Pasos para retomar el proyecto
cd 05-pipes-app
npm install        # restaura node_modules
ng serve           # levanta el servidor de desarrollo
```

## Funciones, palabras clave o elementos importantes
| Elemento | Descripción |
|---|---|
| `05-pipes-app` | Proyecto base reutilizado de la Sección 12 |
| `npm install` | Restaura las dependencias del proyecto |
| `ng serve` | Levanta el servidor de desarrollo de Angular |
| `node_modules` | Carpeta de dependencias no incluida en el repositorio |

## Resumen final
Lección breve de arranque: se retoma el proyecto existente, se instalan dependencias si es necesario y se levanta el servidor. El trabajo real de pipes personalizados comienza en las lecciones siguientes.
