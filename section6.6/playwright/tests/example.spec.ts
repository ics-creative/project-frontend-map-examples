import { test, expect } from '@playwright/test';

test('検索機能が各ブラウザで正しく動作するか', async ({ page }) => {
  await page.goto('https://ics.media/');
  await page.getByRole('link', { name: 'サイト内を検索する' }).click();
  await page.getByRole('button', { name: 'CSS' }).click();
  await page.getByRole('button', { name: '×' }).click();
  await page.getByRole('radio', { name: '人気' }).click();
  await page.getByRole('link', { name: '文字詰めできるCSSのfont-feature-settingsが凄い！ 日本語フォントこそ指定したい自動カーニング 文字詰めできるCSSのfont-feature-settingsが凄い' }).click();

  await page.waitForLoadState('networkidle');


  expect(page.url()).toBe('https://ics.media/entry/14087/');

  await page.screenshot({ path: `./screenshots/${page.context().browser().browserType().name()}_${page.viewportSize().width}.png` })
});
