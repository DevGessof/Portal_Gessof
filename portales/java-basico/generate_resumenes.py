"""
Script para generar resumenes.js desde los archivos .md
Convierte los resúmenes en bloques de colores para el portal
"""

import os
import re
from pathlib import Path

# Directorio base
BASE_DIR = Path(__file__).parent
RESUMENES_DIR = BASE_DIR / "Resumenes" / "resumenes_java_completo"

# Mapeo de secciones a números de video
SECCION_TO_VIDEO = {
    "Seccion_01": [1, 2, 3, 4],
    "Seccion_02": [5, 6, 7, 8, 9],
    "Seccion_03": [10, 11],
    "Seccion_04": [12, 13, 14, 15, 16, 17],
    "Seccion_05": [18, 19],
    "Seccion_06": [20],
    "Seccion_07": [21, 22, 23, 24],
    "Seccion_08": [25, 26],
    "Seccion_09": [27],
    "Seccion_10": [28, 29, 30],
    "Seccion_11": [31, 32, 33],
    "Seccion_12": [34, 35, 36, 37, 38, 39]
}

def extract_title(content):
    """Extrae el título de la lección"""
    match = re.search(r'# LECCIÓN \d+: (.+)', content)
    return match.group(1).strip() if match else "Sin título"

def parse_resume(filepath):
    """Parsea un archivo de resumen y lo convierte en bloques"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    titulo = extract_title(content)
    bloques = []
    
    # Bloque 1: ¿Qué se aprende?
    match = re.search(r'### ¿Qué se aprende en esta lección\?(.*?)###', content, re.DOTALL)
    if match:
        bloques.append({
            "tipo": "info",
            "titulo": "¿Qué se aprende en esta lección?",
            "contenido": match.group(1).strip()
        })
    
    # Bloque 2: Puntos clave
    match = re.search(r'### Puntos clave explicados(.*?)###', content, re.DOTALL)
    if match:
        puntos_text = match.group(1).strip()
        # Extraer lista de puntos
        puntos = re.findall(r'- \*\*(.+?)\*\*: (.+?)(?=\n- \*\*|\n\n|$)', puntos_text, re.DOTALL)
        if puntos:
            items = [f"**{titulo}**: {desc.strip()}" for titulo, desc in puntos]
            bloques.append({
                "tipo": "success",
                "titulo": "Puntos Clave Explicados",
                "items": items
            })
    
    # Bloque 3: Ejemplo sencillo
    match = re.search(r'### Ejemplo sencillo(.*?)###', content, re.DOTALL)
    if match:
        ejemplo = match.group(1).strip()
        if "no se muestra" not in ejemplo.lower() and "no hay" not in ejemplo.lower():
            bloques.append({
                "tipo": "process",
                "titulo": "Ejemplo Práctico",
                "contenido": ejemplo
            })
    
    # Bloque 4: Funciones importantes
    match = re.search(r'### Funciones, palabras clave o elementos importantes(.*?)###', content, re.DOTALL)
    if match:
        funciones_text = match.group(1).strip()
        funciones = re.findall(r'- \*\*(.+?)\*\*: (.+?)(?=\n- \*\*|\n\n|$)', funciones_text, re.DOTALL)
        if funciones:
            items = [f"**{nombre}**: {desc.strip()}" for nombre, desc in funciones]
            bloques.append({
                "tipo": "concept",
                "titulo": "Conceptos y Elementos Clave",
                "items": items
            })
    
    # Bloque 5: Resumen final
    match = re.search(r'### Resumen final en pocas palabras(.*?)---', content, re.DOTALL)
    if match:
        bloques.append({
            "tipo": "warning",
            "titulo": "Resumen Final",
            "contenido": match.group(1).strip()
        })
    
    return titulo, bloques

def generate_resumenes_js():
    """Genera el archivo resumenes.js"""
    output = []
    output.append("/**")
    output.append(" * RESÚMENES DIDÁCTICOS - PORTAL JAVA BÁSICO")
    output.append(" * Resúmenes organizados por video con bloques de colores")
    output.append(" */")
    output.append("")
    output.append("const RESUMENES = {")
    
    video_counter = 1
    
    # Iterar por cada sección
    for seccion_num in range(1, 13):
        seccion_key = f"Seccion_{seccion_num:02d}"
        
        # Buscar carpeta de sección
        seccion_folders = [d for d in RESUMENES_DIR.iterdir() if d.is_dir() and d.name.startswith(seccion_key)]
        
        if not seccion_folders:
            continue
        
        seccion_folder = seccion_folders[0]
        
        # Obtener archivos .md ordenados
        md_files = sorted([f for f in seccion_folder.iterdir() if f.suffix == '.md'])
        
        for md_file in md_files:
            titulo, bloques = parse_resume(md_file)
            
            output.append(f"    {video_counter}: {{")
            output.append(f"        titulo: \"{titulo}\",")
            output.append(f"        seccion: {seccion_num},")
            output.append(f"        bloques: [")
            
            for bloque in bloques:
                output.append("            {")
                output.append(f"                tipo: \"{bloque['tipo']}\",")
                output.append(f"                titulo: \"{bloque['titulo']}\",")
                
                if 'contenido' in bloque:
                    # Escapar comillas y saltos de línea
                    contenido = bloque['contenido'].replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
                    output.append(f"                contenido: \"{contenido}\"")
                elif 'items' in bloque:
                    output.append("                items: [")
                    for item in bloque['items']:
                        item_escaped = item.replace('\\', '\\\\').replace('"', '\\"')
                        output.append(f"                    \"{item_escaped}\",")
                    # Remover última coma
                    if output[-1].endswith(','):
                        output[-1] = output[-1][:-1]
                    output.append("                ]")
                
                output.append("            },")
            
            # Remover última coma
            if output[-1].endswith(','):
                output[-1] = output[-1][:-1]
            
            output.append("        ]")
            output.append("    },")
            
            video_counter += 1
    
    # Remover última coma
    if output[-1].endswith(','):
        output[-1] = output[-1][:-1]
    
    output.append("};")
    
    # Escribir archivo
    output_file = BASE_DIR / "assets" / "js" / "data" / "resumenes.js"
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write('\n'.join(output))
    
    print(f"✅ Archivo resumenes.js creado con {video_counter - 1} videos")

if __name__ == '__main__':
    generate_resumenes_js()
