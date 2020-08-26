// click to copy functionality within blog
(function () {
  var element = document.querySelector('[data-click-to-copy]');
  var popup = document.querySelector('.link-copied-message');
  var initCopy = false;

  element.addEventListener('click', function (e) {
    if (initCopy === false) {
      initCopy = true;
      navigator.clipboard.writeText(document.location);

      popup.style.display = 'block';
      popup.style.animationName = 'slidein';

      setTimeout(function () {
        initCopy = false;
        popup.style.display = 'none';
        popup.style.animationName = 'none';
      }, 2000);
    }
  });
}());

// share links follow scroll
(function () {
  var target = document.querySelector('.share-blog-icons');
  var wrapper = document.querySelector('.sharing-wrapper');
  var ticking = false;

  var triggerStick = function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        var triggerPoint = wrapper.getBoundingClientRect().top - 100;
        var lastPoint;

        if (triggerPoint < 0 && target.parentNode.parentNode.getBoundingClientRect().bottom > target.getBoundingClientRect().bottom + 40 || (target.getBoundingClientRect().top > 120) && triggerPoint < 0) {
          target.style.marginTop = -(wrapper.getBoundingClientRect().bottom - 101) + 'px';
          lastPoint = -(wrapper.getBoundingClientRect().bottom - 101) + 'px';
        } else if (triggerPoint >= 0) {
          target.style.marginTop = 0;
          lastPoint = 0;
        } else {
          target.style.marginTop = target.parentNode.parentNode.clientHeight - (target.clientHeight + 40) + 'px';
        }
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener('scroll', triggerStick);
  window.addEventListener('resize', triggerStick);
  window.addEventListener('load', triggerStick);
}());