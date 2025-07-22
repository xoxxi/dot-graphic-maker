const gridSize = 16; // 16x16 그리드
const dotGrid = document.getElementById('dotGrid');
const colorPicker = document.getElementById('colorPicker');
const clearBtn = document.getElementById('clearBtn');

// 그리드 생성
for (let i = 0; i < gridSize * gridSize; i++) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  dot.addEventListener('click', function() {
    dot.style.background = colorPicker.value;
  });
  dotGrid.appendChild(dot);
}

// 초기화 버튼
clearBtn.addEventListener('click', () => {
  document.querySelectorAll('.dot').forEach(dot => {
    dot.style.background = '#fff';
  });
});
