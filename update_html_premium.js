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

// PREMIUM VERTICAL DIAGRAM HTML
const insertStr = `              </div>
            </div>
            
            <!-- Right Side: Premium Vertical Diagram -->
            <div class="inner-col right-side" style="flex: 0.9; min-width: 0; margin-left: 20px; border: 1px solid #E2E8F0; border-radius: 12px; padding: 24px 20px; background: #FFFFFF; box-shadow: 0 10px 15px -3px rgba(15, 23, 42, 0.05), 0 4px 6px -2px rgba(15, 23, 42, 0.025); display: flex; flex-direction: column;">
              
              <!-- Diagram Header -->
              <h3 style="color: #0F172A; font-size: 1.4rem; font-weight: 800; letter-spacing: -0.5px; text-align: center; margin-bottom: 24px; display: flex; align-items: center; justify-content: center; gap: 8px; border-bottom: 2px solid #F1F5F9; padding-bottom: 12px;">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                건축한계(Structure Gauge) 설정 인터페이스 도식
              </h3>
              
              <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between; gap: 4px; font-family: 'Pretendard', sans-serif;">
                
                <!-- TOP LEVEL: Inputs -->
                <div style="display: flex; gap: 16px;">
                  <div style="flex: 1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); overflow: hidden; position: relative;">
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #0EA5E9;"></div>
                    <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 10px 14px; font-weight: 700; color: #1E293B; font-size: 0.95rem; margin-left: 4px;">
                      1. 차량제작사
                    </div>
                    <div style="padding: 12px 14px 12px 18px;">
                      <ul style="list-style: none; margin: 0; padding: 0; font-size: 0.85rem; color: #334155; line-height: 1.6;">
                        <li style="position: relative; padding-left: 12px; margin-bottom: 4px;"><span style="position: absolute; left: 0; top: 0; color: #0EA5E9; font-weight: bold;">·</span> 정적/동적 차량한계</li>
                        <li style="position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; color: #0EA5E9; font-weight: bold;">·</span> 차량 외형·주행조건</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="flex: 1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); overflow: hidden; position: relative;">
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #0EA5E9;"></div>
                    <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 10px 14px; font-weight: 700; color: #1E293B; font-size: 0.95rem; margin-left: 4px;">
                      3. 시스템사 (통신 등)
                    </div>
                    <div style="padding: 12px 14px 12px 18px;">
                      <ul style="list-style: none; margin: 0; padding: 0; font-size: 0.85rem; color: #334155; line-height: 1.6;">
                        <li style="position: relative; padding-left: 12px; margin-bottom: 4px;"><span style="position: absolute; left: 0; top: 0; color: #0EA5E9; font-weight: bold;">·</span> 선로변 설비 위치</li>
                        <li style="position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; color: #0EA5E9; font-weight: bold;">·</span> 설치·안전 여유공간</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Down Arrows 1 -->
                <div style="display: flex; justify-content: space-around; padding: 4px 0;">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M19 13l-7 7-7-7"/></svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M19 13l-7 7-7-7"/></svg>
                </div>

                <!-- MIDDLE LEVEL: Checkers -->
                <div style="display: flex; gap: 16px;">
                  <div style="flex: 1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); overflow: hidden; position: relative;">
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #F59E0B;"></div>
                    <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 10px 14px; font-weight: 700; color: #1E293B; font-size: 0.95rem; margin-left: 4px;">
                      2. 토목 / 궤도 분야
                    </div>
                    <div style="padding: 12px 14px 12px 18px;">
                      <ul style="list-style: none; margin: 0; padding: 0; font-size: 0.85rem; color: #334155; line-height: 1.6;">
                        <li style="position: relative; padding-left: 12px; margin-bottom: 4px;"><span style="position: absolute; left: 0; top: 0; color: #F59E0B; font-weight: bold;">·</span> 동적 차량한계 검토</li>
                        <li style="position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; color: #F59E0B; font-weight: bold;">·</span> 궤도·시공오차 반영</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div style="flex: 1; background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); overflow: hidden; position: relative;">
                    <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #F59E0B;"></div>
                    <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 10px 14px; font-weight: 700; color: #1E293B; font-size: 0.95rem; margin-left: 4px;">
                      4. 운영사 / 유지보수
                    </div>
                    <div style="padding: 12px 14px 12px 18px;">
                      <ul style="list-style: none; margin: 0; padding: 0; font-size: 0.85rem; color: #334155; line-height: 1.6;">
                        <li style="position: relative; padding-left: 12px; margin-bottom: 4px;"><span style="position: absolute; left: 0; top: 0; color: #F59E0B; font-weight: bold;">·</span> 점검·안전공간 요구</li>
                        <li style="position: relative; padding-left: 12px;"><span style="position: absolute; left: 0; top: 0; color: #F59E0B; font-weight: bold;">·</span> 유지보수 기준 제공</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <!-- Merge Arrows 2 -->
                <div style="position: relative; height: 36px; display: flex; justify-content: center; align-items: center; margin: 4px 0;">
                  <!-- Connector lines drawn with borders -->
                  <div style="position: absolute; top: 0; left: 25%; width: 50%; height: 16px; border-left: 2px solid #94A3B8; border-right: 2px solid #94A3B8; border-bottom: 2px solid #94A3B8; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px;"></div>
                  <div style="position: absolute; top: 16px; left: 50%; width: 2px; height: 12px; background: #94A3B8; transform: translateX(-50%);"></div>
                  <!-- Arrowhead -->
                  <svg style="position: absolute; top: 20px; left: 50%; transform: translateX(-50%);" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 13l-7 7-7-7"/></svg>
                </div>

                <!-- CORE LEVEL: Integrator -->
                <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.04); overflow: hidden; position: relative;">
                  <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: #10B981;"></div>
                  <div style="background: #F8FAFC; border-bottom: 1px solid #E2E8F0; padding: 12px 16px; font-weight: 800; color: #0F172A; font-size: 1.05rem; margin-left: 4px; display: flex; justify-content: space-between; align-items: center;">
                    <span>5. 메인 컨트랙터 (통합 조정)</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                  </div>
                  <div style="padding: 16px 16px 16px 20px;">
                    <ul style="list-style: none; margin: 0 0 12px 0; padding: 0; font-size: 0.9rem; color: #1E293B; line-height: 1.7; font-weight: 600;">
                      <li style="position: relative; padding-left: 14px; margin-bottom: 4px;"><span style="position: absolute; left: 0; top: 0; color: #10B981;">✔</span> 차량·토목·시스템·운영 요구사항 종합 검토</li>
                      <li style="position: relative; padding-left: 14px;"><span style="position: absolute; left: 0; top: 0; color: #10B981;">✔</span> 분야 간 충돌(Clash) 해결 및 최종 RAMS 확보</li>
                    </ul>
                    <div style="background: #F1F5F9; border-radius: 6px; padding: 8px 12px; text-align: center; border: 1px dashed #CBD5E1;">
                      <span style="color: #475569; font-weight: 700; font-size: 0.8rem; letter-spacing: 0.5px;">RAMS = Reliability · Availability · Maintainability · Safety</span>
                    </div>
                  </div>
                </div>

                <!-- Down Arrow 3 -->
                <div style="display: flex; justify-content: center; padding: 6px 0;">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v16M19 13l-7 7-7-7"/></svg>
                </div>

                <!-- BOTTOM LEVEL: Output -->
                <div style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(15, 23, 42, 0.2);">
                  <div style="padding: 16px; text-align: center; position: relative;">
                    <!-- Decorative highlight -->
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #3B82F6, #10B981, #F59E0B);"></div>
                    <div style="color: #94A3B8; font-size: 0.85rem; font-weight: 700; margin-bottom: 4px; text-transform: uppercase; letter-spacing: 1px;">6. 최종 산출물</div>
                    <div style="font-size: 1.25rem; color: #FFFFFF; font-weight: 900; letter-spacing: -0.5px; margin-bottom: 4px;">Final Structure Gauge</div>
                    <div style="font-size: 0.95rem; color: #CBD5E1; font-weight: 500;">최종 건축한계 도면 및 조건 확정</div>
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

// Ensure the left column has flex: 1.15 so it takes appropriate width
html = html.replace('<div class="inner-col">', '<div class="inner-col" style="flex: 1.15; min-width: 0;">');
  
fs.writeFileSync('public/index.html', html, 'utf8');
console.log('Successfully updated HTML with PREMIUM layout');
