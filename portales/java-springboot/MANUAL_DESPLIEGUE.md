# Manual de Despliegue - Portal de Aprendizaje

Este documento detalla los pasos necesarios para desplegar el **Portal de Aprendizaje (Microservicios Spring Boot)** en un servidor de producción o entorno de pruebas.

## 1. Arquitectura del Sistema

El portal es una **Aplicación Web Estática**. No requiere bases de datos locales ni backend complejo (Java/Node/Python) para funcionar, ya que:
*   **Lógica:** Javascript puro (`/js`).
*   **Datos:** Archivos JSON y CSV estáticos (`/data`, `Drive.csv`).
*   **Contenido Pesado:** Videos y archivos de descarga se sirven directamente desde **Google Drive**.

Esto hace que el despliegue sea extremadamente ligero y barato.

---

## 2. Archivos Requeridos

Para desplegar, solo necesitas copiar los siguientes archivos y carpetas al directorio raíz de tu servidor web. **No es necesario subir los Gigabytes de videos ni PDFs.**

### Estructura de Carpetas para Producción
```text
/var/www/portal-aprendizaje/
│
├── index.html                          # Archivo principal
├── Drive.csv                           # Base de datos de clases
├── logo_gessof_academy_header_v2.png   # Logo
│
├── css/                                # Estilos
│   ├── main.css
│   ├── dark-mode.css
│   └── components.css
│
├── js/                                 # Lógica
│   ├── app.js
│   ├── config.js
│   ├── data-loader.js
│   ├── player.js
│   ├── progress.js
│   └── ui-builder.js
│
└── data/                               # Datos estáticos
    ├── html_redirects.json
    └── summaries/                      # Resúmenes de clases
        ├── *.json                      # Archivos JSON individuales 
        └── backup_consolidados/
            └── glosario_completo_spring_boot.json
```

---

## 3. Opciones de Despliegue

Puedes levantar este servicio con cualquier servidor web. Aquí tienes las 3 opciones más comunes:

### Opción A: Servidor Web Estándar (Nginx / Apache) - RECOMENDADO

Si tienes un servidor Linux (Ubuntu/Debian/CentOS):

1.  **Instala Nginx:**
    ```bash
    sudo apt update
    sudo apt install nginx -y
    ```

2.  **Copia los archivos:**
    Sube los archivos listados en la sección 2 a `/var/www/html/` (o crea una carpeta nueva).

3.  **Permisos:**
    Asegúrate de que el servidor pueda leer los archivos:
    ```bash
    sudo chown -R www-data:www-data /var/www/html/
    sudo chmod -R 755 /var/www/html/
    ```

4.  **Acceso:**
    Abre tu navegador e ingresa la IP de tu servidor o tu dominio.

---

### Opción B: Contenedor Docker (Nginx Alpine)

Si prefieres usar Docker para mantener todo aislado.

1.  **Crea un `Dockerfile`** en la raíz del proyecto (junto a `index.html`):

    ```dockerfile
    FROM nginx:alpine
    
    # Copiar contenido estático al servidor
    COPY . /usr/share/nginx/html
    
    # Exponer puerto 80
    EXPOSE 80
    
    # Iniciar Nginx
    CMD ["nginx", "-g", "daemon off;"]
    ```

2.  **Construye y corre la imagen:**
    ```bash
    docker build -t portal-aprendizaje .
    docker run -d -p 8080:80 --name portal-app portal-aprendizaje
    ```

3.  **Acceso:**
    Ingresa a `http://localhost:8080` (o la IP de tu servidor).

---

### Opción C: Python (Solo para pruebas rápidas)

Si solo necesitas probarlo rápidamente en un servidor sin instalar Nginx.

1.  Asegúrate de tener Python 3 instalado.
2.  Navega a la carpeta del proyecto.
3.  Ejecuta:
    ```bash
    python3 -m http.server 8000
    ```
4.  Accede a `http://IP_DEL_SERVIDOR:8000`.

---

## 4. Verificación Post-Despliegue

Una vez levantado el servicio, verifica lo siguiente:

1.  **Carga Inicial:** Al entrar a la web, ¿se ve la barra de progreso y el menú?
2.  **Datos de Drive:** En la consola del navegador (F12), ¿ves el mensaje `✅ CSV cargado`?
3.  **Videos:** Abre una clase cualquiera. ¿Se carga el video desde Drive?
4.  **Descargas:** Abre el modal de un video y busca "Material de Apoyo". Haz clic en un PDF o ZIP. **Debe abrirse una pestaña de Google Drive** para visualizar/descargar el archivo.
5.  **Glosario:** Ve a la pestaña Glosario y prueba el buscador.

## 5. Mantenimiento

*   **Actualizar Clases:** Si subes nuevos videos, solo necesitas actualizar el archivo `Drive.csv` en el servidor.
*   **Actualizar Resúmenes:** Sube los nuevos archivos `.json` a la carpeta `data/summaries/`.
*   **Cambios de Código:** Si modificas JS/CSS, recuerda que los navegadores guardan caché. Puedes forzar la recarga con `Ctrl + F5` o configurar cabeceras de caché en tu servidor Nginx/Apache.
