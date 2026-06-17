import { Education, Publication, Project, ResearchDirection, AcademicActivity } from '../types';
import photo from '../assets/images/photo.jpg';

export const personalInfo = {
  name: '梁道君',
  title: '副教授',
  school: '齐鲁工业大学（山东省科学院）',
  department: '计算机科学与技术学部',
  center: '国家超级计算济南中心',
  location: '山东省济南市',
  phone: '151-5412-1592',
  email: 'liangdj@sdas.org',
  researchAreas: '时间序列分析与预测、在线序列分类、机器学习与智能信息处理',
  tagline:
    '长期从事时间序列分析与机器学习方法研究，重点关注在线分类、漂移鲁棒预测、缺陷检测与工业智能应用。',
  photo,
};

export const heroStats = [
  { value: '15', label: '第一/通讯论文', unit: '篇' },
  { value: '8', label: 'SCI 收录', unit: '篇' },
  { value: '4', label: 'CCF A 类', unit: '篇' },
  { value: '3+', label: '国家级/省部级项目', unit: '项' },
];

export const researchKeywords = [
  '时间序列预测',
  '在线分类',
  '概念漂移',
  '机器学习',
  '工业智能',
  '质量检测',
];

export const researchProfile =
  '梁道君，齐鲁工业大学计算机科学与技术学部副教授，主要研究方向为时间序列分析与预测、在线序列分类、机器学习和智能信息处理。近年来围绕极端标签分类、时间序列漂移鲁棒预测、工业缺陷检测和产品质量在线检测等问题开展研究，在 IEEE TPAMI、IEEE TII、KBS、ICLR、AAAI 等期刊和会议发表多篇论文。主持或参与国家自然科学基金、山东省重点研发计划及产学研项目，研究成果已应用于工业质量分析与智能检测场景。';

export const researchDirections: ResearchDirection[] = [
  {
    title: '时间序列预测与漂移建模',
    description: '关注概念漂移、长期预测、后处理校正、鲁棒建模等问题。',
  },
  {
    title: '在线序列分类与极端标签学习',
    description: '面向流式数据和不平衡标签场景，研究在线分类、标签嵌入与高效推断方法。',
  },
  {
    title: '工业智能与质量检测',
    description: '聚焦缺陷检测、产品质量在线检测、工业传感数据分析与智能决策。',
  },
];

export const educations: Education[] = [
  { period: '2019.09 – 2025.06', school: '山东大学', degree: '博士', major: '信息与通信工程' },
  { period: '2016.09 – 2019.06', school: '山东师范大学', degree: '硕士', major: '物联网应用技术' },
  { period: '2012.09 – 2016.06', school: '泰山学院', degree: '学士', major: '软件工程' },
];

