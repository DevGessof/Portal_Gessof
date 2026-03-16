# Autodoc: Salud del Sistema y Observabilidad

## 1. Monitoreo Global y Telemetría

El portal **no cuenta con sistemas de observabilidad externos o de telemetría agresiva** tipo Datadog, New Relic o Sentry, por su estado y arquitectura SPA básica. Gran parte de la depuración ocurre on-device en el runtime de la máquina del cliente local (`F12 Console`).

## 2. Estrategia Interna de Logs (Excepciones)

Las principales operaciones de escritura en API están encapsuladas bajo un bloque de `try...catch`. 

- **Supabase Responses**: Si Supabase remite fallos en la capa de inserción, o `error` del tipo 400x (Malas Firmas JWT), la red es notificada en el inspector bajo `Network` o en el string visual que muestra los mensajes de toast en rojo. (Log tipo: `console.error('[ChangePassword] Error:', err)`).
- **Indicadores Visuales Activos (UI Health)**: El propio botón realiza el spin loader (`<i class="fas fa-spinner fa-spin">`) previniendo un submit o spam duplicado de endpoints si el tiempo de respuesta RTT excede los parámetros habituales. No se emiten logs permanentes.

## 3. Guía de Verificación Operativa Local

Para confirmar que un entorno ha levantado apropiadamente:
1. `npm` / Servidor Local de Archivos Python no crashea en arranque y notifica su Listening port correctamente.
2. Comportamiento en consola navegador nulo de advertencias CORS.
3. Se alcanza `window.supabase.auth.getSession()` resolviendo satisfactoriamente.
