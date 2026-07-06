from playwright.sync_api import sync_playwright
import os

url = 'https://static.coze.site/3805840175541584_0-data_volume/7657098466690236698-files/%E6%89%80%E6%9C%89%E5%AF%B9%E8%AF%9D/%E4%B8%BB%E5%AF%B9%E8%AF%9D/%E4%BC%98%E9%80%94%E5%BF%97%E6%84%BF%E6%9F%A5.html?sign=1785487124-878ff5846d-0-d9ea5e8a00638d0bfa288f5ad052b5ff6962f33c75b417b5f28e9c56d0688108'
out = r'f:\codebuddy编程产品文件夹\screenshots\work_21.png'

try:
    with sync_playwright() as p:
        browser = p.chromium.launch(channel='msedge', headless=True)
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto(url, wait_until='networkidle', timeout=60000)
        page.wait_for_timeout(2000)
        page.screenshot(path=out, full_page=False)
        print(f'title: {page.title()}')
        browser.close()
    print('OK', os.path.getsize(out))
except Exception as e:
    print(f'FAIL: {e}')
