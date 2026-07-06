import sys, io, re
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# ============ NEW WORKS TO ADD ============
# Carefully curated, skipping duplicates with existing works
# Each entry: (title, subtitle, category, categoryName, tags, liveUrl, team_name, desc)

new_works = [
    ("辩论会平台", "实时辩论互动交流平台", "web", "网页应用",
     ["辩论", "互动", "交流"],
     "https://13ce5a75444042d0a60bc09c66ff1fe2.app.codebuddy.work/",
     "余红琳", "辩论实时进行平台，支持多方在线辩论互动。"),

    ("机甲游戏", "机甲主题动作对战游戏", "game", "HTML游戏",
     ["机甲", "动作", "对战"],
     "https://5gyz8k584z.coze.site/",
     "钱途", "机甲对战HTML5游戏，操控机甲进行激烈战斗。"),

    ("KPOP首尔行程助手", "KPOP追星行程与应援查询工具", "web", "网页应用",
     ["KPOP", "追星", "应援"],
     "https://www.coze.cn/s/CyMwODd_Pao/",
     "艾彦希", "单机可用KPOP首尔行程&应援查询小程序，覆盖打歌、演唱会、应援打卡。"),

    ("数学冒险", "数学刷题冒险闯关学习应用", "web", "网页应用",
     ["数学", "闯关", "学习"],
     "https://c1d58022c2964640bc5545ec24d075c1.app.codebuddy.work",
     "黎思齐", "面向高一学生的数学刷题应用，包含每日挑战、主线闯关、专项训练。"),

    ("蚀野织境", "像素风地牢冒险闯关游戏", "game", "HTML游戏",
     ["像素", "地牢", "冒险"],
     "https://a0dc409916434a0fa2663bfa0769a63f.app.codebuddy.work",
     "文泓锦", "像素风地牢闯关游戏，多种职业、道具与技能，畅快割草体验。"),

    ("4V4 PVP对战", "宝可梦风格4V4角色对战游戏", "game", "HTML游戏",
     ["对战", "PVP", "宝可梦"],
     "https://2gz588mcwf.coze.site",
     "曾厚铭", "4v4的PVP对战游戏，选择角色战斗，类似宝可梦玩法。"),

    ("射击大作战", "积分制射击对战游戏", "game", "HTML游戏",
     ["射击", "对战", "积分"],
     "https://possibly-tags-gaming-contributing.trycloudflare.com/index.html",
     "董书铭", "射击游戏可拾取积分换道具，多级武器与BOSS对战系统。"),

    ("坦克地带", "坦克主题对战游戏", "game", "HTML游戏",
     ["坦克", "对战", "策略"],
     "https://4471c9a8-90b6-4cf3-b2d3-7df87600dd91.dev.coze.site",
     "王浩宇", "单机坦克对战游戏，策略操控与火力对决。"),

    ("丧尸射击生存", "丧尸主题射击生存游戏", "game", "HTML游戏",
     ["丧尸", "射击", "生存"],
     "https://16aba2b4-c07b-48e2-be40-4709819de737.dev.coze.site/",
     "李青松", "丧尸主题射击生存游戏，在尸潮中存活下来。"),

    ("FPS枪械进化", "赛博朋克风格FPS射击游戏", "game", "HTML游戏",
     ["FPS", "赛博朋克", "进化"],
     "https://www.coze.cn/s/EoSddVDXO7o/",
     "胡子涵", "赛博朋克风格FPS射击，击杀敌人枪械自动进化，6阶形态。"),

    ("FPS训练与九科问答", "FPS射击训练与高中学科问答", "web", "网页应用",
     ["FPS", "训练", "学科"],
     "https://9ad5e1df-a1b9-4588-bf97-c76af38bf026.dev.coze.site",
     "黄渤", "FPS射击准度训练，结合高中九大学科基础知识问答。"),

    ("寻道大千模拟器", "修仙主题休闲小游戏", "game", "HTML游戏",
     ["休闲", "修仙", "模拟"],
     "https://3q3bwvxhv5.coze.site",
     "田青松", "休闲修仙小游戏，体验寻道大千的修仙之旅。"),

    ("NailMatch美甲选款", "AI智能美甲款式推荐工具", "web", "网页应用",
     ["美甲", "AI推荐", "时尚"],
     "https://snore-habit-42017133.figma.site",
     "罗涵允", "美甲选款神器，勾选场景、甲型和元素，AI匹配海量美甲款式。"),

    ("智建云AI", "乡村建房AI辅助平台", "web", "网页应用",
     ["建房", "AI", "规划"],
     "https://59a58580c4c24f9b9724af97e66112f4.app.codebuddy.work",
     "徐永棋", "帮助房屋建设者提供AI建议，支持2D/3D建模与文字解析。"),

    ("赛车模拟器", "街机风格赛车竞速游戏", "game", "HTML游戏",
     ["赛车", "竞速", "街机"],
     "https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=29123321521&fileId=227489089670&type=file",
     "肖宇轩", "兼备速度和技巧的街机赛车游戏，考验手速和反应能力。"),

    ("枪械进化", "3D射击闯关枪械升级游戏", "game", "HTML游戏",
     ["射击", "进化", "闯关"],
     "https://8e01367a-016c-49e2-b03c-cde8c4eca08a-5000.dev.coze.site/",
     "温秦", "3D射击闯关小游戏，击杀敌人解锁枪械进化，7级武器形态。"),

    ("绝境撤离", "3D射击物资搜集撤离游戏", "game", "HTML游戏",
     ["射击", "撤离", "生存"],
     "https://www.coze.cn/s/tf4PeKOR4w8/",
     "朱嘉铭", "3D射击撤离游戏，搜刮物资、击败BOSS，装备系统与护甲穿透机制。"),

    ("暗域求生", "暗黑风格肉鸽生存游戏", "game", "HTML游戏",
     ["肉鸽", "生存", "暗黑"],
     "https://5363984c-cf03-400d-ada2-b514990751cc.dev.coze.site",
     "冯子杭", "暗黑风格肉鸽类小游戏，探索未知领域，求生战斗。"),

    ("红楼学习空间", "红楼梦整本书阅读AI学习平台", "web", "网页应用",
     ["红楼梦", "AI学习", "经典"],
     "https://b5mcxhcdzg.coze.site",
     "冯彧曦", "红楼梦整本书阅读AI学习空间，人物图谱、角色扮演、考点问答。"),

    ("函数图像生成器", "数学函数图像可视化工具", "web", "网页应用",
     ["数学", "函数", "可视化"],
     "https://www.coze.cn/s/6SM9qwZz5JE/",
     "郭嘉丰美", "数学函数图像生成工具，直观展示各类函数图像变化。"),

    ("高中物理虚拟实验室", "交互式物理实验模拟平台", "web", "网页应用",
     ["物理", "实验", "模拟"],
     "https://43c2bc3ca7864be9aee3feb2a2a36b3d.app.codebuddy.work",
     "郭嘉丰美", "8大模块25个实验交互模拟，拖动滑块直观看到物理规律变化。"),

    ("有机化学3D分子模型", "有机化学分子3D可视化工具", "web", "网页应用",
     ["化学", "3D", "分子"],
     "https://7111a4478987464084da2098d9a671e0.app.codebuddy.work",
     "吴兴红", "有机化学3D分子模型与有机反应动画展示。"),

    ("文言文速通", "高中文言文AI学习助手", "web", "网页应用",
     ["文言文", "AI", "学习"],
     "https://e2a3b8436e984783a5e207f43ecbf258.app.codebuddy.work",
     "袁军", "帮助高中学生速通文言文，检索、视频链接、高考考情分析。"),

    ("剧情小说", "互动式剧情小说阅读平台", "web", "网页应用",
     ["小说", "剧情", "阅读"],
     "https://alidocs.dingtalk.com/notable/record?dentryUuid=93NwLYZXWyk1ydzwSNgP27DXJkyEqBQm&rowId=Q0iLxi7HzN&sheetId=Y5gvPVL&viewId=4TmfcJr",
     "周艾琳", "互动式剧情小说阅读与创作平台。"),

    ("深空节奏", "科幻风格节奏音乐游戏", "game", "HTML游戏",
     ["节奏", "音乐", "科幻"],
     "https://azure-post-07xv.pagedrop.io/",
     "袁玺冉", "Neon Pulse深空节奏，科幻风格的节奏音乐互动游戏。"),

    ("历史学习平台", "高中历史知识学习查询平台", "web", "网页应用",
     ["历史", "学习", "查询"],
     "https://538b14ec5b9740e0b61e760c4f2d7023.app.codebuddy.work",
     "余浩", "历史学习平台，支持历史知识检索、朝代查询与考点梳理。"),
]

print(f"Total new works: {len(new_works)}")

# Generate JS code for data.js
for i, w in enumerate(new_works):
    title, subtitle, cat, cat_name, tags, url, name, desc = w
    new_id = 30 + i
    tags_str = ", ".join(f'"{t}"' for t in tags)
    
    js_entry = f'''    {{
        id: {new_id}, title: "{title}", subtitle: "{subtitle}", category: "{cat}", categoryName: "{cat_name}",
        tags: [{tags_str}], featured: false, award: "",
        period: "2026.07.04", views: {800 + i * 100},
        cover: "", previewType: "{'iframe' if cat == 'web' else 'iframe' if cat == 'game' else 'image'}", previewUrl: "", githubUrl: "", liveUrl: "{url}",
        team: [{{ name: "{name}", role: "设计与开发" }}],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>{desc}</p>"
    }},'''
    print(js_entry)

print(f"\n// IDs: 30 to {29 + len(new_works)}")
