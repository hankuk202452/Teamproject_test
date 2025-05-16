const infoButton = document.getElementById('infoButton');
const infoSection = document.getElementById('infoSection');
const startButton = document.getElementById('startButton');

infoButton.addEventListener('click', () => {
  infoSection.classList.toggle('hidden');
});

startButton.addEventListener('click', () => {
  // 실제 게임 시작하는 페이지로 이동하거나 게임 로직 시작
  alert('게임을 시작합니다!');
  // location.href = 'game.html'; // 게임 화면으로 이동하는 예시
});

