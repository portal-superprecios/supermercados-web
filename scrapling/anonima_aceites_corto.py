# ══════════════════════════════════════════════════════════
#  SCRAPLING - LA ANONIMA
#  Fix imágenes 2026 — detecta automáticamente el atributo
# ══════════════════════════════════════════════════════════

from scrapling.fetchers import DynamicFetcher
from playwright.sync_api import Page
import pandas as pd
import os
import re
import datetime
import sys
import requests
from openpyxl import load_workbook
from openpyxl.drawing.image import Image as ExcelImage

# Reconfigurar salida estándar para evitar errores de codificación en Windows
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# ──────────────────────────────────────────────
# CONFIGURACIÓN
# ──────────────────────────────────────────────
MAX_PRODUCTOS    = 10
CATEGORIA        = "aceites"                          # usado en prints y nombres de archivo
URL              = "https://www.laanonima.com.ar/aceite/n3_604/"
CODIGO_POSTAL    = "9100"
IMAGENES_DIR     = "D:/python/scrapling/imagenes_productos_laanonima"
OUTPUT_DIR       = r"d:/python/supermercados/laanonima/2026 la anonima"
NUM_SCROLLS      = 15
IMAGEN_SIZE_PX   = 55                                # tamaño de imagen en Excel (ancho y alto)

# ──────────────────────────────────────────────
# HELPERS
# ──────────────────────────────────────────────

# Sesión HTTP reutilizable (más eficiente que llamadas sueltas)
_session = requests.Session()
_session.headers.update({
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Referer': 'https://www.laanonima.com.ar/'
})


def extraer_valor_numerico(precio_str: str) -> float:
    """Convierte un string de precio (ej: '$1.234,56') a float para ordenar."""
    try:
        limpio = re.sub(r'[^\d,.]', '', precio_str)
        limpio = limpio.replace('.', '').replace(',', '.')
        return float(limpio)
    except (ValueError, AttributeError):
        return float('inf')


def descargar_imagen(url_img: str, ruta: str) -> bool:
    """Descarga una imagen usando la sesión compartida."""
    try:
        resp = _session.get(url_img, timeout=10)
        if resp.status_code == 200:
            with open(ruta, 'wb') as f:
                f.write(resp.content)
            return True
        else:
            print(f"    ✗ HTTP {resp.status_code} para {url_img[:60]}")
    except Exception as e:
        print(f"    ✗ Error imagen: {e}")
    return False


def get_texto(elemento, selector: str) -> str:
    """Extrae texto de un selector CSS de forma segura."""
    try:
        nodos = elemento.css(f'{selector} ::text')
        if nodos:
            return nodos.get('').strip()
        nodos = elemento.css(selector)
        if nodos:
            return nodos[0].text.strip()
    except Exception:
        pass
    return ""


def extraer_imagen_url(producto) -> str:
    """
    Prueba todos los atributos posibles de imagen en la imagen del producto.
    """
    # Seleccionar la imagen del producto dentro de su contenedor div.imagen,
    # evitando los iconos de carrito o de beneficios/financiación.
    img = producto.css('div.imagen img')
    if not img:
        img = producto.css('img')
    if not img:
        return ""

    atributos = [
        'src',
        'data-src',
        'data-lazy',
        'data-lazy-src',
        'data-original',
        'data-url',
        'data-image',
        'data-img',
        'srcset',
        'data-srcset',
    ]

    for attr in atributos:
        valor = img.css(f'::attr({attr})').get('').strip()
        if valor and not valor.startswith('data:image'):
            # srcset puede tener múltiples URLs → tomar la primera
            if attr in ('srcset', 'data-srcset'):
                valor = valor.split(',')[0].split(' ')[0].strip()
            return valor

    return ""


def extension_desde_url(url: str) -> str:
    """
    Detecta la extensión real de la imagen desde la URL.
    Evita guardar PNGs o WEBPs con extensión .jpg (que rompe openpyxl).
    """
    partes = url.split('?')[0].lower()   # ignorar query string
    for ext in ('.webp', '.png', '.gif', '.jpeg', '.jpg'):
        if partes.endswith(ext):
            return ext
    return '.jpg'   # fallback


