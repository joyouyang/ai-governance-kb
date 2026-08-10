# AI Governance 知识库

面向中文读者的 AI 治理学习与职业参考网站，覆盖 AI Governance、Responsible AI、AI Safety 与 AI 合规。

纯静态站点：**无构建步骤、无外部依赖、无 CDN**，双击打开即可运行，内容全部由 `data/` 目录下的结构化数据文件驱动，便于长期维护与扩展。

## 运行

方式一：直接用浏览器打开 `index.html`（所有功能可用，包括交互工具）。

方式二（推荐，链接行为更标准）：

```bash
cd ai-governance-kb
python3 -m http.server 8000
# 访问 http://localhost:8000
```

## 目录结构

```
ai-governance-kb/
├── index.html          首页：定位、治理闭环、领域对比、监管时间线
├── map.html            知识地图：核心认知、SVG 知识图谱、学习路径、术语表
├── regulations.html    法规与标准：15 个条目（可筛选）+ 三大基准对比表
├── practice.html       企业实践：治理闭环七环节详解 + 分阶段起步建议
├── careers.html        职业地图：8 类岗位详情 + 转型路径速查
├── research.html       学术研究：主题地图 + 论文库（四维筛选）+ 阅读路径 + 研究到实践 + 机构/会议/学者索引
├── resources.html      案例与资源：7 个事故案例 + 20+ 精选资源 + JD 解读
├── toolkit.html        工具箱：4 个本地运行的交互工具
├── assets/
│   ├── style.css       全站样式（设计 token 见文件顶部 :root）
│   └── app.js          共享脚本：导航/页脚渲染、折叠面板、筛选器、来源标注
└── data/               ★ 内容数据层——日常更新只需要改这里
    ├── regulations.js  法规与标准 + 对比表
    ├── careers.js      技能分类、技能库、岗位、转型路径
    ├── research.js     研究主题、论文库、研究到实践、机构/会议/学者索引
    ├── resources.js    案例、资源、JD 解读
    └── toolkit-data.js 风险清单、成熟度题库、intake 字段
```

## 数据结构（如何补充内容）

所有列表类内容都是「往数组里加一个对象」即可，页面自动渲染。改完数据后，请同步更新 `assets/app.js` 顶部的 `KB.updated` 日期。

### 新增一部法规（`data/regulations.js`）

```js
{
  id: "unique-id",            // 唯一 ID，用作页面锚点（可被 xx.html#unique-id 直达）
  name: "中文名称",
  nameEn: "English Name",
  region: "欧盟",             // 欧盟 | 美国 | 中国 | 国际 | 其他（筛选器自动收集）
  kind: "硬法",               // 硬法 | 软法/框架 | 标准
  status: "一句话状态",
  oneLiner: "一句话定位",
  timeline: [{ date: "YYYY-MM-DD", event: "..." }],
  appliesTo: "适用于谁",
  keyPoints: ["核心内容，可含 <b> 标签"],
  impact: ["对企业意味着什么"],
  source: { label: "来源名称", url: "官方链接(可选)", date: "YYYY-MM-DD", note: "补充说明(可选)" },
}
```

**引用纪律**：`source.label` 与 `source.date` 必填；`url` 只填能确认的官方链接，不确定就只写机构名称——宁缺毋假。

### 新增一个岗位（`data/careers.js`）

岗位通过 `skills.core` / `skills.plus` 引用技能库 `KB_SKILLS` 中的技能 id；工具箱的「JD 差距分析」自动使用同一份数据。新增技能时给出 `learn` 字段（怎么补齐这项技能）。

### 新增一篇论文（`data/research.js`）

```js
{
  id: "unique-id",              // 唯一 ID，用作锚点（research.html#unique-id 直达并展开）
  title: "英文原题（保留原文）",
  titleZh: "中文译名",
  authors: "First Author, et al.",
  venue: "发表会议/期刊/机构", year: 2024, date: "YYYY-MM",   // date 为首次发布（预印本）时间
  inst: "高校/学术界",          // 高校/学术界 | Anthropic | OpenAI | Google/DeepMind | 产业界（…）| 跨机构
  topics: ["评测"],             // 取值必须来自 KB_RESEARCH_TOPICS 的十个主题名
  level: "进阶",                // 入门 | 进阶 | 研究级（决定阅读路径分组）
  relevance: "高",              // 高 | 中（实践相关性筛选）
  mustRead: false,              // true 则在阅读路径中标 ★ 置顶
  question: "研究问题", idea: "核心观点", method: "方法",
  findings: "主要发现", limits: "局限性",
  practice: "与企业 AI 治理实践的关系", audience: "适合谁读",
  url: "https://arxiv.org/abs/XXXX.XXXXX",   // 必须是真实可确认的原文链接
}
```

**引用纪律（比法规条目更严格）**：只收录能确认标题、作者、年份与链接的真实论文；`url` 必须指向 arXiv 摘要页、出版社 DOI 页或机构官方页；不确定的论文宁可不收，绝不虚构。新增主题时同步更新 `KB_RESEARCH_TOPICS`（主题名是筛选器与 topics 字段的枚举值）。

### 新增案例/资源（`data/resources.js`）

案例（`KB_CASES`）要求写清 `what`（发生了什么）与 `lesson`（对治理的启示），并附来源与日期。资源（`KB_RESOURCES`）的 `type` 字段自动生成筛选器（框架/工具/报告/数据库/公司实践/认证/职业/社区/课程）。

### 调整工具（`data/toolkit-data.js`）

- 风险清单：按组增删条目，`critical: true` 标记红线项（未落实时阻断上线提示）
- 成熟度自测：每题固定 4 个选项，按 0–3 计分；等级判定逻辑在 `toolkit.html`
- Intake 模板：字段支持 `text / textarea / select / checks` 四种类型；风险信号规则在 `toolkit.html` 的 `intake-submit` 处理函数中

## 设计原则

- **中文优先，保留必要英文术语**（岗位名、法规名、行业惯用语）
- **视觉克制**：研究机构的可信感 × SaaS 的信息架构；设计 token 集中在 `style.css` 的 `:root`
- **来源纪律**：所有法规、案例与外部资料标注来源与日期；不编造引用；不确定的链接只写机构名
- **本地优先**：交互工具全部在浏览器本地运行，不上传数据；全站无外部请求

## 内容维护清单

- [ ] 每季度核对法规时间线（尤其 EU AI Act 分阶段适用与 Digital Omnibus 动向）
- [ ] 每半年更新 JD 解读与岗位需求热度判断
- [ ] 发现资源链接失效时更新或降级为纯文字来源
- [ ] 重大 AI 事故发生后补充案例（附一手来源）

## 可能的后续扩展

- 每个法规条目的「合规行动清单」子页
- 用 `localStorage` 保存工具的作答进度
- 全文搜索（数据已结构化，可直接在前端建索引）
- 部署到静态托管（GitHub Pages / Cloudflare Pages）时无需任何改动
