document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.trop-header__hamburger');
  var nav = document.getElementById('trop-header-nav');
  var overlay = document.querySelector('.trop-header__overlay');
  var closeBtn = document.querySelector('.trop-header__close');

  function openMenu() {
    nav.classList.add('is-open');
    overlay.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    overlay.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (hamburger && nav && overlay) {
    hamburger.addEventListener('click', function () {
      nav.classList.contains('is-open') ? closeMenu() : openMenu();
    });

    overlay.addEventListener('click', closeMenu);

    if (closeBtn) {
      closeBtn.addEventListener('click', closeMenu);
    }
  }

  var toggles = document.querySelectorAll('.trop-header__toggle');
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var submenu = toggle.nextElementSibling;
      if (!submenu || !submenu.classList.contains('trop-header__submenu')) {
        return;
      }
      var isOpen = submenu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
});