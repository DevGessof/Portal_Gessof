# Rutas y páginas de autenticación

## ¿Qué se aprende?

En esta lección se construye la estructura de rutas y pantallas del módulo de autenticación. Se crea el componente `auth-layout` con su `router-outlet`, los componentes `login-page` y `register-page`, el archivo `auth.routes.ts` con las rutas hijas y el formulario visual básico del login usando daisyUI.

---

## Puntos clave

**Componente `auth-layout`**

Se crea con Angular Schematics dentro de `src/app/auth/layout/`. Es un componente de pantalla completa que actúa como envoltorio de todas las páginas de autenticación. Su HTML contiene:

- Un contenedor centrado con `flex items-center justify-center min-h-screen`.
- Un `div` interior con clases `w-full max-w-xs bg-slate-100 shadow-2xl rounded-lg p-4`.
- Un `h1` con el texto "Autenticación" y clases de tipografía (`text-2xl font-montserrat font-bold text-secondary text-center mb-2`).
- Un `<router-outlet>` debajo del título para mostrar las rutas hijas.

Se importa `RouterOutlet` en el array `imports` del componente para que el `router-outlet` funcione.

**Componentes `login-page` y `register-page`**

Se crean con Angular Schematics dentro de `src/app/auth/pages/`. Son componentes vacíos inicialmente; en esta lección solo `login-page` recibe contenido HTML.

**Archivo `auth.routes.ts`**

Se crea en la raíz de `src/app/auth/`. Sigue el mismo estándar del proyecto (un archivo de rutas por módulo). Su contenido:

```typescript
import { Routes } from '@angular/router';

const authRoutes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login',    component: LoginPageComponent },
      { path: 'register', component: RegisterPageComponent },
      { path: '**',       redirectTo: 'login' }
    ]
  }
];

export default authRoutes;
```

Puntos importantes:
- El path vacío `''` muestra el `AuthLayoutComponent` que contiene el `router-outlet` para las rutas hijas.
- La ruta `**` dentro del módulo redirige al login para cualquier URL no reconocida dentro de `/auth`.
- Se usa `export default` para simplificar la importación en el archivo principal de rutas (evita usar `.then()` con destructuring).

**Registro en `app.routes.ts`**

Se añade la ruta `auth` con lazy loading antes de la ruta vacía del store-front, respetando el orden de definición de rutas:

```typescript
{
  path: 'auth',
  loadChildren: () => import('./auth/auth.routes')
},
```

El orden importa: las rutas más específicas deben declararse antes que las más genéricas.

**Formulario visual del login**

Se usa el componente "Input with Icon Inside" de daisyUI como base. El template resultante contiene:

- Un `<form>` con clases `flex flex-col gap-2`.
- Un campo de email con icono SVG (tomado de daisyUI).
- Un campo de password con icono SVG (tomado de daisyUI).
- Un botón con clase `btn btn-secondary` y `type="submit"`.
- Un párrafo con texto "¿No tienes cuenta?" y un enlace con `routerLink="/auth/register"` para navegar al registro.

Se elimina el campo de username que venía en la plantilla de daisyUI, dejando solo email y password. Se importa `RouterLink` en el componente para que el enlace funcione.

**El formulario reactivo se implementará después**

Por ahora el formulario es solo visual. El comportamiento del botón "Submit" (que actualmente recarga la página como un formulario HTML normal) se controlará en lecciones posteriores cuando se añada el formulario reactivo de Angular.

**Tarea pendiente para el estudiante**

Una vez terminado el login funcional, el estudiante deberá replicar la misma estructura en `register-page`.

---

## Ejemplo sencillo

El `auth-layout` es como la portada de un formulario impreso: siempre muestra el encabezado "Autenticación" y debajo deja un espacio en blanco donde se inserta la hoja correspondiente (login o registro). Las rutas hijas son esas hojas intercambiables que se muestran en el espacio del `router-outlet`.

---

## Palabras clave y elementos importantes

- `auth-layout` — componente envoltorio de todas las páginas de autenticación; contiene el `router-outlet`
- `RouterOutlet` — directiva que debe importarse en el componente para renderizar rutas hijas
- `login-page` — componente de la pantalla de inicio de sesión
- `register-page` — componente de la pantalla de registro (se completa como tarea)
- `auth.routes.ts` — archivo de rutas del módulo `auth`, colocado en la raíz del módulo
- Path vacío `''` — ruta que muestra el layout y contiene las rutas hijas
- `children` — array de rutas hijas anidadas bajo el componente layout
- `redirectTo: 'login'` — redirige cualquier subruta desconocida dentro de `/auth` al login
- `export default` — permite importar las rutas directamente con `import()` sin destructuring
- `loadChildren` — carga el módulo de rutas de forma perezosa (lazy loading)
- Orden de rutas — las rutas específicas deben declararse antes que las genéricas en `app.routes.ts`
- daisyUI "Input with Icon Inside" — componente de formulario con iconos SVG integrados usado como base
- `btn btn-secondary` — clases de daisyUI para estilizar el botón de envío
- `type="submit"` — tipo de botón HTML que envía el formulario
- `RouterLink` — directiva para navegación interna; debe importarse en el componente que la usa

---

## Resumen final

Esta lección construye la estructura base del módulo de autenticación. Se crea `auth-layout` con `router-outlet`, los componentes `login-page` y `register-page`, y el archivo `auth.routes.ts` con rutas hijas y redirección por defecto al login. Las rutas se registran en `app.routes.ts` con lazy loading, cuidando el orden de declaración. El template del login usa daisyUI como base visual con campos de email y password, un botón de envío y un enlace a la pantalla de registro. La funcionalidad del formulario se implementará en lecciones siguientes.
