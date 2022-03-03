function apresentar(nome){
    return `Olá ${nome}`;
}

// Arrow Function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de 1 linha de instrução

const somaNumerosPequenos = (num1, num2) => {
    if((num1 || num2) > 10){
        return num1 + num2;
    } else{
        return num1 - num2;
    }
}

console.log(somaNumerosPequenos(10, 12))