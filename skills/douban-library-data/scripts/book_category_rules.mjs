export const CATEGORY_RULES = [
  {
    category: "计算机",
    weight: 8,
    patterns: [
      /计算机|编程|程序|程序员|代码|软件|架构|算法|数据结构|数据库|操作系统|网络协议|机器学习|深度学习|人工智能|神经网络|unix|linux|python|java\b|javascript|typescript|rust|c\+\+|golang|kubernetes|docker|devops|前端|后端|全栈|产品经理/i,
    ],
  },
  {
    category: "数学",
    weight: 8,
    patterns: [
      /数学|微积分|线性代数|代数|几何|数论|概率|统计|拓扑|方程|函数|矩阵|证明|what is mathematics/i,
    ],
  },
  {
    category: "语言",
    weight: 8,
    patterns: [
      /英语|英文|单词|词汇|语法|口语|写作|阅读|听力|翻译|语言学|汉语|日语|法语|德语|西班牙语|verbal|word power|how to say it/i,
    ],
  },
  {
    category: "心理",
    weight: 8,
    patterns: [
      /心理|心理学|阿德勒|弗洛伊德|荣格|认知|人格|情绪|焦虑|抑郁|幸福|自卑|勇气|亲密关系|沟通|习惯|育儿|教养|养育|父母|孩子|儿童心理/i,
    ],
  },
  {
    category: "儿童",
    weight: 8,
    patterns: [
      /儿童读物|儿童文学|绘本|童话|少儿|小学生|青少年读物|宝宝|幼儿|少年读物|picture book/i,
    ],
  },
  {
    category: "传记",
    weight: 8,
    patterns: [
      /传记|自传|回忆录|人物传|生平|memoir|biography|steve jobs|乔布斯|富兰克林|爱因斯坦传|达·芬奇传/i,
    ],
  },
  {
    category: "经济",
    weight: 9,
    patterns: [
      /经济|金融|投资|股票|证券|基金|货币|资本|债券|期货|交易|财务|会计|商业周期|cfa|economics|finance|investment/i,
    ],
  },
  {
    category: "管理",
    weight: 8,
    patterns: [
      /管理|团队|领导|组织|战略|创业|企业|公司|商业模式|营销|运营|绩效|okr|决策|谈判|增长|定位|创新|产品管理|manager|management|leadership/i,
    ],
  },
  {
    category: "历史",
    weight: 8,
    patterns: [
      /历史|通史|世界史|中国史|近代史|古代史|现代史|文明史|王朝|帝国|战争|二战|一战|冷战|革命|考古|三国|秦汉|唐朝|宋朝|明朝|清朝|史记|资治通鉴|history/i,
    ],
  },
  {
    category: "天文地理",
    weight: 8,
    patterns: [
      /天文|宇宙|星空|星系|星球|银河|太阳系|黑洞|地理|地图|地球|地貌|地质|气候|国家地理|geography|astronomy|cosmos|universe/i,
    ],
  },
  {
    category: "科学",
    weight: 7,
    patterns: [
      /科学|物理|化学|生物|进化|基因|生命|医学|神经科学|脑科学|量子|相对论|自然|实验|physics|chemistry|biology|science/i,
    ],
  },
  {
    category: "科幻",
    weight: 9,
    patterns: [
      /科幻|science fiction|sci-fi|三体|球状闪电|流浪地球|赡养人类|挽救计划|地铁2033|八十天环游世界|凡尔纳|刘慈欣|阿西莫夫|基地/i,
    ],
  },
  {
    category: "小说",
    weight: 8,
    patterns: [
      /小说|长篇|短篇|故事集|推理|悬疑|魔幻|奇幻|武侠|文学名著|西游记|红楼梦|三国演义|水浒传|哈利[· ]?波特|harry potter|指环王|魔戒|the fellowship of the ring|the return of the king|tolkien|福尔摩斯|novel|fiction/i,
    ],
  },
  {
    category: "散文",
    weight: 7,
    patterns: [
      /散文|随笔|杂文|文集|札记|笔记|书信|日记|游记|诗集|essay|essays/i,
    ],
  },
  {
    category: "工具书",
    weight: 5,
    patterns: [
      /词典|字典|辞典|手册|指南|教程|教材|习题|解析|考纲|备考|考试|真题|题库|速查|大全|manual|handbook|guidebook|workbook|textbook|edition/i,
    ],
  },
  {
    category: "哲学",
    weight: 7,
    patterns: [
      /哲学|思想史|伦理|逻辑学|形而上|存在主义|康德|尼采|柏拉图|亚里士多德|苏格拉底|philosophy/i,
    ],
  },
  {
    category: "艺术",
    weight: 7,
    patterns: [
      /艺术|设计|绘画|摄影|音乐|电影|建筑|美学|漫画|连环画|art|design|photography|music|architecture/i,
    ],
  },
  {
    category: "社会",
    weight: 6,
    patterns: [
      /社会|政治|法律|人类学|社会学|传播学|新闻|媒体|城市|乡土|民族|制度|国家|society|politics|law/i,
    ],
  },
  {
    category: "教育",
    weight: 6,
    patterns: [
      /教育|学习方法|学校|教学|课程|教师|学生|考试改革|education/i,
    ],
  },
];