# ──────────────────────────────────────────────
# PAGE_ACTION: popup + CP + scroll
# ──────────────────────────────────────────────
def accion_pagina(page: Page) -> Page:

    # Cerrar popup
    try:
        page.wait_for_selector('xpath=//*[@id="btnCerrarNotificacion"]/img', timeout=5000)
        page.click('xpath=//*[@id="btnCerrarNotificacion"]/img')
        print("  ✓ Popup cerrado")
        page.wait_for_timeout(1000)
    except Exception:
        print("  ⚠ Popup no apareció (normal)")

    # Ingresar código postal y seleccionar la sucursal
    print(f"  Ingresando CP {CODIGO_POSTAL}...")
    try:
        page.wait_for_selector('#idCodigoPostalUnificado', timeout=8000)
        campo = page.locator('#idCodigoPostalUnificado')
        campo.focus()
        campo.fill(CODIGO_POSTAL)
        print(f"  ✓ CP '{CODIGO_POSTAL}' escrito")
        
        # Esperar a que aparezcan las opciones de sucursal
        print("  Esperando opciones de sucursal...")
        page.wait_for_selector('#opcionesSucursal label', timeout=10000)
        
        # Hacer clic en la primera opción de sucursal disponible (Trelew para 9100)
        print("  Seleccionando primera sucursal disponible...")
        page.locator('#opcionesSucursal label').first.click()
        page.wait_for_timeout(1000)
        
        # Hacer clic en Confirmar si el botón es visible
        try:
            btn_confirmar = page.locator('#btn_setSucursalSuper')
            if btn_confirmar.is_visible():
                btn_confirmar.click()
                print("  ✓ Sucursal confirmada")
        except Exception:
            pass
            
        print("  ✓ Sucursal seleccionada correctamente")
        page.wait_for_timeout(3000)
    except Exception as e:
        print(f"  ⚠ No se pudo seleccionar la sucursal: {e}")

    # Scroll progresivo — dispara lazy loading de imágenes
    print(f"  Haciendo {NUM_SCROLLS} scrolls...")
    for i in range(NUM_SCROLLS):
        page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
        page.wait_for_timeout(1500)
        print(f"    Scroll {i+1}/{NUM_SCROLLS}")

    # Volver al inicio
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(1000)

    # Scroll lento hacia abajo — fuerza lazy load de imágenes restantes
    print("  Realizando scroll lento para lazy loading...")
    page.evaluate("""
        () => new Promise(resolve => {
            let pos = 0;
            const step = 400;
            const delay = 150;
            const timer = setInterval(() => {
                window.scrollBy(0, step);
                pos += step;
                if (pos >= document.body.scrollHeight) {
                    clearInterval(timer);
                    resolve();
                }
            }, delay);
        })
    """)
    page.wait_for_timeout(3000)
    return page


# ──────────────────────────────────────────────
# FETCH
# ──────────────────────────────────────────────
print(f"🕷️  Iniciando Scrapling - LA ANONIMA ({CATEGORIA.upper()})")
print(f"   URL: {URL}\n")

# DynamicFetcher.fetch() es un método de clase — se llama directamente sin instanciar
page = DynamicFetcher.fetch(
    URL,
    headless=True,
    network_idle=True,
    page_action=accion_pagina
)

print(f"\n   Status: {page.status}  ✓\n")

# ──────────────────────────────────────────────
# DETECCIÓN DE PRODUCTOS
# ──────────────────────────────────────────────
productos = page.css('div.producto-item')
print(f"Intento 1 (div.producto-item)  → {len(productos)} productos")

if not productos:
    productos = page.css('[class*="producto"]')
    print(f"Intento 2 (class*=producto)    → {len(productos)} productos")

if not productos:
    productos = page.css('div.producto.item')
    print(f"Intento 3 (div.producto.item)  → {len(productos)} productos")

if not productos:
    productos = page.css('div.item')
    print(f"Intento 4 (div.item)           → {len(productos)} productos")

print(f"\n{'='*60}")
print(f"Total productos: {len(productos)}")
print(f"{'='*60}\n")

if not productos:
    print("❌ Sin productos. Guardando debug HTML...")
    try:
        html_content = page.text
    except Exception:
        html_content = str(page)
    with open('debug_laanonima.html', 'w', encoding='utf-8') as f:
        f.write(html_content)
    print("   → debug_laanonima.html guardado")
    exit()

# ── DEBUG: mostrar atributos del primer img ──
print("🔍 DEBUG - Atributos de imagen del primer producto:")
primer_img = productos[0].css('img')
if primer_img:
    attrs = primer_img[0].attrib
    if attrs:
        print("   Atributos encontrados:")
        for k, v in attrs.items():
            print(f"     {k} = {str(v)[:100]}")
    else:
        print("   ⚠ El img no tiene atributos visibles")
else:
    print("   ⚠ No hay tag <img> en el primer producto")
print()

# ──────────────────────────────────────────────
# PASO 1: Extraer título, precio y URL de imagen
# ──────────────────────────────────────────────
datos_crudos = []

for idx, producto in enumerate(productos):
    print(f"Procesando {idx+1}/{len(productos)}...")

    # ── Título ──
    titulo = (
        get_texto(producto, '[class*="titulo"]') or
        get_texto(producto, 'h2') or
        get_texto(producto, 'h3') or
        get_texto(producto, 'h4') or
        get_texto(producto, 'a')  or
        f"Producto_{idx}"
    )

    # ── Precio ──
    precio_texto = (
        get_texto(producto, '[class*="precio"]') or
        get_texto(producto, '[class*="price"]')  or
        get_texto(producto, '[id*="price"]')
    )

    if not precio_texto:
        for span in producto.css('span'):
            t = span.text or ""
            if '$' in t:
                precio_texto = t.strip()
                break

    if not precio_texto:
        match = re.search(r'\$\s*[\d]{1,3}(?:[.,]\d{3})*(?:[.,]\d{1,2})?', producto.text or "")
        if match:
            precio_texto = match.group()

    if precio_texto:
        encontrados = re.findall(r'\$[\s]*[\d\.,]+', precio_texto)
        precio = encontrados[0].strip() if encontrados else "No disponible"
    else:
        precio = "No disponible"

    # ── Imagen (solo URL, sin descargar) ──
    imagen_url = extraer_imagen_url(producto)
    if imagen_url and not imagen_url.startswith('http'):
        imagen_url = 'https://www.laanonima.com.ar' + imagen_url

    print(f"  {titulo[:38]} | {precio}")

    datos_crudos.append({
        'Producto':   titulo,
        'Precio':     precio,
        'imagen_url': imagen_url,
        '_valor':     extraer_valor_numerico(precio)
    })

