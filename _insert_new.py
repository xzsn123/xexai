import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

new_entries = """
    // ===== 新增作品（来自AI未来创造营） =====
    {
        id: 30, title: "辩论会平台", subtitle: "实时辩论互动交流平台", category: "web", categoryName: "网页应用",
        tags: ["辩论", "互动", "交流"], featured: false, award: "",
        period: "2026.07.04", views: 800,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://13ce5a75444042d0a60bc09c66ff1fe2.app.codebuddy.work/",
        team: [{ name: "余红琳", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>辩论实时进行平台，支持多方在线辩论互动。</p>"
    },
    {
        id: 31, title: "机甲游戏", subtitle: "机甲主题动作对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["机甲", "动作", "对战"], featured: false, award: "",
        period: "2026.07.04", views: 900,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://5gyz8k584z.coze.site/",
        team: [{ name: "钱途", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>机甲对战HTML5游戏，操控机甲进行激烈战斗。</p>"
    },
    {
        id: 32, title: "KPOP首尔行程助手", subtitle: "KPOP追星行程与应援查询工具", category: "web", categoryName: "网页应用",
        tags: ["KPOP", "追星", "应援"], featured: false, award: "",
        period: "2026.07.04", views: 1000,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/CyMwODd_Pao/",
        team: [{ name: "艾彦希", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>单机可用KPOP首尔行程&应援查询小程序，覆盖打歌、演唱会、应援打卡。</p>"
    },
    {
        id: 33, title: "数学冒险", subtitle: "数学刷题冒险闯关学习应用", category: "web", categoryName: "网页应用",
        tags: ["数学", "闯关", "学习"], featured: false, award: "",
        period: "2026.07.04", views: 1100,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://c1d58022c2964640bc5545ec24d075c1.app.codebuddy.work",
        team: [{ name: "黎思齐", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>面向高一学生的数学刷题应用，包含每日挑战、主线闯关、专项训练。</p>"
    },
    {
        id: 34, title: "蚀野织境", subtitle: "像素风地牢冒险闯关游戏", category: "game", categoryName: "HTML游戏",
        tags: ["像素", "地牢", "冒险"], featured: false, award: "",
        period: "2026.07.04", views: 1200,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://a0dc409916434a0fa2663bfa0769a63f.app.codebuddy.work",
        team: [{ name: "文泓锦", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>像素风地牢闯关游戏，多种职业、道具与技能，畅快割草体验。</p>"
    },
    {
        id: 35, title: "4V4 PVP对战", subtitle: "宝可梦风格4V4角色对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["对战", "PVP", "宝可梦"], featured: false, award: "",
        period: "2026.07.04", views: 1300,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://2gz588mcwf.coze.site",
        team: [{ name: "曾厚铭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>4v4的PVP对战游戏，选择角色战斗，类似宝可梦玩法。</p>"
    },
    {
        id: 36, title: "射击大作战", subtitle: "积分制射击对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["射击", "对战", "积分"], featured: false, award: "",
        period: "2026.07.04", views: 1400,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://possibly-tags-gaming-contributing.trycloudflare.com/index.html",
        team: [{ name: "董书铭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>射击游戏可拾取积分换道具，多级武器与BOSS对战系统。</p>"
    },
    {
        id: 37, title: "坦克地带", subtitle: "坦克主题对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["坦克", "对战", "策略"], featured: false, award: "",
        period: "2026.07.04", views: 1500,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://4471c9a8-90b6-4cf3-b2d3-7df87600dd91.dev.coze.site",
        team: [{ name: "王浩宇", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>单机坦克对战游戏，策略操控与火力对决。</p>"
    },
    {
        id: 38, title: "丧尸射击生存", subtitle: "丧尸主题射击生存游戏", category: "game", categoryName: "HTML游戏",
        tags: ["丧尸", "射击", "生存"], featured: false, award: "",
        period: "2026.07.04", views: 1600,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://16aba2b4-c07b-48e2-be40-4709819de737.dev.coze.site/",
        team: [{ name: "李青松", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>丧尸主题射击生存游戏，在尸潮中存活下来。</p>"
    },
    {
        id: 39, title: "FPS枪械进化", subtitle: "赛博朋克风格FPS射击游戏", category: "game", categoryName: "HTML游戏",
        tags: ["FPS", "赛博朋克", "进化"], featured: false, award: "",
        period: "2026.07.04", views: 1700,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/EoSddVDXO7o/",
        team: [{ name: "胡子涵", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>赛博朋克风格FPS射击，击杀敌人枪械自动进化，6阶形态。</p>"
    },
    {
        id: 40, title: "FPS训练与九科问答", subtitle: "FPS射击训练与高中学科问答", category: "web", categoryName: "网页应用",
        tags: ["FPS", "训练", "学科"], featured: false, award: "",
        period: "2026.07.04", views: 1800,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://9ad5e1df-a1b9-4588-bf97-c76af38bf026.dev.coze.site",
        team: [{ name: "黄渤", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>FPS射击准度训练，结合高中九大学科基础知识问答。</p>"
    },
    {
        id: 41, title: "寻道大千模拟器", subtitle: "修仙主题休闲小游戏", category: "game", categoryName: "HTML游戏",
        tags: ["休闲", "修仙", "模拟"], featured: false, award: "",
        period: "2026.07.04", views: 1900,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://3q3bwvxhv5.coze.site",
        team: [{ name: "田青松", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>休闲修仙小游戏，体验寻道大千的修仙之旅。</p>"
    },
    {
        id: 42, title: "NailMatch美甲选款", subtitle: "AI智能美甲款式推荐工具", category: "web", categoryName: "网页应用",
        tags: ["美甲", "AI推荐", "时尚"], featured: false, award: "",
        period: "2026.07.04", views: 2000,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://snore-habit-42017133.figma.site",
        team: [{ name: "罗涵允", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>美甲选款神器，勾选场景、甲型和元素，AI匹配海量美甲款式。</p>"
    },
    {
        id: 43, title: "智建云AI", subtitle: "乡村建房AI辅助平台", category: "web", categoryName: "网页应用",
        tags: ["建房", "AI", "规划"], featured: false, award: "",
        period: "2026.07.04", views: 2100,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://59a58580c4c24f9b9724af97e66112f4.app.codebuddy.work",
        team: [{ name: "徐永棋", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>帮助房屋建设者提供AI建议，支持2D/3D建模与文字解析。</p>"
    },
    {
        id: 44, title: "赛车模拟器", subtitle: "街机风格赛车竞速游戏", category: "game", categoryName: "HTML游戏",
        tags: ["赛车", "竞速", "街机"], featured: false, award: "",
        period: "2026.07.04", views: 2200,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=29123321521&fileId=227489089670&type=file",
        team: [{ name: "肖宇轩", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>兼备速度和技巧的街机赛车游戏，考验手速和反应能力。</p>"
    },
    {
        id: 45, title: "枪械进化", subtitle: "3D射击闯关枪械升级游戏", category: "game", categoryName: "HTML游戏",
        tags: ["射击", "进化", "闯关"], featured: false, award: "",
        period: "2026.07.04", views: 2300,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://8e01367a-016c-49e2-b03c-cde8c4eca08a-5000.dev.coze.site/",
        team: [{ name: "温秦", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>3D射击闯关小游戏，击杀敌人解锁枪械进化，7级武器形态。</p>"
    },
    {
        id: 46, title: "绝境撤离", subtitle: "3D射击物资搜集撤离游戏", category: "game", categoryName: "HTML游戏",
        tags: ["射击", "撤离", "生存"], featured: false, award: "",
        period: "2026.07.04", views: 2400,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/tf4PeKOR4w8/",
        team: [{ name: "朱嘉铭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>3D射击撤离游戏，搜刮物资、击败BOSS，装备系统与护甲穿透机制。</p>"
    },
    {
        id: 47, title: "暗域求生", subtitle: "暗黑风格肉鸽生存游戏", category: "game", categoryName: "HTML游戏",
        tags: ["肉鸽", "生存", "暗黑"], featured: false, award: "",
        period: "2026.07.04", views: 2500,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://5363984c-cf03-400d-ada2-b514990751cc.dev.coze.site",
        team: [{ name: "冯子杭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>暗黑风格肉鸽类小游戏，探索未知领域，求生战斗。</p>"
    },
    {
        id: 48, title: "红楼学习空间", subtitle: "红楼梦整本书阅读AI学习平台", category: "web", categoryName: "网页应用",
        tags: ["红楼梦", "AI学习", "经典"], featured: false, award: "",
        period: "2026.07.04", views: 2600,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://b5mcxhcdzg.coze.site",
        team: [{ name: "冯彧曦", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>红楼梦整本书阅读AI学习空间，人物图谱、角色扮演、考点问答。</p>"
    },
    {
        id: 49, title: "函数图像生成器", subtitle: "数学函数图像可视化工具", category: "web", categoryName: "网页应用",
        tags: ["数学", "函数", "可视化"], featured: false, award: "",
        period: "2026.07.04", views: 2700,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/6SM9qwZz5JE/",
        team: [{ name: "郭嘉丰美", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>数学函数图像生成工具，直观展示各类函数图像变化。</p>"
    },
    {
        id: 50, title: "高中物理虚拟实验室", subtitle: "交互式物理实验模拟平台", category: "web", categoryName: "网页应用",
        tags: ["物理", "实验", "模拟"], featured: false, award: "",
        period: "2026.07.04", views: 2800,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://43c2bc3ca7864be9aee3feb2a2a36b3d.app.codebuddy.work",
        team: [{ name: "郭嘉丰美", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>8大模块25个实验交互模拟，拖动滑块直观看到物理规律变化。</p>"
    },
    {
        id: 51, title: "有机化学3D分子模型", subtitle: "有机化学分子3D可视化工具", category: "web", categoryName: "网页应用",
        tags: ["化学", "3D", "分子"], featured: false, award: "",
        period: "2026.07.04", views: 2900,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://7111a4478987464084da2098d9a671e0.app.codebuddy.work",
        team: [{ name: "吴兴红", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>有机化学3D分子模型与有机反应动画展示。</p>"
    },
    {
        id: 52, title: "文言文速通", subtitle: "高中文言文AI学习助手", category: "web", categoryName: "网页应用",
        tags: ["文言文", "AI", "学习"], featured: false, award: "",
        period: "2026.07.04", views: 3000,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://e2a3b8436e984783a5e207f43ecbf258.app.codebuddy.work",
        team: [{ name: "袁军", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>帮助高中学生速通文言文，检索、视频链接、高考考情分析。</p>"
    },
    {
        id: 53, title: "剧情小说", subtitle: "互动式剧情小说阅读平台", category: "web", categoryName: "网页应用",
        tags: ["小说", "剧情", "阅读"], featured: false, award: "",
        period: "2026.07.04", views: 3100,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://alidocs.dingtalk.com/notable/record?dentryUuid=93NwLYZXWyk1ydzwSNgP27DXJkyEqBQm&rowId=Q0iLxi7HzN&sheetId=Y5gvPVL&viewId=4TmfcJr",
        team: [{ name: "周艾琳", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>互动式剧情小说阅读与创作平台。</p>"
    },
    {
        id: 54, title: "深空节奏", subtitle: "科幻风格节奏音乐游戏", category: "game", categoryName: "HTML游戏",
        tags: ["节奏", "音乐", "科幻"], featured: false, award: "",
        period: "2026.07.04", views: 3200,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://azure-post-07xv.pagedrop.io/",
        team: [{ name: "袁玺冉", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>Neon Pulse深空节奏，科幻风格的节奏音乐互动游戏。</p>"
    },
    {
        id: 55, title: "历史学习平台", subtitle: "高中历史知识学习查询平台", category: "web", categoryName: "网页应用",
        tags: ["历史", "学习", "查询"], featured: false, award: "",
        period: "2026.07.04", views: 3300,
        cover: "", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://538b14ec5b9740e0b61e760c4f2d7023.app.codebuddy.work",
        team: [{ name: "余浩", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>历史学习平台，支持历史知识检索、朝代查询与考点梳理。</p>"
    },
];

"""

