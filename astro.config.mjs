// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://qingcaolake.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'zh-Hant-TW',
        locales: { 'zh-Hant-TW': 'zh-Hant-TW' },
      },
    }),
  ],
  image: {
    // 生成 AVIF / WebP，於各頁面以 <Picture> 輸出
    responsiveStyles: true,
  },
});
