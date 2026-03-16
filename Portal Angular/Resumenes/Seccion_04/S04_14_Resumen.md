# Seccion 4 - Leccion 14: Resumen de lo Aprendido

---

## 1. Titulo de la leccion

**Cierre de la Seccion 4: repaso de todos los conceptos cubiertos**

---

## 2. Que se aprende en esta leccion

El instructor hace un recorrido por todos los conceptos aprendidos en la seccion para consolidar el conocimiento antes de avanzar a la Seccion 5.

---

## 3. Puntos clave explicados

- **Carpeta `app/`:** Contiene todo el codigo de la aplicacion. Dentro se organiza por funcionalidad.
- **Carpeta `pages/`:** Convencion para agrupar componentes que ocupan toda la pantalla. No es obligatoria en Angular.
- **Rutas en `app.routes.ts`:** Cada ruta define un `path` (URL) y el `component` que se muestra. Se pueden agregar rutas con argumentos, protecciones de acceso y carga diferida conforme la aplicacion crece.
- **`router-outlet`:** Renderiza el componente de la ruta activa. Todo lo que este fuera del `router-outlet` en `app.component.html` es estatico y aparece en todas las paginas (ideal para navbars y footers).
- **`app.config.ts`:** Configuracion global; raramente se modifica. Provee el router y la estrategia de deteccion de cambios.
- **`index.html`:** HTML global donde se monta `<app-root>`. Sirve para incluir scripts y estilos globales como Bootstrap.
- **Senales (Signals):** Nueva forma de manejar el estado. Son reactivas y actualizan solo los puntos del DOM donde se usan. Pueden contener primitivos, objetos y arreglos.
- **Senales computadas (`computed`):** Senales de solo lectura que se recalculan automaticamente cuando sus dependencias cambian. No tienen `set` ni `update`.
- **Eventos con `(evento)`:** Los parentesis en el template indican que se esta escuchando un evento del DOM (ej: `(click)`). Hay multiples eventos disponibles.
- **Binding de atributos con `[atributo]`:** Las llaves cuadradas permiten asignar valores dinamicos a atributos HTML desde el componente. Se vera en detalle en la siguiente seccion.
- **Pipes:** Transforman datos de forma visual en el template sin mutar el valor real. Se importan en el componente y se aplican con `| nombre`.
- **No borrar el proyecto:** El codigo construido en esta seccion se seguira usando en la Seccion 5.

---

## 4. Ejemplo sencillo

```
Estructura de lo aprendido en la Seccion 4:
├── Componentes: clases + @Component + template
├── Rutas: app.routes.ts → { path, component }
├── router-outlet: renderiza la pagina activa
├── Interpolacion {{ }}: muestra valores en el HTML
├── Eventos (click): reaccionar a acciones del usuario
├── Senales signal(): estado reactivo
│   ├── .set(valor): establecer valor fijo
│   └── .update(fn): actualizar basado en valor anterior
├── Senales computadas computed(): readonly, se recalculan solas
└── Pipes | uppercase: transformacion visual de datos
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `{{ }}` | Interpolacion: muestra valores o expresiones en el template |
| `(evento)` | Escucha un evento del DOM y ejecuta un metodo |
| `[atributo]` | Asigna dinamicamente un valor a un atributo HTML (proxima seccion) |
| `signal()` | Crea estado reactivo en el componente |
| `computed()` | Senal derivada de otras senales; se actualiza automaticamente |
| `| uppercase` | Pipe para mostrar texto en mayusculas |
| `router-outlet` | Punto de renderizado de la ruta activa |
| Standalone component | Todo componente en Angular 19+ es standalone por defecto |

---

## 6. Resumen final en pocas palabras

La Seccion 4 cubre los fundamentos de Angular: componentes, rutas, interpolacion, eventos, senales y pipes. Las senales reemplazan las propiedades tradicionales para manejar el estado de forma reactiva y eficiente. El proyecto construido aqui se seguira expandiendo en la siguiente seccion.
