from playwright.sync_api import sync_playwright
import os

base = r'f:\codebuddy编程产品文件夹'

works = [
    (1, "https://www.coze.cn/s/6AyhE9UqXsI/"),
    (2, "https://frn5gw7mrw.coze.site"),
    (3, "https://2498f977d6874072a5d9291cdf5ebb8e.app.codebuddy.work"),
    (4, "https://h37vtfz3zq.coze.site"),
    (6, "https://2jvbfn237c.coze.site"),
    (7, "https://dcbti.coze.site"),
    (8, "https://afe789ab-2ba3-4c0e-aa5c-c963224df95b.dev.coze.site"),
    (9, "https://1d323078-63e8-44d9-bc1d-df836140f6cf.dev.coze.site"),
    (10, "https://www.coze.cn/s/3duoTuiHdno/"),
    (11, "https://app-coxxt55c8ow1.appmiaoda.com"),
    (12, "https://b8611df3b02f4ef795ab6c166a79f512.app.codebuddy.work"),
    (15, "https://app-cr1r84icz6kh.appmiaoda.com"),
    (17, "https://kf59cj8q2f.coze.site"),
    (18, "https://780fa909e64341eeab468e54d56489e2.app.codebuddy.work"),
    (19, "https://zmw894v5kb.coze.site"),
    (21, "https://static.coze.site/3805840175541584_0-data_volume/7657098466690236698-files/%E6%89%80%E6%9C%89%E5%AF%B9%E8%AF%9D/%E4%B8%BB%E5%AF%B9%E8%AF%9D/%E4%BC%98%E9%80%94%E5%BF%97%E6%84%BF%E6%9F%A5.html"),
    (22, "https://945c4625-7c36-418b-b86f-3a1c033759c9.dev.coze.site"),
    (23, "https://www.coze.cn/s/jB_pwycrZ2A/"),
    (25, "https://c3adb5138529446b94ef6218a9aa65af.app.codebuddy.work/"),
    (26, "https://1eb3e033706248e7b413968f8c457dba.app.codebuddy.work"),
    (27, "https://f0ee3ad488df4fcdbf9a1692ba18f833.app.codebuddy.work"),
    (29, "https://www.coze.cn/s/u7NadTpZd6c/"),
]

with sync_playwright() as p:
    browser = p.chromium.launch(channel='msedge', headless=True)
    for wid, url in works:
        out_path = os.path.join(base, 'screenshots', f'work_{wid}.png')
        try:
            page = browser.new_page(viewport={'width': 1280, 'height': 800})
            page.goto(url, wait_until='networkidle', timeout=30000)
            page.wait_for_timeout(1500)
            page.screenshot(path=out_path, full_page=False)
            page.close()
            size = os.path.getsize(out_path)
            print(f'work_{wid} OK {size}')
        except Exception as e:
            print(f'work_{wid} FAIL: {e}')
    browser.close()

print('Done')
