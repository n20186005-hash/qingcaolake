import type { ImageKey } from './images';

export interface Route {
  name: string;
  duration: string;
  walk: string;
  audience: string;
  steps: string[];
  image: ImageKey;
  href: string;
}

// 三條主路線
export const ROUTES: Route[] = [
  {
    name: '一小時精華路線',
    duration: '約 1 小時',
    walk: '約 1.5 公里',
    audience: '第一次來、長者、情侶、時間有限',
    steps: ['停車場', '水域遊憩中心', '映月橋', '於飛島', '湖岸拍照', '返回'],
    image: 'yingyueReflection',
    href: '/routes/half-day/#one-hour',
  },
  {
    name: '兩小時環湖路線',
    duration: '約 2 小時',
    walk: '約 3 公里',
    audience: '想完整環湖、腳力正常的遊客',
    steps: ['停車場', '映月橋', '於飛島', '湖岸步道', '鳳凰橋', '明湖公園', '返回'],
    image: 'panorama',
    href: '/routes/half-day/#two-hours',
  },
  {
    name: '半日親子路線',
    duration: '約 3—4 小時',
    walk: '彈性，含休息與用餐',
    audience: '帶孩子、想坐船、想慢慢玩',
    steps: ['明湖公園', '環湖散步', '天鵝船或電動船', '於飛島', '附近用餐'],
    image: 'lake2022i',
    href: '/routes/half-day/#family',
  },
];

// 「你今天想怎麼玩」四個入口
export interface Intent {
  need: string;
  recommend: string;
  href: string;
}

export const INTENTS: Intent[] = [
  { need: '只想拍照散步', recommend: '一小時映月橋路線', href: '/routes/half-day/#one-hour' },
  { need: '帶孩子來玩', recommend: '明湖公園 ＋ 天鵝船', href: '/routes/half-day/#family' },
  { need: '想完整環湖', recommend: '兩小時環湖路線', href: '/routes/half-day/#two-hours' },
  { need: '安排半日遊', recommend: '青草湖 ＋ 靈隱寺 ＋ 附近用餐', href: '/routes/half-day/#half-day' },
];
