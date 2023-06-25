 document.addEventListener('DOMContentLoaded', function() {
      var message = document.createElement('p');
      message.textContent = 'DOM load success';
      document.body.appendChild(message);
    });