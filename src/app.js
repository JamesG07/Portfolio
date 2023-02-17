/***** menu *******/

((d) => {
  const btnaMenu = d.querySelector('.menu-btn');
  const menu = d.querySelector('.menu__mobile');

  btnaMenu.addEventListener('click', () => {
    btnaMenu.classList.toggle('opened');
    menu.classList.toggle('hiden');
    btnaMenu.setAttribute(
      'aria-expanded',
      btnaMenu.classList.contains('opened')
    );
  });

  d.addEventListener('click', (e) => {
    if (!e.target.matches('.menu__mobile a ')) return false;

    if (e.target.matches('.menu__mobile a ')) {
      btnaMenu.classList.toggle('opened');
      menu.classList.toggle('hiden');
    }
  });
})(document);
