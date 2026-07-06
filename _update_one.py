import sys, io, re, base64
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open(r"f:\codebuddy编程产品文件夹\screenshots\work_1.png", "rb") as f:
    new_b64 = base64.b64encode(f.read()).decode("utf-8")
print(f"New base64 length: {len(new_b64)}")

with open(r"f:\codebuddy编程产品文件夹\学而行AI作品展.html", "r", encoding="utf-8") as f:
    html = f.read()

idx_island = html.find("内心小岛")
print(f"内心小岛 at: {idx_island}")

# Find "cover" after 内心小岛
cover_idx = html.find("cover", idx_island)
print(f"cover found at: {cover_idx}")
print(f"Context around cover: {repr(html[cover_idx:cover_idx+100])}")

# Find the base64 start
png_idx = html.find("base64,", cover_idx)
print(f"base64, at: {png_idx}")
if png_idx > 0:
    b64_start = png_idx + 7
    # Find closing quote
    b64_end = html.find('"', b64_start)
    print(f"b64_start: {b64_start}, b64_end: {b64_end}, old len: {b64_end - b64_start}")
    
    new_html = html[:b64_start] + new_b64 + html[b64_end:]
    with open(r"f:\codebuddy编程产品文件夹\学而行AI作品展.html", "w", encoding="utf-8") as f:
        f.write(new_html)
    print("Cover updated successfully!")
else:
    print("base64, not found!")
