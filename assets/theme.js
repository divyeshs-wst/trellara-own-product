document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.trop-header__hamburger');
  var nav = document.getElementById('trop-header-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('is-open');
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
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