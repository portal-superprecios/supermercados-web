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
    'vea': 'lumina'
}

all_products = []
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

    # 4. Product name match (fuzzy)
    norm_name = normalize(product_name)
    if norm_name:
        # Strategy A: Substring
        for f in files:
            norm_f = normalize(f)
            if (norm_name in norm_f or norm_f in norm_name) and len(norm_f) > 5:
                return f"images/{market}/{f}"
        
        # Strategy B: Word set match (at least 3 words must match if name has > 3 words)
        name_words = set(norm_name.split('_'))
        if len(name_words) >= 3:
            for f in files:
                f_words = set(normalize(f).split('_'))
                if len(name_words & f_words) >= 3:
                    return f"images/{market}/{f}"
    
    return None

def process_file(file_path, market):
    global id_counter
    filename = os.path.basename(file_path).lower()
    category = 'all'
    for key, val in categories_map.items():
        if key in filename:
            category = val
            break
    
    if category == 'all' and 'carre_aguas' in filename: category = 'aguas'

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
        img_col = cols.get('imagen') or cols.get('image')

        if not prod_col or not price_col:
            return

        for _, row in df.iterrows():
            name = str(row[prod_col]).strip()
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
            
            all_products.append({
                "id": id_counter,
                "name": name,
                "price": price,
                "market": market_id,
                "category": category,
                "image": image_url,
                "history": history
            })
            id_counter += 1
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

# Process all folders
for market in ['carrefour', 'changomas', 'laanonima', 'vea']:
    market_dir = os.path.join(base_path, market)
    if os.path.exists(market_dir):
        files = glob.glob(os.path.join(market_dir, "*.csv")) + glob.glob(os.path.join(market_dir, "*.xlsx"))
        for f in files:
            process_file(f, market)

# Save as JSON
with open(output_file, 'w', encoding='utf-8') as f:
    json.dump(all_products, f, ensure_ascii=False, indent=4)

# Save as JS (with a global variable for CORS-free local usage)
with open(output_js, 'w', encoding='utf-8') as f:
    f.write(f"const allProductsData = {json.dumps(all_products, ensure_ascii=False, indent=4)};")

print(f"Done! Processed {len(all_products)} products.")
