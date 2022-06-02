function handleFocus(event) {
  console.log('focus was fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur was fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

const username = document.getElementById('user-name');
const email = document.getElementById('user-email');
const message = document.getElementById('user-message');

username.addEventListener('focus', handleFocus);
email.addEventListener('blur', handleBlur);
message.addEventListener('input', handleInput);
