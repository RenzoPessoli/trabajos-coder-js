let numeroUno;
let numeroDos;

for (a = 0; a <= 5; a++) {
  
  if (a == 1) {
    pedirNumeros()
    console.log(`El resultado de la primera operación es ${sumar(numeroUno, numeroDos)}`);
  }
  else if (a == 2) {
    pedirNumeros()
    console.log(`El resultado de la segunda operación es ${sumar(numeroUno, numeroDos)}`);
  }
  else if (a == 3) {
    pedirNumeros()
    console.log(`El resultado de la tercera operación es ${sumar(numeroUno, numeroDos)}`);
  }
  else if (a == 4) {
    pedirNumeros()
    console.log(`El resultado de la cuarta operación es ${sumar(numeroUno, numeroDos)}`);
  }
  else if (a == 5) {
    pedirNumeros()
    console.log(`El resultado de la quinta operación es ${sumar(numeroUno, numeroDos)}`);
  }
}

function pedirNumeros(){
    numeroUno = parseInt(prompt("Ingrese un número"));
    numeroDos = parseInt(prompt("Ingrese el segundo número"));  
};

function sumar(numeroUno, numeroDos) {
  return numeroUno + numeroDos
}


/*
let numeroUno;
let numeroDos;

while(numeroUno || numeroDos == undefined){
  numeroUno = prompt("ingrese numero uno");
  numeroDos = prompt("ingrese numero dos");

  console.log(`La suma de los dos números es ${sumar(numeroUno, numeroDos)}`)
}

function sumar(numeroUno, numeroDos) {
  return parseInt(numeroUno) + parseInt(numeroDos)
}
*/