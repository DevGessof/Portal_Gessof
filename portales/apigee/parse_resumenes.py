"""
PARSER DE RESÚMENES - PORTAL APIGEE X
======================================
Script para parsear archivos .txt y generar resumenes.js completo

Uso:
    python parse_resumenes.py

Genera:
    assets/js/data/resumenes.js con todos los resúmenes completos
"""

import os
import re
import json

def parsear_archivo_txt(ruta_archivo):
    """
    Parsea un archivo .txt y extrae los resúmenes por video
    
    Args:
        ruta_archivo: Ruta al archivo .txt
        
    Returns:
        dict: Diccionario con número de video como clave y resumen como valor
    """
    with open(ruta_archivo, 'r', encoding='utf-8') as f:
        contenido = f.read()
    
    resumenes = {}
    
    # Dividir por "VIDEO X:"
    partes = re.split(r'VIDEO (\d+):', contenido)
    
    # Iterar sobre las partes (índices impares son números, pares son contenido)
    for i in range(1, len(partes), 2):
        if i + 1 < len(partes):
            numero_video = int(partes[i])
            contenido_video = partes[i + 1].strip()
            
            if contenido_video:
                resumenes[numero_video] = contenido_video
    
    return resumenes

def escapar_javascript(texto):
    """Escapa el texto para usarlo en JavaScript"""
    # Escapar comillas y caracteres especiales
    texto = texto.replace('\\', '\\\\')
    texto = texto.replace('`', '\\`')
    texto = texto.replace('${', '\\${')
    return texto

def generar_resumenes_js():
    """Genera el archivo resumenes.js completo"""
    
    base_path = "Resumen_Seccion"
    output_path = "assets/js/data/resumenes.js"
    
    # Parsear las 6 secciones
    todas_secciones = {}
    
    for i in range(1, 7):
        archivo = os.path.join(base_path, f"resumenes_seccion_{i}_apigee.txt")
        
        if os.path.exists(archivo):
            print(f"📖 Parseando {archivo}...")
            resumenes = parsear_archivo_txt(archivo)
            todas_secciones[f"seccion{i}"] = resumenes
            print(f"   ✅ {len(resumenes)} videos encontrados")
        else:
            print(f"   ⚠️  Archivo no encontrado: {archivo}")
    
    # Generar contenido JavaScript
    js_content = '''/**
 * RESÚMENES COMPLETOS - CURSO APIGEE X
 * =====================================
 * Resúmenes completos extraídos de archivos .txt
 * Generado automáticamente por parse_resumenes.py
 */

const RESUMENES_COMPLETOS = {
'''
    
    # Agregar cada sección
    for seccion_key, videos in todas_secciones.items():
        js_content += f'  {seccion_key}: {{\n'
        
        for num_video, resumen in sorted(videos.items()):
            resumen_escapado = escapar_javascript(resumen)
            js_content += f'    {num_video}: `{resumen_escapado}`,\n'
        
        js_content += '  },\n\n'
    
    js_content += '''  /**
   * Obtiene el resumen completo de un video
   * @param {number} seccion - Número de sección (1-6)
   * @param {number} numeroVideo - Número del video
   * @returns {string} Resumen completo del video
   */
  obtenerResumen(seccion, numeroVideo) {
    const seccionKey = `seccion${seccion}`;
    if (this[seccionKey] && this[seccionKey][numeroVideo]) {
      return this[seccionKey][numeroVideo];
    }
    return 'Resumen no disponible para este video.';
  }
};

// Exportar para uso en otros módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { RESUMENES_COMPLETOS };
}
'''
    
    # Escribir archivo
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(js_content)
    
    print(f"\n✨ Archivo generado: {output_path}")
    
    # Estadísticas
    total_videos = sum(len(videos) for videos in todas_secciones.values())
    print(f"📊 Total de videos procesados: {total_videos}")
    print(f"📊 Total de secciones: {len(todas_secciones)}")

if __name__ == "__main__":
    print("🚀 Iniciando parser de resúmenes...\n")
    generar_resumenes_js()
    print("\n✅ ¡Proceso completado!")
