var numOfClicks = 0;

const hotButton = document.querySelector('.hot-button');
const clickCount = document.querySelector('.click-count');

hotButton.addEventListener('click', () => {
  numOfClicks++;
  clickCount.textContent = numOfClicks;
  if (numOfClicks < 4) {
    hotButton.className = 'cold';
  } else if (numOfClicks < 7) {
    hotButton.className = 'cool';
  } else if (numOfClicks < 10) {
    hotButton.className = 'tepid';
  } else if (numOfClicks < 13) {
    hotButton.className = 'warm';
  } else if (numOfClicks < 16) {
    hotButton.className = 'hot';
  } else {
    hotButton.className = 'nuclear';
  }
});
