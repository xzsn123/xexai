import os, re, base64

html_path = r'f:\codebuddy编程产品文件夹\学而行AI作品展.html'
screenshots_dir = r'f:\codebuddy编程产品文件夹\screenshots'

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

# Find all id -> title -> cover in the HTML
# We process work ids 1-29 that have screenshot files
for wid in range(1, 30):
    img_path = os.path.join(screenshots_dir, f'work_{wid}.png')
    if not os.path.exists(img_path):
        continue

    with open(img_path, 'rb') as f:
        img_data = f.read()
    b64 = base64.b64encode(img_data).decode('utf-8')
    new_data_uri = f'data:image/png;base64,{b64}'

    # Find this work entry in html and replace its cover base64
    title_match = re.search(rf'id:\s*{wid},\s*title:\s*"([^"]+)"', html)
    if not title_match:
        continue
    idx = title_match.start()
    # Search within the next 8000 chars for cover base64
    snippet = html[idx:idx+8000]
    cover_match = re.search(r'cover:\s*"(data:image/png;base64,[\s\S]*?)"', snippet, re.DOTALL)
    if not cover_match:
        # might be empty cover
        cover_match = re.search(r'cover:\s*"([^"]*)"', snippet)

    if cover_match:
        old_str = cover_match.group(0)
        new_str = f'cover: "{new_data_uri}"'
        html = html.replace(old_str, new_str, 1)
        print(f'work_{wid} updated')
    else:
        print(f'work_{wid}: no cover found')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

print(f'HTML size: {os.path.getsize(html_path)}')
