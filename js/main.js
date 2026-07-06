// ============ 导航栏滚动效果 ============
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // 汉堡菜单
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        // 点击链接关闭菜单
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // 全局搜索框回车跳转
    const searchInputs = document.querySelectorAll('.nav-search input');
    searchInputs.forEach(input => {
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && input.value.trim()) {
                window.location.href = `works.html?search=${encodeURIComponent(input.value.trim())}`;
            }
        });
    });

    // 初始化对应页面的功能
    initWorksPage();
    initDetailPage();
    initContactForm();
    initLightbox();
    initTeamStats();
});

// ============ 作品列表页 ============
function initWorksPage() {
    const grid = document.getElementById('worksGrid');
    if (!grid) return;

    const urlParams = new URLSearchParams(window.location.search);
    let currentCategory = urlParams.get('category') || 'all';
    let currentSearch = urlParams.get('search') || '';
    let currentTag = '';
    let featuredOnly = false;
    let sortBy = 'default';

    // 初始化筛选按钮状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        if (btn.dataset.category === currentCategory) btn.classList.add('active');
        btn.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            renderWorks();
        });
    });

    // 搜索框
    const searchBox = document.querySelector('.filter-toolbar .search-box input');
    if (searchBox) {
        if (currentSearch) searchBox.value = currentSearch;
        searchBox.addEventListener('input', () => {
            currentSearch = searchBox.value.trim();
            renderWorks();
        });
    }

    // 排序
    const sortSelect = document.querySelector('.sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            sortBy = sortSelect.value;
            renderWorks();
        });
    }

    // 标签筛选 - 动态收集所有标签
    const allTags = [...new Set(WORKS_DATA.flatMap(w => w.tags))];
    const tagGroup = document.querySelector('.tag-group');
    if (tagGroup) {
        allTags.forEach(tag => {
            const btn = document.createElement('button');
            btn.className = 'tag-btn';
            btn.textContent = tag;
            btn.addEventListener('click', function() {
                if (this.classList.contains('active')) {
                    this.classList.remove('active');
                    currentTag = '';
                } else {
                    document.querySelectorAll('.tag-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    currentTag = tag;
                }
                renderWorks();
            });
            tagGroup.appendChild(btn);
        });
    }

    // 仅看获奖
    const awardToggle = document.querySelector('.filter-toggle');
    if (awardToggle) {
        awardToggle.addEventListener('click', function() {
            featuredOnly = !featuredOnly;
            this.classList.toggle('active', featuredOnly);
            this.style.background = featuredOnly ? 'var(--primary)' : '';
            this.style.color = featuredOnly ? '#fff' : '';
            renderWorks();
        });
    }

    // 作品总数
    const countEl = document.getElementById('worksCount');
    if (countEl) countEl.textContent = WORKS_DATA.length;

    function getFilteredWorks() {
        let works = [...WORKS_DATA];

        if (currentCategory && currentCategory !== 'all') {
            works = works.filter(w => w.category === currentCategory);
        }
        if (currentSearch) {
            const s = currentSearch.toLowerCase();
            works = works.filter(w => 
                w.title.toLowerCase().includes(s) || 
                w.subtitle.toLowerCase().includes(s) ||
                w.tags.some(t => t.toLowerCase().includes(s))
            );
        }
        if (currentTag) {
            works = works.filter(w => w.tags.includes(currentTag));
        }
        if (featuredOnly) {
            works = works.filter(w => w.award);
        }

        // 排序
        if (sortBy === 'newest') {
            works.sort((a, b) => new Date(b.period.split(' - ')[0]) - new Date(a.period.split(' - ')[0]));
        } else if (sortBy === 'popular') {
            works.sort((a, b) => b.views - a.views);
        }

        return works;
    }

    function renderWorks() {
        const works = getFilteredWorks();
        if (countEl) countEl.textContent = works.length;

        grid.innerHTML = works.map(w => createWorkCard(w)).join('');
        
        document.querySelectorAll('.work-card').forEach((card, i) => {
            card.classList.add('fade-in');
            card.style.animationDelay = `${i * 0.05}s`;
        });
    }

    renderWorks();
}

// ============ 生成作品卡片HTML ============
function createWorkCard(work) {
    const coverStyle = work.cover ? 
        `<img src="${work.cover}" alt="${work.title}" loading="lazy">` :
        `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:3rem;color:var(--text-muted)">${getCategoryIcon(work.category)}</div>`;

    return `
    <a href="detail.html?id=${work.id}" class="work-card fade-in">
        <div class="work-card-cover">
            ${coverStyle}
            <div class="card-overlay">
                <span class="view-btn">查看详情</span>
            </div>
            ${work.award ? `<span class="work-card-badge">✦ ${work.award.split('等奖')[0] + '等奖' || '获奖'}</span>` : ''}
            <span class="work-card-tag">${work.categoryName}</span>
        </div>
        <div class="work-card-body">
            <h3>${work.title}</h3>
            <p class="desc">${work.subtitle}</p>
            <div class="work-card-meta">
                <span>👁 ${formatViews(work.views)}</span>
                <span>👤 ${work.team.map(m => m.name).join('、')}</span>
                <span>📅 ${work.period.split(' - ')[0]}</span>
            </div>
        </div>
    </a>`;
}

