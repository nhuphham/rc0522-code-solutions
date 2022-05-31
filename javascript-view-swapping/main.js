const tabContainer = document.querySelector('.tab-container');
const views = document.querySelectorAll('.view');
const tabs = document.querySelectorAll('.tab');

tabContainer.addEventListener('click', handleViewSwap);

function handleViewSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (let i = 0; i < tabs.length; i++) {
    if (tabs[i] === event.target) {
      tabs[i].className = 'tab active';
    } else {
      tabs[i].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');

  for (let j = 0; j < views.length; j++) {

    if (views[j].getAttribute('data-view') !== viewName) {
      views[j].className = 'view hidden';
    } else {
      views[j].className = 'view';
    }
  }

}
