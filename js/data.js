// ============ 作品数据集 ============
const WORKS_DATA = [
    // ===== 第一组：评价较高 =====
    {
        id: 1, title: "内心小岛", subtitle: "心理探索与情绪管理互动应用", category: "web", categoryName: "网页应用",
        tags: ["心理", "互动", "自我探索"], featured: true, award: "优秀作品",
        period: "2026.07.04", views: 2300,
        cover: "screenshots/work_1.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/6AyhE9UqXsI/",
        team: [{ name: "蔡孟洁", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>内心小岛是一款心理探索与情绪管理互动应用，帮助用户了解自我内心世界。</p>"
    },
    {
        id: 2, title: "政治大脑加强机", subtitle: "政治知识学习与记忆强化工具", category: "web", categoryName: "网页应用",
        tags: ["学习", "政治", "记忆"], featured: false, award: "优秀作品",
        period: "2026.07.04", views: 2100,
        cover: "screenshots/work_2.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://frn5gw7mrw.coze.site",
        team: [{ name: "彭晓印", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>政治大脑加强机是一款政治知识学习与记忆强化工具，通过互动方式提升学习效率。</p>"
    },
    {
        id: 3, title: "自我认识提升测试", subtitle: "MBTI风格自我认知测评应用", category: "web", categoryName: "网页应用",
        tags: ["测评", "自我认知", "心理学"], featured: false, award: "优秀作品",
        period: "2026.07.04", views: 2500,
        cover: "screenshots/work_3.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://2498f977d6874072a5d9291cdf5ebb8e.app.codebuddy.work",
        team: [{ name: "刘芊妤", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>自我认识提升测试是一款帮助用户深入了解自身性格与能力的测评应用。</p>"
    },
    {
        id: 4, title: "声途DDM", subtitle: "音频数据处理与可视化展示平台", category: "web", categoryName: "网页应用",
        tags: ["音频", "数据可视化", "DDM"], featured: true, award: "优秀作品",
        period: "2026.07.04", views: 2000,
        cover: "screenshots/work_4.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://h37vtfz3zq.coze.site",
        team: [{ name: "冯彧曦", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>声途DDM是一个音频数据处理与可视化展示平台。</p>"
    },
    {
        id: 5, title: "XENNO品牌展示", subtitle: "XENNO品牌形象与产品展示官网", category: "web", categoryName: "网页应用",
        tags: ["品牌", "展示", "官网"], featured: true, award: "优秀作品",
        period: "2026.07.04", views: 1800,
        cover: "screenshots/work_5.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "",
        team: [{ name: "许雯茜", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>XENNO品牌展示官网，呈现品牌形象与核心产品。</p>"
    },
    {
        id: 6, title: "法盾", subtitle: "法律法规查询与权益保护工具", category: "web", categoryName: "网页应用",
        tags: ["法律", "查询", "工具"], featured: true, award: "优秀作品",
        period: "2026.07.04", views: 1900,
        cover: "screenshots/work_6.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://2jvbfn237c.coze.site",
        team: [{ name: "艾俊豪", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>法盾是一款法律法规查询与权益保护工具，方便用户获取法律信息。</p>"
    },
    {
        id: 7, title: "DCBTI测评", subtitle: "大数据驱动的认知行为类型测评系统", category: "web", categoryName: "网页应用",
        tags: ["测评", "认知", "行为"], featured: false, award: "优秀作品",
        period: "2026.07.04", views: 2200,
        cover: "screenshots/work_7.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://dcbti.coze.site",
        team: [{ name: "罗涵允", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>DCBTI测评是一款大数据驱动的认知行为类型测评系统。</p>"
    },
    {
        id: 8, title: "生长坐标", subtitle: "个人成长记录与目标追踪平台", category: "web", categoryName: "网页应用",
        tags: ["成长", "目标", "追踪"], featured: true, award: "优秀作品",
        period: "2026.07.04", views: 1700,
        cover: "screenshots/work_8.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://92ead36287564b5897645260eff3cbaf.app.codebuddy.work/?view=admin",
        team: [{ name: "彭稳", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>生长坐标是一款个人成长记录与目标追踪平台。</p>"
    },

    // ===== 第二组 =====
    {
        id: 9, title: "鸡仔游戏", subtitle: "可爱小鸡主题的趣味互动游戏", category: "game", categoryName: "HTML游戏",
        tags: ["治愈", "休闲", "趣味"], featured: false, award: "",
        period: "2026.07.04", views: 3200,
        cover: "screenshots/work_9.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://1d323078-63e8-44d9-bc1d-df836140f6cf.dev.coze.site",
        team: [{ name: "吴姗霖", role: "游戏设计" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>鸡仔游戏是一款以可爱小鸡为主题的趣味互动游戏。</p>"
    },
    {
        id: 10, title: "AI数学学习助手", subtitle: "人工智能驱动的数学学习与辅导工具", category: "web", categoryName: "网页应用",
        tags: ["AI", "数学", "学习"], featured: false, award: "",
        period: "2026.07.04", views: 2800,
        cover: "screenshots/work_10.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/3duoTuiHdno/",
        team: [{ name: "郭嘉丰美", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>AI数学学习助手是一款人工智能驱动的数学学习与辅导工具。</p>"
    },
    {
        id: 11, title: "林中小屋游戏", subtitle: "探索神秘林中小屋的解谜冒险游戏", category: "game", categoryName: "HTML游戏",
        tags: ["解谜", "冒险", "探索"], featured: false, award: "",
        period: "2026.07.04", views: 3100,
        cover: "screenshots/work_11.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://app-coxxt55c8ow1.appmiaoda.com",
        team: [{ name: "刘梓源", role: "游戏设计" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>林中小屋游戏是一款探索神秘林中小屋的解谜冒险游戏。</p>"
    },
    {
        id: 12, title: "地理学习工具", subtitle: "互动式地理知识学习与地图探索平台", category: "web", categoryName: "网页应用",
        tags: ["地理", "学习", "地图"], featured: false, award: "",
        period: "2026.07.04", views: 1500,
        cover: "screenshots/work_12.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://b8611df3b02f4ef795ab6c166a79f512.app.codebuddy.work",
        team: [{ name: "汤诗昕", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>地理学习工具是一款互动式地理知识学习与地图探索平台。</p>"
    },
    {
        id: 13, title: "情绪植物共生系列图", subtitle: "情绪与植物共生的创意插画系列", category: "image", categoryName: "图片作品",
        tags: ["插画", "情绪", "植物"], featured: true, award: "",
        period: "2026.07.04", views: 2600,
        cover: "screenshots/work_13.png", previewType: "image", images: [],
        team: [{ name: "陈玺竹", role: "绘画设计" }],
        techStack: ["Procreate", "Photoshop"], designTools: ["Procreate", "Photoshop"],
        content: "<h3>作品简介</h3><p>情绪植物共生系列图是一组以情绪与植物共生关系为主题的创意插画作品。</p>"
    },
    {
        id: 14, title: "模特走台展示视频", subtitle: "时装模特T台走秀展示视频作品", category: "video", categoryName: "视频作品",
        tags: ["时装", "走秀", "展示"], featured: false, award: "",
        period: "2026.07.04", views: 3400,
        cover: "screenshots/work_14.png", previewType: "video", videoUrl: "",
        team: [{ name: "曹雅灵", role: "导演/剪辑" }],
        techStack: ["Premiere Pro", "After Effects"], designTools: [],
        content: "<h3>作品简介</h3><p>模特走台展示视频是一部展现时装模特T台风采的视频作品。</p>"
    },
    {
        id: 15, title: "历史学习网站", subtitle: "沉浸式历史知识学习与探索平台", category: "web", categoryName: "网页应用",
        tags: ["历史", "学习", "教育"], featured: false, award: "",
        period: "2026.07.04", views: 1600,
        cover: "screenshots/work_15.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://app-cr1r84icz6kh.appmiaoda.com",
        team: [{ name: "郑粟月", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>历史学习网站是一个沉浸式历史知识学习与探索平台。</p>"
    },
    {
        id: 16, title: "医典系统", subtitle: "医学知识查询与健康管理平台", category: "web", categoryName: "网页应用",
        tags: ["医学", "健康", "查询"], featured: true, award: "",
        period: "2026.07.04", views: 1400,
        cover: "screenshots/work_16.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "",
        team: [{ name: "刘俊睿", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>医典系统是一个医学知识查询与健康管理平台。</p>"
    },

    // ===== 第三组 =====
    {
        id: 17, title: "LearnOS智慧学习平台", subtitle: "智能化操作系统学习与管理平台", category: "web", categoryName: "网页应用",
        tags: ["AI", "学习平台", "管理"], featured: true,
        period: "2026.07.04", views: 2900,
        cover: "screenshots/work_17.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://kf59cj8q2f.coze.site",
        team: [{ name: "尹康同", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>LearnOS智慧学习平台是一款智能化的学习管理与知识获取平台。</p>"
    },
    {
        id: 18, title: "Rc查询网站", subtitle: "快速信息检索与数据查询平台", category: "web", categoryName: "网页应用",
        tags: ["查询", "检索", "数据"], featured: true,
        period: "2026.07.04", views: 1200,
        cover: "screenshots/work_18.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://780fa909e64341eeab468e54d56489e2.app.codebuddy.work",
        team: [{ name: "张书恺", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>Rc查询网站是一个快速信息检索与数据查询平台。</p>"
    },
    {
        id: 19, title: "宇宙天体力学模拟", subtitle: "天体运动力学可视化模拟系统", category: "web", categoryName: "网页应用",
        tags: ["天文学", "模拟", "物理"], featured: false,
        period: "2026.07.04", views: 2700,
        cover: "screenshots/work_19.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://zmw894v5kb.coze.site",
        team: [{ name: "朱施霖", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript", "Canvas"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>宇宙天体力学模拟是一个天体运动力学可视化模拟系统。</p>"
    },
    {
        id: 20, title: "赛车视频", subtitle: "高燃赛车竞速主题视频作品", category: "video", categoryName: "视频作品",
        tags: ["赛车", "竞速", "视频"], featured: true,
        period: "2026.07.04", views: 1300,
        cover: "screenshots/work_20.png", previewType: "video", videoUrl: "",
        team: [{ name: "徐永棋", role: "导演/剪辑" }],
        techStack: ["Premiere Pro", "After Effects"], designTools: [],
        content: "<h3>作品简介</h3><p>赛车视频是一部高燃赛车竞速主题的视频作品。</p>"
    },

    // ===== 第四组 =====
    {
        id: 21, title: "高考志愿填报", subtitle: "高考志愿智能推荐与填报辅助系统", category: "web", categoryName: "网页应用",
        tags: ["高考", "志愿", "推荐"], featured: true,
        period: "2026.07.04", views: 3500,
        cover: "screenshots/work_21.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "优途志愿查.html",
        team: [{ name: "彭浩楠", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>高考志愿填报是一款智能推荐与辅助填报高考志愿的系统。</p>"
    },
    {
        id: 22, title: "高中物理学习网", subtitle: "高中物理知识体系化学习平台", category: "web", categoryName: "网页应用",
        tags: ["物理", "学习", "高中"], featured: false,
        period: "2026.07.04", views: 1600,
        cover: "screenshots/work_22.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://945c4625-7c36-418b-b86f-3a1c033759c9.dev.coze.site",
        team: [{ name: "陈一凡", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>高中物理学习网是一个体系化的高中物理知识学习平台。</p>"
    },
    {
        id: 23, title: "球类运动推荐软件", subtitle: "基于兴趣与体能的球类运动智能推荐", category: "web", categoryName: "网页应用",
        tags: ["体育", "推荐", "运动"], featured: false,
        period: "2026.07.04", views: 1400,
        cover: "screenshots/work_23.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/jB_pwycrZ2A/",
        team: [{ name: "潘俊希", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>球类运动推荐软件根据用户兴趣与体能智能推荐适合的球类运动。</p>"
    },
    {
        id: 24, title: "蓝警游戏", subtitle: "蓝色警戒风格的策略塔防游戏", category: "game", categoryName: "HTML游戏",
        tags: ["策略", "塔防", "军事"], featured: false,
        period: "2026.07.04", views: 2800,
        cover: "screenshots/work_24.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "",
        team: [{ name: "陈奕霖", role: "游戏设计" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>蓝警游戏是一款蓝色警戒风格的策略塔防游戏。</p>"
    },

    // ===== 第五组 =====
    {
        id: 25, title: "青衿雅搭", subtitle: "智能服饰搭配推荐与风格探索平台", category: "web", categoryName: "网页应用",
        tags: ["穿搭", "推荐", "时尚"], featured: true,
        period: "2026.07.04", views: 2400,
        cover: "screenshots/work_25.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://c3adb5138529446b94ef6218a9aa65af.app.codebuddy.work/",
        team: [{ name: "蒋博", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>青衿雅搭是一款智能服饰搭配推荐与风格探索平台。</p>"
    },
    {
        id: 26, title: "优学系统", subtitle: "一站式学习管理与成绩追踪系统", category: "web", categoryName: "网页应用",
        tags: ["学习", "管理", "成绩"], featured: false,
        period: "2026.07.04", views: 1500,
        cover: "screenshots/work_26.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://1eb3e033706248e7b413968f8c457dba.app.codebuddy.work",
        team: [{ name: "刘明杰", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>优学系统是一站式学习管理与成绩追踪平台。</p>"
    },

    // ===== 第六组 =====
    {
        id: 27, title: "轻量热量记录", subtitle: "简洁高效的日常饮食热量追踪工具", category: "web", categoryName: "网页应用",
        tags: ["健康", "饮食", "记录"], featured: false,
        period: "2026.07.04", views: 1100,
        cover: "screenshots/work_27.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://f0ee3ad488df4fcdbf9a1692ba18f833.app.codebuddy.work",
        team: [{ name: "舒泓杰", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>轻量热量记录是一款简洁高效的日常饮食热量追踪工具。</p>"
    },
    {
        id: 28, title: "AI短剧", subtitle: "AI辅助创作的短视频微剧作品", category: "video", categoryName: "视频作品",
        tags: ["AI", "短剧", "创意"], featured: false,
        period: "2026.07.04", views: 3000,
        cover: "screenshots/work_28.png", previewType: "video", videoUrl: "",
        team: [{ name: "闫宣沂", role: "导演/剪辑" }],
        techStack: ["AI工具", "Premiere Pro"], designTools: [],
        content: "<h3>作品简介</h3><p>AI短剧是一部利用AI辅助创作的短视频微剧作品。</p>"
    },
    {
        id: 29, title: "跑酷游戏", subtitle: "快节奏横版跑酷跳跃HTML5游戏", category: "game", categoryName: "HTML游戏",
        tags: ["跑酷", "动作", "快节奏"], featured: false,
        period: "2026.07.04", views: 3300,
        cover: "screenshots/work_29.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/u7NadTpZd6c/",
        team: [{ name: "喻子山", role: "游戏设计" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>跑酷游戏是一款快节奏的横版跑酷跳跃HTML5游戏。</p>"
    },

    // ===== 新增作品（来自AI未来创造营） =====
    {
        id: 30, title: "辩论会平台", subtitle: "实时辩论互动交流平台", category: "web", categoryName: "网页应用",
        tags: ["辩论", "互动", "交流"], featured: false, award: "",
        period: "2026.07.04", views: 800,
        cover: "screenshots/work_30.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://13ce5a75444042d0a60bc09c66ff1fe2.app.codebuddy.work/",
        team: [{ name: "余红琳", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>辩论实时进行平台，支持多方在线辩论互动。</p>"
    },
    {
        id: 31, title: "机甲游戏", subtitle: "机甲主题动作对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["机甲", "动作", "对战"], featured: false, award: "",
        period: "2026.07.04", views: 900,
        cover: "screenshots/work_31.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://5gyz8k584z.coze.site/",
        team: [{ name: "钱途", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>机甲对战HTML5游戏，操控机甲进行激烈战斗。</p>"
    },
    {
        id: 32, title: "KPOP首尔行程助手", subtitle: "KPOP追星行程与应援查询工具", category: "web", categoryName: "网页应用",
        tags: ["KPOP", "追星", "应援"], featured: false, award: "",
        period: "2026.07.04", views: 1000,
        cover: "screenshots/work_32.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/CyMwODd_Pao/",
        team: [{ name: "艾彦希", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>单机可用KPOP首尔行程&应援查询小程序，覆盖打歌、演唱会、应援打卡。</p>"
    },
    {
        id: 33, title: "数学冒险", subtitle: "数学刷题冒险闯关学习应用", category: "web", categoryName: "网页应用",
        tags: ["数学", "闯关", "学习"], featured: false, award: "",
        period: "2026.07.04", views: 1100,
        cover: "screenshots/work_33.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://c1d58022c2964640bc5545ec24d075c1.app.codebuddy.work",
        team: [{ name: "黎思齐", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>面向高一学生的数学刷题应用，包含每日挑战、主线闯关、专项训练。</p>"
    },
    {
        id: 34, title: "蚀野织境", subtitle: "像素风地牢冒险闯关游戏", category: "game", categoryName: "HTML游戏",
        tags: ["像素", "地牢", "冒险"], featured: false, award: "",
        period: "2026.07.04", views: 1200,
        cover: "screenshots/work_34.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://a0dc409916434a0fa2663bfa0769a63f.app.codebuddy.work",
        team: [{ name: "文泓锦", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>像素风地牢闯关游戏，多种职业、道具与技能，畅快割草体验。</p>"
    },
    {
        id: 35, title: "4V4 PVP对战", subtitle: "宝可梦风格4V4角色对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["对战", "PVP", "宝可梦"], featured: false, award: "",
        period: "2026.07.04", views: 1300,
        cover: "screenshots/work_35.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://2gz588mcwf.coze.site",
        team: [{ name: "曾厚铭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>4v4的PVP对战游戏，选择角色战斗，类似宝可梦玩法。</p>"
    },
    {
        id: 36, title: "射击大作战", subtitle: "积分制射击对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["射击", "对战", "积分"], featured: false, award: "",
        period: "2026.07.04", views: 1400,
        cover: "screenshots/work_36.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://possibly-tags-gaming-contributing.trycloudflare.com/index.html",
        team: [{ name: "董书铭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>射击游戏可拾取积分换道具，多级武器与BOSS对战系统。</p>"
    },
    {
        id: 37, title: "坦克地带", subtitle: "坦克主题对战游戏", category: "game", categoryName: "HTML游戏",
        tags: ["坦克", "对战", "策略"], featured: false, award: "",
        period: "2026.07.04", views: 1500,
        cover: "screenshots/work_37.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://4471c9a8-90b6-4cf3-b2d3-7df87600dd91.dev.coze.site",
        team: [{ name: "王浩宇", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>单机坦克对战游戏，策略操控与火力对决。</p>"
    },
    {
        id: 38, title: "丧尸射击生存", subtitle: "丧尸主题射击生存游戏", category: "game", categoryName: "HTML游戏",
        tags: ["丧尸", "射击", "生存"], featured: false, award: "",
        period: "2026.07.04", views: 1600,
        cover: "screenshots/work_38.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://16aba2b4-c07b-48e2-be40-4709819de737.dev.coze.site/",
        team: [{ name: "李青松", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>丧尸主题射击生存游戏，在尸潮中存活下来。</p>"
    },
    {
        id: 39, title: "FPS枪械进化", subtitle: "赛博朋克风格FPS射击游戏", category: "game", categoryName: "HTML游戏",
        tags: ["FPS", "赛博朋克", "进化"], featured: false, award: "",
        period: "2026.07.04", views: 1700,
        cover: "screenshots/work_39.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/EoSddVDXO7o/",
        team: [{ name: "胡子涵", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>赛博朋克风格FPS射击，击杀敌人枪械自动进化，6阶形态。</p>"
    },
    {
        id: 40, title: "FPS训练与九科问答", subtitle: "FPS射击训练与高中学科问答", category: "web", categoryName: "网页应用",
        tags: ["FPS", "训练", "学科"], featured: false, award: "",
        period: "2026.07.04", views: 1800,
        cover: "screenshots/work_40.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://9ad5e1df-a1b9-4588-bf97-c76af38bf026.dev.coze.site",
        team: [{ name: "黄渤", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>FPS射击准度训练，结合高中九大学科基础知识问答。</p>"
    },
    {
        id: 41, title: "寻道大千模拟器", subtitle: "修仙主题休闲小游戏", category: "game", categoryName: "HTML游戏",
        tags: ["休闲", "修仙", "模拟"], featured: false, award: "",
        period: "2026.07.04", views: 1900,
        cover: "screenshots/work_41.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://3q3bwvxhv5.coze.site",
        team: [{ name: "田青松", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>休闲修仙小游戏，体验寻道大千的修仙之旅。</p>"
    },
    {
        id: 42, title: "NailMatch美甲选款", subtitle: "AI智能美甲款式推荐工具", category: "web", categoryName: "网页应用",
        tags: ["美甲", "AI推荐", "时尚"], featured: false, award: "",
        period: "2026.07.04", views: 2000,
        cover: "screenshots/work_42.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://snore-habit-42017133.figma.site",
        team: [{ name: "罗涵允", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>美甲选款神器，勾选场景、甲型和元素，AI匹配海量美甲款式。</p>"
    },
    {
        id: 43, title: "智建云AI", subtitle: "乡村建房AI辅助平台", category: "web", categoryName: "网页应用",
        tags: ["建房", "AI", "规划"], featured: false, award: "",
        period: "2026.07.04", views: 2100,
        cover: "screenshots/work_43.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://59a58580c4c24f9b9724af97e66112f4.app.codebuddy.work",
        team: [{ name: "徐永棋", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>帮助房屋建设者提供AI建议，支持2D/3D建模与文字解析。</p>"
    },
    {
        id: 44, title: "赛车模拟器", subtitle: "街机风格赛车竞速游戏", category: "game", categoryName: "HTML游戏",
        tags: ["赛车", "竞速", "街机"], featured: false, award: "",
        period: "2026.07.04", views: 2200,
        cover: "screenshots/work_44.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://qr.dingtalk.com/page/yunpan?route=previewDentry&spaceId=29123321521&fileId=227489089670&type=file",
        team: [{ name: "肖宇轩", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>兼备速度和技巧的街机赛车游戏，考验手速和反应能力。</p>"
    },
    {
        id: 45, title: "枪械进化", subtitle: "3D射击闯关枪械升级游戏", category: "game", categoryName: "HTML游戏",
        tags: ["射击", "进化", "闯关"], featured: false, award: "",
        period: "2026.07.04", views: 2300,
        cover: "screenshots/work_45.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://8e01367a-016c-49e2-b03c-cde8c4eca08a-5000.dev.coze.site/",
        team: [{ name: "温秦", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>3D射击闯关小游戏，击杀敌人解锁枪械进化，7级武器形态。</p>"
    },
    {
        id: 46, title: "绝境撤离", subtitle: "3D射击物资搜集撤离游戏", category: "game", categoryName: "HTML游戏",
        tags: ["射击", "撤离", "生存"], featured: false, award: "",
        period: "2026.07.04", views: 2400,
        cover: "screenshots/work_46.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/tf4PeKOR4w8/",
        team: [{ name: "朱嘉铭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>3D射击撤离游戏，搜刮物资、击败BOSS，装备系统与护甲穿透机制。</p>"
    },
    {
        id: 47, title: "暗域求生", subtitle: "暗黑风格肉鸽生存游戏", category: "game", categoryName: "HTML游戏",
        tags: ["肉鸽", "生存", "暗黑"], featured: false, award: "",
        period: "2026.07.04", views: 2500,
        cover: "screenshots/work_47.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://5363984c-cf03-400d-ada2-b514990751cc.dev.coze.site",
        team: [{ name: "冯子杭", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>暗黑风格肉鸽类小游戏，探索未知领域，求生战斗。</p>"
    },
    {
        id: 48, title: "红楼学习空间", subtitle: "红楼梦整本书阅读AI学习平台", category: "web", categoryName: "网页应用",
        tags: ["红楼梦", "AI学习", "经典"], featured: false, award: "",
        period: "2026.07.04", views: 2600,
        cover: "screenshots/work_48.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://b5mcxhcdzg.coze.site",
        team: [{ name: "冯彧曦", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>红楼梦整本书阅读AI学习空间，人物图谱、角色扮演、考点问答。</p>"
    },
    {
        id: 49, title: "函数图像生成器", subtitle: "数学函数图像可视化工具", category: "web", categoryName: "网页应用",
        tags: ["数学", "函数", "可视化"], featured: false, award: "",
        period: "2026.07.04", views: 2700,
        cover: "screenshots/work_49.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://www.coze.cn/s/6SM9qwZz5JE/",
        team: [{ name: "郭嘉丰美", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>数学函数图像生成工具，直观展示各类函数图像变化。</p>"
    },
    {
        id: 50, title: "高中物理虚拟实验室", subtitle: "交互式物理实验模拟平台", category: "web", categoryName: "网页应用",
        tags: ["物理", "实验", "模拟"], featured: false, award: "",
        period: "2026.07.04", views: 2800,
        cover: "screenshots/work_50.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://43c2bc3ca7864be9aee3feb2a2a36b3d.app.codebuddy.work",
        team: [{ name: "郭嘉丰美", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>8大模块25个实验交互模拟，拖动滑块直观看到物理规律变化。</p>"
    },
    {
        id: 51, title: "有机化学3D分子模型", subtitle: "有机化学分子3D可视化工具", category: "web", categoryName: "网页应用",
        tags: ["化学", "3D", "分子"], featured: false, award: "",
        period: "2026.07.04", views: 2900,
        cover: "screenshots/work_51.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://7111a4478987464084da2098d9a671e0.app.codebuddy.work",
        team: [{ name: "吴兴红", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>有机化学3D分子模型与有机反应动画展示。</p>"
    },
    {
        id: 52, title: "文言文速通", subtitle: "高中文言文AI学习助手", category: "web", categoryName: "网页应用",
        tags: ["文言文", "AI", "学习"], featured: false, award: "",
        period: "2026.07.04", views: 3000,
        cover: "screenshots/work_52.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://e2a3b8436e984783a5e207f43ecbf258.app.codebuddy.work",
        team: [{ name: "袁军", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>帮助高中学生速通文言文，检索、视频链接、高考考情分析。</p>"
    },
    {
        id: 53, title: "剧情小说", subtitle: "互动式剧情小说阅读平台", category: "web", categoryName: "网页应用",
        tags: ["小说", "剧情", "阅读"], featured: false, award: "",
        period: "2026.07.04", views: 3100,
        cover: "screenshots/work_53.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://alidocs.dingtalk.com/notable/record?dentryUuid=93NwLYZXWyk1ydzwSNgP27DXJkyEqBQm&rowId=Q0iLxi7HzN&sheetId=Y5gvPVL&viewId=4TmfcJr",
        team: [{ name: "周艾琳", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>互动式剧情小说阅读与创作平台。</p>"
    },
    {
        id: 54, title: "深空节奏", subtitle: "科幻风格节奏音乐游戏", category: "game", categoryName: "HTML游戏",
        tags: ["节奏", "音乐", "科幻"], featured: false, award: "",
        period: "2026.07.04", views: 3200,
        cover: "screenshots/work_54.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://azure-post-07xv.pagedrop.io/",
        team: [{ name: "袁玺冉", role: "设计与开发" }],
        techStack: ["HTML5 Canvas", "JavaScript"], designTools: ["Aseprite"],
        content: "<h3>游戏简介</h3><p>Neon Pulse深空节奏，科幻风格的节奏音乐互动游戏。</p>"
    },
    {
        id: 55, title: "历史学习平台", subtitle: "高中历史知识学习查询平台", category: "web", categoryName: "网页应用",
        tags: ["历史", "学习", "查询"], featured: false, award: "",
        period: "2026.07.04", views: 3300,
        cover: "screenshots/work_55.png", previewType: "iframe", previewUrl: "", githubUrl: "", liveUrl: "https://538b14ec5b9740e0b61e760c4f2d7023.app.codebuddy.work",
        team: [{ name: "余浩", role: "设计与开发" }],
        techStack: ["HTML", "CSS", "JavaScript"], designTools: ["Figma"],
        content: "<h3>项目简介</h3><p>历史学习平台，支持历史知识检索、朝代查询与考点梳理。</p>"
    },
];

// ============ 作品分类 ============
const CATEGORIES = [
    { id: "all", name: "全部", icon: "📁" },
    { id: "web", name: "网页应用", icon: "🌐" },
    { id: "game", name: "HTML游戏", icon: "🎮" },
    { id: "video", name: "视频作品", icon: "🎬" },
    { id: "image", name: "图片作品", icon: "🖼️" }
];

// ============ 团队成员（按组别） ============
const TEAM_MEMBERS = [
    // 第一组
    { name: "蔡孟洁", role: "设计与开发", bio: "作品《内心小岛》，优秀作品", group: "第一组" },
    { name: "彭晓印", role: "设计与开发", bio: "作品《政治大脑加强机》，优秀作品", group: "第一组" },
    { name: "刘芊妤", role: "设计与开发", bio: "作品《自我认识提升测试》，优秀作品", group: "第一组" },
    { name: "冯彧曦", role: "设计与开发", bio: "作品《声途DDM》，优秀作品", group: "第一组" },
    { name: "许雯茜", role: "设计与开发", bio: "作品《XENNO品牌展示》，优秀作品", group: "第一组" },
    { name: "艾俊豪", role: "设计与开发", bio: "作品《法盾》，优秀作品", group: "第一组" },
    { name: "罗涵允", role: "设计与开发", bio: "作品《DCBTI测评》，优秀作品", group: "第一组" },
    { name: "彭稳", role: "设计与开发", bio: "作品《生长坐标》，优秀作品", group: "第一组" },
    { name: "冯彧曦", role: "设计与开发", bio: "作品《红楼学习空间》", group: "第一组" },
    { name: "罗涵允", role: "设计与开发", bio: "作品《NailMatch美甲选款》", group: "第一组" },
    // 第二组
    { name: "吴姗霖", role: "游戏设计", bio: "作品《鸡仔游戏》", group: "第二组" },
    { name: "郭嘉丰美", role: "设计与开发", bio: "作品《AI数学学习助手》", group: "第二组" },
    { name: "刘梓源", role: "游戏设计", bio: "作品《林中小屋游戏》", group: "第二组" },
    { name: "汤诗昕", role: "设计与开发", bio: "作品《地理学习工具》", group: "第二组" },
    { name: "陈玺竹", role: "绘画设计", bio: "作品《情绪植物共生系列图》", group: "第二组" },
    { name: "曹雅灵", role: "导演/剪辑", bio: "作品《模特走台展示视频》", group: "第二组" },
    { name: "郑粟月", role: "设计与开发", bio: "作品《历史学习网站》", group: "第二组" },
    { name: "刘俊睿", role: "设计与开发", bio: "作品《医典系统》", group: "第二组" },
    { name: "郭嘉丰美", role: "设计与开发", bio: "作品《函数图像生成器》", group: "第二组" },
    { name: "郭嘉丰美", role: "设计与开发", bio: "作品《高中物理虚拟实验室》", group: "第二组" },
    // 第三组
    { name: "尹康同", role: "设计与开发", bio: "作品《LearnOS智慧学习平台》", group: "第三组" },
    { name: "张书恺", role: "设计与开发", bio: "作品《Rc查询网站》", group: "第三组" },
    { name: "朱施霖", role: "设计与开发", bio: "作品《宇宙天体力学模拟》", group: "第三组" },
    { name: "徐永棋", role: "设计与开发", bio: "作品《乡村建房》", group: "第三组" },
    { name: "徐永棋", role: "设计与开发", bio: "作品《智建云AI》", group: "第三组" },
    // 第四组
    { name: "彭浩楠", role: "设计与开发", bio: "作品《高考志愿填报》", group: "第四组" },
    { name: "陈一凡", role: "设计与开发", bio: "作品《高中物理学习网》", group: "第四组" },
    { name: "潘俊希", role: "设计与开发", bio: "作品《球类运动推荐软件》", group: "第四组" },
    { name: "陈奕霖", role: "游戏设计", bio: "作品《蓝警游戏》", group: "第四组" },
    // 第五组
    { name: "蒋博", role: "设计与开发", bio: "作品《青衿雅搭》", group: "第五组" },
    { name: "刘明杰", role: "设计与开发", bio: "作品《优学系统》", group: "第五组" },
    // 第六组
    { name: "舒泓杰", role: "设计与开发", bio: "作品《轻量热量记录》", group: "第六组" },
    { name: "闫宣沂", role: "导演/剪辑", bio: "作品《AI短剧》", group: "第六组" },
    { name: "喻子山", role: "游戏设计", bio: "作品《跑酷游戏》", group: "第六组" },
    // 第七组（新增作品）
    { name: "余红琳", role: "设计与开发", bio: "作品《辩论会平台》", group: "第七组" },
    { name: "钱途", role: "设计与开发", bio: "作品《机甲游戏》", group: "第七组" },
    { name: "艾彦希", role: "设计与开发", bio: "作品《KPOP首尔行程助手》", group: "第七组" },
    { name: "黎思齐", role: "设计与开发", bio: "作品《数学冒险》", group: "第七组" },
    { name: "文泓锦", role: "设计与开发", bio: "作品《蚀野织境》", group: "第七组" },
    { name: "曾厚铭", role: "设计与开发", bio: "作品《4V4 PVP对战》", group: "第七组" },
    { name: "董书铭", role: "设计与开发", bio: "作品《射击大作战》", group: "第七组" },
    { name: "王浩宇", role: "设计与开发", bio: "作品《坦克地带》", group: "第七组" },
    { name: "李青松", role: "设计与开发", bio: "作品《丧尸射击生存》", group: "第七组" },
    { name: "胡子涵", role: "设计与开发", bio: "作品《FPS枪械进化》", group: "第七组" },
    { name: "黄渤", role: "设计与开发", bio: "作品《FPS训练与九科问答》", group: "第七组" },
    { name: "田青松", role: "设计与开发", bio: "作品《寻道大千模拟器》", group: "第七组" },
    { name: "肖宇轩", role: "设计与开发", bio: "作品《赛车模拟器》", group: "第七组" },
    { name: "温秦", role: "设计与开发", bio: "作品《枪械进化》", group: "第七组" },
    { name: "朱嘉铭", role: "设计与开发", bio: "作品《绝境撤离》", group: "第七组" },
    { name: "冯子杭", role: "设计与开发", bio: "作品《暗域求生》", group: "第七组" },
    { name: "吴兴红", role: "设计与开发", bio: "作品《有机化学3D分子模型》", group: "第七组" },
    { name: "袁军", role: "设计与开发", bio: "作品《文言文速通》", group: "第七组" },
    { name: "周艾琳", role: "设计与开发", bio: "作品《剧情小说》", group: "第七组" },
    { name: "袁玺冉", role: "设计与开发", bio: "作品《深空节奏》", group: "第七组" },
    { name: "余浩", role: "设计与开发", bio: "作品《历史学习平台》", group: "第七组" }
];

// ============ 时间轴事件 ============
const TIMELINE_EVENTS = [
    { year: "2021", title: "团队成立", desc: "由同学们组建，聚焦数字创意与技术融合" },
    { year: "2022", title: "首次展示", desc: "作品在校园展示中获得好评，团队逐步壮大" },
    { year: "2023", title: "规模扩展", desc: "团队分为多个小组，涵盖网页应用、游戏、视频、图片四大方向" },
    { year: "2024", title: "多元发展", desc: "各组作品百花齐放，类型不断丰富" },
    { year: "2025", title: "品牌升级", desc: "建立作品展示平台，展示本学期优秀作品成果" }
];

// ============ 荣誉 ============
const HONORS = [
    { icon: "🏆", name: "第一组作品整体优秀", year: "2025" },
    { icon: "🌟", name: "AI短剧创意佳作", year: "2025" },
    { icon: "🎮", name: "跑酷游戏人气最高", year: "2025" },
    { icon: "🎬", name: "模特走台展示视频持续热门", year: "2025" },
    { icon: "☄️", name: "宇宙天体力学模拟技术亮点", year: "2025" },
    { icon: "📚", name: "高考志愿填报关注度最高", year: "2025" }
];
