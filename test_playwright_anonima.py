# test_playwright_anonima.py — test rapido de una categoria
import sys, re, time
from pathlib import Path
from playwright.sync_api import sync_playwright

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

IMAGES_DIR   = Path("images/laanonima")
PAGE_TIMEOUT = 25000

corrupt_files = [f for f in IMAGES_DIR.glob("*.jpg") if f.stat().st_size <= 1000]
print(f"Corruptas encontradas: {len(corrupt_files)}")
print("Probando con categoria: aceites")
print("=" * 50)

with sync_playwright() as pw:
    browser = pw.chromium.launch(headless=True)
    ctx = browser.new_context(
        viewport={"width": 1400, "height": 900},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    )
    page = ctx.new_page()
    page.set_default_timeout(PAGE_TIMEOUT)

    print("Cargando pagina...")
    try:
        page.goto("https://www.laanonima.com.ar/aceite/n3_604/", wait_until="load", timeout=PAGE_TIMEOUT)
        print("Pagina cargada (load OK)")
    except Exception as e:
        print(f"Error cargando: {e}")
        browser.close()
        exit(1)

    # Cerrar popup si aparece
    try:
        page.wait_for_selector("#btnCerrarNotificacion img", timeout=3000)
        page.click("#btnCerrarNotificacion img")
        print("Popup cerrado")
    except Exception:
        pass

    # Scroll para lazy loading
    print("Scrolling para lazy loading...")
    for i in range(15):
        page.evaluate("window.scrollBy(0, 600)")
        page.wait_for_timeout(250)
    page.evaluate("window.scrollTo(0, 0)")
    page.wait_for_timeout(1000)

    # Extraer informacion de imagenes
    print("Extrayendo imagenes del DOM...")
    data = page.evaluate("""
        () => {
            const results = [];
            const items = document.querySelectorAll('div.producto-item, div.producto.item, [class*="producto"]');
            for (const item of items) {
                const titleEl = item.querySelector('[class*="titulo"], h2, h3, h4, .nombre');
                const title = titleEl ? titleEl.textContent.trim() : '(sin titulo)';
                
                let imgEl = item.querySelector('div.imagen img');
                if (!imgEl) imgEl = item.querySelector('img');
                
                const src     = imgEl ? (imgEl.getAttribute('src')      || '') : '';
                const dataSrc = imgEl ? (imgEl.getAttribute('data-src') || '') : '';
                const alt     = imgEl ? (imgEl.getAttribute('alt')      || '') : '';

                results.push({ title, src, dataSrc, alt });
            }
            return results.slice(0, 12);
        }
    """)

    print(f"Productos encontrados: {len(data)}")
    print()
    for d in data:
        print(f"  Titulo  : {d['title'][:50]}")
        print(f"  src     : {d['src'][:80]}")
        print(f"  data-src: {d['dataSrc'][:80]}")
        print(f"  alt     : {d['alt'][:50]}")
        print()

    # Guardar HTML para debug si no hay productos
    if not data:
        html = page.content()
        with open("debug_aceites.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("HTML guardado en debug_aceites.html para inspeccion")

    browser.close()

print("=" * 50)
print("Test completado")
