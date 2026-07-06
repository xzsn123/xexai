"""Update cover fields for new works (30-55) in data.js"""
import re

filepath = r'f:\codebuddy编程产品文件夹\js\data.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Pattern: cover: "", -> cover: "screenshots/work_XX.png",
# But only for works with id 30-55
updated_count = 0

# Find all work objects and their cover fields
# Better approach: find each work block and replace cover within it
lines = content.split('\n')
new_lines = []
in_new_works = False
current_id = None

for i, line in enumerate(lines):
    # Track work id
    id_match = re.match(r'\s*id:\s*(\d+),', line)
    if id_match:
        current_id = int(id_match.group(1))
    
    # Check if we're in a new work (id 30-55)
    if current_id is not None and 30 <= current_id <= 55:
        # Replace empty cover
        if re.match(r'\s*cover:\s*"",', line):
            line = re.sub(r'cover:\s*""', f'cover: "screenshots/work_{current_id}.png"', line)
            updated_count += 1
            print(f"  Updated work_{current_id}.png cover")
    
    new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write('\n'.join(new_lines))

print(f"\nTotal updated: {updated_count} covers")
