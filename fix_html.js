const fs = require('fs');
const lines = fs.readFileSync('public/index.html', 'utf8').split('\n');

const newContent = `                  <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.05rem;">5. Main Contractor</div>
                  <div style="padding: 15px 20px;">
                    <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.95rem; color: #000; line-height: 1.6; word-break: keep-all; font-weight: 600;">
                      <li>차량·토목·시스템·운영 요구 통합</li>
                      <li>분야 간 충돌·누락 검토 및 조정</li>
                      <li>RAMS 요구사항 검토</li>
                      <li>최종 건축한계안 확정 관리</li>
                    </ul>
                  </div>
                </div>

                <div style="text-align: center; font-size: 1.8rem; font-weight: 900; color: #0B1E36; line-height: 0.5; padding: 5px 0;">↓</div>

                <!-- Box 6 -->
                <div style="border: 2px solid #0B1E36; border-radius: 6px; overflow: hidden; background: #ffffff;">
                  <div style="background: #0B1E36; color: #ffffff; text-align: center; padding: 10px; font-weight: 700; font-size: 1.1rem;">6. 최종 산출물</div>
                  <div style="padding: 15px 20px;">
                    <ul style="list-style-type: disc; margin: 0; padding-left: 18px; font-size: 0.95rem; color: #000; line-height: 1.6; word-break: keep-all; font-weight: 600;">
                      <li>Final Structure Gauge</li>
                      <li>최종 건축한계</li>
                      <li>분야별 설계 반영</li>
                    </ul>
                  </div>
                </div>
                
                <!-- Bottom Interface Box -->
                <div style="background: #E8F0FA; border: 2px solid #0B1E36; border-radius: 6px; padding: 12px 15px; margin-top: auto;">
                  <div style="color: #0B1E36; font-weight: 800; font-size: 0.95rem; text-align: left; line-height: 1.5;">
                    <div>※ 핵심 인터페이스</div>
                    <div style="padding-left: 15px;">: 차량한계 + 시공오차 + 설비 설치정보 + 운영·유지보수 요구 + RAMS 기준</div>
                    <div style="padding-left: 15px;">→ 최종 건축한계</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- 3. 결론 (Conclusion) -->
      <section class="poster-row conclusion-row">
        <div class="row-header">
          <h2>Conclusion / Future Study</h2>
        </div>
        <div class="row-content box-content">
          <div style="font-size: 1.8rem; line-height: 1.5; color: #1B2B48; font-weight: 800; padding: 30px 50px; word-break: keep-all; letter-spacing: -1px; display: flex; flex-direction: column; gap: 18px;">
            <div style="display: flex; align-items: flex-start;"><span style="color: #0369A1; margin-right: 12px; font-size: 1.5rem; transform: translateY(3px);">▶</span><span>해외 EPC 철도사업의 다공종 간 <strong style="color: #0369A1;">IRM(Interface Requirements Matrix)</strong>과 <strong style="color: #0369A1;">ICD(Interface Control Document)</strong> 기반의 표준화된 인터페이스 관리기준 확립하고</span></div>
            <div style="display: flex; align-items: flex-start;"><span style="color: #0369A1; margin-right: 12px; font-size: 1.5rem; transform: translateY(3px);">▶</span><span>이에 상응하는 프로젝트 관리 도구 개발 연구 및 <strong style="color: #0369A1;">BIM</strong> 적용으로 설계, 시공의 충돌 예방과 공기 지연 리스크를 최소화하는 데 그 목적이 있음</span></div>
            <div style="display: flex; align-items: flex-start;"><span style="color: #0369A1; margin-right: 12px; font-size: 1.5rem; transform: translateY(3px);">▶</span><span>기 국내 철도사업 기반 구축된 법령, 기준, 지침서를 해외 철도시장에서 적용 가능한 국제기준으로 적용 가능한 국제표준화 병행 연구 예정</span></div>
          </div>
        </div>
      </section>

    </main>
  </div>
</body>
</html>`;

const finalLines = lines.slice(0, 334).join('\n') + '\n' + newContent;
fs.writeFileSync('public/index.html', finalLines, 'utf8');
