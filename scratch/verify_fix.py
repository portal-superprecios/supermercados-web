import json, os
from pathlib import Path

with open('products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

anonima = [p for p in data if p.get('market') == 'aura']
print(f"Productos La Anonima: {len(anonima)}")

# Categorize images
unsplash = []
webp_good = []
jpg_valid = []
jpg_corrupt = []
missing = []

for p in anonima:
    img = p.get('image', '')
    name = p.get('name', '')
    
    if not img:
        missing.append(p)
        continue
    
    if 'unsplash' in img:
        unsplash.append(p)
        continue
    
    if img.endswith('.webp'):
        img_path = Path(img)
        if img_path.exists() and img_path.stat().st_size > 1000:
            webp_good.append(p)
        else:
            missing.append(p)
        continue
    
    if img.endswith('.jpg'):
        img_path = Path(img)
        if img_path.exists():
            sz = img_path.stat().st_size
            if sz <= 1000:
                # Read first bytes to check if it's an SVG/XML
                with open(img_path, 'rb') as fp:
                    header = fp.read(5)
                if header[:1] == b'<':
                    jpg_corrupt.append((p, sz))
                else:
                    jpg_valid.append(p)
            else:
                jpg_valid.append(p)
        else:
            missing.append(p)
        continue

print(f"\n=== RESUMEN ===")
print(f"  .webp validos (laanonima_web): {len(webp_good)}")
print(f"  .jpg validos:                  {len(jpg_valid)}")
print(f"  .jpg CORRUPTOS (SVG disfrazado): {len(jpg_corrupt)}")
print(f"  Unsplash (fallback generico):  {len(unsplash)}")
print(f"  Sin imagen / no encontrada:    {len(missing)}")

print(f"\n=== PRODUCTOS CON JPG CORRUPTO ===")
for p, sz in jpg_corrupt:
    print(f"  {p['name'][:55]}")
    print(f"  {p['image'][-50:]} ({sz} bytes)")
    print()
