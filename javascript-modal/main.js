var modalButton = document.querySelector('.modal-button');
var buttonNo = document.querySelector('.button-no');

modalButton.addEventListener('click', () => {
  modalButton.className === 'modalButton' ? modalButton.className = '.modalContent' : modalButton.className = '.modal-button';
  buttonNo.className === 'modal-button' ? buttonNo.className = 'modal-button' : buttonNo.className = 'modal-button';

});
