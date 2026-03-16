# Guía de Despliegue para Servidor Externo

Para subir tu portal a un hosting o servidor externo (GitHub Pages, Netlify, Vercel, Hosting compartido), **SOLO** necesitas subir los siguientes archivos y carpetas.

Todo lo demás son herramientas de desarrollo local o documentación que no es necesaria para que el usuario final vea el portal.

## ✅ Archivos a SUBIR (Obligatorios)

Esta es la estructura limpia que debe quedar en tu servidor:

```
/ (Raíz del servidor)
├── index.html                    # El archivo principal
└── assets/                       # Carpeta con todos los estilos y lógica
    ├── css/                      # Estilos (5 archivos)
    │   ├── variables.css
    │   ├── base.css
    │   ├── components.css
    │   ├── sections.css
    │   └── responsive.css
    └── js/                       # Lógica (Estructura modular completa)
        ├── main.js
        ├── components/
        ├── core/
        └── data/
```

> **Nota:** Asegúrate de subir la carpeta `assets` completa con todo su contenido interno tal cual está.

---

## ❌ Archivos a IGNORAR (No subir)

Estos archivos ocupan espacio o exponen información de desarrollo, no los subas:

- 🚫 `server.py` (Solo para probar en tu compu)
- 🚫 `generate_resumenes.py` (Script de generación)
- 🚫 `Carpeta Resumenes/` (Los resúmenes ya están compilados en `assets/js/data/resumenes.js`)
- 🚫 `*.md` (MASTER_PROMPT.md, PROJECT_RULES.md, README.md, etc.)
- 🚫 `*.txt` (promt.txt, prompts de respaldo)
- 🚫 `Drive.csv` (Los datos ya están en `assets/js/data/driveData.js`)
- 🚫 `index_backup.html` (Copias de seguridad)
- 🚫 `fix_js_syntax.py`

## Pasos para el despliegue

1.  Crea una carpeta nueva en tu escritorio llamada `Portal_Deploy`.
2.  Copia dentro **SOLO** el archivo `index.html` y la carpeta `assets`.
3.  Sube el contenido de esa carpeta `Portal_Deploy` a tu hosting.
4.  ¡Listo! Tu portal cargará perfectamente.
