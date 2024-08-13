let dc = document.getElementById("dynamic-content");
let er = document.getElementById("error");
let controls = document.getElementById("controls");
let button = controls.children;
let link = "./partials/partial-1.html";

function loadPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      dc.innerHTML = data;
    })
    .catch(error => {
      console.error('Error in loading the Page', error);
    });
}

function pageSelector(e) {
  let finalButton = e.target;


  for (let btn of button) {
    if (btn.hasAttribute('class')) {
      btn.removeAttribute('class');
    }
  }

  finalButton.setAttribute('class', 'btn');


  let pageLoad = '';
  if (finalButton.id === 'home') {
    pageLoad = './partials/partial-1.html';
  } else if (finalButton.id === 'port') {
    pageLoad = './partials/partial-2.html';
  }

  loadPage(pageLoad);
}


document.addEventListener('DOMContentLoaded', (event) => {
  loadPage(link);
});

button[0].addEventListener('click', pageSelector);
button[1].addEventListener('click', pageSelector);