const timerID = setInterval(countIntervals, 1000);
function countIntervals() {
  const countDisplay = document.querySelector('.countdown-display');
  let countdown = parseInt(countDisplay.textContent);
  if (countdown === 1) {
    countDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(timerID);
  } else {
    countDisplay.textContent = --countdown;
  }
}
