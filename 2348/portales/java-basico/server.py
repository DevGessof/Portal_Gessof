"""
Servidor HTTP Simple para el Portal de Aprendizaje Apigee X
Ejecuta este script para servir el portal localmente y evitar problemas de reproducción de video (CORS/Security)
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configuración
PORT = 8085
DIRECTORY = Path(__file__).parent

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Handler personalizado con headers CORS y sin caché para desarrollo"""
    
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
        print("🚀 Portal de Aprendizaje Apigee X - Servidor Local")
        print("=" * 60)
        print(f"📡 Servidor iniciado en: http://localhost:{PORT}")
        print(f"📁 Directorio actual: {DIRECTORY}")
        print("\n🌐 Abriendo el portal en tu navegador...")
        print(f"   URL: http://localhost:{PORT}/index.html")
        print("\n⚠️  Presiona Ctrl+C para detener el servidor")
        print("=" * 60)
        
        # Abrir navegador automáticamente
        webbrowser.open(f"http://localhost:{PORT}/index.html")
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n\n✅ Servidor detenido correctamente")
            print("=" * 60)

if __name__ == '__main__':
    main()