const TITLE_BONUS = 4;

const TITLE_OVERRIDES = [
  {
    category: "科幻",
    patterns: [
      /八十天环游世界|三体|球状闪电|流浪地球|赡养人类|挽救计划|地铁2033|基地/i,
    ],
  },
  {
    category: "科学",
    patterns: [
      /上帝掷骰子吗|物理世界奇遇记|时间简史|宇宙最初三分钟|宇宙的最后三分钟|自私的基因/i,
    ],
  },
  {
    category: "儿童",
    patterns: [
      /小王子|安徒生童话|世界童话|机器猫|哆啦a梦|父与子|绿野仙踪|儿童文学|儿童读物|少儿|绘本|童话/i,
    ],
  },
  {
    category: "小说",
    patterns: [
      /封神演义|临高启明|查泰莱夫人的情人|呼兰河传|罗生门|月亮和六便士|士兵突击|人间失格|十日谈|羊脂球|牛虻|局外人|围城|平凡的世界|长恨歌|繁花|黄金时代|麦田里的守望者|战争与和平|哈利[· ]?波特|harry potter|指环王|魔戒|西游记|水浒传|三国演义|红楼梦/i,
    ],
  },
  {
    category: "历史",
    patterns: [
      /孙子兵法|文明之光|从前有个书生|世说新语|史记|资治通鉴|国史大纲|万历十五年|明朝那些事儿|中国通史|邓小平时代|激荡三十年|激荡十年|1453/i,
    ],
  },
  {
    category: "语言",
    patterns: [
      /笠翁对韵|梦游天姥吟留别|新编说文解字|说文解字|读古文入门|这个词是怎么来的|英语|词汇|语法|单词/i,
    ],
  },
  {
    category: "心理",
    patterns: [
      /人性的优点|人性的弱点|自卑与超越|被讨厌的勇气|非暴力沟通|亲密关系|乌合之众|自控力/i,
    ],
  },
  {
    category: "哲学",
    patterns: [
      /沉思录|君主论|人生的智慧|幸福之路|禅与摩托车维修艺术|庄子|论语|大学|中庸/i,
    ],
  },
  {
    category: "经济",
    patterns: [
      /面膜财经|小狗钱钱|富爸爸|国富论|巴菲特|凯恩斯|哈耶克|财报|cfa/i,
    ],
  },
  {
    category: "散文",
    patterns: [
      /陶庵梦忆|西湖梦寻|汪曾祺散文|浮生六记|管锥编/i,
    ],
  },
];

function compactText(value = "") {
  return value.toLowerCase().replace(/\s+/g, " ");
}

export function inferBookCategory({ title = "", text = "" } = {}) {
  const titleText = compactText(title);
  const fullText = compactText(`${title}\n${text}`);
  for (const override of TITLE_OVERRIDES) {
    if (override.patterns.some((pattern) => {
      const matched = pattern.test(titleText);
      pattern.lastIndex = 0;
      return matched;
    })) {
      return override.category;
    }
  }

  const scores = new Map();

  for (const rule of CATEGORY_RULES) {
    let score = 0;
    for (const pattern of rule.patterns) {
      if (pattern.test(titleText)) score += rule.weight + TITLE_BONUS;
      pattern.lastIndex = 0;
      if (pattern.test(fullText)) score += rule.weight;
      pattern.lastIndex = 0;
    }
    if (score > 0) scores.set(rule.category, score);
  }

  if (scores.size === 0) return "其他";

  const priority = CATEGORY_RULES.map((rule) => rule.category);
  return [...scores.entries()]
    .sort((a, b) => b[1] - a[1] || priority.indexOf(a[0]) - priority.indexOf(b[0]))[0][0];
}
