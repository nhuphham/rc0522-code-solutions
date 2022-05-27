var modalButton = document.querySelector('.modal-button');
var modal = document.querySelector('.modal');
var buttonNo = document.querySelector('.button-no');

modalButton.addEventListener('click', () => {
  modal.className === 'modal' ? modal.className = 'show-modal' : modal.className = 'modal';
});
buttonNo.addEventListener('click', () => {
  modal.className === 'modal' ? modal.className = 'show-modal' : modal.className = 'modal';
});
