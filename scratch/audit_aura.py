import json
import os

with open('products.json', encoding='utf-8') as f:
    products = json.load(f)

aura_products = [p for p in products if p['market'] == 'aura']
print(f"Total Aura products: {len(aura_products)}")

mismatches = []
for p in aura_products:
    img_path = p['image']
    if not img_path:
        continue
    img_name = os.path.basename(img_path).lower()
    prod_name = p['name'].lower()
    
    # Simple check: are some of the main words in the product name also in the image filename?
    # Let's clean up words and see
    import re
    def get_words(s):
        s = s.replace('_', ' ').replace('-', ' ').replace('.', ' ').replace(',', ' ')
        # Remove accents
        for src, dst in [('á','a'), ('é','e'), ('í','i'), ('ó','o'), ('ú','u'), ('ñ','n')]:
            s = s.replace(src, dst)
        return set(w for w in re.sub(r'[^\w\s]', '', s).split() if len(w) > 2)

    prod_words = get_words(prod_name)
    img_words = get_words(img_name.replace('.webp', '').replace('.jpg', ''))

    # If they don't share any meaningful words (except maybe common ones like "laanonima", "best"), print it
    common_words = {'laanonima', 'best', 'x', 'con', 'sin', 'para', 'del', 'los', 'congelados', 'fresco', 'frescos', 'envasado', 'vacio', 'ev'}
    prod_words_clean = prod_words - common_words
    img_words_clean = img_words - common_words

    intersection = prod_words_clean & img_words_clean
    if prod_words_clean and img_words_clean and not intersection:
        mismatches.append((p['name'], img_path, list(prod_words_clean), list(img_words_clean)))

print(f"Found {len(mismatches)} potential mismatches:")
for prod, img, p_w, i_w in mismatches:
    print(f"Product: {prod}")
    print(f"Image  : {img}")
    print(f"Prod words: {p_w}")
    print(f"Img words : {i_w}")
    print("-" * 50)
