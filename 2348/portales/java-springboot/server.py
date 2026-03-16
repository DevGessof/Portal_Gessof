"""
Servidor HTTP Simple para el Portal de Aprendizaje
Ejecuta este script para servir el portal localmente y evitar problemas de CORS
"""

import http.server
import socketserver
import os
from pathlib import Path

# Configuración
PORT = 8000
# Sirviendo desde la raíz del proyecto para permitir acceso a carpetas de secciones
DIRECTORY = Path(__file__).parent.parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler personalizado con headers CORS"""
    
    def end_headers(self):
        # Agregar headers CORS
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        super().end_headers()
    
    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

def main():
    """Inicia el servidor"""
    os.chdir(DIRECTORY)
    
    with socketserver.TCPServer(("", PORT), CustomHTTPRequestHandler) as httpd:
        print("=" * 60)
        print("🚀 GESSOF Academy - Portal de Aprendizaje")
        print("=" * 60)
        print(f"📡 Servidor iniciado en: http://localhost:{PORT}")
        print(f"📁 Sirviendo raíz desde: {DIRECTORY}")
        print("\n🌐 Abre tu navegador y visita el portal en:")
        print(f"   http://localhost:{PORT}/Portal%20Aprendizaje/index.html")
        print("\n⚠️  Presiona Ctrl+C para detener el servidor")
        print("=" * 60)
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor detenido correctamente")
            print("=" * 60)

if __name__ == '__main__':
    main()
