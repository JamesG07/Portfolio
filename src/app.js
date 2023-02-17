const btnaMenu = document.querySelector('.menu-burger');
const menu = document.querySelector('.header__ul');
btnaMenu.addEventListener('click', () => {
  btnaMenu.classList.toggle('opened');
  menu.classList.toggle('hiden');

  btnaMenu.setAttribute('aria-expanded', btnaMenu.classList.contains('opened'));
});
