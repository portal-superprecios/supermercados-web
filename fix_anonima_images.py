# ══════════════════════════════════════════════════════════════════════
#  FIX IMÁGENES LA ANÓNIMA v3 — JSON-LD Edition
#  
#  Las imágenes reales están en los datos JSON-LD (<script type="application/ld+json">)
#  del HTML de cada categoría. No necesitamos Playwright ni lazy loading.
#  Usamos requests directamente: más rápido y confiable.
#
#  Uso: python fix_anonima_images.py
# ══════════════════════════════════════════════════════════════════════

import sys
import re
import json
import time
import requests
from pathlib import Path

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# ──────────────────────────────────────────────
# CONFIGURACIÓN
# ──────────────────────────────────────────────
IMAGES_DIR   = Path("images/laanonima")
MAX_SIZE     = 1000   # bytes — archivos más pequeños → corruptos
TIMEOUT      = 15
CODIGO_POSTAL = "9100"

# URLs de categorías de La Anónima
CATEGORY_URLS = {
    "aceites":          "https://www.laanonima.com.ar/aceite/n3_604/",
    "aguas":            "https://www.laanonima.com.ar/aguas-y-bebidas/aguas/n3_613/",
    "arroz":            "https://www.laanonima.com.ar/almacen/arroz/n3_615/",
    "carne_vacuna":     "https://www.laanonima.com.ar/carnes-y-aves/carne-vacuna/n3_622/",
    "cervezas":         "https://www.laanonima.com.ar/aguas-y-bebidas/cervezas/n3_616/",
    "fernet_aperitivos":"https://www.laanonima.com.ar/aguas-y-bebidas/aperitivos-y-amargos/n3_618/",
    "fiambres":         "https://www.laanonima.com.ar/lacteos-y-frescos/fiambres/n3_640/",
    "frutas_congeladas":"https://www.laanonima.com.ar/congelados/frutas-y-verduras-congeladas/n3_629/",
    "hamburguesas":     "https://www.laanonima.com.ar/congelados/hamburguesas-y-milanesas/n3_626/",
    "harinas":          "https://www.laanonima.com.ar/almacen/harinas/n3_637/",
    "isotonicas":       "https://www.laanonima.com.ar/aguas-y-bebidas/isotonicos-y-energizantes/n3_617/",
    "leches":           "https://www.laanonima.com.ar/lacteos-y-frescos/leches/n3_639/",
    "mascotas_perros":  "https://www.laanonima.com.ar/mascotas/alimento-seco-perros/n3_643/",
    "papeles":          "https://www.laanonima.com.ar/limpieza-y-hogar/papel-higienico-y-servilletas/n3_645/",
    "panales":          "https://www.laanonima.com.ar/bebe/panales/n3_619/",
    "pollos":           "https://www.laanonima.com.ar/carnes-y-aves/pollo/n3_623/",
    "postres":          "https://www.laanonima.com.ar/lacteos-y-frescos/postres-y-helados/n3_641/",
    "quesos":           "https://www.laanonima.com.ar/lacteos-y-frescos/quesos/n3_638/",
    "sal":              "https://www.laanonima.com.ar/almacen/sal/n3_649/",
    "sintacc":          "https://www.laanonima.com.ar/sin-tacc/n3_660/",
    "snacks":           "https://www.laanonima.com.ar/almacen/snacks-y-aperitivos/n3_614/",
}

# ──────────────────────────────────────────────
# HELPERS
# ──────────────────────────────────────────────

def is_corrupt(filepath: Path) -> bool:
    """Detecta archivos SVG/XML disfrazados de JPG."""
    if filepath.stat().st_size > MAX_SIZE:
        return False
    try:
        with open(filepath, 'rb') as f:
            header = f.read(10)
        return header[:1] == b'<'
    except Exception:
        return False


def normalize(name: str) -> str:
    """Normaliza texto para comparación fuzzy."""
    for src, dst in [
        ('\u00e1','a'),('\u00e9','e'),('\u00ed','i'),('\u00f3','o'),('\u00fa','u'),('\u00f1','n'),
        ('\u00c1','a'),('\u00c9','e'),('\u00cd','i'),('\u00d3','o'),('\u00da','u'),('\u00d1','n'),
        ('\u00fc','u'),('\u00dc','u'),
    ]:
        name = name.replace(src, dst)
    return re.sub(r'[^\w]', '_', name.lower()).strip('_')


def similarity(filename: str, product_name: str) -> float:
    """Score de similitud entre nombre de archivo y nombre de producto."""
    fn_words = {w for w in normalize(filename.replace('.jpg', '')).split('_') if len(w) > 2}
    pn_words = {w for w in normalize(product_name).split('_') if len(w) > 2}
    if not pn_words:
        return 0.0
    return len(fn_words & pn_words) / len(pn_words)


def extract_products_from_jsonld(html: str) -> list:
    """
    Extrae lista de {'name': ..., 'image': ...} del JSON-LD
    del tipo ItemList/Product embebido en el HTML.
    """
    products = []
    # Encontrar todos los bloques <script type="application/ld+json">
    pattern = r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>'
    for block in re.findall(pattern, html, re.DOTALL | re.IGNORECASE):
        try:
            data = json.loads(block.strip())
            # ItemList con productos
            if data.get('@type') == 'ItemList':
                for entry in data.get('itemListElement', []):
                    item = entry.get('item', {})
                    name  = item.get('name', '').strip()
                    image = item.get('image', '').strip()
                    if name and image:
                        products.append({'name': name, 'image': image})
            # Producto individual
            elif data.get('@type') == 'Product':
                name  = data.get('name', '').strip()
                image = data.get('image', '').strip()
                if name and image:
                    products.append({'name': name, 'image': image})
        except Exception:
            continue
    return products


