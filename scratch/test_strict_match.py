import os
import glob
import re
import pandas as pd

# List all files in images/laanonima
img_dir = "images/laanonima"
if os.path.exists(img_dir):
    files = os.listdir(img_dir)
else:
    files = []
print(f"Total files in images/laanonima: {len(files)}")

# Cache directory listing
dir_cache = {"laanonima": files}

# The old find_image from process_data.py
def old_normalize(s):
    if not s: return ""
    s = s.lower()
    replacements = {'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'ñ': 'n'}
    for char, replacement in replacements.items():
        s = s.replace(char, replacement)
    if '.' in s and len(s.split('.')[-1]) <= 4:
        s = '.'.join(s.split('.')[:-1])
    s = re.sub(r'[^a-z0-9]', '_', s)
    s = re.sub(r'_+', '_', s)
    return s.strip('_')

def old_find_image(market, csv_img_filename, product_name):
    img_dir_path = os.path.join("images", market)
    if not os.path.exists(img_dir_path):
        return None
    
    m_files = dir_cache.get(market, [])
    
    # 1. Exact match
    if csv_img_filename in m_files:
        return f"images/{market}/{csv_img_filename}"
    
    # 2. Normalized filename match
    norm_csv = old_normalize(csv_img_filename)
    if norm_csv:
        for f in m_files:
            if old_normalize(f) == norm_csv:
                return f"images/{market}/{f}"
    
    # 3. Aggressive normalization (remove all underscores)
    agg_norm_csv = norm_csv.replace('_', '')
    if agg_norm_csv:
        for f in m_files:
            if old_normalize(f).replace('_', '') == agg_norm_csv:
                return f"images/{market}/{f}"

    # 4. Product name match (fuzzy)
    norm_name = old_normalize(product_name)
    if norm_name:
        # Strategy A: Substring
        for f in m_files:
            norm_f = old_normalize(f)
            if (norm_name in norm_f or norm_f in norm_name) and len(norm_f) > 5:
                return f"images/{market}/{f}"
        
        # Strategy B: Word set match (at least 3 words must match if name has > 3 words)
        name_words = set(norm_name.split('_'))
        if len(name_words) >= 3:
            for f in m_files:
                f_words = set(old_normalize(f).split('_'))
                if len(name_words & f_words) >= 3:
                    return f"images/{market}/{f}"
    
    return None

# The new strict_find_image
def strict_find_image(market, csv_img_filename, product_name):
    img_dir_path = os.path.join("images", market)
    if not os.path.exists(img_dir_path):
        return None
    
    m_files = dir_cache.get(market, [])
    
    # 1. Exact match
    if csv_img_filename in m_files:
        return f"images/{market}/{csv_img_filename}"
    
    # 2. Normalized filename match
    norm_csv = old_normalize(csv_img_filename)
    if norm_csv:
        for f in m_files:
            if old_normalize(f) == norm_csv:
                return f"images/{market}/{f}"
                
    # 3. Aggressive normalization (remove all underscores)
    agg_norm_csv = norm_csv.replace('_', '')
    if agg_norm_csv:
        for f in m_files:
            if old_normalize(f).replace('_', '') == agg_norm_csv:
                return f"images/{market}/{f}"
                
    # 4. Strict semantic/fuzzy match
    norm_name = old_normalize(product_name)
    name_words = [w for w in norm_name.split('_') if len(w) > 0]
    
    stop_words = {'la', 'el', 'los', 'las', 'de', 'del', 'con', 'sin', 'para', 'y', 'o', 'x', 'en', 'un', 'una', 'laanonima', 'best'}
    units = {'g', 'gr', 'ml', 'cc', 'lt', 'l', 'kg', 'un', 'u', 'unidades', 'grs', 'kgs', 'lts'}
    
    # Extract numbers (quantities) from name
    name_numbers = set(re.findall(r'\d+', norm_name))
    
    best_file = None
    best_score = 0
    
    for f in m_files:
        norm_f = old_normalize(f)
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
            
        # Check word conflicts
        conflicts = [
            ('entera', 'descremada'),
            ('entera', 'descrem'),
            ('oliva', 'girasol'),
            ('oliva', 'mezcla'),
            ('girasol', 'mezcla'),
            ('arroz', 'pan'),
            ('arroz', 'fideos'),
            ('leche', 'agua'),
            ('leche', 'queso'),
            ('hamburguesa', 'picadillo'),
            ('hamburguesas', 'picadillo'),
            ('servilletas', 'bolsa'),
            ('servilleta', 'bolsa'),
            ('papel', 'servilletas'),
            ('hamburguesa', 'medallon'),
            ('hamburguesas', 'medallon'),
            ('manzana', 'pomelo'),
            ('manzana', 'naranja'),
            ('pomelo', 'naranja'),
            ('cerveza', 'terma'),
            ('cerveza', 'amargo'),
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

# Read all CSV/Excel files for laanonima and check
csv_files = glob.glob('datos/laanonima/*.csv') + glob.glob('datos/laanonima/*.xlsx')
total_checked = 0
differences = 0

for filepath in csv_files:
    filename = os.path.basename(filepath)
    try:
        if filepath.endswith('.csv'):
            try:
                df = pd.read_csv(filepath, sep=';', encoding='utf-8-sig')
            except:
                df = pd.read_csv(filepath, sep=';', encoding='latin-1')
        else:
            df = pd.read_excel(filepath)
            
        cols = {col.lower().strip().replace('\ufeff', ''): col for col in df.columns}
        prod_col = cols.get('producto')
        img_col = cols.get('imagen') or cols.get('image') or cols.get('archivo imagen local') or cols.get('url imagen')
        
        if not prod_col or not img_col:
            continue
            
        for _, row in df.iterrows():
            name = str(row[prod_col]).strip()
            name = re.sub(r'\s+', ' ', name)
            
            img_path_raw = str(row[img_col]) if img_col and pd.notna(row[img_col]) else ""
            img_filename = os.path.basename(img_path_raw.replace('\\', '/'))
            
            old_res = old_find_image('laanonima', img_filename, name)
            new_res = strict_find_image('laanonima', img_filename, name)
            
            total_checked += 1
            if old_res != new_res:
                differences += 1
                print(f"File: {filename}")
                print(f"Product : {name}")
                print(f"CSV Img : {img_filename}")
                print(f"  Old   : {old_res}")
                print(f"  New   : {new_res}")
                print("-" * 60)
    except Exception as e:
        print(f"Error processing {filename}: {e}")

print(f"Total checked products: {total_checked}")
print(f"Total differences found: {differences}")
