import os
import pandas as pd
import json
import glob
import re
import datetime

base_path = "datos"
output_file = "products.json"
output_js = "products.js"


categories_map = {
    'aceite': 'aceite',
    'aguas': 'aguas',
    'arroz': 'arroz',
    'carne': 'carnes',
    'cerveza': 'cervezas',
    'gaseosa': 'gaseosas',
    'harina': 'harinas',
    'jugo': 'jugos',
    'queso': 'fiambres',
    'sal': 'sal',
    'snacks': 'snacks',
    'cereal': 'cereales',
    'hamburguesa': 'hamburguesas',
    'isotonica': 'isotonicas',
    'limpieza': 'limpieza',
    'perro': 'perros',
    'gato': 'gatos',
    'mascota': 'mascotas',
    'pañal': 'pañales',
    'papel': 'papeles',
    'fiambre': 'fiambres',
    'leche': 'leches',
    'energizante': 'isotonicas',
    'panales': 'pañales'
}
market_map = {
    'carrefour': 'zenith',
    'changomas': 'terra',
    'laanonima': 'aura',
    'vea': 'lumina',
    'maxiconsumo': 'maxiconsumo'
}

processed_products = {}
id_counter = 1
dir_cache = {}

# Cargar historial existente si hay
existing_data = {}
if os.path.exists(output_file):
    try:
        with open(output_file, 'r', encoding='utf-8') as f:
            old_products = json.load(f)
            for p in old_products:
                # Usar una combinación de nombre y mercado como clave única
                key = f"{p['name']}_{p['market']}"
                existing_data[key] = p
    except Exception as e:
        print(f"No se pudo cargar el historial previo: {e}")

today_str = datetime.datetime.now().strftime("%Y-%m-%d")

def normalize(s):
    if not s: return ""
    s = s.lower()
    # Replace accented characters
    replacements = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n'}
    for char, replacement in replacements.items():
        s = s.replace(char, replacement)
    
    # Remove file extension if present
    if '.' in s and len(s.split('.')[-1]) <= 4:
        s = '.'.join(s.split('.')[:-1])
    
    # Replace non-alphanumeric with underscore, then collapse
    s = re.sub(r'[^a-z0-9]', '_', s)
    s = re.sub(r'_+', '_', s)
    return s.strip('_')

def find_image(market, csv_img_filename, product_name):
    img_dir = os.path.join("images", market)

    if not os.path.exists(img_dir):
        return None
    
    if market not in dir_cache:
        dir_cache[market] = os.listdir(img_dir)
    
    files = dir_cache[market]
    
    # 1. Exact match
    if csv_img_filename in files:
        return f"images/{market}/{csv_img_filename}"
    
    # 2. Normalized filename match
    norm_csv = normalize(csv_img_filename)
    if norm_csv:
        for f in files:
            if normalize(f) == norm_csv:
                return f"images/{market}/{f}"
    
    # 3. Aggressive normalization (remove all underscores)
    agg_norm_csv = norm_csv.replace('_', '')
    if agg_norm_csv:
        for f in files:
            if normalize(f).replace('_', '') == agg_norm_csv:
                return f"images/{market}/{f}"

    # 4. Strict semantic/fuzzy match (only if we have a very close match)
    norm_name = normalize(product_name)
    name_words = [w for w in norm_name.split('_') if len(w) > 0]
    
    stop_words = {'la', 'el', 'los', 'las', 'de', 'del', 'con', 'sin', 'para', 'y', 'o', 'x', 'en', 'un', 'una', 'laanonima', 'best'}
    units = {'g', 'gr', 'ml', 'cc', 'lt', 'l', 'kg', 'un', 'u', 'unidades', 'grs', 'kgs', 'lts'}
    
    # Extract numbers (quantities) from name
    name_numbers = set(re.findall(r'\d+', norm_name))
    
    best_file = None
    best_score = 0
    
    for f in files:
        norm_f = normalize(f)
        f_words = [w for w in norm_f.split('_') if len(w) > 0]
        
        # Check numbers conflict
        f_numbers = set(re.findall(r'\d+', norm_f))
        
        significant_name_nums = name_numbers - {'0', '00', '000', '0000'}
        significant_f_nums = f_numbers - {'0', '00', '000', '0000'}
        
        has_number_conflict = False
        if significant_name_nums and significant_f_nums:
            if not (significant_name_nums & significant_f_nums):
                has_number_conflict = True
                
        if has_number_conflict:
            continue
            
        # Check core product word conflicts
        conflicts = [
            ('entera', 'descremada'), ('entera', 'descrem'),
            ('oliva', 'girasol'), ('oliva', 'mezcla'), ('girasol', 'mezcla'),
            ('arroz', 'pan'), ('arroz', 'fideos'),
            ('leche', 'agua'), ('leche', 'queso'),
            ('hamburguesa', 'picadillo'), ('hamburguesas', 'picadillo'),
            ('servilletas', 'bolsa'), ('servilleta', 'bolsa'),
            ('papel', 'servilletas'),
            ('hamburguesa', 'medallon'), ('hamburguesas', 'medallon'),
            ('manzana', 'pomelo'), ('manzana', 'naranja'), ('pomelo', 'naranja'),
            ('cerveza', 'terma'), ('cerveza', 'amargo'),
            ('pollo', 'arroz'),
        ]
        has_word_conflict = False
        for w1, w2 in conflicts:
            if (w1 in name_words and w2 in f_words) or (w2 in name_words and w1 in f_words):
                has_word_conflict = True
                break
        if has_word_conflict:
            continue
            
        # Count matching non-stop, non-unit, non-numeric words
        name_core_words = set(w for w in name_words if not w.isdigit()) - stop_words - units
        f_core_words = set(w for w in f_words if not w.isdigit()) - stop_words - units
        
        if not name_core_words or not f_core_words:
            continue
            
        intersection = name_core_words & f_core_words
        
        # Must match at least 2 core words or 1 if it's the only core word
        min_match = min(2, len(name_core_words), len(f_core_words))
        if len(intersection) >= min_match:
            score = len(intersection)
            if score > best_score:
                best_score = score
                best_file = f
                
    if best_file:
        return f"images/{market}/{best_file}"
        
    return None

