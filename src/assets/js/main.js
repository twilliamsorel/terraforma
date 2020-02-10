// MAIN NAV
(function () {
  var nav = document.querySelector('nav');

  window.addEventListener('scroll', function () {
    if (nav.getBoundingClientRect().top < 1 && window.pageYOffset > 0) {
      nav.classList.add('fixed')
    } else {
      nav.classList.remove('fixed');
    }
  });
}());