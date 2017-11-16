function init() {
  "use strict";
  var name = document.getElementsByClassName('js-name')[0],
    email = document.getElementsByClassName('js-email')[0],
    subject = document.getElementsByClassName('js-subject')[0],
    message = document.getElementsByClassName('js-text')[0],
    popup = document.getElementsByClassName('js-popup')[0],
    okButton = document.getElementsByClassName('js-ok')[0];
  
  document.getElementsByClassName('js-button')[0].addEventListener('click', function (event) {
    if (!name.value) {
      if (!name.classList.contains('article__input--has-error')) {
        name.classList.add('article__input--has-error');
      }
      name.placeholder = 'Please enter your name';
    }
    if (!email.value) {
      if (!email.classList.contains('article__input--has-error')) {
        email.classList.add('article__input--has-error');
      }
      email.placeholder = 'Please enter correct email';
    }
    if (!subject.value) {
      if (!subject.classList.contains('article__input--has-error')) {
        subject.classList.add('article__input--has-error');
      }
      subject.placeholder = 'Please enter subject';
    }
    if (!message.value) {
      if (!message.classList.contains('article__input--has-error')) {
        message.classList.add('article__input--has-error');
      }
      message.placeholder = 'Please enter your message';
    }
    
    if (name.value && email.value && subject.value && message.value) {
      if (!popup.classList.contains('popup--is-visible')) {
        popup.classList.add('popup--is-visible');
      }
    }
    
  });
  
  name.addEventListener('focus', function () {
    if (name.classList.contains('article__input--has-error')) {
      name.classList.remove('article__input--has-error');
    }
    name.placeholder = 'Name';
  });
  email.addEventListener('focus', function () {
    if (email.classList.contains('article__input--has-error')) {
      email.classList.remove('article__input--has-error');
    }
    email.placeholder = 'Email';
  });
  subject.addEventListener('focus', function () {
    if (subject.classList.contains('article__input--has-error')) {
      subject.classList.remove('article__input--has-error');
    }
    subject.placeholder = 'Subject';
  });
  message.addEventListener('focus', function () {
    if (message.classList.contains('article__input--has-error')) {
      message.classList.remove('article__input--has-error');
    }
    message.placeholder = 'Quick message';
  });
  console.log(popup);
  popup.addEventListener('click', function () {
    if (popup.classList.contains('popup--is-visible')) {
      popup.classList.remove('popup--is-visible');
    }
  });
  okButton.addEventListener('click', function () {
    if (popup.classList.contains('popup--is-visible')) {
      popup.classList.remove('popup--is-visible');
    }
  });
}

window.addEventListener("DOMContentLoaded", init);