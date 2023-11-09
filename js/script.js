let menuBtn = document.querySelector('.header-menu-btn');
let menu = document.querySelector('.mob-menu');

let modalBtn = document.querySelector('.hero-btn');
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

//=========modalBtnLink;==========
let modalBtnLink = document.querySelectorAll('.item');
let modalLink = document.querySelector('.mob-menu');

let firstItem = modalBtnLink[0];
let twoItem = modalBtnLink[1];
let threeItem = modalBtnLink[2];

//=========modalBtnLink==========
firstItem.addEventListener('click', function () {
  firstItem.classList.toggle('active');
  modalLink.classList.toggle('active');
  menuBtn.classList.toggle('active');
});
twoItem.addEventListener('click', function () {
  twoItem.classList.toggle('active');
  modalLink.classList.toggle('active');
  menuBtn.classList.toggle('active');
});
threeItem.addEventListener('click', function () {
  threeItem.classList.toggle('active');
  modalLink.classList.toggle('active');
  menuBtn.classList.toggle('active');
});
