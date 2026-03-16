# Formulario reactivo de autenticación

## ¿Qué se aprende?

En esta lección se convierte el formulario visual del login en un formulario reactivo de Angular. Se agregan validaciones, señales de estado, manejo de errores visuales y conexión del formulario al template mediante `formGroup` y `formControlName`.

---

## Puntos clave

**Configuración del formulario reactivo**

En `login-page.component.ts` se inyecta `FormBuilder` con `inject(FormBuilder)` y se importa `ReactiveFormsModule` en el array `imports` del componente.

Se crean dos señales de estado:
- `hasError = signal(false)` — indica si el formulario fue enviado con datos inválidos.
- `isPosting = signal(false)` — indica si se está procesando una petición (para deshabilitar el botón mientras se espera respuesta).

El formulario se define con `fb.group()`:

```typescript
loginForm = this.fb.group({
  email:    ['', [Validators.required, Validators.email, Validators.minLength(6)]],
  password: ['', [Validators.required, Validators.minLength(6)]]
});
```

**Por qué las validaciones del frontend deben parecerse a las del backend**

Las validaciones que se colocan en el frontend deben coincidir lo más posible con las del backend. El objetivo es evitar enviar peticiones al servidor con datos que el backend ya va a rechazar, reduciendo así la cantidad de idas y vueltas innecesarias con el API.

**Método `onSubmit()`**

```typescript
onSubmit() {
  if (this.loginForm.invalid) {
    this.hasError.set(true);
    setTimeout(() => this.hasError.set(false), 2000);
    return;
  }
  const { email = '', password = '' } = this.loginForm.value;
  console.log(email, password);
}
```

Si el formulario es inválido, se activa `hasError` para mostrar una alerta y se desactiva automáticamente dos segundos después. Si es válido, se desestructura el valor del formulario para extraer `email` y `password`.

**Conexión al template**

En el HTML del formulario:
- Se añade `[formGroup]="loginForm"` al elemento `<form>`.
- Se añade `(ngSubmit)="onSubmit()"` al elemento `<form>` para interceptar el envío del formulario y evitar el comportamiento de recarga del navegador (submit nativo).
- Se añade `formControlName="email"` al input de correo.
- Se añade `formControlName="password"` al input de contraseña.

**Alerta de error con daisyUI**

Se usa el componente de alerta roja de daisyUI envuelto en un `@if(hasError())`. La alerta tiene posición `fixed` en la esquina inferior derecha (`bottom-5 right-5 w-52`) para no desplazar el formulario al aparecer. Se aplica la animación `animate-fadeIn` para que aparezca suavemente.

**El servicio de autenticación se implementará después**

El `console.log` del `email` y `password` es temporal. La conexión con el backend se hará cuando se implemente el `AuthService` en la lección siguiente.

---

## Ejemplo sencillo

El formulario reactivo es como un formulario de papel con reglas de validación impresas. `FormBuilder` es quien imprime las reglas. `formGroup` es el clip que une el papel con el componente en pantalla. `formControlName` es la etiqueta de cada campo que le dice al componente Angular "este input corresponde a este campo del formulario". Y `(ngSubmit)` es el botón de "Enviar" que, en lugar de mandar el papel por correo directamente, primero lo revisa.

---

## Palabras clave y elementos importantes

- `FormBuilder` — servicio de Angular para crear formularios reactivos de forma concisa con `fb.group()`
- `ReactiveFormsModule` — módulo que debe importarse para usar formularios reactivos en el template
- `signal(false)` — señal reactiva usada para `hasError` e `isPosting`
- `Validators.required` / `.email` / `.minLength(n)` — validadores integrados de Angular
- `loginForm.invalid` — propiedad booleana que indica si el formulario no pasa las validaciones
- `loginForm.value` — objeto con los valores actuales de todos los campos del formulario
- `[formGroup]="loginForm"` — binding que conecta el objeto del formulario con el elemento `<form>`
- `formControlName="email"` — atributo que vincula un input con un control del formulario
- `(ngSubmit)="onSubmit()"` — evento que se dispara al enviar el formulario, reemplazando el comportamiento nativo del navegador
- `setTimeout` — función de JavaScript usada para quitar la alerta de error después de 2 segundos
- Alerta daisyUI — componente de feedback visual que aparece condicionalmente con `@if(hasError())`
- `position: fixed` / `bottom-5 right-5` — clases Tailwind para fijar la alerta en la esquina inferior derecha sin mover el formulario

---

## Resumen final

En esta lección se implementa el formulario reactivo del login. Se usa `FormBuilder` con validaciones de `email`, `required` y `minLength(6)` en ambos campos. El método `onSubmit()` verifica si el formulario es válido: si no lo es, activa una señal `hasError` que muestra una alerta de daisyUI que desaparece sola en dos segundos; si es válido, extrae `email` y `password` por desestructuración. El template se conecta con `[formGroup]`, `formControlName` y `(ngSubmit)`. La lógica de envío al backend se implementará en la siguiente lección con el `AuthService`.
