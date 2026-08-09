/* ============================================================
   数据：案例与资源
   KB_CASES — 真实事件案例（含来源与日期，均为公开报道/官方文书）
   KB_RESOURCES — 框架、报告、数据库、社区、课程等外部资源
   来源要求：不确定的链接只写机构名，不要编造 URL。
   ============================================================ */

window.KB_CASES = [
  {
    id: "dutch-toeslagen",
    title: "荷兰儿童福利算法丑闻（Toeslagenaffaire）",
    year: "2013–2021",
    tags: ["算法歧视", "政府应用", "问责"],
    what: "荷兰税务机关使用风险评分算法筛查儿童保育补贴欺诈，将双重国籍等因素纳入风险特征，导致数万家庭（多为少数族裔）被错误认定欺诈并被追讨巨额补贴，大量家庭破产、家庭破裂。",
    lesson: "议会调查报告《Ongekend onrecht》（前所未有的不公）促使荷兰内阁于 2021 年 1 月集体辞职。这是「算法歧视 + 缺乏救济渠道 + 制度性问责失灵」叠加的标志性案例，直接影响了欧盟 AI Act 将公共福利类系统列为高风险。",
    source: { label: "荷兰议会调查报告《Ongekend onrecht》", date: "2020-12-17", note: "内阁辞职：2021-01-15，各大媒体广泛报道" },
  },
  {
    id: "amazon-recruiting",
    title: "亚马逊 AI 招聘工具性别偏见",
    year: "2018 曝光",
    tags: ["招聘", "偏见", "数据代表性"],
    what: "亚马逊内部试验的简历筛选模型基于十年历史招聘数据训练，学会了对包含「women's」等词汇的简历降权。项目最终被放弃。",
    lesson: "训练数据继承历史偏见的教科书案例。它说明「模型没有明说性别也会歧视」——代理变量（proxy）问题是公平性评测必须覆盖的内容。",
    source: { label: "Reuters 独家报道", url: "https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G", date: "2018-10-10" },
  },
  {
    id: "air-canada",
    title: "加拿大航空聊天机器人误导退款案",
    year: "2024",
    tags: ["生成式AI", "客服", "企业责任"],
    what: "加航官网聊天机器人向乘客错误说明了丧亲折扣的退款政策。加航辩称机器人是「独立法律实体」、公司不担责。仲裁庭驳回，判加航赔偿并明确：公司对其网站上所有信息负责，无论来自静态页面还是聊天机器人。",
    lesson: "「AI 说的不算数」不成立——企业为 AI 输出承担法律责任。所有对客 GenAI 应用都应做输出准确性评测、设置政策类问题的护栏，并明确纠错与赔付流程。",
    source: { label: "Moffatt v. Air Canada, 2024 BCCRT 149（加拿大BC省民事仲裁庭）", url: "https://www.canlii.org/en/bc/bccrt/doc/2024/2024bccrt149/2024bccrt149.html", date: "2024-02-14" },
  },
  {
    id: "itutor-eeoc",
    title: "iTutorGroup 招聘软件年龄歧视和解案",
    year: "2023",
    tags: ["招聘", "歧视", "执法"],
    what: "美国 EEOC 起诉 iTutorGroup：其招聘软件自动拒绝 55 岁以上女性与 60 岁以上男性申请人。公司支付 36.5 万美元和解，是 EEOC 首个 AI 招聘歧视和解案。",
    lesson: "「自动化」不豁免反歧视法。现行法律（就业、信贷、住房）本来就适用于 AI——不需要等 AI 专门立法，执法机构已经在行动。",
    source: { label: "美国平等就业机会委员会（EEOC）新闻稿", url: "https://www.eeoc.gov/newsroom", date: "2023-08-09" },
  },
  {
    id: "samsung-leak",
    title: "三星员工向 ChatGPT 泄露内部代码",
    year: "2023",
    tags: ["数据泄露", "内部使用", "影子AI"],
    what: "三星半导体员工在使用 ChatGPT 排查问题时粘贴了内部源代码与会议记录，引发敏感信息外泄担忧，三星随后禁止员工使用外部生成式 AI 工具。",
    lesson: "「影子 AI」（员工自发使用未审批工具）是企业最普遍的第一类 AI 风险。对策不是一禁了之，而是提供受管控的替代品 + 明确的可接受使用政策（AUP）。",
    source: { label: "Bloomberg 报道", date: "2023-05-02", note: "多家媒体跟进报道三星内部禁令" },
  },
  {
    id: "nyc-mycity",
    title: "纽约市政府聊天机器人给出违法建议",
    year: "2024",
    tags: ["生成式AI", "政府应用", "幻觉"],
    what: "纽约市官方 MyCity 商业咨询聊天机器人被媒体测试发现会告诉雇主可以抽取员工小费、可以解雇投诉性骚扰的员工等违法建议。市政府未下线,仅添加免责声明并持续改进。",
    lesson: "高权威场景（政府、法律、医疗）中幻觉的代价被放大。上线前的领域准确性评测、明确的能力边界说明和高风险问题转人工，都是必要门禁。",
    source: { label: "The Markup 调查报道", url: "https://themarkup.org", date: "2024-03-29" },
  },
  {
    id: "clearview",
    title: "Clearview AI 人脸识别的多国执法",
    year: "2020–2024",
    tags: ["生物识别", "隐私", "跨国执法"],
    what: "Clearview AI 从互联网抓取数百亿张人脸照片建立识别数据库并向执法机构出售服务。意大利、法国、希腊、英国、荷兰等多国数据保护机构分别处以约两千万欧元级罚款并责令删除数据。",
    lesson: "「公开可得的数据」不等于「可以随意抓取训练」。生物识别是各国监管红线最密集的领域，EU AI Act 也将无差别人脸抓取列为禁止性实践。",
    source: { label: "意大利数据保护局（Garante）处罚决定（2000万欧元）", date: "2022-03-09", note: "荷兰 DPA 2024-09 再罚 3050 万欧元" },
  },
];

