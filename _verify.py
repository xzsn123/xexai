import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Check data.js - count total works
with open(r"f:\codebuddy编程产品文件夹\js\data.js", "r", encoding="utf-8") as f:
    js = f.read()

ids = re.findall(r'id:\s*(\d+)', js)
print(f"data.js: Total works = {len(ids)}, IDs = {ids[-30:]}")

# Check last 5 entries
titles = re.findall(r'title:\s*"([^"]+)"', js)
print(f"Total titles: {len(titles)}")
print("Last 30 titles:", titles[-30:])

# Check HTML
with open(r"f:\codebuddy编程产品文件夹\学而行AI作品展.html", "r", encoding="utf-8") as f:
    html = f.read()
html_ids = re.findall(r'id:\s*(\d+)', html)
html_titles = re.findall(r'title:\s*"([^"]+)"', html)
print(f"\nHTML: Total works = {len(html_ids)}")
print("Last 10 titles:", html_titles[-10:])
