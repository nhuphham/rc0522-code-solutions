function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const button = document.querySelector('.click-button');
button.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}
const hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const click = document.querySelector('.double-click-button');
click.addEventListener('dblclick', handleDoubleClick);
