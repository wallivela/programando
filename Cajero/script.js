const loginForm = document.getElementById("login-form");

const cuentas = [
  {
    usuario: "Persona 1",
    clave: "Mali",
    saldo: 200,
  },

  {
    usuario: "Persona 2",
    clave: "Gera",
    saldo: 290,
  },

  {
    usuario: "Persona 3",
    clave: "Maui",
    saldo: 67,
  },
];

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  //logearse
  var usuario = document.getElementById("usuario").value;
  var clave = document.getElementById("clave").value;
  var recorrer = cuentas.find(
  (value) => value.usuario === usuario && value.clave === clave);


  //co para dar ingreso
  if (recorrer) {
    // Inicio de sesión exitoso
    localStorage.setItem(recorrer, JSON.stringify(recorrer));
    window.location.href = "transacciones.html";
  } else {
    alert("Credenciales inválidas. Por favor, inténtalo nuevamente.");
  }
});
