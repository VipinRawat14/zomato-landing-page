
const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const username1 = document.getElementById('username1').value;
  const password1 = document.getElementById('password1').value;

 
  if (username1 !== '' && password1 !== '') {
    alert("Welcome back " + username1 );
    window.location.href = 'index.html';
  } else {
    alert('Incorrect username or password');
  }
});
