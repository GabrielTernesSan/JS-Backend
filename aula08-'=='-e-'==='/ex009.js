// == (comparação implícita)

const numero = 3;
const texto = "3";

console.log(numero == texto)

// ===
// Compara tipos também
console.log(typeof numero)
console.log(typeof texto)
console.log(numero === texto) // Number != String

// Boas práticas:
// Utilizar os ===
// Fazer conversões explícitas
Number();
String();