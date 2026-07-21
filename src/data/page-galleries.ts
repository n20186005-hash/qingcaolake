import type { ImageKey } from './images';

export interface PageGalleryConfig {
  title?: string;
  intro?: string;
  images: ImageKey[];
}

/**
 * 一般內容頁的實景照片。
 * 景點詳情頁另由 places.ts 提供更精確的主圖與圖集。
 */
export const PAGE_GALLERIES: Partial<Record<string, PageGalleryConfig>> = {
  '/guide/': {
    images: ['yingyueReflection', 'yufeiView', 'classicView'],
  },
  '/map/': {
    images: ['panorama2022', 'overlook', 'fenghuangRoad'],
    intro: '先用實景認識湖區地標，再對照下方導覽圖與 Google Maps 規劃動線。',
  },
  '/opening-hours/': {
    images: ['view', 'lake2022', 'panorama2022'],
  },
  '/parking/': {
    images: ['fenghuangRoad', 'panorama2022', 'lake2022'],
    intro: '以下為青草湖入口道路、湖區與水域遊憩中心周邊實景；停車格與入口仍以現場標示為準。',
  },
  '/transport/': {
    images: ['fenghuangRoad', 'trees', 'panorama'],
  },
  '/trail/': {
    images: ['trees', 'overlook', 'classicView'],
  },
  '/routes/half-day/': {
    images: ['yufeiView', 'lingyinTemple', 'lake2022iii'],
    intro: '三張照片分別呈現精華湖岸、靈隱寺延伸站與親子休憩空間，可配合下方路線選擇。',
  },
  '/water-activities/': {
    images: ['lake2022', 'panorama2022', 'view'],
    intro: '以下為青草湖湖面與水域遊憩中心周邊實景；船型、碼頭配置和當日開放狀態以現場為準。',
  },
  '/water-activities/swan-boat/': {
    images: ['lake2022', 'panorama2022', 'yingyueBridge'],
    intro: '目前開放圖庫沒有可確認授權的青草湖天鵝船近照，以下呈現實際活動湖面與鄰近地標，不以其他地點船隻替代。',
  },
  '/water-activities/sup/': {
    images: ['view', 'panorama2022', 'lake2022i'],
    intro: '以下為 SUP 實際使用的青草湖水域與周邊環境；課程器材、下水點與開放範圍以現場安排為準。',
  },
  '/about/': {
    images: ['hero', 'panorama', 'classicView'],
  },
  '/sources/': {
    title: '本站使用的授權實景照片',
    images: ['yingyueBridge', 'panorama2022', 'lingyinMainHall'],
    intro: '每張照片都保留原始檔案頁、攝影者與授權資訊；完整清單見本頁圖片授權章節。',
  },
};
