# Leccion 03 - Inicio de Proyecto: Bases de TypeScript

---

## 1. Titulo de la leccion

**Configuracion del entorno de trabajo con Vite y TypeScript**

---

## 2. Que se aprende en esta leccion

Se aprende a crear y configurar el primer proyecto de TypeScript desde cero. Se instalan las herramientas necesarias, se abre el proyecto en el editor de codigo y se ejecuta el primer programa "Hola Mundo", verificando que todo el entorno funciona correctamente.

---

## 3. Puntos clave explicados

- **Carpeta de trabajo:** Se crea una carpeta llamada "Angular" en el escritorio donde viviran todos los ejercicios del curso.
- **Opcion en linea (StackBlitz):** Para quien no quiera instalar nada, existe la opcion de usar StackBlitz directamente desde el navegador. Sin embargo, se recomienda trabajar de forma local.
- **Creacion del proyecto con Vite:** Desde la terminal se ejecuta el comando `npm create vite@latest` para generar el proyecto. Se selecciona la opcion "Vanilla" y luego "TypeScript".
- **Que es Vite:** Es un empaquetador que permite crear proyectos y aplica los cambios del codigo de forma inmediata sin recargar toda la pagina. Angular tambien lo utiliza.
- **Apertura en Visual Studio Code:** El proyecto se abre arrastrando la carpeta al editor, o usando el comando `code .` desde la terminal.
- **Instalacion de dependencias:** Con `npm install` se descargan todos los paquetes necesarios (TypeScript, Vite y sus dependencias). Sin este paso, el proyecto no puede ejecutarse.
- **Ejecucion del proyecto:** Con `npm run dev` se inicia el servidor local y el resultado se puede ver en el navegador en `localhost:5173`.
- **Primer programa:** Se escribe un codigo sencillo para mostrar "Hola Mundo" en pantalla y en la consola del navegador.

---

## 4. Ejemplo sencillo

Se crea una constante que apunta al elemento principal de la pagina y se le asigna el texto "Hola Mundo":

```typescript
const app = document.querySelector('#app');
app.innerHTML = 'Hola Mundo';
```

Tambien se usa `console.log('Hola Mundo')` para ver el mensaje en la consola del navegador.

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `npm create vite@latest` | Crea un nuevo proyecto con Vite desde la terminal |
| `Vite` | Empaquetador que aplica cambios en tiempo real sin recargar la pagina |
| `npm install` | Descarga todas las dependencias necesarias para el proyecto |
| `npm run dev` | Inicia el servidor local para ver la aplicacion en el navegador |
| `package.json` | Archivo que lista las dependencias y scripts del proyecto |
| `package-lock.json` | Registro automatico de como fue construido el proyecto |
| `main.ts` | Archivo principal de TypeScript donde se escribe el codigo |
| `console.log()` | Muestra mensajes en la consola del navegador |
| `code .` | Abre Visual Studio Code en la carpeta actual desde la terminal |
| `Vanilla` | Opcion de Vite para crear proyectos sin ningun framework adicional |

---

## 6. Resumen final en pocas palabras

En esta leccion se configura el entorno completo: se crea la carpeta, se genera el proyecto con Vite y TypeScript, se instalan dependencias y se ejecuta el primer "Hola Mundo". A partir de aqui el proyecto esta listo para comenzar a practicar TypeScript.
