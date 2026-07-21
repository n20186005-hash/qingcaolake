import type { ImageKey } from './images';
import type { SourceKey } from './site';

export interface Attraction {
  slug: string;
  href: string;
  detailPage: boolean;
  name: string;
  nameEn?: string;
  feature: string;
  summary: string;
  stay: string;
  location: string;
  fromParking: string;
  photoTip: string;
  accessibility: string;
  nextStop: string;
  next: {
    name: string;
    href: string;
    walking: string;
  };
  image: ImageKey;
  gallery: ImageKey[];
  friendly: string;
  history: string;
  tips: string[];
  sourceKeys: SourceKey[];
}

export const ATTRACTIONS: Attraction[] = [
  {
    slug: 'yingyue-bridge',
    href: '/attractions/yingyue-bridge/',
    detailPage: true,
    name: '映月橋',
    nameEn: 'Yingyue Bridge',
    feature: '青草湖代表地標，橋拱與湖面倒影最上鏡',
    summary: '映月橋是第一次來青草湖最不該錯過的地標。它位在水域遊憩中心與於飛島之間，不必完整環湖也能輕鬆抵達。',
    stay: '10—20 分鐘',
    location: '湖區主要步行動線上，介於水域遊憩中心與於飛島之間。',
    fromParking: '從青草湖停車場往水域遊憩中心方向走，接上湖岸步道後續行，約 5—8 分鐘可到橋頭。',
    photoTip: '從於飛島方向回望，比較容易同時收入橋拱、湖面與倒影；清晨或傍晚光線較柔和。',
    accessibility: '橋面與主要接近路線大致平緩，嬰兒車與長者可優先安排這一段；雨後請留意橋面濕滑。',
    nextStop: '步行約 3 分鐘到於飛島',
    next: { name: '於飛島', href: '/attractions/yufei-island/', walking: '步行約 3 分鐘' },
    image: 'yingyueBridge',
    gallery: ['yingyueReflection', 'yingyueWide', 'classicView', 'yufeiView', 'panorama2022'],
    friendly: '橋面平緩，適合推車、長者與短程散步',
    history: '白色拱橋是青草湖現代景觀動線的核心地標，官方旅遊資料也將映月橋與湖岸、於飛島一帶作為青草湖的主要遊憩景觀。',
    tips: [
      '想拍完整橋身，不要只站在橋上，走到於飛島側的湖岸再回拍。',
      '風大時湖面倒影會較不明顯，拍攝時可改以橋面與山林為主。',
      '這一站和於飛島很近，適合合併成 30—40 分鐘的短線行程。',
    ],
    sourceKeys: ['hsinchu-tourism-lake', 'taiwan-tourism-eng'],
  },
  {
    slug: 'yufei-island',
    href: '/attractions/yufei-island/',
    detailPage: true,
    name: '於飛島',
    nameEn: 'Yufei Island',
    feature: '湖中小島與休憩節點，最適合和映月橋一起玩',
    summary: '於飛島位於映月橋之後，是環湖散步中適合放慢速度的中繼點。從這裡回望映月橋，也能看到與橋上不同的湖岸視角。',
    stay: '約 15 分鐘',
    location: '緊接映月橋的湖心島嶼與步行節點，位於一小時精華路線的折返點附近。',
    fromParking: '先依「停車場 → 水域遊憩中心 → 映月橋」動線行走，過橋後即進入於飛島一帶。',
    photoTip: '在島上往映月橋方向回拍，可用樹影或湖岸欄杆做前景；拍島名石碑時適合直式構圖。',
    accessibility: '從映月橋接近的主要路線平緩，但島上支線、樹根或局部鋪面狀況仍請以現場為準。',
    nextStop: '步行約 8 分鐘到鳳凰橋',
    next: { name: '鳳凰橋', href: '/attractions/fenghuang-bridge/', walking: '步行約 8 分鐘' },
    image: 'yufeiIsland',
    gallery: ['yufeiView', 'yingyueWide', 'overlook', 'yingyueReflection', 'classicView'],
    friendly: '可休息、看湖景，適合親子與短程遊客',
    history: '於飛島是青草湖整建後常見於導覽資料的地標，現在與映月橋、心心相映亭共同構成湖區最容易抵達的精華步行段。',
    tips: [
      '只有一小時時，可以在於飛島折返，不必勉強繼續完整環湖。',
      '島上休憩空間有限，假日人多時可將停留時間放在湖岸步道。',
      '要繼續往鳳凰橋，請留意路線會比映月橋一帶更有起伏。',
    ],
    sourceKeys: ['hsinchu-tourism-lake', 'taiwan-tourism-eng'],
  },
  {
    slug: 'fenghuang-bridge',
    href: '/attractions/fenghuang-bridge/',
    detailPage: true,
    name: '鳳凰橋',
    nameEn: 'Fenghuang Bridge',
    feature: '具電影記憶的湖區橋梁，也是前往紀念碑的辨識點',
    summary: '鳳凰橋位在青草湖環湖動線外側，比映月橋一帶更安靜。它與老電影《難忘的鳳凰橋》的在地記憶相連，也是前往青草湖風景紀念碑的辨識點。',
    stay: '10—15 分鐘',
    location: '位於湖區北側、於飛島後續的環湖動線上，附近接近道路與山坡。',
    fromParking: '建議沿映月橋、於飛島方向順遊，再循環湖動線前往；不熟路時以現場指標與地圖為準。',
    photoTip: '可在橋頭保留「鳳凰橋」字樣當前景，或從側邊拍橋身與山林；拍攝時不要站上車道。',
    accessibility: '附近動線會遇到坡度、路口與鄰近車道的區段，推嬰兒車或與長者同行時應放慢速度。',
    nextStop: '可由鳳凰橋後方山坡續行至青草湖風景紀念碑',
    next: { name: '青草湖風景紀念碑', href: '/attractions/memorial/', walking: '依現場指標上坡前往' },
    image: 'fenghuangBridge',
    gallery: ['fenghuangRoad', 'classicView', 'panorama2022', 'overlook', 'trees'],
    friendly: '有坡度且部分路段靠近車道，需多留意',
    history: '交通部觀光署資料將青草湖列為台語老片《難忘的鳳凰橋》的取景地。對遊客來說，這裡的價值不只是一座橋，也是連結青草湖與新竹影像記憶的地標。',
    tips: [
      '這一段不像映月橋一帶都是寬闊步行區，請隨時注意來車。',
      '想去風景紀念碑，可將鳳凰橋當作找路起點，再依現場指標上坡。',
      '若同行者腳力有限，在於飛島折返會比繼續到這裡輕鬆。',
    ],
    sourceKeys: ['taiwan-tourism-spotlight', 'hsinchu-tourism-lake'],
  },
  {
    slug: 'lingyin-temple',
    href: '/attractions/lingyin-temple/',
    detailPage: true,
    name: '靈隱寺',
    nameEn: 'Hsinchu Lingyin Temple',
    feature: '湖畔寺廟與山林景觀，適合與青草湖組成半日遊',
    summary: '靈隱寺位於青草湖周邊山坡，與湖岸景觀的氛圍很不一樣。它適合當作完成精華散步後的延伸站，而不是趕路時硬塞進行程的打卡點。',
    stay: '20—30 分鐘',
    location: '位於青草湖周邊山坡的宗教場域，與環湖主步道之間有高差。',
    fromParking: '從湖區步行前往約需 10—12 分鐘，途中會遇到坡度與階梯；以現場指標確認入口。',
    photoTip: '寺前庭院可收入大殿與對稱建築立面；山林間的石燈籠適合直式構圖，但拍攝前應留意寺方規範。',
    accessibility: '從湖區接近時有坡度與階梯，不如映月橋、於飛島一帶平緩；行動不便者請先評估路線。',
    nextStop: '下山後約 12 分鐘回到湖區與停車場',
    next: { name: '青草湖停車場', href: '/parking/', walking: '下山約 12 分鐘' },
    image: 'lingyinTemple',
    gallery: ['lingyinMainHall', 'lingyinLantern', 'trees', 'overlook', 'old'],
    friendly: '有階梯與坡度，建議預留體力',
    history: '新竹市文化資料記載，靈隱寺前身可追溯至 1924 年興建的感化堂。寺廟與青草湖長期共同構成當地山水與宗教景觀。',
    tips: [
      '宗教場域請降低音量，不干擾參拜與法會活動。',
      '大殿內是否可拍照請以現場標示與寺方指引為準。',
      '夏日上坡較耗體力，建議與完整環湖擇一，不必全部排在同一小時內。',
    ],
    sourceKeys: ['hsinchu-tourism-lake', 'taiwan-culture-memory-lake'],
  },
  {
    slug: 'minghu-park',
    href: '/attractions/minghu-park/',
    detailPage: true,
    name: '明湖公園',
    nameEn: 'Minghu Park',
    feature: '空間開闊的湖畔綠地，適合親子休息與放慢行程',
    summary: '明湖公園的重點不是單一打卡地標，而是為環湖行程提供較開闊的休息空間。帶孩子、想野餐，或完整環湖後需要放慢速度時，這一站比趕著拍照更有價值。',
    stay: '30—40 分鐘',
    location: '位於青草湖周邊開闊綠地與湖岸動線一帶，可和環湖散步、水上活動組合。',
    fromParking: '可依環湖路線從映月橋、於飛島、鳳凰橋方向順遊；若以親子休息為主，請依導航選擇最近入口。',
    photoTip: '適合用廣角橫幅收入綠地、湖岸與山林；要拍人物時，可選樹蔭邊緣避開正午頂光。',
    accessibility: '主要休憩區相對開闊，但實際入口、草地高差與雨後地面狀況需以現場為準。',
    nextStop: '可續行至水域遊憩中心或依環湖動線返回',
    next: { name: '青草湖水上活動', href: '/water-activities/', walking: '依現場動線步行前往' },
    image: 'lake2022iii',
    gallery: ['lake2022i', 'overlook', 'panorama2022', 'lake2022', 'trees'],
    friendly: '開闊平緩，適合親子、野餐與休息',
    history: '明湖公園是青草湖休憩系統的一部分。與映月橋這類單一地標不同，這裡更適合補足親子活動、等待與休息的需求。',
    tips: [
      '野餐後請帶走垃圾，不要在湖岸留下食物或塑膠製品。',
      '夏季正午日曬強，建議找樹蔭並自備飲水。',
      '若要搭船，先確認水上活動當日是否營運，再安排公園停留時間。',
    ],
    sourceKeys: ['hsinchu-tourism-lake', 'hsinchu-tourism-water'],
  },
  {
    slug: 'memorial',
    href: '/attractions/memorial/',
    detailPage: true,
    name: '青草湖風景紀念碑',
    nameEn: 'Green Grass Lake Memorial',
    feature: '記錄築壩與水利歷史的山坡碑體，也能從高處看湖',
    summary: '青草湖風景紀念碑不在最熱鬧的映月橋一帶，而是位於鳳凰橋後方的山坡。這一站適合對青草湖水庫、水利與地方歷史有興趣，且願意多走一段坡路的遊客。',
    stay: '10—15 分鐘',
    location: '文化資料記載其位於湖右堤岸小坡，遊客可以鳳凰橋後方山坡作為找路方向。',
    fromParking: '建議先完成「停車場 → 映月橋 → 於飛島 → 鳳凰橋」動線，再依現場指標往山坡上行；入口不明時不要進入非公開小徑。',
    photoTip: '除了拍碑文細節，也可從高處拍湖面與映月橋全景；拍攝碑面時用略側的光線較容易看清刻字。',
    accessibility: '位於山坡且需離開湖岸平緩主動線，不建議作為嬰兒車、行動不便者或時間緊迫遊客的必走站。',
    nextStop: '下坡回到環湖動線後，可續行至明湖公園',
    next: { name: '明湖公園', href: '/attractions/minghu-park/', walking: '下坡後依環湖動線前往' },
    image: 'overlook',
    gallery: ['old', 'panorama2022', 'classicView', 'fenghuangRoad', 'trees'],
    friendly: '位於山坡，需預留爬坡體力',
    history: '國家文化記憶庫資料記載，湖畔立有建壩紀念碑，碑面包含「澤週利溥」「其利厚哉」等題字。它保留的是青草湖作為水利與灌溉設施的歷史，而不只是後來的觀光景點記憶。',
    tips: [
      '這不是第一次來青草湖的必走站；先完成映月橋與於飛島，再依體力決定是否前往。',
      '山坡雨後可能濕滑，不建議穿平底滑鞋或抱著幼兒勉強上行。',
      '現有開放圖庫缺少紀念碑近照，本頁圖片為紀念碑所在的青草湖環境，不以其他石碑冒充。',
    ],
    sourceKeys: ['taiwan-culture-memory-lake', 'hsinchu-tourism-lake'],
  },
  {
    slug: 'water-recreation-center',
    href: '/water-activities/',
    detailPage: false,
    name: '水域遊憩中心',
    nameEn: 'Water Recreation Center',
    feature: '天鵝船、電動船與 SUP 的報名與上船處',
    summary: '青草湖船隻與 SUP 等水上活動的資訊節點。',
    stay: '視活動而定',
    location: '青草湖停車場與映月橋之間。',
    fromParking: '停好車後往湖岸與碼頭方向步行約 3 分鐘。',
    photoTip: '可拍碼頭、船隻與湖面，但不要阻擋報名與上下船動線。',
    accessibility: '活動參加條件與上下船安排以現場人員說明為準。',
    nextStop: '緊鄰浮水碼頭與映月橋',
    next: { name: '映月橋', href: '/attractions/yingyue-bridge/', walking: '步行約 3 分鐘' },
    image: 'lake2022',
    gallery: ['panorama2022', 'lake2022i'],
    friendly: '有獨立營業時間，固定星期二休息',
    history: '',
    tips: [],
    sourceKeys: ['hsinchu-tourism-water'],
  },
];

export const ATTRACTION_PAGES = ATTRACTIONS.filter((place) => place.detailPage);

const HOME_ATTRACTION_SLUGS = [
  'yingyue-bridge',
  'yufei-island',
  'fenghuang-bridge',
  'lingyin-temple',
  'minghu-park',
  'water-recreation-center',
];

export const HOME_ATTRACTIONS = HOME_ATTRACTION_SLUGS.map((slug) =>
  ATTRACTIONS.find((place) => place.slug === slug),
).filter((place): place is Attraction => Boolean(place));

export const ATTRACTION_BY_NAME = Object.fromEntries(
  ATTRACTIONS.map((place) => [place.name, place]),
);

export const ATTRACTION_BY_SLUG = Object.fromEntries(
  ATTRACTIONS.map((place) => [place.slug, place]),
);
