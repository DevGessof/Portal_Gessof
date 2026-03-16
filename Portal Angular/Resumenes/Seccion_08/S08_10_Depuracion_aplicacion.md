# Seccion 8 - Leccion 10: Depuracion de Aplicacion

---

## 1. Titulo de la leccion

**Depurar aplicaciones Angular con DevTools, breakpoints en VS Code y la palabra clave debugger**

---

## 2. Que se aprende en esta leccion

Se presentan tres formas de depurar aplicaciones Angular: Angular DevTools (extension del navegador), breakpoints en VS Code con F5, y la palabra clave `debugger` directamente en el codigo.

---

## 3. Puntos clave explicados

- **Angular DevTools:** Extension del navegador que muestra el arbol de componentes, las inyecciones de dependencias y los valores de las senales y propiedades en tiempo real. Util para inspeccionar el estado sin `console.log`. Puede tener problemas con navegadores no basados en Chrome puro.
- **Arbol de componentes:** En la pestana "Components" de Angular DevTools se puede navegar por `app-root → router-outlet → app-dashboard-page → gif-side-menu → app-trending-page` y ver los valores de cada componente y servicio inyectado.
- **Breakpoints en VS Code con F5:** Colocar un punto de interrupcion (clic en el margen izquierdo del editor) y presionar F5 abre una instancia del navegador conectada al depurador de VS Code. La aplicacion se pausa en la linea marcada y se pueden inspeccionar todas las variables locales, el call stack y los valores en tiempo real.
- **Variables locales en el depurador:** Al pausar en un breakpoint, el panel "Local variables" muestra `scrollTop`, `clientHeight`, `scrollHeight`, `isAtBottom` y cualquier otra variable del scope con sus valores exactos.
- **Avanzar paso a paso:** Con los controles del depurador (siguiente linea, entrar en funcion, salir) se puede seguir la ejecucion linea por linea.
- **Palabra clave `debugger`:** Escribir `debugger;` en cualquier punto del codigo TypeScript provoca que el navegador pause la ejecucion en ese punto y abra las DevTools del navegador (no VS Code) mostrando las variables del scope. No requiere ninguna configuracion adicional.
- **Desventaja del `debugger` en codigo:** Es facil olvidarlo en el codigo y llegar a produccion con el. Por eso se prefiere el breakpoint en VS Code que no toca el codigo fuente.
- **`console.log` sigue siendo valido:** Para depuracion rapida y puntual, el `console.log` es la herramienta mas sencilla. Los breakpoints son mas utiles cuando se necesita pausar y recorrer la logica paso a paso.

---

## 4. Ejemplo sencillo

```typescript
// Opcion 1: breakpoint en VS Code
// Solo hacer clic en el margen izquierdo del editor junto a la linea
// Luego presionar F5 para lanzar el debugger

// Opcion 2: palabra clave debugger en el codigo
onScroll(event: Event): void {
  const scrollDiv = this.scrollDivRef()?.nativeElement;
  if (!scrollDiv) return;

  debugger; // la aplicacion se pausa aqui en las DevTools del navegador

  const scrollTop    = scrollDiv.scrollTop;
  const clientHeight = scrollDiv.clientHeight;
  const scrollHeight = scrollDiv.scrollHeight;
  const isAtBottom   = scrollTop + clientHeight + 300 >= scrollHeight;
}

// Opcion 3: console.log (mas rapido para verificaciones puntuales)
console.log({ scrollTop, clientHeight, scrollHeight, isAtBottom });
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Angular DevTools | Extension del navegador para inspeccionar componentes, senales e inyecciones |
| Arbol de componentes | Vista jerarquica de todos los componentes activos en la app |
| Breakpoint en VS Code | Punto de pausa en el codigo; se activa con clic en el margen del editor |
| F5 en VS Code | Lanza el depurador conectado al navegador |
| Variables locales | Panel del depurador que muestra los valores de las variables en el scope actual |
| `debugger;` | Palabra clave que pausa la ejecucion en las DevTools del navegador |
| `console.log` | Metodo rapido para imprimir valores; no requiere configuracion |

---

## 6. Resumen final en pocas palabras

Hay tres herramientas de depuracion: Angular DevTools para inspeccionar el estado de componentes y servicios en el navegador, breakpoints en VS Code (F5) para pausar y recorrer el codigo sin modificarlo, y la palabra clave `debugger` para pausar directamente desde el navegador. `console.log` sigue siendo util para verificaciones rapidas.