window.KB_RESOURCES = [
  // —— 框架与官方资源 ——
  { title: "NIST AI RMF + Playbook + AIRC 资源中心", org: "NIST（美国国家标准与技术研究院）", type: "框架", date: "2023-01（RMF 1.0）", url: "https://airc.nist.gov", lang: "英文", note: "从 RMF 原文读起，Playbook 提供逐条行动建议。做企业实践的第一优先阅读。" },
  { title: "EU AI Act Explorer", org: "Future of Life Institute", type: "工具", date: "持续更新", url: "https://artificialintelligenceact.eu", lang: "英文", note: "按条款/角色/时间线浏览 AI Act 全文，附合规检查小工具，比读 OJ 原文友好得多。" },
  { title: "OECD.AI 政策观察站", org: "OECD", type: "数据库", date: "持续更新", url: "https://oecd.ai", lang: "英文", note: "全球 AI 政策数据库 + AI 事件监测（AIM），做跨国监管比较的首选。" },
  { title: "AI Verify 与 Project Moonshot", org: "AI Verify Foundation / 新加坡 IMDA", type: "工具", date: "2024-05（GenAI框架）", url: "https://aiverifyfoundation.sg", lang: "英文", note: "可实际运行的开源治理测试工具包与 LLM 评测工具。" },
  { title: "生成式人工智能服务安全基本要求（GB/T 45654-2025）等国标", org: "全国网络安全标准化技术委员会（TC260）", type: "框架", date: "2025 发布", lang: "中文", note: "中国生成式 AI 备案与安全评估的具体技术基准，含语料与生成内容安全的量化要求。" },

  // —— 公司实践（一手资料）——
  { title: "Anthropic Responsible Scaling Policy（RSP）", org: "Anthropic", type: "公司实践", date: "2023-09 首发，2024-10 更新", url: "https://www.anthropic.com", lang: "英文", note: "以能力阈值（ASL 等级）触发安全措施的前沿模型治理框架，读懂它就读懂了 frontier safety 语言体系。" },
  { title: "OpenAI Preparedness Framework", org: "OpenAI", type: "公司实践", date: "2023-12 首发，2025-04 v2", url: "https://openai.com/safety", lang: "英文", note: "与 RSP 同类的风险分级与发布门禁框架，两者对比阅读效果最好。" },
  { title: "Google DeepMind Frontier Safety Framework", org: "Google DeepMind", type: "公司实践", date: "2024-05 首发，持续修订", url: "https://deepmind.google", lang: "英文", note: "关键能力等级（CCL）方法；三大实验室框架横向对比是很好的作品集选题。" },
  { title: "Microsoft Responsible AI Standard v2 与年度透明度报告", org: "Microsoft", type: "公司实践", date: "2022-06（v2 公开版）", url: "https://www.microsoft.com/ai/responsible-ai", lang: "英文", note: "大企业把原则落成需求（goals → requirements → tools）的最完整公开范本。" },
  { title: "模型 System Cards（GPT、Claude、Gemini 等）", org: "各前沿实验室", type: "公司实践", date: "随模型发布", lang: "英文", note: "了解评测实际怎么做、风险怎么披露的一手材料。治理岗面试高频话题。" },

  // —— 报告与研究 ——
  { title: "AI Index Report（年度）", org: "Stanford HAI", type: "报告", date: "每年 4 月", url: "https://hai.stanford.edu/ai-index", lang: "英文", note: "AI 全景年度数据，其中政策与负责任 AI 章节适合做趋势判断。" },
  { title: "International AI Safety Report", org: "多国政府支持、Yoshua Bengio 主持", type: "报告", date: "2025-01 首份完整版", lang: "英文", note: "百位科学家参与的 AI 风险科学共识报告，安全政策领域的基准文献。" },
  { title: "MIT AI Risk Repository", org: "MIT FutureTech", type: "数据库", date: "2024-08 首发，持续更新", url: "https://airisk.mit.edu", lang: "英文", note: "汇总数十个分类框架、上千条 AI 风险的结构化数据库，做风险分类时直接引用。" },
  { title: "AI Incident Database（AIID）", org: "Responsible AI Collaborative", type: "数据库", date: "持续更新", url: "https://incidentdatabase.ai", lang: "英文", note: "上千条真实 AI 事故案例，写风险评估和培训材料的素材库。" },
  { title: "中国 AI 安全现状报告（State of AI Safety in China）", org: "Concordia AI（安远AI）", type: "报告", date: "年度更新", url: "https://concordia-ai.com", lang: "中英", note: "了解中国 AI 安全与治理生态的少数系统性英文/中文资料。" },
  { title: "Ada Lovelace Institute 研究", org: "Ada Lovelace Institute（英国）", type: "报告", date: "持续更新", url: "https://www.adalovelaceinstitute.org", lang: "英文", note: "算法影响评估、审计方法论方面质量最高的智库之一。" },
  { title: "CSET 研究报告", org: "Georgetown CSET", type: "报告", date: "持续更新", url: "https://cset.georgetown.edu", lang: "英文", note: "安全政策、算力治理、中美 AI 生态的深度研究；政策研究岗必读。" },

  // —— 社区、认证与职业 ——
  { title: "IAPP AI Governance Center 与 AIGP 认证", org: "IAPP（国际隐私专业人员协会）", type: "认证", date: "AIGP 2023 推出", url: "https://iapp.org", lang: "英文", note: "目前认可度最高的 AI 治理认证；隐私转 AI 治理的标准路径。年度 AI Governance Report 也值得读。" },
  { title: "80,000 Hours：AI 治理与政策职业指南", org: "80,000 Hours", type: "职业", date: "持续更新", url: "https://80000hours.org", lang: "英文", note: "AI governance / safety 职业路径的深度分析与职位版（job board），偏使命驱动视角。" },
  { title: "Partnership on AI", org: "PAI", type: "社区", date: "持续更新", url: "https://partnershiponai.org", lang: "英文", note: "多方治理社区，其安全基础模型部署指南（2023）等文件常被企业引用。" },
  { title: "AI 安全/治理 Fellowship 项目（如 BlueDot AI Safety / Governance 课程）", org: "BlueDot Impact 等", type: "课程", date: "每季开班", url: "https://bluedot.org", lang: "英文", note: "免费在线课程 + 社区，转行者建立知识体系与人脉网络的高效途径。" },
];

