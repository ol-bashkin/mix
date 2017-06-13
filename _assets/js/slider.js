function init() {
  "use strict";
  var slider = document.getElementsByClassName('js-slider')[0],
    slides = document.getElementsByClassName('js-slide'),
    numbers = document.getElementsByClassName('js-number'),
    leftArrow = document.getElementsByClassName('js-switch-left')[0],
    rightArrow = document.getElementsByClassName('js-switch-right')[0],
    currentSlide = 0,
    sliderStyle = window.getComputedStyle(slider),
    timer = '',
    timerTime = '';
  
  function autoSlide() {
    var curPos = parseInt(slider.style.left, 10);
    if (currentSlide < slides) {
      numbers[currentSlide].classList.remove('controls__number--is-active');
      numbers[currentSlide + 1].classList.add('controls__number--is-active');
      slider.style.left = curPos - 100 + '%';
      currentSlide += 1;
    } else {
      numbers[currentSlide].classList.remove('controls__number--is-active');
      numbers[0].classList.add('controls__number--is-active');
      slider.style.left = 0;
      currentSlide = 0;
    }
    console.log(currentSlide);
  }
  
  function timization() {
    if (!!timer) { window.clearInterval(timer); }
    if (!!timerTime) { window.clearInterval(timerTime); }
    
    timerTime = window.setTimeout(function () {
      timer = window.setInterval(autoSlide, '4000');
    }, '6000');
  }
  
  function slideRight() {
    
    timization();
    
    autoSlide();
  }
  
  function slideLeft() {
    var curPos = parseInt(slider.style.left, 10);
    
    timization();
    
    if (currentSlide > 0) {
      numbers[currentSlide].classList.remove('controls__number--is-active');
      numbers[currentSlide - 1].classList.add('controls__number--is-active');
      
      slider.style.left = curPos + 100 + '%';
      currentSlide -= 1;
    } else {
      numbers[currentSlide].classList.remove('controls__number--is-active');
      numbers[slides].classList.add('controls__number--is-active');
      slider.style.left = -300 + '%';
      currentSlide = slides;
    }
    
    console.log(currentSlide);
  }
  
  slides = slides.length - 1;
  slider.style.left = sliderStyle.left;
  
  timer = window.setInterval(autoSlide, '4000');
  
  leftArrow.addEventListener('click', slideLeft);
  rightArrow.addEventListener('click', slideRight);
  
  [].forEach.call(numbers, function (number, i) {
    number.addEventListener('click', function () {
      timization();
      
      numbers[currentSlide].classList.remove('controls__number--is-active');
      number.classList.add('controls__number--is-active');
      slider.style.left = i * -100 + '%';
      currentSlide = i;
    });
  });
}

window.addEventListener("DOMContentLoaded", init);