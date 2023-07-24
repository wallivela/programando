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
    (value) => value.usuario === usuario && value.clave === clave
  );

  if (recorrer) {
    localStorage.setItem("usuarioActual", JSON.stringify(recorrer));

    if (recorrer.usuario === "Persona 1") {
      window.location.href = "transacciones.html";
    } else if (recorrer.usuario === "Persona 2") {
      window.location.href = "transacciones2.html";
    } else if (recorrer.usuario === "Persona 3") {
      window.location.href = "transacciones3.html";
    } else {
      alert("Usuario no válido.");
    }
  } else {
    alert("Credenciales inválidas. Por favor, inténtalo nuevamente.");
  }
});
