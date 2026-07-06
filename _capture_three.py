import os

url = "https://www.coze.cn/s/6AyhE9UqXsI/"
out = r"f:\codebuddy编程产品文件夹\screenshots\work_1.png"

from playwright.sync_api import sync_playwright
with sync_playwright() as p:
    browser = p.chromium.launch(channel="msedge", headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 800})
    resp = page.goto(url, wait_until="networkidle", timeout=60000)
    print("Status:", resp.status)
    page.wait_for_timeout(3000)
    title = page.title()
    print("Title:", title)
    page.screenshot(path=out, full_page=False)
    print("OK", os.path.getsize(out))
    browser.close()