# ──────────────────────────────────────────────
# PASO 2: Ordenar y quedarse con el TOP N
# ──────────────────────────────────────────────
datos_ordenados = sorted(datos_crudos, key=lambda x: x['_valor'])
datos_top       = datos_ordenados[:MAX_PRODUCTOS]

for d in datos_top:
    del d['_valor']

print(f"\n{'='*60}")
print(f"TOP {MAX_PRODUCTOS} productos (menor → mayor precio)")
print(f"{'='*60}")
for i, d in enumerate(datos_top, 1):
    print(f"  {i:02d}. {d['Producto'][:45]:<45} | {d['Precio']}")

# ──────────────────────────────────────────────
# PASO 3: Descargar imágenes SOLO del top N
# ──────────────────────────────────────────────
print(f"\nDescargando imágenes del TOP {MAX_PRODUCTOS}...")
os.makedirs(IMAGENES_DIR, exist_ok=True)
imagenes_ok = 0
imagenes_no = 0

for idx, d in enumerate(datos_top):
    imagen_url  = d.pop('imagen_url')
    imagen_path = "No disponible"

    if imagen_url and imagen_url.startswith('http') and 'data:image' not in imagen_url:
        # FIX: detectar extensión real para evitar errores en openpyxl
        ext           = extension_desde_url(imagen_url)
        # FIX: nombre_limpio con fallback si queda vacío
        nombre_limpio = re.sub(r'[^\w\s-]', '', d['Producto']).strip()[:40] or f"producto_{idx}"
        ruta_img      = os.path.join(IMAGENES_DIR, f"{nombre_limpio}{ext}")

        if descargar_imagen(imagen_url, ruta_img):
            imagen_path = ruta_img
            imagenes_ok += 1
            print(f"  ✓ {d['Producto'][:45]}")
        else:
            imagenes_no += 1
            print(f"  ✗ {d['Producto'][:45]}")
    else:
        imagenes_no += 1
        print(f"  ⚠ Sin URL: {d['Producto'][:45]}")

    d['Imagen'] = imagen_path

print(f"\n  Imágenes descargadas : {imagenes_ok}/{MAX_PRODUCTOS}")
print(f"  Imágenes fallidas    : {imagenes_no}/{MAX_PRODUCTOS}")

# ──────────────────────────────────────────────
# GUARDAR ARCHIVOS
# ──────────────────────────────────────────────
os.makedirs(OUTPUT_DIR, exist_ok=True)

df         = pd.DataFrame(datos_top)
fecha      = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M")
csv_path   = os.path.join(OUTPUT_DIR, f"anonima_{CATEGORIA}_{fecha}.csv")
excel_path = os.path.join(OUTPUT_DIR, f"anonima_{CATEGORIA}_{fecha}.xlsx")

df.to_csv(csv_path, index=False, sep=';', encoding='utf-8-sig')
print(f"\n✓ CSV guardado:   {csv_path}")

df.to_excel(excel_path, index=False, engine='openpyxl')

try:
    wb = load_workbook(excel_path)
    ws = wb.active
    ws.column_dimensions['A'].width = 50
    ws.column_dimensions['B'].width = 20
    ws.column_dimensions['C'].width = 15

    imagenes_insertadas = 0
    for fila, row_data in enumerate(datos_top, start=2):
        ws.row_dimensions[fila].height = IMAGEN_SIZE_PX
        img_path = row_data['Imagen']
        if img_path != "No disponible" and os.path.exists(img_path):
            try:
                img        = ExcelImage(img_path)
                img.width  = IMAGEN_SIZE_PX
                img.height = IMAGEN_SIZE_PX
                ws.add_image(img, f"C{fila}")
                imagenes_insertadas += 1
            except Exception as e:
                print(f"  ⚠ Error imagen fila {fila}: {e}")

    wb.save(excel_path)
    print(f"✓ Excel guardado: {excel_path}")
    print(f"  Imágenes insertadas: {imagenes_insertadas}/{len(datos_top)}")

except Exception as e:
    print(f"⚠ Error Excel: {e}")

print(f"\n{'='*60}")
print(f"¡Completado! - LA ANONIMA ({CATEGORIA.upper()})")
print(f"{'='*60}")
print(f"  Productos : {len(datos_top)}")
print(f"  Orden     : menor → mayor precio")
print(f"  CSV  → {csv_path}")
print(f"  XLSX → {excel_path}")
print(f"  Imgs → {IMAGENES_DIR}/")
