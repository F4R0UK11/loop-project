// Screenshot each slide HTML and composite a 4x3 validation grid.
const {chromium} = require('playwright');
const sharp = require('sharp');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({viewport: {width: 960, height: 540}});
  const tiles = [];
  for (let i = 1; i <= 12; i++) {
    const f = path.join(__dirname, 'slides', `s${String(i).padStart(2, '0')}.html`);
    await page.goto('file://' + f, {waitUntil: 'networkidle'});
    const buf = await page.screenshot();
    tiles.push(await sharp(buf).resize(480, 270).toBuffer());
  }
  await browser.close();
  const composite = tiles.map((buf, i) => ({
    input: buf,
    left: (i % 4) * 480,
    top: Math.floor(i / 4) * 270,
  }));
  await sharp({create: {width: 1920, height: 810, channels: 3, background: '#333'}})
    .composite(composite)
    .png()
    .toFile(path.join(__dirname, 'grid.png'));
  console.log('grid.png written');
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
