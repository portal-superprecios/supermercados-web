import pandas as pd
import glob
import os

files = glob.glob(r'datos/carrefour/*.csv') + glob.glob(r'datos/carrefour/*.xlsx')
for f in files:
    try:
        if f.endswith('.csv'):
            df = pd.read_csv(f, sep=';', encoding='latin-1')
        else:
            df = pd.read_excel(f)
        print(f"{f}: {df.columns.tolist()}")
    except Exception as e:
        print(f"Error reading {f}: {e}")
