for (let index = 0; index <= 10; index++){
    console.log(index + " * 5 =  " + index * 5)
}


let frutass = "pera,manzana,mango,melon,coco,mate";
let frutas = frutass.split(",");
console.log(frutas)

for (let j = 0; j < frutas.length; j++) {
    console.log("la fruta",j, "posicion : ", frutas[j] );
}

for (let index = 0; index <= 10; index++){
    console.log(index + " * 1 =  " + index * 1,"     ", index + " * 2 =  " + index * 2, "       ", index + " * 3 =  " + index * 3,"     ",
     index + " * 4 =  " + index * 4, "        ", index + " * 5 =  " + index * 5,"     ", index + " * 6 =  " + index * 6, "       ", index + " * 7 =  " + index * 7,"     ")
}

//codigo de chat gpt //codigo de chat gpt //codigo de chat gpt //codigo de chat gpt

// Definimos la cantidad de columnas deseadas
const columnas = 5;

// Calculamos la cantidad de tablas por columna
const tablasPorColumna = Math.ceil(10 / columnas);

// Recorremos las columnas
for (let columna = 0; columna < columnas; columna++) {
  console.log(`Columna ${columna + 1}:`);

  // Recorremos las tablas de la columna actual
  for (let i = columna * tablasPorColumna + 1; i <= (columna + 1) * tablasPorColumna && i <= 10; i++) {
    console.log(`Tabla del ${i}:`);

    // Recorremos los multiplicadores del 1 al 10 para cada tabla
    for (let j = 1; j <= 10; j++) {
      // Calculamos el producto
      let producto = i * j;

      // Mostramos la multiplicación de forma descriptiva
      console.log(`${i} x ${j} = ${producto}`);
    }

    // Agregamos una línea en blanco para separar las tablas
    console.log();
  }

  // Agregamos una línea en blanco para separar las columnas
  console.log();
}

 //codigo de numero primo


  