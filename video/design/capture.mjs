// Capture full-page screenshots of the Claude Design prototype pages
// for use as Remotion assets. Usage: node design/capture.mjs [page ...]
import puppeteer from 'puppeteer-core';
import {fileURLToPath} from 'url';
import path from 'path';
import fs from 'fs';

const here = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(here, '..', 'public', 'web');
fs.mkdirSync(outDir, {recursive: true});

const pages = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ['home', 'verified', 'askai', 'space_thread', 'explore'];

const browser = await puppeteer.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  timeout: 120000,
  args: [
    '--no-first-run',
    '--hide-scrollbars',
    '--force-color-profile=srgb',
    '--user-data-dir=/tmp/loop-capture-profile',
  ],
});

for (const name of pages) {
  const file = path.join(here, `${name}.dc.html`);
  if (!fs.existsSync(file)) { console.log(`SKIP ${name} (no file)`); continue; }
  const page = await browser.newPage();
  await page.setViewport({width: 1440, height: 900, deviceScaleFactor: 2});
  await page.goto('file://' + file, {waitUntil: 'networkidle0', timeout: 60000});
  // let the DC runtime render + fonts settle
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 900));
  const h = await page.evaluate(() => document.body.scrollHeight);
  // size the viewport to the whole page so sticky elements (the rail) paint full-height
  await page.setViewport({width: 1440, height: h, deviceScaleFactor: 2});
  await new Promise((r) => setTimeout(r, 400));
  const out = path.join(outDir, `${name}.png`);
  await page.screenshot({path: out});
  console.log(`${name}.png 1440x${h} (2x)`);
  await page.close();
}
await browser.close();
