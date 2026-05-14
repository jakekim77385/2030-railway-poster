const fs = require('fs');

const htmlPath = 'public/index.html';
const content = fs.readFileSync(htmlPath, 'utf8');
const lines = content.split('\n');

const newDiagram = fs.readFileSync('new_diagram_clean.html', 'utf8');

// Find where inner-columns ends.
// In 12:12 backup, Left side starts at 161: <div class="inner-col">
// Left side ends at 254: </div>
// inner-columns ends at 255: </div>
let insertIdx = -1;
for (let i = 250; i < 260; i++) {
    if (lines[i].includes('</div>') && lines[i+1] && lines[i+1].includes('</div>') && lines[i+2] && lines[i+2].includes('</div>')) {
        // Line 254 is the end of inner-col.
        // Line 255 is the end of inner-columns.
        insertIdx = i;
        break;
    }
}
if (insertIdx === -1) insertIdx = 254; // Fallback to 254

// Find the old diagram section at the bottom
let oldDiagramStart = -1;
let oldDiagramEnd = -1;
for (let i = 300; i < lines.length; i++) {
    if (lines[i].includes('<!-- 건축한계 인터페이스 다이어그램 캔버스 -->')) {
        oldDiagramStart = i;
    }
    // The poster-canvas ends around line 476, just before </div></div></body></html>
    if (oldDiagramStart !== -1 && lines[i].includes('</body>')) {
        oldDiagramEnd = i - 2; // leave </div></div> before body
        break;
    }
}

let newLines = [];
for (let i = 0; i < lines.length; i++) {
    if (oldDiagramStart !== -1 && i >= oldDiagramStart && i <= oldDiagramEnd) {
        continue; // skip old diagram
    }
    
    newLines.push(lines[i]);
    
    // Insert new right column after the left column ends
    if (i === insertIdx) {
        newLines.push(`            <!-- Right Side (Architecture Diagram) -->`);
        newLines.push(`            <div class="inner-col" style="flex: 0.9; margin-left: 20px;">`);
        newLines.push(newDiagram);
        newLines.push(`            </div>`);
    }
}

// Write back
fs.writeFileSync(htmlPath, newLines.join('\n'), 'utf8');
console.log('HTML fixed successfully!');
