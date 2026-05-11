export type Award = {
  yearJp: string;
  inspectionJp?: string;
  workTitle: string;
  highlight?: boolean;
  image?: string;
  imageReady?: boolean;
};

// 表彰名（正式名称が確定したら差し替え）
export const awardName = '本庄市優良工事施工業者表彰';

// 新しい順
export const awards: Award[] = [
  {
    yearJp: '令和7年度',
    inspectionJp: '検査年度：令和6',
    workTitle: 'カミケンシルクドーム空調設備改修工事（第2期）',
    highlight: true,
    image: '/images/awards/award-01.jpg',
    imageReady: true,
  },
  {
    yearJp: '令和6年度',
    inspectionJp: '検査年度：令和5',
    workTitle: '小島第二市営住宅3,4号棟給排水管改善工事',
    highlight: true,
    image: '/images/awards/award-02.jpg',
    imageReady: true,
  },
  {
    yearJp: '令和5年度',
    inspectionJp: '検査年度：令和4',
    workTitle: '上水道導配水管布設替21-12号工事（本庄道路関連・沼和田外工区）',
    highlight: true,
    image: '/images/awards/award-03.jpg',
    imageReady: true,
  },
  {
    yearJp: '令和5年度',
    inspectionJp: '検査年度：令和4',
    workTitle: '田中市営住宅第6期トイレ水洗化外改修工事',
  },
  {
    yearJp: '令和4年度',
    inspectionJp: '検査年度：令和3',
    workTitle: '田中市営住宅第5期トイレ水洗化外改修工事',
  },
  {
    yearJp: '令和3年度',
    inspectionJp: '検査年度：令和2',
    workTitle: '田中市営住宅第4期トイレ水洗化外改修工事',
  },
  {
    yearJp: '令和2年度',
    inspectionJp: '検査年度：令和元',
    workTitle: '田中市営住宅第3期トイレ水洗化外改修工事',
  },
  {
    yearJp: '令和元年度',
    inspectionJp: '検査年度：平成30',
    workTitle: '田中市営住宅第2期トイレ水洗化外改修工事',
  },
  {
    yearJp: '平成27年度',
    workTitle: '本庄市立本庄南中学校空調設備設置工事',
  },
  {
    yearJp: '平成24年度',
    workTitle: '上水道配水管布設23-31号工事（小島中通り線関連）',
  },
];
