// 全站設定與常數
export const SITE = {
  name: '青草湖旅遊指南',
  nameEn: 'Qingcao Lake Visitor Guide',
  tagline: 'Walk, Paddle and Explore Hsinchu',
  description:
    '新竹青草湖交通、停車、環湖步道、水上活動與半日遊指南',
  url: 'https://qingcaolake.com',
  locale: 'zh-Hant-TW',
  email: 'hello@qingcaolake.com',
  editorEmail: 'editor@qingcaolake.com',
  correctionsEmail: 'corrections@qingcaolake.com',
  // 英文實體別名（供 SEO 與 schema 使用）
  altNames: ['Qingcao Lake', 'Qing Cao Lake', 'Green Grass Lake'],
} as const;

// Google Maps 的青草湖正確地標與嵌入地圖
export const GOOGLE_MAPS = {
  placeUrl:
    'https://www.google.com/maps/place/Green+Grass+Lake/@24.7745973,120.9688531,17z/data=!4m7!3m6!1s0x34684a0d1ef0554f:0x284205e508b14c5e!8m2!3d24.7749348!4d120.9709015!15sCgnpnZLojYnmuZaSARJ0b3VyaXN0X2F0dHJhY3Rpb27gAQA!16s%2Fg%2F155q5pj2?entry=tts&g_ep=EgoyMDI2MDcxNS4wIPu8ASoASAFQAw%3D%3D&skid=0f396a0f-e210-4093-a6ee-e7fc76a9c53c',
  embedUrl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3622.608839541598!2d120.9688531!3d24.7745973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34684a0d1ef0554f%3A0x284205e508b14c5e!2sGreen%20Grass%20Lake!5e0!3m2!1szh-CN!2stw!4v1784631122446!5m2!1szh-CN!2stw',
} as const;

// 主導航
export const NAV: { label: string; href: string }[] = [
  { label: '首頁', href: '/' },
  { label: '第一次來', href: '/guide/' },
  { label: '交通停車', href: '/transport/' },
  { label: '環湖地圖', href: '/map/' },
  { label: '水上活動', href: '/water-activities/' },
  { label: '遊玩路線', href: '/routes/half-day/' },
  { label: '常見問題', href: '/#faq' },
];

// 頁尾非官方聲明（依需求：只在底部聲明非官方）
export const DISCLAIMER =
  'QingcaoLake.com 是獨立旅遊資訊網站。';

// 官方資料來源
export const SOURCES = {
  'hsinchu-tourism-lake': {
    label: '新竹市觀光旅遊網－青草湖',
    url: 'https://tourism.hccg.gov.tw/chtravel/app/travel/view?id=25&module=travel&serno=da9f954f-6429-424a-be78-943d7df5662a',
  },
  'hsinchu-tourism-water': {
    label: '新竹市觀光旅遊網－青草湖水域遊憩活動',
    url: 'https://tourism.hccg.gov.tw/chtravel/app/travel/view?id=37&module=travel&serno=028c815c-3ef1-4669-98f7-39dce3a28daf',
  },
  'hsinchu-city-parking': {
    label: '新竹市政府交通處－公共停車場營運資訊',
    url: 'https://dep-traffic.hccg.gov.tw/ch/home.jsp?dataserno=201607270048&id=73&mclassno=201607270001&mcustomize=formdata_view.jsp',
  },
  'hsinchu-city-marketing': {
    label: '新竹市政府城市行銷處－最新消息',
    url: 'https://dep-tourism.hccg.gov.tw/ch/home.jsp?id=16&parentpath=&mcustomize=municipalnews_view.jsp&dataserno=202506250002',
  },
  'taiwan-tourism-eng': {
    label: 'Taiwan Tourism Administration－Green Grass Lake',
    url: 'https://eng.taiwan.net.tw/m1.aspx?id=5958&sNo=0002109',
  },
  'taiwan-culture-memory-lake': {
    label: '國家文化記憶庫－青草湖',
    url: 'https://tcmb.culture.tw/zh-tw/detail?id=167153&indexCode=Culture_Object',
  },
  'taiwan-tourism-spotlight': {
    label: '交通部觀光署觀光亮點獎－青草湖',
    url: 'https://spotlightaward.taiwan.net.tw/tourpage.php?id=679521fd-3f82-406c-98dd-dce9b67373a5&tag=1',
  },
} as const;

export type SourceKey = keyof typeof SOURCES;
