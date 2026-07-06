import re
with open(r'f:\codebuddy编程产品文件夹\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

works = re.findall(r'id:\s*(\d+),\s*title:\s*"([^"]+)".*?cover:\s*"([^"]*)".*?liveUrl:\s*"([^"]*)"', content, re.DOTALL)
found_ids = {int(w[0]) for w in works}
print(f'Found: {len(found_ids)}')
for i in range(1, 30):
    if i not in found_ids:
        print(f'Missing: {i}')
