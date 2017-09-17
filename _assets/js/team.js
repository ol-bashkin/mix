function init() {
  "use strict";
  var slider = document.getElementsByClassName('js-team')[0],
    container = document.getElementsByClassName('js-container')[0],
    slides = document.getElementsByClassName('js-trainer'),
    leftArrow = document.getElementsByClassName('js-switch-left')[0],
    rightArrow = document.getElementsByClassName('js-switch-right')[0],
    currentSlide = 0,
    sliderStyle = window.getComputedStyle(slider),
    timer = '',
    timerTime = '';
  
  function slideRight() {
    var curPos = parseInt(slider.style.left, 10);
    if (currentSlide < slides) {
      slider.style.left = curPos - 343 + 'px';
      currentSlide += 1;
    } else {
      slider.style.left = 0;
      currentSlide = 0;
    }
    console.log(currentSlide);
  }
  
  function slideLeft() {
    var curPos = parseInt(slider.style.left, 10);
    
    if (currentSlide > 0) {
      
      slider.style.left = curPos + 343 + 'px';
      currentSlide -= 1;
    } else {
      slider.style.left = -2058 + 'px';
      currentSlide = slides;
    }
    
    console.log(currentSlide);
  }
  
  slides = slides.length - 1;
  slider.style.left = sliderStyle.left;
  
  leftArrow.addEventListener('click', slideLeft);
  rightArrow.addEventListener('click', slideRight);
  
}

window.addEventListener("DOMContentLoaded", init);