def fetch_page(url: str, session: requests.Session) -> str | None:
    """Descarga el HTML de una URL."""
    try:
        resp = session.get(url, timeout=20)
        if resp.status_code == 200:
            return resp.text
        print(f"    HTTP {resp.status_code}")
        return None
    except Exception as e:
        print(f"    Error al cargar pagina: {e}")
        return None


def download_image(url: str, dest: Path, session: requests.Session) -> bool:
    """Descarga imagen y verifica que sea real (JPEG/PNG/WEBP)."""
    try:
        resp = session.get(url, timeout=TIMEOUT)
        if resp.status_code != 200:
            print(f"    HTTP {resp.status_code}: {url[:60]}")
            return False
        content = resp.content
        # Rechazar SVGs
        if content[:1] == b'<':
            print(f"    SVG devuelto (no es imagen)")
            return False
        # Verificar que sea imagen real
        is_valid = (
            content[:2] == b'\xff\xd8' or   # JPEG
            content[:4] == b'\x89PNG' or    # PNG
            (len(content) >= 12 and content[8:12] == b'WEBP')  # WEBP
        )
        if not is_valid and len(content) < 3000:
            print(f"    Formato no reconocido y muy pequeno ({len(content)} bytes)")
            return False
        with open(dest, 'wb') as f:
            f.write(content)
        return True
    except Exception as e:
        print(f"    Error: {e}")
        return False


# ──────────────────────────────────────────────
# PASO 1: Detectar archivos corruptos
# ──────────────────────────────────────────────
print("=" * 60)
print("FIX IMAGENES LA ANONIMA v3 - JSON-LD Edition")
print("=" * 60)

corrupt_files = [f for f in IMAGES_DIR.glob("*.jpg") if is_corrupt(f)]
print(f"\nTotal imagenes   : {len(list(IMAGES_DIR.glob('*.jpg')))}")
print(f"Corruptas (SVG)  : {len(corrupt_files)}")

if not corrupt_files:
    print("\nNo hay imagenes corruptas! Todo OK.")
    sys.exit(0)

remaining    = set(corrupt_files)
fixed_count  = 0
failed_count = 0

# Sesion HTTP con headers para parecer browser
session = requests.Session()
session.headers.update({
    'User-Agent': (
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) '
        'AppleWebKit/537.36 (KHTML, like Gecko) '
        'Chrome/120.0.0.0 Safari/537.36'
    ),
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'es-AR,es;q=0.9',
    'Referer': 'https://www.laanonima.com.ar/',
})

# Configurar cookie de sucursal (CP 9100 = Comodoro Rivadavia)
# Esto evita el popup de código postal
session.cookies.set('sucursal', '9100', domain='www.laanonima.com.ar')

# ──────────────────────────────────────────────
# PASO 2: Scrapear cada categoría y reparar
# ──────────────────────────────────────────────
print("\nIniciando reparacion por categoria (via JSON-LD, sin browser)...")
print("-" * 60)

for cat_name, cat_url in CATEGORY_URLS.items():
    if not remaining:
        print("\nTodas las imagenes reparadas!")
        break

    print(f"\n[{cat_name}] {len(remaining)} imagenes pendientes")
    print(f"  URL: {cat_url}")

    html = fetch_page(cat_url, session)
    if not html:
        print(f"  ERROR: no se pudo cargar la pagina")
        continue

    products = extract_products_from_jsonld(html)
    print(f"  Productos en JSON-LD: {len(products)}")

    if not products:
        print(f"  Sin productos en JSON-LD, saltando...")
        continue

    matched_in_cat = 0
    for prod in products:
        prod_name = prod['name']
        img_url   = prod['image']

        if not img_url or not prod_name:
            continue

        # Buscar mejor match entre archivos corruptos
        best_file  = None
        best_score = 0.0

        for corrupt_file in list(remaining):
            score = similarity(corrupt_file.name, prod_name)
            if score > best_score:
                best_score = score
                best_file  = corrupt_file

        if best_file and best_score >= 0.45:
            print(f"  MATCH ({best_score:.0%}): {prod_name[:45]}")
            print(f"    archivo: {best_file.name[:55]}")
            print(f"    imagen : {img_url[:70]}")

            if download_image(img_url, best_file, session):
                sz = best_file.stat().st_size
                print(f"    OK -> {sz:,} bytes")
                remaining.discard(best_file)
                fixed_count += 1
                matched_in_cat += 1
            else:
                failed_count += 1

    print(f"  Reparadas en esta categoria: {matched_in_cat}")
    time.sleep(0.3)   # pausa corta entre categorias

# ──────────────────────────────────────────────
# RESUMEN
# ──────────────────────────────────────────────
print(f"\n{'='*60}")
print("RESUMEN FINAL")
print(f"{'='*60}")
print(f"  Reparadas exitosamente : {fixed_count}")
print(f"  Descarga fallida       : {failed_count}")
print(f"  Sin match encontrado   : {len(remaining)}")

if remaining:
    print(f"\nArchivos sin reparar ({len(remaining)}):")
    for f in sorted(remaining, key=lambda x: x.name):
        print(f"  - {f.name}")
    print("\nEstos productos usaran imagen de fallback en la web.")

if fixed_count > 0:
    print(f"\nPROXIMO PASO: Regenerar products.js")
    print("  python process_data.py")

print(f"\n{'='*60}")
print("Completado!")
