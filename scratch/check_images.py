import json, os, re
from pathlib import Path

def normalize(name):
    replacements = [
        ('á','a'),('é','e'),('í','i'),('ó','o'),('ú','u'),('ñ','n'),
        ('Á','a'),('É','e'),('Í','i'),('Ó','o'),('Ú','u'),('Ñ','n'),
        ('ü','u'),('Ü','u'),
    ]
    for src, dst in replacements:
        name = name.replace(src, dst)
    return re.sub(r'[^\w]', '_', name.lower()).strip('_')

def similarity(product_name, image_filename):
    """Score de similitud entre nombre de producto e imagen"""
    pn_words = {w for w in normalize(product_name).split('_') if len(w) > 2}
    fn_words = {w for w in normalize(image_filename.replace('.webp','').replace('.jpg','')).split('_') if len(w) > 2}
    if not pn_words or not fn_words:
        return 0.0
    intersection = pn_words & fn_words
    return len(intersection) / max(len(pn_words), len(fn_words))

with open('products.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

anonima = [p for p in data if p.get('market') == 'aura']
print(f"Total productos La Anonima (market=aura): {len(anonima)}")
print(f"Con imagen laanonima: {sum(1 for p in anonima if 'laanonima' in p.get('image',''))}")
print(f"Sin imagen: {sum(1 for p in anonima if not p.get('image'))}")

print("\n=== ANALISIS DE COINCIDENCIA IMAGEN/PRODUCTO ===\n")

bad_matches = []
good_matches = []
no_image = []

for p in anonima:
    img = p.get('image', '')
    name = p.get('name', '')
    
    if not img:
        no_image.append(p)
        continue
    
    img_filename = Path(img).name
    score = similarity(name, img_filename)
    
    if score < 0.3:
        bad_matches.append((score, name, img_filename))
    else:
        good_matches.append((score, name, img_filename))

print(f"Matches buenos (score >= 0.3): {len(good_matches)}")
print(f"Matches malos  (score <  0.3): {len(bad_matches)}")
print(f"Sin imagen: {len(no_image)}")

print("\n--- PRODUCTOS CON IMAGEN POSIBLEMENTE INCORRECTA ---")
for score, name, img in sorted(bad_matches, key=lambda x: x[0]):
    print(f"  [{score:.0%}] PRODUCTO: {name[:55]}")
    print(f"         IMAGEN:   {img[:65]}")
    print()
