import json, os
from pathlib import Path

with open('products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

anonima = [p for p in data if p.get('market') == 'aura']

unsplash = [p for p in anonima if 'unsplash' in p.get('image','')]
laanonima_webp = [p for p in anonima if 'laanonima' in p.get('image','') and '.webp' in p.get('image','')]
laanonima_jpg = [p for p in anonima if 'laanonima' in p.get('image','') and '.jpg' in p.get('image','')]
no_img = [p for p in anonima if not p.get('image')]

print(f"Productos La Anonima (market=aura): {len(anonima)}")
print(f"Con imagen Unsplash (fallback): {len(unsplash)}")
print(f"Con imagen .webp laanonima: {len(laanonima_webp)}")
print(f"Con imagen .jpg laanonima: {len(laanonima_jpg)}")
print(f"Sin imagen: {len(no_img)}")

print()
print("=== Ejemplos .webp (probablemente imagen equivocada) ===")
for p in laanonima_webp[:8]:
    nombre = p['name']
    img = p['image']
    img_file = Path(img).name
    # Check if the product name is in the image name
    print(f"PROD: {nombre[:55]}")
    print(f"IMG:  {img_file[:65]}")
    print()

print()
print("=== Ejemplos con imagen CORRECTA (.jpg existente) ===")
for p in laanonima_jpg[:5]:
    nombre = p['name']
    img = p['image']
    img_file = Path(img).name
    img_exists = os.path.exists(img)
    print(f"PROD: {nombre[:55]}")
    print(f"IMG:  {img_file[:65]} | existe: {img_exists}")
    print()
