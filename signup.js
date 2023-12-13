
const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  username = document.getElementById('username').value;
  password = document.getElementById('password').value;

  if (username !== '' && password !== '') {
    alert('Signup successful! Redirecting to index.html');
    window.location.href = 'index.html';
  } else {
    alert('Please provide both username and password.');
  }
});
