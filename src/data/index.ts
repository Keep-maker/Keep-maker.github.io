
import { Education, Publication, Project, Exchange } from '../types';
import photo from '../assets/images/dafc5bd0cfff3aeaa1abf4f14c11b1f1.jpg';

export const personalInfo = {
  name: "梁道君",
  title: "副教授",
  school: "齐鲁工业大学（山东省科学院）计算学部",
  center: "国家超级计算济南中心",
  phone: "151-5412-1592",
  email: "liangdj@sdas.org",
  researchInterest: "人工智能、多模态时序大模型",
  photo: photo
};

export const educations: Education[] = [
  { period: "2019.09-2025.06", school: "山东大学", college: "信息科学与工程学院", major: "信息与通信工程", degree: "博士" },
  { period: "2016.09-2019.06", school: "山东师范大学", college: "信息科学与工程学院", major: "物联网应用技术", degree: "硕士" },
  { period: "2012.09-2016.06", school: "泰山学院", college: "信息科学技术学院", major: "软件工程", degree: "学士" }
];

export const publications: Publication[] = [
  {
    id: 1,
    title: "Multi-Head Encoding for Extreme Label Classification",
    venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI, 2025)",
    details: "第 1 位, IF=20.8, 中科院一区 TOP, Q1, SCI 收录, CCF A, 已发表",
    tags: ["TPAMI", "CCF A", "IF=20.8", "中科院一区"],
    url: "https://ieeexplore.ieee.org/document/10816186/",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan, Minggao Zhang",
    image: "https://placehold.co/300x200/2563eb/ffffff?text=TPAMI",
    links: [
      { label: "abstract", url: "https://ieeexplore.ieee.org/document/10816186/" },
      { label: "pdf", url: "https://arxiv.org/pdf/2412.10182" },
      { label: "code", url: "https://github.com/Anoise/MHE" }
    ]
  },
  {
    id: 2,
    title: "DeepBooTS: Dual-Stream Residual Boosting for Drift-Resilient Time-Series Forecasting",
    venue: "AAAI 2026",
    details: "第 1 位, 计算机顶会, CCF A, 已发表",
    tags: ["AAAI 2026", "CCF A", "顶会"],
    url: "https://scholar.google.com/scholar?q=DeepBooTS%3A%20Dual-Stream%20Residual%20Boosting%20for%20Drift-Resilient%20Time-Series%20Forecasting",
    authors: "Daojun Liang, Jing Chen, Xiao Wang, Yinglong Wang, Shuo Li",
    image: "https://placehold.co/300x200/ea580c/ffffff?text=AAAI",
    links: [
      { label: "abstract", url: "https://arxiv.org/abs/2511.06893" },
      { label: "code", url: "https://github.com/Anoise/DeepBooTS" }
    ]
  },
  {
    id: 3,
    title: "The Forecast After the Forecast: A Post-Processing Shift in Time Series",
    venue: "ICLR 2026",
    details: "第 1 位, 计算机顶会, CCF A, 已发表",
    tags: ["ICLR 2026", "CCF A", "顶会"],
    url: "https://scholar.google.com/scholar?q=The%20Forecast%20After%20the%20Forecast%3A%20A%20Post-Processing%20Shift%20in%20Time%20Series",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan",
    image: "https://placehold.co/300x200/16a34a/ffffff?text=ICLR",
    links: [
      { label: "abstract", url: "#" }
    ]
  },
  {
    id: 4,
    title: "DistPred: A Distribution-Free Probabilistic Inference Method for Regression and Forecasting",
    venue: "KDD 2025",
    details: "第 1 位, 计算机顶会, CCF A, 已发表",
    tags: ["KDD 2025", "CCF A", "顶会"],
    url: "https://scholar.google.com/scholar?q=DistPred%3A%20A%20Distribution-Free%20Probabilistic%20Inference%20Method%20for%20Regression%20and%20Forecasting",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan",
    image: "https://placehold.co/300x200/9333ea/ffffff?text=KDD",
    links: [
      { label: "abstract", url: "https://arxiv.org/abs/2406.11397" }
    ]
  },
  {
    id: 5,
    title: "RasPiDets: A Quasi-Real-Time Defect Detection Method with End-Edge-Cloud Collaboration",
    venue: "IEEE Transactions on Industrial Informatics (TII, 2025)",
    details: "第 1 位, IF=11.7, 中科院一区 TOP, Q1, SCI 收录, 工业顶刊, 已录用",
    tags: ["TII", "IF=11.7", "中科院一区", "工业顶刊"],
    url: "https://scholar.google.com/scholar?q=RasPiDets%3A%20A%20Quasi-Real-Time%20Defect%20Detection%20Method%20with%20End-Edge-Cloud%20Collaboration",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan",
    image: "https://placehold.co/300x200/0891b2/ffffff?text=TII",
    links: [
      { label: "abstract", url: "#" }
    ]
  },
  {
    id: 6,
    title: "Progressive Supervision Via Label Decomposition: An Long-Term and Large-Scale Wireless Traffic Forecasting",
    venue: "Knowledge-Based Systems (KBS, 2024)",
    details: "第 1 位, IF=7.2, 中科院一区 TOP, Q1, SCI 收录, 已发表",
    tags: ["KBS", "IF=7.2", "SCI Q1"],
    url: "https://scholar.google.com/scholar?q=Progressive%20Supervision%20Via%20Label%20Decomposition%3A%20An%20Long-Term%20and%20Large-Scale%20Wireless%20Traffic%20Forecasting",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan, Minggao Zhang",
    image: "https://placehold.co/300x200/db2777/ffffff?text=KBS",
    links: [
      { label: "abstract", url: "#" }
    ]
  },
  {
    id: 7,
    title: "Periodformer: An Efficient Long-Term Time Series Forecasting Method Based on Periodic Attention",
    venue: "Knowledge-Based Systems (KBS, 2024)",
    details: "第 1 位, IF=7.2, 中科院一区 TOP, Q1, SCI 收录, 已发表",
    tags: ["KBS", "IF=7.2", "SCI Q1"],
    url: "https://scholar.google.com/scholar?q=Periodformer%3A%20An%20Efficient%20Long-Term%20Time%20Series%20Forecasting%20Method%20Based%20on%20Periodic%20Attention",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan",
    image: "https://placehold.co/300x200/db2777/ffffff?text=KBS",
    links: [
      { label: "abstract", url: "#" }
    ]
  },
  {
    id: 8,
    title: "MABO: A Parallel Hyperparameter Search Algorithm for Time Series Forecasting",
    venue: "Pattern Recognition, 2026",
    details: "第 1 位, IF=7.6, 中科院一区 TOP, Q1, SCI 收录, 返修中",
    tags: ["PR", "IF=7.6", "SCI Q1", "返修中"],
    url: "https://scholar.google.com/scholar?q=MABO%3A%20A%20Parallel%20Hyperparameter%20Search%20Algorithm%20for%20Time%20Series%20Forecasting",
    authors: "Daojun Liang, Haixia Zhang, Dongfeng Yuan",
    image: "https://placehold.co/300x200/4f46e5/ffffff?text=PR",
    links: [
      { label: "abstract", url: "#" }
    ]
  },
  {
    id: 10,
    title: "LightDets：端边云协同的产品质量在线检测方法",
    venue: "计算机集成制造系统, 2024",
    details: "第 1 位, IF=2.5, 中文核心, A 类, EI 收录, 已发表",
    tags: ["EI", "中文核心", "A类"],
    url: "https://scholar.google.com/scholar?q=LightDets%EF%BC%9A%E7%AB%AF%E8%BE%B9%E4%BA%91%E5%8D%8F%E5%90%8C%E7%9A%84%E4%BA%A7%E5%93%81%E8%B4%A8%E9%87%8F%E5%9C%A8%E7%BA%BF%E6%A3%80%E6%B5%8B%E6%96%B9%E6%B3%95",
    authors: "梁道君, 张海霞, 袁东风",
    image: "https://placehold.co/300x200/ef4444/ffffff?text=CIMS",
    links: [
      { label: "abstract", url: "#" }
    ]
  }
];

