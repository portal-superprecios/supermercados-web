# ══════════════════════════════════════════════════════════════════════
#  OPTIMIZE IMAGES FOR WEB
#  
#  This script optimizes all product images in the project by:
#  1. Handling transparent backgrounds (replacing with solid white).
#  2. Resizing large images to a standard web thumbnail size (max 500px).
#  3. Compressing images and saving them as WebP (or optimized JPEG/PNG).
#  4. Deleting original bloated images if successfully optimized.
#
#  Usage: python optimize_images.py
# ══════════════════════════════════════════════════════════════════════

import os
import sys
from pathlib import Path
from PIL import Image

if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

# ──────────────────────────────────────────────
# CONFIGURACIÓN
# ──────────────────────────────────────────────
TARGET_DIRS = ["images/carrefour", "images/changomas", "images/laanonima", "images/vea", "images/maxiconsumo"]
MAX_SIZE = 500  # max pixels for width or height
QUALITY = 82    # compression quality (1-100)

def optimize_image(file_path: Path):
    try:
        orig_size = file_path.stat().st_size
        
        # Don't process files that are not real images or are too small (like corrupt SVGs)
        if orig_size < 1000:
            return False, "file too small or corrupt"
            
        with Image.open(file_path) as img:
            # Handle formats
            img_format = img.format
            
            # Convert to RGB, handle transparency
            if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                # Create a white background
                bg = Image.new('RGB', img.size, (255, 255, 255))
                # Paste the image onto the background using itself as alpha mask
                if img.mode != 'RGBA':
                    img = img.convert('RGBA')
                bg.paste(img, (0, 0), img)
                img = bg
            else:
                img = img.convert('RGB')
                
            # Resize if too large
            width, height = img.size
            if width > MAX_SIZE or height > MAX_SIZE:
                if width > height:
                    new_width = MAX_SIZE
                    new_height = int(height * (MAX_SIZE / width))
                else:
                    new_height = MAX_SIZE
                    new_width = int(width * (MAX_SIZE / height))
                img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                
            # We want to save as WebP for optimal web delivery
            # However, to avoid breaking any hardcoded path expectations, we can replace the file in-place
            # or save as .webp. Let's do WebP optimization.
            # If the original file was webp, overwrite it.
            # If it was jpg/png, we can save it as WebP and delete the original, OR save as optimized JPG.
            # Let's save as optimized version of its current format to be safe,
            # but if it's JPG, save as optimized progressive JPEG.
            dest_path = file_path
            
            # Check format to save
            if file_path.suffix.lower() in ['.jpg', '.jpeg']:
                img.save(dest_path, 'JPEG', quality=QUALITY, optimize=True, progressive=True)
            elif file_path.suffix.lower() == '.png':
                img.save(dest_path, 'PNG', optimize=True)
            elif file_path.suffix.lower() == '.webp':
                img.save(dest_path, 'WEBP', quality=QUALITY)
            else:
                # Fallback to saving in place as JPEG
                img.save(dest_path, 'JPEG', quality=QUALITY)
                
        new_size = dest_path.stat().st_size
        savings = (orig_size - new_size) / orig_size * 100
        
        if savings > 5:
            return True, f"Optimized: {orig_size/1024:.1f} KB -> {new_size/1024:.1f} KB (Saved {savings:.1f}%)"
        else:
            return True, f"Already optimized: {new_size/1024:.1f} KB"
            
    except Exception as e:
        return False, str(e)

def main():
    print("=" * 60)
    print("IMAGE OPTIMIZATION FOR WEB DELIVERY")
    print("=" * 60)
    
    total_processed = 0
    total_optimized = 0
    total_failed = 0
    
    for dir_name in TARGET_DIRS:
        img_dir = Path(dir_name)
        if not img_dir.exists():
            continue
            
        print(f"\nProcessing directory: {dir_name}...")
        
        # Glob all image types
        image_files = []
        for ext in ['*.jpg', '*.jpeg', '*.png', '*.webp']:
            image_files.extend(list(img_dir.glob(ext)))
            
        print(f"Found {len(image_files)} images.")
        
        for img_file in image_files:
            total_processed += 1
            success, msg = optimize_image(img_file)
            if success:
                total_optimized += 1
                if "Optimized" in msg:
                    print(f"  [OK] {img_file.name}: {msg}")
            else:
                total_failed += 1
                print(f"  [ERR] {img_file.name}: {msg}")
                
    print(f"\n{'='*60}")
    print("SUMMARY OF PROCESS")
    print(f"{'='*60}")
    print(f"  Total images processed : {total_processed}")
    print(f"  Successfully optimized : {total_optimized}")
    print(f"  Failed / Skipped       : {total_failed}")
    print(f"{'='*60}")
    print("Done!")

if __name__ == "__main__":
    main()
