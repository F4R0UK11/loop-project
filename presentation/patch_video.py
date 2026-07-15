#!/usr/bin/env python3
"""Post-build: make the title-slide video autoplay and loop.

pptxgenjs embeds the video but writes no <p:timing>, so PowerPoint would wait
for a click. This injects the timing tree PowerPoint itself writes for
"Start: Automatically" + "Loop until Stopped".
"""
import re
import shutil
import subprocess
import sys
import tempfile
import zipfile
from pathlib import Path

PPTX = Path(sys.argv[1] if len(sys.argv) > 1 else "Loop_Final_Presentation.pptx").resolve()
DUR_MS = int(float(sys.argv[2]) * 1000) if len(sys.argv) > 2 else 40042

TIMING = """<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot"><p:childTnLst><p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq"><p:childTnLst><p:par><p:cTn id="3" fill="hold"><p:stCondLst><p:cond delay="indefinite"/><p:cond evt="onBegin" delay="0"><p:tn val="2"/></p:cond></p:stCondLst><p:childTnLst><p:par><p:cTn id="4" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst><p:par><p:cTn id="5" presetID="2" presetClass="mediacall" presetSubtype="0" fill="hold" nodeType="withEffect"><p:stCondLst><p:cond delay="0"/></p:stCondLst><p:childTnLst><p:cmd type="call" cmd="playFrom(0.0)"><p:cBhvr><p:cTn id="6" dur="{dur}" fill="hold"/><p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl></p:cBhvr></p:cmd></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn></p:par></p:childTnLst></p:cTn><p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst><p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst></p:seq><p:video><p:cMediaNode loop="1"><p:cTn id="7" fill="hold" display="0"><p:stCondLst><p:cond delay="indefinite"/></p:stCondLst><p:endCondLst><p:cond evt="onStopAudio" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:endCondLst></p:cTn><p:tgtEl><p:spTgt spid="{spid}"/></p:tgtEl></p:cMediaNode></p:video></p:childTnLst></p:cTn></p:par></p:tnLst></p:timing>"""

tmp = Path(tempfile.mkdtemp())
with zipfile.ZipFile(PPTX) as z:
    names = z.namelist()
    z.extractall(tmp)

slide = tmp / "ppt/slides/slide1.xml"
xml = slide.read_text()

if "<p:timing>" in xml:
    print("timing already present — nothing to do")
    sys.exit(0)

m = re.search(r'<p:pic>.*?<p:cNvPr id="(\d+)"[^>]*name="Media', xml, re.S)
if not m:
    sys.exit("ERROR: no video <p:pic> found on slide 1")
spid = m.group(1)

timing = TIMING.format(dur=DUR_MS, spid=spid)
xml2 = xml.replace("</p:sld>", timing + "</p:sld>")
assert xml2 != xml, "injection failed"
slide.write_text(xml2)

# rezip preserving order; mimetype-free format so plain deflate is fine
out = PPTX.with_suffix(".patched.pptx")
with zipfile.ZipFile(out, "w", zipfile.ZIP_DEFLATED) as z:
    for n in names:
        z.write(tmp / n, n)
shutil.move(str(out), str(PPTX))
shutil.rmtree(tmp)
print(f"autoplay+loop injected (spid={spid}, dur={DUR_MS}ms)")
