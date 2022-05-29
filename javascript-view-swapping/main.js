var tabContainer = document.querySelector('.tab-container');
var views = document.querySelector('.view');
var tabs = document.querySelector('.tab');

tabContainer.addEventListener('click', handleViewSwap());

function handleViewSwap(event) {
  if (!event.target.matches('.tab')) {
    return;
  }
  for (var tabIndex = 0; tabIndex < tabs.length; tabIndex++) {
    if (tabs[tabIndex] === event.target) {
      tabs[tabIndex].className = 'tab active';
    } else {
      tabs[tabIndex].className = 'tab';
    }
  }

  var viewName = event.target.getAttribute('data-view');

  for (var viewIndex = 0; viewIndex < views.length; viewIndex++) {
    if (views[viewIndex].getAttribute('data-view') === viewName) {
      views[viewIndex].className = 'view hidden';
    } else {
      views[viewIndex].className = 'view';
    }
  }

}
