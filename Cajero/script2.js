// Función para obtener el saldo actual almacenado en el Local Storage y mostrarlo en la página
function obtenerSaldoActual() {
  const saldoActualEl = document.getElementById("saldo-actual"); // Obtiene el elemento del DOM con el id "saldo-actual"
  const saldo = localStorage.getItem("saldo"); // Obtiene el saldo almacenado en el Local Storage

  if (saldo) {
    saldoActualEl.innerText = `$${saldo}`; // Actualiza el texto del elemento con el saldo obtenido del Local Storage
  } else {
    saldoActualEl.innerText = "$500,000"; // Establece un saldo predeterminado si no hay ningún valor en el Local Storage
  }
}

// Función para actualizar el saldo en el Local Storage
function actualizarSaldo(saldo) {
  localStorage.setItem("saldo", saldo); // Almacena el saldo en el Local Storage bajo la clave 'saldo'
  console.log("Saldo actualizado correctamente");
}
// Función para realizar la operación de sacar dinero
function sacarDinero(monto) {
  const saldoActualEl = document.getElementById("saldo-actual"); // Obtiene el elemento del DOM con el id "saldo-actual"
  const saldoActual = parseInt(saldoActualEl.innerText.replace("$", "")); // Obtiene el saldo actual parseando el texto del elemento
//condicional para sacar

  if (monto <= saldoActual) {
    const nuevoSaldo = saldoActual - monto; // Calcula el nuevo saldo restando el monto a sacar
    saldoActualEl.innerText = `$${nuevoSaldo}`; // Actualiza el texto del elemento con el nuevo saldo
    actualizarSaldo(nuevoSaldo); // Actualiza el saldo en el Local Storage
    console.log(`Has retirado $${monto}. Saldo actual: $${nuevoSaldo}`);
  } else {
    console.log("Saldo insuficiente");
  }
}
// Función para realizar la operación de consignar dinero
function consignarDinero(monto) {
  const saldoActualEl = document.getElementById("saldo-actual"); // Obtiene el elemento del DOM con el id "saldo-actual"
  const saldoActual = parseInt(saldoActualEl.innerText.replace("$", "")); // Obtiene el saldo actual parseando el texto del elemento
//bloque con problemas

  const nuevoSaldo = saldoActual + monto; // Calcula el nuevo saldo sumando el monto a consignar
  saldoActualEl.innerText = `$${nuevoSaldo}`; // Actualiza el texto del elemento con el nuevo saldo
  actualizarSaldo(nuevoSaldo); // Actualiza el saldo en el Local Storage
  console.log(`Has consignado $${monto}. Saldo actual: $${nuevoSaldo}`);
}
// Variables globales
const retirarBtn = document.getElementById("retirar-btn"); // Obtiene el elemento del DOM con el id "retirar-btn"
const consignarBtn = document.getElementById("consignar-btn"); // Obtiene el elemento del DOM con el id "consignar-btn"

// Asigna los listeners de eventos a los botones

retirarBtn.addEventListener("click", function () {
  const monto = parseInt(document.getElementById("retirar-input").value); // Obtiene el monto ingresado por el usuario en el campo de texto "retirar-input"

  if (monto > 0) {
    sacarDinero(monto); // Llama a la función sacarDinero con el monto ingresado como argumento si es mayor que cero
  }
});

consignarBtn.addEventListener("click", function () {
  const monto = parseInt(document.getElementById("consignar-input").value); // Obtiene el monto ingresado por el usuario en el campo de texto "consignar-input"

  if (monto > 0) {
    consignarDinero(monto); // Llama a la función consignarDinero con el monto ingresado como argumento si es mayor que cero
  }
});

// Al cargar la página, se obtiene el saldo actual almacenado en el Local Storage y se muestra en la página

obtenerSaldoActual();
