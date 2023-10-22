let menuBtn = document.querySelector('.header-menu-btn');
let menu = document.querySelector('.mob-menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});
