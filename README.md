# 青草湖旅遊指南 · QingcaoLake.com

新竹青草湖的獨立遊客指南（**非官方**）。整理交通、停車、環湖步道、映月橋、於飛島、天鵝船、SUP 與半日遊路線。

- 語言：台灣繁體中文 `zh-Hant-TW`
- 技術：Astro + 原生 CSS + 原創 SVG 導覽地圖；天氣 API 使用 Cloudflare Pages Functions
- 部署目標：Cloudflare Pages

## 開發

```bash
pnpm install
pnpm dev       # 本機開發 http://localhost:4321
pnpm build     # 產生 dist/（含 sitemap、AVIF/WebP 圖片）
pnpm preview   # 預覽 build 結果
pnpm dev:cloudflare # 建置後以 Pages 本機環境預覽（含 /api/weather）
```

## 內容維護

- 站台常數與導覽、官方來源、非官方聲明：`src/data/site.ts`
- 易變資訊（停車費、水上活動價格、營業時間）：`src/data/facts.ts`（改動後核對官方來源與變動提醒）
- 景點卡、路線、常見問題：`src/data/places.ts`、`routes.ts`、`faq.ts`
- 圖片與授權標示：`src/data/images.ts`（照片放 `src/assets/images/`，會自動產生 AVIF/WebP）
- 即時天氣：`src/components/WeatherCard.astro`、`functions/api/weather.js`

## SEO

- 每頁 `title` / `description` / `canonical` / `hreflang` / Open Graph（`src/components/BaseHead.astro`）
- 結構化資料：`WebSite`、`Organization`、`TouristAttraction`、`FAQPage`、`BreadcrumbList`
- `sitemap-index.xml` 自動產生；`public/robots.txt` 已指向 sitemap

## 部署（Cloudflare Pages）

- Framework preset：Astro
- Build command：`pnpm build`
- Build output：`dist`

## 圖片授權

站上照片皆為 Wikimedia Commons 之姓名標示（CC BY / CC BY-SA）授權作品，原作者與授權標示於各頁與 `/sources/`。

## 非官方聲明

本站為獨立旅遊資訊網站，並非新竹市政府或青草湖水域遊憩中心官方網站。營業時間、活動價格及臨時管制，以相關單位最新公告為準。
