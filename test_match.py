
import os

def normalize(s):
    import re
    # Remove extension for matching if needed, but let's just do bulk
    s = s.lower()
    s = s.replace(" ", "_").replace("-", "_").replace(",", "_").replace("(", "_").replace(")", "_")
    s = re.sub(r'_+', '_', s)
    return s

def find_image(market, csv_img_filename, product_name):
    img_dir = os.path.join(r"d:\proyecto_supermercados_paginaweb\images", market)
    if not os.path.exists(img_dir):
        return None
    
    files = os.listdir(img_dir)
    
    # 1. Exact
    if csv_img_filename in files:
        return f"images/{market}/{csv_img_filename}"
    
    # 2. Normalized CSV filename
    norm_csv = normalize(csv_img_filename)
    if norm_csv:
        for f in files:
            if normalize(f) == norm_csv:
                return f"images/{market}/{f}"
    
    # 3. Product name match
    norm_name = normalize(product_name)
    for f in files:
        norm_f = normalize(f)
        if norm_name in norm_f or norm_f.startswith(norm_name):
            return f"images/{market}/{f}"
            
    return None

# Test with Chango Mas example
market = "changomas"
product = "Aceite De Girasol Cañuelas 1.5 L"
csv_file = "Aceite De Girasol Cañuelas 15 L_1.jpg"

result = find_image(market, csv_file, product)
print(f"Product: {product}")
print(f"Result: {result}")
