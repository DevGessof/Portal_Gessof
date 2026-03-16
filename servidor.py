import http.server
import socketserver

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
})

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Servidor corriendo en el puerto {PORT}")
    httpd.serve_forever()
