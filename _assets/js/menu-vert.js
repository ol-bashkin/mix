function init() {
  "use strict";
  var links = document.getElementsByClassName('js-menu-link'),
    active = document.getElementsByClassName('menu-vert__link--is-active')[0];
  
  Array.prototype.forEach.call(links, function (link) {
    link.addEventListener('click', function (event) {
      if (active) {
        active.classList.remove('menu-vert__link--is-active');
      }
      active = event.target;
      active.classList.add('menu-vert__link--is-active');
    });
  });
  
  window.addEventListener('scroll', function () {
    var header = document.getElementsByClassName('js-header')[0],
      headerStyle = window.getComputedStyle(header),
      headerHeight = parseInt(headerStyle.height, 10),
      main = document.getElementsByClassName('js-main')[0],
      mainStyle = window.getComputedStyle(main),
      mainHeight = parseInt(mainStyle.height, 10),
      menu = document.getElementsByClassName('js-menu-vert')[0],
      menuStyle = window.getComputedStyle(menu),
      menuHeight = parseInt(menuStyle.height, 10),
      footer = document.getElementsByClassName('js-footer')[0],
      footerStyle = window.getComputedStyle(footer),
      footerHeight = parseInt(footerStyle.height, 10),
      scrolled = window.pageYOffset || document.documentElement.scrollTop,
      windowHeight = document.documentElement.clientHeight;
    menu.style.top = headerStyle.height + 'px';

    if (scrolled <= headerHeight) {
      menu.style.height = windowHeight - headerHeight + scrolled + 'px';
      menu.style.top = headerHeight - scrolled + 'px';
    } else if (scrolled > mainHeight + headerHeight - windowHeight) {
      menu.style.top = 'unset';
      
      menu.style.bottom = scrolled + windowHeight - mainHeight - headerHeight + 'px';
      menu.style.height = headerHeight + mainHeight - scrolled + 'px';
    } else {
      menu.style.top = 0;
      menu.style.height = 100 + '%';
    }
  });
}

window.addEventListener("DOMContentLoaded", init);