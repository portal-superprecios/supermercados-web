import json, os, re
from pathlib import Path

def normalize(s):
    if not s: return ""
    s = s.lower()
    replacements = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n',
                    'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u', 'Ñ': 'n',
                    'ü': 'u', 'Ü': 'u'}
    for char, replacement in replacements.items():
        s = s.replace(char, replacement)
    if '.' in s and len(s.split('.')[-1]) <= 5:
        s = '.'.join(s.split('.')[:-1])
    s = re.sub(r'[^a-z0-9]', '_', s)
    s = re.sub(r'_+', '_', s)
    return s.strip('_')

# Load laanonima_web images (the real .webp ones)
web_dir = Path("images/laanonima_web")
web_files = list(web_dir.glob("*.webp"))
print(f"Total .webp en laanonima_web: {len(web_files)}")

# Build normalized index of web images
web_index = {}  # normalized_name -> filename
for f in web_files:
    norm = normalize(f.name)
    web_index[norm] = f.name

# Load products.json
with open('products.json', 'r', encoding='utf-8') as fp:
    data = json.load(fp)

anonima = [p for p in data if p.get('market') == 'aura']
print(f"Productos La Anonima: {len(anonima)}")

# For each anonima product, try to find best match in laanonima_web
fixed = 0
unchanged = 0
no_match = 0

results = []
for p in anonima:
    name = p.get('name', '')
    current_img = p.get('image', '')
    
    norm_name = normalize(name)
    name_words = set(w for w in norm_name.split('_') if len(w) > 2 and not w.isdigit())
    
    stop_words = {'la', 'los', 'las', 'del', 'con', 'sin', 'para', 'laanonima', 'best', 'anonima'}
    name_words -= stop_words
    
    if not name_words:
        results.append(('NO_WORDS', name, current_img, ''))
        no_match += 1
        continue
    
    best_file = None
    best_score = 0.0
    
    for webp_name, orig_name in zip([normalize(f.name) for f in web_files], [f.name for f in web_files]):
        f_words = set(w for w in webp_name.split('_') if len(w) > 2 and not w.isdigit()) - stop_words
        if not f_words:
            continue
        
        intersection = name_words & f_words
        score = len(intersection) / max(len(name_words), len(f_words))
        
        if score > best_score:
            best_score = score
            best_file = orig_name
    
    if best_score >= 0.4:
        new_img = f"images/laanonima_web/{best_file}"
        if new_img != current_img:
            results.append(('FIXED', name, current_img, new_img, best_score))
            fixed += 1
        else:
            results.append(('OK', name, current_img, new_img, best_score))
            unchanged += 1
    else:
        results.append(('NO_MATCH', name, current_img, best_file or '', best_score if best_file else 0))
        no_match += 1

print(f"\nResultados:")
print(f"  Pueden corregirse: {fixed}")
print(f"  Ya correctos:     {unchanged}")
print(f"  Sin match:        {no_match}")

print("\n=== MUESTRAS DE CORRECCIONES ===")
for r in [x for x in results if x[0] == 'FIXED'][:15]:
    print(f"[{r[4]:.0%}] PROD: {r[1][:50]}")
    print(f"       ANTES: {r[2][-55:]}")
    print(f"       NUEVO: {r[3][-55:]}")
    print()

print("\n=== SIN MATCH ===")
for r in [x for x in results if x[0] == 'NO_MATCH'][:10]:
    print(f"[{r[4]:.0%}] PROD: {r[1][:55]}")
    print(f"       IMG ACTUAL: {r[2][-55:]}")
    if r[3]:
        print(f"       MEJOR CAND: {r[3][:55]}")
    print()