// ============ 作品详情页 ============
function initDetailPage() {
    const detailContainer = document.getElementById('detailContent');
    if (!detailContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const workId = parseInt(urlParams.get('id'));
    const work = WORKS_DATA.find(w => w.id === workId);

    if (!work) {
        detailContainer.innerHTML = '<div class="page-header"><h1>作品不存在</h1><p>请检查链接是否正确</p></div>';
        return;
    }

    document.title = `${work.title} - 作品展示`;
    renderDetail(work);
    renderRelatedWorks(work);
}

function renderDetail(work) {
    const container = document.getElementById('detailContent');
    
    container.innerHTML = `
    <div class="breadcrumb">
        <a href="index.html">首页</a> <span class="sep">›</span>
        <a href="works.html?category=${work.category}">作品库</a> <span class="sep">›</span>
        <span>${work.title}</span>
    </div>

    <div class="detail-wrapper">
        <!-- 标题区 -->
        <div class="detail-header">
            <h1>${work.title}</h1>
            <p style="color:var(--text-secondary);font-size:1.05rem;margin-bottom:12px">${work.subtitle}</p>
            <div class="tag-row">
                <span class="tag category">${work.categoryName}</span>
                ${work.award ? `<span class="tag award">✦ ${work.award}</span>` : ''}
                ${work.tags.map(t => `<span class="tag" style="background:var(--bg);border:1px solid var(--border);color:var(--text-secondary)">${t}</span>`).join('')}
            </div>
            <div class="detail-meta">
                <span>📅 ${work.period}</span>
                <span>👁 ${formatViews(work.views)} 次浏览</span>
            </div>
        </div>

        <!-- 预览区 -->
        ${renderPreviewArea(work)}

        <!-- 创作信息 -->
        <div class="detail-section">
            <h3>👥 创作信息</h3>
            <div class="creator-list">
                ${work.team.map(m => `
                    <div class="creator-item">
                        <div class="creator-avatar">${m.name.charAt(0)}</div>
                        <div class="creator-info">
                            <div class="name">${m.name}</div>
                            <div class="role">${m.role}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- 技术栈 -->
        <div class="detail-section">
            <h3>🛠️ 技术 & 工具</h3>
            <div class="tech-tags">
                ${[...work.techStack, ...work.designTools].map(t => `<span class="tech-tag">${t}</span>`).join('')}
            </div>
        </div>

        <!-- 详细介绍 -->
        <div class="detail-section">
            <h3>📖 详细介绍</h3>
            <div class="detail-content">${work.content}</div>
        </div>

        <!-- 底部操作 -->
        <div class="bottom-actions">
            <a href="works.html" class="btn btn-outline">← 返回作品列表</a>
            <div class="share-btns">
                <button class="share-btn" onclick="copyShareLink()" title="复制链接">🔗</button>
                <button class="share-btn" onclick="showToast('链接已复制到剪贴板')" title="微信分享">💬</button>
            </div>
        </div>
    </div>`;
}

function renderPreviewArea(work) {
    if (work.previewType === 'iframe') {
        // 有 liveUrl：嵌入真实 iframe 预览
        if (work.liveUrl) {
            return `
            <div class="preview-area">
                <div class="preview-toolbar">
                    <span style="font-weight:600;font-size:0.9rem">📱 在线预览</span>
                    <div class="toolbar-actions">
                        ${work.githubUrl ? `<a href="${work.githubUrl}" target="_blank" class="tool-btn secondary">📂 代码仓库</a>` : ''}
                        <a href="${work.liveUrl}" target="_blank" class="tool-btn primary">🔗 新窗口打开</a>
                    </div>
                </div>
                <div class="preview-container">
                    <iframe src="${work.liveUrl}" class="preview-frame" 
                        sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                        loading="lazy" 
                        title="${work.title} 在线预览"></iframe>
                    <div class="preview-frame-fallback" style="display:none">
                        <div style="font-size:4rem;margin-bottom:16px;opacity:0.3">🌐</div>
                        <p style="color:var(--text-muted);margin-bottom:20px">该网页不支持内嵌预览</p>
                        <a href="${work.liveUrl}" target="_blank" class="btn btn-primary">🔗 在新窗口打开</a>
                    </div>
                </div>
                <script>
                    (function(){
                        var iframe = document.currentScript.previousElementSibling.querySelector('iframe');
                        var fallback = document.currentScript.previousElementSibling.querySelector('.preview-frame-fallback');
                        var timeout = setTimeout(function(){
                            iframe.style.display = 'none';
                            fallback.style.display = 'block';
                        }, 8000);
                        iframe.onload = function(){ clearTimeout(timeout); };
                        iframe.onerror = function(){ clearTimeout(timeout); iframe.style.display='none'; fallback.style.display='block'; };
                    })();
                </script>
            </div>`;
        }
        
        // 没有 liveUrl：显示封面图占位
        const placeholder = work.cover ? 
            `<img src="${work.cover}" alt="${work.title}" style="max-width:100%;border-radius:var(--radius-md);margin-bottom:16px">` : 
            `<div style="font-size:5rem;margin-bottom:16px;opacity:0.3">${getCategoryIcon(work.category)}</div>`;
        
        return `
        <div class="preview-area">
            <div class="preview-toolbar">
                <span style="font-weight:600;font-size:0.9rem">📱 作品预览</span>
                <div class="toolbar-actions">
                    ${work.githubUrl ? `<a href="${work.githubUrl}" target="_blank" class="tool-btn secondary">📂 代码仓库</a>` : ''}
                </div>
            </div>
            <div class="preview-fallback">
                ${placeholder}
                <p style="color:var(--text-muted)">预览需部署后查看</p>
            </div>
        </div>`;
    }

    if (work.previewType === 'video') {
        return `
        <div class="preview-area">
            <div class="video-container">
                ${work.videoUrl ? 
                    `<video controls src="${work.videoUrl}" style="width:100%;max-height:560px"></video>` :
                    `<div class="preview-fallback">
                        <div style="font-size:5rem;margin-bottom:16px">🎬</div>
                        <p style="color:var(--text-muted)">视频预览需部署后查看</p>
                    </div>`
                }
            </div>
        </div>`;
    }

    if (work.previewType === 'image') {
        const imgs = work.images || [];
        return `
        <div class="preview-area">
            <div class="gallery-grid" id="imageGallery">
                ${imgs.length > 0 ? imgs.map((img, i) => `
                    <img src="${img}" alt="${work.title} ${i+1}" loading="lazy" onclick="openLightbox(${i})">
                `).join('') : `
                    <div class="preview-fallback" style="grid-column:1/-1">
                        <div style="font-size:5rem;margin-bottom:16px">${getCategoryIcon(work.category)}</div>
                        <p style="color:var(--text-muted)">图片预览需部署后查看</p>
                    </div>
                `}
            </div>
        </div>`;
    }

    return '';
}

function renderRelatedWorks(work) {
    const related = WORKS_DATA.filter(w => w.id !== work.id && (w.category === work.category || w.tags.some(t => work.tags.includes(t)))).slice(0, 4);
    const container = document.getElementById('relatedWorks');
    if (!container) return;

    container.innerHTML = `
        <h2>相关作品推荐</h2>
        <div class="related-grid">
            ${related.map(w => createWorkCard(w)).join('')}
        </div>`;
}

// ============ 灯箱 ============
let lightboxIndex = 0;
let lightboxImages = [];

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) return;

    lightboxImages = Array.from(document.querySelectorAll('#imageGallery img')).map(img => img.src);

    lightbox.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('lightbox-close')) {
            this.classList.remove('active');
        }
    });

    document.addEventListener('keydown', (e) => {
        const lb = document.getElementById('lightbox');
        if (!lb || !lb.classList.contains('active')) return;
        if (e.key === 'Escape') lb.classList.remove('active');
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightboxImg');
    if (!lightbox || !img) return;
    
    lightboxIndex = index;
    img.src = lightboxImages[index];
    lightbox.classList.add('active');
}

function navigateLightbox(dir) {
    lightboxIndex = (lightboxIndex + dir + lightboxImages.length) % lightboxImages.length;
    const img = document.getElementById('lightboxImg');
    if (img) img.src = lightboxImages[lightboxIndex];
}

// ============ 联系表单 ============
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = form.querySelector('[name="name"]').value.trim();
        const email = form.querySelector('[name="email"]').value.trim();
        const message = form.querySelector('[name="message"]').value.trim();

        if (!name || !email || !message) {
            showToast('请填写所有必填字段');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('请输入有效的邮箱地址');
            return;
        }

        showToast('留言已成功提交，我们会尽快回复！（演示模式）');
        form.reset();
    });
}

// ============ 团队数据统计 ============
function initTeamStats() {
    const statsEl = document.getElementById('teamStats');
    if (!statsEl) return;

    statsEl.innerHTML = `
        <div class="hero-stats" style="margin:0">
            <div class="stat">
                <div class="stat-number" id="countWorks">${WORKS_DATA.length}+</div>
                <div class="stat-label">作品总数</div>
            </div>
            <div class="stat">
                <div class="stat-number">${TEAM_MEMBERS.length}</div>
                <div class="stat-label">团队人数</div>
            </div>
            <div class="stat">
                <div class="stat-number">${HONORS.length}</div>
                <div class="stat-label">获奖数量</div>
            </div>
        </div>`;
}

// ============ 工具函数 ============
function formatViews(n) {
    if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
    return n.toString();
}

function getCategoryIcon(category) {
    const icons = { web: '🌐', game: '🎮', video: '🎬', image: '🖼️' };
    return icons[category] || '📁';
}

function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._timeout);
    toast._timeout = setTimeout(() => toast.classList.remove('show'), 2500);
}

function copyShareLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        showToast('链接已复制到剪贴板');
    });
}
