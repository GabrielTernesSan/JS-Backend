//var

//var altura = 5;
//var comprimento = 7;

//area = altura * comprimento; // funciona | node decalrou
//console.log(area)
//var area; // hoisting

let forma = 'retângulo';
let altura = 5;
let comprimento = 7;
let area;

if(forma === 'retângulo'){
    area = altura * comprimento;
} else{
    area = altura * comprimento / 2;
}

console.log(area);