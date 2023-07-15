console.log("hola ya corre");

let carro = prompt("Ingrese el numero par");

if (carro % 2 === 0) {
    console.log("es correcto")
}

var bebida = prompt("que bebidad desea?");


if (bebida === "vino") {
    
}

var verduras = ["cebolla", "perejil", "tomate", "calabaza", "brocoli"];
console.log

verduras.forEach(objeto => {
    console.log(objeto);
  });


  /*clase adrian*/

  var frutas = ['Peras','Manzanas','Uvas']
frutas.shift();
frutas.unshift('Mangos')
console.log(frutas)

var frutas_string = "Peras Manzanas Uvas Mangos Cerezas"
var array_construido = frutas_string.split(' ')
array_construido.push("Melon")
console.log(array_construido)

console.log(array_construido.slice(-3))

array_construido.splice(3,0,"Hola","Adios")

console.log(array_construido)

console.log(array_construido.sort())

var numeros = [2,8,1,5,8,3,2,4]

console.log(numeros.sort())

console.log(array_construido.reverse())

var concatenado = numeros.concat(array_construido)

console.log(concatenado)





var arrreglo = [];
isNaN