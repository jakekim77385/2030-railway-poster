const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Remove the old horizontal diagram from the bottom
const startStr = '<!-- 건축한계 인터페이스 다이어그램 캔버스 -->';
const endStr = '    </div>\r\n  </div>\r\n  </div>';
const endStrFallback = '    </div>\n  </div>\n  </div>';

const startIndex = html.indexOf(startStr);
let endIndex = html.indexOf(endStr, startIndex);
if (endIndex === -1) {
  endIndex = html.indexOf(endStrFallback, startIndex);
  if (endIndex !== -1) endIndex += endStrFallback.length;
} else {
  endIndex += endStr.length;
}

if (startIndex > -1 && endIndex > -1) {
  html = html.substring(0, startIndex) + html.substring(endIndex);
}

// 2. Insert the industrial flat vertical diagram
const insertStr = `              </div>
            </div>
            
            <!-- Right Side: Industrial Vertical Diagram -->
            <div class="inner-col right-side" style="flex: 0.85; min-width: 0; margin-left: 20px; display: flex; flex-direction: column;">
              
              <!-- Spacer to align with the left side "▶ 인터페이스 구조 분석" -->
              <h3 class="col-title" style="opacity: 0; user-select: none;">▶ Spacer</h3>
              
              <!-- Title aligned with "① 분야별 인터페이스 발생 현황" -->
              <p class="desc-text" style="margin-top: 8px;"><strong>③ 건축한계 설정을 위한 기술적 인터페이스 도식</strong></p>
              
              <!-- Diagram Box -->
              <div class="industrial-diagram" style="margin-top: 15px; flex-grow: 1; border: 1px dashed #94A3B8; padding: 20px; background: #ffffff; display: flex; flex-direction: column; justify-content: space-between; font-family: 'Pretendard', sans-serif;">
                
                <div style="display: flex; gap: 15px;">
                  <div style="flex: 1; border: 2px solid #0B1E36; background: #fff;">
                    <div style="background: #0B1E36; color: #fff; text-align: center; font-weight: 700; padding: 10px; font-size: 1.05rem;">1. 차량제작사</div>
                    <div style="padding: 12px; font-size: 0.95rem; text-align: center; line-height: 1.6;">정적/동적 차량한계<br>주행조건 제공</div>
                  </div>
                  <div style="flex: 1; border: 2px solid #0B1E36; background: #fff;">
                    <div style="background: #0B1E36; color: #fff; text-align: center; font-weight: 700; padding: 10px; font-size: 1.05rem;">3. 시스템사</div>
                    <div style="padding: 12px; font-size: 0.95rem; text-align: center; line-height: 1.6;">선로 위치 제공<br>안전 여유공간</div>
                  </div>
                </div>
                
                <div style="display: flex; justify-content: space-around; font-size: 1.5rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">
                  <div>↓</div><div>↓</div>
                </div>
                
                <div style="display: flex; gap: 15px;">
                  <div style="flex: 1; border: 2px solid #0B1E36; background: #fff;">
                    <div style="background: #0B1E36; color: #fff; text-align: center; font-weight: 700; padding: 10px; font-size: 1.05rem;">2. 토목/궤도 분야</div>
                    <div style="padding: 12px; font-size: 0.95rem; text-align: center; line-height: 1.6;">차량한계 검토<br>시공오차 반영</div>
                  </div>
                  <div style="flex: 1; border: 2px solid #0B1E36; background: #fff;">
                    <div style="background: #0B1E36; color: #fff; text-align: center; font-weight: 700; padding: 10px; font-size: 1.05rem;">4. 운영사/유지보수</div>
                    <div style="padding: 12px; font-size: 0.95rem; text-align: center; line-height: 1.6;">점검/안전공간 요구<br>유지보수 기준 제공</div>
                  </div>
                </div>

                <div style="display: flex; justify-content: space-around; font-size: 1.5rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">
                  <div>↘</div><div>↙</div>
                </div>
                
                <div style="border: 2px solid #0B1E36; background: #fff;">
                  <div style="background: #0B1E36; color: #fff; text-align: center; font-weight: 700; padding: 10px; font-size: 1.05rem;">5. 메인 컨트랙터 (통합 조정)</div>
                  <div style="padding: 18px 15px; font-size: 1rem; text-align: center; font-weight: bold; line-height: 1.6;">
                    차량·토목·시스템·운영 요구 통합<br>분야 간 충돌 검토 및 RAMS 확보
                    <div style="margin-top: 12px; font-size: 0.85rem; font-weight: normal; border: 1px solid #94A3B8; background: #F8FAFC; padding: 6px;">RAMS = Reliability·Availability·Maintainability·Safety</div>
                  </div>
                </div>

                <div style="text-align: center; font-size: 1.8rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">↓</div>

                <div style="border: 2px solid #0B1E36; background: #fff;">
                  <div style="background: #0B1E36; color: #fff; text-align: center; font-weight: 700; padding: 12px; font-size: 1.1rem;">6. 최종 산출물</div>
                  <div style="padding: 15px; text-align: center;">
                    <div style="font-weight: 900; font-size: 1.15rem; color: #000;">Final Structure Gauge</div>
                    <div style="font-size: 1rem; margin-top: 5px; color: #333; font-weight: bold;">최종 건축한계 도면 확정</div>
                  </div>
                </div>
                
              </div>
            </div>`;

const targetStr1 = `              </div>\r\n            </div>\r\n          </div>`;
const targetStr2 = `              </div>\n            </div>\n          </div>`;
          
if (html.includes(targetStr1)) {
  html = html.replace(targetStr1, insertStr + '\n          </div>');
} else if (html.includes(targetStr2)) {
  html = html.replace(targetStr2, insertStr + '\n          </div>');
} else {
  console.log('Target string not found for insertion');
}

// Adjust left column width
html = html.replace('<div class="inner-col">', '<div class="inner-col" style="flex: 1.15; min-width: 0;">');
  
fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Successfully updated HTML with INDUSTRIAL layout');
