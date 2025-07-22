const gridSize = 16; // 16x16 그리드
const dotGrid = document.getElementById('dotGrid');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');
const eraserBtn = document.getElementById('eraserBtn');
const colorHistoryDiv = document.getElementById('colorHistory');
let isErasing = false;

// 최근 사용 색상 저장
let colorHistory = [];
const maxHistory = 8;

function addColorToHistory(color) {
  if (color === '#fff' || color === '#ffffff') return;
  colorHistory = colorHistory.filter(c => c !== color);
  colorHistory.unshift(color);
  if (colorHistory.length > maxHistory) colorHistory.pop();
  renderColorHistory();
}

function renderColorHistory() {
  colorHistoryDiv.innerHTML = '';
  colorHistory.forEach(color => {
    const dot = document.createElement('div');
    dot.className = 'color-history-dot';
    dot.style.background = color;
    dot.title = color;
    dot.onclick = () => {
      colorPicker.value = color;
      isErasing = false;
      eraserBtn.classList.remove('active');
    };
    colorHistoryDiv.appendChild(dot);
  });
}

// 그리드 생성
const dots = [];
for (let i = 0; i < gridSize * gridSize; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.style.background = '#fff';
  dot.addEventListener('click', function() {
    if (isErasing) {
      dot.style.background = '#fff';
    } else {
      dot.style.background = colorPicker.value;
      addColorToHistory(colorPicker.value);
    }
  });
  dotGrid.appendChild(dot);
  dots.push(dot);
}

// 초기화 버튼
clearBtn.addEventListener('click', () => {
  dots.forEach(dot => {
    dot.style.background = '#fff';
  });
});

// 지우개 버튼
eraserBtn.addEventListener('click', () => {
  isErasing = !isErasing;
  eraserBtn.classList.toggle('active', isErasing);
});

// 샘플 도트 그림 (하트 모양 예시)
const sampleDot = document.getElementById('sampleDot');
const sample = [
  '00011000',
  '00111100',
  '01111110',
  '11111111',
  '11111111',
  '01111110',
  '00111100',
  '00011000'
];
for (let y = 0; y < 8; y++) {
  for (let x = 0; x < 8; x++) {
    const sDot = document.createElement('div');
    sDot.className = 'sample-dot';
    sDot.style.background = sample[y][x] === '1' ? '#f77' : '#eee';
    sampleDot.appendChild(sDot);
  }
}
