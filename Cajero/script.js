const loginForm = document.getElementById('login-form');
//contante
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
//logearse
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
//co para dar ingreso
  if (username === 'admin' && password === '123456') {
    // Inicio de sesión exitoso
    window.location.href = 'transacciones.html';
  } else {
    alert('Credenciales inválidas. Por favor, inténtalo nuevamente.');
  }
});