export interface PlanItem {
  id: string;
  name: string;
  price: string;
  period: '月付' | '一次性';
  dataLimit: string;
  dataType: '月度流量' | '一次性总量';
  speedLimit: string;
  deviceLimit: string;
  aiSupport: string;
  mediaSupport: string;
  clients: string;
  recommendedFor: string;
  isPopular?: boolean;
  features: string[];
  verificationNote: string;
}

export const PLANS: PlanItem[] = [
  {
    id: 'basic-monthly',
    name: '基础体验版',
    price: '¥15.00',
    period: '月付',
    dataLimit: '150GB',
    dataType: '月度流量',
    speedLimit: '最高 500Mbps（公开声明）',
    deviceLimit: '3台设备同时在线（公开声明）',
    aiSupport: '基础支持（参考声明）',
    mediaSupport: '日常网页与高清视频',
    clients: 'Clash / Shadowrocket / Stash 等',
    recommendedFor: '轻度上网、网页浏览与社交应用',
    isPopular: false,
    features: [
      '每月 150GB 高速流量',
      '最高 500Mbps 峰值速率声明',
      '支持 3 台设备同时连接',
      '适配通用 Clash 与 Shadowrocket 协议',
      '适用于网页浏览与日常应用'
    ],
    verificationNote: '速率与设备限制源自公开参考资料，未经独立第三方实测承诺。'
  },
  {
    id: 'pro-monthly',
    name: '进阶专线版',
    price: '¥28.00',
    period: '月付',
    dataLimit: '450GB',
    dataType: '月度流量',
    speedLimit: '最高 2.5Gbps（公开声明）',
    deviceLimit: '5台设备同时在线（公开声明）',
    aiSupport: 'AI 平台加速优化（参考声明）',
    mediaSupport: '4K/8K 视频流媒体支持',
    clients: 'Clash / Shadowrocket / Quantumult X 等',
    recommendedFor: '中度用户、4K视频观赏与低延迟游戏',
    isPopular: true,
    features: [
      '每月 450GB 大流量配额',
      '最高 2.5Gbps 专线峰值速率声明',
      '支持 5 台设备同时在线',
      '针对 AI 工具及流媒体解锁优化',
      '适合 4K/8K 视频与游戏场景'
    ],
    verificationNote: '专线带宽与流媒体解锁效果受网络高峰及节点状态影响，以实际页面为准。'
  },
  {
    id: 'ultimate-monthly',
    name: '旗舰尊享版',
    price: '¥48.00',
    period: '月付',
    dataLimit: '1000GB',
    dataType: '月度流量',
    speedLimit: '最高 10Gbps VIP 通道（公开声明）',
    deviceLimit: '10台设备同时在线（公开声明）',
    aiSupport: '优先 AI 节点访问（参考声明）',
    mediaSupport: '全高清/极清视频及大文件传输',
    clients: '全平台客户端兼容',
    recommendedFor: '重度下载、多设备共享与团队日常办公',
    isPopular: false,
    features: [
      '每月 1000GB 极速流量',
      '10Gbps VIP 节点通道声明',
      '支持 10 台设备同时在线',
      '声称人工技术支持通道',
      '适合全天候大流量场景'
    ],
    verificationNote: 'VIP通道与人工客服响应时间未进行独立验证，请查阅购买结算页条款。'
  },
  {
    id: 'onetime-300g',
    name: '不限时流量包',
    price: '¥68.00',
    period: '一次性',
    dataLimit: '300GB',
    dataType: '一次性总量',
    speedLimit: '基础高速通道（公开声明）',
    deviceLimit: '无严格设备数量限制（参考声明）',
    aiSupport: '标准 AI 支持（参考声明）',
    mediaSupport: '常规流媒体与网页浏览',
    clients: 'Clash / Shadowrocket / Surfboard 等',
    recommendedFor: '低频备用、临时出行与不定期上网',
    isPopular: false,
    features: [
      '一次性 300GB 总流量（非每月）',
      '不设按月到期自动清零规则',
      '按实际使用扣减额度',
      '支持多客户端灵活配置',
      '非常适合备用及低频使用'
    ],
    verificationNote: '「不限时」指不按自然月清零，不等于无限流量。具体终止政策及是否在售以跳转页面显示为准。'
  }
];
