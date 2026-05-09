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
    title: '小学校 給排水設備改修工事',
    category: 'water',
    categoryLabel: '上下水道',
    client: '本庄市（公共）',
    location: '埼玉県本庄市',
    year: '2025',
    scope: '給水管更新・排水管更新',
    description: '築40年の小学校校舎において、老朽化した給排水管の全面更新工事を実施。授業に影響しない夏休み期間内に完工。',
    image: '/images/works/water-01.jpg',
  },
  {
    id: 'water-002',
    title: '住宅団地 本管接続工事',
    category: 'water',
    categoryLabel: '上下水道',
    client: '民間元請会社',
    location: '埼玉県深谷市',
    year: '2025',
    scope: '本管接続・引込工事',
    description: '新築戸建て住宅団地への上水道本管接続および各戸引込み工事を担当。',
    image: '/images/works/water-02.jpg',
  },
  {
    id: 'water-003',
    title: '工場 雨水排水設備工事',
    category: 'water',
    categoryLabel: '上下水道',
    client: '民間製造業',
    location: '埼玉県児玉郡',
    year: '2024',
    scope: '雨水排水管・浸透桝',
    description: '工場敷地拡張に伴う雨水排水ルートの新設および既設改修工事。',
    image: '/images/works/water-03.jpg',
  },
  // 空調 ×3
  {
    id: 'air-001',
    title: '中学校 空調設備新設工事',
    category: 'air',
    categoryLabel: '空調',
    client: '深谷市（公共）',
    location: '埼玉県深谷市',
    year: '2025',
    scope: 'EHP空調機・冷媒配管・電気工事',
    description: '普通教室および特別教室全室への業務用エアコン新設。猛暑対策として児童生徒の学習環境を改善。',
    image: '/images/works/air-01.jpg',
  },
  {
    id: 'air-002',
    title: '事務所ビル 空調更新工事',
    category: 'air',
    categoryLabel: '空調',
    client: '民間オフィスビル',
    location: '埼玉県熊谷市',
    year: '2024',
    scope: 'ビル用マルチ更新・冷媒配管',
    description: '老朽化した既設空調機の入替および冷媒配管の見直し。営業時間外作業でテナントへの影響ゼロ。',
    image: '/images/works/air-02.jpg',
  },
  {
    id: 'air-003',
    title: '高齢者施設 GHP空調工事',
    category: 'air',
    categoryLabel: '空調',
    client: '社会福祉法人',
    location: '埼玉県本庄市',
    year: '2024',
    scope: 'GHP本体・配管・試運転',
    description: 'ガスエンジンヒートポンプ（GHP）の新設工事。電気容量の制約があったためGHPを採用。',
    image: '/images/works/air-03.jpg',
  },
  // 消防設備 ×3
  {
    id: 'fire-001',
    title: '商業施設 屋内消火栓設備工事',
    category: 'fire',
    categoryLabel: '消防設備',
    client: '民間商業施設',
    location: '埼玉県本庄市',
    year: '2025',
    scope: '屋内消火栓・配管・ポンプ',
    description: '新設商業施設における屋内消火栓設備の設計・施工。消防法令に基づく完成検査を通過。',
    image: '/images/works/fire-01.jpg',
  },
  {
    id: 'fire-002',
    title: '工場 自動火災報知設備工事',
    category: 'fire',
    categoryLabel: '消防設備',
    client: '民間製造業',
    location: '埼玉県深谷市',
    year: '2024',
    scope: '自火報・受信機・感知器',
    description: '工場増床に伴う自動火災報知設備の増設工事。生産ラインを止めずに段階的に施工。',
    image: '/images/works/fire-02.jpg',
  },
  {
    id: 'fire-003',
    title: 'マンション スプリンクラー設備',
    category: 'fire',
    categoryLabel: '消防設備',
    client: '民間共同住宅',
    location: '埼玉県熊谷市',
    year: '2024',
    scope: 'スプリンクラー設備一式',
    description: '共用部および居室部スプリンクラー設備の設計・施工。',
    image: '/images/works/fire-03.jpg',
  },
  // 衛生 ×3
  {
    id: 'sanitary-001',
    title: '小学校 トイレ全面改修工事',
    category: 'sanitary',
    categoryLabel: '衛生',
    client: '本庄市（公共）',
    location: '埼玉県本庄市',
    year: '2025',
    scope: '便器・床・配管・乾式化',
    description: '児童用トイレの洋式化・乾式化工事。多目的トイレの新設も実施。',
    image: '/images/works/sanitary-01.jpg',
  },
  {
    id: 'sanitary-002',
    title: '公民館 厨房設備改修工事',
    category: 'sanitary',
    categoryLabel: '衛生',
    client: '深谷市（公共）',
    location: '埼玉県深谷市',
    year: '2024',
    scope: '厨房機器・給排水・ガス',
    description: '調理室の衛生器具・厨房機器の入替。給排水・ガス配管も同時更新。',
    image: '/images/works/sanitary-02.jpg',
  },
  {
    id: 'sanitary-003',
    title: '事務所ビル 給湯設備工事',
    category: 'sanitary',
    categoryLabel: '衛生',
    client: '民間オフィス',
    location: '埼玉県熊谷市',
    year: '2024',
    scope: '電気温水器・配管',
    description: 'テナント用電気温水器の新設および既設給湯設備の保守。',
    image: '/images/works/sanitary-03.jpg',
  },
];
