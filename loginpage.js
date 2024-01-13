
 function validatePassword() {
      var passwordInput = document.getElementById('password');
      var passwordError = document.getElementById('passwordError');
      var password = passwordInput.value;
      if (password.length <= 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
      } else {
        passwordError.textContent = '';
      }
    }

    function authenticateUser() {
      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      if (username && password.length >= 6) {
        alert('Login successful! Welcome, ' + username + '!');
        window.location.href ='link.html';
      } else {
        alert('Please enter valid username and password.');
        alert('Note: the password must contain atleast 6 characters');
      }
    }
