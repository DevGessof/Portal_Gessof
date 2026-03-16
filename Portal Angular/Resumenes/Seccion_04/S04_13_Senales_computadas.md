# Seccion 4 - Leccion 13: Senales Computadas (Readonly Signals)

---

## 1. Titulo de la leccion

**Senales computadas, `computed()` y la introduccion a los Pipes**

---

## 2. Que se aprende en esta leccion

Se introduce `computed()` para crear senales de solo lectura que se recalculan automaticamente cuando sus dependencias cambian. Tambien se presenta el concepto de Pipes con el ejemplo del `UpperCasePipe`.

---

## 3. Puntos clave explicados

- **Que es una senal computada:** Es una senal de solo lectura cuyo valor se calcula a partir de otras senales. Se recalcula automaticamente cada vez que alguna de sus senales dependientes cambia.
- **`computed(callback)`:** Funcion importada de `@angular/core`. Recibe un callback que devuelve el valor calculado. Dentro del callback se invocan las senales de las que depende.
- **`ReadOnlySignal`:** Tipo de una senal computada. No tiene los metodos `set` ni `update`. No se puede modificar directamente.
- **Por que no tiene `set` ni `update`:** Su valor siempre depende del calculo de sus dependencias. Si se pudiera cambiar directamente, el comportamiento seria impredecible.
- **Error comun: olvidar los parentesis al invocar la senal:** Si se escribe `{{ heroDescription }}` sin parentesis en el template, Angular mostrara el texto "Signal: 45" (una representacion de la senal, no su valor). Siempre invocarla como `{{ heroDescription() }}`.
- **`capitalizedName`:** Ejemplo de senal computada que devuelve el nombre en mayusculas usando `.toUpperCase()`. Se actualiza automaticamente cuando `name` cambia.
- **Que son los Pipes:** Mecanismo de Angular para transformar datos de forma visual en el template sin mutar el valor real. Se usan con el caracter `|` en el template.
- **`UpperCasePipe`:** Pipe que convierte texto a mayusculas. Se importa de `@angular/common` en el array `imports` del componente.
- **Como importar un Pipe:** En un standalone component, el Pipe debe agregarse al array `imports` del decorador `@Component`. Sin importarlo, Angular muestra el error "no pipe found with name".
- **Tres formas de capitalizar:** Con `toUpperCase()` en el template, con una senal computada, o con el `UpperCasePipe`. La mas limpia y recomendada para mostrar texto transformado es el Pipe.

---

## 4. Ejemplo sencillo

```typescript
import { Component, signal, computed } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  imports: [UpperCasePipe],          // importar el pipe
  templateUrl: './hero-page.component.html'
})
export class HeroPageComponent {
  name = signal('Ironman');
  age  = signal(45);

  // Senal computada: se recalcula cuando name o age cambian
  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  // Senal computada para capitalizar
  capitalizedName = computed(() => this.name().toUpperCase());
}
```

```html
<!-- hero-page.component.html -->
<dd>{{ heroDescription() }}</dd>

<!-- Tres formas de mostrar el nombre en mayusculas -->
<dd>{{ name().toUpperCase() }}</dd>         <!-- metodo string directo -->
<dd>{{ capitalizedName() }}</dd>            <!-- senal computada -->
<dd>{{ name() | uppercase }}</dd>           <!-- Pipe (recomendado) -->
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `computed(callback)` | Crea una senal computada de solo lectura que se recalcula cuando sus dependencias cambian |
| `ReadOnlySignal` | Tipo de senal computada; no tiene `set` ni `update` |
| `senal()` con parentesis | Es obligatorio invocar la senal con `()` para obtener su valor en el template |
| `| uppercase` | Pipe de Angular para mostrar texto en mayusculas |
| `UpperCasePipe` | Clase del pipe; se importa de `@angular/common` en el array `imports` |
| `@angular/common` | Paquete de Angular con pipes y directivas comunes |
| `imports: [UpperCasePipe]` | Forma de registrar el pipe en un standalone component |

---

## 6. Resumen final en pocas palabras

`computed()` crea senales de solo lectura que se actualizan automaticamente cuando sus dependencias cambian. No tienen `set` ni `update`. Los Pipes como `UpperCasePipe` transforman datos visualmente en el template sin modificar el valor real y deben importarse en el componente. Para capitalizar texto en el template, el Pipe es la opcion mas limpia y expresiva.
