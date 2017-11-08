function init() {
  "use strict";
  var slider = document.getElementsByClassName('js-team')[0],
    container = document.getElementsByClassName('js-container')[0],
    slides = document.getElementsByClassName('js-trainer'),
    slidesCount = slides.length,
    sliderWidth = slidesCount * 331 + slidesCount * 12 + 'px',
    leftArrow = document.getElementsByClassName('js-switch-left')[0],
    rightArrow = document.getElementsByClassName('js-switch-right')[0],
    currentSlide = 0,
    sliderStyle = window.getComputedStyle(slider),
    containerStyle = window.getComputedStyle(container),
    viewPort = containerStyle.width,
    timer = '',
    timerTime = '';
  
  window.addEventListener('resize', function () {
    viewPort = containerStyle.width;
    console.log(viewPort);
  }, true);
  console.log(slides[0]);
  slider.style.width = sliderWidth;
  console.log(viewPort + '!');
  function slideRight() {
    var movedImg,
      count = 0,
      slides = document.getElementsByClassName('js-trainer'),
      timer = setInterval(function () {
        if (count === 20) {
          slider.style.left = parseInt(slider.style.left, 10) - 3 + 'px';
          clearInterval(timer);
        } else {
          slider.style.left = parseInt(slider.style.left, 10) - 340 / 20 + 'px';
          console.log(slider.style.left);
          count += 1;
        }
      }, 20);
    
    window.setTimeout(function () {
      movedImg = slider.removeChild(slides[0]);
      slider.appendChild(movedImg);
      slider.style.left = parseInt(slider.style.left, 10) + 343 + 'px';
    }, 500);
  }
  
  function slideLeft() {
    var movedImg,
      count = 0,
      slides = document.getElementsByClassName('js-trainer'),
      timer;
    movedImg = slider.removeChild(slides[slidesCount - 1]);
    slider.insertBefore(movedImg, slides[0]);
    slider.style.left = parseInt(slider.style.left, 10) - 343 + 'px';
    timer = setInterval(function () {
      if (count === 20) {
        slider.style.left = parseInt(slider.style.left, 10) + 3 + 'px';
        clearInterval(timer);
      } else {
        slider.style.left = parseInt(slider.style.left, 10) + 340 / 20 + 'px';
        console.log(slider.style.left);
        count += 1;
      }
    }, 20);

  }
  
  slides = slides.length - 1;
  slider.style.left = sliderStyle.left;
  
  leftArrow.addEventListener('click', slideLeft);
  rightArrow.addEventListener('click', slideRight);
  
}

window.addEventListener("DOMContentLoaded", init);