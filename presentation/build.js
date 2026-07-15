const pptxgen = require('pptxgenjs');
const html2pptx = require('./html2pptx.js');
const path = require('path');
const fs = require('fs');

// assets are referenced via a space-free symlink (pptxgenjs can't read paths with spaces)
try { fs.unlinkSync('/tmp/loop-pres-assets'); } catch {}
fs.symlinkSync(path.join(__dirname, 'assets'), '/tmp/loop-pres-assets');
const VIDEO = '/tmp/loop-pres-video.mp4';
try { fs.unlinkSync(VIDEO); } catch {}
fs.copyFileSync(
  path.join(__dirname, '..', 'video', 'out', 'loop-ambient.mp4'),
  VIDEO
);

(async () => {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'Team Loop — AUI';
  pptx.title = 'Loop — The AUI Knowledge Network That Never Forgets';

  // ---- Slide 1: the real ambient video, full bleed, with text on top ----
  // Built manually (not via html2pptx) so z-order is video first, then text.
  const s1 = pptx.addSlide();
  s1.background = {color: '12211A'};
  const coverB64 =
    'data:image/png;base64,' +
    fs.readFileSync(path.join(__dirname, 'assets', 'title_bg.png')).toString('base64');
  s1.addMedia({
    type: 'video',
    path: VIDEO,
    cover: coverB64,
    x: 0, y: 0, w: 10, h: 5.625,
  });
  s1.addText('INSTITUTIONAL KNOWLEDGE DOESN\'T SCALE  ·  AUI UI/UX BOOTCAMP', {
    x: 0.55, y: 0.6, w: 5.2, h: 0.25,
    fontFace: 'Arial', fontSize: 10, bold: true, charSpacing: 2, color: 'A9B3A6',
  });
  s1.addText('Loop', {
    x: 0.5, y: 0.95, w: 5.2, h: 1.5,
    fontFace: 'Georgia', fontSize: 88, bold: true, color: 'EDE7DA',
  });
  s1.addText('The AUI knowledge network\nthat never forgets.', {
    x: 0.55, y: 2.45, w: 5.2, h: 0.9,
    fontFace: 'Georgia', fontSize: 19, color: 'EDE7DA', lineSpacingMultiple: 1.3,
  });
  s1.addText('FAROUK  ·  MANAL  ·  HAYTAM  ·  ANASS', {
    x: 0.55, y: 3.65, w: 5.2, h: 0.25,
    fontFace: 'Arial', fontSize: 10, charSpacing: 1, color: 'A9B3A6',
  });
  s1.addText('Final presentation · July 2026', {
    x: 0.55, y: 3.95, w: 5.2, h: 0.25,
    fontFace: 'Arial', fontSize: 9, color: 'A9B3A6',
  });

  // ---- Slides 2–12 from HTML ----
  for (let i = 2; i <= 12; i++) {
    const f = path.join(__dirname, 'slides', `s${String(i).padStart(2, '0')}.html`);
    await html2pptx(f, pptx);
    console.log(`slide ${i} ok`);
  }
  const outFile = path.join(__dirname, 'Loop_Final_Presentation.pptx');
  await pptx.writeFile({fileName: outFile});
  console.log('written');

  // pptxgenjs can't express autoplay/loop — patch the timing tree in
  require('child_process').execFileSync(
    'python3',
    [path.join(__dirname, 'patch_video.py'), outFile, '40.042'],
    {stdio: 'inherit'}
  );
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
