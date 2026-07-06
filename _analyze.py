import sys, io, pandas as pd, re, json
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

df = pd.read_excel(r'f:\codebuddy编程产品文件夹\学而行AI未来创造营.xlsx')

# Existing titles
existing_titles = {
    "内心小岛", "政治大脑加强机", "自我认识提升测试", "声途DDM", "XENNO品牌展示",
    "法盾", "DCBTI测评", "生长坐标", "鸡仔游戏", "AI数学学习助手", "林中小屋游戏",
    "地理学习工具", "情绪植物共生系列图", "模特走台展示视频", "历史学习网站",
    "医典系统", "LearnOS智慧学习平台", "Rc查询网站", "宇宙天体力学模拟",
    "赛车视频", "高考志愿填报", "高中物理学习网", "球类运动推荐软件", "蓝警游戏",
    "青衿雅搭", "优学系统", "轻量热量记录", "AI短剧", "跑酷游戏"
}

existing_urls = {
    "https://www.coze.cn/s/6AyhE9UqXsI/",
    "https://frn5gw7mrw.coze.site",
    "https://2498f977d6874072a5d9291cdf5ebb8e.app.codebuddy.work",
    "https://h37vtfz3zq.coze.site",
    "https://2jvbfn237c.coze.site",
    "https://dcbti.coze.site",
    "https://92ead36287564b5897645260eff3cbaf.app.codebuddy.work/?view=admin",
    "https://92ead36287564b5897645260eff3cbaf.app.codebuddy.work",
    "https://1d323078-63e8-44d9-bc1d-df836140f6cf.dev.coze.site",
    "https://www.coze.cn/s/3duoTuiHdno/",
    "https://app-coxxt55c8ow1.appmiaoda.com",
    "https://b8611df3b02f4ef795ab6c166a79f512.app.codebuddy.work",
    "https://app-cr1r84icz6kh.appmiaoda.com",
    "https://kf59cj8q2f.coze.site",
    "https://780fa909e64341eeab468e54d56489e2.app.codebuddy.work",
    "https://zmw894v5kb.coze.site",
    "https://945c4625-7c36-418b-b86f-3a1c033759c9.dev.coze.site",
    "https://www.coze.cn/s/jB_pwycrZ2A/",
    "https://c3adb5138529446b94ef6218a9aa65af.app.codebuddy.work/",
    "https://1eb3e033706248e7b413968f8c457dba.app.codebuddy.work",
    "https://f0ee3ad488df4fcdbf9a1692ba18f833.app.codebuddy.work",
    "https://www.coze.cn/s/u7NadTpZd6c/",
    "https://afe789ab-2ba3-4c0e-aa5c-c963224df95b.dev.coze.site",
}

def is_real_url(u):
    return u.startswith("http://") or u.startswith("https://")

def extract_title(intro, target, desc):
    # Try to find 《Title》 pattern in intro
    m = re.search(r'[《](.+?)[》]', intro)
    if m:
        return m.group(1)
    m = re.search(r'["""](.+?)["""]', intro)
    if m and len(m.group(1)) < 30:
        return m.group(1)
    # Use target if it's short
    if target and len(target) <= 15 and target != "nan":
        return target
    # Use desc if it's short
    if desc and len(desc) <= 15:
        return desc
    # Fallback
    if target and target != "nan":
        return target[:15]
    return None

def is_duplicate_title(title):
    if not title:
        return True
    for et in existing_titles:
        if title in et or et in title:
            return True
    return False

def get_category(title, desc, intro):
    text = (intro + " " + desc).lower()
    if any(w in text for w in ["游戏", "跑酷", "闯关", "冒险", "塔防", "养成", "地牢", "节奏"]):
        if "视频" not in text[:50]:
            return "game", "HTML游戏"
    if any(w in text for w in ["视频", "展示视频", "走秀"]):
        return "video", "视频作品"
    if any(w in text for w in ["图片", "海报", "插画", "皮肤"]):
        return "image", "图片作品"
    return "web", "网页应用"

new_works = []
seen_urls = set()

for i, row in df.iterrows():
    url_cell = str(row.get("作品地址（如已部署）", "")).strip()
    name = str(row.get("学生名字", "")).strip()
    desc = str(row.get("作品描述", "")).strip()
    intro = str(row.get("个人和作品介绍", "")) if pd.notna(row.get("个人和作品介绍")) else ""
    target = str(row.get("我想要的作品", "")) if pd.notna(row.get("我想要的作品")) else ""
    group = str(row.get("小组", "")).strip()
    
    # Extract all URLs from the cell
    urls = re.findall(r'https?://[^\s\n)\]]+', url_cell)
    
    for url in urls:
        url = url.rstrip(".,;")
        if not is_real_url(url) or url.startswith("http://localhost"):
            continue
        if url in existing_urls or url in seen_urls:
            continue
        seen_urls.add(url)
        
        title = extract_title(intro, target, desc)
        if is_duplicate_title(title):
            continue
        
        cat, cat_name = get_category(title or "", desc, intro)
        
        # Generate a short subtitle from desc
        subtitle = desc[:30] if desc and len(desc) <= 30 else (desc[:28] + "...") if desc else ""
        
        print(f"\n--- New Work ---")
        print(f"  Name: {name}")
        print(f"  Title: {title}")
        print(f"  Subtitle: {subtitle}")
        print(f"  Desc: {desc}")
        print(f"  URL: {url}")
        print(f"  Group: {group}")
        print(f"  Category: {cat}")
        
        new_works.append({
            "name": name,
            "title": title or desc[:15],
            "subtitle": subtitle,
            "desc": desc,
            "url": url,
            "group": group,
            "category": cat,
            "categoryName": cat_name,
        })

print(f"\n\n=== TOTAL NEW WORKS: {len(new_works)} ===")
