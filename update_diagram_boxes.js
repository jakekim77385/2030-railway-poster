const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

const newBoxes = `                
                <div style="display: flex; gap: 15px;">
                  <!-- Box 1 -->
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff; display: flex; flex-direction: column;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.05rem;">1. 차량제작사</div>
                    <div style="padding: 12px; flex-grow: 1;">
                      <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.9rem; color: #000; line-height: 1.6; word-break: keep-all;">
                        <li>정적 차량한계 제공</li>
                        <li>동적 차량한계 제공</li>
                        <li>차량 외형 및 주행조건 제공</li>
                      </ul>
                    </div>
                    <div style="background: #E8F0FA; text-align: center; padding: 6px; font-weight: 700; color: #0B1E36; border-top: 1px solid #0B1E36; font-size: 0.95rem;">차량 입력</div>
                  </div>
                  <!-- Box 3 -->
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff; display: flex; flex-direction: column;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.05rem;">3. 시스템사</div>
                    <div style="padding: 12px; flex-grow: 1;">
                      <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.9rem; color: #000; line-height: 1.6; word-break: keep-all;">
                        <li>선로변 설비 위치 제공</li>
                        <li>안전여유공간 정보 제공</li>
                        <li>건축한계 비침범 조건</li>
                      </ul>
                    </div>
                    <div style="background: #E8F0FA; text-align: center; padding: 6px; font-weight: 700; color: #0B1E36; border-top: 1px solid #0B1E36; font-size: 0.95rem;">시스템 요구</div>
                  </div>
                </div>
                
                <div style="display: flex; justify-content: space-around; font-size: 1.5rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">
                  <div>↓</div><div>↓</div>
                </div>
                
                <div style="display: flex; gap: 15px;">
                  <!-- Box 2 -->
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff; display: flex; flex-direction: column;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.05rem;">2. 토목/궤도 분야</div>
                    <div style="padding: 12px; flex-grow: 1;">
                      <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.9rem; color: #000; line-height: 1.6; word-break: keep-all;">
                        <li>동적 차량한계 검토</li>
                        <li>시공오차 반영</li>
                        <li>건축한계 확보 검토</li>
                      </ul>
                    </div>
                    <div style="background: #E8F0FA; text-align: center; padding: 6px; font-weight: 700; color: #0B1E36; border-top: 1px solid #0B1E36; font-size: 0.95rem;">토목·궤도 검토</div>
                  </div>
                  <!-- Box 4 -->
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff; display: flex; flex-direction: column;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.05rem;">4. 운영사/유지보수</div>
                    <div style="padding: 12px; flex-grow: 1;">
                      <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.9rem; color: #000; line-height: 1.6; word-break: keep-all;">
                        <li>점검/접근공간 요구</li>
                        <li>비상대피 안전공간 요구</li>
                        <li>유지보수 요구사항 제공</li>
                      </ul>
                    </div>
                    <div style="background: #E8F0FA; text-align: center; padding: 6px; font-weight: 700; color: #0B1E36; border-top: 1px solid #0B1E36; font-size: 0.95rem;">운영 요구</div>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-around; font-size: 1.5rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">
                  <div>↘</div><div>↙</div>
                </div>
                
                <!-- Box 5 -->
                <div style="border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                  <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.05rem;">5. 메인 컨트랙터 (통합 조정)</div>
                  <div style="padding: 12px 20px;">
                    <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.95rem; color: #000; line-height: 1.6; word-break: keep-all; font-weight: 600;">
                      <li>차량·토목·시스템·운영 요구 통합</li>
                      <li>분야 간 충돌·누락 검토 및 조정</li>
                      <li>최종 건축한계안 확정 관리</li>
                    </ul>
                  </div>
                </div>

                <div style="text-align: center; font-size: 1.8rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">↓</div>

                <!-- Box 6 -->
                <div style="border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                  <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.1rem;">6. 최종 산출물</div>
                  <div style="padding: 12px; text-align: center;">
                    <div style="font-weight: 900; font-size: 1.15rem; color: #000;">Final Structure Gauge</div>
                    <div style="font-size: 1rem; margin-top: 4px; color: #333; font-weight: bold;">최종 건축한계 도면 확정</div>
                  </div>
                </div>`;

const startTag = '<div class="industrial-diagram"';
const endTagStr = '<!-- Diagram Box End -->'; // We don't have this, so we find the end of the div by counting divs.

const startIndex = html.indexOf(startTag);
if (startIndex !== -1) {
  let depth = 0;
  let endIndex = -1;
  let inDiagram = false;
  
  // We can just use string replacement because we know what's inside.
  // Actually, let's just find the exact content block and replace it.
  const regex = /<div class="industrial-diagram"[\s\S]*?<\/div>\s*<\/div>\s*<!-- Right Side: Industrial Vertical Diagram -->/; // Not safe.
}

// Safer approach: split by lines and replace.
const lines = html.split('\\n');
let startLine = -1;
let endLine = -1;

for(let i=0; i<lines.length; i++) {
  if (lines[i].includes('class="industrial-diagram"')) {
    startLine = i;
  }
  if (startLine !== -1 && i > startLine && lines[i].includes('<!-- Right Side: Industrial Vertical Diagram -->') === false && lines[i].includes('</div>') && lines[i+1] && lines[i+1].includes('</div>') && lines[i+2] && lines[i+2].includes('</div>') && lines[i+3] && lines[i+3].includes('</section>')) {
     endLine = i;
     break;
  }
}
// Actually, it's easier to just use string match with start and end markers
// Looking at the file:
const linesArr = fs.readFileSync('public/index.html', 'utf8').split('\\n');
let sLine = linesArr.findIndex(l => l.includes('class="industrial-diagram"'));
let eLine = sLine + 44; // approx lines of industrial-diagram inner html

let html2 = fs.readFileSync('public/index.html', 'utf8');
const p1 = html2.substring(0, html2.indexOf('<div class="industrial-diagram"'));
const p2Start = html2.indexOf('</section>', html2.indexOf('<div class="industrial-diagram"'));

const p2 = html2.substring(html2.lastIndexOf('</div>', html2.lastIndexOf('</div>', html2.lastIndexOf('</div>', p2Start)))); 
// Way too fragile. Let's just use regular expressions or the previous script.
