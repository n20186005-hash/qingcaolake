// 集中管理圖片與授權資訊（全部為 Wikimedia Commons 之姓名標示授權作品）
import type { ImageMetadata } from 'astro';

import hero from '../assets/images/qingcao-lake-hero.jpg';
import panorama from '../assets/images/qingcao-lake-panorama.jpg';
import view from '../assets/images/qingcao-lake-view.jpg';
import yingyueBridge from '../assets/images/qingcao-lake-yingyue-bridge.jpg';
import yingyueReflection from '../assets/images/qingcao-lake-yingyue-reflection.jpg';
import yufeiIsland from '../assets/images/qingcao-lake-yufei-island.jpg';
import fenghuangBridge from '../assets/images/qingcao-lake-fenghuang-bridge.png';
import lingyinTemple from '../assets/images/qingcao-lake-lingyin-temple.jpg';
import lake2022 from '../assets/images/qingcao-lake-2022.jpg';
import lake2022i from '../assets/images/qingcao-lake-2022-i.jpg';
import lake2022iii from '../assets/images/qingcao-lake-2022-iii.jpg';
import trees from '../assets/images/qingcao-lake-trees.jpg';
import old from '../assets/images/qingcao-lake-old.jpg';
import panorama2022 from '../assets/images/qingcao-lake-panorama-2022.jpg';
import fenghuangRoad from '../assets/images/qingcao-lake-fenghuang-road.jpg';
import overlook from '../assets/images/qingcao-lake-overlook.jpg';
import yingyueWide from '../assets/images/qingcao-lake-yingyue-wide.jpg';
import yufeiView from '../assets/images/qingcao-lake-yufei-view.jpg';
import classicView from '../assets/images/qingcao-lake-classic-view.jpg';
import lingyinLantern from '../assets/images/qingcao-lake-lingyin-lantern.jpg';
import lingyinMainHall from '../assets/images/qingcao-lake-lingyin-main-hall.jpg';

export interface Photo {
  src: ImageMetadata;
  alt: string;
  credit: string; // 攝影者
  license: string; // 授權
  source: string; // 原始檔案頁面
  display?: 'panorama'; // 保留超寬原始比例，避免裁切後放大失真
}

export const IMAGES = {
  hero: {
    src: hero,
    alt: '新竹青草湖湖面與環湖山景',
    credit: 'lienyuan lee',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖_Qingcao_Lake_-_panoramio.jpg',
  },
  panorama: {
    src: panorama,
    alt: '青草湖湖面全景與周邊綠意',
    credit: 'lienyuan lee',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖_Qingcao_Lake_-_panoramio_(1).jpg',
  },
  view: {
    src: view,
    alt: '青草湖湖岸與倒影',
    credit: 'lienyuan lee',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖_Qingcao_Lake_-_panoramio_(2).jpg',
  },
  yingyueBridge: {
    src: yingyueBridge,
    alt: '新竹青草湖映月橋橫跨湖面',
    credit: '創造未來，迎接康莊',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:映月橋.jpg',
  },
  yingyueReflection: {
    src: yingyueReflection,
    alt: '青草湖映月橋與湖面倒影',
    credit: '蘇晏亭',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:靖水相依.jpg',
  },
  yufeiIsland: {
    src: yufeiIsland,
    alt: '青草湖於飛島與環湖步道',
    credit: '創造未來，迎接康莊',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Yu-Fei_island_in_Green_Grass_Lake（Taiwan）.jpg',
  },
  fenghuangBridge: {
    src: fenghuangBridge,
    alt: '青草湖鳳凰橋',
    credit: '弧微分',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Phoenix_Bridge（凤凰桥）in_Green_Grass_Lake（Taiwan）.png',
  },
  lingyinTemple: {
    src: lingyinTemple,
    alt: '青草湖畔靈隱寺',
    credit: 'lienyuan lee',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖靈隱寺_Lingyin_Monastery_at_Qingcao_Lake_-_panoramio.jpg',
  },
  lake2022: {
    src: lake2022,
    alt: '2022 年新竹市東區青草湖景色',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Green_Grass_Lake_in_East_District,_Hsinchu_City.jpg',
  },
  lake2022i: {
    src: lake2022i,
    alt: '青草湖環湖步道與湖景',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Green_Grass_Lake_in_East_District,_Hsinchu_City_i.jpg',
  },
  lake2022iii: {
    src: lake2022iii,
    alt: '青草湖湖畔綠地與休憩空間',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Green_Grass_Lake_in_East_District,_Hsinchu_City_iii.jpg',
  },
  trees: {
    src: trees,
    alt: '透過樹影看見的青草湖湖面',
    credit: 'ixmatex wu',
    license: 'CC BY 2.0',
    source: 'https://commons.wikimedia.org/wiki/File:View_through_trees_to_Green_Grass_Lake.jpg',
  },
  old: {
    src: old,
    alt: '青草湖湖面與遠山',
    credit: '陳文振',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖_-_panoramio.jpg',
  },
  panorama2022: {
    src: panorama2022,
    alt: '青草湖湖面、映月橋與水域遊憩中心全景',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Green_Grass_Lake_in_East_District,_Hsinchu_City_ii.jpg',
    display: 'panorama',
  },
  fenghuangRoad: {
    src: fenghuangRoad,
    alt: '青草湖鳳凰橋路口與步行空間',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Green_Grass_Lake_in_East_District,_Hsinchu_City_ix.jpg',
  },
  overlook: {
    src: overlook,
    alt: '從高處眺望青草湖、映月橋與環湖步道',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Green_Grass_Lake_in_East_District,_Hsinchu_City_x.jpg',
    display: 'panorama',
  },
  yingyueWide: {
    src: yingyueWide,
    alt: '樹林間眺望青草湖映月橋',
    credit: '陳文振',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖映月橋于飛島_-_panoramio_(1).jpg',
  },
  yufeiView: {
    src: yufeiView,
    alt: '於飛島周邊望向青草湖與映月橋的湖景',
    credit: '陳文振',
    license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:青草湖映月橋于飛島_-_panoramio.jpg',
  },
  classicView: {
    src: classicView,
    alt: '樹影下的青草湖與映月橋',
    credit: 'Milkmom0529',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Greengrass01.JPG',
  },
  lingyinLantern: {
    src: lingyinLantern,
    alt: '新竹靈隱寺林蔭間的石燈籠',
    credit: 'Taiwankengo',
    license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:2022_Hsinchu_Lingyin_Temple.jpg',
  },
  lingyinMainHall: {
    src: lingyinMainHall,
    alt: '新竹靈隱寺大殿與庭院',
    credit: 'lienyuan lee',
    license: 'CC BY 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:新竹靈隱寺大殿_Main_Hall_of_Xinzhu_Liugyin_Temple_-_panoramio.jpg',
  },
} satisfies Record<string, Photo>;

export type ImageKey = keyof typeof IMAGES;
