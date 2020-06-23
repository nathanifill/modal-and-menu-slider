/* VARIABLES */

const body = document.getElementById('body');
const toggleButton = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const closeButton = document.getElementById('modal-close');
const modalContainer = document.getElementById('modal-container');
const hireMeBtn = document.getElementById('hire-me-btn');

/* FUNCTIONS */

// toggles the menu on and off the scree
function toggleMenu() {
  if (
    body.classList.contains('shift-right') ||
    body.classList.contains('shift-left')
  ) {
    body.classList.toggle('shift-right');
    body.classList.toggle('shift-left');
  } else {
    body.classList.toggle('shift-right');
  }
}

// toggles the modal on and off the screen
function toggleModal() {
  modalContainer.classList.toggle('show-modal');
}

/* EVENT LISTENERS */
toggleButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleModal);
hireMeBtn.addEventListener('click', toggleModal);

// listens for click on the modal-container id and toggles modal. this allows for close by clicking on the black screen instead of just the close button
window.addEventListener('click', function (e) {
  if (e.target.getAttribute('id') == 'modal-container') {
    toggleModal();
  }
});
