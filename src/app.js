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

// contact form
((d) => {
  const $form = d.querySelector('.contact-form');
  const $loader = d.querySelector('.contact-form-loader');
  const $response = d.querySelector('.contact-form-response');
  $form.addEventListener('submit', (e) => {
    e.preventDefault();
    $loader.classList.remove('hiden');
    fetch('https://formsubmit.co/ajax/jamesgrajales5@gmail.com', {
      method: 'POST',
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        location.hash = '#gracias';
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message = err.statusText || 'Ocurrio un errro, intenta nuevamente';
        $response.querySelector(
          'h3'
        ).innerHTML = `Error ${err.status}:${message}`;
      })
      .finally(() => {
        $loader.classList.add('hiden');
        setTimeout(() => {
          location.hash = '#close';
        }, 3000);
      });
  });
})(document);
