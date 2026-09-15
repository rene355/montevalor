document.documentElement.classList.add('js');
const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
if (button && nav) {
  button.hidden = false;
  const close = () => {
    nav.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.textContent = button.dataset.open;
  };
  button.addEventListener('click', () => {
    const open = button.getAttribute('aria-expanded') !== 'true';
    nav.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? button.dataset.close : button.dataset.open;
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      close();
      button.focus();
    }
  });
  nav.addEventListener('click', event => { if (event.target.closest('a')) close(); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', close);
}
