# Seccion 5 - Leccion 11: Solucion a la Tarea

---

## 1. Titulo de la leccion

**Solucion: conectar inputs, agregar personajes y actualizar la senal correctamente**

---

## 2. Que se aprende en esta leccion

Se resuelve la tarea de la leccion anterior: conectar el segundo input al poder, implementar el metodo `addCharacter()`, validar los datos antes de insertar y usar `update()` (no `push()`) para modificar la senal del arreglo.

---

## 3. Puntos clave explicados

- **Conectar el input de poder:** Igual que el de nombre: referencia local `#txtPower`, `[value]="power()"` y `(input)="power.set(+txtPower.value)"`. El `+` convierte el string a numero.
- **Error de tipos:** Los inputs de texto siempre devuelven strings. Si la senal espera un `number`, TypeScript marcara error. Se soluciona con el operador `+`.
- **Validacion antes de insertar:** Se verifica que `name()` no este vacio y que `power()` sea mayor a 0. Si no se cumplen, se hace `return` anticipado.
- **Crear el nuevo personaje:** Se construye un objeto `newCharacter` de tipo `Character` con `id`, `name` y `power` tomados de las senales.
- **`characters.update()` en lugar de `.push()`:** Para modificar el valor de una senal de arreglo, se usa `update()` con el spread operator para crear un nuevo arreglo. Usar `.push()` directamente en el valor de la senal no notifica a Angular del cambio de manera optima.
- **`resetFields()`:** Metodo que restablece `name` y `power` a sus valores iniciales despues de agregar un personaje.
- **Los datos se pierden al recargar:** Todo el estado vive en memoria. Si se recarga el navegador, se pierde. La persistencia se vera en clases posteriores con Local Storage.

---

## 4. Ejemplo sencillo

```typescript
addCharacter(): void {
  // Validacion
  if (!this.name() || this.power() <= 0) return;

  const newCharacter: Character = {
    id: this.characters().length + 1,
    name: this.name(),
    power: this.power()
  };

  // Forma recomendada: update con spread
  this.characters.update(list => [...list, newCharacter]);

  this.resetFields();
}

resetFields(): void {
  this.name.set('');
  this.power.set(0);
}
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `+txtPower.value` | Convierte string a numero; necesario porque los inputs siempre devuelven strings |
| `return` anticipado | Sale de la funcion si la validacion falla, evitando insertar datos invalidos |
| `characters.update(list => [...list, nuevo])` | Forma recomendada para agregar a un arreglo en una senal |
| `characters().push()` | Funciona pero no es la forma recomendada; no notifica el cambio de senal correctamente |
| Spread operator `...` | Crea un nuevo arreglo con todos los elementos anteriores mas el nuevo |
| `resetFields()` | Limpia los inputs despues de agregar el personaje |

---

## 6. Resumen final en pocas palabras

Para agregar elementos a un arreglo en una senal, se usa `update()` con spread operator: `characters.update(list => [...list, nuevo])`. Los inputs siempre devuelven strings; hay que convertirlos a numero con `+`. Despues de insertar, se llama a `resetFields()` para limpiar los campos. Los datos se pierden al recargar porque viven en memoria.