export const projects: Project[] = [
  {
    title: "国家自然科学基金国际（地区）合作与交流重点项目",
    period: "2019.01-2023.01",
    responsibility: "基于车辆行为分析的智能车联网关键技术研究。负责数据驱动的车辆移动与通信双行为分析与预测。"
  },
  {
    title: "国家自然科学基金区域创新发展联合基金重点支持项目",
    period: "2024.01-2027.12",
    responsibility: "面向 6G 的通感算融合理论与关键技术研究。负责基于人工智能的未来网络态势预测方法构建。"
  },
  {
    title: "山东省重点研发计划重大科技创新工程项目",
    period: "2019.01-2021.12",
    responsibility: "新型云-边缘模式智能制造管控平台及应用示范。负责基于多目标协同优化的智能排产与产品质量检测算法研发。"
  }
];

export const exchanges: Exchange[] = [
  { date: "2026.01", content: "参加 AAAI 2026（新加坡），担任 Session Chair，并展示发表论文" },
  { date: "2024.07", content: "参加第八届数字孪生与智能制造服务学术会议（杭州），数据科学前沿方向" },
  { date: "2024.06", content: "参加 2024 全球人工智能技术大会（杭州），AI 前沿方向" },
  { date: "2023.12", content: "参加 IEEE ICMCA2023 忆阻计算及应用国际会议（济南），宣讲所发表论文" }
];
