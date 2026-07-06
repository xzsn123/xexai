"""批量截图新作品缩略图 (id 30-55)"""
import json, re, time, os

# 读取 data.js 提取 liveUrl
with open(r'f:\codebuddy编程产品文件夹\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 提取 id:30 到 id:55 之间的所有条目
# 简单方式：提取所有作品的关键字段
works = []
pattern = r"id:\s*(\d+),\s*title:\s*\"([^\"]+)\".*?liveUrl:\s*\"([^\"]*)\""
for m in re.finditer(pattern, content, re.DOTALL):
    wid = int(m.group(1))
    title = m.group(2)
    url = m.group(3)
    if 30 <= wid <= 55:
        works.append((wid, title, url))

print(f"找到 {len(works)} 个新作品需要截图")
for w in works:
    print(f"  id={w[0]}: {w[1]} -> {w[2] if w[2] else '(无URL)'}")

from playwright.sync_api import sync_playwright

save_dir = r'f:\codebuddy编程产品文件夹\screenshots'
os.makedirs(save_dir, exist_ok=True)

success = []
failed = []

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    context = browser.new_context(
        viewport={"width": 1280, "height": 800},
        user_agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
    )
    
    for wid, title, url in works:
        out_path = os.path.join(save_dir, f"work_{wid}.png")
        if os.path.exists(out_path):
            print(f"[跳过] work_{wid}.png 已存在")
            success.append(wid)
            continue

        if not url:
            print(f"[跳过] id={wid} ({title}) 无URL")
            failed.append((wid, "无URL"))
            continue

        try:
            page = context.new_page()
            page.set_default_timeout(15000)
            print(f"[截图] id={wid}: {title} -> {url}")
            page.goto(url, wait_until="domcontentloaded", timeout=12000)
            page.wait_for_timeout(2000)  # 等待渲染
            page.screenshot(path=out_path, full_page=False)
            page.close()
            success.append(wid)
            print(f"  ✅ 已保存 work_{wid}.png")
        except Exception as e:
            print(f"  ❌ 失败: {e}")
            try:
                page.close()
            except:
                pass
            failed.append((wid, str(e)[:100]))

    browser.close()

print(f"\n成功: {len(success)} 个")
print(f"失败: {len(failed)} 个")
if failed:
    print("失败列表:")
    for wid, reason in failed:
        print(f"  id={wid}: {reason}")

# 输出成功截图的文件名列表
print("\n成功截图列表:")
for wid in sorted(success):
    print(f"  work_{wid}.png")
