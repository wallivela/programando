document.getElementById("verificar-btn").addEventListener("click", function() {
    var respuestaInput = document.getElementById("respuesta-input").value;
    var ejercicio = document.getElementById("ejercicio1");
  
    if (respuestaInput === "si") {

      ejercicio.innerHTML = "¡Esto es verdadero!, Vamos adelante!!!";
    } else if (respuestaInput === "no") {
    
      ejercicio.innerHTML = "¡Esto es falso!, no solo la belleza se puede ver";
    } else {
   
      ejercicio.innerHTML = "Respuesta inválida. Por favor, ingresa 'si' o 'no'.";
    }
  });
  
  document.getElementById("restboton2").addEventListener("click", function() {
    var ress2 = document.getElementById("res2").value;
    var restboo2 = document.getElementById("ejercicio2");
  
    if (ress2 % 2 === 0) {
      restboo2.innerHTML = "Es divisible por dos";
    } else if (isNaN(ress2)) {
      restboo2.innerHTML = "No ingresó un valor numérico";
    } else {
      restboo2.innerHTML = "No es divisible por dos";
    }
  });

  