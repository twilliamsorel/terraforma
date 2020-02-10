(function () {
  var elements = Array.from(document.querySelectorAll('[data-stretch]'));

  function setElements () { 
    elements.forEach(function (ele) {
      var width = ele.nextElementSibling.getBoundingClientRect().width;
      var rightBound = ele.nextElementSibling.getBoundingClientRect().right - width;
      var leftBound = ele.nextElementSibling.getBoundingClientRect().left;

      if (window.innerWidth < 1250 && window.innerWidth > 768) {
        if (ele.getAttribute('data-stretch') === 'right') {
          ele.style.width = (width + rightBound) + 'px';
          ele.style.marginRight = -rightBound + 'px';
        } else if (ele.getAttribute('data-stretch') === 'left') {
          ele.style.width = (width + leftBound) + 'px';
          ele.style.marginLeft = -leftBound + 'px';
        }
      } else {
        ele.style.width = 'initial';
        ele.style.marginLeft = 'initial';
        ele.style.marginRight = 'initial';
      }
    });
  };

  window.addEventListener('resize', setElements);
  window.addEventListener('load', setElements);
}());