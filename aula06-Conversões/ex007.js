// tipo de dados
// booleanos

// conversão implícita
let numero = 456;
let numeroString = '456';

console.log(numero === numeroString); // false
console.log(numero == numeroString); // converteu "numero" para String → true
console.log(numero + numeroString); // converteu "numero" para String e concatenou

// conversão explícita

//Number
//String
console.log(numero + Number(numeroString)); // converteu "numeroString" para Number e somou

console.log(typeof String(numero))