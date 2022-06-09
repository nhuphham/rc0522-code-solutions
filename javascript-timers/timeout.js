function updateText() {
  const message = document.querySelector('.message');
  message.textContent = 'Hello There';

}
setTimeout(updateText, 2000);
