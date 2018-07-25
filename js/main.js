var form = document.getElementById('form')
var nameInput = document.getElementById('name');
var phoneInput = document.getElementById('phone');
var emailInput = document.getElementById('email');
var nameInput = document.getElementById('name');
var messageInput = document.getElementById('message');
var submit = document.getElementById('submit');
var reset = document.getElementById('reset');

(function() {
  var submitted = false;
  submit.disabled = true;
  submit.className = 'button--disabled';

  addEvent(nameInput, 'input', function (e) {
    console.log('hello');
  });

})();
