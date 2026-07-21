import type { SourceKey } from './site';

// 出發前快速資訊（首頁八格）
export interface Fact {
  label: string;
  value: string;
  note?: string;
}

export const QUICK_FACTS: Fact[] = [
  { label: '湖區', value: '全日開放', note: '公共開放空間' },
  { label: '門票', value: '公共湖區免費' },
  { label: '建議停留', value: '1—3 小時' },
  { label: '步道', value: '適合輕鬆散步' },
  { label: '停車', value: '66 個汽車位', note: '明湖路 1075 巷 101 號' },
  { label: '停車費', value: '每小時 30 元', note: '24 小時營運' },
  { label: '水上活動', value: '另有營業時間', note: '固定週二休息' },
  { label: '適合', value: '親子、情侶、長者' },
];

// 停車資料
export const PARKING = {
  name: '青草湖停車場',
  address: '新竹市東區明湖路 1075 巷 101 號',
  spaces: '66 個汽車位',
  hours: '24 小時營運',
  fee: '每小時 30 元（平日及假日相同）',
  source: 'hsinchu-city-parking' as SourceKey,
};

// 湖區地址
export const LAKE = {
  address: '新竹市東區明湖路 1075 巷 82 號',
  openHours: '公共湖區全日開放',
  source: 'hsinchu-tourism-lake' as SourceKey,
};

// 水上活動營業時間
export const WATER_HOURS = {
  summer: '4 月—10 月：10:00—12:00、13:00—18:00',
  winter: '11 月—隔年 3 月：10:00—12:00、13:00—17:00',
  closed: '固定星期二休息',
  source: 'hsinchu-tourism-water' as SourceKey,
};

// 水上活動價格（易變資訊，須顯示核驗狀態與變動提醒）
export interface WaterPrice {
  name: string;
  full: string;
  discount?: string;
  note?: string;
}

export const WATER_PRICES: WaterPrice[] = [
  { name: '造型踩踏船', full: '全票 250 元', discount: '優待票 200 元', note: '親子互動、可多人同乘' },
  { name: '電動船', full: '全票 250 元', discount: '優待票 200 元', note: '輕鬆遊湖、省力' },
  { name: 'SUP 立式划槳體驗', full: '每人 1,100 元', note: '運動體驗、需具基本水性' },
];

// 資訊狀態標籤
export const STATUS_LABELS = {
  verified: '已核驗',
  variable: '可能變動',
  booking: '需提前預約',
  weather: '受天候影響',
  public: '公共開放空間',
} as const;
