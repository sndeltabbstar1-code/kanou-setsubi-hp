export type WorkCategory = 'water' | 'air' | 'fire' | 'sanitary';

export type Work = {
  id: string;
  title: string;
  category: WorkCategory;
  categoryLabel: string;
  client: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  image: string;
};

export const works: Work[] = [
  // 上下水道 ×3
  {
    id: 'water-001',
    title: '準備中',
    category: 'water',
    categoryLabel: '上下水道',
    client: '本庄市（公共）',
    location: '準備中',
    year: '2025',
    scope: '給水管更新・排水管更新',
    description: '準備中',
    image: '/images/works/water-01.jpg',
  },
  {
    id: 'water-002',
    title: '準備中',
    category: 'water',
    categoryLabel: '上下水道',
    client: '民間元請会社',
    location: '準備中',
    year: '2025',
    scope: '本管接続・引込工事',
    description: '準備中',
    image: '/images/works/water-02.jpg',
  },
  {
    id: 'water-003',
    title: '準備中',
    category: 'water',
    categoryLabel: '上下水道',
    client: '民間製造業',
    location: '準備中',
    year: '2024',
    scope: '雨水排水管・浸透桝',
    description: '準備中',
    image: '/images/works/water-03.jpg',
  },
  // 空調 ×3
  {
    id: 'air-001',
    title: '準備中',
    category: 'air',
    categoryLabel: '空調',
    client: '深谷市（公共）',
    location: '準備中',
    year: '2025',
    scope: 'EHP空調機・冷媒配管・電気工事',
    description: '準備中',
    image: '/images/works/air-01.jpg',
  },
  {
    id: 'air-002',
    title: '準備中',
    category: 'air',
    categoryLabel: '空調',
    client: '民間オフィスビル',
    location: '準備中',
    year: '2024',
    scope: 'ビル用マルチ更新・冷媒配管',
    description: '準備中',
    image: '/images/works/air-02.jpg',
  },
  {
    id: 'air-003',
    title: '準備中',
    category: 'air',
    categoryLabel: '空調',
    client: '社会福祉法人',
    location: '準備中',
    year: '2024',
    scope: 'GHP本体・配管・試運転',
    description: '準備中',
    image: '/images/works/air-03.jpg',
  },
  // 消防設備 ×3
  {
    id: 'fire-001',
    title: '準備中',
    category: 'fire',
    categoryLabel: '消防設備',
    client: '民間商業施設',
    location: '準備中',
    year: '2025',
    scope: '屋内消火栓・配管・ポンプ',
    description: '準備中',
    image: '/images/works/fire-01.jpg',
  },
  {
    id: 'fire-002',
    title: '準備中',
    category: 'fire',
    categoryLabel: '消防設備',
    client: '民間製造業',
    location: '準備中',
    year: '2024',
    scope: '自火報・受信機・感知器',
    description: '準備中',
    image: '/images/works/fire-02.jpg',
  },
  {
    id: 'fire-003',
    title: '準備中',
    category: 'fire',
    categoryLabel: '消防設備',
    client: '民間共同住宅',
    location: '準備中',
    year: '2024',
    scope: 'スプリンクラー設備一式',
    description: '準備中',
    image: '/images/works/fire-03.jpg',
  },
  // 衛生 ×3
  {
    id: 'sanitary-001',
    title: '準備中',
    category: 'sanitary',
    categoryLabel: '衛生',
    client: '本庄市（公共）',
    location: '準備中',
    year: '2025',
    scope: '便器・床・配管・乾式化',
    description: '準備中',
    image: '/images/works/sanitary-01.jpg',
  },
  {
    id: 'sanitary-002',
    title: '準備中',
    category: 'sanitary',
    categoryLabel: '衛生',
    client: '深谷市（公共）',
    location: '準備中',
    year: '2024',
    scope: '厨房機器・給排水・ガス',
    description: '準備中',
    image: '/images/works/sanitary-02.jpg',
  },
  {
    id: 'sanitary-003',
    title: '準備中',
    category: 'sanitary',
    categoryLabel: '衛生',
    client: '民間オフィス',
    location: '準備中',
    year: '2024',
    scope: '電気温水器・配管',
    description: '準備中',
    image: '/images/works/sanitary-03.jpg',
  },
];
