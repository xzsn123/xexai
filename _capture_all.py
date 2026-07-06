import os, re, base64

html_path = r'f:\codebuddy编程产品文件夹\学而行AI作品展.html'
base = r'f:\codebuddy编程产品文件夹\screenshots'

with open(html_path, 'r', encoding='utf-8') as f: html = f.read()

for wid in [22,23,25,26,27,29]:
    img_path = os.path.join(base, f'work_{wid}.png')
    title_match = re.search(rf'id:\s*{wid},\s*title:\s*"([^"]+)"', html)
    idx_start = title_match.start()
    idx_end = html.find('},', idx_start) + 2
    obj = html[idx_start:idx_end]
    cover_match = re.search(r'cover:\s*"(data:image/png;base64,[\s\S]*?)"', obj, re.DOTALL)
    if not cover_match: cover_match = re.search(r'cover:\s*"([^"]*)"', obj)
    with open(img_path, 'rb') as f: b64 = base64.b64encode(f.read()).decode('utf-8')
    new_obj = obj.replace(cover_match.group(0), f'cover: "data:image/png;base64,{b64}"', 1)
    html = html[:idx_start] + new_obj + html[idx_end:]
    print(f'work_{wid} updated')

with open(html_path, 'w', encoding='utf-8') as f: f.write(html)
print('done')