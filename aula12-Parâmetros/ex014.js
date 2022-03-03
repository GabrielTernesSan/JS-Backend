// Parâmetros de função

function soma(num1, num2){
    return num1 + num2;
}

console.log(soma(5, 4))
console.log(soma(25, 4))
console.log(soma(5, 34))

// Parâmetros x argumentos → iguais

// Ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade("Gabriel", 21)) // Meu nome é Gabriel e minha idade é 21
console.log(nomeIdade(21, "Gabriel")) // Meu nome é 21 e minha idade é Gabriel

// Valor padrão, caso dê algum erro ou falte parâmetro
function multiplica(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplica(soma(4 ,5), 2)) // 18
