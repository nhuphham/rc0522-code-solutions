const form = document.getElementById('contact-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const result = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    message: form.elements.message.value
  };
  console.log(result);
});
