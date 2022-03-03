const forma = 'Quadrado';
const altura = 5;
const comprimento = 7;

let area;

// const area; SyntaxError: Missing initializer in const declaration

if(forma === 'Quadrado'){
    area = altura * comprimento;
}else{
    area = altura * comprimento / 2;
}

console.log(area);