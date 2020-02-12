// MAIN NAV
(function () {
  var nav = document.querySelector('nav');
  var navWrapper = document.querySelector('.nav-container');

  function fixNav () {
    if (nav.getBoundingClientRect().top < 1 && window.pageYOffset > 0 && navWrapper.getBoundingClientRect().top < 1) {
      nav.classList.add('fixed')
    } else {
      nav.classList.remove('fixed');
    }
  };

  window.addEventListener('scroll', fixNav);
  window.addEventListener('resize', fixNav);
}());