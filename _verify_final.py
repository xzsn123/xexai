import re
with open(r'f:\codebuddy编程产品文件夹\js\data.js', 'r', encoding='utf-8') as f:
    c = f.read()

covers = re.findall(r'cover:\s*"screenshots/work_(\d+)\.png"', c)
print(f'Works with cover: {len(covers)}')
ids = re.findall(r'^\s*id:\s*(\d+),', c, re.MULTILINE)
print(f'Total works: {len(ids)}')

tm = c.split('const TEAM_MEMBERS = [')[1].split('];')[0]
names = re.findall(r'name:\s*"([^"]+)"', tm)
print(f'Team members: {len(names)}')

empty = re.findall(r'cover:\s*"",', c)
print(f'Empty covers remaining: {len(empty)}')
if empty:
    for e in empty:
        print(f'  {e}')
