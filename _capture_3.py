from playwright.sync_api import sync_playwright
import os

works = [
    (15, "https://app-cr1r84icz6kh.appmiaoda.com"),
    (21, "https://static.coze.site/3805840175541584_0-data_volume/7657098466690236698-files/%E6%89%80%E6%9C%89%E5%AF%B9%E8%AF%9D/%E4%B8%BB%E5%AF%B9%E8%AF%9D/%E4%BC%98%E9%80%94%E5%BF%97%E6%84%BF%E6%9F%A5.html"),
    (29, "https://www.coze.cn/s/u7NadTpZd6c/"),
]

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    page = browser.new_page(viewport={'width': 1280, 'height': 800})
    for wid, url in works:
        try:
            page.goto(url, wait_until='networkidle', timeout=30000)
            page.wait_for_timeout(1000)
            out_path = rf'f:\codebuddy编程产品文件夹\screenshots\work_{wid}.png'
            page.screenshot(path=out_path, full_page=False)
            print(f'work_{wid} OK {os.path.getsize(out_path)}')
        except Exception as e:
            print(f'work_{wid} FAIL: {e}')
    browser.close()
