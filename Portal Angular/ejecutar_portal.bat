@echo off
set PORT=8765
echo =======================================================
echo          GESSOF ACADEMY - PORTAL ANGULAR
echo =======================================================
echo.
echo Iniciando servidor local con Python...
echo El portal se abrira automaticamente en su navegador.
echo.
echo [!] NO CIERRE esta ventana mientras use el portal.
echo [!] Para detener el servidor, cierre esta ventana.
echo.

:: Abrir el navegador con un pequeño retraso para permitir que el servidor inicie
start http://localhost:%PORT%

:: Iniciar servidor de Python
python -m http.server %PORT%

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] No se pudo iniciar el servidor con 'python'.
    echo Intentando con 'python3'...
    start http://localhost:%PORT%
    python3 -m http.server %PORT%
)

if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] No se encontro Python instalado. 
    echo Por favor, instale Python para ejecutar el portal localmente.
    pause
)