# === 1. Update data.js ===
with open(r"f:\codebuddy编程产品文件夹\js\data.js", "r", encoding="utf-8") as f:
    js = f.read()

# Find the closing ]; of WORKS_DATA
# Find last "];" before "// ============ 作品分类"
insert_pos = js.find("// ============ 作品分类")
# Insert new entries before the ]; line
# Go backwards from insert_pos to find ];
closing = js.rfind("];", 0, insert_pos)
new_js = js[:closing] + new_entries + js[closing:]

with open(r"f:\codebuddy编程产品文件夹\js\data.js", "w", encoding="utf-8") as f:
    f.write(new_js)
print("data.js updated successfully!")

# === 2. Update HTML ===
with open(r"f:\codebuddy编程产品文件夹\学而行AI作品展.html", "r", encoding="utf-8") as f:
    html = f.read()

# Find the closing ]; of WORKS_DATA in the HTML
# The HTML has the data inline in a <script> tag
# Find "历史学习平台" which is the last work in the old list AND a new work
# Actually let's find the closing of the WORKS_DATA array before CATEGORIES or TIMELINE
idx_categories = html.find("// ============ 作品分类")
if idx_categories == -1:
    idx_categories = html.find("const CATEGORIES")

# Go backwards from there to find ];
closing_html = html.rfind("];", 0, idx_categories)
print(f"HTML insert position: {closing_html}")

new_html = html[:closing_html] + new_entries + html[closing_html:]

with open(r"f:\codebuddy编程产品文件夹\学而行AI作品展.html", "w", encoding="utf-8") as f:
    f.write(new_html)
print("HTML updated successfully!")
print(f"New HTML size: {len(new_html)}")
