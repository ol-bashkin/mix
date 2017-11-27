/*
function postStuff(inputs, popup) {
  "use strict";
  // Create our XMLHttpRequest object
  var hr = new XMLHttpRequest(),
  // Create some variables we need to send to our PHP file
    url = "../../../_assets/php/ajax.php",
    vars = 'name' + inputs[0].value;
  hr.open("POST", url, true);
  hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  // Access the onreadystatechange event for the XMLHttpRequest object
  hr.onreadystatechange = function () {
    if (hr.readyState === 4 && hr.status === 200) {
      if (!popup.classList.contains('popup--is-visible')) {
        popup.classList.add('popup--is-visible');
      }
    }
  };
  // Send the data to PHP now... and wait for response to update the status div
  hr.send(vars); // Actually execute the request
}
*/
function init() {
  "use strict";
  var inputs = document.getElementsByClassName('js-input'),
    submit = document.getElementsByClassName('js-button')[0],
    popup = document.getElementsByClassName('js-popup')[0],
    okButton = document.getElementsByClassName('js-ok')[0];
  
  Array.prototype.forEach.call(inputs, function (input) {
    input.addEventListener('invalid', function (event) {
      if (!event.target.classList.contains('article__input--has-error')) {
        event.target.classList.add('article__input--has-error');
      }
      event.target.placeholder = 'Enter correct ' + event.target.placeholder;
    });
    input.addEventListener('focus', function (event) {
      if (event.target.classList.contains('article__input--has-error')) {
        event.target.classList.remove('article__input--has-error');
      }
      event.target.placeholder = event.target.placeholder.replace('Enter correct ', '');
    });
  });
  /*
  submit.addEventListener('click', function () {
    var result = [],
      valid = false;
    Array.prototype.forEach.call(inputs, function (input) {
      result.push(input.checkValidity());
    });
    valid = result.reduce(function (previus, current) {
      return previus && current;
    });
    if (valid) {
      postStuff(inputs, popup);
    }
  });
 */
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