/* JD 解读（职业市场观察，非引用具体在招职位） */
window.KB_JD_PATTERNS = [
  {
    role: "前沿实验室 Policy / Model Policy 岗",
    pattern: "典型要求：卓越的书面表达（writing sample 常是硬性环节）、对模型能力与局限的技术理解、处理模糊问题的判断力；学历专业不限，哲学、法律、政策背景都常见。",
    signal: "信号：这类岗位筛选的核心是「思考质量」而非证书。公开发表的高质量分析文章比任何认证都有用。",
  },
  {
    role: "大厂 Responsible AI / AI Governance 岗",
    pattern: "典型要求：5 年以上项目/产品/合规经验、熟悉 NIST AI RMF 或 ISO 42001、跨职能推动能力、常要求熟悉隐私法规（GDPR）。近年 JD 中「EU AI Act readiness」出现频率显著上升。",
    signal: "信号：大厂偏好「已有横向推动履历 + 框架语言」的候选人。把现有工作重新包装为治理叙事（评审、门禁、审计对接）是关键。",
  },
  {
    role: "金融机构 Model Risk / AI Risk 岗",
    pattern: "典型要求：统计/计量背景、模型验证经验、熟悉 SR 11-7；近两年新增「GenAI 风险评估」「LLM validation」类字样，出现验证方法尚未定型带来的人才缺口。",
    signal: "信号：懂 LLM 评测的传统 MRM 人才极少，反向切入（懂 LLM 的人学 MRM 语言）存在明显套利空间。",
  },
];
