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

// MOBILE NAV 
(function () {
  var mobileNavContainer = document.querySelector('.mobile-nav-container');
  var mobileNavButton = document.querySelector('[data-mobile-button]');

  // open button
  mobileNavButton.addEventListener('click', function () {
    mobileNavContainer.style.display = 'flex';

    setTimeout(function () {
      mobileNavContainer.style.opacity = '1';
    }, 10)
  });

  mobileNavContainer.addEventListener('click', function (e) {
    if (e.target.getAttribute('data-close-mobile')) {
      mobileNavContainer.style.opacity = '0';

      setTimeout(function () {
        mobileNavContainer.style.display = 'none';
      }, 400);
    }
  },true);

}());