let menuBtn = document.querySelector('.header-menu-btn');
let menu = document.querySelector('.mob-menu');

let modalBtn = document.querySelector('.footer-subscribe-btn');
let modalBtnClose = document.querySelector('.modal-close-btn');
let modal = document.querySelector('.backdrop');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

modalBtn.addEventListener('click', function () {
  modalBtn.classList.toggle('active');
  modal.classList.toggle('active');
});

modalBtnClose.addEventListener('click', function () {
  modalBtnClose.classList.toggle('active');
  modal.classList.toggle('active');
});
