/* ============================================================
   数据：法规、标准与治理框架
   新增条目：复制一个对象修改即可，页面自动渲染。
   字段说明见 README.md「数据结构」一节。
   来源要求：source.label / date 必填；url 仅填写可确认的官方链接，
   不确定的链接宁可只写来源机构名称，不要编造。
   ============================================================ */

window.KB_REGULATIONS = [
  {
    id: "eu-ai-act",
    name: "欧盟《人工智能法案》",
    nameEn: "EU AI Act — Regulation (EU) 2024/1689",
    region: "欧盟",
    kind: "硬法",
    status: "已生效，义务分阶段适用",
    oneLiner: "全球第一部全面的横向 AI 立法，按风险分级监管，是目前企业 AI 合规的事实基准。",
    timeline: [
      { date: "2024-07-12", event: "在欧盟官方公报（OJ）正式公布" },
      { date: "2024-08-01", event: "正式生效（entry into force）" },
      { date: "2025-02-02", event: "禁止性 AI 实践条款、AI 素养（AI literacy）义务开始适用" },
      { date: "2025-08-02", event: "通用目的 AI（GPAI）模型义务、治理与处罚条款开始适用" },
      { date: "2026-08-02", event: "大部分义务（含附件 III 高风险系统）开始适用" },
      { date: "2027-08-02", event: "嵌入受监管产品（附件 I）的高风险 AI 系统义务开始适用" },
    ],
    appliesTo: "在欧盟市场投放或使用 AI 系统的提供者（provider）与部署者（deployer），包括设立在欧盟境外但产品/输出进入欧盟的企业（域外效力）。",
    keyPoints: [
      "<b>风险分级</b>：不可接受风险（直接禁止，如社会评分、某些实时远程生物识别）→ 高风险（附件 I / III 场景，如招聘、信贷、教育、执法）→ 有限风险（透明度义务，如聊天机器人告知、深度合成标识）→ 最低风险。",
      "<b>高风险系统义务</b>：风险管理体系、数据治理、技术文档、日志、透明度、人类监督、准确性/稳健性/网络安全，以及合格评定（conformity assessment）与 CE 标识。",
      "<b>GPAI 模型义务</b>：技术文档、向下游提供信息、遵守欧盟版权法、训练数据摘要；具有系统性风险的模型（以训练算力等标准认定）另需模型评测、对抗测试、严重事件报告。",
      "<b>处罚</b>：最高可达 3500 万欧元或全球年营业额 7%（针对禁止性实践），其他违规最高 1500 万欧元或 3%。",
    ],
    impact: [
      "先做 <b>AI inventory</b>（系统清单）并按法案分级，判断哪些用例落入高风险或禁止范围——这是所有后续工作的前提。",
      "高风险用例需要建立文档化的风险管理与数据治理流程，多数企业会借助 ISO/IEC 42001 或 NIST AI RMF 来落地。",
      "使用第三方模型（如 OpenAI / Anthropic API）不免除部署者义务，需明确供应商与自身的责任划分。",
      "注意：欧盟委员会 2025-11-19 提出「Digital Omnibus」简化提案，拟调整部分高风险义务的适用时点；跟进以官方最终文本为准。",
    ],
    source: { label: "EUR-Lex, Regulation (EU) 2024/1689", url: "https://eur-lex.europa.eu/eli/reg/2024/1689/oj", date: "2024-07-12" },
  },

  {
    id: "gdpr",
    name: "欧盟《通用数据保护条例》",
    nameEn: "GDPR — Regulation (EU) 2016/679",
    region: "欧盟",
    kind: "硬法",
    status: "已全面适用",
    oneLiner: "虽然不是 AI 专门立法，但只要 AI 处理个人数据，GDPR 就是绕不开的合规底座。",
    timeline: [
      { date: "2016-04-27", event: "正式通过" },
      { date: "2018-05-25", event: "开始适用" },
    ],
    appliesTo: "处理欧盟境内个人数据的控制者与处理者，具有域外效力。",
    keyPoints: [
      "<b>与 AI 最相关的条款</b>：第 5 条数据处理原则（目的限制、数据最小化）、第 6 条合法性基础（训练数据的合法来源问题）、第 22 条自动化决策与用户画像的限制及救济权。",
      "<b>DPIA</b>（数据保护影响评估，第 35 条）：高风险处理活动（含大规模画像、创新技术）上线前必须完成，是很多公司 AI 风险评估流程的原型。",
      "<b>数据主体权利</b>：知情、访问、更正、删除——对用大规模抓取数据训练的模型构成实际挑战（参见各国 DPA 对生成式 AI 的执法动态）。",
      "<b>处罚</b>：最高 2000 万欧元或全球年营业额 4%。",
    ],
    impact: [
      "AI 项目的隐私审查（DPIA）与 AI 风险评估应打通，避免两套流程重复填表。",
      "训练/微调使用用户数据前，确认合法性基础与告知义务；对外采购模型时审查其训练数据合规声明。",
      "第 22 条意味着「完全自动化且有法律或重大影响的决策」需要人工介入通道——直接影响产品设计。",
    ],
    source: { label: "EUR-Lex, Regulation (EU) 2016/679", url: "https://eur-lex.europa.eu/eli/reg/2016/679/oj", date: "2016-04-27" },
  },

  {
    id: "nist-ai-rmf",
    name: "美国 NIST 人工智能风险管理框架",
    nameEn: "NIST AI Risk Management Framework (AI RMF 1.0)",
    region: "美国",
    kind: "软法/框架",
    status: "自愿采用，已成行业通用语言",
    oneLiner: "美国官方发布的自愿性框架，用 Govern / Map / Measure / Manage 四大功能组织 AI 风险管理，是企业实践和岗位 JD 中出现频率最高的框架。",
    timeline: [
      { date: "2023-01-26", event: "AI RMF 1.0 正式发布" },
      { date: "2024-07-26", event: "生成式 AI 配套文件（Generative AI Profile, NIST-AI-600-1）发布" },
    ],
    appliesTo: "自愿采用；无强制力，但被美国联邦采购、州立法（如科罗拉多州）和大量企业政策引用为基准。",
    keyPoints: [
      "<b>四大功能</b>：Govern（建立治理文化与制度）、Map（识别场景与风险）、Measure（评测与度量）、Manage（处置与监控）。",
      "<b>可信 AI 七特征</b>：有效可靠、安全、抗攻击与韧性、可问责与透明、可解释、隐私增强、公平（有害偏见受控）。",
      "<b>GenAI Profile</b> 针对生成式 AI 列出 12 类风险（如虚构内容 confabulation、信息安全、危险能力）与 200+ 条建议行动。",
      "配套的 NIST Playbook 与 Trustworthy AI 资源中心（AIRC）提供可直接落地的行动清单。",
    ],
    impact: [
      "没有欧盟业务的公司通常以 NIST AI RMF 作为治理体系的骨架，再按所在司法辖区叠加硬法要求。",
      "JD 中「熟悉 NIST AI RMF」几乎是 AI Governance 岗位的标配要求，值得系统精读原文（约 40 页）。",
      "Map–Measure–Manage 的循环可以直接映射为企业内的 intake → 评测 → 上线门禁 → 监控流程。",
    ],
    source: { label: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework", date: "2023-01-26" },
  },

  {
    id: "iso-42001",
    name: "ISO/IEC 42001 人工智能管理体系",
    nameEn: "ISO/IEC 42001:2023 — AI Management System (AIMS)",
    region: "国际",
    kind: "标准",
    status: "已发布，可认证",
    oneLiner: "首个可认证的 AI 管理体系国际标准，相当于 AI 领域的 ISO 27001，正在成为企业证明「我有 AI 治理」的通行证。",
    timeline: [
      { date: "2023-12", event: "正式发布" },
    ],
    appliesTo: "任何开发、提供或使用 AI 系统的组织，可自愿实施并申请第三方认证。",
    keyPoints: [
      "<b>管理体系结构</b>：沿用 ISO 通用的 PDCA 框架——组织环境、领导力、策划、支持、运行、绩效评价、改进。",
      "<b>附件 A 控制项</b>：覆盖 AI 政策、内部组织、资源、影响评估、系统生命周期、数据管理、第三方关系、供 AI 系统使用方的信息等。",
      "与 ISO/IEC 23894（AI 风险管理指南）、ISO/IEC 23053（ML 框架）等标准配套使用。",
      "微软、AWS、Anthropic 等公司已相继获得认证（见各公司信任中心公告）。",
    ],
    impact: [
      "对 B2B 公司，42001 认证正在进入客户尽调与采购问卷，与 SOC 2 / ISO 27001 并列。",
      "已有 ISO 27001 体系的公司可复用大量流程（文档控制、内审、管理评审），增量成本可控。",
      "认证审计催生了对「懂 AI + 懂管理体系」人才的需求，是审计/GRC 背景转入 AI 治理的直接切口。",
    ],
    source: { label: "ISO/IEC 42001:2023, iso.org", url: "https://www.iso.org/standard/81230.html", date: "2023-12" },
  },

  {
    id: "iso-23894",
    name: "ISO/IEC 23894 人工智能风险管理指南",
    nameEn: "ISO/IEC 23894:2023 — AI Risk Management Guidance",
    region: "国际",
    kind: "标准",
    status: "已发布（指南类，不可认证）",
    oneLiner: "把经典风险管理标准 ISO 31000 适配到 AI 场景的指南，常与 42001 配套作为风险评估方法论。",
    timeline: [{ date: "2023-02", event: "正式发布" }],
    appliesTo: "自愿参考；适合作为企业 AI 风险评估流程的方法论依据。",
    keyPoints: [
      "沿用 ISO 31000 的风险管理过程：范围界定 → 风险识别 → 风险分析 → 风险评价 → 风险处置 → 监测与评审。",
      "附录给出 AI 特有的风险源清单（如数据质量、模型漂移、可解释性不足、自动化偏见）。",
    ],
    impact: [
      "设计公司内部风险评估表单时，可直接引用其风险源分类，避免自造轮子。",
    ],
    source: { label: "ISO/IEC 23894:2023, iso.org", url: "https://www.iso.org", date: "2023-02" },
  },

  {
    id: "cn-genai",
    name: "生成式人工智能服务管理暂行办法",
    nameEn: "China Interim Measures for Generative AI Services",
    region: "中国",
    kind: "硬法",
    status: "已施行",
    oneLiner: "中国对面向公众的生成式 AI 服务的核心监管规则，确立备案、内容安全与训练数据合规要求。",
    timeline: [
      { date: "2023-07-13", event: "国家网信办等七部门联合公布" },
      { date: "2023-08-15", event: "正式施行" },
    ],
    appliesTo: "在中国境内向公众提供生成式 AI 服务的提供者；不面向境内公众的研发、行业内部应用不适用。",
    keyPoints: [
      "<b>备案与评估</b>：具有舆论属性或社会动员能力的服务需按规定开展安全评估并履行算法备案。",
      "<b>训练数据</b>：来源合法、不侵犯知识产权、涉个人信息需取得同意或符合法定情形，并提升数据质量。",
      "<b>内容管理</b>：对生成内容承担网络信息内容生产者责任，发现违法内容需及时处置并整改。",
      "<b>标识义务</b>：按《互联网信息服务深度合成管理规定》对生成内容进行标识（后由 2025 年标识办法细化）。",
    ],
    impact: [
      "面向中国用户的大模型产品上线前需完成备案流程（模型备案/算法备案），周期需计入产品排期。",
      "训练语料需建立可追溯的来源与合规审查记录。",
      "内容安全评测（含对抗性提问题库）是上线门禁的必备环节，相关国标（如 GB/T 45654-2025 生成式 AI 服务安全基本要求）提供了具体测试基准。",
    ],
    source: { label: "国家互联网信息办公室", url: "https://www.cac.gov.cn/2023-07/13/c_1690898327029107.htm", date: "2023-07-13" },
  },

  {
    id: "cn-algo",
    name: "互联网信息服务算法推荐管理规定",
    nameEn: "China Algorithm Recommendation Provisions",
    region: "中国",
    kind: "硬法",
    status: "已施行",
    oneLiner: "中国算法监管的起点，确立了算法备案制度和用户权益保护要求，适用于推荐、排序、调度等算法服务。",
    timeline: [
      { date: "2022-01-04", event: "国家网信办等四部门联合公布" },
      { date: "2022-03-01", event: "正式施行" },
    ],
    appliesTo: "在中国境内应用算法推荐技术提供互联网信息服务的主体（推荐、排序、检索、调度、生成合成等）。",
    keyPoints: [
      "<b>算法备案</b>：具有舆论属性或社会动员能力的服务需在「互联网信息服务算法备案系统」备案并公示。",
      "<b>用户权益</b>：提供关闭算法推荐的选项；不得利用算法实施大数据杀熟等不合理差别待遇。",
      "<b>特定群体保护</b>：对未成年人、老年人、劳动者（如外卖调度算法）有专门要求。",
    ],
    impact: [
      "在华运营的产品若含推荐/排序算法，备案是基础合规动作；备案信息需与实际算法逻辑一致并及时变更。",
    ],
    source: { label: "国家互联网信息办公室", url: "https://www.cac.gov.cn", date: "2022-01-04" },
  },

  {
    id: "cn-deepsynthesis",
    name: "互联网信息服务深度合成管理规定",
    nameEn: "China Deep Synthesis Provisions",
    region: "中国",
    kind: "硬法",
    status: "已施行",
    oneLiner: "针对深度合成（AI 生成/编辑的文本、图像、音视频等）的专门规定，确立显式与隐式标识要求。",
    timeline: [
      { date: "2022-11-25", event: "国家网信办等三部门联合公布" },
      { date: "2023-01-10", event: "正式施行" },
    ],
    appliesTo: "深度合成服务提供者与技术支持者。",
    keyPoints: [
      "可能导致公众混淆或误认的深度合成内容必须进行显著标识；所有深度合成内容需添加不影响使用的隐式标识。",
      "提供人脸、人声等生物识别信息编辑功能的，应提示使用者依法告知并取得被编辑个人的单独同意。",
    ],
    impact: [
      "AIGC 产品需要在生成链路中内置标识能力（水印/元数据），并保留日志。",
    ],
    source: { label: "国家互联网信息办公室", url: "https://www.cac.gov.cn", date: "2022-11-25" },
  },

  {
    id: "cn-labeling",
    name: "人工智能生成合成内容标识办法",
    nameEn: "China AI-Generated Content Labeling Measures",
    region: "中国",
    kind: "硬法",
    status: "已施行",
    oneLiner: "细化 AIGC 标识义务的专门规章，配套强制性国标，要求显式标识 + 隐式标识（元数据）双轨落地。",
    timeline: [
      { date: "2025-03-14", event: "国家网信办等四部门联合公布" },
      { date: "2025-09-01", event: "正式施行（配套强制性国标 GB 45438-2025 同步实施）" },
    ],
    appliesTo: "AI 生成合成内容的服务提供者，以及提供内容传播服务的平台（如社交媒体需核验并补充标识）。",
    keyPoints: [
      "<b>显式标识</b>：在生成内容或交互界面中以文字、语音、图形等方式明示「AI 生成」。",
      "<b>隐式标识</b>：在文件元数据中嵌入内容属性、服务提供者等信息。",
      "内容传播平台需核验标识；应用商店需核验 App 的标识功能说明。",
    ],
    impact: [
      "对产品的具体改造项：输出界面加显式提示、导出文件写入元数据、开放平台 API 传递标识字段。",
      "出海 + 在华双线运营的产品需同时满足中国标识办法与欧盟 AI Act 的透明度条款，建议统一设计标识层。",
    ],
    source: { label: "国家互联网信息办公室", url: "https://www.cac.gov.cn", date: "2025-03-14" },
  },

  {
    id: "colorado-ai",
    name: "美国科罗拉多州 AI 法案",
    nameEn: "Colorado AI Act (SB 24-205)",
    region: "美国",
    kind: "硬法",
    status: "已签署，生效日期经修订推迟",
    oneLiner: "美国第一部全面的州级 AI 立法，聚焦高风险 AI 系统的「算法歧视」，结构上明显参考了欧盟 AI Act 与 NIST RMF。",
    timeline: [
      { date: "2024-05-17", event: "州长签署成法" },
      { date: "2025-08", event: "特别立法会议通过修订，将生效日期从 2026-02-01 推迟至 2026-06-30" },
    ],
    appliesTo: "在科罗拉多州开展业务、开发或部署「高风险 AI 系统」（对教育、就业、金融、医疗、住房、保险、法律服务等领域的重要决定起实质作用）的企业。",
    keyPoints: [
      "开发者与部署者均负有「合理注意」义务以防范算法歧视，履行法定义务可获得可反驳的合规推定。",
      "部署者需建立风险管理制度（明确认可 NIST AI RMF、ISO/IEC 42001 作为依据）、开展影响评估、向消费者披露并提供申诉/更正途径。",
      "由州总检察长执法，无私人诉权。",
    ],
    impact: [
      "预示美国「联邦无横向立法、各州碎片化立法」的格局；企业需要按州维护合规矩阵。",
      "该法明确引用 NIST RMF / ISO 42001，说明落实这两个框架可以「一次建设、多处复用」。",
    ],
    source: { label: "Colorado General Assembly, SB24-205", url: "https://leg.colorado.gov/bills/sb24-205", date: "2024-05-17" },
  },

  {
    id: "nyc-ll144",
    name: "纽约市第 144 号地方法（AEDT）",
    nameEn: "NYC Local Law 144 — Automated Employment Decision Tools",
    region: "美国",
    kind: "硬法",
    status: "已执行",
    oneLiner: "全球最早落地执行的 AI 招聘工具法规：用自动化工具筛选候选人前，必须完成独立偏见审计并公示结果。",
    timeline: [
      { date: "2021-12", event: "纽约市议会通过" },
      { date: "2023-07-05", event: "开始执法" },
    ],
    appliesTo: "在纽约市使用自动化就业决策工具（AEDT）筛选候选人或员工的雇主与职业介绍机构。",
    keyPoints: [
      "使用前一年内需由独立审计方完成偏见审计（按性别、种族/族裔计算选择率与影响比率 impact ratio）并公开摘要。",
      "需提前告知候选人将使用 AEDT，并提供替代流程的申请渠道。",
    ],
    impact: [
      "催生了第三方「AI 审计」服务市场，是 AI Auditor 这一职业方向的标志性起点。",
      "凡是把 AI 用于招聘/晋升的公司，即使不在纽约，也普遍参照其影响比率方法做公平性评测。",
    ],
    source: { label: "NYC Dept. of Consumer and Worker Protection", url: "https://www.nyc.gov/site/dca/about/automated-employment-decision-tools.page", date: "2023-07-05" },
  },

  {
    id: "sr-11-7",
    name: "美联储模型风险管理监管指引 SR 11-7",
    nameEn: "Federal Reserve SR 11-7 — Guidance on Model Risk Management",
    region: "美国",
    kind: "软法/框架",
    status: "长期有效（银行业事实强制）",
    oneLiner: "银行业模型风险管理（MRM）的奠基文件。今天企业 AI 治理的很多做法——独立验证、模型清单、三道防线——都源自这里。",
    timeline: [{ date: "2011-04-04", event: "美联储与 OCC 联合发布" }],
    appliesTo: "受美联储/OCC 监管的银行机构；对其他金融机构有强参照效力，现已被普遍延伸适用于 AI/ML 模型。",
    keyPoints: [
      "<b>模型风险</b>来自模型错误与模型误用两方面；管理强度应与模型的重要性匹配。",
      "<b>核心机制</b>：模型开发与文档标准、独立的模型验证（validation）、模型清单（inventory）、定期复审与监控。",
      "「三道防线」：业务/开发是第一道，独立验证与风险管理是第二道，内部审计是第三道。",
    ],
    impact: [
      "金融机构的 Model Risk 团队是目前最成熟、编制最大的「AI 治理」组织形态，也是转型进入 AI 风险领域的重要通道。",
      "非金融企业设计 AI 评测与发布门禁时，SR 11-7 的独立验证思想仍是最佳参考。",
    ],
    source: { label: "Federal Reserve SR 11-7", url: "https://www.federalreserve.gov/supervisionreg/srletters/sr1107.htm", date: "2011-04-04" },
  },

  {
    id: "korea-ai",
    name: "韩国《人工智能基本法》",
    nameEn: "Korea Framework Act on AI Development and Trust",
    region: "其他",
    kind: "硬法",
    status: "已施行",
    oneLiner: "继欧盟之后全球第二部综合性 AI 法律，采用「促进发展 + 高影响 AI 义务」的双轨设计。",
    timeline: [
      { date: "2024-12-26", event: "国会通过" },
      { date: "2025-01-21", event: "正式颁布" },
      { date: "2026-01-22", event: "正式施行" },
    ],
    appliesTo: "在韩国提供 AI 产品/服务的企业，含域外效力；对「高影响 AI」（医疗、能源、公共决策等）与生成式 AI 有额外义务。",
    keyPoints: [
      "高影响 AI 需事前确认与影响评估；生成式 AI 需向用户告知并标识生成内容。",
      "超过一定算力阈值的模型需建立安全体系并向政府提交结果。",
    ],
    impact: [
      "亚太合规矩阵中继中国之后需要单独跟踪的司法辖区；出海韩国的 AI 产品需预留合规评估时间。",
    ],
    source: { label: "韩国科学技术信息通信部（MSIT）公告", date: "2025-01-21" },
  },

  {
    id: "sg-framework",
    name: "新加坡 AI 治理模型框架",
    nameEn: "Singapore Model AI Governance Framework (incl. GenAI, 2024)",
    region: "其他",
    kind: "软法/框架",
    status: "自愿采用",
    oneLiner: "亚洲最具影响力的自愿性治理框架，配套 AI Verify 开源测试工具包，务实、可操作。",
    timeline: [
      { date: "2019-01", event: "第一版发布（PDPC）" },
      { date: "2020-01", event: "第二版发布" },
      { date: "2024-05-30", event: "生成式 AI 治理框架发布（AI Verify Foundation × IMDA）" },
    ],
    appliesTo: "自愿采用；面向所有部署 AI 的组织。",
    keyPoints: [
      "GenAI 框架提出九个维度：问责、数据、可信开发与部署、事件报告、测试与保障、安全、内容溯源、安全对齐研发、AI 服务公众利益。",
      "AI Verify 提供可运行的测试工具包（技术测试 + 流程核查清单），Project Moonshot 提供 LLM 评测工具。",
    ],
    impact: [
      "适合作为初创公司「第一版治理框架」的模板：轻量、免费、有工具支撑。",
    ],
    source: { label: "AI Verify Foundation & IMDA", url: "https://aiverifyfoundation.sg", date: "2024-05-30" },
  },

  {
    id: "oecd-principles",
    name: "OECD 人工智能原则",
    nameEn: "OECD AI Principles",
    region: "国际",
    kind: "软法/框架",
    status: "已更新（2024）",
    oneLiner: "第一个政府间 AI 原则（46+ 国家采纳），G20 采纳其表述；各国立法中「以人为本」「可问责」等概念的共同源头。",
    timeline: [
      { date: "2019-05-22", event: "OECD 理事会通过" },
      { date: "2024-05-03", event: "修订更新（回应生成式 AI 发展）" },
    ],
    appliesTo: "对政府的政策建议；企业常在 AI 原则（AI Principles）声明中引用其框架。",
    keyPoints: [
      "五项价值原则：包容性增长与福祉、人权与法治（含公平与隐私）、透明与可解释、稳健与安全、问责。",
      "OECD.AI 政策观察站维护全球 AI 政策数据库与事件监测（AI Incidents Monitor），是横向对比各国监管的首选工具。",
    ],
    impact: [
      "撰写公司级 AI 原则或对外政策立场文件时的标准引用来源。",
    ],
    source: { label: "OECD.AI Policy Observatory", url: "https://oecd.ai/en/ai-principles", date: "2024-05-03" },
  },
];

/* 三大基准对比表（法规页使用） */
window.KB_REG_COMPARISON = {
  columns: ["维度", "EU AI Act", "NIST AI RMF", "ISO/IEC 42001"],
  rows: [
    ["性质", "有约束力的法律（欧盟条例）", "自愿性框架（美国官方发布）", "可认证的国际管理体系标准"],
    ["核心逻辑", "按风险分级设定强制义务", "Govern / Map / Measure / Manage 四功能", "PDCA 管理体系 + 附件 A 控制项"],
    ["适用触发", "产品/服务进入欧盟市场", "自愿采用（被采购与州法引用）", "自愿实施，第三方认证"],
    ["违规后果", "最高 3500 万欧元或全球营业额 7%", "无直接处罚", "无处罚；认证失效影响商业信任"],
    ["对企业的典型动作", "系统分级、合格评定、CE 标识、技术文档", "风险评估流程、评测度量、治理制度", "体系文件、内审、管理评审、认证审计"],
    ["三者关系", "定义「必须做什么」", "提供「怎么想、怎么评」的方法论", "提供「怎么组织和证明」的体系外壳"],
  ],
};
