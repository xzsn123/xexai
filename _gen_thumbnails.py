"""为新增作品(30-55)生成美观的缩略图"""
import os, re, math
from PIL import Image, ImageDraw, ImageFont

save_dir = r'f:\codebuddy编程产品文件夹\screenshots'
os.makedirs(save_dir, exist_ok=True)

# 读取作品信息
with open(r'f:\codebuddy编程产品文件夹\js\data.js', 'r', encoding='utf-8') as f:
    content = f.read()

works = []
pattern = r"id:\s*(\d+),\s*title:\s*\"([^\"]+)\".*?category:\s*\"(\w+)\".*?categoryName:\s*\"([^\"]+)\""
for m in re.finditer(pattern, content, re.DOTALL):
    wid = int(m.group(1))
    if 30 <= wid <= 55:
        works.append((wid, m.group(2), m.group(3), m.group(4)))

print(f"待生成缩略图: {len(works)} 个")

# 分类配色
cat_colors = {
    "web": (["#3B82F6", "#1D4ED8"], "🌐", "网页"),
    "game": (["#10B981", "#047857"], "🎮", "游戏"),
    "video": (["#8B5CF6", "#6D28D9"], "🎬", "视频"),
    "image": (["#F59E0B", "#D97706"], "🖼️", "图片"),
}

def interp(c1, c2, t):
    return tuple(int(c1[i] + (c2[i]-c1[i])*t) for i in range(3))

def hex2rgb(h):
    h = h.lstrip('#')
    return tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

def rgb2hex(rgb):
    return '#{:02x}{:02x}{:02x}'.format(*rgb)

W, H = 1280, 800

for wid, title, cat, cat_name in works:
    out_path = os.path.join(save_dir, f"work_{wid}.png")
    if os.path.exists(out_path):
        print(f"  [跳过] work_{wid}.png")
        continue

    colors, icon, cat_short = cat_colors.get(cat, cat_colors["web"])
    c1, c2 = hex2rgb(colors[0]), hex2rgb(colors[1])

    img = Image.new('RGB', (W, H), c1)
    draw = ImageDraw.Draw(img)

    # 渐变背景
    for y in range(H):
        t = y / H
        r, g, b = interp(c1, c2, t*0.7 + 0.15)
        draw.line([(0, y), (W, y)], fill=(r, g, b))

    # 装饰几何图案
    for i in range(5):
        cx = int(W * (0.15 + 0.22*i))
        cy = int(H * 0.6)
        r_size = 120 + i*30
        alpha = int(15 - i*2)
        color = (255, 255, 255)
        draw.ellipse([cx-r_size, cy-r_size, cx+r_size, cy+r_size], 
                      outline=color, width=1)

    # 中央图标区域 - 半透明圆形
    icon_cx, icon_cy = W//2, H//2 - 40
    icon_r = 90
    # 绘制毛玻璃效果圆形
    for rr in range(icon_r, icon_r-20, -1):
        alpha = int(40 - (icon_r - rr) * 1.5)
        draw.ellipse([icon_cx-rr, icon_cy-rr, icon_cx+rr, icon_cy+rr],
                      fill=(255,255,255), outline=None)
    
    # 尝试加载字体
    font_paths = [
        "C:/Windows/Fonts/msyh.ttc",
        "C:/Windows/Fonts/msyhbd.ttc",
        "C:/Windows/Fonts/simhei.ttf",
        "C:/Windows/Fonts/simsun.ttc",
    ]
    font_large = None
    font_small = None
    font_icon = None
    for fp in font_paths:
        try:
            font_large = ImageFont.truetype(fp, 52)
            font_small = ImageFont.truetype(fp, 28)
            font_icon = ImageFont.truetype(fp, 80)
            break
        except:
            continue
    if font_large is None:
        font_large = ImageFont.load_default()
        font_small = font_large
        font_icon = font_large

    # 标题
    title_text = title
    # 测定文字宽度并居中
    bbox = draw.textbbox((0, 0), title_text, font=font_large)
    tw = bbox[2] - bbox[0]
    draw.text((W//2 - tw//2, H//2 + 80), title_text, fill=(255, 255, 255), font=font_large)

    # 副标题（分类）
    sub = f"{icon} {cat_name}"
    bbox = draw.textbbox((0, 0), sub, font=font_small)
    sw = bbox[2] - bbox[0]
    draw.text((W//2 - sw//2, H//2 + 150), sub, fill=(255, 255, 255, 180), font=font_small)

    # 底部装饰线
    for i in range(3):
        y = H - 60 + i*8
        alpha = 80 - i*20
        color = rgb2hex(interp(c1, c2, 0.3))
        draw.rectangle([W//4, y, W*3//4, y+3], fill=(255,255,255,alpha))

    # 顶部小字
    draw.text((40, 30), "学而行 AI 未来创造营", fill=(255, 255, 255, 120), font=font_small)
    draw.text((W-140, 30), f"#{wid}", fill=(255, 255, 255, 100), font=font_small)

    img.save(out_path, 'PNG', quality=95)
    print(f"  [OK] work_{wid}.png ({title})")

print(f"\nDone! Generated thumbnails.")