export const publications: Publication[] = [
  {
    id: 1,
    featured: true,
    title: 'Multi-Head Encoding for Extreme Label Classification',
    venue: 'IEEE Transactions on Pattern Analysis and Machine Intelligence, 2025',
    details: '第 1 位, IF=20.8, 中科院一区 TOP, Q1, SCI 收录, CCF A, 已发表',
    tags: ['TPAMI', 'CCF A', 'SCI Q1', '中科院一区', 'IF=20.8'],
    url: 'https://ieeexplore.ieee.org/document/10816186/',
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan, Minggao Zhang',
    links: [
      { label: 'DOI', url: 'https://ieeexplore.ieee.org/document/10816186/' },
      { label: 'PDF', url: 'https://arxiv.org/pdf/2412.10182' },
      { label: 'Code', url: 'https://github.com/Anoise/MHE' },
    ],
  },
  {
    id: 2,
    featured: true,
    title: 'DeepBooTS: Dual-Stream Residual Boosting for Drift-Resilient Time-Series Forecasting',
    venue: 'AAAI Conference on Artificial Intelligence, 2026',
    details: '第 1 位, 计算机顶会, CCF A, 已发表',
    tags: ['AAAI', 'CCF A', '顶会'],
    url: 'https://arxiv.org/abs/2511.06893',
    authors: 'Daojun Liang, Jing Chen, Xiao Wang, Yinglong Wang, Shuo Li',
    links: [
      { label: 'PDF', url: 'https://arxiv.org/abs/2511.06893' },
      { label: 'Code', url: 'https://github.com/Anoise/DeepBooTS' },
    ],
  },
  {
    id: 3,
    featured: true,
    title: 'The Forecast After the Forecast: A Post-Processing Shift in Time Series',
    venue: 'International Conference on Learning Representations, 2026',
    details: '第 1 位, 计算机顶会, CCF A, 已发表',
    tags: ['ICLR', 'CCF A', '顶会'],
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan',
    links: [],
  },
  {
    id: 4,
    featured: true,
    title: 'DistPred: A Distribution-Free Probabilistic Inference Method for Regression and Forecasting',
    venue: 'ACM Knowledge Discovery and Data Mining, 2025',
    details: '第 1 位, 计算机顶会, CCF A, 已发表',
    tags: ['KDD', 'CCF A', '顶会'],
    url: 'https://arxiv.org/abs/2406.11397',
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan',
    links: [{ label: 'PDF', url: 'https://arxiv.org/abs/2406.11397' }],
  },
  {
    id: 5,
    featured: true,
    title: 'RasPiDets: A Quasi-Real-Time Defect Detection Method with End-Edge-Cloud Collaboration',
    venue: 'IEEE Transactions on Industrial Informatics, 2025',
    details: '第 1 位, IF=11.7, 中科院一区 TOP, Q1, SCI 收录, 工业顶刊, 已录用',
    tags: ['TII', '中科院一区', 'SCI Q1', 'IF=11.7'],
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan',
    links: [],
  },
  {
    id: 6,
    title: 'Progressive Supervision Via Label Decomposition: An Long-Term and Large-Scale Wireless Traffic Forecasting',
    venue: 'Knowledge-Based Systems, 2024',
    details: '第 1 位, IF=7.2, 中科院一区 TOP, Q1, SCI 收录, 已发表',
    tags: ['KBS', 'SCI Q1', '中科院一区'],
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan, Minggao Zhang',
    links: [],
  },
  {
    id: 7,
    title: 'Periodformer: An Efficient Long-Term Time Series Forecasting Method Based on Periodic Attention',
    venue: 'Knowledge-Based Systems, 2024',
    details: '第 1 位, IF=7.2, 中科院一区 TOP, Q1, SCI 收录, 已发表',
    tags: ['KBS', 'SCI Q1'],
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan',
    links: [],
  },
  {
    id: 8,
    title: 'MABO: A Parallel Hyperparameter Search Algorithm for Time Series Forecasting',
    venue: 'Pattern Recognition, 2026',
    details: '第 1 位, IF=7.6, 中科院一区 TOP, Q1, SCI 收录, 返修中',
    tags: ['PR', 'SCI Q1', '返修中'],
    authors: 'Daojun Liang, Haixia Zhang, Dongfeng Yuan',
    links: [],
  },
  {
    id: 10,
    title: 'LightDets：端边云协同的产品质量在线检测方法',
    venue: '计算机集成制造系统, 2024',
    details: '第 1 位, 中文核心, A 类, EI 收录, 已发表',
    tags: ['EI', '中文核心', 'A 类'],
    url: 'https://scholar.google.com/scholar?q=LightDets%EF%BC%9A%E7%AB%AF%E8%BE%B9%E4%BA%91%E5%8D%8F%E5%90%8C%E7%9A%84%E4%BA%A7%E5%93%81%E8%B4%A8%E9%87%8F%E5%9C%A8%E7%BA%BF%E6%A3%80%E6%B5%8B%E6%96%B9%E6%B3%95',
    authors: '梁道君, 张海霞, 袁东风',
    links: [],
  },
];

export const projects: Project[] = [
  {
    level: 'national',
    title: '国家自然科学基金国际（地区）合作与交流重点项目',
    source: '国家自然科学基金委员会',
    period: '2019.01 – 2023.01',
    role: '主要参与人',
    contribution:
      '围绕可信时间序列建模与交通复杂场景感知开展研究，负责数据驱动的车辆移动与通信双行为分析与预测。',
  },
  {
    level: 'national',
    title: '国家自然科学基金区域创新发展联合基金重点支持项目',
    source: '国家自然科学基金委员会',
    period: '2024.01 – 2027.12',
    role: '主要参与人',
    contribution:
      '面向 6G 通感算融合理论与关键技术研究，负责基于人工智能的未来网络态势预测方法构建。',
  },
  {
    level: 'provincial',
    title: '山东省重点研发计划重大科技创新工程项目',
    source: '山东省科学技术厅',
    period: '2019.01 – 2021.12',
    role: '核心成员',
    contribution:
      '新型云-边缘模式智能制造管控平台及应用示范，负责智能排产与产品质量检测算法研发。',
  },
  {
    level: 'industry',
    title: '企业合作与横向项目',
    source: '海尔、威达重工等企业',
    period: '2019 – 至今',
    role: '核心成员',
    contribution:
      '参与大型制造企业智能管控平台研发，主导通信流量预测、产品质量实时检测及智能排产等关键算法设计与落地。',
  },
];

export const academicActivities: AcademicActivity[] = [
  { type: 'service', date: '2026.01', content: 'AAAI 2026（新加坡），担任 Session Chair 并展示发表论文' },
  { type: 'conference', date: '2024.07', content: '第八届数字孪生与智能制造服务学术会议（杭州），数据科学前沿方向' },
  { type: 'conference', date: '2024.06', content: '2024 全球人工智能技术大会（杭州），AI 前沿方向' },
  { type: 'conference', date: '2023.12', content: 'IEEE ICMCA 2023 忆阻计算及应用国际会议（济南），宣讲所发表论文' },
];
