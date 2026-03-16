# Lección 11 - Cambiar query parameters vía código

---

## ¿Qué se aprende en esta lección?

Se implementa la actualización dinámica del URL cuando el usuario realiza una búsqueda. Es decir, cuando el usuario escribe en la caja de búsqueda y deja de escribir, el URL se actualiza automáticamente con el nuevo término. Esto se logra usando el servicio `Router` de Angular para navegar hacia la misma ruta agregando el query parameter correspondiente. También se aplica la misma lógica para las búsquedas por país y por región.

---

## Puntos clave explicados

- **El problema:** Aunque ya se lee el query parameter del URL al cargar la página, cuando el usuario escribe algo nuevo el URL no se actualiza. Es decir, la información no queda reflejada en el URL en tiempo real.

- **Cambiar el URL es una navegación:** Actualizar los query parameters del URL se considera una navegación en Angular. Por eso se usa el servicio `Router` para hacerlo.

- **`Router` de Angular:** Servicio que permite navegar programáticamente a otras rutas, incluyendo la posibilidad de agregar o cambiar query parameters.

- **`router.navigate()`:** Método del `Router` que recibe un arreglo con la ruta destino y un objeto de opciones (`NavigationExtras`).

- **`NavigationExtras`:** Objeto opcional que se puede pasar a `router.navigate()` para agregar información adicional a la navegación, como los query parameters.

- **`queryParams` dentro de `NavigationExtras`:** Permite especificar los query parameters que se desean agregar al URL. Se define como un objeto clave-valor, donde la clave es el nombre del parámetro y el valor es lo que se quiere agregar.

- **Caracteres especiales en el URL:** Angular se encarga automáticamente de escapar caracteres especiales, como espacios (que se convierten en `%20`).

- **Aplicación a "Por país":** Se reutiliza la misma lógica (copiando `activatedRoute`, `router`, `queryParam` y la llamada a `navigate`) cambiando la ruta a `by-country`.

- **Aplicación a "Por región":** Se aplica también a la pantalla de región. Como la región no es un string libre sino un tipo `Region`, se usa el query parameter `region` en lugar de `query`, y el `linkedSignal` se inicializa con el valor validado del URL.

- **Tarea de la próxima lección:** Se identifica que si el usuario escribe algo inválido en el URL para la región (por ejemplo, `?region=OceaniaInvalida`), la aplicación puede comportarse de manera incorrecta. Eso se resolverá en la siguiente lección con validación de parámetros.

---

## Ejemplo sencillo

```typescript
// Inyección del Router
router = inject(Router);

// Al recibir el valor de búsqueda del componente input
onSearch(query: string) {
  if (!query) return;

  // Actualizar el URL con el nuevo query parameter
  this.router.navigate(['/country/by-capital'], {
    queryParams: { query: query }
  });
}
```

Al buscar "San Salvador", el URL cambia a `/country/by-capital?query=San%20Salvador`. Si el usuario navega hacia atrás y regresa, la búsqueda se preserva.

---

## Funciones, palabras clave o elementos importantes

- **`Router`:** Servicio de Angular que permite navegar entre rutas desde el código TypeScript.
- **`router.navigate()`:** Método para navegar a una ruta. Recibe la ruta como arreglo y opciones adicionales como segundo parámetro.
- **`NavigationExtras`:** Objeto con opciones adicionales para la navegación, como `queryParams`.
- **`queryParams`:** Propiedad de `NavigationExtras` donde se definen los parámetros de consulta que se agregarán al URL.
- **`router.navigateByUrl()`:** Alternativa a `navigate()` que recibe el URL completo como string en lugar de un arreglo.
- **Segmentos de ruta vs query parameters:** Los segmentos van dentro del arreglo de `navigate()`; los query parameters van en `NavigationExtras.queryParams`.

---

## Resumen final en pocas palabras

Con el servicio `Router` y `NavigationExtras`, se puede actualizar el URL de forma programática cada vez que el usuario realiza una búsqueda. Esto permite que el estado de la aplicación quede reflejado en el URL, haciendo posible preservarlo al navegar, recargar la página o compartir el enlace con otra persona.
