const fs = require('fs');
let html = fs.readFileSync('public/index.html', 'utf8');

// 1. Remove the old diagram from the bottom
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

// 2. Insert the new vertical diagram into inner-columns
const insertStr = `              </div>
            </div>
            
            <!-- Right Side: Vertical Diagram -->
            <div class="inner-col right-side" style="flex: 0.85; min-width: 0; margin-left: 20px; border: 2px dashed #94A3B8; border-radius: 6px; padding: 20px; background: #F8FAFC; display: flex; flex-direction: column;">
              <h3 style="color: #0B1E36; font-size: 1.6rem; text-align: center; margin-bottom: 20px; font-weight: 800; border-bottom: 2px solid #CBD5E1; padding-bottom: 10px;">
                건축한계(Structure Gauge) 설정 인터페이스 도식화
              </h3>
              
              <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 10px; font-family: 'Pretendard', sans-serif;">
                
                <!-- TOP LEVEL: Input Sources -->
                <div style="display: flex; gap: 15px;">
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 8px; font-size: 1.05rem; font-weight: 700;">1. 차량제작사</div>
                    <div style="padding: 10px;">
                      <ul style="list-style-type: none; margin: 0; padding: 0; font-size: 0.9rem; color: #000; line-height: 1.5; text-align: center;">
                        <li>정적/동적 차량한계</li>
                        <li>주행조건 제공</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 8px; font-size: 1.05rem; font-weight: 700;">3. 시스템사</div>
                    <div style="padding: 10px;">
                      <ul style="list-style-type: none; margin: 0; padding: 0; font-size: 0.9rem; color: #000; line-height: 1.5; text-align: center;">
                        <li>설비 위치 제공</li>
                        <li>안전 여유공간</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Down Arrows -->
                <div style="display: flex; justify-content: space-around; color: #0B1E36; font-size: 1.5rem; font-weight: 900; line-height: 0.5;">
                  <div>↓</div>
                  <div>↓</div>
                </div>

                <!-- MIDDLE LEVEL: Checkers -->
                <div style="display: flex; gap: 15px;">
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 8px; font-size: 1.05rem; font-weight: 700;">2. 토목/궤도 분야</div>
                    <div style="padding: 10px;">
                      <ul style="list-style-type: none; margin: 0; padding: 0; font-size: 0.9rem; color: #000; line-height: 1.5; text-align: center;">
                        <li>차량한계 검토</li>
                        <li>시공오차 반영</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="flex: 1; border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                    <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 8px; font-size: 1.05rem; font-weight: 700;">4. 운영사/유지보수</div>
                    <div style="padding: 10px;">
                      <ul style="list-style-type: none; margin: 0; padding: 0; font-size: 0.9rem; color: #000; line-height: 1.5; text-align: center;">
                        <li>점검/안전공간 요구</li>
                        <li>유지보수 기준 제공</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Down Arrows -->
                <div style="display: flex; justify-content: space-around; color: #0B1E36; font-size: 1.5rem; font-weight: 900; line-height: 0.5;">
                  <div>↘</div>
                  <div>↙</div>
                </div>

                <!-- CORE LEVEL: Integrator -->
                <div style="border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                  <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-size: 1.15rem; font-weight: 700;">5. 메인 컨트랙터 (통합 조정)</div>
                  <div style="padding: 15px 10px;">
                    <ul style="list-style-type: none; margin: 0 0 10px 0; padding: 0; font-size: 0.95rem; color: #000; line-height: 1.6; text-align: center; font-weight: 600;">
                      <li>차량·토목·시스템·운영 요구 통합</li>
                      <li>분야 간 충돌 검토 및 RAMS 확보</li>
                    </ul>
                    <div style="background: #F1F5F9; border: 1px solid #94A3B8; border-radius: 4px; padding: 8px; text-align: center;">
                      <span style="color: #0B1E36; font-weight: 700; font-size: 0.85rem;">RAMS = Reliability·Availability·Maintainability·Safety</span>
                    </div>
                  </div>
                </div>

                <!-- Down Arrow -->
                <div style="text-align: center; color: #0B1E36; font-size: 1.8rem; font-weight: 900; line-height: 0.5;">↓</div>

                <!-- BOTTOM LEVEL: Output -->
                <div style="border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                  <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-size: 1.15rem; font-weight: 700;">6. 최종 산출물</div>
                  <div style="padding: 12px; text-align: center;">
                    <div style="font-size: 1.1rem; color: #000; font-weight: 800; margin-bottom: 5px;">Final Structure Gauge</div>
                    <div style="font-size: 1rem; color: #333; font-weight: 600;">최종 건축한계 도면 확정</div>
                  </div>
                </div>
                
              </div>
            </div>`;

// Replace right before the end of inner-columns
const targetStr1 = `              </div>\r\n            </div>\r\n          </div>`;
const targetStr2 = `              </div>\n            </div>\n          </div>`;
          
if (html.includes(targetStr1)) {
  html = html.replace(targetStr1, insertStr + '\n          </div>');
} else if (html.includes(targetStr2)) {
  html = html.replace(targetStr2, insertStr + '\n          </div>');
} else {
  console.log('Target string not found for insertion');
}

// Ensure the left column has flex: 1.15
html = html.replace('<div class="inner-col">', '<div class="inner-col" style="flex: 1.15; min-width: 0;">');
  
fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Successfully updated HTML');
