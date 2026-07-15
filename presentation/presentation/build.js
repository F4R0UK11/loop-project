const pptxgen = require('pptxgenjs');
const html2pptx = require('./html2pptx.js');
const path = require('path');
const fs = require('fs');

// assets are referenced via a space-free symlink (pptxgenjs can't read paths with spaces)
try { fs.unlinkSync('/tmp/loop-pres-assets'); } catch {}
fs.symlinkSync(path.join(__dirname, 'assets'), '/tmp/loop-pres-assets');

(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Team Loop — AUI';
  pptx.title = 'Loop — The AUI Knowledge Network That Never Forgets';

  for (let i = 1; i <= 12; i++) {
    const f = path.join(__dirname, 'slides', `s${String(i).padStart(2, '0')}.html`);
    await html2pptx(f, pptx);
    console.log(`slide ${i} ok`);
  }
  await pptx.writeFile({fileName: path.join(__dirname, 'Loop_Final_Presentation.pptx')});
  console.log('written');
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
