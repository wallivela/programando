function obtenerIdPagina() {
  const path = window.location.pathname;
  const pagina = path.split("/").pop().split(".")[0];
  return pagina;
}

function obtenerSaldoActual() {
  const saldoActualEl = document.getElementById("saldo-actual");
  const paginaId = obtenerIdPagina();
  const saldo = localStorage.getItem(`saldo-${paginaId}`);

  if (saldo) {
    saldoActualEl.innerText = `$${saldo}`;
  } else {
    saldoActualEl.innerText = "$500,000";
    actualizarSaldo(500000);
  }
}

function actualizarSaldo(saldo) {
  const paginaId = obtenerIdPagina();
  localStorage.setItem(`saldo-${paginaId}`, saldo);
  console.log("Saldo actualizado correctamente");
}

function sacarDinero(monto) {
  const saldoActualEl = document.getElementById("saldo-actual");
  const saldoActual = parseInt(saldoActualEl.innerText.replace("$", ""));

  if (monto <= saldoActual) {
    const nuevoSaldo = saldoActual - monto;
    saldoActualEl.innerText = `$${nuevoSaldo}`;
    actualizarSaldo(nuevoSaldo);
    console.log(`Has retirado $${monto}. Saldo actual: $${nuevoSaldo}`);
  } else {
    console.log("Saldo insuficiente");
  }
}

function consignarDinero(monto) {
  const saldoActualEl = document.getElementById("saldo-actual");
  const saldoActual = parseInt(saldoActualEl.innerText.replace("$", ""));
  const nuevoSaldo = saldoActual + monto;
  saldoActualEl.innerText = `$${nuevoSaldo}`;
  actualizarSaldo(nuevoSaldo);
  console.log(`Has consignado $${monto}. Saldo actual: $${nuevoSaldo}`);
}

const retirarBtn = document.getElementById("retirar-btn");
const consignarBtn = document.getElementById("consignar-btn");

retirarBtn.addEventListener("click", function () {
  const monto = parseInt(document.getElementById("retirar-input").value);

  if (monto > 0) {
    sacarDinero(monto);
  }
});

consignarBtn.addEventListener("click", function () {
  const monto = parseInt(document.getElementById("consignar-input").value);

  if (monto > 0) {
    consignarDinero(monto);
  }
});

obtenerSaldoActual();