def determine_category(product_name, filename):
    name_lower = product_name.lower()
    # 1. Buscar en el nombre del producto primero
    for key, val in categories_map.items():
        if key in name_lower:
            return val
    # 2. Si no se encuentra, buscar en el nombre del archivo
    filename_lower = filename.lower()
    for key, val in categories_map.items():
        if key in filename_lower:
            return val
    # Caso especial heredado
    if 'carre_aguas' in filename_lower:
        return 'aguas'
    return 'all'

def process_file(file_path, market):
    global id_counter
    filename = os.path.basename(file_path).lower()

    try:
        if file_path.endswith('.csv'):
            try:
                df = pd.read_csv(file_path, sep=';', encoding='utf-8-sig')
            except:
                df = pd.read_csv(file_path, sep=';', encoding='latin-1')
        else:
            df = pd.read_excel(file_path)
        
        cols = {col.lower().strip().replace('\ufeff', ''): col for col in df.columns}
        prod_col = cols.get('producto')
        price_col = cols.get('precio')
        img_col = cols.get('imagen') or cols.get('image') or cols.get('archivo imagen local') or cols.get('url imagen')

        if not prod_col or not price_col:
            return

        for _, row in df.iterrows():
            name = str(row[prod_col]).strip()
            # Normalizar múltiples espacios internos a un solo espacio
            name = re.sub(r'\s+', ' ', name)
            
            price_str = str(row[price_col])
            price_clean = price_str.replace('$', '').replace('\xa0', '').replace('.', '').replace(',', '.').strip()
            try:
                price = float(price_clean)
            except:
                price = 0.0
            
            img_path_raw = str(row[img_col]) if img_col and pd.notna(row[img_col]) else ""
            img_filename = os.path.basename(img_path_raw.replace('\\', '/'))

            image_url = find_image(market, img_filename, name)
            
            if not image_url:
                image_url = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80"
            
            market_id = market_map.get(market, market)
            prod_key = f"{name}_{market_id}"
            
            category = determine_category(name, filename)
            
            if prod_key in processed_products:
                # Si ya existe en esta corrida, actualizamos la categoría si es genérica ('all')
                existing_p = processed_products[prod_key]
                if existing_p['category'] == 'all' and category != 'all':
                    existing_p['category'] = category
                continue
            
            # Manejo del Historial
            history = []
            if prod_key in existing_data:
                # Recuperar historial
                history = existing_data[prod_key].get('history', [])
                
                # Si el historial está vacío o el último precio es diferente, lo agregamos
                if not history or history[-1]['price'] != price:
                    history.append({
                        "date": today_str,
                        "price": price
                    })
            else:
                # Es un producto nuevo, iniciamos su historial
                history = [{
                    "date": today_str,
                    "price": price
                }]
            
            processed_products[prod_key] = {
                "id": id_counter,
                "name": name,
                "price": price,
                "market": market_id,
                "category": category,
                "image": image_url,
                "history": history
            }
            id_counter += 1
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

# Process all folders
for market in ['carrefour', 'changomas', 'laanonima', 'vea', 'maxiconsumo']:
    market_dir = os.path.join(base_path, market)
    if os.path.exists(market_dir):
        files = glob.glob(os.path.join(market_dir, "*.csv")) + glob.glob(os.path.join(market_dir, "*.xlsx"))
        for f in files:
            process_file(f, market)

# Convert to list for saving
all_products = list(processed_products.values())

# Save as JSON
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(all_products, f, ensure_ascii=False, indent=4)

# Save as JS (with a global variable for CORS-free local usage)
with open(output_js, 'w', encoding='utf-8') as f:
    f.write(f"const allProductsData = {json.dumps(all_products, ensure_ascii=False, indent=4)};")

print(f"Done! Processed {len(all_products)} products.")
