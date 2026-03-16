# Seccion 8 - Leccion 04: Continuacion de la Aplicacion

---

## 1. Titulo de la leccion

**Retomar el proyecto gifs-app, configurar API Key y limpiar LocalStorage**

---

## 2. Que se aprende en esta leccion

Se retoma el proyecto `03-gifs-app` para continuar con las mejoras de la seccion 8. Se recuerda como configurar el API Key de Giphy en los environments y como limpiar el LocalStorage desde las DevTools del navegador.

---

## 3. Puntos clave explicados

- **Reinstalar dependencias:** Si se descargo el codigo fuente, ejecutar `npm install` antes de `ng serve -o`.
- **Problema frecuente al iniciar:** Si no aparecen GIFs o hay errores, la causa mas comun es que el `giphyApiKey` en `environment.ts` esta vacio o incorrecto. Copiar la API Key propia y pegarla en ambos environments (desarrollo y produccion).
- **Mismo API Key en ambos environments:** El de desarrollo (`environment.development.ts`) y el de produccion (`environment.ts`) deben tener la misma API Key.
- **No hay historial al iniciar:** Si no se busco nada previamente, el sidebar estara vacio. Al buscar, se guardan en LocalStorage.
- **Limpiar LocalStorage:** Desde las DevTools del navegador → pestaña "Application" → "Local storage" → boton de limpiar. Util para reiniciar el estado de la app.
- **Contenido de la seccion:** Se implementara infinite scroll, control del scroll, y primitivas nuevas de Angular 19 como `viewChild`.

---

## 4. Ejemplo sencillo

```typescript
// src/environments/environment.ts
export const environment = {
  production: true,
  giphyApiKey: 'PEGAR_AQUI_TU_API_KEY',
  giphyUrl: 'https://api.giphy.com/v1'
};

// src/environments/environment.development.ts
export const environment = {
  production: false,
  giphyApiKey: 'PEGAR_AQUI_TU_API_KEY',  // mismo valor
  giphyUrl: 'https://api.giphy.com/v1'
};
```

---

## 5. Funciones, palabras clave o elementos importantes

| Termino | Descripcion |
|---|---|
| `npm install` | Reconstruye `node_modules` si no existe |
| `ng serve -o` | Levanta el servidor de desarrollo y abre el navegador |
| `giphyApiKey` | Propiedad en `environment.ts` con la API Key de Giphy |
| Application → Local storage | Seccion de DevTools para ver y limpiar el LocalStorage |
| Limpiar LocalStorage | Borra el historial guardado para reiniciar el estado |

---

## 6. Resumen final en pocas palabras

Para continuar se necesita `npm install` si el proyecto es nuevo, y asegurarse de que `giphyApiKey` este configurado en ambos environments. Si algo falla, limpiar el LocalStorage desde las DevTools del navegador reinicia el estado de la app.
