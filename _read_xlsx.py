import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
import pandas as pd

df = pd.read_excel(r'f:\codebuddy编程产品文件夹\学而行AI未来创造营.xlsx')
print('Shape:', df.shape)
print('Columns:', list(df.columns))
print('---ALL ROWS---')
for i, row in df.iterrows():
    print(f'\n=== Row {i} ===')
    for col in df.columns:
        val = row[col]
        if pd.notna(val):
            print(f'  {col}: {val}')
