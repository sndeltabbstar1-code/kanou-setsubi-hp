export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: string;
  features: string[];
  bgImages?: [string, string];
};

export const services: Service[] = [
  {
    slug: 'water',
    title: '上下水道設備',
    short: 'くらしと産業の根幹を支える水回りインフラ',
    description: '給水・排水・雨水・浄化槽まで、住宅から公共施設まで幅広く対応。\n本管接続から宅内配管、メンテナンスまで一貫施工します。',
    icon: 'water',
    features: ['給水・排水管設備', '本管接続工事', '浄化槽・受水槽'],
    bgImages: ['/images/services/water-supply.png', '/images/services/water-drainage.png'],
  },
  {
    slug: 'air',
    title: '空調設備',
    short: '快適な室内環境を、最適な設計で',
    description: '業務用エアコン、ビル用マルチ、家庭用エアコンまで対応。\nEHP/GHPの選定から冷媒配管、メンテナンスまで対応します。',
    icon: 'air',
    features: ['業務用エアコン設置', 'ビル用マルチ', '家庭用空調', '冷媒配管・更新工事'],
    bgImages: ['/images/services/air-outdoor.png', '/images/services/air-indoor.png'],
  },
  {
    slug: 'gas',
    title: 'ガス設備',
    short: '都市ガス・LPガス、安全第一の施工',
    description: '都市ガス・プロパンの配管、ガス機器設置、対応。',
    icon: 'gas',
    features: ['都市ガス', 'LPガス', 'ガス機器設置'],
    bgImages: ['/images/services/gas-pipe.png', '/images/services/gas-meter.png'],
  },
  {
    slug: 'fire',
    title: '消防設備',
    short: 'いのちを守る、確実な防災',
    description: '屋内消火栓、スプリンクラー、自動火災報知設備など、\n消防法令に基づく設計・施工・点検まで対応します。',
    icon: 'fire',
    features: ['消火設備', '自動火災報知設備', '避難設備', '消防点検報告'],
    bgImages: ['/images/services/fire-pump.png', '/images/services/fire-hose.png'],
  },
  {
    slug: 'sanitary',
    title: '衛生設備',
    short: '清潔で快適な、水まわり空間',
    description: '住宅から商業施設、公共施設のトイレ・キッチン・浴室・洗面など、衛生器具の設計・施工・リフォームに対応します。',
    icon: 'sanitary',
    features: ['トイレ・洗面・浴室', '厨房設備', '給湯設備', 'バリアフリー対応'],
    bgImages: ['/images/services/sanitary-kitchen.png', '/images/services/sanitary-toilet.png'],
  },
];
