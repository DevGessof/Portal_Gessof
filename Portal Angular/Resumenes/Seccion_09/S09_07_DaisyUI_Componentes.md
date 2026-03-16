# Seccion 9 - Leccion 07: DaisyUI - Componentes

---

## 1. Titulo de la leccion

**Hero, Footer y AppFooter global con Tailwind flex para mantener footer al fondo**

---

## 2. Que se aprende en esta leccion

Se usa el componente Hero de daisyUI en `HomePageComponent`, se crea `AppFooterComponent` reutilizable con el footer de daisyUI, se coloca en `app.component.html` para que aparezca en todas las rutas, y se usa `flex flex-col min-h-screen` para mantener el footer siempre al fondo.

---

## 3. Puntos clave explicados

- **Componentes de daisyUI:** La documentacion de daisyUI ofrece HTML listo para copiar y pegar. Solo hay que buscar el componente (Hero, Footer, Button, etc.) y pegar el HTML en el template de Angular.
- **Hero en HomePageComponent:** Se copia el HTML del Hero de daisyUI, se personaliza el texto y se agrega `[routerLink]="/country"` al boton "Empezar" para navegar al modulo de paises.
- **Footer global:** Para que el footer aparezca en todas las rutas (home y paises), se coloca en `app.component.html`, no dentro de ninguna pagina individual.
- **`AppFooterComponent`:** Se extrae el HTML del footer a un componente standalone (`shared/components/footer/`). Esto evita pegar HTML repetido en cada pagina.
- **`app.component.html` con footer global:**
  ```
  <div class="flex flex-col min-h-screen">
    <div class="flex-1 flex-grow">
      <router-outlet />
    </div>
    <app-footer />
  </div>
  ```
- **`flex flex-col min-h-screen`:** El contenedor ocupa al menos toda la pantalla en vertical. `flex-1 flex-grow` en el div del router hace que se estire y empuje el footer hacia abajo, sin importar cuanto contenido haya.
- **Importar componente standalone:** Al usar `AppFooterComponent` en `app.component.html`, hay que agregarlo a los `imports` de `AppComponent`.

---

## 4. Ejemplo sencillo

```html
<!-- app.component.html -->
<div class="flex flex-col min-h-screen">
  <div class="flex-1 flex-grow">
    <router-outlet />
  </div>
  <app-footer />
</div>
```

```typescript
// app.component.ts
@Component({
  imports: [RouterOutlet, FooterComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
```

```html
<!-- shared/pages/home-page/home-page.component.html -->
<div class="hero min-h-screen">
  <div class="hero-content text-center">
    <h1 class="text-5xl font-bold">Aplicacion de paises</h1>
    <button class="btn btn-primary" [routerLink]="'/country'">Empezar</button>
  </div>
</div>
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| Hero de daisyUI | Componente de pantalla completa con titulo y llamada a accion |
| `AppFooterComponent` | Componente standalone que encapsula el footer de daisyUI |
| Footer global | Colocar `app-footer` en `app.component.html` → aparece en todas las rutas |
| `flex flex-col min-h-screen` | Layout CSS que ocupa toda la pantalla en vertical |
| `flex-1 flex-grow` | Hace que el contenido principal se estire y empuje el footer al fondo |
| `[routerLink]` | Navegacion SPA sin recarga desde un boton o enlace |

---

## 6. Resumen final en pocas palabras

Se copian componentes de daisyUI (Hero y Footer) y se personalizan. El footer se extrae a `AppFooterComponent` y se coloca en `app.component.html` para que sea global. Con `flex flex-col min-h-screen` + `flex-1` el footer siempre queda al fondo de la pantalla sin importar el contenido.
