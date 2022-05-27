var lightbulb = document.querySelector('.lightbulb');
var body = document.querySelector('body');
lightbulb.addEventListener('click', () => {
  lightbulb.className === 'lightbulb' ? lightbulb.className = 'off-light-bulb' : lightbulb.className = 'lightbulb';
  body.className === 'on-body' ? body.className = 'off-body' : body.className = 'on-body';
});
