import re
with open(r'f:\codebuddy编程产品文件夹\js\data.js', 'r', encoding='utf-8') as f:
    c = f.read()

# Find all empty cover works
pattern = r'id:\s*(\d+),\s*title:\s*"([^"]+)".*?cover:\s*"",'
for m in re.finditer(pattern, c, re.DOTALL):
    wid = int(m.group(1))
    if wid <= 55:
        print(f"  id={wid}: {m.group(2)}")
